# IG Carousel Essay — "The Call That Ruins Your Sunday" (8 slides)

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
- Platform: Instagram Carousel (4:5 portrait)
- Dimensions: 1080 x 1350 per slide
- FPS: 30
- Duration: per-slide stills + one optional 480-frame (16s) "pause-on-each-slide" video
- Audio: silent for stills; optional soft instrumental loop on the video variant

DELIVERABLE
Two outputs from one Remotion project:
  (a) eight 1080x1350 PNG stills, one per slide (the canonical IG upload)
  (b) one 1080x1350 16s MP4 that pauses 2s on each slide with subtle micro-motion (Reels-style "carousel video" upload)
A single TSX file per slide composition + a `CarouselSundayCall` parent
composition for the video variant + a sibling `props.ts` per slide and one
shared zod schema for the parent. All registered in `src/Root.tsx` under
`<Folder name="Carousels">`.
```

---

## 1. Concept brief

The week's cornerstone carousel — the literary essay format. 8 slides. Paced like a chapbook, not an infographic. Designed for **save rate** and **completion** (re-shown to incomplete viewers under 2026 algorithm rules).

- **Atom**: "The Call That Ruins Your Sunday" — Hearth Letter 2026-04-W18.
- **Audience**: the eldest daughter / the family's emotional infrastructure.
- **Truth carried**: the call is not the problem; the aftermath is. You are allowed to grieve the rest of the Sunday before you make dinner.
- **Plank**: *Slow.*
- **Save trigger**: slide 1 is named ("Things nobody tells you about being the one who picks up"). Slide 8 is a soft CTA ("Save this for the night you'll need it").

## 2. Slide-by-slide content

Each slide carries: an **eyebrow** (mono, sage, uppercase), a **headline** (Fraunces), and **one line of body** (Inter Tight). No bullets. No numbered tips.

### Slide 1 — Cover
- **Eyebrow**: `letter no. 18 — sunday, april 2026`
- **Headline**: *Things nobody tells you about being the one who picks up.*
- **Body**: (none — cover slide)
- **Background**: `colors.paper`
- **Accent**: small ember rule (1px × 64px) above the eyebrow

### Slide 2
- **Eyebrow**: `the moment`
- **Headline**: *The call comes around four.*
- **Body**: You see the name and the rest of the Sunday rearranges itself around someone else's storm.

### Slide 3
- **Eyebrow**: `the cost`
- **Headline**: *By the time you hang up, the light has changed in the kitchen.*
- **Body**: Dinner is still ahead of you. So is the question of who will ask if you are okay.

### Slide 4 — pivot (paper-2 background)
- **Eyebrow**: `the sentence`
- **Headline**: *I have been carrying this since I was nine.*
- **Body**: It is not a personality trait. It is a debt the people around you forgot to repay.
- **Background**: `colors.paper2` — visual pivot mid-essay

### Slide 5
- **Eyebrow**: `permission`
- **Headline**: *You don't have to fix the call.*
- **Body**: You don't have to rush back to the room either.

### Slide 6
- **Eyebrow**: `the ritual`
- **Headline**: *Set the kettle on. Sit at the table.*
- **Body**: Four minutes is a length of time you are allowed to spend on yourself.

### Slide 7 — ember accent slide
- **Eyebrow**: `the truth`
- **Headline**: *The ones who love you would rather you arrive on Monday tired and whole than on Sunday composed and gone.*
- **Body**: (none — let the line breathe)
- **Background**: `colors.paper`
- **Accent**: headline rendered in `colors.ember`

### Slide 8 — CTA
- **Eyebrow**: `hearth`
- **Headline**: *Pull up a chair.*
- **Body**: Save this for the next Sunday it rings. Or send it to the friend who never says she's tired.
- **Background**: `colors.paper2`
- **Wordmark**: `hearth` in Fraunces 500 ember, mono `peer support · not therapy` below
- **Soft link**: `dearhearth.com/letter` in JetBrains Mono 400, sage

## 3. Typography specs (per slide)

| Element | Font | Weight | Size | Color | Letter-spacing |
|---|---|---|---|---|---|
| Eyebrow (all slides) | JetBrains Mono | 500 | 26px | `colors.sage` | 0.18em, uppercase |
| Cover headline (slide 1) | Fraunces | 500 | 88px | `colors.ink` | -0.02em, line-height 1.05 |
| Body headlines (slides 2–6, 8) | Fraunces | 400 | 76px | `colors.ink` | -0.02em, line-height 1.08 |
| Slide 7 headline (ember) | Fraunces | 500 | 64px | `colors.ember` | -0.02em, line-height 1.12 |
| Body line | Inter Tight | 500 | 32px | `colors.ink` (80% alpha) | -0.005em, line-height 1.35 |
| Wordmark (slide 8) | Fraunces | 500 | 96px | `colors.ember` | -0.02em |
| Soft link / mono caption | JetBrains Mono | 400 | 22px | `colors.sage` | 0.04em |

Layout: 80px outer padding. Eyebrow at y=140. Headline vertically centred at y=620. Body at y=1080. Slide number indicator (e.g. `02 / 08`) bottom-right in mono 20px sage on slides 2–7.

## 4. Color usage

- **`colors.paper` (#F2EDE5)** — slides 1, 2, 3, 5, 6, 7. The default canvas.
- **`colors.paper2` (#EAE2D2)** — slides 4 and 8. Visual pivot points: midway and end. The eye registers two background shifts across the carousel, which IG's dwell-time signal rewards.
- **`colors.ember` (#9C2A1A)** — accent only: the rule on slide 1, the headline on slide 7, the wordmark on slide 8. Never as a background. Never as the body line color.
- **`colors.sage` (#4F5A45)** — eyebrows and meta only. Quiet authority colour.
- **`colors.honey` and `colors.emberDeep`** — not used in this carousel.
- **No gradients.** No drop shadows. No outlines. No imagery. Type on paper, full stop.

## 5. Render specs

### 5a. Eight 1080×1350 PNG stills (canonical upload)

Register one composition per slide: `CarouselSundayCallSlide01` … `CarouselSundayCallSlide08`. Each is a static frame; render via `npx remotion still`.

```bash
for i in 01 02 03 04 05 06 07 08; do
  npx remotion still src/index.ts CarouselSundayCallSlide$i \
    out/carousels/2026-04-sunday-call/slide-$i.png \
    --frame=0
