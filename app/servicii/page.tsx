import Link from "next/link";
import { pricing, services } from "@/lib/data";

export const metadata = { title: "Servicii și prețuri — ArtDent Slobozia" };

export default function ServiciiPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
      <p className="font-mono-label text-xs uppercase tracking-[0.16em] text-[color:var(--color-gold-deep)]">Servicii &amp; prețuri</p>
      <h1 className="mt-2 font-display text-4xl text-[color:var(--color-teal-deep)]">Tot ce ai nevoie, într-un singur loc</h1>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.slug} id={s.slug} className="rounded-xl border border-[color:var(--color-line)] bg-white p-6">
            <p className="font-mono-label text-xs text-[color:var(--color-gold-deep)]">{s.num}</p>
            <h2 className="mt-2 font-display text-lg text-[color:var(--color-teal-deep)]">{s.title}</h2>
            <p className="mt-2 text-sm text-[color:var(--color-ink)]/75">{s.text}</p>
            <ul className="mt-3 space-y-1 text-xs text-[color:var(--color-ink)]/60">
              {s.items.map((it) => <li key={it}>· {it}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="mt-16 font-display text-3xl text-[color:var(--color-teal-deep)]">Tarife orientative</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-4">
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

      <p className="mt-10">
        <Link href="/contact" className="rounded-full bg-[color:var(--color-teal-deep)] px-6 py-3 text-sm text-white hover:bg-[color:var(--color-teal)]">
          Programează o consultație
        </Link>
      </p>
    </section>
  );
}
