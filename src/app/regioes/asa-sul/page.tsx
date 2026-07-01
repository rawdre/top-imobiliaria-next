import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  GraduationCap,
  Home,
  Landmark,
  MapPinned,
  ShieldCheck,
  Train,
  TrendingUp,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import SiteAssistant from "@/components/SiteAssistant";

export const metadata: Metadata = {
  title: "Asa Sul: qualidade de vida e mercado imobiliário | Top Imobiliária",
  description:
    "Conheça a Asa Sul em Brasília: história, mobilidade, comércio, educação, qualidade de vida e mercado imobiliário para morar ou investir.",
  alternates: {
    canonical: "/regioes/asa-sul",
  },
  keywords:
    "Asa Sul Brasília, imóveis na Asa Sul, morar na Asa Sul, investir na Asa Sul, mercado imobiliário Asa Sul, apartamentos Asa Sul, locação Asa Sul",
};

const highlights = [
  {
    title: "Localização central",
    text: "No coração do Plano Piloto, com acesso rápido ao Setor Comercial Sul, Setor Bancário Sul, Aeroporto, Lago Sul e Parque da Cidade.",
    icon: MapPinned,
  },
  {
    title: "Mobilidade completa",
    text: "Estações de metrô, transporte público, vias estruturadas e deslocamento facilitado para diversas regiões do Distrito Federal.",
    icon: Train,
  },
  {
    title: "Valorização histórica",
    text: "Região tradicional, consolidada e com forte liquidez para compra, venda, locação e investimento imobiliário.",
    icon: TrendingUp,
  },
];

const sections = [
  {
    title: "História da Asa Sul",
    icon: Landmark,
    body: [
      "A Asa Sul nasceu junto com Brasília, inaugurada em 21 de abril de 1960. Projetada dentro do Plano Piloto concebido por Lucio Costa, a região foi planejada para proporcionar equilíbrio entre moradia, áreas verdes, serviços e mobilidade.",
      "As superquadras tornaram-se referência mundial de urbanismo, oferecendo espaços amplos, arborização e integração entre os moradores.",
      "Ao longo das décadas, a Asa Sul consolidou-se como uma das áreas mais tradicionais e valorizadas da capital federal.",
    ],
  },
  {
    title: "Localização e mobilidade",
    icon: MapPinned,
    body: [
      "A Asa Sul possui localização estratégica dentro do Plano Piloto.",
      "A região oferece acesso facilitado para Esplanada dos Ministérios, Setor Bancário Sul, Setor Comercial Sul, Aeroporto Internacional de Brasília, Sudoeste, Lago Sul, Eixo Monumental e Parque da Cidade.",
      "Além disso, conta com estações de metrô, ampla oferta de transporte público e fácil deslocamento para diversas regiões administrativas do Distrito Federal.",
    ],
  },
  {
    title: "Educação e conhecimento",
    icon: GraduationCap,
    body: [
      "A Asa Sul concentra algumas das mais tradicionais instituições de ensino de Brasília.",
      "A região conta com escolas públicas e particulares de referência, cursos preparatórios, centros educacionais, instituições de ensino superior e proximidade com universidades importantes.",
      "Essa infraestrutura educacional atrai famílias, estudantes e profissionais de diversas áreas.",
    ],
  },
  {
    title: "Comércio e serviços",
    icon: BookOpen,
    body: [
      "A Asa Sul possui uma das redes de comércio e serviços mais completas do Distrito Federal.",
      "Os moradores encontram supermercados, farmácias, bancos, clínicas, hospitais, academias, restaurantes, cafeterias, padarias e centros empresariais.",
      "A região também se destaca pela diversidade gastronômica e pela praticidade oferecida aos moradores.",
    ],
  },
  {
    title: "Qualidade de vida",
    icon: ShieldCheck,
    body: [
      "A qualidade de vida é um dos principais diferenciais da Asa Sul.",
      "Entre os fatores mais valorizados estão arborização das superquadras, proximidade ao Parque da Cidade, facilidade de deslocamento, ampla oferta de serviços, ambiente familiar e tradição urbanística.",
      "Essas características tornam a região uma das preferidas para quem busca conforto e praticidade.",
    ],
  },
  {
    title: "Mercado imobiliário na Asa Sul",
    icon: Home,
    body: [
      "O mercado imobiliário da Asa Sul é reconhecido pela estabilidade e pela valorização histórica.",
      "A região oferece apartamentos tradicionais, imóveis reformados, coberturas, salas comerciais e imóveis de alto padrão.",
      "A procura é impulsionada pela localização privilegiada, infraestrutura consolidada e qualidade de vida.",
    ],
  },
];

