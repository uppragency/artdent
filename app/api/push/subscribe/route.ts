import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE_NAME, getExpectedAdminToken } from "@/lib/admin-auth";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

export async function POST(req: NextRequest) {
  const expectedToken = getExpectedAdminToken();
  const cookie = req.cookies.get(ADMIN_COOKIE_NAME)?.value;
  if (!expectedToken || !cookie || cookie !== expectedToken) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  let body: { subscription?: PushSubscriptionJSON };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_request" }, { status: 400 });
  }

  const subscription = body.subscription;
  if (!subscription || !subscription.endpoint) {
    return NextResponse.json({ error: "invalid_subscription" }, { status: 400 });
  }

  const supabaseAdmin = getSupabaseAdmin();
  const { error } = await supabaseAdmin
    .from("push_subscriptions")
    .upsert({ endpoint: subscription.endpoint, subscription }, { onConflict: "endpoint" });

  if (error) {
    console.error("push/subscribe supabase error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

export async function DELETE(req: NextRequest) {
  const expectedToken = getExpectedAdminToken();
  const cookie = req.cookies.get(ADMIN_COOKIE_NAME)?.value;
  if (!expectedToken || !cookie || cookie !== expectedToken) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  let body: { endpoint?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_request" }, { status: 400 });
  }
  if (!body.endpoint) return NextResponse.json({ error: "invalid_request" }, { status: 400 });

  const supabaseAdmin = getSupabaseAdmin();
  await supabaseAdmin.from("push_subscriptions").delete().eq("endpoint", body.endpoint);
  return NextResponse.json({ ok: true });
}
