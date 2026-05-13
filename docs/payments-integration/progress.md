# Progress Log

Chronological record of the Whop payments integration. Newest entries at the top.

## 2026-05-13 — Positioning rebalance (diaspora is *included*, not exclusive)

Refinement on top of today's earlier broadening pass. The principle: "diaspora can still be part of us, but not exclusively for diaspora." Concrete restores:

- **Intake language options** (`app/intake/page.tsx`): added Urdu, Bengali, Tamil, Punjabi back **alongside** Spanish, Mandarin, French, Arabic, Hindi, Portuguese, German, Russian. So a diaspora user can self-identify without the platform framing itself as diaspora-exclusive.
- **Keeper bios** (`app/keepers/[slug]/page.tsx` and `app/keepers/page.tsx`): restored origin cities (e.g. `Karachi → Jersey City`, `Lahore → Houston`, `Kolkata → Toronto`, `Chennai → Toronto`, `Cairo → Chicago`) and per-Keeper languages (Bengali/Hindi, Urdu/Punjabi, Urdu, Tamil/Hindi, Arabic). These are **personal context** about individuals, not platform-wide claims of cultural fluency.
- Platform-level positioning stays universal — the homepage hero, FAQ, pricing copy, About, How-it-works, etc. still read "for anyone facing X" without ranking diaspora above any other audience.
- Embers essays were never removed (they were preserved verbatim during the broadening pass) — they're first-person personal stories with named authors, and now sit naturally alongside universal copy.

Typecheck + build clean.

## 2026-05-13 — Positioning broadened (universal peer support)

Hearth's positioning shifted today from "peer support for the South Asian diaspora, with Keepers culturally fluent in Bengali / Urdu / Tamil / Punjabi" to "peer support for anyone facing grief, family pressure, identity questions, transitions, or loneliness — Keepers are trained peer companions hand-matched for fit." No code changes from this — the intake form's `preferredLanguage` and `faithTradition` fields still exist and still feed the human matcher, they're just no longer framed as "diaspora-specific cultural fluency." Docs in `docs/business.md`, `docs/prd.md`, `docs/landing-page-prd.md`, `docs/claude-design-prompt.md` were rewritten to reflect this. Historical strategy files in `docs/idea-validator/`, `docs/marketing/`, and prior entries in this log got header notes rather than rewrites — they're kept as historical context. No identifiers, plan IDs, env vars, or technical decisions changed.

## 2026-05-13 — Intake form made functional + BetterHelp-style fields added

The pre-payment intake form (`/intake/page.tsx` and the homepage `#cta` short form) was UI-only before today — `setSubmitted(true)` did nothing. Now it actually saves leads.

**Added two BetterHelp-inspired fields** that map directly to Hearth's cultural-fluency positioning:
- **Preferred language** (Step 5) — English, Urdu, Bengali, Tamil, Punjabi, Hindi, Gujarati, Sinhala, Arabic, Other. Critical for matching Keepers with diaspora customers.
- **Faith tradition** (Step 4, conditional on spirituality answer) — Muslim, Hindu, Sikh, Buddhist, Christian, Jewish, etc. Only shown when the user already said spirituality matters to them.

**Backend:**
- `POST /api/intake/route.ts` — validates submission, builds HTML email, sends via Resend to founder + acknowledgement to applicant
- `app/lib/intake-email.ts` — server-only HTML/text email templates with safety-flag banner for `safetyCheck === "yes"` submissions
- Graceful degradation: without `RESEND_API_KEY` set, submissions still succeed and log to console (so dev works without Resend setup)

**Both intake forms now submit:**
- Full form at `/intake` (6-step, ~25 fields) → POST with `form: "full"`
- Short form on homepage `#cta` section (name + email + topics) → POST with `form: "short"`
- Both route through the same endpoint; email subject + content differ based on form type

**Safety**: when `safetyCheck === "yes"`, the form shows crisis resources inline (988, Samaritans, Crisis Text Line) AND the founder's notification email includes a prominent `⚠ Safety flag` banner AND a separate structured `intake-safety-flag` log line is emitted.

**Resend chosen over Supabase/Tally**: free tier is 100 emails/day, no DNS setup needed initially (uses `onboarding@resend.dev`), and the founder gets pinged on their phone instead of having to check a dashboard.

New file: `docs/payments-integration/intake.md` documents the full intake architecture, when to use which form, what fields are collected, how to respond when a lead comes in.

## 2026-05-13 — Welcome page polish

