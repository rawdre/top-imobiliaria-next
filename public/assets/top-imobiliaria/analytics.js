/* Top Imobiliária - consent-aware analytics bootstrap for Next and static pages. */
(function () {
  "use strict";

  var STORAGE_KEY = "topimob_cookie_preferences";
  var allowedUtmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
  var piiKey = /(^|_)(email|e-mail|phone|telephone|telefone|celular|whatsapp|name|nome|cpf|document|message|mensagem|address|endereco)(_|$)/i;

  function readPreferences() {
    try {
      return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "null");
    } catch {
      return null;
    }
  }

  function gtag() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(arguments);
  }

  function updateConsent(analytics, marketing) {
    window.__topimobAnalyticsConsent = Boolean(analytics);
    gtag("consent", "update", {
      analytics_storage: analytics ? "granted" : "denied",
      ad_storage: marketing ? "granted" : "denied",
      ad_user_data: marketing ? "granted" : "denied",
      ad_personalization: marketing ? "granted" : "denied",
    });
    window.dispatchEvent(new CustomEvent("topimob:consent", { detail: { analytics: Boolean(analytics), marketing: Boolean(marketing) } }));
  }

  function savePreferences(preferences) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
    updateConsent(preferences.analytics, preferences.marketing);
    if (preferences.analytics || preferences.marketing) loadGtm();
    if (preferences.analytics) sendPageView();
  }

  function sanitize(params) {
    var safe = {};
    Object.keys(params || {}).forEach(function (key) {
      var value = params[key];
      if (!piiKey.test(key) && value !== undefined && value !== null && String(value).length <= 160) {
        safe[key] = value;
      }
    });
    return safe;
  }

  function utms() {
    var query = new URLSearchParams(window.location.search);
    var values = {};
    allowedUtmKeys.forEach(function (key) {
      var value = query.get(key);
      if (value) values[key] = value.slice(0, 120);
    });
    return values;
  }

  function track(name, params) {
    if (!window.__topimobAnalyticsConsent) return;
    window.dataLayer = window.dataLayer || [];
    var payload = sanitize(params || {});
    payload.event = name;
    window.dataLayer.push(payload);
  }

  function sendPageView() {
    if (!window.__topimobAnalyticsConsent) return;
    var path = window.location.pathname + window.location.search;
    if (window.__topimobLastPageView === path) return;
    window.__topimobLastPageView = path;
    track("page_view", Object.assign({ page_path: path, page_title: document.title }, utms()));
  }

  function loadGtm() {
    if (window.__topimobGtmLoaded || !(window.__topimobAnalyticsConsent || (readPreferences() || {}).marketing)) return;
    window.__topimobGtmLoaded = true;
    fetch("/api/analytics-config")
      .then(function (response) { return response.ok ? response.json() : null; })
      .then(function (config) {
        if (!config || !config.gtmId || !/^GTM-[A-Z0-9]+$/i.test(config.gtmId)) return;
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
        var script = document.createElement("script");
        script.async = true;
        script.src = "https://www.googletagmanager.com/gtm.js?id=" + encodeURIComponent(config.gtmId);
        document.head.appendChild(script);
      })
      .catch(function () {
        window.__topimobGtmLoaded = false;
      });
  }

  function normalize(text) {
    return (text || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/\s+/g, " ")
      .trim();
  }

  function ownerInterestType(text) {
    if (/(quanto vale|avaliar meu imovel|avaliacao de imovel|avaliar preco)/.test(text)) return "property_evaluation";
    if (/(administracao de imoveis|administrar meu imovel)/.test(text)) return "property_management";
    if (/(colocar.*alugar|anunciar.*aluguel|alugar meu imovel)/.test(text)) return "rental_listing";
    if (/(colocar.*vender|anunciar.*venda|vender meu imovel)/.test(text)) return "sale_listing";
    return null;
  }

  function formEvent(form) {
    var id = form.id || "unnamed_form";
    var ownerType = id === "leadFormAluguelForm" ? "rental_listing" : id === "leadFormVendaForm" ? "sale_listing" : null;
    track("lead_submit", { form_id: id, lead_category: ownerType ? "owner" : "contact" });
    if (ownerType) {
      track("owner_lead", { owner_interest_type: ownerType, source: "form" });
      if (ownerType === "property_evaluation") track("valuation_request", { source: "form" });
    }
  }

  function handleClick(event) {
    var target = event.target && event.target.closest ? event.target.closest("a,button,[data-track-event]") : null;
    if (!target) return;
    var href = target.getAttribute("href") || "";
    var label = normalize(target.getAttribute("data-track-label") || target.textContent || "");
    var customEvent = target.getAttribute("data-track-event");

    if (customEvent) {
      track(customEvent, { source: target.getAttribute("data-track-source") || "site" });
      return;
    }
    if (/^(https?:)?\/\/(wa\.me|api\.whatsapp\.com|web\.whatsapp\.com)/i.test(href)) {
      track("whatsapp_click", { source: target.getAttribute("data-track-source") || "site" });
    } else if (/^tel:/i.test(href)) {
      track("phone_click", { source: "site" });
    } else if (/^mailto:/i.test(href)) {
      track("email_click", { source: "site" });
    } else if (/(instagram\.com|facebook\.com|linkedin\.com|youtube\.com|tiktok\.com)/i.test(href)) {
      var match = href.match(/(instagram|facebook|linkedin|youtube|tiktok)/i);
      track("social_click", { network: match ? match[1].toLowerCase() : "social", source: "site" });
    }

    var ownerType = ownerInterestType(label);
    if (ownerType) track("owner_interest", { owner_interest_type: ownerType, source: "cta" });
  }

  function createBanner() {
    if (document.getElementById("topimob-cookie-consent")) return;
    var panel = document.createElement("section");
    panel.id = "topimob-cookie-consent";
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-label", "Preferências de cookies");
    panel.innerHTML =
      '<style>' +
      '#topimob-cookie-consent{position:fixed;z-index:2147483647;right:16px;bottom:16px;max-width:430px;padding:20px;background:#10203d;color:#fff;border:1px solid rgba(255,255,255,.15);border-radius:10px;box-shadow:0 18px 48px rgba(10,20,45,.35);font:14px/1.5 Arial,sans-serif}' +
      '#topimob-cookie-consent p{margin:0 0 14px;color:#dbe5f5}#topimob-cookie-consent strong{display:block;margin-bottom:6px;font-size:16px}' +
      '#topimob-cookie-consent .topimob-cookie-actions{display:flex;gap:8px;flex-wrap:wrap}#topimob-cookie-consent button{border:0;border-radius:6px;padding:10px 12px;font:inherit;font-weight:700;cursor:pointer}' +
      '#topimob-cookie-accept{background:#d32f2f;color:#fff}#topimob-cookie-reject,#topimob-cookie-customize{background:#fff;color:#10203d}' +
      '#topimob-cookie-options{display:none;margin:14px 0;padding-top:12px;border-top:1px solid rgba(255,255,255,.18)}#topimob-cookie-options label{display:flex;gap:8px;margin:8px 0;align-items:center}' +
      '#topimob-cookie-consent a{color:#fff;text-decoration:underline}@media(max-width:520px){#topimob-cookie-consent{left:12px;right:12px;bottom:12px;max-width:none}}' +
      '</style>' +
      '<strong>Preferências de privacidade</strong>' +
      '<p>Usamos cookies necessários para o funcionamento do site. Com sua autorização, usamos cookies analíticos e de marketing para entender a navegação e melhorar o atendimento. <a href="/privacidade">Saiba mais</a>.</p>' +
      '<div id="topimob-cookie-options"><label><input id="topimob-cookie-analytics" type="checkbox"> Medição de audiência</label><label><input id="topimob-cookie-marketing" type="checkbox"> Marketing</label></div>' +
      '<div class="topimob-cookie-actions"><button id="topimob-cookie-accept" type="button">Aceitar opcionais</button><button id="topimob-cookie-reject" type="button">Recusar opcionais</button><button id="topimob-cookie-customize" type="button">Personalizar</button></div>';

    document.body.appendChild(panel);
    var options = panel.querySelector("#topimob-cookie-options");
    panel.querySelector("#topimob-cookie-accept").addEventListener("click", function () {
      savePreferences({ necessary: true, analytics: true, marketing: true, updatedAt: new Date().toISOString() });
      panel.remove();
    });
    panel.querySelector("#topimob-cookie-reject").addEventListener("click", function () {
      savePreferences({ necessary: true, analytics: false, marketing: false, updatedAt: new Date().toISOString() });
      panel.remove();
    });
    panel.querySelector("#topimob-cookie-customize").addEventListener("click", function () {
      if (options.style.display !== "block") {
        options.style.display = "block";
        return;
      }
      savePreferences({
        necessary: true,
        analytics: panel.querySelector("#topimob-cookie-analytics").checked,
        marketing: panel.querySelector("#topimob-cookie-marketing").checked,
        updatedAt: new Date().toISOString(),
      });
      panel.remove();
    });
  }

  window.topimobTrack = track;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || gtag;
  gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    wait_for_update: 500,
  });

  var preferences = readPreferences();
  if (preferences) {
    updateConsent(Boolean(preferences.analytics), Boolean(preferences.marketing));
    if (preferences.analytics || preferences.marketing) loadGtm();
    if (preferences.analytics) sendPageView();
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createBanner, { once: true });
  } else {
    createBanner();
  }

  document.addEventListener("click", handleClick, true);
  document.addEventListener("submit", function (event) { formEvent(event.target); }, true);
})();
