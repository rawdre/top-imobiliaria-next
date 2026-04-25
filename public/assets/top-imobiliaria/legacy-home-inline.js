// Enable button only when the required fields are filled
function checkFields() {
  const tipo = document.getElementById('simTipo').value;
  const bairro = document.getElementById('simBairro').value;
  const quartos = document.getElementById('simQuartos').value;
  const metros = document.getElementById('simMetros').value;
  const garagem = document.getElementById('simGaragem').value;
  const btn = document.getElementById('btnCalcularAluguel');
  
  if (tipo && bairro && quartos && metros) {
    btn.disabled = false;
    btn.style.opacity = '1';
    btn.style.cursor = 'pointer';
  } else {
    btn.disabled = true;
    btn.style.opacity = '0.7';
    btn.style.cursor = 'not-allowed';
  }
}

// Add event listeners to all fields
document.getElementById('simTipo').addEventListener('change', checkFields);
document.getElementById('simBairro').addEventListener('change', checkFields);
document.getElementById('simQuartos').addEventListener('change', checkFields);
document.getElementById('simMetros').addEventListener('input', checkFields);
document.getElementById('simGaragem').addEventListener('change', checkFields);

// Initialize button state
checkFields();

// Enable button only when fields are filled
function checkFieldsVenda() {
  const tipo = document.getElementById('simTipoVenda').value;
  const bairro = document.getElementById('simBairroVenda').value;
  const quartos = document.getElementById('simQuartosVenda').value;
  const metros = document.getElementById('simMetrosVenda').value;
  const btn = document.getElementById('btnCalcularVenda');
  
  if (tipo && bairro && quartos && metros) {
    btn.disabled = false;
    btn.style.opacity = '1';
    btn.style.cursor = 'pointer';
  } else {
    btn.disabled = true;
    btn.style.opacity = '0.7';
    btn.style.cursor = 'not-allowed';
  }
}

// Add event listeners
document.getElementById('simTipoVenda').addEventListener('change', checkFieldsVenda);
document.getElementById('simBairroVenda').addEventListener('change', checkFieldsVenda);
document.getElementById('simQuartosVenda').addEventListener('change', checkFieldsVenda);
document.getElementById('simMetrosVenda').addEventListener('input', checkFieldsVenda);
document.getElementById('simGaragemVenda')?.addEventListener('change', checkFieldsVenda);

// Initialize
checkFieldsVenda();

