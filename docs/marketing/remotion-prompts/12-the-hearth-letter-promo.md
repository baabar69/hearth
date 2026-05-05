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
- Platform: Instagram Reels (vertical) + LinkedIn cross-post (landscape)
- Dimensions: 1080 x 1920 for Reels; 1920 x 1080 for LinkedIn (same source)
- FPS: 30
- Duration: 900 frames (30s)
- Audio: founder or Keeper voiceover (calm, female register preferred), no music bed,
  optional sub-audible room tone at -32dB

DELIVERABLE
A single composition `LetterPromo` accepting an `aspect: "vertical" | "landscape"`
prop. The composition reflows by aspect at the layout level (not by scaling) —
type sizes, image crops, and motion paths recompute from `useVideoConfig()`.
Plus `props.ts`. Register both aspect variants in `Root.tsx` under
<Folder name="LetterPromo">.
```

---

## Concept brief

The Hearth Letter is the **top-of-funnel permission asset** — a free Sunday letter, 800–1,200 words, sent every week. Hearth's funnel does not run a free trial of the membership; the Letter is the trial. This 30-second video promotes it.

The voice constraint here is the strictest of the four prompts. The Letter is **not a lead magnet** — it is an invitation to a slow ritual. So the video must NOT sound like a sales pitch. No "subscribe now," no "join 5,000 readers," no urgency, no exclamation marks. The register is closer to a literary publisher's quiet trailer than a marketing reel. If the script reads like a newsletter ad, throw it out.

The visual logic is editorial: a hand-typed page, an envelope, a single line of ink fading in. No faces. No founder talking head — that's the LinkedIn founder video's job. This piece is about **the artifact** of the Letter itself.

---

## Sample 30-second script (~80 words)

> Every Sunday, a slow letter from a Keeper.
>
> Eight hundred words. One true thing.
>
> Sometimes it's about the friend you stopped calling. Sometimes the long weight of being the one who carries it.
>
> No advice. No five-step framework.
>
> Your inbox holds enough of the noisy. This is the quiet part.
>
> The Hearth Letter. Free, every Sunday.
>
> Pull up a chair.

The cadence is short clauses, ending sentences before they expect to end. White space is built into the writing.

---

## Scene structure

Six scenes, chained via `<TransitionSeries>` with slow fades (24-frame `fade()` transitions, `springTiming({ damping: 200 })`).

| # | Frames | Duration | Visual | Spoken (~) |
|---|---|---|---|---|
| 1 | 0–120 | 4s | **Still:** a hand-typed page on cream paper, slightly off-axis. Tiny ember tick in the upper-right. Single Fraunces 500 line fades in centered: *"Every Sunday."* | (silent first 1.5s, then VO begins) |
| 2 | 120–240 | 4s | Cross-fade to a still of an envelope, addressed by hand. Kinetic title overlays in Fraunces 500 across two lines: *"a slow letter / from a Keeper."* | "Every Sunday, a slow letter from a Keeper." |
| 3 | 240–390 | 5s | Page-texture full-bleed. Two large stacked figures: `800` (Fraunces 600, 240pt, ink) and below in JetBrains Mono `WORDS · ONE TRUE THING`. The 800 typewriter-reveals digit by digit; the mono line fades in 12 frames after. | "Eight hundred words. One true thing." |
| 4 | 390–600 | 7s | Three Fraunces 400 italic lines stagger in (8-frame stagger), each preceded by a small ember dot: *"the friend you stopped calling," / "the long weight of being the strong one," / "the in-between years."* | "Sometimes it's about the friend you stopped calling. Sometimes the long weight of being the one who carries it." |
| 5 | 600–750 | 5s | Paper, full bleed. Two Fraunces 500 lines: *"No advice. / No five-step framework."* Each fades in alone; the prior fades to 30% as the next arrives. | "No advice. No five-step framework." |
| 6 | 750–900 | 5s | **Closing URL card.** Paper. Fraunces 500, 96pt: *"Pull up a chair."* Below, Inter Tight 500, 36pt: *"The Hearth Letter — free, every Sunday."* Below, JetBrains Mono 28pt: `dearhearth.com/letter`. A 1px ember rule beneath the URL draws in over 12 frames. | "Your inbox holds enough of the noisy. This is the quiet part. The Hearth Letter. Free, every Sunday. Pull up a chair." |

Sound: the founder or a Keeper reads the script with a slow, settled cadence (think On Being audio essays). Generate via ElevenLabs (`stability: 0.6, similarity_boost: 0.75, style: 0.2`) or hand-record. **No music bed.** Optional sub-audible room tone at -32dB to keep the silence from feeling digital. Captions burned in (Inter Tight 600, ink on paper2 pill, anchored above safe area).

---

## Dual-aspect-ratio rendering strategy

We use **one composition that reads `aspect` from props** and reflows layout — not two compositions, not naive letterboxing.

```tsx
// LetterPromo.tsx
export const LetterPromo: React.FC<LetterPromoProps> = ({ aspect }) => {
  const { width, height } = useVideoConfig();
  const isVertical = aspect === "vertical";
  // type scales: same em-rhythm, different absolute sizes
  const headline = isVertical ? 96 : 120;
  const eyebrow = isVertical ? 22 : 26;
  // image crops: anchor on a chosen focal point, then crop to canvas
  const pageCrop = isVertical
    ? { focusX: 0.5, focusY: 0.5, fit: "cover" }
    : { focusX: 0.45, focusY: 0.55, fit: "cover" };
  // motion paths: kinetic type center-anchored vertically;
  // line spacing scales with height
  return <AbsoluteFill style={{ background: colors.paper }}>{/* scenes */}</AbsoluteFill>;
};
```

In `Root.tsx`, register two compositions that point to the same component with different defaults and dimensions:

```tsx
<Composition id="LetterPromoVertical" component={LetterPromo}
  width={1080} height={1920} fps={30} durationInFrames={900}
  defaultProps={{ aspect: "vertical" }} />
