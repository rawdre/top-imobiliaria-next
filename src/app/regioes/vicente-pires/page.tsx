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
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import SiteAssistant from "@/components/SiteAssistant";

export const metadata: Metadata = {
  title: "Vicente Pires DF: desenvolvimento e mercado imobiliário | Top Imobiliária",
  description:
    "Guia completo de Vicente Pires no DF: história, localização, infraestrutura, qualidade de vida, desenvolvimento urbano e mercado imobiliário.",
  alternates: {
    canonical: "/regioes/vicente-pires",
  },
  keywords:
    "Vicente Pires DF, imóveis em Vicente Pires, morar em Vicente Pires, investir em Vicente Pires, mercado imobiliário Vicente Pires, casas Vicente Pires",
};

const highlights = [
  {
    title: "Expansão residencial",
    text: "Uma das regiões que mais cresceram no DF, com condomínios, casas amplas, comércio e infraestrutura em evolução.",
    icon: TrendingUp,
  },
  {
    title: "Localização estratégica",
    text: "Próxima ao Plano Piloto, Águas Claras, Taguatinga, Guará, Ceilândia, EPTG e Via Estrutural.",
    icon: MapPinned,
  },
  {
    title: "Qualidade de vida",
    text: "Ambiente residencial, condomínios, imóveis amplos, comércio próximo, mobilidade e perfil familiar.",
    icon: ShieldCheck,
  },
];

const sections = [
  {
    title: "História de Vicente Pires",
    icon: Landmark,
    body: [
      "A região teve origem em antigas chácaras voltadas à produção rural, que ao longo dos anos passaram por um intenso processo de ocupação urbana.",
      "Com o crescimento de Brasília e a busca por novas áreas residenciais, Vicente Pires tornou-se um dos principais polos de expansão do Distrito Federal.",
      "Posteriormente, sua organização administrativa e os investimentos públicos contribuíram para a consolidação da região como uma importante cidade do DF.",
      "Hoje, Vicente Pires vive uma nova etapa de desenvolvimento, marcada pela modernização da infraestrutura e pela valorização imobiliária.",
    ],
  },
  {
    title: "Localização estratégica",
    icon: MapPinned,
    body: [
      "Vicente Pires está situada em uma posição privilegiada do Distrito Federal.",
      "A região possui acesso facilitado para Plano Piloto, Águas Claras, Taguatinga, Guará, Ceilândia, EPTG e Via Estrutural.",
      "Essa excelente conectividade reduz o tempo de deslocamento e aumenta sua atratividade para moradores e investidores.",
    ],
  },
  {
    title: "População e perfil dos moradores",
    icon: Home,
    body: [
      "A cidade reúne um perfil bastante diversificado, formado por famílias, servidores públicos, empresários, profissionais liberais, investidores e pessoas que buscam imóveis amplos e qualidade de vida.",
      "A região continua atraindo novos moradores devido ao crescimento da infraestrutura e às boas opções residenciais.",
    ],
  },
  {
    title: "Educação",
    icon: GraduationCap,
    body: [
      "Vicente Pires conta com ampla oferta de instituições de ensino.",
      "Os moradores encontram escolas públicas, escolas particulares, educação infantil, ensino fundamental, ensino médio e cursos profissionalizantes.",
      "Sua localização também facilita o acesso às universidades e centros educacionais de Brasília.",
    ],
  },
  {
    title: "Saúde",
    icon: HeartPulse,
    body: [
      "A população dispõe de clínicas, laboratórios, consultórios médicos e hospitais nas regiões vizinhas.",
      "A proximidade com Taguatinga, Águas Claras e Plano Piloto amplia significativamente as opções de atendimento em diversas especialidades.",
    ],
  },
  {
    title: "Comércio e serviços",
    icon: BookOpen,
    body: [
      "O comércio de Vicente Pires cresceu de forma expressiva.",
      "Hoje a região oferece supermercados, farmácias, academias, restaurantes, padarias, bancos, clínicas, pet shops, centros comerciais e diversos serviços especializados.",
      "Esse desenvolvimento permite que os moradores resolvam grande parte das necessidades do dia a dia dentro da própria região.",
    ],
  },
  {
    title: "Qualidade de vida",
    icon: ShieldCheck,
    body: [
      "Um dos grandes diferenciais de Vicente Pires é a combinação entre infraestrutura urbana e ambiente residencial.",
      "A região oferece ruas amplas, condomínios, áreas verdes, comércio próximo, mobilidade e ambiente familiar.",
      "Essas características tornam a cidade cada vez mais procurada por quem deseja morar com conforto e praticidade.",
    ],
  },
  {
    title: "Mercado imobiliário",
    icon: Building2,
    body: [
      "Vicente Pires tornou-se um dos mercados imobiliários mais dinâmicos do Distrito Federal.",
      "A região reúne casas de alto padrão, condomínios horizontais, sobrados, apartamentos, imóveis comerciais e terrenos.",
      "A procura permanece elevada devido à excelente localização, à infraestrutura crescente e ao potencial de valorização.",
    ],
  },
  {
    title: "O futuro da região",
    icon: TrendingUp,
    body: [
      "Nos últimos anos, Vicente Pires recebeu importantes obras de infraestrutura, incluindo pavimentação, drenagem, melhorias na mobilidade e ampliação da rede de serviços.",
      "Esses investimentos fortaleceram a valorização imobiliária e contribuíram para consolidar a região como uma das mais promissoras do Distrito Federal.",
      "O crescimento continua acontecendo de forma planejada, acompanhando a demanda por novas moradias e espaços comerciais.",
    ],
  },
];

