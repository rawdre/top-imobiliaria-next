"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const WA_URL = "https://wa.me/5561999999999?text=Olá! Gostaria de saber mais sobre os imóveis disponíveis.";

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.12, boxShadow: "0 8px 30px rgba(37,211,102,0.5)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          aria-label="Falar no WhatsApp"
          style={{
            position: "fixed",
            bottom: 28,
            right: 28,
            zIndex: 9999,
            width: 60,
            height: 60,
            borderRadius: "50%",
            background: "#25D366",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 28,
            boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
            color: "#fff",
            textDecoration: "none",
          }}
        >
          💬
        </motion.a>
      )}
    </AnimatePresence>
  );
}
