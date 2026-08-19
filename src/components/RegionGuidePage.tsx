import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Building2,
  CalendarRange,
  GraduationCap,
  HeartPulse,
  Home,
  Landmark,
  MapPinned,
  Train,
  Trees,
  TrendingUp,
  Users,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import SiteAssistant from "@/components/SiteAssistant";

type IconName =
  | "book"
  | "building"
  | "calendar"
  | "education"
  | "health"
  | "home"
  | "landmark"
  | "map"
  | "train"
  | "trees"
  | "trend"
  | "users";

type GuideSection = {
  title: string;
  icon: IconName;
  body: string[];
  bullets?: string[];
};

type GuideStat = {
  value: string;
  label: string;
};

type GuideFaq = {
  question: string;
  answer: string;
};

type TimelineItem = {
  year: string;
  text: string;
};

type RelatedGuide = {
  label: string;
  href: string;
};

export type RegionGuideData = {
  name: string;
  slug: string;
  title: string;
  description: string;
  intro: string[];
  stats: GuideStat[];
  highlights: Array<{ title: string; text: string; icon: IconName }>;
  sections: GuideSection[];
  faqs: GuideFaq[];
  timeline?: TimelineItem[];
  related: RelatedGuide[];
  propertyHref: string;
  sources: string[];
  updatedAt: string;
};

const icons: Record<IconName, LucideIcon> = {
  book: BookOpen,
  building: Building2,
  calendar: CalendarRange,
  education: GraduationCap,
  health: HeartPulse,
  home: Home,
  landmark: Landmark,
  map: MapPinned,
  train: Train,
  trees: Trees,
  trend: TrendingUp,
  users: Users,
};

export default function RegionGuidePage({ guide }: { guide: RegionGuideData }) {
  const canonicalUrl = "https://www.topimobiliaria.com/regioes/" + guide.slug;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: guide.title,
        description: guide.description,
        mainEntityOfPage: canonicalUrl,
        dateModified: "2026-08-19",
        author: { "@type": "Organization", name: "Top Imobiliária DF" },
        publisher: {
          "@type": "Organization",
          name: "Top Imobiliária DF",
          url: "https://www.topimobiliaria.com",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: "https://www.topimobiliaria.com/" },
          { "@type": "ListItem", position: 2, name: "Hub de Inteligência", item: "https://www.topimobiliaria.com/#hub-inteligencia" },
          { "@type": "ListItem", position: 3, name: guide.name, item: canonicalUrl },
        ],
      },
      {
        "@type": "Organization",
        name: "Top Imobiliária DF",
        url: "https://www.topimobiliaria.com",
      },
      {
        "@type": "FAQPage",
        mainEntity: guide.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <Header />
      <main className="region-page">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <section className="region-hero">
          <div className="region-inner">
            <nav className="region-breadcrumb" aria-label="Navegação estrutural">
              <Link href="/">Início</Link>
              <span>›</span>
              <Link href="/#hub-inteligencia">Hub de Inteligência</Link>
              <span>›</span>
              <span>{guide.name}</span>
            </nav>
            <div className="region-kicker">Guia completo do Hub de Inteligência de Brasília</div>
            <h1>{guide.title}</h1>
            <p>{guide.description}</p>
            <div className="region-hero-actions">
              <Link href={guide.propertyHref}>Ver imóveis na região</Link>
              <Link href="/#simulador">Avaliar imóvel</Link>
            </div>
          </div>
        </section>

        <section className="region-content">
          <div className="region-inner">
            <section className="region-stat-grid" aria-label={guide.name + " em números"}>
              {guide.stats.map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </section>

            <div className="region-highlight-grid">
              {guide.highlights.map((item) => {
                const Icon = icons[item.icon];
                return (
                  <article className="region-highlight" key={item.title}>
                    <Icon size={22} />
                    <h2>{item.title}</h2>
                    <p>{item.text}</p>
                  </article>
                );
              })}
            </div>

            <article className="region-article">
              <section className="region-intro-block">
                <h2>Conheça {guide.name}</h2>
                {guide.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </section>

              {guide.sections.map((section) => {
                const Icon = icons[section.icon];
                return (
                  <section className="region-section" key={section.title}>
                    <div className="region-section-title">
                      <Icon size={22} />
                      <h2>{section.title}</h2>
                    </div>
                    {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    {section.bullets ? (
                      <ul className="region-bullets">
                        {section.bullets.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    ) : null}
                  </section>
                );
              })}

              {guide.timeline ? (
                <section className="region-section">
                  <div className="region-section-title">
                    <CalendarRange size={22} />
                    <h2>{guide.name} em uma linha do tempo</h2>
                  </div>
                  <ol className="region-timeline">
                    {guide.timeline.map((item) => (
                      <li key={item.year}>
                        <strong>{item.year}</strong>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ol>
                </section>
              ) : null}

              <section className="region-section">
                <div className="region-section-title">
                  <BookOpen size={22} />
                  <h2>Perguntas frequentes</h2>
                </div>
                <div className="region-faq-grid">
                  {guide.faqs.map((faq) => (
                    <details key={faq.question}>
                      <summary>{faq.question}</summary>
                      <p>{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>

              <section className="region-cta">
                <h2>Como a Top Imobiliária pode ajudar</h2>
                <p>
                  Há mais de 30 anos, a Top Imobiliária acompanha o mercado do Distrito Federal
                  e ajuda proprietários, compradores, locatários e investidores em decisões de
                  compra, venda, locação, administração e avaliação de imóveis.
                </p>
                <p>
                  Este guia é informativo. Para uma decisão imobiliária, avalie o imóvel e a
                  localização específica com apoio profissional.
                </p>
                <div className="region-cta-actions">
                  <Link href={guide.propertyHref}>Imóveis na região</Link>
                  <Link href="/#simulador">Avaliação de imóveis</Link>
                  <Link href="/#administracao">Administração imobiliária</Link>
                </div>
              </section>

              <section className="region-related">
                <h2>Continue conhecendo Brasília</h2>
                <div>
                  {guide.related.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
                </div>
              </section>

              <section className="region-sources">
                <h2>Fontes e atualização</h2>
                <ul>
                  {guide.sources.map((source) => <li key={source}>{source}</li>)}
                </ul>
                <p>Última atualização editorial: {guide.updatedAt}.</p>
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
