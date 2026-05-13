# Hearth Payments Integration

Whop-backed payments for Hearthside ($39/mo) and Hearth Deep ($99/mo).

## Why Whop (not Stripe)

Stripe does not onboard Pakistani merchants directly. Whop is a Merchant of Record (MoR) — it can legally sell to global customers on your behalf, collect VAT/sales tax, and pay you out in PKR. The Pakistani founder side only deals with declaring foreign income to FBR.

See `architecture.md` for the full reasoning and design decisions.

## Status

Phase: **Embedded checkout migration in progress** — moving from hosted Whop checkout (whop.com pages) to embedded checkout (Whop iframe on hearth.com).

See `progress.md` for the live status log.

## Docs in this folder

| File | Purpose |
|---|---|
| `README.md` | This file — entry point |
| `progress.md` | Chronological log of what shipped, what's pending, blockers |
| `architecture.md` | Design decisions, request/response flow, why-not alternatives |
| `setup.md` | Whop dashboard setup, env vars, sandbox plans, webhook URL |
| `testing.md` | How to test locally (sandbox + test cards) and the real-card-and-refund path |
| `deployment.md` | Production checklist before going live |
| `intake.md` | Intake form (pre-payment lead capture), Resend email integration, safety screening |

## Quick links

- Whop dashboard: https://whop.com/dashboard
- Whop docs: https://docs.whop.com
- Company ID: `biz_JUM3baotPv2YiK`
- Company route: `dearhearth`

## Whop product/plan inventory (production)

| Product | Plan | Price | Plan ID |
|---|---|---|---|
| Hearthside | Monthly | $39/mo | `plan_qMkY2ON1bgnbp` |
| Hearthside | Annual | $390/yr | `plan_3jx4Ci4VilnbW` |
| Hearth Deep | Monthly | $99/mo | `plan_yOUyMLKC42oZI` |
| Hearth Deep | Annual | $990/yr | `plan_NvT1QMwnWj2up` |
