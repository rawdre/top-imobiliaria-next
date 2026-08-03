import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Building2,
  GraduationCap,
  HeartPulse,
  Home,
  Landmark,
  MapPinned,
  ShieldCheck,
  Sparkles,
  Trees,
  TrendingUp,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import SiteAssistant from "@/components/SiteAssistant";

const SITE_URL = "https://www.topimobiliaria.com";
const PAGE_URL = `${SITE_URL}/regioes/jardim-botanico`;

export const metadata: Metadata = {
  title:
    "Morar no Jardim Botânico DF: História, Mercado Imobiliário e Qualidade de Vida | Top Imobiliária",
  description:
    "Descubra como é morar no Jardim Botânico, sua história, infraestrutura, natureza, mercado imobiliário e oportunidades para investir.",
  alternates: {
    canonical: "/regioes/jardim-botanico",
  },
  keywords:
    "Jardim Botânico DF, imóveis no Jardim Botânico, morar no Jardim Botânico, investir no Jardim Botânico, mercado imobiliário Jardim Botânico, condomínios Jardim Botânico",
};

const highlights = [
  {
    title: "Natureza e bem-estar",
    text: "Região com áreas verdes, Cerrado preservado, condomínios residenciais e estilo de vida mais tranquilo.",
    icon: Trees,
  },
  {
    title: "Localização estratégica",
    text: "Acesso ao Plano Piloto, Lago Sul, Ponte JK, Aeroporto, Jardim Mangueiral e São Sebastião.",
    icon: MapPinned,
  },
  {
    title: "Valorização imobiliária",
    text: "Mercado forte em casas, terrenos, sobrados, condomínios e empreendimentos planejados.",
    icon: TrendingUp,
  },
];

const sections = [
  {
    title: "História do Jardim Botânico",
    icon: Landmark,
    body: [
      "O desenvolvimento do Jardim Botânico está ligado à expansão planejada de Brasília em direção ao leste do Distrito Federal.",
      "A região cresceu a partir de antigas áreas rurais e condomínios, passando por um processo gradual de regularização e urbanização.",
      "Ao longo dos anos, novos empreendimentos residenciais e investimentos públicos transformaram o Jardim Botânico em uma das regiões mais valorizadas da capital.",
      "O crescimento ocorreu preservando importantes áreas do Cerrado, contribuindo para um ambiente diferenciado e de grande beleza natural.",
    ],
  },
  {
    title: "Localização estratégica",
    icon: MapPinned,
    body: [
      "O Jardim Botânico possui localização privilegiada e acesso facilitado às principais regiões do Distrito Federal.",
      "A partir da região é possível chegar com facilidade ao Plano Piloto, Lago Sul, Ponte JK, Esplanada dos Ministérios, Aeroporto Internacional de Brasília, Setor de Clubes, Jardim Mangueiral e São Sebastião.",
      "Essa posição estratégica permite deslocamentos rápidos para áreas administrativas, comerciais e de lazer.",
    ],
  },
  {
    title: "População e perfil dos moradores",
    icon: Home,
    body: [
      "O Jardim Botânico reúne famílias, servidores públicos, empresários, profissionais liberais, aposentados e investidores.",
      "Grande parte dos moradores procura qualidade de vida, segurança, contato com a natureza e imóveis com maior espaço interno.",
    ],
  },
  {
    title: "Educação",
    icon: GraduationCap,
    body: [
      "A região conta com diversas instituições de ensino, além da proximidade com importantes escolas do Lago Sul e do Plano Piloto.",
      "Os moradores têm acesso a educação infantil, ensino fundamental, ensino médio, cursos de idiomas, escolas particulares e instituições públicas de ensino.",
    ],
  },
  {
    title: "Saúde",
    icon: HeartPulse,
    body: [
      "O Jardim Botânico possui clínicas, laboratórios e consultórios, além de acesso rápido aos hospitais do Lago Sul, Asa Sul e Plano Piloto.",
      "Essa proximidade garante ampla oferta de atendimento médico especializado.",
    ],
  },
  {
    title: "Comércio e serviços",
    icon: BookOpen,
    body: [
      "O crescimento da região trouxe uma expansão significativa do comércio.",
      "Hoje o Jardim Botânico oferece supermercados, farmácias, restaurantes, cafeterias, academias, padarias, clínicas, pet shops, bancos, centros comerciais e serviços especializados.",
      "A tendência é de contínua ampliação da infraestrutura comercial.",
    ],
  },
  {
    title: "Natureza e qualidade de vida",
    icon: Trees,
    body: [
      "Este é um dos grandes diferenciais do Jardim Botânico.",
      "A região proporciona grande quantidade de áreas verdes, contato permanente com o Cerrado, clima agradável, ruas arborizadas, espaços para caminhadas, ciclovias e ambiente residencial.",
      "A proximidade com unidades de conservação ambiental contribui para um estilo de vida mais saudável e tranquilo.",
    ],
  },
  {
    title: "Mercado imobiliário",
    icon: Building2,
    body: [
      "O mercado imobiliário do Jardim Botânico está entre os que mais cresceram nos últimos anos no Distrito Federal.",
      "A região oferece condomínios horizontais, casas de alto padrão, terrenos, sobrados, imóveis modernos e empreendimentos planejados.",
      "A procura permanece elevada devido à excelente qualidade de vida e ao potencial de valorização.",
    ],
  },
  {
    title: "O futuro da região",
    icon: TrendingUp,
    body: [
      "O Jardim Botânico segue em processo de consolidação como uma das regiões mais desejadas do Distrito Federal.",
      "Os investimentos públicos e privados em mobilidade, regularização, infraestrutura e novos empreendimentos indicam uma tendência de crescimento sustentável.",
      "Esse movimento fortalece a valorização imobiliária e a qualidade de vida dos moradores.",
    ],
  },
];

