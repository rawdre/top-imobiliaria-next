import type { Metadata } from "next";
import Link from "next/link";
import {
  Bus,
  Building2,
  Calendar,
  GraduationCap,
  Landmark,
  MapPinned,
  TreePine,
  TrendingUp,
  Users,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import SiteAssistant from "@/components/SiteAssistant";

export const metadata: Metadata = {
  title:
    "Noroeste (DF): história, Parque Burle Marx e mercado imobiliário | Top Imobiliária",
  description:
    "Guia completo do Noroeste em Brasília: história, urbanismo planejado, Parque Ecológico Burle Marx, área tombada, PPCUB, qualidade de vida e mercado imobiliário de um dos setores mais recentes do Plano Piloto.",
  alternates: {
    canonical: "/regioes/noroeste",
  },
  openGraph: {
    title: "Noroeste (DF): guia completo da região e mercado imobiliário | Top Imobiliária",
    description: "Conheça a história, o urbanismo, o Parque Burle Marx e o mercado imobiliário do Noroeste, um dos setores mais recentes do Plano Piloto.",
    url: "/regioes/noroeste",
    type: "article",
    locale: "pt_BR",
    images: [{ url: "/assets/top-imobiliaria/regions/noroeste.jpg", width: 1600, height: 1067, alt: "Edifícios do Noroeste e áreas verdes próximas ao Parque Burle Marx, Brasília" }],
  },
  twitter: { card: "summary_large_image", images: ["/assets/top-imobiliaria/regions/noroeste.jpg"] },
  keywords:
    "Noroeste DF, imóveis no Noroeste, morar no Noroeste, história do Noroeste, Parque Burle Marx, Setor Noroeste Plano Piloto, PPCUB, mercado imobiliário Noroeste, apartamentos Noroeste",
};

// Dados do Noroeste. Atenção: os números específicos do setor mais recentes e
// publicados de forma isolada são da PDAD 2021 — sempre citados com o ano, para
// não serem apresentados como indicadores atuais de 2026.
const stats = [
  { value: "RA I", label: "Integra o Plano Piloto (não é RA própria)" },
  { value: "~280 ha", label: "Parque Ecológico Burle Marx" },
  { value: "99,2%", label: "Domicílios que são apartamentos (PDAD 2021)" },
  { value: "27,1%", label: "Domicílios alugados (PDAD 2021)" },
  { value: "5.983", label: "Domicílios ocupados (PDAD 2021)" },
  { value: "1987", label: "Decreto de proteção urbanística de Brasília" },
];

const highlights = [
  {
    title: "Bairro planejado e recente",
    text: "Um dos setores residenciais mais novos da área central de Brasília, com edifícios contemporâneos, concebido como expansão planejada do Plano Piloto.",
    icon: Building2,
  },
  {
    title: "Parque Burle Marx ao lado",
    text: "Uma área verde de cerca de 280 hectares — Unidade de Conservação de Uso Sustentável — entre o Noroeste e a Asa Norte, com estruturas de esporte e lazer.",
    icon: TreePine,
  },
  {
    title: "Em consolidação",
    text: "Diferente de Asa Sul, Asa Norte ou Sudoeste, o Noroeste ainda amadurece: novos empreendimentos, comércio em expansão e infraestrutura que continua sendo qualificada.",
    icon: TrendingUp,
  },
];

const sections = [
  {
    title: "Onde fica o Noroeste",
    icon: MapPinned,
    body: [
      "O Noroeste está na região central de Brasília, imediatamente ao lado da Asa Norte. Está próximo do Parque Burle Marx, do Setor Militar Urbano, do Eixo Monumental, da Universidade de Brasília e de importantes acessos ao Plano Piloto.",
      "Essa posição é um dos maiores ativos do bairro: o morador está perto tanto das áreas residenciais da Asa Norte quanto dos principais polos de trabalho e serviços do centro da capital.",
    ],
  },
  {
    title: "O Noroeste é uma Região Administrativa?",
    icon: Landmark,
    body: [
      "Não. Diferente de um erro comum na internet, o Noroeste não é uma Região Administrativa independente: atualmente integra a Região Administrativa I – Plano Piloto.",
      "O bairro tem identidade de setor residencial próprio, mas documentos oficiais recentes continuam tratando o Setor Noroeste como localizado no Plano Piloto (RA I).",
    ],
  },
  {
    title: "A história do Noroeste",
    icon: Calendar,
    body: [
      "O Noroeste surgiu como uma das áreas destinadas à expansão residencial planejada de Brasília, dentro da área de preservação do conjunto urbanístico da capital e buscando reproduzir princípios fundamentais do urbanismo de Brasília.",
      "Documentos de planejamento do Distrito Federal registram o Setor Noroeste como área de expansão do Plano Piloto, com implantação gradual associada à solução de questões de circulação, saneamento, equipamentos comunitários e urbanização.",
    ],
  },
  {
    title: "Lúcio Costa e a área tombada",
    icon: Landmark,
    body: [
      "Para entender o Noroeste é preciso entender o urbanismo de Lúcio Costa. Em 1987, ele publicou Brasília Revisitada, documento fundamental sobre a preservação, complementação e expansão da cidade, trabalhando com quatro escalas: monumental, residencial, gregária e bucólica.",
      "Esses princípios foram incorporados à proteção urbanística de Brasília pelo Decreto nº 10.829, de 1987. O Noroeste está inserido no território protegido pelo tombamento — novos empreendimentos e mudanças de uso precisam respeitar regras específicas de preservação.",
    ],
  },
  {
    title: "Um bairro planejado e o conceito “ecológico”",
    icon: TreePine,
    body: [
      "O Noroeste foi concebido como um bairro planejado, integrando habitação, comércio, serviços, transporte, bicicletas, pedestres e áreas verdes — uma tentativa de transportar para uma nova área os princípios urbanos de Brasília.",
      "Desde a implantação, foi divulgado como um bairro com forte preocupação ambiental. O termo “bairro ecológico”, porém, deve ser entendido como característica e proposta urbanística — e não como uma certificação ambiental absoluta. O desenvolvimento do setor envolveu debates importantes sobre preservação do Cerrado, drenagem e ocupação territorial.",
    ],
  },
  {
    title: "Parque Ecológico Burle Marx",
    icon: TreePine,
    body: [
      "O Parque Ecológico Burle Marx é um dos elementos mais importantes do Noroeste. Localizado entre o Noroeste e a Asa Norte, tem cerca de 280 hectares e é uma Unidade de Conservação de Uso Sustentável, com conselho gestor.",
      "O parque já possui estruturas de esporte e lazer — quadras, campo de futebol, playground e áreas de convivência — e não deve ser tratado como um simples projeto futuro. Ao mesmo tempo, sua implantação e infraestrutura seguem sendo objeto de decisões públicas: em 2026, o Tribunal de Contas do DF ainda tratava de questões relacionadas à sua infraestrutura. Ou seja: parque existente, com estrutura implantada e qualificação ainda acompanhada pelo poder público.",
    ],
  },
  {
    title: "Santuário dos Pajés",
    icon: Users,
    body: [
      "O território do Santuário dos Pajés faz parte da história da implantação do Noroeste. A área esteve no centro de disputas envolvendo comunidades indígenas, órgãos públicos e a expansão urbana.",
      "Documentos da Câmara Legislativa registram a importância histórica do território indígena tradicional próximo ao Córrego Bananal e ao Parque Burle Marx. É um assunto que faz parte da história territorial da região e que apresentamos com cuidado, sem simplificações ou sensacionalismo.",
    ],
  },
  {
    title: "Mobilidade e vida cotidiana",
    icon: Bus,
    body: [
      "O Noroeste tem posição privilegiada para acesso ao sistema viário do Plano Piloto, com o Eixo Monumental, o Eixo Rodoviário, a W3 Norte e as vias de ligação com a Asa Norte e o Setor Militar Urbano. O planejamento incorporou ciclovias e infraestrutura para pedestres.",
      "A proximidade com a Asa Norte amplia muito a oferta de comércio e serviços: o morador não depende apenas do comércio interno do Noroeste, mas está inserido em uma das maiores redes de comércio e serviços do Plano Piloto. À medida que novos estabelecimentos surgem, cresce a autonomia urbana do bairro.",
    ],
  },
  {
    title: "Educação e saúde",
    icon: GraduationCap,
    body: [
      "A proximidade com a Asa Norte e com a Universidade de Brasília coloca o Noroeste em posição estratégica em relação à educação, com escolas, centros de ensino e a própria UnB por perto.",
      "Na saúde, o bairro se beneficia da rede da Asa Norte — hospitais, clínicas, laboratórios e unidades de atendimento — o que costuma ser especialmente relevante para famílias e para quem valoriza acesso rápido a atendimento médico.",
    ],
  },
  {
    title: "O mercado imobiliário do Noroeste",
    icon: Building2,
    body: [
      "O Noroeste tem forte vocação residencial e é essencialmente verticalizado: a PDAD 2021 registrava 99,2% dos domicílios como apartamentos. Na mesma pesquisa, 27,1% estavam alugados e 62,7% eram próprios já quitados — números de 2021, que devem ser atualizados quando houver publicação oficial mais recente específica do setor.",
      "O mercado combina imóveis recém-entregues, empreendimentos novos e um mercado secundário em formação — de apartamentos compactos a coberturas e unidades de alto padrão. A oferta varia muito por quadra e empreendimento.",
      "Por isso, comparar apenas metragem ou preço por metro quadrado pode enganar. Idade do prédio, condomínio, posição, vista, acabamento, garagem e localização da quadra fazem grande diferença — cada imóvel deve ser analisado individualmente.",
    ],
  },
  {
    title: "O futuro do Noroeste",
    icon: TrendingUp,
    body: [
      "O futuro do Noroeste está ligado à consolidação: ocupação de novos empreendimentos, crescimento do comércio, qualificação das áreas públicas, mobilidade e a consolidação do Parque Burle Marx. É um bairro que fica mais completo à medida que amadurece.",
      "As regras de preservação são decisivas. O PPCUB (Plano de Preservação do Conjunto Urbanístico de Brasília) regula o uso do território tombado; em 2026, o GDF abriu nova discussão pública para alterar essa legislação, com audiência prevista para setembro de 2026. É importante frisar: proposta de alteração do PPCUB não é o mesmo que regra já definitivamente alterada — é um tema em discussão que acompanhamos no Hub.",
    ],
  },
];

const timeline = [
  { year: "1987", text: "Lúcio Costa publica Brasília Revisitada; o Decreto nº 10.829 estabelece a proteção urbanística da capital." },
  { year: "2021", text: "PDAD 2021 registra 5.983 domicílios ocupados no Noroeste, sendo 99,2% apartamentos (dado histórico)." },
  { year: "2024", text: "GDF regulamenta o PPCUB, com regras de uso e ocupação na área tombada." },
  { year: "2026", text: "Nova discussão pública do PPCUB (audiência prevista para setembro); TCDF acompanha a infraestrutura do Parque Burle Marx." },
];

const faqs = [
  {
    q: "O Noroeste é uma Região Administrativa?",
    a: "Não. Atualmente o Noroeste integra a RA I – Plano Piloto. É um setor residencial com identidade própria, mas não é uma Região Administrativa independente.",
  },
  {
    q: "O Noroeste é um bairro novo?",
    a: "É um setor relativamente recente em comparação com Asa Sul, Asa Norte e Sudoeste. Já possui ocupação consolidada em várias áreas, mas ainda está em processo de amadurecimento urbano.",
  },
  {
    q: "O Noroeste é um “bairro ecológico”?",
    a: "O projeto foi concebido com forte preocupação ambiental e o bairro tem ampla relação com áreas verdes, como o Parque Burle Marx. O termo, porém, deve ser entendido como característica e proposta urbanística — não como uma certificação ambiental.",
  },
  {
    q: "O Parque Burle Marx já existe e está pronto?",
    a: "O parque existe e já possui áreas estruturadas e abertas ao público, com equipamentos de esporte e lazer. Sua implantação e infraestrutura, porém, continuam sendo objeto de acompanhamento e investimentos públicos.",
  },
  {
    q: "O Noroeste é bom para morar ou investir?",
    a: "Pode ser uma boa opção para quem busca apartamentos modernos, localização central, áreas verdes e proximidade da Asa Norte e do Plano Piloto. Por ser um mercado predominantemente novo e em consolidação, a análise deve ser feita imóvel por imóvel, considerando preço, condomínio, posição e padrão do empreendimento.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Noroeste (DF): história, Parque Burle Marx e mercado imobiliário",
  description:
    "Guia completo do Noroeste em Brasília: história, urbanismo planejado, Parque Burle Marx, área tombada, qualidade de vida e mercado imobiliário.",
  author: { "@type": "Organization", name: "Top Imobiliária" },
  publisher: { "@type": "Organization", name: "Top Imobiliária" },
  mainEntityOfPage: "https://www.topimobiliaria.com/regioes/noroeste",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: "https://www.topimobiliaria.com" },
    { "@type": "ListItem", position: 2, name: "Regiões", item: "https://www.topimobiliaria.com/regioes" },
    { "@type": "ListItem", position: 3, name: "Noroeste", item: "https://www.topimobiliaria.com/regioes/noroeste" },
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

export default function NoroestePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="region-page region-page--noroeste">
        <section className="region-hero">
          <div className="region-inner">
            <div className="region-kicker">Regiões do Distrito Federal</div>
            <h1>
              Noroeste: história, Parque Burle Marx, qualidade de vida e o
              mercado imobiliário do setor mais recente do Plano Piloto
            </h1>
            <p>
              Um bairro planejado, contemporâneo e ainda em consolidação, ao lado
              da Asa Norte e de uma das maiores áreas verdes urbanas de Brasília.
              Este guia reúne história, urbanismo, o Parque Burle Marx, a área
              tombada e o mercado imobiliário do Noroeste.
            </p>
            <div className="region-hero-actions">
              <Link href="/imoveis?regiao=Noroeste">Ver imóveis no Noroeste</Link>
              <Link href="/#simulador">Avaliar imóvel na região</Link>
            </div>
          </div>
        </section>

        <p className="region-image-credit">Imagem ilustrativa da região do Noroeste, Brasília.</p>
        <section className="region-content">
          <div className="region-inner">
            <div className="region-stat-grid" aria-label="Noroeste em números">
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
                <h2>Conheça o Noroeste</h2>
                <p>
                  O Noroeste é um dos setores residenciais mais recentes e
                  planejados da área central de Brasília. Ao lado da Asa Norte e
                  do Parque Burle Marx, reúne edifícios contemporâneos, comércio
                  em expansão, áreas verdes e proximidade com os principais polos
                  de trabalho e serviços da capital.
                </p>
                <p>
                  Mais do que uma região valorizada, o Noroeste faz parte da
                  história do planejamento urbano de Brasília e está inserido na
                  área tombada do Conjunto Urbanístico. Ao mesmo tempo, ainda é um
                  bairro em consolidação — característica fundamental para
                  entender seu mercado imobiliário. Observação: os números
                  específicos do setor divulgados isoladamente são da PDAD 2021 e
                  aqui aparecem sempre com o ano, para não serem lidos como dados
                  atuais.
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

              <section className="region-section" aria-label="Linha do tempo do Noroeste">
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

              <section className="region-decision-grid" aria-label="Perguntas frequentes sobre o Noroeste">
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
                  mercado imobiliário do Distrito Federal, com atendimento
                  especializado para compra, venda, locação, administração e
                  avaliação de imóveis — sempre com foco em segurança,
                  transparência e resultados.
                </p>
                <p>
                  Se você deseja comprar, vender, alugar ou investir no Noroeste,
                  conte com a experiência da Top Imobiliária.
                </p>
                <div className="region-cta-actions">
                  <Link href="/imoveis?regiao=Noroeste">Imóveis no Noroeste</Link>
                  <Link href="/#simulador">Avaliação de imóveis</Link>
                  <Link href="/regioes/sudoeste">Sudoeste</Link>
                  <Link href="/regioes/asa-norte">Asa Norte</Link>
                  <Link href="/regioes/cruzeiro">Cruzeiro</Link>
                  <Link href="/regioes/asa-sul">Asa Sul</Link>
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
