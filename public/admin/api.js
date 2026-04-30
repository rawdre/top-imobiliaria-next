const SUPABASE_CONFIG = window.TOP_IMOBILIARIA_SUPABASE || {};
const SUPABASE_URL = SUPABASE_CONFIG.url || 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = SUPABASE_CONFIG.anonKey || 'YOUR_SUPABASE_ANON_KEY';
const PROPERTY_IMAGE_BUCKET = SUPABASE_CONFIG.propertyImageBucket || 'property-images';
const PROPERTY_META_PREFIX = 'property-meta';

let supabaseClient = null;

function ensureConfigured() {
  if (!window.supabase) {
    throw new Error('Biblioteca do Supabase não carregada.');
  }

  if (
    !SUPABASE_URL ||
    !SUPABASE_ANON_KEY ||
    SUPABASE_URL === 'YOUR_SUPABASE_URL' ||
    SUPABASE_ANON_KEY === 'YOUR_SUPABASE_ANON_KEY'
  ) {
    throw new Error('Configure o arquivo assets/top-imobiliaria/supabase-config.js com a URL e a anon key do Supabase.');
  }
}

function getSupabaseClient() {
  if (supabaseClient) return supabaseClient;
  ensureConfigured();
  supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  return supabaseClient;
}

async function getSession() {
  const client = getSupabaseClient();
  const { data, error } = await client.auth.getSession();
  if (error) throw error;
  return data.session;
}

async function requireSession() {
  const session = await getSession();
  if (!session) {
    window.location.href = './index.html';
    throw new Error('Sessão não encontrada.');
  }
  return session;
}

async function signIn(email, password) {
  const client = getSupabaseClient();
  const { data, error } = await client.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
}

async function signOut() {
  const client = getSupabaseClient();
  const { error } = await client.auth.signOut();
  if (error) throw error;
}

async function fetchDashboardCounts() {
  const client = getSupabaseClient();
  const { data, error } = await client
    .from('properties')
    .select('id, listing_type, is_active, is_featured', { count: 'exact' });

  if (error) throw error;

  const items = data || [];
  return {
    total: items.length,
    active: items.filter((item) => item.is_active).length,
    featured: items.filter((item) => item.is_featured).length,
    rent: items.filter((item) => item.listing_type === 'aluguel').length,
    sale: items.filter((item) => item.listing_type === 'venda').length,
  };
}

async function fetchRecentProperties(limit = 8) {
  const client = getSupabaseClient();
  const { data, error } = await client
    .from('properties')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(limit);

  if (error) throw error;
  return data || [];
}

async function fetchProperties(filters = {}) {
  const client = getSupabaseClient();
  let query = client
    .from('properties')
    .select('*')
    .order('created_at', { ascending: false });

  if (filters.search) {
    const search = filters.search.trim();
    query = query.or([
      `title.ilike.%${search}%`,
      `address.ilike.%${search}%`,
      `neighborhood.ilike.%${search}%`,
      `condominium_name.ilike.%${search}%`,
    ].join(','));
  }

  if (filters.listingType) {
    query = query.eq('listing_type', filters.listingType);
  }

  if (filters.status === 'active') {
    query = query.eq('is_active', true);
  } else if (filters.status === 'inactive') {
    query = query.eq('is_active', false);
  }

  const { data, error } = await query;
  if (error) throw error;
  const items = data || [];
  const metadataMap = await fetchPropertyMetas(items);
  const enriched = items.map((item) => ({
    ...item,
    property_meta: metadataMap[item.id] || defaultPropertyMeta(item),
  }));

  if (['ativo', 'vendido', 'suspenso', 'inativo'].includes(filters.status)) {
    return enriched.filter((item) => item.property_meta.property_status === filters.status);
  }

  return enriched;
}

async function fetchPropertyById(id) {
  const client = getSupabaseClient();
  const { data, error } = await client
    .from('properties')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw error;
  return data;
}

function getPropertyMetaPath(id) {
  return `${PROPERTY_META_PREFIX}/${id}.json`;
}

function defaultPropertyMeta(property = {}) {
  return {
    property_status: property.is_active === false ? 'inativo' : 'ativo',
    property_subtype: '',
    owner_name: '',
    search_code: '',
    postal_code: '',
    country: 'Brasil',
    state: 'DF',
    city: '',
    address_number: '',
    complement: '',
    building_name: '',
    reference_point: '',
    show_complement: false,
    show_reference: false,
    agio: 0,
    saldo_devedor: 0,
    iptu: 0,
    show_agio: 'nao-informar',
    accepts_financing: 'nao-informar',
    accepts_fgts: 'nao-informar',
    suites: 0,
    dce: 0,
    elevator: 0,
    floor: '',
    total_floors: '',
    units_per_floor: '',
    total_area: 0,
    land_area: 0,
    property_position: 'nao-informar',
    solar_position: 'nao-informar',
    differential: '',
    youtube_url: '',
    property_age: 0,
    video_360_url: '',
    amenities: [],
  };
}

