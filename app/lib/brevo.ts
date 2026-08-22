import "server-only";

/**
 * The one place outbound email happens. Brevo's transactional endpoint,
 * called with fetch rather than their SDK: one POST, no dependency worth
 * carrying for it.
 *
 * Two things that will bite whoever touches this next:
 * - Brevo blocks API calls from unrecognised IPs, and Netlify functions get a
 *   different IP per invocation. "Block unknown IP addresses" must stay
 *   deactivated in Brevo security settings or every send fails silently.
 * - The sender address must be a validated sender or on an authenticated
 *   domain in Brevo. dearhearth.com is authenticated; anything else is not.
 */

const BREVO_API_KEY = process.env.BREVO_API_KEY;
export const FOUNDER_EMAIL = process.env.INTAKE_NOTIFY_EMAIL;
const FROM_EMAIL = process.env.INTAKE_FROM_EMAIL ?? "hello@dearhearth.com";
const FROM_NAME = process.env.INTAKE_FROM_NAME ?? "Hearth";

export const emailConfigured = Boolean(BREVO_API_KEY && FOUNDER_EMAIL);

export type OutboundEmail = {
  to: string;
  replyTo?: string;
  subject: string;
  html: string;
  text: string;
};

export async function sendEmail(email: OutboundEmail): Promise<void> {
  if (!BREVO_API_KEY) throw new Error("BREVO_API_KEY is not set");

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": BREVO_API_KEY,
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      sender: { name: FROM_NAME, email: FROM_EMAIL },
      to: [{ email: email.to }],
      ...(email.replyTo ? { replyTo: { email: email.replyTo } } : {}),
      subject: email.subject,
      htmlContent: email.html,
      textContent: email.text,
    }),
  });

  if (!res.ok) {
    throw new Error(`brevo ${res.status}: ${await res.text()}`);
  }
}

/**
 * Founder alert. Never throws: an alert failing must not turn into a non-200
 * from a webhook, which would make the sender retry and alert us twice.
 * Failures are logged with the subject so the event is still findable.
 */
export async function notifyFounder(args: {
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
}): Promise<boolean> {
  if (!emailConfigured || !FOUNDER_EMAIL) {
    console.warn(
      JSON.stringify({
        level: "warn",
        tag: "notify-founder",
        skipped: "email not configured",
        subject: args.subject,
      }),
    );
    return false;
  }
  try {
    await sendEmail({ to: FOUNDER_EMAIL, ...args });
    return true;
  } catch (err) {
    console.error(
      JSON.stringify({
        level: "error",
        tag: "notify-founder",
        subject: args.subject,
        error: err instanceof Error ? err.message : String(err),
      }),
    );
    return false;
  }
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
