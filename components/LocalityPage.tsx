import { services, usp, site } from "@/lib/data";
import { PageHero } from "@/components/PageHero";
import { BookingSection } from "@/components/BookingSection";
import { OpenBookingButton } from "@/components/OpenBookingButton";
import { dentistJsonLd } from "@/lib/seo";

export type LocalityContent = {
  slug: string;
  town: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  distance: string;
  time: string;
  intro: string[];
  faq: { q: string; a: string }[];
};

export async function LocalityPage({ content }: { content: LocalityContent }) {
  const { town, heroTitle, distance, time, intro, faq, slug } = content;

  const localBusinessJsonLd = await dentistJsonLd({
    url: `${site.siteUrl}/${slug}`,
    areaServed: [town, "Slobozia", "Ialomița"],
  });

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        eyebrow={`Dentist ${town}`}
        title={heroTitle}
        crumbs={[{ label: "Acasă", href: "/" }, { label: `Dentist ${town}` }]}
        currentPath={`/${slug}`}
      />

      <section style={{ background: "linear-gradient(180deg, #fff 0%, var(--white-to-blue) 100%)" }}>
        <div style={{ maxWidth: 780, margin: "0 auto", padding: "clamp(56px, 7vw, 88px) clamp(16px, 3vw, 40px)" }}>
          {intro.map((p, i) => (
            <p key={i} style={{ margin: "0 0 20px", fontSize: 16, lineHeight: 1.8, color: "var(--muted-2)" }}>{p}</p>
          ))}

          <div style={{
            display: "flex", flexWrap: "wrap", gap: 14, alignItems: "center", justifyContent: "space-between",
            border: "1px solid var(--line)", borderRadius: 8, padding: "18px 22px", marginBottom: 36, background: "var(--card)",
          }}>
            <div>
              <p style={{ margin: 0, fontSize: 15, fontWeight: 600, color: "var(--teal-deep)" }}>Distanță din {town} până la cabinet</p>
              <p style={{ margin: "4px 0 0", fontSize: 13.5, color: "var(--muted)" }}>{distance} · aproximativ {time} cu mașina</p>
            </div>
            <a href={site.directionsUrl} target="_blank" rel="noreferrer" className="btn-outline-dark" style={{ fontSize: 14, fontWeight: 600, padding: "12px 20px", borderRadius: 4 }}>
              Vezi traseul →
            </a>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14, marginBottom: 40 }}>
            {usp.map((u) => (
              <div key={u.title} style={{ border: "1px solid var(--line)", borderRadius: 8, padding: "18px 20px", background: "var(--card)" }}>
                <h2 style={{ margin: "0 0 8px", fontSize: 15.5, fontWeight: 600, color: "var(--teal-deep)" }}>{u.title}</h2>
                <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: "var(--muted)" }}>{u.text}</p>
              </div>
            ))}
          </div>

          <h2 className="font-display" style={{ margin: "0 0 20px", fontWeight: 400, fontSize: "clamp(24px, 3vw, 32px)", color: "var(--teal-deep)" }}>
            Servicii stomatologice disponibile
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12, marginBottom: 40 }}>
            {services.map((s) => (
              <a key={s.slug} href={`/servicii/${s.slug}`} className="service-card" style={{ display: "grid", gap: 6, padding: 18, borderRadius: 8 }}>
                <span style={{ fontSize: 15, fontWeight: 600, color: "var(--teal-deep)" }}>{s.title}</span>
                <span style={{ fontSize: 13, color: "var(--muted)" }}>{s.text}</span>
              </a>
            ))}
          </div>

          <h2 className="font-display" style={{ margin: "0 0 16px", fontWeight: 400, fontSize: "clamp(24px, 3vw, 32px)", color: "var(--teal-deep)" }}>
            Întrebări frecvente — pacienți din {town}
          </h2>
          <div style={{ display: "grid", gap: 10, marginBottom: 36 }}>
            {faq.map((f) => (
              <details key={f.q} style={{ border: "1px solid var(--line)", borderRadius: 8, padding: "14px 18px", background: "var(--card)" }}>
                <summary style={{ fontSize: 15, fontWeight: 600, color: "var(--teal-deep)", cursor: "pointer" }}>{f.q}</summary>
                <p style={{ margin: "10px 0 0", fontSize: 14, lineHeight: 1.65, color: "var(--muted-2)" }}>{f.a}</p>
              </details>
            ))}
          </div>

          <OpenBookingButton className="btn-teal" style={{ display: "inline-flex", fontSize: 15.5, fontWeight: 600, padding: "16px 28px", borderRadius: 4 }}>
            Programează o consultație
          </OpenBookingButton>
          <p style={{ marginTop: 16, fontSize: 14, color: "var(--muted)" }}>
            Sună la <a href={site.phoneHref} className="font-mono-label">{site.phone}</a> pentru programare din {town} sau completează formularul de mai jos.
          </p>
        </div>
      </section>

      <BookingSection />
    </>
  );
}
