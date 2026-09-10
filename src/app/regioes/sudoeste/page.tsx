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
    "Sudoeste (DF): história, qualidade de vida e mercado imobiliário | Top Imobiliária",
  description:
    "Guia completo do Sudoeste em Brasília: história, urbanismo, dados da PDAD-A 2024, população, educação, saúde, comércio, parques, mobilidade, a obra da EPIG e o mercado imobiliário de uma das regiões mais consolidadas do DF.",
  alternates: {
    canonical: "/regioes/sudoeste",
  },
  openGraph: {
    title: "Sudoeste (DF): guia completo da região e mercado imobiliário | Top Imobiliária",
    description: "Conheça a história, o urbanismo, a qualidade de vida e o mercado imobiliário do Sudoeste, uma das regiões mais consolidadas de Brasília.",
    url: "/regioes/sudoeste",
    type: "article",
    locale: "pt_BR",
    images: [{ url: "/assets/top-imobiliaria/regions/sudoeste.jpg", width: 1600, height: 1067, alt: "Edifícios residenciais e áreas verdes do Sudoeste, Brasília" }],
  },
  twitter: { card: "summary_large_image", images: ["/assets/top-imobiliaria/regions/sudoeste.jpg"] },
  keywords:
    "Sudoeste DF, imóveis no Sudoeste, morar no Sudoeste, história do Sudoeste, Sudoeste Octogonal, EPIG, Parque Bosque do Sudoeste, mercado imobiliário Sudoeste, apartamentos Sudoeste",
};

// Dados oficiais da PDAD-A 2024 (IPEDF) para a RA XXII – Sudoeste/Octogonal.
// Os indicadores são divulgados para Sudoeste e Octogonal em conjunto.
const stats = [
  { value: "46.004", label: "Habitantes (Sudoeste/Octogonal · PDAD-A 2024)" },
  { value: "40", label: "Idade média (anos)" },
  { value: "99,5%", label: "Dos domicílios são apartamentos" },
  { value: "52%", label: "Dos domicílios estão alugados" },
  { value: "84%", label: "Ensino superior completo (25+ anos)" },
  { value: "RA XXII", label: "Sudoeste/Octogonal (desde 2003)" },
];

const highlights = [
  {
    title: "Morar perto de tudo",
    text: "Localização central ao lado do Plano Piloto, do Parque da Cidade e do Eixo Monumental — grande parte da rotina se resolve dentro da própria região.",
    icon: MapPinned,
  },
  {
    title: "Mercado maduro e verticalizado",
    text: "Segundo a PDAD-A 2024, 99,5% dos domicílios são apartamentos e 52% estão alugados — um mercado consolidado, com forte base de locação.",
    icon: Building2,
  },
  {
    title: "Infraestrutura e áreas verdes",
    text: "Água, energia e coleta de lixo em praticamente 100% dos domicílios, arborização em 99,7% e dois parques dentro de uma região urbana consolidada.",
    icon: TreePine,
  },
];

