# YouTube Long-form — Literary Essay Template (8–18 minutes)

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
- Platform: YouTube long-form (the cornerstone weekly essay)
- Dimensions: 1920 × 1080 (16:9)
- FPS: 30
- Duration: variable per essay; 14400–32400 frames (8–18 minutes).
- Audio: founder/Keeper voiceover + ambient music bed (Hania Rani / Ólafur
        Arnalds register).
- Composition id: `LongEssay`
- Folder: Long-form / Essays
```

## Concept brief

This is the cornerstone weekly format — the slow brand-building engine. Every other piece of content in the atomic content map is downstream of this. One literary essay, narrated by the founder or a Keeper over slow b-roll and a small palette of stills, lives on the channel for years and becomes the canonical introduction to Hearth. The format is *The School of Life* meets *On Being* meets the Hearth Letter on Substack — it should feel like an essay you'd read in a Sunday magazine, set to motion picture.

The component is a **template**: the same composition renders a different essay each week, switched entirely by data in `props.ts`. The Remotion code never changes between episodes.

## Structural skeleton

A long essay is composed of these top-level Sequences, in order:

```
LongEssay (1920 × 1080, 30fps)
├── 0–210      [LongIntroSequence]            7s   — reusable opener (see file 06)
├── 210–600    [ColdOpenSentence]             13s  — single Fraunces line, b-roll
├── 600–N      [SceneParagraph × 5–7]         60–120s each — the essay body
├── N–N+360    [ClosingImage]                 12s  — wordless visual coda
└── N+360–end  [EndCard]                      15s  — subscribe + Letter signup CTA
```

For a 14-minute essay (25,200 frames), expect roughly: intro 210 + cold-open 390 + 6 scene-paragraphs × ~3,300 frames each + closing 360 + end-card 450 ≈ 21,210 frames of essay structure plus padding.

### Per-scene contract

Each scene-paragraph is one `<Sequence>` containing:

1. **Visual layer**: ONE establishing image (`<Img>`) OR a single piece of slow b-roll (`<OffthreadVideo>` with Ken Burns scale 1.00 → 1.04 across the scene). Never a montage within a scene — the scene IS the held shot.
2. **Audio layer**: a `<Sequence>`-scoped `<Audio>` for the voiceover paragraph.
3. **Caption layer**: a `<Captions>` component that reads the paragraph's caption JSON and renders soft-fade phrase-by-phrase.
4. **Optional lower-third pull-quote**: when a paragraph contains a screenshot-worthy line, a `<PullQuote>` component fades it in over a 24-frame spring at the moment that phrase is spoken (driven by Whisper word-timestamps), holds 90 frames, fades out.

```tsx
<TransitionSeries.Sequence durationInFrames={paragraph.durationInFrames}>
  <SceneParagraph paragraph={paragraph} />
</TransitionSeries.Sequence>
```

Where `<SceneParagraph>` reads its asset paths, VO path, captions, and optional pull-quote from a single typed object.

## Loading the atom from `props.ts`

The composition is data-driven. A new essay is just a new TypeScript object — the React tree never changes.

```ts
// videos/longform/LongEssay/props.ts
import { z } from "zod";

export const paragraphSchema = z.object({
  id: z.string(),
  voPath: z.string(),                 // staticFile-relative, e.g. "audio/voiceover/embers-14/p3.mp3"
  captionsPath: z.string(),           // "captions/embers-14/p3.json"
  durationInFrames: z.number(),
  visual: z.discriminatedUnion("kind", [
    z.object({ kind: z.literal("image"), src: z.string() }),
    z.object({ kind: z.literal("broll"), src: z.string(), zoom: z.tuple([z.number(), z.number()]).default([1.0, 1.04]) }),
  ]),
  pullQuote: z.object({
    text: z.string(),
    atFrame: z.number(),              // local to the scene
    durationInFrames: z.number().default(120),
  }).nullable().default(null),
});

