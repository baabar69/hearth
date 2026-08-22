---
name: cover-batch
description: Composite many Instagram cover and carousel-slide variants to PNG from Hearth's HTML templates (type on cream paper) and render a contact sheet to choose from. Use when the founder says "/cover-batch", "cover options", "carousel variants", or a batch needs covers.
---

# /cover-batch <week> [lines.json]

Saraev's compositing pipeline (HTML templates plus an image tool, about 80% usable versus 25% for direct generation, 2:00:40) done with the renderer we already use for the highlight covers. Text on paper only; no AI image generation in this skill.

## Inputs
- Lines to render: `docs/marketing/weeks/<week>/hooks/*.selected.json` if it exists, otherwise the hooks and cover lines in `batch.md`.
- Templates in `scripts/marketing/templates/` (cover-reel 1080x1920, cover-carousel 1080x1350, slide 1080x1350). Brand tokens: paper #F2EDE5, paper2 #EAE2D2, ink #0E0B08, ember #9C2A1A, sage #4F5A45; Fraunces, Inter Tight, JetBrains Mono.

## Steps
1. Build the variant list: for each line, 4 variants (two type scales, two background treatments: flat paper and the soft radial warm centre). Cap at 60 renders per run.
2. Run `node scripts/marketing/render-covers.mjs --week <week> --input <json>`; it writes PNGs to `docs/marketing/weeks/<week>/covers/` and a contact sheet `covers.html` with checkboxes and a "copy selection" button.
3. Check three renders at thumbnail size (110px): the headline must still read. If not, the script's `--scale` flag bumps the type.
4. Reply with the contact sheet path and the three you would pick. When the founder pastes the selection, copy the chosen PNGs to `covers/selected/` and note them in `batch.md`.

## Self-check
Every render has no em dash, the eyebrow is mono uppercase, the closer is set small, nothing exceeds the safe area for the 1:1 grid crop.

## Self-healing and errors (standard footer)
If the same error occurs three times, something has changed in a tool or file you depend on: investigate, fix it, update this skill, and append a dated line to "Changelog" below. Log every failure to `docs/marketing/errors.md` as "date · skill · what failed · what was tried · fixed or not".

## Changelog
- 2026-08-22: created. Renderer: Playwright with the installed Chrome, Google Fonts loaded at render time.