const sections = [
  {
    title: "A história do Sudoeste",
    icon: Landmark,
    body: [
      "A história do Sudoeste está diretamente ligada ao planejamento de Brasília e à evolução do Plano Piloto. O Projeto de Urbanismo URB 147/88, que criou o Setor de Habitações Coletivas Sudoeste, foi aprovado em 19 de dezembro de 1988 e homologado pelo Decreto nº 11.433, de 30 de janeiro de 1989.",
      "Poucos dias depois, em 3 de fevereiro de 1989, foram homologados os parâmetros das superquadras por meio do memorial descritivo MDE 01/89. A PDAD-A 2024 registra que o projeto urbanístico do setor previa aproximadamente 435 projeções de habitação coletiva.",
      "A concepção do Sudoeste está associada à visão de expansão de Brasília apresentada por Lúcio Costa no documento Brasília Revisitada — a ideia de fazer a cidade crescer sem abandonar os princípios do planejamento original.",
    ],
  },
  {
    title: "Onde fica e como se conecta",
    icon: MapPinned,
    body: [
      "O Sudoeste ocupa uma posição privilegiada na porção central do Distrito Federal, próximo ao Plano Piloto, ao Eixo Monumental, ao Parque da Cidade, ao Cruzeiro e ao Setor de Indústrias Gráficas.",
      "Entre os principais acessos estão a EPIG (Estrada Parque Indústrias Gráficas, DF-011), a EPIA (DF-003), a EPTG (DF-085) e o Eixo Monumental. Essa localização é um dos maiores atributos urbanos da região.",
    ],
  },
  {
    title: "Sudoeste e Octogonal: qual é a diferença?",
    icon: Users,
    body: [
      "Sudoeste e Octogonal são setores distintos, com características urbanísticas próprias, mas pertencem à mesma Região Administrativa: a RA XXII – Sudoeste/Octogonal, criada em 6 de maio de 2003 pela Lei nº 3.153, por desmembramento do Cruzeiro.",
      "Por isso, muitos dados estatísticos oficiais aparecem agrupados como “Sudoeste e Octogonal”. Neste Hub, a Octogonal terá um guia próprio e independente; esta página é dedicada especificamente ao Sudoeste.",
    ],
  },
  {
    title: "Patrimônio e preservação",
    icon: Landmark,
    body: [
      "A RA Sudoeste/Octogonal está inserida na área tombada do Conjunto Urbanístico de Brasília, inscrito pela UNESCO na lista do Patrimônio Cultural Mundial em dezembro de 1987.",
      "Em 2024, o Governo do Distrito Federal regulamentou o Plano de Preservação do Conjunto Urbanístico de Brasília (PPCUB), com regras de uso e ocupação dentro da área tombada. Para o mercado imobiliário, isso significa que o Sudoeste também deve ser analisado sob a ótica do urbanismo e da preservação.",
    ],
  },
  {
    title: "Quem mora no Sudoeste",
    icon: Home,
    body: [
      "Segundo a PDAD-A 2024, a população urbana de Sudoeste e Octogonal era estimada em 46.004 pessoas, com idade média de 40 anos e 54,1% do sexo feminino ao nascer — um perfil consolidado, diferente das regiões de crescimento acelerado.",
      "42,4% dos moradores declararam ter nascido no Distrito Federal e o tempo médio de residência no DF era de 23,9 anos. É uma população com vínculos duradouros com Brasília.",
      "O perfil profissional reforça a ligação com o centro da capital: o setor público era a posição ocupacional mais comum (44,5%) e 47,7% dos trabalhadores tinham o Plano Piloto como principal local de trabalho.",
    ],
  },
  {
    title: "Educação",
    icon: GraduationCap,
    body: [
      "O perfil educacional é um dos grandes diferenciais da região. Segundo a PDAD-A 2024, 84% dos moradores com 25 anos ou mais tinham ensino superior completo e a taxa de alfabetização entre pessoas de 5 anos ou mais era de 98,1%.",
      "Entre as pessoas de 4 a 24 anos, 83,8% frequentavam creche, escola ou instituição de ensino superior. A localização central também facilita o acesso a instituições de ensino de outras áreas do Plano Piloto.",
    ],
  },
  {
    title: "Saúde",
    icon: HeartPulse,
    body: [
      "A população do Sudoeste apresenta elevado acesso a planos de saúde: 84,4% dos moradores declararam possuir plano, segundo a PDAD-A 2024. O Plano Piloto foi a principal localidade procurada para atendimento (58,5%).",
      "Atenção a uma questão atual: em 2026 foi apresentada na Câmara Legislativa uma indicação para implantação de uma Unidade Básica de Saúde no Sudoeste. Trata-se de uma proposta (indicação), e não de uma UBS já implantada.",
    ],
  },
  {
    title: "Comércio e serviços",
    icon: Building2,
    body: [
      "Um dos grandes diferenciais do Sudoeste é resolver boa parte da vida dentro da própria região. Segundo a PDAD-A 2024, 59,3% dos moradores indicaram Sudoeste/Octogonal como principal local para compras de alimentação, higiene e limpeza.",
      "Para serviços em geral, 73,7% apontaram a própria região. Supermercados, restaurantes, farmácias, clínicas, academias e serviços profissionais fazem do comércio local não apenas apoio à moradia, mas uma economia própria.",
    ],
  },
  {
    title: "Lazer e áreas verdes",
    icon: TreePine,
    body: [
      "Apesar da densidade residencial, o Sudoeste tem forte presença de áreas verdes. O Parque Urbano Bosque do Sudoeste, com cerca de 7,88 hectares, foi revitalizado e passou a ter regulamentação específica de gestão, uso e conservação em 2026, com estruturas de caminhada, esporte e convivência.",
      "A região também possui o Parque Ecológico das Sucupiras, criado em 2005 pelo Decreto nº 25.926, voltado à conservação ambiental e à educação. A Feira do Parque do Sudoeste, aos sábados, reforça a vida comunitária local.",
    ],
  },
  {
    title: "Mobilidade e a obra da EPIG",
    icon: Bus,
    body: [
      "A região é atendida pela Viação Piracicabana (Bacia 1) e, segundo a PDAD-A 2024, 97% dos domicílios tinham ponto de ônibus nas proximidades. Entre os trabalhadores, 68,1% usavam automóvel e 58,8% gastavam até 15 minutos até o trabalho.",
      "A readequação da EPIG (DF-011) é a principal transformação em curso — corredor de ônibus/BRT, viadutos, estações, passagens para pedestres e infraestrutura cicloviária, ligando a EPTG ao Eixo Monumental. É uma obra em execução: relatório oficial do GDF registrava 86,19% de execução no segundo bimestre de 2026.",
    ],
  },
  {
    title: "Infraestrutura urbana",
    icon: ShieldCheck,
    body: [
      "A infraestrutura é um dos principais atributos do Sudoeste. Segundo a PDAD-A 2024, 100% dos domicílios tinham água da rede geral, energia elétrica e coleta direta de lixo; 99,2% tinham esgoto da rede geral; e 100% das vias principais de acesso eram asfaltadas.",
      "A conectividade é igualmente alta: 99,5% dos domicílios tinham internet e 99,7% dos moradores relataram ruas arborizadas nas proximidades. São números que ajudam a explicar a percepção de qualidade urbana associada à região.",
    ],
  },
  {
    title: "O mercado imobiliário do Sudoeste",
    icon: TrendingUp,
    body: [
      "O Sudoeste é essencialmente um mercado de apartamentos: a PDAD-A 2024 encontrou 99,5% dos domicílios ocupados classificados como apartamentos, com 52% na condição de aluguel — o que dá ao mercado de locação um papel central.",
      "Chama a atenção também a forte presença de domicílios unipessoais (42,7%), o que ajuda a explicar a demanda por apartamentos bem localizados e funcionais. Entre os imóveis próprios, 98,3% dos moradores informaram escritura definitiva registrada em cartório.",
      "Por ser um mercado maduro e verticalizado, comparar apenas o preço por metro quadrado pode enganar. Planta, posição, reforma, vaga, condomínio e idade do edifício fazem grande diferença — cada imóvel deve ser avaliado individualmente.",
    ],
  },
  {
    title: "O futuro do Sudoeste",
    icon: TrendingUp,
    body: [
      "O futuro do Sudoeste tende a estar mais ligado à qualificação urbana do que à expansão territorial. O bairro já está consolidado — o desafio é manter e melhorar mobilidade, acessibilidade, espaços públicos e áreas verdes.",
      "A requalificação da EPIG é o exemplo mais importante em andamento. No Hub de Inteligência, sempre diferenciamos o que é fato atual, obra em execução, projeto aprovado, proposta ou apenas perspectiva futura — o Sudoeste não depende de promessas para ser valorizado; sua infraestrutura atual já é um de seus maiores atributos.",
    ],
  },
];

