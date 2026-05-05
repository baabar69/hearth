# Remotion Capabilities for Hearth

A practical reference for building Hearth marketing videos in a separate Remotion codebase. Sourced from the official Remotion documentation (remotion.dev) and the `@remotion/*` package docs. Verified, not invented.

---

## 1. Quick intro: what Remotion is

Remotion is a framework for creating real videos programmatically using React. The mental model is unusually clean: a video is a pure function of frames over time. You define a React component, Remotion calls it once per frame with a frame number, and the output of all those frames is stitched into an MP4 (or WebM, GIF, ProRes, image sequence, audio file, etc.) by a headless Chromium renderer.

Because everything is deterministic — no `setTimeout`, no animation loops, no live state — you can re-run a render and get pixel-identical output. This makes Remotion ideal for templated, data-driven video: change a prop, get a new video.

You write videos using ordinary React. CSS, SVG, Canvas, WebGL, HTML video, HTML audio, third-party React libraries, even Tailwind, all work. You preview compositions interactively in Remotion Studio (a hot-reloading dev UI), then render either locally via the CLI / SSR API, or at scale via Remotion Lambda (AWS) or Cloud Run (GCP). For Hearth — peer-support, slow brand voice, many short reels — Remotion lets us build a small library of branded video templates and re-render them at scale with new copy, voiceovers, and member-facing data.

---

## 2. Project structure

A typical Remotion project (created via `npx create-video@latest`) looks like this:

```
my-video/
  package.json
  remotion.config.ts        # Config: codec, image format, Chromium flags, etc.
  tsconfig.json
  public/                   # Static assets fetched via staticFile('foo.png')
    fonts/
    images/
    audio/
  src/
    index.ts                # Entry point; calls registerRoot(Root)
    Root.tsx                # Lists all <Composition> components
    Composition.tsx         # An example video component
    components/             # Reusable React components
```

### `src/index.ts` — entry

```ts
import { registerRoot } from "remotion";
import { Root } from "./Root";
registerRoot(Root);
```

### `src/Root.tsx` — composition registry

```tsx
import { Composition, Folder } from "remotion";
import { ReelOpening } from "./videos/ReelOpening";

export const Root: React.FC = () => (
  <Folder name="Reels">
    <Composition
      id="ReelOpening"
      component={ReelOpening}
      durationInFrames={300}
      fps={30}
      width={1080}
      height={1920}
      defaultProps={{ headline: "Pull up a chair." }}
    />
  </Folder>
);
```

### `package.json` scripts

```json
{
  "scripts": {
    "dev": "remotion studio",
    "build": "remotion render",
    "render": "remotion render",
    "lambda:deploy": "remotion lambda functions deploy",
    "lambda:site": "remotion lambda sites create",
    "lambda:render": "remotion lambda render"
  }
}
```

### Render commands

```bash
npx remotion studio                                              # open dev UI
npx remotion render src/index.ts ReelOpening out/reel.mp4
npx remotion render src/index.ts ReelOpening out/reel.mp4 \
  --props='{"headline":"You weren'\''t meant to carry it alone."}'
npx remotion still src/index.ts ReelOpening out/poster.png --frame=30
npx remotion render ReelOpening out/reel.mp4 --codec=h264 --crf=18 --frames=0-150
```

Node 16+ or Bun 1.0.3+ is required. Remotion ships its own Chromium build (no manual install).

---

## 3. Core API summary

