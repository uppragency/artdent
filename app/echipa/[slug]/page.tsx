import { notFound } from "next/navigation";
import { doctor, teamMembers, site } from "@/lib/data";
import { OpenBookingButton } from "@/components/OpenBookingButton";
import { BookingSection } from "@/components/BookingSection";
import { pageMetadata } from "@/lib/seo";

const allMembers = [doctor, ...teamMembers];

export function generateStaticParams() {
  return allMembers.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const member = allMembers.find((m) => m.slug === slug);
  if (!member) return {};
  const shortBio = member.bio.length > 150 ? `${member.bio.slice(0, 147)}...` : member.bio;
  return pageMetadata({
    title: `${member.name} — ArtDent Slobozia`,
    description: `${member.name}, ${member.role} la ArtDent Slobozia. ${shortBio}`,
    path: `/echipa/${slug}`,
    image: member.image,
  });
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

  const crumbs = [{ label: "Acasă", href: "/" }, { label: "Echipă", href: "/echipa" }, { label: member.name }];
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${site.siteUrl}${c.href || `/echipa/${slug}`}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section style={{
        position: "relative", marginTop: -86, minHeight: 460, overflow: "hidden",
        backgroundImage: `url(${member.image})`, backgroundSize: "cover", backgroundPosition: "center",
        display: "flex", alignItems: "flex-end",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(2,20,25,0.15) 0%, rgba(10,20,18,0.92) 100%)" }} />
        <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", width: "100%", padding: "calc(86px + clamp(40px, 6vw, 72px)) clamp(16px, 3vw, 40px) clamp(32px, 5vw, 56px)" }}>
          <nav aria-label="breadcrumb" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8, marginBottom: 16, fontSize: 13 }}>
            {crumbs.map((c, i) => (
              <span key={c.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                {i > 0 && <span style={{ color: "rgba(255,255,255,0.4)" }}>/</span>}
                {c.href ? (
                  <a href={c.href} style={{ color: "rgba(255,255,255,0.72)" }}>{c.label}</a>
                ) : (
                  <span style={{ color: "var(--gold)" }}>{c.label}</span>
                )}
              </span>
            ))}
          </nav>
          <span className="font-mono-label" style={{ display: "block", marginBottom: 8, fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)" }}>
            {member.role}
          </span>
          <h1 className="font-display" style={{ margin: 0, fontWeight: 400, fontSize: "clamp(38px, 6vw, 76px)", lineHeight: 1, color: "#fff" }}>
            {member.name}
          </h1>
        </div>
      </section>

      <section style={{ background: "linear-gradient(180deg, #fff 0%, var(--white-to-blue) 100%)" }}>
        <div className="profile-grid-c" style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(48px, 6vw, 72px) clamp(16px, 3vw, 40px)", display: "grid", gridTemplateColumns: "1fr 320px", gap: "clamp(32px, 5vw, 56px)" }}>
          <div style={{ display: "grid", gap: 32 }}>
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.8, color: "var(--muted-3)", maxWidth: "62ch" }}>{member.bio}</p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {member.specializations.map((s) => (
                <span key={s} style={{ fontSize: 13, fontWeight: 500, padding: "8px 14px", borderRadius: 999, background: "var(--gold-tint-bg)", color: "var(--gold-tint-text)" }}>{s}</span>
              ))}
            </div>

            {experience && experience.length > 0 && (
              <div style={{ display: "grid", gap: 18 }}>
                <h2 className="font-display" style={{ margin: 0, fontWeight: 400, fontSize: "clamp(22px, 2.8vw, 30px)", color: "var(--teal-deep)" }}>
                  Experiență profesională
                </h2>
                {experience.map((e, i) => (
                  <div key={e.title} style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: 20, padding: "20px 0", borderTop: i === 0 ? "1px solid var(--line)" : "1px solid var(--line)" }}>
                    <span className="font-mono-label" style={{ fontSize: 12.5, color: "var(--gold-label-2)" }}>{e.period}</span>
                    <div>
                      <div style={{ fontSize: 16.5, fontWeight: 600, color: "var(--teal-deep)" }}>{e.title}</div>
                      <div style={{ fontSize: 14, lineHeight: 1.6, color: "var(--muted-2)", marginTop: 4 }}>{e.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {credentialGroups && credentialGroups.length > 0 && (
              <div style={{ display: "grid", gap: 28 }}>
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
          </div>

          <div style={{ display: "grid", gap: 16, alignContent: "start" }}>
            <OpenBookingButton className="btn-teal" style={{ display: "flex", fontSize: 15, fontWeight: 700, padding: "16px 24px", borderRadius: 4, textAlign: "center", justifyContent: "center" }}>
              Programează consultație
            </OpenBookingButton>
            <a href={site.phoneHref} className="btn-outline-dark" style={{ display: "flex", fontSize: 15, fontWeight: 700, padding: "16px 24px", borderRadius: 4, textAlign: "center", justifyContent: "center" }}>
              {site.phone}
            </a>

            {education && education.length > 0 && (
              <>
                <div style={{ height: 1, background: "var(--line)", margin: "12px 0" }} />
                <span className="font-mono-label" style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gold-label-2)" }}>Educație</span>
                {education.map((e, i) => (
                  <div key={i}>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "var(--ink)" }}>{e.title}</div>
                    <div style={{ fontSize: 12.5, color: "var(--muted)" }}>{e.place} · {e.period}</div>
                  </div>
                ))}
              </>
            )}
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
