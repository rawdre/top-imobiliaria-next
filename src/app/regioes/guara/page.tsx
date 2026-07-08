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
  title: "Guará DF: qualidade de vida e mercado imobiliário | Top Imobiliária",
  description:
    "Guia completo do Guará no DF: história, localização, metrô, comércio, lazer, infraestrutura, qualidade de vida e mercado imobiliário.",
  alternates: {
    canonical: "/regioes/guara",
  },
  keywords:
    "Guará DF, imóveis no Guará, morar no Guará, investir no Guará, mercado imobiliário Guará, apartamentos Guará, casas Guará",
};

const highlights = [
  {
    title: "Localização privilegiada",
    text: "Próximo ao Plano Piloto, Águas Claras, Park Sul, SIA, Núcleo Bandeirante, Candangolândia e Aeroporto.",
    icon: MapPinned,
  },
  {
    title: "Mobilidade com metrô",
    text: "Região atendida por estações do Metrô do Distrito Federal, facilitando deslocamentos para várias áreas da capital.",
    icon: Train,
  },
  {
    title: "Infraestrutura completa",
    text: "Comércio consolidado, escolas, saúde, parques, feira tradicional, serviços e forte identidade comunitária.",
    icon: Building2,
  },
];

const sections = [
  {
    title: "História do Guará",
    icon: Landmark,
    body: [
      "O Guará começou a ser implantado em 1967 e foi oficialmente fundado em 5 de maio de 1969. As primeiras moradias foram construídas em sistema de mutirão para funcionários da Novacap, que participavam da construção e desenvolvimento de Brasília.",
      "Posteriormente surgiu o Guará II, ampliando a capacidade residencial da região e consolidando o crescimento urbano.",
      "O nome da cidade tem origem no Córrego Guará, batizado em homenagem ao lobo-guará, um dos símbolos do Cerrado brasileiro.",
    ],
  },
  {
    title: "Localização estratégica",
    icon: MapPinned,
    body: [
      "Poucas regiões possuem localização tão privilegiada quanto o Guará.",
      "A região está próxima do Plano Piloto, Águas Claras, Park Sul, SIA, Núcleo Bandeirante, Candangolândia e Aeroporto Internacional de Brasília.",
      "Também conta com integração ao Metrô do Distrito Federal, facilitando o deslocamento para diversas regiões da capital.",
    ],
  },
  {
    title: "População e perfil dos moradores",
    icon: Home,
    body: [
      "O Guará possui perfil predominantemente de classe média, reunindo famílias tradicionais, servidores públicos, empresários e profissionais liberais.",
      "A região mantém forte identidade comunitária e continua crescendo de forma organizada, preservando o equilíbrio entre áreas residenciais, comércio e lazer.",
    ],
  },
  {
    title: "Educação",
    icon: GraduationCap,
    body: [
      "O Guará oferece ampla estrutura educacional.",
      "Os moradores encontram escolas públicas, escolas particulares, educação infantil, ensino fundamental, ensino médio, cursos técnicos e cursos profissionalizantes.",
      "Sua localização também facilita o acesso às principais universidades de Brasília.",
    ],
  },
  {
    title: "Saúde",
    icon: HeartPulse,
    body: [
      "A cidade conta com unidades básicas de saúde, clínicas médicas, laboratórios, consultórios especializados e hospitais nas regiões vizinhas.",
      "A excelente mobilidade amplia as opções de atendimento médico em todo o Distrito Federal.",
    ],
  },
  {
    title: "Comércio e serviços",
    icon: BookOpen,
    body: [
      "Um dos maiores diferenciais do Guará é seu comércio.",
      "A cidade oferece supermercados, farmácias, bancos, academias, restaurantes, cafeterias, padarias, clínicas, centros comerciais e serviços especializados.",
      "Outro destaque é a tradicional Feira do Guará, referência gastronômica e comercial do Distrito Federal, reunindo grande movimento de moradores e visitantes.",
    ],
  },
  {
    title: "Esporte, cultura e lazer",
    icon: Sparkles,
    body: [
      "O Guará possui excelente infraestrutura para lazer, com Parque Ecológico Ezechias Heringer, CAVE, Kartódromo Ayrton Senna, estádio, ginásio poliesportivo, áreas para caminhada, ciclovias, praças e espaços de convivência.",
      "Esses equipamentos reforçam a qualidade de vida e o vínculo dos moradores com a cidade.",
    ],
  },
  {
    title: "Mercado imobiliário",
    icon: Building2,
    body: [
      "O mercado imobiliário do Guará é um dos mais consolidados do Distrito Federal.",
      "A cidade reúne casas, sobrados, apartamentos, condomínios e imóveis comerciais.",
      "A localização privilegiada e a infraestrutura consolidada mantêm a procura aquecida tanto para compra quanto para locação.",
      "Além disso, o Guará vem recebendo investimentos em mobilidade e urbanização, fatores que contribuem para sua valorização contínua.",
    ],
  },
  {
    title: "O futuro da região",
    icon: TrendingUp,
    body: [
      "O Guará vive uma nova fase de modernização, com projetos de acessibilidade, mobilidade urbana, urbanização e revitalização de áreas comerciais.",
      "Novos investimentos públicos e privados reforçam a atratividade da região para moradores, proprietários e investidores.",
      "A tendência é que imóveis bem localizados, próximos ao metrô, comércio e serviços, mantenham forte procura e boa liquidez no mercado imobiliário.",
      "Esse crescimento acontece preservando uma das principais características da cidade: seu ambiente acolhedor e sua forte identidade comunitária.",
    ],
  },
];

