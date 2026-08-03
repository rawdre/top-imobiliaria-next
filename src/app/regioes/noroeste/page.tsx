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
  Trees,
  TrendingUp,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import SiteAssistant from "@/components/SiteAssistant";

export const metadata: Metadata = {
  title: "Noroeste DF: sustentabilidade e mercado imobiliário | Top Imobiliária",
  description:
    "Guia completo do Noroeste em Brasília: sustentabilidade, urbanismo, Parque Burle Marx, qualidade de vida e mercado imobiliário de alto padrão.",
  alternates: {
    canonical: "/regioes/noroeste",
  },
  keywords:
    "Noroeste DF, imóveis no Noroeste, morar no Noroeste, investir no Noroeste, mercado imobiliário Noroeste, apartamentos Noroeste",
};

const highlights = [
  {
    title: "Urbanismo sustentável",
    text: "Bairro planejado com foco em áreas verdes, acessibilidade, mobilidade, eficiência urbana e bem-estar.",
    icon: Trees,
  },
  {
    title: "Localização central",
    text: "Próximo ao Eixo Monumental, Asa Norte, Sudoeste, Parque Burle Marx, Setor Hospitalar Norte e áreas centrais.",
    icon: MapPinned,
  },
  {
    title: "Alto padrão e valorização",
    text: "Empreendimentos modernos, oferta limitada e forte demanda por imóveis residenciais de alto padrão.",
    icon: TrendingUp,
  },
];

const sections = [
  {
    title: "História do Noroeste",
    icon: Landmark,
    body: [
      "O Setor Noroeste foi concebido como a última grande expansão residencial do Plano Piloto.",
      "Seu desenvolvimento teve como objetivo atender à crescente demanda por moradias em uma área planejada, respeitando os princípios urbanísticos de Brasília e incorporando conceitos modernos de sustentabilidade.",
      "Desde o início de sua implantação, o bairro foi projetado para privilegiar acessibilidade, preservação ambiental, eficiência urbana e integração com áreas verdes.",
      "Rapidamente, consolidou-se como uma das regiões mais valorizadas do Distrito Federal.",
    ],
  },
  {
    title: "Localização estratégica",
    icon: MapPinned,
    body: [
      "O Noroeste possui uma localização privilegiada dentro de Brasília.",
      "A região oferece acesso rápido ao Eixo Monumental, Esplanada dos Ministérios, Asa Norte, Sudoeste, Parque Burle Marx, Parque Nacional de Brasília, Setor Hospitalar Norte e Aeroporto Internacional de Brasília por meio das principais vias de ligação.",
      "Essa posição estratégica proporciona praticidade para quem trabalha ou estuda nas áreas centrais da capital.",
    ],
  },
  {
    title: "População e perfil dos moradores",
    icon: Home,
    body: [
      "O bairro atrai um público que valoriza conforto, segurança e qualidade de vida.",
      "Entre seus moradores estão servidores públicos, empresários, profissionais liberais, diplomatas, famílias e investidores.",
      "O perfil predominante é de moradores que buscam imóveis modernos, bem localizados e com infraestrutura diferenciada.",
    ],
  },
  {
    title: "Educação",
    icon: GraduationCap,
    body: [
      "Embora seja um bairro recente, o Noroeste conta com instituições de ensino e está próximo de algumas das principais escolas e universidades de Brasília.",
      "A região oferece fácil acesso à educação infantil, ensino fundamental, ensino médio, cursos de idiomas e instituições de ensino superior nas regiões vizinhas.",
    ],
  },
  {
    title: "Saúde",
    icon: HeartPulse,
    body: [
      "Os moradores contam com acesso rápido a hospitais, clínicas especializadas, laboratórios e centros médicos localizados principalmente na Asa Norte, Sudoeste e Setor Hospitalar Norte.",
      "Essa proximidade garante atendimento em diversas especialidades com rapidez e comodidade.",
    ],
  },
  {
    title: "Comércio e serviços",
    icon: BookOpen,
    body: [
      "O comércio do Noroeste cresce continuamente para acompanhar o desenvolvimento da região.",
      "Hoje o bairro oferece supermercados, farmácias, restaurantes, cafeterias, academias, padarias, clínicas, pet shops, salões de beleza, lojas especializadas e diversos serviços voltados ao dia a dia dos moradores.",
      "A tendência é de expansão constante, acompanhando o aumento da população.",
    ],
  },
  {
    title: "Sustentabilidade e urbanismo",
    icon: Trees,
    body: [
      "Um dos grandes diferenciais do Noroeste é seu conceito urbanístico.",
      "O bairro foi planejado para incentivar práticas sustentáveis, com valorização de áreas verdes, calçadas amplas, acessibilidade, iluminação pública eficiente e integração entre espaços residenciais e comerciais.",
      "Esses princípios contribuem para uma cidade mais agradável, funcional e voltada ao bem-estar dos moradores.",
    ],
  },
  {
    title: "Lazer e qualidade de vida",
    icon: Sparkles,
    body: [
      "O Noroeste oferece excelente qualidade de vida.",
      "Entre seus principais atrativos estão proximidade com o Parque Burle Marx, ciclovias, pistas para caminhada, praças, áreas arborizadas, espaços para convivência e ambiente predominantemente residencial.",
      "Essas características fazem do bairro uma excelente opção para famílias e pessoas que valorizam tranquilidade sem abrir mão da proximidade com o centro da cidade.",
    ],
  },
  {
    title: "Mercado imobiliário",
    icon: Building2,
    body: [
      "O mercado imobiliário do Noroeste é um dos mais valorizados do Distrito Federal.",
      "A região concentra apartamentos de alto padrão, coberturas, unidades com tecnologia embarcada, empreendimentos sustentáveis, salas comerciais e imóveis voltados ao público de maior poder aquisitivo.",
      "A combinação entre localização privilegiada, planejamento urbano e oferta limitada de novos terrenos contribui para a valorização contínua dos imóveis.",
    ],
  },
  {
    title: "O futuro da região",
    icon: TrendingUp,
    body: [
      "O Noroeste continua em processo de consolidação.",
      "Novos empreendimentos residenciais e comerciais são entregues regularmente, ampliando a infraestrutura e fortalecendo a oferta de serviços.",
      "Com o amadurecimento do bairro, a tendência é de valorização consistente, impulsionada pela elevada procura e pela limitação de áreas disponíveis para expansão.",
    ],
  },
];

