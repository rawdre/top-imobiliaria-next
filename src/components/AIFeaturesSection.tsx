"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  { icon: "💬", title: "Atendimento Inteligente 24h", desc: "Respondemos suas dúvidas a qualquer hora com rapidez e precisão via WhatsApp." },
  { icon: "📅", title: "Agendamento Automático", desc: "Agende visitas online de forma simples, sem esperar horário comercial." },
  { icon: "🔔", title: "Alertas Personalizados", desc: "Receba notificações assim que surgir um imóvel que combina com o seu perfil." },
  { icon: "🎯", title: "Match de Imóveis", desc: "Nossa tecnologia encontra o imóvel certo para você com base nas suas preferências." },
];

export default function AIFeaturesSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="ia"
      style={{
        padding: "100px 0",
        background: "linear-gradient(135deg,#0F1A2E,#1B2A4A)",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Star-like radial dots */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `
          radial-gradient(2px 2px at 20px 30px, rgba(255,255,255,0.1), transparent),
          radial-gradient(2px 2px at 40px 70px, rgba(211,47,47,0.1), transparent),
          radial-gradient(1px 1px at 90px 40px, rgba(255,255,255,0.08), transparent)
        `,
        backgroundRepeat: "repeat",
        backgroundSize: "100px 100px",
        opacity: 0.5,
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 600, color: "#EF5350", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: 12 }}>
            <span style={{ width: 32, height: 2, background: "#EF5350", borderRadius: 2, display: "inline-block" }} />
            Tecnologia a Seu Favor
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 700, color: "#fff", marginBottom: 16, fontFamily: "var(--font-jakarta)" }}>
            Inovação que simplifica sua vida
          </h2>
          <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
            Combinamos décadas de experiência com tecnologia moderna para oferecer a melhor experiência imobiliária.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 24 }}>
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{
                y: -6,
                rotateX: 8,
                background: "rgba(255,255,255,0.1)",
                borderColor: "rgba(211,47,47,0.25)",
                boxShadow: "0 12px 40px rgba(0,0,0,0.15), 0 4px 16px rgba(211,47,47,0.2)",
              }}
              style={{
                background: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 24,
                padding: "36px 28px",
                position: "relative",
                overflow: "hidden",
                transformStyle: "preserve-3d",
                perspective: 800,
                cursor: "default",
              }}
            >
              {/* Top accent line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.4 }}
                style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 3,
                  background: "linear-gradient(90deg,#D32F2F,#EF5350)",
                  transformOrigin: "left",
                }}
              />

              <div style={{
                width: 56, height: 56,
                background: "linear-gradient(135deg,rgba(211,47,47,0.15),rgba(211,47,47,0.05))",
                borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 28, marginBottom: 20,
              }}>
                {feature.icon}
              </div>

              <h3 style={{ fontSize: "1.1rem", fontWeight: 600, color: "#fff", marginBottom: 10, fontFamily: "var(--font-jakarta)" }}>
                {feature.title}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
