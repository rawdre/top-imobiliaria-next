import type { Metadata } from "next";
import Link from "next/link";
import {
  Bus,
  Building2,
  BookOpen,
  Calendar,
  GraduationCap,
  Landmark,
  MapPinned,
  Mountain,
  Music,
  Route,
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
  title: "Sobradinho (DF): História, Moradia, Natureza e Guia Completo | Top Imobiliária",
  description:
    "Conheça Sobradinho, no Distrito Federal: história, população, moradia, natureza, comércio, mobilidade, BR-020, novos projetos urbanos e mercado imobiliário.",
  alternates: {
    canonical: "/regioes/sobradinho",
  },
  keywords:
    "Sobradinho DF, imóveis em Sobradinho, morar em Sobradinho, Saída Norte, BR-020 Sobradinho, Sobradinho II, mercado imobiliário Sobradinho, história de Sobradinho",
};

// Dados oficiais (PDAD-A 2024 / IPEDF / CLDF / CONPLAN) — números verificados citados no guia.
const stats = [
  { value: "70.608", label: "Habitantes (PDAD-A 2024)" },
  { value: "36,5", label: "Idade média (anos)" },
  { value: "93,3%", label: "Domicílios com internet própria" },
  { value: "76,8%", label: "Domicílios com automóvel" },
  { value: "38,1%", label: "Domicílios com bicicleta" },
  { value: "19.352,65 ha", label: "Área territorial" },
];

const highlights = [
  {
    title: "Memória e pioneirismo",
    text: "Uma das cidades criadas nos primeiros anos de Brasília para receber pioneiros — Região Administrativa V desde 1964, com identidade e história próprias.",
    icon: Landmark,
  },
  {
    title: "Cidade entre o urbano e o natural",
    text: "Serras, nascentes, unidades de conservação e áreas rurais convivem com bairros consolidados e condomínios — natureza é um dos eixos da região.",
    icon: Mountain,
  },
  {
    title: "O eixo da Saída Norte",
    text: "Inserida na BR-020, Sobradinho é porta de ligação com Planaltina, o Entorno e Goiás, e concentra alguns dos novos vetores de expansão do Norte do DF.",
    icon: Route,
  },
];

