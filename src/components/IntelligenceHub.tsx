import Link from "next/link";
import {
  Building2,
  Calculator,
  Gift,
  Landmark,
  MapPinned,
  Train,
  Trees,
  Waves,
} from "lucide-react";

const quickLinks = [
  { label: "Águas Claras", href: "/regioes/aguas-claras", icon: Building2 },
  { label: "Ceilândia", href: "/regioes/ceilandia", icon: Building2 },
  { label: "Cruzeiro", href: "/regioes/cruzeiro", icon: Landmark },
  { label: "Asa Sul", href: "/regioes/asa-sul", icon: Trees },
  { label: "Asa Norte", href: "/regioes/asa-norte", icon: Landmark },
  { label: "Lago Sul", href: "/regioes/lago-sul", icon: Waves },
  { label: "Lago Norte", href: "/regioes/lago-norte", icon: Waves },
  { label: "Sobradinho", href: "/regioes/sobradinho", icon: Landmark },
  { label: "Samambaia", href: "/regioes/samambaia", icon: Train },
  { label: "Núcleo Bandeirante", href: "/regioes/nucleo-bandeirante", icon: Landmark },
  { label: "Guará", href: "/regioes/guara", icon: Train },
  { label: "Taguatinga", href: "/regioes/taguatinga", icon: Building2 },
  { label: "Planaltina", href: "/regioes/planaltina", icon: Landmark },
  { label: "Vicente Pires", href: "/regioes/vicente-pires", icon: Trees },
  { label: "Sudoeste", href: "/regioes/sudoeste", icon: Building2 },
  { label: "Octogonal", href: "/regioes/octogonal", icon: Building2 },
  { label: "Noroeste", href: "/regioes/noroeste", icon: Trees },
  { label: "Jardim Botânico", href: "/regioes/jardim-botanico", icon: Trees },
  { label: "Park Way", href: "/regioes/park-way", icon: Landmark },
  { label: "Consórcio", href: "/#consorcio", icon: Calculator },
  { label: "Indique e Ganhe", href: "/#programa-indicacao", icon: Gift },
];

