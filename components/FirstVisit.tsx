import { processSteps } from "@/lib/data";

export function FirstVisit() {
  return (
    <section style={{
      maxWidth: 1280, margin: "0 auto", padding: "clamp(64px, 8vw, 112px) clamp(16px, 3vw, 40px)",
      position: "relative", overflow: "hidden",
      background: "linear-gradient(180deg, #fff 0%, var(--white-to-blue) 100%)",
    }}>
      <div style={{ display: "grid", gap: 12, marginBottom: "clamp(36px, 5vw, 56px)", justifyItems: "start" }}>
        <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold-label)" }}>Prima vizită</span>
        <h2 className="font-display" style={{ margin: 0, fontWeight: 400, fontSize: "clamp(30px, 4.4vw, 50px)", lineHeight: 1.05, letterSpacing: "-0.015em", maxWidth: "20ch" }}>
          Ce se întâmplă la prima ta vizită
        </h2>
        <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, color: "var(--muted)", maxWidth: "52ch" }}>
          Nu se întâmplă nimic pe surprindere. Fiecare pas este explicat înainte să se petreacă.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "clamp(16px, 3vw, 32px)" }}>
        {processSteps.map((s, i) => (
          <div key={s.n} style={{ display: "grid", gap: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span className="font-display" style={{
                width: 42, height: 42, borderRadius: "50%", background: "var(--teal-deep)", color: "#fff",
                display: "grid", placeItems: "center", fontSize: 18, flex: "0 0 auto",
              }}>
                {s.n}
              </span>
              {i < processSteps.length - 1 && <span style={{ flex: 1, height: 2, background: "var(--line-2)" }} />}
            </div>
            <h3 style={{ margin: 0, fontSize: 18.5, fontWeight: 600, letterSpacing: "-0.01em" }}>{s.title}</h3>
            <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "var(--muted)" }}>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
