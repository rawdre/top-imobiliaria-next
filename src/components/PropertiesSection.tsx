"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase, type Property } from "@/lib/supabase";
import Image from "next/image";

const WA_NUMBER = "556130424344"; // Top Imobiliária — matches live site

// Gallery entries are mixed-shape in Supabase: legacy rows store strings,
// newer rows store {url, name, path}. Pull the first usable URL out.
function galleryFirstUrl(gallery: Property["gallery"]): string | null {
  for (const entry of gallery ?? []) {
    if (typeof entry === "string" && entry.length > 0) return entry;
    if (entry && typeof entry === "object" && typeof entry.url === "string" && entry.url.length > 0) {
      return entry.url;
    }
  }
  return null;
}

function PropertyCard({ property, index }: { property: Property; index: number }) {
  const imgSrc = galleryFirstUrl(property.gallery);
  const isRent = property.listing_type === "aluguel";
  const price = property.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{
        y: -12,
        rotateX: 5,
        rotateY: 2,
        boxShadow: "0 20px 60px rgba(27,42,74,0.2)",
        borderColor: "rgba(211,47,47,0.2)",
      }}
      style={{
        background: "#fff",
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: "0 4px 24px rgba(27,42,74,0.10)",
        border: "1px solid #EEF1F6",
        position: "relative",
        transformStyle: "preserve-3d",
        perspective: 1000,
        cursor: "pointer",
      }}
    >
      {/* Image */}
      <div style={{ height: 220, position: "relative", overflow: "hidden", background: "#EEF1F6" }}>
        {imgSrc ? (
          <Image
            src={imgSrc}
            alt={property.title}
            fill
            // Cards live in a 1/2/3-column responsive grid (min 340px). Hint to next/image
            // so it picks the right size variant per breakpoint.
            sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
            // First card is above the fold; tell next/image to load it eager so it isn't
            // flagged as a slow LCP.
            priority={index === 0}
            style={{ objectFit: "cover", transition: "transform 0.6s ease" }}
          />
        ) : (
          <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg,#1B2A4A,#243656)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48 }}>
            🏠
          </div>
        )}

        {/* Tag */}
        <span style={{
          position: "absolute", top: 16, left: 16,
          padding: "6px 14px", borderRadius: 50, fontSize: 12, fontWeight: 600, zIndex: 2,
          background: isRent ? "rgba(34,197,94,0.9)" : "rgba(59,130,246,0.9)",
          color: "#fff",
        }}>
          {isRent ? "🔑 Aluguel" : "🏡 Venda"}
        </span>

        {/* Fav button */}
        <motion.button
          whileHover={{ scale: 1.1, background: "#D32F2F", color: "#fff" }}
          whileTap={{ scale: 0.9 }}
          style={{
            position: "absolute", top: 16, right: 16, zIndex: 3,
            width: 36, height: 36, background: "rgba(255,255,255,0.9)",
            borderRadius: "50%", border: "none", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 18, boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            backdropFilter: "blur(8px)",
          }}
          aria-label="Favoritar"
        >
          🤍
        </motion.button>

        {/* Price overlay */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          padding: 16, background: "linear-gradient(to top,rgba(0,0,0,0.8),transparent)", zIndex: 2,
        }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: "#fff", textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>
            {price}
            {isRent && <small style={{ fontSize: 13, fontWeight: 400, opacity: 0.8 }}>/mês</small>}
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: 20 }}>
        {/* Title — matches live card prominence */}
        {property.title ? (
          <div style={{ fontSize: 15, fontWeight: 700, color: "#1B2A4A", marginBottom: 8, lineHeight: 1.3, fontFamily: "var(--font-jakarta)" }}>
            {property.title}
          </div>
        ) : null}

        <div style={{ fontSize: 14, color: "#5A6478", marginBottom: 12, display: "flex", alignItems: "center", gap: 6 }}>
          📍 {property.address}
        </div>

        <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
          <span style={{ fontSize: 13, color: "#5A6478" }}>🛏️ <strong style={{ color: "#2C3345" }}>{property.bedrooms}</strong> qtos</span>
          <span style={{ fontSize: 13, color: "#5A6478" }}>🚿 <strong style={{ color: "#2C3345" }}>{property.bathrooms}</strong> bans</span>
          <span style={{ fontSize: 13, color: "#5A6478" }}>📐 <strong style={{ color: "#2C3345" }}>{property.area_m2}m²</strong></span>
        </div>

        {/* Ver Detalhes — opens the legacy property modal injected from /legacy/index.html */}
        <motion.button
          type="button"
          onClick={() => {
            const w = window as unknown as { verDetalhes?: (id: string) => void };
            if (typeof w.verDetalhes === "function") w.verDetalhes(property.id);
          }}
          whileHover={{ y: -1, background: "#EEF1F6" }}
          whileTap={{ scale: 0.98 }}
          style={{
            display: "block",
            width: "100%",
            marginBottom: 12,
            padding: "10px 14px",
            borderRadius: 50,
            background: "#F8F9FC",
            color: "#1B2A4A",
            fontSize: 13,
            fontWeight: 600,
            border: "1px solid #D8DDE8",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          Ver Detalhes →
        </motion.button>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <motion.a
            href={`https://wa.me/${WA_NUMBER}?text=Olá! Vi o imóvel ${property.title} e tenho interesse.`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 4,
              padding: "8px 14px", borderRadius: 50, background: "#25D366",
              color: "#fff", fontSize: 12, fontWeight: 600, border: "none", cursor: "pointer",
            }}
          >
            💬 WhatsApp
          </motion.a>
          <motion.button
            type="button"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 4,
              padding: "8px 14px", borderRadius: 50, background: "#1B2A4A",
              color: "#fff", fontSize: 12, fontWeight: 600, border: "none", cursor: "pointer",
            }}
          >
            📅 Agendar Visita
          </motion.button>
          <motion.button
            type="button"
            onClick={() => {
              const w = window as unknown as { compartilhar?: (id: string) => void };
              if (typeof w.compartilhar === "function") w.compartilhar(property.id);
            }}
            whileHover={{ scale: 1.05, y: -2, background: "#EEF1F6" }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 4,
              padding: "8px 14px", borderRadius: 50, background: "transparent",
              color: "#5A6478", fontSize: 12, fontWeight: 600,
              border: "1px solid #D8DDE8", cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            ↗ Compartilhar
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default function PropertiesSection() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "aluguel" | "venda">("all");

  useEffect(() => {
    async function fetchProperties() {
      try {
        // Pull featured + active first; if empty, fall back to active.
        // Fields match the live Supabase schema (listing_type, is_featured, gallery, area_m2).
        const featured = await supabase
          .from("properties")
          .select("*")
          .eq("is_featured", true)
          .eq("is_active", true)
          .order("created_at", { ascending: false })
          .limit(6);

        let rows = featured.data ?? [];
        if (rows.length === 0) {
          const fallback = await supabase
            .from("properties")
            .select("*")
            .eq("is_active", true)
            .order("created_at", { ascending: false })
            .limit(6);
          rows = fallback.data ?? [];
        }
        setProperties(rows);
      } catch {
        // silently fail — show empty state
      } finally {
        setLoading(false);
      }
    }
    fetchProperties();
  }, []);

  // Allow other components (e.g., the SiteAssistant bot) to set the filter via
  // a CustomEvent so they don't have to reach into our state directly.
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<"all" | "aluguel" | "venda">).detail;
      if (detail === "all" || detail === "aluguel" || detail === "venda") {
        setFilter(detail);
      }
    };
    window.addEventListener("topimob:set-filter", handler as EventListener);
    return () => window.removeEventListener("topimob:set-filter", handler as EventListener);
  }, []);

  const filtered = filter === "all" ? properties : properties.filter((p) => p.listing_type === filter);

  return (
    <section id="imoveis" style={{ padding: "100px 0", background: "linear-gradient(135deg,#F8F9FC,#F0F4F8)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 40 }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 600, color: "#D32F2F", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: 12 }}>
            <span style={{ width: 32, height: 2, background: "#D32F2F", borderRadius: 2, display: "inline-block" }} />
            Imóveis em Destaque
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 700, color: "#1B2A4A", marginBottom: 16, fontFamily: "var(--font-jakarta)" }}>
            Encontre seu imóvel ideal
          </h2>

          {/* Filter tabs */}
          <div style={{ display: "inline-flex", gap: 0, background: "#EEF1F6", borderRadius: 50, overflow: "hidden", marginTop: 8 }}>
            {(["all", "aluguel", "venda"] as const).map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setFilter(tab)}
                whileTap={{ scale: 0.97 }}
                style={{
                  padding: "10px 24px",
                  border: "none",
                  borderRadius: 50,
                  fontWeight: 600,
                  fontSize: 14,
                  cursor: "pointer",
                  fontFamily: "inherit",
                  transition: "all 0.25s ease",
                  background: filter === tab ? "#D32F2F" : "transparent",
                  color: filter === tab ? "#fff" : "#5A6478",
                }}
              >
                {tab === "all" ? "Todos" : tab === "aluguel" ? "🔑 Alugar" : "🏡 Comprar"}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Grid */}
        {loading ? (
          <div style={{ textAlign: "center", padding: "80px 0", color: "#5A6478", fontSize: 16 }}>
            <div style={{ fontSize: 40, marginBottom: 16 }}>🔍</div>
            Carregando imóveis...
          </div>
        ) : filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0", color: "#5A6478" }}>
            <div style={{ fontSize: 40, marginBottom: 16 }}>🏠</div>
            <p>Nenhum imóvel encontrado nessa categoria.</p>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(340px,1fr))", gap: 24 }}
            >
              {filtered.map((p, i) => (
                <PropertyCard key={p.id} property={p} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginTop: 48 }}
        >
          <motion.a
            href="/buildings.html"
            whileHover={{ scale: 1.05, y: -3, boxShadow: "0 12px 32px rgba(27,42,74,0.2)" }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "16px 36px", borderRadius: 50,
              background: "linear-gradient(135deg,#1B2A4A,#243656)",
              color: "#fff", fontSize: "1rem", fontWeight: 700,
              boxShadow: "0 8px 24px rgba(27,42,74,0.2)",
            }}
          >
            🏠 Ver Todos os Imóveis
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
