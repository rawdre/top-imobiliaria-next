"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  EMAIL,
  ADDRESS_SHORT,
  MAPS_EMBED_URL,
  MAPS_LINK_URL,
} from "@/lib/contact";

const quickLinks = [
  { label: "🔑 Alugar Imóvel", href: "#imoveis" },
  { label: "🏡 Comprar Imóvel", href: "#imoveis" },
  { label: "💰 Vender Imóvel", href: "#proprietarios" },
  { label: "📋 Consórcio", href: "#consorcio" },
  { label: "📊 Simulador", href: "#simulador" },
  { label: "🎁 Indique e Ganhe", href: "#programa-indicacao" },
];

const services = [
  { label: "Locação Residencial", href: "#servicos" },
  { label: "Imóveis Comerciais", href: "#servicos" },
  { label: "Financiamento", href: "#servicos" },
  { label: "Avaliação Gratuita", href: "#simulador" },
  { label: "Administração de Imóveis", href: "#administracao" },
];

export default function Footer() {
  return (
    <footer
      id="contato"
      style={{
        background: "linear-gradient(135deg,#0F1A2E,#1B2A4A)",
        color: "#fff",
        padding: "80px 0 32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle radial accent */}
      <div style={{
        position: "absolute", top: "-50%", right: "-20%",
        width: "60%", height: "200%",
        background: "radial-gradient(ellipse,rgba(211,47,47,0.04),transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: 48,
          marginBottom: 64,
        }}
          className="footer-grid"
        >
          {/* Brand col */}
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <Image
                src="/assets/top-imobiliaria/icon-square.jpg"
                alt="Top Imobiliária"
                width={40}
                height={40}
                style={{ borderRadius: 10, objectFit: "cover" }}
              />
              <span style={{ fontSize: 20, fontWeight: 700, fontFamily: "var(--font-jakarta)" }}>
                Top <span style={{ color: "#D32F2F" }}>Imobiliária</span>
              </span>
            </Link>
            <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, maxWidth: 340, marginBottom: 24 }}>
              Especialistas em imóveis em Águas Claras e Brasília DF desde 1992.
              Locação, venda e consultoria com garantia locatícia.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <a href={`tel:${PHONE_TEL}`} style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", display: "flex", alignItems: "center", gap: 8 }}>
                📞 {PHONE_DISPLAY}
              </a>
              <a href={`mailto:${EMAIL}`} style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", display: "flex", alignItems: "center", gap: 8 }}>
                ✉️ {EMAIL}
              </a>
              <a
                href={MAPS_LINK_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", display: "flex", alignItems: "center", gap: 8 }}
              >
                📍 {ADDRESS_SHORT}
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 style={{ fontSize: "0.85rem", fontWeight: 700, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: 20 }}>
              Links Rápidos
            </h4>
            <nav style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {quickLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ x: 4, color: "#D32F2F" }}
                  style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", display: "flex", alignItems: "center", gap: 6 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: "0.85rem", fontWeight: 700, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: 20 }}>
              Serviços
            </h4>
            <nav style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {services.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  whileHover={{ x: 4, color: "#D32F2F" }}
                  style={{ fontSize: 14, color: "rgba(255,255,255,0.65)" }}
                >
                  {s.label}
                </motion.a>
              ))}
            </nav>
          </div>
        </div>

        {/* Map block — Google embed showing Top Imobiliária location */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          style={{
            marginBottom: 56,
            borderRadius: 20,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
            backgro