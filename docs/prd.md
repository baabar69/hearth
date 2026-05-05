# Hearth — Product Requirements Document (PRD)

**Version:** 0.1 — MVP scope
**Last updated:** 2026-04-25
**Owner:** Founder
**Audience:** Engineering, design, ops

---

## 1. Product Vision

Hearth is a peer-support membership product. The core unit of value is the **Keeper relationship** — a Pakistani-trained, culturally-fluent companion paired with the member for as long as the member wants them. The product is everything that surrounds and supports that relationship: discovery, intake, matching, sessions, async chat, group programs, content, payments, crisis bridging, and ongoing rituals.

The product is *not* a marketplace. The product is *not* a chatbot. The product is *not* a directory. The product is a **relationship-care platform** with the lightest possible product surface that lets the relationship deepen.

Design principle: **the app should feel like the digital equivalent of pulling up a chair at a quiet table.** Everything that doesn't serve that feeling should be cut.

---

## 2. User Personas

### 2.1 Member — Primary
**Ayesha, 31, Pakistani-American, Jersey City, married mother of two, software PM.**
- Pain: father back home had a stroke; mother is overwhelmed; Ayesha can't sleep; her US-based therapist via EAP didn't understand Pakistani family dynamics
- Goal: someone who *gets it*, who's available consistently, who isn't just a generic American therapist
- Tech comfort: high. iOS user. Pays monthly subscriptions on instinct. Cancels 40% of them within 90 days.
- Decision drivers: cultural fluency > clinical credentials, consistency > flexibility, dignity > novelty
- Failure modes: leaves if the Keeper feels generic, leaves if the app feels gimmicky, leaves if the chat goes cold

### 2.2 Member — Secondary
**Imran, 38, Pakistani-Canadian, Toronto, doctor, lost mother 8 months ago.**
- Pain: men's emotional support broken in his community; couldn't grieve openly; uses alcohol more than he wants
- Goal: a Keeper who isn't preachy; can hold his ambivalence about his mother without trying to fix it
- Tech comfort: medium. Android user, doesn't use a lot of consumer apps.
- Decision drivers: dignity > everything, gender of Keeper might matter, time-zone flexibility, anonymity from his medical community

### 2.3 Member — Tertiary
**Hamza, 24, second-gen Houston, recent grad, working in finance, parents pressuring him on marriage and career.**
- Pain: doesn't speak fluent Urdu, feels caught between his parents' expectations and his own identity; impostor syndrome at work
- Goal: someone who can translate between his American self and his parents' world

### 2.4 Keeper
**Rabia, 47, Karachi, retired school principal, runs a women's mentoring circle in her neighborhood, has informally mentored 60+ younger women over 20 years, fluent Urdu + English, decent Punjabi.**
- Pain: her husband is salaried; she has time and skills but no good outlet for paid mentoring
- Goal: meaningful work, paid in USD, flexible evening hours
- Tech comfort: medium. WhatsApp expert, basic web user
- Decision drivers: dignified compensation, clear training, good Hearth-side support

### 2.5 Bridge Therapist
**Dr. Sana Khan, 41, LCSW, private practice in Edison NJ, Pakistani-American, accepts Cigna and Aetna via Headway.**
- Pain: marketing herself eats time she could spend with clients; her practice has weeks of waitlist
- Goal: stable referral pipeline of pre-screened, culturally-aligned clients

---

## 3. User Journeys

### 3.1 Discovery → First Sit

```
Visitor lands on dearhearth.com
  ↓
Reads hero / value prop / how it works
  ↓
Clicks "Pull up a chair" CTA
  ↓
Email + name capture
  ↓
Soft intake (30 sec): What brings you to Hearth today?
  (multi-select: family, grief, career, identity, in-between, just curious)
  ↓
Required intake screener (PHQ-9 + GAD-7 + Hearth screen)
  ↓
[Branching:]
  - Below clinical thresholds → continue to Keeper match
  - Above thresholds → routed to The Bridge with explainer
  - Acute risk markers → immediate 988 / crisis-line surfaced + Bridge fast-track
  ↓
Keeper pairing (3 candidate Keepers shown with bios, voice samples, 90-second video intros)
  ↓
Member picks one
  ↓
Pricing tier selection (Hearthside $39/month / Hearth Deep $99/month)
  ↓
Payment (if paid)
  ↓
First Sit booked (within 5 days, ideally within 48 hours)
  ↓
Confirmation + pre-Sit prep email
  ↓
Reminder 24h before, 1h before
  ↓
First Sit
  ↓
Post-Sit: Keeper note + member reflection prompt + Long Talk thread opens
```

