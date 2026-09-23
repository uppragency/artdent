"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, site } from "@/lib/data";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[color:var(--color-cream)]/95 backdrop-blur border-b border-[color:var(--color-line)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4">
        <Link href="/" className="font-display text-2xl text-[color:var(--color-teal-deep)]">
          ArtDent <span className="font-sans text-xs align-top font-mono-label">{site.city}</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-[color:var(--color-ink)] hover:text-[color:var(--color-gold-deep)]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a href={site.phoneHref} className="text-sm font-mono-label text-[color:var(--color-teal-deep)]">
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-[color:var(--color-teal-deep)] px-5 py-2.5 text-sm text-white transition-colors hover:bg-[color:var(--color-teal)]"
          >
            Programează-te
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Închide meniul" : "Deschide meniul"}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-2xl text-[color:var(--color-teal-deep)]"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[color:var(--color-line)] px-5 py-4">
          <nav className="flex flex-col gap-4">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-base">
                {item.label}
              </Link>
            ))}
            <a href={site.phoneHref} className="text-base font-mono-label text-[color:var(--color-teal-deep)]">
              {site.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
