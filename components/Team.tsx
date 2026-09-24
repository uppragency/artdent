"use client";

import { useEffect, useState } from "react";
import { useBooking } from "@/lib/booking-context";
import { doctor, featuredTeamMembers } from "@/lib/data";

export function Team() {
  const { openModal } = useBooking();
  const [mediaLoaded, setMediaLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMediaLoaded(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <section style={{ maxWidth: 1280, margin: "0 auto", padding: "clamp(64px, 8vw, 112px) clamp(16px, 3vw, 40px)", position: "relative", overflow: "hidden" }}>
      <div style={{ display: "grid", gap: 12, marginBottom: "clamp(32px, 4vw, 48px)" }}>
        <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold-label)" }}>Echipa medicală</span>
        <h2 className="font-display" style={{ margin: 0, fontWeight: 400, fontSize: "clamp(30px, 4.4vw, 50px)", lineHeight: 1.05, letterSpacing: "-0.015em" }}>
          Medicul care îți va face tratamentul
        </h2>
      </div>

      <div style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 0,
        border: "1px solid var(--line)", borderRadius: 10, overflow: "hidden", background: "var(--card)",
      }}>
        <div className="diagonal-stripes" style={{ position: "relative", overflow: "hidden", minHeight: 460, display: "grid", placeItems: "center" }}>
          <div style={{ position: "absolute", width: 360, height: 360, borderRadius: "50%", background: "oklch(0.83 0.1 88 / 0.35)", filter: "blur(50px)", top: -60, left: -80 }} />
          <div style={{ position: "absolute", width: 260, height: 260, borderRadius: "50%", background: "oklch(0.55 0.08 195 / 0.3)", filter: "blur(46px)", bottom: -70, right: -60 }} />
          <span className="font-mono-label" style={{ position: "relative", fontSize: 12, color: "var(--muted)", textAlign: "center", padding: 16 }}>
            portret profesional<br />{doctor.name}<br />format vertical, 3/4
          </span>
        </div>
        <div style={{ padding: "clamp(28px, 4vw, 56px)", display: "grid", gap: 22, alignContent: "center", justifyItems: "start" }}>
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold-label)" }}>{doctor.role}</span>
          <h3 className="font-display" style={{ margin: 0, fontWeight: 400, fontSize: "clamp(30px, 3.6vw, 44px)", lineHeight: 1.05, letterSpacing: "-0.015em" }}>{doctor.name}</h3>
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7, color: "var(--muted-3)", maxWidth: "46ch" }}>{doctor.bio}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {doctor.specializations.map((s) => (
              <span key={s} style={{ fontSize: 13, fontWeight: 500, padding: "8px 14px", borderRadius: 999, background: "var(--gold-tint-bg)", color: "var(--gold-tint-text)" }}>{s}</span>
            ))}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, paddingTop: 4 }}>
            <a href="#programare" onClick={(e) => { e.preventDefault(); openModal(); }} className="btn-teal grow" style={{ fontSize: 15.5, fontWeight: 600, padding: "16px 26px", borderRadius: 4, minHeight: 52, display: "flex", alignItems: "center" }}>
              Programează la Dr. Zupcu
            </a>
            <a href="/echipa" className="btn-outline-dark" style={{ fontSize: 15.5, fontWeight: 600, padding: "16px 26px", borderRadius: 4, minHeight: 52, display: "flex", alignItems: "center" }}>
              Toată echipa
            </a>
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, marginTop: 20 }}>
        {featuredTeamMembers.map((t) => (
          <a key={t.slug} href={`/echipa/${t.slug}`} className="team-card" style={{ display: "grid", border: "1px solid var(--line)", borderRadius: 8, overflow: "hidden", background: "var(--card)", color: "inherit" }}>
            {mediaLoaded ? (
              <div className="diagonal-stripes" style={{ aspectRatio: "4/3", display: "grid", placeItems: "center" }}>
                <span className="font-mono-label" style={{ fontSize: 10.5, color: "var(--muted)", textAlign: "center", padding: 8 }}>portret · {t.name}</span>
              </div>
            ) : (
              <div style={{ aspectRatio: "4/3", background: "oklch(0.93 0.008 190)", animation: "artdentSkeleton 1.4s ease-in-out infinite" }} />
            )}
            <div style={{ padding: 18, display: "grid", gap: 6 }}>
              <span style={{ fontSize: 16, fontWeight: 600, letterSpacing: "-0.01em" }}>{t.name}</span>
              <span style={{ fontSize: 13, color: "var(--gold-label)", fontWeight: 500 }}>{t.role}</span>
            </div>
          </a>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: 28 }}>
        <a href="/echipa" className="btn-outline-dark" style={{ fontSize: 15, fontWeight: 600, padding: "14px 26px", borderRadius: 4, minHeight: 48, display: "flex", alignItems: "center" }}>
          Vezi toți medicii
        </a>
      </div>
    </section>
  );
}
