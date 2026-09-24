import { guides, site } from "@/lib/data";
import { PageHero } from "@/components/PageHero";
import { BookingSection } from "@/components/BookingSection";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: "Ghiduri dentare — ArtDent Slobozia",
  description: "Ghiduri utile despre sănătatea orală: sensibilitate dentară, bruxism, alimentație, sarcină, diabet și afecțiuni cardiovasculare.",
  alternates: { canonical: "/ghiduri" },
};

export default function GhiduriPage() {
  return (
    <>
      <PageHero
        eyebrow="Ghiduri"
        title="Ghiduri dentare"
        crumbs={[{ label: "Acasă", href: "/" }, { label: "Ghiduri" }]}
        currentPath="/ghiduri"
      />

      <section style={{ background: "linear-gradient(180deg, #fff 0%, var(--white-to-blue) 100%)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(56px, 7vw, 88px) clamp(16px, 3vw, 40px)" }}>
          <p style={{ margin: "0 0 32px", fontSize: 16, lineHeight: 1.7, color: "var(--muted-2)", maxWidth: "62ch" }}>
            Informații verificate despre sănătatea orală, explicate simplu, pentru a te ajuta să iei decizii informate despre tratamentul tău.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
            {guides.map((g, i) => (
              <Reveal key={g.slug} delay={i * 60}>
                <a href={`/ghiduri/${g.slug}`} className="service-card" style={{ display: "grid", gap: 12, padding: 24, borderRadius: 8, height: "100%" }}>
                  <h2 style={{ margin: 0, fontSize: 19, fontWeight: 600, letterSpacing: "-0.01em", color: "var(--teal-deep)" }}>{g.title}</h2>
                  <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "var(--muted)" }}>{g.excerpt}</p>
                  <span style={{ fontSize: 13.5, fontWeight: 600, color: "var(--teal-600)" }}>Citește ghidul →</span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BookingSection />
    </>
  );
}
