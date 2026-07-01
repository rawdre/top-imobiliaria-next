import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Building2,
  GraduationCap,
  HeartPulse,
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
  title: "Lago Norte: qualidade de vida e mercado imobiliário | Top Imobiliária",
  description:
    "Guia completo do Lago Norte em Brasília: história, localização, qualidade de vida, educação, comércio, lazer e mercado imobiliário.",
  alternates: {
    canonical: "/regioes/lago-norte",
  },
  keywords:
    "Lago Norte Brasília, imóveis no Lago Norte, morar no Lago Norte, investir no Lago Norte, mercado imobiliário Lago Norte, casas Lago Norte",
};

const highlights = [
  {
    title: "Natureza e tranquilidade",
    text: "Região residencial próxima ao Lago Paranoá, com baixo adensamento, ruas tranquilas, áreas verdes e ambiente familiar.",
    icon: ShieldCheck,
  },
  {
    title: "Acesso estratégico",
    text: "Conexão rápida com Plano Piloto, Esplanada, Setor Bancário, UnB, Asa Norte, Lago Sul e Eixo Monumental.",
    icon: MapPinned,
  },
  {
    title: "Mercado consolidado",
    text: "Casas de alto padrão, condomínios, terrenos e imóveis com boa liquidez e potencial de valorização de longo prazo.",
    icon: TrendingUp,
  },
];

const sections = [
  {
    title: "História do Lago Norte",
    icon: Landmark,
    body: [
      "O Lago Norte começou a ser ocupado poucos anos após a inauguração de Brasília, acompanhando a expansão planejada da capital federal.",
      "Sua localização privilegiada, próxima ao Lago Paranoá, favoreceu o desenvolvimento de uma região predominantemente residencial, caracterizada por lotes amplos, casas de alto padrão e áreas verdes preservadas.",
      "Ao longo das décadas, recebeu importantes investimentos em infraestrutura, comércio, educação e mobilidade, consolidando-se como uma das regiões administrativas com maior qualidade de vida do Distrito Federal.",
      "Hoje, o Lago Norte preserva o conceito urbanístico de Brasília, unindo desenvolvimento, planejamento e integração com a natureza.",
    ],
  },
  {
    title: "Onde fica o Lago Norte?",
    icon: MapPinned,
    body: [
      "O Lago Norte está situado na margem norte do Lago Paranoá e possui localização estratégica.",
      "O acesso é facilitado por importantes vias do Distrito Federal, como a Ponte do Bragueto e a DF-009, permitindo deslocamento rápido para Plano Piloto, Esplanada dos Ministérios, Setor Bancário, Setor Hoteleiro, Universidade de Brasília, Asa Norte, Lago Sul e Eixo Monumental.",
      "Essa localização torna o Lago Norte uma excelente opção para quem trabalha no centro de Brasília, mas deseja viver em um ambiente mais tranquilo.",
    ],
  },
  {
    title: "Qualidade de vida",
    icon: ShieldCheck,
    body: [
      "Um dos maiores diferenciais do Lago Norte é sua qualidade de vida.",
      "A região oferece ampla arborização, baixo adensamento urbano, ruas tranquilas, contato permanente com o Lago Paranoá, ciclovias, espaços para caminhadas e ambiente familiar.",
      "É comum encontrar moradores praticando esportes ao ar livre, caminhando, pedalando ou aproveitando as áreas de lazer próximas ao lago.",
    ],
  },
  {
    title: "Educação",
    icon: GraduationCap,
    body: [
      "O Lago Norte conta com excelentes instituições de ensino, atendendo desde a educação infantil até o ensino médio, além da proximidade com universidades e centros educacionais do Plano Piloto.",
      "A região também possui cursos de idiomas, escolas especializadas e diversas opções de formação complementar.",
    ],
  },
  {
    title: "Saúde",
    icon: HeartPulse,
    body: [
      "Os moradores contam com ampla oferta de clínicas, consultórios médicos, laboratórios e hospitais nas proximidades.",
      "Além da estrutura local, o acesso rápido ao Plano Piloto amplia ainda mais as opções de atendimento em diversas especialidades.",
    ],
  },
  {
    title: "Comércio e serviços",
    icon: BookOpen,
    body: [
      "Embora preserve seu perfil residencial, o Lago Norte possui excelente infraestrutura comercial.",
      "Entre os serviços disponíveis estão supermercados, farmácias, restaurantes, cafeterias, academias, bancos, pet shops, centros comerciais, lojas especializadas e prestadores de serviços.",
      "Essa estrutura permite que os moradores resolvam grande parte de suas necessidades sem precisar se deslocar para outras regiões.",
    ],
  },
  {
    title: "Esporte e lazer",
    icon: Sparkles,
    body: [
      "O Lago Norte oferece inúmeras possibilidades de lazer, incluindo Lago Paranoá, clubes esportivos, esportes náuticos, parques, trilhas, ciclovias, áreas para corrida e espaços de convivência.",
      "A proximidade com a natureza faz parte do estilo de vida da região.",
    ],
  },
  {
    title: "Mercado imobiliário",
    icon: Building2,
    body: [
      "O mercado imobiliário do Lago Norte é reconhecido pela estabilidade, liquidez e valorização.",
      "A região reúne casas de alto padrão, condomínios horizontais, imóveis modernos, terrenos e residências com projetos arquitetônicos diferenciados.",
      "A procura permanece elevada devido à localização privilegiada, segurança e qualidade de vida.",
      "Para investidores, o Lago Norte representa uma região consolidada, com forte potencial de preservação patrimonial e valorização de longo prazo.",
    ],
  },
  {
    title: "O futuro da região",
    icon: TrendingUp,
    body: [
      "O Lago Norte tende a manter sua força imobiliária pela combinação entre oferta limitada de terrenos, localização estratégica e alta percepção de qualidade de vida.",
      "A evolução de serviços, novos centros comerciais, melhorias viárias e investimentos em infraestrutura reforçam a atratividade da região para famílias e investidores.",
      "As tendências do mercado apontam para valorização de imóveis bem localizados, projetos arquitetônicos diferenciados e soluções residenciais que preservem conforto, privacidade e integração com a natureza.",
    ],
  },
];

