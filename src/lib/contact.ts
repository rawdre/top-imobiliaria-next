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

export const ADDRESS_SHORT = "Águas Claras – DF";
export const ADDRESS_FULL =
  "Rua 07 Norte LT 3, 5 e 7 Loja 06 Edifício Max Mall, Águas Claras, Brasília - DF, 71908-180";

/**
 * Build a wa.me URL with optional pre-filled text.
 * Use this everywhere we link to WhatsApp.
 */
export function waLink(message?: string): string {
  const base = `https://wa.me/${WA_NUMBER}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

// Exact office address for a tighter embed with a visible marker on load.
export const MAPS_QUERY = ADDRESS_FULL;
export const MAPS_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  MAPS_QUERY,
)}&z=18&output=embed`;
export const MAPS_LINK_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  MAPS_QUERY,
)}`;