// Supabase config - shared with the admin panel
const SUPABASE_CONFIG = window.TOP_IMOBILIARIA_SUPABASE || {};
const SUPABASE_URL = SUPABASE_CONFIG.url || 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = SUPABASE_CONFIG.anonKey || 'YOUR_SUPABASE_ANON_KEY';
let db = null;
try {
  if (window.supabase && SUPABASE_URL !== 'YOUR_SUPABASE_URL') {
    db = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
} catch(e) { console.warn('Supabase not configured, using sample data'); }

// Sample properties for fallback when Supabase isn't configured
const sampleProperties = [
  {
    id: 'max-home-mall-1q-locacao',
    title: 'Apartamento 1 quarto com lazer completo - Max Home e Mall',
    property_type: 'apartamento',
    listing_type: 'aluguel',
    price: 2100,
    gross_price: 2310,
    punctuality_discount: 210,
    condo_fee: 729.51,
    water_notes: 'Água rateada',
    area_m2: 0,
    bedrooms: 1,
    bathrooms: 1,
    garage_spaces: 1,
    address: 'Rua 07 Norte, Águas Claras - DF',
    neighborhood: 'Águas Claras',
    condominium_name: 'Ed. Max Home e Mall',
    is_featured: true,
    gradient: 'linear-gradient(135deg,#C7B299 0%,#9F7E69 45%,#556270 100%)',
    description: 'Excelente apartamento de 1 quarto com sala, banheiro social, cozinha americana, área de serviço, 1 vaga de garagem coberta e vista livre. O imóvel conta com armários planejados em todos os ambientes e o prédio oferece lazer completo com piscina aquecida, sauna, academia, churrasqueira e espaço gourmet. Muito bem localizado, próximo ao metrô, comércio, parque e com fácil acesso à EPTG.\n\nAluguel bruto: R$ 2.310,00. Desconto de pontualidade: R$ 210,00. Aluguel líquido: R$ 2.100,00. Condomínio: R$ 729,51. Água rateada.\n\nNão trabalhamos com taxa de reserva do imóvel. O imóvel só fica reservado mediante apresentação da documentação completa para análise. O primeiro cliente que deixar a documentação para análise terá preferência na locação.\n\nOs valores de taxas condominiais podem sofrer alterações e devem ser confirmados junto à administração do condomínio.',
    gallery: [
      { name: 'Área comum com espelho d’água', url: 'assets/top-imobiliaria/properties/max-home-mall-1q/foto-01.jpeg' },
      { name: 'Sala com varanda', url: 'assets/top-imobiliaria/properties/max-home-mall-1q/foto-02.jpeg' },
      { name: 'Sala integrada', url: 'assets/top-imobiliaria/properties/max-home-mall-1q/foto-03.jpeg' },
      { name: 'Cozinha americana', url: 'assets/top-imobiliaria/properties/max-home-mall-1q/foto-04.jpeg' },
      { name: 'Área de serviço', url: 'assets/top-imobiliaria/properties/max-home-mall-1q/foto-05.jpeg' },
      { name: 'Varanda com vista livre', url: 'assets/top-imobiliaria/properties/max-home-mall-1q/foto-06.jpeg' },
      { name: 'Vista da área de lazer', url: 'assets/top-imobiliaria/properties/max-home-mall-1q/foto-07.jpeg' },
      { name: 'Quarto com armário', url: 'assets/top-imobiliaria/properties/max-home-mall-1q/foto-08.jpeg' },
      { name: 'Quarto e suíte', url: 'assets/top-imobiliaria/properties/max-home-mall-1q/foto-09.jpeg' },
      { name: 'Banheiro', url: 'assets/top-imobiliaria/properties/max-home-mall-1q/foto-10.jpeg' },
      { name: 'Espaço gourmet', url: 'assets/top-imobiliaria/properties/max-home-mall-1q/foto-11.jpeg' },
      { name: 'Área externa', url: 'assets/top-imobiliaria/properties/max-home-mall-1q/foto-12.jpeg' },
      { name: 'Salão de festas', url: 'assets/top-imobiliaria/properties/max-home-mall-1q/foto-13.jpeg' },
      { name: 'Piscina', url: 'assets/top-imobiliaria/properties/max-home-mall-1q/foto-14.jpeg' },
      { name: 'Fachada do edifício', url: 'assets/top-imobiliaria/properties/max-home-mall-1q/foto-15.jpeg' },
      { name: 'Churrasqueira', url: 'assets/top-imobiliaria/properties/max-home-mall-1q/foto-16.jpeg' },
      { name: 'Academia', url: 'assets/top-imobiliaria/properties/max-home-mall-1q/foto-17.jpeg' }
    ]
  },
  {
    id: 'sample-1',
    title: 'Apartamento 3 quartos - Rua 25 Sul',
    property_type: 'apartamento',
    listing_type: 'aluguel',
    price: 3200,
    area_m2: 85,
    bedrooms: 3,
    bathrooms: 2,
    address: 'Rua 25 Sul, Águas Claras',
    neighborhood: 'Águas Claras Sul',
    condominium_name: 'Residencial Park Sul',
    is_featured: true,
    gradient: 'linear-gradient(135deg,#1B2A4A 0%,#3B5998 50%,#6B8CC7 100%)'
  },
  {
    id: 'sample-2',
    title: 'Apartamento 2 quartos - Avenida Sibipiruna',
    property_type: 'apartamento',
    listing_type: 'venda',
    price: 650000,
    area_m2: 72,
    bedrooms: 2,
    bathrooms: 2,
    address: 'Avenida Sibipiruna, Águas Claras',
    neighborhood: 'Águas Claras Norte',
    condominium_name: 'Edifício Sibipiruna',
    is_featured: true,
    gradient: 'linear-gradient(135deg,#2C3E50 0%,#4CA1AF 50%,#7EC8E3 100%)'
  },
  {
    id: 'sample-3',
    title: 'Cobertura Duplex - Rua 12 Norte',
    property_type: 'cobertura',
    listing_type: 'venda',
    price: 1200000,
    area_m2: 145,
    bedrooms: 4,
    bathrooms: 3,
    address: 'Rua 12 Norte, Águas Claras',
    neighborhood: 'Águas Claras Norte',
    condominium_name: 'Residencial Norte Premium',
    is_featured: true,
    gradient: 'linear-gradient(135deg,#1A1A2E 0%,#16213E 50%,#0F3460 100%)'
  },
  {
    id: 'sample-4',
    title: 'Sala Comercial - Edifício Office Tower',
    property_type: 'sala-comercial',
    listing_type: 'aluguel',
    price: 2800,
    area_m2: 45,
    bedrooms: 0,
    bathrooms: 1,
    address: 'Avenida Araucárias, Águas Claras',
    neighborhood: 'Águas Claras Sul',
    condominium_name: 'Office Tower',
    is_featured: true,
    gradient: 'linear-gradient(135deg,#0C0C1D 0%,#1B1B3A 50%,#D32F2F 100%)'
  },
  {
    id: 'sample-5',
    title: 'Apartamento 1 quarto - Rua 3 Sul',
    property_type: 'apartamento',
    listing_type: 'aluguel',
    price: 1800,
    area_m2: 42,
    bedrooms: 1,
    bathrooms: 1,
    address: 'Rua 3 Sul, Águas Claras',
    neighborhood: 'Águas Claras Sul',
    condominium_name: 'Residencial Compact',
    is_featured: true,
    gradient: 'linear-gradient(135deg,#232526 0%,#414345 50%,#8E9EAB 100%)'
  },
  {
    id: 'sample-6',
    title: 'Casa em Condomínio - Park Way',
    property_type: 'casa-condominio',
    listing_type: 'venda',
    price: 1800000,
    area_m2: 250,
    bedrooms: 4,
    bathrooms: 4,
    address: 'SMPW Quadra 17, Park Way',
    neighborhood: 'Park Way',
    condominium_name: 'Condomínio Mansões Park Way',
    is_featured: true,
    gradient: 'linear-gradient(135deg,#1B2A4A 0%,#2E4057 50%,#048A81 100%)'
  }
];

// Global properties array
let allProperties = [];
let currentListingFilter = null;
let currentPropertyModalId = null;

function getPropertyFragment(propertyId) {
  return `property-${propertyId}`;
}

function getPropertyUrl(propertyId) {
  return `${window.location.origin}${window.location.pathname}#${getPropertyFragment(propertyId)}`;
}

function getPropertyGallery(property) {
  if (!property || !Array.isArray(property.gallery)) return [];
  return property.gallery
    .map((item, index) => {
      if (typeof item === 'string') {
        return { url: item, name: `${property.title || 'Imóvel'} - foto ${index + 1}` };
      }
      if (item && item.url) {
        return {
          url: item.url,
          name: item.name || `${property.title || 'Imóvel'} - foto ${index + 1}`
        };
      }
      return null;
    })
    .filter(Boolean);
}

function getPropertyCover(property) {
  const gallery = getPropertyGallery(property);
  return gallery.length ? gallery[0].url : null;
}

function renderPropertyGallery(property) {
  const wrapper = document.getElementById('propertyModalGallery');
  const mainImage = document.getElementById('propertyModalMainImage');
  const thumbs = document.getElementById('propertyModalThumbs');
  if (!wrapper || !mainImage || !thumbs) return;

  const gallery = getPropertyGallery(property);
  if (!gallery.length) {
    wrapper.hidden = true;
    thumbs.innerHTML = '';
    mainImage.removeAttribute('src');
    return;
  }

  wrapper.hidden = false;
  mainImage.src = gallery[0].url;
  mainImage.alt = gallery[0].name || (property.title || 'Foto do imóvel');

  thumbs.innerHTML = gallery.map((image, index) => `
    <button
      type="button"
      class="property-modal-thumb ${index === 0 ? 'active' : ''}"
      data-url="${image.url}"
      data-name="${image.name ? image.name.replace(/"/g, '&quot;') : ''}"
      aria-label="Ver foto ${index + 1}"
    >
      <img src="${image.url}" alt="${image.name || `Foto ${index + 1}`}">
    </button>
  `).join('');

  thumbs.querySelectorAll('.property-modal-thumb').forEach((button) => {
    button.addEventListener('click', () => {
      mainImage.src = button.dataset.url;
      mainImage.alt = button.dataset.name || (property.title || 'Foto do imóvel');
      thumbs.querySelectorAll('.property-modal-thumb').forEach((item) => item.classList.remove('active'));
      button.classList.add('active');
    });
  });
}

function getVisibleProperties() {
  if (!currentListingFilter) return allProperties;
  return allProperties.filter((property) => property.listing_type === currentListingFilter);
}

function getSearchFeedbackElement() {
  let feedback = document.getElementById('searchFeedback');
  if (feedback) return feedback;
  feedback = document.createElement('div');
  feedback.id = 'searchFeedback';
  feedback.style.cssText = 'text-align:center;padding:20px;font-size:1rem;color:var(--gray-600);';
  const grid = document.querySelector('.properties-grid');
  if (grid && grid.parentNode) grid.parentNode.insertBefore(feedback, grid);
  return feedback;
}

function setSearchFeedback(message) {
  const feedback = getSearchFeedbackElement();
  feedback.innerHTML = message || '';
}

// Load properties from Supabase or use samples
async function loadProperties() {
  try {
    if (db && SUPABASE_URL !== 'YOUR_SUPABASE_URL') {
      const { data, error } = await db
        .from('properties')
        .select('*')
        .eq('is_active', true)
        .order('is_featured', { ascending: false })
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      allProperties = data || [];
    } else {
      allProperties = sampleProperties;
    }
    renderProperties(allProperties);
    if (currentPropertyModalId) {
      const targetProperty = allProperties.find((property) => property.id === currentPropertyModalId);
      if (targetProperty) openPropertyModal(targetProperty);
    }
  } catch (error) {
    console.error('Error loading properties:', error);
    allProperties = sampleProperties;
    renderProperties(allProperties);
    if (currentPropertyModalId) {
      const targetProperty = allProperties.find((property) => property.id === currentPropertyModalId);
      if (targetProperty) openPropertyModal(targetProperty);
    }
  }
}

// Render property cards
function renderProperties(properties) {
  const grid = document.querySelector('.properties-grid');
  if (!grid) return;
  
  const gradients = [
    'linear-gradient(135deg,#1B2A4A 0%,#3B5998 50%,#6B8CC7 100%)',
    'linear-gradient(135deg,#2C3E50 0%,#4CA1AF 50%,#7EC8E3 100%)',
    'linear-gradient(135deg,#1A1A2E 0%,#16213E 50%,#0F3460 100%)',
    'linear-gradient(135deg,#0C0C1D 0%,#1B1B3A 50%,#D32F2F 100%)',
    'linear-gradient(135deg,#232526 0%,#414345 50%,#8E9EAB 100%)',
    'linear-gradient(135deg,#1B2A4A 0%,#2E4057 50%,#048A81 100%)'
  ];
  
  grid.innerHTML = properties.map((property, index) => {
    const isRent = property.listing_type === 'aluguel';
    const price = formatPrice(property.price, isRent);
    const gradient = property.gradient || gradients[index % gradients.length];
    const coverImage = getPropertyCover(property);
    const backgroundStyle = coverImage
      ? `background-image:linear-gradient(rgba(15,26,46,.18),rgba(15,26,46,.28)),url('${coverImage}');background-size:cover;background-position:center;`
      : `background:${gradient}`;
    
    return `
      <div class="property-card reveal reveal-delay-${(index % 3) + 1}" id="${getPropertyFragment(property.id)}">
        <div class="property-img">
          <div class="gradient-bg" style="${backgroundStyle}"></div>
          <button class="property-fav" title="Salvar nos favoritos">♡</button>
          <span class="property-tag tag-${isRent ? 'rent' : 'sale'}">${isRent ? 'Aluguel' : 'Venda'}</span>
          <div class="property-price-overlay">
            <div class="property-price">${price}</div>
          </div>
        </div>
        <div class="property-body">
          <div class="item-sub" style="font-size:13px;color:var(--gray-600);margin-bottom:10px">${property.title}</div>
          <div class="property-address">📍 ${property.address}</div>
          <div class="property-features">
            ${property.bedrooms ? `<div class="property-feat">🛏️ <strong>${property.bedrooms}</strong> quartos</div>` : ''}
            ${property.bathrooms ? `<div class="property-feat">🚿 <strong>${property.bathrooms}</strong> banheiros</div>` : ''}
            ${property.area_m2 ? `<div class="property-feat">📐 <strong>${property.area_m2}</strong>m²</div>` : ''}
          </div>
          <button class="btn-details" onclick="verDetalhes('${property.id}')">Ver Detalhes →</button>
          <div class="property-actions">
            <button class="btn-wa-sm" onclick="contatarWhatsApp('${property.id}')">💬 WhatsApp</button>
            <button class="btn-agendar" onclick="agendarVisita('${property.id}')">📅 Agendar Visita</button>
            <button class="btn-share" onclick="compartilhar('${property.id}')">↗ Compartilhar</button>
          </div>
        </div>
      </div>
    `;
  }).join('');
  
  // Re-initialize reveal animations
  const newReveals = grid.querySelectorAll('.reveal');
  newReveals.forEach(el => revealObserver.observe(el));
}

// Format price
function formatPrice(price, isRent) {
  if (!price) return 'Consulte';
  const formatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0
  }).format(price);
  return isRent ? `${formatted}<small>/mês</small>` : formatted;
}

