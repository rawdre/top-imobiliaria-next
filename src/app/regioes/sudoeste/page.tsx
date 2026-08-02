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
  title: "Sudoeste DF: qualidade de vida e mercado imobiliário | Top Imobiliária",
  description:
    "Guia completo do Sudoeste em Brasília: história, localização, Parque da Cidade, comércio, gastronomia, qualidade de vida e mercado imobiliário.",
  alternates: {
    canonical: "/regioes/sudoeste",
  },
  keywords:
    "Sudoeste DF, imóveis no Sudoeste, morar no Sudoeste, investir no Sudoeste, mercado imobiliário Sudoeste, apartamentos Sudoeste",
};

const highlights = [
  {
    title: "Localização premium",
    text: "Ao lado do Plano Piloto, Parque da Cidade, Eixo Monumental, Octogonal, Cruzeiro, SIG e principais setores centrais.",
    icon: MapPinned,
  },
  {
    title: "Qualidade de vida",
    text: "Bairro planejado, seguro, bem conservado, com áreas verdes, comércio completo, gastronomia e rotina prática.",
    icon: ShieldCheck,
  },
  {
    title: "Mercado valorizado",
    text: "Apartamentos, coberturas, duplex e imóveis comerciais com alta liquidez e demanda consistente.",
    icon: TrendingUp,
  },
];

const sections = [
  {
    title: "História do Sudoeste",
    icon: Landmark,
    body: [
      "O bairro Sudoeste começou a ser desenvolvido na década de 1990 como parte da expansão planejada de Brasília.",
      "Seu projeto urbanístico buscou preservar os princípios do Plano Piloto, privilegiando áreas residenciais bem organizadas, espaços públicos, acessibilidade e integração com áreas verdes.",
      "Ao longo dos anos, o bairro consolidou-se como uma das regiões mais valorizadas do Distrito Federal, atraindo moradores que buscavam viver próximos ao centro da capital sem abrir mão de tranquilidade e qualidade de vida.",
    ],
  },
  {
    title: "Localização estratégica",
    icon: MapPinned,
    body: [
      "O Sudoeste possui uma das melhores localizações de Brasília.",
      "A região oferece acesso rápido ao Plano Piloto, Eixo Monumental, Parque da Cidade Sarah Kubitschek, Setor Hospitalar, Setor Bancário, Setor de Autarquias, Octogonal, Cruzeiro, SIG e Aeroporto Internacional de Brasília.",
      "Essa localização reduz significativamente o tempo de deslocamento para diversas áreas da capital.",
    ],
  },
  {
    title: "População e perfil dos moradores",
    icon: Home,
    body: [
      "O bairro apresenta um perfil predominantemente residencial, reunindo servidores públicos, profissionais liberais, empresários, famílias, aposentados, diplomatas e investidores.",
      "A região é conhecida pelo ambiente tranquilo, pela boa convivência entre os moradores e pelo elevado padrão de conservação urbana.",
    ],
  },
  {
    title: "Educação",
    icon: GraduationCap,
    body: [
      "O Sudoeste conta com excelentes instituições de ensino.",
      "A região oferece escolas particulares de referência, escolas públicas, educação infantil, ensino fundamental, ensino médio, cursos de idiomas e cursos preparatórios.",
      "Além disso, está próxima de importantes universidades e centros de ensino superior de Brasília.",
    ],
  },
  {
    title: "Saúde",
    icon: HeartPulse,
    body: [
      "A infraestrutura de saúde é um dos pontos fortes da região.",
      "Os moradores têm fácil acesso a hospitais públicos e privados, clínicas médicas, laboratórios, centros de diagnóstico e consultórios especializados.",
      "A proximidade com o Setor Hospitalar Sul amplia ainda mais a oferta de atendimento.",
    ],
  },
  {
    title: "Comércio e serviços",
    icon: BookOpen,
    body: [
      "O comércio local é completo e atende às necessidades do dia a dia.",
      "Entre os principais serviços estão supermercados, padarias, farmácias, academias, restaurantes, cafeterias, bancos, clínicas, pet shops, salões de beleza e lojas especializadas.",
      "A organização do comércio contribui para a praticidade e o conforto dos moradores.",
    ],
  },
  {
    title: "Gastronomia",
    icon: Sparkles,
    body: [
      "O Sudoeste tornou-se um importante polo gastronômico de Brasília.",
      "A região reúne restaurantes de culinária brasileira, italiana, japonesa, contemporânea e internacional, além de cafeterias, confeitarias, hamburguerias e bares que movimentam o bairro durante todo o dia.",
      "Essa diversidade faz do Sudoeste um destino também para moradores de outras regiões do Distrito Federal.",
    ],
  },
  {
    title: "Lazer, esporte e qualidade de vida",
    icon: ShieldCheck,
    body: [
      "A qualidade de vida é um dos principais diferenciais do Sudoeste.",
      "Os moradores desfrutam de proximidade com o Parque da Cidade, ciclovias, pistas para caminhada, praças arborizadas, equipamentos de lazer, academias, espaços esportivos e áreas de convivência.",
      "O planejamento urbano favorece caminhadas e deslocamentos a pé, tornando o bairro mais agradável e sustentável.",
    ],
  },
  {
    title: "Mercado imobiliário",
    icon: Building2,
    body: [
      "O mercado imobiliário do Sudoeste está entre os mais sólidos e valorizados do Distrito Federal.",
      "A região oferece apartamentos de médio e alto padrão, coberturas, duplex, salas comerciais, lojas e imóveis para investimento.",
      "A procura permanece elevada devido à excelente localização, infraestrutura e qualidade de vida.",
    ],
  },
  {
    title: "O futuro da região",
    icon: TrendingUp,
    body: [
      "Mesmo sendo um bairro consolidado, o Sudoeste continua recebendo melhorias em infraestrutura, mobilidade, paisagismo e modernização dos espaços públicos.",
      "A valorização imobiliária acompanha a escassez de novas áreas disponíveis para construção, característica comum em bairros maduros e altamente desejados.",
      "Esse cenário fortalece o potencial de investimento a médio e longo prazo.",
    ],
  },
];

