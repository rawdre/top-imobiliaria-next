"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FileSpreadsheet, Gift, Lock, Phone } from "lucide-react";

const navLinks = [
  { label: "Comprar", href: "/#imoveis" },
  { label: "Alugar", href: "/#imoveis" },
  { label: "Todos os Imóveis", href: "/#imoveis" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Consórcio x Financiamento", href: "/#consorcio", icon: FileSpreadsheet },
  { label: "Indique e Ganhe", href: "/#programa-indicacao", icon: Gift },
  { label: "Sobre", href: "/#sobre" },
  { label: "Contato", href: "/#contato" },
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

  // Lock body scroll while the mobile drawer is open so the underlying page
  // doesn't scroll behind the menu.
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="topimob-header"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? "10px 0" : "16px 0",
          background: scrolled
            ? "rgba(15,26,46,0.95)"
            : "rgba(15,26,46,0.45)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.15)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.08)"
            : "1px solid rgba(255,255,255,0.04)",
          transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div className="topimob-header-inner">
          {/* Logo */}
          <Link href="/" className="topimob-logo" onClick={() => setMenuOpen(false)}>
            <Image
              src="/assets/top-imobiliaria/icon-square.jpg"
              alt="Top Imobiliária"
              width={40}
              height={40}
              className="topimob-logo-img"
              priority
            />
            <span className="topimob-logo-text">
              Top <span style={{ color: "#D32F2F" }}>Imobiliária</span>
            </span>
          </Link>

          {/* Desktop Nav (hidden on mobile via CSS) */}
          <nav className="topimob-nav-desktop" aria-label="Navegação principal">
            {navLinks.slice(0, 6).map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                whileHover={{ color: "#D32F2F" }}
                style={{
                  color: "rgba(255,255,255,0.85)",
                  fontSize: 14,
                  fontWeight: 500,
                  position: "relative",
                  padding: "8px 0",
                }}
              >
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                  {"icon" in link && link.icon ? <link.icon size={14} /> : null}
                  {link.label}
                </span>
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
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><Lock size={13} /> Admin</span>
            </motion.a>
            <motion.a
              href="/#contato"
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
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><Phone size={15} /> Contato</span>
            </motion.a>
          </nav>

          {/* Mobile toggle (shown on mobile via CSS) */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="topimob-burger"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="topimob-mobile-drawer"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="topimob-burger-line"
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1 }}
              transition={{ duration: 0.2 }}
              className="topimob-burger-line"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="topimob-burger-line"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer — full-width, slides down from the header */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.45)",
                zIndex: 998,
                backdropFilter: "blur(2px)",
              }}
              aria-hidden="true"
            />
            <motion.div
              id="topimob-mobile-drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Menu de navegação"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
              style={{
                position: "fixed",
                top: scrolled ? 60 : 72,
                left: 12,
                right: 12,
                background: "linear-gradient(180deg,#0F1A2E,#1B2A4A)",
                borderRadius: 20,
                boxShadow: "0 24px 60px rgba(0,0,0,0.4)",
                border: "1px solid rgba(255,255,255,0.08)",
                padding: "20px 22px 24px",
                zIndex: 999,
                maxHeight: "calc(100vh - 90px)",
                overflowY: "auto",
              }}
            >
              <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 + i * 0.04 }}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      color: "rgba(255,255,255,0.92)",
                      fontSize: 16,
                      fontWeight: 600,
                      padding: "14px 12px",
                      borderRadius: 12,
                      borderBottom: "1px solid rgba(255,255,255,0.04)",
                    }}
                  >
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                      {"icon" in link && link.icon ? <link.icon size={16} /> : null}
                      {link.label}
                    </span>
                  </motion.a>
                ))}
              </nav>

              <div style={{ display: "flex", gap: 10, marginTop: 18, flexWrap: "wrap" }}>
                <motion.a
                  href="/#contato"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 + navLinks.length * 0.04 }}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    flex: 1,
                    minWidth: 160,
                    textAlign: "center",
                    background: "linear-gradient(135deg,#D32F2F,#B71C1C)",
                    color: "#fff",
                    padding: "14px 18px",
                    borderRadius: 50,
                    fontWeight: 700,
                    fontSize: 14,
                    boxShadow: "0 8px 22px rgba(211,47,47,0.32)",
                  }}
                >
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><Phone size={16} /> Falar Conosco</span>
                </motion.a>
                <motion.a
                  href={ADMIN_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + navLinks.length * 0.04 }}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: 12,
                    fontWeight: 600,
                    padding: "12px 18px",
                    borderRadius: 50,
                    border: "1px solid rgba(255,255,255,0.18)",
                    letterSpacing: "0.4px",
                    textTransform: "uppercase",
                  }}
                >
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><Lock size={14} /> Admin</span>
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Responsive layout via real CSS media queries — more reliable than
          Tailwind's responsive variants on motion components, and it lets us
          tune the breakpoint to where the header actually breaks (~860px). */}
      <style>{`
        .topimob-header-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }
        .topimob-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          min-width: 0;
        }
        .topimob-logo-img {
          border-radius: 10px;
          object-fit: cover;
          box-shadow: 0 8px 20px rgba(0,0,0,0.18);
        }
        .topimob-logo-text {
          font-size: 20px;
          font-weight: 700;
          color: #fff;
          font-family: var(--font-jakarta), "Plus Jakarta Sans", sans-serif;
          white-space: nowrap;
        }
        .topimob-nav-desktop {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .topimob-burger {
          display: none;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 12px;
          cursor: pointer;
          padding: 10px;
          width: 44px;
          height: 44px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          flex-shrink: 0;
        }
        .topimob-burger:hover {
          background: rgba(255,255,255,0.14);
        }
        .topimob-burger-line {
          width: 22px;
          height: 2px;
          background: #fff;
          border-radius: 2px;
          display: block;
          transform-origin: center;
        }

        /* Below 900px: hide desktop nav, show hamburger */
        @media (max-width: 900px) {
          .topimob-nav-desktop { display: none; }
          .topimob-burger { display: flex; }
          .topimob-logo-text { font-size: 18px; }
        }

        /* Tighter on narrow phones — abbreviate the wordmark */
        @media (max-width: 380px) {
          .topimob-header-inner { padding: 0 16px; }
          .topimob-logo-text { font-size: 16px; }
        }
      `}</style>
    </>
  );
}
