import "server-only";
import Whop from "@whop/sdk";

const apiKey = process.env.WHOP_API_KEY;

if (!apiKey) {
  throw new Error(
    "WHOP_API_KEY is not set. Add it to .env.local (dev) or your hosting environment (prod). " +
      "Get a key at https://whop.com/dashboard/developer (production) or " +
      "https://sandbox.whop.com/dashboard/developer (sandbox)",
  );
}

// When NEXT_PUBLIC_WHOP_ENVIRONMENT=sandbox, point the SDK at sandbox-api.whop.com
// so server-side calls (e.g. checkoutConfigurations.create) hit sandbox data.
// The client-side embed reads the same env var and points its iframe at sandbox too.
const baseURL =
  process.env.NEXT_PUBLIC_WHOP_ENVIRONMENT === "sandbox"
    ? "https://sandbox-api.whop.com/api/v1"
    : undefined; // SDK default = https://api.whop.com/api/v1

export const whopSdk = new Whop({ apiKey, baseURL });

// Per Whop's docs, the webhook secret must be base64-encoded before being
// passed to webhooks.unwrap() — the underlying standardwebhooks library
// expects an encoded key. The raw env value comes from Whop in plain form
// (e.g. "whsec_xxxxxxxx") and gets encoded here.
const rawWebhookSecret = process.env.WHOP_WEBHOOK_SECRET;
export const WHOP_WEBHOOK_SECRET = rawWebhookSecret
  ? Buffer.from(rawWebhookSecret).toString("base64")
  : undefined;
