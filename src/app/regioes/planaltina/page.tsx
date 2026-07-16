import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Building2,
  GraduationCap,
  HeartPulse,
  Home,
  Landmark,
  MapPinned,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import SiteAssistant from "@/components/SiteAssistant";

export const metadata: Metadata = {
  title: "Planaltina DF: história e mercado imobiliário | Top Imobiliária",
  description:
    "Guia completo de Planaltina no DF: história, cultura, comércio, turismo, desenvolvimento urbano, qualidade de vida e mercado imobiliário.",
  alternates: {
    canonical: "/regioes/planaltina",
  },
  keywords:
    "Planaltina DF, imóveis em Planaltina, morar em Planaltina, investir em Planaltina, mercado imobiliário Planaltina, casas Planaltina DF",
};

const highlights = [
  {
    title: "Tradição histórica",
    text: "Uma das regiões mais antigas do Distrito Federal, com patrimônio cultural, religioso e histórico anterior à construção de Brasília.",
    icon: Landmark,
  },
  {
    title: "Custo-benefício",
    text: "Região com comércio ativo, infraestrutura em crescimento e boas alternativas para moradia e investimento.",
    icon: Home,
  },
  {
    title: "Potencial de valorização",
    text: "Expansão urbana, novos empreendimentos e melhorias de infraestrutura ampliam as oportunidades imobiliárias.",
    icon: TrendingUp,
  },
];

const sections = [
  {
    title: "História de Planaltina",
    icon: Landmark,
    body: [
      "A história de Planaltina é muito anterior à criação de Brasília.",
      "A cidade teve origem ainda no século XIX, quando era conhecida como Mestre d’Armas, tornando-se um importante ponto de passagem entre Goiás e Minas Gerais.",
      "Quando foi decidido que Brasília seria construída no Planalto Central, a região de Planaltina ganhou destaque por abrigar a Pedra Fundamental de Brasília, monumento instalado em 1922 para marcar simbolicamente o local destinado à futura capital do Brasil.",
      "Após a criação do Distrito Federal, parte do antigo município passou a integrar Brasília, preservando sua identidade histórica e cultural.",
      "Hoje, Planaltina é reconhecida como uma das regiões que melhor preservam as origens do Distrito Federal.",
    ],
  },
  {
    title: "Localização estratégica",
    icon: MapPinned,
    body: [
      "Planaltina está localizada na porção norte do Distrito Federal.",
      "Seu acesso é facilitado por importantes rodovias, permitindo deslocamento para Sobradinho, Lago Norte, Plano Piloto, Formosa, Fercal e BR-020.",
      "A cidade desempenha importante papel na integração entre Brasília e municípios do entorno.",
    ],
  },
  {
    title: "População e perfil dos moradores",
    icon: Home,
    body: [
      "Planaltina possui uma população diversificada, formada por famílias tradicionais, servidores públicos, comerciantes, produtores rurais, profissionais liberais e novos moradores que buscam qualidade de vida e boas oportunidades imobiliárias.",
      "Seu forte sentimento de pertencimento e tradição fazem parte da identidade da cidade.",
    ],
  },
  {
    title: "Educação",
    icon: GraduationCap,
    body: [
      "A cidade conta com ampla rede educacional.",
      "Entre as opções disponíveis estão escolas públicas, escolas particulares, educação infantil, ensino fundamental, ensino médio, cursos técnicos e instituições de ensino superior nas proximidades.",
      "Essa estrutura atende estudantes de todas as idades e contribui para o desenvolvimento da região.",
    ],
  },
  {
    title: "Saúde",
    icon: HeartPulse,
    body: [
      "Planaltina dispõe de uma rede de atendimento composta por hospital regional, unidades básicas de saúde, clínicas, laboratórios e consultórios especializados.",
      "Os moradores também contam com acesso a serviços de saúde em outras regiões do Distrito Federal.",
    ],
  },
  {
    title: "Comércio e serviços",
    icon: BookOpen,
    body: [
      "O comércio local é bastante diversificado.",
      "A cidade oferece supermercados, farmácias, bancos, restaurantes, padarias, academias, clínicas, centros comerciais e lojas de diversos segmentos.",
      "Essa estrutura permite atender às necessidades diárias da população sem grandes deslocamentos.",
    ],
  },
  {
    title: "Cultura, turismo e lazer",
    icon: Sparkles,
    body: [
      "Planaltina destaca-se pelo patrimônio histórico e pelas tradições culturais.",
      "Entre os principais atrativos estão o Centro Histórico, a Pedra Fundamental de Brasília, igrejas históricas, festas religiosas e tradicionais, áreas de preservação ambiental, parques e espaços públicos.",
      "A cidade também é conhecida pela tradicional Via-Sacra de Planaltina, uma das maiores manifestações religiosas do país.",
    ],
  },
  {
    title: "Mercado imobiliário",
    icon: Building2,
    body: [
      "O mercado imobiliário de Planaltina vem passando por importantes transformações.",
      "A cidade reúne casas, apartamentos, condomínios, terrenos, chácaras e imóveis comerciais.",
      "O crescimento urbano e os investimentos em infraestrutura ampliam as oportunidades para moradores e investidores.",
    ],
  },
  {
    title: "O futuro da região",
    icon: TrendingUp,
    body: [
      "Planaltina continua recebendo investimentos em infraestrutura urbana, mobilidade, equipamentos públicos e novos empreendimentos imobiliários.",
      "A expansão organizada da cidade amplia a oferta de moradias e fortalece o comércio local, contribuindo para a valorização da região.",
      "Esse cenário torna Planaltina uma opção cada vez mais interessante para quem procura qualidade de vida aliada a boas oportunidades de investimento.",
    ],
  },
];

