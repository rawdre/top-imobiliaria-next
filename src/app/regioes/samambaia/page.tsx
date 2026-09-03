import type { Metadata } from "next";
import Link from "next/link";
import {
  Bus,
  Building2,
  BookOpen,
  Briefcase,
  Calendar,
  GraduationCap,
  HeartPulse,
  Home,
  Landmark,
  MapPinned,
  Route,
  Shield,
  Sparkles,
  TrainFront,
  Trees,
  TrendingUp,
  Users,
  Wifi,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import SiteAssistant from "@/components/SiteAssistant";

export const metadata: Metadata = {
  title:
    "Samambaia (DF): História, Metrô, Moradia e Guia Completo | Top Imobiliária",
  description:
    "Conheça Samambaia: história, população, metrô, bairros, moradia, comércio, educação, saúde, mobilidade, qualidade de vida e mercado imobiliário.",
  alternates: {
    canonical: "/regioes/samambaia",
  },
  keywords:
    "Samambaia DF, imóveis em Samambaia, morar em Samambaia, metrô Samambaia, história de Samambaia, Parque Três Meninas, mercado imobiliário Samambaia, apartamentos Samambaia",
};

// Dados oficiais (PDAD-A 2024 / IPEDF) — números verificados citados no guia.
const stats = [
  { value: "227.118", label: "Habitantes (PDAD-A 2024)" },
  { value: "32,7", label: "Idade média (anos)" },
  { value: "91,1%", label: "Domicílios com internet" },
  { value: "53,7%", label: "Domicílios com automóvel" },
  { value: "29,8%", label: "Domicílios com bicicleta" },
  { value: "9.999,23 ha", label: "Área territorial" },
];

const highlights = [
  {
    title: "Uma das maiores regiões do DF",
    text: "Com 227.118 moradores, Samambaia é uma cidade consolidada, planejada para responder ao crescimento populacional de Brasília.",
    icon: Users,
  },
  {
    title: "O metrô como chave da cidade",
    text: "A Linha 1 do Metrô-DF conecta Samambaia ao trabalho, ao estudo e ao comércio, e integra a região a Taguatinga e Ceilândia.",
    icon: TrainFront,
  },
  {
    title: "Expansão e verticalização",
    text: "De chácaras a habitação popular e, mais recentemente, verticalização — uma cidade jovem que continua mudando de perfil.",
    icon: TrendingUp,
  },
];

const sections = [
  {
    title: "A história — da chácara à grande cidade",
    icon: Landmark,
    body: [
      "Samambaia não nasceu pronta. Ela foi planejada para responder a um dos maiores desafios de Brasília: onde colocar uma população que crescia rapidamente?",
      "A área fazia parte do antigo Núcleo Rural de Taguatinga, ocupada por chácaras que formavam um cinturão verde de hortaliças, flores, frutas e aves no entorno da capital.",
      "O que era campo se transformou, ao longo das décadas, em uma das maiores regiões administrativas do Distrito Federal — resultado de um projeto urbanístico pensado para receber famílias e organizar a expansão da cidade.",
    ],
  },
  {
    title: "Por que Samambaia tem esse nome",
    icon: BookOpen,
    body: [
      "O nome está associado ao córrego Samambaia, cuja nascente fica na região.",
      "Foi ali, junto às águas do córrego, que existia a planta que deu origem ao nome da cidade — uma marca de identidade ligada à própria geografia local.",
    ],
  },
  {
    title: "Samambaia e a expansão de Brasília",
    icon: MapPinned,
    body: [
      "Samambaia é uma resposta territorial ao crescimento da capital. Diante de uma população que aumentava, o Distrito Federal precisou abrir novas áreas habitacionais organizadas.",
      "Junto com a moradia vieram infraestrutura, transporte, escolas, saúde e comércio — os elementos que transformam um assentamento em cidade e sustentam a vida cotidiana de quem chega.",
    ],
  },
  {
    title: "A cidade que mudou de perfil",
    icon: TrendingUp,
    body: [
      "A trajetória de Samambaia é uma sucessão de camadas: das chácaras à ocupação planejada, da habitação popular à consolidação urbana, e desta ao comércio e à verticalização.",
      "A documentação do IPEDF registra que, a partir dos anos 2000, o mercado privado passou a investir na verticalização da região — um novo capítulo na forma de morar e construir em Samambaia.",
    ],
  },
  {
    title: "Samambaia em 2024",
    icon: Users,
    body: [
      "Segundo a PDAD-A 2024, Samambaia reúne 227.118 moradores, com idade média de 32,7 anos e 52,6% de população do sexo de nascimento feminino.",
      "62,9% dos moradores nasceram no Distrito Federal e 37% nasceram em outro estado, com forte presença de origem nordestina — um retrato da diversidade que formou a cidade.",
    ],
  },
  {
    title: "Uma cidade jovem",
    icon: Sparkles,
    body: [
      "A idade média de 32,7 anos revela uma população jovem, o que influencia diretamente a demanda por escolas, mobilidade, mercado de trabalho, moradia, lazer e consumo.",
      "É também uma cidade em fase de formação de novas famílias — um fator que ajuda a explicar a procura por primeiro imóvel, locação e serviços voltados ao dia a dia.",
    ],
  },
  {
    title: "Educação",
    icon: GraduationCap,
    body: [
      "Samambaia conta com uma rede que vai da educação infantil às escolas de ensino fundamental e médio, além de opções de ensino técnico e superior.",
      "Um dos destaques é o Instituto Federal de Brasília – Campus Samambaia, que amplia o acesso à formação técnica e superior dentro da própria cidade.",
    ],
  },
  {
    title: "Saúde",
    icon: HeartPulse,
    body: [
      "A rede pública de saúde inclui cinco Unidades Básicas de Saúde distribuídas na região, voltadas ao atendimento de proximidade.",
      "A cidade conta ainda com o Hospital Regional de Samambaia (HRSam), referência pública que atende a população local e do entorno.",
    ],
  },
  {
    title: "Metrô",
    icon: TrainFront,
    body: [
      "O metrô é uma das grandes chaves de Samambaia. A Linha 1 do Metrô-DF conecta a cidade e impacta diretamente o acesso ao trabalho, ao estudo, ao comércio e à mobilidade.",
      "Mais do que transporte, o metrô influencia a própria escolha residencial e a integração de Samambaia com Taguatinga e Ceilândia — aproximando a cidade do restante do Distrito Federal.",
    ],
  },
  {
    title: "Mobilidade",
    icon: Bus,
    body: [
      "Além do metrô, Samambaia é servida por um conjunto de vias — DF-459, EPNB, DF-180 e DF-075 — que estruturam o acesso à região.",
      "Essas conexões ligam a cidade a Taguatinga, Ceilândia e Recanto das Emas e, somadas ao transporte coletivo, sustentam o deslocamento diário de quem mora e trabalha na região.",
    ],
  },
  {
    title: "Comércio e serviços",
    icon: Building2,
    body: [
      "Uma cidade com mais de 227 mil moradores desenvolve uma economia urbana própria, com comércio e serviços que atendem à demanda local.",
      "Esse grau de autonomia comercial reduz a necessidade de deslocamentos para tarefas cotidianas e fortalece a vida econômica dentro da própria Samambaia.",
    ],
  },
  {
    title: "Internet e nova economia",
    icon: Wifi,
    body: [
      "A conexão digital já faz parte do cotidiano: 91,1% dos domicílios têm internet e 42,5% possuem assinatura de serviços on-line (2024).",
      "Esses números ajudam a superar a antiga visão de Samambaia como 'cidade-dormitório', revelando uma população conectada e inserida na nova economia.",
    ],
  },
  {
    title: "Trabalho",
    icon: Briefcase,
    body: [
      "Entender Samambaia é também entender para onde vai quem mora nela. Parte da população trabalha na própria cidade, e parte se desloca para polos como Taguatinga, o Plano Piloto e Águas Claras.",
      "Essa dinâmica desenha uma Samambaia metropolitana, integrada à malha de trabalho do Distrito Federal e conectada às regiões vizinhas pelo metrô e pelas principais vias.",
    ],
  },
  {
    title: "A relação com Taguatinga e Águas Claras",
    icon: Route,
    body: [
      "Samambaia não existe isolada. Ela integra uma dinâmica urbana que se estende de Samambaia a Taguatinga, Águas Claras, Ceilândia e ao Plano Piloto.",
      "Essa rede de regiões — conectadas por metrô e vias estruturais — ajuda a explicar a mobilidade, o trabalho e as escolhas de moradia de quem vive na região.",
    ],
  },
  {
    title: "Parques e áreas verdes",
    icon: Trees,
    body: [
      "Entre os espaços de lazer e convivência da cidade, destaca-se o Parque Ecológico Três Meninas, uma referência de área verde para os moradores.",
      "Áreas assim reforçam a qualidade de vida cotidiana e oferecem espaço para lazer, esporte e encontro em uma cidade densamente povoada.",
    ],
  },
  {
    title: "Segurança",
    icon: Shield,
    body: [
      "Do ponto de vista da infraestrutura pública, Samambaia conta com duas delegacias, um batalhão da PMDF, nove postos comunitários e dois grupamentos do Corpo de Bombeiros.",
      "Registramos aqui a estrutura instalada como informação, sem transformá-la em julgamento de segurança — a leitura de cada área deve ser feita individualmente.",
    ],
  },
  {
    title: "Mercado imobiliário",
    icon: Building2,
    body: [
      "O mercado de Samambaia é sustentado por uma combinação de fatores: população numerosa, cidade consolidada, metrô, comércio e proximidade de Taguatinga e Águas Claras.",
      "Some-se a isso a verticalização, a diversidade de padrões de imóveis e uma demanda constante por locação e primeiro imóvel — o que dá liquidez e variedade à região.",
      "Não trabalhamos com preço médio por m² inventado. Caso valores sejam apresentados, devem vir acompanhados de data de coleta e metodologia explícita — o guia prioriza informação confiável em vez de números sem fonte.",
    ],
  },
  {
    title: "Casa, apartamento ou investimento?",
    icon: Home,
    body: [
      "Quem procura casa encontra em Samambaia bairros consolidados e diversidade de padrões, com atenção à documentação e à infraestrutura do setor. Quem busca apartamento acompanha a verticalização recente, avaliando localização e proximidade do metrô.",
      "Para quem pensa em aluguel ou primeiro imóvel, a cidade oferece demanda ativa e opções em diferentes faixas, exigindo análise de custo e localização. Já o investidor observa liquidez, metrô e comércio, sempre com atenção ao imóvel específico e à sua documentação.",
    ],
  },
  {
    title: "O futuro de Samambaia",
    icon: TrendingUp,
    body: [
      "O futuro de Samambaia combina vários fatores: consolidação urbana, verticalização, mobilidade, transporte sobre trilhos, crescimento populacional, renovação imobiliária, comércio, integração metropolitana e infraestrutura.",
      "São cenários e vetores, não promessas: nenhum desses fatores garante valorização automática. O que eles indicam é uma cidade em movimento, cujo desenvolvimento depende de decisões de planejamento e investimento.",
    ],
  },
  {
    title: "Samambaia daqui a 20 anos",
    icon: Sparkles,
    body: [
      "É possível imaginar Samambaia deixando de ser vista apenas como cidade planejada para se firmar como uma das grandes centralidades urbanas do Distrito Federal.",
      "Trata-se de uma hipótese, não de uma certeza: esse futuro depende de infraestrutura, mobilidade, emprego, planejamento urbano, serviços públicos e da própria dinâmica imobiliária ao longo do tempo.",
    ],
  },
];

const timeline = [
  { year: "1958", text: "A área era ocupada por chácaras do Núcleo Rural de Taguatinga." },
  { year: "1978", text: "O PEOT prevê Samambaia entre os novos núcleos urbanos do Distrito Federal." },
  { year: "1981", text: "É aprovado o estudo preliminar do Projeto Urbanístico Samambaia." },
  { year: "1982", text: "Começa a implementação do projeto urbanístico." },
  { year: "1985", text: "Chegam os primeiros moradores." },
  { year: "1988", text: "São distribuídos lotes nas quadras 408 e 410 e construídas 3.381 casas populares financiadas pelo extinto BNH." },
  { year: "1989–1992", text: "Um grande contingente de famílias é transferido de diferentes áreas do DF." },
  { year: "25/10/1989", text: "Samambaia é criada como Região Administrativa XII, pela Lei nº 49/89." },
  { year: "2000", text: "O remanejamento das linhas de transmissão permite a ocupação das quadras 200." },
];

// Região Característica — rede de conhecimento do Hub. Link apenas para páginas existentes.
const relatedRegions = [
  { label: "Samambaia", trait: "Grande população + metrô + expansão/verticalização", href: null },
  { label: "Taguatinga", trait: "Centralidade comercial consolidada", href: "/regioes/taguatinga" },
  { label: "Águas Claras", trait: "Verticalização e forte mercado imobiliário", href: "/regioes/aguas-claras" },
  { label: "Ceilândia", trait: "Grande população e forte identidade cultural", href: "/regioes/ceilandia" },
  { label: "Recanto das Emas", trait: "Expansão residencial", href: null },
  { label: "Guará", trait: "Localização privilegiada próxima ao Plano Piloto", href: "/regioes/guara" },
];

const faqs = [
  {
    q: "Como surgiu Samambaia?",
    a: "A área fazia parte do antigo Núcleo Rural de Taguatinga, ocupada por chácaras. Ela foi planejada como resposta ao crescimento populacional de Brasília, com a implementação do Projeto Urbanístico Samambaia a partir de 1982 e a chegada dos primeiros moradores em 1985.",
  },
  {
    q: "Quando Samambaia foi criada?",
    a: "Samambaia foi criada como Região Administrativa XII em 25 de outubro de 1989, pela Lei nº 49/89.",
  },
  {
    q: "Por que Samambaia tem esse nome?",
    a: "O nome está associado ao córrego Samambaia, cuja nascente fica na região, onde existia a planta que deu origem ao nome da cidade.",
  },
  {
    q: "Quantas pessoas moram em Samambaia?",
    a: "Segundo a PDAD-A 2024, Samambaia tem 227.118 moradores, com idade média de 32,7 anos.",
  },
  {
    q: "Como é morar em Samambaia?",
    a: "É uma cidade jovem e consolidada, com metrô, comércio próprio, ampla rede de ensino, Hospital Regional e boa integração a Taguatinga, Ceilândia e Águas Claras.",
  },
  {
    q: "Samambaia tem metrô?",
    a: "Sim. A Linha 1 do Metrô-DF conecta Samambaia e impacta o acesso ao trabalho, ao estudo e ao comércio, além de integrar a cidade a Taguatinga e Ceilândia.",
  },
  {
    q: "Quais são as principais vias de acesso?",
    a: "Além do metrô, Samambaia é servida por vias como DF-459, EPNB, DF-180 e DF-075, com conexões a Taguatinga, Ceilândia e Recanto das Emas.",
  },
  {
    q: "Samambaia fica perto de Águas Claras?",
    a: "Sim. Samambaia integra uma dinâmica urbana que se estende a Taguatinga, Águas Claras, Ceilândia e ao Plano Piloto, conectada por metrô e pelas principais vias.",
  },
  {
    q: "Como é o comércio de Samambaia?",
    a: "Com mais de 227 mil moradores, a cidade desenvolveu uma economia urbana própria, com comércio e serviços que atendem à demanda local e reduzem a necessidade de deslocamentos para tarefas cotidianas.",
  },
  {
    q: "Quais escolas existem em Samambaia?",
    a: "A cidade conta com educação infantil, escolas de ensino fundamental e médio, além de ensino técnico e superior, com destaque para o Instituto Federal de Brasília – Campus Samambaia.",
  },
  {
    q: "Samambaia tem hospital?",
    a: "Sim. Samambaia conta com cinco Unidades Básicas de Saúde e com o Hospital Regional de Samambaia (HRSam), referência pública da região.",
  },
  {
    q: "Quais parques existem em Samambaia?",
    a: "Entre os espaços de lazer da cidade, destaca-se o Parque Ecológico Três Meninas, uma referência de área verde para os moradores.",
  },
  {
    q: "Como é o mercado imobiliário de Samambaia?",
    a: "É sustentado por população numerosa, cidade consolidada, metrô, comércio, proximidade de Taguatinga e Águas Claras e pela verticalização, com demanda por locação e primeiro imóvel. Valores só devem ser considerados com data de coleta e metodologia explícitas.",
  },
  {
    q: "É melhor comprar casa ou apartamento em Samambaia?",
    a: "Depende do perfil: casas oferecem bairros consolidados e diversidade de padrões; apartamentos acompanham a verticalização recente e a proximidade do metrô. Em ambos os casos, a decisão exige análise individual do imóvel e da localização.",
  },
  {
    q: "Samambaia é uma boa região para morar?",
    a: "Para muitos perfis, sim: famílias, quem valoriza o metrô e o comércio próprio, quem busca primeiro imóvel ou locação e quem procura integração com Taguatinga e Águas Claras. A decisão depende sempre da análise individual do imóvel.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Samambaia (DF): história, crescimento, metrô, qualidade de vida e o futuro de uma das maiores regiões de Brasília",
  description:
    "Guia completo de Samambaia no DF: história, população, metrô, moradia, comércio, educação, saúde, mobilidade, qualidade de vida e mercado imobiliário.",
  author: { "@type": "Organization", name: "Top Imobiliária" },
  publisher: { "@type": "Organization", name: "Top Imobiliária" },
  mainEntityOfPage: "https://www.topimobiliaria.com/regioes/samambaia",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: "https://www.topimobiliaria.com" },
    { "@type": "ListItem", position: 2, name: "Regiões", item: "https://www.topimobiliaria.com/regioes" },
    { "@type": "ListItem", position: 3, name: "Samambaia", item: "https://www.topimobiliaria.com/regioes/samambaia" },
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

export default function SamambaiaPage() {
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
              Samambaia (DF): história, crescimento, metrô, qualidade de vida e
              o futuro de uma das maiores regiões de Brasília
            </h1>
            <p>
              Uma cidade planejada para responder ao crescimento de Brasília:
              das chácaras do antigo Núcleo Rural de Taguatinga à consolidação
              urbana, com metrô, comércio próprio, verticalização e uma
              população jovem em plena formação.
            </p>
            <div className="region-hero-actions">
              <Link href="/imoveis?regiao=Samambaia">Ver imóveis em Samambaia</Link>
              <Link href="/#simulador">Avaliar imóvel na região</Link>
            </div>
          </div>
        </section>

        <section className="region-content">
          <div className="region-inner">
            <div className="region-stat-grid" aria-label="Samambaia em números">
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
                <h2>Conheça Samambaia</h2>
                <p>
                  Samambaia não nasceu pronta. Ela foi planejada para responder
                  a um dos maiores desafios de Brasília: onde colocar uma
                  população que crescia rapidamente? A área fazia parte do antigo
                  Núcleo Rural de Taguatinga — chácaras que formavam um cinturão
                  verde de hortaliças, flores, frutas e aves.
                </p>
                <p>
                  Neste guia, a Top Imobiliária reúne a história, os dados
                  oficiais, a vida cotidiana, o metrô, a mobilidade e o mercado
                  imobiliário de Samambaia — sempre distinguindo o que é fato do
                  que ainda é projeto ou expectativa.
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

              <section className="region-section" aria-label="Linha do tempo de Samambaia">
                <div className="region-section-title">
                  <Calendar size={22} />
                  <h2>Linha do tempo</h2>
                </div>
                <p>Marcos documentados pelo IPEDF.</p>
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
                  Samambaia faz parte de uma rede de conhecimento sobre o
                  Distrito Federal. Explore as regiões vizinhas e suas
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

              <section className="region-decision-grid" aria-label="Perguntas frequentes sobre Samambaia">
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
                  avaliação de imóveis, sempre com transparência, tecnologia e
                  atendimento personalizado.
                </p>
                <p>
                  Se você deseja conhecer melhor Samambaia, entender o impacto do
                  metrô ou encontrar oportunidades na região, conte com a
                  experiência da Top Imobiliária.
                </p>
                <div className="region-cta-actions">
                  <Link href="/imoveis?regiao=Samambaia">Imóveis em Samambaia</Link>
                  <Link href="/#simulador">Avaliação de imóveis</Link>
                  <Link href="/regioes/taguatinga">Taguatinga</Link>
                  <Link href="/regioes/aguas-claras">Águas Claras</Link>
                  <Link href="/regioes/ceilandia">Ceilândia</Link>
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
