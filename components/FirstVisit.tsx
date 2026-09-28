"use client";

import { useRef, useState } from "react";
import { processSteps } from "@/lib/data";
import { OpenBookingButton } from "@/components/OpenBookingButton";

const CARD_WIDTH = 270;
const GAP = 20;

function StepCard({ s }: { s: (typeof processSteps)[number] }) {
  return (
    <>
      <span className="font-display" style={{
        width: 42, height: 42, borderRadius: "50%", background: "var(--teal-deep)", color: "#fff",
        display: "grid", placeItems: "center", fontSize: 18, flex: "0 0 auto",
      }}>
        {s.n}
      </span>
      <h3 style={{ margin: 0, fontSize: 18.5, fontWeight: 600, letterSpacing: "-0.01em" }}>{s.title}</h3>
      <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "var(--muted)" }}>{s.text}</p>
      {s.n === "1" && (
        <OpenBookingButton className="btn-teal" style={{ display: "inline-flex", width: "fit-content", fontSize: 14, fontWeight: 600, padding: "12px 22px", borderRadius: 4 }}>
          Programează-te
        </OpenBookingButton>
      )}
    </>
  );
}

export function FirstVisit() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function scrollByCards(dir: 1 | -1) {
    trackRef.current?.scrollBy({ left: dir * (CARD_WIDTH + GAP), behavior: "smooth" });
  }

  function handleScroll() {
    const el = trackRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / (CARD_WIDTH + GAP));
    setActive(Math.max(0, Math.min(processSteps.length - 1, index)));
  }

  return (
    <section style={{
      maxWidth: 1280, margin: "0 auto", padding: "clamp(64px, 8vw, 112px) clamp(16px, 3vw, 40px)",
      position: "relative", overflow: "hidden",
      background: "linear-gradient(180deg, #fff 0%, var(--white-to-blue) 100%)",
    }}>
      <div style={{ display: "grid", gap: 12, marginBottom: "clamp(36px, 5vw, 56px)", justifyItems: "start" }}>
        <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold-label)" }}>Prima vizită</span>
        <h2 className="font-display" style={{ margin: 0, fontWeight: 400, fontSize: "clamp(30px, 4.4vw, 50px)", lineHeight: 1.05, letterSpacing: "-0.015em", maxWidth: "20ch" }}>
          Ce se întâmplă la prima ta vizită
        </h2>
        <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, color: "var(--muted)", maxWidth: "52ch" }}>
          Nu se întâmplă nimic pe surprindere. Fiecare pas este explicat înainte să se petreacă.
        </p>
      </div>

      {/* Desktop: static 4-column grid */}
      <div className="firstvisit-desktop-grid" style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20,
      }}>
        {processSteps.map((s) => (
          <div key={s.n} style={{
            display: "grid", gap: 14,
            border: "1px solid var(--line)", background: "var(--card)", borderRadius: 8, padding: 24,
          }}>
            <StepCard s={s} />
          </div>
        ))}
      </div>

      {/* Mobile: carousel */}
      <div className="firstvisit-mobile-carousel">
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="services-carousel-track"
          style={{ display: "flex", gap: GAP, overflowX: "auto", scrollSnapType: "x mandatory", paddingBottom: 4 }}
        >
          {processSteps.map((s) => (
            <div key={s.n} style={{
              flex: `0 0 ${CARD_WIDTH}px`, scrollSnapAlign: "start", display: "grid", gap: 14,
              border: "1px solid var(--line)", background: "var(--card)", borderRadius: 8, padding: 24,
            }}>
              <StepCard s={s} />
            </div>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 18 }}>
          <div style={{ display: "flex", gap: 6 }}>
            {processSteps.map((s, i) => (
              <span key={s.n} style={{
                width: 6, height: 6, borderRadius: "50%",
                background: i === active ? "var(--gold)" : "var(--line)", transition: "background .2s ease",
              }} />
            ))}
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button type="button" onClick={() => scrollByCards(-1)} aria-label="Pasul anterior" className="carousel-arrow" style={{
              width: 40, height: 40, borderRadius: "50%", border: "1px solid var(--line)", background: "#fff",
              display: "grid", placeItems: "center", cursor: "pointer", color: "var(--ink)",
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button type="button" onClick={() => scrollByCards(1)} aria-label="Pasul următor" className="carousel-arrow" style={{
              width: 40, height: 40, borderRadius: "50%", border: "1px solid var(--line)", background: "#fff",
              display: "grid", placeItems: "center", cursor: "pointer", color: "var(--ink)",
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
