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
- Platform: Pinterest (Idea Pin / standard pin)
- Dimensions: 1080 x 1920 (9:16). Standard pin variant exports as 1080 x 1620 (2:3) PNG via `npx remotion still`.
- FPS: 30
- Duration: 270 frames (9s). Slow Pinterest pace — no shorter.
- Audio: silent. Pinterest is a mute platform.

DELIVERABLE
A single TSX file with three exported variants (QuotePin, ReadThisIfPin,
TriptychPin) that share a `paper` background atom and a typography stack.
Plus a `props.ts` with one zod schema discriminated by `variant`. Register
each variant separately under <Folder name="Pinterest">.
```

---

## Concept brief

Pinterest's audience is high-intent, female-skewing, and searches with **quiet language** — "eldest daughter syndrome," "what to read when grief comes back," "the in-between years," "letter to the strong friend." Per Hearth's platform strategy, Pinterest is the **set-and-forget compounder**: pins live for months and are saved into long-lived boards (`comfort`, `slow living`, `journal prompts`). The 2026 Pinterest algorithm explicitly rewards positive, supportive emotional-wellbeing content and editorial-cover aesthetics.

So our pins must (a) front-load a keyword in the title, (b) look like the cover of a small literary magazine on cream paper, (c) reveal slowly. We can lean a touch more keyword-tight than other channels — but never abandon the literary register. "Eldest daughter quote" is fine; "5 signs you're a people-pleaser ✨" is brand-violating and gets the account fact-checked.

Three variants, one Remotion composition family, one shared paper background atom.

---

## Three design variants

### Variant A — **Quote pin** (single sentence, cream paper, ember rule)

Static-feeling 9-second pin. Single Hearth sentence in Fraunces 500, 84pt, set in a 760px wide column with generous leading (1.35). Centered vertically. Above it, a 2px ember rule, 80px wide. Below it, JetBrains Mono `HEARTH / THE LETTER` at 22pt with 0.18em letter spacing.

Motion: the rule draws across in 12 frames (`interpolate(width)`, ease-in-out). The text fades in 8 frames after the rule completes. At frame 240 a tiny `dearhearth.com` URL appears in Inter Tight 400 at the very bottom. Nothing else moves.

Sample copy:
> *Some weeks you don't need advice. You need someone to pull up a chair.*

Subtle paper grain background — `staticFile("images/paper-grain.png")` at 6% opacity. No drop shadows, no gradient, no stock photo.

### Variant B — **"Read this if..." pin** (3 lines reveal sequentially)

Same canvas. Top: JetBrains Mono `READ THIS IF —`. Then three lines in Fraunces 500, 64pt, stacked with 32px gaps, each preceded by a small ember dot (•). Lines reveal one at a time, staggered 30 frames apart (1 second each), via `spring({ damping: 200, durationInFrames: 24 })` on opacity + 16px translateY.

Sample copy:
> READ THIS IF —
> • you're the friend everyone calls
> • therapy is for the big thing, but this is the in-between
> • you've been holding it together for fifteen years

Bottom of pin (frame 240+): JetBrains Mono `dearhearth.com/letter` with a small ember tick. The bottom credit line is the only persistent element other than the paper.

### Variant C — **Multi-pin essay (triptych)**

Three separate 1080x1920 pins designed as a set, posted in sequence on the same board. Same composition, with a `panel: 1 | 2 | 3` prop driving the copy. The triptych reads as a tiny essay. Each pin shares a horizontal ember rule placed at the same y-coordinate so a viewer scrolling past sees a unifying thread across the three.

Suggested arc:
1. **Panel 1 (open):** *"There is a particular loneliness in being the strong friend."* Below, Fraunces italic: *one — the naming.*
2. **Panel 2 (turn):** *"It is not loud. It is the call you almost made and didn't."* Below: *two — the in-between.*
3. **Panel 3 (close):** *"Pull up a chair. You weren't meant to carry it alone."* Below: *three — the invitation.* Plus the URL.

Each panel is a 9s Idea Pin OR a standalone 2:3 still — render both. The triptych is the highest-saving Pinterest format Hearth has.

---

## Pin title and description templates (Pinterest SEO)

Pinterest indexes the **title**, **description**, **board name**, and **image alt text**. Treat each pin like a tiny SEO page. Keyword-front-loaded, never keyword-stuffed.

**Title template (60 chars max, keyword first):**
- *"Letter to the strong friend — for the eldest daughter who's tired"*
- *"Eldest daughter syndrome quote: pull up a chair"*
- *"What to read when grief comes back — a letter from Hearth"*
- *"For the in-between years: a quiet letter on Sundays"*
- *"Quote for the friend everyone calls"*

**Description template (200–300 chars, 3–4 long-tail keywords woven in):**
> A free Sunday letter for anyone carrying the long weight of being the strong friend. Eldest daughter, sandwich-generation caregiver, the one everyone calls — Hearth is peer support for the in-between years. Pull up a chair. Subscribe to the Hearth Letter — free, every Sunday.

**Board names** (Hearth's own boards, keyword-targeted):
- `Letters from Hearth`
- `For the Strong Friend`
- `Eldest Daughter Quotes`
- `Slow Living + Inner Life`
- `Comfort Reads for Hard Weeks`

**Alt text** must be filled out for every pin — describe the image and include one keyword. Example: *"Cream paper quote pin: 'Some weeks you don't need advice. You need someone to pull up a chair.' — Hearth Letter."*

---

## Render specs

For each variant, support **two outputs from the same composition**:

1. **Idea Pin video** — 1080x1920, 9 seconds, 30fps, H.264, CRF 18.
   ```bash
   npx remotion render src/index.ts QuotePin out/pin-quote.mp4 --codec=h264 --crf=18
   ```
2. **Standard pin still** — 1080x1620 (2:3 — Pinterest's preferred standard ratio), PNG, rendered at frame 250 (the resting state, after all reveals).
   ```bash
   npx remotion still src/index.ts QuotePin out/pin-quote.png --frame=250 --image-format=png
   ```

Use `useVideoConfig` and a `mode: "video" | "still"` prop to slightly recompose (the still version anchors text 100px higher to leave room for Pinterest's pin chrome on mobile).

For triptych, generate three files: `pin-essay-01.png`, `pin-essay-02.png`, `pin-essay-03.png`. Schedule them in Pinterest 24 hours apart on the same board so the algorithm reads them as a series.

---

## Acceptance criteria

- [ ] Title is keyword-front-loaded, ≤60 characters, contains a Hearth audience phrase ("eldest daughter," "strong friend," "in-between years," "for the night you can't sleep").
- [ ] Description is 200–300 characters with 3–4 long-tail keywords woven naturally; ends with a soft CTA to the Letter.
- [ ] Pin reads at thumbnail size (test by exporting at 240x432 and reading from arm's length).
- [ ] No emoji, no neon, no stock photography. Cream paper, ember accent, serif type. Period.
- [ ] Triptych panels share a horizontal ember rule at identical y-coordinate.
- [ ] Idea Pin video is exactly 9 seconds; standard pin still uses the resting frame at 8.3s.
- [ ] Alt text is filled and describes the image + one keyword.

## Failure modes to avoid

- Listicle copy ("5 ways to feel less alone"). Hearth does not list.
- Diagnostic pins ("signs you have CPTSD"). Pinterest fact-checks them and Hearth's voice should never moonlight as DSM-lite.
- Linking the pin to a thin landing page — pins linking to broken or low-quality pages tank account quality.
- Hashtag spam in the description. Pinterest weights keywords in body, not hashtags.
- Designing for desktop. Pinterest is overwhelmingly mobile — readability at 240px wide is the test.
- Cheerful saccharine voice ("You got this!"). Hearth does not perform cheerfulness.