const featureCards = [
  {
    title: "Águas Claras em profundidade",
    eyebrow: "Guia regional",
    href: "/regioes/aguas-claras",
    description: "Planejamento urbano, metrô, parques, dados de população, infraestrutura e mercado imobiliário em uma das regiões mais dinâmicas do DF.",
    image: "/assets/top-imobiliaria/hero-aguas-claras-day.jpg",
    icon: Building2,
  },
  {
    title: "Ceilândia: cultura e transformação",
    eyebrow: "Guia regional",
    href: "/regioes/ceilandia",
    description: "História, cultura, mobilidade, comércio e mercado imobiliário na maior região administrativa do Distrito Federal.",
    image: "/assets/top-imobiliaria/regions/ceilandia.jpg",
    icon: Building2,
  },  {
    title: "Cruzeiro: história e centralidade",
    eyebrow: "Guia regional",
    href: "/regioes/cruzeiro",
    description: "Cruzeiro Velho, Cruzeiro Novo, patrimônio, cultura, infraestrutura e possibilidades de renovação em uma região central.",
    image: "/assets/top-imobiliaria/hero-aguas-claras-day.jpg",
    icon: Landmark,
  },
  {
    title: "Morar na Asa Sul",
    eyebrow: "Guia regional",
    href: "/regioes/asa-sul",
    description: "História, mobilidade, áreas verdes, serviços e mercado imobiliário em uma das regiões mais tradicionais de Brasília.",
    image: "/assets/top-imobiliaria/hero-aguas-claras-day.jpg",
    icon: Trees,
  },
  {
    title: "Vida e alto padrão no Lago Sul",
    eyebrow: "Guia regional",
    href: "/regioes/lago-sul",
    description: "Exclusividade, Lago Paranoá, lazer, privacidade e valorização em uma das áreas mais nobres do Distrito Federal.",
    image: "/assets/top-imobiliaria/hero-aguas-claras-day.jpg",
    icon: Waves,
  },
  {
    title: "Mercado imobiliário na Asa Norte",
    eyebrow: "Guia regional",
    href: "/regioes/asa-norte",
    description: "Educação, mobilidade, comércio, demanda de locação e qualidade de vida no Plano Piloto.",
    image: "/assets/top-imobiliaria/hero-aguas-claras-day.jpg",
    icon: Landmark,
  },
  {
    title: "Consórcio x Financiamento",
    eyebrow: "Calculadora aberta",
    href: "/#consorcio",
    description: "Compare caminhos para comprar imóvel em Brasília com uma ferramenta direta, sem formulário obrigatório no início.",
    image: "/assets/top-imobiliaria/hero-aguas-claras-day.jpg",
    icon: Calculator,
  },
  {
    title: "Lago Norte com natureza e acesso",
    eyebrow: "Guia regional",
    href: "/regioes/lago-norte",
    description: "Qualidade de vida, Lago Paranoá, comércio, mobilidade e mercado imobiliário em uma região residencial consolidada.",
    image: "/assets/top-imobiliaria/hero-aguas-claras-day.jpg",
    icon: Waves,
  },
  {
    title: "Sobradinho e a Saída Norte",
    eyebrow: "Guia regional",
    href: "/regioes/sobradinho",
    description: "História, natureza, memória dos pioneiros, a transformação da BR-020 e os novos vetores de expansão do Norte do DF.",
    image: "/assets/top-imobiliaria/regions/sobradinho.jpg",
    icon: Landmark,
  },
  {
    title: "Samambaia: metrô e expansão",
    eyebrow: "Guia regional",
    href: "/regioes/samambaia",
    description: "Uma das maiores regiões do DF: história, metrô, população jovem, educação, saúde, mobilidade e mercado imobiliário em plena verticalização.",
    image: "/assets/top-imobiliaria/regions/samambaia.jpg",
    icon: Train,
  },
  {
    title: "Núcleo Bandeirante e a Cidade Livre",
    eyebrow: "Guia regional",
    href: "/regioes/nucleo-bandeirante",
    description: "A história da Cidade Livre, os candangos, a memória viva de Brasília, o comércio tradicional e a proximidade do Plano Piloto.",
    image: "/assets/top-imobiliaria/regions/nucleo-bandeirante.jpg",
    icon: Landmark,
  },
  {
    title: "Guará completo e bem localizado",
    eyebrow: "Guia regional",
    href: "/regioes/guara",
    description: "Metrô, comércio consolidado, Feira do Guará, lazer, infraestrutura e mercado imobiliário aquecido.",
    image: "/assets/top-imobiliaria/hero-aguas-claras-day.jpg",
    icon: Train,
  },
  {
    title: "Taguatinga como polo econômico",
    eyebrow: "Guia regional",
    href: "/regioes/taguatinga",
    description: "Comércio forte, mobilidade, serviços, educação, verticalização e oportunidades para morar ou investir.",
    image: "/assets/top-imobiliaria/hero-aguas-claras-day.jpg",
    icon: Building2,
  },
  {
    title: "Planaltina histórica e em expansão",
    eyebrow: "Guia regional",
    href: "/regioes/planaltina",
    description: "Patrimônio cultural, Pedra Fundamental, comércio ativo, desenvolvimento urbano e oportunidades imobiliárias.",
    image: "/assets/top-imobiliaria/hero-aguas-claras-day.jpg",
    icon: Landmark,
  },
  {
    title: "Vicente Pires em valorização",
    eyebrow: "Guia regional",
    href: "/regioes/vicente-pires",
    description: "Condomínios, casas amplas, infraestrutura em modernização, localização estratégica e mercado dinâmico.",
    image: "/assets/top-imobiliaria/hero-aguas-claras-day.jpg",
    icon: Trees,
  },
  {
    title: "Sudoeste: consolidado e central",
    eyebrow: "Guia regional",
    href: "/regioes/sudoeste",
    description: "História, dados da PDAD-A 2024, área tombada, comércio local, parques, a obra da EPIG e um mercado verticalizado e maduro.",
    image: "/assets/top-imobiliaria/regions/sudoeste.jpg",
    icon: Building2,
  },
  {
    title: "Noroeste: planejado e em consolidação",
    eyebrow: "Guia regional",
    href: "/regioes/noroeste",
    description: "Setor recente do Plano Piloto: história, Parque Burle Marx, área tombada, PPCUB e um mercado imobiliário novo e verticalizado.",
    image: "/assets/top-imobiliaria/regions/noroeste.jpg",
    icon: Trees,
  },
  {
    title: "Octogonal: central e condominial",
    eyebrow: "Guia regional",
    href: "/regioes/octogonal",
    description: "Oito conjuntos em condomínios entre o Plano Piloto e o eixo oeste: história, Parque da Cidade, Terraço Shopping, a obra da EPIG e um mercado verticalizado e escasso.",
    image: "/assets/top-imobiliaria/regions/octogonal.jpg",
    icon: Building2,
  },
  {
    title: "Jardim Botânico em expansão",
    eyebrow: "Guia regional",
    href: "/regioes/jardim-botanico",
    description: "Natureza, condomínios, qualidade de vida, infraestrutura em crescimento e forte potencial de valorização.",
    image: "/assets/top-imobiliaria/hero-aguas-claras-day.jpg",
    icon: Trees,
  },
  {
    title: "Park Way exclusivo e arborizado",
    eyebrow: "Guia regional",
    href: "/regioes/park-way",
    description: "Grandes terrenos, baixa densidade, privacidade, natureza e mercado imobiliário de alto padrão.",
    image: "/assets/top-imobiliaria/hero-aguas-claras-day.jpg",
    icon: Landmark,
  },
];

