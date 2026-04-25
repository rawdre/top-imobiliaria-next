"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Comprar", href: "#imoveis" },
  { label: "Alugar", href: "#imoveis" },
  { label: "Todos os Imóveis", href: "#imoveis" },
  { label: "Serviços", href: "#servicos" },
  { label: "🏠 Consórcio", href: "#consorcio" },
  { label: "🎁 Indique e Ganhe", href: "#programa-indicacao" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

// Admin shortcut — separate from public nav. Opens the legacy admin panel
// (lives under /public/admin) in a new tab so the public-site review flow
// isn't interrupted. Hits index.html directly because Next.js doesn't
// auto-resolve directory roots.
const ADMIN_HREF = "/admin/index.html";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? "10px 0" : "16px 0",
        background: scrolled
          ? "rgba(15,26,46,0.95)"
          : "rgba(15,26,46,0.05)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.15)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
        transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Image
            src="/assets/top-imobiliaria/icon-square.jpg"
            alt="Top Imobiliária"
            width={40}
            height={40}
            style={{ borderRadius: 10, objectFit: "cover", boxShadow: "0 8px 20px rgba(0,0,0,0.18)" }}
          />
          <span style={{ fontSize: 20, fontWeight: 700, color: "#fff", fontFamily: "var(--font-jakarta)" }}>
            Top <span style={{ color: "#D32F2F" }}>Imobiliária</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 28 }} className="hidden md:flex">
          {navLinks.slice(0, 6).map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              whileHover={{ color: "#D32F2F" }}
              style={{ color: "rgba(255,255,255,0.8)", fontSize: 14, fontWeight: 500, position: "relative", padding: "8px 0" }}
            >
              {link.label}
            </motion.a>
          ))}
          <motion.a
            href={ADMIN_HREF}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -1, color: "#fff", borderColor: "rgba(255,255,255,0.4)" }}
            whileTap={{ scale: 0.96 }}
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: 12,
              fontWeight: 600,
              padding: "6px 14px",
              borderRadius: 50,
              border: "1px solid rgba(255,255,255,0.18)",
              letterSpacing: "0.4px",
              textTransform: "uppercase",
            }}
            aria-label="Abrir painel administrativo"
            title="Painel administrativo"
          >
            🔒 Admin
          </motion.a>
          <motion.a
            href="#contato"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: "linear-gradient(135deg,#D32F2F,#B71C1C)",
              color: "#fff",
              padding: "10px 24px",
              borderRadius: 50,
              fontWeight: 600,
              fontSize: 14,
              boxShadow: "0 4px 20px rgba(211,47,47,0.3)",
            }}
          >
            📞 Contato
          </motion.a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          style={{ background: "none", border: "none", cursor: "pointer", padding: 8 }}
          aria-label="Menu"
        >
          <motion.div animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            style={{ width: 24, height: 2, background: "#fff", borderRadius: 2, marginBottom: 6 }} />
          <motion.div animate={{ opacity: menuOpen ? 0 : 1 }}
            style={{ width: 24, height: 2, background: "#fff", borderRadius: 2, marginBottom: 6 }} />
          <motion.div animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            style={{ width: 24, height: 2, background: "#fff", borderRadius: 2 }} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              background: "rgba(15,26,46,0.98)",
              backdropFilter: "blur(20px)",
              padding: "16px 24px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              overflow: "hidden",
            }}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setMenuOpen(false)}
                style={{ color: "rgba(255,255,255,0.85)", fontSize: 15, fontWeight: 500 }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href={ADMIN_HREF}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navLinks.length * 0.05 }}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: 13,
                fontWeight: 600,
                padding: "8px 14px",
                borderRadius: 50,
                border: "1px solid rgba(255,255,255,0.18)",
                alignSelf: "flex-start",
                letterSpacing: "0.4px",
                textTransform: "uppercase",
              }}
            >
              🔒 Admin
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
