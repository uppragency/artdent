import crypto from "crypto";

export const ADMIN_COOKIE_NAME = "artdent_admin";

// Stateless session token: an HMAC of a fixed string, keyed by the admin
// password. No session store needed — a cookie is valid if and only if it
// matches this exact value, which only someone who knows ADMIN_PANEL_PASSWORD
// (server-side) could have produced via the login route.
export function getExpectedAdminToken(): string | null {
  const secret = process.env.ADMIN_PANEL_PASSWORD;
  if (!secret) return null;
  return crypto.createHmac("sha256", secret).update("artdent-admin-session-v1").digest("hex");
}
