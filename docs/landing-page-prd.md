# Hearth — Marketing Website PRD

**Version:** 0.2 — Restructured from single-page to multi-page architecture
**Last updated:** 2026-04-25
**URL:** dearhearth.com
**Audience:** Designer, copywriter, frontend engineer, marketing

The first version of this document scoped a single long landing page. We have outgrown it. Hearth is now a multi-page marketing site of ten designed pages plus a small set of utility pages. The reasons for the move are practical: a single page cannot carry the long-tail SEO surface area we need (Embers, Keeper profiles, Bridge); a single page cannot serve three distinct funnels (members, gifters, Keeper applicants) with the dignity each deserves; and the deeper pieces — pricing, the Bridge, the founder's letter — each need room to breathe rather than competing for the visitor's attention in one scroll. The Home page remains the front door. The other pages are the rooms inside the house.

---

## 1. Site Goals

The site exists to convert a stranger who arrived from Reddit, a WhatsApp group, a podcast, or a friend's text into:

1. **Pre-launch (now):** an emotionally-engaged waitlist signup who is willing to share their email AND complete a soft-intake AND optionally pay $39 for a guaranteed first Sit slot when we launch
2. **Post-launch:** a member who completes the intake screener and books a first Sit

Conversion is the headline job, but it is not the only job. The site also needs to:

- Build durable organic search presence (Embers, Keeper profiles, Bridge as long-tail SEO assets)
- Serve secondary funnels with their own dedicated paths — gifters (diaspora children buying for parents), Keeper applicants, Bridge therapist applicants
- Earn trust on the topics that take more than a paragraph: pricing, what The Bridge actually is, what a week with a Keeper actually looks like
- Give individual Keepers a discoverable home (a Keeper profile is both a trust object and an SEO object)

The Home page carries the headline conversion job. The other pages carry depth, trust, SEO, and the secondary funnels. The site as a whole is **not** a brochure. It is a **conversion experience** with the warmth of a doorway, not the urgency of a sales pitch.

---

## 2. Target Visitor

**Primary:** the Ayesha persona from the validation work
- 28–42, Pakistani-American or Pakistani-Canadian woman
- Arriving from Reddit (r/ABCDesi), Pakistani-American WhatsApp group share, MasalaChai newsletter, podcast, or friend
- Currently feeling: tired, slightly anxious, weight she can't quite name
- Reading on iPhone (60–65%) or laptop (35%)
- Has tried BetterHelp or Talkspace, lasted 4–8 weeks, churned
- High emotional literacy; high BS-meter
- Will leave the page in 8 seconds if it feels generic, salesy, or wellness-pastel-coded

**Secondary:**
- Pakistani-American men 28–45 (smaller cohort but real)
- Diaspora Indian, Bangladeshi, Sri Lankan visitors (Phase 2 spillover)
- "Concerned diaspora children" — adult kids in US/CA looking to gift Hearth to their parents (the primary audience for `/gift`)
- Pakistani professionals applying to be Keepers (the audience for `/for-keepers`)
- US/CA-licensed South Asian therapists applying to The Bridge (the audience for `/for-therapists`)
- Long-tail organic searchers landing on individual Embers essays or Keeper profiles

---

## 3. Conversion Goals

### Primary CTA
**"Pull up a chair"** → opens email + soft-intake flow. Present on Home, How It Works, Keepers, Keeper Profile, Pricing, Bridge, Embers, About, FAQ.

### Secondary CTAs
- **"Light a Hearth"** (gift flow) — primary CTA on `/gift`, secondary across the site
- **"Apply as a Keeper"** — primary CTA on `/for-keepers`, link in footer
- **"Apply as a Bridge therapist"** — primary CTA on `/for-therapists`, link in footer
- **"Read more from the Hearth"** — on Embers index and individual essays

### Conversion targets (pre-launch, site-wide)
- 5–8% of unique visitors → email signup
- 30–40% of email signups → complete soft-intake
- 8–12% of intakes → pre-pay $39 for first Sit slot
- 1–2 minute median time-on-page on Home; 3+ minutes on Embers essays; 90+ sec on Keeper profiles
- ≥35% of sessions visit a second page (Home → Keepers, Home → Pricing, Embers → Home)

---

## 4. Site Map

```
                        ┌──────────────────────────────┐
                        │  TOP NAV (every page)         │
                        │  Home · How It Works · Keepers│
                        │  · Pricing · Embers · Gift    │
                        │  ────────  Pull up a chair →  │
                        └──────────────────────────────┘
                                       │
        ┌──────────────────┬───────────┼───────────┬──────────────────┐
        │                  │           │           │                  │
        ▼                  ▼           ▼           ▼                  ▼
  ┌──────────┐    ┌──────────────┐ ┌────────┐ ┌────────┐    ┌──────────────┐
  │  Home /  │    │ How It Works │ │Keepers │ │Pricing │    │   Embers     │
  │          │    │/how-it-works │ │/keepers│ │/pricing│    │   /embers    │
  │ Hero ─→  │    │ 4-step deep  │ │ Grid + │ │ 2-tier │    │ Essay index  │
  │ Pull up  │    │ + week + Sit │ │ filters│ │ + comp │    │ (SEO surface)│
  └────┬─────┘    └──────┬───────┘ └───┬────┘ └───┬────┘    └──────┬───────┘
       │                 │             │          │                 │
       │ previews:       │             ▼          │                 ▼
       │  Keepers ───────┼──────→ ┌─────────┐     │           ┌──────────┐
       │  Pricing ───────┼────────┼────────→│     │           │ /embers/ │
       │  How It Works ──┘        │/keepers/│     │           │ [slug]   │
       │                          │ [slug]  │     │           │ essay    │
       │                          │ Profile │     │           └──────────┘
       │                          └────┬────┘     │
       │                               │          │
       │                               └────┬─────┘
       │                                    │
       ▼                                    ▼
  ┌──────────┐                       ┌────────────┐
  │  Bridge  │                       │ Light a    │
  │ /bridge  │                       │ Hearth     │
  │ Clinical │                       │ /gift      │
  │ handoff  │                       │ Gift flow  │
  └──────────┘                       └────────────┘
       │
       ▼
  ┌──────────┐    ┌──────────┐    ┌──────────┐
  │  About   │    │   FAQ    │    │   404    │
  │ /about   │    │  /faq    │    │  /404    │
  │ Founder  │    │ 30 Qs    │    │ Warm     │
  │ + values │    │          │    │ stray    │
  └──────────┘    └──────────┘    └──────────┘

┌──────────────────────────────────────────────────────────┐
│  FOOTER (every page)                                     │
│  ──────────────────────────────────────────────────────  │
│  Column 1 — Hearth   Column 2 — For…    Column 3 — More  │
│   How It Works        For Keepers        Embers          │
│   Keepers             For Therapists     Press           │
│   Pricing             Light a Hearth     Stories         │
│   The Bridge          Contact            FAQ             │
│   About                                  Crisis          │
│  ──────────────────────────────────────────────────────  │
│  "Hearth is not therapy." · 988 (US) · 1-866-585-0445   │
│  Privacy · Terms · © 2026 Hearth, Inc.                   │
└──────────────────────────────────────────────────────────┘
```

**Designed pages (10):**
1. Home `/`
2. How It Works `/how-it-works`
3. Meet the Keepers `/keepers`
4. Keeper Profile `/keepers/[slug]`
5. Pricing `/pricing`
6. The Bridge `/bridge`
7. Embers `/embers`
8. About `/about`
9. Light a Hearth `/gift`
10. FAQ `/faq`

