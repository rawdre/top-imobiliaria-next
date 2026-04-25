"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
              <a href="tel:+5561999999999" style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", display: "flex", alignItems: "center", gap: 8 }}>
                📞 (61) 9999-9999
              </a>
              <a href="mailto:contato@topimobiliariadf.com.br" style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", display: "flex", alignItems: "center", gap: 8 }}>
                ✉️ contato@topimobiliariadf.com.br
              </a>
              <span style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", display: "flex", alignItems: "center", gap: 8 }}>
                📍 Águas Claras, Brasília - DF
              </span>
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

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 32, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>
            © {new Date().getFullYear()} Top Imobiliária DF. Todos os direitos reservados.
          </p>
          <div style={{ display: "flex", gap: 16 }}>
            <a href="#" style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>Política de Privacidade</a>
            <a href="#" style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