### 3.2 Ongoing Member Experience

```
Weekly Sit (Hearthside) — booked recurring slot
  ↓
Long Talk — async messaging throughout the week
  ↓
Keeper sends Friday "what stayed with me" reflection
  ↓
Optional: Embers content surfaced in feed (curated to member's themes)
  ↓
Optional: Circle invitations for relevant cohorts
  ↓
Monthly: 90-day re-screen reminder
  ↓
Anniversary: Keeper sends marker of significant dates (member-opted-in)
  ↓
Annual: Member writes Letter to Future Self; sealed
```

### 3.3 The Bridge Handoff Flow

```
Trigger: intake threshold OR Keeper-flagged in-session OR member self-request
  ↓
Member sees Bridge explainer (this is for clinical care, here's why, here's what it costs)
  ↓
Member matched to 2–3 Bridge therapists (location + insurance + cultural fit)
  ↓
Member books with Bridge therapist (Headway-style)
  ↓
Keeper relationship continues alongside clinical care (member keeps their Keeper on either tier)
  ↓
For high-risk cases: Hearth ops follows up at 24h, 7d, 30d to confirm member is connected to clinical care
```

---

## 4. Feature Catalog

### 4.1 MVP — Must have for launch (Months 0–6)

- Authentication (email + magic-link OR password; Apple/Google sign-in)
- Onboarding flow with intake screener (PHQ-9, GAD-7, Hearth custom screen)
- Keeper directory + matching (founder-curated initially, algorithmic later)
- Profile pages for Keepers ("At the Hearth")
- Booking flow for Sits (calendar integration)
- Video sessions (Zoom-quality reliability) on web + iOS + Android
- Async chat thread (The Long Talk) with text + voice notes
- Subscription billing with Stripe (click-to-cancel compliant)
- Account management (cancel, change tier, update payment)
- Email transactional system
- Crisis resources (always-visible 988 link, country-aware crisis lines)
- Bridge referral routing (manual ops + email pairing initially)
- Basic Embers library (10–20 pieces at launch)
- Privacy policy + ToS + intake disclosures
- HIPAA-comparable security infrastructure
- Mobile responsive web; native iOS app (Android via PWA in MVP, native by Mo 6)

### 4.2 V1.1 — Should have (Months 6–12)

- Native Android app
- Push notifications (Sit reminders, Long Talk responses, Embers)
- Voice-only Sit option (privacy/bandwidth-constrained members)
- Group Circles (scheduling + video + member roster)
- Embers content library expanded to 50+ pieces with audio narration
- Member referral program ("Light a Hearth")
- Keeper performance dashboard
- Bridge coordinator workflow (admin tool for routing)
- Better matching algorithm (preferences + availability + cultural fit)
- Annual Letter to Future Self ritual feature
- Keeper anniversary date markers (member-controlled)
- Multi-language UI (Urdu UI option in app)

### 4.3 V2 — Nice to have (Months 12–24)

- B2B portal (Hearth for Workplaces)
- Family/couple accounts (paired Sits)
- In-app journaling
- Recorded Sit playback (member opt-in)
- Community Common Room (peer-led, asynchronous)
- Keeper-led live Embers (weekly broadcast)
- Wedding Season programming
- AI assistance for Keepers (note-taking, session summaries — never member-facing AI)
- Apple Watch + Wear OS companion app
- Memorial Hearths feature
- Anti-app mode (mailed letters)
- Annual Long Walk retreat booking

---

## 5. Detailed Feature Specifications

### 5.1 Authentication and Onboarding

**Tech:** Auth0 or Clerk (build vs buy: buy)
**Methods:** Email + magic link (default), Apple Sign-In, Google Sign-In, password optional
**MFA:** Optional initially, required for Keepers and admins
**Session length:** 30 days inactive timeout, 90 days active session
**Account recovery:** email-based; recovery code optional

