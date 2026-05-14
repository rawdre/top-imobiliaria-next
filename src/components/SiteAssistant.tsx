"use client";

/**
 * SiteAssistant — "Topinho", Top Imobiliária's mascot bot.
 *
 * Always-visible corner bubble (bottom-left, opposite the WhatsApp FAB) that
 * opens a small popup with intent buttons. No LLM, no backend, no API key —
 * a decision tree tuned to the site's main visitor jobs:
 *   - Quero alugar          -> scroll to #imoveis + set rent filter
 *   - Quero comprar         -> scroll to #imoveis + set sale filter
 *   - Sou proprietário      -> scroll to #proprietarios
 *   - Avaliar meu imóvel    -> scroll to #simulador
 *   - Conhecer prédios      -> navigate to /buildings.html
 *   - Consórcio x financiamento -> scroll to #consorcio
 *   - Ler conteúdo          -> scroll to #blog
 *   - Falar no WhatsApp     -> external wa.me link
 *
 * The Alugar/Comprar buttons also broadcast a `topimob:set-filter` CustomEvent
 * that PropertiesSection listens for to flip its filter tab.
 *
 * Implementation note: deliberately avoids framer-motion / AnimatePresence
 * here. Under React 19 dev StrictMode the exit animation can keep the dialog
 * mounted indefinitely after state flips. Plain conditional rendering with a
 * CSS-driven fade keeps open/close deterministic.
 */

import { useEffect, useState } from "react";
import { waLink } from "@/lib/contact";
import { BookOpen, Building2, FileSpreadsheet, Home, KeyRound, Landmark, MessageCircle, PiggyBank, type LucideIcon } from "lucide-react";

const WA_DEFAULT_TEXT =
  "Olá! Estava no site da Top Imobiliária e gostaria de uma ajuda.";

type Action =
  | { type: "scroll"; targetId: string; setFilter?: "aluguel" | "venda" }
  | { type: "navigate"; href: string }
  | { type: "external"; url: string };

type Choice = {
  label: string;
  icon: LucideIcon;
  action: Action;
};

const CHOICES: Choice[] = [
  {
    label: "Quero alugar",
    icon: KeyRound,
    action: { type: "scroll", targetId: "imoveis", setFilter: "aluguel" },
  },
  {
    label: "Quero comprar",
    icon: Landmark,
    action: { type: "scroll", targetId: "imoveis", setFilter: "venda" },
  },
  {
    label: "Avaliar meu imóvel",
    icon: PiggyBank,
    action: { type: "scroll", targetId: "simulador" },
  },
  {
    label: "Falar no WhatsApp",
    icon: MessageCircle,
    action: {
      type: "external",
      url: waLink(WA_DEFAULT_TEXT),
    },
  },
  {
    label: "Consórcio x Financiamento",
    icon: FileSpreadsheet,
    action: { type: "scroll", targetId: "consorcio" },
  },
  {
    label: "Sou proprietário",
    icon: Home,
    action: { type: "scroll", targetId: "proprietarios" },
  },
  {
    label: "Conhecer prédios",
    icon: Building2,
    action: { type: "navigate", href: "/buildings.html" },
  },
  {
    label: "Ler conteúdo",
    icon: BookOpen,
    action: { type: "scroll", targetId: "blog" },
  },
];

