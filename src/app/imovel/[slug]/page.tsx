import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Bath, BedDouble, CalendarDays, Car, Home, MapPin, MessageCircle, Ruler, Share2 } from "lucide-react";
import {
  fetchPropertyWithMeta,
  getGalleryItems,
  getPropertyCover,
  type PropertyWithMeta,
} from "@/lib/property-data";
import { getPropertyAbsoluteUrl, getPropertyIdFromSlug, getPropertyPath } from "@/lib/property-urls";
import { waLink } from "@/lib/contact";

type PropertyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function formatCurrency(value: number, isRent: boolean): string {
  const formatted = value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
  });

  return isRent ? `${formatted}/mês` : formatted;
}

function getVideoEmbedUrl(url?: string): string | null {
  if (!url) return null;

  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      const id = parsed.pathname.replace("/", "");
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }

    if (host.endsWith("youtube.com")) {
      const id = parsed.searchParams.get("v") || parsed.pathname.split("/").filter(Boolean).pop();
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }

    if (host.endsWith("vimeo.com")) {
      const id = parsed.pathname.split("/").filter(Boolean).pop();
      return id ? `https://player.vimeo.com/video/${id}` : null;
    }

    return url;
  } catch {
    return null;
  }
}

function buildDescription(property: PropertyWithMeta): string {
  const action = property.listing_type === "aluguel" ? "locação" : "venda";
  return (
    property.description ||
    `${property.title} disponível para ${action} em ${property.neighborhood || "Águas Claras"}.`
  ).slice(0, 155);
}

async function getPropertyFromParams(params: PropertyPageProps["params"]) {
  const { slug } = await params;
  const id = getPropertyIdFromSlug(slug);
  return fetchPropertyWithMeta(id);
}

export async function generateMetadata({ params }: PropertyPageProps): Promise<Metadata> {
  const property = await getPropertyFromParams(params);
  if (!property) return {};

  const cover = getPropertyCover(property);
  const description = buildDescription(property);
  const url = getPropertyAbsoluteUrl(property);

  return {
    title: `${property.title} | Top Imobiliária`,
    description,
    alternates: {
      canonical: getPropertyPath(property),
    },
    openGraph: {
      type: "website",
      title: property.title,
      description,
      url,
      images: cover ? [{ url: cover }] : undefined,
      locale: "pt_BR",
      siteName: "Top Imobiliária DF",
    },
    twitter: {
      card: "summary_large_image",
      title: property.title,
      description,
      images: cover ? [cover] : undefined,
    },
  };
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const property = await getPropertyFromParams(params);
  if (!property) notFound();

  const gallery = getGalleryItems(property);
  const cover = gallery[0]?.url || null;
  const isRent = property.listing_type === "aluguel";
  const price = formatCurrency(property.price || 0, isRent);
  const videoUrl = getVideoEmbedUrl(property.property_meta.youtube_url);
  const video360Url = getVideoEmbedUrl(property.property_meta.video_360_url);
  const shareUrl = getPropertyAbsoluteUrl(property);
  const whatsAppMessage = `Olá! Vi este imóvel no site da Top Imobiliária e tenho interesse: ${property.title} - ${shareUrl}`;

  const facts = [
    { label: "Modalidade", value: isRent ? "Aluguel" : "Venda", icon: Home },
    { label: "Preço", value: price, icon: Home },
    { label: "Quartos", value: String(property.bedrooms || 0), icon: BedDouble },
    { label: "Banheiros", value: String(property.bathrooms || 0), icon: Bath },
    { label: "Vagas", value: String(property.garage_spaces || 0), icon: Car },
    { label: "Área", value: property.area_m2 ? `${property.area_m2} m²` : "Consulte", icon: Ruler },
  ];

  return (
    <main className="property-page-shell">
      <section className="property-page-hero">
        <div className="property-page-inner">
          <Link href="/#imoveis" className="property-page-back">
            ← Voltar aos imóveis
          </Link>

          <div className="property-page-grid">
            <div className="property-page-media">
              {cover ? (
                <Image
                  src={cover}
                  alt={gallery[0]?.name || property.title}
                  width={1180}
                  height={760}
                  priority
                  className="property-page-cover"
                />
              ) : (
                <div className="property-page-cover property-page-cover-empty">
                  <Home size={58} />
                </div>
              )}
            </div>

            <div className="property-page-summary">
              <span className={isRent ? "property-page-badge rent" : "property-page-badge sale"}>
                {isRent ? "Aluguel" : "Venda"}
              </span>
              <h1>{property.title}</h1>
              <p className="property-page-address">
                <MapPin size={18} />
                {property.address || property.neighborhood || "Distrito Federal"}
              </p>
              <strong className="property-page-price">{price}</strong>

              <div className="property-page-actions">
                <a className="property-page-action primary" href={waLink(whatsAppMessage)} target="_blank" rel="noreferrer">
                  <MessageCircle size={18} />
                  Falar no WhatsApp
                </a>
                <a className="property-page-action secondary" href={waLink(`Olá! Gostaria de agendar uma visita para: ${property.title} - ${shareUrl}`)} target="_blank" rel="noreferrer">
                  <CalendarDays size={18} />
                  Agendar visita
                </a>
                <a className="property-page-action ghost" href={shareUrl}>
                  <Share2 size={18} />
                  Link do imóvel
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="property-page-content">
        <div className="property-page-inner property-page-two-col">
          <article>
            <h2>Detalhes do imóvel</h2>
            <p className="property-page-description">
              {property.description ||
                `${property.title} disponível para ${isRent ? "locação" : "venda"} em ${
                  property.neighborhood || "Águas Claras"
                }.`}
            </p>

            {(videoUrl || video360Url) && (
              <div className="property-page-videos">
                {videoUrl && (
                  <div className="property-page-video-card">
                    <h3>Vídeo do imóvel</h3>
                    <iframe src={videoUrl} title={`Vídeo - ${property.title}`} allowFullScreen />
                  </div>
                )}
                {video360Url && (
                  <div className="property-page-video-card">
                    <h3>Tour 360°</h3>
                    <iframe src={video360Url} title={`Tour 360 - ${property.title}`} allowFullScreen />
                  </div>
                )}
              </div>
            )}

            {gallery.length > 1 && (
              <div className="property-page-gallery">
                {gallery.slice(1).map((image) => (
                  <Image
                    key={image.url}
                    src={image.url}
                    alt={image.name}
                    width={520}
                    height={360}
                    className="property-page-gallery-image"
                  />
                ))}
              </div>
            )}
          </article>

          <aside className="property-page-facts">
            {facts.map((fact) => {
              const Icon = fact.icon;
              return (
                <div key={fact.label} className="property-page-fact">
                  <Icon size={19} />
                  <span>{fact.label}</span>
                  <strong>{fact.value}</strong>
                </div>
              );
            })}
          </aside>
        </div>
      </section>
    </main>
  );
}
