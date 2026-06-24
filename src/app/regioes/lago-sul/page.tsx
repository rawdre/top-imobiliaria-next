import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Building2,
  GraduationCap,
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
  title: "Lago Sul: qualidade de vida e mercado imobiliário | Top Imobiliária",
  description:
    "Conheça o Lago Sul em Brasília: história, localização, comércio, escolas, lazer, qualidade de vida e mercado imobiliário de alto padrão.",
  alternates: {
    canonical: "/regioes/lago-sul",
  },
  keywords:
    "Lago Sul Brasília, imóveis no Lago Sul, casas no Lago Sul, morar no Lago Sul, investir no Lago Sul, mercado imobiliário Lago Sul, alto padrão Brasília",
};

const highlights = [
  {
    title: "Endereço de alto padrão",
    text: "Uma das regiões mais nobres de Brasília, com casas amplas, condomínios sofisticados, privacidade e forte prestígio imobiliário.",
    icon: Home,
  },
  {
    title: "Localização privilegiada",
    text: "Acesso rápido à Ponte JK, Esplanada, Aeroporto, Plano Piloto, Lago Norte, Jardim Botânico e Park Way.",
    icon: MapPinned,
  },
  {
    title: "Patrimônio valorizado",
    text: "Mercado marcado por escassez de áreas, demanda constante, imóveis diferenciados e histórico consistente de valorização.",
    icon: TrendingUp,
  },
];

const sections = [
  {
    title: "História do Lago Sul",
    icon: Landmark,
    body: [
      "O Lago Sul começou a se desenvolver após a inauguração de Brasília, acompanhando o crescimento planejado da capital federal.",
      "A região foi concebida para abrigar residências de maior porte, aproveitando a proximidade do Lago Paranoá e a beleza natural do local.",
      "Ao longo das décadas, tornou-se uma das áreas mais valorizadas do Distrito Federal, reunindo residências de alto padrão, embaixadas, empresários, profissionais liberais e autoridades.",
      "Atualmente, o Lago Sul é reconhecido como uma das regiões mais prestigiadas do Brasil.",
    ],
  },
  {
    title: "Localização e mobilidade",
    icon: MapPinned,
    body: [
      "O Lago Sul possui localização privilegiada, oferecendo acesso rápido a diversas áreas importantes de Brasília.",
      "A região está próxima da Ponte JK, Esplanada dos Ministérios, Setor de Clubes, Aeroporto Internacional de Brasília, Plano Piloto, Lago Norte, Jardim Botânico e Park Way.",
      "As principais vias garantem deslocamentos rápidos e eficientes para moradores e visitantes.",
    ],
  },
  {
    title: "Educação e ensino",
    icon: GraduationCap,
    body: [
      "O Lago Sul conta com algumas das instituições de ensino mais reconhecidas de Brasília.",
      "A região oferece escolas particulares de excelência, colégios bilíngues, instituições internacionais, cursos especializados e fácil acesso a universidades e centros educacionais.",
      "Essa infraestrutura contribui para tornar a região especialmente atrativa para famílias.",
    ],
  },
  {
    title: "Comércio e serviços",
    icon: BookOpen,
    body: [
      "Apesar do perfil predominantemente residencial, o Lago Sul possui uma estrutura completa de comércio e serviços.",
      "Os moradores encontram supermercados, farmácias, clínicas, hospitais, academias, restaurantes, cafeterias, centros comerciais e serviços especializados.",
      "A região oferece praticidade sem perder sua característica de exclusividade.",
    ],
  },
  {
    title: "Lazer e qualidade de vida",
    icon: ShieldCheck,
    body: [
      "Um dos maiores diferenciais do Lago Sul é a qualidade de vida.",
      "A proximidade com o Lago Paranoá proporciona esportes náuticos, caminhadas, ciclismo, contemplação da natureza e atividades ao ar livre.",
      "Além disso, a região possui áreas verdes, clubes, parques, ambiente tranquilo e baixo adensamento urbano.",
      "Esses fatores fazem do Lago Sul uma das regiões mais agradáveis para viver em Brasília.",
    ],
  },
  {
    title: "Mercado imobiliário no Lago Sul",
    icon: Building2,
    body: [
      "O mercado imobiliário do Lago Sul está entre os mais valorizados do Distrito Federal.",
      "A região oferece casas de alto padrão, mansões, condomínios fechados, terrenos amplos e imóveis com vista privilegiada.",
      "A demanda é impulsionada pela exclusividade da região, pela qualidade de vida e pelo prestígio associado ao endereço.",
      "O Lago Sul continua sendo uma das regiões mais procuradas por compradores que buscam imóveis diferenciados.",
    ],
  },
];

