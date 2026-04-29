"use client";

import { motion, type Variants } from "framer-motion";
import { Award, FileSpreadsheet, Gift, Home, KeyRound, Landmark, MapPinned, ShieldCheck, Star } from "lucide-react";
import { MAPS_LINK_URL } from "@/lib/contact";

const trustBadges = [
  { icon: Award, num: "34+", label: "Anos de Experiência" },
  { icon: Home, num: "500+", label: "Imóveis Administrados" },
  { icon: ShieldCheck, num: "0%", label: "Taxa de Inadimplência" },
  { icon: Star, num: "5.0", label: "Avaliação Google" },
];

const heroCards = [
  { icon: KeyRound, label: "Alugar Imóvel", href: "#imoveis", sub: "Ver disponíveis" },
  { icon: Landmark, label: "Comprar Imóvel", href: "#imoveis", sub: "Ver à venda" },
  { icon: FileSpreadsheet, label: "Consórcio", href: "#consorcio", sub: "Simular agora" },
  { icon: Gift, label: "Indique e Ganhe", href: "#programa-indicacao", sub: "Saiba mais" },
  { icon: MapPinned, label: "Localização", href: MAPS_LINK_URL, sub: "Ver como chegar", external: true },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background:
          "linear-gradient(165deg,rgba(15,26,46,.55) 0%,rgba(27,42,74,.45) 40%,rgba(36,54,86,.40) 100%), url('/assets/top-imobiliaria/hero-aguas-claras-day.jpg') center/cover no-repeat",
        overflow: "hidden",
        paddingTop: 140,
        paddingBottom: 80,
      }}
    >
      {/* Animated gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(-45deg,rgba(211,47,47,0.08),rgba(15,26,46,0.08),rgba(211,47,47,0.04),rgba(27,42,74,0.08))",
          backgroundSize: "400% 400%",
          animation: "gradientShift 8s ease infinite",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Floating decorative shapes */}
      <div
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "#D32F2F",
          opacity: 0.04,
          top: "10%",
          right: "-5%",
          animation: "float 20s ease-in-out infinite",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 250,
          height: 250,
          borderRadius: "50%",
          background: "#D32F2F",
          opacity: 0.04,
          bottom: "20%",
          left: "-3%",
          animation: "float 25s ease-in-out infinite reverse",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Bottom fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 120,
          background: "linear-gradient(to top,#F8F9FC,transparent)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 3, width: "100%" }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(15,26,46,0.44)",
              border: "1px solid rgba(255,255,255,0.18)",
              borderRadius: 50,
              padding: "10px 22px",
              fontSize: 13,
              color: "rgba(255,255,255,0.92)",
              fontWeight: 600,
              marginBottom: 24,
              boxShadow: "0 8px 22px rgba(0,0,0,0.18)",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                background: "#D32F2F",
                borderRadius: "50%",
                display: "inline-block",
                animation: "pulse-dot 2s infinite",
              }}
            />
            <Award size={14} /> Especialistas em Imóveis desde 1992
          </motion.div>

          {/* H1 */}
          <motion.h1
            variants={itemVariants}
            style={{
              fontSize: "clamp(2.4rem,5vw,3.8rem)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.08,
              marginBottom: 16,
              letterSpacing: "-0.04em",
              fontFamily: "var(--font-jakarta)",
            }}
          >
            Especialistas em Imóveis
            <span style={{ display: "block" }}>
              em <span style={{ color: "#D32F2F" }}>Águas Claras</span>{" "}
              <span style={{ color: "rgba(255,255,255,0.72)" }}>– DF</span>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: "clamp(1.1rem,2.4vw,1.45rem)",
              fontWeight: 700,
              color: "#fff",
              marginBottom: 10,
              maxWidth: 680,
            }}
          >
            Descubra o valor do seu imóvel no{" "}
            <strong style={{ color: "#D32F2F" }}>
              Distrito Federal <span style={{ whiteSpace: "nowrap" }}>em segundos</span>
            </strong>
          </motion.p>

          <motion.p
            variants={itemVariants}
            style={{ fontSize: "0.98rem", color: "rgba(255,255,255,0.78)", lineHeight: 1.5, maxWidth: 560, marginBottom: 32 }}
          >
            Simule, compare e tome a melhor decisão com quem entende de imóveis há mais de 34 anos.
          </motion.p>

          {/* CTA Cards */}
          <motion.div
            variants={containerVariants}
            className="topimob-hero-cards"
            style={{ width: "100%", maxWidth: 920, marginBottom: 32 }}
          >
            {heroCards.map((card) => (
              <motion.a
                key={card.label}
                href={card.href}
                target={card.external ? "_blank" : undefined}
                rel={card.external ? "noopener noreferrer" : undefined}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.04,
                  rotateX: 8,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.25), 0 8px 16px rgba(211,47,47,0.2)",
                }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  borderRadius: 16,
                  padding: "20px 16px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 8,
                  cursor: "pointer",
                  transformStyle: "preserve-3d",
                  perspective: 800,
                }}
                className="topimob-hero-card"
              >
                <card.icon size={32} strokeWidth={1.9} />
                <span style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>{card.label}</span>
                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", fontWeight: 500 }}>{card.sub}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Owner CTA */}
          <motion.a
            variants={itemVariants}
            href="#proprietarios"
            whileHover={{ y: -3, boxShadow: "0 20px 42px rgba(211,47,47,0.38)" }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "16px 34px",
              borderRadius: 999,
              background: "linear-gradient(135deg,#D32F2F,#B71C1C)",
              color: "#fff",
              fontSize: "1rem",
              fontWeight: 800,
              boxShadow: "0 14px 34px rgba(211,47,47,0.28)",
              marginBottom: 40,
            }}
          >
            <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}><Home size={18} /> Vender ou Alugar Meu Imóvel</span>
          </motion.a>

          {/* Trust Badges */}
          <motion.div
            variants={containerVariants}
            style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}
          >
            {trustBadges.map((badge) => (
              <motion.div
                key={badge.label}
                variants={itemVariants}
                whileHover={{
                  y: -4,
                  rotateX: 10,
                  background: "rgba(255,255,255,0.12)",
                  borderColor: "rgba(211,47,47,0.3)",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.15), 0 4px 12px rgba(211,47,47,0.2)",
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 10,
                  padding: "12px 20px",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  transformStyle: "preserve-3d",
                  perspective: 500,
                  cursor: "default",
                }}
              >
                <badge.icon size={24} strokeWidth={1.9} />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: 18, fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>{badge.num}</span>
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.5px", fontWeight: 500 }}>
                    {badge.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <style>{`
        .topimob-hero-cards {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 12px;
        }
        .topimob-hero-card {
          min-height: 132px;
        }
        @media (max-width: 980px) {
          .topimob-hero-cards {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
        @media (max-width: 640px) {
          .topimob-hero-cards {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
      `}</style>
    </section>
  );
}
