import { featuredSolutions } from "@/lib/data";

export function Solutions() {
  return (
    <section style={{
      maxWidth: 1280, margin: "0 auto", padding: "clamp(64px, 8vw, 120px) clamp(16px, 3vw, 40px)",
      position: "relative", overflow: "hidden",
      background: "linear-gradient(180deg, var(--white-to-blue) 0%, #fff 100%)",
    }}>
      <div style={{ display: "grid", gap: 12, marginBottom: "clamp(36px, 5vw, 56px)" }}>
        <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold-label)" }}>Clinică modernă</span>
        <h2 className="font-display" style={{ margin: 0, fontWeight: 400, fontSize: "clamp(32px, 4.6vw, 54px)", lineHeight: 1.05, letterSpacing: "-0.015em", maxWidth: "22ch" }}>
          Soluții complete și reabilitări complexe
        </h2>
      </div>
      <div style={{ display: "grid" }}>
        {featuredSolutions.map((s, i) => (
          <div key={s.num} className="solution-row" style={{
            display: "grid", gridTemplateColumns: "minmax(0, auto) minmax(240px, 1.1fr) minmax(260px, 1.4fr)",
            gap: "clamp(16px, 3vw, 44px)", padding: "clamp(24px, 3vw, 34px) 0",
            borderTop: "1px solid var(--line)",
            borderBottom: i === featuredSolutions.length - 1 ? "1px solid var(--line)" : undefined,
            alignItems: "start",
          }}>
            <span className="font-mono-label" style={{ fontSize: 14, color: "var(--gold-label-2)" }}>{s.num}</span>
            <h3 style={{ margin: 0, fontSize: "clamp(21px, 2.4vw, 28px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.2 }}>{s.title}</h3>
            <div style={{ display: "grid", gap: 14, justifyItems: "start" }}>
              <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.65, color: "var(--muted-2)" }}>{s.text}</p>
              <a href={s.href || "#programare"} style={{ fontSize: 14.5, fontWeight: 600 }}>
                {s.href ? "Află mai multe" : "Programează o consultație"} →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
