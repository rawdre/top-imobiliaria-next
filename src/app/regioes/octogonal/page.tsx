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
  ShieldCheck,
  ShoppingBag,
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
    "Octogonal (DF): guia completo, história, imóveis e qualidade de vida | Top Imobiliária",
  description:
    "Guia completo do Octogonal em Brasília: história (Decreto nº 2.705/1974), localização estratégica entre o Plano Piloto e o eixo oeste, condomínios, Parque da Cidade, Terraço Shopping, a obra da EPIG, dados da PDAD-A 2024 e o mercado imobiliário de uma das regiões mais centrais do DF.",
  alternates: {
    canonical: "/regioes/octogonal",
  },
  openGraph: {
    title: "Octogonal (DF): guia completo da região e mercado imobiliário | Top Imobiliária",
    description:
      "Conheça a história, o urbanismo, a localização, a mobilidade e o mercado imobiliário do Octogonal — um dos endereços residenciais mais estratégicos de Brasília.",
    url: "/regioes/octogonal",
    type: "article",
    locale: "pt_BR",
    images: [{ url: "/assets/top-imobiliaria/regions/octogonal.jpg", width: 1600, height: 1067, alt: "Condomínios residenciais e áreas verdes do Octogonal, Brasília" }],
  },
  twitter: { card: "summary_large_image", images: ["/assets/top-imobiliaria/regions/octogonal.jpg"] },
  keywords:
    "Octogonal Brasília, Octogonal DF, imóveis no Octogonal, apartamentos no Octogonal, morar no Octogonal, comprar imóvel no Octogonal, alugar imóvel no Octogonal, história do Octogonal, condomínio Octogonal Brasília, Decreto 2705 Octogonal, Parque da Cidade Octogonal, Terraço Shopping Octogonal, Sudoeste Octogonal, Cruzeiro Octogonal, Octogonal Águas Claras, EPIG Octogonal, mercado imobiliário Octogonal",
};

// Dados oficiais da PDAD-A 2024 (IPEDF) para a RA XXII – Sudoeste/Octogonal.
// Os indicadores são divulgados para Sudoeste e Octogonal em conjunto — não devem
// ser interpretados como estatísticas exclusivas do Setor Octogonal.
const stats = [
  { value: "1974", label: "Criação das Áreas Octogonais (Decreto nº 2.705)" },
  { value: "46.004", label: "Habitantes (Sudoeste/Octogonal · PDAD-A 2024)" },
  { value: "99,5%", label: "Dos domicílios são apartamentos (RA)" },
  { value: "52%", label: "Dos domicílios estão alugados (RA)" },
  { value: "84%", label: "Ensino superior completo, 25+ anos (RA)" },
  { value: "RA XXII", label: "Sudoeste/Octogonal (desde 2003)" },
];

const highlights = [
  {
    title: "Centralidade que não se reproduz",
    text: "Entre o Plano Piloto, o Cruzeiro, o Sudoeste e o eixo oeste (EPIG/EPTG). Uma posição de articulação urbana que dificilmente pode ser copiada em outro endereço de Brasília.",
    icon: MapPinned,
  },
  {
    title: "Vida em condomínio consolidado",
    text: "As Áreas Octogonais nasceram como conjuntos residenciais em condomínios fechados, com jardins, áreas de convivência e forte cultura condominial — uma experiência diferente das superquadras.",
    icon: Building2,
  },
  {
    title: "Ao lado do Parque da Cidade",
    text: "A proximidade do Parque Sarah Kubitschek e do Terraço Shopping transforma equipamentos de escala metropolitana em quase uma extensão da própria região.",
    icon: TreePine,
  },
];

