# Setup

How to get the embedded-checkout flow running locally from a fresh clone.

## Prerequisites

- Node.js 20+ and npm
- A Whop account at https://whop.com (KYC approved for real payments; sandbox account separately for fake-card testing)
- Optional: ngrok or similar tunneling tool (only needed to receive webhooks on localhost)

## 1. Install dependencies

```bash
cd /Users/mac/Downloads/hearth
npm install
```

Two Whop packages are now in the deps:

- `@whop/sdk` — server-side SDK (used by `app/lib/whop-sdk.ts` and the webhook handler)
- `@whop/checkout` — React component (used by `app/components/CheckoutEmbed.tsx`)
- `server-only` — Next.js helper that prevents accidental client-bundling of server modules

## 2. Configure env vars

Copy the template and fill in real values:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

### `WHOP_API_KEY` (server-only)
1. Go to https://whop.com/dashboard/developer
2. Under **Company API Keys** → click **Create**
3. Name it `hearth-dev` (or similar)
4. Role: **Owner** (narrow to scopes later before prod — see deployment.md)
5. Click **Generate**, copy the `whop_...` value, paste into `.env.local`

### `WHOP_WEBHOOK_SECRET` (server-only)
You'll get this AFTER setting up the webhook endpoint (step 4 below).

### `NEXT_PUBLIC_WHOP_ENVIRONMENT` (public)
- `production` — real cards, real money, refund-yourself testing path
- `sandbox` — test cards (4242…), no real money. Requires sandbox plan IDs.

### Plan IDs (public)
Default values in `.env.example` are the real production plan IDs for Hearth. Override only if you create sandbox plans:

```
NEXT_PUBLIC_HEARTHSIDE_PLAN_ID=plan_qMkY2ON1bgnbp
NEXT_PUBLIC_HEARTH_DEEP_PLAN_ID=plan_yOUyMLKC42oZI
NEXT_PUBLIC_HEARTHSIDE_ANNUAL_PLAN_ID=plan_3jx4Ci4VilnbW
NEXT_PUBLIC_HEARTH_DEEP_ANNUAL_PLAN_ID=plan_NvT1QMwnWj2up
```

### `NEXT_PUBLIC_HEARTH_URL` (public)
- Local: `http://localhost:3000`
- Prod: `https://your-domain.com` (no trailing slash)

This is used to build the `redirect_url` sent to Whop's checkout configuration so users return to your `/welcome` page after payment.

## 3. Set up sandbox for test cards

Sandbox lets you pay with `4242 4242 4242 4242` and similar — no real money, unlimited testing. Recommended for any dev work.

**The sandbox is a completely separate Whop account** with its own URL, dashboard, products, plans, and API keys. You're not "switching modes" inside your existing account — you're signing up for a parallel sandbox account at `sandbox.whop.com`.

### 3a. Sign up for the sandbox

