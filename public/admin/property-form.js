function getPropertyIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
}

let galleryState = [];

function getGalleryItemId(prefix = 'gallery') {
  if (window.crypto?.randomUUID) {
    return `${prefix}-${window.crypto.randomUUID()}`;
  }

  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function showFormMessage(message, type = 'error') {
  const box = document.getElementById('formMessage');
  if (!box) return;
  box.textContent = message;
  box.className = `message show ${type}`;
}

function normalizeGalleryItem(image, index = 0) {
  return {
    id: image.id || getGalleryItemId('stored'),
    name: image.name || `imagem-${index + 1}`,
    path: image.path || '',
    url: image.url || '',
    file: image.file || null,
  };
}

function collectGalleryPayload() {
  return galleryState.map(({ name, path, url }) => ({
    name,
    path,
    url,
  })).filter((item) => item.url);
}

function renderGalleryPreview() {
  const container = document.getElementById('galleryPreview');
  if (!container) return;

  if (!galleryState.length) {
    container.innerHTML = '';
    return;
  }

  container.innerHTML = galleryState.map((image, index) => `
    <div class="thumb-item ${index === 0 ? 'is-cover' : ''}" data-id="${escapeHtml(image.id)}">
      <img src="${escapeHtml(image.url)}" alt="Imagem do imóvel ${index + 1}">
      <button type="button" class="thumb-cover-btn" data-action="set-cover" aria-label="Definir como capa">
        ${index === 0 ? 'Capa' : 'Definir capa'}
      </button>
      <button type="button" data-action="remove-image" aria-label="Remover imagem">&times;</button>
    </div>
  `).join('');
}

function setGalleryCover(itemId) {
  const index = galleryState.findIndex((item) => item.id === itemId);
  if (index <= 0) return;
  const [selected] = galleryState.splice(index, 1);
  galleryState.unshift(selected);
  renderGalleryPreview();
}

function removeGalleryItem(itemId) {
  const item = galleryState.find((entry) => entry.id === itemId);
  if (item?.file && item.url.startsWith('blob:')) {
    URL.revokeObjectURL(item.url);
  }

  galleryState = galleryState.filter((entry) => entry.id !== itemId);
  renderGalleryPreview();
}

function getField(name) {
  return document.querySelector(`[name="${name}"]`);
}

function getNumberValue(name, fallback = 0) {
  const field = getField(name);
  if (!field) return fallback;
  const value = Number(field.value || fallback);
  return Number.isFinite(value) ? value : fallback;
}

function getTextValue(name, fallback = '') {
  const field = getField(name);
  return field?.value?.trim() || fallback;
}

function getCheckboxValue(name) {
  return Boolean(getField(name)?.checked);
}

function getRadioValue(name, fallback = 'nao-informar') {
  return document.querySelector(`input[name="${name}"]:checked`)?.value || fallback;
}

function setRadioValue(name, value, fallback = 'nao-informar') {
  const target = document.querySelector(`input[name="${name}"][value="${value}"]`)
    || document.querySelector(`input[name="${name}"][value="${fallback}"]`);
  if (target) {
    target.checked = true;
  }
}

function formatDateTime(value) {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function normalizePostalCode(value) {
  const digits = String(value || '').replace(/\D/g, '').slice(0, 8);
  if (digits.length <= 5) return digits;
  return `${digits.slice(0, 5)}-${digits.slice(5)}`;
}

function collectAmenities() {
  const form = document.getElementById('propertyForm');
  return Array.from(form.querySelectorAll('input[name="amenities"]:checked'))
    .map((input) => input.value.trim())
    .filter(Boolean);
}

function collectPropertyMetaPayload() {
  return {
    property_status: getTextValue('property_status', 'ativo'),
    property_subtype: getTextValue('property_subtype'),
    owner_name: getTextValue('owner_name'),
    search_code: getTextValue('search_code'),
    postal_code: normalizePostalCode(getTextValue('postal_code')),
    country: getTextValue('country', 'Brasil'),
    state: getTextValue('state', 'DF').toUpperCase(),
    city: getTextValue('city'),
    address_number: getTextValue('address_number'),
    complement: getTextValue('complement'),
    building_name: getTextValue('building_name'),
    reference_point: getTextValue('reference_point'),
    show_complement: getCheckboxValue('show_complement'),
    show_reference: getCheckboxValue('show_reference'),
    agio: getNumberValue('agio'),
    saldo_devedor: getNumberValue('saldo_devedor'),
    iptu: getNumberValue('iptu'),
    show_agio: getRadioValue('show_agio'),
    accepts_financing: getRadioValue('accepts_financing'),
    accepts_fgts: getRadioValue('accepts_fgts'),
    suites: getNumberValue('suites'),
    dce: getNumberValue('dce'),
    elevator: getNumberValue('elevator'),
    floor: getTextValue('floor'),
    total_floors: getTextValue('total_floors'),
    units_per_floor: getTextValue('units_per_floor'),
    total_area: getNumberValue('total_area'),
    land_area: getNumberValue('land_area'),
    property_position: getTextValue('property_position', 'nao-informar'),
    solar_position: getTextValue('solar_position', 'nao-informar'),
    differential: getTextValue('differential'),
    youtube_url: getTextValue('youtube_url'),
    property_age: getNumberValue('property_age'),
    video_360_url: getTextValue('video_360_url'),
    amenities: collectAmenities(),
  };
}

function collectFormPayload() {
  const meta = collectPropertyMetaPayload();

  return {
    title: getTextValue('title'),
    property_type: getTextValue('property_type', 'apartamento'),
    listing_type: getTextValue('listing_type', 'aluguel'),
    price: getNumberValue('price'),
    gross_price: getNumberValue('gross_price'),
    punctuality_discount: getNumberValue('punctuality_discount'),
    condo_fee: getNumberValue('condo_fee'),
    water_notes: getTextValue('water_notes'),
    area_m2: getNumberValue('area_m2'),
    bedrooms: getNumberValue('bedrooms'),
    bathrooms: getNumberValue('bathrooms'),
    garage_spaces: getNumberValue('garage_spaces'),
    address: getTextValue('address'),
    neighborhood: getTextValue('neighborhood'),
    condominium_name: getTextValue('condominium_name') || getTextValue('building_name'),
    description: getTextValue('description'),
    gradient: getTextValue('gradient'),
    gallery: collectGalleryPayload(),
    is_active: meta.property_status === 'ativo',
    is_featured: getCheckboxValue('is_featured'),
  };
}

function fillForm(property, meta) {
  const form = document.getElementById('propertyForm');
  const propertyMeta = meta || defaultPropertyMeta(property);

  form.title.value = property.title || '';
  form.property_type.value = property.property_type || 'apartamento';
  form.listing_type.value = property.listing_type || 'aluguel';
  form.price.value = property.price ?? '';
  if (form.gross_price) form.gross_price.value = property.gross_price ?? '';
  if (form.punctuality_discount) form.punctuality_discount.value = property.punctuality_discount ?? '';
  if (form.condo_fee) form.condo_fee.value = property.condo_fee ?? '';
  if (form.water_notes) form.water_notes.value = property.water_notes || '';
  form.area_m2.value = property.area_m2 ?? '';
  form.bedrooms.value = property.bedrooms ?? 0;
  form.bathrooms.value = property.bathrooms ?? 0;
  form.garage_spaces.value = property.garage_spaces ?? 0;
  form.address.value = property.address || '';
  form.neighborhood.value = property.neighborhood || '';
  form.condominium_name.value = property.condominium_name || '';
  form.description.value = property.description || '';
  form.gradient.value = property.gradient || '';
  form.is_featured.checked = Boolean(property.is_featured);

  if (form.property_status) form.property_status.value = propertyMeta.property_status || 'ativo';
  if (form.property_subtype) form.property_subtype.value = propertyMeta.property_subtype || '';
  if (form.owner_name) form.owner_name.value = propertyMeta.owner_name || '';
  if (form.search_code) form.search_code.value = propertyMeta.search_code || '';
  if (form.postal_code) form.postal_code.value = normalizePostalCode(propertyMeta.postal_code || '');
  if (form.country) form.country.value = propertyMeta.country || 'Brasil';
  if (form.state) form.state.value = propertyMeta.state || 'DF';
  if (form.city) form.city.value = propertyMeta.city || '';
  if (form.address_number) form.address_number.value = propertyMeta.address_number || '';
  if (form.complement) form.complement.value = propertyMeta.complement || '';
  if (form.building_name) form.building_name.value = propertyMeta.building_name || '';
  if (form.reference_point) form.reference_point.value = propertyMeta.reference_point || '';
  if (form.show_complement) form.show_complement.checked = Boolean(propertyMeta.show_complement);
  if (form.show_reference) form.show_reference.checked = Boolean(propertyMeta.show_reference);
  if (form.agio) form.agio.value = propertyMeta.agio ?? '';
  if (form.saldo_devedor) form.saldo_devedor.value = propertyMeta.saldo_devedor ?? '';
  if (form.iptu) form.iptu.value = propertyMeta.iptu ?? '';
  if (form.suites) form.suites.value = propertyMeta.suites ?? 0;
  if (form.dce) form.dce.value = propertyMeta.dce ?? 0;
  if (form.elevator) form.elevator.value = propertyMeta.elevator ?? 0;
  if (form.floor) form.floor.value = propertyMeta.floor || '';
  if (form.total_floors) form.total_floors.value = propertyMeta.total_floors || '';
  if (form.units_per_floor) form.units_per_floor.value = propertyMeta.units_per_floor || '';
  if (form.total_area) form.total_area.value = propertyMeta.total_area ?? '';
  if (form.land_area) form.land_area.value = propertyMeta.land_area ?? '';
  if (form.property_position) form.property_position.value = propertyMeta.property_position || 'nao-informar';
  if (form.solar_position) form.solar_position.value = propertyMeta.solar_position || 'nao-informar';
  if (form.differential) form.differential.value = propertyMeta.differential || '';
  if (form.youtube_url) form.youtube_url.value = propertyMeta.youtube_url || '';
  if (form.property_age) form.property_age.value = propertyMeta.property_age ?? 0;
  if (form.video_360_url) form.video_360_url.value = propertyMeta.video_360_url || '';

  setRadioValue('show_agio', propertyMeta.show_agio);
  setRadioValue('accepts_financing', propertyMeta.accepts_financing);
  setRadioValue('accepts_fgts', propertyMeta.accepts_fgts);

  const createdAtDisplay = document.getElementById('created_at_display');
  if (createdAtDisplay) createdAtDisplay.value = formatDateTime(property.created_at);
  const updatedAtDisplay = document.getElementById('updated_at_display');
  if (updatedAtDisplay) updatedAtDisplay.value = formatDateTime(property.updated_at);

  Array.from(form.querySelectorAll('input[name="amenities"]')).forEach((input) => {
    input.checked = propertyMeta.amenities?.includes(input.value) || false;
  });

  galleryState = (Array.isArray(property.gallery) ? property.gallery : [])
    .map((image, index) => normalizeGalleryItem(image, index));
  renderGalleryPreview();
}

async function syncPendingImages() {
  const pendingItems = galleryState.filter((item) => item.file);
  if (!pendingItems.length) return;

  const uploaded = await uploadPropertyImages(pendingItems.map((item) => item.file));
  let uploadIndex = 0;
  galleryState = galleryState.map((item) => {
    if (!item.file) return item;
    const upload = uploaded[uploadIndex++];
    if (item.url.startsWith('blob:')) {
      URL.revokeObjectURL(item.url);
    }
    return normalizeGalleryItem(upload, uploadIndex - 1);
  });
  renderGalleryPreview();
}

async function lookupPostalCode() {
  const postalCodeField = getField('postal_code');
  if (!postalCodeField) return;

  const postalCode = String(postalCodeField.value || '').replace(/\D/g, '');
  if (postalCode.length !== 8) {
    throw new Error('Informe um CEP com 8 dígitos para buscar o endereço.');
  }

  const response = await fetch(`https://viacep.com.br/ws/${postalCode}/json/`);
  if (!response.ok) {
    throw new Error('Não foi possível consultar o CEP agora.');
  }

  const data = await response.json();
  if (data.erro) {
    throw new Error('CEP não encontrado.');
  }

  if (getField('postal_code')) getField('postal_code').value = normalizePostalCode(postalCode);
  if (getField('address') && !getField('address').value.trim()) getField('address').value = data.logradouro || '';
  if (getField('neighborhood') && !getField('neighborhood').value.trim()) getField('neighborhood').value = data.bairro || '';
  if (getField('city') && (!getField('city').value.trim() || getField('city').value === 'Águas Claras')) getField('city').value = data.localidade || '';
  if (getField('state') && !getField('state').value.trim()) getField('state').value = data.uf || 'DF';
  if (getField('country') && !getField('country').value.trim()) getField('country').value = 'Brasil';
}

function generateDescriptionFromForm() {
  const listingType = getTextValue('listing_type', 'aluguel');
  const propertyType = getTextValue('property_type', 'imóvel');
  const title = getTextValue('title');
  const condo = getTextValue('condominium_name') || getTextValue('building_name');
  const neighborhood = getTextValue('neighborhood');
  const city = getTextValue('city');
  const bedrooms = getNumberValue('bedrooms');
  const suites = getNumberValue('suites');
  const bathrooms = getNumberValue('bathrooms');
  const garage = getNumberValue('garage_spaces');
  const area = getNumberValue('area_m2');
  const floor = getTextValue('floor');
  const differential = getTextValue('differential');
  const amenities = collectAmenities().slice(0, 8);
  const descriptionField = getField('description');

  const headline = listingType === 'aluguel' ? 'ALUGUEL' : 'VENDA';
  const lines = [
    title ? `${headline} - ${title.toUpperCase()}` : `${headline} - ${propertyType.toUpperCase()}`,
    '',
  ];

  const summaryBits = [];
  if (bedrooms) summaryBits.push(`${bedrooms} quarto${bedrooms > 1 ? 's' : ''}`);
  if (suites) summaryBits.push(`${suites} suíte${suites > 1 ? 's' : ''}`);
  if (bathrooms) summaryBits.push(`${bathrooms} banheiro${bathrooms > 1 ? 's' : ''}`);
  if (garage) summaryBits.push(`${garage} vaga${garage > 1 ? 's' : ''}`);
  if (area) summaryBits.push(`${area.toLocaleString('pt-BR', { minimumFractionDigits: area % 1 ? 2 : 0, maximumFractionDigits: 2 })} m²`);

  if (summaryBits.length) {
    lines.push(`${propertyType.charAt(0).toUpperCase() + propertyType.slice(1)} com ${summaryBits.join(', ')}.`);
  }

  const locationBits = [condo, neighborhood, city].filter(Boolean);
  if (locationBits.length) {
    lines.push(`Localizado em ${locationBits.join(' - ')}.`);
  }

  if (floor) {
    lines.push(`Imóvel localizado no ${floor}º andar.`);
  }

  if (amenities.length) {
    lines.push(`Destaques: ${amenities.join(', ')}.`);
  }

  if (differential) {
    lines.push(`Diferencial: ${differential}.`);
  }

  lines.push('', 'Entre em contato com a Top Imobiliária para agendar visita ou receber mais informações.');

  if (descriptionField && !descriptionField.value.trim()) {
    descriptionField.value = lines.join('\n').trim();
  } else if (descriptionField) {
    descriptionField.value = `${descriptionField.value.trim()}\n\n${lines.join('\n').trim()}`.trim();
  }
}

function bindFormInteractions() {
  document.querySelectorAll('[data-action="logout"]').forEach((button) => {
    button.addEventListener('click', async () => {
      try {
        await signOut();
      } finally {
        window.location.href = './index.html';
      }
    });
  });

  document.getElementById('galleryPreview')?.addEventListener('click', (event) => {
    const button = event.target.closest('[data-action="remove-image"]');
    if (button) {
      const item = button.closest('.thumb-item');
      if (!item?.dataset.id) return;
      removeGalleryItem(item.dataset.id);
      return;
    }

    const coverButton = event.target.closest('[data-action="set-cover"]');
    if (!coverButton) return;
    const item = coverButton.closest('.thumb-item');
    if (!item?.dataset.id) return;
    setGalleryCover(item.dataset.id);
  });

  document.getElementById('imageFiles')?.addEventListener('change', (event) => {
    const input = event.target;
    const files = Array.from(input.files || []);
    if (!files.length) return;

    const newItems = files.map((file) => normalizeGalleryItem({
      id: getGalleryItemId('pending'),
      name: file.name,
      path: '',
      url: URL.createObjectURL(file),
      file,
    }));

    galleryState = [...galleryState, ...newItems];
    renderGalleryPreview();
    input.value = '';
  });

  const grossField = getField('gross_price');
  const discountField = getField('punctuality_discount');
  const priceField = getField('price');
  const listingTypeField = getField('listing_type');

  function syncNetRent() {
    if (!grossField || !discountField || !priceField) return;
    if (listingTypeField && listingTypeField.value !== 'aluguel') return;
    const gross = Number(grossField.value || 0);
    const discount = Number(discountField.value || 0);
    if (!gross && !discount) return;
    const liquid = Math.max(gross - discount, 0);
    priceField.value = liquid ? liquid.toFixed(2) : '';
  }

  grossField?.addEventListener('input', syncNetRent);
  discountField?.addEventListener('input', syncNetRent);
  listingTypeField?.addEventListener('change', () => {
    if (listingTypeField.value === 'venda') return;
    syncNetRent();
  });

  getField('postal_code')?.addEventListener('input', (event) => {
    event.target.value = normalizePostalCode(event.target.value);
  });

  document.getElementById('lookupPostalCode')?.addEventListener('click', async () => {
    try {
      await lookupPostalCode();
      showFormMessage('CEP consultado com sucesso.', 'success');
    } catch (error) {
      showFormMessage(error.message || 'Falha ao buscar CEP.');
    }
  });

  document.getElementById('generateDescriptionBtn')?.addEventListener('click', () => {
    generateDescriptionFromForm();
    showFormMessage('Descrição base gerada com sucesso.', 'success');
  });
}

async function bootstrapPropertyForm() {
  await requireSession();
  bindFormInteractions();

  const isEditMode = document.body.dataset.mode === 'edit';
  const propertyId = getPropertyIdFromUrl();

  if (isEditMode) {
    if (!propertyId) {
      showFormMessage('ID do imóvel não informado para edição.');
      return;
    }

    try {
      const property = await fetchPropertyById(propertyId);
      const meta = await fetchPropertyMeta(propertyId, property);
      fillForm(property, meta);
    } catch (error) {
      showFormMessage(error.message || 'Não foi possível carregar o imóvel.');
      return;
    }
  } else {
    setRadioValue('show_agio', 'nao-informar');
    setRadioValue('accepts_financing', 'nao-informar');
    setRadioValue('accepts_fgts', 'nao-informar');
  }

  const form = document.getElementById('propertyForm');
  const submitButton = form.querySelector('button[type="submit"]');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    submitButton.disabled = true;
    submitButton.textContent = isEditMode ? 'Salvando...' : 'Criando...';

    try {
      await syncPendingImages();
      const payload = collectFormPayload();
      const metaPayload = collectPropertyMetaPayload();

      if (!payload.title || !payload.address || !payload.neighborhood) {
        throw new Error('Preencha pelo menos título, logradouro e bairro.');
      }

      if (isEditMode) {
        const updated = await updateProperty(propertyId, payload);
        await savePropertyMeta(propertyId, metaPayload, updated);
        showFormMessage('Imóvel atualizado com sucesso.', 'success');
        fillForm(updated, metaPayload);
      } else {
        const created = await createProperty(payload);
        await savePropertyMeta(created.id, metaPayload, created);
        showFormMessage('Imóvel criado com sucesso.', 'success');
        setTimeout(() => {
          window.location.href = `./edit-property.html?id=${encodeURIComponent(created.id)}`;
        }, 800);
      }

      renderGalleryPreview();
    } catch (error) {
      showFormMessage(error.message || 'Falha ao salvar imóvel.');
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = isEditMode ? 'Salvar imóvel' : 'Criar imóvel';
    }
  });
}

document.addEventListener('DOMContentLoaded', bootstrapPropertyForm);
