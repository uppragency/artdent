"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/analytics";

// Nu urmărim click-urile din panoul intern de administrare — acelea sunt
// acțiuni ale recepției către pacienți deja programați, nu conversii reale.
const ADMIN_PATH_PREFIX = "/programari-9k3fq7";

// Ascultă global click-urile pe orice link de telefon (tel:) sau WhatsApp
// (wa.me), oriunde ar apărea pe site — header, footer, butonul plutitor,
// bara mobilă, paginile de servicii sau de campanie — fără să fie nevoie
// să instrumentăm fiecare buton individual. Evenimentele ajung automat în
// GA4 și, prin linkul GA4 ↔ Google Ads, pot fi importate ca și conversii.
export function AnalyticsListener() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname?.startsWith(ADMIN_PATH_PREFIX)) return;

    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const link = target?.closest("a[href]") as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.getAttribute("href") || "";

      if (href.startsWith("tel:")) {
        trackEvent("phone_click", { link_url: href, page_location: window.location.pathname });
      } else if (href.includes("wa.me") || href.includes("api.whatsapp.com")) {
        trackEvent("whatsapp_click", { link_url: href, page_location: window.location.pathname });
      }
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [pathname]);

  return null;
}