const sections = [
  {
    title: "Como nasceu Sobradinho",
    icon: Landmark,
    body: [
      "A área foi oferecida pela NOVACAP, em 1960, para receber moradores dos antigos acampamentos da Vila Amauri, do Bananal e das proximidades da Vila Planalto, além de funcionários da NOVACAP e do Banco do Brasil.",
      "Em 1961 foi criada uma administração regionalizada e, em 10 de dezembro de 1964, Sobradinho tornou-se oficialmente a Região Administrativa V, por meio da Lei nº 4.545.",
      "Nasce assim uma das regiões que melhor mostram que Brasília não termina no Plano Piloto: sua história está ligada aos primeiros anos da nova capital, mas sua geografia aponta para o futuro da Saída Norte.",
    ],
  },
  {
    title: "De onde vem o nome",
    icon: BookOpen,
    body: [
      "Uma das versões históricas registradas associa o nome a um antigo posto de contagem e cobrança de impostos ligado a um sobrado de dois pavimentos.",
      "O nome teria passado para o ribeirão e, posteriormente, para a cidade. Apresentamos essa origem como uma das versões históricas — sem transformar uma tradição em certeza absoluta.",
    ],
  },
  {
    title: "O primeiro projeto urbanístico",
    icon: MapPinned,
    body: [
      "O primeiro estudo urbanístico da cidade foi elaborado pelo arquiteto Paulo Hungria Machado, em 1958/1959.",
      "A implantação ocorreu às margens da antiga estrada que ligava Planaltina ao centro da nova capital — o que ajuda a explicar a localização atual de Sobradinho e a sua vocação de conexão com o Norte do DF.",
    ],
  },
  {
    title: "Sobradinho em 2024",
    icon: Users,
    body: [
      "Segundo a PDAD-A 2024, Sobradinho reúne 70.608 moradores, com idade média de 36,5 anos e 52,9% de população do sexo de nascimento feminino.",
      "66,4% dos moradores nasceram no Distrito Federal e 68,3% das pessoas com 18 anos ou mais declararam possuir CNH — um retrato de uma cidade consolidada e com forte mobilidade própria.",
    ],
  },
  {
    title: "Uma cidade entre o urbano e o natural",
    icon: Mountain,
    body: [
      "Um dos grandes diferenciais de Sobradinho é a relação entre cidade e natureza: áreas verdes, parques, unidades de conservação próximas, serras, nascentes e áreas rurais fazem parte do cotidiano.",
      "A região também abriga condomínios e áreas de expansão como o Grande Colorado e conecta-se administrativamente a Sobradinho II, formando um mosaico entre o consolidado e o que ainda está em transformação no Norte do DF.",
    ],
  },
  {
    title: "Cultura e memória",
    icon: Music,
    body: [
      "Sobradinho preserva a memória dos pioneiros e mantém uma vida cultural própria, com a tradicional Feira de Sobradinho, equipamentos culturais e o polo de cinema e vídeo Grande Otelo.",
      "A documentação do IPEDF registra equipamentos culturais, de esporte e de lazer na região — incluindo o Centro Olímpico e Paralímpico, parques e áreas comunitárias que fortalecem a convivência entre moradores.",
    ],
  },
  {
    title: "Educação e saúde",
    icon: GraduationCap,
    body: [
      "A rede educacional é ampla e detalhada no estudo oficial, com CEIs, CAIC, Escolas Classe, CEFs, CED, CEMs, CEE e CIL, atendendo moradores de todas as faixas etárias.",
      "Na saúde, a região conta com o Hospital Regional de Sobradinho e seis Unidades Básicas de Saúde registradas no estudo, além do acesso rápido ao Plano Piloto para atendimentos especializados.",
    ],
  },
  {
    title: "Mobilidade",
    icon: Bus,
    body: [
      "Sobradinho é servida por um amplo conjunto de vias — BR-020, DF-001, DF-003, DF-008, DF-205, DF-249, DF-326, DF-330, DF-335, DF-440 e DF-442 — além de terminais de transporte público.",
      "Essa malha viária integra a cidade ao Plano Piloto, a Planaltina, ao Lago Norte e ao Entorno, e é o que sustenta o papel de Sobradinho como um dos eixos da Saída Norte.",
    ],
  },
  {
    title: "Sobradinho e a Saída Norte",
    icon: Route,
    body: [
      "Sobradinho está inserido em um dos grandes eixos de ligação do Distrito Federal com Planaltina, a região Norte, o Entorno, Goiás e demais municípios conectados pela BR-020.",
      "Por isso, entender Sobradinho é também entender a dinâmica da Saída Norte de Brasília — uma das frentes de crescimento mais discutidas do DF nos próximos anos.",
    ],
  },
  {
    title: "A transformação da BR-020 — o que é fato e o que é projeto",
    icon: TrendingUp,
    body: [
      "Aqui adotamos uma regra editorial de credibilidade: separar claramente o que já existe, o que foi aprovado, o que está em implantação e o que ainda está em processo de aprovação. Projeto não é fato consumado.",
      "APROVADO: em agosto de 2026, o CONPLAN aprovou o projeto de parcelamento urbano Borges Landeiro Primavera, no km 4 da BR-020, na Região Administrativa de Sobradinho II, com aproximadamente 23,43 hectares. O projeto prevê lotes comerciais próximos à BR-020, lotes residenciais multifamiliares, áreas de espaços livres de uso público e sistema viário e cicloviário, com uma via central voltada a comércio, serviços e economia criativa.",
      "INDICAÇÃO: existe indicação legislativa de 2025 defendendo novas ligações viárias entre o setor de expansão econômica de Sobradinho e a BR-020, para estimular empresas e investimentos. Indicação parlamentar não significa obra executada.",
      "EM ESTRUTURAÇÃO: o projeto da Nova Saída Norte prevê uma nova ligação viária entre a L4 e a BR-020, com aproximadamente 14,8 km, incluindo novas conexões e pontes. Ele aparece nos documentos orçamentários do DF como iniciativa em estruturação — pode alterar a mobilidade do Norte, mas não é obra concluída.",
    ],
  },
  {
    title: "Sobradinho × Sobradinho II",
    icon: MapPinned,
    body: [
      "Sobradinho e Sobradinho II são a mesma coisa? Não. São Regiões Administrativas distintas.",
      "Vários empreendimentos e áreas de expansão associados à BR-020 estão administrativamente em Sobradinho II, mesmo quando o público usa “Sobradinho” de forma genérica. Deixar isso claro melhora a precisão da busca e evita confusão para quem procura imóveis na região.",
    ],
  },
  {
    title: "O mercado imobiliário",
    icon: Building2,
    body: [
      "O mercado de Sobradinho é diversificado: casas, apartamentos, condomínios, imóveis comerciais, terrenos, áreas em transformação, locação, primeiro imóvel e imóveis com potencial de renovação.",
      "Não trabalhamos com preço médio inventado. Caso valores sejam apresentados, devem vir com data de coleta e metodologia explícita — o guia prioriza informação confiável em vez de números sem fonte.",
    ],
  },
  {
    title: "O futuro de Sobradinho",
    icon: TrendingUp,
    body: [
      "Sobradinho pode ser uma das grandes áreas de transformação urbana do Norte do DF? A resposta combina BR-020, novos parcelamentos, mobilidade, expansão econômica e conexão com Planaltina e o Entorno.",
      "Mas sempre diferenciando fato, projeto e expectativa. A cidade tem uma característica rara: um núcleo consolidado ao lado de áreas com real potencial de transformação — o que pode produzir dois movimentos simultâneos, a renovação do existente e a expansão planejada nas áreas apropriadas.",
    ],
  },
  {
    title: "Para quem Sobradinho faz sentido",
    icon: Sparkles,
    body: [
      "Pode fazer sentido para famílias, para quem trabalha na região Norte, para quem procura casas ou condomínios, para quem valoriza a natureza e para quem precisa de acesso à BR-020.",
      "Também para investidores atentos aos novos vetores da Saída Norte — sempre com análise individual do imóvel e leitura equilibrada entre o que já está consolidado e o que ainda é projeto.",
    ],
  },
];

