"use client";

import { useEffect, useState } from "react";
import { useBooking } from "@/lib/booking-context";

const SESSION_KEY = "artdent_exit_intent_shown";

export function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const { openModal } = useBooking();

  useEffect(() => {
    // Doar desktop — pe mobil nu există "mouse leave" real, iar gestul ar fi enervant.
    const isDesktop = window.matchMedia("(min-width: 900px) and (pointer: fine)").matches;
    if (!isDesktop) return;

    let alreadyShown = false;
    try {
      alreadyShown = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {}
    if (alreadyShown) return;

    function handleMouseLeave(e: MouseEvent) {
      if (e.clientY > 0) return;
      setVisible(true);
      try { sessionStorage.setItem(SESSION_KEY, "1"); } catch {}
      document.removeEventListener("mouseleave", handleMouseLeave);
    }

    // Mic delay ca să nu declanșeze accidental în primele secunde ale vizitei.
    const t = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 4000);

    return () => {
      clearTimeout(t);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      onClick={() => setVisible(false)}
      style={{
        position: "fixed", inset: 0, zIndex: 998, background: "rgba(2,47,58,0.4)",
        display: "flex", alignItems: "center", justifyContent: "center", padding: 20,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--cream)", borderRadius: 14, maxWidth: 420, width: "100%",
          padding: "clamp(28px,3vw,36px)", position: "relative",
          boxShadow: "0 40px 80px -30px rgba(2,47,58,0.5)", textAlign: "center",
          animation: "artdentPop .25s ease",
        }}
      >
        <button
          type="button"
          onClick={() => setVisible(false)}
          aria-label="Închide"
          className="close-x"
          style={{
            position: "absolute", top: 14, right: 14, width: 32, height: 32, borderRadius: "50%",
            background: "none", fontSize: 15, cursor: "pointer",
          }}
        >
          ✕
        </button>
        <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold-label)" }}>
          Înainte să pleci
        </span>
        <h3 className="font-display" style={{ margin: "10px 0 12px", fontWeight: 400, fontSize: 26, color: "var(--teal-deep)" }}>
          O primă consultație, fără obligații
        </h3>
        <p style={{ margin: "0 0 22px", fontSize: 14.5, lineHeight: 1.6, color: "var(--muted-2)" }}>
          Lasă-ne numărul tău și te sunăm noi pentru a stabili o programare, la ora care ți se potrivește.
        </p>
        <button
          type="button"
          onClick={() => { setVisible(false); openModal(); }}
          className="btn-teal"
          style={{ fontSize: 15.5, fontWeight: 600, padding: "15px 26px", borderRadius: 4, minHeight: 50, width: "100%", border: 0, cursor: "pointer", fontFamily: "inherit" }}
        >
          Solicită consultația gratuită
        </button>
      </div>
    </div>
  );
}
