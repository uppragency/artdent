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
