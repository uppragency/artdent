import Link from "next/link";
import { nav, site } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-line)] bg-[color:var(--color-olive-50)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div>
          <p className="font-display text-2xl text-[color:var(--color-teal-deep)]">ArtDent {site.city}</p>
          <p className="mt-3 text-sm text-[color:var(--color-ink)]/80">
            Clinică stomatologică cu servicii complete: implantologie, ortodonție, estetică dentară și profilaxie.
          </p>
        </div>

        <div>
          <p className="font-mono-label text-xs uppercase tracking-[0.16em] text-[color:var(--color-gold-deep)]">Linkuri rapide</p>
          <ul className="mt-3 space-y-2 text-sm">
            {nav.filter((n) => n.href !== "/").map((item) => (
              <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono-label text-xs uppercase tracking-[0.16em] text-[color:var(--color-gold-deep)]">Contact &amp; program</p>
          <p className="mt-3 text-sm">{site.address}</p>
          <p className="text-sm">{site.hours}</p>
          <a href={site.phoneHref} className="text-sm font-mono-label">{site.phone}</a>
        </div>

        <div>
          <p className="font-mono-label text-xs uppercase tracking-[0.16em] text-[color:var(--color-gold-deep)]">Unde ne găsești</p>
          <div className="mt-3 h-32 rounded-lg border border-[color:var(--color-line)] bg-white/60 grid place-items-center text-xs text-[color:var(--color-ink)]/50">
            Hartă Google Maps
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-[color:var(--color-line)] px-5 py-6 text-xs text-[color:var(--color-ink)]/60 md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} ArtDent Slobozia. Toate drepturile rezervate. CUI: {site.cui}</p>
        <div className="flex gap-4">
          <span>Termeni și condiții</span>
          <span>Politica de confidențialitate</span>
        </div>
      </div>
    </footer>
  );
}
