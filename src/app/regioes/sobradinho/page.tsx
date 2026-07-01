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
  Sparkles,
  TrendingUp,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import SiteAssistant from "@/components/SiteAssistant";

export const metadata: Metadata = {
  title: "Sobradinho DF: qualidade de vida e mercado imobiliário | Top Imobiliária",
  description:
    "Guia completo de Sobradinho no DF: história, localização, comércio, saúde, educação, desenvolvimento urbano e mercado imobiliário.",
  alternates: {
    canonical: "/regioes/sobradinho",
  },
  keywords:
    "Sobradinho DF, imóveis em Sobradinho, morar em Sobradinho, investir em Sobradinho, mercado imobiliário Sobradinho, casas Sobradinho DF",
};

const highlights = [
  {
    title: "Tradição e comunidade",
    text: "Uma das regiões administrativas mais tradicionais do DF, com forte identidade local e infraestrutura consolidada.",
    icon: Landmark,
  },
  {
    title: "Custo-benefício e expansão",
    text: "Região em nova fase de desenvolvimento, com empreendimentos residenciais e crescimento próximo à BR-020.",
    icon: TrendingUp,
  },
  {
    title: "Infraestrutura completa",
    text: "Comércio tradicional, escolas, hospitais, serviços e boa mobilidade para o Plano Piloto e regiões vizinhas.",
    icon: Building2,
  },
];

const sections = [
  {
    title: "História de Sobradinho",
    icon: Landmark,
    body: [
      "Sobradinho foi fundada em 13 de maio de 1960, poucos dias após a inauguração de Brasília, com a missão de receber trabalhadores que participaram da construção da nova capital.",
      "Seu nome tem origem na antiga Fazenda Sobradinho e no Ribeirão Sobradinho, que já faziam parte da história da região antes mesmo da criação do Distrito Federal.",
      "Ao longo das décadas, a cidade consolidou sua identidade própria e tornou-se uma das regiões administrativas mais importantes do DF, contribuindo para o desenvolvimento da porção norte da capital.",
    ],
  },
  {
    title: "Localização estratégica",
    icon: MapPinned,
    body: [
      "Sobradinho possui localização privilegiada, com acesso facilitado pela BR-020 e DF-150.",
      "Sua posição permite deslocamento relativamente rápido para Plano Piloto, Lago Norte, Planaltina, Sobradinho II, Fercal, Universidade de Brasília, Setor Hospitalar Norte e Aeroporto Internacional de Brasília.",
      "Essa integração favorece tanto quem trabalha no centro da capital quanto quem busca tranquilidade para morar.",
    ],
  },
  {
    title: "População e perfil dos moradores",
    icon: Home,
    body: [
      "Sobradinho reúne uma população diversificada, formada por famílias tradicionais, servidores públicos, profissionais liberais, empresários e novos moradores que escolhem a cidade pela infraestrutura consolidada e pelo ambiente acolhedor.",
      "A cidade preserva um forte espírito comunitário e oferece excelente equilíbrio entre vida urbana e qualidade de vida.",
    ],
  },
  {
    title: "Educação",
    icon: GraduationCap,
    body: [
      "Sobradinho dispõe de ampla rede de ensino, com escolas públicas, escolas particulares, educação infantil, ensino fundamental, ensino médio, cursos técnicos, cursos profissionalizantes e fácil acesso às universidades de Brasília.",
      "Essa estrutura atende moradores de todas as faixas etárias.",
    ],
  },
  {
    title: "Saúde",
    icon: HeartPulse,
    body: [
      "Os moradores contam com uma rede de atendimento composta por Hospital Regional de Sobradinho, unidades básicas de saúde, clínicas médicas, laboratórios, consultórios especializados e serviços de diagnóstico.",
      "Além disso, o acesso rápido ao Plano Piloto amplia ainda mais as opções de atendimento especializado.",
    ],
  },
  {
    title: "Comércio e serviços",
    icon: BookOpen,
    body: [
      "Sobradinho possui um dos comércios mais tradicionais do Distrito Federal.",
      "Os moradores encontram supermercados, farmácias, bancos, restaurantes, padarias, academias, lojas, clínicas, centros comerciais e prestadores de serviços.",
      "Grande parte das necessidades do dia a dia pode ser resolvida dentro da própria cidade.",
    ],
  },
  {
    title: "Qualidade de vida",
    icon: ShieldCheck,
    body: [
      "Um dos principais diferenciais de Sobradinho é a qualidade de vida.",
      "A cidade oferece ruas arborizadas, bairros consolidados, clima agradável, áreas verdes, ambiente familiar, boa mobilidade e excelente infraestrutura urbana.",
      "Sua proximidade com áreas de preservação ambiental proporciona paisagens naturais e contato constante com a natureza.",
    ],
  },
  {
    title: "Esporte, cultura e lazer",
    icon: Sparkles,
    body: [
      "Sobradinho possui intensa vida comunitária, com praças, parques, centros esportivos, áreas de caminhada, eventos culturais e atividades comunitárias.",
      "Esses espaços fortalecem a convivência entre os moradores e contribuem para uma excelente qualidade de vida.",
    ],
  },
  {
    title: "Mercado imobiliário em Sobradinho",
    icon: Building2,
    body: [
      "O mercado imobiliário de Sobradinho é diversificado e atende diferentes perfis de compradores e investidores.",
      "A região oferece casas, sobrados, apartamentos, condomínios, imóveis comerciais e terrenos.",
      "Nos últimos anos, a cidade passou a receber novos empreendimentos residenciais, ampliando significativamente as opções para quem deseja morar ou investir.",
    ],
  },
  {
    title: "O futuro da região",
    icon: TrendingUp,
    body: [
      "Sobradinho vive um importante momento de expansão urbana e valorização, especialmente nas áreas próximas à BR-020.",
      "Novos empreendimentos residenciais, condomínios e projetos urbanísticos modernos ampliam a oferta de imóveis e fortalecem a atratividade da cidade.",
      "Investimentos públicos e privados, melhorias de infraestrutura, mobilidade e serviços acompanham esse crescimento, mostrando que Sobradinho preserva sua tradição sem deixar de olhar para o futuro.",
      "As tendências do mercado imobiliário indicam demanda crescente por imóveis com bom custo-benefício, localização estratégica e potencial de valorização de médio e longo prazo.",
    ],
  },
];