`/welcome` now fetches the payment from Whop using `payment_id` from URL params (server-side, via `whopSdk.payments.retrieve`). When successful, the page shows:
- Plan name (Hearthside / Hearth Deep) from `payment.product.title`
- Amount paid (formatted with `Intl.NumberFormat`)
- Next renewal date (from `membership.renewal_period_end` — separate fetch since the nested `Payment.Membership` only has `id` + `status`)
- Customer email
- Receipt/payment ID for reference
- "Manage subscription" link to `whop.com/@me/settings/memberships`

Graceful fallback if the SDK fetch fails (network, invalid ID, etc.) — page still renders generic success state. Error state preserved for `?status=error`.

## 2026-05-13 — Webhook secret base64 encoding fix

Whop's webhooks follow the [Standard Webhooks](https://github.com/standard-webhooks/standard-webhooks) spec, where the signing key passed to the verifier must be base64-encoded. The Whop SDK docs example does `btoa(process.env.WHOP_WEBHOOK_SECRET)` for this reason.

My initial `app/lib/whop-sdk.ts` exported the env var raw, which would have caused signature verification to silently fail on the first production webhook delivery. Fixed by encoding with `Buffer.from(...).toString("base64")` before exporting. Caught before any prod webhook fired.

## 2026-05-13 — Sandbox products created + script

Wrote `scripts/setup-sandbox.ts` — a one-off script that takes a sandbox API key from `.env.local` and creates both products (Hearthside, Hearth Deep) with monthly + annual plans in the sandbox account. Outputs the plan IDs at the end.

