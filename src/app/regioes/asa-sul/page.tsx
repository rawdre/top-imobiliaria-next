import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Bus,
  GraduationCap,
  HeartPulse,
  Home,
  Landmark,
  MapPinned,
  TreePine,
  TrendingUp,
} from "lucide-react";
import BackToTopButton from "@/components/BackToTopButton";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RegionStats, { type RegionStat } from "@/components/RegionStats";
import SiteAssistant from "@/components/SiteAssistant";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Asa Sul Brasília: Guia Completo, História, Imóveis e Qualidade de Vida | Top Imobiliária",
  description:
    "Conheça a Asa Sul de Brasília: história, superquadras, imóveis, patrimônio, parques, comércio, mobilidade, qualidade de vida e mercado imobiliário.",
  alternates: { canonical: "/regioes/asa-sul" },
  openGraph: {
    title: "Asa Sul Brasília: guia completo da região | Top Imobiliária",
    description:
      "História, superquadras, patrimônio, parques, comércio, mobilidade e mercado imobiliário da Asa Sul.",
    url: "/regioes/asa-sul",
    type: "article",
    locale: "pt_BR",
  },
  keywords:
    "Asa Sul Brasília, Asa Sul DF, imóveis Asa Sul, apartamento Asa Sul, comprar apartamento Asa Sul, alugar apartamento Asa Sul, mercado imobiliário Asa Sul, superquadras Asa Sul, Plano Piloto Asa Sul",
};

// A Asa Sul integra a RA I - Plano Piloto. A PDAD-A 2024 não publica esses
// indicadores separadamente para a Asa Sul, portanto este é o recorte oficial.
const stats: RegionStat[] = [
  { value: "207.996", label: "Habitantes (Plano Piloto · RA I)" },
  { value: "107.730", label: "Domicílios ocupados" },
  { value: "1,93", label: "Moradores por domicílio" },
  { value: "40,5 anos", label: "Idade média" },
  { value: "72,2%", label: "Apartamentos" },
  { value: "54,2%", label: "Imóveis próprios quitados" },
  { value: "93%", label: "Imóveis próprios com escritura" },
  { value: "74,3%", label: "Ensino superior completo (25+ anos)" },
  { value: "76,4%", label: "Pessoas com plano de saúde" },
  { value: "92,4%", label: "Acesso à internet nos últimos 3 meses" },
  { value: "98,2%", label: "Ruas arborizadas" },
  { value: "88,3%", label: "Domicílios próximos a parques ou praças" },
  { value: "78%", label: "Ciclovias ou ciclofaixas" },
  { value: "93,4%", label: "Pontos de ônibus nas proximidades" },
  { value: "99,7%", label: "Vias principais pavimentadas" },
  { value: "98%", label: "Abastecimento de água" },
  { value: "94,7%", label: "Rede de esgoto" },
  { value: "98,1%", label: "Energia elétrica" },
  { value: "97,5%", label: "Coleta direta de lixo" },
];

const highlights = [
  {
    title: "Patrimônio urbano vivo",
    text: "Superquadras, pilotis, áreas verdes e comércio local fazem parte da experiência residencial e do conjunto urbanístico protegido de Brasília.",
    icon: Landmark,
  },
  {
    title: "Infraestrutura central",
    text: "Parques, metrô, comércio, escolas, saúde, cultura e eixos viários importantes tornam a rotina mais conectada no Plano Piloto.",
    icon: MapPinned,
  },
  {
    title: "Mercado de estoque consolidado",
    text: "A análise imobiliária depende da superquadra, do bloco, da planta, da reforma, do condomínio e do contexto específico de cada imóvel.",
    icon: TrendingUp,
  },
];