| Symbol | Package | What it does |
| --- | --- | --- |
| `<Composition>` | `remotion` | Registers a renderable video (id, fps, width, height, durationInFrames, component, defaultProps). |
| `<Folder>` | `remotion` | Groups compositions in the Studio sidebar. |
| `registerRoot()` | `remotion` | Registers the root component in `index.ts`. Called exactly once. |
| `<AbsoluteFill>` | `remotion` | A `position: absolute; inset: 0` div. The standard full-bleed layout primitive. |
| `<Sequence>` | `remotion` | Time-shifts children. `from` sets start frame, `durationInFrames` sets length. Children's `useCurrentFrame()` becomes relative to the sequence. |
| `<Series>` / `<Series.Sequence>` | `remotion` | Sequences children back-to-back automatically (no manual `from` math). |
| `<Loop>` | `remotion` | Loops children every N frames. |
| `<Freeze>` | `remotion` | Freezes children at a specific frame. |
| `<Img>` | `remotion` | Like `<img>` but participates in `delayRender` so renders wait for image load. |
| `<Audio>` | `remotion` (and `@remotion/media`) | Audio track with `volume`, `startFrom`, `endAt`, `playbackRate`, `loop`. `volume` can be a function of frame for fades. |
| `<Video>` / `<OffthreadVideo>` | `remotion` | Embeds video. `OffthreadVideo` is preferred for renders — extracts frames out-of-process for accuracy. |
| `<Html5Video>` / `<Html5Audio>` | `remotion` | Plain HTML media elements; useful in the Player but not for offline render frame-accuracy. |
| `useCurrentFrame()` | `remotion` | Returns current frame (relative to nearest `<Sequence>`). The heart of all animation. |
| `useVideoConfig()` | `remotion` | Returns `{ fps, width, height, durationInFrames }`. |
| `interpolate(input, [in1,in2], [out1,out2], opts)` | `remotion` | Maps a value linearly between ranges. Supports `easing`, `extrapolateLeft`, `extrapolateRight` ("clamp" \| "extend" \| "identity"). |
| `spring({ frame, fps, config, durationInFrames, delay, from, to })` | `remotion` | Physics-based animation primitive. Returns a value (default 0→1). |
| `Easing.bezier(...)` | `remotion` | Bezier easing function for `interpolate`. Also `Easing.in/out/inOut/ease/...`. |
| `staticFile(path)` | `remotion` | Resolves to a `public/` URL. Use for all local assets. |
| `delayRender()` / `continueRender()` / `cancelRender()` | `remotion` | Pause rendering until async work (fetch, image, font) finishes. |
| `<TransitionSeries>` + presets | `@remotion/transitions` | Cross-scene transitions: `fade`, `slide`, `wipe`, `flip`, `clockWipe`, `iris`. Timings: `linearTiming`, `springTiming`. |
| `loadFont()` | `@remotion/google-fonts/<FontName>` | Type-safe Google font loader; render is blocked until font is ready. |
| `<Lottie>` | `@remotion/lottie` | Renders a Lottie JSON animation. |
| `useAudioData`, `visualizeAudio`, `visualizeAudioWaveform` | `@remotion/media-utils` | Audio analysis for waveform/visualizer videos. |
| `parseSrt`, `createTikTokStyleCaptions` | `@remotion/captions` | Parse SRT and group word-level captions into pages. |
| `openAiWhisperApiToCaptions` | `@remotion/openai-whisper` | Convert Whisper API output to caption objects. |
| `elevenLabsTranscriptToCaptions` | `@remotion/elevenlabs` | Convert ElevenLabs STT to caption objects. |
| `<Player>` | `@remotion/player` | Embed a Remotion video in any React app (no build step). |
| `bundle()`, `selectComposition()`, `renderMedia()`, `renderStill()` | `@remotion/bundler` + `@remotion/renderer` | Programmatic / SSR render API. |
| `deployFunction()`, `deploySite()`, `renderMediaOnLambda()`, `getRenderProgress()` | `@remotion/lambda` (and `/client`) | Serverless rendering on AWS Lambda. |

---

## 4. Animation patterns

The five patterns that cover ~90% of motion work.

### 4.1 Fade in with `interpolate`

```tsx
const frame = useCurrentFrame();
const opacity = interpolate(frame, [0, 20], [0, 1], {
  extrapolateRight: "clamp",
});
return <div style={{ opacity }}>Pull up a chair.</div>;
```

### 4.2 Spring entrance (the "natural" feel)

```tsx
const frame = useCurrentFrame();
const { fps } = useVideoConfig();
const scale = spring({
  frame,
  fps,
  config: { damping: 12, stiffness: 100 },
  durationInFrames: 30,
});
return <div style={{ transform: `scale(${scale})` }}>{children}</div>;
```

