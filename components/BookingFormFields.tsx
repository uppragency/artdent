"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useBooking } from "@/lib/booking-context";
import { trackEvent } from "@/lib/analytics";

export function BookingFormFields({
  dark = false, autoFocusName = false, defaultName = "", defaultPhone = "",
}: { dark?: boolean; autoFocusName?: boolean; defaultName?: string; defaultPhone?: string }) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [name, setName] = useState(defaultName);
  const [phone, setPhone] = useState(defaultPhone);
  const router = useRouter();
  const { closeModal } = useBooking();
  const partialSaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastSavedPhone = useRef<string | null>(null);

  const inputBg = dark ? "oklch(0.995 0.003 190)" : "#fff";

  // Salvează automat un lead parțial dacă vizitatorul completează numele și
  // telefonul dar nu trimite formularul — recepția poate suna înapoi, în loc
  // să piardă complet pacienții nesiguri care abandonează formularul.
  useEffect(() => {
    if (sent) return;
    if (partialSaveTimer.current) clearTimeout(partialSaveTimer.current);
    const trimmedName = name.trim();
    const digits = phone.replace(/[^0-9]/g, "");
    if (trimmedName.length < 2 || digits.length < 9) return;
    partialSaveTimer.current = setTimeout(() => {
      if (lastSavedPhone.current === digits) return;
      lastSavedPhone.current = digits;
      fetch("/api/partial-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: trimmedName, phone, sourcePage: typeof window !== "undefined" ? window.location.pathname : null }),
      }).catch(() => {});
    }, 1000);
    return () => {
      if (partialSaveTimer.current) clearTimeout(partialSaveTimer.current);
    };
  }, [name, phone, sent]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "");
    const phone = String(form.get("phone") || "");
    const sourcePage = typeof window !== "undefined" ? window.location.pathname : null;
    const submittedEmail = String(form.get("email") || "");
    await supabase.from("contact_submissions").insert({
      name,
      phone,
      email: submittedEmail,
      message: null,
      source_page: sourcePage,
    });
    fetch("/api/partial-lead", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone }),
    }).catch(() => {});
    // Notificare email către clinică + confirmare pacient (fire-and-forget,
    // nu blochează redirect-ul pacientului).
    fetch("/api/notify-submission", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, email: submittedEmail, sourcePage }),
    }).catch(() => {});
    // Notificare push către panoul de admin (fire-and-forget, eșuează silențios dacă push nu e configurat).
    fetch("/api/push/notify-new-submission", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, sourcePage }),
    }).catch(() => {});
    // Trimis direct la reușita formularului — mai fiabil decât un eveniment
    // custom bazat pe page_view pe /multumim (nu depinde de finalizarea
    // redirect-ului). Numele corespunde evenimentului "Programare_Lead"
    // configurat în GA4.
    trackEvent("Programare_Lead", { method: "formular_programare", source_page: sourcePage });
    setSending(false);
    setSent(true);
    const params = new URLSearchParams({ name, phone });
    if (sourcePage) params.set("from", sourcePage);
    setTimeout(() => {
      closeModal();
      router.push(`/multumim?${params.toString()}`);
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
        <input name="name" type="text" required placeholder="Numele tău" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} autoFocus={autoFocusName} />
      </label>
      <label style={labelStyle}>Telefon
        <input name="phone" type="tel" required placeholder="07xx xxx xxx" value={phone} onChange={(e) => setPhone(e.target.value)} style={inputStyle} />
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
        {sent
          ? "Te redirecționăm…"
          : "Te contactăm telefonic pentru confirmare. Datele nu sunt folosite în alt scop."}
      </span>
    </form>
  );
}