const sections = [
  {
    title: "O que é a Asa Sul?",
    icon: MapPinned,
    body: [
      "A Asa Sul é uma das áreas mais tradicionais, consolidadas e emblemáticas de Brasília. Ela integra a Região Administrativa I — Plano Piloto e não é uma Região Administrativa independente.",
      "Sua identidade está ligada ao projeto urbanístico de Lúcio Costa: arquitetura modernista, superquadras, pilotis, áreas verdes, comércio local, escolas, hospitais, cultura, lazer, mobilidade e patrimônio histórico. É muito mais do que um conjunto de apartamentos; é parte de uma concepção de cidade reconhecida internacionalmente.",
    ],
  },
  {
    title: "A construção de Brasília e a ideia de Lúcio Costa",
    icon: Landmark,
    body: [
      "A Asa Sul esteve entre as primeiras áreas residenciais consolidadas durante a construção da nova capital. A implantação das superquadras foi acompanhada por edifícios, escolas, comércio e equipamentos comunitários, formando uma maneira de morar diferente das cidades brasileiras tradicionais.",
      "A proposta não tratava o edifício como elemento isolado. As superquadras foram concebidas como unidades grandes o suficiente para articular moradia, escolas, áreas culturais, religiosas, esportivas, lazer, comércio e serviços, aproximando as necessidades cotidianas do morador.",
    ],
  },
  {
    title: "Superquadras e unidades de vizinhança",
    icon: Building2,
    body: [
      "Nas superquadras, os edifícios são implantados em áreas abertas e arborizadas; os pilotis criam uma relação particular entre edifício e espaço público. A concepção original privilegia circulação, áreas livres e integração com a vegetação, em vez de muros contínuos ao redor de cada prédio.",
      "O projeto previa que quatro superquadras formassem uma unidade de vizinhança. A formada pelas SQS 107, 108, 307 e 308 é referência porque foi integralmente concluída com os equipamentos comunitários previstos: habitação, educação, cultura, lazer, culto religioso, comércio e serviços.",
      "Esse conjunto reúne, entre outros elementos, o Cine Brasília, o Clube Unidade de Vizinhança e a Igrejinha Nossa Senhora de Fátima. O Decreto nº 30.303/2009 protege seu conjunto urbanístico, arquitetônico e paisagístico, informação relevante para moradores, proprietários e investidores.",
    ],
  },
  {
    title: "Igrejinha, arte e patrimônio",
    icon: Landmark,
    body: [
      "A Igreja Nossa Senhora de Fátima, conhecida como Igrejinha, é um dos símbolos da Asa Sul. Localizada junto à Unidade de Vizinhança 107/108/307/308, sua arquitetura é associada a Oscar Niemeyer e o edifício possui conjunto artístico ligado a Athos Bulcão.",
      "A relação da Asa Sul com a arte não termina na arquitetura. Obras integradas aos edifícios e espaços urbanos ajudam a explicar uma particularidade de Brasília: a cultura não está apenas em museus, mas incorporada à própria cidade.",
    ],
  },
  {
    title: "100, 200, 300 e 400 Sul: diferentes mercados dentro da região",
    icon: Home,
    body: [
      "Não existe um único mercado imobiliário da Asa Sul. As quadras 100, 200, 300 e 400 têm posições, períodos de ocupação e tipologias próprias. As 400, por exemplo, concentram edifícios geralmente mais baixos, o que altera a experiência urbana e a percepção de valor.",
      "Ao comparar imóveis, é preciso observar superquadra, bloco, andar, posição, orientação solar, ventilação, vista, metragem, planta, vagas, reforma, conservação, elevadores, condomínio, fachada, localização dentro da quadra e proximidade de comércio, metrô e áreas verdes.",
    ],
  },
  {
    title: "Parques, arborização e qualidade ambiental",
    icon: TreePine,
    body: [
      "A proximidade com o Parque da Cidade Dona Sarah Kubitschek é um dos diferenciais urbanos da Asa Sul. Caminhada, corrida, ciclismo, esportes, lazer, convivência e eventos ficam acessíveis sem grandes deslocamentos.",
      "O Parque Ecológico Asa Sul é outra unidade de conservação relevante, administrada pelo Brasília Ambiental. Somado às faixas verdes das superquadras, ele reforça que arborização, sombra, conforto térmico, caminhabilidade e paisagismo são elementos estruturais, e não apenas decorativos.",
    ],
  },
  {
    title: "Comércio, saúde, educação e gastronomia",
    icon: HeartPulse,
    body: [
      "O comércio local foi pensado para resolver tarefas cotidianas perto de casa. Mercados, padarias, farmácias, restaurantes, cafés, academias, clínicas, salões, lojas e serviços especializados mantêm a região ativa ao longo do dia.",
      "A Asa Sul tem acesso direto ao Setor Hospitalar Sul, um dos principais polos de saúde do Distrito Federal, além de estrutura educacional distribuída nas superquadras e no Plano Piloto. A concentração de hospitais, escolas, serviços e gastronomia também cria públicos variados para a locação residencial.",
    ],
  },
  {
    title: "W3 Sul, Eixão, L2 Sul e metrô",
    icon: Bus,
    body: [
      "A W3 Sul é um eixo histórico de comércio e serviços cuja transformação deve ser acompanhada com base no estágio oficial de cada intervenção. O Eixo Rodoviário organiza a relação entre superquadras e outras partes da cidade e, aos domingos e feriados, também assume papel de lazer e mobilidade ativa.",
      "A L2 Sul amplia a conectividade interna e reúne atividades institucionais e de serviços. O metrô é alternativa relevante ao automóvel, mas estar na Asa Sul não significa automaticamente estar perto de uma estação: a distância efetiva precisa ser analisada imóvel por imóvel.",
    ],
  },
  {
    title: "Perfil dos imóveis, locação e investimento",
    icon: TrendingUp,
    body: [
      "A Asa Sul reúne apartamentos compactos e familiares, unidades reformadas ou sem reforma, edifícios históricos, construções modernizadas e diferentes padrões de condomínio. A idade do prédio, isoladamente, não determina valor ou qualidade.",
      "Um imóvel antigo pode oferecer localização excepcional, planta generosa, ventilação e possibilidade de personalização, mas também exigir atualização elétrica, hidráulica, de cozinha, banheiros e acessibilidade. A análise deve considerar preço de compra, custo de atualização, condomínio, impostos, manutenção, vacância, aluguel potencial e liquidez.",
      "O mercado de locação pode atender servidores públicos, profissionais de saúde, professores, estudantes, pesquisadores, famílias e pessoas transferidas para Brasília. O público de um apartamento compacto próximo ao metrô pode ser diferente do público de uma unidade familiar em superquadra tradicional.",
    ],
  },
  {
    title: "PPCUB, preservação e modernização",
    icon: Landmark,
    body: [
      "A Asa Sul está inserida no conjunto urbanístico protegido de Brasília. Antes de reformas significativas, o proprietário deve verificar regras do condomínio, normas urbanísticas, preservação e licenciamento aplicável. Uma intervenção simples em outro bairro pode exigir análise específica aqui.",
      "O PPCUB é uma referência para compreender as regras de preservação, uso e ocupação. No Hub, a informação deve sempre ser classificada corretamente: lei vigente não é proposta; projeto aprovado não é obra concluída; estudo não é decisão definitiva.",
      "O desafio das próximas décadas é modernizar sem descaracterizar: acessibilidade, segurança, instalações, eficiência energética e conforto precisam avançar sem perder escala, pilotis, paisagismo, superquadras e espaços livres.",
    ],
  },
  {
    title: "O futuro da Asa Sul",
    icon: TrendingUp,
    body: [
      "A Asa Sul não depende de expansão territorial. Seu futuro está na qualificação do tecido existente: revitalização comercial, requalificação de espaços públicos, acessibilidade, mobilidade, retrofit, conservação ambiental e modernização dos edifícios.",
      "Não há valorização futura garantida. O que pode ser analisado são os fundamentos de uma região central, consolidada, arborizada e conectada, onde a qualidade da unidade, do condomínio e da quadra tende a diferenciar oportunidades ao longo do tempo.",
    ],
  },
];