export const longEssayProps = z.object({
  episodeId: z.string(),              // "embers-14"
  title: z.string(),                  // "The friend you stopped calling"
  intro: z.object({
    variant: z.enum(["warmRoom", "coldWindow"]).default("warmRoom"),
    audio: z.enum(["sustainedChord", "silentWithDoor", "silent"]).default("sustainedChord"),
  }),
  coldOpen: z.object({
    sentence: z.string(),
    voPath: z.string(),
    visual: z.string(),               // image or broll src
  }),
  paragraphs: z.array(paragraphSchema).min(5).max(7),
  closingImage: z.object({
    src: z.string(),
    sentence: z.string().nullable().default(null),
  }),
  endCard: z.object({
    subscribeText: z.string().default("Subscribe for the next letter."),
    newsletterUrl: z.string().default("dearhearth.com/letter"),
  }),
  music: z.object({
    bedPath: z.string(),              // "audio/music/embers-14-bed.mp3"
    swellPath: z.string().nullable().default(null),
  }),
});

export type LongEssayProps = z.infer<typeof longEssayProps>;
```

Each Wednesday's essay ships as a single `episode-<id>.props.json` checked into the repo alongside its assets. The render command takes `--props=./props/embers-14.json`.

## Captions strategy

Long-form watchers use captions heavily. Burn captions in by default — never rely on YouTube's auto-CC for accessibility-grade output.

- Generate captions via Whisper from each paragraph's VO file (`scripts/generate-captions.ts`). Save per-paragraph JSON to `public/captions/<episodeId>/p<n>.json`.
- Use `parseSrt`-style `Caption[]` and group into **phrases** (5–9 words each) via a small custom grouping function — NOT word-by-word. Long-form is read, not pulsed.
- Render phrases as full burned-in lower-third lines: Inter Tight 500, 42px, ink on a paper2 pill at 88% opacity, max-width 1400px, centered horizontally, y = 920.
- Each phrase fades in over 6 frames, holds, fades out over 6 frames as the next phrase fades in (4-frame overlap). Use `interpolate(localFrame, [0, 6, hold, hold + 6], [0, 1, 1, 0])`.
- Never use TikTok-style word-by-word reveal here. The brand voice is reading-pace.

## Music ducking pattern

The ambient bed is the connective tissue between scenes. Build it as one continuous track per episode (musician-composed, not stock loops) and duck it under VO.

```tsx
const bedVolume = (f: number) => {
  // Base sit at -18dB during VO presence; -10dB during transitions/closing image.
  const inVO = isFrameInsideVoiceover(f);  // computed from paragraph timeline
  const target = inVO ? 0.15 : 0.32;
  // Smooth ramps in/out at 24-frame edges so swells feel intentional.
  return interpolate(
    f,
    [0, 60, durationInFrames - 60, durationInFrames],
    [0, target, target, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
};

<Audio src={staticFile(props.music.bedPath)} volume={bedVolume} loop />
```

Pattern in plain English:

- **Music bed sits at 0.15 (≈ -18 dB) under VO.** Sparse, no melody competing with VO range (300–3000 Hz).
- **At scene transitions (the 18-frame fade between paragraphs), bed swells to 0.32 (≈ -10 dB)**, then ducks back as the next paragraph's VO begins. This is the breath between paragraphs.
- **Optional `swellPath`**: a longer cinematic swell that plays only over the closing image (frames N → N+360) at 0.45. Ends with a 60-frame fade to silence over the end card.
- **Voiceover always reigns**: at frames where `<Audio>` for the VO is live, the bed never exceeds 0.18.

## Asset list for a typical episode

For one 14-minute essay (`embers-14: "The friend you stopped calling"`):

- **B-roll (8–10 clips, each 60–180 seconds at 4K, slow handheld or tripod)**:
  1. A landline-era photograph in a drawer, hand closing the drawer.
  2. A Sunday afternoon kitchen, kettle steam against window light.
  3. A phone face-down on a wool blanket.
  4. Two mugs on a table, one untouched.
  5. A walk in late-autumn light, the back of a sweater (no face).
  6. A handwritten letter on paper, fountain pen in frame.
  7. A wide of an empty park bench.
  8. A door being slowly opened from inside, soft light spilling.
  9. (optional) A candle being trimmed.
  10. (optional) Hands knitting.
- **Stills (1–2)**: a single archival-style photograph (with rights cleared) and a paper-textured quote card.
- **Voiceover**: one founder/Keeper narration track, recorded in a treated room, exported per-paragraph to `public/audio/voiceover/embers-14/p1.mp3` … `p7.mp3` plus `cold-open.mp3` and `closing.mp3`.
- **Ambient music**: one continuous bed track at `public/audio/music/embers-14-bed.mp3` (~16 minutes, looping not required if it's full-length). One optional swell track for the closing image.
- **Captions**: one JSON per VO segment in `public/captions/embers-14/`.
- **End-card assets**: `public/images/endcard-paper.png` (cream paper texture), the Hearth wordmark SVG, the QR code SVG to `dearhearth.com/letter`.

## Render specs

```bash
# Local render — long-form should be rendered locally, not on Lambda
# (Lambda's half-disk cap and 200-function-per-render limit make 14-min videos painful)
npx remotion render src/index.ts LongEssay out/embers-14.mp4 \
  --codec=h264 \
  --crf=16 \
  --fps=30 \
  --video-bitrate=8M \
  --audio-bitrate=192k \
  --audio-codec=aac \
  --pixel-format=yuv420p \
  --props=./props/embers-14.json \
  --concurrency=8
```

**Render specs (high-quality YouTube preset)**:
- 1920 × 1080
- 30 fps
- H.264, CRF 16, video bitrate 8000 kbps
- AAC audio at 192 kbps stereo, 48 kHz
- yuv420p pixel format (YouTube ingests cleanly)
- Render locally; expect ~25–45 minutes on an M3-class machine for a 14-minute essay
- For batch re-renders across multiple episodes, use the SSR API (`bundle()` + `renderMedia()` loop) and bundle once

## Acceptance criteria

- Final file is 1920×1080, H.264, 30fps, between 8 and 18 minutes, with the structure: intro (7s) → cold-open (~13s) → 5–7 scene-paragraphs (60–120s each) → closing image (~12s) → end card (~15s).
- The intro is the unmodified `<LongIntroSequence>` from file 06, rendered as a `<Sequence>` from frame 0 to 210.
- Captions are burned in for 100% of voiceover, in Inter Tight 500 phrase chunks, never colliding with the wordmark or pull-quotes.
- The music bed never exceeds -14 dB under VO peaks; it swells only at scene transitions and over the closing image.
- The same composition renders any episode by changing only the `--props` JSON file. No code changes between episodes.
- The end card holds for at least 12 seconds and shows: "Subscribe for the next letter." + the wordmark + a QR code or URL `dearhearth.com/letter`. No flashy animation.
- The 7-second test passes: at frame 210 the viewer has seen the intro and is now hearing the cold-open's first sentence on a single, specific image.
- Determinism holds — the same `props.json` produces byte-identical MP4s across runs.

## Failure modes to avoid

- **A "Hey friends, in today's video..." cold open.** Kills retention 30 seconds in. The cold open is one specific sentence on one specific image, with the music bed at full presence.
- **Visual montages within a scene-paragraph.** One image OR one piece of b-roll per scene. The pacing is the brand.
- **End-card stingers, swooshes, or animated subscribe buttons.** Hearth is not MrBeast. The end card is paper, a wordmark, an invitation.
- **Hard-coded essay text inside the React tree.** All text, asset paths, and durations flow through `props.ts`. If you find yourself editing JSX to ship a new episode, the abstraction is wrong.
- **Music with melody competing with the VO range.** Bed must be sparse, drone-or-piano, no vocals, no rhythmic hook.
- **Caption styling drift.** Same Inter Tight 500 phrase pill across every episode; no episode-specific caption skins.
- **Rendering on Lambda.** The 14-minute output exceeds the half-disk cap at default settings and chunking is fragile. Render locally; Lambda is for short-form only.
- **Skipping the LongIntroSequence to "save time."** The opener IS the brand. Every long-form video gets it. No exceptions.
