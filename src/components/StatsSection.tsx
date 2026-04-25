"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { num: 34, suffix: "+", label: "Anos de Experiência" },
  { num: 500, suffix: "+", label: "Imóveis Administrados" },
  { num: 0, suffix: "%", label: "Taxa de Inadimplência" },
  { num: 5000, suffix: "+", label: "Clientes Atendidos" },
];

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="sobre"
      style={{
        padding: "100px 0",
        background: "linear-gradient(135deg,#F8F9FC,#F0F4F8)",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 600, color: "#D32F2F", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: 12 }}>
            <span style={{ width: 32, height: 2, background: "#D32F2F", borderRadius: 2, display: "inline-block" }} />
            Sobre Nós
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 700, color: "#1B2A4A", marginBottom: 16, fontFamily: "var(--font-jakarta)" }}>
            34 anos cuidando do seu patrimônio
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#5A6478", lineHeight: 1.8, maxWidth: 720, margin: "0 auto" }}>
            Desde 1992 em Águas Claras, somos referência em locação e venda de imóveis no Distrito Federal.
            Nossa equipe especializada garante segurança, agilidade e transparência em cada negociação.
          </p>
        </motion.div>

        {/* Stats */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 48 }}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              style={{ textAlign: "center" }}
            >
              <div style={{ fontSize: "clamp(2.2rem,4vw,3.2rem)", fontWeight: 700, color: "#D32F2F", lineHeight: 1, fontFamily: "var(--font-jakarta)" }}>
                <CountUp target={stat.num} suffix={stat.suffix} active={inView} />
              </div>
              <div style={{ fontSize: "0.85rem", color: "#5A6478", marginTop: 8, fontWeight: 500 }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