const timeline = [
  { year: "1958/1959", text: "O arquiteto Paulo Hungria Machado elabora o primeiro estudo urbanístico da cidade." },
  { year: "1960", text: "A NOVACAP oferece a área para receber pioneiros dos antigos acampamentos e funcionários da construção da capital." },
  { year: "1961", text: "É criada uma administração regionalizada em Sobradinho." },
  { year: "10/12/1964", text: "Sobradinho torna-se oficialmente a Região Administrativa V, pela Lei nº 4.545." },
  { year: "2024", text: "PDAD-A registra 70.608 moradores, idade média de 36,5 anos e 93,3% dos domicílios com internet própria." },
  { year: "Ago/2026", text: "O CONPLAN aprova o parcelamento Borges Landeiro Primavera (23,43 ha) no km 4 da BR-020, em Sobradinho II." },
];

// Região Característica — rede de conhecimento do Hub. Link apenas para páginas existentes.
const relatedRegions = [
  { label: "Sobradinho", trait: "História + natureza + Saída Norte", href: null },
  { label: "Sobradinho II", trait: "Expansão e condomínios", href: null },
  { label: "Planaltina", trait: "História + grande território", href: "/regioes/planaltina" },
  { label: "Lago Norte", trait: "Proximidade do Plano Piloto + perfil residencial", href: "/regioes/lago-norte" },
  { label: "São Sebastião", trait: "Expansão urbana", href: null },
  { label: "Jardim Botânico", trait: "Condomínios + natureza", href: "/regioes/jardim-botanico" },
];

