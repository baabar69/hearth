# Hearth — The Content Engine

How content actually gets made every week.

**Companion docs:** [04-hearth-marketing-strategy.md](./04-hearth-marketing-strategy.md), [02-remotion-capabilities.md](./02-remotion-capabilities.md)

---

## The principle

One literary essay per week. Eleven outputs derived from it. The atom is the only thing that takes real writing care. Everything else is craft-cropping.

This is not assembly-line content. It is one carefully made thing, then careful re-presentation across the formats people happen to read.

---

## The weekly atom

### What an atom is

An 800–1,200 word literary essay. First-person or close-third. Specific. Slow. One true thing.

### Who writes it

Rotating authors:
- **Founder** — every other Sunday in months 0–6, then monthly.
- **Lead Keeper** — a Keeper writes the alternate Sunday.
- **A member** (with consent and a $200 honorarium) — once per quarter, for stories. Edited by Lead Keeper to protect privacy.

### What an atom must do

Open with a single specific sentence. Not "in today's world." Not "we've all been there." A specific image. A specific moment.

Hold *one* true thing. Not three. One. The whole essay should be one observation slowly excavated.

Name a feeling people carry but don't have language for. The reader should reach the end and think: *I didn't know that had a name.*

End on stillness. The CTA goes in the footer block, not in the closing paragraph. The essay has to land, then a separate footer offers the next step.

### What an atom must NOT do

- Open with a question to the reader.
- Reference "trauma," "healing journey," "self-care."
- Use bullet points in the body.
- Cite statistics.
- Try to be useful in a self-help sense. Useful is a side effect; the essay's job is to be true.

---

## The weekly cadence

| Day | Output | Length | Channel | Owner |
|---|---|---|---|---|
| Sun 7am | Hearth Letter | 800–1,200 words | Substack | Author of the week |
| Sun 8am | Sub Notes excerpt | 1 short post | Substack Notes | Same |
| Sun 9pm | "Soft post" Reel | 30–45s | Instagram | Content Lead |
| Mon 9am | IG carousel essay | 8–10 slides | Instagram | Content Lead |
| Mon 12pm | LinkedIn long post | 250–400 words | LinkedIn (founder) | Founder |
| Tue 10am | Reel: whisper monologue | 60–75s | Instagram | Content Lead |
| Wed 9am | YouTube long essay | 8–18 min | YouTube | Video Lead |
| Wed 7pm | Sub Notes — line from YT | 1 post | Substack Notes | Content Lead |
| Thu 10am | Reel: letter-to pattern | 12–20s | Instagram | Content Lead |
| Thu 12pm | Threads — 3 posts | Short | Threads | Content Lead |
| Fri 9am | Pinterest pins (3–5) | Static | Pinterest | Content Lead |
| Sat 10am | Reel: b-roll voiceover | 60–90s | Instagram | Content Lead |

That's eleven outputs. Plus Stories daily (light, behind-the-scenes, no copy required). Plus the founder's personal LinkedIn rhythm (3–5 posts/week).

---

## The production pipeline

### Tools

- **Substack** — Letter publishing + Notes.
- **Notion or Airtable** — content calendar, atom tracker.
- **Figma** — IG carousel templates, Pinterest pin templates, quote cards.
- **Remotion** — every video format. See [02-remotion-capabilities.md](./02-remotion-capabilities.md).
- **ElevenLabs** — voiceover for b-roll Reels and YouTube long essays.
- **Whisper** — caption generation from audio.
- **Descript** — light video editing for raw whisper-monologue Reels.
- **Bunny.net or Cloudflare Stream** — video hosting for embeds.
- **Buttondown** as Substack backup; never let one platform own the audience entirely.

### Roles (lean structure)

- **Author of the week** — writes the atom (rotating).
- **Content Lead** — owns atomization. Crops the atom into Reels, carousel, Pinterest, Notes, Threads. Schedules everything.
- **Video Lead** — owns Remotion videos. Renders the YouTube long essay and the b-roll Reel from the atom each week.
- **Founder** — writes the LinkedIn post personally. Approves the atom before publication.

In months 0–6, this can be one person (the founder) plus one part-time Content Lead. In months 6–12, the Video Lead becomes a separate hire.

### The atom-to-output handoff

By Friday 4pm of the prior week, the author submits the atom to the Content Lead. The Content Lead has 48 hours to:

1. Identify the **central truth** (the one sentence the whole atom turns on).
2. Identify the **most-screenshot-worthy 3–5 lines.**
3. Identify the **opening sentence** (becomes the Reel hook + Pinterest pin headline + Sub Notes cover line).
4. Identify the **closing image** (becomes the b-roll Reel script + the carousel last slide).
5. Draft all 11 outputs in a working doc.
6. Send to Founder + Lead Keeper for review by Saturday noon.

By Sunday 7am, the Letter publishes. The other 10 outputs are queued in Buffer/Later and go out per the schedule above.

---

## Voice enforcement

The voice rules from the strategy doc are non-negotiable. Two checks before any output ships:

