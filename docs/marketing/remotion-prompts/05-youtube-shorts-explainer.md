# YouTube Shorts — "What is Hearth?" Explainer (50–60s)

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
- Platform: YouTube Short
- Dimensions: 1080 × 1920 (9:16 vertical)
- FPS: 60 (recommended for snappy explainer cuts; 30 acceptable fallback)
- Duration: 3360 frames at 60fps (= 56 seconds). Range 3000–3600 frames.
- Audio: ElevenLabs voiceover at public/audio/voiceover/whatishearth/full.mp3
        + low ambient bed at public/audio/music/warm-bed.mp3 (-22 dB under VO).
- Composition id: `ShortWhatIsHearth`
```

## Concept brief

A first-encounter explainer for someone who has never heard of Hearth and needs the whole idea in under a minute. The voice is warm but slightly more accessible than a Reel — explanatory without slipping into "wellness app demo." We are not pitching at a feed-scrolling stranger; we are answering the question "what even is this?" for someone who has just clicked a Short. Information is delivered as four small movements — *the in-between weight* → *therapy is great, but* → *a paired Keeper, not a therapist* → *pull up a chair*.

The visual register is six slow b-roll shots (a kitchen window, hands around a mug, a chair pulled out at an angle, the back of a sweater on a stool, a candle being trimmed, a paper notebook open to nothing) intercut with three Fraunces text cards on cream paper. No talking heads. No price-tag graphics. The 7-second test passes because at the seven-second mark the viewer sees a single sentence on cream — "There's a weight that doesn't fit a couch." — over the soft sound of a kettle.

## Full script (~145 words; record at ~155 wpm = ~56s)

> There's a weight you carry that doesn't fit a couch.
>
> Not a crisis. Not a diagnosis. Just the in-between — the eldest-daughter tired, the friend everyone calls, the parent of your parents.
>
> Therapy is wonderful for what therapy is for. But fifty minutes once a fortnight isn't a hand to hold on a Tuesday.
>
> Hearth is something else.
>
> You're paired with one human — we call them a Keeper. Not a therapist. A trained companion who knows your story, week after week, year after year. Slow. Ongoing. Yours.
>
> A Sit every other week. A Long Talk thread between Sits. Thirty-nine dollars a month. No streaks. No homework. No urgency.
>
> Just someone, the same someone, sitting across from you while you say the thing.
>
> Pull up a chair. The first Sit's waiting.

## Scene-by-scene Remotion breakdown (60fps; 3360 total frames)

| # | Frames | Seconds | Scene | Visual | Text card | VO line |
|---|---|---|---|---|---|---|
| 1 | 0–420 | 0–7s | Cold open | Slow push-in on a kitchen window, soft morning light | "There's a weight you carry that doesn't fit a couch." | Line 1 |
| 2 | 420–900 | 7–15s | The in-between | B-roll: hands cupping a mug; cut to a phone face-down on a counter | "the in-between" eyebrow in JetBrains Mono | Line 2 |
| 3 | 900–1380 | 15–23s | The therapy beat | Wide of an empty therapist's chair, gentle parallax | "Therapy is wonderful for what therapy is for." | Line 3 |
| 4 | 1380–1620 | 23–27s | Pivot card | Pure paper, single sentence | "Hearth is something else." (Fraunces 600, ink) | Line 4 |
| 5 | 1620–2280 | 27–38s | The Keeper | Slow tilt down on a chair pulled out at an angle, cream throw | "A Keeper. Not a therapist." | Line 5 |
| 6 | 2280–2760 | 38–46s | The shape of it | Three slow stills: candle, notebook, calendar with biweekly marks | "$39/mo · biweekly Sit · Long Talk thread" (Inter Tight 500) | Line 6 |
| 7 | 2760–3120 | 46–52s | The promise | Hands across a small table, only sleeves visible, paper texture | "the same someone" (italic Fraunces) | Line 7 |
| 8 | 3120–3360 | 52–56s | CTA | Cream paper, wordmark, eyebrow line, soft ember underline | "Pull up a chair. The first Sit's waiting. — dearhearth.com" | Line 8 |

## Animation specs

- **Scene chain**: wrap all eight scenes in `<TransitionSeries>`. Use `fade()` from `@remotion/transitions/fade` with `linearTiming({ durationInFrames: 18 })` for warm dissolves. Never use slide, flip, or clockWipe.
- **Text cards (scenes 1, 3, 4, 5, 8)**: `spring({ frame, fps, config: { damping: 200, stiffness: 80 }, durationInFrames: 30 })` drives a `translateY` from `12px → 0` and an opacity ramp via `interpolate(frame, [0, 24], [0, 1], { extrapolateRight: "clamp" })`. Line-by-line stagger of 6 frames if a card has multiple lines.
- **B-roll motion**: each `<OffthreadVideo>` clip is wrapped in a div whose `transform: scale()` interpolates linearly from `1.0 → 1.04` across the scene length (Ken Burns slow push-in). Never zoom faster than 4% over 7 seconds.
- **Eyebrow tags** (JetBrains Mono, uppercase, tracked +0.18em, 26px, ember): fade in 8 frames after the scene starts; fade out 12 frames before scene ends.
- **Wordmark in scene 8**: import `<EmberWordmark />` from `components/`. Spring entrance, `damping: 200`, `durationInFrames: 36`. Underline draws via SVG `pathLength` interpolated `0 → 1` across 24 frames after the wordmark settles.

## Audio + ElevenLabs voice specs

- **Voice**: ElevenLabs `eleven_multilingual_v2`. Voice ID: a warm female voice in the late-30s register (suggested: "Charlotte" or a custom Hearth voice). Settings: `stability: 0.55, similarity_boost: 0.75, style: 0.25`. Prosody should feel like reading a letter aloud — not radio-host.
- **Generation**: pre-render the full script to one MP3 via `scripts/generate-voiceover.ts`. Save to `public/audio/voiceover/whatishearth/full.mp3`. Do NOT generate at render time.
- **Sync to scenes**: the script breaks at line endings; each line lands inside its corresponding scene. Use Whisper word-level timestamps to verify alignment; nudge scene boundaries (in `props.ts`) by ±6 frames if a line sits awkwardly.
- **Music bed**: `public/audio/music/warm-bed.mp3` (Hania Rani / Hammock register; instrumental, no melody on top of VO range). Volume function: `interpolate(f, [0, 60, 3300, 3360], [0, 0.18, 0.18, 0])`. Duck under VO; rise to 0.32 only during the scene 4 → scene 5 cross-fade for the "Hearth is something else" pivot.
- **Optional sound design**: a single soft kettle hiss at frame 60–180 (under -24 dB); a chair-leg-on-wood creak at scene 5 entry (under -22 dB). Cleared SFX only.

## Brand requirements

- Backgrounds always paper `#F2EDE5`. Never pure white. Never black.
- Headlines Fraunces 600 in ink `#0E0B08`. Eyebrows JetBrains Mono 500 uppercase in ember `#9C2A1A`.
- Wordmark uses Fraunces 500 + a hand-drawn ember underline (SVG path).
- Captions burned in (sound-off viewing): Inter Tight 600, 56px, ink on paper2 pill, single-line at lower third (y = 1500). Use `@remotion/captions` `parseSrt()` against `public/captions/whatishearth.srt`.
- Do NOT use the words "trauma," "anxiety," "depression," "treatment," "diagnosis." Do NOT show prices in flashing/animated form. Do NOT use stock countdown timers, urgency badges, or "limited spots."

