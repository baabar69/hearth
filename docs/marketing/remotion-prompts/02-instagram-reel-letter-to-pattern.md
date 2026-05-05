# IG Reel — "Letter-To" Pattern: Anyone Who Held It Together This Week

> Paste this entire file as a single prompt into a fresh Remotion v5+ codebase. The LLM should be able to execute end-to-end without further clarification.

---

## Starter prompt template (brand-context preamble)

```
You are writing a Remotion v5+ video component for HEARTH.

ABOUT HEARTH
Hearth is a peer-support membership ($39/mo or $99/mo). It is NOT therapy.
Members pair with a trained "Keeper" who walks alongside them. Brand voice
is warm, slow, literary, grounded — never clinical, never hustle, never
self-help-bro. Tagline: "Pull up a chair. You weren't meant to carry it alone."

BRAND TOKENS (import from src/lib/tokens.ts)
Colors:
  paper      #F2EDE5  (default background)
  paper2     #EAE2D2  (subtle surface / pill)
  ink        #0E0B08  (default foreground)
  ember      #9C2A1A  (primary accent)
  emberDeep  #6E1A0F  (depth accent)
  honey      #E8A845  (warm highlight, use sparingly)
  sage       #4F5A45  (calm secondary)
Type:
  Fraunces        — display / headlines (weights 400, 500, 600)
  Inter Tight     — body / UI / captions (weights 400, 500, 600)
  JetBrains Mono  — small mono accents (weights 400, 500)
Load via @remotion/google-fonts; never use raw CSS @font-face.

MOTION PRINCIPLES
- Slow, settled, intentional. Default scene length 4–6 seconds at 30 fps.
- Spring damping 200 for entrances; avoid bouncy overshoot.
- Use `interpolate` with extrapolate "clamp" for fades; `spring` for entrances.
- Stagger children by 4–8 frames; never 0.
- Cross-scene transitions: fade or slow wipe via @remotion/transitions.
  No flips, no clock-wipes, no gimmicky kinetic type.
- Whitespace is the design. Do not fill the canvas. Let the paper breathe.

REMOTION RULES
- All animation is a pure function of useCurrentFrame() / useVideoConfig().
- No setTimeout, setInterval, Math.random without seed, Date.now, CSS keyframes.
- Use <AbsoluteFill>, <Sequence>, <Img>, <Audio>, <OffthreadVideo>.
- Static assets via staticFile("path/in/public").
- Async work guarded by delayRender / continueRender.
- Code must be TypeScript, function components, named exports, no default exports.
- Props validated with a zod schema in `props.ts`.

TARGET COMPOSITION
- Platform: Instagram Reel
- Dimensions: 1080 x 1920
- FPS: 30
- Duration: 510 frames (17 seconds)
- Audio: ambient paper-noise bed, no voiceover (text-led)

DELIVERABLE
A single TSX file exporting the composition component, plus a sibling
`props.ts` exporting the zod schema and default props, ready to register
in `src/Root.tsx` under the appropriate <Folder>.
```

---

## 1. Concept brief

A 17-second pattern-interrupt Reel built around the "letter-to" device. Text-on-cream-paper, animated as if a hand is laying down stationery. Each beat reveals one tender truth. No face, no voice — the silence is the hook in a feed of dopamine. Optimised for **save rate** and **DM share**, not watch-time-to-completion.

- **Atom**: anyone who held it together this week.
- **Audience**: same primary SVA — the eldest daughter / the one everyone calls. She sees this on a Thursday at 11pm, on her side, phone-light on her face.
- **Truth carried**: holding it together is a skill *and* a cost. Both can be true on the same Sunday.
- **Plank**: *Paired.* The reader is being addressed by name without being named.
- **Why it saves**: it functions as a screenshotable letter. The full Reel is one image she could send to a friend tomorrow.

## 2. Sample script (~75 words across 6 reveal beats)

> A letter to anyone who held it together this week.
>
> To the one who answered the call she didn't have the energy for.
>
> To the one who said "I'm fine" so the room would soften.
>
> To the one who cried in the car before walking back inside.
>
> Nothing about you is too much.
>
> The way you carry it is not a personality. It is a debt the people around you forgot to repay.
>
> *Pull up a chair.*

The closing line is the wordmark moment.

## 3. Scene-by-scene Remotion breakdown

Total: **510 frames @ 30fps = 17s.** Single composition `ReelLetterToHeldItTogether`. Use `<Series>` with seven `<Series.Sequence>` blocks (one per beat plus a sign-off) so each beat's local frame counter starts at 0.

| # | Frame range | Duration | Beat | Type |
|---|---|---|---|---|
| 1 | 0–90 | 3.0s | "A letter to anyone who held it together this week." | Fraunces 400 italic, 84px |
| 2 | 90–165 | 2.5s | "To the one who answered the call she didn't have the energy for." | Fraunces 400, 64px |
| 3 | 165–240 | 2.5s | "To the one who said 'I'm fine' so the room would soften." | Fraunces 400, 64px |
| 4 | 240–315 | 2.5s | "To the one who cried in the car before walking back inside." | Fraunces 400, 64px |
| 5 | 315–390 | 2.5s | "Nothing about you is too much." | Fraunces 500, 84px, ember |
| 6 | 390–465 | 2.5s | "The way you carry it is not a personality. It is a debt the people around you forgot to repay." | Fraunces 400, 56px |
| 7 | 465–510 | 1.5s | "Pull up a chair." + `hearth` wordmark | Fraunces 500, 96px |