const indicators = [
  ["Ano de criação", "2004"],
  ["População aproximada", "Região em crescimento contínuo"],
  ["Área", "Região administrativa com forte presença de áreas verdes e condomínios"],
  ["Principais vias de acesso", "DF-001, DF-463 e Ponte JK"],
  ["Perfil dos imóveis", "Casas, sobrados, terrenos e condomínios de médio e alto padrão"],
  ["Potencial de valorização", "Elevado, impulsionado por expansão urbana e infraestrutura"],
];

const relatedGuides = [
  ["Lago Sul", "/regioes/lago-sul"],
  ["Park Way", "/regioes/park-way"],
  ["Lago Norte", "/regioes/lago-norte"],
  ["Sudoeste", "/regioes/sudoeste"],
  ["Noroeste", "/regioes/noroeste"],
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline:
        "Jardim Botânico (DF): História, Qualidade de Vida, Natureza e Mercado Imobiliário",
      description: metadata.description,
      url: PAGE_URL,
      publisher: {
        "@type": "Organization",
        name: "Top Imobiliária",
        url: SITE_URL,
      },
      mainEntityOfPage: PAGE_URL,
      inLanguage: "pt-BR",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Regiões", item: `${SITE_URL}/blog-index.html` },
        { "@type": "ListItem", position: 3, name: "Jardim Botânico", item: PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "O Jardim Botânico é uma boa região para morar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. A combinação entre natureza, qualidade de vida, infraestrutura e localização torna a região uma das mais desejadas do Distrito Federal.",
          },
        },
        {
          "@type": "Question",
          name: "Vale a pena investir em imóveis no Jardim Botânico?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. O mercado apresenta forte procura, novos empreendimentos e perspectivas positivas de valorização.",
          },
        },
        {
          "@type": "Question",
          name: "O Jardim Botânico continua crescendo?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. A região segue recebendo investimentos públicos e privados, consolidando-se como um dos principais polos residenciais de Brasília.",
          },
        },
      ],
    },
  ],
};

