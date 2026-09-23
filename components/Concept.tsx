"use client";

import { useBooking } from "@/lib/booking-context";
import { usp } from "@/lib/data";

export function Concept() {
  const { openModal } = useBooking();
  return (
    <section className="dot-grid-gold" style={{
      background: "var(--cream-section)", borderRadius: "48px 48px 0 0", marginTop: -48, position: "relative", zIndex: 1,
    }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto",
        padding: "clamp(80px, 9vw, 128px) clamp(16px, 3vw, 40px) clamp(56px, 7vw, 104px)",
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "clamp(32px, 5vw, 72px)", alignItems: "start",
      }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.25fr", gap: 12, alignItems: "start" }}>
          <div style={{ background: "var(--teal-deep)", borderRadius: 6, padding: 22, minHeight: 190, display: "grid", alignContent: "end", gap: 10 }}>
            <span style={{ fontSize: 10.5, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)" }}>Dental boutique</span>
            <span className="font-display" style={{ fontSize: 25, lineHeight: 1.12, color: "oklch(0.97 0.012 90)" }}>Implantologie avansată în Slobozia</span>
          </div>
          <div className="diagonal-stripes" style={{ borderRadius: 6, minHeight: 190, display: "grid", placeItems: "center" }}>
            <span className="font-mono-label" style={{ fontSize: 11.5, color: "var(--muted)", textAlign: "center", padding: 12 }}>unit dentar<br />foto verticală</span>
          </div>
          <div className="diagonal-stripes" style={{ gridColumn: "span 2", borderRadius: 6, minHeight: 200, display: "grid", placeItems: "center" }}>
            <span className="font-mono-label" style={{ fontSize: 11.5, color: "var(--muted)", textAlign: "center", padding: 12 }}>sală de tratament — cadru larg, lumină naturală</span>
          </div>
        </div>

        <div style={{ display: "grid", gap: 24, justifyItems: "start" }}>
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold-label)" }}>Concept dental boutique</span>
          <h2 className="font-display" style={{ margin: 0, fontWeight: 400, fontSize: "clamp(30px, 4.2vw, 48px)", lineHeight: 1.06, letterSpacing: "-0.015em", maxWidth: "20ch" }}>
            Sănătatea ta orală este prioritatea noastră fundamentală
          </h2>
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: "var(--muted-3)", maxWidth: "52ch" }}>
            ArtDent funcționează ca o clinică de proximitate cu standard de oraș mare: aparatură performantă, protocoale medicale respectate la fiecare pas și timp alocat fiecărui pacient, pentru ca tratamentul să fie explicat înainte de a fi început.
          </p>
          <div style={{ display: "grid", gap: 2, width: "100%", maxWidth: 560 }}>
            {usp.map((u, i) => (
              <div key={u.title} style={{
                display: "grid", gap: 7, padding: "20px 0", borderTop: "1px solid var(--line-2)",
                borderBottom: i === usp.length - 1 ? "1px solid var(--line-2)" : undefined,
              }}>
                <h4 style={{ margin: 0, fontSize: 16.5, fontWeight: 600, letterSpacing: "-0.01em" }}>{u.title}</h4>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "var(--muted)" }}>{u.text}</p>
              </div>
            ))}
          </div>
          <a href="#programare" onClick={(e) => { e.preventDefault(); openModal(); }} className="btn-teal" style={{
            fontSize: 15.5, fontWeight: 600, padding: "16px 28px", borderRadius: 4, minHeight: 52, display: "flex", alignItems: "center",
          }}>
            Programează o consultație
          </a>
        </div>
      </div>
    </section>
  );
}
