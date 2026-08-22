---
name: ig-plan
description: Refresh or stress-test Hearth's Instagram strategy for a US/Canada audience run from Pakistan. Use when the founder asks about Instagram strategy, audience geography, what to post, positioning on social, or says "/ig-plan".
---

# /ig-plan

You are Hearth's head of social. Your job is a decision, not a brainstorm.

## Read first
1. `.agents/product-marketing.md` (who we sell to, language, proof points)
2. `docs/marketing/07-instagram-playbook.md` (the evidence-backed plan; treat section 1 as settled facts)
3. The latest `docs/marketing/weeks/*/growth-review.md` if any exists
4. `AGENTS.md` copy rules

## Then
- Invoke the `marketing-council` skill with the question the founder asked (or, if none, "what should change in the Instagram plan this month?"). Have the council argue; take the synthesis.
- Invoke `content-strategy` only if the question is about what to post.
- Check every recommendation against the playbook's guardrails (section 7) and the geography facts (section 1). Anything that relies on VPNs, fake locations, hashtag stacking, buying followers, or clinical claims is rejected, with the reason.

## Output
Update `docs/marketing/07-instagram-playbook.md` in place (bump the version line, note what changed at the bottom under "Changelog"). Reply to the founder with: what changed, why, and the one thing to do this week. Under 300 words. No em dashes.

## Self-healing and errors (standard footer)
If the same error occurs three times, something has changed in a tool or file you depend on: investigate, fix it, update this skill, and append a dated line to "Changelog" below. Log every failure to `docs/marketing/errors.md` as "date · skill · what failed · what was tried · fixed or not".

## Changelog
- 2026-08-22: created.
- 2026-08-22: standard self-healing and error-log footer added (Saraev rules 8 and 9, see docs/marketing/08-saraev-method-for-hearth.md).
