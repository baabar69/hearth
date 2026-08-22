---
name: dashboard
description: Build or refresh Hearth's marketing dashboard from the CSVs in data/metrics (Instagram, Search Console, intake, payments) as a static HTML page with the funnel and simple signal detection. Use when the founder says "/dashboard", "show me the numbers", or weekly after /growth-review.
---

# /dashboard

Saraev's data function (4:37:02 to 5:09:00): one source of truth, data on the page before skinning, naive threshold signals, a web page you can open on a phone, refreshed on a schedule.

## Data schema (`data/metrics/`, one CSV per source; the founder pastes or exports)
- `instagram-weekly.csv`: week, reach, nonfollower_pct, us_ca_pct, sends, saves, avg_watch_s, profile_visits, link_clicks, followers
- `search-console-weekly.csv`: week, impressions, clicks, avg_position, top_query
- `intake-weekly.csv`: week, intake_starts, intake_completed, matched, escalations
- `payments-weekly.csv`: week, new_members, plan_39, plan_99, churned, mrr
- Anything else goes in `data/metrics/README.md` with its columns.

## Steps
1. Read every CSV. Validate headers; list missing weeks. Do not invent values; empty cells render as "no data".
2. Funnel per week: reach, profile visits, link clicks, intake starts, completed, matched, paid. Conversion between each step.
3. Signals, naive thresholds (his phrase): a metric down more than 40% week over week, US plus Canada share under 40%, intake completion under 50%, any escalation. Each signal is one plain sentence with the numbers.
4. Render `docs/marketing/dashboard/index.html`: a single self-contained page, cream paper, Fraunces headings, a funnel table, four small sparkline-style tables (no external libraries), the signals list at the top, light and dark safe. Get the data on the page first; only then adjust the design.
5. Publish: as a Claude Artifact for a private link, or `netlify deploy` to a password-protected site when the founder asks. Never put member names or emails on the page.

## Self-check
Numbers on the page match the CSVs exactly; the page opens with no network requests; no em dashes.

## Self-healing and errors (standard footer)
If the same error occurs three times, something has changed in a tool or file you depend on: investigate, fix it, update this skill, and append a dated line to "Changelog" below. Log every failure to `docs/marketing/errors.md` as "date · skill · what failed · what was tried · fixed or not".

## Changelog
- 2026-08-22: created with the data schema. First render when two weeks of numbers exist.
