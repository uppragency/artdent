import { notFound } from "next/navigation";
import { services, serviceDetails, relatedServices, site } from "@/lib/data";
import { OpenBookingButton } from "@/components/OpenBookingButton";
import { BookingSection } from "@/components/BookingSection";
import { ServiceFaq } from "@/components/ServiceFaq";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { BenefitIcon } from "@/components/BenefitIcon";
import { SectionSeam } from "@/components/SectionSeam";
import { TrustBadges } from "@/components/TrustBadges";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const detail = serviceDetails[slug];
  if (!detail) return {};
  return { title: detail.metaTitle, description: detail.metaDescription };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  const detail = serviceDetails[slug];
  if (!service || !detail) notFound();

  const otherServices = services.filter((s) => s.slug !== slug);
  const crossSell = (relatedServices[slug] || [])
    .map((s) => services.find((sv) => sv.slug === s))
    .filter((s): s is (typeof services)[number] => Boolean(s));

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: detail.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        eyebrow="Servicii"
        title={service.title}
        crumbs={[{ label: "Acasă", href: "/" }, { label: "Servicii", href: "/servicii" }, { label: service.title }]}
      />

      <section style={{ background: "linear-gradient(180deg, #fff 0%, var(--white-to-blue) 100%)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "clamp(56px, 7vw, 88px) clamp(16px, 3vw, 40px)" }}>
          <span className="font-mono-label" style={{ fontSize: 11.5, color: "var(--gold-label-2)" }}>{service.num}</span>
          <p style={{ marginTop: 10, fontSize: 17, lineHeight: 1.7, color: "var(--muted-3)" }}>{detail.intro}</p>

          <div style={{ marginTop: 8, display: "flex", flexWrap: "wrap", gap: 8 }}>
            {service.items.map((it) => (
              <span key={it} style={{ fontSize: 13, fontWeight: 500, padding: "8px 14px", borderRadius: 999, background: "var(--gold-tint-bg)", color: "var(--gold-tint-text)" }}>{it}</span>
            ))}
          </div>

          <div style={{ marginTop: 28, display: "grid", gap: 18 }}>
            {detail.paragraphs.map((p, i) => (
              <p key={i} style={{ margin: 0, fontSize: 15.5, lineHeight: 1.75, color: "var(--muted-2)" }}>{p}</p>
            ))}
          </div>

          <OpenBookingButton className="btn-teal" style={{ display: "inline-flex", marginTop: 32, fontSize: 15.5, fontWeight: 600, padding: "16px 28px", borderRadius: 4 }}>
            Programează o consultație
          </OpenBookingButton>
          <div style={{ marginTop: 16 }}>
            <TrustBadges light={false} />
          </div>
        </div>
      </section>

      <section className="dot-grid-gold" style={{ background: "var(--cream-section)", borderRadius: "48px 48px 0 0", marginTop: -48, position: "relative", zIndex: 1 }}>
        <SectionSeam />
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "clamp(48px, 6vw, 80px) clamp(16px, 3vw, 40px) clamp(56px, 7vw, 96px)" }}>
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold-label)" }}>Beneficii</span>
          <h2 className="font-display" style={{ margin: "10px 0 28px", fontWeight: 400, fontSize: "clamp(26px, 3.4vw, 38px)", color: "var(--teal-deep)" }}>
            De ce să alegi acest tratament
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
            {detail.benefits.map((b, i) => (
              <Reveal key={b} delay={i * 60}>
                <div style={{ display: "flex", gap: 12, alignItems: "flex-start", border: "1px solid var(--line)", borderRadius: 8, background: "var(--card)", padding: "16px 18px", height: "100%" }}>
                  <span style={{
                    width: 30, height: 30, borderRadius: "50%", background: "var(--gold-tint-bg)", color: "var(--gold-label)",
                    display: "grid", placeItems: "center", flex: "0 0 auto",
                  }}>
                    <BenefitIcon index={i} />
                  </span>
                  <span style={{ fontSize: 14.5, lineHeight: 1.55, color: "var(--ink)", paddingTop: 5 }}>{b}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 860, margin: "0 auto", padding: "clamp(56px, 7vw, 96px) clamp(16px, 3vw, 40px) clamp(40px, 5vw, 64px)" }}>
        <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold-label)" }}>Întrebări frecvente</span>
        <h2 className="font-display" style={{ margin: "10px 0 24px", fontWeight: 400, fontSize: "clamp(26px, 3.4vw, 38px)", color: "var(--teal-deep)" }}>
          {service.title} — răspunsuri utile
        </h2>
        <ServiceFaq items={detail.faq} />

        <p style={{ marginTop: 28, fontSize: 14, color: "var(--muted)" }}>
          Nu ai găsit răspunsul căutat? Sună-ne la <a href={site.phoneHref} className="font-mono-label">{site.phone}</a> sau scrie-ne pe WhatsApp.
        </p>

        {crossSell.length > 0 && (
          <div style={{ marginTop: 28, paddingTop: 24, borderTop: "1px solid var(--line)", display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10 }}>
            <span style={{ fontSize: 13.5, color: "var(--muted)" }}>Pacienții interesați de acest tratament au căutat și:</span>
            {crossSell.map((s) => (
              <a key={s.slug} href={`/servicii/${s.slug}`} style={{
                fontSize: 13, fontWeight: 600, padding: "7px 14px", borderRadius: 999,
                background: "var(--gold-tint-bg)", color: "var(--gold-tint-text)",
              }}>
                {s.title}
              </a>
            ))}
          </div>
        )}
      </section>

      <section style={{ background: "linear-gradient(180deg, var(--white-to-blue) 0%, #fff 100%)", borderRadius: "48px 48px 0 0", position: "relative", zIndex: 1 }}>
        <SectionSeam />
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "clamp(40px, 5vw, 64px) clamp(16px, 3vw, 40px) 0" }}>
          <div style={{
            borderRadius: 10, background: "var(--teal-deep)", color: "oklch(0.97 0.012 90)",
            padding: "clamp(24px, 3vw, 32px)", display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center", justifyContent: "space-between",
          }}>
            <div style={{ display: "grid", gap: 6, maxWidth: "40ch" }}>
              <span style={{ fontSize: 15.5, fontWeight: 600 }}>Nu ești sigur ce tratament ți se potrivește?</span>
              <span style={{ fontSize: 13.5, lineHeight: 1.55, color: "oklch(0.88 0.015 190)" }}>Sună-ne pentru o recomandare — discutăm situația ta și te îndrumăm spre soluția potrivită.</span>
            </div>
            <a href={site.phoneHref} className="btn-outline-light-noscale" style={{ fontSize: 14.5, fontWeight: 600, padding: "13px 22px", borderRadius: 4, whiteSpace: "nowrap" }}>
              Sună acum · {site.phone}
            </a>
          </div>
        </div>

        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "clamp(40px, 5vw, 64px) clamp(16px, 3vw, 40px) clamp(56px, 7vw, 96px)" }}>
          <h2 className="font-display" style={{ margin: "0 0 20px", fontWeight: 400, fontSize: "clamp(22px, 2.8vw, 30px)", color: "var(--teal-deep)" }}>
            Alte servicii
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
            {otherServices.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <a href={`/servicii/${s.slug}`} className="service-card" style={{ display: "grid", gap: 8, padding: 22, borderRadius: 8, height: "100%" }}>
                  <span className="font-mono-label" style={{ fontSize: 11, color: "var(--gold-label-2)" }}>{s.num}</span>
                  <span style={{ fontSize: 16, fontWeight: 600, color: "var(--teal-deep)" }}>{s.title}</span>
                  <span style={{ fontSize: 13.5, color: "var(--muted)" }}>{s.text}</span>
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
