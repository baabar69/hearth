# TikTok — Essay-Style Whisper Monologue with Kinetic Captions (60–90s)

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
- Platform: TikTok (Phase 2 — only after Reels has validated)
- Dimensions: 1080 × 1920 (9:16 vertical)
- FPS: 30
- Duration: 2250 frames (= 75 seconds). Range 1800–2700 frames (60–90s).
- Audio: ElevenLabs voiceover at public/audio/voiceover/<videoId>/full.mp3
        + sparse ambient bed at -24 dB.
- Composition id: `TikTokEssay`
- Folder: TikTok / Essay-Style
```

## Concept brief

This is the TikTok-native variation of the Instagram whisper-monologue Reel. It exists for Phase 2 only — meaning **after** Reels has validated the format and built audience. Per the platform strategy, TikTok's 2026 mental-health moderation is hostile, and reach can collapse to <1k views without warning when an NLP classifier flags a single trigger phrase. This template treats moderation as a primary design constraint, not a footnote.

The format borrows the Reel's voiceover-on-b-roll register but layers TikTok-style **kinetic per-word captions**: large, bold, single-word reveals that pop in synchronized to the voiceover transcript via Whisper word-level timestamps. Caption rhythm IS the editing — every cut and every visual change lands on a caption beat. This satisfies TikTok's "completion + rewatch" reward function while keeping Hearth's literary voice intact above the captions.

Topics for this template should be **less clinically loaded**. Avoid grief, postpartum, depression, anxiety as a diagnosis, suicidal ideation, even adjacent. Use universal-life-moment territory that TikTok's classifier reads as "lifestyle / family / culture" rather than "mental health." Sample-safe topics:
- *"the silence after the wedding"* — the strange flatness when a celebration ends
- *"what nobody tells you about being the family go-between"* — the eldest-cousin / translator role
- *"the friendship that stayed the same shape while everything else moved"*
- *"Sunday-evening tired"*
- *"the version of you your parents still talk to"*

This prompt uses the family-go-between topic as the worked example.

## Sample script (~155 words, ~75s at 124 wpm)

> Here's something nobody tells you about being the family go-between.
>
> You become fluent in two languages no one teaches you. The one your mother speaks when she is hurt but won't say so. The one your father speaks when he is sorry but can't shape the word.
>
> You translate every Sunday phone call. You smooth the edges before they reach anyone else. You remember which cousin isn't speaking to which aunt and why, and you keep that ledger in your head the way other people keep passwords.
>
> And then a quiet Tuesday comes, and someone asks how *you* are doing, and the answer takes you ninety seconds to find, because you've spent a decade answering for everyone else.
>
> If that's you — if you've been the bridge for so long you forgot you were also a person standing on it — pull up a chair. There's room.

## TikTok-style caption styling

Use `@remotion/captions`. Pipeline:

1. Generate VO offline via ElevenLabs (settings: `stability: 0.55, similarity_boost: 0.75, style: 0.20`). Save MP3 to `public/audio/voiceover/<videoId>/full.mp3`.
2. Run Whisper word-level transcription via `scripts/generate-captions.ts` (uses `openAiWhisperApiToCaptions`). Save the resulting `Caption[]` JSON to `public/captions/<videoId>.json`.
3. In the composition, load the captions JSON and pass through `createTikTokStyleCaptions({ captions, combineTokensWithinMilliseconds: 1200 })` to chunk into "pages" of 1–3 words per page.
4. Render each page as a single full-bleed caption that swaps when its time-range is active. **Per-word reveal within the page**: the active word renders at 100% opacity, ember `#9C2A1A`; preceding words at 65% opacity, ink `#0E0B08`; future words at 0% opacity (not yet revealed).

Caption visual specs:
- **Font**: Inter Tight 700 (TikTok prefers heavier weight than IG; the body register stays consistent with the brand).
- **Size**: 96px line-height 1.1 — large, the whole point of TikTok captions.
- **Stroke**: 4px ink stroke around each glyph for legibility against b-roll.
- **Position**: vertically centered (y ≈ 960) — TikTok UI chrome occupies top ~14% and bottom ~22%; the safe zone is the middle 64%. Never lower-third.
- **Pill background**: a soft paper2 `#EAE2D2` rounded rect at 92% opacity, padding 28px x 18px, behind the active page only.
- **Word entrance**: spring `damping: 18, stiffness: 220, durationInFrames: 6` — snappier than Hearth's brand default because TikTok rhythm demands it. This is the one place we break the "damping 200" rule, and only here.
- **Page swap**: 4-frame opacity cross-fade between pages. No slide, no flip.

## Scene breakdown with audio-driven cuts

The script breaks into approximately 30 caption-pages (1–3 words each). Cuts in the b-roll happen on **every 1.5–3 seconds** (45–90 frames at 30fps) and always land on a caption page boundary. The b-roll is a sequence of 18–24 short tactile shots cut to the rhythm of the voice.