**Utility pages (7):**
- For Keepers `/for-keepers` (application)
- For Therapists `/for-therapists` (Bridge partner application)
- Stories `/stories`
- Crisis Resources `/crisis`
- Privacy `/privacy`
- Terms `/terms`
- Press `/press`
- 404 `/404`

---

## 5. Page-by-Page Specifications

### 5.1 Home `/`

**Purpose:** Convert the visitor who recognized themselves into someone who pulls up a chair, and route the rest to the right deeper page.

**Primary CTA:** "Pull up a chair" (hero + sticky + final)
**Secondary CTAs:** "Light a Hearth" (gift), "Meet the Keepers" (preview → /keepers), "How it works" (preview → /how-it-works), "See pricing" (preview → /pricing)

**Above-fold layout:** full viewport height, asymmetric grid (text 60% / image 40% on desktop; stacked on mobile). Background: warm cream (#FAF6F0) with single warm-light visual. Logo top left. Nav minimal — "How it works", "Keepers", "Pricing", "Embers", "Gift", "Sign in" (small, top right).

**Section list:**

**Hero**

*Variant A (the doorway):*
> # The fire is on.
> ## Pull up a chair to a Keeper who'll listen, hold what's heavy, and stay through the long talks. Not therapy. Not a chatbot. Something older than both.
>
> [Pull up a chair →]

*Variant B (the recognition):*
> # You don't have to carry it alone.
> ## A Keeper at Hearth — culturally fluent, fully present — for the family things, the grief, the in-between days no friend has time for.
>
> [Pull up a chair →]

*Variant C (the soul):*
> # Some conversations deserve the long talk.
> ## Hearth is the place between calling a friend and seeing a clinician — for the weight that doesn't fit either.
>
> [Pull up a chair →]

**Visual:** NO stock photography. Custom illustration of a single warm doorway with light, OR a hand holding a cup of tea, OR a fireplace with two empty chairs facing it. Warm earth tones. No people's faces (specificity narrows the audience).

**Microcopy under CTA:** *Free to start · No credit card · 60-second sign-up*

**The Problem (recognition)**

> # You weren't meant to figure it out alone.
>
> Some weights are too small for therapy and too heavy for a friend.
>
> The phone call from your mom about your dad's heart, again. The question you can't ask anyone in your family. The grief that's a year old and still here. The marriage decision nobody can make for you. The Tuesday afternoon where suddenly everything feels harder than it should.
>
> These are the long-talks. Hearth was built for them.

**What Hearth Is + "not therapy"**

> # What Hearth is.
>
> Hearth is a peer-support membership. You're paired with a Keeper — someone older, wiser, culturally fluent — who stays with you across months and years. Not as a therapist (we'll explain why in a moment). Not as a chatbot. As a presence.
>
> A weekly Sit. Long talks in chat throughout the week. Embers (small written wisdom) when you want them. A Friday note from your Keeper that says what stayed with them from the week.
>
> The way your grandmother kept the people in her village.

> ## Hearth is not therapy.
>
> Hearth is not therapy and we say so loudly. Therapy is for clinical conditions — depression, anxiety disorders, PTSD, the things that need a licensed clinician. We have those, too: when your Keeper sees that what you need is therapy, we'll bridge you to a culturally-aligned, licensed therapist through The Bridge.
>
> What Hearth is *for* is what therapy was never meant to be: companionship through the long arc, perspective from someone who's lived more, a person who knows your grandmother's name.

**Featured Keepers (preview, 3-up)**

Three Keeper cards. Photo, name + initial, two-line bio, themes, languages, 30-sec audio play button. CTA below: **"Meet all our Keepers →"** linking to `/keepers`.

**How It Works (preview)**

Four short steps in a row, each one line. CTA below: **"See what a week looks like →"** linking to `/how-it-works`.

**Pricing (preview)**

Two tier cards, prices visible, no comparison table. CTA below: **"Compare plans →"** linking to `/pricing`.

**Stories (3 quotes)**

> "I cried for the first time about my mom in eighteen months. With my Keeper, who knew what 'walima' meant before I had to explain. I didn't know I needed that until I had it."
> — N., 36, Pakistani-American, on her 6th month with her Keeper

> "Therapy was helpful for the depression. My Keeper is what makes Wednesdays bearable. They're different things."
> — A., 42, Toronto

> "I gifted Hearth to my mother in Karachi. She speaks to her Keeper in Urdu every Friday. We talk more now than we have in five years."
> — Z., 33, Brooklyn

CTA below: **"Read more stories →"** to `/stories`.

**Founder one-liner**

A single line, signed, linking to the full letter on `/about`:

> "I built Hearth for the people, like me, who don't have that anymore." — *[Founder name] · [Read the letter →]*

**Final CTA**

> # The fire is on.
> Pull up a chair. We're ready when you are.
>
> [Pull up a chair →]

*Free to start · No credit card · 60 seconds*

**Footer** (see global footer in §4)

**Mobile adaptation:** single column from 768px down. Featured Keepers becomes a horizontal scroll with snap. Pricing tiers stack. Sticky bottom-bar CTA after the visitor scrolls past the hero.

**SEO**
- Title: *Hearth — pull up a chair.*
- Meta: *Peer-support memberships paired with culturally-fluent Keepers. For grief, family, the long talks. Not therapy.*

---

### 5.2 How It Works `/how-it-works`

**Purpose:** Move a visitor from "this sounds nice" to "I can picture my Tuesday with this." Convert the rational reader.

**Primary CTA:** "Pull up a chair"
**Secondary CTAs:** "See pricing", "Meet the Keepers"

**Above-fold layout:** quieter hero than Home. Headline, one-paragraph subhead, primary CTA, anchor links to the four sections below.

**Section list:**

**Hero**
> # How a week with your Keeper actually works.
> No mystery. No fine print. Here is what happens, in order, from the day you sign up.

**The four steps (expanded)**

Each step gets its own row with a longer narrative, an example, and a small visual.

**Step 1 — Pull up a chair (60 seconds)**
> Tell us a little about what you're carrying. We'll ask the questions thoughtfully and make sure Hearth is right for you. If it isn't — for example, if what you actually need is a clinician — we'll say so on the next screen and point you somewhere good.

**Step 2 — Meet your Keepers (5 minutes)**
> We hand-match you with three Keepers we think will fit. Watch their videos. Read their bios. Listen to a few seconds of their voice. Pick the one who feels right. You can switch in the first 30 days, no questions asked.

**Step 3 — The First Sit (50 minutes, this week)**
> A 50-minute video Sit with your chosen Keeper. Bring whatever you want. Or bring nothing and let them lead. Most people leave the First Sit feeling lighter than they expected.

**Step 4 — The Long Talk (always)**
> Your Keeper is in your pocket between Sits. Long-form chat, voice notes, a Friday note about what stayed with them from your week.

**What a week looks like (timeline)**

A horizontal timeline (vertical on mobile), Sunday through Saturday, with realistic touchpoints:

- **Sun** — A short voice note from your Keeper, asking how the week landed.
- **Tue** — You write a paragraph about the call with your mom. Your Keeper replies that evening.
- **Wed evening** — Your weekly 50-minute Sit.
- **Fri morning** — A "Friday note" from your Keeper: one or two lines about what stayed with them from your week.
- **Whenever** — You open Embers and read something quiet on the train home.

