import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  Building2,
  Bus,
  Calendar,
  Home,
  Landmark,
  MapPinned,
  Music,
  ShoppingBag,
  Sparkles,
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
    "Núcleo Bandeirante (DF): História, Cidade Livre, Moradia e Guia Completo | Top Imobiliária",
  description:
    "Conheça o Núcleo Bandeirante: história da Cidade Livre, candangos, população, cultura, comércio, mobilidade, qualidade de vida e mercado imobiliário.",
  alternates: {
    canonical: "/regioes/nucleo-bandeirante",
  },
  keywords:
    "Núcleo Bandeirante DF, imóveis no Núcleo Bandeirante, morar no Núcleo Bandeirante, Cidade Livre, candangos, história do Núcleo Bandeirante, Museu Vivo da Memória Candanga, mercado imobiliário Núcleo Bandeirante",
};

// Dados oficiais (PDAD-A 2024) — números verificados citados no guia.
const stats = [
  { value: "22.566", label: "Moradores (PDAD-A 2024)" },
  { value: "68 anos", label: "A região completa em 2024" },
  { value: "28,4%", label: "Dos ocupados trabalham no Plano Piloto" },
  { value: "59,4%", label: "Ocupados no setor privado" },
  { value: "84,8%", label: "Trabalham em regime presencial" },
  { value: "41,1%", label: "Usam automóvel no deslocamento ao trabalho" },
];

const highlights = [
  {
    title: "Onde Brasília começou",
    text: "O Núcleo Bandeirante foi a Cidade Livre — o comércio e o apoio que tornaram possível a construção da nova capital. É uma das regiões que fizeram Brasília existir.",
    icon: Landmark,
  },
  {
    title: "A memória viva dos candangos",
    text: "Foi aqui que se firmou a identidade dos trabalhadores que ergueram a capital. Museu Vivo da Memória Candanga, Casa do Pioneiro e Feira Permanente mantêm essa história presente.",
    icon: Users,
  },
  {
    title: "Localização estratégica",
    text: "Próximo do Plano Piloto — 28,4% dos ocupados da região trabalham lá — e conectado a várias regiões do DF, o Núcleo é uma região tradicional e consolidada.",
    icon: MapPinned,
  },
];

