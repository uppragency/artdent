"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useBooking } from "@/lib/booking-context";
import { site, services } from "@/lib/data";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openModal } = useBooking();
  const pathname = usePathname();

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/"));
  const navCls = (href: string) => `nav-link${isActive(href) ? " nav-link-active" : ""}`;
  const mobCls = (href: string) => `mobile-nav-link${isActive(href) ? " nav-link-active" : ""}`;
  const megaItemCls = (href: string) => `mega-menu-item${isActive(href) ? " mega-menu-item-active" : ""}`;

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
        <a href="/" className="logo-mark" style={{ display: "flex", alignItems: "baseline", gap: 8, color: "#fff", flex: "0 0 auto" }}>
          <span className="font-display logo-text" style={{ fontSize: 26, letterSpacing: "-0.01em" }}>ArtDent</span>
          <span className="font-mono-label" style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>
            {site.city}
          </span>
        </a>

        <nav data-desk style={{ display: "flex", alignItems: "center", alignSelf: "stretch", gap: "clamp(18px, 2vw, 32px)" }}>
          <a href="/" className={navCls("/")} style={{ fontSize: 14.5, fontWeight: 600, padding: "4px 0" }}>Acasă</a>
          <div className="services-mega" style={{ alignSelf: "stretch", display: "flex", alignItems: "center" }}>
            <a href="/servicii" className={navCls("/servicii")} style={{ fontSize: 14.5, fontWeight: 500, display: "inline-flex", alignItems: "center", gap: 5 }}>
              Servicii
              <svg className="mega-arrow" width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </a>

            <div className="mega-panel" data-desk style={{ position: "absolute", top: "100%", left: 0, right: 0, zIndex: 60, padding: "0 clamp(12px, 3vw, 32px)" }}>
              <div style={{
                maxWidth: 1240, margin: "10px auto 0", background: "rgba(3, 104, 126, 0.96)",
                backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)", borderRadius: 20,
                padding: "clamp(24px, 3vw, 36px)", boxShadow: "0 24px 50px -24px rgba(2, 47, 58, 0.6)",
                display: "grid", gridTemplateColumns: "minmax(180px, 240px) 1fr", gap: "clamp(24px, 3vw, 44px)",
              }}>
                <div style={{ display: "grid", gap: 12, alignContent: "start", borderRight: "1px solid rgba(255,255,255,0.14)", paddingRight: "clamp(16px, 2vw, 32px)" }}>
                  <span className="font-mono-label" style={{ fontSize: 10.5, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>Servicii</span>
                  <h3 className="font-display" style={{ margin: 0, fontSize: 24, lineHeight: 1.15, color: "#fff" }}>Tot ce ai nevoie, într-un singur loc</h3>
                  <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: "rgba(255,255,255,0.72)" }}>
                    Explorează fiecare tratament în detaliu, cu beneficii și răspunsuri la întrebările frecvente.
                  </p>
                  <a href="/servicii" className="btn-outline-light-noscale" style={{ marginTop: 6, fontSize: 13.5, fontWeight: 600, padding: "11px 18px", borderRadius: 4, display: "inline-flex", width: "fit-content" }}>
                    Vezi toate serviciile →
                  </a>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "6px 24px" }}>
                  {services.map((s) => (
                    <a
                      key={s.slug}
                      href={`/servicii/${s.slug}`}
                      style={{
                        display: "grid", gridTemplateColumns: "auto 1fr", gap: 12, alignItems: "start",
                        padding: "12px 10px", borderRadius: 8, color: "#fff",
                      }}
                      className={megaItemCls(`/servicii/${s.slug}`)}
                    >
                      <span className="font-mono-label" style={{ fontSize: 11, color: "var(--gold)", paddingTop: 2 }}>{s.num}</span>
                      <span style={{ display: "grid", gap: 3 }}>
                        <span className="mega-item-title" style={{ fontSize: 15, fontWeight: 600 }}>{s.title}</span>
                        <span style={{ fontSize: 12.5, lineHeight: 1.5, color: "rgba(255,255,255,0.68)" }}>{s.text}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="about-mega" style={{ alignSelf: "stretch", display: "flex", alignItems: "center" }}>
            <a href="/despre" className={navCls("/despre")} style={{ fontSize: 14.5, fontWeight: 500, display: "inline-flex", alignItems: "center", gap: 5 }}>
              Despre noi
              <svg className="mega-arrow" width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </a>

            <div className="mega-panel" data-desk style={{ position: "absolute", top: "100%", left: 0, right: 0, zIndex: 60, padding: "0 clamp(12px, 3vw, 32px)" }}>
              <div style={{
                maxWidth: 640, margin: "10px auto 0", background: "rgba(3, 104, 126, 0.96)",
                backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)", borderRadius: 20,
                padding: "clamp(20px, 3vw, 28px)", boxShadow: "0 24px 50px -24px rgba(2, 47, 58, 0.6)",
                display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 6,
              }}>
                {[
                  { href: "/despre", title: "Despre noi", text: "Conceptul clinicii și valorile noastre" },
                  { href: "/echipa", title: "Echipă", text: "Medicii și echipa ArtDent" },
                  { href: "/despre#valori", title: "Valorile ArtDent", text: "Ce ne definește munca" },
                  { href: "/testimoniale", title: "Testimoniale", text: "Ce spun pacienții noștri" },
                ].map((item) => (
                  <a key={item.href} href={item.href} className={megaItemCls(item.href)} style={{
                    display: "grid", gap: 3, padding: "12px 10px", borderRadius: 8, color: "#fff",
                  }}>
                    <span className="mega-item-title" style={{ fontSize: 15, fontWeight: 600 }}>{item.title}</span>
                    <span style={{ fontSize: 12.5, lineHeight: 1.5, color: "rgba(255,255,255,0.68)" }}>{item.text}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <a href="/preturi" className={navCls("/preturi")} style={{ fontSize: 14.5, fontWeight: 500, padding: "4px 0" }}>Prețuri</a>
          <a href="/contact" className={navCls("/contact")} style={{ fontSize: 14.5, fontWeight: 500, padding: "4px 0" }}>Contact</a>
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
          <a href="/" className={mobCls("/")} style={{ padding: "13px 0", fontSize: 17, fontWeight: 600, color: "#fff", borderBottom: "1px solid rgba(255,255,255,0.14)" }}>Acasă</a>
          <a href="/servicii" className={mobCls("/servicii")} style={{ padding: "13px 0", fontSize: 17, fontWeight: 500, color: "rgba(255,255,255,0.82)", borderBottom: "1px solid rgba(255,255,255,0.14)" }}>Servicii</a>
          <a href="/despre" className={mobCls("/despre")} style={{ padding: "13px 0", fontSize: 17, fontWeight: 500, color: "rgba(255,255,255,0.82)", borderBottom: "1px solid rgba(255,255,255,0.14)" }}>Despre noi</a>
          <a href="/echipa" className={mobCls("/echipa")} style={{ padding: "13px 0", fontSize: 17, fontWeight: 500, color: "rgba(255,255,255,0.82)", borderBottom: "1px solid rgba(255,255,255,0.14)" }}>Echipă</a>
          <a href="/preturi" className={mobCls("/preturi")} style={{ padding: "13px 0", fontSize: 17, fontWeight: 500, color: "rgba(255,255,255,0.82)", borderBottom: "1px solid rgba(255,255,255,0.14)" }}>Prețuri</a>
          <a href="/contact" className={mobCls("/contact")} style={{ padding: "13px 0", fontSize: 17, fontWeight: 500, color: "rgba(255,255,255,0.82)" }}>Contact</a>
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