function Mascot({ size = 56 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ display: "block" }}
    >
      <circle cx="60" cy="8" r="5" fill="#D32F2F" />
      <path d="M58 13 L62 13 L64 18 L56 18 Z" fill="#1B2A4A" opacity="0.9" />
      <path
        d="M24 38 C24 20, 40 12, 60 12 C80 12, 96 20, 96 38 L96 44 L24 44 Z"
        fill="#E0302F"
      />
      <path
        d="M35 26 L58 16 C60 15 62 15 64 16 L85 27"
        stroke="#FFF7F3"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M28 40 C30 31, 40 25, 60 25 C80 25, 90 31, 92 40"
        fill="#C81F26"
      />
      <circle cx="20" cy="56" r="10" fill="#D32F2F" />
      <circle cx="100" cy="56" r="10" fill="#D32F2F" />
      <circle cx="20" cy="56" r="6.5" fill="#202838" />
      <circle cx="100" cy="56" r="6.5" fill="#202838" />
      <rect x="26" y="28" width="68" height="56" rx="20" fill="#F5F1EA" />
      <rect x="34" y="38" width="52" height="34" rx="16" fill="#142130" />
      <circle cx="50" cy="55" r="9.5" fill="#FFFDF8" />
      <circle cx="70" cy="55" r="9.5" fill="#FFFDF8" />
      <circle cx="52" cy="57" r="5.5" fill="#0E5CA8" />
      <circle cx="72" cy="57" r="5.5" fill="#0E5CA8" />
      <circle cx="53.5" cy="56" r="2.4" fill="#05070B" />
      <circle cx="73.5" cy="56" r="2.4" fill="#05070B" />
      <circle cx="56" cy="52" r="1.6" fill="#FFF" />
      <circle cx="76" cy="52" r="1.6" fill="#FFF" />
      <path d="M46 48 C48 45, 52 45, 55 47" stroke="#314258" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M65 47 C68 45, 72 45, 74 48" stroke="#314258" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M51 67 C56 73, 64 73, 69 67" stroke="#FFFDF8" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M59 69 C61 69, 63 70, 64 72" stroke="#F87171" strokeWidth="3" strokeLinecap="round" fill="none" />
      <rect x="43" y="84" width="34" height="26" rx="10" fill="#F5F1EA" />
      <rect x="48" y="89" width="24" height="18" rx="6" fill="#1B2231" />
      <path d="M52 99 L60 92 L68 99" stroke="#E0302F" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <text x="60" y="105" textAnchor="middle" fontSize="10" fontWeight="700" fill="#FFFDF8">Top</text>
      <path d="M42 86 L30 96" stroke="#1B2231" strokeWidth="6" strokeLinecap="round" />
      <path d="M78 86 L90 74" stroke="#1B2231" strokeWidth="6" strokeLinecap="round" />
      <path d="M90 74 C97 72, 101 76, 102 82" stroke="#1B2231" strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M43 109 L37 118" stroke="#1B2231" strokeWidth="6" strokeLinecap="round" />
      <path d="M77 109 L83 118" stroke="#1B2231" strokeWidth="6" strokeLinecap="round" />
      <path d="M33 118 H48" stroke="#1B2231" strokeWidth="6" strokeLinecap="round" />
      <path d="M72 118 H87" stroke="#1B2231" strokeWidth="6" strokeLinecap="round" />
      <path
        d="M35 35 C39 30, 47 29, 54 30"
        stroke="#A71E24"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

// Idle chatter rotation — short, friendly, varied. Topinho cycles through
// these in random order while the panel is closed so visitors who scroll past
// without engaging still feel a nudge of personality.
const IDLE_BUBBLES = [
  "Achei algo legal pra você ver.",
  "Posso te ajudar a achar o imóvel ideal!",
  "Quer comparar consórcio e financiamento? É rapidinho.",
  "Bora dar uma olhada nos imóveis em destaque?",
  "Dúvida? Posso te conectar com um corretor.",
  "Tô aqui se precisar.",
  "Posso te mostrar prédios em Águas Claras",
  "Quer uma avaliação grátis do seu imóvel?",
  "Já viu nossa sessão de imóveis em destaque?",
];

