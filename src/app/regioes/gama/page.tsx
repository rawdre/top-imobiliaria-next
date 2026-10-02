import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Bus,
  Calendar,
  GraduationCap,
  HeartPulse,
  Home,
  Landmark,
  MapPinned,
  Route,
  Trees,
  TrendingUp,
  Users,
} from "lucide-react";
import BackToTopButton from "@/components/BackToTopButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RegionStats, { type RegionStat } from "@/components/RegionStats";
import SiteAssistant from "@/components/SiteAssistant";
import WhatsAppButton from "@/components/WhatsAppButton";

const PAGE_URL = "https://www.topimobiliaria.com/regioes/gama";

export const metadata: Metadata = {
  title: "Gama (DF): História, Qualidade de Vida e Mercado Imobiliário | Top Imobiliária",
  description:
    "Conheça o Gama: história, população, UnB, comércio, parques, mobilidade, qualidade de vida e mercado imobiliário em uma das regiões mais tradicionais do DF.",
  alternates: { canonical: "/regioes/gama" },
  openGraph: {
    title: "Gama (DF): guia completo, história e mercado imobiliário | Top Imobiliária",
    description:
      "História, educação, comércio, parques, mobilidade e mercado imobiliário do Gama, Distrito Federal.",
    url: "/regioes/gama",
    type: "article",
    locale: "pt_BR",
    images: [
      {
        url: "/assets/top-imobiliaria/regions/gama.jpg",
        width: 1600,
        height: 1067,
        alt: "Estádio Bezerrão, marco urbano do Gama, Distrito Federal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/assets/top-imobiliaria/regions/gama.jpg"],
  },
  keywords:
    "Gama DF, imóveis no Gama, morar no Gama, Gama Brasília, comprar imóvel no Gama, alugar imóvel no Gama, mercado imobiliário Gama, UnB Gama, Bezerrão, Prainha do Gama",
};

const stats: RegionStat[] = [
  { value: "133.948", label: "Habitantes (PDAD-A 2024)" },
  { value: "54.911", label: "Domicílios ocupados" },
  { value: "2,44", label: "Moradores por domicílio" },
  { value: "36,1", label: "Idade média (anos)" },
  { value: "72,8%", label: "Casas" },
  { value: "37,4%", label: "Superior completo (25+ anos)" },
];

const highlights = [
  {
    title: "Cidade planejada e consolidada",
    text: "Inaugurado em 1960, o Gama tem identidade própria, setores urbanos definidos e uma relação histórica com a formação de Brasília.",
    icon: Landmark,
  },
  {
    title: "Educação e vida econômica próprias",
    text: "UnB Gama, IFB, comércio, feiras e serviços ajudam a sustentar uma rotina que vai muito além da condição de cidade-dormitório.",
    icon: GraduationCap,
  },
  {
    title: "Casas, comércio e oportunidades",
    text: "O mercado combina predominância de casas, bairros consolidados, imóveis comerciais e demanda que deve ser analisada endereço por endereço.",
    icon: TrendingUp,
  },
];

const sections = [
  {
    title: "Conheça o Gama",
    icon: MapPinned,
    body: [
      "O Gama é uma das regiões administrativas mais tradicionais do Distrito Federal. Localizado na porção sudoeste do DF, reúne bairros residenciais, comércio, educação, serviços, parques e equipamentos esportivos que estruturam a vida cotidiana de uma cidade consolidada.",
      "Mais do que uma alternativa residencial, o Gama funciona como polo de influência para cidades e localidades da Periferia Metropolitana de Brasília. Essa posição ajuda a explicar a força do comércio local, a presença de serviços e a diversidade do seu mercado imobiliário.",
    ],
  },
  {
    title: "A origem: uma cidade criada com Brasília",
    icon: Landmark,
    body: [
      "O primeiro núcleo habitacional do Gama foi implantado em 1960 para receber parte da população que vivia em ocupações próximas ao Plano Piloto. As primeiras edificações eram simples e a infraestrutura ainda estava em formação, mas o núcleo foi concebido para se tornar uma cidade organizada.",
      "A Região Administrativa do Gama, RA II, foi consolidada pela Lei nº 4.545, de 1964. Ao longo das décadas, alterações territoriais ocorreram com a criação de Santa Maria e Recanto das Emas. Ler números e fatos históricos com esse contexto evita comparações territoriais imprecisas.",
    ],
  },
  {
    title: "Setores e identidade urbana",
    icon: Building2,
    body: [
      "O desenho urbano do Gama organiza áreas residenciais, comerciais e de serviços em setores que formam uma cidade com referências próprias. Setores Central, Leste, Oeste, Norte, Sul, Industrial e áreas de Ponte Alta apresentam perfis diferentes de uso, moradia e circulação.",
      "Isso importa para quem compra, aluga ou avalia imóveis: dizer que um imóvel fica no Gama é apenas o primeiro passo. O setor, a proximidade do comércio, o acesso às vias, o padrão construtivo e a dinâmica específica do entorno podem mudar bastante a experiência de morar e o comportamento do mercado.",
    ],
  },
  {
    title: "Quem mora no Gama",
    icon: Users,
    body: [
      "A PDAD-A 2024 estimou 133.948 moradores e 54.911 domicílios ocupados, com média de 2,44 moradores por domicílio e idade média de 36,1 anos.",
      "A pesquisa também indica vínculos duradouros: o tempo médio de moradia na Região Administrativa é de 23,3 anos. Esse dado ajuda a explicar a força da identidade local e a presença de famílias que acompanham a evolução da cidade há décadas.",
    ],
  },
  {
    title: "Educação: UnB Gama e IFB",
    icon: GraduationCap,
    body: [
      "O Gama reúne rede pública de educação infantil, fundamental e média, além de ensino técnico e superior. Entre os equipamentos de maior alcance estão a Faculdade do Gama da Universidade de Brasília, instalada em 2007, e o campus do Instituto Federal de Brasília.",
      "A presença dessas instituições fortalece a ligação entre moradia, formação profissional, pesquisa e serviços. Para o mercado imobiliário, também cria públicos específicos para locação e para a vida urbana nas áreas próximas aos principais eixos de acesso.",
    ],
  },
  {
    title: "Saúde e serviços públicos",
    icon: HeartPulse,
    body: [
      "A rede local inclui doze Unidades Básicas de Saúde e o Hospital Regional do Gama. Segundo a PDAD-A 2024, entre os moradores que buscaram atendimento, o Gama foi a localidade predominante para o último atendimento realizado.",
      "A estrutura instalada não elimina a necessidade de avaliar tempos de deslocamento e o serviço procurado em cada situação, mas reforça a autonomia urbana da região para uma parcela importante da vida cotidiana.",
    ],
  },
  {
    title: "Comércio, feiras e economia local",
    icon: Building2,
    body: [
      "O comércio é um dos ativos históricos do Gama. Feira dos Goianos, Feira Permanente, Galpão Central, feiras livres e o comércio dos setores convivem com mercados, farmácias, bancos, restaurantes, clínicas, escolas e serviços especializados.",
      "Essa atividade atende moradores e visitantes de regiões vizinhas. É uma característica relevante para quem busca praticidade na rotina e para proprietários de imóveis comerciais ou residenciais próximos aos polos de circulação.",
    ],
  },
  {
    title: "Mobilidade e conexões",
    icon: Route,
    body: [
      "O Gama é atendido por terminais rodoviários no Setor Central e Setor Sul, além do Terminal de Integração do BRT. As conexões incluem EPCT (DF-001), EPIP (DF-065), DF-180, DF-290, DF-480, DF-483 e BR-060.",
      "A mobilidade deve ser observada a partir do endereço real do imóvel. Acesso às vias, transporte público, horários de pico e relação com Santa Maria, Park Way, Recanto das Emas e municípios do Entorno alteram de forma concreta o tempo de deslocamento.",
    ],
  },
  {
    title: "Natureza, lazer e esporte",
    icon: Trees,
    body: [
      "O Gama tem uma relação importante com o Cerrado e os recursos hídricos locais. Parque Distrital do Gama, conhecido como Prainha, Parque Ecológico do Gama e áreas de Ponte Alta oferecem referências ambientais e de lazer para a população.",
      "O Bezerrão, o Centro Olímpico e Paralímpico, o SESI e outros equipamentos ampliam a oferta de esporte e convivência. Esses espaços fazem parte da identidade da cidade e ajudam a qualificar a vida fora de casa.",
    ],
  },
  {
    title: "Infraestrutura e desafios urbanos",
    icon: Bus,
    body: [
      "Os dados da PDAD-A 2024 mostram 96,5% de ruas de acesso pavimentadas, 88% com calçada, 95% com iluminação e 87,8% de domicílios com ruas arborizadas nas proximidades. Também há pontos de atenção: 32,5% relataram ruas alagadas nas cercanias em ocasiões de chuva e 36,8% mencionaram entulho nas proximidades.",
      "Um guia útil precisa mostrar os dois lados. Infraestrutura consolidada não significa ausência de desafios, e cada setor pode apresentar condições distintas de drenagem, manutenção, calçadas, trânsito e conservação urbana.",
    ],
  },
  {
    title: "Mercado imobiliário do Gama",
    icon: Home,
    body: [
      "O perfil predominante de moradia é horizontal: 72,8% dos domicílios ocupados eram casas, enquanto 21,2% eram apartamentos segundo a PDAD-A 2024. Isso distingue o Gama de regiões mais verticalizadas do Distrito Federal.",
      "Há casas, sobrados, apartamentos, lotes, imóveis comerciais e oportunidades de uso misto. Para analisar preço, liquidez ou potencial de locação, é necessário considerar setor, estado de conservação, documentação, metragem, vagas, reforma, acesso e comparação com imóveis realmente equivalentes.",
      "Não é responsável prometer valorização. A Top trabalha com fundamentos e com a análise do imóvel específico, não com uma média genérica que ignore o endereço e as características da unidade.",
    ],
  },
  {
    title: "Para quem o Gama faz sentido",
    icon: Home,
    body: [
      "O Gama pode fazer sentido para famílias que procuram casas e uma estrutura urbana consolidada, para pessoas que valorizam comércio e serviços próximos, para estudantes e profissionais ligados à UnB ou ao IFB e para quem busca uma cidade com identidade própria dentro do DF.",
      "Para investidores, o caminho é individual: comparar imóvel, público potencial, custos de manutenção, documentação, demanda de locação e contexto do setor. A melhor decisão depende do objetivo e não apenas do nome da região.",
    ],
  },
  {
    title: "O futuro da região",
    icon: TrendingUp,
    body: [
      "Por ser uma cidade consolidada, o futuro do Gama está menos em uma expansão abstrata e mais na qualificação de infraestrutura, mobilidade, comércio, educação, áreas públicas e estoque imobiliário existente.",
      "Investimentos públicos e privados devem ser acompanhados pelo estágio real: estudo, proposta, obra em execução ou entrega. Essa separação é essencial para que proprietários, compradores e investidores tomem decisões baseadas em fatos, e não em promessas.",
    ],
  },
];

const timeline = [
  { year: "1960", text: "Implantação do primeiro núcleo habitacional e inauguração do Gama." },
  { year: "1964", text: "Consolidação da Região Administrativa do Gama pela Lei nº 4.545." },
  { year: "1976", text: "Surgimento da Feira dos Goianos, referência comercial da região." },
  { year: "2007", text: "Instalação do campus da Universidade de Brasília no Gama." },
  { year: "2024", text: "A PDAD-A registra 133.948 moradores e 54.911 domicílios ocupados." },
];

const faqs = [
  { q: "O Gama é uma Região Administrativa?", a: "Sim. O Gama é a Região Administrativa II do Distrito Federal." },
  { q: "Quando o Gama foi criado?", a: "O primeiro núcleo foi implantado e inaugurado em 1960. A Região Administrativa foi consolidada pela Lei nº 4.545, de 1964." },
  { q: "Quantas pessoas moram no Gama?", a: "A PDAD-A 2024 estimou 133.948 moradores e 54.911 domicílios ocupados." },
  { q: "O Gama tem universidade?", a: "Sim. A região possui a Faculdade do Gama da Universidade de Brasília e um campus do Instituto Federal de Brasília." },
  { q: "O Gama tem hospital?", a: "Sim. A região conta com o Hospital Regional do Gama e com doze Unidades Básicas de Saúde." },
  { q: "Quais são os principais acessos ao Gama?", a: "Entre as conexões estão a EPCT (DF-001), EPIP (DF-065), DF-180, DF-290, DF-480, DF-483 e BR-060, além de terminais rodoviários e integração BRT." },
  { q: "O Gama é bom para morar?", a: "Pode ser uma boa opção para quem busca estrutura urbana consolidada, comércio, serviços, educação, parques e predominância de casas. A decisão deve considerar o setor e o imóvel específico." },
  { q: "Que tipos de imóveis existem no Gama?", a: "O mercado reúne principalmente casas, além de sobrados, apartamentos, lotes, imóveis comerciais e opções de uso misto." },
  { q: "Vale a pena investir no Gama?", a: "A decisão exige análise individual de localização, imóvel, demanda, custos, documentação e objetivo. Não é adequado prometer valorização futura." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Gama (DF): história, qualidade de vida e mercado imobiliário",
  description: metadata.description,
  mainEntityOfPage: PAGE_URL,
  dateModified: "2026-10-01",
  author: { "@type": "Organization", name: "Top Imobiliária" },
  publisher: { "@type": "Organization", name: "Top Imobiliária", url: "https://www.topimobiliaria.com" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: "https://www.topimobiliaria.com" },
    { "@type": "ListItem", position: 2, name: "Hub de Inteligência", item: "https://www.topimobiliaria.com/#hub-inteligencia" },
    { "@type": "ListItem", position: 3, name: "Gama", item: PAGE_URL },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function GamaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="region-page region-page--gama">
        <section className="region-hero">
          <div className="region-inner">
            <div className="region-kicker">Hub de Inteligência de Brasília</div>
            <h1>Gama (DF): história, qualidade de vida e mercado imobiliário</h1>
            <p>
              Uma cidade planejada com Brasília, marcada por identidade própria, casas,
              comércio forte, educação, parques e um papel relevante na vida urbana do sul do DF.
            </p>
            <div className="region-hero-actions">
              <Link href="/imoveis?regiao=Gama">Ver imóveis no Gama</Link>
              <Link href="/#simulador">Avaliar meu imóvel</Link>
            </div>
          </div>
        </section>

        <p className="region-image-credit">
          Foto: Estádio Bezerrão, Gama — panoramio, via Wikimedia Commons (CC BY 3.0).
        </p>

        <section className="region-content">
          <div className="region-inner">
            <RegionStats
              stats={stats}
              ariaLabel="Gama em números"
              note="Dados oficiais: PDAD Ampliada 2024 — IPEDF. Os indicadores se referem à Região Administrativa do Gama."
            />

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
              {sections.map((section) => (
                <section className="region-section" key={section.title}>
                  <div className="region-section-title">
                    <section.icon size={22} />
                    <h2>{section.title}</h2>
                  </div>
                  {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </section>
              ))}

              <section className="region-section" aria-label="Linha do tempo do Gama">
                <div className="region-section-title">
                  <Calendar size={22} />
                  <h2>Gama em uma linha do tempo</h2>
                </div>
                {timeline.map((item) => <p key={item.year}><strong>{item.year}</strong> — {item.text}</p>)}
              </section>

              <section className="region-decision-grid" aria-label="Perguntas frequentes sobre o Gama">
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
                  A Top Imobiliária ajuda proprietários, compradores, investidores,
                  locadores e locatários a tomar decisões com mais clareza em Brasília.
                  No Gama, a análise deve considerar o imóvel e o setor específico, não apenas uma média da região.
                </p>
                <div className="region-cta-actions">
                  <Link href="/imoveis?regiao=Gama">Imóveis no Gama</Link>
                  <Link href="/#simulador">Avaliação de imóvel</Link>
                  <Link href="/#administracao">Administração de imóveis</Link>
                  <Link href="/regioes/nucleo-bandeirante">Núcleo Bandeirante</Link>
                  <Link href="/regioes/park-way">Park Way</Link>
                  <Link href="/regioes/guara">Guará</Link>
                  <Link href="/regioes/aguas-claras">Águas Claras</Link>
                  <Link href="/regioes/taguatinga">Taguatinga</Link>
                  <Link href="/regioes/samambaia">Samambaia</Link>
                </div>
              </section>

              <section className="region-sources">
                <h2>Fontes e atualização</h2>
                <ul>
                  <li><a href="https://pdad.ipe.df.gov.br/files/reports/gama_LwMBTtb.pdf" target="_blank" rel="noreferrer">IPEDF — PDAD Ampliada 2024: Gama</a></li>
                  <li><a href="https://www.gama.df.gov.br/category/sobre-a-ra" target="_blank" rel="noreferrer">Administração Regional do Gama — história e informações institucionais</a></li>
                  <li><a href="https://ibram.df.gov.br/pt/organizacao-administrativa-das-unidades-de-conservacao" target="_blank" rel="noreferrer">Brasília Ambiental — unidades de conservação do Gama</a></li>
                </ul>
                <p>Última atualização editorial: outubro de 2026.</p>
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
