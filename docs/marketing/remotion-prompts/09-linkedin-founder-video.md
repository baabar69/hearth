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
- Platform: LinkedIn (founder profile, native video)
- Dimensions: 1080 x 1080 (square — best LinkedIn mobile+desktop format).
  Also export a 1920 x 1080 landscape alt from the same source comp.
- FPS: 30
- Duration: 60–90 seconds (1800–2700 frames). Default 2400 frames (80s).
- Audio: founder's recorded voice, no music bed. ~70% LinkedIn plays are sound-off.

DELIVERABLE
A single TSX file exporting the composition component, plus a sibling
`props.ts` exporting the zod schema and default props, ready to register
in `src/Root.tsx` under <Folder name="LinkedIn">.
```

---

## Concept brief

This is **founder content**, posted from the **founder's personal LinkedIn account** — not the Hearth company page. Per Hearth's platform strategy, LinkedIn is founder-led, never brand-led; the company page only re-shares the founder's posts. The asset must therefore feel personal: signed by the founder, not "Hearth Team."

The video is the founder, soft-lit, talking direct to camera, telling **the specific moment** they realized Hearth had to exist. Not abstract ("I cared about loneliness"). Specific: a phone call, a 2 a.m., a drive home, a friend who didn't pick up. Remotion's job here is not to make the video — the founder's recorded selfie is the primary track. Remotion **brand-frames** it: opening title card, kinetic captions, lower-third nameplate, closing CTA card. Every visual element is in service of sound-off readability.

LinkedIn audiences watch with sound off ~70% of the time, so the captions are not optional decoration — they are the primary delivery channel. Score: none. Music on LinkedIn reads as marketing; the silence reads as honesty.

---

## Sample 90-second script (~220 words)

> The night I built the first version of Hearth, my sister called me at 11:42 p.m.
>
> She said, "I'm okay. I just don't know who else to call."
>
> She is the eldest daughter. She has been the family's emotional infrastructure for fifteen years. She has a therapist she sees once a month, a husband who loves her, two children who adore her, and that night, at 11:42, the only person she could think to call was her younger brother.
>
> I sat on the kitchen floor and listened. And I thought: she doesn't need a clinician. She doesn't need a chatbot. She needs someone who has time for her on a Tuesday evening, who remembers what she said last week, who is paid to stay.
>
> Therapy is for the diagnosable thing. A friend is for the easy thing. There was nothing for the in-between — the long weight of being the one everyone leans on.
>
> So we built Hearth. You're paired with a trained Keeper — not a therapist, a companion — for as long as it takes. Same person. Every week. Months. Years.
>
> If you're the strong friend, the eldest daughter, the one who carries it — pull up a chair.
>
> The link is in my profile. The Letter is free.

---

## Scene-by-scene Remotion breakdown

The founder's recorded selfie video is rendered via `<OffthreadVideo>` inside a paper-cream `<AbsoluteFill>`. Remotion overlays four element groups across the timeline.

| Frames | Duration | Element | Notes |
|---|---|---|---|
| 0 – 90 | 3.0s | **Opening title card.** Paper background. Single line in Fraunces 500: *"A founding story."* JetBrains Mono eyebrow above: `HEARTH / FOUNDER NOTE`. Cross-fades into the founder video. | No logo lockup yet. Restraint reads as sincerity. |
| 60 – 2280 | ~74s | **Founder video.** OffthreadVideo at 88% scale, centered, with a 24px paper2 inset border and a 2px ember underline along the bottom edge. | Slight letterboxing reads as editorial, not low-res. |
| 90 – 2280 | rolling | **Kinetic captions** (line-by-line, synced to Whisper word timestamps). Inter Tight 600, ink on a paper2 pill, active token in ember. Bottom-third anchored. Max 7 words per line. | See caption strategy below. |
| 240 – 2280 | rolling | **Lower-third nameplate.** Slides in at 8s, holds for 6s, slides out. Re-enters at 60s, holds for 4s, exits. Two lines: Fraunces 500 *"\[Founder Name\]"* / JetBrains Mono *FOUNDER, HEARTH*. | Use a left-aligned ember tick, not a logo. |
| 2280 – 2400 | 4.0s | **Closing CTA card.** Paper background. Three stacked lines, staggered by 8 frames: Fraunces 500 *"Pull up a chair."* / Inter Tight 400 *"Read the Letter — free, every Sunday."* / JetBrains Mono *dearhearth.com/letter*. Ember rule beneath the URL. | No button. The URL is the button. |

Use `<TransitionSeries>` only between the title card → founder video → CTA card boundaries. Inside the founder video, captions and nameplates are siblings in `<Sequence>` blocks, not transitioned scenes.

---

## Caption strategy

Pre-render captions offline; do not transcribe in-render.

1. Run the founder's MP3 through Whisper (`whisper-1`, `verbose_json`, `timestamp_granularities: ["word"]`).
2. Pipe through `openAiWhisperApiToCaptions` from `@remotion/openai-whisper`. Save as `public/captions/founder-story.json`.
3. Group with `createTikTokStyleCaptions` at `combineTokensWithinMilliseconds: 1200` for line-by-line reveal (not word-by-word — that reads frantic).
4. Render: each caption page is a `<Sequence>` from `startMs * fps / 1000` for `(endMs - startMs) * fps / 1000` frames. Inside, map tokens to `<span>` with the active token (current frame within token range) styled `color: ember`, others `color: ink`.
5. Caption pill: paper2 background, 16px radius, 18px x-padding, soft drop shadow `0 2px 12px rgba(14,11,8,0.08)`. Anchored 96px from bottom edge.

No emoji. No all-caps. No neon highlight. The caption should read like a tasteful subtitle in a documentary, not a TikTok pop-on.

---

## Music

**None.** No bed, no piano pad, no ambient loop. LinkedIn's audio-off rate plus Hearth's brand austerity argues against any music. Silence + captions is the format.

---

## Render specs

- Codec: H.264, CRF 18, faststart enabled
- Color: sRGB, no LUT
- Audio: AAC 192 kbps mono (founder's recording is mono — keep it)
- Two outputs from the same composition via `inputProps.aspect`: `square` (1080x1080) and `landscape` (1920x1080). The landscape variant pillar-boxes the founder video on a paper background and lets the captions/nameplate breathe to the right.
- File names: `linkedin-founder-story-square.mp4`, `linkedin-founder-story-landscape.mp4`.

---

## Acceptance criteria

- [ ] Video reads fully with sound off — every spoken sentence appears as a caption within 200ms of being said.
- [ ] Founder is named on screen at least twice (lower-third in/out at 8s and ~60s).
- [ ] Closing CTA card holds the Letter URL legibly for ≥3 seconds.
- [ ] No music. No logo lockup other than the typeset wordmark on opening/closing cards.
- [ ] Total runtime between 60 and 90 seconds. If the recorded VO runs short, do not pad — re-record.
- [ ] First spoken sentence is specific (a time, a person, a place). If it is abstract ("I always cared about…"), reject and rewrite.
- [ ] Caption pill never overlaps the founder's mouth.

## Failure modes to avoid

- Brand-page tone ("At Hearth, we believe…") — this is the founder, in first person, signed.
- Stock B-roll behind the founder. The founder's face is the whole canvas.
- Music. Even tasteful piano. None.
- Word-by-word kinetic captions — reads as TikTok cosplay.
- A "Sign up now" button. The CTA is a free Letter, not a paywall pitch.
- Therapy-adjacent language ("our therapeutic approach"). Hearth is **not** therapy; protect the line.