function normalizePropertyMeta(rawMeta = {}, property = {}) {
  const fallback = defaultPropertyMeta(property);
  const propertyStatus = ['ativo', 'vendido', 'suspenso', 'inativo'].includes(rawMeta.property_status)
    ? rawMeta.property_status
    : fallback.property_status;

  return {
    property_status: propertyStatus,
    property_subtype: String(rawMeta.property_subtype || fallback.property_subtype || '').trim(),
    owner_name: String(rawMeta.owner_name || fallback.owner_name || '').trim(),
    search_code: String(rawMeta.search_code || fallback.search_code || '').trim(),
    postal_code: String(rawMeta.postal_code || fallback.postal_code || '').trim(),
    country: String(rawMeta.country || fallback.country || 'Brasil').trim(),
    state: String(rawMeta.state || fallback.state || 'DF').trim(),
    city: String(rawMeta.city || fallback.city || '').trim(),
    address_number: String(rawMeta.address_number || fallback.address_number || '').trim(),
    complement: String(rawMeta.complement || fallback.complement || '').trim(),
    building_name: String(rawMeta.building_name || fallback.building_name || '').trim(),
    reference_point: String(rawMeta.reference_point || fallback.reference_point || '').trim(),
    show_complement: Boolean(rawMeta.show_complement),
    show_reference: Boolean(rawMeta.show_reference),
    agio: Number(rawMeta.agio || 0),
    saldo_devedor: Number(rawMeta.saldo_devedor || 0),
    iptu: Number(rawMeta.iptu || 0),
    show_agio: ['sim', 'nao', 'nao-informar'].includes(rawMeta.show_agio)
      ? rawMeta.show_agio
      : fallback.show_agio,
    accepts_financing: ['sim', 'nao', 'nao-informar'].includes(rawMeta.accepts_financing)
      ? rawMeta.accepts_financing
      : fallback.accepts_financing,
    accepts_fgts: ['sim', 'nao', 'nao-informar'].includes(rawMeta.accepts_fgts)
      ? rawMeta.accepts_fgts
      : fallback.accepts_fgts,
    suites: Number(rawMeta.suites || 0),
    dce: Number(rawMeta.dce || 0),
    elevator: Number(rawMeta.elevator || 0),
    floor: String(rawMeta.floor || fallback.floor || '').trim(),
    total_floors: String(rawMeta.total_floors || fallback.total_floors || '').trim(),
    units_per_floor: String(rawMeta.units_per_floor || fallback.units_per_floor || '').trim(),
    total_area: Number(rawMeta.total_area || 0),
    land_area: Number(rawMeta.land_area || 0),
    property_position: ['nao-informar', 'frente', 'fundos', 'vazado', 'lateral'].includes(rawMeta.property_position)
      ? rawMeta.property_position
      : fallback.property_position,
    solar_position: ['nao-informar', 'nascente', 'poente', 'perpendicular'].includes(rawMeta.solar_position)
      ? rawMeta.solar_position
      : fallback.solar_position,
    differential: String(rawMeta.differential || fallback.differential || '').trim(),
    youtube_url: String(rawMeta.youtube_url || fallback.youtube_url || '').trim(),
    property_age: Number(rawMeta.property_age || 0),
    video_360_url: String(rawMeta.video_360_url || fallback.video_360_url || '').trim(),
    amenities: Array.isArray(rawMeta.amenities)
      ? rawMeta.amenities.map((item) => String(item).trim()).filter(Boolean)
      : [],
  };
}

function getPropertyMetaPublicUrl(id) {
  const client = getSupabaseClient();
  const { data } = client.storage
    .from(PROPERTY_IMAGE_BUCKET)
    .getPublicUrl(getPropertyMetaPath(id));
  return data.publicUrl;
}

async function fetchPropertyMeta(id, property = {}) {
  const fallback = defaultPropertyMeta(property);

  try {
    const response = await fetch(`${getPropertyMetaPublicUrl(id)}?t=${Date.now()}`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      return fallback;
    }

    const data = await response.json();
    return normalizePropertyMeta(data, property);
  } catch {
    return fallback;
  }
}

