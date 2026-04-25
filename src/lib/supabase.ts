import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

// Client is lazy — only fails at query time if env vars are missing, not at module load
export const supabase = supabaseUrl
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createClient("https://placeholder.supabase.co", "placeholder");

// Schema mirrors the actual Supabase `properties` table on
// agnpgfqugurxtplxljaw.supabase.co — DO NOT rename fields.
export type Property = {
  id: string;
  title: string;
  listing_type: "venda" | "aluguel";
  property_type: string;
  price: number;
  gross_price?: number | null;
  address: string;
  neighborhood: string;
  condominium_name?: string | null;
  bedrooms: number;
  bathrooms: number;
  garage_spaces?: number | null;
  area_m2: number;
  condo_fee?: number | null;
  description: string;
  // Mixed-shape: newer rows store {url, name, path} objects, legacy rows store
  // plain string URLs. Consumers should normalize via galleryFirstUrl().
  gallery: Array<string | { url?: string; name?: string; path?: string } | null>;
  gradient?: string | null;
  is_featured: boolean;
  is_active: boolean;
  punctuality_discount?: number | null;
  water_notes?: string | null;
  created_at: string;
  updated_at?: string;
};
