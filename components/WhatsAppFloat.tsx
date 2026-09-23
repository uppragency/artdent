import { site } from "@/lib/data";

export function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${site.whatsappNumber}`}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="whatsapp-float"
      style={{
        position: "fixed", right: 22, bottom: 96, zIndex: 65, width: 56, height: 56, borderRadius: "50%",
        background: "#25D366", display: "grid", placeItems: "center", boxShadow: "0 14px 30px -14px rgba(2,47,58,0.5)",
      }}
    >
      <svg viewBox="0 0 24 24" width="28" height="28" fill="#fff">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.62 1.44 5.14L2 22l5.1-1.54a9.9 9.9 0 0 0 4.94 1.32c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.8 13.98c-.24.68-1.4 1.3-1.93 1.35-.5.05-.94.24-3.18-.66-2.7-1.08-4.42-3.83-4.55-4.01-.13-.18-1.08-1.44-1.08-2.75s.68-1.95.93-2.22c.24-.26.53-.33.7-.33h.5c.16 0 .38-.03.59.45.24.55.8 1.94.87 2.08.07.14.11.31.02.5-.09.18-.14.3-.28.46-.14.16-.29.36-.42.48-.14.13-.28.28-.12.55.16.28.72 1.2 1.55 1.94 1.07.94 1.97 1.24 2.25 1.38.28.14.44.12.6-.04.16-.16.68-.79.86-1.06.18-.28.36-.23.6-.14.24.09 1.53.72 1.79.85.26.14.44.2.5.32.06.11.06.63-.18 1.31z" />
      </svg>
    </a>
  );
}
