"use client";

import { useEffect, useState } from "react";

const SECTION_IDS = [
  "depoimentos",
  "clientes-cadastrados",
  // "sobre" intentionally excluded — React StatsSection already owns #sobre.
  "proprietarios",
  "garantias-locaticias",
  "simulador",
  "consorcio",
  "administracao",
  "alugar",
  "predios",
  "programa-indicacao",
  "blog",
  "corretores",
  "venda",
  "procurando",
  "parkway",
  "contato",
  // Modal markup that the legacy verDetalhes()/openPropertyModal() functions
  // mount content into. Without this in the DOM, "Ver Detalhes" silently no-ops.
  "propertyModal",
];

export default function LegacySectionsFromHtml() {
  const [html, setHtml] = useState("");

  useEffect(() => {
    let active = true;

    const loadSections = async () => {
      try {
        const response = await fetch("/legacy/index.html", { cache: "no-store" });
        const source = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(source, "text/html");

        const chunks = SECTION_IDS.map((id) => doc.getElementById(id)?.outerHTML ?? "")
          .filter(Boolean);

        if (active) {
          setHtml(chunks.join("\n"));
        }
      } catch {
        if (active) {
          setHtml("");
        }
      }
    };

    loadSections();

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!html) return;

    if (!document.querySelector('script[data-legacy-home-script="true"]')) {
      const configScript = document.createElement("script");
      configScript.src = "/assets/top-imobiliaria/supabase-config.js";
      configScript.async = false;

      const supabaseScript = document.createElement("script");
      supabaseScript.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
      supabaseScript.async = false;

      const legacyScript = document.createElement("script");
      legacyScript.src = "/assets/top-imobiliaria/legacy-home-inline.js";
      legacyScript.async = false;
      legacyScript.dataset.legacyHomeScript = "true";

      configScript.onload = () => {
        document.body.appendChild(supabaseScript);
      };
      supabaseScript.onload = () => {
        document.body.appendChild(legacyScript);
      };

      document.body.appendChild(configScript);
    }
  }, [html]);

  if (!html) return null;

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
