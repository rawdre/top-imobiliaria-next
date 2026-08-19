import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  getOwnerInterestType,
  getUtmContext,
  sanitizeAnalyticsParams,
  track,
  trackEvent,
} from "./analytics";

const originalWindow = globalThis.window;

beforeEach(() => {
  Object.defineProperty(globalThis, "window", {
    configurable: true,
    value: {
      __topimobAnalyticsConsent: true,
      dataLayer: [],
      location: { search: "?utm_source=google&utm_medium=cpc" },
    },
  });
});

afterEach(() => {
  Object.defineProperty(globalThis, "window", {
    configurable: true,
    value: originalWindow,
  });
});

describe("analytics privacy boundary", () => {
  it("keeps useful measurement fields and removes personal data", () => {
    expect(
      sanitizeAnalyticsParams({
        source: "homepage",
        property_id: "123",
        email: "cliente@exemplo.com",
        phone: "61999999999",
        cpf: "000.000.000-00",
        message: "Quero saber mais",
      }),
    ).toEqual({
      source: "homepage",
      property_id: "123",
    });
  });

  it("captures only approved UTM parameters", () => {
    expect(
      getUtmContext(
        "?utm_source=instagram&utm_medium=social&utm_campaign=proprietarios&utm_content=reel-01&email=x",
      ),
    ).toEqual({
      utm_source: "instagram",
      utm_medium: "social",
      utm_campaign: "proprietarios",
      utm_content: "reel-01",
    });
  });
});

describe("owner intent classification", () => {
  it.each([
    ["Colocar meu imóvel para alugar", "rental_listing"],
    ["Quero vender meu imóvel", "sale_listing"],
    ["Descubra quanto vale seu imóvel", "property_evaluation"],
    ["Administração de imóveis", "property_management"],
  ])("maps %s to %s", (label, expected) => {
    expect(getOwnerInterestType(label)).toBe(expected);
  });

  it("does not classify a buyer rental CTA as an owner lead", () => {
    expect(getOwnerInterestType("Quero alugar")).toBeNull();
  });
});

describe("event delivery", () => {
  it("sends a sanitized event only after analytics consent", () => {
    trackEvent("whatsapp_click", {
      source: "property_card",
      message: "contato privado",
      email: "cliente@exemplo.com",
    });

    expect(window.dataLayer).toEqual([
      { event: "whatsapp_click", source: "property_card" },
    ]);
  });

  it("does not send an event without consent", () => {
    window.__topimobAnalyticsConsent = false;
    trackEvent("phone_click", { source: "footer" });
    expect(window.dataLayer).toEqual([]);
  });

  it("deduplicates page views and keeps approved campaign context", () => {
    track.pageView("/imoveis", "Imóveis");
    track.pageView("/imoveis", "Imóveis");

    expect(window.dataLayer).toEqual([
      {
        event: "page_view",
        page_path: "/imoveis",
        page_title: "Imóveis",
        utm_source: "google",
        utm_medium: "cpc",
      },
    ]);
  });

  it("records owner evaluation leads without identifying fields", () => {
    track.ownerLead("property_evaluation", "legacy_form");

    expect(window.dataLayer).toEqual([
      {
        event: "owner_lead",
        owner_interest_type: "property_evaluation",
        source: "legacy_form",
      },
      { event: "valuation_request", source: "legacy_form" },
    ]);
  });

  it("keeps the remaining interaction taxonomy available to the UI", () => {
    track.whatsappClick("assistant");
    track.phoneClick("footer");
    track.emailClick("footer");
    track.socialClick("instagram", "footer");
    track.assistantOpen();
    track.assistantIntent("buy");
    track.propertyCardClick(12, "/imovel/exemplo", "venda");
    track.propertyView(12, "/imovel/exemplo", "venda", 500000);
    track.propertySearch("filters", { listing_type: "venda" });
    track.filterChange("venda");
    track.leadSubmit("contact", { lead_category: "contact" });
    track.ownerInterest("sale_listing", "cta");
    track.toolUse("simulador");
    track.ctaClick("avaliar", "home");
    track.outboundClick("https://exemplo.com", "parceiro");

    expect(window.dataLayer?.map((event) => event.event)).toEqual([
      "whatsapp_click",
      "phone_click",
      "email_click",
      "social_click",
      "assistant_open",
      "assistant_intent",
      "property_card_click",
      "property_view",
      "property_search",
      "filter_change",
      "lead_submit",
      "owner_interest",
      "tool_use",
      "cta_click",
      "outbound_click",
    ]);
  });
});
