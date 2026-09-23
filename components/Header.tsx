"use client";

import { useEffect, useState } from "react";
import { useBooking } from "@/lib/booking-context";
import { site } from "@/lib/data";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openModal } = useBooking();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerPad = scrolled ? "6px" : "18px";
  const headerMinH = scrolled ? "60px" : "68px";

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 60,
      padding: `${headerPad} clamp(12px, 3vw, 32px) 0`, transition: "padding .3s ease",
    }}>
      <div style={{
        maxWidth: 1240, margin: "0 auto", background: "rgba(3, 104, 126, 0.55)",
        backdropFilter: "blur(18px) saturate(1.4)", WebkitBackdropFilter: "blur(18px) saturate(1.4)",
        boxShadow: "0 18px 40px -24px rgba(2, 47, 58, 0.55)",
        padding: "0 clamp(14px, 1.6vw, 22px) 0 clamp(20px, 2.4vw, 34px)",
        minHeight: headerMinH, transition: "min-height .3s ease",
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, borderRadius: 999,
      }}>
        <a href="/" style={{ display: "flex", alignItems: "baseline", gap: 8, color: "#fff", flex: "0 0 auto" }}>
          <span className="font-display" style={{ fontSize: 26, letterSpacing: "-0.01em" }}>ArtDent</span>
          <span className="font-mono-label" style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>
            {site.city}
          </span>
        </a>

        <nav data-desk style={{ display: "flex", alignItems: "center", gap: "clamp(18px, 2vw, 32px)" }}>
          <a href="/" style={{ fontSize: 14.5, fontWeight: 600, color: "#fff", padding: "4px 0", borderBottom: "2px solid #83D3E4" }}>Acasă</a>
          <a href="/servicii" className="nav-link" style={{ fontSize: 14.5, fontWeight: 500, padding: "4px 0" }}>Servicii</a>
          <a href="/despre" className="nav-link" style={{ fontSize: 14.5, fontWeight: 500, padding: "4px 0" }}>Despre noi</a>
          <a href="/echipa" className="nav-link" style={{ fontSize: 14.5, fontWeight: 500, padding: "4px 0" }}>Echipă</a>
          <a href="/preturi" className="nav-link" style={{ fontSize: 14.5, fontWeight: 500, padding: "4px 0" }}>Prețuri</a>
          <a href="/contact" className="nav-link" style={{ fontSize: 14.5, fontWeight: 500, padding: "4px 0" }}>Contact</a>
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 10, flex: "0 0 auto" }}>
          <a data-desk href={site.phoneHref} className="header-urgent" style={{ fontSize: 13, fontWeight: 700, padding: "9px 15px", borderRadius: 999, whiteSpace: "nowrap" }}>
            Urgențe
          </a>
          <a data-desk href={site.phoneHref} title={site.phone} className="header-phone-circle" style={{
            width: 40, height: 40, borderRadius: "50%", display: "grid", placeItems: "center", fontSize: 15, color: "#fff",
          }}>
            ☏
          </a>
          <a href="#programare" onClick={(e) => { e.preventDefault(); openModal(); }} className="header-cta" style={{
            fontSize: 14.5, fontWeight: 600, padding: "12px 22px", borderRadius: 999, whiteSpace: "nowrap",
          }}>
            Programează-te
          </a>
          <button data-mob type="button" aria-label="Meniu" onClick={() => setMenuOpen((v) => !v)} style={{
            display: "grid", gap: 5, padding: "12px 6px", background: "none", border: 0, cursor: "pointer",
          }}>
            <span style={{ display: "block", width: 20, height: 1.5, background: "#fff" }} />
            <span style={{ display: "block", width: 20, height: 1.5, background: "#fff" }} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav data-mob style={{
          position: "absolute", top: "100%", left: 0, right: 0, zIndex: 60,
          padding: "0 clamp(12px, 3vw, 32px)",
        }}>
        <div style={{
          maxWidth: 1240, margin: "8px auto 0", background: "rgba(3, 104, 126, 0.92)",
          backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)", borderRadius: 20,
          padding: "8px 22px 18px", display: "grid", boxShadow: "0 18px 40px -24px rgba(2, 47, 58, 0.55)",
        }}>
          <a href="/" className="mobile-nav-link" style={{ padding: "13px 0", fontSize: 17, fontWeight: 600, color: "#fff", borderBottom: "1px solid rgba(255,255,255,0.14)" }}>Acasă</a>
          <a href="/servicii" className="mobile-nav-link" style={{ padding: "13px 0", fontSize: 17, fontWeight: 500, color: "rgba(255,255,255,0.82)", borderBottom: "1px solid rgba(255,255,255,0.14)" }}>Servicii</a>
          <a href="/despre" className="mobile-nav-link" style={{ padding: "13px 0", fontSize: 17, fontWeight: 500, color: "rgba(255,255,255,0.82)", borderBottom: "1px solid rgba(255,255,255,0.14)" }}>Despre noi</a>
          <a href="/echipa" className="mobile-nav-link" style={{ padding: "13px 0", fontSize: 17, fontWeight: 500, color: "rgba(255,255,255,0.82)", borderBottom: "1px solid rgba(255,255,255,0.14)" }}>Echipă</a>
          <a href="/preturi" className="mobile-nav-link" style={{ padding: "13px 0", fontSize: 17, fontWeight: 500, color: "rgba(255,255,255,0.82)", borderBottom: "1px solid rgba(255,255,255,0.14)" }}>Prețuri</a>
          <a href="/contact" className="mobile-nav-link" style={{ padding: "13px 0", fontSize: 17, fontWeight: 500, color: "rgba(255,255,255,0.82)" }}>Contact</a>
          <a href={site.phoneHref} className="mobile-nav-link" style={{ padding: "13px 0", fontSize: 17, fontWeight: 700, color: "oklch(0.72 0.18 27)", borderBottom: "1px solid rgba(255,255,255,0.14)", borderTop: "1px solid rgba(255,255,255,0.14)", marginTop: 4 }}>Urgențe dentare</a>
          <a href={site.phoneHref} style={{ marginTop: 14, background: "#fff", color: "var(--teal-700)", fontSize: 16, fontWeight: 600, padding: 15, borderRadius: 999, textAlign: "center" }}>
            Sună acum · {site.phone}
          </a>
        </div>
        </nav>
      )}
    </header>
  );
}