const sections = [
  {
    title: "A história do Octogonal",
    icon: Landmark,
    body: [
      "As Áreas Octogonais foram criadas pelo Decreto nº 2.705, de 12 de setembro de 1974, dentro de uma fase importante da expansão planejada de Brasília. A proposta buscava criar novas áreas residenciais coletivas próximas ao Plano Piloto, seguindo a lógica urbanística da capital.",
      "O projeto foi estruturado em oito áreas residenciais — origem do nome “Octogonal” — com edifícios organizados em condomínios fechados. Documentos históricos e urbanísticos do Distrito Federal registram que a ocupação ocorreu posteriormente, especialmente no início da década de 1980.",
      "O resultado é uma configuração urbana com identidade própria: não é uma superquadra tradicional, não é um bairro convencional e não é um condomínio horizontal. É um conjunto residencial planejado, predominantemente vertical, estruturado em condomínios.",
    ],
  },
  {
    title: "Onde fica e como se conecta",
    icon: MapPinned,
    body: [
      "O Octogonal ocupa uma posição estratégica na região central de Brasília, integrado à RA XXII – Sudoeste/Octogonal. Está ligado ao Cruzeiro, ao Sudoeste, ao Plano Piloto e ao Eixo Monumental de um lado; e ao Parque da Cidade, à EPIG, à EPTG e ao grande eixo oeste (Águas Claras, Guará, Taguatinga) do outro.",
      "Essa localização faz do Octogonal um verdadeiro nó urbano: quem mora ali acessa rapidamente tanto as áreas centrais e institucionais do Plano Piloto quanto o eixo oeste do Distrito Federal. Para quem circula entre o centro e regiões como Águas Claras, é uma localização intermediária especialmente conveniente.",
    ],
  },
  {
    title: "Octogonal, Sudoeste e Cruzeiro: a mesma Região Administrativa",
    icon: Users,
    body: [
      "Durante parte de sua história, as áreas que hoje formam Sudoeste e Octogonal estiveram vinculadas ao Cruzeiro. A atual Região Administrativa Sudoeste/Octogonal (RA XXII) só foi criada em 6 de maio de 2003, pela Lei nº 3.153, por desmembramento do Cruzeiro.",
      "Por isso, o Octogonal deve ser entendido dentro de um conjunto urbano maior: Cruzeiro + Octogonal + Sudoeste + Plano Piloto. E por isso, também, muitos dados estatísticos oficiais aparecem agrupados como “Sudoeste e Octogonal”. Neste guia, sempre que usamos números da PDAD-A 2024, eles se referem à RA Sudoeste/Octogonal como um todo — não exclusivamente ao Setor Octogonal.",
      "Do ponto de vista imobiliário, Sudoeste e Octogonal têm propostas diferentes: o Sudoeste oferece uma experiência mais aberta, com forte comércio de rua e superquadras; o Octogonal, uma experiência mais condominial e reservada.",
    ],
  },
  {
    title: "Patrimônio, área tombada e o PPCUB",
    icon: Landmark,
    body: [
      "A RA Sudoeste/Octogonal está inserida na área tombada do Conjunto Urbanístico de Brasília, inscrito pela UNESCO na lista do Patrimônio Cultural Mundial em dezembro de 1987. Isso cria uma relação particular entre desenvolvimento urbano e preservação.",
      "O diagnóstico do Plano de Preservação do Conjunto Urbanístico de Brasília (PPCUB) trata especificamente das Áreas Octogonais, com temas como tratamento paisagístico, estacionamentos, ocupação de áreas públicas e continuidade da rede cicloviária. São projetos de qualificação urbana em discussão — perspectivas de futuro, e não obras já concluídas.",
      "Para o mercado imobiliário, isso significa que o Octogonal deve ser analisado sob a ótica do urbanismo e da preservação: o futuro tende a ser de qualificação do que já existe, não de grande expansão física.",
    ],
  },
  {
    title: "O modelo condominial do Octogonal",
    icon: Home,
    body: [
      "As Áreas Octogonais foram concebidas com edifícios organizados em condomínios fechados — uma das marcas mais importantes do setor até hoje. Existe uma dimensão interna do condomínio (jardins, áreas de circulação, convivência, segurança, estacionamento, espaços comuns) e uma dimensão urbana (comércio, shopping, parque, vias estruturais, transporte).",
      "Essa combinação de ambiente residencial reservado com centralidade urbana é uma das características mais interessantes do Octogonal e ajuda a explicar o perfil de quem procura a região: tranquilidade e segurança condominial, sem abrir mão da proximidade do Plano Piloto e do Parque da Cidade.",
    ],
  },
  {
    title: "Quem mora na região",
    icon: Users,
    body: [
      "Segundo a PDAD-A 2024, a população urbana de Sudoeste e Octogonal era estimada em 46.004 pessoas, com idade média de 40 anos — um perfil consolidado, diferente das regiões de crescimento acelerado.",
      "O perfil educacional é um dos grandes diferenciais: 84% dos moradores com 25 anos ou mais tinham ensino superior completo e a taxa de alfabetização entre pessoas de 5 anos ou mais era de 98,1%. É uma população com elevada qualificação. Lembrando: são dados da RA Sudoeste/Octogonal, divulgados em conjunto.",
    ],
  },
  {
    title: "Educação",
    icon: GraduationCap,
    body: [
      "A localização central facilita o acesso a instituições de ensino de diferentes níveis no próprio eixo central de Brasília. Moradores acessam rapidamente instituições no Plano Piloto, Sudoeste, Cruzeiro, Asa Sul, Asa Norte, Guará e Águas Claras.",
      "Os indicadores educacionais da RA reforçam esse perfil qualificado: alta alfabetização e forte presença de ensino superior completo entre os adultos, segundo a PDAD-A 2024 para Sudoeste/Octogonal.",
    ],
  },
  {
    title: "Saúde",
    icon: HeartPulse,
    body: [
      "A população da RA Sudoeste/Octogonal apresenta elevado acesso a planos de saúde: 84,4% dos moradores declararam possuir plano, segundo a PDAD-A 2024. Além disso, a região tem conexão rápida com o Plano Piloto, onde se concentra grande parte da rede hospitalar e médica de Brasília.",
      "A proximidade dos grandes centros de saúde do centro da capital é um diferencial prático do dia a dia de quem mora no Octogonal.",
    ],
  },
  {
    title: "Comércio, serviços e o Terraço Shopping",
    icon: ShoppingBag,
    body: [
      "Um dos diferenciais do Octogonal é não depender exclusivamente do comércio local. O morador tem acesso simultâneo ao comércio do próprio setor, ao Terraço Shopping — localizado na região, com alimentação, serviços, cinema e entretenimento —, ao Sudoeste, ao Cruzeiro, ao Park Sul e ao Plano Piloto.",
      "Isso amplia muito o raio de consumo e reduz a necessidade de deslocamentos para atividades cotidianas: o Octogonal está perto do centro de Brasília, mas resolve boa parte da rotina dentro ou muito próximo do próprio setor.",
    ],
  },
  {
    title: "Lazer e o Parque da Cidade",
    icon: TreePine,
    body: [
      "A proximidade do Parque da Cidade Sarah Kubitschek é um dos elementos que mais valorizam a localização do Octogonal sob a ótica da qualidade de vida. O parque funciona como grande área de lazer, esporte, caminhada, ciclismo, convivência e eventos — praticamente uma extensão da área residencial.",
      "Segundo a PDAD-A 2024, no conjunto Sudoeste/Octogonal, 99,7% dos domicílios estavam associados a ruas arborizadas e 99,7% registravam proximidade com parques ou praças, enquanto 94,7% estavam próximos a ciclovias ou ciclofaixas. São indicadores da RA como um todo, que ajudam a explicar a forte presença de áreas verdes e mobilidade ativa na região.",
    ],
  },
  {
    title: "Mobilidade e a obra da EPIG",
    icon: Bus,
    body: [
      "A mobilidade é o grande tema do Octogonal em 2026. A região está diretamente ligada à requalificação da EPIG (Estrada Parque Indústrias Gráficas), uma das principais ligações entre o eixo oeste e o Plano Piloto, dentro do Corredor Eixo Oeste.",
      "As obras incluem corredor de transporte coletivo (BRT), novos viadutos, ciclovias, drenagem, pavimentação, sinalização, paisagismo e calçadas. Na região próxima ao Octogonal, o projeto contempla dois novos viadutos e a abertura das alças da nova rotatória entre Octogonal e Sudoeste, para melhorar a ligação entre os dois setores.",
      "Trata-se de obra em execução: o GDF informou que a EPIG receberá pavimento rígido de concreto ao longo de cerca de 12 km, com investimento informado de R$ 156 milhões, atendendo um fluxo de aproximadamente 25 mil motoristas por dia. Isso representa uma alteração estrutural na acessibilidade da região — um fator relevante para o mercado, ainda que não garanta, por si só, valorização.",
    ],
  },
  {
    title: "Infraestrutura urbana",
    icon: Building2,
    body: [
      "A infraestrutura básica é bastante consolidada. Segundo a PDAD-A 2024 para Sudoeste/Octogonal: 100% dos domicílios tinham abastecimento de água pela rede geral, energia elétrica e coleta direta de lixo; 99,2% tinham rede de esgoto; e 99,5% tinham internet.",
      "São indicadores que mostram o nível de consolidação urbana da região — parte do que sustenta a percepção de qualidade de vida associada ao Octogonal. Novamente: números da RA Sudoeste/Octogonal, apresentados em conjunto pela pesquisa.",
    ],
  },
  {
    title: "Segurança: transparência sobre um tema em discussão",
    icon: ShieldCheck,
    body: [
      "O Octogonal tem forte cultura condominial e, historicamente, a segurança privada dos condomínios é uma característica importante do setor. Ainda assim, não seria correto afirmar de forma absoluta que “o bairro é seguro”.",
      "Em 2026, houve indicação na Câmara Legislativa do Distrito Federal solicitando reforço de policiamento ostensivo e aumento das rondas na Octogonal, motivada por demandas de moradores e frequentadores. Isso deve ser lido como uma demanda de segurança pública existente e em discussão — uma proposta (indicação) —, e não como prova de que a região seja insegura.",
    ],
  },
  {
    title: "O mercado imobiliário do Octogonal",
    icon: TrendingUp,
    body: [
      "O mercado residencial do Octogonal é predominantemente formado por apartamentos. Considerando a RA Sudoeste/Octogonal, a PDAD-A 2024 encontrou 99,5% dos domicílios ocupados classificados como apartamentos e 52% na condição de aluguel — o que dá ao mercado de locação um papel central. Esses percentuais são da RA como um todo.",
      "Por ser um mercado maduro e verticalizado, comparar apenas o preço por metro quadrado pode enganar. Entram na avaliação a localização dentro do setor, a posição do edifício, a vista, o andar, o estado de conservação, a reforma, as vagas de garagem, a taxa e a estrutura do condomínio. Cada imóvel deve ser avaliado individualmente.",
      "Uma característica especial é a escassez: por ser uma área consolidada e protegida por regras urbanísticas e patrimoniais, o Octogonal tem pouca margem para expansão horizontal tradicional. O mercado depende muito mais de compra e venda de unidades existentes, reforma e reposicionamento — o que pode contribuir para a percepção de exclusividade do setor.",
    ],
  },
  {
    title: "Fundamentos e futuro (sem promessa de valorização)",
    icon: TrendingUp,
    body: [
      "A Top Imobiliária não promete valorização. Mas alguns fundamentos do Octogonal merecem atenção de quem quer morar ou investir: localização central que não se reproduz, escassez de novas áreas, urbanização consolidada, proximidade do Plano Piloto e do Parque da Cidade, o Terraço Shopping e um mercado de locação com público amplo.",
      "Fatores como a melhoria de mobilidade com a EPIG, a qualificação de espaços públicos e a modernização dos condomínios podem sustentar uma hipótese de valorização baseada em fundamentos — nunca uma garantia de percentual. O futuro do Octogonal tende a ser de qualificação e preservação, não de grande expansão: uma região madura que precisa, sobretudo, ser cada vez melhor aproveitada.",
    ],
  },
];

