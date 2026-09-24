"use client";

import { useEffect } from "react";
import { useBooking } from "@/lib/booking-context";
import { BookingFormFields } from "@/components/BookingFormFields";

export function BookingModal() {
  const { open, closeModal } = useBooking();

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prevOverflow; };
  }, [open]);

  if (!open) return null;

  return (
    <div
      onClick={closeModal}
      style={{
        position: "fixed", inset: 0, zIndex: 100, background: "rgba(2,47,58,0.55)",
        display: "flex", alignItems: "center", justifyContent: "center", padding: 20, backdropFilter: "blur(2px)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--cream)", borderRadius: 12, maxWidth: 460, width: "100%", maxHeight: "90vh",
          overflowY: "auto", padding: "clamp(24px,3vw,36px)", position: "relative",
          boxShadow: "0 40px 80px -30px rgba(2,47,58,0.5)",
        }}
      >
        <button
          type="button"
          onClick={closeModal}
          aria-label="Închide"
          className="close-x"
          style={{
            position: "absolute", top: 16, right: 16, width: 34, height: 34, borderRadius: "50%",
            background: "none", fontSize: 16, cursor: "pointer",
          }}
        >
          ✕
        </button>
        <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold-label)" }}>
          Solicită o consultație
        </span>
        <h3 className="font-display" style={{ margin: "8px 0 20px", fontWeight: 400, fontSize: 30, color: "var(--teal-deep)" }}>
          Programează-te
        </h3>
        <BookingFormFields dark={false} autoFocusName />
      </div>
    </div>
  );
}
