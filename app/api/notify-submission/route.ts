import { NextRequest, NextResponse } from "next/server";

// Trimite un email de notificare către clinică la fiecare programare nouă.
// Se apelează după ce cererea a fost deja salvată în Supabase — un eșec aici
// nu blochează niciodată fluxul pacientului (formularul e deja trimis).
export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.ADMIN_NOTIFY_EMAIL || process.env.NEXT_PUBLIC_CONTACT_EMAIL;

  if (!apiKey || !notifyEmail) {
    // Nu e configurat — nu tratăm ca eroare, doar sărim peste notificare.
    return NextResponse.json({ skipped: true });
  }

  let body: { name?: string; phone?: string; email?: string; sourcePage?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_request" }, { status: 400 });
  }

  const { name = "", phone = "", email = "", sourcePage = "" } = body;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL || "ArtDent Website <onboarding@resend.dev>",
        to: [notifyEmail],
        subject: `Programare nouă — ${name || "pacient"}`,
        html: `
          <div style="font-family: sans-serif; font-size: 15px; line-height: 1.6; color: #222;">
            <h2 style="margin: 0 0 14px;">Cerere nouă de programare</h2>
            <p><strong>Nume:</strong> ${escapeHtml(name)}</p>
            <p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email || "—")}</p>
            <p><strong>Pagină sursă:</strong> ${escapeHtml(sourcePage || "—")}</p>
            <p style="margin-top: 20px; font-size: 13px; color: #666;">Vezi toate programările în panoul de administrare.</p>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("notify-submission: resend error", res.status, text);
      return NextResponse.json({ error: "notify_failed" }, { status: 200 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("notify-submission: fetch error", err);
    return NextResponse.json({ error: "notify_failed" }, { status: 200 });
  }
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string));
}