export default function LagoNortePage() {
  return (
    <>
      <Header />
      <main className="region-page">
        <section className="region-hero">
          <div className="region-inner">
            <div className="region-kicker">Regiões do Distrito Federal</div>
            <h1>Lago Norte: história, qualidade de vida e mercado imobiliário em Brasília</h1>
            <p>
              Guia completo sobre uma das regiões residenciais mais desejadas do
              Distrito Federal, reunindo natureza, tranquilidade, acesso
              estratégico e um mercado imobiliário sólido.
            </p>
            <div className="region-hero-actions">
              <Link href="/imoveis?regiao=Lago%20Norte">Ver imóveis na região</Link>
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
                <h2>Conheça o Lago Norte</h2>
                <p>
                  O Lago Norte une planejamento urbano, áreas verdes, proximidade
                  com o Lago Paranoá e infraestrutura completa para quem busca
                  viver com tranquilidade sem abrir mão de acesso rápido ao
                  centro de Brasília.
                </p>
                <p>
                  A região atrai famílias, profissionais e investidores que
                  valorizam conforto, segurança, contato com a natureza e
                  preservação patrimonial.
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

              <section className="region-decision-grid" aria-label="Perguntas frequentes sobre o Lago Norte">
                <div>
                  <h2>Vale a pena morar no Lago Norte?</h2>
                  <p>
                    Para quem procura tranquilidade, contato com a natureza, boa
                    infraestrutura e excelente localização, o Lago Norte é uma
                    das melhores escolhas em Brasília.
                  </p>
                </div>
                <div>
                  <h2>Vale a pena investir no Lago Norte?</h2>
                  <p>
                    Sim. A valorização histórica, a infraestrutura consolidada,
                    a oferta limitada de imóveis e a procura constante tornam o
                    Lago Norte uma região interessante para investimento
                    imobiliário.
                  </p>
                </div>
              </section>

              <section className="region-cta">
                <h2>Como a Top Imobiliária pode ajudar</h2>
                <p>
                  Há mais de 30 anos, a Top Imobiliária acompanha a evolução do
                  mercado imobiliário do Distrito Federal, oferecendo atendimento
                  especializado para quem deseja comprar, vender, alugar ou
                  administrar imóveis.
                </p>
                <p>
                  Nossa equipe conhece as características de cada região
                  administrativa e está preparada para orientar proprietários,
                  compradores, investidores e locatários com segurança e
                  transparência.
                </p>
                <div className="region-cta-actions">
                  <Link href="/#simulador">Avaliar meu imóvel</Link>
                  <Link href="/#administracao">Administração imobiliária</Link>
                  <Link href="/regioes/asa-norte">Asa Norte</Link>
                  <Link href="/regioes/lago-sul">Lago Sul</Link>
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