### 4.3 Enter + exit (combine two springs)

```tsx
const frame = useCurrentFrame();
const { fps, durationInFrames } = useVideoConfig();
const enter = spring({ frame, fps, config: { damping: 200 } });
const exit = spring({
  frame,
  fps,
  config: { damping: 200 },
  durationInFrames: 20,
  delay: durationInFrames - 20,
});
const opacity = enter - exit;
```

### 4.4 Staggered children (each child starts later than the last)

```tsx
const STAGGER = 6; // frames between each child's entrance
items.map((item, i) => {
  const local = frame - i * STAGGER;
  const opacity = interpolate(local, [0, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const y = interpolate(opacity, [0, 1], [24, 0]);
  return (
    <div style={{ opacity, transform: `translateY(${y}px)` }}>{item}</div>
  );
});
```

### 4.5 Scene chaining with `TransitionSeries`

```tsx
<TransitionSeries>
  <TransitionSeries.Sequence durationInFrames={90}>
    <SceneA />
  </TransitionSeries.Sequence>
  <TransitionSeries.Transition
    timing={springTiming({ config: { damping: 200 } })}
    presentation={fade()}
  />
  <TransitionSeries.Sequence durationInFrames={90}>
    <SceneB />
  </TransitionSeries.Sequence>
</TransitionSeries>
```

Bonus pattern — typewriter via slicing the string by frame:

```tsx
const visible = Math.floor(interpolate(frame, [0, 60], [0, text.length], {
  extrapolateRight: "clamp",
}));
return <span>{text.slice(0, visible)}</span>;
```

---

## 5. Brand-specific setup for Hearth

### 5.1 Composition presets

Register one composition per platform output. Use these dimensions exactly.

| Platform | Width × Height | FPS | Notes |
| --- | --- | --- | --- |
| Instagram Reel | 1080 × 1920 | 30 (60 for high-motion) | 9:16 vertical |
| TikTok | 1080 × 1920 | 30 | Same canvas as Reels |
| YouTube Shorts | 1080 × 1920 | 30 | Same canvas |
| YouTube long-form | 1920 × 1080 | 30 | 16:9 horizontal |
| LinkedIn (square) | 1080 × 1080 | 30 | 1:1 |
| LinkedIn (landscape) | 1920 × 1080 | 30 | 16:9 |
| Instagram carousel slide | 1080 × 1350 | 30 | 4:5 portrait; render as still PNGs via `npx remotion still` |

**FPS guidance.** Default to 30 fps. Use 60 fps only when motion is fast (whip pans, kinetic type) — Hearth's brand is warm and slow, so 30 will usually be correct. Lambda costs roughly double at 60 fps.

### 5.2 Font loading strategy

Fraunces, Inter Tight, and JetBrains Mono are all on Google Fonts. Use `@remotion/google-fonts` per font, load only the weights/subsets we use, and import once at the top of any composition file that needs them. Remotion blocks the render until fonts are ready, so no FOUT in output.

```ts
// src/lib/fonts.ts
import { loadFont as loadFraunces } from "@remotion/google-fonts/Fraunces";
import { loadFont as loadInterTight } from "@remotion/google-fonts/InterTight";
import { loadFont as loadJetBrainsMono } from "@remotion/google-fonts/JetBrainsMono";

export const fraunces = loadFraunces("normal", {
  weights: ["400", "500", "600"],
  subsets: ["latin"],
});
export const interTight = loadInterTight("normal", {
  weights: ["400", "500", "600"],
  subsets: ["latin"],
});
export const jetbrainsMono = loadJetBrainsMono("normal", {
  weights: ["400", "500"],
  subsets: ["latin"],
});

// usage
import { fraunces } from "../lib/fonts";
<h1 style={{ fontFamily: fraunces.fontFamily }}>Pull up a chair.</h1>;
```

Never call `loadFont()` with no args — Remotion 5 requires explicit weights/subsets and will otherwise throw or time out.

### 5.3 Color tokens

