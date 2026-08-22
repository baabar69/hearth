import "server-only";
import { escapeHtml } from "./brevo";

/**
 * Emails that go to members around money events. Plain, short, honest about
 * what happens next. No em dashes (house rule), no clinical language, and the
 * crisis line in every one.
 */

const SITE = "https://dearhearth.com";

export function humanisePlan(slug: string | undefined): string {
  if (!slug) return "your membership";
  if (slug.startsWith("hearth-deep")) return slug.endsWith("annual") ? "Hearth Deep, annual" : "Hearth Deep";
  if (slug.startsWith("hearthside")) return slug.endsWith("annual") ? "Hearthside, annual" : "Hearthside";
  return slug.replace(/-/g, " ");
}

export function formatAmount(subtotal: unknown, currency: unknown): string {
  const n = typeof subtotal === "number" ? subtotal : Number(subtotal);
  const cur = typeof currency === "string" && currency ? currency.toUpperCase() : "USD";
  if (!Number.isFinite(n)) return "";
  try {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: cur }).format(n);
  } catch {
    return `${n} ${cur}`;
  }
}

const CRISIS =
  "Hearth is peer support, not therapy, and not a crisis service. If you are in crisis, in the US call or text 988; in the UK and Ireland, Samaritans on 116 123; in Canada, 1-866-585-0445.";

export function buildMemberWelcomeEmail(args: {
  planSlug?: string;
  amount?: string;
  email?: string;
}): { subject: string; html: string; text: string } {
  const plan = humanisePlan(args.planSlug);
  const amountLine = args.amount ? ` (${args.amount})` : "";
  // Carry the payer's email into the intake so a later submission ties back to this payment.
  const intakeUrl = args.email
    ? `${SITE}/intake?email=${encodeURIComponent(args.email)}&paid=1`
    : `${SITE}/intake`;

  const subject = "Your chair is being set. What happens next at Hearth";

  const text = [
    `Your payment for ${plan}${amountLine} has come through. Thank you for trusting us with this.`,
    "",
    "What happens next:",
    "",
    "1. A person at Hearth reads your intake. If you have not done it yet, it takes about twelve minutes and it is how we match you: " + intakeUrl,
    "2. Within 72 hours you are matched by hand with one Keeper, a trained peer companion, chosen for the themes you carry and the kind of company that will actually help.",
    "3. Your Keeper emails you directly to introduce themselves and to book your first Sit, a 35 to 60 minute video or audio conversation.",
    "4. If that first Sit does not feel right, tell us and we assign you a different Keeper. No questions, no extra charge.",
    "",
    "You can manage or cancel your membership any time at https://whop.com/@me/settings/memberships, in one click.",
    "",
    "Reply to this email if anything is unclear. A person reads it.",
    "",
    CRISIS,
    "",
    "Hearth",
    SITE,
  ].join("\n");

  const html = `
<div style="font-family:Georgia,serif;color:#1A1816;max-width:560px;line-height:1.6;font-size:16px">
  <p>Your payment for <strong>${escapeHtml(plan)}</strong>${escapeHtml(amountLine)} has come through. Thank you for trusting us with this.</p>
  <p style="margin-top:22px"><strong>What happens next</strong></p>
  <ol style="padding-left:20px">
    <li style="margin-bottom:10px">A person at Hearth reads your intake. If you have not done it yet, it takes about twelve minutes and it is how we match you: <a href="${intakeUrl}" style="color:#9C2A1A">${SITE}/intake</a></li>
    <li style="margin-bottom:10px">Within 72 hours you are matched by hand with one Keeper, a trained peer companion, chosen for the themes you carry and the kind of company that will actually help.</li>
    <li style="margin-bottom:10px">Your Keeper emails you directly to introduce themselves and to book your first Sit, a 35 to 60 minute video or audio conversation.</li>
    <li style="margin-bottom:10px">If that first Sit does not feel right, tell us and we assign you a different Keeper. No questions, no extra charge.</li>
  </ol>
  <p>You can manage or cancel your membership any time at <a href="https://whop.com/@me/settings/memberships" style="color:#9C2A1A">whop.com</a>, in one click.</p>
  <p>Reply to this email if anything is unclear. A person reads it.</p>
  <p style="margin-top:26px;font-size:13px;color:#6B6051;border-top:1px solid #E0D5BF;padding-top:14px">${escapeHtml(CRISIS)}</p>
  <p style="font-size:13px;color:#6B6051">Hearth · <a href="${SITE}" style="color:#6B6051">dearhearth.com</a></p>
</div>`.trim();

  return { subject, html, text };
}

type Field = [label: string, value: string | undefined | null];

function rows(fields: Field[]): string {
  return fields
    .filter(([, v]) => v !== undefined && v !== null && v !== "")
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;font-family:monospace;color:#888;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;vertical-align:top;white-space:nowrap">${escapeHtml(k)}</td><td style="padding:6px 12px;color:#222;font-size:14px">${escapeHtml(String(v))}</td></tr>`,
    )
    .join("");
}

/**
 * Founder-facing alert for any money event. Deliberately dense: this is an
 * operational page, not a member email.
 */
export function buildFounderMoneyAlert(args: {
  kind: "paid" | "failed" | "cancelled" | "refunded";
  fields: Field[];
  action: string;
}): { subject: string; html: string; text: string } {
  const title = {
    paid: "New paying member",
    failed: "Payment failed",
    cancelled: "Membership cancelled",
    refunded: "Refund issued",
  }[args.kind];

  const email = args.fields.find(([k]) => k.toLowerCase() === "email")?.[1] ?? "";
  const subject = `${title}${email ? `: ${email}` : ""}`;

  const text = [
    title,
    "",
    ...args.fields
      .filter(([, v]) => v !== undefined && v !== null && v !== "")
      .map(([k, v]) => `${k}: ${v}`),
    "",
    `Action: ${args.action}`,
  ].join("\n");

  const html = `
<div style="font-family:Georgia,serif;color:#1A1816;max-width:600px">
  <p style="font-size:18px"><strong>${escapeHtml(title)}</strong></p>
  <table style="border-collapse:collapse;width:100%;background:#F7F3EC;border-radius:8px">${rows(args.fields)}</table>
  <p style="margin-top:18px;padding:12px 16px;background:#FFF4E5;border-left:3px solid #9C2A1A;font-size:15px"><strong>Action:</strong> ${escapeHtml(args.action)}</p>
</div>`.trim();

  return { subject, html, text };
}
