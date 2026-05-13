import { whopSdk, WHOP_WEBHOOK_SECRET } from "../../../lib/whop-sdk";

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
        // FUTURE: persist membership state to DB, send welcome email, etc.
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
        break;
      }

      case "refund.created": {
        const refund = event.data;
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
    // Don't 500 on internal handler errors — Whop will retry and we don't want
    // a single bad event to block the queue. Log and ack.
    console.error("[whop-webhook] handler error", err);
  }

  return new Response("ok", { status: 200 });
}
