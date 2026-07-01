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
  title: "Asa Norte: qualidade de vida e mercado imobiliário | Top Imobiliária",
  description:
    "Conheça a Asa Norte em Brasília: história, mobilidade, educação, comércio, qualidade de vida e mercado imobiliário para morar ou investir.",
  alternates: {
    canonical: "/regioes/asa-norte",
  },
  keywords:
    "Asa Norte Brasília, imóveis na Asa Norte, morar na Asa Norte, investir na Asa Norte, mercado imobiliário Asa Norte, apartamentos Asa Norte, locação Asa Norte",
};

const highlights = [
  {
    title: "Localização estratégica",
    text: "Dentro do Plano Piloto, com acesso rápido à Esplanada, UnB, Lago Norte, Noroeste, Sudoeste e Eixo Monumental.",
    icon: MapPinned,
  },
  {
    title: "Demanda constante",
    text: "A presença da UnB, hospitais, comércio e centros empresariais mantém a procura por moradia e locação aquecida.",
    icon: TrendingUp,
  },
  {
    title: "Infraestrutura consolidada",
    text: "Superquadras, comércio local, serviços essenciais, áreas verdes e mobilidade tornam a rotina mais prática.",
    icon: Building2,
  },
];

const sections = [
  {
    title: "História da Asa Norte",
    icon: Landmark,
    body: [
      "A Asa Norte nasceu junto com Brasília. Quando a capital federal foi inaugurada em 1960, a região passou a integrar o projeto urbanístico idealizado por Lucio Costa, responsável pelo Plano Piloto.",
      "O conceito das superquadras foi desenvolvido para proporcionar uma convivência mais organizada entre moradia, áreas verdes, comércio local e serviços essenciais.",
      "Ao longo das décadas, a Asa Norte consolidou-se como uma das áreas mais tradicionais da cidade, reunindo moradores que valorizam infraestrutura, localização estratégica e qualidade de vida.",
    ],
  },
  {
    title: "Localização e mobilidade",
    icon: MapPinned,
    body: [
      "A Asa Norte possui localização privilegiada dentro do Plano Piloto e facilita o deslocamento para diversas regiões administrativas do Distrito Federal.",
      "A região oferece fácil acesso à Esplanada dos Ministérios, Setor Comercial Norte, Setor Bancário Norte, Lago Norte, Sudoeste, Noroeste, Eixo Monumental e Universidade de Brasília.",
      "Moradores também contam com ampla oferta de transporte público, ciclovias e acesso rápido às principais vias da capital.",
    ],
  },
  {
    title: "Educação e conhecimento",
    icon: GraduationCap,
    body: [
      "Um dos grandes diferenciais da Asa Norte é a concentração de instituições de ensino, incluindo a Universidade de Brasília, escolas públicas e particulares, cursos preparatórios, centros de pesquisa e instituições de educação superior.",
      "Essa característica atrai estudantes, professores, pesquisadores e profissionais de diversas áreas.",
      "Por isso, a demanda por locação de imóveis na região costuma permanecer aquecida ao longo dos anos.",
    ],
  },
  {
    title: "Comércio e serviços",
    icon: BookOpen,
    body: [
      "A Asa Norte possui uma das estruturas comerciais mais completas de Brasília, com supermercados, farmácias, academias, clínicas, hospitais, bancos, restaurantes, cafeterias, padarias e centros empresariais.",
      "A região também possui forte tradição gastronômica, com estabelecimentos reconhecidos em todo o Distrito Federal.",
      "Essa variedade permite que muitas necessidades do dia a dia sejam resolvidas sem grandes deslocamentos.",
    ],
  },
  {
    title: "Qualidade de vida",
    icon: ShieldCheck,
    body: [
      "A qualidade de vida é um dos principais motivos que levam tantas pessoas a escolher a Asa Norte.",
      "Entre os fatores mais valorizados estão arborização, áreas de convivência, superquadras planejadas, oferta cultural, segurança relativa e proximidade com serviços essenciais.",
      "A presença constante de áreas verdes e espaços para atividades ao ar livre contribui para um ambiente mais agradável para famílias e profissionais.",
    ],
  },
  {
    title: "Mercado imobiliário na Asa Norte",
    icon: Home,
    body: [
      "O mercado imobiliário da Asa Norte é considerado um dos mais sólidos de Brasília.",
      "A região oferece apartamentos tradicionais, imóveis reformados, coberturas, unidades comerciais e imóveis voltados para locação estudantil.",
      "Para investidores, a Asa Norte apresenta uma combinação interessante entre segurança patrimonial, valorização histórica e demanda constante.",
    ],
  },
];

