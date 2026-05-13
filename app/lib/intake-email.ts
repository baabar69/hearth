import "server-only";

export type IntakeSubmission = {
  form: "full" | "short";
  firstName: string;
  email: string;
  ageRange?: string;
  country?: string;
  topics?: string[];
  openContext?: string;
  wellbeing?: number | null;
  sleep?: string;
  sadness?: string;
  anxiety?: string;
  safetyCheck?: string;
  priorTherapy?: string;
  relationshipStatus?: string;
  spirituality?: string;
  faithTradition?: string;
  employment?: string;
  keeperGender?: string;
  preferredLanguage?: string;
  connectionMode?: string;
  availability?: string[];
  openNote?: string;
  referralSource?: string;
  agreePeerSupport?: boolean;
  agreeAge?: boolean;
};

function row(label: string, value: string | undefined | null): string {
  if (value === undefined || value === null || value === "") return "";
  return `<tr><td style="padding:6px 12px;font-family:monospace;color:#888;font-size:11px;text-transform:uppercase;letter-spacing:0.08em;vertical-align:top;white-space:nowrap">${label}</td><td style="padding:6px 12px;color:#222;font-size:14px;line-height:1.5">${escapeHtml(value)}</td></tr>`;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function buildNotifyEmail(s: IntakeSubmission): {
  subject: string;
  html: string;
  text: string;
} {
  const topicsStr = s.topics?.length ? s.topics.join(", ") : undefined;
  const availStr = s.availability?.length ? s.availability.join(", ") : undefined;
  const wellbeingStr =
    s.wellbeing !== null && s.wellbeing !== undefined
      ? `${s.wellbeing}/5`
      : undefined;

  const safetyFlag =
    s.safetyCheck === "yes"
      ? `<div style="background:#FFF0F0;border:1.5px solid #E57373;border-radius:8px;padding:14px 18px;margin:12px;font-size:13px;line-height:1.6;color:#8B0000"><strong>⚠ Safety flag:</strong> Applicant reports thoughts of harm. Crisis resources were shown at intake. <strong>Reach out promptly.</strong></div>`
      : s.safetyCheck === "sometimes"
        ? `<div style="background:#FFF8E7;border:1px solid #F5C842;border-radius:8px;padding:12px 18px;margin:12px;font-size:13px;line-height:1.6;color:#7A6200"><strong>Note:</strong> Applicant reports occasional difficult thoughts but not in immediate danger.</div>`
        : "";

  const subject =
    s.form === "short"
      ? `New Hearth interest: ${s.firstName}`
      : `New Hearth intake: ${s.firstName}${topicsStr ? ` (${topicsStr.split(",")[0]?.trim()})` : ""}`;

  const html = `<!doctype html>
<html><body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;background:#FAF7F2;padding:32px 12px;color:#222">
<div style="max-width:640px;margin:0 auto;background:white;border:1px solid #E8E2DA;border-radius:12px;overflow:hidden">
  <div style="padding:24px 32px;background:#9C2A1A;color:white">
    <div style="font-family:monospace;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;opacity:0.85">Hearth · ${s.form === "short" ? "Homepage interest" : "Full intake"}</div>
    <h1 style="margin:6px 0 0;font-size:22px;font-weight:400">${escapeHtml(s.firstName)} wants to meet a Keeper.</h1>
  </div>
  ${safetyFlag}
  <table style="width:100%;border-collapse:collapse;margin:12px 0">
    ${row("Name", s.firstName)}
    ${row("Email", s.email)}
    ${row("Age", s.ageRange)}
    ${row("Country", s.country)}
    ${row("Language", s.preferredLanguage)}
    ${row("Topics", topicsStr)}
    ${row("Context", s.openContext)}
    ${row("Wellbeing", wellbeingStr)}
    ${row("Sleep", s.sleep)}
    ${row("Sadness", s.sadness)}
    ${row("Anxiety", s.anxiety)}
    ${row("Safety", s.safetyCheck)}
    ${row("Prior therapy", s.priorTherapy)}
    ${row("Relationship", s.relationshipStatus)}
    ${row("Spirituality", s.spirituality)}
    ${row("Tradition", s.faithTradition)}
    ${row("Employment", s.employment)}
    ${row("Keeper gender", s.keeperGender)}
    ${row("Connection", s.connectionMode)}
    ${row("Availability", availStr)}
    ${row("Note to Keeper", s.openNote)}
    ${row("Heard via", s.referralSource)}
  </table>
  <div style="padding:18px 32px;font-family:monospace;font-size:11px;color:#888;border-top:1px solid #E8E2DA;line-height:1.6">
    Submitted ${new Date().toISOString()}
  </div>
</div>
</body></html>`;

  const text = `New Hearth ${s.form} intake from ${s.firstName} <${s.email}>.

${[
  ["Age", s.ageRange],
  ["Country", s.country],
  ["Language", s.preferredLanguage],
  ["Topics", topicsStr],
  ["Wellbeing", wellbeingStr],
  ["Safety", s.safetyCheck],
  ["Prior therapy", s.priorTherapy],
  ["Tradition", s.faithTradition],
  ["Note to Keeper", s.openNote],
]
  .filter(([, v]) => v)
  .map(([k, v]) => `${k}: ${v}`)
  .join("\n")}`;

  return { subject, html, text };
}

export function buildAckEmail(s: IntakeSubmission): {
  subject: string;
  html: string;
  text: string;
} {
  const subject = "We received your Hearth intake";
  const html = `<!doctype html>
<html><body style="font-family:Georgia,'Times New Roman',serif;background:#FAF7F2;padding:32px 12px;color:#222">
<div style="max-width:540px;margin:0 auto;background:white;border:1px solid #E8E2DA;border-radius:12px;padding:40px 36px;line-height:1.65">
  <div style="font-family:monospace;font-size:11px;letter-spacing:0.16em;text-transform:uppercase;color:#9C2A1A">Hearth</div>
  <h1 style="font-size:26px;font-weight:400;margin:14px 0 18px">${escapeHtml(s.firstName)}, we read every word.</h1>
  <p style="font-size:15px;color:#333">Thank you for trusting us with this. A real person on our team is reading your answers right now and will pair you by hand with a Keeper who fits.</p>
  <p style="font-size:15px;color:#333">Expect a note from us within <strong>48 hours</strong>, at the same email address. Just reply if anything comes up.</p>
  <p style="font-size:14px;color:#777;margin-top:32px;padding-top:24px;border-top:1px solid #E8E2DA">In the meantime, you can read one of our Embers. They&rsquo;re short reflections from our Keepers about the kind of weight we sit with: <a href="https://dearhearth.com/embers" style="color:#9C2A1A">dearhearth.com/embers</a></p>
  <p style="font-size:11px;color:#999;margin-top:24px;font-family:monospace">If this wasn&rsquo;t you, ignore this email. Nothing happens without your reply.</p>
</div>
</body></html>`;

  const text = `${s.firstName}, we read every word.

Thank you for trusting us with this. A real person on our team is reading your answers right now and will pair you by hand with a Keeper who fits.

Expect a note from us within 48 hours.

— Hearth`;

  return { subject, html, text };
}
