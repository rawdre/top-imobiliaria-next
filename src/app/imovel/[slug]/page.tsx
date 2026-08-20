import type { Metadata } from "next";
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
import PropertyViewTracker from "@/components/PropertyViewTracker";
import PropertyMediaGallery from "@/components/PropertyMediaGallery";
import { normalizePropertyVideos } from "@/lib/property-media";

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
  const isRent = property.listing_type === "aluguel";
  const price = formatCurrency(property.price || 0, isRent);
  const videos = normalizePropertyVideos(property.videos, property.title, property.property_meta);
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
      <PropertyViewTracker
        propertyId={property.id}
        slug={getPropertyPath(property)}
        listingType={property.listing_type}
        price={property.price ?? undefined}
      />
      <section className="property-page-hero">
        <div className="property-page-inner">
          <Link href="/#imoveis" className="property-page-back">
            ← Voltar aos imóveis
          </Link>

          <div className="property-page-grid">
            <div className="property-page-media">
              <PropertyMediaGallery photos={gallery} videos={videos} title={property.title} />
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
                <a
                  className="property-page-action primary"
                  href={waLink(whatsAppMessage)}
                  target="_blank"
                  rel="noreferrer"
                  data-track-source="property_detail"
                >
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