export default function AsaNortePage() {
  return (
    <>
      <Header />
      <main className="region-page">
        <section className="region-hero">
          <div className="region-inner">
            <div className="region-kicker">Regiões do Distrito Federal</div>
            <h1>
              Asa Norte: história, qualidade de vida e mercado imobiliário em
              uma das regiões mais tradicionais de Brasília
            </h1>
            <p>
              Localizada no Plano Piloto, a Asa Norte reúne superquadras
              planejadas, ruas arborizadas, serviços completos, instituições de
              ensino, hospitais, comércio diversificado e forte demanda
              imobiliária para moradia e investimento.
            </p>
            <div className="region-hero-actions">
              <Link href="/imoveis?regiao=Asa%20Norte">Ver imóveis na região</Link>
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
                <h2>Conheça a Asa Norte</h2>
                <p>
                  A Asa Norte é uma das regiões mais conhecidas e valorizadas de
                  Brasília. Localizada no Plano Piloto, ela reúne características
                  que fazem dela uma das áreas mais desejadas para morar,
                  trabalhar e investir no Distrito Federal.
                </p>
                <p>
                  Além de sua importância histórica para a capital federal, a
                  região possui um mercado imobiliário sólido, com imóveis que
                  mantêm boa valorização ao longo do tempo e forte demanda para
                  locação.
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
                  A Asa Norte tende a manter forte relevância imobiliária pela
                  combinação entre localização estratégica, proximidade da UnB,
                  infraestrutura consolidada e demanda constante por moradia e
                  locação.
                </p>
                <p>
                  Melhorias urbanas, novos serviços, atualização de imóveis
                  antigos e fortalecimento do comércio local devem continuar
                  influenciando a valorização da região nos próximos anos.
                </p>
                <p>
                  Para proprietários e investidores, imóveis bem conservados,
                  reformados e próximos a serviços essenciais tendem a ganhar
                  ainda mais competitividade no mercado.
                </p>
              </section>

              <section className="region-decision-grid" aria-label="Perguntas frequentes sobre a Asa Norte">
                <div>
                  <h2>Vale a pena morar na Asa Norte?</h2>
                  <p>
                    Para quem busca qualidade de vida, praticidade e
                    infraestrutura completa, a resposta tende a ser sim. A
                    região oferece excelente localização, ampla rede de serviços,
                    boas opções educacionais, mobilidade facilitada e ambiente
                    urbano consolidado.
                  </p>
                </div>
                <div>
                  <h2>Vale a pena investir na Asa Norte?</h2>
                  <p>
                    A Asa Norte é tradicionalmente vista como uma região segura
                    para investimentos imobiliários. Os principais fatores são
                    demanda consistente, forte procura por locação, valorização
                    ao longo do tempo, infraestrutura consolidada e localização
                    estratégica.
                  </p>
                </div>
              </section>

              <section className="region-cta">
                <h2>Como a Top Imobiliária pode ajudar</h2>
                <p>
                  A Top Imobiliária acompanha o mercado imobiliário de Brasília
                  há mais de três décadas. Nossa equipe auxilia proprietários,
                  compradores, investidores e locatários com informações,
                  atendimento especializado e suporte em todas as etapas do
                  processo imobiliário.
                </p>
                <p>
                  Se você deseja comprar, vender, alugar ou investir na Asa
                  Norte, conte com uma equipe preparada para oferecer orientação
                  segura e atendimento personalizado.
                </p>
                <div className="region-cta-actions">
                  <Link href="/#simulador">Avaliar meu imóvel</Link>
                  <Link href="/#administracao">Administração imobiliária</Link>
                  <Link href="/regioes/asa-sul">Asa Sul</Link>
                  <Link href="/regioes/lago-norte">Lago Norte</Link>
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
