"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "artdent_cta_variant";

export const CTA_VARIANTS = {
  a: "Programează-te acum",
  b: "Solicită o consultație gratuită",
} as const;

export type CtaVariant = keyof typeof CTA_VARIANTS;

// Împarte vizitatorii 50/50, persistent per browser (localStorage), astfel
// încât un vizitator care revine vede mereu aceeași variantă.
export function useCtaVariant(): { variant: CtaVariant; label: string; trackClick: () => void } {
  const [variant, setVariant] = useState<CtaVariant>("a");

  useEffect(() => {
    try {
      let stored = localStorage.getItem(STORAGE_KEY) as CtaVariant | null;
      if (stored !== "a" && stored !== "b") {
        stored = Math.random() < 0.5 ? "a" : "b";
        localStorage.setItem(STORAGE_KEY, stored);
      }
      setVariant(stored);
    } catch {
      // localStorage indisponibil (mod privat etc.) — rămânem pe varianta implicită.
    }
  }, []);

  function trackClick() {
    try {
      const w = window as unknown as { gtag?: (...args: unknown[]) => void };
      w.gtag?.("event", "cta_click", { cta_variant: variant, cta_label: CTA_VARIANTS[variant] });
    } catch {}
  }

  return { variant, label: CTA_VARIANTS[variant], trackClick };
}