// Property actions
function verDetalhes(propertyId) {
  const property = allProperties.find(p => p.id === propertyId);
  if (property) {
    openPropertyModal(property);
  }
}

function contatarWhatsApp(propertyId) {
  const property = allProperties.find(p => p.id === propertyId);
  if (property) {
    const message = `Olá! Tenho interesse no imóvel: ${property.title} (${property.address})`;
    window.open(`https://wa.me/556130424344?text=${encodeURIComponent(message)}`, '_blank');
  }
}

function agendarVisita(propertyId) {
  const property = allProperties.find(p => p.id === propertyId);
  if (property) {
    const message = `Olá! Gostaria de agendar uma visita para: ${property.title} (${property.address})`;
    window.open(`https://wa.me/556130424344?text=${encodeURIComponent(message)}`, '_blank');
  }
}

function compartilhar(propertyId) {
  const property = allProperties.find(p => p.id === propertyId);
  if (property) {
    const url = getPropertyUrl(property.id);
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: `Confira este imóvel: ${property.title}`,
        url: url
      });
    } else {
      navigator.clipboard.writeText(url);
      alert('Link copiado para a área de transferência!');
    }
  }
}

function openPropertyModal(property) {
  const modal = document.getElementById('propertyModal');
  if (!modal || !property) return;

  currentPropertyModalId = property.id;
  renderPropertyGallery(property);
  document.getElementById('propertyModalTitle').textContent = property.title || 'Detalhes do imóvel';
  document.getElementById('propertyModalSubtitle').textContent = property.address || property.neighborhood || 'Águas Claras e região';
  document.getElementById('propertyModalDescription').textContent =
    property.description ||
    `${property.title} disponível para ${property.listing_type === 'aluguel' ? 'locação' : 'venda'} em ${property.neighborhood || 'Águas Claras'}.`;

  const stats = [
    ['Modalidade', property.listing_type === 'aluguel' ? 'Aluguel' : 'Venda'],
    ['Preço', property.price ? formatPrice(property.price, property.listing_type === 'aluguel').replace(/<[^>]+>/g, '') : 'Consulte'],
    ['Tipo', property.property_type || 'Não informado'],
    ['Prédio', property.condominium_name || 'Não informado'],
    ['Quartos', property.bedrooms ? `${property.bedrooms}` : 'Não informado'],
    ['Área', property.area_m2 ? `${property.area_m2} m²` : 'Não informado']
  ];

  if (property.garage_spaces) {
    stats.push(['Garagem', `${property.garage_spaces} vaga${property.garage_spaces > 1 ? 's' : ''}`]);
  }
  if (property.gross_price) {
    stats.push(['Aluguel bruto', formatPrice(property.gross_price, true).replace(/<[^>]+>/g, '')]);
  }
  if (property.punctuality_discount) {
    stats.push(['Desc. pontualidade', formatPrice(property.punctuality_discount, false).replace(/<[^>]+>/g, '')]);
  }
  if (property.condo_fee) {
    stats.push(['Condomínio', formatPrice(property.condo_fee, false).replace(/<[^>]+>/g, '')]);
  }
  if (property.water_notes) {
    stats.push(['Observação', property.water_notes]);
  }

  document.getElementById('propertyModalStats').innerHTML = stats.map(([label, value]) => `
    <div class="property-modal-stat">
      <strong>${label}</strong>
      <span>${value}</span>
    </div>
  `).join('');

  document.getElementById('propertyModalWhatsApp').onclick = () => contatarWhatsApp(property.id);
  document.getElementById('propertyModalVisit').onclick = () => agendarVisita(property.id);
  document.getElementById('propertyModalShare').onclick = () => compartilhar(property.id);

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  history.replaceState(null, '', `#${getPropertyFragment(property.id)}`);
}

