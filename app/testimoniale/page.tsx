import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { beforeAfterCases } from "@/lib/data";

export const metadata = { title: "Testimoniale & Rezultate — ArtDent Slobozia" };

export default function TestimonialePage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-5 py-16 text-center md:py-20">
        <p className="font-mono-label text-xs uppercase tracking-[0.16em] text-[color:var(--color-gold-deep)]">Experiența pacienților</p>
        <h1 className="mt-2 font-display text-4xl text-[color:var(--color-teal-deep)]">Ce spun cei care ne-au ales</h1>
        <div className="mt-10">
          <TestimonialsCarousel />
        </div>
      </section>

      <section className="border-t border-[color:var(--color-line)] bg-[color:var(--color-olive-50)]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="font-mono-label text-xs uppercase tracking-[0.16em] text-[color:var(--color-gold-deep)]">Cazuri reale</p>
          <h2 className="mt-2 font-display text-3xl text-[color:var(--color-teal-deep)]">Rezultate înainte și după</h2>
          <p className="mt-2 max-w-lg text-sm text-[color:var(--color-ink)]/70">
            Trage cursorul pentru a compara starea inițială cu rezultatul unui tratament de estetică dentară.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {beforeAfterCases.map((c) => <BeforeAfterSlider key={c} label={c} />)}
          </div>
        </div>
      </section>
    </>
  );
}