**Onboarding screens:**
1. Welcome + brand-voice copy
2. Email + name
3. Soft intake: 5 quick multi-select questions ("what brings you to Hearth")
4. PHQ-9 (9 questions, ~2 min)
5. GAD-7 (7 questions, ~90 sec)
6. Hearth custom screen (suicidality, self-harm, substance use, current treatment, recent loss — 6 questions)
7. Branching:
   - Threshold-clear → Keeper match
   - Mid-range → Keeper match + recommendation to also see Bridge
   - High-risk → Bridge fast-track + 988 surface
8. Keeper match: 3 candidate Keeper cards (bio + voice sample + 90sec video)
9. Pick Keeper
10. Pick tier (Hearthside $39/month / Hearth Deep $99/month)
11. Payment (Stripe Elements, Apple Pay, Google Pay)
12. First Sit booking
13. Confirmation + pre-Sit prep page

**Critical UX rule:** the intake screener must NEVER feel clinical or interrogative. Questions are framed in Hearth's voice ("In the past two weeks, have you had less interest in things you usually enjoy?" not "Little interest or pleasure in doing things"). PHQ-9 / GAD-7 questions are *delivered* with brand voice but the underlying scoring is the validated instrument.

### 5.2 Intake Screener Specifications

**Instruments:**
- PHQ-9 (validated 9-item depression screen, scored 0–27)
- GAD-7 (validated 7-item anxiety screen, scored 0–21)
- Hearth-custom (6 items: SI/SH check, current treatment, recent significant loss, substance use frequency, family history flag, capacity for self-care)

**Routing thresholds:**
- PHQ-9 ≥10 OR GAD-7 ≥10 → recommend Bridge (member can still choose Keeper-only with explicit acknowledgment)
- PHQ-9 ≥15 OR GAD-7 ≥15 OR ANY suicidality/SH endorsement → Bridge required for paid tiers; Keeper-only locked
- ANY active SI/SH → 988 surface + Bridge fast-track + ops alert

**Re-screen cadence:**
- Every 90 days
- Triggered by: bereavement disclosed, self-harm/SI mentioned in Long Talk (LLM-flagged), Keeper-initiated re-screen

**Privacy:**
- Score visible to member, Keeper, ops admins
- Encrypted at rest, never sent to ad networks
- Never used as feature in ML matching algorithms (compliance)

### 5.3 Keeper Matching

**MVP (Months 0–6): manual founder/ops curation.**
- Founder reviews each member's intake + soft-intake responses
- Selects 3 Keeper candidates from current roster
- Hand-builds the match cards
- Goal: 90% match satisfaction (member sticks with first choice)

**V1.1 (Months 6–12): algorithmic-assist with manual override.**
- Inputs: member's soft-intake themes, language preference, gender preference (optional), region/timezone, age range, life-stage themes
- Keeper attributes: themes specialty, languages, gender, timezone, current capacity
- Output: ranked top 5 Keepers; ops admin selects 3 for member to choose from
- ML-based ranking AFTER 1,000+ matches with feedback signal

