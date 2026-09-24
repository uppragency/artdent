import { pricing, services } from "@/lib/data";
import { OpenBookingButton } from "@/components/OpenBookingButton";
import { BookingSection } from "@/components/BookingSection";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const metadata = { title: "Servicii și prețuri — ArtDent Slobozia" };

export default function ServiciiPage() {
  return (
    <>
    <PageHero
      eyebrow="Servicii & prețuri"
      title="Tot ce ai nevoie, într-un singur loc"
      crumbs={[{ label: "Acasă", href: "/" }, { label: "Servicii" }]}
      currentPath="/servicii"
    />
    <section style={{ background: "linear-gradient(180deg, #fff 0%, var(--white-to-blue) 100%)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "clamp(56px, 7vw, 88px) clamp(16px, 3vw, 40px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <a id={s.slug} href={`/servicii/${s.slug}`} className="service-card" style={{ display: "block", borderRadius: 8, padding: 26, color: "inherit", height: "100%" }}>
                <span className="font-mono-label" style={{ fontSize: 11.5, color: "var(--gold-label-2)" }}>{s.num}</span>
                <h2 className="font-display" style={{ margin: "8px 0 0", fontSize: 20, color: "var(--teal-deep)" }}>{s.title}</h2>
                <p style={{ margin: "8px 0 0", fontSize: 14.5, color: "var(--muted)" }}>{s.text}</p>
                <ul style={{ margin: "12px 0 0", padding: 0, listStyle: "none", display: "grid", gap: 4 }}>
                  {s.items.map((it) => <li key={it} style={{ fontSize: 13, color: "var(--muted)" }}>· {it}</li>)}
                </ul>
              </a>
            </Reveal>
          ))}
        </div>

        <h2 className="font-display" style={{ marginTop: 56, fontSize: "clamp(26px, 3.6vw, 38px)", color: "var(--teal-deep)" }}>Tarife orientative</h2>
        <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
          {pricing.map((p) => (
            <div key={p.title} style={{
              display: "grid", gap: 12, padding: 26, borderRadius: 8,
              background: p.popular ? "var(--teal-deep)" : "var(--card)",
              border: `1px solid ${p.popular ? "var(--teal-deep)" : "var(--line)"}`,
              color: p.popular ? "oklch(0.97 0.012 90)" : "var(--ink)",
            }}>
              {p.popular && <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", color: "var(--gold)" }}>Popular</span>}
              <h3 style={{ margin: 0, fontSize: 15, fontWeight: 600 }}>{p.title}</h3>
              <span className="font-display" style={{ fontSize: 28, color: p.popular ? "var(--gold)" : "var(--teal-deep)" }}>{p.price}</span>
              <p style={{ margin: 0, fontSize: 13.5, color: p.popular ? "oklch(0.88 0.015 190)" : "var(--muted)" }}>{p.text}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 20, fontSize: 13.5, color: "var(--muted)" }}>
          Prețurile finale se stabilesc după consultație, în funcție de planul de tratament personalizat.
        </p>

        <OpenBookingButton className="btn-teal" style={{ display: "inline-flex", marginTop: 32, fontSize: 15.5, fontWeight: 600, padding: "16px 28px", borderRadius: 4 }}>
          Programează o consultație
        </OpenBookingButton>
      </div>
    </section>
    <BookingSection />
    </>
  );
}
