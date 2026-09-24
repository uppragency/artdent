"use client";

import { useState } from "react";
import { faqs, site } from "@/lib/data";

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="dot-grid-gold" style={{ background: "var(--cream-section)", borderRadius: "48px 48px 0 0", marginTop: -48, position: "relative", zIndex: 1 }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto", padding: "clamp(80px, 9vw, 128px) clamp(16px, 3vw, 40px) clamp(56px, 7vw, 104px)",
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "clamp(32px, 5vw, 72px)", alignItems: "start",
      }}>
        <div style={{ display: "grid", gap: 20, justifyItems: "start" }}>
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold-label)" }}>Întrebări frecvente</span>
          <h2 className="font-display" style={{ margin: 0, fontWeight: 400, fontSize: "clamp(30px, 4.2vw, 48px)", lineHeight: 1.06, letterSpacing: "-0.015em", maxWidth: "18ch" }}>
            Răspunsuri la întrebările tale
          </h2>
          <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.65, color: "var(--muted-2)", maxWidth: "40ch" }}>
            Dacă nu găsești răspunsul aici, sună-ne. Prima discuție este gratuită și fără obligații.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <a href={site.phoneHref} className="btn-outline-gold" style={{ fontSize: 15.5, fontWeight: 600, padding: "15px 26px", borderRadius: 4, minHeight: 52, display: "flex", alignItems: "center" }}>
              Sună acum · {site.phone}
            </a>
            <a href="/intrebari-frecvente" className="btn-outline-dark" style={{ fontSize: 15.5, fontWeight: 600, padding: "15px 26px", borderRadius: 4, minHeight: 52, display: "flex", alignItems: "center" }}>
              Toate întrebările frecvente →
            </a>
          </div>
        </div>
        <div style={{ display: "grid", width: "100%" }}>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} style={{ borderTop: "1px solid var(--line-2)" }}>
                <button type="button" onClick={() => setOpen(isOpen ? -1 : i)} style={{
                  width: "100%", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 20,
                  padding: "22px 0", background: "none", border: 0, cursor: "pointer", textAlign: "left",
                  fontFamily: "inherit", color: "var(--ink)", minHeight: 56,
                }}>
                  <span style={{ fontSize: 16.5, fontWeight: 600, lineHeight: 1.4 }}>{f.q}</span>
                  <span style={{ fontSize: 20, fontWeight: 400, color: "var(--gold-label)", lineHeight: 1.2 }}>{isOpen ? "–" : "+"}</span>
                </button>
                <div style={{ maxHeight: isOpen ? 400 : 0, transition: "max-height .35s ease", overflow: "hidden" }}>
                  <p style={{ margin: 0, padding: "0 40px 24px 0", fontSize: 15, lineHeight: 1.7, color: "var(--muted-2)" }}>{f.a}</p>
                </div>
              </div>
            );
          })}
          <div style={{ borderTop: "1px solid var(--line-2)" }} />
        </div>
      </div>
    </section>
  );
}
