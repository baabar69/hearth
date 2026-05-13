import { Resend } from "resend";
import {
  buildAckEmail,
  buildNotifyEmail,
  type IntakeSubmission,
} from "../../lib/intake-email";

export const runtime = "nodejs";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const INTAKE_NOTIFY_EMAIL = process.env.INTAKE_NOTIFY_EMAIL;
const INTAKE_FROM_EMAIL =
  process.env.INTAKE_FROM_EMAIL ?? "onboarding@resend.dev";

const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

function isString(v: unknown): v is string {
  return typeof v === "string";
}

function isStringArray(v: unknown): v is string[] {
  return Array.isArray(v) && v.every((x) => typeof x === "string");
}

function isValidEmail(value: string): boolean {
  // Cheap RFC-ish check — server-side guard, not the source of truth.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function parseSubmission(body: unknown): IntakeSubmission | null {
  if (!body || typeof body !== "object") return null;
  const o = body as Record<string, unknown>;

  if (!isString(o.firstName) || o.firstName.trim().length === 0) return null;
  if (!isString(o.email) || !isValidEmail(o.email)) return null;

  const form = o.form === "short" ? "short" : "full";

  return {
    form,
    firstName: o.firstName.trim().slice(0, 80),
    email: o.email.trim().slice(0, 200),
    ageRange: isString(o.ageRange) ? o.ageRange : undefined,
    country: isString(o.country) ? o.country : undefined,
    topics: isStringArray(o.topics) ? o.topics : undefined,
    openContext: isString(o.openContext)
      ? o.openContext.slice(0, 2000)
      : undefined,
    wellbeing:
      typeof o.wellbeing === "number" && o.wellbeing >= 1 && o.wellbeing <= 5
        ? o.wellbeing
        : null,
    sleep: isString(o.sleep) ? o.sleep : undefined,
    sadness: isString(o.sadness) ? o.sadness : undefined,
    anxiety: isString(o.anxiety) ? o.anxiety : undefined,
    safetyCheck: isString(o.safetyCheck) ? o.safetyCheck : undefined,
    priorTherapy: isString(o.priorTherapy) ? o.priorTherapy : undefined,
    relationshipStatus: isString(o.relationshipStatus)
      ? o.relationshipStatus
      : undefined,
    spirituality: isString(o.spirituality) ? o.spirituality : undefined,
    faithTradition: isString(o.faithTradition) ? o.faithTradition : undefined,
    employment: isString(o.employment) ? o.employment : undefined,
    keeperGender: isString(o.keeperGender) ? o.keeperGender : undefined,
    preferredLanguage: isString(o.preferredLanguage)
      ? o.preferredLanguage
      : undefined,
    connectionMode: isString(o.connectionMode) ? o.connectionMode : undefined,
    availability: isStringArray(o.availability) ? o.availability : undefined,
    openNote: isString(o.openNote) ? o.openNote.slice(0, 2000) : undefined,
    referralSource: isString(o.referralSource) ? o.referralSource : undefined,
    agreePeerSupport: typeof o.agreePeerSupport === "boolean"
      ? o.agreePeerSupport
      : undefined,
    agreeAge: typeof o.agreeAge === "boolean" ? o.agreeAge : undefined,
  };
}

export async function POST(request: Request): Promise<Response> {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid_json" }, { status: 400 });
  }

  const submission = parseSubmission(body);
  if (!submission) {
    return Response.json({ error: "invalid_submission" }, { status: 400 });
  }

  // Audit log — captured by Netlify function logs in prod, terminal in dev.
  console.log(
    JSON.stringify({
      level: "info",
      tag: "intake",
      form: submission.form,
      first_name: submission.firstName,
      email: submission.email,
      country: submission.country,
      language: submission.preferredLanguage,
      safety: submission.safetyCheck,
      topic_count: submission.topics?.length,
    }),
  );

  if (submission.safetyCheck === "yes") {
    // Surface safety-flag submissions in their own log line so they're easy to filter.
    console.warn(
      JSON.stringify({
        level: "warn",
        tag: "intake-safety-flag",
        first_name: submission.firstName,
        email: submission.email,
      }),
    );
  }

  if (!resend || !INTAKE_NOTIFY_EMAIL) {
    // Email not configured — succeed anyway so dev works without Resend setup.
    // Console log above is the audit trail until they wire up email.
    return Response.json({ ok: true, sent: false });
  }

  try {
    const notify = buildNotifyEmail(submission);
    const ack = buildAckEmail(submission);

    await Promise.all([
      resend.emails.send({
        from: INTAKE_FROM_EMAIL,
        to: INTAKE_NOTIFY_EMAIL,
        replyTo: submission.email,
        subject: notify.subject,
        html: notify.html,
        text: notify.text,
      }),
      resend.emails.send({
        from: INTAKE_FROM_EMAIL,
        to: submission.email,
        subject: ack.subject,
        html: ack.html,
        text: ack.text,
      }),
    ]);

    return Response.json({ ok: true, sent: true });
  } catch (err) {
    // Don't fail the user's submission if email delivery hiccups — the audit
    // log line above still captures the lead. Surface to ops via log.
    console.error("[intake] email delivery failed", err);
    return Response.json({ ok: true, sent: false, email_error: true });
  }
}
