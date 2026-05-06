import type { Property } from "@/lib/supabase";

export const SITE_URL = "https://www.topimobiliaria.com";

export function slugify(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90);
}

export function getPropertySlug(property: Pick<Property, "id" | "title">): string {
  const titleSlug = slugify(property.title || "imovel");
  return `${titleSlug || "imovel"}--${property.id}`;
}

export function getPropertyPath(property: Pick<Property, "id" | "title">): string {
  return `/imovel/${getPropertySlug(property)}`;
}

export function getPropertyAbsoluteUrl(property: Pick<Property, "id" | "title">): string {
  return `${SITE_URL}${getPropertyPath(property)}`;
}

export function getPropertyIdFromSlug(slug: string): string {
  const marker = "--";
  const index = slug.lastIndexOf(marker);
  if (index === -1) return slug;
  return slug.slice(index + marker.length);
}
