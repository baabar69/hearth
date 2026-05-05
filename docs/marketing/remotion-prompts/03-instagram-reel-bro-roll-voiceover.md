# IG Reel — Slow B-Roll Voiceover Essay: Closing of "The Call That Ruins Your Sunday"

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
- Duration: 2400 frames (80 seconds)
- Audio: ElevenLabs voiceover + licensed ambient bed (Hania Rani-adjacent) at -18 dB

DELIVERABLE
A single TSX file exporting the composition component, plus a sibling
`props.ts` exporting the zod schema and default props, ready to register
in `src/Root.tsx` under the appropriate <Folder>.
```

---

## 1. Concept brief

The literary cinema-essay format. Eighty seconds of slow b-roll — hands, candles, a kitchen window, a doorway, a chair pulled out — under a voiceover reading the closing paragraph of this Sunday's Hearth Letter ("The Call That Ruins Your Sunday"). No face on camera. No talking head. The audience watches as if turning the last page of an essay.

- **Atom**: closing paragraph of the Hearth Letter for week 2026-04-W18.
- **Audience**: same primary SVA. She is the eldest daughter, on the couch, after the dinner is done.
- **Truth carried**: you can put the weight down for the length of a kettle boiling.
- **Plank**: *Slow.* This format is the brand's most defensible visual language. No competitor with a wellness budget produces work this still.
- **Why it works on Reels**: pattern interrupt. In a feed of jump-cut influencer faces, a hand on a mug holds the eye.

## 2. Sample script (~115 words, ~78s at literary VO pace)

> Some Sundays end the way they began — with a phone in your hand and a knot you didn't ask for. This is one of those. Tonight, when the dishes are done and the house has gone quiet, set the kettle on. Not because tea fixes anything. Because the kettle takes four minutes, and four minutes is a length of time you are allowed to spend on yourself. Sit at the table. Don't text anyone back yet. The call that ruined your Sunday will still be there tomorrow, and so will you. The ones who love you would rather you arrive on Monday tired and whole than on Sunday composed and gone. Pull up a chair.

The final two sentences land on the closing b-roll and wordmark.

## 3. Scene-by-scene Remotion breakdown

Total: **2400 frames @ 30fps = 80s.** Single composition `ReelBrollClosingLetter`. Use `<TransitionSeries>` with `fade()` (`linearTiming({ durationInFrames: 18 })`) between b-roll clips. Captions float above as a separate `<Sequence>` layer.

| # | Frame range | Duration | B-roll | VO line |
|---|---|---|---|---|
| 1 | 0–360 | 12s | Kitchen window, blue hour, slight curtain movement | "Some Sundays end the way they began — with a phone in your hand and a knot you didn't ask for." |
| 2 | 360–720 | 12s | Hands holding a mug, steam rising | "This is one of those." (held with silence) |
| 3 | 720–1080 | 12s | Kettle on a stove, gas flame visible, slow zoom-out from 1.04 → 1.00 over 360 frames | "Tonight, when the dishes are done and the house has gone quiet, set the kettle on." |
| 4 | 1080–1440 | 12s | Candle on a wooden table, flame flicker | "Not because tea fixes anything. Because the kettle takes four minutes…" |
| 5 | 1440–1800 | 12s | Empty chair pulled out from a kitchen table, late-evening lamp light | "Sit at the table. Don't text anyone back yet." |
| 6 | 1800–2160 | 12s | Doorway, hallway light spilling onto a wool blanket draped over the chair-back | "The call that ruined your Sunday will still be there tomorrow, and so will you." |
| 7 | 2160–2340 | 6s | Window again, but darker — the loop seam | "The ones who love you would rather you arrive on Monday tired and whole than on Sunday composed and gone." |
| 8 | 2340–2400 | 2s | Wordmark on `colors.paper2` pill | "Pull up a chair." |

## 4. Animation specs

- **B-roll motion**: `<OffthreadVideo>` for each clip. Each clip plays at native 1.0 speed. Add a slow Ken-Burns drift via outer `<div>` `transform: scale(...)` driven by `interpolate(local, [0, durationInFrames], [1.00, 1.04])`. No pans wider than 2%.
- **Crossfades**: `TransitionSeries` with `fade()` and `linearTiming({ durationInFrames: 18 })`. Never `slide`, never `wipe`, never `flip`.
- **Caption strip**: bottom-third pill. Inter Tight 600, 48px, line-height 1.2, max-width 880px, centred at y=1500. Background `colors.paper` at 92% opacity, padding `16px 24px`, border-radius 999, no shadow. Active token tint `colors.ember`.
- **Caption pages**: generated from VO via Whisper + `createTikTokStyleCaptions({ combineTokensWithinMilliseconds: 1400 })`. Stagger 4 frames per token entrance.
- **Wordmark sign-off**: `hearth` Fraunces 500, 96px, ember on paper2 pill at frame 2340. Spring entrance damping 200, duration 24 frames. `pull up a chair.` in JetBrains Mono 400 28px below the wordmark.
- **Loop seam**: frame 2399 = frame 0 (window plate). Use `<Freeze>` if needed.
- **Letterbox**: do not letterbox. Full-bleed b-roll with `object-fit: cover`.

## 5. Asset list (b-roll — exact specs)

Save all under `public/video/broll/closing-letter/`. Resolution 1080×1920 minimum, 4K preferred, H.264 MP4. Each clip ≥ 14s of usable footage (we use 12s plus a 2s tail for the crossfade).

| File | Subject | Notes |
|---|---|---|
| `01-window-blue-hour.mp4` | Kitchen window, late afternoon, soft curtain | No people. Tripod. Slight breeze on curtain. Warm-leaning grade. |
| `02-hands-mug.mp4` | Two hands cupping a ceramic mug, steam | Female hands, plain ring or none, soft sleeve. No face. |
| `03-kettle-flame.mp4` | Kettle on a gas stove, flame visible | Top-down or 3/4 angle. No shaky hand-held. |
| `04-candle-table.mp4` | Single candle on a wooden table, slow flicker | Close shallow depth-of-field; ember and honey in the flame match brand. |
| `05-chair-pulled-out.mp4` | Empty wooden chair pulled out from a kitchen table | Lamp light, not overhead. The chair is the brand metaphor — prioritise this clip. |
| `06-blanket-doorway.mp4` | Wool blanket draped over a chair-back, doorway behind | Hall light spilling in. No motion except a slight breeze. |
| `07-window-dusk.mp4` | Same window as #1, twenty minutes later | Darker. Functions as the loop pair. |

If shooting in-house, use a 50mm equivalent lens, ISO 400, shutter 1/60, f/2.8 minimum. If sourcing stock (Artgrid / Filmsupply), licence cleared for paid social. **Never use Pexels/Pixabay clips with visible logos or with people's faces unless model release on file.**

## 6. Audio specs

- **Voiceover**: ElevenLabs, `eleven_multilingual_v2`, voice `Charlotte` or a clone of the founding Keeper. Settings `{ stability: 0.6, similarity_boost: 0.78, style: 0.2 }`. Save `public/audio/voiceover/closing-letter/vo.mp3`. Pace ~1.3 words/second — slower than her speaking voice.
- **Bed**: licensed Hania Rani / Ólafur Arnalds-adjacent piano + string pad. Save `public/audio/music/closing-letter-bed.mp3`. Volume curve: ramp 0 → 0.16 over frames 0–60, hold, fade to 0 over frames 2340–2400. ~ -18 dB under VO.
- **No SFX.** No kettle whistle. No door creak. The b-roll is silent; the bed and VO carry everything.
- **Captions JSON**: `public/captions/closing-letter.json`. Generated offline.

## 7. Brand requirements

- Background colour fallback (any single-frame gap during transitions): `colors.paper`.
- B-roll grading: warm-leaning, exposure −0.3, no cool LUTs, slight grain (0.6%).
- Wordmark always `colors.ember` on `colors.paper2`.
- No `colors.honey` except as it naturally appears in the candle clip.
- Captions: Inter Tight 600 only.
- Type sizes: caption 48px; wordmark 96px Fraunces 500; mono 28px JetBrains Mono 400.

## 8. Render command and output path

```bash
npx remotion render src/index.ts ReelBrollClosingLetter \
  out/reels/2026-04-broll-closing-letter.mp4 \
  --codec=h264 --crf=18 --pixel-format=yuv420p