```ts
// src/lib/tokens.ts
export const colors = {
  paper: "#F2EDE5",
  paper2: "#EAE2D2",
  ink: "#0E0B08",
  ember: "#9C2A1A",
  emberDeep: "#6E1A0F",
  honey: "#E8A845",
  sage: "#4F5A45",
} as const;

export type ColorKey = keyof typeof colors;

export const surfaces = {
  defaultBg: colors.paper,
  defaultFg: colors.ink,
  accent: colors.ember,
  warmAccent: colors.honey,
  calm: colors.sage,
} as const;

export const type = {
  display: { fontFamily: "Fraunces", letterSpacing: "-0.02em" },
  body: { fontFamily: "InterTight", letterSpacing: "-0.005em" },
  mono: { fontFamily: "JetBrainsMono", letterSpacing: "0" },
} as const;
```

### 5.4 Suggested folder structure

```
hearth-remotion/
  remotion.config.ts
  package.json
  public/
    fonts/                       # rarely needed — Google Fonts package handles it
    images/                      # member portraits (with consent), product shots
    audio/
      music/                     # cleared background beds
      voiceover/
        <video-id>/<scene>.mp3   # generated VO files
    captions/
      <video-id>.srt
  src/
    index.ts
    Root.tsx                     # imports every video, registers all compositions
    lib/
      fonts.ts
      tokens.ts                  # colors, type, easing curves, scene durations
      easings.ts
      utils.ts
    components/                  # cross-video atoms
      Headline.tsx
      Quote.tsx
      KeeperCard.tsx
      EmberWordmark.tsx
      Captions.tsx
      BgPaper.tsx                # paper-cream background w/ subtle grain
    scenes/                      # reusable scene-level components
      OpeningCard.tsx
      QuoteScene.tsx
      KeeperBio.tsx
      ClosingCTA.tsx
    videos/
      reels/
        ReelInvitation/
          index.tsx              # the <Composition> body
          props.ts               # zod schema + defaults
          README.md
        ReelKeeper/
          ...
      shorts/
      longform/
      carousels/
  scripts/
    render-all.ts                # batch-render via SSR API
    render-lambda.ts             # batch via Lambda
    generate-voiceover.ts        # ElevenLabs pipeline
    generate-captions.ts         # Whisper pipeline
```

Use `<Folder>` in `Root.tsx` to mirror this structure in the Studio sidebar (Reels, Shorts, Long-form, Carousels).

---

## 6. Asset pipeline

### 6.1 Images

- Place in `public/images/` and reference via `staticFile("images/foo.jpg")`.
- Use `<Img>` (not raw `<img>`) so renders wait for load.
- For remote images, wrap in `delayRender`/`continueRender` or pre-download in a build step.

### 6.2 Voiceover

