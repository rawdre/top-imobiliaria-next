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

function collectAmenities() {
  const form = document.getElementById('propertyForm');
  return Array.from(form.querySelectorAll('input[name="amenities"]:checked'))
    .map((input) => input.value.trim())
    .filter(Boolean);
}

function collectPropertyMetaPayload() {
  const form = document.getElementById('propertyForm');
  return {
    property_status: form.querySelector('[name="property_status"]').value || 'ativo',
    suites: Number(form.querySelector('[name="suites"]')?.value || 0),
    has_dce: form.querySelector('[name="has_dce"]').checked,
    amenities: collectAmenities(),
  };
}

function collectFormPayload() {
  const form = document.getElementById('propertyForm');
  const data = new FormData(form);
  const meta = collectPropertyMetaPayload();

  return {
    title: data.get('title'),
    property_type: data.get('property_type'),
    listing_type: data.get('listing_type'),
    price: data.get('price'),
    gross_price: data.get('gross_price'),
    punctuality_discount: data.get('punctuality_discount'),
    condo_fee: data.get('condo_fee'),
    water_notes: data.get('water_notes'),
    area_m2: data.get('area_m2'),
    bedrooms: data.get('bedrooms'),
    bathrooms: data.get('bathrooms'),
    garage_spaces: data.get('garage_spaces'),
    address: data.get('address'),
    neighborhood: data.get('neighborhood'),
    property_status: meta.property_status,
    condominium_name: data.get('condominium_name'),
    description: data.get('description'),
    gradient: data.get('gradient'),
    gallery: collectGalleryPayload(),
    is_active: meta.property_status === 'ativo',
    is_featured: form.querySelector('[name="is_featured"]').checked,
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
  form.property_status.value = propertyMeta.property_status || 'ativo';
  if (form.suites) form.suites.value = propertyMeta.suites ?? 0;
  if (form.has_dce) form.has_dce.checked = Boolean(propertyMeta.has_dce);
  form.condominium_name.value = property.condominium_name || '';
  form.description.value = property.description || '';
  form.gradient.value = property.gradient || '';
  form.is_featured.checked = Boolean(property.is_featured);
  Array.from(form.querySelectorAll('input[name="amenities"]')).forEach((input) => {
    input.checked = propertyMeta.amenities?.includes(input.value) || false;
  });
  galleryState = (Array.isArray(property.gallery) ? property.gallery : []).map((image, index) => normalizeGalleryItem(image, index));
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

  const form = document.getElementById('propertyForm');
  const grossField = form?.querySelector('[name="gross_price"]');
  const discountField = form?.querySelector('[name="punctuality_discount"]');
  const priceField = form?.querySelector('[name="price"]');
  const listingTypeField = form?.querySelector('[name="listing_type"]');

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
        throw new Error('Preencha pelo menos título, endereço e região.');
      }

      if (isEditMode) {
        const updated = await updateProperty(propertyId, payload);
        await savePropertyMeta(propertyId, metaPayload, updated);
        showFormMessage('Imóvel atualizado com sucesso.', 'success');
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
