# Testing

## Two ways to test payments end-to-end

| Mode | When to use | Card numbers | Real money? |
|---|---|---|---|
| **Sandbox** | Local dev, frequent iteration | `4242 4242 4242 4242` + others | No |
| **Production + self-refund** | Smoke-testing prod config, no sandbox set up | Your own real card | Yes (briefly) |

## Sandbox testing (recommended for dev)

Prereqs: complete sandbox setup in `setup.md` step 3.

### Test card numbers

Whop sandbox uses standard Stripe test cards (Whop uses Stripe under the hood):

| Card number | Result |
|---|---|
| `4242 4242 4242 4242` | Success |
| `4000 0000 0000 0002` | Generic decline |
| `4000 0000 0000 9995` | Insufficient funds |
| `4000 0025 0000 3155` | Requires 3D Secure authentication |
| `4000 0000 0000 0341` | Attaches but charge fails |

Any expiry date in the future works. Any 3-digit CVC works. Any ZIP/postal code works.

### Flow

1. Ensure `NEXT_PUBLIC_WHOP_ENVIRONMENT=sandbox` and plan IDs are sandbox plan IDs in `.env.local`
2. `npm run dev`
3. Visit http://localhost:3000/pricing
4. Click **Begin with Hearthside**
5. On the embedded checkout, enter:
   - Email: `you+sandbox@example.com` (anything works)
   - Card: `4242 4242 4242 4242`
   - Expiry: `12/30`, CVC: `123`, ZIP: `10001`
6. Submit
7. Browser redirects to `http://localhost:3000/welcome?status=success&...`
8. (If webhook is wired) Terminal shows structured payment.succeeded log line

## Production + self-refund testing

When sandbox isn't set up. This is real money, briefly.

### Flow

1. Ensure `NEXT_PUBLIC_WHOP_ENVIRONMENT=production` and plan IDs are real (default)
2. `npm run dev`
3. Visit http://localhost:3000/pricing
4. Click **Begin with Hearthside**
5. Enter your real email and real card
6. Pay $39 (or $99 for Hearth Deep)
7. Verify redirect to `/welcome`
8. Verify in https://whop.com/dashboard → **Payments** → your charge appears
9. **Refund yourself**: click the payment → **Refund** → confirm
10. Whop's fee is generally returned on quick refunds. Net cost ~$0.

### Why test cards don't work in production mode

Whop's hosted and embedded checkout in `production` mode explicitly block test card numbers. The decline reason returned is `test_mode_decline`:

> "This appears to be a test card number. Please use a real credit or debit card to complete your purchase."

This is because Whop is the Merchant of Record — real money moves through their bank accounts. They don't want test charges polluting real ledgers.

## What to check after each test

### Browser
- ✅ Embedded checkout rendered without console errors
- ✅ Redirect to `/welcome` happened
- ✅ Welcome page shows "Your Keeper is being matched"

### Server terminal (`npm run dev` output)
- ✅ Structured JSON log lines from `[whop-webhook]` for payment.succeeded and membership.activated
- ❌ No "signature verification failed" errors
- ❌ No "WHOP_API_KEY is not set" errors

### Whop dashboard
- ✅ Payment appears at https://whop.com/dashboard → Payments
- ✅ Membership appears at https://whop.com/dashboard → Members
- ✅ Webhook delivery shown as "succeeded" at Dashboard → Webhooks → click your webhook → Deliveries tab

## Common failure modes and fixes

### "WHOP_API_KEY is not set"
Restart the dev server after editing `.env.local`. Next.js loads env at boot.

### Checkout embed shows but submit does nothing
Likely a sandbox/production mismatch. Plan ID is for one environment but `NEXT_PUBLIC_WHOP_ENVIRONMENT` is the other. They must match.

### Webhook delivery fails on Whop dashboard
- Verify ngrok tunnel is still running
- Verify webhook URL in Whop matches your current ngrok URL (changes each session unless you have a paid ngrok plan)
- Verify `WHOP_WEBHOOK_SECRET` matches the dashboard signing secret exactly

### Welcome page says "Payment didn't go through" but Whop dashboard shows succeeded payment
Whop's redirect query param had `status=error` or similar. This can happen on legitimate 3DS challenges. Check the URL bar — full set of query params Whop sends are useful for debugging.

### Customer sees "Test mode decline" in production
They entered a test card number. Show them the pricing page again and ask for a real card.
