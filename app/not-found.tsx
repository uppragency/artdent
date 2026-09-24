import { site } from "@/lib/data";
import { OpenBookingButton } from "@/components/OpenBookingButton";
import { ToothMotif } from "@/components/ToothMotif";

export const metadata = { title: "Pagina nu a fost găsită — ArtDent Slobozia" };

export default function NotFound() {
  return (
    <section
      className="dot-grid-teal noise-overlay"
      style={{
        position: "relative",
        marginTop: "-86px",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        background: "radial-gradient(circle at 22% 8%, oklch(0.34 0.05 195) 0%, #024B5C 55%)",
        color: "oklch(0.97 0.012 90)",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute", width: 360, height: 360, borderRadius: "50%",
        background: "oklch(0.83 0.1 88 / 0.13)", filter: "blur(70px)", top: -100, right: -80, pointerEvents: "none",
      }} />
      <ToothMotif style={{ bottom: -30, left: -20, transform: "rotate(-12deg)" }} />

      <div style={{ maxWidth: 640, margin: "0 auto", padding: "86px clamp(16px, 3vw, 40px) 64px", textAlign: "center", position: "relative" }}>
        <span className="font-mono-label" style={{ fontSize: 13, letterSpacing: "0.2em", color: "oklch(0.78 0.08 88)" }}>EROARE 404</span>
        <h1 className="font-display" style={{ margin: "14px 0 18px", fontWeight: 400, fontSize: "clamp(38px, 6vw, 64px)", lineHeight: 1.05 }}>
          Pagina nu a fost găsită
        </h1>
        <p style={{ margin: "0 0 32px", fontSize: 16.5, lineHeight: 1.65, color: "oklch(0.88 0.015 190)" }}>
          Linkul accesat nu mai există sau a fost mutat. Poți reveni la pagina principală sau ne poți contacta direct pentru orice întrebare.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
          <a href="/" className="btn-gold" style={{ fontSize: 15.5, fontWeight: 600, padding: "16px 28px", borderRadius: 4, minHeight: 52, display: "flex", alignItems: "center" }}>
            Înapoi la Acasă
          </a>
          <OpenBookingButton className="btn-outline-light" style={{ fontSize: 15.5, fontWeight: 600, padding: "16px 28px", borderRadius: 4, minHeight: 52, display: "inline-flex", alignItems: "center" }}>
            Programează-te
          </OpenBookingButton>
        </div>
        <p style={{ marginTop: 28, fontSize: 13.5, color: "oklch(0.8 0.015 190)" }}>
          Sau sună-ne direct la <a href={site.phoneHref} style={{ color: "oklch(0.97 0.012 90)", textDecoration: "underline" }}>{site.phone}</a>
        </p>
      </div>
    </section>
  );
}