const faqs = [
  {
    q: "Quando Sobradinho foi criado?",
    a: "A área foi oferecida pela NOVACAP em 1960 e, em 10 de dezembro de 1964, Sobradinho tornou-se oficialmente a Região Administrativa V, pela Lei nº 4.545.",
  },
  {
    q: "Por que Sobradinho tem esse nome?",
    a: "Uma das versões históricas associa o nome a um antigo posto de contagem e cobrança de impostos ligado a um sobrado de dois pavimentos, que teria dado nome ao ribeirão e, depois, à cidade.",
  },
  {
    q: "Quantas pessoas moram em Sobradinho?",
    a: "Segundo a PDAD-A 2024, Sobradinho tem 70.608 moradores, com idade média de 36,5 anos.",
  },
  {
    q: "Como é morar em Sobradinho?",
    a: "É uma cidade consolidada, com forte relação entre urbano e natureza, comércio próprio, hospital regional, ampla rede de ensino e boa mobilidade pela BR-020 e vias do Norte do DF.",
  },
  {
    q: "Sobradinho fica perto de Brasília?",
    a: "Sim. Sobradinho integra a Saída Norte e conecta-se ao Plano Piloto, ao Lago Norte e a Planaltina, principalmente pela BR-020.",
  },
  {
    q: "Como chegar a Sobradinho?",
    a: "O acesso principal é pela BR-020, complementada por um conjunto de vias do DF (DF-001, DF-150 e outras) e por terminais de transporte público.",
  },
  {
    q: "Qual a importância da BR-020?",
    a: "A BR-020 é o eixo da Saída Norte: liga Sobradinho a Planaltina, ao Entorno e a Goiás, e concentra os principais vetores de expansão urbana e econômica da região.",
  },
  {
    q: "Qual a diferença entre Sobradinho e Sobradinho II?",
    a: "São Regiões Administrativas distintas. Muitos empreendimentos e áreas de expansão ligados à BR-020 estão administrativamente em Sobradinho II, ainda que o público use “Sobradinho” de forma genérica.",
  },
  {
    q: "Existem novos empreendimentos em Sobradinho?",
    a: "Sim. Entre os projetos recentes, o parcelamento Borges Landeiro Primavera (23,43 ha), no km 4 da BR-020 em Sobradinho II, foi aprovado pelo CONPLAN em agosto de 2026.",
  },
  {
    q: "O que está sendo planejado para a BR-020?",
    a: "Há iniciativas em diferentes estágios: projetos aprovados (como o Borges Landeiro Primavera), indicações legislativas de novas vias (2025) e a Nova Saída Norte, que aparece como iniciativa em estruturação nos documentos orçamentários do DF.",
  },
  {
    q: "Como é o mercado imobiliário de Sobradinho?",
    a: "É diversificado: casas, apartamentos, condomínios, imóveis comerciais e terrenos, com áreas consolidadas e áreas em transformação. Valores só devem ser considerados com data e metodologia explícitas.",
  },
  {
    q: "Sobradinho é uma boa região para morar?",
    a: "Para muitos perfis, sim: famílias, quem valoriza natureza, quem trabalha no Norte do DF e quem busca casas ou condomínios com acesso à BR-020. A decisão depende sempre da análise individual do imóvel.",
  },
  {
    q: "Quais parques e áreas verdes existem em Sobradinho?",
    a: "A região reúne parques, áreas verdes, serras, nascentes e unidades de conservação próximas, além de áreas rurais — a relação entre cidade e natureza é um dos seus principais eixos.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Sobradinho (DF): História, Moradia, Natureza e Guia Completo",
  description:
    "Guia completo de Sobradinho no DF: história, população, moradia, natureza, comércio, mobilidade, BR-020, Saída Norte e mercado imobiliário.",
  author: { "@type": "Organization", name: "Top Imobiliária" },
  publisher: { "@type": "Organization", name: "Top Imobiliária" },
  mainEntityOfPage: "https://www.topimobiliaria.com/regioes/sobradinho",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: "https://www.topimobiliaria.com" },
    { "@type": "ListItem", position: 2, name: "Regiões", item: "https://www.topimobiliaria.com/regioes" },
    { "@type": "ListItem", position: 3, name: "Sobradinho", item: "https://www.topimobiliaria.com/regioes/sobradinho" },
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

export default function SobradinhoPage() {
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
              Sobradinho (DF): história, natureza, qualidade de vida e a
              transformação da Saída Norte de Brasília
            </h1>
            <p>
              Um guia completo sobre a cidade criada para receber pioneiros: sua
              população, moradia, comércio, mobilidade, natureza, memória e os
              novos vetores de desenvolvimento da região Norte do Distrito
              Federal.
            </p>
            <div className="region-hero-actions">
              <Link href="/imoveis?regiao=Sobradinho">Ver imóveis em Sobradinho</Link>
              <Link href="/#simulador">Avaliar imóvel na região</Link>
            </div>
          </div>
        </section>

        <section className="region-content">
          <div className="region-inner">
            <div className="region-stat-grid" aria-label="Sobradinho em números">
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
                <h2>Conheça Sobradinho</h2>
                <p>
                  Sobradinho é uma das regiões que melhor mostram que Brasília
                  não termina no Plano Piloto. Sua história está ligada aos
                  primeiros anos da nova capital, mas sua geografia aponta para o
                  futuro da Saída Norte — reunindo memória, natureza, moradia,
                  comércio, conexão rodoviária e expansão urbana.
                </p>
                <p>
                  Neste guia, a Top Imobiliária conta o passado e explica o
                  futuro no mesmo lugar: história, dados oficiais, vida
                  cotidiana, natureza, mobilidade, mercado imobiliário e a
                  transformação da BR-020 — sempre separando o que é fato do que
                  ainda é projeto.
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

              <section className="region-section" aria-label="Linha do tempo de Sobradinho">
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
                  Sobradinho faz parte de uma rede de conhecimento sobre o
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

              <section className="region-decision-grid" aria-label="Perguntas frequentes sobre Sobradinho">
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
                  Se você deseja conhecer melhor Sobradinho, a Saída Norte ou
                  encontrar oportunidades na região, conte com a experiência da
                  Top Imobiliária.
                </p>
                <div className="region-cta-actions">
                  <Link href="/imoveis?regiao=Sobradinho">Imóveis em Sobradinho</Link>
                  <Link href="/#simulador">Avaliação de imóveis</Link>
                  <Link href="/regioes/planaltina">Planaltina</Link>
                  <Link href="/regioes/lago-norte">Lago Norte</Link>
                  <Link href="/regioes/jardim-botanico">Jardim Botânico</Link>
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
