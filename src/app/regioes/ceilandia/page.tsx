import type { Metadata } from "next";
import Link from "next/link";
import {
  Bus,
  Building2,
  Calendar,
  GraduationCap,
  HeartPulse,
  Home,
  Landmark,
  MapPinned,
  Music,
  Sparkles,
  TrendingUp,
  Users,
  Utensils,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import SiteAssistant from "@/components/SiteAssistant";

export const metadata: Metadata = {
  title:
    "Ceilândia (DF): história, cultura, população e mercado imobiliário | Top Imobiliária",
  description:
    "Guia completo de Ceilândia no DF: história desde 1971, a Caixa d'Água, cultura e hip-hop, Casa do Cantador, Feira Central, população, mobilidade, qualidade de vida e mercado imobiliário na maior região administrativa de Brasília.",
  alternates: {
    canonical: "/regioes/ceilandia",
  },
  keywords:
    "Ceilândia DF, imóveis em Ceilândia, morar em Ceilândia, história de Ceilândia, Caixa d'Água Ceilândia, Feira Central de Ceilândia, mercado imobiliário Ceilândia, apartamentos Ceilândia",
};

// Dados oficiais (PDAD-A 2024 / IPEDF / CLDF) — números verificados citados no guia.
const stats = [
  { value: "287.113", label: "Habitantes (PDAD-A 2024)" },
  { value: "1ª", label: "RA mais populosa do DF" },
  { value: "34,8", label: "Idade média (anos)" },
  { value: "1971", label: "Fundada em 27 de março" },
  { value: "RA IX", label: "Região Administrativa desde 1989" },
  { value: "17.619", label: "Lotes originais de 10×25 m" },
];

const highlights = [
  {
    title: "A maior região do DF",
    text: "Ceilândia é a região administrativa mais populosa do Distrito Federal, com forte identidade cultural, comercial e comunitária.",
    icon: Users,
  },
  {
    title: "Berço cultural de Brasília",
    text: "Referência nacional em hip-hop, rap e grafite, com a Casa do Cantador e uma cena nordestina que definiu a cultura da cidade.",
    icon: Music,
  },
  {
    title: "Mercado em transformação",
    text: "Comércio pujante, mobilidade por metrô e crescente oferta de imóveis para moradia e investimento em uma cidade que não para de evoluir.",
    icon: TrendingUp,
  },
];

const sections = [
  {
    title: "A história de Ceilândia",
    icon: Landmark,
    body: [
      "Ceilândia nasceu em 27 de março de 1971, a partir da Campanha de Erradicação de Invasões (CEI), criada para reassentar milhares de famílias que viviam em acampamentos próximos ao Plano Piloto durante a construção de Brasília.",
      "O próprio nome carrega essa origem: CEI + lândia. A pedra fundamental foi lançada perto da Caixa d'Água, e a primeira família a se mudar, de Edite Martins, ocupou a QNM 23. Já no dia seguinte, 28 de março de 1971, começava a primeira linha de ônibus ligando Ceilândia ao Plano Piloto.",
      "O projeto original previa 17.619 lotes de 10 por 25 metros, distribuídos primeiro pelos setores M e N, com a expansão dos setores O e P entre 1976 e 1977 e a criação do Setor Industrial em 1980. Em 1989, Ceilândia tornou-se oficialmente a Região Administrativa IX.",
      "O que começou como um reassentamento se transformou em uma das maiores e mais vibrantes cidades do Distrito Federal — 59,3% de seus moradores nasceram no próprio DF e boa parte das famílias migrantes tem raízes no Nordeste.",
    ],
  },
  {
    title: "A Caixa d'Água: símbolo da cidade",
    icon: Sparkles,
    body: [
      "Poucos monumentos representam uma cidade como a Caixa d'Água representa Ceilândia. Erguida nos primeiros anos, tornou-se o marco visual e afetivo da região, ponto de referência e símbolo de pertencimento para gerações de moradores.",
      "Mais do que infraestrutura, ela conta a história de uma comunidade que se construiu com as próprias mãos e transformou um começo difícil em orgulho e identidade.",
    ],
  },
  {
    title: "Quem mora em Ceilândia",
    icon: Home,
    body: [
      "Com 287.113 habitantes segundo a PDAD-A 2024, Ceilândia é a região administrativa mais populosa do Distrito Federal. A idade média dos moradores é de 34,8 anos, o que revela uma cidade jovem e produtiva.",
      "A população é marcada pela força de trabalho, pelo empreendedorismo e por um forte senso de comunidade. Famílias tradicionais convivem com novas gerações que escolhem permanecer na cidade onde cresceram.",
    ],
  },
  {
    title: "Cultura e identidade",
    icon: Music,
    body: [
      "Ceilândia é um dos maiores polos culturais do Distrito Federal e referência nacional no hip-hop e no rap. As ruas da cidade formaram artistas reconhecidos em todo o país e mantêm viva uma cena de grafite, dança e poesia.",
      "A Casa do Cantador, projetada por Oscar Niemeyer, celebra a cultura nordestina e a literatura de cordel, reforçando as raízes que ajudaram a formar a identidade da cidade. É cultura de raiz, feita pela comunidade e para a comunidade.",
    ],
  },
  {
    title: "Feira Central e gastronomia",
    icon: Utensils,
    body: [
      "A Feira Central de Ceilândia é um dos corações da cidade: um espaço de comércio, encontro e cultura popular, onde a gastronomia nordestina, o forró e o artesanato se misturam ao dia a dia dos moradores.",
      "É ali que a cidade mostra sua alma — na comida, na música ao vivo e na convivência que atravessa gerações.",
    ],
  },
  {
    title: "Educação e saúde",
    icon: GraduationCap,
    body: [
      "Ceilândia conta com ampla rede de escolas públicas e particulares, além de instituições de ensino técnico e superior que atendem a região e o entorno.",
      "Na saúde, o Hospital Regional de Ceilândia é uma das principais referências do Distrito Federal, complementado por unidades básicas de saúde, clínicas e serviços privados que atendem a população.",
    ],
  },
  {
    title: "Comércio e economia",
    icon: Building2,
    body: [
      "A economia de Ceilândia é movida por um comércio forte e diversificado, com milhares de estabelecimentos que vão de grandes redes a pequenos empreendedores locais.",
      "Essa vitalidade comercial gera empregos, atrai consumidores de várias regiões e sustenta uma classe empreendedora que é uma das marcas da cidade.",
    ],
  },
  {
    title: "Mobilidade e conexões",
    icon: Bus,
    body: [
      "Ceilândia é atendida pelo Metrô do Distrito Federal, com estações que ligam a cidade a Taguatinga, Águas Claras e ao Plano Piloto, além de uma extensa malha de linhas de ônibus.",
      "A proximidade com Taguatinga e Samambaia e o acesso às principais vias do DF tornam a mobilidade um fator central para quem mora, trabalha ou investe na região.",
    ],
  },
  {
    title: "Mercado imobiliário",
    icon: TrendingUp,
    body: [
      "O mercado imobiliário de Ceilândia é um dos mais ativos do Distrito Federal, com grande demanda por moradia e uma oferta que inclui casas, apartamentos, sobrados, imóveis comerciais e terrenos.",
      "A cidade combina liquidez, diversidade de imóveis e faixas de preço acessíveis a diferentes perfis, o que a torna atraente tanto para quem busca o primeiro imóvel quanto para quem pensa em investir.",
      "Antes de comprar, vale avaliar a documentação do imóvel, a infraestrutura do setor, a proximidade de transporte e serviços e o potencial de desenvolvimento da região.",
    ],
  },
  {
    title: "O futuro de Ceilândia",
    icon: TrendingUp,
    body: [
      "Ceilândia segue em plena transformação, com investimentos em mobilidade, requalificação urbana, comércio e novos empreendimentos.",
      "Olhando para as próximas décadas, a cidade tende a consolidar seu papel como um dos grandes centros urbanos do Distrito Federal — unindo sua identidade cultural única a um mercado cada vez mais maduro.",
    ],
  },
];

const timeline = [
  { year: "1971", text: "Fundação em 27 de março, a partir da Campanha de Erradicação de Invasões (CEI). Primeira família na QNM 23." },
  { year: "1976–77", text: "Expansão dos setores O e P, ampliando a cidade além do projeto original." },
  { year: "1980", text: "Criação do Setor Industrial, fortalecendo a economia local." },
  { year: "1989", text: "Ceilândia torna-se oficialmente a Região Administrativa IX do DF." },
  { year: "2024", text: "287.113 habitantes (PDAD-A), a região administrativa mais populosa do Distrito Federal." },
];

const faqs = [
  {
    q: "Qual a origem do nome Ceilândia?",
    a: "O nome vem da Campanha de Erradicação de Invasões (CEI), somada ao sufixo 'lândia'. A cidade foi criada em 1971 para reassentar famílias que viviam em acampamentos durante a construção de Brasília.",
  },
  {
    q: "Ceilândia é a maior cidade do DF?",
    a: "Sim. Com 287.113 habitantes segundo a PDAD-A 2024, Ceilândia é a região administrativa mais populosa do Distrito Federal.",
  },
  {
    q: "Vale a pena morar em Ceilândia?",
    a: "Ceilândia oferece infraestrutura completa, comércio forte, mobilidade por metrô e ônibus, forte identidade cultural e imóveis com boa relação entre preço e localização — atendendo diferentes perfis de moradores.",
  },
  {
    q: "Como é o mercado imobiliário de Ceilândia?",
    a: "É um dos mais ativos do DF, com grande demanda e diversidade de imóveis (casas, apartamentos, sobrados, comerciais e terrenos) em faixas de preço acessíveis, atraindo quem busca moradia e quem pensa em investir.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Ceilândia (DF): história, cultura, população e mercado imobiliário",
  description:
    "Guia completo de Ceilândia no DF: história, cultura, população, mobilidade, qualidade de vida e mercado imobiliário.",
  author: { "@type": "Organization", name: "Top Imobiliária" },
  publisher: { "@type": "Organization", name: "Top Imobiliária" },
  mainEntityOfPage: "https://www.topimobiliaria.com/regioes/ceilandia",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: "https://www.topimobiliaria.com" },
    { "@type": "ListItem", position: 2, name: "Regiões", item: "https://www.topimobiliaria.com/regioes" },
    { "@type": "ListItem", position: 3, name: "Ceilândia", item: "https://www.topimobiliaria.com/regioes/ceilandia" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function CeilandiaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="region-page">
        <section className="region-hero">
          <div className="region-inner">
            <div className="region-kicker">Regiões do Distrito Federal</div>
            <h1>
              Ceilândia: história, cultura, população, qualidade de vida e o
              futuro de uma das maiores regiões de Brasília
            </h1>
            <p>
              Da Campanha de Erradicação de Invasões de 1971 à maior região
              administrativa do Distrito Federal — uma cidade de identidade
              forte, cultura viva e um mercado imobiliário em plena evolução.
            </p>
            <div className="region-hero-actions">
              <Link href="/imoveis?regiao=Ceilândia">Ver imóveis em Ceilândia</Link>
              <Link href="/#simulador">Avaliar imóvel na região</Link>
            </div>
          </div>
        </section>

        <section className="region-content">
          <div className="region-inner">
            <div className="region-stat-grid" aria-label="Ceilândia em números">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>

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
                <h2>Conheça Ceilândia</h2>
                <p>
                  Ceilândia é muito mais do que a maior região administrativa do
                  Distrito Federal. É uma cidade com história de superação,
                  cultura reconhecida nacionalmente e uma comunidade que
                  transformou um começo difícil em uma das identidades mais
                  fortes de Brasília.
                </p>
                <p>
                  Neste guia, a Top Imobiliária reúne a história, a cultura, os
                  números oficiais, a mobilidade e o mercado imobiliário de
                  Ceilândia — para quem quer conhecer, morar ou investir na
                  região.
                </p>
              </div>

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

              <section className="region-section" aria-label="Linha do tempo de Ceilândia">
                <div className="region-section-title">
                  <Calendar size={22} />
                  <h2>Linha do tempo</h2>
                </div>
                {timeline.map((item) => (
                  <p key={item.year}>
                    <strong>{item.year}</strong> — {item.text}
                  </p>
                ))}
              </section>

              <section className="region-decision-grid" aria-label="Perguntas frequentes sobre Ceilândia">
                {faqs.map((faq) => (
                  <div key={faq.q}>
                    <h2>{faq.q}</h2>
                    <p>{faq.a}</p>
                  </div>
                ))}
              </section>

              <section className="region-cta">
                <h2>Como a Top Imobiliária pode ajudar</h2>
                <p>
                  Há mais de 30 anos, a Top Imobiliária acompanha a evolução do
                  mercado imobiliário do Distrito Federal. Nossa equipe oferece
                  atendimento especializado para compra, venda, locação,
                  administração e avaliação de imóveis, sempre com foco em
                  segurança, transparência e resultados.
                </p>
                <p>
                  Se você deseja comprar, vender, alugar ou investir em
                  Ceilândia, conte com a experiência da Top Imobiliária.
                </p>
                <div className="region-cta-actions">
                  <Link href="/imoveis?regiao=Ceilândia">Imóveis em Ceilândia</Link>
                  <Link href="/#simulador">Avaliação de imóveis</Link>
                  <Link href="/regioes/taguatinga">Taguatinga</Link>
                  <Link href="/regioes/guara">Guará</Link>
                  <Link href="/regioes/sobradinho">Sobradinho</Link>
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