**What happens in a Sit**

> A Sit is a 50-minute video call. No worksheets. No structured protocol. Your Keeper has read your week. You bring what you want — the heavy thing, the small thing, the thing you can't tell anyone else. They listen. They ask. Sometimes they tell you a story. Sometimes they sit with you in the silence.
>
> Sits end with a short ritual: one sentence about what you want to carry into the week, one sentence about what you want to set down.

**Final CTA** — primary CTA repeated.

**Mobile adaptation:** timeline stacks vertically. Step rows collapse to single-column with the visual above the text.

**SEO**
- Title: *How Hearth works — what a week with your Keeper looks like.*
- Meta: *From the first 60-second sign-up to your weekly Sit and the long talks in between. A walk-through of what Hearth actually feels like, week to week.*

---

### 5.3 Meet the Keepers `/keepers`

**Purpose:** Let visitors browse the people. Drive depth into individual Keeper profiles. Convert the visitor who needs to *see* the human before they commit.

**Primary CTA:** "Pull up a chair"
**Secondary CTAs:** "Read [Keeper]'s full profile" (per card), "Apply as a Keeper" (footer of page)

**Above-fold layout:** intro paragraph + filter row + grid begins above fold on desktop.

**Section list:**

**Hero**
> # Meet the Keepers.
> Each one a person — not a profile. Browse, listen, read. The match matters.

**Filters (sticky on scroll)**

- Themes (Mothers, Marriage, Grief, Career-cultural, Sandwich years, In-laws, Faith, Diaspora identity, Sexuality, Parenting)
- Languages (Urdu, English, Punjabi, Hindi, Sindhi, Bengali, Tamil, Gujarati, Arabic, Pashto)
- Time zones (Pakistan, Gulf, US East, US Central, US Pacific, UK)
- Gender (any / women / men)

**Keeper grid**

Cards laid out 3-up on desktop, 2-up on tablet, 1-up on mobile. Each card:
- Warm candid photo (not professional headshot)
- First name + last initial
- City → city (e.g., Karachi → Toronto)
- Two-line bio
- Theme tags (4–6)
- Languages
- 30-second audio intro (small play button)
- "Read full profile →"

**Sample card voice:**

> Rabia K., Karachi → Toronto, age 51.
> Was a school principal for 25 years. Has informally mentored 60+ younger women across the city. Will tell you when you're being your own worst enemy, kindly.
> *Themes: Mothers • Sandwich years • Career-cultural • Marriage*
> *Speaks: Urdu, English, Punjabi*
> [▶ 30 sec from Rabia] [Read full profile →]

**Bottom of page**

> Don't see someone who fits? We add new Keepers every month. Tell us what you're looking for and we'll find them.
>
> [Pull up a chair →]
>
> Or — are *you* the person someone needs? [Apply as a Keeper →]

**Mobile adaptation:** filter row collapses into a "Filter" sheet (full-screen overlay). Cards single-column with horizontal scroll for theme tags.

**SEO**
- Title: *Meet our Keepers — culturally fluent peer mentors at Hearth.*
- Meta: *Browse Hearth Keepers — Urdu, Punjabi, Hindi, English. For mothers, marriage, grief, the diaspora middle. Hand-matched, not algorithmically assigned.*

---

### 5.4 Keeper Profile `/keepers/[slug]`

**Purpose:** Convert the visitor who has identified a specific Keeper they want to sit with. Also: a long-tail SEO surface (each profile ranks for "Urdu speaking mentor", "Pakistani diaspora grief support", etc.).

**Primary CTA:** "Pull up a chair with [Name]"
**Secondary CTAs:** "Back to all Keepers", "Apply as a Keeper"

**Above-fold layout:** large warm portrait (left, 50%), name and one-line voice (right, 50%), inline audio sample, primary CTA.

**Section list (using Rabia K. as the worked example):**

**Hero**
> # Rabia K.
> ## Karachi → Toronto. Mothers, sandwich years, the career questions nobody else can answer.
>
> [▶ Listen to Rabia — 60 sec]
> [Pull up a chair with Rabia →]

**Full bio (300–500 words)**

> Rabia spent 25 years as a school principal in Karachi before moving to Toronto in 2018 to be near her son. She has been the person younger women in her family — and her neighborhood, and eventually her city — call when something is too heavy for the family group chat. More than 60 of them, by her count.
>
> She is the kind of person who can sit with a long silence without filling it. She remembers the names of your siblings. She will tell you, kindly, when you are being your own worst enemy. She believes in what your mother believed in and also in what your mother could not see.

**What people sit with Rabia about**

A short bulleted list, plain language:
- The mother who calls every day and the guilt of not picking up
- Career decisions your family doesn't have the frame for
- The marriage question — staying, leaving, the in-between
- Raising children between two cultures
- The grief of being the elder now

**Languages:** Urdu (native), English (fluent), Punjabi (conversational)
**Time zone:** America/Toronto (ET)
**Sit availability:** Wednesdays, Thursdays, Saturday mornings (PKT-friendly)

**Voice samples (3 short clips)**
- "On being the eldest daughter" (45 sec)
- "On grief that doesn't go away" (60 sec)
- "On the mothers we become" (50 sec)

**A note from Rabia**

> "I had a teacher in Karachi who told me, when I was 23 and overwhelmed, that I did not have to be useful all the time. I think about her every week. I would like to be that for someone."

**What Rabia is *not* for**

> Rabia is not a therapist. If what you are carrying is clinical — a depression that won't lift, a panic that interrupts your life, a trauma that replays — she will say so, and we will help you find a clinician through The Bridge. Often, people sit with both: a Keeper for the long arc, a therapist for the clinical work.

**Primary CTA repeated**
> [Pull up a chair with Rabia →]

**Mobile adaptation:** portrait stacks above name. Audio samples become a vertical list with thumb-sized play buttons. Sticky bottom CTA.

**SEO (per profile, populated from Sanity)**
- Title: *Rabia K. — Urdu-speaking Keeper at Hearth (Toronto).*
- Meta: *Sit with Rabia, a Hearth Keeper from Karachi via Toronto. For mothers, sandwich years, career-cultural questions. Urdu, English, Punjabi.*
- Schema.org Person markup
- OG image: warm portrait crop

---

### 5.5 Pricing `/pricing`

**Purpose:** Convert the visitor who has decided they're interested and now wants to know what it costs and why.

**Primary CTA:** "Pull up a chair" on the recommended tier
**Secondary CTAs:** "Light a Hearth" (gift), "Read pricing FAQ"

**Above-fold layout:** brief intro line + the 2-tier cards in view above the fold on desktop; single tier stacked on mobile.

**Section list:**

**Hero**
> # Pricing.
> Honest numbers. No founders' rates. No fake discounts. Here is what it costs and why.

**The two tiers**

**Hearthside — $39/month** *(biweekly Sits — most popular)*
> Matched Keeper. A Sit every two weeks (twice a month). Unlimited Long Talk. Full Embers. One Circle a month.
> Annual: $390/year (~$32.50/mo — "2 months free")
> [Pull up a chair]

**Hearth Deep — $99/month** *(weekly Sits)*
> Matched Keeper. A Sit every week (four per month). Priority Long Talk (4hr response). Two Circles a month. Anniversary rituals. Bridge therapist matching.
> Annual: $990/year (~$82.50/mo — "2 months free")
> [Go deeper]

