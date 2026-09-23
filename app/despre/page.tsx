import { usp, site } from "@/lib/data";
import { BookingSection } from "@/components/BookingSection";

export const metadata = { title: "Despre noi — ArtDent Slobozia" };

export default function DesprePage() {
  return (
    <>
    <section style={{ maxWidth: 860, margin: "0 auto", padding: "clamp(64px, 8vw, 112px) clamp(16px, 3vw, 40px)" }}>
      <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold-label)" }}>Despre noi</span>
      <h1 className="font-display" style={{ margin: "10px 0 0", fontWeight: 400, fontSize: "clamp(34px, 5vw, 52px)", lineHeight: 1.05, letterSpacing: "-0.015em", color: "var(--teal-deep)" }}>
        Concept dental boutique, în {site.city}
      </h1>
      <p style={{ marginTop: 20, fontSize: 16, lineHeight: 1.7, color: "var(--muted-3)" }}>
        ArtDent funcționează ca o clinică de proximitate cu standard de oraș mare: aparatură performantă, protocoale medicale respectate la fiecare pas și timp alocat fiecărui pacient, pentru ca tratamentul să fie explicat înainte de a fi început. Fiecare plan de tratament pornește de la un diagnostic riguros, nu de la o soluție rapidă aplicată tuturor pacienților.
      </p>

      <div style={{ marginTop: 40, display: "grid", gap: 24 }}>
        {usp.map((u) => (
          <div key={u.title} style={{ borderLeft: "2px solid var(--gold)", paddingLeft: 20 }}>
            <p style={{ margin: 0, fontWeight: 600, color: "var(--teal-deep)" }}>{u.title}</p>
            <p style={{ margin: "4px 0 0", fontSize: 14.5, color: "var(--muted)" }}>{u.text}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 40, borderRadius: 10, background: "var(--cream-section)", padding: 24, fontSize: 14.5 }}>
        <p style={{ margin: 0, fontWeight: 600, color: "var(--teal-deep)" }}>Program și locație</p>
        <p style={{ margin: "8px 0 0" }}>{site.address}</p>
        <p style={{ margin: 0 }}>{site.hours}</p>
        <a href={site.phoneHref} className="font-mono-label" style={{ display: "inline-block", marginTop: 4 }}>{site.phone}</a>
      </div>
    </section>
    <BookingSection />
    </>
  );
}
