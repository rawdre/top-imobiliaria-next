"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  { icon: "🔑", title: "Locação Residencial", desc: "Aluguel de apartamentos, casas e kitnets com segurança e garantia locatícia." },
  { icon: "🏢", title: "Imóveis Comerciais", desc: "Salas, lojas e pontos comerciais em Águas Claras e toda a DF." },
  { icon: "💰", title: "Venda de Imóveis", desc: "Avaliação gratuita e venda rápida com atendimento personalizado." },
  { icon: "🏦", title: "Financiamento", desc: "Auxílio completo no financiamento imobiliário junto aos principais bancos." },
  { icon: "📋", title: "Consórcio Imobiliário", desc: "A melhor forma de comprar seu imóvel sem juros e com parcelas acessíveis." },
  { icon: "📊", title: "Avaliação de Imóveis", desc: "Descubra o valor real do seu imóvel com nossa análise de mercado." },
];

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{
        y: -6,
        boxShadow: "0 12px 48px rgba(27,42,74,0.15)",
        borderColor: "transparent",
      }}
      style={{
        background: "#fff",
        border: "1px solid #EEF1F6",
        borderRadius: 16,
        padding: "32px 24px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
      }}
    >
      {/* Bottom accent bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.4 }}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 3,
          background: "linear-gradient(90deg,#D32F2F,#1B2A4A)",
          transformOrigin: "left",
        }}
      />

      <span style={{ fontSize: 40, display: "block", marginBottom: 16 }}>{service.icon}</span>
      <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "#1B2A4A", marginBottom: 8, fontFamily: "var(--font-jakarta)" }}>
        {service.title}
      </h3>
      <p style={{ fontSize: "0.85rem", color: "#5A6478", lineHeight: 1.5 }}>{service.desc}</p>
    </motion.div>
  );
}

export default function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="servicos"
      style={{ padding: "100px 0", background: "#fff" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 600, color: "#D32F2F", textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: 12 }}>
            <span style={{ width: 32, height: 2, background: "#D32F2F", borderRadius: 2, display: "inline-block" }} />
            Nossos Serviços
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 700, color: "#1B2A4A", marginBottom: 16, fontFamily: "var(--font-jakarta)" }}>
            Tudo o que você precisa em um só lugar
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#5A6478", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
            Da locação à venda, do financiamento ao consórcio — somos especialistas em encontrar a melhor solução para você.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 20 }}>
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
