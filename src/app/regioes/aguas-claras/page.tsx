import type { Metadata } from "next";
import RegionGuidePage, { type RegionGuideData } from "@/components/RegionGuidePage";

export const metadata: Metadata = {
  title: "Morar em Águas Claras DF: guia, imóveis e mercado | Top Imobiliária",
  description:
    "Conheça Águas Claras: história, metrô, parques, infraestrutura, qualidade de vida e mercado imobiliário para morar, alugar ou investir.",
  alternates: { canonical: "/regioes/aguas-claras" },
  keywords:
    "Águas Claras DF, morar em Águas Claras, imóveis em Águas Claras, apartamentos Águas Claras, mercado imobiliário Águas Claras, investir em Águas Claras",
};

const guide: RegionGuideData = {
  name: "Águas Claras",
  slug: "aguas-claras",
  title: "Águas Claras: o guia definitivo para conhecer, morar e investir em uma das regiões mais dinâmicas de Brasília",
  description:
    "História, planejamento urbano, mobilidade, natureza, comércio, qualidade de vida e mercado imobiliário de Águas Claras, com dados públicos e referências de mercado.",
  propertyHref: "/imoveis?regiao=%C3%81guas%20Claras",
  stats: [
    { value: "141.872", label: "moradores" },
    { value: "66.273", label: "domicílios ocupados" },
    { value: "35,9 anos", label: "idade média" },
    { value: "98,5%", label: "dos domicílios são apartamentos" },
    { value: "75,8%", label: "com ensino superior completo" },
    { value: "100%", label: "dos domicílios com acesso à internet" },
  ],
  highlights: [
    {
      title: "Planejada para a densidade",
      text: "A verticalização integrou o plano urbano e ajudou a viabilizar infraestrutura, comércio e transporte de massa.",
      icon: "building",
    },
    {
      title: "Metrô e conexões",
      text: "Quatro estações do Metrô-DF e ligação por EPTG, EPCT e EPVP estruturam a mobilidade regional.",
      icon: "train",
    },
    {
      title: "Autonomia urbana",
      text: "Comércio, serviços, educação, saúde, parques e vida cotidiana concentrados na própria Região Administrativa.",
      icon: "map",
    },
  ],
  intro: [
    "Águas Claras é uma Região Administrativa que nasceu de um projeto de expansão urbana planejada e se transformou em uma das áreas mais densas, conectadas e autônomas do Distrito Federal.",
    "Sua identidade reúne verticalização, metrô, comércio e serviços, parques, áreas verdes e um mercado imobiliário diversificado. Para entender a região, porém, é preciso olhar além dos edifícios: conhecer seu planejamento, moradores, mobilidade e dinâmica urbana.",
  ],
  sections: [
    {
      title: "História e planejamento urbano",
      icon: "landmark",
      body: [
        "O território de Águas Claras fazia parte da antiga Fazenda Bananal, posteriormente desapropriada para a implantação de Brasília. As diretrizes de ocupação aparecem no PEOT de 1977, voltado à organização da expansão urbana do Distrito Federal.",
        "O bairro surgiu em 1984, inicialmente vinculado a Taguatinga. Em dezembro de 1992, a Lei nº 385 autorizou a implantação do novo Bairro de Águas Claras e aprovou seu Plano de Ocupação.",
        "O projeto urbanístico, elaborado por Paulo Zimbres, tratou a verticalização como escolha planejada: concentrar moradores, sustentar infraestrutura, responder à demanda habitacional e viabilizar o metrô.",
      ],
    },
    {
      title: "De bairro de Taguatinga a Região Administrativa",
      icon: "calendar",
      body: [
        "Águas Claras tornou-se oficialmente a Região Administrativa XX por meio da Lei nº 3.153, de 6 de maio de 2003.",
        "A configuração territorial mudou em 2019, quando a Lei nº 6.371 criou a Região Administrativa de Arniqueira. Por isso, comparações históricas de população e território devem considerar a delimitação usada em cada pesquisa.",
      ],
    },
    {
      title: "Mobilidade e metrô",
      icon: "train",
      body: [
        "O sistema metroviário atravessa Águas Claras e participa diretamente da identidade da região. As estações Arniqueiras, Águas Claras, Concessionárias e Estrada Parque conectam moradores a outras áreas do Distrito Federal.",
        "A cidade também se relaciona com eixos importantes, como EPTG (DF-085), EPCT (DF-001) e EPVP (DF-079). A estrutura favorece quem mora na região e trabalha no Plano Piloto ou em polos vizinhos.",
      ],
    },
    {
      title: "Quem mora em Águas Claras",
      icon: "users",
      body: [
        "A PDAD-A 2024 aponta idade média de 35,9 anos. Do total de moradores, 47,3% declararam ter nascido no Distrito Federal; entre os nascidos fora do DF, o Sudeste representa a maior parcela de origem.",
        "O tempo médio de moradia na Região Administrativa era de 7,5 anos, indicador compatível com uma cidade que continua atraindo pessoas de diferentes partes do Brasil em busca de infraestrutura, trabalho e qualidade de vida.",
      ],
    },
    {
      title: "Educação, saúde e vida conectada",
      icon: "education",
      body: [
        "Entre os moradores com 25 anos ou mais, 75,8% possuíam ensino superior completo. Entre pessoas de 4 a 24 anos, 90,8% declararam frequentar creche, escola ou universidade.",
        "Na saúde, 77,1% declararam possuir plano de saúde. A região conta com Unidades Básicas de Saúde, clínicas e acesso a equipamentos de outras áreas centrais.",
        "A conectividade também se destaca: 100% dos domicílios pesquisados possuíam acesso à internet, próprio ou compartilhado.",
      ],
    },
    {
      title: "Comércio, serviços e autonomia urbana",
      icon: "building",
      body: [
        "Águas Claras reúne supermercados, farmácias, academias, clínicas, escolas, restaurantes, cafeterias, bares, escritórios, comércio de rua e centros comerciais.",
        "A PDAD-A 2024 mostra que a própria região foi indicada como principal local de compras por 81,6% dos moradores para alimentação, higiene e limpeza, e por 81,5% para serviços em geral.",
        "A cidade combina função residencial e atividades econômicas próprias. Parte relevante da rotina pode acontecer dentro da própria Região Administrativa.",
      ],
    },
    {
      title: "Natureza e qualidade de vida em uma cidade vertical",
      icon: "trees",
      body: [
        "O Parque Ecológico de Águas Claras, Parque Central, Parque Sul, praças, áreas arborizadas e espaços de caminhada compõem uma dimensão verde relevante da cidade.",
        "O Parque Ecológico foi criado em 15 de abril de 2000 e possui 86,39 hectares, segundo a PDAD-A 2024. Seus objetivos incluem proteção de flora, fauna, nascentes e áreas de recarga, além de lazer, pesquisa e educação ambiental.",
        "A nomenclatura urbana reforça essa identidade: avenidas como Araucárias, Castanheiras, Flamboyant e Ipê Amarelo, além de praças com nomes ligados à fauna do Cerrado.",
      ],
    },
    {
      title: "Infraestrutura e desafios urbanos",
      icon: "map",
      body: [
        "A pesquisa de 2024 registra ruas principais asfaltadas para 100% dos domicílios pesquisados, 99,5% com calçada, 92,5% com iluminação, 94,8% com drenagem, 88,3% com arborização e 94,3% com ponto de ônibus próximo.",
        "Um guia útil também reconhece os desafios: 23,9% dos entrevistados informaram alagamentos em ocasiões de chuva e 18,2% relataram descarte inadequado de entulho nas proximidades.",
      ],
    },
    {
      title: "Mercado imobiliário de Águas Claras",
      icon: "trend",
      body: [
        "A predominância de apartamentos criou um mercado amplo e diversificado, com unidades compactas, familiares, de médio e alto padrão, coberturas, imóveis para locação, investimento e usos comerciais.",
        "Segundo o Índice FipeZAP de maio de 2026, Águas Claras apresentou preço médio residencial de venda de R$ 8.935 por m² e variação de 2,9% em 12 meses. Para locação, o índice apontou R$ 51,5 por m² e variação de 14,5% em 12 meses.",
        "Esses valores são referências agregadas de mercado, não uma avaliação individual. Condomínio, metrô, posição solar, vagas, conservação, ruído, padrão e endereço exato influenciam cada imóvel.",
      ],
    },
    {
      title: "O futuro da região",
      icon: "trend",
      body: [
        "O futuro de Águas Claras tende a depender mais de maturação urbana do que de expansão horizontal. Localização, proximidade do metrô, conservação dos condomínios, eficiência das unidades, áreas comuns, comércio e mobilidade devem ganhar relevância.",
        "Em uma cidade predominantemente vertical, a valorização não depende apenas de novos lançamentos, mas também da qualificação do estoque já existente.",
      ],
    },
  ],
  faqs: [
    { question: "Águas Claras é uma cidade ou um bairro?", answer: "Atualmente, Águas Claras é a Região Administrativa XX do Distrito Federal." },
    { question: "Quando Águas Claras foi criada?", answer: "O bairro foi autorizado em 1992 e a Região Administrativa foi criada oficialmente em 6 de maio de 2003." },
    { question: "Águas Claras tem metrô?", answer: "Sim. A região é atendida pelas estações Arniqueiras, Águas Claras, Concessionárias e Estrada Parque." },
    { question: "Águas Claras é boa para morar?", answer: "A região oferece transporte, comércio, serviços, parques e grande variedade de imóveis. A escolha ideal depende do perfil e da localização específica." },
    { question: "É melhor comprar ou alugar em Águas Claras?", answer: "Depende de prazo, orçamento, objetivo e imóvel. A região tem mercado relevante de venda e locação." },
    { question: "Águas Claras é boa para investimento?", answer: "A infraestrutura consolidada e a demanda residencial tornam a região relevante, mas cada imóvel precisa de análise individual." },
  ],
  related: [
    { label: "Cruzeiro", href: "/regioes/cruzeiro" },
    { label: "Guará", href: "/regioes/guara" },
    { label: "Taguatinga", href: "/regioes/taguatinga" },
    { label: "Vicente Pires", href: "/regioes/vicente-pires" },
    { label: "Park Way", href: "/regioes/park-way" },
    { label: "Asa Sul", href: "/regioes/asa-sul" },
  ],
  sources: [
    "IPEDF Codeplan — PDAD-A 2024 de Águas Claras",
    "Governo do Distrito Federal e Administração Regional de Águas Claras",
    "Metrô-DF, Brasília Ambiental/IBRAM e legislação distrital",
    "Índice FipeZAP — referências de venda e locação, maio de 2026",
  ],
  updatedAt: "agosto de 2026",
};

export default function AguasClarasPage() {
  return <RegionGuidePage guide={guide} />;
}