**Billing toggle:** *Monthly · Annual (2 months free)*

**Comparison table (full)**

A clean table with rows for: Matched Keeper, Sits per month, Sit frequency, Long Talk chat, Friday note, Embers library, Monthly Circle, Bridge therapist matching, Switch Keeper anytime, Pause anytime, Money-back guarantee. Columns for the two tiers. Checks and dashes — no marketing-speak in cells.

**Why we cost what we cost**

> A Keeper at Hearth is paid fairly for their time and skill. We don't undercut on price by underpaying providers. We're not the cheapest option — and we're not trying to be. We're the most relationally rich service for the price.
>
> About 60% of what you pay goes directly to your Keeper. The rest covers the platform, the Bridge clinical safety net, and the people who match you well.

**Pricing FAQ (10 questions, accordion)**
- What does "billed monthly" actually mean?
- Can I pause my membership?
- What's the cancellation policy?
- Do you take insurance?
- Can I change tiers later?
- What does Hearth Deep include that Hearthside doesn't?
- Can I gift a membership? *(links to /gift)*

**Final CTA**
> [Pull up a chair →] · [Light a Hearth →]

**Mobile adaptation:** tier cards stack with the recommended tier first. Comparison table becomes a horizontal scroll with sticky first column.

**SEO**
- Title: *Hearth pricing — honest numbers, no founder's tricks.*
- Meta: *Two tiers: Hearthside $39/month (biweekly Sits) and Hearth Deep $99/month (weekly Sits). What you pay, what your Keeper makes, what's included.*

---

### 5.6 The Bridge `/bridge`

**Purpose:** Build clinical credibility. Convert the visitor who is suspicious of "peer support" until they understand we have a real handoff to real therapists. Also: rank for "South Asian therapist directory" and adjacent terms.

**Primary CTA:** "Pull up a chair"
**Secondary CTAs:** "Apply as a Bridge therapist" (for clinicians), "See pricing"

**Above-fold layout:** quiet hero, longer subhead, primary CTA.

**Section list:**

**Hero**
> # When you need more than a Keeper, we bridge you.
> Some weights need a clinician. The Bridge is how we get you to one.

**Why the Bridge exists**
> Some weights need a clinician. Active depression, anxiety disorders, trauma — these need a licensed therapist trained in the specific care they require.
>
> The Bridge is our partner network of US-licensed Pakistani- and South-Asian-heritage therapists. If your Keeper sees that you'd be better served by a clinician, they'll connect you. You can keep your Keeper for the relational arc and add a therapist for the clinical work.

**The handoff (how it actually works)**

A four-panel diagram + narrative:

1. Your Keeper notices a pattern — a depression that isn't lifting, a panic that's getting worse, a trauma that's surfacing.
2. They name it in your next Sit, gently. They explain why a clinician would help.
3. They introduce you, by name, to a Bridge therapist they trust. No cold intake form.
4. You start with the therapist for the clinical work. You keep your Keeper for the long arc.

**The therapist network (teaser)**

> Our Bridge therapists are all US- or Canada-licensed (LCSW, LMFT, PhD, PsyD), with caseloads that reflect the cultures we serve. We onboard a small number per quarter, by invitation and review. We do not pay them less than they make in private practice.
>
> *We don't list the network publicly to protect therapist caseloads. Members are introduced to specific therapists by name.*

**For therapists who want to join**

> Are you a US- or Canada-licensed clinician of South Asian heritage? We are slowly building the Bridge.
>
> [Apply to The Bridge →] (links to `/for-therapists`)

**What the Bridge is NOT**

> The Bridge is not a referral mill. We are not paid by therapists for placements. We do not sell your data to clinicians. The Bridge exists because Keepers see things, and seeing things means doing something about them.

**Final CTA**
> [Pull up a chair →]

**Mobile adaptation:** four-panel handoff stacks vertically. Therapist application CTA appears as its own card.

**SEO**
- Title: *The Bridge — culturally-aligned therapy when you need more than a Keeper.*
- Meta: *South Asian heritage, US- and Canada-licensed therapists, introduced by your Keeper when you need clinical care. Inside Hearth's Bridge.*

---

### 5.7 Embers `/embers`

**Purpose:** Long-tail SEO and brand depth. The free reading room. Builds audience for the paid product without selling on every page.

**Primary CTA:** "Subscribe to Embers" (email-only, no soft-intake)
**Secondary CTAs:** "Pull up a chair", "Read more"

**Above-fold layout:** quiet, library-feeling. Three featured essays large. Categories below.

**Section list:**

**Hero**
> # Embers.
> Small written wisdom from our Keepers and a few essayists we love. Free. Quiet. Yours.

**Featured essays (3)**

Large cards: title, author, 2-line excerpt, read time.

Examples of the kind of essay that lives here (not topics like "5 productivity tips"):
- *On being the eldest daughter and never being asked* — Rabia K., 8 min read
- *What my mother could not say about her marriage* — Anonymous, 11 min read
- *The grief of leaving Karachi, twelve years late* — Faisal M., 6 min read

**Categories**
- Mothers · Marriage · Grief · Diaspora · Faith · Sandwich years · The long arc · Letters

**Essay index (paginated)**

Card grid: title, author first name + initial, excerpt, category tag, read time.

**Embers newsletter signup (mid-page + footer of page)**

> A short email when a new Ember is lit. Once a week. No marketing.
>
> [Email] [Subscribe]

**What Embers is** (small italic line at the bottom)
> Embers are essays in the Hearth voice — quiet, specific, written by people who have lived the thing. Not blog posts. Not SEO churn. Not advice content. Read one with tea.

**Mobile adaptation:** featured essays stack with full-bleed images. Categories become a horizontal scroll. Essay index switches to a single-column list.

**SEO**
- Title: *Embers — quiet essays from Hearth's Keepers.*
- Meta: *Essays on mothers, marriage, grief, the diaspora middle. Free, quiet, written by people who have lived the thing.*
- Per-essay: each Ember is a separate document with its own title, meta, OG image, schema.org Article markup, canonical URL. ISR-rendered. Internal-linked to relevant Keeper profiles and to Home.

---

### 5.8 About `/about`

**Purpose:** Trust. The page a thoughtful visitor reads before committing. The home of the founder's letter and the public statement of why Hearth exists.

**Primary CTA:** "Pull up a chair"
**Secondary CTAs:** "Apply as a Keeper", "Read Embers"

**Above-fold layout:** simple. Headline + the founder's letter beginning above the fold.

**Section list:**

**Hero**
> # Why Hearth exists.
> A letter from the founder, and the values that built this.

**The founder's letter (full)**

> When my grandmother died, I realized something nobody had taught me to need: the person you go to when life gets heavy.
>
> In the village she came from, that person was always there. There was always a fire, always tea, always a person who'd lived more than you and had time to listen. They didn't have credentials. They had attention.
>
> I built Hearth for the people, like me, who don't have that anymore. Who've moved away from villages, who've lost their elders, who don't fit the Western therapy model perfectly, who need something older and warmer than a stranger with a clipboard.
>
> If that sounds like you — pull up a chair.
>
> — *[Founder name]*

**Mission**

> One sentence: *To restore the elder a generation of us never had.*

**Values (short)**