export default function NoroestePage() {
  return (
    <>
      <Header />
      <main className="region-page">
        <section className="region-hero">
          <div className="region-inner">
            <div className="region-kicker">Regiões do Distrito Federal</div>
            <h1>Noroeste: sustentabilidade, qualidade de vida e mercado imobiliário em Brasília</h1>
            <p>
              Guia completo sobre o bairro mais novo do Plano Piloto, com
              urbanismo moderno, alto padrão, áreas verdes, infraestrutura em
              expansão e forte potencial de valorização.
            </p>
            <div className="region-hero-actions">
              <Link href="/imoveis?regiao=Noroeste">Ver imóveis no Noroeste</Link>
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
                <h2>Conheça o Noroeste</h2>
                <p>
                  O Noroeste é o bairro mais novo do Plano Piloto e um dos
                  projetos urbanísticos mais modernos do Distrito Federal.
                  Planejado para unir sustentabilidade, conforto, mobilidade e
                  qualidade de vida, tornou-se referência em empreendimentos
                  residenciais de alto padrão.
                </p>
                <p>
                  Com localização privilegiada, próxima ao Eixo Monumental, ao
                  Parque Burle Marx e aos principais centros administrativos de
                  Brasília, o bairro oferece infraestrutura moderna, áreas
                  verdes, comércio em expansão e um mercado imobiliário
                  altamente valorizado.
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

              <section className="region-decision-grid" aria-label="Perguntas frequentes sobre o Noroeste">
                <div>
                  <h2>Vale a pena morar no Noroeste?</h2>
                  <p>
                    Sim. O bairro oferece localização privilegiada, urbanismo
                    moderno, infraestrutura de alto padrão, sustentabilidade,
                    qualidade de vida, segurança e proximidade com o centro de
                    Brasília.
                  </p>
                </div>
                <div>
                  <h2>Vale a pena investir no Noroeste?</h2>
                  <p>
                    Sim. O Noroeste reúne valorização histórica, alta demanda,
                    empreendimentos modernos, oferta limitada e excelente
                    liquidez para imóveis de qualidade.
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
                  Nossa equipe auxilia proprietários, compradores e investidores
                  com segurança, transparência e profundo conhecimento do
                  mercado.
                </p>
                <div className="region-cta-actions">
                  <Link href="/imoveis?regiao=Noroeste">Imóveis no Noroeste</Link>
                  <Link href="/#simulador">Avaliação de imóveis</Link>
                  <Link href="/#administracao">Administração imobiliária</Link>
                  <Link href="/regioes/sudoeste">Sudoeste</Link>
                  <Link href="/regioes/asa-norte">Asa Norte</Link>
                  <Link href="/regioes/jardim-botanico">Jardim Botânico</Link>
                  <Link href="/regioes/park-way">Park Way</Link>
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