done
```

Each composition is `<AbsoluteFill>`-based, full bleed, 1080×1350, single-frame durationInFrames=1, fps=30. No animation needed for the still version — but include the entrance animation logic gated behind a `motion` prop so the same component drives both outputs.

### 5b. One 16-second 1080×1350 video (alternate upload)

Register parent composition `CarouselSundayCallVideo`: 480 frames @ 30fps. Use `<Series>` of 8 `<Series.Sequence>` blocks, each 60 frames (2s). Each sequence renders the matching slide component with `motion={true}`.

```bash
npx remotion render src/index.ts CarouselSundayCallVideo \
  out/carousels/2026-04-sunday-call/video.mp4 \
  --codec=h264 --crf=18 --pixel-format=yuv420p
```

### 5c. Micro-motion specs (video variant only)

- **Entrance per slide**: eyebrow fades in frames 0–10, headline fades in frames 8–24 with `translateY(8px → 0)`, body fades in frames 18–34. All via `interpolate` with clamp.
- **Per-slide drift**: the headline group drifts vertically 0 → -4px across the 60-frame sequence. Almost imperceptible. No scale, no rotation.
- **Inter-slide transition**: 6-frame crossfade implemented as opacity overlap between adjacent `<Series.Sequence>` blocks (use `<TransitionSeries>` with `fade()` and `linearTiming({ durationInFrames: 6 })` if simpler).
- **Audio (video variant)**: optional soft solo piano loop at -22 dB. Save `public/audio/music/carousel-bed.mp3`. Volume `interpolate(frame, [0, 30, 450, 480], [0, 0.10, 0.10, 0])`. Skip audio if uploading as a Reel-style carousel where IG strips it anyway.

## 6. Cover slide design (slide 1) vs. ending CTA slide design (slide 8)

**Slide 1 (cover) — must work as a 1:1 thumbnail in the IG grid.**
- Background `colors.paper`.
- Centred composition. Eyebrow at y=140. Ember rule (1px × 64px) at y=110. Headline starts at y=520 — slightly above optical centre so it survives the IG grid crop to 1:1 (which lops the bottom).
- Headline is the hook: *"Things nobody tells you about being the one who picks up."* Fraunces 500, 88px, `colors.ink`. No body line. No wordmark. No slide indicator.
- The cover must read at thumbnail size — test by exporting at 320px wide; if the headline isn't legible, increase to 96px.

**Slide 8 (CTA) — earns the save, asks for the share.**
- Background `colors.paper2` for visual closure.
- Headline: *"Pull up a chair."* in Fraunces 500, 76px, `colors.ink`, centred at y=520.
- Body: *"Save this for the next Sunday it rings. Or send it to the friend who never says she's tired."* Inter Tight 500, 32px, two lines, max-width 920px.
- Wordmark cluster bottom-aligned at y=1140: `hearth` in Fraunces 500, 96px, `colors.ember`. Below: `peer support · not therapy` in JetBrains Mono 400, 22px, sage.
- Footer URL `dearhearth.com/letter` in mono 22px sage at y=1280.
- No "follow for more." No "double-tap if you needed this." The save and share are implicit in the body line.

## 7. Acceptance criteria checklist

- [ ] Eight slide compositions registered in `src/Root.tsx` under `<Folder name="Carousels">` (`CarouselSundayCallSlide01`–`CarouselSundayCallSlide08`).
- [ ] Parent video composition `CarouselSundayCallVideo` registered alongside, 1080×1350, 30fps, 480 frames.
- [ ] `props.ts` exports a shared zod schema `CarouselSlideSchema` covering `eyebrow`, `headline`, `body`, `background: "paper" | "paper2"`, `headlineColor: "ink" | "ember"`, `slideIndex`, `motion: boolean`.
- [ ] Eight PNG stills rendered at 1080×1350; each opens cleanly in Preview / Photos.
- [ ] Slide 1 thumbnail-tests legible at 320px wide.
- [ ] Backgrounds match §4 (paper for 1/2/3/5/6/7; paper2 for 4/8).
- [ ] Slide 7 headline rendered in `colors.ember`; all other headlines in `colors.ink`.
- [ ] Eyebrows in JetBrains Mono 500 26px sage uppercase on every slide.
- [ ] Body line uses Inter Tight 500 32px ink at 80% alpha.
- [ ] Slide indicator `02/08`–`07/08` appears bottom-right on slides 2–7 only.
- [ ] Video variant: each slide holds 60 frames; transitions are 6-frame fades only.
- [ ] No CSS keyframes, no `setTimeout`, no `Math.random` without seed, no remote fetches in render.

## 8. Failure modes to avoid

- **Infographic register.** No icons, no numbered tips, no checkmark bullets. This is a chapbook page.
- **Pop-psychology slide titles.** "5 signs you have CPTSD" gets flagged in 2026; "Things nobody tells you about being the one who picks up" earns saves.
- **Filling the canvas.** If type covers more than 50% of any slide's height, cut copy. Whitespace is the design.
- **Two accent colours on one slide.** One slide, one accent move max.
- **Drop shadows / outlines / gradients.** All banned. Type on paper, full stop.
- **Stock illustration.** No floral wreaths, no silhouettes. Pure typography.
- **Wrong aspect ratio.** 4:5 (1080×1350) is mandatory; 1:1 falls out of the algorithm's preferred range; landscape kills carousels.
- **Cover slide that's a title card.** It must be a hook, not a label. "Carousel #18: A letter" is a label; "Things nobody tells you about being the one who picks up" is a hook.
- **CTA-heavy ending.** "Follow @dearhearth.com for more letters like this" reads as ad. The save and the wordmark do the work.
- **Therapy-influencer drift.** No "your nervous system," no "trauma response," no "self-care Sunday." Specific images > abstract feelings, every time.
