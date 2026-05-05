# IG Reel — Whisper Monologue: "The Call That Ruins Your Sunday"

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
- Duration: 2025 frames (67.5 seconds)
- Audio: ElevenLabs voiceover + low piano bed at -18dB

DELIVERABLE
A single TSX file exporting the composition component, plus a sibling
`props.ts` exporting the zod schema and default props, ready to register
in `src/Root.tsx` under the appropriate <Folder>.
```

---

## 1. Concept brief

A whisper-monologue Reel — Hearth's signature format. One Keeper, soft-lit, in a domestic kitchen at the hour the light is gold-blue. She is not performing wisdom; she is naming a thing the viewer has felt and never had a sentence for.

- **Atom**: "the call that ruins your Sunday" — the recurring family call (a parent, a sibling, an in-law) that arrives at 4pm and re-organises the rest of the day around someone else's storm.
- **Audience**: the eldest daughter / the family's emotional infrastructure. 28–45. She has tried therapy. She has journaled. She is *quietly tired in a way she can't explain to anyone in her life without hurting them*.
- **Truth carried**: the call is not the problem. The aftermath is. You are allowed to grieve the rest of the Sunday before you get up and make the dinner.
- **Plank**: *Slow.* This Reel is a witnessing, not a fix.

## 2. Sample script (~110 words, ~67s at the slow whisper pace)

> The call comes around four. You see the name and you already know how the rest of Sunday will go. You'll listen — you always listen — and by the time you hang up, the light has changed in the kitchen. Dinner is still ahead of you. Someone in the house will ask if you're okay. You'll say yes. You'll mean: *I am the one who carries this, and I have been carrying it since I was nine.* You don't have to fix the call. You don't have to rush back to the room. You're allowed to sit at the table for a little while. The soup will wait.

The final two sentences are the screenshot lines.

## 3. Scene-by-scene Remotion breakdown

Total: **2025 frames @ 30fps = 67.5s.** Single composition `ReelWhisperSundayCall`. No `<TransitionSeries>` — this is one continuous shot. We use `<Sequence>` only for caption pages.

| # | Frame range | Beat | Visual |
|---|---|---|---|
| 1 | 0–60 (0–2s) | Cold open, near-silence | Static frame: kitchen window, late-afternoon, slight wind on a curtain. No type. |
| 2 | 60–300 | "The call comes around four…" | Keeper appears mid-frame (centred, lower third), wool blanket, mug. Caption page 1 fades in at frame 75. |
| 3 | 300–720 | "…the light has changed in the kitchen." | Hold on Keeper. Caption pages 2–3 cycle. |
| 4 | 720–1140 | "Dinner is still ahead…" | Cut to b-roll: hands on the lip of a kitchen counter, soup pot just visible. Caption pages 4–5. |
| 5 | 1140–1620 | "I am the one who carries this…" | Back to Keeper. The line lands. Pause. Caption page 6 holds 3s. |
| 6 | 1620–1920 | "You're allowed to sit at the table…" | B-roll: chair pulled out, empty. Caption pages 7–8. |
| 7 | 1920–2025 | Sign-off | Wordmark `hearth` in Fraunces 500, ember on paper2 pill, plus mono line `pull up a chair.` Loop frame matches frame 0 for >100% completion. |

Ten caption pages total (each ~9–22 frames per word, grouped into 3–6-word phrases via `createTikTokStyleCaptions` with `combineTokensWithinMilliseconds: 1200`).

## 4. Animation specs

- **Scene fade-ins**: `interpolate(frame, [start, start+18], [0, 1], { extrapolateRight: "clamp" })` for image opacity. Never instant cuts.
- **Caption entrance**: each caption page enters with `spring({ frame: local, fps, config: { damping: 200, stiffness: 80 } })` driving `translateY` from 12px to 0 and opacity from 0 to 1. Active token tinted `colors.ember`; inactive tokens `colors.ink`. Pill background `colors.paper2`, padding `18px 28px`, border-radius `999`, drop-shadow none.
- **Caption typography**: Inter Tight 600, 56px, line-height 1.15, letter-spacing -0.005em, max width 880px, centred at y=1380.
- **Stagger inside a caption page**: 4 frames between tokens.
- **B-roll micro-cuts**: cross-fade 12 frames at scene boundaries via opacity interpolation on stacked `<OffthreadVideo>` layers. No whip pans. No zooms beyond `scale(1.02)` over 600 frames for a slow Ken-Burns drift.
- **Loop seam**: frame 2024 must be visually identical to frame 0 (same kitchen-window plate, same paper background). Use `<Freeze frame={0}>` on the closing 30 frames if needed.

## 5. Audio specs

- **Voiceover**: ElevenLabs, `eleven_multilingual_v2`, voice `Aria` or `Sarah` (soft, breathy, age 30–40). Settings `{ stability: 0.55, similarity_boost: 0.75, style: 0.25 }`. Generate offline via `scripts/generate-voiceover.ts`. Save to `public/audio/voiceover/whisper-sunday-call/vo.mp3`.
- **Bed**: low solo piano pad, e.g. licensed track in the Hania Rani / Ólafur Arnalds register. Save to `public/audio/music/warm-bed-piano.mp3`. Volume curve: ramp 0 → 0.13 over frames 0–30, hold, fade out frames 1995–2025. That is roughly **-18 dB** under the VO.
- **Captions**: generate from VO with Whisper `whisper-1`, `verbose_json`, `timestamp_granularities: ["word"]`. Save `public/captions/whisper-sunday-call.json` as a `Caption[]`.
- **No sound effects.** No swoosh, no chime. Silence is the texture.

## 6. Brand requirements

- Background: `colors.paper` (`#F2EDE5`).
- B-roll grading: warm (+200K), exposure −0.3, slight grain. Avoid blue/cool LUTs.
- Wordmark colour: `colors.ember` (`#9C2A1A`) on `colors.paper2` pill.
- Type sizes: caption 56px Inter Tight 600; sign-off wordmark 96px Fraunces 500; sign-off mono 28px JetBrains Mono 400.
- No emoji. No hashtags burned in. No follower-CTA on the video itself (caption only).

