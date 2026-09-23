"use client";

import { useState } from "react";
import { beforeAfterCases, galleryItems } from "@/lib/data";

function BeforeAfterCard({ label }: { label: string }) {
  const [value, setValue] = useState(50);
  const clip = `inset(0 ${100 - value}% 0 0)`;

  return (
    <div style={{ display: "grid", gap: 10 }}>
      <div style={{ position: "relative", borderRadius: 10, overflow: "hidden", aspectRatio: "4 / 3", userSelect: "none" }}>
        <div className="diagonal-stripes" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "flex-start", justifyContent: "flex-end", padding: "14px 18px 0 0" }}>
          <span className="font-mono-label" style={{ fontSize: 11, color: "var(--muted)" }}>DUPĂ</span>
        </div>
        <div className="diagonal-stripes-tan" style={{ position: "absolute", inset: 0, clipPath: clip, display: "flex", alignItems: "flex-start", justifyContent: "flex-start", padding: "14px 0 0 18px" }}>
          <span className="font-mono-label" style={{ fontSize: 11, color: "oklch(0.4 0.02 30)" }}>ÎNAINTE</span>
        </div>
        <div style={{ position: "absolute", top: 0, bottom: 0, left: `${value}%`, width: 3, background: "#fff", boxShadow: "0 0 0 1px rgba(0,0,0,0.15)", pointerEvents: "none" }}>
          <span style={{
            position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 30, height: 30,
            borderRadius: "50%", background: "#fff", boxShadow: "0 6px 16px rgba(0,0,0,0.25)", display: "grid",
            placeItems: "center", fontSize: 12, color: "var(--teal-deep)",
          }}>↔</span>
        </div>
        <input
          type="range" min={0} max={100} value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          aria-label={`Compară înainte și după — ${label}`}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", margin: 0, opacity: 0, cursor: "ew-resize" }}
        />
      </div>
      <span style={{ fontSize: 13.5, fontWeight: 600, color: "var(--teal-deep)" }}>{label}</span>
    </div>
  );
}

export function GalleryAndBeforeAfter() {
  return (
    <section className="noise-overlay" style={{
      backgroundColor: "var(--peach-section)", borderRadius: "48px 48px 0 0", marginTop: -48, position: "relative", zIndex: 1,
    }}>
      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "calc(clamp(64px, 8vw, 112px) + 48px) clamp(16px, 3vw, 40px) clamp(64px, 8vw, 112px)" }}>
        <div style={{ display: "grid", gap: 12, marginBottom: "clamp(28px, 4vw, 40px)" }}>
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold-label)" }}>Clinica noastră</span>
          <h2 className="font-display" style={{ margin: 0, fontWeight: 400, fontSize: "clamp(30px, 4.4vw, 50px)", lineHeight: 1.05, letterSpacing: "-0.015em" }}>Galerie foto</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
          {galleryItems.map((label) => (
            <div key={label} className="diagonal-stripes" style={{ aspectRatio: "4/3", borderRadius: 6, display: "grid", placeItems: "center" }}>
              <span className="font-mono-label" style={{ fontSize: 11, color: "var(--muted)", textAlign: "center", padding: 10 }}>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(16px, 3vw, 40px) clamp(64px, 8vw, 112px)" }}>
        <div style={{ display: "grid", gap: 12, marginBottom: "clamp(28px, 4vw, 40px)" }}>
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold-label)" }}>Cazuri reale</span>
          <h2 className="font-display" style={{ margin: 0, fontWeight: 400, fontSize: "clamp(30px, 4.4vw, 50px)", lineHeight: 1.05, letterSpacing: "-0.015em" }}>Rezultate înainte și după</h2>
          <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, color: "var(--muted)", maxWidth: "46ch" }}>
            Trage cursorul pentru a compara starea inițială cu rezultatul unui tratament de estetică dentară.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {beforeAfterCases.map((c) => <BeforeAfterCard key={c} label={c} />)}
        </div>
      </section>
    </section>
  );
}