export default function AsaSulPage() {
  return (
    <>
      <Header />
      <main className="region-page">
        <section className="region-hero">
          <div className="region-inner">
            <div className="region-kicker">Regiões do Distrito Federal</div>
            <h1>
              Asa Sul: história, qualidade de vida e mercado imobiliário em uma
              das regiões mais tradicionais de Brasília
            </h1>
            <p>
              Localizada no coração do Plano Piloto, a Asa Sul reúne história,
              planejamento urbano, infraestrutura completa, comércio
              diversificado, mobilidade e uma das melhores experiências de
              moradia da capital.
            </p>
            <div className="region-hero-actions">
              <Link href="/imoveis?regiao=Asa%20Sul">Ver imóveis na região</Link>
              <Link href="/#contato">Falar com a Top</Link>
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
                <h2>Conheça a Asa Sul</h2>
                <p>
                  A Asa Sul é uma das regiões mais emblemáticas e valorizadas de
                  Brasília. Localizada no coração do Plano Piloto, ela reúne
                  história, planejamento urbano, infraestrutura completa e uma
                  excelente qualidade de vida.
                </p>
                <p>
                  Com suas tradicionais superquadras arborizadas, ampla oferta
                  de serviços, comércio diversificado e localização
                  privilegiada, a Asa Sul continua sendo uma das regiões mais
                  desejadas para morar e investir no Distrito Federal.
                </p>
                <p>
                  Além de sua importância histórica para a construção da capital
                  federal, a região oferece um mercado imobiliário sólido e uma
                  das melhores infraestruturas urbanas de Brasília.
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

              <section className="region-section">
                <div className="region-section-title">
                  <TrendingUp size={22} />
                  <h2>O futuro da região</h2>
                </div>
                <p>
                  A Asa Sul deve continuar entre as regiões mais procuradas de
                  Brasília pela combinação entre tradição urbanística, mobilidade,
                  metrô, serviços consolidados e proximidade com áreas centrais.
                </p>
                <p>
                  A modernização de imóveis, melhorias em comércio local, novos
                  centros de serviços e a valorização de unidades bem reformadas
                  tendem a fortalecer a liquidez da região.
                </p>
                <p>
                  Para investidores, a baixa disponibilidade de áreas novas e a
                  demanda constante por moradia no Plano Piloto reforçam a
                  perspectiva de preservação patrimonial.
                </p>
              </section>

              <section className="region-decision-grid" aria-label="Perguntas frequentes sobre a Asa Sul">
                <div>
                  <h2>Vale a pena morar na Asa Sul?</h2>
                  <p>
                    Para quem busca viver em uma região tradicional, bem
                    localizada e com excelente infraestrutura, a Asa Sul continua
                    sendo uma das melhores opções de Brasília. A combinação de
                    mobilidade, serviços, áreas verdes e tradição faz da região
                    um dos locais mais desejados da capital.
                  </p>
                </div>
                <div>
                  <h2>Vale a pena investir na Asa Sul?</h2>
                  <p>
                    A Asa Sul permanece entre as regiões mais procuradas por
                    compradores e investidores. Os principais fatores incluem
                    valorização histórica, demanda consistente, localização
                    estratégica, infraestrutura consolidada e liquidez
                    imobiliária.
                  </p>
                </div>
              </section>

              <section className="region-cta">
                <h2>Como a Top Imobiliária pode ajudar</h2>
                <p>
                  A Top Imobiliária acompanha o mercado imobiliário do Distrito
                  Federal há mais de três décadas. Nossa equipe auxilia
                  compradores, vendedores, investidores, locadores e locatários
                  em todas as etapas do processo imobiliário.
                </p>
                <p>
                  Se você deseja comprar, vender, alugar ou investir na Asa Sul,
                  conte com uma equipe preparada para oferecer orientação segura
                  e atendimento personalizado.
                </p>
                <div className="region-cta-actions">
                  <Link href="/#simulador">Avaliar meu imóvel</Link>
                  <Link href="/#administracao">Administração imobiliária</Link>
                  <Link href="/regioes/asa-norte">Asa Norte</Link>
                  <Link href="/regioes/lago-sul">Lago Sul</Link>
                  <Link href="/#contato">Falar com especialista</Link>
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
