import Link from "next/link";
import {
  Building2,
  Calculator,
  Gift,
  Landmark,
  MapPinned,
  Trees,
  Waves,
} from "lucide-react";

const quickLinks = [
  { label: "Águas Claras", href: "/blog-imoveis-aguas-claras.html", icon: Building2 },
  { label: "Asa Sul", href: "/regioes/asa-sul", icon: Trees },
  { label: "Asa Norte", href: "/regioes/asa-norte", icon: Landmark },
  { label: "Lago Sul", href: "/regioes/lago-sul", icon: Waves },
  { label: "Consórcio", href: "/#consorcio", icon: Calculator },
  { label: "Indique e Ganhe", href: "/#programa-indicacao", icon: Gift },
];

const featureCards = [
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
];

export default function IntelligenceHub() {
  return (
    <section className="intelligence-hub" aria-labelledby="intelligence-hub-title">
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