function closePropertyModal() {
  const modal = document.getElementById('propertyModal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  currentPropertyModalId = null;
  if (window.location.hash.startsWith('#property-')) {
    history.replaceState(null, '', window.location.pathname);
  }
}

// Enhanced property search function
async function buscarImoveis() {
  const keyword = document.getElementById('searchKeyword').value.trim().toLowerCase();
  const tipo = document.querySelectorAll('.search-select')[0]?.value || '';
  const regiao = document.querySelectorAll('.search-select')[1]?.value || '';
  
  if (!keyword && tipo === 'Tipo' && regiao === 'Região') {
    renderProperties(getVisibleProperties());
    setSearchFeedback(currentListingFilter ? `<p style="margin-bottom:16px;color:var(--navy);font-weight:500">🏠 Mostrando somente imóveis para ${currentListingFilter === 'venda' ? 'compra' : 'aluguel'} <button onclick="limparBusca()" style="margin-left:12px;padding:6px 16px;border:1.5px solid var(--gray-200);background:var(--white);border-radius:50px;cursor:pointer;font-size:.85rem;font-family:inherit;color:var(--gray-600)">✕ Limpar filtro</button></p>` : '');
    document.getElementById('imoveis')?.scrollIntoView({behavior:'smooth'});
    return;
  }
  
  let filteredProperties = getVisibleProperties();
  
  // Apply filters
  if (keyword) {
    filteredProperties = filteredProperties.filter(property => {
      const searchText = [
        property.title,
        property.description,
        property.address,
        property.condominium_name,
        property.neighborhood,
        property.property_type
      ].join(' ').toLowerCase();
      return searchText.includes(keyword);
    });
  }
  
  if (tipo && tipo !== 'Tipo') {
    filteredProperties = filteredProperties.filter(property => 
      property.property_type === tipo || property.listing_type === tipo
    );
  }
  
  if (regiao && regiao !== 'Região') {
    filteredProperties = filteredProperties.filter(property => 
      property.neighborhood && property.neighborhood.toLowerCase().includes(regiao.toLowerCase())
    );
  }
  
  // Render filtered properties
  renderProperties(filteredProperties);
  
  // Scroll to properties
  document.getElementById('imoveis')?.scrollIntoView({behavior:'smooth'});
  
  // Show results feedback
  const found = filteredProperties.length;
  
  if (found === 0) {
    const searchTerms = [keyword, tipo !== 'Tipo' ? tipo : '', regiao !== 'Região' ? regiao : ''].filter(Boolean).join(', ');
    setSearchFeedback(`
      <div style="padding:40px;background:var(--gray-50);border-radius:var(--radius);margin-bottom:24px">
        <p style="font-size:1.2rem;font-weight:600;color:var(--navy);margin-bottom:12px">🔍 Nenhum imóvel encontrado para "${searchTerms}"</p>
        <p style="margin-bottom:20px;color:var(--gray-600)">Mas não se preocupe! Temos muitos imóveis disponíveis. Fale com nossa equipe:</p>
        <a href="https://wa.me/556130424344?text=${encodeURIComponent('Olá! Estou buscando um imóvel: ' + searchTerms)}" 
           target="_blank" style="display:inline-block;padding:14px 32px;background:var(--red);color:#fff;border-radius:50px;font-weight:600;font-size:.95rem;text-decoration:none">
          💬 Buscar via WhatsApp
        </a>
      </div>`);
  } else {
    const listingLabel = currentListingFilter ? ` em ${currentListingFilter === 'venda' ? 'compra' : 'aluguel'}` : '';
    setSearchFeedback(`<p style="margin-bottom:16px;color:var(--navy);font-weight:500">🏠 ${found} imóve${found === 1 ? 'l' : 'is'} encontrado${found === 1 ? '' : 's'}${listingLabel}${keyword ? ' para "' + keyword + '"' : ''} 
      <button onclick="limparBusca()" style="margin-left:12px;padding:6px 16px;border:1.5px solid var(--gray-200);background:var(--white);border-radius:50px;cursor:pointer;font-size:.85rem;font-family:inherit;color:var(--gray-600)">✕ Limpar filtro</button></p>`);
  }
}

function limparBusca() {
  document.getElementById('searchKeyword').value = '';
  document.querySelectorAll('.search-select').forEach(s => s.selectedIndex = 0);
  currentListingFilter = null;
  renderProperties(allProperties);
  setSearchFeedback('');
}

async function enviarContato() {
  const form = document.querySelector('.contato-form');
  const nome = form.querySelector('input[type="text"]').value.trim();
  const email = form.querySelector('input[type="email"]').value.trim();
  const telefone = form.querySelector('input[type="tel"]').value.trim();
  const assunto = form.querySelector('select').value;
  const mensagem = form.querySelector('textarea').value.trim();
  
  if (!nome) { alert('Por favor, preencha seu nome.'); return; }
  if (!telefone) { alert('Por favor, preencha seu telefone.'); return; }
  
  const btn = form.querySelector('.btn-enviar');
  
  // Save to Supabase if available
  if (db && SUPABASE_URL !== 'YOUR_SUPABASE_URL') {
    try {
      btn.textContent = 'Salvando...';
      btn.disabled = true;
      
      const { error } = await db
        .from('contact_submissions')
        .insert({
          name: nome,
          email: email || null,
          phone: telefone,
          subject: assunto,
          message: mensagem
        });
      
      if (error) throw error;
      
      btn.textContent = '✅ Salvo! Redirecionando para WhatsApp...';
      btn.style.background = 'linear-gradient(135deg, #2E7D32, #1B5E20)';
    } catch (error) {
      console.error('Error saving contact:', error);
      btn.textContent = 'Erro ao salvar. Redirecionando para WhatsApp...';
      btn.style.background = 'linear-gradient(135deg, #F57C00, #E65100)';
    }
  } else {
    btn.textContent = '✅ Redirecionando para WhatsApp...';
    btn.style.background = 'linear-gradient(135deg, #2E7D32, #1B5E20)';
  }
  
  // Open WhatsApp
  const texto = `Olá! Meu nome é ${nome}.%0A` +
    `📧 Email: ${email}%0A` +
    `📱 Telefone: ${telefone}%0A` +
    `📋 Assunto: ${assunto}%0A` +
    `💬 Mensagem: ${mensagem}`;
  
  window.open(`https://wa.me/556130424344?text=${encodeURIComponent(texto.replace(/%0A/g, '\n'))}`, '_blank');
  
  // Reset form and button
  setTimeout(() => {
    form.reset();
    btn.textContent = 'Enviar Mensagem';
    btn.style.background = '';
    btn.disabled = false;
  }, 3000);
}

// Header scroll effect — guarded so the script keeps running even when the
// React Header has replaced the legacy header DOM (Next.js port).
const header = document.getElementById('header');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  if (header) header.classList.toggle('scrolled', window.scrollY > 60);
  const backTop = document.getElementById('backTop');
  if (backTop) backTop.classList.toggle('show', window.scrollY > 600);
});

// Mobile menu — only wire up if legacy markup is present.
const mobileToggle = document.getElementById('mobileToggle');
if (mobileToggle) {
  mobileToggle.addEventListener('click', () => {
    const navEl = document.getElementById('nav');
    if (navEl) navEl.classList.toggle('open');
    mobileToggle.classList.toggle('active');
  });

  document.querySelectorAll('.nav a').forEach(a => {
    a.addEventListener('click', () => {
      const navEl = document.getElementById('nav');
      if (navEl) navEl.classList.remove('open');
      mobileToggle.classList.remove('active');
    });
  });
}

// Search toggle
function toggleSearch(btn) {
  btn.parentElement.querySelectorAll('button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
reveals.forEach(el => revealObserver.observe(el));

// Animated counters
const statNums = document.querySelectorAll('.stat-num[data-target]');
let countersAnimated = false;
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !countersAnimated) {
      countersAnimated = true;
      statNums.forEach(el => {
        const target = parseInt(el.dataset.target);
        const suffix = el.dataset.suffix || '';
        const duration = 2000;
        const start = performance.now();
        
        if (target === 0) {
          el.textContent = '0' + suffix;
          return;
        }
        
        function update(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(eased * target);
          el.textContent = current + (progress >= 1 ? suffix : '');
          if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
      });
    }
  });
}, { threshold: 0.3 });
statNums.forEach(el => counterObserver.observe(el));