1. Open https://sandbox.whop.com/login → click **Sign up**
2. Use the same email as your production account (allowed — they're separate)
3. Verify email, finish onboarding (no KYC needed for sandbox)
4. You'll land on https://sandbox.whop.com/dashboard

### 3b. Recreate your products and plans in sandbox

Production plans don't exist in sandbox. You need to manually duplicate them:

1. From https://sandbox.whop.com/dashboard → **Products** → **Create**
2. Create `Hearthside` with a $39/month plan
3. Create `Hearth Deep` with a $99/month plan
4. (Optional) Create annual plans too
5. For each plan, copy the `plan_xxx` ID — same format as production

### 3c. Get a sandbox API key

1. Go to https://sandbox.whop.com/dashboard/developer
2. Under **Company API keys** → click **+ Create**
3. Name it `hearth-sandbox`, role `Owner`
4. Copy the full value when shown (only shown once)

### 3d. Switch your `.env.local` to sandbox mode

```dotenv
# Tell both server SDK and client embed to use sandbox
NEXT_PUBLIC_WHOP_ENVIRONMENT=sandbox

# Sandbox API key from step 3c
WHOP_API_KEY=<sandbox key>

# Sandbox plan IDs from step 3b
NEXT_PUBLIC_HEARTHSIDE_PLAN_ID=plan_xxxxxxx
NEXT_PUBLIC_HEARTH_DEEP_PLAN_ID=plan_xxxxxxx
# (annual plan IDs if you created them)
```

When `NEXT_PUBLIC_WHOP_ENVIRONMENT=sandbox`:
- The server SDK in `app/lib/whop-sdk.ts` auto-switches its base URL to `https://sandbox-api.whop.com/api/v1`
- The client embed in `CheckoutEmbed.tsx` points its iframe at sandbox.whop.com
- Test cards work; real cards get test-mode-declined

### 3e. Restart dev server

```bash
# Stop the running server (Ctrl+C), then:
npm run dev
```

### 3f. Test with a fake card

Visit http://localhost:3000/pricing → Begin with Hearthside → fill in:
- Email: anything
- Card: `4242 4242 4242 4242`
- Expiry: any future date (e.g. `12/30`)
- CVC: `123`
- ZIP: `10001`

Should succeed and redirect to `/welcome`.

### Switching back to production

Reverse step 3d — set `NEXT_PUBLIC_WHOP_ENVIRONMENT=production`, use your production API key, use the production plan IDs (defaults in `.env.example`).

## 4. Set up the webhook (optional for dev, required for prod)

Webhooks are how Whop tells your server "this customer paid." Without them, you still see payments in the dashboard, but your app code never runs business logic on them.

### Get a public URL for your localhost (dev)

Webhooks need a public URL. For local dev, use ngrok or similar:

```bash
# Install ngrok if you don't have it: brew install ngrok
ngrok http 3000
```

ngrok prints a public URL like `https://abc123.ngrok-free.app`. Use that for the webhook URL.

### Register the webhook in Whop

1. Go to https://whop.com/dashboard → **Webhooks** (left sidebar) → **Create webhook**
2. **URL**: `https://abc123.ngrok-free.app/api/webhooks/whop` (your ngrok URL + the route path)
3. **Events to subscribe to** (minimum):
   - `payment.succeeded`
   - `payment.failed`
   - `membership.activated`
   - `membership.deactivated`
   - `refund.created`
4. Click **Create**
5. On the webhook detail page, copy the **Signing secret** (`whsec_...`)
6. Paste into `.env.local` as `WHOP_WEBHOOK_SECRET`

### Verify

When Whop sends a webhook, you should see structured JSON log lines in your terminal like:

```json
{"level":"info","tag":"whop-webhook","event_id":"evt_xxx","event_type":"payment.succeeded","timestamp":"..."}
{"level":"info","tag":"whop-webhook","handler":"payment.succeeded","payment_id":"pay_xxx","amount":3900,"currency":"usd","user_email":"...","plan_id":"plan_xxx","metadata":{"plan_slug":"hearthside","source":"hearth-pricing"}}
```

If signature verification fails you'll see:

```
[whop-webhook] signature verification failed ...
```

Double-check that `WHOP_WEBHOOK_SECRET` matches the dashboard exactly.

## 5. Run the app

```bash
npm run dev
```

Open http://localhost:3000/pricing, click **Begin with Hearthside**. You should land on `/checkout/hearthside` with the Whop embedded checkout form.

## File map

| Path | What it does |
|---|---|
| `app/lib/checkout.ts` | Plan registry (slugs → plan IDs), env helpers, paths |
| `app/lib/whop-sdk.ts` | Server-only Whop SDK singleton |
| `app/checkout/[plan]/page.tsx` | Server component creating checkout session |
| `app/components/CheckoutEmbed.tsx` | Client wrapper for `WhopCheckoutEmbed` |
| `app/api/webhooks/whop/route.ts` | POST handler for Whop webhooks |
| `app/welcome/page.tsx` | Post-checkout landing |
| `app/pricing/page.tsx` | Buttons → `/checkout/[plan]` |

## Troubleshooting

### "WHOP_API_KEY is not set"
You haven't set `WHOP_API_KEY` in `.env.local`, or you started `next dev` before the file existed. Stop the server, fix the env, restart.

### "Webhook not configured" 500 from `/api/webhooks/whop`
You haven't set `WHOP_WEBHOOK_SECRET`. Set it (see step 4), restart the dev server.

### Embedded checkout iframe says "test card numbers not allowed"
You're in `production` mode. Either pay with a real card or switch to sandbox (step 3).

### Embedded checkout doesn't render
Check the browser console for errors. Common causes:
- `@whop/checkout` not installed (`npm install`)
- Strict CSP blocking the iframe — Hearth currently has no CSP so this should work
- Plan ID mismatch with environment (sandbox plan in production mode or vice versa)

### `400 bad_request: The redirect URL must be a valid URL, starting with https://`
You set `NEXT_PUBLIC_HEARTH_URL=http://localhost:3000` (correct for dev) but Whop's server-side `redirect_url` field requires https. **This is already handled in `app/checkout/[plan]/page.tsx`** — when the URL is http, we skip sending `redirect_url` and rely on the embed's client-side `returnUrl` prop. If you still see this error, double-check that `NEXT_PUBLIC_HEARTH_URL` doesn't have `https://` for localhost.