export default function JardimBotanicoPage() {
  return (
    <>
      <Header />
      <main className="region-page">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <section className="region-hero">
          <div className="region-inner">
            <div className="region-kicker">Regiões do Distrito Federal</div>
            <h1>Jardim Botânico: natureza, qualidade de vida e mercado imobiliário em Brasília</h1>
            <p>
              Guia completo sobre uma das regiões que mais crescem no Distrito
              Federal, com condomínios, áreas verdes, infraestrutura em expansão
              e forte potencial de valorização.
            </p>
            <div className="region-hero-actions">
              <Link href="/imoveis?regiao=Jardim%20Bot%C3%A2nico">Ver imóveis no Jardim Botânico</Link>
              <Link href="/#simulador">Avaliar imóvel na região</Link>
            </div>
          </div>
        </section>

        <section className="region-content">
          <div className="region-inner">
            <div className="region-highlight-grid">
              {highlights.map((item) => (
                <article className="region-highlight" key={item.title}>
                  <item.icon size={22} />
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

            <article className="region-article">
              <div className="region-intro-block">
                <h2>Conheça o Jardim Botânico</h2>
                <p>
                  O Jardim Botânico é uma das regiões administrativas que mais
                  cresceram e se desenvolveram no Distrito Federal nas últimas
                  décadas. Conhecida pela combinação entre natureza preservada,
                  condomínios residenciais, qualidade de vida e excelente
                  potencial de valorização imobiliária, tornou-se uma das
                  escolhas preferidas de famílias, profissionais e investidores.
                </p>
                <p>
                  Sua localização estratégica permite viver próximo ao Plano
                  Piloto sem abrir mão de tranquilidade, áreas verdes e um estilo
                  de vida mais conectado com a natureza.
                </p>
              </div>

              <figure className="region-image-card">
                <Image
                  src="/assets/top-imobiliaria/hero-aguas-claras-day.jpg"
                  alt="Vista urbana de Brasília usada como imagem principal do guia do Jardim Botânico"
                  width={1200}
                  height={525}
                  sizes="(max-width: 800px) 100vw, 1040px"
                />
                <figcaption>
                  Guia regional do Jardim Botânico com foco em natureza,
                  condomínios, infraestrutura e mercado imobiliário.
                </figcaption>
              </figure>

              {sections.map((section) => (
                <section className="region-section" key={section.title}>
                  <div className="region-section-title">
                    <section.icon size={22} />
                    <h2>{section.title}</h2>
                  </div>
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </section>
              ))}

              <section className="region-section">
                <div className="region-section-title">
                  <Sparkles size={22} />
                  <h2>Curiosidades</h2>
                </div>
                <p>
                  Pouca gente sabe que o Jardim Botânico está inserido em uma
                  das áreas de maior riqueza ambiental do Distrito Federal, com
                  forte presença do Cerrado e proximidade de importantes
                  unidades de conservação.
                </p>
                <p>
                  Essa característica faz da região uma das mais procuradas por
                  quem deseja viver em contato com a natureza sem abrir mão da
                  infraestrutura urbana.
                </p>
              </section>

              <section className="region-section">
                <div className="region-section-title">
                  <ShieldCheck size={22} />
                  <h2>Indicadores da região</h2>
                </div>
                <div className="region-indicator-grid">
                  {indicators.map(([label, value]) => (
                    <div key={label}>
                      <strong>{label}</strong>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="region-decision-grid" aria-label="Perguntas frequentes sobre o Jardim Botânico">
                <div>
                  <h2>O Jardim Botânico é uma boa região para morar?</h2>
                  <p>
                    Sim. A combinação entre natureza, qualidade de vida,
                    infraestrutura e localização torna a região uma das mais
                    desejadas do Distrito Federal.
                  </p>
                </div>
                <div>
                  <h2>Vale a pena investir no Jardim Botânico?</h2>
                  <p>
                    Sim. O mercado apresenta forte procura, novos
                    empreendimentos, crescimento urbano e perspectivas positivas
                    de valorização.
                  </p>
                </div>
              </section>

              <section className="region-section">
                <div className="region-section-title">
                  <Building2 size={22} />
                  <h2>Imóveis disponíveis nesta região</h2>
                </div>
                <p>
                  A Top conecta o conteúdo regional às oportunidades reais de
                  compra, venda, locação, administração e avaliação de imóveis.
                </p>
                <div className="region-cta-actions region-inline-actions">
                  <Link href="/imoveis?regiao=Jardim%20Bot%C3%A2nico">Ver imóveis no Jardim Botânico</Link>
                  <Link href="/#imoveis">Comprar imóvel</Link>
                  <Link href="/#proprietarios">Vender ou anunciar imóvel</Link>
                </div>
              </section>

              <section className="region-cta">
                <h2>Como a Top Imobiliária pode ajudar</h2>
                <p>
                  Há mais de 30 anos, a Top Imobiliária acompanha a evolução do
                  mercado imobiliário do Distrito Federal, oferecendo atendimento
                  especializado para compra, venda, locação, administração e
                  avaliação de imóveis.
                </p>
                <p>
                  Se você deseja conhecer melhor o Jardim Botânico ou encontrar
                  oportunidades imobiliárias na região, conte com a experiência
                  da Top Imobiliária.
                </p>
                <div className="region-cta-actions">
                  <Link href="/">Página inicial</Link>
                  <Link href="/#administracao">Administração de imóveis</Link>
                  <Link href="/#simulador">Avaliação de imóveis</Link>
                  <Link href="/#consorcio">Simuladores da Top</Link>
                  <Link href="/#contato">Contato</Link>
                </div>
              </section>

              <section className="region-section">
                <div className="region-section-title">
                  <MapPinned size={22} />
                  <h2>Continue conhecendo Brasília</h2>
                </div>
                <p>
                  Explore outros guias do Hub de Inteligência de Brasília e
                  compare regiões próximas, consolidadas e em valorização.
                </p>
                <div className="region-cta-actions region-inline-actions">
                  {relatedGuides.map(([label, href]) => (
                    <Link href={href} key={href}>{label}</Link>
                  ))}
                </div>
              </section>
            </article>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTopButton />
      <WhatsAppButton />
      <SiteAssistant />
    </>
  );
}
