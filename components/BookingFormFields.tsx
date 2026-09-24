"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useBooking } from "@/lib/booking-context";

export function BookingFormFields({ dark = false, autoFocusName = false }: { dark?: boolean; autoFocusName?: boolean }) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const router = useRouter();
  const { closeModal } = useBooking();

  const inputBg = dark ? "oklch(0.995 0.003 190)" : "#fff";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const form = new FormData(e.currentTarget);
    await supabase.from("contact_submissions").insert({
      name: String(form.get("name") || ""),
      phone: String(form.get("phone") || ""),
      email: String(form.get("email") || ""),
      message: null,
      source_page: typeof window !== "undefined" ? window.location.pathname : null,
    });
    setSending(false);
    setSent(true);
    setTimeout(() => {
      closeModal();
      router.push("/multumim");
    }, 900);
  }

  const labelStyle: React.CSSProperties = { display: "grid", gap: 7, fontSize: 13, fontWeight: 600, color: "var(--ink-soft)" };
  const inputStyle: React.CSSProperties = {
    fontFamily: "inherit", fontSize: 16, padding: "14px 16px", borderRadius: 4,
    border: "1px solid var(--line)", background: inputBg, color: "var(--ink)", minHeight: 50, width: "100%",
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: 14 }}>
      <label style={labelStyle}>Nume
        <input name="name" type="text" required placeholder="Numele tău" style={inputStyle} autoFocus={autoFocusName} />
      </label>
      <label style={labelStyle}>Telefon
        <input name="phone" type="tel" required placeholder="07xx xxx xxx" style={inputStyle} />
      </label>
      <label style={labelStyle}>Email
        <input name="email" type="email" placeholder="nume@exemplu.ro" style={inputStyle} />
      </label>
      <button type="submit" disabled={sending || sent} className="btn-teal" style={{
        marginTop: 4, fontFamily: "inherit", fontSize: 16, fontWeight: 600, padding: "16px 24px",
        border: 0, borderRadius: 4, cursor: sending || sent ? "default" : "pointer", minHeight: 54,
        display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
        background: sent ? "oklch(0.5 0.12 155)" : undefined, transition: "background .25s ease",
      }}>
        {sent ? (
          <>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ animation: "artdentPop .3s ease" }}>
              <path d="M5 13l4 4L19 7" />
            </svg>
            Trimis
          </>
        ) : sending ? "Se trimite…" : "Trimite solicitarea"}
      </button>
      <span style={{ fontSize: 12.5, lineHeight: 1.5, color: "oklch(0.55 0.015 195)" }}>
        {sent ? "Te redirecționăm…" : "Te contactăm telefonic pentru confirmare. Datele nu sunt folosite în alt scop."}
      </span>
    </form>
  );
}