export default function SudoestePage() {
  return (
    <>
      <Header />
      <main className="region-page">
        <section className="region-hero">
          <div className="region-inner">
            <div className="region-kicker">Regiões do Distrito Federal</div>
            <h1>Sudoeste: história, qualidade de vida e mercado imobiliário em Brasília</h1>
            <p>
              Guia completo sobre um dos bairros mais modernos, organizados e
              valorizados do Distrito Federal, com localização estratégica,
              infraestrutura completa, comércio forte e mercado imobiliário
              consistente.
            </p>
            <div className="region-hero-actions">
              <Link href="/imoveis?regiao=Sudoeste">Ver imóveis no Sudoeste</Link>
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
                <h2>Conheça o Sudoeste</h2>
                <p>
                  O Sudoeste é um dos bairros mais modernos, organizados e
                  valorizados do Distrito Federal. Planejado para oferecer
                  infraestrutura completa, segurança, mobilidade e qualidade de
                  vida, tornou-se uma das regiões mais desejadas para morar em
                  Brasília.
                </p>
                <p>
                  Localizado ao lado do Plano Piloto e do Parque da Cidade Sarah
                  Kubitschek, o bairro reúne excelente oferta de serviços, áreas
                  verdes, comércio diversificado, escolas, restaurantes e uma
                  ampla variedade de imóveis de médio e alto padrão.
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

              <section className="region-decision-grid" aria-label="Perguntas frequentes sobre o Sudoeste">
                <div>
                  <h2>Vale a pena morar no Sudoeste?</h2>
                  <p>
                    Sim. O Sudoeste reúne localização privilegiada,
                    infraestrutura completa, segurança, comércio diversificado,
                    excelente mobilidade, áreas verdes e qualidade de vida.
                  </p>
                </div>
                <div>
                  <h2>Vale a pena investir no Sudoeste?</h2>
                  <p>
                    Sim. O bairro apresenta valorização histórica, alta
                    liquidez, demanda constante, localização estratégica e
                    imóveis de excelente padrão construtivo.
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
                  <Link href="/imoveis?regiao=Sudoeste">Imóveis no Sudoeste</Link>
                  <Link href="/#simulador">Avaliação de imóveis</Link>
                  <Link href="/#administracao">Administração imobiliária</Link>
                  <Link href="/regioes/noroeste">Noroeste</Link>
                  <Link href="/regioes/asa-sul">Asa Sul</Link>
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
