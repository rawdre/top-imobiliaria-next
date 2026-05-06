import { createClient } from "@supabase/supabase-js";
import type { Property } from "@/lib/supabase";

const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://agnpgfqugurxtplxljaw.supabase.co";
const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "sb_publishable_ZKn9l3sBJPFqbgqQ8g-KVA_xiRLK0le";
const PROPERTY_IMAGE_BUCKET = "property-images";
const PROPERTY_META_PREFIX = "property-meta";

export type PropertyMeta = {
  youtube_url?: string;
  video_360_url?: string;
  property_status?: string;
  city?: string;
  state?: string;
  building_name?: string;
  suites?: number;
  amenities?: string[];
};

export type PropertyWithMeta = Property & {
  property_meta: PropertyMeta;
};

export type GalleryItem = {
  url: string;
  name: string;
};

export const serverSupabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: false,
  },
});

export function getGalleryItems(property: Pick<Property, "gallery" | "title">): GalleryItem[] {
  return (property.gallery || [])
    .map((item, index) => {
      if (typeof item === "string" && item) {
        return { url: item, name: `${property.title || "Imóvel"} - foto ${index + 1}` };
      }

      if (item && typeof item === "object" && item.url) {
        return {
          url: item.url,
          name: item.name || `${property.title || "Imóvel"} - foto ${index + 1}`,
        };
      }

      return null;
    })
    .filter((item): item is GalleryItem => Boolean(item));
}

export function getPropertyCover(property: Pick<Property, "gallery" | "title">): string | null {
  return getGalleryItems(property)[0]?.url || null;
}

export async function fetchActiveProperties(): Promise<Property[]> {
  const { data, error } = await serverSupabase
    .from("properties")
    .select("*")
    .eq("is_active", true)
    .order("is_featured", { ascending: false })
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data || [];
}

export async function fetchPropertyById(id: string): Promise<Property | null> {
  const { data, error } = await serverSupabase
    .from("properties")
    .select("*")
    .eq("id", id)
    .eq("is_active", true)
    .maybeSingle();

  if (error) throw error;
  return data || null;
}

export async function fetchPropertyMeta(id: string): Promise<PropertyMeta> {
  const { data } = serverSupabase.storage
    .from(PROPERTY_IMAGE_BUCKET)
    .getPublicUrl(`${PROPERTY_META_PREFIX}/${id}.json`);

  if (!data.publicUrl) return {};

  try {
    const response = await fetch(data.publicUrl, {
      next: { revalidate: 300 },
    });

    if (!response.ok) return {};

    const raw = await response.json();
    return {
      youtube_url: String(raw.youtube_url || "").trim(),
      video_360_url: String(raw.video_360_url || "").trim(),
      property_status: String(raw.property_status || "").trim(),
      city: String(raw.city || "").trim(),
      state: String(raw.state || "").trim(),
      building_name: String(raw.building_name || "").trim(),
      suites: Number(raw.suites || 0),
      amenities: Array.isArray(raw.amenities)
        ? raw.amenities.map((item: unknown) => String(item).trim()).filter(Boolean)
        : [],
    };
  } catch {
    return {};
  }
}

export async function fetchPropertyWithMeta(id: string): Promise<PropertyWithMeta | null> {
  const property = await fetchPropertyById(id);
  if (!property) return null;

  return {
    ...property,
    property_meta: await fetchPropertyMeta(id),
  };
}
