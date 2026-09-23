"use client";

import { useBooking } from "@/lib/booking-context";
import { site } from "@/lib/data";

export function MobileStickyBar() {
  const { openModal } = useBooking();
  return (
    <div data-mob style={{
      position: "fixed", left: 0, right: 0, bottom: 0, zIndex: 70,
      padding: "10px 14px calc(10px + env(safe-area-inset-bottom))",
      background: "oklch(0.99 0.004 190 / 0.94)", backdropFilter: "blur(20px)",
      borderTop: "1px solid var(--line)", display: "flex", gap: 10,
    }}>
      <a href={site.phoneHref} className="btn-teal" style={{ flex: "1 1 0", minHeight: 54, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 600, borderRadius: 4 }}>
        Sună acum
      </a>
      <a href="#programare" onClick={(e) => { e.preventDefault(); openModal(); }} className="btn-gold" style={{ flex: "0 0 auto", minHeight: 54, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 22px", fontSize: 16, fontWeight: 600, borderRadius: 4 }}>
        Programare
      </a>
    </div>
  );
}
