import { notFound } from "next/navigation";
import { services, serviceDetails, site } from "@/lib/data";
import { OpenBookingButton } from "@/components/OpenBookingButton";
import { BookingSection } from "@/components/BookingSection";
import { ServiceFaq } from "@/components/ServiceFaq";

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

  const otherServices = services.filter((s) => s.slug !== params.slug);

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

      <section style={{ maxWidth: 860, margin: "0 auto", padding: "clamp(64px, 8vw, 112px) clamp(16px, 3vw, 40px) 0" }}>
        <p style={{ margin: "0 0 16px", fontSize: 13, color: "var(--muted)" }}>
          <a href="/servicii" style={{ color: "var(--teal-600)" }}>Servicii</a> · {service.title}
        </p>
        <span className="font-mono-label" style={{ fontSize: 11.5, color: "var(--gold-label-2)" }}>{service.num}</span>
        <h1 className="font-display" style={{ margin: "8px 0 0", fontWeight: 400, fontSize: "clamp(32px, 4.6vw, 50px)", lineHeight: 1.06, letterSpacing: "-0.015em", color: "var(--teal-deep)" }}>
          {service.title}
        </h1>
        <p style={{ marginTop: 20, fontSize: 17, lineHeight: 1.7, color: "var(--muted-3)" }}>{detail.intro}</p>

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
      </section>

      <section className="dot-grid-gold" style={{ background: "var(--cream-section)", borderRadius: "48px 48px 0 0", marginTop: 48, position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "clamp(56px, 7vw, 96px) clamp(16px, 3vw, 40px)" }}>
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold-label)" }}>Beneficii</span>
          <h2 className="font-display" style={{ margin: "10px 0 28px", fontWeight: 400, fontSize: "clamp(26px, 3.4vw, 38px)", color: "var(--teal-deep)" }}>
            De ce să alegi acest tratament
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
            {detail.benefits.map((b) => (
              <div key={b} style={{ display: "flex", gap: 10, alignItems: "flex-start", border: "1px solid var(--line)", borderRadius: 8, background: "var(--card)", padding: "16px 18px" }}>
                <span style={{ width: 7, height: 7, marginTop: 7, borderRadius: "50%", background: "var(--gold)", flex: "0 0 auto" }} />
                <span style={{ fontSize: 14.5, lineHeight: 1.55, color: "var(--ink)" }}>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 860, margin: "0 auto", padding: "clamp(56px, 7vw, 96px) clamp(16px, 3vw, 40px)" }}>
        <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold-label)" }}>Întrebări frecvente</span>
        <h2 className="font-display" style={{ margin: "10px 0 24px", fontWeight: 400, fontSize: "clamp(26px, 3.4vw, 38px)", color: "var(--teal-deep)" }}>
          {service.title} — răspunsuri utile
        </h2>
        <ServiceFaq items={detail.faq} />

        <p style={{ marginTop: 28, fontSize: 14, color: "var(--muted)" }}>
          Nu ai găsit răspunsul căutat? Sună-ne la <a href={site.phoneHref} className="font-mono-label">{site.phone}</a> sau scrie-ne pe WhatsApp.
        </p>
      </section>

      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "0 clamp(16px, 3vw, 40px) clamp(56px, 7vw, 96px)" }}>
        <h2 className="font-display" style={{ margin: "0 0 20px", fontWeight: 400, fontSize: "clamp(22px, 2.8vw, 30px)", color: "var(--teal-deep)" }}>
          Alte servicii
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
          {otherServices.map((s) => (
            <a key={s.slug} href={`/servicii/${s.slug}`} className="service-card" style={{ display: "grid", gap: 8, padding: 22, borderRadius: 8 }}>
              <span className="font-mono-label" style={{ fontSize: 11, color: "var(--gold-label-2)" }}>{s.num}</span>
              <span style={{ fontSize: 16, fontWeight: 600, color: "var(--teal-deep)" }}>{s.title}</span>
              <span style={{ fontSize: 13.5, color: "var(--muted)" }}>{s.text}</span>
            </a>
          ))}
        </div>
      </section>

      <BookingSection />
    </>
  );
}
