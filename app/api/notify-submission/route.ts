import { NextRequest, NextResponse } from "next/server";

// Trimite un email de notificare către clinică la fiecare programare nouă.
// Se apelează după ce cererea a fost deja salvată în Supabase — un eșec aici
// nu blochează niciodată fluxul pacientului (formularul e deja trimis).
async function sendEmail(apiKey: string, payload: Record<string, unknown>) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    console.error("notify-submission: resend error", res.status, text);
  }
  return res.ok;
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;
  const notifyEmailRaw = process.env.ADMIN_NOTIFY_EMAIL || process.env.NEXT_PUBLIC_CONTACT_EMAIL;

  if (!apiKey || !notifyEmailRaw) {
    // Nu e configurat — nu tratăm ca eroare, doar sărim peste notificare.
    return NextResponse.json({ skipped: true });
  }

  const notifyEmails = notifyEmailRaw.split(",").map((e) => e.trim()).filter(Boolean);

  let body: { name?: string; phone?: string; email?: string; sourcePage?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_request" }, { status: 400 });
  }

  const { name = "", phone = "", email = "", sourcePage = "" } = body;
  const fromEmail = process.env.RESEND_FROM_EMAIL || "ArtDent Website <onboarding@resend.dev>";

  const adminOk = await sendEmail(apiKey, {
    from: fromEmail,
    to: notifyEmails,
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
  });

  let patientOk = true;
  if (email) {
    patientOk = await sendEmail(apiKey, {
      from: fromEmail,
      to: [email],
      subject: "Am primit solicitarea ta — ArtDent Slobozia",
      html: `
        <div style="font-family: sans-serif; font-size: 15px; line-height: 1.6; color: #222;">
          <h2 style="margin: 0 0 14px; color: #024B5C;">Mulțumim, ${escapeHtml(name || "pentru solicitare")}!</h2>
          <p>Am primit cererea ta de programare la ArtDent Slobozia. O să te sune cineva din echipa noastră în cel mai scurt timp, pentru a stabili ziua și ora exactă.</p>
          <p>Dacă e ceva urgent, ne poți suna direct la <strong>0723 192 716</strong>.</p>
          <p style="margin-top: 24px; font-size: 13px; color: #666;">ArtDent Slobozia</p>
        </div>
      `,
    });
  }

  if (!adminOk || !patientOk) {
    return NextResponse.json({ error: "notify_failed" }, { status: 200 });
  }
  return NextResponse.json({ ok: true });
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c] as string));
}