const faqs = [
  { q: "A Asa Sul é uma Região Administrativa?", a: "Não. Ela integra a RA I — Plano Piloto. Os dados da PDAD-A 2024 exibidos no quadro de indicadores são do Plano Piloto, não exclusivos da Asa Sul." },
  { q: "A Asa Sul é toda formada por superquadras?", a: "As superquadras são elementos centrais, mas a região também possui áreas comerciais, hospitalares, institucionais, culturais e outros setores." },
  { q: "A Asa Sul é boa para morar?", a: "A região combina áreas verdes, comércio, serviços, saúde, educação, lazer, mobilidade e localização central. A escolha depende do perfil do morador e do imóvel específico." },
  { q: "Apartamento antigo pode ser uma boa oportunidade?", a: "Pode, desde que localização, planta, estado de conservação, preço e custo de reforma sejam analisados juntos." },
  { q: "A Asa Sul é atendida pelo metrô?", a: "Sim. Ainda assim, a proximidade real de uma estação deve ser avaliada para cada imóvel." },
  { q: "Posso modificar livremente um imóvel na Asa Sul?", a: "Não necessariamente. É preciso verificar regras do condomínio e as normas urbanísticas e patrimoniais aplicáveis." },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Asa Sul Brasília: Guia Completo da Região",
  description: "Guia da Asa Sul: história, superquadras, patrimônio, parques, mobilidade, qualidade de vida e mercado imobiliário.",
  author: { "@type": "Organization", name: "Top Imobiliária" },
  publisher: { "@type": "Organization", name: "Top Imobiliária" },
  mainEntityOfPage: "https://www.topimobiliaria.com/regioes/asa-sul",
};
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: "https://www.topimobiliaria.com" },
    { "@type": "ListItem", position: 2, name: "Regiões", item: "https://www.topimobiliaria.com/regioes" },
    { "@type": "ListItem", position: 3, name: "Asa Sul", item: "https://www.topimobiliaria.com/regioes/asa-sul" },
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

