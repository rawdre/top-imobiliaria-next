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
  Train,
  TrendingUp,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import SiteAssistant from "@/components/SiteAssistant";

export const metadata: Metadata = {
  title: "Taguatinga DF: desenvolvimento e mercado imobiliário | Top Imobiliária",
  description:
    "Guia completo de Taguatinga no DF: história, desenvolvimento, comércio, mobilidade, educação, saúde, qualidade de vida e mercado imobiliário.",
  alternates: {
    canonical: "/regioes/taguatinga",
  },
  keywords:
    "Taguatinga DF, imóveis em Taguatinga, morar em Taguatinga, investir em Taguatinga, mercado imobiliário Taguatinga, apartamentos Taguatinga",
};

const highlights = [
  {
    title: "Polo econômico do DF",
    text: "Um dos maiores centros comerciais, educacionais, empresariais e imobiliários do Distrito Federal.",
    icon: Building2,
  },
  {
    title: "Mobilidade estratégica",
    text: "Conexão por EPTG, BR-070, Via Estrutural, Pistão Norte, Pistão Sul e integração com o Metrô.",
    icon: Train,
  },
  {
    title: "Mercado dinâmico",
    text: "Grande liquidez, alta demanda, diversidade de imóveis e crescimento urbano constante.",
    icon: TrendingUp,
  },
];

const sections = [
  {
    title: "História de Taguatinga",
    icon: Landmark,
    body: [
      "Taguatinga foi fundada em 5 de junho de 1958, antes mesmo da inauguração oficial da capital, como parte do planejamento urbano para receber trabalhadores envolvidos na construção de Brasília.",
      "Foi a primeira cidade criada oficialmente para apoiar a construção da nova capital.",
      "Seu nome tem origem indígena e está relacionado à planta taguatinga, bastante comum na região antes da urbanização.",
      "Desde sua fundação, a cidade apresentou crescimento acelerado, transformando-se em um dos principais centros urbanos do Distrito Federal.",
    ],
  },
  {
    title: "Localização estratégica",
    icon: MapPinned,
    body: [
      "Taguatinga possui localização privilegiada e conexão com importantes vias como EPTG, BR-070, Via Estrutural, Pistão Norte e Pistão Sul.",
      "Também possui integração com o Metrô do Distrito Federal, facilitando o acesso ao Plano Piloto, Águas Claras, Guará, Ceilândia e outras regiões.",
      "Essa mobilidade é um dos fatores que impulsionam seu desenvolvimento econômico e imobiliário.",
    ],
  },
  {
    title: "População e perfil dos moradores",
    icon: Home,
    body: [
      "Taguatinga está entre as regiões administrativas mais populosas do Distrito Federal.",
      "Sua população é bastante diversificada, formada por famílias tradicionais, empresários, servidores públicos, profissionais liberais, estudantes e empreendedores.",
      "A cidade reúne características residenciais e comerciais, funcionando como um verdadeiro centro urbano independente.",
    ],
  },
  {
    title: "Educação",
    icon: GraduationCap,
    body: [
      "Taguatinga destaca-se pela forte concentração de instituições de ensino.",
      "A cidade oferece escolas públicas, escolas particulares, centros universitários, faculdades, cursos técnicos e cursos profissionalizantes.",
      "Essa diversidade transforma a região em um importante polo educacional do Distrito Federal.",
    ],
  },
  {
    title: "Saúde",
    icon: HeartPulse,
    body: [
      "A infraestrutura de saúde é uma das mais completas da região.",
      "Os moradores contam com hospitais, clínicas especializadas, laboratórios, centros médicos e atendimento público e privado.",
      "Além disso, a cidade possui acesso facilitado aos principais hospitais do Distrito Federal.",
    ],
  },
  {
    title: "Comércio e serviços",
    icon: BookOpen,
    body: [
      "Taguatinga abriga um dos maiores polos comerciais de Brasília.",
      "A cidade reúne shopping centers, supermercados, bancos, restaurantes, farmácias, clínicas, hotéis, centros empresariais e lojas de todos os segmentos.",
      "Sua economia movimenta diariamente milhares de consumidores vindos de diversas regiões do Distrito Federal.",
    ],
  },
  {
    title: "Cultura, esporte e lazer",
    icon: Sparkles,
    body: [
      "Taguatinga possui intensa atividade cultural e oferece parques, praças, centros culturais, ginásios, teatros, eventos, espaços esportivos e áreas de convivência.",
      "Essa diversidade amplia significativamente a qualidade de vida dos moradores.",
    ],
  },
  {
    title: "Mercado imobiliário",
    icon: Building2,
    body: [
      "O mercado imobiliário de Taguatinga está entre os mais dinâmicos do Distrito Federal.",
      "A cidade oferece apartamentos, casas, sobrados, condomínios, imóveis comerciais, salas corporativas e terrenos.",
      "A procura permanece elevada tanto para moradia quanto para investimento, e a diversidade de imóveis permite atender diferentes perfis e faixas de renda.",
    ],
  },
  {
    title: "O futuro da região",
    icon: TrendingUp,
    body: [
      "Taguatinga continua passando por importantes transformações, com novos empreendimentos residenciais e comerciais, investimentos em mobilidade, revitalização urbana e infraestrutura.",
      "A verticalização da cidade, especialmente em algumas áreas, amplia a oferta de imóveis modernos e fortalece o potencial de valorização imobiliária.",
      "Por sua força econômica e localização estratégica, Taguatinga tende a seguir como uma das regiões mais ativas para moradia, negócios e investimento no Distrito Federal.",
    ],
  },
];