const sections = [
  {
    title: "A Cidade Livre",
    icon: ShoppingBag,
    body: [
      "Antes de ser Núcleo Bandeirante, a região foi a Cidade Livre: um núcleo de comércio e de serviços criado para dar apoio à construção de Brasília. Ali estavam o comércio, os armazéns, as oficinas e a estrutura que abastecia a obra da nova capital.",
      "A ideia original era provisória — a Cidade Livre deveria desaparecer quando a capital ficasse pronta. Mas foi justamente esse ponto de encontro, trabalho e comércio que ajudou a viabilizar, no dia a dia, a construção de Brasília.",
    ],
  },
  {
    title: "A luta pela permanência",
    icon: Landmark,
    body: [
      "Com a inauguração de Brasília, em 1960, a Cidade Livre — pensada como temporária — enfrentou a incerteza sobre o seu futuro. Começou então a luta dos moradores pela permanência, para que o núcleo não fosse simplesmente removido.",
      "Essa mobilização é parte central da história da região. Em 1961, a Lei nº 4.020 fixou o Núcleo Bandeirante, consolidando a permanência do que havia nascido como um assentamento provisório.",
    ],
  },
  {
    title: "Quem eram os candangos",
    icon: Users,
    body: [
      "Candangos eram os trabalhadores que construíram a capital — homens e mulheres vindos de várias partes do país, sobretudo do Nordeste, que ergueram Brasília com o próprio trabalho.",
      "O Núcleo Bandeirante é um dos lugares onde essa memória está mais viva. Falar da região é falar de quem chegou para trabalhar na obra da capital e ajudou a formar a identidade de todo o Distrito Federal.",
    ],
  },
  {
    title: "Cultura e memória",
    icon: Music,
    body: [
      "O Núcleo Bandeirante preserva e celebra a memória dos pioneiros. Entre seus principais marcos estão o Museu Vivo da Memória Candanga, a Feira Permanente, a Casa do Pioneiro, a Estação Bernardo Sayão e a Paróquia Dom Bosco.",
      "A Avenida Central estrutura a vida da região e concentra parte importante do comércio e da convivência. Juntos, esses espaços fazem do Núcleo um lugar onde a história de Brasília continua sendo contada no cotidiano.",
    ],
  },
  {
    title: "Localização e mobilidade",
    icon: Bus,
    body: [
      "Um dos maiores diferenciais do Núcleo Bandeirante é a proximidade do Plano Piloto. Segundo a PDAD-A 2024, 28,4% dos ocupados da região trabalham no Plano Piloto — o que reforça o papel do Núcleo como região bem posicionada em relação ao centro de Brasília.",
      "Essa localização, ligada aos principais eixos de acesso da região central do DF, facilita o deslocamento para diferentes regiões e é um dos motivos pelos quais o Núcleo se mantém procurado.",
    ],
  },
  {
    title: "Trabalho e economia",
    icon: Briefcase,
    body: [
      "O retrato do trabalho no Núcleo Bandeirante, segundo a PDAD-A 2024, mostra uma população fortemente ligada ao setor privado: 59,4% dos ocupados estão nesse setor.",
      "O trabalho presencial predomina — 84,8% dos ocupados atuam em regime presencial — e o automóvel tem peso relevante no deslocamento: 41,1% usam o carro para ir ao trabalho. É o perfil de uma região consolidada, com vida econômica própria e forte conexão com o restante do DF.",
    ],
  },
  {
    title: "Qualidade de vida",
    icon: Sparkles,
    body: [
      "O Núcleo Bandeirante reúne pontos positivos importantes: localização próxima ao Plano Piloto, comércio e serviços consolidados, história e identidade comunitária fortes, infraestrutura urbana, áreas verdes, transporte e uma vida de bairro tradicional.",
      "Como toda região consolidada, também tem pontos de atenção. Moradores relatam trânsito nos principais eixos, alagamentos em parte das vias em determinados períodos e a necessidade permanente de manutenção urbana. Além disso, os setores têm características distintas entre si.",
      "A leitura honesta é essa: uma região com muitos atributos valorizados e questões reais a considerar. Não se trata de prometer uma qualidade de vida perfeita, mas de mostrar o quadro completo para uma decisão consciente.",
    ],
  },
  {
    title: "O mercado imobiliário",
    icon: Building2,
    body: [
      "O mercado imobiliário do Núcleo Bandeirante tem um perfil diferente do de áreas verticalizadas. Aqui predominam casas, imóveis residenciais e comerciais, terrenos, imóveis de uso misto e imóveis para locação.",
      "É uma região tradicional, em que a moradia convive com o comércio e os serviços. Não trabalhamos com preço médio inventado: valores só fazem sentido quando vêm com data de coleta e metodologia clara. O guia prioriza informação confiável em vez de números sem fonte.",
    ],
  },
  {
    title: "Para quem faz sentido morar aqui",
    icon: Home,
    body: [
      "O Núcleo Bandeirante pode fazer sentido para quem trabalha no Plano Piloto, para quem precisa de acesso rápido a várias regiões do DF e para famílias que valorizam o comércio local e a vida de bairro.",
      "Também tende a atrair quem prefere uma região tradicional e consolidada, quem procura casas em vez de apartamentos e quem valoriza história e identidade comunitária. Para investidores, a região pode ser interessante — sempre com análise individual de cada imóvel.",
    ],
  },
  {
    title: "O futuro do Núcleo Bandeirante",
    icon: TrendingUp,
    body: [
      "Como uma região tão antiga continua relevante? A resposta está na combinação entre localização, escassez relativa de áreas, consolidação urbana, comércio e serviços estabelecidos, memória histórica e proximidade do Plano Piloto — fatores que sustentam o interesse pela região.",
      "Existe também potencial de renovação imobiliária ao longo do tempo. Mas é preciso ser claro: valorização futura não é garantida. Ela depende do mercado, da legislação urbanística, da infraestrutura e da demanda — variáveis que precisam ser acompanhadas, não pressupostas.",
    ],
  },
  {
    title: "O Núcleo Bandeirante daqui a 20 ou 30 anos",
    icon: TrendingUp,
    body: [
      "Por ser uma região consolidada e com pouca área disponível para expansão, o fenômeno mais provável para o Núcleo Bandeirante não é o crescimento territorial, e sim a transformação e a renovação do estoque de imóveis já existente.",
      "Ou seja: mais do que se espalhar, a região tende a se renovar por dentro. Entender isso ajuda quem quer morar ou investir a ter expectativas realistas sobre como o Núcleo pode evoluir nas próximas décadas.",
    ],
  },
];

const timeline = [
  { year: "1956", text: "Nasce a Cidade Livre, origem do que viria a ser o Núcleo Bandeirante." },
  { year: "1956–1960", text: "A Cidade Livre funciona como núcleo de comércio e apoio à construção de Brasília." },
  { year: "1960", text: "Inauguração de Brasília e início da luta dos moradores pela permanência da região." },
  { year: "1961", text: "A Lei nº 4.020 fixa o Núcleo Bandeirante, consolidando a sua permanência." },
  { year: "Décadas seguintes", text: "Consolidação urbana da região, com comércio, serviços e identidade próprios." },
  { year: "2024", text: "A PDAD-A registra 22.566 moradores e a região completa 68 anos." },
];

