import { site, usp } from "@/lib/data";

export const metadata = { title: "Despre noi — ArtDent Slobozia" };

export default function DesprePage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 md:py-20">
      <p className="font-mono-label text-xs uppercase tracking-[0.16em] text-[color:var(--color-gold-deep)]">Despre noi</p>
      <h1 className="mt-2 font-display text-4xl text-[color:var(--color-teal-deep)]">
        Concept dental boutique, în {site.city}
      </h1>
      <p className="mt-5 text-[15px] leading-relaxed text-[color:var(--color-ink)]/85">
        ArtDent funcționează ca o clinică de proximitate cu standard de oraș mare: aparatură performantă,
        protocoale medicale respectate la fiecare pas și timp alocat fiecărui pacient, pentru ca tratamentul
        să fie explicat înainte de a fi început. Fiecare plan de tratament pornește de la un diagnostic
        riguros, nu de la o soluție rapidă aplicată tuturor pacienților.
      </p>

      <div className="mt-10 space-y-6">
        {usp.map((u) => (
          <div key={u.title} className="border-l-2 border-[color:var(--color-gold-deep)] pl-5">
            <p className="font-medium text-[color:var(--color-teal-deep)]">{u.title}</p>
            <p className="mt-1 text-sm text-[color:var(--color-ink)]/75">{u.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-olive-50)] p-6 text-sm">
        <p className="font-medium text-[color:var(--color-teal-deep)]">Program și locație</p>
        <p className="mt-2">{site.address}</p>
        <p>{site.hours}</p>
        <a href={site.phoneHref} className="mt-1 inline-block font-mono-label">{site.phone}</a>
      </div>
    </section>
  );
}