**Anti-rotation principle:**
- Members keep the same Keeper indefinitely unless they request a change
- If a Keeper leaves, member is paired with new Keeper after a 30-min "transition Sit" with both
- Hearth never auto-rotates Keepers (BetterHelp's mistake)

### 5.4 Keeper Profile ("At the Hearth")

**Public profile elements:**
- Name (first name + last initial)
- Photo (warm, candid; no professional headshots)
- 60–90sec self-recorded video intro
- 30sec audio voice sample
- Themes they're known for (4–8 short tags: grief, family, mid-life, identity, postpartum, etc.)
- Languages
- 3–5 Stories (member testimonials, name-changed)
- Bio (200–300 words, written in Keeper's voice)
- Cultural background (Karachi-raised, second-gen Pakistani-American Houston, etc.)

**Private metadata (ops only):**
- Performance metrics
- NPS scores
- Capacity status
- Training certifications
- Background check status

### 5.5 Booking and Scheduling

**Member-side:**
- See Keeper's available slots (calendar grid, 7-day view + 30-day view)
- Book a Sit (single click)
- Add to Apple/Google/Outlook calendar
- Reschedule (up to 24 hours before; one free reschedule, then $20 fee)
- Cancel (24h+ free; <24h forfeit fee = paid Sits in pre-paid plans don't lose; subscription tiers absorb)

**Keeper-side:**
- Set availability windows (recurring + one-off)
- See upcoming Sits (24h, 7-day, 30-day views)
- Reschedule on member's behalf with reason
- Mark unavailable (vacation, sick day, capacity-full)

**Tech:** Cal.com (open-source) self-hosted, OR Calendly Pro embed, OR custom build later. Buy not build for MVP.

### 5.6 Video Sessions (The Sit)

**Tech:** Twilio Video, Daily.co, or LiveKit (favor LiveKit for cost + control). HIPAA-compliant tier required.
**Quality:** 1080p video, 48kHz audio, automatic adaptive bitrate
**Audio-only fallback:** member can join with video off by default
**Recording:** OFF by default. Member-only opt-in for personal playback (not Hearth-stored permanently — 30-day expiration). NEVER ever recorded for Keeper review without explicit member consent.
**Pre-Sit room:** member arrives 5min early, sees a "settling" screen with a quote/Ember to ground them
**Post-Sit screen:** brief reflection prompt ("what would you carry from this?") + optional NPS

**Critical:** no AI transcription, no AI summary visible to anyone. Keepers can take their OWN written notes (private, encrypted, member-readable on request).

### 5.7 The Long Talk (Async Chat)

**Format:** persistent chat thread between member and Keeper (never group)
**Message types:**
- Text
- Voice notes (up to 5 min each — voice notes are core to South Asian communication)
- Images (member-uploaded, encrypted, optional)
- Reactions (limited set: heart, hands-folded, ear)
**Read receipts:** off by default (members can opt-in). Removes pressure.
**Typing indicators:** off (intentional — slow communication).
**Response SLA:**
- Keepers respond within 24 hours during their availability windows
- Long Talk is NOT meant to be real-time; explicitly designed to slow communication
- "Response received" is not a measure of quality — depth is

**Friday Reflection (signature feature):**
- Every Friday at 6pm member's local time, Keeper sends an unsolicited "what stayed with me from this week" message
- Maximum 200 words; written, not templated
- The single most-mentioned retention driver in similar relational businesses

**Crisis detection (LLM-assisted):**
- Background LLM scans for explicit suicidality, self-harm, abuse disclosure
- Flagged messages route to ops within 5 minutes
- Keeper notified to follow up; ops follows up if Keeper is unavailable
- Members are *transparently* informed at signup that this monitoring exists for safety

### 5.8 Embers (Content Library)

**Format:** essays (1,500–3,500 words) + audio narrations (5–15 min) + occasional 60-second video clips
**Frequency:** 2–3 new pieces per week at MVP, scaling
**Authors:** Keepers + invited essayists (paid, 600–1,200/piece)
**Editorial:** content lead reviews; brand-voice adherence; cultural sensitivity check
**Search:** simple — by theme tag (Heavy Things, Family Stuff, etc.) and by author
**Personalization:** member feed surfaces Embers tagged to their soft-intake themes; never auto-plays
**Access:** Hearthside members get full text + audio access; Hearth Deep members get same access plus priority new-content notifications
**Save to read later:** simple bookmark
**Comments:** OFF — Embers are not a community space

### 5.9 Subscriptions and Payments

**Tiers:** Hearthside ($39/month, biweekly Sits) and Hearth Deep ($99/month, weekly Sits). Annual: $390/yr and $990/yr respectively. No free/Pull Up tier.
**Provider:** Stripe (with Authorize.net or Square as backup)
**Compliance:**
- FTC Click-to-Cancel rule (2024) — frictionless cancel, 1 click from account screen
- ROSCA — clear price disclosure, affirmative consent, easy cancel
- State-specific subscription laws (CA SB 313, NY auto-renewal disclosures)
- Cancellation does NOT require a phone call or any human contact
- Refunds: pro-rated for unused months on annual prepay; no refunds for monthly mid-cycle; 14-day money-back guarantee on first month
- Failed payment: 3 retries over 7 days, then graceful pause (member can reactivate any time within 60 days with same Keeper)

**Cancel flow design (2 tiers):**
- "Pause" option offered first (free, up to 90 days)
- "Keeper change" offered (often the real reason for cancel)
- "Downgrade to Hearthside" offered (if canceling from Hearth Deep)
- Cancel confirmation = single button click, no exit-intent friction beyond the pause/downgrade options

### 5.10 Group Programs (Circles)

**Cohort size:** 6–10 members
**Duration:** 4–8 weeks, weekly 75-min Circle Sit
**Pricing:** bundled in Hearthside (1 Circle/month included), 2/month included on Hearth Deep; single-Circle pass $25 for non-members
**Format:** video room with all members visible, Keeper-led, structured opening/middle/closing
**Privacy:** members agree to confidentiality; Hearth enforces (one-strike removal)
**Roster management:** application-based for sensitive Circles (grief, postpartum); first-come for everyday Circles
**Materials:** weekly between-session prompts in Long Talk-style group chat
**Recording:** never recorded

### 5.11 The Bridge (Clinical Referral)

**Member-facing:**
- Bridge is presented as a **partner network**, not a part of Hearth
- "Hearth pairs you with a US-licensed therapist for the clinical work, while your Keeper continues to be your companion for the long arcs"
- Members on Hearth Deep tier see Bridge therapist matching and scheduling alongside Keeper scheduling
- Bridge sessions billed by Hearth (member sees one combined invoice)

**Ops-facing:**
- Bridge coordinator manages therapist roster (Headway/Alma overlap fine)
- Auto-match by state, language, insurance, themes
- Manual override for high-acuity cases
- Bridge therapist payments processed weekly

**Compliance:**
- Hearth does NOT bill insurance directly (Bridge therapists do, via Headway/Alma)
- Hearth's referral fee structure must comply with anti-kickback rules (vary by state)
- Bridge therapists sign Hearth code of conduct (no clinical handoff disclosures back to Keeper without member consent)

### 5.12 Crisis Detection and Response

**Always-on safety surface:**
- 988 (US), 1-866-585-0445 (CA), country-specific links visible in app footer + member dashboard
- One-tap "I need help right now" button in every Sit room and chat thread

**LLM-assisted detection:**
- Background scan of Long Talk messages for crisis markers (SI, SH, abuse, psychosis indicators)
- Flagged messages route to ops within 5 minutes
- Keeper notified; ops follows up if Keeper offline
- Member NEVER sees auto-generated AI response (no chatbot triage)

**Escalation path:**
- Keeper acknowledges, validates, present
- Within session: bridge to Bridge therapist + 988 if needed
- Post-event: ops follow-up at 24h, 7d, 30d
- All crisis events logged for compliance review (zero-retaliation policy for members and Keepers)

### 5.13 Notifications

**Channels:** push (native apps), email (transactional), SMS (essential only)
**Default settings (changeable):**
- Sit reminder: 24h + 1h before (push + email)
- Long Talk new message: push only, immediate
- Keeper Friday Reflection: push, 6pm member's local time
- Embers new piece: weekly digest email, no pushes
- Billing: email only
- Marketing: opt-in only at signup; weekly max

**Anti-pattern: NO red badge counts on the app icon.** Hearth deliberately avoids urgency aesthetics. Notifications are calm.

### 5.14 Profile and Preferences

**Member can edit:**
- Name (display + legal)
- Pronouns
- Profile photo
- Timezone
- Language preference
- Notification settings
- Privacy settings (who sees what)
- Anniversary dates (member-controlled)
- Soft-intake themes (refresh anytime)
- Payment method
- Tier
- Cancel/pause subscription

**Member CANNOT edit (admin/ops only):**
- Intake screener results
- Keeper assignment (request via support)
- Bridge handoff history
- Crisis events log

---

## 6. Tech Stack Recommendations

### 6.1 Frontend
- **Web:** Next.js 15+ on Vercel (App Router, Server Components)
- **iOS:** Swift + SwiftUI native
- **Android:** Kotlin + Jetpack Compose native
- **Shared design system:** Tamagui or Tailwind + custom tokens
- **Component library:** shadcn/ui as base, customized

### 6.2 Backend
- **Runtime:** Node.js (TypeScript) on Vercel + Railway/Fly.io for stateful services
- **API:** tRPC (internal) + REST/OpenAPI (public)
- **Database:** PostgreSQL on Neon (serverless) or Supabase (full stack)
- **Cache:** Redis (Upstash)
- **Search:** PostgreSQL full-text initially; Algolia or Typesense if Embers grows
- **Object storage:** S3 (us-east-1, HIPAA-eligible region)
- **Background jobs:** Inngest or BullMQ
- **Email:** Postmark or Resend
- **SMS:** Twilio
- **Push:** OneSignal or Firebase Cloud Messaging

### 6.3 Video and Real-Time
- **Video sessions:** LiveKit (self-hostable, HIPAA-eligible) — preferred for cost and control
- **Alternatives:** Twilio Video, Daily.co (HIPAA tier)
- **Real-time chat:** Pusher Channels, Ably, or self-hosted via Supabase Realtime

### 6.4 Payments
- **Primary:** Stripe (Subscriptions, Connect for Bridge therapist payouts)
- **Backup:** Authorize.net or Square (warm standby)
- **Tax:** Stripe Tax (handles US states + Canada GST/HST)

### 6.5 Auth
- **Provider:** Clerk (preferred for MVP velocity) or Auth0 or Supabase Auth
- **MFA:** TOTP-based; required for Keepers and admins

### 6.6 Analytics + Monitoring
- **Product analytics:** PostHog (self-hosted on EU region for stricter privacy) — NOT Mixpanel/Amplitude during MVP (privacy posture)
- **Error monitoring:** Sentry (with PII scrubbing)
- **APM:** Datadog or Highlight
- **Customer support:** Plain (designed for support chat) or Front

### 6.7 LLM / AI
- **Primary:** Anthropic Claude (Sonnet 4.6 default, Opus 4.7 for sensitive flows)
- **Use cases (allowed):** Keeper-side note assistance, content moderation in Long Talk, intake-flow translation, Embers drafting assistance for Keepers
- **Use cases (forbidden):** member-facing chatbot, AI "therapist" of any kind, automated emotional response generation, AI-generated Friday Reflections
- **Privacy:** all PHI scrubbed before any LLM call; Anthropic Zero-Retention API

### 6.8 Compliance + Security
- **Hosting:** AWS us-east-1 with HIPAA BAA
- **Encryption:** AES-256 at rest, TLS 1.3 in transit
- **Secrets:** AWS Secrets Manager + 1Password
- **Audit logs:** Mature audit trail on all PHI access
- **Backup:** automated daily PostgreSQL backups, 30-day retention; quarterly disaster recovery drill

---

## 7. Data Model (High-Level)

### Core entities

**Member**
- id, email, name (legal + display), pronouns, timezone, language_pref, country, state/province, signup_date, marketing_consent

**Intake**
- member_id, phq9_score, gad7_score, hearth_screen_responses, intake_routing_decision, screened_at, next_screen_due

**Keeper**
- id, name, photo_url, video_intro_url, audio_sample_url, bio, themes, languages, country, gender, age_range, status (active/paused/archived), capacity, training_completed_at

**Match**
- member_id, keeper_id, matched_at, status (pending/active/ended), end_reason

**Sit (1:1 Session)**
- id, member_id, keeper_id, scheduled_at, duration_min, status (booked/completed/canceled/no-show), member_recording_consent, post_sit_member_reflection, keeper_private_note

**LongTalk Thread**
- id, member_id, keeper_id, last_activity_at

**LongTalk Message**
- id, thread_id, sender (member/keeper), content_type (text/voice/image), content_url, created_at, crisis_flagged_at

**Subscription**
- member_id, tier (hearthside/hearth_deep), billing_cycle (monthly/annual), stripe_subscription_id, started_at, current_period_end, status

**BridgeReferral**
- id, member_id, therapist_id, referred_at, status, follow_up_24h, follow_up_7d, follow_up_30d

**CrisisEvent**
- id, member_id, source (intake/keeper/long_talk/sit), severity, action_taken, ops_assigned, resolved_at

**Ember (content)**
- id, title, body_md, audio_url, themes, author_keeper_id, published_at, read_count

**Circle**
- id, theme, start_date, end_date, max_members, keeper_id, status

**CircleMember**
- circle_id, member_id, joined_at, attendance (per session)

### Audit + Compliance

**AuditLog**
- id, actor_id, actor_type, action, entity_type, entity_id, ip, user_agent, created_at

**DataAccess**
- member_id, accessed_by, accessed_at, fields_viewed

---

## 8. Security and Compliance Requirements

### 8.1 Infrastructure
- HIPAA-eligible AWS region (us-east-1 with BAA)
- All services with PHI access wrapped in BAAs (Postmark, Twilio, Stripe, LiveKit, Anthropic — verify each)
- Network: private VPC, no public DB, bastion-host access only
- Secrets management: AWS Secrets Manager + Vault
- TLS 1.3 minimum on all endpoints

### 8.2 Application
- Encryption at rest (AES-256) for all PHI fields
- PII tokenization where possible
- No PHI in logs, exception traces, or analytics events
- Sentry/error monitoring with aggressive PII scrubbing
- LLM calls: PHI scrubbed before send; Anthropic Zero-Retention enabled
- Rate limiting + DDoS protection (Cloudflare)
- WAF (Web Application Firewall) — Cloudflare

### 8.3 Privacy
- HIPAA-comparable posture (even though Hearth may not be a covered entity)
- WMHMDA (Washington My Health My Data Act) — strict consent for any third-party sharing of health-coded data
- CCPA/CPRA compliance (California rights to access, delete, port, opt-out)
- PIPEDA / Canadian provincial laws (Ontario PHIPA most strict)
- GDPR-aligned even though we don't initially serve EU
- No tracking pixels (Meta, TikTok) on authenticated pages — BetterHelp $7.8M lesson burned in
- No third-party advertising cookies
- Cookie banner with granular consent
- Privacy policy in plain English (8th-grade reading level)

### 8.4 Data Retention
- Member-controlled deletion (full erase on request, with 30-day soft-delete safety window)
- Long Talk messages: retained as long as member is active; 90 days post-cancel; permanent deletion on request
- Sit recordings (member opt-in only): 30-day expiration, never Hearth-stored long term
- Keeper notes: retained as long as Keeper-member match active; deleted on member exit
- Crisis event logs: retained 7 years (legal/compliance requirement)
- Audit logs: 7 years

### 8.5 Marketing Compliance
- All marketing copy reviewed by counsel quarterly
- No "depression," "anxiety," "trauma," "PTSD," "therapy," "treatment" in member-facing copy
- "Coaching" used carefully — not in regulated states
- Click-to-cancel compliant on all subscription flows
- Auto-renewal disclosure prominent
- Affirmative consent at every billing event

### 8.6 Keeper Side
- BAAs signed with all Keepers (data-handling obligations)
- Pakistan-side Keepers access via web-only browser interface; no PHI on local devices
- VPN required for Keeper sessions (data egress controls)
- Background checks (international scope)
- Annual recertification + ongoing training

---

## 9. Mobile Strategy

**Web-first MVP** (responsive web on dearhearth.com), then **native iOS at Mo 3**, **native Android at Mo 6**.

Reasoning: web-first allows fastest iteration; iOS native essential because Pakistani-American target audience is iOS-heavy (~60–65%) and expects polished native experience; Android native for Pakistani-Canadian and broader South Asian Phase 2.

**Native app priorities:**
- Native video session experience (key UX differentiator)
- Push notifications
- Offline-tolerant chat (Long Talk drafts saved locally)
- Audio recording for voice notes (lossless, HIPAA-compliant)
- Apple Sign-In + Google Sign-In native flows

**App store strategy:**
- Apple App Store category: Health & Fitness OR Lifestyle (NOT Medical — would trigger Guideline 1.4.1)
- Google Play category: Lifestyle
- Both: app description emphasizes peer support, companionship, conversation; never therapy/treatment language
- App store reviews: aggressive moderation in early days; never respond to a 1-star with a defensive tone

---

## 10. Internationalization

**MVP languages:** English (US, Canada)
**Mo 6:** add Urdu UI option (RTL-aware fonts, full translation of marketing + onboarding + key product surfaces)
**Mo 12:** Hindi UI option (Devanagari support); Bengali UI option (for Bangladeshi diaspora)
**Tech:** i18next + Lokalise; ICU message format

**Cultural localization (deeper than translation):**
- Date/time formats (Pakistan day-of-week conventions)
- Pricing (USD primary; CAD for Canadian members; never PKR for diaspora — they pay in USD)
- Imagery (no monolithic Pakistani imagery; show diaspora life)
- Voice notes default-on for South Asian audiences
- Vacations and holidays (Eid scheduling, Ramadan-aware Sit times, Pakistan independence day)

---

## 11. Analytics and Instrumentation

**Self-hosted PostHog** (privacy posture during MVP). Key events:

### Acquisition
- landing_page_view
- cta_click_pull_up
- signup_started
- signup_completed
- intake_started
- intake_completed
- intake_routed (with routing_decision field)
- keeper_match_viewed
- keeper_selected
- tier_selected
- payment_completed
- first_sit_booked

### Engagement
- sit_joined
- sit_completed
- sit_no_show
- long_talk_message_sent (with sender and content_type)
- friday_reflection_sent
- friday_reflection_read
- ember_read
- ember_listened
- circle_joined
- circle_attended

### Retention
- subscription_renewed
- subscription_canceled (with cancel_reason)
- subscription_paused
- subscription_reactivated
- keeper_change_requested

### Safety / Compliance
- crisis_flagged (source, severity)
- bridge_referral_sent
- bridge_session_booked
- screener_re-administered

### Critical: NO PHI in event payloads. Event names + non-identifying metadata only.

---

## 12. Accessibility

- WCAG 2.1 AA compliance from MVP
- Screen reader-friendly (NVDA, VoiceOver, TalkBack tested)
- Keyboard navigation throughout
- Color contrast 4.5:1 minimum
- Font size scalable (16px base; 200% zoom-friendly)
- Captions / transcripts for audio Embers (Whisper-generated, human-reviewed)
- Sit video supports captions (AI-generated with member opt-in)

---

## 13. Performance Requirements

- Time-to-first-byte: <500ms on broadband, <1.5s on 3G
- Time-to-interactive: <3s on broadband, <8s on 3G
- Sit video: 99.5% session-success rate (no drops, no reconnects)
- Sit video latency: <300ms one-way (WebRTC defaults)
- Long Talk message delivery: <2s end-to-end
- App size (iOS/Android): <50MB initial install
- Bundle size (web): <200KB compressed initial JS

---

## 14. Launch Criteria

Hearth ships to the public when:

- [ ] All MVP features built and tested
- [ ] HIPAA-comparable infrastructure verified (security audit by external firm)
- [ ] Compliance counsel sign-off on marketing copy + ToS + Privacy Policy
- [ ] 5 trained Keepers active
- [ ] 10 Bridge therapists onboarded
- [ ] Stripe approved + backup processor on standby
- [ ] $1M+ professional liability insurance bound
- [ ] Crisis protocols tested via tabletop exercise
- [ ] 20 paid waitlist members from organic Phase 1 channels
- [ ] iOS app submitted and approved
- [ ] Web app load-tested at 1,000 concurrent users
- [ ] Founder + ops lead on-call rotation defined
- [ ] First-month operational runway funded

---

## 15. What This PRD Does Not Cover (Out of Scope for V1)

- AI-driven Keeper-replacement (NEVER in scope)
- Insurance billing direct (Bridge therapists handle via Headway/Alma)
- Synchronous group video at >10 people
- E-commerce/merch
- Content commenting/community feed
- Member-to-member messaging
- Third-party integrations (Apple Health, Google Fit, Calm, etc.)
- B2B portal (Phase 3)
- Native couples / family accounts (Phase 2+)
- Hearth Press / publishing (Phase 4)

These remain on the roadmap but are explicitly excluded from MVP and V1.1 scope to maintain focus.