- **The long arc.** A Keeper stays. We are not built for one-and-done.
- **Cultural specificity, not vague inclusivity.** Hearth started for the Pakistani diaspora because that is the village we know. We will earn the right to hold others.
- **Honest about what we are not.** Hearth is not therapy. We say so on every page.
- **Pay people fairly.** Our Keepers are not gig workers. Our therapists are not undercut.
- **Privacy as a value, not a checkbox.** Your Keeper knows your grandmother's name. Nobody else needs to.

**Team**

A short, plain section. Founder + (as the team grows) head of Keepers, head of clinical (Bridge medical director), engineering. Names, one-line bios. No stock photo "leadership team smiling at a whiteboard" energy.

**Press / mentions** (when real)
> A small row of logos. We add them when they are true.

**Final CTA**
> [Pull up a chair →]

**Mobile adaptation:** letter renders as a single column with comfortable line length (max 65ch). Values stack as a list.

**SEO**
- Title: *About Hearth — why we built it and who we are.*
- Meta: *A letter from Hearth's founder, our mission, our values, and the people building this. For the diaspora generation that lost the village.*

---

### 5.9 Light a Hearth `/gift`

**Purpose:** Convert the diaspora child buying for a parent. This is a real and underserved funnel — adult kids in the US/CA who want to give their mother in Karachi (or Toronto, or Houston) a Keeper.

**Primary CTA:** "Light a Hearth for someone you love"
**Secondary CTAs:** "Pull up a chair for yourself", "How it works"

**Above-fold layout:** warm hero, image of a wrapped envelope or a single lit candle. Short headline. Single CTA.

**Section list:**

**Hero**
> # Light a Hearth.
> Give a parent, a sister, a friend a Keeper of their own.

**Why people gift Hearth**

> Some of the most-loved members of Hearth didn't sign themselves up. Their daughter did. Their son did. A friend did.
>
> If you have a parent who calls you for things you don't have the time or the perspective to hold — Hearth is who they should be calling. We'll set them up gently.

**How the gift works (3 steps)**

1. **Choose a length.** 1 month ($39), 3 months ($99), 6 months ($189), or a year ($350). Prepay only — no recurring billing on gifts.
2. **Write a note.** A short message from you to them. We'll deliver it with the gift.
3. **We onboard them gently.** A warm email from us — never a "you've been gifted!" carnival. We help them through soft-intake at their pace. They choose their own Keeper.

**Sample messages (templates)**

Short, warm starter notes the gifter can edit:

> "Mama — I think you would love having someone to talk to on Friday afternoons. They speak Urdu. Try it. With love, [name]."

> "For the year you've had. You deserve someone who will actually listen. — [name]."

**The gift form**

- Recipient name
- Recipient email (or "I'll deliver it myself" — generates a printable card)
- Recipient phone (optional, for WhatsApp delivery)
- Gift length (1 / 3 / 6 / 12 months)
- Personal note (textarea, 280 char limit)
- Your name
- Your email (for the receipt + onboarding updates)
- Delivery date (today, or scheduled)

**FAQ (gift-specific, 6 questions)**
- What if my recipient doesn't want it?
- Can I gift to someone in Pakistan?
- Does the recipient know how much it cost?
- Can I renew the gift?
- Can I gift the Hearth Deep tier?
- What languages do Keepers speak?

**Final CTA**
> [Light a Hearth →]

**Mobile adaptation:** gift form becomes a single-column flow with one question per screen (wizard-style on mobile only).

**SEO**
- Title: *Light a Hearth — gift a Keeper to someone you love.*
- Meta: *Gift Hearth to a parent, a sister, a friend. 3, 6, or 12 months with a culturally-fluent Keeper. Onboarded gently, in their language.*

---

### 5.10 FAQ `/faq`

**Purpose:** Answer everything a thoughtful person would want to know before signing up. Catch SEO traffic for question-shaped queries.

**Primary CTA:** "Pull up a chair" (sticky on the right)
**Secondary CTAs:** "Read about The Bridge", "See pricing"

**Above-fold layout:** intro paragraph + a search/filter input + categorized accordion.

**Section list:**

**Hero**
> # Questions, answered plainly.
> If we don't answer yours, [tell us](/contact) and we will.

**Categories (jump links)**
- About Hearth
- Keepers
- Pricing & billing
- The Bridge & clinical
- Privacy & data
- Gift
- Languages & locations
- Crisis

**The 30 questions (categorized accordion)**

*About Hearth*
1. Is Hearth therapy?
2. How is this different from BetterHelp / Talkspace?
3. How is this different from a friend or a family member?
4. What does "peer support" actually mean here?
5. Who built Hearth and why?

*Keepers*
6. Are Keepers licensed therapists?
7. Where are Keepers based?
8. How do you choose Keepers?
9. What if my Keeper isn't the right fit?
10. Can I switch Keepers?
11. How are Keepers paid?

*Pricing & billing*
12. How much does it cost?
13. Is there a free trial?
14. How do you cancel?
15. Do you take insurance?
16. What's the reschedule policy?
17. What if I miss a Sit?

*The Bridge & clinical*
18. What's The Bridge?
19. What if I'm already in therapy?
20. Can I do Hearth + therapy together?
21. What if I have a clinical diagnosis?

*Privacy & data*
22. Is this private?
23. Who can see what I write to my Keeper?
24. Are Sits recorded?
25. What happens to my data if I cancel?

*Gift*
26. Can I gift this to a parent in Pakistan?
27. Does the recipient know what I paid?

*Languages & locations*
28. What languages do Keepers speak?
29. Can men join Hearth?

*Crisis*
30. What happens if I'm in crisis?

**Tone:** plain, honest, lightly conversational. No corporate-speak. Each answer 2–4 sentences max.

**Final CTA**
> Still wondering something? [Email us](/contact). Or — [pull up a chair →].

**Mobile adaptation:** category jump links become a top dropdown. Sticky CTA moves to bottom bar.

**SEO**
- Title: *Hearth FAQ — every question, answered plainly.*
- Meta: *Is Hearth therapy? How much does it cost? What's The Bridge? Honest answers to the 30 most-asked questions about Hearth.*
- Per-question: FAQPage schema.org markup with each Q&A as a discrete entity (so individual questions can rank in search).

---

### 5.11 Utility Pages

Shorter specs. Each utility page uses the same global header/footer and respects the same voice.

**For Keepers `/for-keepers`** — Keeper application. Hero: *"Are you the person someone needs?"* + a 200-word note from the founder about who Keepers are. Application form: name, location, languages, brief background, link to portfolio/community work, two short essay questions ("Who has informally turned to you, and what for?" / "When have you sat with someone in a hard moment?"). Routes to ops manual review queue.

**For Therapists `/for-therapists`** — Bridge partner application. Hero: *"Build the Bridge with us."* + paragraph on what the Bridge is from the clinician's POV (caseload control, fair pay, cultural alignment). Application form: name, license type + state(s), Headway/Alma profile, cultural background, languages, current caseload status.

**Stories `/stories`** — Long-form member testimonials, name-changed, with permission. Each story 200–400 words. No photos. Acts as a social-proof depth page; Home only shows three quotes, this page is the full archive. Adds to SEO surface for "[X] community / mental wellness" terms.

**Crisis Resources `/crisis`** — Plain, calm, ungated. 988 (US), 1-866-585-0445 (Canada), Samaritans (UK), Umang Pakistan, BasicNeeds India, regional South Asian crisis lines. Plain text, large font, no marketing copy, no CTAs except "If you are not in crisis but want to talk to someone — Hearth is here." Linked from every page footer.

