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
const PAGE_URL = `${SITE_URL}/regioes/park-way`;

export const metadata: Metadata = {
  title:
    "Morar no Park Way DF: Natureza, Exclusividade e Mercado Imobiliário | Top Imobiliária",
  description:
    "Conheça o Park Way em Brasília: natureza, exclusividade, grandes terrenos, qualidade de vida e mercado imobiliário de alto padrão.",
  alternates: {
    canonical: "/regioes/park-way",
  },
  keywords:
    "Park Way DF, imóveis no Park Way, morar no Park Way, investir no Park Way, mercado imobiliário Park Way, casas no Park Way",
};

const highlights = [
  {
    title: "Exclusividade residencial",
    text: "Grandes lotes, baixa densidade, privacidade, casas de alto padrão e ambiente residencial silencioso.",
    icon: ShieldCheck,
  },
  {
    title: "Acesso privilegiado",
    text: "Conexão rápida com Plano Piloto, Aeroporto, Lago Sul, Núcleo Bandeirante, Guará, SIA e EPIA.",
    icon: MapPinned,
  },
  {
    title: "Mercado de alto padrão",
    text: "Casas, chácaras urbanas, condomínios e terrenos amplos com oferta limitada e procura constante.",
    icon: TrendingUp,
  },
];

const sections = [
  {
    title: "História do Park Way",
    icon: Landmark,
    body: [
      "O Park Way surgiu dentro do planejamento urbano de Brasília com o objetivo de criar uma região predominantemente residencial, marcada por grandes lotes, baixa ocupação e integração com o meio ambiente.",
      "Ao longo das décadas, preservou sua identidade, tornando-se uma referência em qualidade de vida e valorização imobiliária.",
      "O bairro conseguiu crescer mantendo sua essência, oferecendo um ambiente diferenciado em relação ao restante da capital.",
    ],
  },
  {
    title: "Localização estratégica",
    icon: MapPinned,
    body: [
      "O Park Way possui localização privilegiada.",
      "A região oferece acesso rápido ao Plano Piloto, Aeroporto Internacional de Brasília, Lago Sul, Núcleo Bandeirante, Guará, SIA, Jardim Botânico e EPIA.",
      "Essa posição estratégica permite deslocamentos rápidos tanto para o centro administrativo quanto para outras regiões do Distrito Federal.",
    ],
  },
  {
    title: "População e perfil dos moradores",
    icon: Home,
    body: [
      "O Park Way reúne moradores que valorizam espaço, tranquilidade e contato com a natureza.",
      "Entre eles destacam-se famílias, empresários, servidores públicos, profissionais liberais, diplomatas e investidores.",
      "A região é conhecida pelo ambiente residencial silencioso e pela forte preocupação com a preservação ambiental.",
    ],
  },
  {
    title: "Educação",
    icon: GraduationCap,
    body: [
      "Os moradores contam com acesso facilitado a escolas públicas e particulares da própria região e de bairros vizinhos.",
      "A proximidade com instituições de ensino do Plano Piloto, Lago Sul e Guará amplia as opções para famílias com filhos em diferentes fases escolares.",
    ],
  },
  {
    title: "Saúde",
    icon: HeartPulse,
    body: [
      "O Park Way oferece acesso rápido a hospitais, clínicas e laboratórios localizados principalmente no Plano Piloto, Lago Sul e Guará.",
      "Essa conectividade garante atendimento médico de qualidade em diversas especialidades.",
    ],
  },
  {
    title: "Comércio e serviços",
    icon: BookOpen,
    body: [
      "Embora mantenha perfil predominantemente residencial, o Park Way possui fácil acesso a supermercados, farmácias, restaurantes, padarias, academias, clínicas, pet shops e centros comerciais.",
      "Os moradores também utilizam com frequência os serviços disponíveis no Guará, Núcleo Bandeirante e Plano Piloto.",
    ],
  },
  {
    title: "Natureza e qualidade de vida",
    icon: Trees,
    body: [
      "Este é o maior diferencial da região.",
      "O Park Way oferece grandes áreas verdes, ruas arborizadas, lotes amplos, baixa densidade urbana, tranquilidade, contato permanente com a natureza e excelente qualidade do ar.",
      "Essas características fazem do bairro um dos melhores lugares para quem busca um estilo de vida mais calmo, saudável e próximo ao Cerrado.",
    ],
  },
  {
    title: "Mercado imobiliário",
    icon: Building2,
    body: [
      "O mercado imobiliário do Park Way é um dos mais exclusivos do Distrito Federal.",
      "A região reúne casas de alto padrão, chácaras urbanas, condomínios, terrenos amplos e imóveis com projetos arquitetônicos diferenciados.",
      "A oferta limitada de terrenos e a elevada procura contribuem para a valorização constante dos imóveis.",
    ],
  },
  {
    title: "O futuro da região",
    icon: TrendingUp,
    body: [
      "O Park Way continuará sendo uma das regiões mais valorizadas do Distrito Federal.",
      "A preservação ambiental, aliada aos investimentos em infraestrutura e mobilidade, tende a fortalecer ainda mais sua atratividade para moradores e investidores.",
      "A região mantém o equilíbrio entre desenvolvimento urbano, privacidade, natureza e qualidade de vida.",
    ],
  },
];