Loop frame 509 back into frame 0: paper texture, no visible type.

## 4. Animation specs

- **Background**: `colors.paper` (`#F2EDE5`) `<AbsoluteFill>` plus a subtle paper-grain PNG at 7% opacity, `mix-blend-mode: multiply`. Static, no motion.
- **Type entrance per beat**: each line fades in word-by-word with a 5-frame stagger and an 8px upward translate.
  ```ts
  const local = useCurrentFrame();
  const wordOpacity = (i: number) => interpolate(local, [i*5, i*5 + 14], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const wordY = (i: number) => interpolate(wordOpacity(i), [0, 1], [8, 0]);
  ```
- **Type exit per beat**: fade the whole block from frame `local-15` to `local` of its sequence's end. No exit translate.
- **Eyebrow**: a small `JetBrains Mono 500, 24px, sage, uppercase, letter-spacing 0.18em` line above each beat reading `letter ${i}/6`. Fades in 6 frames after the headline.
- **Beat 5 (ember beat)**: type colour `colors.ember`. The rest of the deck is `colors.ink`. Use this contrast as the emotional pivot.
- **Sign-off**: `hearth` wordmark in Fraunces 500 ember, with `pull up a chair.` in JetBrains Mono 400 ink below. Both enter via `spring({ damping: 200, stiffness: 80 })`.
- **No transitions library.** Plain frame-driven crossfades only — `@remotion/transitions` is unnecessary here.
- **Layout**: vertical centre at y=960. Max width 880px. Padding 100px left/right. Whitespace top/bottom.

## 5. Audio specs

- **No voiceover.** This Reel is text-led; silence is part of the hook.
- **Bed**: very low ambient paper-and-room noise, e.g. licensed `paper-room-tone.mp3`. Volume curve: `interpolate(frame, [0, 30, 480, 510], [0, 0.08, 0.08, 0])`. ~ -22 dB.
- **Optional original audio**: a single soft pencil-on-paper SFX at frame 6, 96, 171, 246, 321, 396, 471 timed to each beat's word-1 reveal. Volume 0.18 each. Source `public/audio/sfx/pencil-tick.mp3`. Keep it almost imperceptible — IG Reels marks this as Original Audio, which gets ranking boost.

## 6. Brand requirements

- Background: `colors.paper` with grain.
- Body type: Fraunces 400 / 500. Italic only on beat 1.
- Eyebrow: JetBrains Mono 500, sage, uppercase.
- Accent colour: `colors.ember` exclusively for beat 5 and the wordmark.
- Type sizes: 84/64/56/96 (display); 24 (mono eyebrow).
- No emoji. No drop shadows. No gradients. No outlines. The aesthetic is *stationery*, not poster.

## 7. Render command and output path

```bash
npx remotion render src/index.ts ReelLetterToHeldItTogether \
  out/reels/2026-04-letter-to-held-it-together.mp4 \
  --codec=h264 --crf=18 --pixel-format=yuv420p
```

Generate a still cover for the IG grid:

```bash
npx remotion still src/index.ts ReelLetterToHeldItTogether \
  out/reels/2026-04-letter-to-held-it-together-cover.png \
  --frame=60
```

## 8. Acceptance criteria checklist

- [ ] Composition `ReelLetterToHeldItTogether` registered in `src/Root.tsx` under `<Folder name="Reels">`.
- [ ] `props.ts` zod schema covers `beats: string[]` (length 6), `signOff: string`, `bedPath: string`, defaults match §2.
- [ ] Output is 1080×1920, 30fps, exactly 510 frames.
- [ ] Each of the 7 sequences fades in and out cleanly with no overlap.
- [ ] Beat 5 ("Nothing about you is too much.") is rendered in `colors.ember`; all other beats in `colors.ink`.
- [ ] Word-by-word stagger is 5 frames; no zero-stagger reveals.
- [ ] Bed audio peaks ≤ -22 dB; no clipping.
- [ ] Frame 509 visually loops to frame 0 (paper background, no type).
- [ ] Cover still rendered at frame 60 — beat 1 fully visible.
- [ ] No `<TransitionSeries>`, no flip/wipe transitions, no CSS keyframes.

## 9. Failure modes to avoid

- **Looking like a quote-card meme.** This is stationery. No bordered box, no centred-quote-with-attribution layout, no gradient backgrounds.
- **Too fast.** If a beat is on screen for less than 75 frames, the viewer cannot read and screenshot it. Save rate dies.
- **Hand-lettered cosplay.** Use Fraunces. Do not pull a script font that imitates handwriting.
- **CTA in the body.** No "follow for more," no "save this for later." The wordmark is the CTA.
- **Therapy-influencer rewrite.** If you find yourself adding "your nervous system" or "🧠✨", delete the file and start over.
- **Punctuation drift.** Em dashes, full stops, lower-case `i` everywhere. No `…` ellipses, no `~` tildes.
- **Branded watermark in corner.** No. The sign-off slide is the only place the wordmark appears.
- **Visible TikTok watermark from imported assets.** IG actively suppresses these.