**Privacy `/privacy`** — Standard privacy policy + a plain-English version above it ("What this means in normal words"). HIPAA-comparable (not HIPAA-covered-entity) language, carefully scoped. Reviewed by counsel.

**Terms `/terms`** — Standard ToS. Plain-English summary above the legal text.

**Press `/press`** — Empty at launch except for: a one-paragraph "what Hearth is" for press, founder bio, downloadable assets (logo, brand colors, founder photo), press contact email. Real press hits added as they happen.

**404 `/404`** — Warm, not jokey. *"You've wandered into a room we haven't built. The fire is still on, though."* + links to Home, Keepers, Embers.

---

## 6. Microcopy Library

### CTA Variations
- "Pull up a chair" (primary)
- "Find your Keeper"
- "Start your First Sit"
- "Sit with us"
- "Light a Hearth" (gift)
- "Read [Keeper]'s full profile"
- "Compare plans"
- "Subscribe to Embers"

### Navigation labels
- Top nav: *Home · How It Works · Keepers · Pricing · Embers · Gift · Sign in*
- Footer: *Hearth · For… · More*
- Mobile menu trigger: *Menu* (no hamburger-only — accessibility)
- Skip-to-content: *Skip to main content*

### Page titles (browser tab, short form)
- Home: *Hearth*
- How It Works: *How it works · Hearth*
- Keepers: *Keepers · Hearth*
- Keeper Profile: *[Name] · Hearth*
- Pricing: *Pricing · Hearth*
- Bridge: *The Bridge · Hearth*
- Embers: *Embers · Hearth*
- About: *About · Hearth*
- Gift: *Light a Hearth · Hearth*
- FAQ: *Questions · Hearth*

### Breadcrumbs (used on Keeper Profile and Embers essays only)
- *Keepers › Rabia K.*
- *Embers › Mothers › On being the eldest daughter*

### Pricing toggle copy
- *Monthly* / *Annual (2 months free)*
- Tooltip on annual: *"One payment. Cancel anytime, refund prorated."*

### Gift flow microcopy
- Length picker: *"How long would you like to keep the fire on?"*
- Note prompt: *"Write something only you would say."*
- Delivery date: *"Send today, or pick a day."*
- Confirmation: *"The Hearth is lit. We'll let you know when [name] pulls up a chair."*

### Loading states
- "Lighting the fire..."
- "Brewing the tea..."
- "Pulling up your chair..."

### Error states
- "Something didn't catch — let's try again."
- "We couldn't reach the kitchen — give it a moment."

### Success states
- "You're in. Welcome to Hearth."
- "Your chair is ready."
- "First Sit booked. We'll see you then."
- "The Hearth is lit." (gift)

### Empty states
- "Nothing yet. The fire is warm whenever you are."

### Confirmation
- "Your Keeper has been notified."
- "Your reflection has been sent."

---

## 7. Trust Signals

### Always-Visible (every page footer)
- "Hearth is not therapy." stated in the footer of **every page**, no exception
- Crisis line — 988 (US) and 1-866-585-0445 (Canada) — always visible in the footer
- "Your data is yours" privacy mention near forms
- HTTPS padlock + simple "encrypted" mention near the soft-intake

### Earned
- Press mentions (placeholders during waitlist phase, real on launch — kept on `/press`, surfaced lightly on `/about`)
- Keeper bios with verifiable credentials (educators, mentors, lived-experience writers)
- Bridge partner network branding (visible on `/bridge` when relationships established)

### Avoid
- Stock-photo "diverse women laughing" trust theatrics
- Fake "5-star reviews" carousels
- "As featured in" logos until real
- "HIPAA compliant" badges (technically misleading; we are HIPAA-comparable, not a HIPAA-covered-entity)

---

## 8. Forms

### Email Capture (Home hero + Home final + most page footers)
- Email field only
- "Pull up a chair" submit
- Microcopy: 60 seconds · Free to start · No credit card

### Soft-Intake (post-email)
- 5 multi-select questions
- Skip-able — submitting means we send a follow-up email even without answers
- Each question warm-voiced, not clinical

### Pre-pay Pre-launch ($39 First Sit)
- Stripe Elements embedded
- Single button: "Reserve my First Sit — $39"
- Money-back guarantee until launch
- Critical: this is the **highest-confidence validation signal** during pre-launch

### Apply as Keeper (`/for-keepers`)
- Name, location, languages, brief background, link to portfolio/community work
- Two short essay questions
- Routes to Founder/ops manual review queue

### Apply as Bridge Therapist (`/for-therapists`)
- Name, license type + state(s), Headway/Alma profile, cultural background, languages, current caseload status

### Gift purchase (`/gift`)
- Recipient name, recipient email/WhatsApp, gift length (3/6/12 mo), personal note (280 char), delivery date, gifter name + email
- Stripe Checkout (annual prepay only — no recurring billing on gifts)
- Generates printable card if "I'll deliver it myself" is selected

### Embers newsletter signup (`/embers` mid-page + page footer)
- Email field only
- "Subscribe" submit
- Goes to Buttondown / Beehiiv list, separate from waitlist
- Microcopy: *"Once a week. No marketing."*

### Contact form (`/contact`, linked from FAQ + footer)
- Name, email, message
- Topic dropdown: General · Press · Keeper application · Bridge partnership · Privacy / data · Other
- Routes to founder/ops shared inbox

---

## 9. SEO Strategy

The move to multi-page is, in part, an SEO move. A single page can target maybe 3–5 keyword clusters; a 17-page site targets dozens, with each page indexed and ranked independently.

### Per-page SEO targets

**Home `/`** — brand terms ("Hearth", "Hearth peer support"), high-intent matched terms ("Pakistani peer support", "alternative to therapy diaspora").

**How It Works `/how-it-works`** — informational queries ("how does peer support work", "what is a peer support membership", "weekly check-in service").

**Keepers `/keepers`** — directory-shaped queries ("Urdu speaking mentor", "Pakistani peer mentor", "South Asian women mentors").

**Keeper Profile `/keepers/[slug]`** — individual long-tail (the *real* SEO play): "Urdu speaking mentor Toronto", "Pakistani diaspora grief mentor", named-author searches once Keepers publish Embers.

**Pricing `/pricing`** — comparison and intent queries ("Hearth pricing", "Hearth vs BetterHelp cost", "peer support cost").

**Bridge `/bridge`** — *"South Asian therapist directory"*, *"Pakistani American therapist"*, *"Urdu speaking therapist US"*, *"culturally-aligned therapy"*. This page does double duty as a referral landing page.

**Embers `/embers` and `/embers/[slug]`** — the long-tail engine. Each essay targets one specific query: *"Pakistani grief diaspora"*, *"diaspora mother in-laws"*, *"eldest daughter syndrome desi"*, *"sandwich generation Pakistani"*. 50+ essays in first 6 months, each 6–12 minute reads, each sourced from a real Keeper or essayist (no AI-spammed SEO).

**About `/about`** — brand searches ("Hearth founder", "who built Hearth"), values searches ("Hearth mission").

**Gift `/gift`** — *"gift therapy for parent"*, *"emotional support gift mother"*, *"gift mental wellness diaspora"*.

**FAQ `/faq`** — question-shaped queries via FAQPage schema. Each Q&A is its own indexable entity ("is Hearth therapy?", "how much does Hearth cost?").

### Internal linking strategy