// Simulador toggle
function simToggle(btn) {
  btn.parentElement.querySelectorAll('button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

// Simulador calculation
function getAreaAdjustment(area) {
  if (area <= 40) return 1.08;
  if (area <= 70) return 1.03;
  if (area <= 110) return 1;
  if (area <= 180) return 0.96;
  return 0.92;
}

function getBedroomAdjustment(quartos) {
  if (quartos <= 1) return 0.96;
  if (quartos === 2) return 1;
  if (quartos === 3) return 1.1;
  return 1.2;
}

function getRentBasePerSquareMeter(bairro) {
  const rentBase = {
    // ÁGUAS CLARAS - 0.5% of property value (April 2026)
    'areal': 42,  // ~R$7,800/m² × 0.5%
    'arniqueiras': 40,  // ~R$7,500/m² × 0.5%
    'ade': 45,  // ~R$8,200/m² × 0.5%
    // ASFALTADAS
    'asa-sul': 75,
    'asa-norte': 72,
    'asa-sul': 42,
    'asa-norte': 40,
    'ceilandia': 25,
    'cruzeiro': 29,
    'gama': 17,
    'guara': 40,
    'itapoan': 16,
    'jardim-botanico': 24,
    'lago-norte': 100,
    'lago-sul': 112,
    'park-way': 70,
    'planaltina': 15,
    'rio-preto': 15,
    'samambaia': 18,
    'sao-marcos': 16,
    'sudoeste': 41,
    'taguatinga': 32,
    'varjao': 18,
    'vicente-pires': 23,
    'riohondo': 15,
    'sol-norte': 16,
    'sol-sul': 16,
    'sobradinho': 18,
    'bra-sul': 15,
    'bra-norte': 15,
    'recanto': 16,
    'reserva': 17,
    'candangos': 18,
    'lago-este': 23,
    'lago-oeste': 22,
    'lago-centro': 23,
    'sia': 20,
    'sri': 18,
    'saz': 18,
    'sudeste': 24,
    'nucleo-bandeirante': 20,
    'agua-linda': 14,
    'aba-de-goias': 14,
    'anapolis': 20,
    'cachoeira': 14,
    'caldas': 19,
    'catalao': 19,
    'corumba': 15,
    'formosa': 17,
    'goianesia': 17,
    'goias': 25,
    'indai': 14,
    'itelandia': 14,
    'trindade': 16, 'noroeste': 28
  };
  if (bairro === 'todos') return 40;  // Average Águas Claras
  return rentBase[bairro] || 35;
}

function getSaleBasePerSquareMeter(bairro) {
  const saleBase = {
    // ÁGUAS CLARAS - Updated April 2026
    'areal': 7800,
    'arniqueiras': 7500,
    'ade': 8200,
    // ASFALTADAS
    'asa-sul': 14500,
    'asa-norte': 13800,
    'asa-sul': 14500,
    'asa-norte': 13800,
    'ceilandia': 5000,
    'cruzeiro': 7900,
    'gama': 3600,
    'guara': 7800,
    'itapoan': 3400,
    'jardim-botanico': 6200,
    'lago-norte': 19500,
    'lago-sul': 22000,
    'park-way': 13500,
    'planaltina': 3200,
    'rio-preto': 3000,
    'samambaia': 4300,
    'sao-marcos': 3500,
    'sudoeste': 14800,
    'taguatinga': 6200,
    'varjao': 4200,
    'vicente-pires': 6100,
    'riohondo': 3000,
    'sol-norte': 3400,
    'sol-sul': 3400,
    'sobradinho': 4300,
    'bra-sul': 3000,
    'bra-norte': 3000,
    'recanto': 3400,
    'reserva': 3600,
    'candangos': 4200,
    'lago-este': 5600,
    'lago-oeste': 5200,
    'lago-centro': 5600,
    'sia': 4800,
    'sri': 4300,
    'saz': 4300,
    'sudeste': 6200,
    'nucleo-bandeirante': 6800,
    'agua-linda': 2600,
    'aba-de-goias': 2500,
    'anapolis': 4300,
    'cachoeira': 2400,
    'caldas': 3900,
    'catalao': 4200,
    'corumba': 2600,
    'formosa': 3400,
    'goianesia': 3300,
    'goias': 7000,
    'indai': 2400,
    'itelandia': 2400,
    'trindade': 3000, 'noroeste': 5200
  };
  if (bairro === 'todos') return 7500;  // Average Águas Claras
  return saleBase[bairro] || 6000;
}

function getPropertyTypeAdjustment(tipo) {
  const map = {
    'apartamento': 1,
    'kitnet': 1.08,
    'loft': 1.12,
    'cobertura': 1.25,
    'duplex': 1.18,
    'triplex': 1.22,
    'casa': 0.96,
    'casa-condominio': 1.08,
    'sala-comercial': 1.05,
    'loja': 1.12,
    'ponto-comercial': 1.15,
    'galpao': 0.88,
    'predio-comercial': 1.1,
    'terreno': 0.72,
    'lote': 0.75,
    'loteamento': 0.7,
    'garagem': 0.45,
    'hotel-flat': 1.04
  };
  return map[tipo] || 1;
}

function calcularAluguel() {
  const tipo = document.getElementById('simTipo').value;
  const bairro = document.getElementById('simBairro').value;
  const quartos = parseInt(document.getElementById('simQuartos').value, 10) || 1;
  const area = parseFloat(document.getElementById('simMetros').value) || 70;
  const averagePm2 =
    getRentBasePerSquareMeter(bairro) *
    getPropertyTypeAdjustment(tipo) *
    getBedroomAdjustment(quartos) *
    getAreaAdjustment(area);
  const averageVal = Math.round((area * averagePm2) / 100) * 100;

  const fmt = (v) => v.toLocaleString('pt-BR', {minimumFractionDigits:0, maximumFractionDigits:0});
  var resultadoTexto = `R$ ${fmt(averageVal)} /mês`;
  document.getElementById('simValor').textContent = resultadoTexto;
  const result = document.getElementById('simResult');
  result.classList.remove('show');
  void result.offsetWidth; // trigger reflow for animation
  result.classList.add('show');
  result.style.display = 'block';

  // Populate and show lead capture form
  var tipoEl = document.getElementById('simTipo');
  var bairroEl = document.getElementById('simBairro');
  var tipoText = tipoEl.options[tipoEl.selectedIndex].text;
  var bairroText = bairroEl.options[bairroEl.selectedIndex].text;
  document.getElementById('leadAluguelTipo').value = tipoText;
  document.getElementById('leadAluguelBairro').value = bairroText;
  document.getElementById('leadAluguelQuartos').value = document.getElementById('simQuartos').value + ' quartos';
  document.getElementById('leadAluguelArea').value = area + 'm²';
  document.getElementById('leadAluguelResultado').value = resultadoTexto;
  document.getElementById('leadAluguelTipoDisplay').value = normalizeLeadPropertyType(tipoText) || '';
  document.getElementById('leadAluguelRegiaoDisplay').value = bairroText;
  updateLeadWhatsAppLink('leadAluguelWaBtn', 'Olá, acabei de fazer uma simulação de aluguel no site e gostaria de uma avaliação mais precisa.');
  setTimeout(function(){ document.getElementById('leadFormAluguel').classList.add('show'); }, 400);
}

// Scroll to the selected simulator card
function showSimulator(type) {
  try {
    const target = document.getElementById(type === 'venda' ? 'simVenda' : 'simAluguel');
    if (!target) {
      console.error('Simulator target not found:', type);
      return;
    }
    setTimeout(function () {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  } catch (e) { console.error('showSimulator error:', e); }
}

// Sale value calculator
function calcularVenda() {
  const tipo = document.getElementById('simTipoVenda').value;
  const bairro = document.getElementById('simBairroVenda').value;
  const quartos = parseInt(document.getElementById('simQuartosVenda').value, 10) || 1;
  const area = parseFloat(document.getElementById('simMetrosVenda').value) || 70;
  const averagePm2 =
    getSaleBasePerSquareMeter(bairro) *
    getPropertyTypeAdjustment(tipo) *
    getBedroomAdjustment(quartos) *
    getAreaAdjustment(area);
  const averageVal = Math.round((area * averagePm2) / 5000) * 5000;

  const fmt = (v) => v.toLocaleString('pt-BR', {minimumFractionDigits:0, maximumFractionDigits:0});
  var resultadoTexto = `R$ ${fmt(averageVal)}`;
  document.getElementById('simValorVenda').textContent = resultadoTexto;
  const result = document.getElementById('simResultVenda');
  result.classList.remove('show');
  void result.offsetWidth; // trigger reflow for animation
  result.classList.add('show');
  result.style.display = 'block';

  // Populate and show lead capture form
  var tipoEl = document.getElementById('simTipoVenda');
  var bairroEl = document.getElementById('simBairroVenda');
  var tipoText = tipoEl.options[tipoEl.selectedIndex].text;
  var bairroText = bairroEl.options[bairroEl.selectedIndex].text;
  document.getElementById('leadVendaTipo').value = tipoText;
  document.getElementById('leadVendaBairro').value = bairroText;
  document.getElementById('leadVendaQuartos').value = document.getElementById('simQuartosVenda').value + ' quartos';
  document.getElementById('leadVendaArea').value = area + 'm²';
  document.getElementById('leadVendaResultado').value = resultadoTexto;
  document.getElementById('leadVendaTipoDisplay').value = normalizeLeadPropertyType(tipoText) || '';
  document.getElementById('leadVendaRegiaoDisplay').value = bairroText;
  updateLeadWhatsAppLink('leadVendaWaBtn', 'Olá, acabei de fazer uma simulação de venda no site e gostaria de avaliar meu imóvel.');
  setTimeout(function(){ document.getElementById('leadFormVenda').classList.add('show'); }, 400);
}

// Filter properties by type (for nav Comprar/Alugar)
function filterProperties(type) {
  currentListingFilter = type === 'sale' ? 'venda' : 'aluguel';
  const filteredProperties = getVisibleProperties();

  const section = document.getElementById('imoveis');
  if (section) {
    const offset = 80;
    const y = section.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
  renderProperties(filteredProperties);
  const label = currentListingFilter === 'venda' ? 'compra' : 'aluguel';
  setSearchFeedback(`<p style="margin-bottom:16px;color:var(--navy);font-weight:500">🏠 Mostrando ${filteredProperties.length} imóve${filteredProperties.length === 1 ? 'l' : 'is'} para ${label}
    <button onclick="limparBusca()" style="margin-left:12px;padding:6px 16px;border:1.5px solid var(--gray-200);background:var(--white);border-radius:50px;cursor:pointer;font-size:.85rem;font-family:inherit;color:var(--gray-600)">✕ Limpar filtro</button></p>`);
}

// Smooth anchor scroll offset for fixed header
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const offset = 80;
      const y = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  });
});

// Initialize properties loading.
// In the Next.js port this script is appended dynamically AFTER DOMContentLoaded
// has already fired, so the bare event listener never runs. We invoke the init
// directly when the document is already past loading.
function __topImobInit() {
  loadProperties();
  updateLeadWhatsAppLink('leadAluguelWaBtn', 'Olá! Quero falar com a Top Imobiliária sobre avaliação de aluguel.');
  updateLeadWhatsAppLink('leadVendaWaBtn', 'Olá! Quero falar com a Top Imobiliária sobre avaliação de venda.');

  // Initialize premium animations
  initPremiumAnimations();

  const modal = document.getElementById('propertyModal');
  if (modal) {
    modal.addEventListener('click', (event) => {
      if (event.target === modal) closePropertyModal();
    });
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closePropertyModal();
  });

  const hash = window.location.hash.replace('#', '');
  if (hash.startsWith('property-')) {
    currentPropertyModalId = hash.replace('property-', '');
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', __topImobInit);
} else {
  // Document is already interactive/complete — defer to the next tick so any
  // late-arriving DOM (e.g., the React-rendered legacy injection) can settle.
  setTimeout(__topImobInit, 0);
}

// Premium animation enhancements
function initPremiumAnimations() {
  // Enhanced counter animation with better easing
  const enhancedCounterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target);
        const suffix = el.dataset.suffix || '';
        
        // Add sparkle effect during counting
        el.style.textShadow = '0 0 20px rgba(211,47,47,0.3)';
        
        const duration = 2000;
        const start = performance.now();
        
        function update(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          
          // Enhanced easing with bounce
          const eased = progress < 0.5 
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;
            
          const current = Math.round(eased * target);
          el.textContent = current + (progress >= 1 ? suffix : '');
          
          if (progress >= 1) {
            el.style.textShadow = '';
            // Add completion pulse
            el.style.transform = 'scale(1.1)';
            setTimeout(() => el.style.transform = '', 200);
          } else {
            requestAnimationFrame(update);
          }
        }
        requestAnimationFrame(update);
        enhancedCounterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.3 });
  
  document.querySelectorAll('.stat-num[data-target]').forEach(el => enhancedCounterObserver.observe(el));

  // Parallax effects for floating shapes
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.3;
    
    document.querySelectorAll('.float-shape').forEach((shape, i) => {
      const speed = (i + 1) * parallaxSpeed;
      shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
    
    // Parallax for decorative dots
    document.querySelectorAll('.decorative-dots').forEach(dots => {
      dots.style.transform = `translateY(${scrolled * 0.1}px)`;
    });
  });

  // Enhanced reveal animations with perspective
  const enhancedRevealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        el.classList.add('visible');
        
        // Add stagger effect for grid items
        if (el.closest('.properties-grid, .services-grid, .ai-grid')) {
          const siblings = [...el.parentElement.children].filter(child => 
            child.classList.contains('reveal'));
          const index = siblings.indexOf(el);
          el.style.animationDelay = `${index * 0.1}s`;
        }
        
        enhancedRevealObserver.unobserve(el);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  
  document.querySelectorAll('.reveal').forEach(el => enhancedRevealObserver.observe(el));

  // Add loading shimmer to property cards
  setTimeout(() => {
    document.querySelectorAll('.property-card').forEach((card, i) => {
      setTimeout(() => {
        card.style.animation = 'fadeInScale 0.6s ease forwards';
      }, i * 100);
    });
  }, 1000);

  // Enhanced button press effects
  document.addEventListener('click', (e) => {
    if (e.target.matches('button, .btn-details, .nav-cta')) {
      e.target.style.transform = 'scale(0.95)';
      setTimeout(() => e.target.style.transform = '', 150);
    }
  });

  // Smooth scroll enhancement with easing
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offset = 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        
        smoothScrollTo(targetPosition, 1000);
      }
    });
  });
}

