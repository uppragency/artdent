import { PageHero } from "@/components/PageHero";
import { BookingSection } from "@/components/BookingSection";
import { OpenBookingButton } from "@/components/OpenBookingButton";
import { services, usp, site } from "@/lib/data";

export const metadata = {
  title: "Dentist Slobozia — ArtDent, cabinet stomatologic cu servicii complete",
  description: "Cauți un dentist în Slobozia? ArtDent oferă implantologie, ortodonție, estetică dentară și tratamente generale, cu prețuri transparente și programare rapidă.",
  alternates: { canonical: "/dentist-slobozia" },
};

export default function DentistSloboziaPage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "ArtDent Slobozia",
    address: { "@type": "PostalAddress", streetAddress: site.address, addressLocality: site.city, addressCountry: "RO" },
    telephone: site.phone,
    url: `${site.siteUrl}/dentist-slobozia`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />

      <PageHero
        eyebrow="Dentist Slobozia"
        title="Cabinetul tău de stomatologie din Slobozia"
        crumbs={[{ label: "Acasă", href: "/" }, { label: "Dentist Slobozia" }]}
        currentPath="/dentist-slobozia"
      />

      <section style={{ background: "linear-gradient(180deg, #fff 0%, var(--white-to-blue) 100%)" }}>
        <div style={{ maxWidth: 780, margin: "0 auto", padding: "clamp(56px, 7vw, 88px) clamp(16px, 3vw, 40px)" }}>
          <p style={{ margin: "0 0 20px", fontSize: 16, lineHeight: 1.8, color: "var(--muted-2)" }}>
            Dacă locuiești în Slobozia sau în zonele învecinate și cauți un dentist de încredere, ArtDent este un cabinet stomatologic cu servicii complete, situat pe {site.address}. Oferim atât tratamente generale — pentru cariile de zi cu zi și controlul periodic — cât și proceduri complexe: implantologie, ortodonție și estetică dentară.
          </p>
          <p style={{ margin: "0 0 32px", fontSize: 16, lineHeight: 1.8, color: "var(--muted-2)" }}>
            Programul nostru este {site.hours}, iar programările se pot face telefonic, pe WhatsApp sau direct online. Fiecare tratament începe cu o consultație și un diagnostic clar, urmate de un plan de tratament transparent, cu costuri comunicate din prima vizită.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14, marginBottom: 40 }}>
            {usp.map((u) => (
              <div key={u.title} style={{ border: "1px solid var(--line)", borderRadius: 8, padding: "18px 20px", background: "var(--card)" }}>
                <h2 style={{ margin: "0 0 8px", fontSize: 15.5, fontWeight: 600, color: "var(--teal-deep)" }}>{u.title}</h2>
                <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.6, color: "var(--muted)" }}>{u.text}</p>
              </div>
            ))}
          </div>

          <h2 className="font-display" style={{ margin: "0 0 20px", fontWeight: 400, fontSize: "clamp(24px, 3vw, 32px)", color: "var(--teal-deep)" }}>
            Servicii stomatologice în Slobozia
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
            Cum ajungi la cabinet
          </h2>
          <p style={{ margin: "0 0 32px", fontSize: 15, lineHeight: 1.75, color: "var(--muted-2)" }}>
            Cabinetul ArtDent se află pe {site.address}, ușor accesibil din centrul orașului Slobozia. Pentru indicații exacte, vezi harta de pe pagina de{" "}
            <a href="/contact" style={{ color: "var(--teal-600)", fontWeight: 600 }}>contact</a>.
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
