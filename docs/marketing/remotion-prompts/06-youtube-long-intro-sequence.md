# YouTube Long-form — Title Sequence Opener (5–8s)

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
- Platform: YouTube long-form (16:9 horizontal)
- Dimensions: 1920 × 1080
- FPS: 30
- Duration: 210 frames (= 7 seconds). Range: 150–240 frames depending on variant.
- Audio: single sustained chord (sage/cello pad) OR silence with a soft
        door-close SFX at the end. Picked per video via props.
- Composition id: `LongIntroSequence`
- Folder: Long-form / Title Sequences
```

## Concept brief

This is the signature opener that appears at the start of every Hearth long-form essay (8–18 minute literary videos). It is brand identity in motion. The first five seconds of a Hearth video must do two things at once: set a register so unmistakably warm-and-literary that the viewer recognises the brand from across the room, and earn the ten-minute attention contract that the rest of the video asks for. Because YouTube data shows 55%+ of viewers drop in minute one, this opener cannot be a vanity title. It must earn its seven seconds.

The structure is fixed: a slow zoom-in on a tactile object (candle, hands, chair, paper texture), the **Hearth** wordmark in Fraunces fading in, and the eyebrow line *"A letter from Hearth."* settling underneath. The whole thing breathes once and then yields to the cold-open of the essay itself. This is not a logo splash. It is a held breath.

## The two design variants

Both variants share the same timing skeleton and component contract; only the b-roll and color treatment differ. Implement both as data variants of the same `<LongIntroSequence />` component, switched by a `variant` prop.

### Variant A — "Warm Room" (default)

- Background b-roll: a slow push-in on a beeswax candle just lit, hands faintly visible at the edge of frame, late-afternoon kitchen light. Source clip at `public/video/intro/warm-room.mp4`.
- Color treatment: paper `#F2EDE5` paper-grain overlay at 12% opacity, ember `#9C2A1A` ink underline.
- Mood: Sunday evening, kettle on, the room exhaling.
- Use for: tender essays, member-story episodes, the Sunday Embers crossover.

### Variant B — "Cold Morning Window"

- Background b-roll: a slow push-in on a single hand resting on a windowsill in pale dawn light, condensation, a paper letter folded at the edge of frame. Source clip at `public/video/intro/cold-window.mp4`.
- Color treatment: paper `#F2EDE5` desaturated 20%, sage `#4F5A45` ink underline (instead of ember).
- Mood: 6 a.m. quiet, weight-of-the-day, ambient grief.
- Use for: heavier essays (loss, parentification, the strong friend), winter season episodes.

## Scene / animation specs (210 frames at 30fps = 7.0s)

| Phase | Frames | Seconds | What happens | Animation |
|---|---|---|---|---|
| 1. Zoom-in | 0–45 | 0.0–1.5s | B-roll clip plays. Slow Ken Burns: `scale 1.00 → 1.06`, `translateY 0 → -8px`. | `interpolate(frame, [0, 45], [1.0, 1.06], { easing: Easing.bezier(0.4, 0, 0.2, 1) })` |
| 2. Wordmark fade | 45–69 | 1.5–2.3s | "Hearth" wordmark fades in centered, Fraunces 500, 192px, ink. | Spring: `damping: 200, stiffness: 60, durationInFrames: 24`. Drives opacity 0→1 and translateY +6px → 0. |
| 3. Underline draw | 69–93 | 2.3–3.1s | Hand-drawn ember (or sage) underline beneath the wordmark draws via SVG `pathLength` 0→1. | `interpolate(frame, [69, 93], [0, 1], { extrapolateRight: "clamp" })` applied to `strokeDasharray` / `strokeDashoffset`. |
| 4. Eyebrow reveal | 99–114 | 3.3–3.8s | "A letter from Hearth." in JetBrains Mono 500 uppercase, tracked +0.22em, 22px, ember (or sage), centered 64px below the wordmark. | Spring damping 200, durationInFrames 15; opacity 0→1 only (no translate). |
| 5. Hold | 114–195 | 3.8–6.5s | Everything still. B-roll continues its push-in (now `scale 1.06 → 1.10`). Paper grain breathes via `sin`-free deterministic shimmer at ±2% opacity over 60 frames. | None other than the b-roll continuation. |
| 6. Hand-off fade | 195–210 | 6.5–7.0s | Whole composition fades to 0 opacity over 15 frames. The next sequence in the host video begins. | `interpolate(frame, [195, 210], [1, 0], { extrapolateLeft: "clamp" })` on a top-level `<AbsoluteFill>` opacity wrapper. |

Implementation notes:
- The wordmark is the `<EmberWordmark />` component from `components/`, which renders Fraunces 500 with a fixed letter-spacing of `-0.02em`. Pass `variant` through so the underline color matches.
- The underline SVG path is hand-shaped (slight irregularity, not a perfect line). Source the SVG from `public/svg/ember-underline.svg` (or `sage-underline.svg`). Render via `<svg><path stroke={color} strokeWidth={6} pathLength={1} strokeDasharray="1" strokeDashoffset={1 - drawProgress} /></svg>`.
- The paper grain is a static PNG at `public/images/paper-grain.png` overlaid via `mix-blend-mode: multiply` at 12% opacity. Do NOT animate the grain texture itself — only its parent's opacity, and only by ±2% deterministically.
- Use `<OffthreadVideo>` not `<Video>` for the b-roll (frame accuracy on render).

