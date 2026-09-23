import { site } from "@/lib/data";
import { BookingFormFields } from "@/components/BookingFormFields";
import { BookingSection } from "@/components/BookingSection";

export const metadata = { title: "Contact — ArtDent Slobozia" };

export default function ContactPage() {
  return (
    <>
    <section style={{
      maxWidth: 1000, margin: "0 auto", padding: "clamp(64px, 8vw, 112px) clamp(16px, 3vw, 40px)",
      display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 48,
    }}>
      <div>
        <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold-label)" }}>Contact</span>
        <h1 className="font-display" style={{ margin: "10px 0 0", fontWeight: 400, fontSize: "clamp(34px, 5vw, 52px)", lineHeight: 1.05, letterSpacing: "-0.015em", color: "var(--teal-deep)" }}>
          Programează-te astăzi
        </h1>
        <p style={{ marginTop: 16, fontSize: 15.5, lineHeight: 1.7, color: "var(--muted-2)" }}>
          Lasă numele și numărul de telefon, iar noi te contactăm în aceeași zi pentru confirmarea orei. Preferi mai direct? Scrie-ne pe WhatsApp.
        </p>

        <div style={{ marginTop: 28, display: "grid", gap: 10, fontSize: 14.5 }}>
          <p style={{ margin: 0 }}><strong>Adresă:</strong> {site.address}</p>
          <p style={{ margin: 0 }}><strong>Program:</strong> {site.hours}</p>
          <p style={{ margin: 0 }}><strong>Telefon:</strong> <a href={site.phoneHref} className="font-mono-label">{site.phone}</a></p>
          <p style={{ margin: 0 }}><strong>Email:</strong> <a href={`mailto:${site.email}`}>{site.email}</a></p>
        </div>

        <iframe
          src={site.mapsEmbed}
          style={{ marginTop: 24, border: "1px solid var(--line)", borderRadius: 8, width: "100%", minHeight: 200 }}
          loading="lazy"
          title="Hartă ArtDent Slobozia"
        />
      </div>

      <div style={{ border: "1px solid var(--line)", borderRadius: 10, background: "var(--card)", padding: 28 }}>
        <BookingFormFields />
      </div>
    </section>
    <BookingSection />
    </>
  );
}
