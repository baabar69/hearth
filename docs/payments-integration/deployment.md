# Deployment

Production checklist for shipping Hearth's payments to real customers.

## Before you accept your first paying customer

### 1. Rotate the API key exposed in chat

The `WHOP_API_KEY` value `apik_khye...` was pasted into a Claude chat transcript on 2026-05-12. Treat as compromised.

- Go to https://whop.com/dashboard/developer → **Company API Keys**
- Click the 3-dot menu next to that key → **Revoke**
- Click **Create** → generate a new key named `hearth-prod`
- Save the new value somewhere safe (password manager)
- Put it into your prod env (Vercel env vars, see step 4)

### 2. Add a payout method

You CAN take customer money before this, but you CAN'T withdraw it.

- Go to https://whop.com/dashboard/wallet
- Click **Withdraw** (will prompt for payout method since balance is $0)
- Add either:
  - **Bank (PKR)**: needs IBAN + bank name. Best for PSEB 0.25% tax route.
  - **Crypto**: USDT TRC-20 wallet address. Faster, simpler, but loses PSEB tax rate.

### 3. Enable 2FA on your Whop account

If not already done. See `setup.md` for steps. **Authenticator app, not SMS** (SIM swap risk in PK).

### 4. Deploy the app

Recommended: Vercel.

```bash
# From the repo root
npx vercel
```

Follow prompts. Once deployed, you'll have a URL like `https://hearth-xyz.vercel.app`. Set up a custom domain if you have one ready (`dearhearth.com` is mentioned in the existing Whop dashboard).

### 5. Set Vercel environment variables

Project Settings → Environment Variables. Add for **Production** scope:

```
WHOP_API_KEY              = <your fresh hearth-prod key>
WHOP_WEBHOOK_SECRET       = <signing secret from production webhook, set up in step 7>
NEXT_PUBLIC_WHOP_ENVIRONMENT = production
NEXT_PUBLIC_HEARTHSIDE_PLAN_ID = plan_qMkY2ON1bgnbp
NEXT_PUBLIC_HEARTH_DEEP_PLAN_ID = plan_yOUyMLKC42oZI
NEXT_PUBLIC_HEARTHSIDE_ANNUAL_PLAN_ID = plan_3jx4Ci4VilnbW
NEXT_PUBLIC_HEARTH_DEEP_ANNUAL_PLAN_ID = plan_NvT1QMwnWj2up
NEXT_PUBLIC_HEARTH_URL    = https://your-prod-domain.com
```

Redeploy after setting env vars (Vercel won't pick them up automatically).

### 6. Verify custom domain (if applicable)

If you're using `dearhearth.com` or similar:
- Add the domain in Vercel project settings
- Update DNS as instructed (typically CNAME or A record)
- Wait for DNS propagation (usually <1 hour)

### 7. Set up the production webhook

Different webhook for production (different URL, separate signing secret).

- Go to https://whop.com/dashboard → Webhooks → **Create webhook**
- URL: `https://your-prod-domain.com/api/webhooks/whop`
- Subscribe to: `payment.succeeded`, `payment.failed`, `membership.activated`, `membership.deactivated`, `refund.created`
- Save, copy signing secret → set as `WHOP_WEBHOOK_SECRET` in Vercel → redeploy

### 8. Smoke test in production

1. Visit `https://your-prod-domain.com/pricing`
2. Click **Begin with Hearthside**
3. Confirm `/checkout/hearthside` loads with embedded form
4. Pay with your real card ($39)
5. Confirm redirect to `/welcome`
6. Confirm webhook delivery succeeded in Whop dashboard → Webhooks → Deliveries
7. Confirm membership appears in Whop dashboard → Members
8. **Refund yourself** from the dashboard
9. Repeat for Hearth Deep ($99)

### 9. Tighten API key permissions

Once everything works, swap the **Owner** API key for a least-privilege key:

- New key with scopes: `payments:read`, `checkout_configurations:write`, `plans:read`, `webhooks:read`
- Verify the app still works
- Revoke the old Owner key

## Post-launch monitoring

Until you have a DB, your two observability tools are:

### Vercel logs

Live tail your function logs:

```bash
npx vercel logs --follow
```

Filter for payment events:

```bash
npx vercel logs --follow | grep "whop-webhook"
```

### Whop dashboard

- **Payments** — every charge
- **Members** — every active membership
- **Webhooks → Deliveries** — webhook delivery status per event
- **Wallet → Withdrawals** — your payouts

## Things that will eventually need building

These are deliberately not built yet:

- **Hearth user accounts** — currently customers exist only in Whop's user system, identified by email
- **Database for memberships** — Whop is source of truth; we read from there when needed
- **Member-gated routes** — `/dashboard`, `/long-talk`, etc. — need auth + DB first
- **Functional intake form** — current `#cta` form on homepage doesn't save anywhere
- **Annual pricing toggle UI** — plan IDs exist (`HEARTHSIDE_ANNUAL`, `HEARTH_DEEP_ANNUAL`) but no toggle on `/pricing`
- **Email automation** — Whop sends transactional emails; if Hearth wants its own welcome series, integrate Resend/Loops

When you build any of these, the `metadata` field on the checkout configuration (currently `{ plan_slug, source }`) is where you'd add `hearth_user_id` to link Whop payments back to Hearth users.

## Things that should NEVER change without thought

- The plan IDs in env vars — changing them breaks existing memberships
- The webhook signing secret in env vars — must match the dashboard exactly
- The `redirect_url` format — if you change the welcome URL, existing in-flight customers might land on a 404
