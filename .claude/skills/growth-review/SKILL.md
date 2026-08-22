---
name: growth-review
description: Weekly Instagram growth review for Hearth: ingest the Insights numbers the founder pastes, compare with the running metrics file, apply the decision rules, and set next week's emphasis. Use every Monday or when the founder says "/growth-review" or pastes Instagram stats.
---

# /growth-review

The review half of the weekly loop. It decides; it does not publish or spend.

## Inputs
- Numbers from the founder, pasted in chat or as a file, for last week: reach, non-follower share of reach, top countries with share (US + CA combined), sends, saves, average watch time per Reel, profile visits, link clicks, followers gained. From the site: intake starts with `utm_source=ig` (ask if missing).
- `docs/marketing/weeks/metrics.csv` (create with a header row if missing: week, reach, nonfollower_pct, us_ca_pct, sends, saves, avg_watch_s, profile_visits, link_clicks, followers, intake_starts, notes).
- The week's `batch.md` so results map to formats.

## Steps
1. Append the week to `metrics.csv`. Dispatch `hearth-ig-analyst` to compute per-format sends per reach and saves per reach, week-over-week deltas, and US + CA share.
2. Apply the playbook decision rules: sends per reach above 1.5% for two weeks means a second slot; below 0.3% after three posts means cut; US + CA share below 40% after week 4 means stop posting and redo seeding.
3. Sanity check before deciding (loop self-check): fewer than 1,000 total reach means the numbers are noise; record them and make no format decision.
4. Write `docs/marketing/weeks/<week>/growth-review.md`: the table, the three decisions (keep, cut, try), the single emphasis for next week, and any red flags (US + CA share, a Reel flagged as not recommended, a comment that needs a crisis response).

Reply in under 150 words: the headline number, the three decisions, next week's emphasis. No em dashes.

## Self-healing and errors (standard footer)
If the same error occurs three times, something has changed in a tool or file you depend on: investigate, fix it, update this skill, and append a dated line to "Changelog" below. Log every failure to `docs/marketing/errors.md` as "date · skill · what failed · what was tried · fixed or not".

## Changelog
- 2026-08-22: created.
- 2026-08-22: standard self-healing and error-log footer added (Saraev rules 8 and 9, see docs/marketing/08-saraev-method-for-hearth.md).
