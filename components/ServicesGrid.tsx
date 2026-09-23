"use client";

import { useEffect, useRef, useState } from "react";
import { services } from "@/lib/data";

const icons: Record<number, React.ReactNode> = {
  0: <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />,
  1: <path d="M8 4c-2 0-3 1.4-3 3.5S8 11 8 12s-3 1.4-3 4.5S6 20 8 20M16 4c2 0 3 1.4 3 3.5S16 11 16 12s3 1.4 3 4.5-2 3.5-3 3.5" />,
  2: <path d="M12 4c-3.5 0-6 1.7-6 4.6 0 2.6 1 3.7 1.4 6.9.3 2.4.9 4.5 2 4.5 1.3 0 1.4-3.4 2.6-3.4S13.3 20 14.6 20c1.1 0 1.7-2.1 2-4.5.4-3.2 1.4-4.3 1.4-6.9C18 5.7 15.5 4 12 4z" />,
  3: <path d="M5 19L15 9M15 9c1-1 4-3.5 5-4.5M15 9l2 2M9 13l2 2" />,
  4: <path d="M12 3c3 4 6 7.5 6 11a6 6 0 0 1-12 0c0-3.5 3-7 6-11z" />,
  5: <path d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4M9 12h6" />,
};

export function ServicesGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(-1);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)),
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
      {services.map((s, i) => (
        <a
          key={s.slug}
          href="/servicii"
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(-1)}
          className="service-card"
          style={{
            display: "grid", gap: 16, alignContent: "start", padding: 26, borderRadius: 8,
            minHeight: 260, opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(18px)",
            transitionDelay: `${i * 70}ms`,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ width: 40, height: 40, borderRadius: 8, background: "var(--gold-tint-bg)", display: "grid", placeItems: "center", color: "var(--gold-label)" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">{icons[i]}</svg>
            </span>
            <span className="font-mono-label" style={{ fontSize: 11.5, color: "var(--gold-label-2)" }}>{s.num}</span>
          </div>
          <h3 style={{ margin: 0, fontSize: 21, fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.2 }}>{s.title}</h3>
          <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "var(--muted)" }}>{s.text}</p>
          <div style={{
            display: "grid", gridTemplateRows: hovered === i ? "1fr" : "0fr",
            transition: "grid-template-rows .3s ease", overflow: "hidden",
          }} className="service-card-list">
            <div style={{ minHeight: 0, display: "grid", gap: 6, paddingTop: 2 }}>
              {s.items.map((it) => (
                <span key={it} style={{ fontSize: 13, color: "var(--muted)" }}>· {it}</span>
              ))}
            </div>
          </div>
          <span style={{ alignSelf: "end", fontSize: 14.5, fontWeight: 600, color: "var(--teal-600)" }}>Vezi serviciul →</span>
        </a>
      ))}
    </div>
  );
}
