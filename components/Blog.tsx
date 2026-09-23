"use client";

import { useEffect, useState } from "react";
import { articles } from "@/lib/data";

export function Blog() {
  const [mediaLoaded, setMediaLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMediaLoaded(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <section style={{ maxWidth: 1280, margin: "0 auto", padding: "clamp(64px, 8vw, 112px) clamp(16px, 3vw, 40px)", position: "relative", overflow: "hidden" }}>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 20, marginBottom: "clamp(32px, 4vw, 48px)" }}>
        <div style={{ display: "grid", gap: 12 }}>
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold-label)" }}>Resurse</span>
          <h2 className="font-display" style={{ margin: 0, fontWeight: 400, fontSize: "clamp(30px, 4.4vw, 50px)", lineHeight: 1.05, letterSpacing: "-0.015em" }}>Din blogul clinicii</h2>
        </div>
        <a href="/blog" style={{ fontSize: 15, fontWeight: 600, color: "var(--teal-600)" }}>Toate articolele →</a>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", alignItems: "start", gap: 16 }}>
        {articles.map((a) => (
          <a key={a.title} href="/blog" className="article-card" style={{ display: "grid", gridTemplateRows: "auto auto", gap: 14, borderRadius: 8, overflow: "hidden" }}>
            {mediaLoaded ? (
              <div className="diagonal-stripes" style={{ width: "100%", aspectRatio: "16/10", display: "grid", placeItems: "center", minHeight: 0 }}>
                <span className="font-mono-label" style={{ fontSize: 11, color: "var(--muted)" }}>imagine articol</span>
              </div>
            ) : (
              <div style={{ width: "100%", aspectRatio: "16/10", background: "oklch(0.93 0.008 190)", animation: "artdentSkeleton 1.4s ease-in-out infinite" }} />
            )}
            <div style={{ padding: "4px 20px 22px", display: "grid", gap: 10 }}>
              <span className="font-mono-label" style={{ fontSize: 11, color: "var(--gold-label)" }}>{a.tag}</span>
              <h3 style={{ margin: 0, fontSize: 19, fontWeight: 600, lineHeight: 1.3, letterSpacing: "-0.01em" }}>{a.title}</h3>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "var(--muted)" }}>{a.excerpt}</p>
              <span style={{ fontSize: 14, fontWeight: 600, color: "var(--teal-600)" }}>Citește articolul →</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