The script auto-discovers the company ID from `WHOP_SANDBOX_COMPANY_ID` env var (the `/me` and `/companies` endpoints don't work for company API keys — they require user OAuth tokens).

**Sandbox identifiers (created 2026-05-13):**
- Company: `biz_5wZF4zQUroPzc0`
- Hearthside product: `prod_obhZJtEs7EcfX`
- Hearth Deep product: `prod_HxkgS5zEE6qXy`
- Hearthside Monthly plan: `plan_2xd7VlY4cGVzs`
- Hearthside Annual plan: `plan_FtYKkhs2mx2z4`
- Hearth Deep Monthly plan: `plan_ZN1niHICOXifE`
- Hearth Deep Annual plan: `plan_khZyg0TxLAyXz`

`.env.local` updated to sandbox mode. Need to restart dev server to pick up new env.

## 2026-05-13 — Sandbox routing automated

Whop's `@whop/sdk` defaults to `https://api.whop.com/api/v1`. For sandbox, server calls must go to `https://sandbox-api.whop.com/api/v1`. The SDK supports a `baseURL` constructor option (or `WHOP_BASE_URL` env var).

**Implementation:** `app/lib/whop-sdk.ts` now derives `baseURL` from `NEXT_PUBLIC_WHOP_ENVIRONMENT`. Single env var (`NEXT_PUBLIC_WHOP_ENVIRONMENT=sandbox`) flips both the server SDK base URL AND the client embed iframe URL. No second env var needed.

`docs/payments-integration/setup.md` section 3 now has the verified sandbox sign-up URL (`https://sandbox.whop.com`), API key URL (`https://sandbox.whop.com/dashboard/developer`), and the step-by-step to recreate Hearthside / Hearth Deep plans in sandbox.

## 2026-05-13 — Hotfix: redirect_url must be https

Whop's `checkoutConfigurations.create` rejects `redirect_url` values that don't start with `https://`. Local dev runs on `http://localhost:3000` so the initial implementation threw `400 bad_request` on first checkout creation.

**Fix:** in `app/checkout/[plan]/page.tsx`, only pass `redirect_url` to the SDK when it starts with `https://`. For local http dev, omit the server-side field entirely — the embed's client-side `returnUrl` prop (which accepts http) handles the post-checkout redirect.

In production, `NEXT_PUBLIC_HEARTH_URL=https://your-domain.com` triggers the server-side redirect_url path normally.

## 2026-05-13 — Embedded checkout shipped (Path B)

All phases complete. Embedded checkout is live on `/checkout/[plan]` for both products. Customer flow now stays entirely on hearth.com.

### Implementation phases — all complete

- [x] Phase 0: scaffold `docs/payments-integration/` folder
- [x] Phase 0: read Next.js 16 modified docs for route handlers (key change: `params`/`searchParams` are Promises in v16)
- [x] Phase 1: install `@whop/sdk`, `@whop/checkout`, `server-only`
- [x] Phase 2: expand env config (`WHOP_API_KEY`, `WHOP_WEBHOOK_SECRET`, `NEXT_PUBLIC_WHOP_ENVIRONMENT`, per-plan IDs, `NEXT_PUBLIC_HEARTH_URL`)
- [x] Phase 3: built `app/lib/whop-sdk.ts` (server-only guard + clear error if env missing)
- [x] Phase 4: built `/checkout/[plan]` dynamic route (server-side `checkoutConfigurations.create` with `metadata` + `redirect_url`, validates slug, `force-dynamic`)
- [x] Phase 5: built `CheckoutEmbed` client wrapper (sandbox/production env switching, orange accent matching Hearth's ember palette, loading fallback)
- [x] Phase 6: built `/api/webhooks/whop` route handler (signature-verified via `whopsdk.webhooks.unwrap`, handles 5 event types, structured JSON logging, returns 400 on bad sig and 200 fast on success)
- [x] Phase 7: rewired all 4 tier-specific buttons in `/pricing` and homepage `/` to `<Link>` to `/checkout/[plan]`
- [x] Phase 8: verified `/welcome` handles status query param (no change needed — already works for embedded redirect flow)
- [x] Phase 9: wrote `setup.md`, `testing.md`, `deployment.md`
- [x] Phase 10: verified — `npx tsc --noEmit` passes ✓, `npx eslint` passes ✓ on new files, `npx next build` compiles cleanly ✓, `/checkout/[plan]` and `/api/webhooks/whop` both build as dynamic routes
- [x] Phase 11: updated memory + this progress.md

### Files created

| Path | Purpose |
|---|---|
| `app/lib/checkout.ts` | Plan slug registry, env helpers (re-written from Path A version) |
| `app/lib/whop-sdk.ts` | Server-only Whop SDK singleton |
| `app/components/CheckoutEmbed.tsx` | Client wrapper for `WhopCheckoutEmbed` |
| `app/checkout/[plan]/page.tsx` | Server component creating session, renders embed |
| `app/api/webhooks/whop/route.ts` | POST handler — signature-verified, idempotent-safe |
| `docs/payments-integration/README.md` | Folder entry point |
| `docs/payments-integration/architecture.md` | Design decisions, request flow, file map |
| `docs/payments-integration/setup.md` | Dev environment setup steps |
| `docs/payments-integration/testing.md` | Sandbox + production test flows |
| `docs/payments-integration/deployment.md` | Production checklist |
| `docs/payments-integration/progress.md` | This file |

### Files modified

- `app/pricing/page.tsx` — both "Begin with X" buttons now `<Link>` to `/checkout/[plan]`
- `app/page.tsx` — same change on homepage pricing section
- `app/welcome/page.tsx` — already existed; no changes needed
- `.env.example` — expanded with all Whop env vars
- `.env.local` — same (gitignored)
- `.gitignore` — `!.env.example` exception added
- `package.json` — added `@whop/sdk`, `@whop/checkout`, `server-only` deps

## 2026-05-12 — Path A shipped (hosted checkout, now superseded)

Wired tier-specific "Begin with Hearthside" and "Begin with Hearth Deep" buttons (on `/pricing` and homepage pricing section) to direct Whop hosted checkout URLs. This was an interim step. Replaced by Path B above the same day after user requested Stripe-like embedded experience with sandbox/test cards.

## 2026-05-12 — Whop account setup (pre-code)

- KYC approved (individual seller, no KYB needed)
- Two products created: Hearthside, Hearth Deep
- Monthly + Annual plans auto-attached to each
- Whop MCPs added at user scope (`whop-docs`, `whop-api`)
- API key generated then exposed in chat (needs rotation — see deployment.md step 1)
- Payout method NOT yet added (action item — gates real money withdrawal)
- 2FA enabled in Whop account

## Pending action items (on user)

| # | Action | Blocks |
|---|---|---|
| 1 | Rotate the API key exposed in chat 2026-05-12 | Going live |
| 2 | Add a payout method (bank or crypto) | Withdrawing money |
| 3 | (Optional) Create sandbox plans for test-card dev | Dev iteration without real cards |
| 4 | Register production webhook URL at Whop dashboard | Webhook events in prod |
| 5 | Deploy to Vercel and set production env vars | Going live |
| 6 | Smoke test in prod with real card + immediate refund | Confidence to share pricing page |

## Open decisions / deferred work

| Topic | Decision needed | Notes |
|---|---|---|
| Generic "Pull up a chair" CTAs | Direct checkout, or keep pointing to intake form? | Path B only rewired tier-specific buttons — generic CTAs still go to `/#cta` |
| Intake form backend | Build it or remove it? | Currently fake — `setSubmitted(true)` does nothing |
| Membership DB / auth | When to add? | Not blocking until we gate member content |
| Annual pricing toggle UI | Add to `/pricing`? | Plan IDs exist in `lib/checkout.ts`; UI doesn't expose them yet |
| Payout method | Bank (PKR + PSEB 0.25%) or crypto (USDT)? | Tax tradeoff — talk to a PK CA |