## Render command + acceptance criteria

```bash
npx remotion render src/index.ts ShortWhatIsHearth out/short-whatishearth.mp4 \
  --codec=h264 --crf=18 --fps=60 \
  --props='{"voId":"whatishearth","brollSet":"v1"}'
```

**Acceptance criteria**

- Final file is 1080×1920, H.264, 60fps, between 50 and 60 seconds.
- The 7-second test passes: at frame 420 a stranger sees a single Fraunces sentence on cream and hears one sentence of warm VO. No logo. No price. No CTA yet.
- The phrase "Pull up a chair." appears exactly once, in the final scene, in Fraunces.
- Captions are burned in for the entire VO and never cover the eyebrow text or the wordmark.
- Music bed never exceeds -14 dB under VO peaks.
- The composition renders deterministically — running twice produces byte-identical MP4s (modulo encoder noise <0.001%).

**Failure modes to avoid**

- Therapy-influencer cosplay (rapid jump cuts, finger-pointing, "STOP scrolling").
- Urgency-carnival CTAs ("Join now! Limited spots!"). The CTA is a soft invitation.
- Showing the price as the hook. Price arrives in scene 6, never in scenes 1–4.
- Clinical-language drift ("treats anxiety," "evidence-based"). This will trip Stripe and YouTube health-content review.
- Filling whitespace with decorative motifs — the cream paper IS the design.
- Background music with a melody that competes with the VO range (300–3000 Hz). Use sub-bass drone or sparse piano only.