// Scroll to element with smooth animation
function smoothScrollToElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    const rect = element.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollPosition = rect.top + scrollTop - 80; // Account for fixed header
    smoothScrollTo(scrollPosition, 800);
  }
}

// Custom smooth scroll with easing
function smoothScrollTo(targetPosition, duration) {
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    // Ease-in-out cubic
    const easing = progress < 0.5 
      ? 4 * progress * progress * progress 
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;
    
    window.scrollTo(0, startPosition + distance * easing);
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }
  
  requestAnimationFrame(animation);
}

// Indicação form → WhatsApp
function enviarIndicacao() {
  const nome = document.getElementById('indNome').value.trim();
  const telefone = document.getElementById('indTelefone').value.trim();
  const propNome = document.getElementById('indPropNome').value.trim();
  const propTel = document.getElementById('indPropTel').value.trim();
  const tipo = document.getElementById('indTipo').value;

  if (!nome || !telefone || !propNome || !propTel) {
    alert('Por favor, preencha todos os campos obrigatórios.');
    return;
  }

  let msg = `🎁 *Nova Indicação de Proprietário*\n\n`;
  msg += `*Quem indica:*\nNome: ${nome}\nTelefone: ${telefone}\n\n`;
  msg += `*Proprietário indicado:*\nNome: ${propNome}\nTelefone: ${propTel}`;
  if (tipo) msg += `\nTipo: ${tipo}`;

  const encoded = encodeURIComponent(msg);
  window.open(`https://wa.me/556130424344?text=${encoded}`, '_blank');
}

