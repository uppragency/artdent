import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

// Notificare push către panoul de admin când vine o cerere nouă de programare.
// Trimis fire-and-forget din formularul public; eșuează silențios dacă VAPID
// nu e configurat, la fel ca notificarea prin email.
export async function POST(req: NextRequest) {
  const publicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
  const privateKey = process.env.VAPID_PRIVATE_KEY;
  const subject = process.env.VAPID_SUBJECT || "mailto:contact@artdentslobozia.ro";

  if (!publicKey || !privateKey || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return NextResponse.json({ skipped: true });
  }

  let body: { name?: string; phone?: string; sourcePage?: string | null };
  try {
    body = await req.json();
  } catch {
    body = {};
  }

  try {
    const webPush = await import("web-push");
    webPush.setVapidDetails(subject, publicKey, privateKey);

    const supabaseAdmin = getSupabaseAdmin();
    const { data: subs, error } = await supabaseAdmin.from("push_subscriptions").select("endpoint, subscription");
    if (error || !subs || subs.length === 0) {
      return NextResponse.json({ skipped: true });
    }

    const payload = JSON.stringify({
      title: "Programare nouă — ArtDent Slobozia",
      body: `${body.name || "Un pacient"} a trimis o cerere de programare.`,
      url: "/programari-9k3fq7",
    });

    await Promise.all(
      subs.map(async (row) => {
        try {
          await webPush.sendNotification(row.subscription, payload);
        } catch (err: unknown) {
          const statusCode = (err as { statusCode?: number })?.statusCode;
          if (statusCode === 404 || statusCode === 410) {
            await supabaseAdmin.from("push_subscriptions").delete().eq("endpoint", row.endpoint);
          }
        }
      })
    );

    return NextResponse.json({ ok: true, sent: subs.length });
  } catch (err) {
    console.error("push/notify-new-submission error:", err);
    return NextResponse.json({ skipped: true });
  }
}
