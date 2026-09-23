"use client";

import { useState } from "react";
import { faqs } from "@/lib/data";

export function FaqAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-[color:var(--color-line)] border-y border-[color:var(--color-line)]">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-display text-lg text-[color:var(--color-teal-deep)]">{f.q}</span>
              <span className="shrink-0 text-xl text-[color:var(--color-gold-deep)]">{isOpen ? "–" : "+"}</span>
            </button>
            {isOpen && <p className="pb-5 text-sm leading-relaxed text-[color:var(--color-ink)]/85">{f.a}</p>}
          </div>
        );
      })}
    </div>
  );
}
