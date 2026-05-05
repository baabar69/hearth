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
- Platform: Hearth product (member's first-Sit confirmation email + Keeper profile page) + cross-post to IG/LinkedIn
- Dimensions: 1080 x 1080 (square — works on mobile email and social)
- FPS: 30
- Duration: 1350–1800 frames (45–60s). Default 1500 frames (50s).
- Audio: Keeper's recorded selfie video audio (primary). No music bed.

DELIVERABLE
A single TSX composition (`KeeperIntro`) reused per Keeper via props.
A `props.ts` exporting the zod schema and default props. The composition
is registered once and re-rendered per Keeper via the SSR API
(`bundle()` + `renderMedia()` looping over a Keeper roster CSV).
```

---

## Concept brief

This video lives **inside the product**, not in the feed. It plays:

1. Embedded in the **first-Sit confirmation email** the member receives after booking. The goal is to humanize the Keeper before the first conversation, so the member arrives feeling they already "know" them.
2. On the Keeper's **profile page** at `dearhearth.com/keepers/[slug]`.
3. As an **opt-in cross-post** to Hearth's social channels when the Keeper consents.

This is **product-marketing**, not feed content. The asset is templated: the same composition is rendered per Keeper, with the Keeper's recorded selfie video as the primary track and Remotion adding the brand frame. Hearth's brand commitment forbids using member faces without explicit consent + payment; Keepers are paid contractors and provide both. Keep the recording natural — the Keeper sits at their own kitchen table, in available light, and speaks for 35–45 seconds in their own words.

The promise of the format: by the end of the 50 seconds, a member feels less like they're meeting a stranger and more like they're being introduced to someone a friend already trusts.

---

## Template structure

Three scenes, chained with `<TransitionSeries>` and slow fade transitions (`fade()` + `springTiming({ config: { damping: 200 } })`).

### Scene 1 — Opener (0–4s, 120 frames)

A paper-cream `<AbsoluteFill>`. Centered:
- JetBrains Mono `HEARTH / KEEPER` (22pt, 0.18em letter-spacing, ink, fades in over 8 frames).
- Below it, the Keeper's name in Fraunces 500, 96pt — `props.name`. Fades + lifts 16px on a damping-200 spring.
- A 1px ember rule beneath, drawing across over 14 frames.
- Below the rule, JetBrains Mono `props.cityPair` — e.g. `KARACHI → TORONTO`. This signals cultural-fluency without making it a brochure.

Background carries a 6% paper-grain texture (`staticFile("images/paper-grain.png")`). No logo. The wordmark is the type itself.

### Scene 2 — Keeper selfie (4–46s, 1260 frames)

The Keeper's recorded video plays via `<OffthreadVideo src={staticFile(props.recordedVideoPath)} />`, scaled to 84% and centered inside a paper-2 inset frame:

```tsx
<div style={{
  width: 920,
  height: 920,
  margin: 80,
  borderRadius: 8,
  background: colors.paper2,
  padding: 16,
  boxShadow: `inset 0 0 0 1px ${colors.ink}10`,
}}>
  <OffthreadVideo src={staticFile(props.recordedVideoPath)} muted={false} />
</div>
```

Captions are burned in line-by-line (see below). A small persistent JetBrains Mono lower-tag in the bottom-left reads `props.name · KEEPER`, holding the whole scene at 80% opacity.

### Scene 3 — Closing card (46–50s, 120 frames)

Paper-cream, centered:
- Fraunces 400 italic, 56pt: `props.tagline` (e.g. *"I keep tea hot and stories whole."*). Staggered word-fade-in over 24 frames.
- Inter Tight 500, 32pt: *"See you " + props.sitDayLabel + "."* (e.g. *"See you Sunday."*).
- JetBrains Mono small: `dearhearth.com`.
- A small ember dot at the top, glowing very subtly (opacity oscillates between 0.6–1.0 via `Math.sin(frame * 0.08) * 0.2 + 0.8`).

---

## Captions (burned in, line-by-line)

The Keeper's audio is transcribed offline via Whisper, grouped with `createTikTokStyleCaptions` (`combineTokensWithinMilliseconds: 1200`), and rendered as `<Sequence>` blocks aligned to the Keeper-video scene's local frame.

Caption style:
- Inter Tight 600, 30pt, ink on a paper2 pill (16px x-padding, 8px y-padding, 12px radius).
- Active token: ember.
- Anchored 80px from the bottom edge of the inset frame (so they sit on the paper border, not on the Keeper's face).
- Max 7 words per line.

If a Keeper speaks a non-English greeting (Urdu, Hindi, Tamil, Bengali — common Hearth Keeper backgrounds), preserve it in the caption as the Keeper said it. Do not translate. Cultural fluency is the brand.

---

## `props.ts` interface

The composition is parameterized so one comp serves the whole Keeper roster. Defaults are placeholders so the comp renders empty-but-valid in Studio.

```ts
import { z } from "zod";

export const keeperIntroProps = z.object({
  name: z.string().min(1),                     // "Faiza Rahman"
  tagline: z.string().min(1).max(80),          // "I keep tea hot and stories whole."
  sitDayLabel: z.string().min(1),              // "Sunday" — the member's first Sit day
  recordedVideoPath: z.string()                // "video/keepers/faiza-intro.mp4" — relative to public/
    .regex(/^video\/keepers\/.+\.mp4$/),
  cityPair: z.string()                         // "Karachi → Toronto"
    .regex(/^[A-Za-zÀ-ÿ\s]+ → [A-Za-zÀ-ÿ\s]+$/),
});

export type KeeperIntroProps = z.infer<typeof keeperIntroProps>;

export const defaultKeeperIntroProps: KeeperIntroProps = {
  name: "Faiza Rahman",
  tagline: "I keep tea hot and stories whole.",
  sitDayLabel: "Sunday",
  recordedVideoPath: "video/keepers/faiza-intro.mp4",
  cityPair: "Karachi → Toronto",
};
```

Render the whole roster via the SSR API:

```ts
const bundleLocation = await bundle({ entryPoint: "./src/index.ts" });
for (const keeper of roster) {
  const composition = await selectComposition({
    serveUrl: bundleLocation, id: "KeeperIntro", inputProps: keeper,
  });
  await renderMedia({
    composition, serveUrl: bundleLocation, codec: "h264",
    outputLocation: `out/keepers/${keeper.slug}.mp4`,
    inputProps: keeper,
  });
}
```

---

## Render specs

- Codec: H.264, CRF 18, AAC audio 192 kbps stereo.
- 1080x1080, 30fps, 50 seconds default.
- File naming: `keeper-intro-[slug].mp4`. Also export a 1080x1080 still at frame 60 as `keeper-intro-[slug]-poster.png` for the email's poster image fallback.
- Email embed: use the poster + a play button overlay; click opens the MP4 hosted on Hearth's CDN. Most email clients still don't autoplay video.

---

## Acceptance criteria

- [ ] Composition renders identically given identical props (deterministic).
- [ ] Keeper's name appears in Fraunces 500 in the opening card and persists in the lower-tag during the selfie scene.
- [ ] Captions match the Keeper's spoken words within 200ms; non-English phrases are preserved untranslated.
- [ ] Closing card holds the tagline + "See you {day}" line for ≥3 seconds.
- [ ] No music. No logo lockup other than the typeset wordmark.
- [ ] Video is silently watchable: a member with sound off can read every spoken sentence as a caption and finish knowing the Keeper's name, tagline, and city pair.
- [ ] Cultural details (city pair, language) are preserved without flattening into a generic "global" brochure.
- [ ] Email poster still is rendered from frame 60 (Keeper visible inside the inset, captions present).

## Sound-off readability check

A member opens the email on the subway with headphones unplugged. With sound off, by the 10-second mark, they should know:
1. The Keeper's name (opener — Fraunces 96pt, unmissable).
2. The Keeper is a real person, not a stock model (the inset video is playing).
3. Where the Keeper is from and where they live now (city pair).

By the 30-second mark, they should be reading the Keeper's words via captions. By the closing card, they should know the day of their first Sit.

## Failure modes to avoid

- Treating this as a feed reel — it is product-marketing, not awareness content. Don't optimize for an algorithm.
- Music. The Keeper's voice is the asset.
- Translating non-English greetings in the captions. Preserve them verbatim.
- A Keeper speaking from a stock-looking corporate background. Available light, kitchen table, soft.
- Adding a "Book now" CTA. The member has already booked. The CTA is the relationship, not a button.
- Re-rendering the entire roster every time one Keeper updates their video. Render per-slug only when that slug's input changes.
- Auto-translating cityPair (e.g. into the member's language). The cityPair is identity, not localization.
