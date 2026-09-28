import { doctor, teamMembers } from "@/lib/data";
import { OpenBookingButton } from "@/components/OpenBookingButton";
import { BookingSection } from "@/components/BookingSection";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Echipă — ArtDent Slobozia",
  description: "Cunoaște medicii și echipa ArtDent Slobozia: stomatologie generală, ortodonție, chirurgie dento-alveolară și implantologie, sub coordonarea Dr. Mihaela Zupcu.",
  path: "/echipa",
});

export default function EchipaPage() {
  const all = [doctor, ...teamMembers];

  return (
    <>
    <PageHero
      eyebrow="Echipa medicală"
      title="Medicii ArtDent Slobozia"
      crumbs={[{ label: "Acasă", href: "/" }, { label: "Echipă" }]}
      currentPath="/echipa"
    />
    <section style={{ background: "var(--teal-deep)", borderRadius: "48px 48px 0 0", marginTop: -48, position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "clamp(64px, 8vw, 96px) clamp(16px, 3vw, 40px)" }}>
        <div className="team-grid-c" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2, background: "rgba(250,246,238,0.15)" }}>
          {all.map((m, i) => (
            <Reveal key={m.slug} delay={i * 70}>
              <a
                href={`/echipa/${m.slug}`}
                aria-label={`Portret ${m.name}, ${m.role} la ArtDent Slobozia`}
                style={{
                  position: "relative", display: "block", aspectRatio: "4/3", overflow: "hidden",
                  backgroundImage: `url(${m.image})`, backgroundSize: "cover", backgroundPosition: "center",
                }}
              >
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, rgba(15,25,23,0.88) 100%)" }} />
                <div style={{ position: "absolute", left: 24, right: 24, bottom: 22, display: "grid", gap: 4 }}>
                  <span className="font-mono-label" style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold)" }}>{m.role}</span>
                  <h2 className="font-display" style={{ margin: 0, fontWeight: 400, fontSize: "clamp(24px, 2.6vw, 34px)", lineHeight: 1.05, color: "#fff" }}>{m.name}</h2>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <OpenBookingButton className="btn-outline-light-noscale" style={{ display: "inline-flex", marginTop: 40, fontSize: 15.5, fontWeight: 600, padding: "16px 28px", borderRadius: 4 }}>
          Programează o consultație
        </OpenBookingButton>
      </div>
    </section>
    <BookingSection />
    </>
  );
}
