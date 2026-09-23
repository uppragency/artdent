import { pricing } from "@/lib/data";

export function Pricing() {
  return (
    <section className="noise-overlay" style={{
      backgroundColor: "var(--cream-section)", borderRadius: "48px 48px 0 0", marginTop: -48, position: "relative", zIndex: 1,
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "clamp(80px, 9vw, 128px) clamp(16px, 3vw, 40px) clamp(56px, 7vw, 104px)" }}>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 20, marginBottom: "clamp(32px, 4vw, 48px)" }}>
          <div style={{ display: "grid", gap: 12 }}>
            <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold-label)" }}>Tarife</span>
            <h2 className="font-display" style={{ margin: 0, fontWeight: 400, fontSize: "clamp(30px, 4.4vw, 50px)", lineHeight: 1.05, letterSpacing: "-0.015em" }}>
              Prețuri clare, fără costuri ascunse
            </h2>
          </div>
          <a href="/servicii" style={{ fontSize: 15, fontWeight: 600, color: "var(--teal-600)" }}>Lista completă de prețuri →</a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 16 }}>
          {pricing.map((p) => (
            <div key={p.title} style={{
              display: "grid", gap: 14, padding: 28, borderRadius: 8, alignContent: "start", position: "relative",
              background: p.popular ? "var(--teal-deep)" : "var(--card)",
              border: `1px solid ${p.popular ? "var(--teal-deep)" : "var(--line)"}`,
              color: p.popular ? "oklch(0.97 0.012 90)" : "var(--ink)",
            }}>
              {p.popular && (
                <span style={{
                  position: "absolute", top: -12, right: 20, background: "var(--gold)", color: "oklch(0.26 0.04 190)",
                  fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", padding: "5px 10px", borderRadius: 999,
                }}>
                  Popular
                </span>
              )}
              <span style={{ fontSize: 15, fontWeight: 600 }}>{p.title}</span>
              <span className="font-display" style={{ fontSize: 34, color: p.popular ? "var(--gold)" : "var(--teal-deep)" }}>{p.price}</span>
              <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: p.popular ? "oklch(0.88 0.015 190)" : "var(--muted)" }}>{p.text}</p>
            </div>
          ))}
        </div>
        <p style={{ margin: "24px 0 0", fontSize: 13.5, color: "var(--muted)" }}>
          Prețurile finale se stabilesc după consultație, în funcție de planul de tratament personalizat.
        </p>
      </div>
    </section>
  );
}