export default function SiteAssistant() {
  const [open, setOpen] = useState(false);
  const [pulseHint, setPulseHint] = useState(false);
  // Idle behavior — Topinho occasionally trembles and pops a chat bubble.
  const [wiggling, setWiggling] = useState(false);
  const [idleBubble, setIdleBubble] = useState<string | null>(null);

  // First-time visitors get a small pulse hint after a beat.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = window.localStorage.getItem("topimob:assistant-seen");
    if (seen) return;
    const t = setTimeout(() => setPulseHint(true), 4000);
    return () => clearTimeout(t);
  }, []);

  // Periodic idle behavior. Wiggle + speech bubble at irregular intervals so
  // it doesn't feel mechanical. Pauses while the panel is open or the
  // first-visit hint is up (we don't want to step on those).
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (open || pulseHint) return;

    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout>;
    let wiggleTimeoutId: ReturnType<typeof setTimeout>;
    let bubbleHideId: ReturnType<typeof setTimeout>;

    let bubbleIndex = Math.floor(Math.random() * IDLE_BUBBLES.length);

    const scheduleNext = (firstRun = false) => {
      // First nudge fires sooner so users notice the assistant is alive,
      // subsequent ones space out more.
      const delay = firstRun
        ? 22000 + Math.random() * 8000   // 22–30s for the first idle pop
        : 55000 + Math.random() * 35000; // 55–90s thereafter
      timeoutId = setTimeout(() => {
        if (cancelled) return;
        // Wiggle first, then pop the bubble a beat later so the motion draws
        // the eye before the text appears.
        setWiggling(true);
        wiggleTimeoutId = setTimeout(() => {
          if (cancelled) return;
          setWiggling(false);
          const msg = IDLE_BUBBLES[bubbleIndex % IDLE_BUBBLES.length];
          bubbleIndex += 1;
          setIdleBubble(msg);
          // Auto-dismiss after a comfortable read window
          bubbleHideId = setTimeout(() => {
            if (cancelled) return;
            setIdleBubble(null);
            scheduleNext();
          }, 7000);
        }, 900);
      }, delay);
    };

    scheduleNext(true);
    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
      clearTimeout(wiggleTimeoutId);
      clearTimeout(bubbleHideId);
      setWiggling(false);
      setIdleBubble(null);
    };
  }, [open, pulseHint]);

  const dismissHint = () => {
    setPulseHint(false);
    try {
      window.localStorage.setItem("topimob:assistant-seen", "1");
    } catch {
      // storage unavailable — fail silently
    }
  };

  const dismissIdleBubble = () => {
    setIdleBubble(null);
  };

  const handleAction = (action: Action) => {
    setOpen(false);
    dismissHint();

    if (action.type === "scroll") {
      if (action.setFilter) {
        window.dispatchEvent(
          new CustomEvent("topimob:set-filter", { detail: action.setFilter }),
        );
      }
      // Defer the scroll a tick so any state-driven layout shift settles.
      setTimeout(() => {
        const el = document.getElementById(action.targetId);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    } else if (action.type === "navigate") {
      window.location.assign(action.href);
    } else if (action.type === "external") {
      window.open(action.url, "_blank", "noopener,noreferrer");
    }
  };

  const toggle = () => {
    setOpen((v) => !v);
    if (pulseHint) dismissHint();
    if (idleBubble) dismissIdleBubble();
  };

  // Compose the launcher animation. `wiggling` shake takes precedence
  // (very short), then the first-visit bob, otherwise no animation.
  const launcherAnimation = wiggling
    ? "topimobShake 0.9s ease-in-out"
    : pulseHint
      ? "topimobBob 1.4s ease-in-out infinite"
      : undefined;

  return (
    <>
      {/* Floating launcher (bottom-left) */}
      <button
        type="button"
        onClick={toggle}
        aria-label={open ? "Fechar assistente" : "Abrir assistente"}
        aria-expanded={open}
        className="topimob-bot-launcher"
        style={{
          position: "fixed",
          bottom: 24,
          left: 24,
          width: 74,
          height: 74,
          borderRadius: 24,
          border: "1px solid rgba(255,255,255,0.84)",
          padding: 0,
          cursor: "pointer",
          background: "radial-gradient(circle at 30% 25%, #FFFFFF 0%, #F8F9FC 60%, #E8EDF5 100%)",
          boxShadow: "0 18px 38px rgba(27,42,74,0.28), 0 6px 16px rgba(0,0,0,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1100,
          animation: launcherAnimation,
        }}
      >
        <Mascot size={60} />
        {pulseHint ? (
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              top: -3,
              right: -3,
              width: 16,
              height: 16,
              background: "#D32F2F",
              borderRadius: "50%",
              border: "2px solid #fff",
              boxShadow: "0 2px 6px rgba(211,47,47,0.4)",
            }}
          />
        ) : null}
      </button>

      {/* First-visit teaser bubble (only when closed + hint active) */}
      {pulseHint && !open ? (
        <button
          type="button"
          onClick={toggle}
          style={{
            position: "fixed",
            bottom: 44,
            left: 110,
            maxWidth: 220,
            padding: "10px 14px",
            borderRadius: "16px 16px 16px 4px",
            background: "#fff",
            color: "#1B2A4A",
            fontSize: 13,
            fontWeight: 500,
            lineHeight: 1.35,
            boxShadow: "0 8px 24px rgba(27,42,74,0.18)",
            border: "1px solid #EEF1F6",
            cursor: "pointer",
            fontFamily: "inherit",
            textAlign: "left",
            zIndex: 1099,
          }}
        >
          Oi! Posso te ajudar a achar o imóvel certo?
        </button>
      ) : null}

      {/* Idle speech bubble — pops periodically while the panel is closed */}
      {idleBubble && !open && !pulseHint ? (
        <div
          role="status"
          aria-live="polite"
          style={{
            position: "fixed",
            bottom: 46,
            left: 112,
            maxWidth: 240,
            background: "#fff",
            color: "#1B2A4A",
            borderRadius: "16px 16px 16px 4px",
            padding: "10px 36px 10px 14px",
            fontSize: 13,
            fontWeight: 500,
            lineHeight: 1.4,
            boxShadow: "0 12px 30px rgba(27,42,74,0.22)",
            border: "1px solid #EEF1F6",
            zIndex: 1099,
            animation: "topimobBubbleIn 0.32s cubic-bezier(0.4,0,0.2,1)",
            cursor: "pointer",
          }}
          onClick={() => {
            dismissIdleBubble();
            toggle();
          }}
        >
          {idleBubble}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              dismissIdleBubble();
            }}
            aria-label="Dispensar mensagem"
            style={{
              position: "absolute",
              top: 4,
              right: 4,
              width: 22,
              height: 22,
              borderRadius: "50%",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: "#5A6478",
              fontSize: 14,
              lineHeight: 1,
              padding: 0,
              fontFamily: "inherit",
            }}
          >
            ×
          </button>
        </div>
      ) : null}

      {/* Main panel — plain conditional render, no AnimatePresence */}
      {open ? (
        <div
          role="dialog"
          aria-label="Assistente Top Imobiliária"
          style={{
            position: "fixed",
            bottom: 104,
            left: 24,
            width: "min(360px, calc(100vw - 48px))",
            maxHeight: "min(72vh, 640px)",
            background: "#fff",
            borderRadius: 20,
            boxShadow:
              "0 24px 60px rgba(27,42,74,0.25), 0 8px 20px rgba(0,0,0,0.08)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            zIndex: 1100,
            border: "1px solid #EEF1F6",
            animation: "topimobPanelIn 0.22s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "linear-gradient(135deg,#1B2A4A,#243656)",
              color: "#fff",
              padding: "16px 20px",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 18,
                background: "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(242,246,251,0.95))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 18px rgba(0,0,0,0.18)",
              }}
            >
              <Mascot size={44} />
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  fontFamily: "var(--font-jakarta)",
                }}
              >
                Topinho
              </div>
              <div
                style={{
                  fontSize: 11,
                  opacity: 0.75,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "#22c55e",
                    display: "inline-block",
                  }}
                />
                Top Imobiliária • online
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "none",
                color: "#fff",
                width: 30,
                height: 30,
                borderRadius: "50%",
                cursor: "pointer",
                fontSize: 16,
                fontFamily: "inherit",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ✕
            </button>
          </div>

          {/* Body */}
          <div
            style={{
              padding: "16px 20px 20px",
              overflowY: "auto",
              flex: 1,
              background: "#F8F9FC",
            }}
          >
            <div
              style={{
                background: "#fff",
                borderRadius: "16px 16px 16px 4px",
                padding: "12px 14px",
                fontSize: 14,
                color: "#2C3345",
                lineHeight: 1.45,
                marginBottom: 16,
                boxShadow: "0 2px 8px rgba(27,42,74,0.05)",
                border: "1px solid #EEF1F6",
              }}
            >
              Oi! Sou o <strong>Topinho</strong>. Posso te ajudar a encontrar o
              imóvel ideal ou avaliar o seu em segundos. O que você está buscando?
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 8,
              }}
            >
              {CHOICES.map((c) => (
                <button
                  key={c.label}
                  type="button"
                  onClick={() => handleAction(c.action)}
                  className="topimob-assistant-choice"
                  style={{
                    padding: "10px 12px",
                    borderRadius: 12,
                    border: "1px solid #D8DDE8",
                    background: "#fff",
                    color: "#1B2A4A",
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                    textAlign: "left",
                    fontFamily: "inherit",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    lineHeight: 1.2,
                    transition: "transform 0.15s ease, border-color 0.15s ease",
                  }}
                >
                  <c.icon size={16} strokeWidth={1.9} />
                  <span>{c.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div
            style={{
              padding: "10px 16px",
              borderTop: "1px solid #EEF1F6",
              fontSize: 11,
              color: "#5A6478",
              textAlign: "center",
              background: "#fff",
            }}
          >
            Atendimento humano disponível em horário comercial
          </div>
        </div>
      ) : null}

      {/* Animations + hover styles via inline <style>. Kept here (not in
          globals.css) so Tailwind v4 doesn't tree-shake them. */}
      <style>{`
        @keyframes topimobBob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes topimobShake {
          0%, 100% { transform: translateX(0) rotate(0); }
          15% { transform: translateX(-3px) rotate(-6deg); }
          30% { transform: translateX(3px)  rotate(6deg); }
          45% { transform: translateX(-2px) rotate(-4deg); }
          60% { transform: translateX(2px)  rotate(4deg); }
          75% { transform: translateX(-1px) rotate(-2deg); }
        }
        @keyframes topimobBubbleIn {
          from { opacity: 0; transform: translateY(8px) scale(0.94); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes topimobPanelIn {
          from { opacity: 0; transform: translateY(16px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .topimob-bot-launcher:hover { transform: scale(1.05); }
        .topimob-bot-launcher:active { transform: scale(0.96); }
        .topimob-assistant-choice:hover {
          border-color: #1B2A4A !important;
          transform: translateY(-2px);
        }
        .topimob-assistant-choice:active {
          transform: scale(0.97);
        }
        @media (max-width: 640px) {
          .topimob-bot-launcher {
            width: 66px !important;
            height: 66px !important;
            border-radius: 22px !important;
            bottom: 18px !important;
            left: 18px !important;
          }
        }
      `}</style>
    </>
  );
}
