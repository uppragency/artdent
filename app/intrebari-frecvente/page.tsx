import { faqs, serviceDetails, services, site } from "@/lib/data";
import { PageHero } from "@/components/PageHero";
import { OpenBookingButton } from "@/components/OpenBookingButton";
import { BookingSection } from "@/components/BookingSection";
import { FaqSearch } from "@/components/FaqSearch";

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

  const sections = services
    .map((s) => {
      const detail = serviceDetails[s.slug];
      if (!detail) return null;
      return { key: s.slug, title: s.title, num: s.num, href: `/servicii/${s.slug}`, faq: detail.faq };
    })
    .filter((s): s is { key: string; title: string; num: string; href: string; faq: { q: string; a: string }[] } => Boolean(s));

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

      <div style={{ background: "linear-gradient(180deg, #fff 0%, var(--white-to-blue) 100%)", paddingTop: "clamp(56px, 7vw, 88px)" }}>
        <FaqSearch generalTitle="Despre clinică și programări" generalFaq={faqs} sections={sections} />
      </div>

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