## 7. Render command and output path

```bash
npx remotion render src/index.ts ReelWhisperSundayCall \
  out/reels/2026-04-whisper-sunday-call.mp4 \
  --codec=h264 --crf=18 --pixel-format=yuv420p
```

Lambda variant:

```bash
npx remotion lambda render \
  --composition=ReelWhisperSundayCall \
  --codec=h264 --concurrency=30 \
  --out-name=reels/2026-04-whisper-sunday-call.mp4
```

## 8. Acceptance criteria checklist

- [ ] Composition `ReelWhisperSundayCall` registered in `src/Root.tsx` under `<Folder name="Reels">`.
- [ ] `props.ts` exports a zod schema (`script: string`, `voPath: string`, `bedPath: string`, `captionsPath: string`) with defaults that match the script in §2.
- [ ] Output is 1080×1920, 30fps, 2025 frames (±0).
- [ ] Voiceover plays in full; final word ends before frame 1980.
- [ ] Bed sits at ~-18 dB under VO; fades in/out smoothly.
- [ ] Every spoken word has a corresponding caption token on screen within ±2 frames.
- [ ] Active caption token rendered in `colors.ember`; pill in `colors.paper2`.
- [ ] No CSS keyframes, no `setTimeout`, no `Math.random` without seed.
- [ ] Frame 2024 visually loops back into frame 0 (no jump cut).
- [ ] Total file size under 25MB H.264 CRF 18.

## 9. Failure modes to avoid

- **Therapy-influencer cosplay.** No "Hi friends!" intro, no finger-point overlays, no neon caption highlights. If it could pass for BetterHelp, rewrite.
- **Trending audio.** Do not attach a TikTok pop hook. The bed is solo piano or silence.
- **Listicle on screen.** No "3 signs you…" headers. One observation, one shape.
- **Bouncy springs.** Damping 200 minimum. No overshoot. The brand is settled.
- **The word "trauma."** Banned in copy and on screen.
- **Filling the canvas.** Whitespace is the design. If type covers >50% of any frame, cut copy.
- **Faster than 30fps motion.** No whip pans. Ken-Burns drift only.
- **Cliffhanger CTA.** End on stillness. The chair-pulled-out is the offer.