// Consorcio integrado
function formatConsCurrency(input) {
  let v = input.value.replace(/\D/g, '');
  if (!v) { input.value = ''; return; }
  v = (parseInt(v, 10) / 100).toFixed(2);
  input.value = parseFloat(v).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function parseConsCurrency(value) {
  if (!value) return 0;
  return parseFloat(value.replace(/\./g, '').replace(',', '.')) || 0;
}

function formatConsBRL(value) {
  return 'R$ ' + value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function normalizeLeadPropertyType(raw) {
  const value = (raw || '').toString().toLowerCase().trim();
  const map = {
    'apartamento': 'Apartamento',
    'kitnet': 'Kitnet',
    'casa': 'Casa',
    'sobrado': 'Sobrado',
    'cobertura': 'Cobertura',
    'duplex': 'Duplex',
    'apartamento duplex': 'Duplex',
    'apartamento triplex': 'Duplex',
    'triplex': 'Duplex',
    'loft': 'Apartamento',
    'sala-comercial': 'Sala comercial',
    'sala comercial': 'Sala comercial',
    'loja': 'Loja',
    'galpao': 'Galpão',
    'galpão': 'Galpão',
    'ponto-comercial': 'Loja',
    'terreno': 'Terreno',
    'lote': 'Terreno',
    'loteamento': 'Terreno',
    'casa-condominio': 'Casa',
    'casa em condomínio': 'Casa'
  };
  return map[value] || '';
}

function updateLeadWhatsAppLink(anchorId, message) {
  const anchor = document.getElementById(anchorId);
  if (!anchor) return;
  anchor.href = 'https://wa.me/556130424344?text=' + encodeURIComponent(message);
}

function attachLeadFormHandler(formId, waAnchorId, leadTypeLabel) {
  const form = document.getElementById(formId);
  if (!form || form.dataset.bound === 'true') return;
  form.dataset.bound = 'true';

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = (form.querySelector('[name="nome"]')?.value || '').trim();
    const telefone = (form.querySelector('[name="telefone"]')?.value || '').trim();
    const tipo = (form.querySelector('[name="tipo_imovel"]')?.value || '').trim();
    const regiao = (form.querySelector('[name="regiao"]')?.value || '').trim();
    const condominio = (form.querySelector('[name="condominio"]')?.value || '').trim();
    const objetivo = (form.querySelector('[name="objetivo"]')?.value || '').trim();
    const simTipo = (form.querySelector('[name="sim_tipo"]')?.value || '').trim();
    const simBairro = (form.querySelector('[name="sim_bairro"]')?.value || '').trim();
    const simQuartos = (form.querySelector('[name="sim_quartos"]')?.value || '').trim();
    const simArea = (form.querySelector('[name="sim_area"]')?.value || '').trim();
    const simResultado = (form.querySelector('[name="sim_resultado"]')?.value || '').trim();

    if (!nome) { alert('Por favor, preencha seu nome.'); return; }
    if (!telefone) { alert('Por favor, preencha seu telefone.'); return; }
    if (!tipo) { alert('Selecione o tipo de imóvel.'); return; }

    const message = [
      'Olá! Quero receber uma avaliação completa.',
      '',
      `*Lead:* ${leadTypeLabel}`,
      `*Nome:* ${nome}`,
      `*Telefone:* ${telefone}`,
      `*Objetivo:* ${objetivo || 'Não informado'}`,
      `*Tipo de imóvel:* ${tipo}`,
      `*Região:* ${regiao || simBairro || 'Não informado'}`,
      `*Prédio/Condomínio:* ${condominio || 'Não informado'}`,
      `*Perfil simulado:* ${simTipo || 'Não informado'}`,
      `*Quartos:* ${simQuartos || 'Não informado'}`,
      `*Área:* ${simArea || 'Não informado'}`,
      `*Resultado da simulação:* ${simResultado || 'Não informado'}`
    ].join('\n');

    updateLeadWhatsAppLink(waAnchorId, message);

    const submitBtn = form.querySelector('.btn-lead-submit');
    if (submitBtn) {
      submitBtn.textContent = '✅ Redirecionando para WhatsApp...';
      submitBtn.disabled = true;
    }

    window.open('https://wa.me/556130424344?text=' + encodeURIComponent(message), '_blank');

    setTimeout(() => {
      if (submitBtn) {
        submitBtn.textContent = '📩 Receber avaliação completa';
        submitBtn.disabled = false;
      }
    }, 1200);
  });
}

// Padronização de botões diretos do WhatsApp
function openStandardizedWhatsApp(interestType, event) {
  // Prevent any event bubbling or multiple triggers
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  
    
  const messages = {
    'alugar': 'Vim pelo site da Top Imobiliária. Tenho interesse em alugar um imóvel.',
    'venda': 'Vim pelo site da Top Imobiliária. Tenho interesse em vender meu imóvel.',
    'administracao': 'Vim pelo site da Top Imobiliária. Gostaria de informações sobre administração de imóvel.',
    'parceria': 'Vim pelo site da Top Imobiliária. Tenho interesse em parceria.',
    'indique': 'Vim pelo site da Top Imobiliária. Gostaria de indicar um proprietário.',
    'simulador': 'Vim pelo site da Top Imobiliária. Fiz uma simulação no site.',
    'consorcio': 'Vim pelo site da Top Imobiliária. Gostaria de informações sobre consórcio imobiliário.',
    'corretor': 'Vim pelo site da Top Imobiliária. Sou corretor.',
    'venda-assistida': 'Vim pelo site da Top Imobiliária. Tenho interesse em Venda Assistida.',
    'park-way': 'Vim pelo site da Top Imobiliária. Gostaria de informações sobre imóveis no Park Way.',
    'garantias': 'Vim pelo site da Top Imobiliária. Gostaria de informações sobre garantias locatícias.',
    'compra': 'Vim pelo site da Top Imobiliária. Tenho interesse em comprar um imóvel.',
    'padrao': 'Vim pelo site da Top Imobiliária.'
  };
  
  const message = messages[interestType] || messages['padrao'];
  const encoded = encodeURIComponent(message);
  window.open('https://wa.me/556130424344?text=' + encoded, '_blank');
}

function resolveMainConPrazo() {
  const select = document.getElementById('mainConPrazo');
  if (!select) return 0;
  if (select.value !== 'custom') return parseInt(select.value, 10);
  return parseInt(document.getElementById('mainConPrazoCustom').value, 10) || 0;
}

function updateMainConPrazo() {
  const input = document.getElementById('mainConPrazoCustom');
  if (!input) return;
  if (parseInt(input.value, 10) > 500) input.value = 500;
}

let mainFinData = null;
let mainConData = null;

function calcMainFinanciamento() {
  const valor = parseConsCurrency(document.getElementById('mainFinValor').value);
  const entrada = parseConsCurrency(document.getElementById('mainFinEntrada').value);
  const prazo = parseInt(document.getElementById('mainFinPrazo').value, 10);
  const jurosAnual = parseFloat(document.getElementById('mainFinJuros').value);

  if (!valor || valor <= entrada) {
    alert('Preencha corretamente o valor do imovel e a entrada.');
    return;
  }

  const financiado = valor - entrada;
  const jurosMensal = Math.pow(1 + jurosAnual / 100, 1 / 12) - 1;
  const parcela = financiado * (jurosMensal * Math.pow(1 + jurosMensal, prazo)) / (Math.pow(1 + jurosMensal, prazo) - 1);
  const totalPago = (parcela * prazo) + entrada;
  const totalJuros = totalPago - valor;

  document.getElementById('mainFinParcela').textContent = formatConsBRL(parcela);
  document.getElementById('mainFinFinanciado').textContent = formatConsBRL(financiado);
  document.getElementById('mainFinJurosTotal').textContent = formatConsBRL(totalJuros);
  document.getElementById('mainFinTotalPago').textContent = formatConsBRL(totalPago);
  document.getElementById('mainFinResult').classList.add('show');

  mainFinData = { parcela, totalPago };
  updateMainConsComparison();
}

function calcMainConsorcio() {
  const valor = parseConsCurrency(document.getElementById('mainConValor').value);
  const prazo = resolveMainConPrazo();
  const taxaTotal = parseFloat(document.getElementById('mainConTaxa').value);
  const lancePct = parseFloat(document.getElementById('mainConLance').value) || 0;
  const agioValor = parseConsCurrency(document.getElementById('mainConAgio').value);

  if (!valor) {
    alert('Preencha o valor da carta de credito.');
    return;
  }
  if (!prazo || prazo < 1) {
    alert('Informe corretamente a quantidade de parcelas do consorcio.');
    return;
  }

  const taxaValor = valor * (taxaTotal / 100);
  const lanceValor = valor * (lancePct / 100);
  const totalBase = valor + taxaValor;
  const totalFinal = totalBase + agioValor;
  const parcela = (totalBase - lanceValor) / prazo;

  document.getElementById('mainConParcela').textContent = formatConsBRL(parcela);
  document.getElementById('mainConCarta').textContent = formatConsBRL(valor);
  document.getElementById('mainConTaxaTotal').textContent = formatConsBRL(taxaValor) + ' (' + taxaTotal + '%)';
  document.getElementById('mainConLanceVal').textContent = lancePct > 0 ? formatConsBRL(lanceValor) + ' (' + lancePct + '%)' : 'Nenhum';
  document.getElementById('mainConTotalBase').textContent = formatConsBRL(totalBase);
  document.getElementById('mainConAgioVal').textContent = agioValor > 0 ? formatConsBRL(agioValor) : 'Nenhum';
  document.getElementById('mainConTotalFinal').textContent = formatConsBRL(totalFinal);
  document.getElementById('mainConResult').classList.add('show');

  mainConData = { parcela, totalFinal, agioValor };
  updateMainConsComparison();
}

