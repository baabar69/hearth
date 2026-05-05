# Hearth — Remotion Video Prompts

Twelve paste-ready prompts for generating Hearth's marketing videos in a separate Remotion codebase.

Each prompt is self-contained: it includes the brand context (colors, fonts, voice rules), the technical specs (composition dimensions, frame rate, render command), the creative brief (concept, sample script, scene-by-scene breakdown), and acceptance criteria so an LLM can self-verify before declaring done.

---

## How to use these prompts

### 1. Set up a Remotion codebase
Follow [02-remotion-capabilities.md](../02-remotion-capabilities.md) — install Remotion, load Fraunces / Inter Tight / JetBrains Mono via `@remotion/google-fonts`, copy the brand-token TypeScript file into `src/brand/tokens.ts`, set up the suggested folder structure (`videos/{reels,shorts,longform,carousels}/`).

### 2. Pick a prompt
Each `.md` file in this folder is one prompt. Pick the platform/format you want to ship.

### 3. Paste the prompt into your LLM tool
Open the `.md` file. Copy the entire contents. Paste into the LLM working in your Remotion codebase (Cursor, Claude Code, Aider, whatever). The LLM should produce:
- A new folder under `videos/<format>/<video-slug>/`
- An `index.tsx` that exports the composition
- A `props.ts` that defines the configurable props (Zod schema for type safety)
- A README in the video folder describing the asset paths and render command

### 4. Add assets
Each prompt specifies the assets it expects (b-roll clips, voiceover audio, music, images). Drop these into `public/audio/`, `public/video/`, `public/images/` per the prompt's asset list. Keep filenames matching the prompt — the executor LLM names them deterministically.

### 5. Render
Run the render command at the bottom of the prompt:
```
npx remotion render <CompositionId> out/<video-slug>.mp4
```
Or for batch rendering, run all queued videos via the SSR pipeline (see [02-remotion-capabilities.md](../02-remotion-capabilities.md) § 7).

### 6. Self-verify
Every prompt ends with an acceptance-criteria checklist. Before publishing, walk through it. If any item fails, the prompt itself includes a "failure modes to avoid" section explaining how to fix common drift.

---

## The twelve prompts

### Instagram (priority channel)

| File | Format | Duration | Aspect | Use case |
|---|---|---|---|---|
| [01-instagram-reel-whisper-monologue.md](./01-instagram-reel-whisper-monologue.md) | Whisper monologue | 60–75s | 1080×1920 | Hearth's signature Reel. Soft-lit founder/Keeper to camera, single observation, kinetic captions. The format Brené Brown and Sahaj Kohli ride. |
| [02-instagram-reel-letter-to-pattern.md](./02-instagram-reel-letter-to-pattern.md) | Letter-to pattern | 12–20s | 1080×1920 | Pattern interrupt for the feed. Text-on-cream-paper. "A letter to anyone who…" Highest save rate. |
| [03-instagram-reel-bro-roll-voiceover.md](./03-instagram-reel-bro-roll-voiceover.md) | B-roll voiceover essay | 60–90s | 1080×1920 | Slow b-roll (hands, candles, doorways) over a Hearth Letter excerpt. The literary cinema-essay format. |
| [04-instagram-carousel-essay.md](./04-instagram-carousel-essay.md) | 8-slide carousel | Static / 16s | 1080×1350 | Highest engagement format on Instagram in 2026. Essay broken into 8 readable slides. |

### YouTube + TikTok