| Beat range | Approx. seconds | Beat name | B-roll | VO line(s) |
|---|---|---|---|---|
| 1 | 0–4s | Hook | Slow push-in on a phone face-down on a kitchen counter | "Here's something nobody tells you about being the family go-between." |
| 2 | 4–22s | The two languages | Hands washing one cup; a Sunday phone on a table; tea steam | The "two languages" passage |
| 3 | 22–42s | The labor | A finger tracing names in a notebook; a wedding photo on a fridge with a magnet; a hand smoothing a tablecloth | The translation / Sunday phone-call passage |
| 4 | 42–58s | The Tuesday | Dawn light on a bedside table; a kettle just lifted off heat; an empty chair at a kitchen table | "And then a quiet Tuesday comes..." |
| 5 | 58–75s | The invitation | A chair pulled out at an angle; the Hearth wordmark on cream; "Pull up a chair." | "If that's you... pull up a chair. There's room." |

Implementation:
- Wrap b-roll clips in `<TransitionSeries>` with `fade()` and `linearTiming({ durationInFrames: 9 })`.
- For each clip, slow Ken Burns: `scale 1.00 → 1.03` over the clip length. Never aggressive zoom.
- For audio-driven sync, prefer manual timing in `props.ts` (a `clips: [{ src, fromFrame, durationInFrames }]` array) over runtime audio-data analysis — keeps the render deterministic.

## Audio specs

- **VO**: ElevenLabs voice (warm late-30s female; suggested "Charlotte" or custom Hearth voice). Settings as above.
- **Music bed**: `public/audio/music/sparse-piano.mp3` — Hania Rani-adjacent, no melody competing with VO range. Volume `interpolate(f, [0, 60, durationInFrames - 60, durationInFrames], [0, 0.16, 0.16, 0])`.
- **Original Sound**: TikTok rewards original audio. Mix VO + bed locally and upload as one track; do NOT use TikTok-trending sounds for this template (they cheapen the literary register and the strategy doc forbids it).

## Render specs + acceptance criteria

```bash
npx remotion render src/index.ts TikTokEssay out/tiktok-gobetween.mp4 \
  --codec=h264 --crf=18 --fps=30 \
  --props='{"videoId":"gobetween","topic":"family-go-between"}'
```

**Acceptance criteria**

- 1080×1920, H.264, 30fps, 60–90 seconds, file size <50MB.
- Captions are visible for 100% of the VO duration. Active word is ember; preceding words ink-65%; future words hidden.
- Every b-roll cut lands on a caption page boundary (verifiable by stepping frame-by-frame at each transition).
- The middle 64% of the frame (y = 250 to y = 1670) is reserved as the caption safe zone; the wordmark only appears in the final beat.
- The 7-second test passes: at frame 210 the viewer sees and hears one specific image (a phone face-down on a counter) and one specific sentence ("nobody tells you about being the family go-between"). No logo, no price, no clinical language.
- The composition contains zero usage of the words listed in the brand-safety section below.
- Render is deterministic across two runs (byte-identical modulo encoder).

**Failure modes to avoid**

- Trending TikTok sounds with sad-girl / suicide-coded provenance. Algorithm guilt-by-association is real.
- Captions colliding with TikTok's UI chrome (top 14% / bottom 22%). Test with a TikTok safe-zone overlay before delivery.
- Per-word reveal that's too snappy (under 4 frames) or too slow (over 12 frames) — both kill the rhythm.
- "POV:" framing or first-person confession styling. Hearth is observational, not confessional.
- Logo splash at the start. The wordmark only appears in the final beat (5).

## Brand-safety section — 5 things this video must NOT do or say

1. **Do not use the words "trauma", "anxiety" (as a diagnosis), "depression", "PTSD", "self-harm", "suicidal", or any DSM term.** The Keeper-not-therapist framing is also a moderation shield — lean on it but never trip it. Phrase emotional weight in specific sensory language ("the call that ruins your Sunday," "the cousin who isn't speaking to her aunt") instead of clinical labels.
2. **Do not link out to a "support" URL or hotline in-video.** TikTok's "external support link without disclaimer" classifier downranks accounts that do this. Send viewers to the bio instead, and only mention "pull up a chair — link in bio" once, in the final beat.
3. **Do not feature member faces, names, voices, or paraphrased quotes from real Sits without explicit signed consent.** This is brand commitment #4. For this template, use only b-roll that depicts no identifiable person — hands, objects, rooms.
4. **Do not use trauma-tourism / suffering-as-hook openers** ("She hasn't cried in eleven years..." said straight to camera). Even if a long-form essay can earn that line, TikTok's classifier and audience flag it as harmful when stripped of context. Open on a specific sensory observation, not on suffering.
5. **Do not run urgency-carnival CTAs** ("Sign up before the price goes up!" "Last 24 hours!"). Brand commitment #1 says we never run a 24-hour flash sale, ever. The CTA is always *"pull up a chair"*. If you find yourself adding scarcity, the script is wrong.

Bonus rule: if any line of the script could plausibly have been written by Calm, Headspace, BetterHelp, Modern Health, or Brown Girl Therapy, rewrite it. The 7-second test applies to TikTok harder than to any other surface, because the audience scrolls faster and the moderation is more punishing.
