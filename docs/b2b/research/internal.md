# Hearth and B2B: the internal reality

Written 2026-09-11 from the repo (`/Users/mac/Downloads/hearth`) and the memory directory only. No web research. Every claim carries a file:line citation; where the docs are silent, the report says so. Figures marked "estimate", "assumption" or "illustrative" are mine, not the repo's.

Shorthand: `runbook:NN` is `docs/operations/concierge-runbook.md` line NN, and `circles:NN` is `app/circles/page.tsx` line NN. Memory files are cited by filename (they live in `~/.claude/projects/-Users-mac-Downloads-hearth/memory/`).

## 0. Bottom line

1. **Supply is the biggest unknown.** No file states how many real Keepers or psychologists Hearth has, where they live, or where any of them is licensed. The only statement of real supply is the founder's line of 2026-09-11, recorded in memory (keeper-supply.md:11). Every public Keeper profile is still a placeholder.
2. **No group format is live.** Circles are fully described on the site, but every listed cohort ran from April to July 2026 with placeholder facilitators. The seat button goes to the intake form, and there is no Circle checkout.
3. **B2B only changes the economics for group work.** A $39 1:1 member earns about $10 to $13 per Keeper-hour, and Hearth keeps $7.80 a month before processor fees. A company-bought group session at plausible prices earns $70 to $500 per Keeper-hour. Selling 1:1 seats to companies at the consumer price changes how members are acquired, not what an hour earns.
4. **B2C is not proven expensive; it is unproven.** Planned cash spend is $0. The metrics files have no rows, there are no members yet, and search produced 3 clicks in three months.
5. **What a company buyer checks first does not exist, or contradicts the site.** No legal entity is named. There are no contract, invoice or data-processing templates, and no evidence of the insurance the trust page claims. The trust page's security claims (AES-256, isolated databases, penetration testing) do not match the runbook, where the product runs on email threads and a spreadsheet.
6. **The founder's pitch wording collides with house rules.** "Psychologists [...] resolving their personal and professional issues" breaks the AGENTS.md ban on implied outcomes and the business plan's protected-title rule. "Affordable prices" breaks the rule against selling on price. Safe phrasing already exists on the site.
7. **Every internal plan puts B2B at Phase 3.** That is months 24 to 48, and one research doc warns that early B2B "forces the brand to sound like an HR product". These are plan positions for the founder to weigh, not founder decisions.

## 1. Keeper supply: what the docs say

### 1.1 How many
- **No doc states a current number** of Keepers or psychologists.
- **Targets only:**
  - "5 trained Keepers active" is an unticked launch criterion (docs/prd.md:726).
  - "5 Keepers active", "25 Keepers active" and "60 Keepers" are roadmap milestones (docs/business.md:577, 585, 595).
  - "3 trained Keepers" is a validation-phase target (docs/idea-validator/hearth-validation-report.md:391).
  - "at least 8 Keepers live" is an unticked site-launch item (docs/landing-page-prd.md:1250).
- **The runbook's first precondition is unticked:** "[ ] At least one real Keeper is contracted, trained on this runbook, and has a Cal.com booking page (KAN-56, KAN-68)." (runbook:28)
- **Memory, 2026-08-22:** "No real hires or consenting real members exist yet." (placeholder-keepers.md:11). The placeholders "will be replaced by real hires from the 600 Indeed applications (KAN-56, KAN-58)" (keeper-assignment-and-placeholders.md:26-27).
- **Memory, 2026-09-11, founder:** "We have trained highly qualified psychologists, who can act as keepers for resolving their personal and professional issues." No count is given (keeper-supply.md:11).

### 1.2 Where they are based
- **No doc states where any real Keeper lives.**
- **The plan documents assume Pakistan:**
  - "Pakistan-based Keeper supply" (hearth-validation-report.md:7).
  - "Retired educators, counselors, senior women with mentorship track records, psychologists without US licensure [...] there are thousands of these people in Lahore, Karachi, Islamabad" (hearth-validation-report.md:57).
  - "Pakistan-side Keepers access via secure browser-based interface, no local PHI storage" (docs/business.md:538).
- **Memory:** "where they are based (probably Pakistan)" (keeper-supply.md:11). The Indeed post was titled "Senior Psychologist - Online Global Peer Support Companion" (indeed-candidate-export.md:8).
- **The site implies North America.** The placeholder profiles show "Kolkata → Toronto", "Karachi → Jersey City", "Lahore → Houston", "Chennai → Toronto" and "Cairo → Chicago" (app/keepers/page.tsx:36, 46, 56, 66, 76).
- **The site never says the company or its Keepers are in Pakistan.** The word appears only in crisis numbers and the intake country list (app/crisis/page.tsx:8, 108; app/intake/page.tsx:35; public/llms.txt:23). The marketing context doc claims "The company is based in Pakistan and says so" (.agents/product-marketing.md:52), but the site does not.

