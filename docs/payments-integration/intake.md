# Intake

The intake form is Hearth's lead-capture flow. It runs **before** payment in the customer journey:

```
Marketing pages → intake form → human pairs Keeper (off-platform) → Hearth team emails customer with checkout link → /checkout/[plan] → Whop → /welcome
```

This is the **intake-first** flow Hearth was originally designed around. Customers express interest, share what they're carrying, and only pay after a human matches them with a Keeper. That delay is intentional — it's the value prop.

## Two forms, one endpoint

| Form | Where | Steps | Use case |
|---|---|---|---|
| **Full intake** | `/intake` | 6 steps, ~25 questions | Deliberate lead — committed, wants thorough match |
| **Short intake** | Homepage `#cta` section | 2 steps (name+email, topics) | Casual lead — caught their attention on landing |

Both POST to `/api/intake` with a `form: "full" | "short"` discriminator. The notification email subject + content adapts based on which form.

## Fields collected (full intake)

**Step 1 — About you:** firstName, email, ageRange, country
**Step 2 — Topics & context:** topics[], optional openContext
**Step 3 — Clinical check-in:** wellbeing 1-5, sleep, sadness, anxiety, **safetyCheck**
**Step 4 — Background:** priorTherapy, relationshipStatus, spirituality, faithTradition (conditional on spirituality), employment
**Step 5 — Keeper preferences:** keeperGender, preferredLanguage, connectionMode (video/audio), availability[], openNote
**Step 6 — Consent:** referralSource, agreePeerSupport, agreeAge

### Safety screening

When `safetyCheck === "yes"`:
- The intake form shows crisis resources inline (988 in US, 116 123 in UK, Crisis Text Line, etc.) **before** submission
- Submission still proceeds — Keeper is notified the applicant may need extra care
- The notification email to the founder includes a prominent `⚠ Safety flag` banner
- A separate `intake-safety-flag` log line is written (easy to grep in Netlify logs)

The intake explicitly states "Hearth is not a crisis service" — see step 3 copy.

## Architecture

```
/intake/page.tsx                  Client component, 6-step wizard
/api/intake/route.ts              POST handler, validates + sends emails
/lib/intake-email.ts              Server-only email templates (HTML + text)
```

When a submission comes in:

1. Server validates required fields (firstName, valid email, agreements)
2. Strips/clamps long text fields (openContext, openNote → 2000 chars)
3. Logs structured JSON event (always — works without email config)
4. If `RESEND_API_KEY` is set:
   - Sends formatted notification email to `INTAKE_NOTIFY_EMAIL` (the founder)
   - Sends acknowledgement email to the applicant
5. Returns `{ ok: true, sent: true/false }`

## Email provider

Using **Resend** because:
- Free tier: 100 emails/day (more than enough early)
- Works without DNS setup via `onboarding@resend.dev` sender (rate-limited, but fine for dev)
- API is one-line simple, code identical between dev and prod
- Same SDK pattern as Whop — `new Resend(apiKey)`, no surprises

When you're ready to send from `intake@dearhearth.com`, verify the domain at https://resend.com/domains (adds 3 DNS records) and change `INTAKE_FROM_EMAIL`.

## Env vars

| Variable | Required? | Purpose |
|---|---|---|
| `RESEND_API_KEY` | Optional in dev, required for emails | https://resend.com/api-keys |
| `INTAKE_NOTIFY_EMAIL` | Optional in dev, required for emails | Founder inbox where leads go |
| `INTAKE_FROM_EMAIL` | Optional (defaults to `onboarding@resend.dev`) | Sender address |

**Graceful degradation:** without `RESEND_API_KEY`, the form still works — submissions are logged to the server console (Netlify function logs in prod, terminal in dev), and the user gets a successful confirmation. This way:
- Dev works without any Resend setup
- If Resend is down or misconfigured in prod, leads aren't lost — they're in your function logs

## Why no DB

Same reasoning as the payments side — Whop is source of truth for billing, founder's email is source of truth for leads until volume warrants it. When you have >50 leads/month or need to track conversion rates, add a DB and write submissions there too.

## What to do when a lead comes in

1. You receive an email from `onboarding@resend.dev` with subject `New Hearth intake — <Name>`
2. Read their answers, paying attention to:
   - **Safety flag** (red banner at top if applicable — handle first)
   - Language preference (which Keeper speaks their language?)
   - Topics + open context (what's the weight?)
   - Faith tradition (cultural matching)
3. Match them with a Keeper by hand
4. Reply to the email (replyTo is set to the applicant's email — your reply goes to them directly)
5. Send them a payment link manually — for now, just paste the appropriate URL:
   - Hearthside: `https://dearhearth.com/checkout/hearthside`
   - Hearth Deep: `https://dearhearth.com/checkout/hearth-deep`

This human-in-the-loop step is intentional. You're not optimizing it away.

## Future enhancements (deferred)

- **Auto-issue checkout links** with the applicant's email pre-filled (`?email=...` on `/checkout/[plan]`)
- **Save submissions to Supabase** when the email-only flow gets unwieldy
- **Slack/Discord notification** in addition to email — useful for team handoff
- **Auto-decline under-18s** with the crisis resources (currently they're blocked from submitting but get no follow-up)