const timeline = [
  { year: "1974", text: "Criação das Áreas Octogonais pelo Decreto nº 2.705, de 12 de setembro — o setor nasce estruturado em oito áreas residenciais." },
  { year: "Anos 1980", text: "Início efetivo da ocupação, com as primeiras construções do setor no começo da década." },
  { year: "1987", text: "Conjunto Urbanístico de Brasília inscrito pela UNESCO no Patrimônio Cultural Mundial — o Octogonal integra a área tombada." },
  { year: "2003", text: "Criação da RA XXII – Sudoeste/Octogonal (Lei nº 3.153), por desmembramento do Cruzeiro." },
  { year: "2024", text: "PDAD-A: 46.004 habitantes em Sudoeste/Octogonal; PPCUB regulamentado, com projetos de qualificação para as Áreas Octogonais." },
  { year: "2026", text: "Obras da EPIG em execução (Corredor Eixo Oeste): BRT, novos viadutos e a nova rotatória entre Octogonal e Sudoeste." },
];

const faqs = [
  {
    q: "O Octogonal é uma Região Administrativa?",
    a: "Não. O Setor Octogonal integra a Região Administrativa XXII – Sudoeste/Octogonal, criada em 2003. Por isso, os dados oficiais da PDAD-A costumam aparecer agrupados como “Sudoeste e Octogonal”.",
  },
  {
    q: "Quando o Octogonal foi criado?",
    a: "As Áreas Octogonais foram criadas pelo Decreto nº 2.705, de 12 de setembro de 1974. A ocupação, porém, ocorreu depois — especialmente no início da década de 1980.",
  },
  {
    q: "O Octogonal fica perto do Plano Piloto e do Parque da Cidade?",
    a: "Sim. Essa é uma de suas principais características: o setor está próximo do Plano Piloto, do Eixo Monumental e, de forma imediata, do Parque da Cidade Sarah Kubitschek.",
  },
  {
    q: "O Octogonal fica perto de Águas Claras?",
    a: "Sim. A ligação ocorre principalmente pelo sistema viário do eixo oeste, incluindo a EPIG e a EPTG — o que torna o Octogonal uma localização intermediária conveniente entre o centro e o eixo oeste.",
  },
  {
    q: "Como é o mercado de imóveis no Octogonal?",
    a: "É essencialmente de apartamentos, em condomínios consolidados. Na RA Sudoeste/Octogonal, a PDAD-A 2024 registrou 99,5% dos domicílios como apartamentos e 52% alugados. Por ser um mercado maduro, cada imóvel deve ser avaliado individualmente — planta, posição, vaga, condomínio e conservação fazem grande diferença.",
  },
  {
    q: "O Octogonal terá novos prédios?",
    a: "Por estar em área consolidada e protegida por regras urbanísticas e patrimoniais, sua dinâmica é diferente das regiões de expansão. O futuro tende a ser de qualificação urbana e modernização dos condomínios, não de grande expansão física.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Octogonal (DF): guia completo, história, imóveis e qualidade de vida",
  description:
    "Guia completo do Octogonal em Brasília: história, urbanismo, localização, condomínios, Parque da Cidade, Terraço Shopping, mobilidade, a obra da EPIG e o mercado imobiliário, com dados da PDAD-A 2024 (RA Sudoeste/Octogonal).",
  author: { "@type": "Organization", name: "Top Imobiliária" },
  publisher: { "@type": "Organization", name: "Top Imobiliária" },
  mainEntityOfPage: "https://www.topimobiliaria.com/regioes/octogonal",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: "https://www.topimobiliaria.com" },
    { "@type": "ListItem", position: 2, name: "Regiões", item: "https://www.topimobiliaria.com/regioes" },
    { "@type": "ListItem", position: 3, name: "Octogonal", item: "https://www.topimobiliaria.com/regioes/octogonal" },
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

export default function OctogonalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="region-page region-page--octogonal">
        <section className="region-hero">
          <div className="region-inner">
            <div className="region-kicker">Regiões do Distrito Federal</div>
            <h1>
              Octogonal: guia completo de uma das regiões mais estratégicas de
              Brasília
            </h1>
            <p>
              Do Decreto de 1974 à área tombada de Brasília — oito conjuntos
              residenciais em condomínios, entre o Plano Piloto, o Cruzeiro, o
              Sudoeste e o eixo oeste. Este guia reúne história, localização,
              o Parque da Cidade, o Terraço Shopping, a obra da EPIG, dados da
              PDAD-A 2024 e o mercado imobiliário do Octogonal.
            </p>
            <div className="region-hero-actions">
              <Link href="/imoveis?regiao=Octogonal">Ver imóveis no Octogonal</Link>
              <Link href="/#simulador">Avaliar imóvel na região</Link>
            </div>
          </div>
        </section>

        <p className="region-image-credit">Condomínios residenciais e áreas verdes do Octogonal, Brasília.</p>
        <section className="region-content">
          <div className="region-inner">
            <div className="region-stat-grid" aria-label="Octogonal em números">
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
                <h2>Conheça o Octogonal</h2>
                <p>
                  O Octogonal é uma das áreas residenciais mais particulares e
                  centrais de Brasília. Criado nos anos 1970 e implantado como um
                  conjunto planejado de oito áreas residenciais, desenvolveu uma
                  identidade própria: edifícios em condomínios fechados, áreas
                  verdes, espaços internos de convivência e uma relação muito
                  próxima com o sistema viário e paisagístico do Plano Piloto.
                </p>
                <p>
                  Neste guia, a Top Imobiliária apresenta uma visão ampla do
                  Octogonal — história, urbanismo, localização, comércio, lazer,
                  mobilidade, infraestrutura e mercado imobiliário. Observação
                  importante: os indicadores estatísticos da PDAD-A 2024 são
                  divulgados para a RA Sudoeste/Octogonal em conjunto e não devem
                  ser interpretados como números exclusivos do Setor Octogonal.
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

              <section className="region-section" aria-label="Linha do tempo do Octogonal">
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

              <section className="region-decision-grid" aria-label="Perguntas frequentes sobre o Octogonal">
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
                  Encontrar um imóvel no Octogonal não é só uma questão de preço:
                  é preciso entender qual condomínio, qual quadra, qual posição e
                  andar, quantas vagas, o estado do imóvel, o valor do condomínio
                  e a relação de tudo isso com a estrutura urbana ao redor.
                </p>
                <p>
                  Há mais de 30 anos, a Top Imobiliária acompanha a evolução do
                  mercado imobiliário do Distrito Federal, com atendimento
                  especializado para compra, venda, locação, administração e
                  avaliação de imóveis. Se você deseja comprar, vender, alugar ou
                  investir no Octogonal, conte com quem conhece o mercado local.
                </p>
                <div className="region-cta-actions">
                  <Link href="/imoveis?regiao=Octogonal">Imóveis no Octogonal</Link>
                  <Link href="/#simulador">Avaliação de imóveis</Link>
                  <Link href="/regioes/sudoeste">Sudoeste</Link>
                  <Link href="/regioes/cruzeiro">Cruzeiro</Link>
                  <Link href="/regioes/aguas-claras">Águas Claras</Link>
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
