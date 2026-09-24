import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE_NAME, getExpectedAdminToken } from "@/lib/admin-auth";
import { getSupabaseAdmin } from "@/lib/supabase-admin";

const VALID_STATUSES = ["noua", "sunata", "confirmata", "anulata"];

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const expectedToken = getExpectedAdminToken();
  if (!expectedToken) {
    return NextResponse.json({ error: "server_not_configured" }, { status: 500 });
  }

  const cookie = req.cookies.get(ADMIN_COOKIE_NAME)?.value;
  if (!cookie || cookie !== expectedToken) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  let body: { status?: string; note?: string; archived?: boolean };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_request" }, { status: 400 });
  }

  const update: { status?: string; note?: string; archived?: boolean } = {};

  if (body.status !== undefined) {
    if (!VALID_STATUSES.includes(body.status)) {
      return NextResponse.json({ error: "invalid_status" }, { status: 400 });
    }
    update.status = body.status;
  }

  if (body.note !== undefined) {
    update.note = String(body.note).slice(0, 2000);
  }

  if (body.archived !== undefined) {
    update.archived = Boolean(body.archived);
  }

  if (Object.keys(update).length === 0) {
    return NextResponse.json({ error: "invalid_request" }, { status: 400 });
  }

  const supabaseAdmin = getSupabaseAdmin();
  const { error } = await supabaseAdmin
    .from("contact_submissions")
    .update(update)
    .eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