- Home links into all 9 other designed pages (preview sections double as link funnels)
- Every Keeper profile links to Embers essays the Keeper has authored (and vice versa)
- Embers essays link to relevant Keeper profiles (author + topical) and to Pricing/Home
- Bridge links to specific Keeper profiles + Pricing
- About links to /for-keepers (recruiting funnel)
- Footer carries the global link graph on every page

### Avoid
- High-CPC mental health terms (depression therapy, anxiety treatment) — competing with BetterHelp/Talkspace SEO budget is suicide
- "Online therapy" — semantic adjacency dangerous

### Site-wide on-page SEO
- Per-page title tag and meta description (specified in §5)
- Canonical URLs on every page
- Schema.org markup: Organization (site-wide), WebApplication (Home), Person (Keeper profiles), Article (Embers), FAQPage (FAQ), Product (Pricing tiers)
- Open Graph + Twitter cards (warm imagery, page-specific)
- Sitemap.xml auto-generated, includes all pages including Embers and Keeper profiles
- robots.txt allows crawl of everything except `/api/*`
- Page speed >90 Lighthouse on every page
- Mobile-friendly (verified on every page)

---

## 10. Performance Requirements

Targets apply per-page.

- Lighthouse Performance: ≥90 mobile, ≥95 desktop
- LCP (Largest Contentful Paint): <2.5s
- CLS (Cumulative Layout Shift): <0.1
- TTI (Time to Interactive): <3.5s
- Total page weight: <1.2MB
- No render-blocking JS
- Image optimization: WebP + AVIF, lazy-loaded below fold
- Fonts: subsetted, woff2, font-display: swap
- CDN: Vercel Edge or Cloudflare

**Rendering strategy (Next.js):**
- Home, How It Works, Pricing, Bridge, About, Gift, FAQ, utility pages: **SSG** (static export at build, revalidated on deploy)
- Keepers index `/keepers`: **ISR** with 1-hour revalidate (so new Keepers appear without a redeploy)
- Keeper profile `/keepers/[slug]`: **ISR** with 1-hour revalidate
- Embers index `/embers`: **ISR** with 1-hour revalidate
- Embers essay `/embers/[slug]`: **ISR** with 24-hour revalidate (essays change rarely)
- 404: static

---

## 11. A/B Test Plan

### Home tests (most traffic, most signal)

**Test 1 — Hero headline**
- Variant A: "The fire is on."
- Variant B: "You don't have to carry it alone."
- Variant C: "Some conversations deserve the long talk."
- Metric: signup conversion rate

**Test 2 — Pre-pay CTA placement**
- Variant A: Pre-pay $39 visible on Home
- Variant B: Pre-pay $39 only after soft-intake
- Metric: pre-pay conversion + total signup

**Test 3 — Founder one-liner on Home**
- Variant A: with founder one-liner + link to /about
- Variant B: without
- Metric: signup conversion + click-through to /about

### Cross-page tests

**Test 4 — Pricing on Home preview vs. behind /pricing click**
- Variant A: Pricing preview cards on Home (current proposal)
- Variant B: Home links to /pricing without preview
- Metric: pricing-page visits, signup conversion, paid-tier interest

**Test 5 — Keeper card layout on Home**
- Variant A: 3-up grid (curated picks)
- Variant B: 5-up horizontal scroll (more browsable)
- Metric: keeper_card_viewed, click-through to /keepers and /keepers/[slug]

**Test 6 — Embers as nav item vs. footer-only**
- Variant A: Embers in top nav (current proposal)
- Variant B: Embers in footer only
- Metric: total Embers traffic, signup conversion from Embers visitors

**Test 7 — Gift CTA in nav vs. only on Home + footer**
- Variant A: "Gift" as a top nav item
- Variant B: Gift only as a Home secondary CTA + footer link
- Metric: /gift visits, gift conversions

**Tooling:** PostHog feature flags + experiment groups; goal-tracking via PostHog. Multi-page funnels tracked via PostHog session tracking.

---

## 12. Analytics Events

### Acquisition (every page)
- page_view (URL, source, referrer, UTM params, page_name)
- nav_clicked (target_page)
- footer_link_clicked (target_link)
- hero_cta_clicked (page_name)
- secondary_cta_clicked (page_name, cta_label)

### Engagement — Home
- scroll_depth (25%, 50%, 75%, 100%)
- keeper_card_viewed (keeper_id)
- keeper_audio_played (keeper_id, duration)
- pricing_tier_viewed
- founder_oneliner_clicked

### Engagement — How It Works
- timeline_section_viewed
- step_expanded (step_number)

### Engagement — Keepers / Keeper Profile
- keeper_filter_applied (filter_type, filter_value)
- keeper_profile_viewed (keeper_id, source) ← new
- keeper_audio_sample_played (keeper_id, sample_id)
- keeper_profile_cta_clicked (keeper_id)

### Engagement — Pricing
- pricing_billing_toggled (monthly|annual)
- pricing_tier_compared (tier_a, tier_b) ← new
- pricing_faq_opened (question_id)

### Engagement — Bridge
- bridge_page_scrolled (depth) ← new
- bridge_handoff_diagram_viewed
- therapist_apply_cta_clicked

### Engagement — Embers
- ember_index_filter_applied (category)
- ember_read (essay_id, read_time_seconds) ← new
- ember_audio_played (essay_id) ← new
- ember_subscribe_initiated
- ember_subscribe_completed

### Engagement — About
- founder_letter_read (scroll-completion)
- value_section_viewed

### Engagement — Gift
- gift_flow_started ← new
- gift_length_selected (length)
- gift_note_written (length_chars)
- gift_purchased (amount, length, delivery_mode)

### Engagement — FAQ
- faq_category_jumped (category)
- faq_opened (question_id)

### Conversion (site-wide)
- email_submitted (page_name)
- soft_intake_started
- soft_intake_completed
- prepay_initiated
- prepay_completed (amount)
- keeper_application_submitted
- therapist_application_submitted
- gift_purchased

### Funnel (multi-page)
- visit → email → soft_intake → keeper_match → prepay
- entry_page → second_page → conversion (track which entry pages convert best)
- ember_read → email_submitted (the SEO funnel)
- keeper_profile_viewed → email_submitted (the depth funnel)
- gift_flow_started → gift_purchased (the gifter funnel)

---

## 13. Mobile-Specific Considerations

### Layout
- Single column from 768px and below
- CTAs are full-width
- Images max 600px wide on mobile (smaller assets)
- Font: 16px base minimum (no sub-16 anywhere)

### Multi-page navigation
- Top nav collapses to a single "Menu" button (with the word, not just a hamburger icon)
- Tapping Menu opens a **full-screen overlay menu**, not a side-drawer — calmer feel, single thumb-zone
- Overlay menu lists: Home, How It Works, Keepers, Pricing, The Bridge, Embers, Gift, About, FAQ, Sign in
- Sticky bottom-bar primary CTA on Home, How It Works, Keepers, Pricing, Bridge, About (after scrolling past the hero)
- No sticky bar on Embers essays (preserves reading flow), Gift (uses its own form), FAQ (uses its own sticky CTA on the right on tablet)

### Touch
- All CTAs ≥44pt × 44pt
- No hover-only interactions
- Accordion FAQ tested for thumb reach
- Form fields auto-focus next on submit (smooth keyboard flow)
- Filter sheets on Keepers index slide up from the bottom with a clear "Done" button

### iOS-specific
- Apple Sign-In offered alongside email
- "Add to Home Screen" prompt (PWA) for repeat visitors

