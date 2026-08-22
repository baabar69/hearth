---
name: hook-batch
description: Generate a large batch of Instagram hooks, first lines and cover lines for a Hearth theme, render a contact sheet to pick winners from, and hand the picks to /content-week. Use when the founder says "/hook-batch <theme>", "more hooks", or when hooks are the bottleneck.
---

# /hook-batch <theme> [count]

Saraev's creative rule applied to words: generate dozens, review, ship. Default count 40 hooks plus 12 cover lines. Nothing publishes.

## Inputs
- `.agents/product-marketing.md` (audience, language, banned words), `docs/marketing/07-instagram-playbook.md` section 3 (lanes), `docs/marketing/03-platform-strategy.md` section 1 (hook patterns), `AGENTS.md`.
- Previous batches in `docs/marketing/weeks/*/hooks/` so nothing repeats.
- Theme from the argument, or next week's theme from the pillar rotation.

## Steps
1. Build the variable grid: lanes (letter-to, b-roll essay, viral format, carousel cover) x angles (the Sunday call, the brave face, known in pieces, the paperwork years, wedding season, the grandmother nobody grieved, two cultures one nervous system) x closers (the three in the playbook).
2. Dispatch `hearth-content-writer` three times in parallel, each with a third of the grid, asking for hooks only: under 12 words, plain, one true thing, no questions as openers, no banned words, no em dashes. Each returns hooks tagged with lane and angle.
3. Deduplicate, then score each hook 1 to 5 on: specific image, forwardable, works with zero context (trial reel), on voice. Keep all; sort by score.
4. Write `docs/marketing/weeks/<week>/hooks/hooks-<theme>.json` (array of {id, lane, angle, text, score}) and render a contact sheet: run `node scripts/marketing/contact-sheet.mjs hooks <that json>`, which writes `hooks-<theme>.html` with a checkbox per hook and a "copy selection" button that outputs the chosen ids as JSON.
5. Tell the founder the file path and the top ten by score. When they paste the selection back, write `hooks-<theme>.selected.json`; `/content-week` reads it first.

## Self-check
No em dashes, no banned words, no hook repeats a previous batch, every hook under 12 words.

## Self-healing and errors (standard footer)
If the same error occurs three times, something has changed in a tool or file you depend on: investigate, fix it, update this skill, and append a dated line to "Changelog" below. Log every failure to `docs/marketing/errors.md` as "date · skill · what failed · what was tried · fixed or not".

## Changelog
- 2026-08-22: created.
