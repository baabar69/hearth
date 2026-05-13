# Architecture

## Request flow (embedded checkout)

```
1. Customer on /pricing clicks "Begin with Hearthside"
   └─> Next.js Link to /checkout/hearthside

2. /checkout/hearthside (server component)
   ├─> Server reads PLAN_IDS["hearthside"] → plan_qMkY2ON1bgnbp
   ├─> Calls whopSdk.checkoutConfigurations.create({ plan_id, metadata })
   │   └─> Whop returns { id: "ch_xxx", plan: { id: "plan_xxx" } }
   └─> Renders <CheckoutEmbed sessionId="ch_xxx" planId="plan_xxx" />

3. <CheckoutEmbed> client component
   ├─> Reads NEXT_PUBLIC_WHOP_ENVIRONMENT ("sandbox" | "production")
   ├─> Renders <WhopCheckoutEmbed sessionId={...} planId={...} environment={...} returnUrl="/welcome" />
   └─> WhopCheckoutEmbed mounts an iframe pointing to checkout.whop.com

4. Customer fills card details inside the iframe
   ├─> Whop processes payment server-side
   └─> Whop sends webhook to /api/webhooks/whop

5. /api/webhooks/whop receives POST
   ├─> Verifies signature via whopSdk.webhooks.unwrap()
   ├─> Handles payment.succeeded → logs payment + member info
   ├─> (Future) writes membership record to DB
   └─> Returns 200 to Whop

6. Whop iframe redirects browser to returnUrl (/welcome?status=success&...)

7. /welcome page reads ?status query param, shows confirmation
```

## File map

```
app/
├── lib/
│   ├── checkout.ts              # Plan ID registry (server + client safe)
│   └── whop-sdk.ts              # Server-only SDK singleton
├── api/
│   └── webhooks/
│       └── whop/
│           └── route.ts         # POST webhook handler
├── checkout/
│   └── [plan]/
│       └── page.tsx             # Server component creating session
├── components/
│   └── CheckoutEmbed.tsx        # Client wrapper for WhopCheckoutEmbed
├── pricing/
│   └── page.tsx                 # Buttons → /checkout/[plan]
├── welcome/
│   └── page.tsx                 # Post-checkout landing
└── page.tsx                     # Homepage with pricing section
```

## Why these choices

### Embedded checkout over hosted

| | Hosted | Embedded |
|---|---|---|
| Customer leaves your domain | Yes | No |
| Test cards (4242…) | ❌ Blocked | ✅ Works in sandbox |
| Setup complexity | Trivial | Moderate |
| Path to membership system | Hard | Natural via `metadata` |

Embedded gives us a dev loop with sandbox + test cards (Stripe-style), and the `metadata` field on the checkout configuration flows through to webhooks — that's how we'll link a Whop payment back to a Hearth user account once we build one.

### Server component for /checkout/[plan]

The checkout configuration MUST be created on the server (uses `WHOP_API_KEY` which is server-only). Two options:

1. **Server component creates session at render time** ← chosen
2. Client component calls a POST `/api/checkout` route to get a session

Option 1 is one fewer round trip, simpler code, and lets the page work even with JavaScript disabled until the iframe loads.

### Webhook handler in App Router route handler

Standard pattern. Reads raw body via `request.text()`, passes to `whopSdk.webhooks.unwrap()` for signature verification. Returns 200 immediately and processes asynchronously via `waitUntil()` for events that need follow-up work.

### Server-only SDK isolation

`app/lib/whop-sdk.ts` imports `server-only` at the top. This is a Next.js convention that throws a build error if the module is ever imported into a client component. Prevents `WHOP_API_KEY` from leaking into the client bundle.

### Plan ID registry as a typed object

`app/lib/checkout.ts` exports a `PLAN_IDS` object keyed by slug. This:
- Makes `/checkout/[plan]` route validation trivial (`if (!(plan in PLAN_IDS)) notFound()`)
- Provides one place to update if plan IDs change
- Reads from env vars with hardcoded fallbacks — same code works in dev (sandbox plans) and prod (real plans) via env override

### No DB yet

Whop dashboard is the source of truth for who paid. Webhook handler logs events but doesn't persist. When we add membership-gated content, we'll add a DB at that point. Keeping the webhook handler idempotent now makes that future addition easy.

## Sandbox vs production

The `NEXT_PUBLIC_WHOP_ENVIRONMENT` env var ("sandbox" or "production") is read by `CheckoutEmbed` and passed to `<WhopCheckoutEmbed environment={...} />`.

- **Local dev**: `.env.local` sets `NEXT_PUBLIC_WHOP_ENVIRONMENT=sandbox` and points plan IDs at sandbox plans
- **Production (Vercel)**: env vars set `NEXT_PUBLIC_WHOP_ENVIRONMENT=production` and point at real plans

The same code runs in both — no branching, no hard-coded modes.

## Decisions deliberately deferred

- **Auth / user accounts**: not needed until we gate content. Whop captures the customer's email at checkout, which is enough for now.
- **Database**: same reasoning — Whop is the source of truth until we gate content.
- **Multi-currency display**: Whop's adaptive pricing handles this; opted-out for now since prices are already in USD globally.
- **Discount codes**: Whop supports them; not enabled yet, can be added via the dashboard without code changes.