export default function TaguatingaPage() {
  return (
    <>
      <Header />
      <main className="region-page">
        <section className="region-hero">
          <div className="region-inner">
            <div className="region-kicker">Regiões do Distrito Federal</div>
            <h1>
              Taguatinga: história, desenvolvimento, qualidade de vida e mercado
              imobiliário no DF
            </h1>
            <p>
              Um dos maiores centros econômicos do Distrito Federal, com forte
              comércio, mobilidade, educação, saúde, diversidade de imóveis e
              oportunidades para morar, empreender e investir.
            </p>
            <div className="region-hero-actions">
              <Link href="/imoveis?regiao=Taguatinga">Ver imóveis em Taguatinga</Link>
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
                <h2>Conheça Taguatinga</h2>
                <p>
                  Taguatinga é uma das cidades mais importantes e influentes do
                  Distrito Federal. Muito mais do que uma região administrativa,
                  tornou-se ao longo das décadas um dos principais polos
                  econômicos, comerciais, educacionais e imobiliários de Brasília.
                </p>
                <p>
                  Sua localização estratégica, somada ao intenso desenvolvimento
                  urbano, faz de Taguatinga uma referência para milhares de
                  famílias, empresas e investidores.
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

              <section className="region-decision-grid" aria-label="Perguntas frequentes sobre Taguatinga">
                <div>
                  <h2>Vale a pena morar em Taguatinga?</h2>
                  <p>
                    Sim. A cidade oferece infraestrutura completa, forte
                    comércio, ampla oferta de serviços, mobilidade, educação,
                    saúde e oportunidades de trabalho.
                  </p>
                </div>
                <div>
                  <h2>Vale a pena investir em Taguatinga?</h2>
                  <p>
                    Sim. Taguatinga combina grande liquidez, alta demanda,
                    constante desenvolvimento urbano, diversidade de imóveis e
                    localização estratégica.
                  </p>
                </div>
              </section>

              <section className="region-cta">
                <h2>Como a Top Imobiliária pode ajudar</h2>
                <p>
                  Há mais de 30 anos, a Top Imobiliária acompanha a evolução do
                  mercado imobiliário do Distrito Federal. Nossa equipe oferece
                  atendimento especializado para compra, venda, locação,
                  administração e avaliação de imóveis, sempre com foco em
                  segurança, transparência e resultados.
                </p>
                <p>
                  Se você deseja comprar, vender, alugar ou investir em
                  Taguatinga, conte com a experiência da Top Imobiliária.
                </p>
                <div className="region-cta-actions">
                  <Link href="/imoveis?regiao=Taguatinga">Imóveis em Taguatinga</Link>
                  <Link href="/#simulador">Avaliação de imóveis</Link>
                  <Link href="/#administracao">Administração imobiliária</Link>
                  <Link href="/regioes/guara">Guará</Link>
                  <Link href="/regioes/sobradinho">Sobradinho</Link>
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
