"use client";

import { useBooking } from "@/lib/booking-context";
import { site } from "@/lib/data";
import { TrustBadges } from "@/components/TrustBadges";
import { useCtaVariant } from "@/lib/use-cta-variant";
import { useBusinessHours } from "@/lib/use-business-hours";

export function Hero() {
  const { openModal } = useBooking();
  const cta = useCtaVariant();
  const hours = useBusinessHours();

  return (
    <section
      className="dot-grid-teal noise-overlay"
      style={{
        position: "relative",
        marginTop: "-86px",
        background: "radial-gradient(circle at 22% 8%, oklch(0.34 0.05 195) 0%, #024B5C 55%)",
        backgroundBlendMode: "normal",
        color: "oklch(0.97 0.012 90)",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute", width: 420, height: 420, borderRadius: "50%",
        background: "oklch(0.83 0.1 88 / 0.14)", filter: "blur(70px)", top: -120, right: -100, pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: 1280, margin: "0 auto",
        padding: "86px clamp(16px, 3vw, 40px) 0",
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "clamp(28px, 4vw, 56px)", alignItems: "center", minHeight: "min(88vh, 760px)",
      }}>
        <div style={{ display: "grid", gap: 26, justifyItems: "start", padding: "clamp(48px, 7vw, 88px) 0" }}>
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.24em", textTransform: "uppercase", color: "oklch(0.78 0.08 88)" }}>
            Clinică stomatologică · {site.city}
          </span>
          <h1 className="font-display" style={{
            margin: 0, fontWeight: 400, fontSize: "clamp(44px, 7vw, 84px)", lineHeight: 0.98, letterSpacing: "-0.02em",
          }}>
            Te ajutăm să-ți recapeți <span className="accent-gradient">zâmbetul</span>
          </h1>
          <p style={{ margin: 0, fontSize: "clamp(16.5px, 1.7vw, 19px)", lineHeight: 1.6, color: "oklch(0.88 0.015 190)", maxWidth: "44ch" }}>
            Implantologie, ortodonție și estetică dentară într-o clinică unde fiecare plan de tratament pornește de la un diagnostic riguros și o discuție onestă.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, paddingTop: 6 }}>
            <a href="#programare" onClick={(e) => { e.preventDefault(); cta.trackClick(); openModal(); }} className="btn-gold" style={{
              fontSize: 16, fontWeight: 600, padding: "17px 30px", borderRadius: 4, minHeight: 54, display: "flex", alignItems: "center",
            }}>
              {cta.label}
            </a>
            {hours.checked && !hours.isOpen ? (
              <a href="#programare" onClick={(e) => { e.preventDefault(); openModal(); }} className="btn-outline-light" style={{
                fontSize: 16, fontWeight: 600, padding: "17px 30px", borderRadius: 4, minHeight: 54, display: "flex", alignItems: "center",
              }}>
                Lasă-ne un mesaj, te sunăm {hours.nextOpening}
              </a>
            ) : (
              <a href={site.phoneHref} className="btn-outline-light" style={{
                fontSize: 16, fontWeight: 600, padding: "17px 30px", borderRadius: 4, minHeight: 54, display: "flex", alignItems: "center",
              }}>
                Sună acum
              </a>
            )}
          </div>
          <TrustBadges light />
          <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "oklch(0.8 0.015 190)" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)" }} />
            <span>{site.address} · {site.hours}</span>
          </div>
        </div>

        <div style={{
          alignSelf: "stretch", position: "relative", display: "grid",
          gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1.35fr 1fr", gap: 10,
          padding: "clamp(24px, 4vw, 56px) 0", minHeight: 420,
        }}>
          <div role="img" aria-label="Pacient tratat de un medic la clinica ArtDent Slobozia" style={{
            gridColumn: "span 2", position: "relative", borderRadius: 6, overflow: "hidden",
            backgroundImage: "url(/images/portret-pacient-medic.jpg)", backgroundSize: "cover", backgroundPosition: "center",
          }}>
            <div style={{
              position: "absolute", top: -16, right: -12, background: "#fff", borderRadius: 999,
              padding: "12px 18px", display: "flex", alignItems: "center", gap: 8,
              boxShadow: "0 14px 32px -18px rgba(2,47,58,0.5)", animation: "artdentPop .5s ease .3s both",
            }}>
              <span style={{ fontSize: 13, letterSpacing: "0.1em", color: "var(--gold-star)" }}>★★★★★</span>
              <span style={{ fontSize: 13.5, fontWeight: 700, color: "var(--teal-deeper)" }}>4,9 Google</span>
            </div>
          </div>
          <div role="img" aria-label="Cabinetul stomatologic ArtDent Slobozia" style={{
            borderRadius: 6, overflow: "hidden",
            backgroundImage: "url(/images/cabinet.jpeg)", backgroundSize: "cover", backgroundPosition: "center",
          }} />
          <div role="img" aria-label="Detaliu al unui tratament stomatologic la ArtDent Slobozia" style={{
            borderRadius: 6, overflow: "hidden",
            backgroundImage: "url(/images/detaliu-tratament.jpg)", backgroundSize: "cover", backgroundPosition: "center",
          }} />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", paddingBottom: 22 }}>
        <span className="font-mono-label" style={{
          fontSize: 10.5, letterSpacing: "0.18em", textTransform: "uppercase", color: "oklch(0.82 0.02 190)",
          display: "grid", justifyItems: "center", gap: 8, animation: "artdentBob 2.4s ease-in-out infinite",
        }}>
          Derulează<span style={{ width: 1, height: 22, background: "var(--gold)" }} />
        </span>
      </div>
    </section>
  );
}