| File | Format | Duration | Aspect | Use case |
|---|---|---|---|---|
| [05-youtube-shorts-explainer.md](./05-youtube-shorts-explainer.md) | "What is Hearth?" explainer | 50–60s | 1080×1920 (60fps) | YouTube Shorts. For someone hearing about Hearth for the first time. Snappier cuts than Reels. |
| [06-youtube-long-intro-sequence.md](./06-youtube-long-intro-sequence.md) | Title sequence opener | 5–8s | 1920×1080 | Reusable component imported into every long-form video. Two design variants (warm room / cold window). |
| [07-tiktok-essay-style.md](./07-tiktok-essay-style.md) | TikTok essay | 60–90s | 1080×1920 | **Phase 2 only.** Per-word kinetic captions, brand-safety constraints baked in. Use after Reels has validated. |
| [08-youtube-long-essay-template.md](./08-youtube-long-essay-template.md) | Long-form essay template | 8–18 min | 1920×1080 | The cornerstone weekly content. Data-driven via Zod props so the same composition renders different essays. |

### LinkedIn + Pinterest + Product

| File | Format | Duration | Aspect | Use case |
|---|---|---|---|---|
| [09-linkedin-founder-video.md](./09-linkedin-founder-video.md) | Founder video | 60–90s | 1080×1080 or 1920×1080 | LinkedIn is founder-led, not brand-led. Founder's recorded video framed by Remotion with kinetic captions. Sound-off readable. |
| [10-pinterest-idea-pin.md](./10-pinterest-idea-pin.md) | Pinterest pin (3 variants) | 9s static or video | 1080×1920 | Quote pin / "Read this if…" pin / triptych essay set. Keyword-front-loaded titles. |
| [11-keeper-introduction-video.md](./11-keeper-introduction-video.md) | Keeper intro | 45–60s | 1080×1080 | Sent in the first-Sit confirmation email and on Keeper profile pages. Humanizes the Keeper before the first Sit. |
| [12-the-hearth-letter-promo.md](./12-the-hearth-letter-promo.md) | Letter promo (dual aspect) | 30s | 1080×1920 + 1920×1080 | Promotes the free Hearth Letter. Dual-aspect-ratio render — IG Reel + LinkedIn. Invitation, not sales pitch. |

---

## The atomic content principle

The four Instagram prompts (01–04) were designed to atomize from **one weekly Hearth Letter**. They all reference the sample atom *"the call that ruins your Sunday"* so a single weekly essay produces a Reel + carousel + b-roll Reel + letter-to Reel without any new writing.

When you produce next week's atom, only the **content** changes. The **prompts and compositions stay the same.** This is the engine described in [05-content-engine.md](../05-content-engine.md).

---

## Voice — the non-negotiable

Every prompt includes the voice constraints from [04-hearth-marketing-strategy.md](../04-hearth-marketing-strategy.md). The 7-second test:

> Pick up any rendered video. Watch the first 7 seconds. If a stranger could imagine *Calm, Headspace, BetterHelp, Modern Health, or Brown Girl Therapy* having made it, send it back to the prompt.

The sister test:

> Would the author send this to her sister with a one-line "this made me cry" message? If no, the video isn't ready.

If a render fails either test, do not publish. Re-prompt and re-render.

---

## Adding new prompts

When a new format is needed (a new platform, a new use case), copy an existing prompt that's structurally similar and adapt:

1. Update the **TARGET COMPOSITION** block in the starter-prompt header (id, dimensions, fps, durationInFrames).
2. Update the concept brief and sample script.
3. Update the scene-by-scene breakdown.
4. Update the asset list.
5. Update the render command.
6. Update the acceptance criteria for the new format.

Keep the brand context preamble verbatim. That's what makes the prompts portable across LLMs and codebases.

---

## What's NOT in this folder

- **Founder selfie videos** — those are recorded on a phone, then framed in Remotion via prompt 09 or 11.
- **Keeper selfie videos** — same. Framed via prompt 11.
- **Stock photo lookups** — the asset pipeline expects the operator to have already curated assets in `public/`.
- **Voice-over scripts beyond the samples** — each weekly atom yields a new VO script. The prompts show the *format*; the writer fills the *content*.

---

## Final reminder

These prompts produce videos. The videos are atomized from atoms. The atoms are the Hearth Letter. The Letter is the brand.

Don't get lost in the rendering. The center holds.
