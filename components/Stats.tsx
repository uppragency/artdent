"use client";

import { useEffect, useRef, useState } from "react";
import { heroStats } from "@/lib/data";

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);
  const [values, setValues] = useState({ years: 0, congresses: 0, patients: 0, rating: "0.0" });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const run = () => {
      if (animated) return;
      setAnimated(true);
      const steps = 30, dur = 1300;
      let i = 0;
      const interval = setInterval(() => {
        i++;
        const p = Math.min(1, i / steps);
        const ease = 1 - Math.pow(1 - p, 3);
        setValues({
          years: Math.round(20 * ease),
          congresses: Math.round(11 * ease),
          patients: Math.round(1000 * ease),
          rating: (4.9 * ease).toFixed(1),
        });
        if (p >= 1) clearInterval(interval);
      }, dur / steps);
    };

    const observer = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && run()), { threshold: 0.3 });
    observer.observe(el);
    const fallback = setTimeout(run, 2500);
    return () => { observer.disconnect(); clearTimeout(fallback); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const display: Record<string, string> = {
    years: values.years + "+",
    congresses: String(values.congresses),
    patients: values.patients + "+",
    rating: values.rating,
  };

  return (
    <section ref={ref} className="dot-grid-teal" style={{
      background: "radial-gradient(circle at 78% 100%, oklch(0.5 0.09 195) 0%, #048BA8 55%)",
      color: "oklch(0.97 0.012 90)", borderRadius: "48px 48px 0 0", marginTop: -48,
      position: "relative", zIndex: 1, overflow: "hidden",
    }}>
      <div style={{ position: "absolute", width: 380, height: 380, borderRadius: "50%", background: "oklch(0.83 0.1 88 / 0.16)", filter: "blur(70px)", bottom: -140, left: -100, pointerEvents: "none" }} />
      <div style={{
        maxWidth: 1280, margin: "0 auto", padding: "clamp(80px, 9vw, 128px) clamp(16px, 3vw, 40px) clamp(48px, 6vw, 84px)",
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "clamp(28px, 4vw, 48px)",
      }}>
        {heroStats.map((s) => (
          <div key={s.key} style={{ display: "grid", gap: 10, alignContent: "start" }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--gold)" }} />
            <span className="font-display" style={{ fontSize: "clamp(44px, 6vw, 68px)", lineHeight: 1, color: "var(--gold)" }}>{display[s.key]}</span>
            <span style={{ fontSize: 15, fontWeight: 600 }}>{s.label}</span>
            <span style={{ fontSize: 13.5, lineHeight: 1.55, color: "oklch(0.82 0.015 190)" }}>{s.description}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
