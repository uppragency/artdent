import { BookingForm } from "@/components/BookingForm";
import { site } from "@/lib/data";

export const metadata = { title: "Contact — ArtDent Slobozia" };

export default function ContactPage() {
  return (
    <section className="mx-auto grid max-w-5xl gap-12 px-5 py-16 md:grid-cols-2 md:py-20">
      <div>
        <p className="font-mono-label text-xs uppercase tracking-[0.16em] text-[color:var(--color-gold-deep)]">Contact</p>
        <h1 className="mt-2 font-display text-4xl text-[color:var(--color-teal-deep)]">Programează-te astăzi</h1>
        <p className="mt-4 text-sm leading-relaxed text-[color:var(--color-ink)]/80">
          Lasă numele și numărul de telefon, iar noi te contactăm în aceeași zi pentru confirmarea orei.
          Preferi mai direct? Scrie-ne pe WhatsApp.
        </p>

        <div className="mt-8 space-y-3 text-sm">
          <p><span className="font-medium">Adresă:</span> {site.address}</p>
          <p><span className="font-medium">Program:</span> {site.hours}</p>
          <p><span className="font-medium">Telefon:</span> <a href={site.phoneHref} className="font-mono-label">{site.phone}</a></p>
          <p><span className="font-medium">Email:</span> <a href={`mailto:${site.email}`}>{site.email}</a></p>
        </div>

        <div className="mt-8 h-48 rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-olive-50)] grid place-items-center text-xs text-[color:var(--color-ink)]/40">
          Hartă Google Maps
        </div>
      </div>

      <div className="rounded-xl border border-[color:var(--color-line)] bg-white p-6">
        <BookingForm />
      </div>
    </section>
  );
}