async function fetchPropertyMetas(properties = []) {
  const entries = await Promise.all(
    (properties || []).map(async (property) => ([
      property.id,
      await fetchPropertyMeta(property.id, property),
    ])),
  );

  return Object.fromEntries(entries);
}

async function savePropertyMeta(id, metaPayload, property = {}) {
  const client = getSupabaseClient();
  const normalized = normalizePropertyMeta(metaPayload, property);
  const blob = new File(
    [JSON.stringify(normalized, null, 2)],
    `${id}.json`,
    { type: 'application/json' },
  );

  const { error } = await client.storage
    .from(PROPERTY_IMAGE_BUCKET)
    .upload(getPropertyMetaPath(id), blob, {
      upsert: true,
      contentType: 'application/json',
    });

  if (error) throw error;
  return normalized;
}

async function uploadPropertyImages(files) {
  if (!files || !files.length) return [];

  const client = getSupabaseClient();
  const uploads = [];

  for (const file of files) {
    const extension = file.name.split('.').pop()?.toLowerCase() || 'jpg';
    const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${extension}`;
    const filePath = `properties/${fileName}`;

    const { error } = await client.storage
      .from(PROPERTY_IMAGE_BUCKET)
      .upload(filePath, file, { upsert: false });

    if (error) throw error;

    const { data } = client.storage
      .from(PROPERTY_IMAGE_BUCKET)
      .getPublicUrl(filePath);

    uploads.push({
      name: file.name,
      path: filePath,
      url: data.publicUrl,
    });
  }

  return uploads;
}

function normalizePropertyPayload(rawPayload) {
  return {
    title: rawPayload.title?.trim() || '',
    property_type: rawPayload.property_type || 'apartamento',
    listing_type: rawPayload.listing_type || 'aluguel',
    price: Number(rawPayload.price || 0),
    gross_price: Number(rawPayload.gross_price || 0),
    punctuality_discount: Number(rawPayload.punctuality_discount || 0),
    condo_fee: Number(rawPayload.condo_fee || 0),
    water_notes: rawPayload.water_notes?.trim() || null,
    area_m2: Number(rawPayload.area_m2 || 0),
    bedrooms: Number(rawPayload.bedrooms || 0),
    bathrooms: Number(rawPayload.bathrooms || 0),
    garage_spaces: Number(rawPayload.garage_spaces || 0),
    address: rawPayload.address?.trim() || '',
    neighborhood: rawPayload.neighborhood?.trim() || '',
    condominium_name: rawPayload.condominium_name?.trim() || null,
    description: rawPayload.description?.trim() || null,
    gradient: rawPayload.gradient?.trim() || null,
    gallery: Array.isArray(rawPayload.gallery) ? rawPayload.gallery : [],
    is_active: Boolean(rawPayload.is_active),
    is_featured: Boolean(rawPayload.is_featured),
    updated_at: new Date().toISOString(),
  };
}

async function createProperty(payload) {
  const client = getSupabaseClient();
  const normalized = normalizePropertyPayload(payload);
  const { data, error } = await client
    .from('properties')
    .insert({
      ...normalized,
      created_at: new Date().toISOString(),
    })
    .select()
    .single();

  if (error) throw error;
  return data;
}

async function updateProperty(id, payload) {
  const client = getSupabaseClient();
  const normalized = normalizePropertyPayload(payload);
  const { data, error } = await client
    .from('properties')
    .update(normalized)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

async function deleteProperty(id) {
  const client = getSupabaseClient();
  const property = await fetchPropertyById(id);

  const gallery = Array.isArray(property.gallery) ? property.gallery : [];
  const paths = gallery
    .map((image) => image?.path)
    .filter(Boolean);

  if (paths.length) {
    const { error: storageError } = await client.storage
      .from(PROPERTY_IMAGE_BUCKET)
      .remove(paths);

    if (storageError) {
      console.warn('Falha ao remover imagens do Storage:', storageError.message);
    }
  }

  const { error: metaError } = await client.storage
    .from(PROPERTY_IMAGE_BUCKET)
    .remove([getPropertyMetaPath(id)]);

  if (metaError) {
    console.warn('Falha ao remover metadata do imóvel:', metaError.message);
  }

  const { error } = await client
    .from('properties')
    .delete()
    .eq('id', id);

  if (error) throw error;
}

function formatCurrency(value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
  }).format(Number(value || 0));
}

function formatDate(value) {
  if (!value) return '--';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '--';
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}