### 1.3 Qualifications, degrees and licences
- **No doc names a degree level, a licensing body, or a licensing country** for any real Keeper.
- **Site copy since commit 98cac8b (2026-08-24, KAN-75):**
  - The FAQ answers "Are Keepers licensed therapists?" with: "Many are, in their home countries. A large share of Keepers trained as psychologists or counsellors, and some hold licences where they first practised. Those licences are jurisdiction-specific, so at Hearth nobody acts as your clinician" (app/faq/FaqClient.tsx:60).
  - "professionally trained companions (many are psychologists or counsellors by training in their home countries) who do not act as clinicians at Hearth" (app/faq/FaqClient.tsx:23).
  - "a trained Keeper (often a psychologist by training in their home country) who does not act as a clinician" (app/page.tsx:88).
  - "Many trained as psychologists in their home countries; none act as your clinician" (app/page.tsx:998-999).
  - "A Keeper: often a psychologist by training at home; vetted, supervised, never acting as your clinician." (app/hearth-vs-therapy/page.tsx:29).
  - "Many hold psychology or counselling degrees from their home countries" (app/hearth-vs-therapy/page.tsx:34).
  - "Many applicants are psychologists or counsellors, and that background is welcome" (app/for-keepers/ForKeepersClient.tsx:127).
  - The intake consent: "Keepers are professionally trained (many as psychologists in their home countries) but do not act as my clinician at Hearth" (app/intake/page.tsx:1003).
  - "Many trained as psychologists or counsellors and some hold licences in their home countries" (public/llms.txt:29).
  - The terms: "Keepers do not act as licensed therapists, counselors, social workers, or medical professionals within Hearth, whatever qualifications or licences they hold elsewhere." (app/terms/page.tsx:73)
- **Recruiting rubric (a plan):** "Lived experience > credentials, but credentials don't disqualify" (docs/business.md:472). The sourcing pool includes "Trained therapists in any country who want to work supplementally outside their clinical license" (docs/business.md:466).
- **These statements predate any known roster.** The "many are" lines were written on 2026-08-24, when memory recorded that no real Keepers existed (placeholder-keepers.md:11). They describe applicants or intent, not a verified roster. If the founder's psychologists are real, the copy may now be true, but nothing in the repo documents it.

### 1.4 Languages
- **Service languages:** "English, Urdu, Hindi and Punjabi" (public/llms.txt:8; app/layout.tsx:140).
- **Recruiting rubric:** "Fluent English required; any additional language is a plus" (docs/business.md:471).
- **No doc lists a real Keeper's languages.** The placeholder languages are at app/keepers/page.tsx:39, 49, 59, 69, 79.

### 1.5 Training programme
- **Claimed on the site:** "Complete Hearth's 120-hour initial training program before your first member" (app/for-keepers/ForKeepersClient.tsx:162). The same claim appears at app/faq/FaqClient.tsx:60, public/llms.txt:29 and .agents/product-marketing.md:50.
- **The planned curriculum adds up to 60 hours, not 120.** It is headed "Pre-launch training (120 hours, paid)" (docs/business.md:487), but its eight modules total 8+12+6+8+6+4+8+8 = 60 hours (docs/business.md:488-495).
- **Nothing exists yet.** Monthly peer supervision is planned (docs/business.md:498). No training materials, training records or supervision schedule exist in the repo. The only operational training document is the concierge runbook ("trained on this runbook", runbook:28).
- **The acceptance-rate claim has no data behind it.** "Less than 8% of Keeper applicants are accepted" appears at app/for-keepers/ForKeepersClient.tsx:131 and 314, and public/llms.txt:29.

### 1.6 Capacity and pay
- **No doc states hours or members per Keeper.** The PRD tracks "current capacity" as a Keeper attribute with no number (docs/prd.md:250, 515). The Keeper persona wants "flexible evening hours" (docs/prd.md:46).
- **The only per-member time estimate is in memory:** "Two Sits plus unlimited Long Talk is 3 to 4 hours" a month for a Hearthside member (keeper-revenue-share.md:21-22).
- **Keeper pay is stated three different ways:**
  - 80% of the member's fee (runbook:168).
  - "$12–$15 / Sit" for entry Keepers and "$16–$20 / Sit" for senior Keepers (app/for-keepers/ForKeepersClient.tsx:245-246).
  - "$20–35 USD per Sit (50min)" (docs/business.md:480).