// Região Característica — rede de conhecimento do Hub. Link apenas para páginas existentes.
const relatedRegions = [
  { label: "Núcleo Bandeirante", trait: "História + localização + comércio", href: null },
  { label: "Candangolândia", trait: "Origem ligada aos primeiros núcleos de Brasília", href: null },
  { label: "Guará", trait: "Forte integração com o Plano Piloto e maior urbanização", href: "/regioes/guara" },
  { label: "Águas Claras", trait: "Verticalização e grande mercado imobiliário", href: "/regioes/aguas-claras" },
  { label: "Park Way", trait: "Baixa densidade e grandes lotes", href: "/regioes/park-way" },
  { label: "Taguatinga", trait: "Grande centro comercial e urbano", href: "/regioes/taguatinga" },
];

const faqs = [
  {
    q: "O que era a Cidade Livre?",
    a: "Era o núcleo de comércio e serviços criado para dar apoio à construção de Brasília. Pensada como provisória, a Cidade Livre deu origem ao atual Núcleo Bandeirante.",
  },
  {
    q: "Por que o Núcleo Bandeirante recebeu esse nome?",
    a: "O nome Núcleo Bandeirante foi fixado quando a antiga Cidade Livre, criada durante a construção de Brasília, foi consolidada como região pela Lei nº 4.020, de 1961.",
  },
  {
    q: "Quando foi criado o Núcleo Bandeirante?",
    a: "A Cidade Livre nasceu em 1956. Após a inauguração de Brasília em 1960 e a luta dos moradores pela permanência, o Núcleo Bandeirante foi fixado pela Lei nº 4.020, em 1961.",
  },
  {
    q: "Quem eram os candangos?",
    a: "Candangos eram os trabalhadores que construíram a capital — pessoas vindas de várias regiões do país, sobretudo do Nordeste, que ergueram Brasília com o próprio trabalho.",
  },
  {
    q: "Quantas pessoas moram no Núcleo Bandeirante?",
    a: "Segundo a PDAD-A 2024, o Núcleo Bandeirante tem 22.566 moradores. No mesmo ano, a região completou 68 anos.",
  },
  {
    q: "Como é morar no Núcleo Bandeirante?",
    a: "É uma região tradicional e consolidada, com comércio e serviços próprios, forte identidade comunitária e proximidade do Plano Piloto. Também há pontos de atenção, como trânsito nos principais eixos, alagamentos em parte das vias e a necessidade de manutenção urbana.",
  },
  {
    q: "O Núcleo Bandeirante fica perto do Plano Piloto?",
    a: "Sim. A proximidade do Plano Piloto é um dos maiores diferenciais da região — segundo a PDAD-A 2024, 28,4% dos ocupados do Núcleo Bandeirante trabalham no Plano Piloto.",
  },
  {
    q: "Quais rodovias dão acesso ao Núcleo Bandeirante?",
    a: "A região é servida pelos principais eixos de acesso da área central do Distrito Federal, o que facilita o deslocamento ao Plano Piloto e a várias outras regiões do DF.",
  },
  {
    q: "O Núcleo Bandeirante tem comércio?",
    a: "Sim. O comércio é parte da própria origem da região, que nasceu como a Cidade Livre. Hoje o Núcleo mantém comércio e serviços consolidados, estruturados em torno da Avenida Central.",
  },
  {
    q: "Onde fica a Feira do Núcleo Bandeirante?",
    a: "A Feira Permanente é um dos marcos da região e um de seus principais pontos de encontro, comércio e convivência.",
  },
  {
    q: "O que visitar no Núcleo Bandeirante?",
    a: "Entre os principais marcos estão o Museu Vivo da Memória Candanga, a Feira Permanente, a Casa do Pioneiro, a Estação Bernardo Sayão, a Paróquia Dom Bosco e a Avenida Central.",
  },
  {
    q: "Onde fica o Museu Vivo da Memória Candanga?",
    a: "O Museu Vivo da Memória Candanga fica no Núcleo Bandeirante e é um dos principais espaços dedicados à memória dos pioneiros que construíram Brasília.",
  },
  {
    q: "Como é o mercado imobiliário do Núcleo Bandeirante?",
    a: "Tem perfil diferente do de áreas verticalizadas: predominam casas, imóveis residenciais e comerciais, terrenos, uso misto e imóveis para locação. Valores só devem ser considerados com data de coleta e metodologia explícitas.",
  },
  {
    q: "Quais tipos de imóveis existem no Núcleo Bandeirante?",
    a: "Casas, imóveis residenciais, imóveis comerciais, terrenos, imóveis de uso misto e imóveis para locação — refletindo o caráter tradicional e consolidado da região.",
  },
  {
    q: "O Núcleo Bandeirante é uma boa região para morar?",
    a: "Pode ser, dependendo do perfil: quem trabalha no Plano Piloto, quem valoriza comércio local, história e identidade comunitária, e quem procura casas em vez de apartamentos. A decisão deve considerar os pontos de atenção e a análise individual do imóvel.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Núcleo Bandeirante (DF): história, Cidade Livre, moradia e a memória viva de Brasília",
  description:
    "Guia completo do Núcleo Bandeirante no DF: história da Cidade Livre, candangos, população, cultura, mobilidade, qualidade de vida e mercado imobiliário.",
  author: { "@type": "Organization", name: "Top Imobiliária" },
  publisher: { "@type": "Organization", name: "Top Imobiliária" },
  mainEntityOfPage: "https://www.topimobiliaria.com/regioes/nucleo-bandeirante",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: "https://www.topimobiliaria.com" },
    { "@type": "ListItem", position: 2, name: "Regiões", item: "https://www.topimobiliaria.com/regioes" },
    { "@type": "ListItem", position: 3, name: "Núcleo Bandeirante", item: "https://www.topimobiliaria.com/regioes/nucleo-bandeirante" },
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

export default function NucleoBandeirantePage() {
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
              Núcleo Bandeirante (DF): história, Cidade Livre, moradia e a
              memória viva de Brasília
            </h1>
            <p>
              Uma das regiões que tornaram possível a construção da capital. Da
              Cidade Livre à luta pela permanência, da memória dos candangos ao
              mercado imobiliário atual — um guia completo sobre onde Brasília
              começou.
            </p>
            <div className="region-hero-actions">
              <Link href="/imoveis?regiao=Núcleo Bandeirante">Ver imóveis no Núcleo Bandeirante</Link>
              <Link href="/#simulador">Avaliar imóvel na região</Link>
            </div>
          </div>
        </section>

        <section className="region-content">
          <div className="region-inner">
            <div className="region-stat-grid" aria-label="Núcleo Bandeirante em números">
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
                <h2>Conheça o Núcleo Bandeirante</h2>
                <p>
                  O Núcleo Bandeirante é uma das regiões que fizeram Brasília
                  existir. Antes de ser bairro, foi a Cidade Livre — o comércio,
                  os serviços e o apoio que sustentaram, no dia a dia, a
                  construção da nova capital.
                </p>
                <p>
                  Neste guia, a Top Imobiliária reúne a história, a memória dos
                  candangos, os números oficiais, a mobilidade, a qualidade de
                  vida e o mercado imobiliário do Núcleo Bandeirante — sempre
                  separando o que é fato do que ainda é expectativa.
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

              <section className="region-section" aria-label="Linha do tempo do Núcleo Bandeirante">
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

              <section className="region-section" aria-label="Região Característica — rede do Hub">
                <div className="region-section-title">
                  <MapPinned size={22} />
                  <h2>Região Característica</h2>
                </div>
                <p>
                  O Núcleo Bandeirante faz parte de uma rede de conhecimento
                  sobre o Distrito Federal. Explore as regiões vizinhas e suas
                  características:
                </p>
                {relatedRegions.map((region) => (
                  <p key={region.label}>
                    <strong>
                      {region.href ? (
                        <Link href={region.href}>{region.label}</Link>
                      ) : (
                        region.label
                      )}
                    </strong>{" "}
                    — {region.trait}
                  </p>
                ))}
              </section>

              <section className="region-decision-grid" aria-label="Perguntas frequentes sobre o Núcleo Bandeirante">
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
                  suporte completo para compra, venda, locação, administração e
                  avaliação de imóveis, sempre com transparência e atendimento
                  personalizado.
                </p>
                <p>
                  Se você deseja conhecer melhor o Núcleo Bandeirante, sua
                  história e as oportunidades da região, conte com a experiência
                  da Top Imobiliária.
                </p>
                <div className="region-cta-actions">
                  <Link href="/imoveis?regiao=Núcleo Bandeirante">Imóveis no Núcleo Bandeirante</Link>
                  <Link href="/#simulador">Avaliação de imóveis</Link>
                  <Link href="/regioes/guara">Guará</Link>
                  <Link href="/regioes/aguas-claras">Águas Claras</Link>
                  <Link href="/regioes/taguatinga">Taguatinga</Link>
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
