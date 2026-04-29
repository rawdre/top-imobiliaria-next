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
    suites: 0,
    has_dce: false,
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
    suites: Number(rawMeta.suites || 0),
    has_dce: Boolean(rawMeta.has_dce),
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