const timeline = [
  { year: "1988", text: "Aprovação do Projeto de Urbanismo URB 147/88 — Setor de Habitações Coletivas Sudoeste." },
  { year: "1989", text: "Homologação pelo Decreto nº 11.433 e dos parâmetros das superquadras (MDE 01/89)." },
  { year: "2003", text: "Criação da RA XXII – Sudoeste/Octogonal (Lei nº 3.153), por desmembramento do Cruzeiro." },
  { year: "2005", text: "Criação do Parque Ecológico das Sucupiras (Decreto nº 25.926)." },
  { year: "2024", text: "PDAD-A: 46.004 habitantes em Sudoeste/Octogonal; PPCUB regulamentado pelo GDF." },
  { year: "2026", text: "Readequação da EPIG em execução (86,19% no 2º bimestre), com corredor de BRT e viadutos." },
];

const faqs = [
  {
    q: "Sudoeste e Octogonal são a mesma coisa?",
    a: "Não. São setores distintos, com urbanismo próprio, mas pertencem à mesma Região Administrativa — a RA XXII – Sudoeste/Octogonal, criada em 2003. Por isso os dados oficiais costumam aparecer agrupados.",
  },
  {
    q: "O Sudoeste é uma região verticalizada?",
    a: "Sim. Segundo a PDAD-A 2024, 99,5% dos domicílios ocupados eram apartamentos, o que caracteriza um mercado essencialmente verticalizado e maduro.",
  },
  {
    q: "Como é o mercado de aluguel no Sudoeste?",
    a: "É relevante: 52% dos domicílios estavam alugados na PDAD-A 2024, o que dá ao mercado de locação um papel importante para proprietários e investidores.",
  },
  {
    q: "O Sudoeste é bom para morar?",
    a: "A região reúne localização central, infraestrutura consolidada, comércio e serviços próprios, áreas verdes e mobilidade — atributos que ajudam a explicar sua forte atratividade residencial. A escolha do imóvel ideal, porém, depende do perfil de cada morador.",
  },
  {
    q: "O Sudoeste está passando por obras?",
    a: "Sim. A principal intervenção atual é a readequação da EPIG (DF-011), com corredor de BRT, viadutos, estações e infraestrutura para pedestres e ciclistas — uma obra em execução, com 86,19% concluídos no 2º bimestre de 2026.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Sudoeste (DF): história, qualidade de vida e mercado imobiliário",
  description:
    "Guia completo do Sudoeste em Brasília: história, urbanismo, população, mobilidade, qualidade de vida e mercado imobiliário, com dados da PDAD-A 2024.",
  author: { "@type": "Organization", name: "Top Imobiliária" },
  publisher: { "@type": "Organization", name: "Top Imobiliária" },
  mainEntityOfPage: "https://www.topimobiliaria.com/regioes/sudoeste",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: "https://www.topimobiliaria.com" },
    { "@type": "ListItem", position: 2, name: "Regiões", item: "https://www.topimobiliaria.com/regioes" },
    { "@type": "ListItem", position: 3, name: "Sudoeste", item: "https://www.topimobiliaria.com/regioes/sudoeste" },
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

export default function SudoestePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="region-page region-page--sudoeste">
        <section className="region-hero">
          <div className="region-inner">
            <div className="region-kicker">Regiões do Distrito Federal</div>
            <h1>
              Sudoeste: história, qualidade de vida e mercado imobiliário em
              uma das regiões mais consolidadas de Brasília
            </h1>
            <p>
              Do projeto urbanístico de 1988 à área tombada de Brasília — um
              bairro central, verticalizado e planejado, onde se mora perto de
              tudo. Este guia reúne história, dados oficiais da PDAD-A 2024,
              infraestrutura, a obra da EPIG e o mercado imobiliário do Sudoeste.
            </p>
            <div className="region-hero-actions">
              <Link href="/imoveis?regiao=Sudoeste">Ver imóveis no Sudoeste</Link>
              <Link href="/#simulador">Avaliar imóvel na região</Link>
            </div>
          </div>
        </section>

        <p className="region-image-credit">Imagem ilustrativa da região do Sudoeste, Brasília.</p>
        <section className="region-content">
          <div className="region-inner">
            <div className="region-stat-grid" aria-label="Sudoeste em números">
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
                <h2>Conheça o Sudoeste</h2>
                <p>
                  O Sudoeste é uma das áreas residenciais mais consolidadas,
                  centrais e estruturadas de Brasília. Próximo ao Plano Piloto,
                  ao Parque da Cidade e ao Eixo Monumental, combina planejamento
                  urbano, áreas verdes, comércio, serviços, mobilidade e forte
                  vocação residencial.
                </p>
                <p>
                  Neste guia, a Top Imobiliária apresenta uma visão ampla do
                  Sudoeste, reunindo história, urbanismo, população, educação,
                  saúde, comércio, lazer, mobilidade, infraestrutura e mercado
                  imobiliário — com base nos dados oficiais da PDAD-A 2024.
                  Observação: por serem divulgados em conjunto pela pesquisa, os
                  números estatísticos referem-se à RA Sudoeste/Octogonal.
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

              <section className="region-section" aria-label="Linha do tempo do Sudoeste">
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

              <section className="region-decision-grid" aria-label="Perguntas frequentes sobre o Sudoeste">
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
                  Se você deseja comprar, vender, alugar ou investir no Sudoeste,
                  conte com a experiência da Top Imobiliária.
                </p>
                <div className="region-cta-actions">
                  <Link href="/imoveis?regiao=Sudoeste">Imóveis no Sudoeste</Link>
                  <Link href="/#simulador">Avaliação de imóveis</Link>
                  <Link href="/regioes/noroeste">Noroeste</Link>
                  <Link href="/regioes/cruzeiro">Cruzeiro</Link>
                  <Link href="/regioes/asa-sul">Asa Sul</Link>
                  <Link href="/regioes/asa-norte">Asa Norte</Link>
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