### 1.7 Hiring pipeline
- **Indeed:** 596 applicants applied around 30 to 31 May 2026. Indeed restricts access to candidates after 90 days, which falls around 2026-08-29 (indeed-candidate-export.md:8, 10). There is no export at `~/Downloads/indeed-export/` (checked 2026-09-11), and `docs/hiring/` is empty. **Whether the applicant data was saved before the cutoff is unknown.**
- **The site's Keeper application form discards every submission.** Its handler only sets a "submitted" flag (app/for-keepers/ForKeepersClient.tsx:330-332). The Bridge-therapist form and the gift form do the same (app/for-therapists/ForTherapistsClient.tsx:265-267; app/gift/GiftClient.tsx:252-255). The only API routes are app/api/intake and app/api/webhooks/whop. This is the "silent success" pattern already recorded in memory (operations-loop.md).
- **No Bridge therapists are signed** (runbook:150, KAN-69).

### 1.8 How this report treats supply
As instructed: psychologists are available, number unknown (N). Section 4 gives capacity per Keeper and per N.

## 2. What Hearth sells today

| Item | Price | What it is | Source |
|---|---|---|---|
| Hearthside | $39/mo or $390/yr | A Sit every two weeks (35 to 60 min, video or audio), the Long Talk with 24-hour replies, a Friday note every week, the Embers library, one Circle a month, Bridge referral | app/pricing/page.tsx:128-150; app/lib/checkout.ts:33-34 |
| Hearth Deep | $99/mo or $990/yr | Weekly Sits, the Long Talk with 4-hour replies, two Circles a month, Bridge priority | app/pricing/page.tsx:169-191; app/lib/checkout.ts:35-36 |
| À la carte | Extra Sit $25, Couples Sit $45, Single Circle $25, Gift a month $39 | Shown on the page, but no checkout exists for any of them; only the four subscription plans exist (app/lib/checkout.ts:1-6) | app/pricing/page.tsx:426-490 |
| Reschedule fee | $20 inside 24 hours | | app/pricing/page.tsx:48 |

**Definitions** (the homepage glossary, app/page.tsx:1268-1273, unless noted):
- **Keeper:** "Your trained listener. One person, matched to you by hand, kept for years."
- **The Sit:** "Your call with your Keeper. 35 to 60 minutes, video or audio, every two weeks or every week."
- **The Long Talk:** "The chat thread between calls. Text, voice notes, photos. Replies within a day." In practice it is "The email thread between Keeper and member" (runbook:20).
- **The Friday note:** "A few lines from your Keeper every Friday about what they noticed that week."
- **Circle:** "A small-group session, six to ten people, led by a Keeper. One a month is included."
- **The Bridge:** "If you ever need a therapist, we help you find a vetted one. Your Keeper stays." None are signed (runbook:150).
- **Ember:** "Embers is Hearth's written library on the recurring themes of a life" (app/embers/layout.tsx:6); "Embers are free" (app/embers/EmbersClient.tsx:433).

**How a member is actually served:** by hand, over email, following the 12-stage concierge runbook. The founder matches within 72 hours. Booking is on the Cal.com free tier and calls run on Google Meet. Keepers are paid via Wise or Payoneer (runbook:12-22). There is no member app, dashboard or login (runbook:182; memory operations-loop.md).

**Inconsistencies a buyer could spot:**
- A Single Circle costs $25 on /pricing (app/pricing/page.tsx:466-467; public/llms.txt:34) but $35 on /circles (circles:393, 828).
- A Circle session is 75 minutes in the PRD (docs/prd.md:366) but 90 minutes on the site (circles:45, 58).
- "Members reserve their seat in the app" (circles:392), but there is no app.

## 3. Circles, and how they could become a workplace format

### 3.1 What /circles offers
- **Shape:** "Small, themed cohorts of 6–10 members, facilitated by a Keeper, over 4–8 weeks" (circles:9). One Keeper holds the whole series (circles:39-40). Sessions are 90 minutes over video, in the evenings, across several time zones (circles:43-45).
- **The week:** a prompt arrives Monday, the Circle meets Wednesday at 7pm, a private cohort thread runs Thursday, and the Keeper sends a closing reflection Friday (circles:49-70).
- **Rules:**
  - Confidential; members agree before the first session (circles:125-126).
  - Never recorded (circles:141-142).
  - Nobody is made to speak (circles:137-138).
  - The facilitator is a different Keeper from the member's 1:1 Keeper (circles:145-146).
  - "Circles are not group therapy. They are not a clinical support group." (circles:646)
