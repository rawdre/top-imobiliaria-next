import type { Metadata } from "next";
import RegionGuidePage, { type RegionGuideData } from "@/components/RegionGuidePage";

export const metadata: Metadata = {
  title: "Morar no Cruzeiro DF: história, imóveis e qualidade de vida | Top Imobiliária",
  description:
    "Guia do Cruzeiro DF: Cruzeiro Velho, Cruzeiro Novo, história, localização, infraestrutura, cultura e mercado imobiliário.",
  alternates: { canonical: "/regioes/cruzeiro" },
  keywords:
    "Cruzeiro DF, Cruzeiro Velho, Cruzeiro Novo, imóveis no Cruzeiro, morar no Cruzeiro, mercado imobiliário Cruzeiro, casas Cruzeiro",
};

const guide: RegionGuideData = {
  name: "Cruzeiro",
  slug: "cruzeiro",
  title: "Cruzeiro: história, localização, qualidade de vida e o futuro de uma das regiões mais estratégicas de Brasília",
  description:
    "Guia completo sobre Cruzeiro Velho e Cruzeiro Novo: patrimônio, cultura, centralidade, infraestrutura, imóveis e perspectivas de renovação urbana.",
  propertyHref: "/imoveis?regiao=Cruzeiro",
  stats: [
    { value: "26.435", label: "moradores" },
    { value: "11.460", label: "domicílios ocupados" },
    { value: "319,12 ha", label: "área territorial" },
    { value: "39,5 anos", label: "idade média" },
    { value: "59,1%", label: "com ensino superior completo" },
    { value: "97%", label: "dos domicílios com acesso à internet" },
  ],
  highlights: [
    {
      title: "Centralidade rara",
      text: "Próximo ao Plano Piloto, Eixo Monumental, Sudoeste, Asa Sul, SIG, Parque da Cidade e polos institucionais.",
      icon: "map",
    },
    {
      title: "História e patrimônio",
      text: "A região se relaciona com a construção de Brasília, Praça do Cruzeiro, ARUC e a área tombada do Plano Piloto.",
      icon: "landmark",
    },
    {
      title: "Dois perfis imobiliários",
      text: "Cruzeiro Velho é predominantemente horizontal; Cruzeiro Novo reúne edifícios residenciais e condomínios.",
      icon: "home",
    },
  ],
  intro: [
    "O Cruzeiro é uma das regiões mais tradicionais do Distrito Federal. Sua história está ligada à construção de Brasília, ao projeto urbanístico de Lúcio Costa e a uma forte identidade comunitária.",
    "A região já possui infraestrutura consolidada e localização estratégica. Por isso, seu futuro tende a estar menos na expansão territorial e mais na renovação, modernização e valorização do que já existe.",
  ],
  sections: [
    {
      title: "Uma história que começa antes de Brasília",
      icon: "landmark",
      body: [
        "O território do Cruzeiro antecede a construção da capital. Em 1894, durante a Missão Cruls, foi instalado um acampamento na região, próximo ao curso d'água posteriormente conhecido como Córrego do Acampamento.",
        "Com a construção de Brasília, o território passou a integrar o planejamento da nova capital. A ocupação residencial começou na segunda metade da década de 1950, nas terras da antiga Fazenda Bananal, e sua formação urbana se iniciou em 1959.",
      ],
    },
    {
      title: "Cruzeiro Velho e Cruzeiro Novo",
      icon: "home",
      body: [
        "O primeiro núcleo residencial foi o Setor de Residências Econômicas Sul, hoje conhecido como Cruzeiro Velho. Predominam casas geminadas, ruas residenciais e uma percepção mais tradicional de bairro.",
        "Posteriormente, o Setor de Habitações Coletivas Econômicas Sul, conhecido como Cruzeiro Novo, trouxe edifícios residenciais para a região.",
        "A distinção importa para quem compra, aluga ou investe: o Cruzeiro não é um mercado único. Localização, tipologia e estado de conservação variam de forma relevante entre as duas áreas.",
      ],
    },
    {
      title: "Praça do Cruzeiro e patrimônio de Brasília",
      icon: "landmark",
      body: [
        "A Praça do Cruzeiro é um dos marcos simbólicos da construção de Brasília. Em 1957, foi celebrada no local a primeira missa oficial da futura capital.",
        "O Cruzeiro integra a poligonal de tombamento do Plano Piloto. Essa inserção reforça sua importância histórica e urbanística, mas também exige atenção às regras aplicáveis à conservação e às transformações do ambiente construído.",
      ],
    },
    {
      title: "Quando o Cruzeiro se tornou Região Administrativa",
      icon: "calendar",
      body: [
        "A Região Administrativa XI foi criada pela Lei nº 49, de 25 de outubro de 1989, por desmembramento da então RA I — Brasília.",
        "Em 2003, Sudoeste e Octogonal foram desmembrados e passaram a constituir outra Região Administrativa. Dados antigos devem ser comparados com cuidado porque a configuração territorial atual não é a mesma de 1989.",
      ],
    },
    {
      title: "Quem mora no Cruzeiro",
      icon: "users",
      body: [
        "A PDAD-A 2024 registra 26.435 moradores e 11.460 domicílios ocupados. A idade média é de 39,5 anos e 51% dos moradores declararam ter nascido no Distrito Federal.",
        "A permanência residencial é marcante: o tempo médio de residência na própria Região Administrativa era de aproximadamente 19 anos. Isso ajuda a explicar a identidade comunitária e o vínculo histórico com o bairro.",
      ],
    },
    {
      title: "Educação, saúde e serviços",
      icon: "education",
      body: [
        "Entre os moradores com 25 anos ou mais, 59,1% possuíam ensino superior completo. A região conta com equipamentos educacionais próprios e proximidade a uma ampla rede de instituições do Plano Piloto.",
        "Na saúde, 61,4% declararam possuir plano de saúde. Entre os moradores que utilizaram serviços, 71,4% indicaram o próprio Cruzeiro como local do último atendimento.",
        "Comércio de bairro, supermercados, farmácias, restaurantes, padarias, academias, clínicas e serviços especializados reduzem deslocamentos para atividades cotidianas.",
      ],
    },
    {
      title: "Feira Permanente e ARUC",
      icon: "book",
      body: [
        "A Feira Permanente é um dos símbolos da identidade comercial e comunitária da região, combinando atividade econômica e convivência dos moradores.",
        "A Associação Recreativa Cultural Unidos do Cruzeiro, fundada em 1961, possui trajetória ligada ao carnaval, esporte, música e cultura local. A ARUC é uma referência importante para a identidade cultural do Cruzeiro.",
      ],
    },
    {
      title: "Qualidade de vida e infraestrutura urbana",
      icon: "trees",
      body: [
        "A PDAD-A 2024 aponta 95,7% dos domicílios com ruas arborizadas próximas, 92% com parques ou praças, 71,7% com ciclofaixas ou ciclovias e 93% com ponto de ônibus próximo.",
        "Também foram registrados índices elevados de vias principais asfaltadas, calçadas, iluminação pública e drenagem. O guia reconhece desafios: 26,1% relataram alagamentos nas proximidades em épocas de chuva e 42,4% relataram descarte inadequado de entulho.",
      ],
    },
    {
      title: "Mercado imobiliário do Cruzeiro",
      icon: "building",
      body: [
        "O Cruzeiro Velho concentra casas e imóveis horizontais; o Cruzeiro Novo reúne apartamentos, edifícios residenciais e condomínios. Essa diversidade atende perfis distintos de moradores, proprietários e investidores.",
        "Em uma região consolidada, a análise deve ir além do nome do bairro: endereço exato, acesso, comércio, conservação, idade do edifício, condomínio, garagem, posição solar, ventilação, reformas, documentação e regras urbanísticas são fatores relevantes.",
      ],
    },
    {
      title: "O futuro da região",
      icon: "trend",
      body: [
        "O Cruzeiro não depende de expansão horizontal para se transformar. A hipótese mais relevante é a renovação: modernização de edifícios, requalificação de espaços públicos, melhoria de mobilidade, adaptação do comércio e conservação do patrimônio.",
        "Não é possível garantir valorização futura. Porém, centralidade, infraestrutura consolidada, escassez territorial, identidade histórica e proximidade de polos de Brasília justificam acompanhar a região com atenção.",
      ],
    },
  ],
  timeline: [
    { year: "1894", text: "Missão Cruls e acampamento na região." },
    { year: "1955", text: "Marco relacionado à futura capital é instalado na área da atual Praça do Cruzeiro." },
    { year: "1957", text: "Primeira missa oficial de Brasília na Praça do Cruzeiro." },
    { year: "1959", text: "Formação do núcleo urbano do Cruzeiro." },
    { year: "1961", text: "Fundação da ARUC." },
    { year: "1989", text: "Criação da Região Administrativa XI." },
    { year: "2003", text: "Sudoeste e Octogonal são desmembrados." },
    { year: "2024", text: "PDAD-A registra 26.435 moradores na configuração atual da RA." },
  ],
  faqs: [
    { question: "O Cruzeiro é uma região antiga?", answer: "É uma das regiões administrativas mais antigas do DF e sua formação se relaciona diretamente à construção de Brasília." },
    { question: "O Cruzeiro fica perto do Plano Piloto?", answer: "Sim. A localização central é uma das principais vantagens da região." },
    { question: "Qual a diferença entre Cruzeiro Velho e Cruzeiro Novo?", answer: "O Cruzeiro Velho é predominantemente horizontal, enquanto o Cruzeiro Novo reúne mais edifícios residenciais." },
    { question: "O Cruzeiro é bom para morar?", answer: "A região oferece comércio, serviços, infraestrutura consolidada, localização central e forte identidade comunitária." },
    { question: "O Cruzeiro pode valorizar no futuro?", answer: "Há fatores estruturais favoráveis, mas nenhuma valorização pode ser garantida. Imóvel, preço, conservação e cenário de mercado devem ser analisados." },
    { question: "Vale a pena investir no Cruzeiro?", answer: "Pode ser interessante para quem procura uma região consolidada e central, desde que o imóvel específico seja analisado individualmente." },
  ],
  related: [
    { label: "Águas Claras", href: "/regioes/aguas-claras" },
    { label: "Sudoeste", href: "/regioes/sudoeste" },
    { label: "Asa Sul", href: "/regioes/asa-sul" },
    { label: "Asa Norte", href: "/regioes/asa-norte" },
    { label: "Park Way", href: "/regioes/park-way" },
    { label: "Guará", href: "/regioes/guara" },
  ],
  sources: [
    "IPEDF Codeplan — PDAD-A 2024 do Cruzeiro",
    "Administração Regional do Cruzeiro — RA XI",
    "Câmara Legislativa do Distrito Federal e Governo do Distrito Federal",
    "Documentação histórica e urbanística do Distrito Federal",
  ],
  updatedAt: "agosto de 2026",
};

export default function CruzeiroPage() {
  return <RegionGuidePage guide={guide} />;
}
