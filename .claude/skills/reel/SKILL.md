---
name: reel
description: Turn one Reel script from a weekly batch into a production-ready Remotion brief (scenes, timing, on-screen text, voiceover, audio, cover, export specs) for Hearth. Use when the founder says "/reel <slug>" or "make this reel".
---

# /reel <week> <slug>

Takes a script from `docs/marketing/weeks/<week>/batch.md` and produces the brief a Remotion session renders from. Read `docs/marketing/02-remotion-capabilities.md` for the brand tokens and the matching file in `docs/marketing/remotion-prompts/` for the lane's template. Invoke the `video` skill for production guidance.

## Produce `docs/marketing/weeks/<week>/reels/<slug>.md`
1. **Spec:** 1080x1920, 30fps, length in seconds, loop-friendly last frame, captions burned in, no watermark, original audio or the named licensed ambient track at -18dB.
2. **Scene table:** scene, start and end (seconds), visual (from the lane: cream paper text, or b-roll list with shot notes, or the viral-format structure), on-screen text verbatim, voiceover verbatim, transition.
3. **Typography:** Fraunces for display lines, Inter Tight for body, JetBrains Mono for the closer stamp; colours from the brand tokens (paper, ink, ember).
4. **Cover frame:** the one line readable at 1:1 thumbnail size.
5. **Caption and hashtags:** copied from the batch; first line carries the keyword.
6. **Trial hooks:** the two alternates, as alternate first scenes.
7. **Export checklist:** clean MP4 for Instagram, TikTok, Shorts and Threads; SRT file; cover PNG.
8. **Paste-ready prompt:** the full Remotion prompt, self-contained, for a separate Remotion codebase session.

Copy rules from `AGENTS.md` apply. Reply with the file path and anything the founder must decide (music choice, b-roll source).

## Self-healing and errors (standard footer)
If the same error occurs three times, something has changed in a tool or file you depend on: investigate, fix it, update this skill, and append a dated line to "Changelog" below. Log every failure to `docs/marketing/errors.md` as "date · skill · what failed · what was tried · fixed or not".

## Changelog
- 2026-08-22: created.
- 2026-08-22: standard self-healing and error-log footer added (Saraev rules 8 and 9, see docs/marketing/08-saraev-method-for-hearth.md).