export default function SobradinhoPage() {
  return (
    <>
      <Header />
      <main className="region-page">
        <section className="region-hero">
          <div className="region-inner">
            <div className="region-kicker">Regiões do Distrito Federal</div>
            <h1>
              Sobradinho: história, qualidade de vida, desenvolvimento e mercado
              imobiliário no DF
            </h1>
            <p>
              Conheça uma das regiões mais tradicionais de Brasília, com
              infraestrutura consolidada, forte identidade comunitária, boa
              mobilidade e uma nova fase de expansão imobiliária.
            </p>
            <div className="region-hero-actions">
              <Link href="/imoveis?regiao=Sobradinho">Ver imóveis em Sobradinho</Link>
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
                <h2>Conheça Sobradinho</h2>
                <p>
                  Sobradinho é uma das regiões administrativas mais tradicionais
                  e queridas do Distrito Federal. Localizada ao norte de
                  Brasília, a cidade combina história, infraestrutura
                  consolidada, forte identidade comunitária e um mercado
                  imobiliário em constante evolução.
                </p>
                <p>
                  Fundada ainda nos primeiros anos da construção da capital,
                  Sobradinho cresceu de forma planejada e tornou-se uma
                  referência para famílias que buscam qualidade de vida,
                  comércio diversificado, boa mobilidade e excelente
                  custo-benefício.
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

              <section className="region-decision-grid" aria-label="Perguntas frequentes sobre Sobradinho">
                <div>
                  <h2>Vale a pena morar em Sobradinho?</h2>
                  <p>
                    Sim. Sobradinho reúne infraestrutura consolidada, comércio
                    completo, escolas, hospitais, áreas verdes, mobilidade,
                    ambiente familiar e excelente custo-benefício.
                  </p>
                </div>
                <div>
                  <h2>Vale a pena investir em Sobradinho?</h2>
                  <p>
                    Sim. Novos empreendimentos, crescimento urbano, demanda
                    constante por imóveis, localização estratégica e tradição da
                    cidade fortalecem o potencial de valorização.
                  </p>
                </div>
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
                  Se você deseja conhecer melhor Sobradinho ou encontrar
                  oportunidades na região, conte com a experiência da Top
                  Imobiliária.
                </p>
                <div className="region-cta-actions">
                  <Link href="/imoveis?regiao=Sobradinho">Imóveis em Sobradinho</Link>
                  <Link href="/#simulador">Avaliação de imóveis</Link>
                  <Link href="/#administracao">Administração imobiliária</Link>
                  <Link href="/regioes/lago-norte">Lago Norte</Link>
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
