import { site } from "@/lib/data";
import { BookingFormFields } from "@/components/BookingFormFields";
import { TrustBadges } from "@/components/TrustBadges";

export function BookingSection() {
  return (
    <section id="programare" className="dot-grid-teal noise-overlay" style={{
      background: "radial-gradient(circle at 15% 100%, oklch(0.34 0.05 195) 0%, #024B5C 55%)",
      color: "oklch(0.97 0.012 90)", borderRadius: "48px 48px 0 0", marginTop: -48,
      position: "relative", zIndex: 1, overflow: "hidden",
    }}>
      <div style={{ position: "absolute", width: 360, height: 360, borderRadius: "50%", background: "oklch(0.83 0.1 88 / 0.13)", filter: "blur(70px)", top: -100, right: -80, pointerEvents: "none" }} />
      <div style={{
        maxWidth: 1280, margin: "0 auto", padding: "calc(clamp(56px, 7vw, 104px) + 48px + 20px) clamp(16px, 3vw, 40px) clamp(56px, 7vw, 104px)",
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "clamp(32px, 5vw, 72px)", alignItems: "center",
      }}>
        <div style={{ display: "grid", gap: 22, justifyItems: "start" }}>
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold)" }}>Solicită o consultație</span>
          <h2 className="font-display" style={{ margin: 0, fontWeight: 400, fontSize: "clamp(34px, 5vw, 60px)", lineHeight: 1.02, letterSpacing: "-0.02em" }}>
            Programează-te astăzi
          </h2>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.65, color: "oklch(0.9 0.02 130)", maxWidth: "42ch" }}>
            Lasă numele și numărul de telefon, iar noi te contactăm în aceeași zi pentru confirmarea orei. Preferi mai direct? Scrie-ne pe WhatsApp.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <a href={`https://wa.me/${site.whatsappNumber}`} target="_blank" rel="noreferrer" className="btn-outline-light-noscale" style={{ fontSize: 15.5, fontWeight: 600, padding: "15px 26px", borderRadius: 4, minHeight: 52, display: "flex", alignItems: "center" }}>
              Scrie-ne pe WhatsApp
            </a>
            <a href={site.phoneHref} className="btn-outline-light-noscale" style={{ fontSize: 15.5, fontWeight: 600, padding: "15px 26px", borderRadius: 4, minHeight: 52, display: "flex", alignItems: "center" }}>
              {site.phone}
            </a>
          </div>
          <TrustBadges light />
        </div>
        <div style={{ padding: "clamp(24px, 3vw, 36px)", borderRadius: 10, background: "var(--cream)", color: "var(--ink)" }}>
          <BookingFormFields dark />
        </div>
      </div>
    </section>
  );
}
