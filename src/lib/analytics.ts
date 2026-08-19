/**
 * Privacy-safe analytics entry point.
 *
 * Only behavioural, non-identifying data is sent to the GTM dataLayer after
 * the visitor has granted analytics consent. Form values and contact details
 * must never be passed here.
 */

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    __topimobAnalyticsConsent?: boolean;
    __topimobLastPageView?: string;
  }
}

export type AnalyticsValue = string | number | boolean | undefined | null;
export type EventParams = Record<string, AnalyticsValue>;

export type OwnerInterestType =
  | "rental_listing"
  | "sale_listing"
  | "property_evaluation"
  | "property_management";

type EventName =
  | "page_view"
  | "whatsapp_click"
  | "phone_click"
  | "email_click"
  | "social_click"
  | "assistant_open"
  | "assistant_intent"
  | "property_card_click"
  | "property_view"
  | "property_search"
  | "filter_change"
  | "lead_submit"
  | "owner_interest"
  | "owner_lead"
  | "valuation_request"
  | "tool_use"
  | "cta_click"
  | "outbound_click";

const personalDataKey =
  /(^|_)(email|e-mail|phone|telephone|telefone|celular|whatsapp|name|nome|cpf|document|message|mensagem|address|endereco)(_|$)/i;
const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;

export function sanitizeAnalyticsParams(params: EventParams = {}): EventParams {
  return Object.fromEntries(
    Object.entries(params).filter(
      ([key, value]) =>
        !personalDataKey.test(key) &&
        value !== undefined &&
        value !== null &&
        String(value).length <= 160,
    ),
  );
}

export function getUtmContext(search: string): EventParams {
  const query = new URLSearchParams(search);
  return Object.fromEntries(
    utmKeys.flatMap((key) => {
      const value = query.get(key);
      return value ? [[key, value.slice(0, 120)]] : [];
    }),
  );
}

export function getOwnerInterestType(label: string): OwnerInterestType | null {
  const normalized = label
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();

  if (/(quanto vale|avaliar meu imovel|avaliacao de imovel|avaliar preco)/.test(normalized)) {
    return "property_evaluation";
  }
  if (/(administracao de imoveis|administrar meu imovel)/.test(normalized)) {
    return "property_management";
  }
  if (/(colocar.*alugar|anunciar.*aluguel|alugar meu imovel)/.test(normalized)) {
    return "rental_listing";
  }
  if (/(colocar.*vender|anunciar.*venda|vender meu imovel)/.test(normalized)) {
    return "sale_listing";
  }
  return null;
}

function hasAnalyticsConsent(): boolean {
  return typeof window !== "undefined" && window.__topimobAnalyticsConsent === true;
}

export function trackEvent(name: EventName, params: EventParams = {}): void {
  if (!hasAnalyticsConsent()) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...sanitizeAnalyticsParams(params) });
}

export const track = {
  pageView(path: string, title?: string) {
    if (typeof window === "undefined") return;
    const pageKey = path || "/";
    if (window.__topimobLastPageView === pageKey) return;
    window.__topimobLastPageView = pageKey;
    trackEvent("page_view", {
      page_path: pageKey,
      page_title: title,
      ...getUtmContext(window.location.search),
    });
  },
  whatsappClick(source: string, extra: EventParams = {}) {
    trackEvent("whatsapp_click", { source, ...extra });
  },
  phoneClick(source: string) {
    trackEvent("phone_click", { source });
  },
  emailClick(source: string) {
    trackEvent("email_click", { source });
  },
  socialClick(network: string, source: string) {
    trackEvent("social_click", { network, source });
  },
  assistantOpen() {
    trackEvent("assistant_open");
  },
  assistantIntent(intent: string) {
    trackEvent("assistant_intent", { intent });
  },
  propertyCardClick(propertyId: string | number, slug: string, listingType?: string) {
    trackEvent("property_card_click", {
      property_id: String(propertyId),
      property_slug: slug,
      listing_type: listingType,
    });
  },
  propertyView(propertyId: string | number, slug: string, listingType?: string, price?: number) {
    trackEvent("property_view", {
      property_id: String(propertyId),
      property_slug: slug,
      listing_type: listingType,
      price,
    });
  },
  propertySearch(searchType: string, extra: EventParams = {}) {
    trackEvent("property_search", { search_type: searchType, ...extra });
  },
  filterChange(filter: string) {
    trackEvent("filter_change", { filter });
  },
  leadSubmit(form: string, extra: EventParams = {}) {
    trackEvent("lead_submit", { form, ...extra });
  },
  ownerInterest(type: OwnerInterestType, source: string) {
    trackEvent("owner_interest", { owner_interest_type: type, source });
  },
  ownerLead(type: OwnerInterestType, source: string) {
    trackEvent("owner_lead", { owner_interest_type: type, source });
    if (type === "property_evaluation") {
      trackEvent("valuation_request", { source });
    }
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