## Audio specs

Pick one per video via the `audio` prop. Default is `sustainedChord`.

- **`sustainedChord`** — a single C-minor cello pad (sage/Hammock register), starts at frame 0, swells to -22 dB by frame 60, sustains, fades to silence over frames 180–210. Path: `public/audio/intro/sustained-chord.mp3`. Use `<Audio volume={(f) => interpolate(f, [0, 60, 180, 210], [0, 0.32, 0.32, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })} />`.
- **`silentWithDoor`** — silence for frames 0–195, then a soft door-close SFX (the "settling-in" cue) at frame 195, peaking at -16 dB. Path: `public/audio/intro/door-close.mp3`. Use a `<Sequence from={195}>` wrapper.
- **`silent`** — no audio. Use only when the host video opens with its own sound design and wants the intro absolutely quiet.

Never use a music sting, branded mnemonic logo, or rising swell. Hearth is not a streaming service. The sound of the brand is the room.

## Reusability — props contract

This component is imported into every long-form video. Document it as the `<LongIntroSequence />` reusable component. The host composition wraps it in a `<Sequence from={0} durationInFrames={210}>` and then plays the rest of the essay starting at frame 210.

```ts
// videos/longform/components/LongIntroSequence/props.ts
import { z } from "zod";

export const longIntroProps = z.object({
  variant: z.enum(["warmRoom", "coldWindow"]).default("warmRoom"),
  audio: z.enum(["sustainedChord", "silentWithDoor", "silent"]).default("sustainedChord"),
  eyebrowText: z.string().default("A letter from Hearth."),
  // Optional: per-episode tag rendered as a tiny mono line below the eyebrow.
  // Only visible during the Hold phase. Used for series labels like "Embers · No. 14".
  episodeTag: z.string().nullable().default(null),
  // Override the b-roll clip if the episode has a specific opening image.
  brollOverride: z.string().nullable().default(null),
});

export type LongIntroProps = z.infer<typeof longIntroProps>;
export const defaultLongIntroProps: LongIntroProps = {
  variant: "warmRoom",
  audio: "sustainedChord",
  eyebrowText: "A letter from Hearth.",
  episodeTag: null,
  brollOverride: null,
};
```

Per-video usage:

```tsx
// videos/longform/episodes/EmbersNo14/index.tsx
<TransitionSeries>
  <TransitionSeries.Sequence durationInFrames={210}>
    <LongIntroSequence
      variant="coldWindow"
      audio="sustainedChord"
      episodeTag="Embers · No. 14"
    />
  </TransitionSeries.Sequence>
  <TransitionSeries.Transition
    timing={linearTiming({ durationInFrames: 18 })}
    presentation={fade()}
  />
  <TransitionSeries.Sequence durationInFrames={...}>
    <ColdOpen />
  </TransitionSeries.Sequence>
  {/* ... rest of essay ... */}
</TransitionSeries>
```

The component must NOT hard-code anything else. The host video controls everything after frame 210.

## Render command + acceptance criteria

```bash
# Standalone preview (rare — usually rendered as part of a long-form host)
npx remotion render src/index.ts LongIntroSequence out/intro-warmroom.mp4 \
  --codec=h264 --crf=16 --fps=30 \
  --props='{"variant":"warmRoom","audio":"sustainedChord"}'
```

**Acceptance criteria**

- 1920×1080, H.264, 30fps, exactly 210 frames (7.0s) in default config.
- The wordmark is fully readable by frame 75 (zero motion blur, anti-aliased Fraunces 500).
- The underline draws left-to-right, completes at frame 93, and is hand-shaped (not a clean rectangle).
- The eyebrow line "A letter from Hearth." (or the prop override) is in JetBrains Mono uppercase, tracked +0.22em, never larger than 28px.
- The b-roll never zooms more than 10% over the full 7s.
- The component fades to opacity 0 at frame 210 so the host video's next sequence cuts in cleanly.
- Both variants render identically in timing — only the visual treatment and underline color differ.
- Component is importable as `import { LongIntroSequence } from "@/videos/longform/components/LongIntroSequence"` with zero unstated dependencies on host context.

**Failure modes to avoid**

- Logo-splash energy. This is a held breath, not a brand reveal. No swooshes, no scale-bounce, no shimmer.
- Music stings, mnemonic logos, or "DING" cues. The sound of Hearth is a room, not a brand.
- Animating the paper grain or letter spacing — both produce a cheap, jittery feel that betrays the literary register.
- Letting the intro run past 8 seconds. Past 8s it eats retention; the first words of the essay must arrive before then.
- Hard-coding episode-specific text or imagery. Everything per-episode flows through the props schema above.
- Using the ember underline on a heavy/grief episode (use sage instead, via `variant: "coldWindow"`).