export default function PlanaltinaPage() {
  return (
    <>
      <Header />
      <main className="region-page">
        <section className="region-hero">
          <div className="region-inner">
            <div className="region-kicker">Regiões do Distrito Federal</div>
            <h1>
              Planaltina: história, cultura, desenvolvimento e mercado
              imobiliário no DF
            </h1>
            <p>
              Uma das regiões mais históricas e tradicionais do Distrito
              Federal, com patrimônio cultural, comércio ativo, áreas rurais
              produtivas e mercado imobiliário em expansão.
            </p>
            <div className="region-hero-actions">
              <Link href="/imoveis?regiao=Planaltina">Ver imóveis em Planaltina</Link>
              <Link href="/#simulador">Avaliar imóvel na região</Link>
            </div>
          </div>
        </section>

        <section className="region-content">
          <div className="region-inner">
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
                <h2>Conheça Planaltina</h2>
                <p>
                  Planaltina é uma das regiões administrativas mais históricas e
                  tradicionais do Distrito Federal. Diferentemente de muitas
                  cidades criadas após a inauguração de Brasília, Planaltina já
                  existia muito antes da construção da capital.
                </p>
                <p>
                  Ao longo dos anos, a cidade cresceu de forma significativa,
                  consolidando-se como um importante centro urbano da região
                  norte do Distrito Federal, reunindo tradição, desenvolvimento,
                  comércio ativo, áreas rurais produtivas e mercado imobiliário
                  em expansão.
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

              <section className="region-decision-grid" aria-label="Perguntas frequentes sobre Planaltina">
                <div>
                  <h2>Vale a pena morar em Planaltina?</h2>
                  <p>
                    Sim. Planaltina oferece tradição, excelente custo-benefício,
                    comércio consolidado, infraestrutura em crescimento, forte
                    identidade cultural e qualidade de vida.
                  </p>
                </div>
                <div>
                  <h2>Vale a pena investir em Planaltina?</h2>
                  <p>
                    Sim. A combinação entre expansão urbana, novos
                    empreendimentos, valorização gradual, localização
                    estratégica e demanda por imóveis fortalece as perspectivas
                    do mercado imobiliário.
                  </p>
                </div>
              </section>

              <section className="region-cta">
                <h2>Como a Top Imobiliária pode ajudar</h2>
                <p>
                  Há mais de 30 anos, a Top Imobiliária acompanha a evolução do
                  mercado imobiliário do Distrito Federal, oferecendo atendimento
                  especializado para compra, venda, locação, administração e
                  avaliação de imóveis.
                </p>
                <p>
                  Nossa equipe ajuda proprietários, compradores e investidores a
                  tomar decisões com segurança, transparência e conhecimento do
                  mercado.
                </p>
                <div className="region-cta-actions">
                  <Link href="/imoveis?regiao=Planaltina">Imóveis em Planaltina</Link>
                  <Link href="/#simulador">Avaliação de imóveis</Link>
                  <Link href="/#administracao">Administração imobiliária</Link>
                  <Link href="/regioes/sobradinho">Sobradinho</Link>
                  <Link href="/regioes/vicente-pires">Vicente Pires</Link>
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
