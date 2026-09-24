import { faqs, serviceDetails, services, site } from "@/lib/data";
import { PageHero } from "@/components/PageHero";
import { ServiceFaq } from "@/components/ServiceFaq";
import { OpenBookingButton } from "@/components/OpenBookingButton";
import { BookingSection } from "@/components/BookingSection";

export const metadata = {
  title: "Întrebări frecvente — ArtDent Slobozia",
  description:
    "Răspunsuri la cele mai frecvente întrebări despre tratamentele stomatologice de la ArtDent Slobozia: implantologie, ortodonție, estetică dentară, chirurgie și profilaxie.",
  alternates: { canonical: "/intrebari-frecvente" },
};

export default function IntrebariFrecventePage() {
  const allQA = [
    ...faqs,
    ...services.flatMap((s) => (serviceDetails[s.slug]?.faq || [])),
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allQA.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        eyebrow="Ajutor"
        title="Întrebări frecvente"
        crumbs={[{ label: "Acasă", href: "/" }, { label: "Întrebări frecvente" }]}
        currentPath="/intrebari-frecvente"
      />

      <section style={{ background: "linear-gradient(180deg, #fff 0%, var(--white-to-blue) 100%)" }}>
        <div style={{ maxWidth: 780, margin: "0 auto", padding: "clamp(56px, 7vw, 88px) clamp(16px, 3vw, 40px)" }}>
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold-label)" }}>General</span>
          <h2 className="font-display" style={{ margin: "10px 0 24px", fontWeight: 400, fontSize: "clamp(26px, 3.4vw, 38px)", color: "var(--teal-deep)" }}>
            Despre clinică și programări
          </h2>
          <ServiceFaq items={faqs} />
        </div>
      </section>

      {services.map((s) => {
        const detail = serviceDetails[s.slug];
        if (!detail) return null;
        return (
          <section key={s.slug} style={{ background: "linear-gradient(180deg, var(--white-to-blue) 0%, #fff 100%)" }}>
            <div style={{ maxWidth: 780, margin: "0 auto", padding: "clamp(24px, 4vw, 40px) clamp(16px, 3vw, 40px) clamp(48px, 6vw, 72px)" }}>
              <span className="font-mono-label" style={{ fontSize: 11.5, color: "var(--gold-label-2)" }}>{s.num}</span>
              <h2 className="font-display" style={{ margin: "8px 0 24px", fontWeight: 400, fontSize: "clamp(22px, 2.8vw, 30px)", color: "var(--teal-deep)" }}>
                <a href={`/servicii/${s.slug}`} style={{ color: "inherit" }}>{s.title}</a>
              </h2>
              <ServiceFaq items={detail.faq} />
            </div>
          </section>
        );
      })}

      <section style={{ background: "linear-gradient(180deg, #fff 0%, var(--white-to-blue) 100%)", borderRadius: "48px 48px 0 0", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 780, margin: "0 auto", padding: "clamp(40px, 5vw, 56px) clamp(16px, 3vw, 40px) 0", textAlign: "center" }}>
          <p style={{ margin: "0 0 20px", fontSize: 15, color: "var(--muted)" }}>
            Nu ai găsit răspunsul căutat? Sună-ne la <a href={site.phoneHref} className="font-mono-label">{site.phone}</a> sau trimite-ne o solicitare.
          </p>
          <OpenBookingButton className="btn-teal" style={{ display: "inline-flex", fontSize: 15.5, fontWeight: 600, padding: "16px 28px", borderRadius: 4 }}>
            Programează o consultație
          </OpenBookingButton>
        </div>
      </section>

      <BookingSection />
    </>
  );
}
