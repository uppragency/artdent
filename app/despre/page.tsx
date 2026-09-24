import { usp, site, values, doctor, teamMembers } from "@/lib/data";
import { BookingSection } from "@/components/BookingSection";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionSeam } from "@/components/SectionSeam";

export const metadata = { title: "Despre noi — ArtDent Slobozia" };

export default function DesprePage() {
  return (
    <>
    <PageHero
      eyebrow="Despre noi"
      title="Te ajutăm să-ți recapeți zâmbetul"
      accent="zâmbetul"
      crumbs={[{ label: "Acasă", href: "/" }, { label: "Despre noi" }]}
      currentPath="/despre"
    />

    <section style={{ background: "linear-gradient(180deg, #fff 0%, var(--white-to-blue) 100%)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(56px, 7vw, 88px) clamp(16px, 3vw, 40px) clamp(48px, 6vw, 80px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "clamp(28px, 4vw, 48px)", alignItems: "center" }}>
          <div role="img" aria-label="Pacient în cabinetul ArtDent Slobozia, în timpul unei consultații" style={{
            borderRadius: 10, overflow: "hidden", minHeight: 320,
            backgroundImage: "url(/images/portret-pacient-medic.jpg)", backgroundSize: "cover", backgroundPosition: "center",
          }} />
          <div style={{ display: "grid", gap: 16 }}>
            <p style={{ margin: 0, fontSize: 16.5, lineHeight: 1.7, color: "var(--muted-3)" }}>
              Profesioniști cu experiență oferă una dintre cele mai bune experiențe medicale într-un mediu curat și modern.
            </p>
            <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.75, color: "var(--muted-2)" }}>
              Centrul stomatologic ArtDent reprezintă un concept modern, unic, care se identifică prin atmosfera plăcută, dotare performantă și servicii de înaltă calitate. Centrul ArtDent aduce în prim plan calitatea, seriozitatea și eficiența serviciilor medicale pe termen lung.
            </p>
            <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.75, color: "var(--muted-2)" }}>
              Beneficiind de sisteme ultramoderne de igienă și sterilizare, specialiștii cu o calificare înaltă realizează cele mai performante și dificile lucrări stomatologice.
            </p>
          </div>
        </div>

        <div style={{ marginTop: 48, display: "grid", gap: 24 }}>
          {usp.map((u, i) => (
            <Reveal key={u.title} delay={i * 80}>
              <div style={{ borderLeft: "2px solid var(--gold)", paddingLeft: 20 }}>
                <p style={{ margin: 0, fontWeight: 600, color: "var(--teal-deep)" }}>{u.title}</p>
                <p style={{ margin: "4px 0 0", fontSize: 14.5, color: "var(--muted)" }}>{u.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div style={{ marginTop: 40, borderRadius: 10, background: "var(--cream-section)", padding: 24, fontSize: 14.5 }}>
          <p style={{ margin: 0, fontWeight: 600, color: "var(--teal-deep)" }}>Program și locație</p>
          <p style={{ margin: "8px 0 0" }}>{site.address}</p>
          <p style={{ margin: 0 }}>{site.hours}</p>
          <a href={site.phoneHref} className="font-mono-label" style={{ display: "inline-block", marginTop: 4 }}>{site.phone}</a>
        </div>
      </div>
    </section>

    <section style={{ background: "linear-gradient(180deg, var(--white-to-blue) 0%, #fff 100%)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(48px, 6vw, 80px) clamp(16px, 3vw, 40px) clamp(56px, 7vw, 96px)" }}>
        <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold-label)" }}>Formare și competențe</span>
        <h2 className="font-display" style={{ margin: "10px 0 28px", fontWeight: 400, fontSize: "clamp(26px, 3.4vw, 38px)", color: "var(--teal-deep)" }}>
          Experiență și specializare medicală verificabilă
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
          {[doctor, ...teamMembers].filter((m) => m.role.toLowerCase().includes("specialist") || m.slug === doctor.slug || m.role.toLowerCase().includes("medic dentist")).map((m, i) => (
            <Reveal key={m.slug} delay={i * 70}>
              <a href={`/echipa/${m.slug}`} style={{ display: "grid", gap: 8, border: "1px solid var(--line)", borderRadius: 8, background: "var(--card)", padding: 22, height: "100%", color: "inherit" }}>
                <span style={{ fontSize: 15.5, fontWeight: 600, color: "var(--teal-deep)" }}>{m.name}</span>
                <span className="font-mono-label" style={{ fontSize: 11, color: "var(--gold-label-2)" }}>{m.role}</span>
                <span style={{ fontSize: 14, lineHeight: 1.6, color: "var(--muted)" }}>{m.bio}</span>
              </a>
            </Reveal>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 32 }}>
          <a href="/echipa" className="btn-outline-dark" style={{ fontSize: 15, fontWeight: 600, padding: "14px 26px", borderRadius: 4, minHeight: 48, display: "flex", alignItems: "center" }}>
            Vezi întreaga echipă
          </a>
        </div>
      </div>
    </section>

    <section id="valori" className="dot-grid-gold" style={{ background: "var(--cream-section)", borderRadius: "48px 48px 0 0", marginTop: -48, position: "relative", zIndex: 1, scrollMarginTop: 100 }}>
      <SectionSeam />
      <div style={{
        maxWidth: 1100, margin: "0 auto",
        padding: "clamp(56px, 8vw, 96px) clamp(16px, 3vw, 40px) clamp(56px, 7vw, 96px)",
      }}>
        <div style={{ display: "grid", gap: 12, justifyItems: "center", textAlign: "center", marginBottom: "clamp(32px, 4vw, 48px)" }}>
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold-label)" }}>Valorile ArtDent</span>
          <h2 className="font-display" style={{ margin: 0, fontWeight: 400, fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.1, letterSpacing: "-0.015em", maxWidth: "20ch" }}>
            Valorile noastre de bază ne definesc munca
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
          {values.map((v, i) => (
            <Reveal key={v.num} delay={i * 80}>
              <div style={{ border: "1px solid var(--line)", borderRadius: 8, background: "var(--card)", padding: 26, display: "grid", gap: 8, height: "100%" }}>
                <span className="font-mono-label" style={{ fontSize: 12.5, color: "var(--gold-label-2)" }}>{v.num}</span>
                <h3 style={{ margin: 0, fontSize: 17.5, fontWeight: 600, letterSpacing: "-0.01em", color: "var(--teal-deep)" }}>{v.title}</h3>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "var(--muted)" }}>{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
          <a href="/servicii" className="btn-teal" style={{ fontSize: 15.5, fontWeight: 600, padding: "16px 30px", borderRadius: 4, minHeight: 52, display: "flex", alignItems: "center" }}>
            Servicii
          </a>
        </div>
      </div>
    </section>

    <BookingSection />
    </>
  );
}