Generate VO offline (don't fetch in-render) and check the MP3 into `public/audio/voiceover/<video-id>/<scene>.mp3`. ElevenLabs is supported first-class.

```ts
// scripts/generate-voiceover.ts (sketch)
const res = await fetch(
  `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
  {
    method: "POST",
    headers: {
      "xi-api-key": process.env.ELEVENLABS_API_KEY!,
      "Content-Type": "application/json",
      Accept: "audio/mpeg",
    },
    body: JSON.stringify({
      text,
      model_id: "eleven_multilingual_v2",
      voice_settings: { stability: 0.55, similarity_boost: 0.75, style: 0.25 },
    }),
  },
);
writeFileSync(`public/audio/voiceover/${id}/${scene}.mp3`, Buffer.from(await res.arrayBuffer()));
```

In a composition:

```tsx
<Audio src={staticFile(`audio/voiceover/${id}/scene-1.mp3`)} volume={1} />
```

### 6.3 Background music

```tsx
<Audio
  src={staticFile("audio/music/warm-bed.mp3")}
  volume={(f) => interpolate(f, [0, 30, durationInFrames - 30, durationInFrames], [0, 0.18, 0.18, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}
  loop
/>
```

Keep music ducked to ~0.15–0.25 under voiceover. Hearth's tone calls for sparse, slow beds (Sage's Marconi Union / Hammock territory), not energetic loops.

### 6.4 Captions

Generate captions from the VO file with Whisper (or ElevenLabs STT), then either save as SRT in `public/captions/<id>.srt` or as a JSON `Caption[]` and load with `parseSrt` / `createTikTokStyleCaptions`.

```ts
// scripts/generate-captions.ts (sketch)
const transcription = await openai.audio.transcriptions.create({
  file: fs.createReadStream(voPath),
  model: "whisper-1",
  response_format: "verbose_json",
  timestamp_granularities: ["word"],
});
const { captions } = openAiWhisperApiToCaptions({ transcription });
fs.writeFileSync(`public/captions/${id}.json`, JSON.stringify(captions));
```

Render captions with `createTikTokStyleCaptions` + per-token highlight (sample in `@remotion/captions` docs). Hearth caption styling: Inter Tight 600, ink on paper, no neon highlight — use ember (#9C2A1A) for the active token, ink for the rest, on a soft paper-2 (#EAE2D2) pill.

### 6.5 Lottie / vector

Place JSON in `public/lottie/` and load via `<Lottie animationData={...} />`. Use `delayRender` if fetching at runtime.

---

## 7. Rendering at scale

### 7.1 Local render (dev, one-offs, long-form)

CLI for ad-hoc:

```bash
npx remotion render src/index.ts ReelInvitation out/r1.mp4 --codec=h264 --crf=18
```

Programmatic for batches (data-driven videos — e.g., 50 Keeper bios from a CSV):

```ts
import { bundle } from "@remotion/bundler";
import { renderMedia, selectComposition } from "@remotion/renderer";
import path from "node:path";

const bundleLocation = await bundle({ entryPoint: path.resolve("./src/index.ts") });

for (const row of rows) {
  const composition = await selectComposition({
    serveUrl: bundleLocation,
    id: "KeeperBio",
    inputProps: row,
  });
  await renderMedia({
    composition,
    serveUrl: bundleLocation,
    codec: "h264",
    outputLocation: `out/keeper-${row.slug}.mp4`,
    inputProps: row,
    onProgress: ({ progress }) => process.stdout.write(`\r${(progress * 100).toFixed(1)}%`),
  });
}
```

Bundle once, render many — that's the key.

### 7.2 Lambda (production, parallel, web-triggered)

One-time setup:

```bash
npx remotion lambda functions deploy --memory=3009 --disk=10240 --timeout=900
npx remotion lambda sites create src/index.ts --site-name=hearth-videos
```

Trigger a render (from a Next.js / API route in the Hearth app):

```ts
import { renderMediaOnLambda, getRenderProgress } from "@remotion/lambda/client";

const { renderId, bucketName } = await renderMediaOnLambda({
  region: "us-east-1",
  functionName: "remotion-render-xxxxxx",
  serveUrl: "https://remotionlambda-xxx.s3.us-east-1.amazonaws.com/sites/hearth-videos/index.html",
  composition: "ReelInvitation",
  codec: "h264",
  inputProps: { headline: "Pull up a chair." },
  privacy: "public",
  concurrency: 30, // up to 200; trade off speed vs cost
  webhook: { url: "https://hearth.example.com/api/remotion-webhook", secret: process.env.WH_SECRET! },
});
```

Best practices:

- **Memory**: 2048–3009 MB. 3009 MB gives 3 vCPU per Lambda, the sweet spot for Remotion.
- **Disk**: bump to 10 GB if videos exceed ~30s; max output file ≈ half of disk.
- **Concurrency**: use `concurrency` (v4.0.322+) instead of `framesPerLambda`. 30–60 is a fine default for a 30s reel.
- **AV1 is not available on Lambda** — use H.264 for distribution, ProRes only via local renders.
- **Keep one site per environment** (staging/prod). Re-deploy with `sites create --site-name=hearth-videos` each time the Remotion code changes.
- **Cost**: under a cent for short reels at standard memory; use `estimatePrice()` to budget.

### 7.3 When to use which

| Need | Use |
| --- | --- |
| Designing a template | Studio (`npx remotion studio`) |
| Hand-crafted hero video | CLI render locally |
| Batch render N variations from a sheet | SSR API (`bundle` + `renderMedia` loop) |
| User-triggered render in the Hearth app | Lambda + webhook |
| Live preview in the Hearth marketing site | `<Player>` |

---

## 8. Limitations and gotchas

- **Determinism is mandatory.** No `setTimeout`, `setInterval`, `Math.random()` (without seeding), `Date.now()`, websockets, or anything time-based outside `useCurrentFrame()`. Renders must be a pure function of frame.
- **No CSS animations / transitions / keyframes.** They don't sync to frame-stepping. Drive everything from `frame` via `interpolate`/`spring`.
- **Async data must use `delayRender`/`continueRender`** or be pre-fetched into props at composition selection time. Forgetting this produces blank/early frames.
- **Use `<Img>` not `<img>`** so the renderer waits for load. Same for fonts (use `@remotion/google-fonts` or `delayRender` around `document.fonts.ready`).
- **Use `<OffthreadVideo>` for renders, `<Video>` only for the Player.** OffthreadVideo extracts frames in a separate process — avoids HTML video sync drift.
- **No native `loop` on `<OffthreadVideo>`.** Wrap in `<Loop>` with a known duration (use `@remotion/media-utils` `getMediaMetadata`).
- **WebGL/Three.js needs a `--gl` flag.** Use `--gl=angle` locally, `swangle` on Lambda. Pure CSS/SVG videos don't.
- **Lambda has a hard 200-function-per-render cap and ~half-disk file-size cap.** Long-form (>5 min) is better rendered locally or in chunks.
- **AV1 not available on Lambda or Linux ARM64**. Stick to H.264 for distribution.
- **Tabs going background can throttle preview** in older browsers; the Studio uses a Web Worker fallback but be aware in custom `<Player>` deployments.
- **Frame numbering**: first frame is `0`, last is `durationInFrames - 1`. Off-by-one bugs at scene boundaries are the most common mistake.
- **`useCurrentFrame()` inside a `<Sequence>` is relative to that sequence's start**, not the composition. This is a feature, not a bug — but it's surprising the first time.
- **Hot reload doesn't restore play position reliably** when component shapes change drastically. If you're seeing weird state, restart Studio.
- **Remotion is not a video editor.** Trimming an existing clip is fine; doing a full Premiere-style timeline UI is out of scope (use `@remotion/timeline` if you really need it, but for Hearth the answer is "design templates, render, post").

---

## 9. Starter prompt template

Paste this header at the top of every prompt that asks an LLM to generate a Hearth Remotion component, in any future codebase. It carries every piece of brand and technical context the model needs.

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
- Platform: <fill: IG Reel / TikTok / YouTube Short / YouTube long / LinkedIn>
- Dimensions: <fill from §5.1>
- FPS: <fill — default 30>
- Duration: <fill — frames>
- Audio: <fill — voiceover path / music bed / silent>

DELIVERABLE
A single TSX file exporting the composition component, plus a sibling
`props.ts` exporting the zod schema and default props, ready to register
in `src/Root.tsx` under the appropriate <Folder>.
```

---

## Sources

All facts above are drawn from the Remotion docs (`remotion.dev/docs`) and the `@remotion/*` package references on the official site, retrieved via Context7's `/remotion-dev/remotion` documentation index. Notable doc paths referenced:

- `/docs/the-fundamentals`, `/docs/register-root`, `/docs/composition`
- `/docs/sequence`, `/docs/use-current-frame`, `/docs/use-video-config`
- `/docs/interpolate`, `/docs/spring`, `/docs/easing`
- `/docs/transitions/transitionseries`
- `/docs/lottie/*`, `/docs/fonts`, `/docs/google-fonts`
- `/docs/media/audio`, `/docs/use-audio-data`, `/docs/audio/visualization`
- `/docs/captions/*`, `/docs/openai-whisper/*`, `/docs/elevenlabs/*`
- `/docs/cli/*`, `/docs/config`, `/docs/ssr-node`, `/docs/dataset-render`
- `/docs/lambda/*` (deployfunction, rendermediaonlambda, checklist, disk-size, estimateprice)
- `/docs/player/*`, `/docs/shaders`, `/docs/open-gl`, `/docs/chromium-flags`
