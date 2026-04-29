"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, y: 18, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.92 }}
          whileHover={{ y: -3, scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          aria-label="Voltar ao topo"
          style={{
            position: "fixed",
            right: 28,
            bottom: 104,
            width: 48,
            height: 48,
            borderRadius: "50%",
            border: "1px solid rgba(27,42,74,0.14)",
            background: "rgba(255,255,255,0.96)",
            color: "#1B2A4A",
            boxShadow: "0 12px 30px rgba(27,42,74,0.16)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 9998,
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          <ArrowUp size={20} strokeWidth={2.2} />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