const indicators = [
  ["Ano de criação", "2003"],
  ["População aproximada", "Perfil residencial de baixa densidade"],
  ["Área", "Região marcada por lotes amplos e áreas verdes"],
  ["Principais vias de acesso", "EPIA, EPVP e vias de ligação ao Plano Piloto e ao Aeroporto"],
  ["Perfil dos imóveis", "Casas de alto padrão, chácaras urbanas, condomínios e terrenos"],
  ["Potencial de valorização", "Muito elevado, pela oferta limitada e alta procura"],
];

const relatedGuides = [
  ["Jardim Botânico", "/regioes/jardim-botanico"],
  ["Lago Sul", "/regioes/lago-sul"],
  ["Guará", "/regioes/guara"],
  ["Sudoeste", "/regioes/sudoeste"],
  ["Noroeste", "/regioes/noroeste"],
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline:
        "Park Way (DF): Natureza, Exclusividade e Mercado Imobiliário em Brasília",
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
        { "@type": "ListItem", position: 3, name: "Park Way", item: PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "O Park Way é uma boa região para morar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. O bairro oferece exclusividade, natureza, segurança e excelente localização, sendo uma das regiões mais valorizadas de Brasília.",
          },
        },
        {
          "@type": "Question",
          name: "Vale a pena investir em imóveis no Park Way?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. O mercado é consolidado, com imóveis de alto padrão, oferta limitada e histórico de valorização consistente.",
          },
        },
        {
          "@type": "Question",
          name: "O Park Way continua preservando suas áreas verdes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. A preservação ambiental é uma das principais características da região e faz parte da sua identidade urbanística.",
          },
        },
      ],
    },
  ],
};

export default function ParkWayPage() {
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
            <h1>Park Way: natureza, exclusividade e mercado imobiliário em Brasília</h1>
            <p>
              Guia completo sobre uma das regiões mais exclusivas do Distrito
              Federal, com grandes terrenos, áreas verdes, privacidade,
              qualidade de vida e mercado imobiliário de alto padrão.
            </p>
            <div className="region-hero-actions">
              <Link href="/imoveis?regiao=Park%20Way">Ver imóveis no Park Way</Link>
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
                <h2>Conheça o Park Way</h2>
                <p>
                  O Park Way é uma das regiões administrativas mais exclusivas
                  do Distrito Federal. Conhecido pelos amplos terrenos, pelas
                  áreas verdes preservadas e pelo estilo de vida tranquilo, o
                  bairro oferece uma experiência única para quem deseja morar
                  próximo ao Plano Piloto sem abrir mão da natureza, da
                  privacidade e da qualidade de vida.
                </p>
                <p>
                  Diferentemente de outras regiões de Brasília, o Park Way foi
                  planejado para manter baixa densidade populacional e preservar
                  grandes áreas arborizadas.
                </p>
              </div>

              <figure className="region-image-card">
                <Image
                  src="/assets/top-imobiliaria/hero-aguas-claras-day.jpg"
                  alt="Vista urbana de Brasília usada como imagem principal do guia do Park Way"
                  width={1200}
                  height={525}
                  sizes="(max-width: 800px) 100vw, 1040px"
                />
                <figcaption>
                  Guia regional do Park Way com foco em natureza, lotes amplos,
                  exclusividade e mercado imobiliário de alto padrão.
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
                  Pouca gente sabe que o Park Way é uma das regiões com maior
                  concentração de áreas verdes privadas de Brasília.
                </p>
                <p>
                  Sua configuração urbanística, baseada em lotes amplos e baixa
                  ocupação, contribui para a preservação do Cerrado e para um
                  ambiente residencial diferenciado.
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

              <section className="region-decision-grid" aria-label="Perguntas frequentes sobre o Park Way">
                <div>
                  <h2>O Park Way é uma boa região para morar?</h2>
                  <p>
                    Sim. O bairro oferece exclusividade, natureza, segurança e
                    excelente localização, sendo uma das regiões mais valorizadas
                    de Brasília.
                  </p>
                </div>
                <div>
                  <h2>Vale a pena investir no Park Way?</h2>
                  <p>
                    Sim. O mercado é consolidado, com imóveis de alto padrão,
                    oferta limitada e histórico de valorização consistente.
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
                  <Link href="/imoveis?regiao=Park%20Way">Ver imóveis no Park Way</Link>
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
                  Nossa equipe auxilia proprietários, compradores e investidores
                  com transparência, tecnologia e profundo conhecimento das
                  regiões administrativas de Brasília.
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
                  compare regiões com perfis residenciais, estratégicos e de
                  alto padrão.
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