- **Themes listed:** Mothers Between Worlds, Eldest Daughters, Grief That Arrived Late, On Coming Out to a Family You Love, The Career Your Family Wanted, Mothers and Daughters (circles:72-121).
- **The PRD spec:** 6 to 10 members, 4 to 8 weeks, a weekly 75-minute session, confidentiality with one-strike removal, and application-based entry for sensitive Circles (docs/prd.md:363-372).

### 3.2 Is it live? No.
- **Every cohort is in the past.** They are dated 28 April to 22 July 2026 (circles:76-116).
- **The facilitators and seat counts are invented.** The facilitators are placeholder Keepers (circles:78-118), and the "spots left" counts are made up (circles:79-119).
- **There is no way to book.** "Reserve a seat" and "Join Hearth & access Circles" link to /intake. There is no Circle booking, roster, group thread or checkout.
- **The "next Circle" line is static.** "The next Circle opens in two weeks" (circles:976) never changes.

### 3.3 Turning it into a workplace group format (internal view)
**What carries over unchanged:**
- The shape: a closed cohort of 6 to 10, one facilitator for the whole series, a weekly prompt and reflection, confidentiality, no recording.
- The "not group therapy" line (circles:646) and the scope language in the terms (app/terms/page.tsx:60-77).
- The homepage promise that "nothing is shared with employers or insurers" (app/page.tsx:108).
- The "not HR" boundary already written for workplace bullying: "Hearth is not HR, not a lawyer, and not a crisis line. We do not investigate complaints" (app/for/[topic]/page.tsx:279).

**Themes that already fit working life:**
- The Career Your Family Wanted (circles:106-111).
- Caregiving and the sandwich years, and grief (circles:90-95; .agents/product-marketing.md:19).
- Bullying and harassment at work (app/for/[topic]/page.tsx:256-265).
- The diaspora themes (Eldest Daughters, Mothers Between Worlds) suit a South Asian employee resource group (ERG) sponsor better than a company-wide benefit. That is my inference.

**What would have to change, based on internal constraints:**
- **Length and timing.** Evening 90-minute sessions become lunchtime 60 to 75 minutes. Google Meet's free tier caps calls of three or more people at 60 minutes, and the runbook uses free Meet (runbook:18-19). The Meet cap is general knowledge, not from the repo; verify it.
- **Time zones.** If Keepers are in Pakistan (UTC+5), US Eastern business hours (9am to 5pm, UTC-4 until 1 November 2026) fall between 6pm and 2am PKT, and Pacific hours between 9pm and 5am PKT. Noon ET is 9pm PKT; noon PT is midnight PKT. The runbook requires four hours of overlap for a Sit (runbook:62).
- **Crisis in a group.** Stage 11 is written for 1:1 conversations (runbook:146-162). A group version needs a rule for disclosure in the room: the facilitator follows up 1:1 afterwards, and the founder's follow-ups at 24 hours, 7 days and 30 days still apply.
- **Reporting to the employer.** The employer should see aggregate attendance only, never content. That has to be written into a contract, and no contract exists. The trust page also says Keepers "do not have the same mandatory reporting obligations therapists do" (app/trust/page.tsx:72); an employer will ask what happens when someone threatens harm at work.
- **Keeper pay.** The 80% membership rule does not fit a company invoice, so group work needs its own fee rule (section 5).
- **Tools.** There is no roster, group booking or group thread today.

## 4. Capacity over the next 90 days (psychologists available, number unknown)