<Composition id="LetterPromoLandscape" component={LetterPromo}
  width={1920} height={1080} fps={30} durationInFrames={900}
  defaultProps={{ aspect: "landscape" }} />
```

This way the timeline (sequence boundaries, VO sync, caption frames) is **identical** across aspects — only layout differs. The audio file is one MP3 played in both. Captions are one JSON. Render both:

```bash
npx remotion render src/index.ts LetterPromoVertical out/letter-reel.mp4
npx remotion render src/index.ts LetterPromoLandscape out/letter-linkedin.mp4
```

The vertical export goes to Reels and Threads. The landscape export goes to the founder's LinkedIn (where 1920x1080 also covers the desktop feed crop better than 1:1 for this kind of editorial piece).

For captions: anchor the caption pill to **% of canvas height** (not absolute px). Vertical: 76% from top. Landscape: 82% from top. The pill width caps at `min(720, canvasWidth * 0.6)` so neither crop crowds the type.

---

## Render specs

- Codec: H.264, CRF 18, faststart, AAC 192 kbps mono.
- Vertical: 1080x1920, 30fps, 30s. File: `letter-promo-reel.mp4`.
- Landscape: 1920x1080, 30fps, 30s. File: `letter-promo-linkedin.mp4`.
- Both render from the same `LetterPromo` component; only `Composition` registration differs.
- Lambda: not necessary — render locally, the video is published once a month.

## Acceptance criteria

- [ ] Total duration is exactly 30s (900 frames at 30fps).
- [ ] No music. Optional room tone only at ≤-32dB.
- [ ] Voiceover is one continuous reading, not stitched scene-by-scene.
- [ ] Captions are present, line-by-line, ink on paper2 pill, ≤7 words per line.
- [ ] Closing URL card holds the URL legibly for ≥3 seconds.
- [ ] No "subscribe," "join," "sign up," or exclamation marks anywhere on screen or in script.
- [ ] Both 1080x1920 and 1920x1080 outputs render from a single TSX component, with shared timeline and shared audio file.
- [ ] The piece reads as an invitation, not a pitch — see the sister test below.

## The sister test

Read the script aloud to a sister, a sibling, a close friend who has not heard about Hearth. If at any point in the 30 seconds they hear a sentence that sounds like marketing — even one — the script fails. Rewrite that sentence. The video should sound like a literary publisher's trailer for a quiet new book, not a creator promoting a free download.

The Letter is a slow ritual. The video must sound like the ritual, not like an ad for the ritual.

## Failure modes to avoid

- Music. Even tasteful piano. None.
- Founder face on camera — that's the LinkedIn video; this piece is about the artifact.
- The words "subscribe," "join," "sign up," "newsletter," "join thousands," "free download," "lead magnet."
- Numbers as social proof ("5,000 readers"). Hearth doesn't perform proof; it performs presence.
- Naively letterboxing the 1080x1920 cut for LinkedIn. Type rebuilds per aspect.
- Stitching VO scene-by-scene — the cadence breaks. Record one continuous take and align scenes to the audio.
- Ending on the URL alone with no rule beneath it — the rule is the visual full-stop.
