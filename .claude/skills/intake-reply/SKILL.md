---
name: intake-reply
description: Draft Hearth's personalised acknowledgement email to someone who just completed the 12-minute intake, using fuzzy variables from their answers. Drafts only; a person sends. Use when the founder pastes an intake submission or says "/intake-reply".
---

# /intake-reply

Saraev's speed-to-lead and fuzzy-variable patterns (4:11:35, 3:19:59), adapted for a sensitive service: fast, personal, human-sent. Never auto-send, never SMS.

## Inputs
- One or more intake submissions, pasted by the founder or read from the intake inbox export (fields: first name, email, topics, open context, how they like to talk, availability, anything else). The static confirmation already went out at submit time from `app/lib/intake-email.ts`; this is the personal follow-up within the hour. Funnel order (KAN-72): intake, then membership, then matching within 72 hours of both. If the person has already paid (the founder is notified on payment), skip the membership line and say a person is matching them now.
- `.agents/product-marketing.md` for voice and the first-Sit rule. `AGENTS.md` copy rules.

## Template (human-written; only the curly braces are AI-written, 5 to 12 words each)

Subject: {firstName}, we read it

Hi {firstName},

Thank you for writing that down. I read it myself, and I heard {paraphrasedWeightInTheirWords}.

One step left: choose a membership at dearhearth.com/pricing. Within 72 hours of that, a person at Hearth matches you by hand with a Keeper who {whyThisMatchWillFit}, and your Keeper writes to you first.

If anything in what you wrote has changed, or you are not sure Hearth is the right door, reply to this email. It comes to a person.

{founderFirstName}
Hearth

## Data minimisation
Work only from the fields needed for the paraphrase (first name, topics, the open-context sentence). Do not paste full intake records into this skill, do not store them in the repo, and delete the draft file once the email is sent. If the person stopped the intake partway, include the resume link to the step they reached instead of the membership paragraph.

## Rules for the fuzzy variables
- Use their own words where possible; never diagnose, label, or interpret ("it sounds like anxiety" is banned).
- No advice. No "you should". No exclamation marks. No em dashes.
- If the open context mentions self-harm, suicide, or immediate danger, do not draft this email. Output "ESCALATE" with the crisis-line block from `app/crisis/page.tsx` and tell the founder to reply personally now.
- If the submission names a specific Keeper, do not promise them; members are matched, not chosen.

## Output
`docs/marketing/inbox/replies/<date>-<firstName>.md` with the subject, body, and a one-line note on what was paraphrased. Reply with the draft inline so the founder can paste it into Brevo or Gmail.

## Self-healing and errors (standard footer)
If the same error occurs three times, something has changed in a tool or file you depend on: investigate, fix it, update this skill, and append a dated line to "Changelog" below. Log every failure to `docs/marketing/errors.md` as "date · skill · what failed · what was tried · fixed or not".

## Changelog
- 2026-08-22: created.
- 2026-08-22: template updated for the intake-then-membership funnel (KAN-72).
