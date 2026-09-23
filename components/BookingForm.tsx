"use client";

import { useState } from "react";
import { serviceOptions, site } from "@/lib/data";
import { supabase } from "@/lib/supabase";

export function BookingForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError(null);

    const form = new FormData(e.currentTarget);
    const service = String(form.get("service") || "");
    const payload = {
      name: String(form.get("name") || ""),
      phone: String(form.get("phone") || ""),
      email: String(form.get("email") || ""),
      message: service ? `Serviciu dorit: ${service}` : null,
      source_page: typeof window !== "undefined" ? window.location.pathname : null,
    };

    // Solicitările ajung direct în Supabase (tabela contact_submissions), fără
    // niciun pas intermediar pentru pacient — conform cerinței clinicii.
    const { error: dbError } = await supabase.from("contact_submissions").insert(payload);

    setSending(false);
    if (dbError) {
      setError("Nu am putut trimite solicitarea. Sună-ne direct sau scrie-ne pe WhatsApp.");
      return;
    }
    setSent(true);
  }

  const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    "Bună, aș dori o programare la ArtDent Slobozia."
  )}`;

  if (sent) {
    return (
      <p className="rounded-lg border border-[color:var(--color-line)] bg-white p-5 text-sm">
        Solicitare trimisă. Te contactăm în aceeași zi pentru confirmare.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-3.5">
      <label className="grid gap-1.5 text-sm font-medium">
        Nume
        <input name="name" required placeholder="Numele tău" className="rounded-md border border-[color:var(--color-line)] bg-white px-3.5 py-2.5 text-sm" />
      </label>
      <label className="grid gap-1.5 text-sm font-medium">
        Telefon
        <input name="phone" type="tel" required placeholder="07xx xxx xxx" className="rounded-md border border-[color:var(--color-line)] bg-white px-3.5 py-2.5 text-sm" />
      </label>
      <label className="grid gap-1.5 text-sm font-medium">
        Email
        <input name="email" type="email" placeholder="email@exemplu.ro" className="rounded-md border border-[color:var(--color-line)] bg-white px-3.5 py-2.5 text-sm" />
      </label>
      <label className="grid gap-1.5 text-sm font-medium">
        Serviciu dorit
        <select name="service" className="rounded-md border border-[color:var(--color-line)] bg-white px-3.5 py-2.5 text-sm">
          {serviceOptions.map((s) => <option key={s}>{s}</option>)}
        </select>
      </label>

      {error && <p className="text-sm text-red-700">{error}</p>}

      <button
        type="submit"
        disabled={sending}
        className="mt-1 rounded-full bg-[color:var(--color-teal-deep)] px-5 py-3 text-sm text-white hover:bg-[color:var(--color-teal)] disabled:opacity-60"
      >
        {sending ? "Se trimite…" : "Trimite solicitarea"}
      </button>

      {!compact && (
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="text-center text-sm rounded-full border border-[color:var(--color-line)] px-5 py-3 hover:border-[color:var(--color-gold-deep)]"
        >
          Scrie-ne pe WhatsApp · {site.phone}
        </a>
      )}

      <p className="text-xs text-[color:var(--color-ink)]/60">
        Te contactăm telefonic pentru confirmare. Datele nu sunt folosite în alt scop.
      </p>
    </form>
  );
}