### The 7-second test
Read the first 7 seconds of the output (or the first sentence of a written post). If a stranger could imagine *Calm, Headspace, BetterHelp, Modern Health, or Brown Girl Therapy* having written it, rewrite it.

### The "sister test"
Would the author send this to her sister with a one-line "this made me cry" message? If no, the output isn't ready.

If either test fails, the Content Lead has authority to send it back. The Founder does not override this.

---

## Asset library

Build these once, reuse forever. By end of month 3:

- **Color tokens** — the TypeScript file in [02-remotion-capabilities.md](./02-remotion-capabilities.md). Import into every video, every Figma file.
- **Typography stacks** — Fraunces / Inter Tight / JetBrains Mono in all weights, served from one CDN config.
- **Carousel templates** in Figma — 8 templates for 8 essay shapes (single quote, list of 5, before/after, letter format, etc.).
- **Reel hook plates** in Remotion — the first 3 seconds, 10 visual variants. Author swaps text + audio.
- **Pinterest pin templates** — 5 pin shapes, brand-locked.
- **B-roll library** — 50–100 slow visual clips (hands, mugs, candles, blankets, doorways, kitchens, windows). Either commissioned (best) or licensed from Pond5/Artgrid.
- **Music library** — 20 ambient tracks pre-cleared (Tom Rosenthal, Ólafur Arnalds, Hania Rani style — license through Musicbed or Artlist).
- **Voiceover voices** — 4–6 ElevenLabs voice profiles, each cloned with consent from a Keeper or a hired voice actor. Each voice represents a different "Keeper energy."
- **Sound-design kit** — soft door close, kettle whistle, paper turn, chair pull. Use sparingly.
- **Quote-card library** — 200 quote cards from Embers essays, ready to post on quiet days.

---

## Calendar planning

Plan three months ahead at the atom-topic level. Keep weekly execution flexible.

### Quarterly atom themes

Each quarter has 13 weeks. Group atoms into rough themes:

- **Q1 (Jan–Mar):** Beginnings, returning, the year that didn't go to plan
- **Q2 (Apr–Jun):** Mothers, marriage seasons, weddings, family pressure
- **Q3 (Jul–Sep):** Grief, the in-between, identity, the slow drift
- **Q4 (Oct–Dec):** Holidays, family obligations, year-end reflection, gifting

Don't stick to themes rigidly. If a Keeper writes a brilliant atom on grief in May, ship it — themes are scaffolding, not jail.

### Cultural calendar overlays

Mark the calendar a year ahead with cultural moments that resonate with the SVA:
- Lunar New Year / Chinese New Year
- Ramadan / Eid (al-Fitr and al-Adha)
- Diwali, Holi, Eid Milad
- Mother's Day, Father's Day (multiple dates per region)
- Wedding seasons (Nov–Feb in South Asia, May–Sept in West)
- Back-to-school
- Holiday season
- New Year reset

Atoms timed to cultural moments outperform generic atoms by ~3x in our peer category. Plan one atom per month against a cultural moment.

---

## Quality bar — the floor we don't drop below

These are the floors. Outputs that don't meet them don't ship.

- **No typos.** Two-pass proof on every Letter, Reel caption, carousel slide.
- **Every Reel has burned-in captions.** Sound-off viewing is ~60% of plays.
- **Every video has a real cover image** designed for thumbnail visibility, not auto-cropped.
- **Every carousel ends with a "what's next" slide** that isn't a hard sell.
- **Every external link uses our UTM convention** so we can attribute later.
- **Every output is logged in the calendar** with publish date, channel, and link.

---

## Experimentation protocol

We learn by running disciplined experiments, not by chasing trends.

### Monthly experiment cycle

One channel-format experiment per month. Hypothesis, ship, measure, decide:

- **Month X hypothesis:** "If we run a 12-second IG Reel as a pure quote-on-cream-paper with no music, it will out-save our whisper monologues because of pattern-interrupt in a noisy feed."
- **Month X test:** Ship 4 such Reels over the month.
- **Month X measure:** Saves + shares per Reel, vs. baseline whisper monologue.
- **Month X decide:** Adopt, kill, or iterate.

Document each in a single-page experiment log in this folder. Don't hand-wave.

### What we don't experiment with

- Voice. The voice is locked. Experiments are at the format/distribution level, not the writing level.
- Pricing. The pricing is locked at $39/$99 for at least 12 months. Experiments here would erode trust.
- Keeper match quality. We do not A/B test member experience.

---

## Annual content review

In month 11 of any year:

- Re-read every Letter from the year. Identify the 3 atoms that drove the most subs, paid conversions, and replies.
- Identify the 3 worst — what failed, why.
- Re-survey 50 members on which essays they remember and why.
- Re-pick voice rules: are they still accurate? What needs adding?
- Re-evaluate channel mix: did anything beat its target? Did anything underperform for 2 quarters running?
- Update [04-hearth-marketing-strategy.md](./04-hearth-marketing-strategy.md) accordingly.

The strategy is living. The engine is steady. The atoms are slow. Keep it that way.