function updateMainConsComparison() {
  if (!mainFinData || !mainConData) return;

  document.getElementById('mainCmpFinParcela').textContent = formatConsBRL(mainFinData.parcela);
  document.getElementById('mainCmpFinTotal').textContent = formatConsBRL(mainFinData.totalPago);
  document.getElementById('mainCmpConParcela').textContent = formatConsBRL(mainConData.parcela);
  document.getElementById('mainCmpConTotal').textContent = formatConsBRL(mainConData.totalFinal);
  document.getElementById('mainCmpConNote').textContent = mainConData.agioValor > 0
    ? 'Inclui agio de ' + formatConsBRL(mainConData.agioValor)
    : 'Sem agio informado';

  const savings = mainFinData.totalPago - mainConData.totalFinal;
  const savingsBox = document.getElementById('mainConsSavings');
  if (savings > 0) {
    document.getElementById('mainConsSavingsAmount').textContent = formatConsBRL(savings);
    savingsBox.style.display = 'block';
  } else {
    savingsBox.style.display = 'none';
  }

  const compare = document.getElementById('mainConsCompare');
  compare.classList.add('show');
  compare.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

const mainConPrazoSelect = document.getElementById('mainConPrazo');
if (mainConPrazoSelect) {
  mainConPrazoSelect.addEventListener('change', function () {
    const custom = document.getElementById('mainConPrazoCustom');
    const hint = document.getElementById('mainConPrazoHint');
    const manual = this.value === 'custom';
    custom.style.display = manual ? 'block' : 'none';
    hint.style.display = manual ? 'block' : 'none';
    if (manual) custom.focus();
  });
}

attachLeadFormHandler('leadFormAluguelForm', 'leadAluguelWaBtn', 'Avaliação de locação');
attachLeadFormHandler('leadFormVendaForm', 'leadVendaWaBtn', 'Avaliação de venda');

// WhatsApp Lead Form Handler
function attachWhatsAppLeadForm(formId, buttonId, serviceType) {
  const form = document.getElementById(formId);
  const button = document.getElementById(buttonId);
  
  if (!form || !button) return;

  button.addEventListener('click', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('leadNome')?.value.trim();
    const telefone = document.getElementById('leadTelefone')?.value.trim();
    const interesse = document.getElementById('leadInteresse')?.value;
    const tipoImovel = document.getElementById('leadTipoImovel')?.value.trim();
    const regiao = document.getElementById('leadRegiao')?.value.trim();
    const faixaValor = document.getElementById('leadFaixaValor')?.value.trim();
    const observacoes = document.getElementById('leadObservacoes')?.value.trim();
    
    // Validation
    if (!nome || !telefone || !interesse) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    
    // Build WhatsApp message - ALWAYS sends to company number (61) 3042-4344
    const message = [
      'Olá! Vim pelo site da Top Imobiliária.',
      '',
      `*Nome:* ${nome}`,
      `*Telefone/WhatsApp:* ${telefone}`,
      `*Interesse:* ${interesse}`,
      `*Tipo de imóvel:* ${tipoImovel || 'Não informado'}`,
      `*Região:* ${regiao || 'Não informado'}`,
      `*Faixa de valor:* ${faixaValor || 'Não informado'}`,
      observacoes ? `*Observações:* ${observacoes}` : ''
    ].filter(Boolean).join('\n');
    
    // Update button text
    const submitBtn = button;
    submitBtn.textContent = '✅ Enviando para WhatsApp...';
    submitBtn.disabled = true;
    
    // Open WhatsApp to company number (61) 3042-4344
    window.open('https://wa.me/556130424344?text=' + encodeURIComponent(message), '_blank');
    
    // Reset button after delay
    setTimeout(() => {
      submitBtn.textContent = '📱 Falar no WhatsApp';
      submitBtn.disabled = false;
    }, 2000);
  });
}

// Initialize WhatsApp Lead Form
attachWhatsAppLeadForm('whatsappLeadForm', 'whatsappLeadSubmitBtn');

// Load properties from JSON
async function carregarImoveis() {
  try {
    const config = window.TOP_IMOBILIARIA_SUPABASE;
    const response = await fetch(
      `${config.url}/rest/v1/properties?select=*&is_active=eq.true&order=created_at.desc`,
      { headers: { 'apikey': config.anonKey, 'Authorization': `Bearer ${config.anonKey}` } }
    );
    const data = await response.json();
    
    const container = document.getElementById('properties-container');
    if (!container) return;
    
    // Get current filter
    const currentFilter = document.getElementById('mainTipo')?.value || 'todos';
    const currentBairro = document.getElementById('mainBairro')?.value || 'todos';
    
    // Filter properties
    let imoveisFiltrados = data.imoveis.filter(imovel => {
      if (currentFilter !== 'todos' && imovel.acao !== currentFilter) return false;
      if (currentBairro !== 'todos' && imovel.regiao !== currentBairro) return false;
      return true;
    });
    
    // Sort by destaque, then by id
    imoveisFiltrados.sort((a, b) => {
      if (b.destaque !== a.destaque) return b.destaque - a.destaque;
      return b.id - a.id;
    });
    
    // Render properties
    container.innerHTML = '';
    
    if (imoveisFiltrados.length === 0) {
      container.innerHTML = '<p class="text-center p-4">Nenhum imóvel encontrado.</p>';
      return;
    }
    
    imoveisFiltrados.forEach(imovel => {
      const card = criarCardImovel(imovel, data.configuracao);
      container.innerHTML += card;
    });
    
  } catch (error) {
    console.error('Erro ao carregar imóveis:', error);
  }
}

function criarCardImovel(imovel, config) {
  const valorFormatado = imovel.valor_aluguel_liquido 
    ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(imovel.valor_aluguel_liquido)
    : (imovel.valor_venda ? new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(imovel.valor_venda) : 'Consulte');
  
  const imagemPlaceholder = imovel.fotos && imovel.fotos.length > 0 
    ? imovel.fotos[0] 
    : 'https://via.placeholder.com/400x250/1B2A4A/ffffff?text=Imóvel';
  
  return `
  <div class="property-card reveal" data-id="${imovel.id}" data-action="${imovel.acao}" data-regiao="${imovel.regiao}">
    <div class="property-image" style="background: linear-gradient(135deg, #1B2A4A, #2C3E50);">
      <img src="${imagemPlaceholder}" alt="${imovel.titulo}" style="width:100%;height:250px;object-fit:cover;" onerror="this.src='https://via.placeholder.com/400x250/1B2A4A/ffffff?text=Imóvel'">
      <div class="property-badge">${imovel.acao === 'aluguel' ? '🏠 ALUGUEL' : '💰 VENDA'}</div>
    </div>
    <div class="property-content">
      <div class="property-tags">
        ${imovel.quartos ? `<span>🛏️ ${imovel.quartos} Quarto${imovel.quartos > 1 ? 's' : ''}</span>` : ''}
        ${imovel.vagas ? `<span>🚗 ${imovel.vagas} Vaga${imovel.vagas > 1 ? 's' : ''}</span>` : ''}
        ${imovel.area ? `<span>📐 ${imovel.area} m²</span>` : ''}
      </div>
      <h3 class="property-title">${imovel.titulo}</h3>
      <p class="property-location">📍 ${imovel.bairro || 'Águas Claras'}</p>
      <p class="property-price"><strong>${valorFormatado}</strong> ${imovel.condominio ? `<br><small>Cond: ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(imovel.condominio)}/mês</small>` : ''}</p>
      <p class="property-desc">${imovel.descricao ? imovel.descricao.substring(0, 120) + '...' : ''}</p>
      <a href="https://wa.me/556130424344?text=Olá!%20Tenho%20interesse%20no%20imóvel%20${encodeURIComponent(imovel.titulo)}" target="_blank" class="property-cta">
        👉 Agendar Visita
      </a>
    </div>
  </div>`;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  carregarImoveis();
  
  // Add event listeners for filters
  document.querySelectorAll('#mainTipo, #mainBairro').forEach(select => {
    select.addEventListener('change', () => {
      carregarImoveis();
    });
  });
});
