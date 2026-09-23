import Link from "next/link";
import { team } from "@/lib/data";

export const metadata = { title: "Echipă — ArtDent Slobozia" };

export default function EchipaPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
      <p className="font-mono-label text-xs uppercase tracking-[0.16em] text-[color:var(--color-gold-deep)]">Echipa medicală</p>
      <h1 className="mt-2 font-display text-4xl text-[color:var(--color-teal-deep)]">Medicii ArtDent Slobozia</h1>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        {team.map((m) => (
          <div key={m.name} className="rounded-xl border border-[color:var(--color-line)] bg-white p-6">
            <div className="aspect-[4/3] rounded-lg bg-[color:var(--color-teal-deep)]/10 grid place-items-center text-xs text-[color:var(--color-ink)]/40">
              portret profesional
            </div>
            <p className="mt-4 text-xs font-mono-label text-[color:var(--color-gold-deep)]">{m.role}</p>
            <h2 className="mt-1 font-display text-xl text-[color:var(--color-teal-deep)]">{m.name}</h2>
            {m.bio && <p className="mt-2 text-sm text-[color:var(--color-ink)]/75">{m.bio}</p>}
            {!m.bio && (
              <p className="mt-2 text-sm text-[color:var(--color-ink)]/50">
                Descriere de completat.
              </p>
            )}
            <div className="mt-3 flex flex-wrap gap-2">
              {m.specializations.map((s) => (
                <span key={s} className="rounded-full border border-[color:var(--color-line)] px-3 py-1 text-xs">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="mt-10 text-sm">
        <Link href="/contact" className="rounded-full bg-[color:var(--color-teal-deep)] px-6 py-3 text-white hover:bg-[color:var(--color-teal)]">
          Programează o consultație
        </Link>
      </p>
    </section>
  );
}