export default function AsaSulPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="region-page">
        <section className="region-hero">
          <div className="region-inner">
            <div className="region-kicker">Hub de Inteligência de Brasília</div>
            <h1>Asa Sul Brasília: guia completo da região</h1>
            <p>
              História, superquadras, patrimônio, áreas verdes, comércio, mobilidade e mercado imobiliário em uma das regiões mais emblemáticas do Plano Piloto.
            </p>
            <div className="region-hero-actions">
              <Link href="/imoveis?regiao=Asa%20Sul">Ver imóveis na Asa Sul</Link>
              <Link href="/#simulador">Avaliar meu imóvel</Link>
            </div>
          </div>
        </section>

        <section className="region-content">
          <div className="region-inner">
            <RegionStats
              stats={stats}
              ariaLabel="Asa Sul em números, indicadores do Plano Piloto"
              note="Dados oficiais de referência: Plano Piloto — PDAD-A 2024. A Asa Sul integra a RA I e os indicadores não são exclusivos da Asa Sul."
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
              <div className="region-intro-block">
                <h2>Conheça a Asa Sul</h2>
                <p>
                  A Asa Sul é uma das expressões mais completas do projeto urbano de Brasília. A força da região não está apenas nos apartamentos, mas na relação entre arquitetura, áreas verdes, comércio, cultura, saúde, educação, lazer e centralidade.
                </p>
              </div>

              {sections.map((section) => (
                <section className="region-section" key={section.title}>
                  <div className="region-section-title">
                    <section.icon size={22} />
                    <h2>{section.title}</h2>
                  </div>
                  {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </section>
              ))}

              <section className="region-decision-grid" aria-label="Perguntas frequentes sobre a Asa Sul">
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
                  Há mais de 30 anos, a Top Imobiliária acompanha o mercado do Distrito Federal. Ajudamos proprietários, compradores, investidores, locadores e locatários em compra, venda, locação, administração e avaliação de imóveis.
                </p>
                <p>
                  Na Asa Sul, uma decisão bem fundamentada depende de analisar não apenas metragem e preço, mas também quadra, bloco, posição, planta, condomínio, conservação e contexto urbano.
                </p>
                <div className="region-cta-actions">
                  <Link href="/imoveis?regiao=Asa%20Sul">Imóveis na Asa Sul</Link>
                  <Link href="/#simulador">Avaliação de imóvel</Link>
                  <Link href="/#administracao">Administração de imóveis</Link>
                  <Link href="/artigos/como-escolher-imobiliaria-administrar-imovel-brasilia">Administração profissional</Link>
                  <Link href="/regioes/asa-norte">Asa Norte</Link>
                  <Link href="/regioes/sudoeste">Sudoeste</Link>
                  <Link href="/regioes/noroeste">Noroeste</Link>
                  <Link href="/regioes/octogonal">Octogonal</Link>
                  <Link href="/regioes/cruzeiro">Cruzeiro</Link>
                  <Link href="/regioes/aguas-claras">Águas Claras</Link>
                  <Link href="/regioes/lago-sul">Lago Sul</Link>
                  <Link href="/regioes/lago-norte">Lago Norte</Link>
                  <Link href="/regioes/jardim-botanico">Jardim Botânico</Link>
                  <Link href="/regioes/park-way">Park Way</Link>
                </div>
              </section>

              <section className="region-sources">
                <h2>Fontes e atualização</h2>
                <ul>
                  <li><a href="https://pdad.ipe.df.gov.br/" target="_blank" rel="noreferrer">IPEDF — PDAD Ampliada 2024, RA I — Plano Piloto</a></li>
                  <li><a href="https://www.gov.br/iphan/pt-br/assuntos/noticias/livro-a-invencao-da-superquadra-e-relancado-em-brasilia-df" target="_blank" rel="noreferrer">IPHAN — estudos sobre a invenção das superquadras</a></li>
                  <li>Brasília Ambiental, Arquivo Público do DF e documentação urbanística e patrimonial do Distrito Federal.</li>
                </ul>
                <p>Última atualização editorial: setembro de 2026.</p>
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
