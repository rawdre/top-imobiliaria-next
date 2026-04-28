/**
 * Single source of truth for Top Imobiliária contact info.
 * Anywhere in the app that links to WhatsApp, dials, emails, or shows
 * the address should import from here — not hardcode the number again.
 */

// E.164 digits-only form for wa.me / tel: links
export const WA_NUMBER = "556130424344";

// Pretty form for display
export const PHONE_DISPLAY = "(61) 3042-4344";
export const PHONE_TEL = "+556130424344";

export const EMAIL = "contato@topimobiliariadf.com.br";

export const ADDRESS_SHORT = "Águas Claras, Brasília — DF";

/**
 * Build a wa.me URL with optional pre-filled text.
 * Use this everywhere we link to WhatsApp.
 */
export function waLink(message?: string): string {
  const base = `https://wa.me/${WA_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

// Google Maps embed query — Águas Claras DF, since the live site keeps the
// exact street address private and tells visitors to schedule. Matches the
// legacy site's map-section behavior.
export const MAPS_QUERY = "Águas Claras, Brasília, DF, Brasil";
export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  MAPS_QUERY,
)}&output=embed`;
export const MAPS_LINK_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  MAPS_QUERY,
)}`;
