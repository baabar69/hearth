---
name: followups
description: Produce today's follow-up drafts for Hearth (intake started but not finished, intake done but no membership yet, first Sit booked) from a template pool and a cadence, with opt-out and escalation rules. Drafts for human send. Use every morning or when the founder says "/followups".
---

# /followups

Saraev's schedule-driven follow-up loop (5:15:19 to 5:31:55): query the pipeline, read the history, pick a template that fits the day, fill the merge fields, never repeat, stop on opt-out. Adapted: a person sends, and anything emotional escalates to a person.

## Inputs
- `docs/marketing/pipeline.csv` (create if missing; header: firstName, email, stage, lastContact, daysSinceLastContact, notes, optOut). Stages: intake_started, intake_done_unpaid, paid_awaiting_match, first_sit_booked, member. (Funnel since KAN-72: intake, then membership, then a hand match within 72 hours of both.)
- Template pool and cadence: `docs/marketing/followups/templates.md`.
- Reply history for each person if the founder pastes it or exports the inbox. If there is no history, say so in the draft note.

## Steps
1. Read the pipeline. Skip anyone with optOut true, anyone contacted today, and anyone whose last message contained a crisis word (flag those for a personal reply instead).
2. For each remaining person, match `daysSinceLastContact` to the cadence for their stage. If today is not a cadence day, skip.
3. Pick a template from the pool for that stage that was not used for this person last time. Fill `{firstName}` and the one fuzzy variable from their notes (5 to 10 words, their own words). No em dashes, no exclamation marks.
4. Write `docs/marketing/followups/drafts/<date>.md`: one block per person with subject, body, which template, and what to do if they reply. Update `pipeline.csv` only after the founder confirms sends.

## Guardrails
- Never send. Never more than one touch per person per day. Price appears only if the person asks, except in the intake_done_unpaid pool where the membership step is the point; state it once and plainly. Never use urgency or scarcity.
- A reply that says stop, or anything that reads as distress, ends the sequence and goes to a person.

## Self-healing and errors (standard footer)
If the same error occurs three times, something has changed in a tool or file you depend on: investigate, fix it, update this skill, and append a dated line to "Changelog" below. Log every failure to `docs/marketing/errors.md` as "date · skill · what failed · what was tried · fixed or not".

## Changelog
- 2026-08-22: created.
- 2026-08-22: stages updated for the intake-then-membership funnel (KAN-72).