export default function GuaraPage() {
  return (
    <>
      <Header />
      <main className="region-page">
        <section className="region-hero">
          <div className="region-inner">
            <div className="region-kicker">Regiões do Distrito Federal</div>
            <h1>
              Guará: história, qualidade de vida, infraestrutura e mercado
              imobiliário no DF
            </h1>
            <p>
              Uma das regiões administrativas mais tradicionais e bem
              localizadas do Distrito Federal, com comércio consolidado,
              mobilidade, parques, escolas, serviços e forte valorização
              imobiliária.
            </p>
            <div className="region-hero-actions">
              <Link href="/imoveis?regiao=Guar%C3%A1">Ver imóveis no Guará</Link>
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
                <h2>Conheça o Guará</h2>
                <p>
                  O Guará é uma das regiões administrativas mais tradicionais e
                  bem localizadas do Distrito Federal. Planejado para oferecer
                  qualidade de vida, infraestrutura completa e fácil acesso ao
                  Plano Piloto, mantém esses diferenciais até hoje.
                </p>
                <p>
                  Com ruas arborizadas, comércio consolidado, excelente
                  mobilidade, parques, escolas, serviços e uma população
                  fortemente ligada à cidade, tornou-se referência para famílias,
                  profissionais, servidores públicos e investidores.
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

              <section className="region-decision-grid" aria-label="Perguntas frequentes sobre o Guará">
                <div>
                  <h2>Vale a pena morar no Guará?</h2>
                  <p>
                    Sim. A combinação entre localização, infraestrutura,
                    comércio, transporte eficiente, áreas verdes e ambiente
                    familiar faz do Guará uma das regiões mais completas do DF.
                  </p>
                </div>
                <div>
                  <h2>Vale a pena investir no Guará?</h2>
                  <p>
                    Sim. O Guará apresenta mercado consolidado, boa liquidez,
                    histórico de valorização, novos investimentos públicos e
                    forte demanda por imóveis.
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
                  <Link href="/imoveis?regiao=Guar%C3%A1">Imóveis no Guará</Link>
                  <Link href="/#simulador">Avaliação de imóveis</Link>
                  <Link href="/#administracao">Administração imobiliária</Link>
                  <Link href="/regioes/asa-sul">Asa Sul</Link>
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
