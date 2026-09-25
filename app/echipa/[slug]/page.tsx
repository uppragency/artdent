import { notFound } from "next/navigation";
import { doctor, teamMembers, site } from "@/lib/data";
import { PageHero } from "@/components/PageHero";
import { OpenBookingButton } from "@/components/OpenBookingButton";
import { BookingSection } from "@/components/BookingSection";

const allMembers = [doctor, ...teamMembers];

export function generateStaticParams() {
  return allMembers.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = allMembers.find((m) => m.slug === slug);
  if (!member) return {};
  return {
    title: `${member.name} — ArtDent Slobozia`,
    description: `${member.name}, ${member.role} la ArtDent Slobozia. ${member.bio}`,
    alternates: { canonical: `/echipa/${slug}` },
  };
}

export default async function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = allMembers.find((m) => m.slug === slug);
  if (!member) notFound();

  const others = allMembers.filter((m) => m.slug !== slug);

  // Câmpuri extinse, opționale — completate doar pentru unii membri ai echipei (ex. Dr. Maxim, Dr. Afif).
  const memberExt = member as typeof member & {
    experience?: { title: string; period: string; text: string }[];
    education?: { period: string; title: string; place: string }[];
    credentialGroups?: { heading: string; items: string[] }[];
  };
  const { experience, education, credentialGroups } = memberExt;

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.name,
    jobTitle: member.role,
    image: `${site.siteUrl}${member.image}`,
    description: member.bio,
    knowsAbout: member.specializations,
    worksFor: {
      "@type": "Dentist",
      name: "ArtDent Slobozia",
      url: site.siteUrl,
    },
    url: `${site.siteUrl}/echipa/${slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <PageHero
        eyebrow="Echipa medicală"
        title={member.name}
        crumbs={[{ label: "Acasă", href: "/" }, { label: "Echipă", href: "/echipa" }, { label: member.name }]}
        currentPath={`/echipa/${slug}`}
      />

      <section style={{ background: "linear-gradient(180deg, #fff 0%, var(--white-to-blue) 100%)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "clamp(56px, 7vw, 88px) clamp(16px, 3vw, 40px)" }}>
          <div role="img" aria-label={`Portret ${member.name}, ${member.role} la ArtDent Slobozia`} style={{ aspectRatio: "16/9", borderRadius: 10, marginBottom: 32, backgroundImage: `url(${member.image})`, backgroundSize: "cover", backgroundPosition: "center" }} />

          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold-label)" }}>{member.role}</span>
          <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.75, color: "var(--muted-2)", maxWidth: "60ch" }}>{member.bio}</p>

          <div style={{ marginTop: 20, display: "flex", flexWrap: "wrap", gap: 8 }}>
            {member.specializations.map((s) => (
              <span key={s} style={{ fontSize: 13, fontWeight: 500, padding: "8px 14px", borderRadius: 999, background: "var(--gold-tint-bg)", color: "var(--gold-tint-text)" }}>{s}</span>
            ))}
          </div>

          {experience && experience.length > 0 && (
            <div style={{ marginTop: 40 }}>
              <h2 className="font-display" style={{ margin: "0 0 18px", fontWeight: 400, fontSize: "clamp(20px, 2.4vw, 26px)", color: "var(--teal-deep)" }}>
                Experiență profesională
              </h2>
              <div style={{ display: "grid", gap: 14 }}>
                {experience.map((e) => (
                  <div key={e.title} style={{ border: "1px solid var(--line)", borderRadius: 8, padding: "18px 20px", background: "var(--card)" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 8, marginBottom: 6 }}>
                      <span style={{ fontSize: 15.5, fontWeight: 600, color: "var(--teal-deep)" }}>{e.title}</span>
                      <span className="font-mono-label" style={{ fontSize: 11.5, color: "var(--gold-label-2)" }}>{e.period}</span>
                    </div>
                    <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: "var(--muted-2)" }}>{e.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {education && education.length > 0 && (
            <div style={{ marginTop: 40 }}>
              <h2 className="font-display" style={{ margin: "0 0 18px", fontWeight: 400, fontSize: "clamp(20px, 2.4vw, 26px)", color: "var(--teal-deep)" }}>
                Educație și formare
              </h2>
              <div style={{ display: "grid", gap: 10 }}>
                {education.map((e, i) => (
                  <div key={i} style={{ display: "flex", gap: 16, borderTop: i === 0 ? "1px solid var(--line-2)" : undefined, borderBottom: "1px solid var(--line-2)", padding: "14px 0" }}>
                    <span className="font-mono-label" style={{ fontSize: 12, color: "var(--gold-label-2)", flex: "0 0 auto", minWidth: 110 }}>{e.period}</span>
                    <div>
                      <div style={{ fontSize: 14.5, fontWeight: 600, color: "var(--ink)" }}>{e.title}</div>
                      <div style={{ fontSize: 13, color: "var(--muted)" }}>{e.place}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {credentialGroups && credentialGroups.length > 0 && (
            <div style={{ marginTop: 40, display: "grid", gap: 28 }}>
              {credentialGroups.map((g) => (
                <div key={g.heading}>
                  <h3 style={{ margin: "0 0 12px", fontSize: 16.5, fontWeight: 600, color: "var(--teal-deep)" }}>{g.heading}</h3>
                  <ul style={{ margin: 0, padding: "0 0 0 18px", display: "grid", gap: 8 }}>
                    {g.items.map((it, i) => (
                      <li key={i} style={{ fontSize: 14, lineHeight: 1.6, color: "var(--muted-2)" }}>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 32 }}>
            <OpenBookingButton className="btn-teal" style={{ fontSize: 15.5, fontWeight: 600, padding: "16px 28px", borderRadius: 4, display: "inline-flex", alignItems: "center" }}>
              Programează o consultație
            </OpenBookingButton>
            <a href={site.phoneHref} className="btn-outline-dark" style={{ fontSize: 15.5, fontWeight: 600, padding: "16px 28px", borderRadius: 4, display: "inline-flex", alignItems: "center" }}>
              {site.phone}
            </a>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 clamp(16px, 3vw, 40px) clamp(56px, 7vw, 96px)" }}>
        <h2 className="font-display" style={{ margin: "0 0 20px", fontWeight: 400, fontSize: "clamp(22px, 2.8vw, 30px)", color: "var(--teal-deep)" }}>
          Restul echipei
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
          {others.map((m) => (
            <a key={m.slug} href={`/echipa/${m.slug}`} className="service-card" style={{ display: "grid", gap: 6, padding: 20, borderRadius: 8 }}>
              <span style={{ fontSize: 15.5, fontWeight: 600, color: "var(--teal-deep)" }}>{m.name}</span>
              <span style={{ fontSize: 13, color: "var(--muted)" }}>{m.role}</span>
            </a>
          ))}
        </div>
      </section>

      <BookingSection />
    </>
  );
}