export default function LagoSulPage() {
  return (
    <>
      <Header />
      <main className="region-page">
        <section className="region-hero">
          <div className="region-inner">
            <div className="region-kicker">Regiões do Distrito Federal</div>
            <h1>
              Lago Sul: história, qualidade de vida e mercado imobiliário em
              uma das regiões mais exclusivas de Brasília
            </h1>
            <p>
              O Lago Sul é uma das regiões mais valorizadas, sofisticadas e
              desejadas do Distrito Federal, reunindo proximidade com o Lago
              Paranoá, imóveis de alto padrão, comércio qualificado, privacidade
              e excelente qualidade de vida.
            </p>
            <div className="region-hero-actions">
              <Link href="/imoveis?regiao=Lago%20Sul">Ver imóveis na região</Link>
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
                <h2>Conheça o Lago Sul</h2>
                <p>
                  O Lago Sul é uma das regiões mais valorizadas, sofisticadas e
                  desejadas do Distrito Federal. Conhecido por suas amplas áreas
                  residenciais, proximidade com o Lago Paranoá e excelente
                  qualidade de vida, o bairro se tornou referência para
                  famílias, empresários, diplomatas e investidores que buscam
                  exclusividade e conforto.
                </p>
                <p>
                  Com ruas arborizadas, condomínios de alto padrão, comércio
                  qualificado e localização estratégica, o Lago Sul oferece uma
                  combinação rara entre tranquilidade, segurança e fácil acesso
                  ao centro político e administrativo do país.
                </p>
                <p>
                  Hoje, a região é considerada uma das mais nobres de Brasília e
                  continua atraindo moradores que valorizam espaço, privacidade
                  e qualidade de vida.
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

              <section className="region-decision-grid" aria-label="Perguntas frequentes sobre o Lago Sul">
                <div>
                  <h2>Vale a pena morar no Lago Sul?</h2>
                  <p>
                    Para quem procura espaço, privacidade, contato com a
                    natureza e excelente infraestrutura, o Lago Sul está entre
                    as melhores opções de Brasília. A combinação entre
                    localização, segurança, lazer e qualidade de vida faz da
                    região uma referência nacional em moradia de alto padrão.
                  </p>
                </div>
                <div>
                  <h2>Vale a pena investir no Lago Sul?</h2>
                  <p>
                    O Lago Sul apresenta um histórico consistente de valorização
                    imobiliária. Os principais fatores incluem escassez de áreas
                    disponíveis, localização privilegiada, alto padrão
                    construtivo, demanda constante e forte prestígio
                    imobiliário.
                  </p>
                </div>
              </section>

              <section className="region-cta">
                <h2>Como a Top Imobiliária pode ajudar</h2>
                <p>
                  A Top Imobiliária acompanha o mercado imobiliário do Distrito
                  Federal há mais de três décadas. Nossa equipe auxilia
                  compradores, vendedores, investidores e proprietários em todas
                  as etapas do processo imobiliário.
                </p>
                <p>
                  Se você deseja comprar, vender, alugar ou investir no Lago
                  Sul, conte com uma equipe preparada para oferecer orientação
                  especializada e atendimento personalizado.
                </p>
                <div className="region-cta-actions">
                  <Link href="/#simulador">Avaliar meu imóvel</Link>
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
