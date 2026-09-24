import { site } from "@/lib/data";
import { BookingFormFields } from "@/components/BookingFormFields";
import { BookingSection } from "@/components/BookingSection";
import { PageHero } from "@/components/PageHero";

export const metadata = { title: "Contact — ArtDent Slobozia" };

export default function ContactPage() {
  return (
    <>
    <PageHero
      eyebrow="Contact"
      title="Programează-te astăzi"
      crumbs={[{ label: "Acasă", href: "/" }, { label: "Contact" }]}
    />
    <section style={{ background: "linear-gradient(180deg, #fff 0%, var(--white-to-blue) 100%)" }}>
      <div style={{
        maxWidth: 1000, margin: "0 auto", padding: "clamp(56px, 7vw, 88px) clamp(16px, 3vw, 40px) clamp(40px, 5vw, 64px)",
        display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 48,
      }}>
        <div>
          <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.7, color: "var(--muted-2)" }}>
            Lasă numele și numărul de telefon, iar noi te contactăm în aceeași zi pentru confirmarea orei. Preferi mai direct? Scrie-ne pe WhatsApp.
          </p>

          <div style={{ marginTop: 28, display: "grid", gap: 10, fontSize: 14.5 }}>
            <p style={{ margin: 0 }}><strong>Adresă:</strong> {site.address}</p>
            <p style={{ margin: 0 }}><strong>Program:</strong> {site.hours}</p>
            <p style={{ margin: 0 }}><strong>Telefon:</strong> <a href={site.phoneHref} className="font-mono-label">{site.phone}</a></p>
            <p style={{ margin: 0 }}><strong>Email:</strong> <a href={`mailto:${site.email}`}>{site.email}</a></p>
          </div>
        </div>

        <div style={{ border: "1px solid var(--line)", borderRadius: 10, background: "var(--card)", padding: 28 }}>
          <BookingFormFields />
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px, 3vw, 40px) clamp(56px, 7vw, 88px)" }}>
        <h2 className="font-display" style={{ margin: "0 0 16px", fontSize: "clamp(22px, 2.8vw, 30px)", color: "var(--teal-deep)" }}>
          Cum ajungi la noi
        </h2>
        <iframe
          src={site.mapsEmbed}
          style={{ border: "1px solid var(--line)", borderRadius: 10, width: "100%", minHeight: 420, display: "block" }}
          loading="lazy"
          title="Hartă ArtDent Slobozia"
        />
      </div>
    </section>
    <BookingSection />
    </>
  );
}