export default function VicentePiresPage() {
  return (
    <>
      <Header />
      <main className="region-page">
        <section className="region-hero">
          <div className="region-inner">
            <div className="region-kicker">Regiões do Distrito Federal</div>
            <h1>
              Vicente Pires: desenvolvimento, qualidade de vida e mercado
              imobiliário no DF
            </h1>
            <p>
              Uma das regiões que mais cresceram no Distrito Federal, com
              localização estratégica, condomínios, imóveis amplos, comércio em
              expansão e forte potencial de valorização.
            </p>
            <div className="region-hero-actions">
              <Link href="/imoveis?regiao=Vicente%20Pires">Ver imóveis em Vicente Pires</Link>
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
                <h2>Conheça Vicente Pires</h2>
                <p>
                  Vicente Pires é uma das regiões administrativas que mais
                  cresceram no Distrito Federal nas últimas décadas. Sua
                  localização privilegiada, próxima ao Plano Piloto, Taguatinga,
                  Águas Claras e Guará, transformou a região em um dos destinos
                  mais procurados para morar e investir.
                </p>
                <p>
                  Hoje, Vicente Pires reúne condomínios residenciais, casas de
                  alto padrão, comércio diversificado, escolas, serviços e uma
                  população em constante crescimento.
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

              <section className="region-decision-grid" aria-label="Perguntas frequentes sobre Vicente Pires">
                <div>
                  <h2>Vale a pena morar em Vicente Pires?</h2>
                  <p>
                    Sim. Vicente Pires oferece excelente localização,
                    infraestrutura em expansão, comércio diversificado,
                    qualidade de vida e fácil acesso às principais regiões do
                    Distrito Federal.
                  </p>
                </div>
                <div>
                  <h2>Vale a pena investir em Vicente Pires?</h2>
                  <p>
                    Sim. Crescimento urbano, novos empreendimentos, valorização
                    imobiliária, localização estratégica e forte demanda por
                    imóveis tornam a região uma alternativa interessante para
                    investidores.
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
                  com segurança, transparência e conhecimento do mercado.
                </p>
                <div className="region-cta-actions">
                  <Link href="/imoveis?regiao=Vicente%20Pires">Imóveis em Vicente Pires</Link>
                  <Link href="/#simulador">Avaliação de imóveis</Link>
                  <Link href="/#administracao">Administração imobiliária</Link>
                  <Link href="/regioes/guara">Guará</Link>
                  <Link href="/regioes/taguatinga">Taguatinga</Link>
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