**Keeper time per unit** (estimates built from the site's own descriptions):
- **Hearthside member:** 3 to 4 hours a month (memory keeper-revenue-share.md:21-22). I use 3.5.
- **Hearth Deep member:** 6 to 8 hours a month (four Sits with preparation, a 4-hour reply window, four Friday notes).
- **Workplace Circle** (6 weeks, 60 to 75 minute sessions): about 3.25 hours a week (1.25 session, 0.25 prompt, 1.0 thread replies, 0.5 reflection, 0.25 preparation), or about 22 hours per series including setup.
- **One-off 60-minute company group session:** about 2 hours (preparation, the session, a follow-up note).

**Per Keeper, at an assumed 10 or 20 hours a week** (the real figure is unknown):

| Keeper hours/week | Hearthside members (1:1) | Concurrent workplace Circles (employees) | One-off sessions/week |
|---|---|---|---|
| 10 | about 12 | 3 (up to 30) | 5 |
| 20 | about 24 | 6 (up to 60) | 10 |

For N Keepers, multiply. Example: N = 5 at 10 hours a week gives about 60 Hearthside members, or 15 concurrent Circles (up to 150 employees), or 25 one-off sessions a week.

**The binding constraints over the next 90 days are not Keeper hours:**
1. **Stage 0 comes first.** Nothing can be delivered until the preconditions are ticked: a contracted Keeper trained on the runbook with a Cal.com page, a dry-run payout (KAN-70), and a Whop payout method (KAN-33) (runbook:24-32).
2. **Founder time.** The founder owns matching within 72 hours, acting on alerts within 24 hours, the Saturday check of Friday notes, the pay run every second Friday, and crisis follow-ups at 24 hours, 7 days and 30 days (runbook:170-178). The runbook was written for the first ten members (runbook:182). B2B adds cold calling during US hours, which is 6pm to 2am PKT for the East Coast.
3. **Tools.** Free Meet caps group calls (verify). Cal.com's free tier is per person. There are no group threads.
4. **Paperwork** before a company can pay (section 7).

**Realistic read (my judgement):** suppose N psychologists finish runbook onboarding in the first three weeks. Then the founder can run a few B2B pilots (for example two to four Circles, or a handful of one-off sessions) alongside the first 20 to 40 B2C members. The ceiling is the founder's operations time and contracting, not Keeper hours.

## 5. Unit economics

### 5.1 B2C, per member per month
The Keeper's share is 80% of the fee (runbook:168). That figure is internal only (memory keeper-revenue-share.md). **Whop's fee is not recorded anywhere in the repo**, so the table shows an assumed all-in fee of 0%, 5% and 10%. Payout transfer costs (Wise or Payoneer) and the 0.25% PSEB tax route (docs/payments-integration/deployment.md:24) also come out of Hearth's share.

| Plan | Price per month | Keeper (80%) | Hearth before fees | Hearth at 5% fees | Hearth at 10% fees |
|---|---|---|---|---|---|
| Hearthside monthly | $39.00 | $31.20 | $7.80 | $5.85 | $3.90 |
| Hearthside annual | $32.50 | $26.00 | $6.50 | $4.88 | $3.25 |
| Hearth Deep monthly | $99.00 | $79.20 | $19.80 | $14.85 | $9.90 |
| Hearth Deep annual | $82.50 | $66.00 | $16.50 | $12.38 | $8.25 |

**Members needed for $1,000 a month to Hearth:**
- Hearthside: 129 with no fees, 171 at 5% fees, 257 at 10%.
- Hearth Deep: 51, 68 or 102.

**What an hour of 1:1 work earns:**
- Hearthside: $9.75 to $13.00 of revenue per Keeper-hour. The Keeper gets $7.80 to $10.40 and Hearth $1.95 to $2.60, before fees.
- Deep: about $12.40 to $16.50 per Keeper-hour.

**The business plan's margin model is out of date.** It assumes a Keeper cost of $12 per Sit and a 21% gross margin on Hearthside (docs/business.md:321-325). That predates the 80% decision. At 80%, Hearthside's gross margin is 20% before any technology or payment costs.

### 5.2 B2B group work at illustrative prices (my figures, not market data)

| Format | Keeper hours | Price | Revenue per Keeper-hour |
|---|---|---|---|
| One-off 60-minute company session | 2 | $300 / $600 / $1,000 | $150 / $300 / $500 |
| 6-week workplace Circle, up to 10 employees | 22 | $1,500 / $3,000 / $5,000 | $68 / $136 / $227 |

**How a $3,000 Circle could split:**
- Under the 80% rule, the Keeper gets $2,400 (about $109 an hour) and Hearth $600.
- With a fixed Keeper fee of $25 an hour (hypothetical; two to three times the effective 1:1 rate), the Keeper gets $550 and Hearth $2,450 before fees and sales costs.
- For comparison, $2,450 is what about 419 Hearthside member-months earn Hearth at 5% fees.
- The group pay rule is a founder decision (section 9).

### 5.3 B2B 1:1 seats
- **Same hour, same money.** At $39 a seat, the yield per Keeper-hour is identical to B2C. B2B only changes how members are acquired and who pays.
- **The plan's big number is unvalidated.** The business plan's figure is "1,000-employee company × $200/employee/year = $200K ACV" (docs/business.md:454), where ACV means annual contract value.
- **Per-employee pricing only wins if few people use it.** Pricing per eligible employee beats B2C per hour only while enrolment stays low. The validation report's "avg EAP utilization: 6%" (hearth-validation-report.md:75) is an unsourced internal claim.

### 5.4 Getting paid by a company
- **Nothing in the repo covers company payment.** There is no mention of invoices, purchase orders or bank transfers.
- **Whop is set up for consumers.** It is a consumer checkout, one member per payment (app/lib/checkout.ts; memory whop_integration.md). There is no organisation or seat model and no database ("No DB yet", whop_integration.md:65).
- **Payouts** go to a PKR bank account (the PSEB route) or to crypto (docs/payments-integration/deployment.md:24-25).
- **Unknown:** whether Whop can issue a company invoice or accept a bank transfer.

## 6. Traction evidence and what B2C costs today
- **Metrics files:** all four have a header and no rows (data/metrics/instagram-weekly.csv:1, intake-weekly.csv:1, payments-weekly.csv:1, search-console-weekly.csv:1).
- **Members:** "No member counts or ratings yet" and "Current metrics: none yet" (.agents/product-marketing.md:82, 90).
- **Search:** in the three months to 2026-08-22, "203 impressions and 3 clicks at average position 31.4". Every query was about "hearth" the noun (docs/seo/README.md:10-13).
- **Intake:** production had no email key from May to August 2026. Every submission "was logged, returned success to the applicant, and notified nobody", and lead recovery is tracked as KAN-18 (docs/payments-integration/progress.md:45-49). The number of intakes is unknown.
- **Instagram:** no Insights numbers are recorded. The "76x-reach outlier" cited in planning is another account's result from trend research (docs/marketing/research/trending-formats-2026-08.md:8), not Hearth's.
- **Payments:** the webhook was verified with a synthetic signed event (memory operations-loop.md). No real payment is recorded.
- **B2C cash cost:** "The plan at $0" (docs/marketing/07-instagram-playbook.md:21), with a "$0 paid budget to start" (.agents/product-marketing.md:110). The tools run on free tiers:
  - Netlify (docs/payments-integration/progress.md:53-54).
  - Brevo (300 emails a day) and ImprovMX (memory email-stack.md).
  - Cal.com (runbook:18).
  - Buffer and Zernio (docs/marketing/09-daily-content-machine.md).
- **Paid levers are planned, not spent.** The first $150 a month for ads is for "when money appears" (07-instagram-playbook.md:32). The 90-day plan also lists a $2K newsletter placement and $500 of retargeting (docs/marketing/06-launch-90-day-plan.md:98, 143).
- **The real costs** are founder time and Whop's per-transaction fee. B2C has not been shown to be expensive; it has not yet been run.

## 7. What already exists for employers, groups, safety, privacy and legal

### 7.1 Reusable
- **B2B thesis and targets:**
  - "Hearth for Workplaces (B2B)" as Phase 3, months 24 to 48 (docs/business.md:286, 346, 451-455).
  - "South Asian employers with diaspora workforces [...] A Hearth for Workplaces is a natural Phase 3 play with dramatically higher gross margin (B2B vs D2C)." (hearth-validation-report.md:69)
  - "Hearth Stipends" in partnership with employee assistance programmes (docs/business.md:708).
- **A group format:** the Circles spec (circles:26-148; docs/prd.md:363-372).
- **Safety:**
  - The intake screen asks "Are you having any thoughts of harming yourself or others?" and routes to crisis lines (app/intake/page.tsx:721-771).
  - Flagged intakes are logged separately on the server (app/api/intake/route.ts:103-108).
  - A flagged intake gets a founder reply within 4 hours (runbook:53).
  - The crisis stage of the runbook (runbook:146-162), and the /crisis page.
- **Scope and confidentiality language:**
  - The terms (app/terms/page.tsx:60-77, 125, 147).
  - "nothing is shared with employers or insurers" (app/page.tsx:108).
  - "not HR" (app/for/[topic]/page.tsx:279).
  - An explainer on how EAP confidentiality works (app/learn/cant-afford-therapy/page.tsx:48-49).
  - FAQ answers that point to employer wellness budgets (app/faq/FaqClient.tsx:101; app/pricing/page.tsx:40).
- **Outreach machinery:**
  - The "fuzzy variables" personalised cold-email method (docs/marketing/08-saraev-method-for-hearth.md:14).
  - A follow-up cadence of 1, 2, 3, 7, 14, 21, 28, 56 and 84 days with opt-out rules (08-saraev-method-for-hearth.md:18; .claude/skills/followups).
- **Operations:** the concierge runbook for 1:1 seats, and the Whop checkout with founder alerts for individual payments.

### 7.2 Missing
- **Legal entity.** No entity is named anywhere on the site, and the terms apply Delaware law (app/terms/page.tsx:156) without naming one. Whop KYC was done as an "individual seller, no KYB needed" (docs/payments-integration/progress.md:223). The business plan says a "Delaware C-corp + US registered agent" is needed (docs/business.md:539, 571).
- **Contracts.** There is no master agreement, order form, data-processing agreement, confidentiality or aggregate-reporting clause, or crisis and duty-of-care clause.
- **Insurance.** The trust page claims "$1M+ professional liability coverage. Cyber-incident coverage in addition." (app/trust/page.tsx:259-260). Yet the PRD item "[ ] $1M+ professional liability insurance bound" is unticked (docs/prd.md:729), and the business plan prices it at "~$8–15K/year. Pre-launch." (docs/business.md:541). Nothing shows a policy exists.
- **Security evidence.**
  - **What the site claims:**
    - AES-256 encryption at rest.
    - US AWS hosting "with isolated databases for member data".
    - Magic-link sign-in with optional 2FA.
    - Encrypted daily backups.
    - An "Independent annual third-party security audit".
    - Access logs, and data export from account settings.

    Sources: app/trust/page.tsx:243-264; app/privacy/page.tsx:77, 80, 104.
  - **What the runbook describes:**
    - The Long Talk is an email thread.
    - Match records live in "The founder's inbox and one spreadsheet".
    - There is no sign-in or dashboard.

    Sources: runbook:20-21, 182.
  - **A vendor security questionnaire would expose the gap.**
- **Workplace page.** The site PRD says "no `/workplaces` until Phase 2" (docs/landing-page-prd.md:1266), and plans one "separate from the consumer funnel" (docs/landing-page-prd.md:1292).
- **Organisation and seat model.** There are no eligibility checks, company billing or aggregate usage reporting, and no database.
- **Proof of the Keeper roster.** There are no real Keeper names or bios, no credential verification, no background checks and no training records. The placeholder profiles cannot be shown to a buyer.
- **Keeper pay rule for group and B2B work.** None exists, and the three 1:1 rules disagree (section 1.6).
- **A separate sending setup for cold email.** The runbook says Brevo on hello@dearhearth.com is the "One sender. Do not add another." (runbook:17). Cold outreach from the domain that carries member and crisis alerts would put their delivery at risk. Brevo's acceptable-use terms for unsolicited email should be checked (general knowledge, not in the repo).
- **Forms that work.** Any new "talk to us" form for companies must notify a person. The three existing secondary forms silently drop submissions (section 1.7).

### 7.3 To verify (general knowledge, not in the repo)
- **The Canada crisis number may be out of date.** The crisis page, the runbook and llms.txt list Canada as "Crisis Services Canada 1-866-585-0445" (app/crisis/page.tsx:101-103; runbook:156; public/llms.txt:23). Canada launched the 9-8-8 line in November 2023. A Canadian employer reviewing the protocol would check this first.

## 8. Internal rules a B2B pitch must respect

### 8.1 What the site says about credentials now (commit 98cac8b, KAN-75)
- **The line everywhere:** Keepers are often psychologists or counsellors "by training in their home countries", some hold licences there, and none act as a clinician at Hearth (quotes in section 1.3).
- **Before 98cac8b** the copy said "Keepers are trained peer supporters, not licensed therapists" (git show 98cac8b, public/llms.txt).
- **"Psychologist" as a Keeper credential** appears at:
  - app/page.tsx:88, 998
  - app/faq/FaqClient.tsx:23, 60
  - app/hearth-vs-therapy/page.tsx:29, 34
  - app/for-keepers/ForKeepersClient.tsx:127
  - app/intake/page.tsx:1003
  - app/learn/what-is-a-hearth-keeper/page.tsx:487
  - app/learn/peer-support-vs-therapy/page.tsx:597
  - public/llms.txt:29
- **Everywhere else** the word describes clinicians the Keeper is compared with (for example app/bridge/page.tsx:228; app/hearth-vs-therapy/page.tsx:28).

### 8.2 Where "our psychologists resolve employees' personal and professional issues" collides
1. **AGENTS.md:10:** "Never imply clinical outcomes or call a Keeper a clinician." "Resolving issues" promises an outcome, and selling the people as psychologists presents them to a buyer as clinicians.
2. **Protected titles, docs/business.md:534:** "Keepers are never called therapists, counselors, psychologists, or psychotherapists. Even in marketing copy. Even casually. Title violations are per se in every US state." The same rule appears at docs/business.md:185. The current site copy already stretches this with "by training at home"; a deck headlined "psychologists" crosses it. The cross-border licensing question is for the legal agent.
3. **Clinical words, docs/business.md:535:** marketing may not use "depression", "anxiety", "trauma", "PTSD", "diagnose" or "treat".
4. **The avoid list, .agents/product-marketing.md:67:** "cure, treat, fix, 'mental health' as a label for the product". "Resolve" is a synonym of "fix".
5. **The terms, app/terms/page.tsx:147:** "We make no warranty that any conversation with a Keeper will produce a specific outcome." The pitch would contradict Hearth's own terms. See also terms:73, "whatever qualifications or licences they hold elsewhere".
6. **The price rule:** "'Cheaper', 'affordable', 'a fraction of the price' and price-versus-therapy maths are out everywhere, including captions" (.agents/product-marketing.md:76; memory compare-with-category-not-betterhelp.md). As written, "affordable prices for companies" collides with it. Whether B2B sales material gets its own rule is a founder decision.
7. **Placeholders:** "Do not invent member counts or ratings", and no new fabricated testimonials, bios or bylines (.agents/product-marketing.md:81-82; memory placeholder-keepers.md). A sales deck cannot present Aruna, Rabia, Faisal, Priya S. or Hassan A. as the team.
8. **The Keeper share:** never publish the 80% (memory keeper-revenue-share.md). Use "paid from membership fees" language with buyers too.
9. **Assignment:** members never choose a Keeper (memory keeper-assignment-and-placeholders.md). A company portal with a Keeper directory would break this.
10. **No em dashes** in any user-facing string, including emails (AGENTS.md:9). Cold emails count.
11. **Credentials:** never overstate Keeper credentials; the business plan lists this as its mitigation against an FTC investigation (docs/business.md:558). Trust-page claims must be true before a buyer relies on them.

**Safe phrasing that already exists:** "Keepers, many of them psychologists or counsellors by training in their home countries, who work at Hearth as peer supporters, not as clinicians" (adapted from app/page.tsx:998-999 and public/llms.txt:29). In place of "resolving issues": "one steady person to talk to about what work and life are carrying" (my suggestion, in the customer language of .agents/product-marketing.md:66).

### 8.3 Internal documents on B2B timing
- "do not chase B2B revenue too early [...] it forces the brand to sound like an HR product" (docs/marketing/01-marketers-research.md:239).
- "Not corporate-wellness" is written into the brand voice rules (docs/marketing/04-hearth-marketing-strategy.md:105).
- The B2B portal is V2 in the PRD and out of scope for V1 (docs/prd.md:174, 748).

## 9. Unknowns only the founder can answer
1. **The roster.** How many psychologists are there, where does each live, and where is each licensed? What degree level, which languages, and how many hours a week can each give? Are any based in the US or Canada?
2. **Readiness.** Are they contracted and trained on the runbook (Stage 0)? Has a dry-run payout landed (KAN-70), and is the Whop payout method set up (KAN-33)?
3. **The Indeed data.** Was the applicant data saved before the cutoff around 29 August?
4. **The entity.** Is there a legal entity (a Pakistani company, or a US LLC or C-corp), or only the individual Whop seller? Can Hearth sign contracts, issue invoices and receive bank transfers?
5. **Insurance.** Is the insurance claimed on the trust page actually bound?
6. **Whop.** What is Whop's real all-in fee on Hearth's plans, and can Whop invoice a company?
7. **Traction.** How many intakes have come in (including the silent May to August period, KAN-18)? Are there any paying members, and any Instagram numbers?
8. **Group pay.** For group and B2B work, do Keepers get the 80% share or a per-session or per-hour fee?
9. **The price rule.** Does B2B material follow "never sell on price", or get its own rule?
10. **Outreach.** Who is the cold-outreach list: US and Canadian companies, employee resource groups, or South Asian professional associations? What is the budget for a separate outreach domain and inbox?
11. **The Circle format.** Will the founder change it (length, lunchtime slots, closed company cohorts), and who handles crisis follow-up in a group?

## Appendix: files read
- **Root and marketing context:** AGENTS.md; .agents/product-marketing.md.
- **docs/:**
  - business.md, prd.md and landing-page-prd.md.
  - operations/concierge-runbook.md.
  - idea-validator/hearth-validation-report.md.
  - payments-integration/README.md, progress.md and deployment.md.
  - seo/README.md and seo/audit-2026-09-09.md.
  - marketing/01, 04, 06, 07, 08 and 09, plus marketing/research/trending-formats-2026-08.md.
- **Data:** data/metrics/*.csv.
- **app/:**
  - Pages: page.tsx, pricing, circles, bridge, terms, privacy, trust, crisis, faq, for-keepers, for-therapists, gift, keepers, intake, for/[topic], hearth-vs-therapy and embers.
  - Code: lib/checkout.ts and api/intake/route.ts.
- **Other:** public/llms.txt; `git show 98cac8b`; the memory files indexed in MEMORY.md.
