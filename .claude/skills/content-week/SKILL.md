---
name: content-week
description: Produce next week's Instagram batch for Hearth (4 Reel scripts, 1 carousel, captions, trial hooks, ET schedule) as a draft for approval. Use weekly, when the founder says "/content-week", "this week's content", or "what do we post".
---

# /content-week

Loop body for `docs/marketing/loops/weekly-content-loop.md`. Drafts only. Never publishes.

## Inputs
- `.agents/product-marketing.md`, `docs/marketing/07-instagram-playbook.md` (lanes, rhythm, closers, guardrails), `docs/marketing/03-platform-strategy.md` section 1 (hooks, formats), `docs/marketing/remotion-prompts/` (production templates), `AGENTS.md`.
- Last week's `docs/marketing/weeks/<prev>/growth-review.md` if it exists: double down on formats it marks "keep", drop ones marked "cut".
- Target week = next ISO week (e.g. `2026-W35`). If `docs/marketing/weeks/<week>/batch.md` already exists with `status: draft` or `approved`, stop and say so.

## Steps
1. If `docs/marketing/weeks/<week>/hooks/*.selected.json` exists (from /hook-batch), use those hooks as the starting lines for the pieces. Otherwise pick one theme for the week from the pillars: family pressure, grief that has no name, caregiving years, being the strong one, between two cultures, loneliness of being known in pieces, new parenthood. Rotate; do not repeat last week's.
2. Plan the five pieces against the rhythm: Sun letter-to Reel, Tue slow b-roll essay Reel, Wed carousel, Thu viral-format Reel, Fri "a Friday note" Reel. Assign a closer to each (rotate the three in the playbook).
3. Dispatch the `hearth-content-writer` agent once per piece, in parallel, with the theme, lane, length, closer, and the voice rules. Each returns: hook (first line on screen), full script or slide text, on-screen text per beat with timing, voiceover (if any), caption (first line carries the keyword, 5 hashtags max from the playbook set), two alternative hooks for the trial reel, a cover-frame line.
4. Assemble `docs/marketing/weeks/<week>/batch.md`:
   - `status: draft`, theme, the ET schedule table
   - the five pieces in posting order
   - a "Stories" block: one poll, one question sticker, one repost note per day
   - an "Engagement" block: 10 accounts from `docs/marketing/weeks/*/collab-targets.md` to comment on this week, with one comment angle each
   - a "Remotion" block: which prompt file in `remotion-prompts/` each Reel uses, plus any new props needed
5. Self-check before writing: `grep -nP "\x{2014}|&m.ash;"` on the file returns nothing (the pattern matches the em dash character and its HTML entity without containing either); none of: suicide, self-harm, kill myself, depression, disorder, trauma (as a hook), heal, treat, cure; no member numbers; every piece ends on a closer; every Reel has two trial hooks. Fix and re-check; if it fails twice, stop and report.

## Output
The file, plus a reply under 200 words: theme, the five hooks in one line each, and what needs the founder's approval. No em dashes.

## Self-healing and errors (standard footer)
If the same error occurs three times, something has changed in a tool or file you depend on: investigate, fix it, update this skill, and append a dated line to "Changelog" below. Log every failure to `docs/marketing/errors.md` as "date · skill · what failed · what was tried · fixed or not".

## Changelog
- 2026-08-22: created.
- 2026-08-22: standard self-healing and error-log footer added (Saraev rules 8 and 9, see docs/marketing/08-saraev-method-for-hearth.md).
