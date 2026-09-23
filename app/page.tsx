import Link from "next/link";
import { BookingForm } from "@/components/BookingForm";
import { FaqAccordion } from "@/components/FaqAccordion";
import { StatsSection } from "@/components/StatsSection";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import {
  beforeAfterCases,
  faqs,
  featuredServices,
  pricing,
  processSteps,
  services,
  site,
  team,
  usp,
} from "@/lib/data";

export default function HomePage() {
  const zupcu = team[0];

  return (
    <>
      {/* 1. Hero */}
      <section className="border-b border-[color:var(--color-line)] bg-gradient-to-b from-[color:var(--color-olive-50)] to-[color:var(--color-cream)]">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="font-mono-label text-xs uppercase tracking-[0.16em] text-[color:var(--color-gold-deep)]">
              Clinică stomatologică · {site.city}
            </p>
            <h1 className="mt-4 font-display text-4xl leading-[1.1] text-[color:var(--color-teal-deep)] md:text-5xl">
              Te ajutăm să-ți recapeți zâmbetul
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[color:var(--color-ink)]/80">
              Implantologie, ortodonție și estetică dentară într-o clinică unde fiecare plan de tratament
              pornește de la un diagnostic riguros și o discuție onestă.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-full bg-[color:var(--color-teal-deep)] px-6 py-3 text-sm text-white hover:bg-[color:var(--color-teal)]">
                Programează-te acum
              </Link>
              <a href={site.phoneHref} className="rounded-full border border-[color:var(--color-line)] px-6 py-3 text-sm hover:border-[color:var(--color-gold-deep)]">
                Sună acum
              </a>
            </div>
            <p className="mt-6 text-xs text-[color:var(--color-ink)]/60">
              {site.address} · {site.hours}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2 aspect-[16/10] rounded-xl bg-[color:var(--color-teal-deep)]/10 grid place-items-center text-xs text-[color:var(--color-ink)]/40">
              fotografie reală, cadru larg — portret pacient / medic
            </div>
            <div className="aspect-square rounded-xl bg-[color:var(--color-teal-deep)]/10 grid place-items-center text-xs text-[color:var(--color-ink)]/40">
              cabinet
            </div>
            <div className="aspect-square rounded-xl bg-[color:var(--color-teal-deep)]/10 grid place-items-center text-xs text-[color:var(--color-ink)]/40">
              detaliu tratament
            </div>
          </div>
        </div>
      </section>

      {/* 2. Prima vizită — proces în 4 pași */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <p className="font-mono-label text-xs uppercase tracking-[0.16em] text-[color:var(--color-gold-deep)]">Prima vizită</p>
        <h2 className="mt-2 font-display text-3xl text-[color:var(--color-teal-deep)]">Ce se întâmplă la prima ta vizită</h2>
        <p className="mt-2 max-w-lg text-sm text-[color:var(--color-ink)]/70">
          Nu se întâmplă nimic pe surprindere. Fiecare pas este explicat înainte să se petreacă.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-4">
          {processSteps.map((s) => (
            <div key={s.n}>
              <p className="font-display text-3xl text-[color:var(--color-gold-deep)]">{s.n}</p>
              <p className="mt-2 font-medium">{s.title}</p>
              <p className="mt-1.5 text-sm text-[color:var(--color-ink)]/70">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Servicii evidențiate */}
      <section className="border-y border-[color:var(--color-line)] bg-[color:var(--color-olive-50)]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="font-mono-label text-xs uppercase tracking-[0.16em] text-[color:var(--color-gold-deep)]">Clinică modernă</p>
          <h2 className="mt-2 font-display text-3xl text-[color:var(--color-teal-deep)]">Soluții complete și reabilitări complexe</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featuredServices.map((s) => (
              <div key={s.num} className="rounded-xl border border-[color:var(--color-line)] bg-white p-6">
                <p className="font-mono-label text-xs text-[color:var(--color-gold-deep)]">{s.num}</p>
                <h3 className="mt-2 font-display text-xl text-[color:var(--color-teal-deep)]">{s.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--color-ink)]/75">{s.text}</p>
                <Link href="/contact" className="mt-4 inline-block text-sm text-[color:var(--color-teal)]">
                  Programează o consultație →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Concept dental boutique */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="aspect-[4/5] rounded-xl bg-[color:var(--color-teal-deep)]/10 grid place-items-center text-xs text-[color:var(--color-ink)]/40">
            sală de tratament — cadru larg, lumină naturală
          </div>
          <div>
            <p className="font-mono-label text-xs uppercase tracking-[0.16em] text-[color:var(--color-gold-deep)]">Concept dental boutique</p>
            <h2 className="mt-2 font-display text-3xl text-[color:var(--color-teal-deep)]">
              Sănătatea ta orală este prioritatea noastră fundamentală
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-ink)]/80">
              ArtDent funcționează ca o clinică de proximitate cu standard de oraș mare: aparatură performantă,
              protocoale medicale respectate la fiecare pas și timp alocat fiecărui pacient, pentru ca tratamentul
              să fie explicat înainte de a fi început.
            </p>
            <div className="mt-7 space-y-5">
              {usp.map((u) => (
                <div key={u.title}>
                  <p className="font-medium text-[color:var(--color-teal-deep)]">{u.title}</p>
                  <p className="mt-1 text-sm text-[color:var(--color-ink)]/70">{u.text}</p>
                </div>
              ))}
            </div>
            <Link href="/contact" className="mt-7 inline-block rounded-full bg-[color:var(--color-teal-deep)] px-6 py-3 text-sm text-white hover:bg-[color:var(--color-teal)]">
              Programează o consultație
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Toate serviciile */}
      <section className="border-y border-[color:var(--color-line)] bg-[color:var(--color-olive-50)]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono-label text-xs uppercase tracking-[0.16em] text-[color:var(--color-gold-deep)]">Serviciile noastre</p>
              <h2 className="mt-2 font-display text-3xl text-[color:var(--color-teal-deep)]">Tot ce ai nevoie, într-un singur loc</h2>
            </div>
            <Link href="/servicii" className="text-sm text-[color:var(--color-teal)]">Vezi lista de prețuri →</Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.slug} className="rounded-xl border border-[color:var(--color-line)] bg-white p-6">
                <p className="font-mono-label text-xs text-[color:var(--color-gold-deep)]">{s.num}</p>
                <h3 className="mt-2 font-display text-lg text-[color:var(--color-teal-deep)]">{s.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--color-ink)]/75">{s.text}</p>
                <ul className="mt-3 space-y-1 text-xs text-[color:var(--color-ink)]/60">
                  {s.items.map((it) => <li key={it}>· {it}</li>)}
                </ul>
                <Link href="/servicii" className="mt-4 inline-block text-sm text-[color:var(--color-teal)]">Vezi serviciul →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Prețuri */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <p className="font-mono-label text-xs uppercase tracking-[0.16em] text-[color:var(--color-gold-deep)]">Tarife</p>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="mt-2 font-display text-3xl text-[color:var(--color-teal-deep)]">Prețuri clare, fără costuri ascunse</h2>
          <Link href="/servicii" className="text-sm text-[color:var(--color-teal)]">Lista completă de prețuri →</Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {pricing.map((p) => (
            <div
              key={p.title}
              className={`rounded-xl border p-6 ${p.popular ? "border-[color:var(--color-gold-deep)] bg-white shadow-sm" : "border-[color:var(--color-line)] bg-white"}`}
            >
              {p.popular && <p className="mb-2 text-xs font-medium text-[color:var(--color-gold-deep)]">Popular</p>}
              <h3 className="font-display text-lg text-[color:var(--color-teal-deep)]">{p.title}</h3>
              <p className="mt-1 font-mono-label text-sm">{p.price}</p>
              <p className="mt-2 text-xs text-[color:var(--color-ink)]/70">{p.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-[color:var(--color-ink)]/60">
          Prețurile finale se stabilesc după consultație, în funcție de planul de tratament personalizat.
        </p>
      </section>

      {/* 7. Rezultate înainte / după */}
      <section className="border-y border-[color:var(--color-line)] bg-[color:var(--color-olive-50)]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="font-mono-label text-xs uppercase tracking-[0.16em] text-[color:var(--color-gold-deep)]">Clinica noastră</p>
          <h2 className="mt-2 font-display text-3xl text-[color:var(--color-teal-deep)]">Cazuri reale · Rezultate înainte și după</h2>
          <p className="mt-2 max-w-lg text-sm text-[color:var(--color-ink)]/70">
            Trage cursorul pentru a compara starea inițială cu rezultatul unui tratament de estetică dentară.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {beforeAfterCases.map((c) => <BeforeAfterSlider key={c} label={c} />)}
          </div>
        </div>
      </section>

      {/* 8. Statistici */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <StatsSection />
      </section>

      {/* 9. Echipa medicală */}
      <section className="border-y border-[color:var(--color-line)] bg-[color:var(--color-olive-50)]">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <p className="font-mono-label text-xs uppercase tracking-[0.16em] text-[color:var(--color-gold-deep)]">Echipa medicală</p>
          <h2 className="mt-2 font-display text-3xl text-[color:var(--color-teal-deep)]">Medicul care îți va face tratamentul</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-center">
            <div className="aspect-[3/4] rounded-xl bg-[color:var(--color-teal-deep)]/10 grid place-items-center text-xs text-[color:var(--color-ink)]/40">
              portret profesional — {zupcu.name}
            </div>
            <div>
              <p className="text-xs font-mono-label text-[color:var(--color-gold-deep)]">{zupcu.role}</p>
              <h3 className="mt-1 font-display text-2xl text-[color:var(--color-teal-deep)]">{zupcu.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-ink)]/80">{zupcu.bio}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {zupcu.specializations.map((s) => (
                  <span key={s} className="rounded-full border border-[color:var(--color-line)] px-3 py-1 text-xs">{s}</span>
                ))}
              </div>
              <Link href="/contact" className="mt-6 inline-block rounded-full bg-[color:var(--color-teal-deep)] px-6 py-3 text-sm text-white hover:bg-[color:var(--color-teal)]">
                Programează la Dr. Zupcu
              </Link>
              <Link href="/echipa" className="ml-4 text-sm text-[color:var(--color-teal)]">Toată echipa →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="mx-auto max-w-3xl px-5 py-16 md:py-20">
        <p className="font-mono-label text-xs uppercase tracking-[0.16em] text-[color:var(--color-gold-deep)]">Întrebări frecvente</p>
        <h2 className="mt-2 font-display text-3xl text-[color:var(--color-teal-deep)]">Răspunsuri la întrebările tale</h2>
        <p className="mt-2 text-sm text-[color:var(--color-ink)]/70">
          Dacă nu găsești răspunsul aici, sună-ne. Prima discuție este gratuită și fără obligații: {site.phone}
        </p>
        <div className="mt-8">
          <FaqAccordion />
        </div>
        <p className="mt-2 text-xs text-[color:var(--color-ink)]/50">{faqs.length} întrebări afișate</p>
      </section>

      {/* Testimoniale */}
      <section className="border-y border-[color:var(--color-line)] bg-[color:var(--color-olive-50)] py-16 md:py-20">
        <p className="text-center font-mono-label text-xs uppercase tracking-[0.16em] text-[color:var(--color-gold-deep)]">Experiența pacienților</p>
        <h2 className="mt-2 text-center font-display text-3xl text-[color:var(--color-teal-deep)]">Ce spun cei care ne-au ales</h2>
        <div className="mt-10 px-5">
          <TestimonialsCarousel />
        </div>
        <p className="mt-8 text-center text-sm">
          <Link href="/testimoniale" className="text-[color:var(--color-teal)]">Vezi toate recenziile →</Link>
        </p>
      </section>

      {/* Programare finală */}
      <section className="mx-auto max-w-2xl px-5 py-16 md:py-20">
        <p className="font-mono-label text-xs uppercase tracking-[0.16em] text-[color:var(--color-gold-deep)] text-center">Programează o consultație</p>
        <h2 className="mt-2 text-center font-display text-3xl text-[color:var(--color-teal-deep)]">Programează-te astăzi</h2>
        <p className="mt-2 text-center text-sm text-[color:var(--color-ink)]/70">
          Lasă numele și numărul de telefon, iar noi te contactăm în aceeași zi pentru confirmarea orei.
        </p>
        <div className="mt-8">
          <BookingForm />
        </div>
      </section>
    </>
  );
}