### Android
- Google Sign-In offered
- Material Design subtle adaptations (button radii, shadow conventions)

---

## 14. Tech Stack Recommendation

- **Framework:** Next.js 15+ on Vercel — **App Router with file-based routing** for the multi-page structure. Server Components by default. ISR for `/keepers/*` and `/embers/*`.
- **Styling:** Tailwind CSS + custom design tokens
- **Animation:** Framer Motion (sparingly — slow, calm motion only)
- **Forms:** React Hook Form + Zod validation
- **Analytics:** PostHog (self-hosted) + GA4 (lightweight, no PII)
- **CMS:** Sanity — **in scope from Phase 1, not deferred.** Embers and Keeper profiles need a content layer from day one. Schemas: Keeper, Ember (essay), EmberCategory, Story, PressItem, FAQItem, PricingFAQItem.
- **Image hosting:** Sanity asset CDN + Vercel Image Optimization
- **Fonts:** self-hosted (subsetted Tiempos serif + Söhne sans, OR Garamond + Inter as budget alternative)
- **Email:** Resend or Postmark for transactional
- **Newsletter:** Buttondown (founder voice, simple) or Beehiiv. Two lists: waitlist and Embers.
- **Payments:** Stripe (Checkout for gifts, Elements for pre-pay)
- **Search (FAQ + Embers):** local Fuse.js index at first; Algolia or Typesense if/when scale demands

---

## 15. Launch Checklist

### Site-wide
- [ ] Domain registered (dearhearth.com or fallback)
- [ ] SSL certificate active
- [ ] Lighthouse 90+ mobile and desktop on **every page**
- [ ] All copy reviewed by founder for voice
- [ ] Compliance counsel review of marketing claims (especially Bridge and "not therapy" language)
- [ ] All forms tested end-to-end (email, soft-intake, pre-pay, Keeper apply, Therapist apply, gift, contact, Embers subscribe)
- [ ] Email automations live (welcome, soft-intake reminder, pre-pay receipt, gift confirmation, Ember weekly)
- [ ] Stripe live mode + webhook tested for both pre-pay and gift purchase
- [ ] PostHog tracking verified on all key events (per page)
- [ ] Crisis resources visible in footer of every page
- [ ] Privacy Policy + ToS + intake disclosures published
- [ ] OG image + Twitter card set per page
- [ ] 404 + 500 pages designed
- [ ] Cross-browser tested (Safari, Chrome, Firefox, Edge — all current)
- [ ] Cross-device tested (iOS Safari, Android Chrome, iPad Safari, desktop)
- [ ] Accessibility audit (axe-core or similar) passed on every page
- [ ] Sitemap.xml includes all designed and utility pages, plus all Keepers and Embers
- [ ] Internal links verified (no orphan pages, no broken links)
- [ ] Founder + ops have admin access verified
- [ ] Backup deployment on standby
- [ ] First 5 organic Reddit/WhatsApp posts queued

### Per-page
- [ ] **Home** — final hero variant chosen for launch (others queued for A/B); featured Keepers selected
- [ ] **How It Works** — week-timeline visual designed; "what happens in a Sit" copy approved
- [ ] **Keepers** — at least 8 Keepers live with full data; filters functional; CMS tested
- [ ] **Keeper Profile** — every Keeper profile has audio + bio + photo + at least 2 voice samples
- [ ] **Pricing** — comparison table reviewed by ops; pricing FAQ approved by counsel
- [ ] **Bridge** — handoff diagram designed; therapist application form tested
- [ ] **Embers** — seeded with **at least 12 essays at launch**; categories populated; subscribe form live
- [ ] **About** — founder's letter final; values approved; team page reflects current team
- [ ] **Gift** — Stripe Checkout flow tested end-to-end; printable card generation tested; recipient onboarding email approved
- [ ] **FAQ** — all 30 questions answered and reviewed; FAQPage schema verified
- [ ] **Utility pages** — Crisis page reviewed by counsel; Privacy plain-English version published

---

## 16. What This Site Is NOT

- A fundraising page (no investor pitching anywhere)
- A clinical product (we are NEVER making medical claims, on any page)
- A B2B page (no `/workplaces` until Phase 2)
- An app (the marketing site is separate from the member app at `app.dearhearth.com`)

And specifically:

- **`/embers` is NOT a generic blog.** No productivity hacks. No "top 10 lists". No SEO churn essays. No AI-spammed posts. Embers are curated essays in the Hearth voice — quiet, specific, written by people who have lived the thing.
- **`/keepers` is NOT a marketplace.** Visitors do not "book" a Keeper directly from the directory. The directory is for browsing; matching happens through soft-intake.
- **`/bridge` is NOT a public therapist directory.** We protect therapist caseloads. The page describes the network without listing it.
- **`/pricing` is NOT a sales page.** No urgency tactics. No fake countdown timers. No "founders' rate" theatrics.
- **`/gift` is NOT a holiday-store.** No "Mother's Day! 20% off!" energy. The gift is a serious thing.

The site has one job: **convert the visitor who recognized themselves into someone who pulls up a chair, while giving the rest of the visitors — the gifters, the Keeper applicants, the long-arc readers — a dignified door of their own.** Everything else is a different document.

---

## 17. Evolution Plan

### Phase 1 (Launch — Months 0–6)
**Launch all 10 designed pages + 7 utility pages.** Waitlist + early-member acquisition. Heavy iteration on Home hero, Keeper section (both on Home and on individual profiles), Pricing display, and the gift flow. Sanity CMS in production from day one for Keepers and Embers.

### Phase 2 (Months 6–12)
- Add real testimonials with permission across `/stories` and Home (replacing placeholders)
- Add real press mentions on `/press` and `/about`
- Possibly add a brand video (90 seconds, slow, founder-narrated) on Home and About
- Refine copy across all pages based on call-with-customer learnings
- Add live "Keeper available now" indicator on `/keepers` (drives urgency without manufacturing it)
- **Add `/workplaces`** (B2B) — separate from the consumer funnel
- **Localized pages: `/ur` (Urdu) and `/es` (Spanish)** — full site translations of Home, How It Works, Keepers, Pricing, Bridge, FAQ
- More depth on Keeper profiles (full bios, longer videos, member-written notes about each Keeper)

### Phase 3 (Months 12–24)
- **Common Room** — `/common-room` (community space, gated to members)
- Anniversary-mode lead gen ("share Hearth with someone who needs it")
- `/hi` (Hindi) and possibly `/ar` (Arabic) localizations
- Public-facing data on outcomes (with care, with consent, with statistical honesty)

---

## 18. Closing Note

This site is the front door of Hearth and the rooms inside. The Home page is still the doorway with the fire visible behind it, the chair already pulled out — but the visitor who steps inside now has somewhere to walk.

How It Works is the room where they understand the rhythm. Keepers is the room where they meet the people. The Bridge is the room where they see the seriousness. Embers is the room where they sit alone with tea and read. About is the room where the founder is still writing.

Each page is designed to **deepen recognition before commitment.** Most wellness sites are forgettable, salesy, or saccharine. Most therapy sites are clinical and cold. Hearth's job — across every page — is to be **neither.**

If a visitor leaves the site and *remembers it tomorrow*, the site worked. If they don't remember it, no amount of conversion optimization will save the business.

Build for the memory. Optimize for the conversion second. Build the rooms with the same care you built the doorway.
