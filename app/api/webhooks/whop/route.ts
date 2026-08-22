import { whopSdk, WHOP_WEBHOOK_SECRET } from "../../../lib/whop-sdk";
import { notifyFounder, sendEmail, emailConfigured } from "../../../lib/brevo";
import { buildFounderMoneyAlert, buildMemberWelcomeEmail, formatAmount, humanisePlan } from "../../../lib/member-email";

export const runtime = "nodejs";

export async function POST(request: Request): Promise<Response> {
  if (!WHOP_WEBHOOK_SECRET) {
    console.error(
      "[whop-webhook] WHOP_WEBHOOK_SECRET is not set. Rejecting request.",
    );
    return new Response("Webhook not configured", { status: 500 });
  }

  const body = await request.text();
  const headers: Record<string, string> = {};
  request.headers.forEach((value, key) => {
    headers[key] = value;
  });

  let event;
  try {
    event = whopSdk.webhooks.unwrap(body, {
      headers,
      key: WHOP_WEBHOOK_SECRET,
    });
  } catch (err) {
    console.warn("[whop-webhook] signature verification failed", err);
    return new Response("Invalid signature", { status: 400 });
  }

  // Structured log line per event. Captured by Vercel logs in prod, terminal in dev.
  // This is the audit trail until we add a real DB.
  console.log(
    JSON.stringify({
      level: "info",
      tag: "whop-webhook",
      event_id: event.id,
      event_type: event.type,
      timestamp: event.timestamp,
    }),
  );

  try {
    switch (event.type) {
      case "payment.succeeded": {
        const payment = event.data;
        console.log(
          JSON.stringify({
            level: "info",
            tag: "whop-webhook",
            handler: "payment.succeeded",
            payment_id: payment.id,
            amount: payment.subtotal,
            currency: payment.currency,
            user_id: payment.user?.id,
            user_email: payment.user?.email,
            plan_id: payment.plan?.id,
            metadata: payment.metadata,
          }),
        );
        {
          const email = payment.user?.email ?? undefined;
          const planSlug =
            typeof payment.metadata?.plan_slug === "string"
              ? payment.metadata.plan_slug
              : undefined;
          const amount = formatAmount(payment.subtotal, payment.currency);
          const alert = buildFounderMoneyAlert({
            kind: "paid",
            fields: [
              ["Email", email],
              ["Intake email", typeof payment.metadata?.intake_email === "string" ? payment.metadata.intake_email : undefined],
              ["First name", typeof payment.metadata?.first_name === "string" ? payment.metadata.first_name : undefined],
              ["Plan", humanisePlan(planSlug)],
              ["Amount", amount],
              ["Payment ID", payment.id],
              ["User ID", payment.user?.id],
              ["Source", typeof payment.metadata?.source === "string" ? payment.metadata.source : undefined],
            ],
            action:
              "Find their intake: search your inbox for the intake email above, or the payment email if none. Match them by hand within 72 hours and have the Keeper send the introduction and booking link. If there is no intake yet, the welcome email has already asked them to complete it, with their email pre-filled so it ties back here.",
          });
          await notifyFounder({ ...alert, replyTo: email });

          // The welcome page promises this email. Send it, and never let a
          // failure here turn into a non-200 that makes Whop retry the event.
          if (email && emailConfigured) {
            try {
              await sendEmail({ to: email, ...buildMemberWelcomeEmail({ planSlug, amount, email }) });
            } catch (err) {
              console.error(
                JSON.stringify({
                  level: "error",
                  tag: "whop-webhook",
                  handler: "payment.succeeded",
                  welcome_email: "failed",
                  error: err instanceof Error ? err.message : String(err),
                }),
              );
            }
          }
        }
        break;
      }

      case "payment.failed": {
        const payment = event.data;
        console.warn(
          JSON.stringify({
            level: "warn",
            tag: "whop-webhook",
            handler: "payment.failed",
            payment_id: payment.id,
            user_email: payment.user?.email,
            failure_message: payment.failure_message,
          }),
        );
        await notifyFounder(
          buildFounderMoneyAlert({
            kind: "failed",
            fields: [
              ["Email", payment.user?.email ?? undefined],
              ["Payment ID", payment.id],
              ["Reason", payment.failure_message ?? undefined],
            ],
            action:
              "Whop retries failed payments automatically. If this is an existing member, expect a dunning email from Whop to them; reach out personally only if it fails again.",
          }),
        );
        break;
      }

      case "membership.activated": {
        const membership = event.data;
        console.log(
          JSON.stringify({
            level: "info",
            tag: "whop-webhook",
            handler: "membership.activated",
            membership_id: membership.id,
            user_id: membership.user?.id,
            plan_id: membership.plan?.id,
            status: membership.status,
          }),
        );
        break;
      }

      case "membership.deactivated": {
        const membership = event.data;
        console.log(
          JSON.stringify({
            level: "info",
            tag: "whop-webhook",
            handler: "membership.deactivated",
            membership_id: membership.id,
            user_id: membership.user?.id,
          }),
        );
        await notifyFounder(
          buildFounderMoneyAlert({
            kind: "cancelled",
            fields: [
              ["Email", membership.user?.email ?? undefined],
              ["Membership ID", membership.id],
              ["User ID", membership.user?.id],
            ],
            action:
              "Tell their Keeper today so the Long Talk closes gracefully rather than going silent. Access continues to the end of the paid period. No win-back sequence; one warm note from the Keeper is enough.",
          }),
        );
        break;
      }

      case "refund.created": {
        const refund = event.data;
        await notifyFounder(
          buildFounderMoneyAlert({
            kind: "refunded",
            fields: [
              ["Refund ID", refund.id],
              ["Details", JSON.stringify(refund).slice(0, 600)],
            ],
            action:
              "Confirm it in the Whop dashboard, tell the Keeper, and log why. Refund rate is a tier-1 KPI with a target under 3 percent.",
          }),
        );
        console.log(
          JSON.stringify({
            level: "info",
            tag: "whop-webhook",
            handler: "refund.created",
            refund_id: refund.id,
            payment_id: refund.payment?.id,
            amount: refund.amount,
          }),
        );
        break;
      }

      default: {
        // Acknowledge but don't do anything yet.
        break;
      }
    }
  } catch (err) {
    // Don't 500 on internal handler errors: Whop will retry and we don't want
    // a single bad event to block the queue. Log and ack.
    console.error("[whop-webhook] handler error", err);
  }

  return new Response("ok", { status: 200 });
}
