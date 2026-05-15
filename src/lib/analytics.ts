/**
 * Analytics — single dataLayer entrypoint.
 *
 * All events flow through `trackEvent`, which pushes to `window.dataLayer`.
 * Google Tag Manager picks them up and fans out to GA4, Meta Pixel, Microsoft
 * Clarity tags, etc. — no tool-specific code lives here.
 *
 * Event names follow snake_case and stay short. Keep the taxonomy below as
 * the source of truth so GTM Triggers reference exact strings.
 */

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

type EventName =
  | "page_view"
  | "whatsapp_click"
  | "phone_click"
  | "email_click"
  | "assistant_open"
  | "assistant_intent"
  | "property_card_click"
  | "property_view"
  | "filter_change"
  | "lead_submit"
  | "tool_use"
  | "cta_click"
  | "outbound_click";

export type EventParams = Record<string, string | number | boolean | undefined | null>;

export function trackEvent(name: EventName, params: EventParams = {}): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...params });
}

// Convenience wrappers — keep params consistent across the codebase.

export const track = {
  pageView(path: string, title?: string) {
    trackEvent("page_view", { page_path: path, page_title: title });
  },
  whatsappClick(source: string, message?: string) {
    trackEvent("whatsapp_click", { source, message_preview: message?.slice(0, 80) });
  },
  phoneClick(source: string) {
    trackEvent("phone_click", { source });
  },
  emailClick(source: string) {
    trackEvent("email_click", { source });
  },
  assistantOpen() {
    trackEvent("assistant_open");
  },
  assistantIntent(intent: string) {
    trackEvent("assistant_intent", { intent });
  },
  propertyCardClick(propertyId: string | number, slug: string, listingType?: string) {
    trackEvent("property_card_click", { property_id: String(propertyId), property_slug: slug, listing_type: listingType });
  },
  propertyView(propertyId: string | number, slug: string, listingType?: string, price?: number) {
    trackEvent("property_view", {
      property_id: String(propertyId),
      property_slug: slug,
      listing_type: listingType,
      price,
    });
  },
  filterChange(filter: string) {
    trackEvent("filter_change", { filter });
  },
  leadSubmit(form: string, extra: EventParams = {}) {
    trackEvent("lead_submit", { form, ...extra });
  },
  toolUse(tool: string, params: EventParams = {}) {
    trackEvent("tool_use", { tool, ...params });
  },
  ctaClick(cta: string, location?: string) {
    trackEvent("cta_click", { cta, location });
  },
  outboundClick(url: string, label?: string) {
    trackEvent("outbound_click", { url, label });
  },
};
