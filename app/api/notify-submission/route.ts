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
      html: patientConfirmationHtml(name),
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

function patientConfirmationHtml(name: string) {
  const displayName = escapeHtml(name || "pentru solicitare");
  return `<!doctype html>
<html lang="ro">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Am primit solicitarea ta — ArtDent Slobozia</title>
</head>
<body style="margin:0; padding:0; background:#F4F1EA; font-family: Georgia, 'Times New Roman', serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F4F1EA; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 560px; background:#ffffff; border-radius: 10px; overflow: hidden;">

          <!-- Header -->
          <tr>
            <td style="background:#0D5B70; padding: 32px 40px; text-align: center;">
              <div style="font-family: Georgia, serif; font-size: 24px; color: #ffffff; letter-spacing: 0.5px;">ArtDent Slobozia</div>
              <div style="font-family: Arial, sans-serif; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #E0C67A; margin-top: 6px;">Cabinet Stomatologic</div>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding: 40px 40px 8px; font-family: Arial, sans-serif;">
              <h1 style="margin:0 0 18px; font-family: Georgia, serif; font-weight: 400; font-size: 26px; color: #0D5B70;">Mulțumim, ${displayName}!</h1>
              <p style="margin:0 0 16px; font-size: 15px; line-height: 1.7; color: #333333;">
                Am primit cererea ta de programare la ArtDent Slobozia. Cineva din echipa noastră te va suna în cel mai scurt timp, pentru a stabili împreună ziua și ora exactă.
              </p>
              <p style="margin:0 0 28px; font-size: 15px; line-height: 1.7; color: #333333;">
                Dacă între timp apare ceva urgent, ne poți suna direct.
              </p>

              <!-- CTA telefon -->
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin: 0 0 32px;">
                <tr>
                  <td style="background:#0D5B70; border-radius: 4px;">
                    <a href="tel:+40723192716" style="display:block; padding: 14px 28px; font-family: Arial, sans-serif; font-size: 15px; font-weight: bold; color:#ffffff; text-decoration:none;">
                      Sună-ne: 0723 192 716
                    </a>
                  </td>
                </tr>
              </table>

              <div style="height:1px; background:#E7E2D5; margin: 0 0 28px;"></div>

              <p style="margin:0 0 4px; font-size: 13px; color: #8a8a8a;">Cu drag,</p>
              <p style="margin:0; font-size: 15px; color: #0D5B70; font-weight: bold;">Echipa ArtDent Slobozia</p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#F9F7F1; padding: 24px 40px; text-align:center; font-family: Arial, sans-serif;">
              <p style="margin:0 0 6px; font-size: 12.5px; color:#8a8a8a;">Al. Feroviarului 1, Slobozia, Ialomița</p>
              <p style="margin:0; font-size: 12.5px; color:#8a8a8a;">
                <a href="https://artdentslobozia.ro" style="color:#0D5B70; text-decoration:none;">artdentslobozia.ro</a>
                &nbsp;·&nbsp; 0723 192 716
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