```

Lambda variant — note disk bump for video assets:

```bash
npx remotion lambda render \
  --composition=ReelBrollClosingLetter \
  --codec=h264 --concurrency=40 --disk=10240 \
  --out-name=reels/2026-04-broll-closing-letter.mp4
```

## 9. Acceptance criteria checklist

- [ ] Composition `ReelBrollClosingLetter` registered in `src/Root.tsx` under `<Folder name="Reels">`.
- [ ] `props.ts` zod schema covers `script: string`, `voPath`, `bedPath`, `captionsPath`, `clips: { src: string; durationInFrames: number }[]` (length 7), defaults match §3.
- [ ] All 7 b-roll clips loaded via `<OffthreadVideo>` (not `<Video>`).
- [ ] Output is 1080×1920, 30fps, 2400 frames.
- [ ] `<TransitionSeries>` used with `fade()` only.
- [ ] Captions sync within ±2 frames of VO; active token in `colors.ember`.
- [ ] Bed sits at ~-18 dB below VO; no audio clipping.
- [ ] Wordmark appears at frame 2340 and holds through 2399.
- [ ] Frame 2399 visually loops back into frame 0.
- [ ] No people's faces appear in any b-roll clip without a model release.
- [ ] No CSS keyframes, no `setTimeout`, no `Math.random` without seed.

## 10. Failure modes to avoid

- **Pexels stock with influencer faces.** This format requires non-faces. Hands, objects, light. The chair is the metaphor.
- **Cool / blue grade.** Hearth is paper-warm. If the kitchen looks like a Calm.com still, regrade.
- **Whip pans, speed-ramps, glitch transitions.** All banned.
- **Caption font drift.** Inter Tight 600 only. No Avenir, no Montserrat, no system-ui fallback.
- **Bed too loud.** If you can hum the melody after one watch, the bed is too loud. Duck further.
- **VO performed.** No NPR-host inflection, no dramatic pauses for effect. Read it like a letter. Slower than feels natural.
- **Listicle structure.** No "three things…" frame. The essay is one breath.
- **Cliffhanger CTA.** End on the wordmark. No "comment YES if you needed this."
- **Visible logos in b-roll.** Crop or replace. A Le Creuset kettle on a Reels grid reads as branded content.