export default function IntelligenceHub() {
  return (
    <section id="hub-inteligencia" className="intelligence-hub" aria-labelledby="intelligence-hub-title">
      <div className="intelligence-hub-inner">
        <div className="hub-heading">
          <div className="hub-kicker">
            <MapPinned size={16} />
            Hub de Inteligência de Brasília
          </div>
          <h2 id="intelligence-hub-title">Guias, bairros e ferramentas estratégicas</h2>
          <p>
            Atalhos diretos para regiões, conteúdos e simuladores que ajudam proprietários,
            compradores e investidores a tomar decisões melhores no Distrito Federal.
          </p>
        </div>

        <nav className="hub-tags" aria-label="Atalhos principais de bairros e ferramentas">
          {quickLinks.map((item) => (
            <Link className="hub-tag" href={item.href} key={item.label}>
              <item.icon size={18} />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="hub-card-rail" aria-label="Conteúdos em destaque sobre Brasília">
          {featureCards.map((card) => (
            <Link className="hub-card" href={card.href} key={card.title}>
              <span
                className="hub-card-media"
                style={{ backgroundImage: `linear-gradient(180deg,rgba(15,26,46,0.12),rgba(15,26,46,0.72)), url('${card.image}')` }}
              >
                <span className="hub-card-icon">
                  <card.icon size={22} />
                </span>
              </span>
              <span className="hub-card-body">
                <span className="hub-card-eyebrow">{card.eyebrow}</span>
                <span className="hub-card-title">{card.title}</span>
                <span className="hub-card-description">{card.description}</span>
                <span className="hub-card-action">Ler guia</span>
              </span>
            </Link>
          ))}
        </div>

        <div className="hub-utility-row">
          <Link href="/blog-index.html">Ver todos os conteúdos imobiliários</Link>
          <Link href="/#simulador">Avaliar meu imóvel no DF</Link>
          <Link href="/#consorcio">Abrir calculadora de consórcio</Link>
        </div>
      </div>
    </section>
  );
}
