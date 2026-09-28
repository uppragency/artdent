// Helper unic pentru trimiterea evenimentelor către Google Analytics 4 (gtag).
// gtag e încărcat global în app/layout.tsx; funcția eșuează silențios dacă
// scriptul nu s-a încărcat încă sau dacă rulează pe server (SSR).
export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  try {
    const w = window as unknown as { gtag?: (...args: unknown[]) => void };
    w.gtag?.("event", name, params);
  } catch {
    // Analytics nu trebuie să blocheze niciodată o acțiune a utilizatorului.
  }
}
