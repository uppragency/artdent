"use client";

import { useEffect, useRef, useState } from "react";
import { services } from "@/lib/data";

const CARD_WIDTH = 340;
const GAP = 20;

export function ServicesGrid() {
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setVisible(true)),
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function scrollByCards(dir: 1 | -1) {
    trackRef.current?.scrollBy({ left: dir * (CARD_WIDTH + GAP), behavior: "smooth" });
  }

  function handleScroll() {
    const el = trackRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / (CARD_WIDTH + GAP));
    setActive(Math.max(0, Math.min(services.length - 1, index)));
  }

  return (
    <div ref={sectionRef}>
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="services-carousel-track"
        style={{
          display: "flex", gap: GAP, overflowX: "auto", scrollSnapType: "x mandatory",
          paddingBottom: 4, scrollbarWidth: "none",
        }}
      >
        {services.map((s, i) => (
          <a
            key={s.slug}
            href={`/servicii/${s.slug}`}
            className="service-card"
            style={{
              flex: `0 0 ${CARD_WIDTH}px`, scrollSnapAlign: "start", borderRadius: 8, overflow: "hidden",
              display: "flex", flexDirection: "column", opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(18px)", transitionDelay: `${i * 70}ms`,
            }}
          >
            <div
              style={{
                aspectRatio: "4 / 3", backgroundImage: `url(${s.image})`, backgroundSize: "cover",
                backgroundPosition: "center", position: "relative",
              }}
            >
              <span
                className="font-mono-label"
                style={{
                  position: "absolute", top: 14, right: 14, fontSize: 11.5, fontWeight: 600, color: "#fff",
                  background: "rgba(2,47,58,0.55)", padding: "4px 9px", borderRadius: 999, backdropFilter: "blur(2px)",
                }}
              >
                {s.num}
              </span>
            </div>
            <div style={{ padding: "22px 24px 26px", display: "grid", gap: 10, flex: 1 }}>
              <h3 style={{ margin: 0, fontSize: 19, fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.25 }}>{s.title}</h3>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: "var(--muted)" }}>{s.text}</p>
              <span style={{ marginTop: "auto", fontSize: 14, fontWeight: 600, color: "var(--teal-600)" }}>Vezi serviciul →</span>
            </div>
          </a>
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 18 }}>
        <div style={{ display: "flex", gap: 6 }}>
          {services.map((s, i) => (
            <span
              key={s.slug}
              style={{
                width: 6, height: 6, borderRadius: "50%",
                background: i === active ? "var(--gold)" : "var(--line)", transition: "background .2s ease",
              }}
            />
          ))}
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <button
            type="button"
            onClick={() => scrollByCards(-1)}
            aria-label="Serviciul anterior"
            className="carousel-arrow"
            style={{
              width: 40, height: 40, borderRadius: "50%", border: "1px solid var(--line)", background: "#fff",
              display: "grid", placeItems: "center", cursor: "pointer", color: "var(--ink)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <button
            type="button"
            onClick={() => scrollByCards(1)}
            aria-label="Serviciul următor"
            className="carousel-arrow"
            style={{
              width: 40, height: 40, borderRadius: "50%", border: "1px solid var(--line)", background: "#fff",
              display: "grid", placeItems: "center", cursor: "pointer", color: "var(--ink)",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}
