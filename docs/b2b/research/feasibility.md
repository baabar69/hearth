# Hearth B2B feasibility: selling peer support to US and Canadian employers from Pakistan

Researched 2026-09-11. Sources were accessed on that date; publication dates are given where the source shows one. This is research, not legal, tax or insurance advice. Anything marked **LAWYER**, **ACCOUNTANT** or **BROKER** needs a qualified professional before Hearth relies on it.

---

## 0. Verdict in one screen

- **Small employers (roughly 10 to 250 staff): feasible in 3 to 5 weeks, for about $4,000 to $17,000 in year one (mostly legal review and insurance) plus about $100 a month in tools.** The low end assumes the licensure review covers only a few states. The gates are a 3 to 4 week warm-up for a new email domain, a fixed-fee lawyer review, and an insurance quote. Hearth can already invoice through Whop by card or ACH.
- **Enterprise (1,000+ staff): not feasible in 2026.** Expect SOC 2 ($15,000 to $80,000, 1 to 12 months), insurance limits of $1M to $5M or more, a US entity, security questionnaires, net 45 to 90 payment terms, and 3 to 12 month cycles.
- **The founder's new fact changes the shape of the offer.** If Keepers are psychologists licensed in Pakistan, they **cannot practise psychology or psychotherapy with people located in any US state or Canadian province**, and **cannot be called "psychologists"** to US or Canadian buyers. In Oregon and New York even "psychological" or "psychology" used to describe the service is regulated. Pitching them clinically also makes the employer's program look like an ERISA EAP, which means a group health plan with COBRA, Form 5500 and HIPAA duties. That is the buyer's burden, and a reason their lawyers slow down or say no. **The lawful and easier-to-buy lane is non-clinical: peer support, coaching, and education or workshops, with credentials described accurately and without protected titles.** Get a LAWYER to sign off on the offer and the pitch wording before the first call.
- **Outreach is legal if done carefully.** US email works on an opt-out basis under CAN-SPAM. Canada's CASL is opt-in, with a narrow exception for addresses the person published themselves. B2B cold calls in both countries are exempt from the national Do Not Call lists, but must be **hand-dialled** (no autodialer, prerecorded or AI voice). Canada also requires a free DNCL registration, fixed calling hours and an internal do-not-call list.
- **Never send cold email from dearhearth.com.** Brevo's anti-spam policy bans cold and purchased lists, and a suspension there would take down intake emails, founder alerts and `hello@` send-as together.

---

## 1. Cold email

### 1.1 United States: CAN-SPAM
- CAN-SPAM covers B2B email: "The law makes no exception for business-to-business email." It is **opt-out**, so no consent is needed before the first message (FTC compliance guide, Aug 2023, penalty note edited Jan 2024).
- Every commercial email must:
  - have accurate header and routing information;
  - use a subject line that is not deceptive;
  - be identifiable as an advertisement;
  - include a **valid physical postal address**;
  - offer a clear way to opt out;
  - honour opt-outs within **10 business days**, with the opt-out mechanism working for at least 30 days after sending.
- Penalty: up to **$53,088 per email** as stated on the FTC page. The figure is inflation-adjusted each January, so it may now be slightly higher.
- Both the company promoted and any agency that sends on its behalf are liable.

### 1.2 Canada: CASL
- The default is **opt-in**. Cold email to Canada is lawful only under **implied consent by conspicuous publication**, where all three of these hold:
  1. the recipient published the address, or caused it to be published (for example on their own company's website);
  2. there was no "no unsolicited messages" statement next to it;
  3. the message is **relevant to their business role**.
- The CRTC's position, upheld by the Federal Court of Appeal in *CompuFinder* (FCA, June 5, 2020; CRTC penalty 2017, reduced from $1.1M to $200,000):
  - an address in a third-party directory or data vendor such as Apollo or ZoomInfo does **not** count as published by the recipient;
  - a job title alone does not prove relevance. The sender must be able to explain why this message relates to this person's duties.
- The **B2B exemption does not cover cold prospecting**. It requires an existing relationship between the two organisations.
- Every commercial message must identify the sender (name, mailing address, and a phone, email or web contact valid for 60 days) and include an unsubscribe mechanism, honoured within 10 business days.
- Penalties: up to **$1M per violation for individuals and $10M for organisations**, and directors and officers can be personally liable.
- CASL applies to messages accessed in Canada, wherever the sender is. The private right of action was suspended in 2017 and is not in force.
- **LAWYER:** whether LinkedIn DMs to Canadians count as commercial electronic messages. CASL's definition of an electronic address covers email, instant-messaging, telephone "and any similar account", so assume they do.
- **Practical rule:** for every Canadian address, keep the URL, a screenshot and the date showing where the person or their employer published it. The first line of the email should tie the message to their HR, people or benefits role.

### 1.3 Mailbox-provider rules (Google, Yahoo, Microsoft)
- **Gmail, all senders** (since Feb 1, 2024):
  - SPF **or** DKIM;
  - valid forward and reverse DNS;
  - TLS;
  - Postmaster Tools spam rate **below 0.3%**.
- **Gmail, 5,000+ messages a day to personal Gmail:** SPF **and** DKIM, DMARC with the From: domain aligned, and **one-click unsubscribe** plus a visible unsubscribe link for marketing mail. These rules apply to gmail.com and googlemail.com addresses; Google Workspace recipients fall under separate policies. Yahoo's rules are the same in substance, including the 0.3% threshold.
- **Microsoft Outlook.com, Hotmail and Live** (from May 5, 2025): senders of more than 5,000 a day must pass SPF and DKIM and publish DMARC (at least `p=none`) aligned with one of them.
- Hearth's cold volume will be far below 5,000 a day. Set everything up anyway and aim for complaints **under 0.1%**. Providers say to stay under 0.1% and never reach 0.3%.

### 1.4 Why cold email must never leave dearhearth.com
- **Brevo's terms:** its anti-spam policy and terms of use prohibit purchased, rented or scraped lists, and non-compliance can lead to "immediate suspension or restriction of your entire account". Third-party reviews of Brevo's 2026 terms say plainly that cold email is not allowed.
- **Everything runs through that one Brevo account.** Per the email-stack memory, it carries:
  - the intake confirmation (`app/api/intake/route.ts`);
  - the founder alerts (`app/lib/brevo.ts`);
  - the SMTP relay for `hello@dearhearth.com` send-as from Gmail.

  So even a "manual" cold email typed from `hello@` in Gmail goes through Brevo, and one suspension silences every member-facing email at once.
- **Reputation is tracked per domain.** Google Postmaster measures the spam rate per domain, so complaints from cold outreach would lower inbox placement for member mail and intake replies.

### 1.5 Setting up and warming a secondary domain
1. Register 1 or 2 lookalike domains, for example `hearthforwork.com` or `dearhearth.team`. Check availability and trademark conflicts, and point the root to a Hearth page for employers.
2. Create 2 or 3 inboxes per domain on Google Workspace ($7 per user per month on annual billing, $8.40 flexible) or Microsoft 365. Use real names, photos and signatures.
3. DNS: SPF, DKIM, DMARC (start at `p=none`, move to `quarantine` after 30 days clean) and MX. Turn open and click tracking off at first. A custom tracking domain is needed only if tracking is used.
4. **Warm up for 3 to 4 weeks** before the first cold email on a brand-new domain. Some operators say 30 to 60 days. Most sending tools include automatic warm-up.
5. Then send **10 to 20 cold emails per inbox per day**, with about 30 as a ceiling. Verify every address first and keep bounces under 2%.
6. Every email carries: plain text, one link at most, a postal address (a US virtual mailbox from the LLC provider, or the Pakistan address), an opt-out line, and for Canada the CASL identification block.
7. Keep a suppression list shared with the calling and LinkedIn lists, so an opt-out in one channel stops all of them.

**Earliest realistic first cold email if the domain is bought this week: about October 5 to 12, 2026.** Calls and manual LinkedIn outreach can start immediately.

### 1.6 Realistic results (2025 to 2026 benchmarks)
- **Reply rate:** average **3.1% to 3.4%**, top performers 8% to 12% (Instantly Cold Email Benchmark Report 2026; Cleanlist, Feb 18, 2026).
- **Meetings booked per email sent:** a "good" rate is **0.8% to 1.5%**, top quartile 1.5% to 3%, overall range 0.5% to 2.5% (LeadHaste 2026).
- 58% of replies come from the first email.
- **Worked example:** 4 inboxes x 15 a day x 22 business days is about 1,300 emails a month. That gives about 40 replies and 7 to 20 meetings. Meeting-to-deal rates for this offer were not researched here.

### 1.7 Free or cheap tools
| Item | Cost | Note |
|---|---|---|
| Sending domain | about $10 to $15 a year each | |
| Google Workspace inbox | $7 to $8.40 per inbox per month | |
| Instantly (Growth) | from $37.60 a month on annual billing | includes warm-up and sequences; add-ons cost extra |
| Apollo free plan | $0 | third-party reports: up to 10,000 email credits a month if you sign up with a company-domain address (100 with Gmail), 5 mobile numbers and 10 exports a month |
| Hunter free plan | $0 | 50 credits a month |
| **Total, 4 inboxes** | **about $70 to $110 a month** | |

---

## 2. Cold calling US and Canadian businesses from Pakistan

### 2.1 United States
- **Telemarketing Sales Rule (TSR):** B2B calls stay exempt from the National Do Not Call Registry and the TSR's record-keeping rules. However, since the FTC's 2024 amendment (effective May 16, 2024), **material misrepresentations in B2B telemarketing are prohibited**. So: no invented client names, outcomes or credentials.
- **TCPA:** DNC protections apply to residential subscribers, and in practice **mobile numbers are treated as residential**. Calls to mobiles made with an autodialer, a prerecorded voice or an **AI-generated voice** need prior express consent (written consent for telemarketing). The FCC's Declaratory Ruling FCC 24-17 (Feb 8, 2024) confirmed that AI voices are "artificial" voices. Landlines and company direct lines are the lower-risk targets.
- **State mini-TCPAs** apply on top. Florida (FTSA) defines "autodialer" very broadly. Oklahoma (OTSA) allows at most 3 calls in 24 hours and no sales calls between 8 p.m. and 8 a.m. Most mini-TCPAs exempt B2B, but the definitions vary.
- **Safe operating rule:** hand-dial only, one person choosing and dialling each number. No voicemail drops or AI voice agents. Call only 9:00 to 17:00 in the recipient's local time. Honour every "don't call me" at once and log it. **LAWYER** before adding any dialer or AI calling tool.

### 2.2 Canada
- **B2B calls are exempt from the National DNCL Rules** (Part II of the Unsolicited Telecommunications Rules). They remain subject to the **Telemarketing Rules** (Part III) and the automatic-dialing (ADAD) rules (Part IV).
- **Register with the National DNCL operator even if you only make exempt calls.** Registration is free. The paid list subscription ($62,166 a year for every area code, as of Sep 15, 2025) is only needed for consumer calling.
- Keep an **internal do-not-call list** and honour requests. Identify yourself and the company at the start of the call and display caller ID.
- **Calling hours:** 9:00 a.m. to 9:30 p.m. on weekdays, 10:00 a.m. to 6:00 p.m. on weekends, in the recipient's local time.

### 2.3 US and Canadian business hours in Pakistan time
PKT is UTC+5 with no daylight saving. US and Canadian clocks go back on **Sunday, November 1, 2026**.

| Prospect's zone | 9:00 to 17:00 local, until Nov 1, 2026 | After Nov 1, 2026 |
|---|---|---|
| Atlantic (Halifax) | 17:00 to 01:00 PKT | 18:00 to 02:00 PKT |
| Eastern (New York, Toronto) | **18:00 to 02:00 PKT** | 19:00 to 03:00 PKT |
| Central (Chicago, Winnipeg) | 19:00 to 03:00 PKT | 20:00 to 04:00 PKT |
| Mountain (Denver, Calgary) | 20:00 to 04:00 PKT | 21:00 to 05:00 PKT |
| Pacific (Seattle, Vancouver) | 21:00 to 05:00 PKT | 22:00 to 06:00 PKT |

Belkins' best window is 3 to 4 p.m. local time, which is midnight to 1 a.m. PKT for Eastern prospects. Wednesday is the best day and Friday the worst.

### 2.4 Phone tools from Pakistan
- **Skype shut down on May 5, 2025**, so the old default is gone.
- **Quo (formerly OpenPhone, rebranded September 2025):** $15, $23 or $35 per user per month on annual billing ($19, $33 or $47 month to month). It includes a US or Canadian number and unlimited US and Canada calling and texting under a fair-use policy. The app works over the internet from anywhere.
- **Pakistan side:** only operators licensed by the PTA may provide VoIP to end users, and the PTA enforces against "grey" traffic. Call centres must register with PSEB. A single founder using a US app over the internet is common practice but not clearly sanctioned in writing, and the source for this point is an older forum thread, so treat it as unverified. **LAWYER (Pakistani telecom)** before hiring callers or running a calling team.

### 2.5 Realistic calling results
- **Belkins study** (175,000+ dials in 2025, published June 26, 2026):
  - 9.9% of dials connect;
  - 58% of connects become a conversation;
  - **4.6% of conversations book a meeting**;
  - that is about **one meeting per 370 dials**.
- Managers are the easiest to reach; directors book the most meetings. February and May are the best months; July and August the worst. The US connect rate is lower than the UK's.
- Vendor blogs quote 1 meeting per 37 to 45 dials. Treat those figures as optimistic.
- **Solo-founder maths:** at 25 careful hand-dials an hour, 4 hours a night, 5 nights a week, that is 500 dials a week. At the Belkins rate that gives about **1 to 2 meetings a week**.

### 2.6 LinkedIn alongside email and calls
- **100 invitations per rolling 7 days** on every tier, free or paid.
- Sales Navigator Core costs **$119.99 a month** or $1,079.88 a year and includes 50 InMails a month.
- **Automation is prohibited.** Section 8.2 of LinkedIn's User Agreement bans bots and automated messaging, and accounts get restricted. Work by hand: about 15 personalised invitations a day to HR, people and benefits leaders, then a light follow-up.
- CASL may apply to messages sent to Canadians (see 1.2).

---

## 3. Getting paid and contracting

### 3.1 Payment routes
| Route | Available from Pakistan today? | Cost | Fit |
|---|---|---|---|
| **Whop invoices** (existing account, individual KYC approved) | **Yes, now** | Third-party breakdowns: about 2.7% + $0.30 for domestic cards; **ACH 1.5% capped at $5**; +1.5% for international cards and 1% FX; payout by next-day ACH $2.50 or wire $23. Check the Whop fees page. | **Good for small companies.** The payer needs only an email address. Methods: card, ACH, PayPal, crypto, platform balance, financing. One-off or recurring (weekly, monthly, quarterly, yearly or custom). Automatic reminders at 3, 7, 14, 30 and 60 days; invoices void at 120 days. **Gaps:** Whop's docs don't mention PO numbers, buyer tax IDs, custom line items, wire instructions or net-60 terms. Also check whose name appears as the seller on the invoice, since Whop is the merchant of record. |
| **Payoneer** | Yes | About 1% on incoming commercial (ACH) payments, plus up to 2% over mid-market FX when withdrawing to PKR: **about 3% all-in** | Suits companies that pay vendors by bank transfer. Payoneer can issue payment requests. |
| **Wise Business** | **Not for Pakistan residents** (Pakistan is not a supported country of residence at signup, per Feb 2026 reports; some sources disagree, so verify) | Low | Works through a US LLC with an EIN, which gets US account details |
| **Stripe** | No for Pakistani businesses. **Stripe Atlas** accepts applicants worldwide, but Pakistani applicants report mixed approval | Atlas $500 one-time (Delaware C-corp or LLC, EIN, first-year registered agent, then about $100 a year) | Needed only for enterprise-style billing |
| **US LLC via doola or Firstbase** | Yes | doola from $297 (EIN, registered agent, address), $497 a year for compliance; Firstbase $399 plus $299 a year for the registered agent | Unlocks US banking, Wise Business and a US address for W-9 and supplier portals |

### 3.2 Tax forms and withholding (**ACCOUNTANT** for all of this)
- **No US entity, founder invoicing as a Pakistani individual or business:**
  - give US payers a **W-8BEN** (individual) or **W-8BEN-E** (entity);
  - services **performed entirely outside the US are foreign-source income**, so there is **no US withholding and no Form 1042-S**;
  - the payer keeps the W-8 and a record of where the work was done (TaxesForExpats and Beancount, 2026).
  - If anyone ever performs the services while physically in the US, that part becomes US-source income, where 30% withholding is the default unless a treaty applies.
- **Foreign-owned single-member US LLC (a "disregarded entity"):**
  - it must file **Form 5472 with a pro forma Form 1120 every year**;
  - the penalty is **$25,000 per missed form**, plus $25,000 for every 30 days it stays unfiled after an IRS notice;
  - which form the payer should receive (the owner's W-8BEN versus a W-9) needs an accountant, because US accounts-payable teams often ask for a W-9 by reflex.
- **US C-corp (the Atlas default):** issues a W-9, pays 21% federal corporate tax plus state tax and Delaware franchise tax, and involves more administration.
- **Canada:**
  - **Regulation 105** requires 15% withholding **only for services rendered in Canada**, so remote services from Pakistan are not subject to it;
  - but if a contract mixes in-Canada and remote services without a documented split, payers may withhold on the whole amount;
  - **ACCOUNTANT:** GST/HST on B2B supplies by a non-resident.
- **Pakistan (Section 154A):**
  - export proceeds bear a **final tax of 1%** for non-IT services, or 0.25% only for PSEB-registered IT and IT-enabled services, deducted by the bank when the remittance lands (extended to June 30, 2029);
  - **ACCOUNTANT:** whether peer support or coaching qualifies as an IT-enabled service, and how income from a US LLC is taxed for a Pakistani resident, who is taxed on worldwide income.

### 3.3 What a buyer requires before paying a foreign vendor
- **About 50 staff:**
  - the owner or the one HR person signs a short order form, or accepts the terms by email, and pays by **card or ACH**;
  - they may ask for a W-8BEN (or a W-9 if Hearth has a US entity) and a proper invoice;
  - they rarely ask for an insurance certificate;
  - payment terms net 15 to 30, and the whole process takes days to 2 weeks.
- **About 5,000 staff:**
  - **supplier onboarding** in a procurement portal, with a tax form, bank verification and sanctions and KYC screening;
  - a **certificate of insurance** naming them as additional insured. Common baselines are general liability **$1M per occurrence and $2M aggregate**, professional liability **$1M+**, and cyber **$1M to $2M**; enterprises ask for $1M to $10M, and some Fortune 500 contracts start at $20M;
  - a security questionnaire and a **SOC 2 report** (or a credible equivalent), a DPA, and possibly a BAA (see 4.2);
  - MSA redlines, a purchase order, **net 45 to 90**, usually payment by ACH or wire only;
  - **3 to 12 months** end to end.

---

## 4. Liability and regulation when selling to employers

### 4.1 ERISA: can the program be an "EAP"?
- The Department of Labor has drawn a clear line:
  - a **referral-only** program staffed by people **without counselling training** is **not** an ERISA welfare plan (Advisory Opinion 91-26A);
  - programs whose counsellors are **trained in psychology or social work** and help with stress, anxiety, depression and substance use **provide medical care** and **are ERISA plans**.
- Benefits practitioners conclude that most such EAPs are **group health plans** (Newfront, Feb 24, 2022). That brings:
  - inclusion in the plan documents and summary plan description (SPD);
  - **Form 5500** filings;
  - **COBRA** continuation, with excise taxes of $100 a day for missed notices;
  - HIPAA portability rules, unless the program qualifies as an **excepted benefit**. That requires all four of these: no significant benefits in the nature of medical care; employees don't have to use it up before other health coverage; no employee contribution; and no cost-sharing.
- **What this means for Hearth:** "trained psychologists resolving personal issues" is exactly the fact pattern that makes a program an ERISA plan and a group health plan for the **employer**. Non-clinical peer support, coaching and workshops sit much further from that line.
- Whether support from people *trained* in psychology but acting non-clinically counts as "medical care" depends on the facts. **LAWYER (ERISA):** Hearth should hold a one-page position memo from its own counsel, because the buyer's counsel will ask.

### 4.2 HIPAA
- HIPAA reaches only **covered entities** (health plans, providers who bill electronically, clearinghouses) and their **business associates**.
- If Hearth contracts directly with an employer for a non-plan benefit and bills no insurer, HIPAA likely does not apply to Hearth.
- If the program is part of the employer's group health plan (4.1), the plan is a covered entity and **Hearth becomes its business associate**. That means a BAA and Security Rule safeguards.
- **Never write "HIPAA-compliant" in a pitch** unless a lawyer confirms both that HIPAA applies and that Hearth meets it. **LAWYER.** (These HIPAA points are general law, not re-sourced today.)

### 4.3 State consumer-health-data laws
- **Washington My Health My Data Act** (in force Mar 31, 2024; June 30, 2024 for small businesses):
  - covers any entity doing business in Washington or targeting Washington consumers, including **non-HIPAA mental-health services**;
  - requires **separate opt-in consent** to collect health data and again to share it, plus a **separate Consumer Health Data Privacy Policy**;
  - is enforceable by individuals through the Consumer Protection Act (California Lawyers Association, May 2, 2024).
- The statute says **"consumer" does not include an individual acting in an employment context** (RCW 19.373.010). Whether an employee using an employer-paid support benefit is acting "in an employment context" is **unclear (LAWYER)**. Assume the Act applies to the member's own data.
- Nevada and Connecticut have similar consumer-health-data rules (verify before relying on them).

### 4.4 What the employer may see (ADA)
- Under the ADA wellness-program rule still in force, medical information may reach the employer **only in aggregate terms that do not disclose, or are not reasonably likely to disclose, the identity of any employee**, and participation cannot be conditioned on waiving confidentiality (29 CFR 1630.14(d)(4)).
- **Design rule:**
  - usage reports are de-identified, with small groups suppressed (common practice is no cell under 5 to 10 people);
  - Hearth never tells the employer who attended or what was said.

### 4.5 Canada
- **PIPEDA:**
  - transferring personal data to another country for processing is allowed, but the transferring organisation stays **accountable** and must secure **comparable protection by contract**;
  - keep a record of **every** breach;
  - report to the Privacy Commissioner and notify individuals when there is a real risk of significant harm.
- **Quebec Law 25:** a **privacy impact assessment before personal information is communicated outside Quebec** (for example to Pakistan or US servers), plus a written agreement reflecting its results.
- Alberta and BC have their own private-sector privacy acts. Ontario's PHIPA binds "health information custodians", which peer support is probably not. **LAWYER.**

### 4.6 Liability insurance
- **US-domiciled coaches:** professional liability from $22.50 a month with Hiscox; general plus professional liability for coaches typically **$500 to $1,200 a year**.
- **Non-US insureds** usually get policies covering **"worldwide excluding USA and Canada"**, which are exactly the two markets Hearth needs. A US and Canada extension is underwritten case by case, at extra premium **from about $1,200** (UK broker sources).
- A US LLC can buy a US policy. Underwriters will still ask where providers sit and what they actually do. **A mismatch between the description ("coaching") and reality (clinical work by psychologists) is a classic reason a claim gets denied.**
- **Estimate** for $1M/$2M general plus professional liability covering US and Canada: **$1,500 to $5,000 a year**; cyber liability at $1M would be extra. This is an estimate: get **BROKER** quotes. `docs/business.md` already budgets $8,000 to $15,000 a year for the full stack, which is right for enterprise.

### 4.7 Crisis protocol
- **988 works in both countries:**
  - the US 988 Suicide & Crisis Lifeline (call or text);
  - Canada's **9-8-8 Suicide Crisis Helpline, launched Nov 30, 2023** (call or text, 24/7, English and French);
  - 911 for emergencies in both.
- Buyers expect a written protocol covering:
  - how a Keeper responds to a risk disclosure in a 1:1 session and in a group;
  - response times, the warm handoff to 988 or 911, documentation and follow-up;
  - what, if anything, the employer is told.
- Hearth has Stage 11 in `docs/operations/concierge-runbook.md` to build on.
- **Found in the repo:** `app/crisis/page.tsx` lists Canada as "Crisis Services Canada, 1-866-585-0445", not **9-8-8**. Fix this before any Canadian buyer's legal team reads the page.

### 4.8 Group sessions: what the employer's lawyers will ask
1. **Confidentiality among coworkers:**
   - participants are not legally bound the way a facilitator is;
   - set written ground rules (no recording, screenshots or live-posting; don't name third parties);
   - never report attendance;
   - keep managers out of groups with their own reports.
2. **No privilege:**
   - peer-support communications are generally **not privileged** like therapist-patient talk. Courts have refused privilege for group sessions because third parties were present: *Huffman v. City of Boston* (Dec 18, 2023) and *State v. Segura* (Jan 12, 2024), per Lexipol, Mar 25, 2024;
   - the few state peer-support privilege statutes mainly cover first responders;
   - so what is said in a group can be subpoenaed in employment litigation. Tell participants this plainly.
3. **Recordings and notes:** don't record sessions and keep minimal notes; record anonymous counts only.
4. **Harassment disclosures:** what happens when someone discloses harassment by a coworker, including whether Hearth's knowledge could be attributed to the employer as its agent. **LAWYER.**
5. **Reporting:** de-identified utilization only, with small groups suppressed (4.4).
6. **Where things live and who can see them:** data location, retention and subprocessors (PIPEDA, Law 25, MHMDA), accessibility and language.

---

## 5. Cross-border practice: psychologists licensed outside the US and Canada

*Founder's words (2026-09-11): "We have trained highly qualified psychologists, who can act as keepers for resolving their personal and professional issues." Where they are licensed, if anywhere, is not confirmed.*

### 5.1 The core rule: jurisdiction follows the client
- **United States:**
  - psychologists must meet the licensure rules of the jurisdiction where the **client is located**, including for telehealth (APA Guidelines for the Practice of Telepsychology);
  - **New York** says outright: "an out-of-state psychologist must be licensed and registered in New York to practice the profession in this State" (NYSED Q&A);
  - **PSYPACT** (42 jurisdictions in 2026) helps only psychologists who already hold a **US state** licence, so it offers nothing to a Pakistan-licensed psychologist;
  - temporary-practice windows are narrow and aimed at other US licensees. New York allows at most 10 consecutive business days in a 90-day period, with an attestation.
- **Canada:**
  - the Ontario college (CPBAO) requires registration to provide psychological services to **anyone physically in Ontario, including by telepsychology**;
  - its cross-border shortcuts (the ACPRO Limited Telepsychology MOU, and from Jan 1, 2026 "as of right" work for up to 6 months) are open **only to people already registered elsewhere in Canada**;
  - Ontario's controlled act of psychotherapy **applies to practitioners outside Ontario serving clients in Ontario** (CRPO).
- **Conclusion:** a psychologist licensed in Pakistan cannot lawfully provide psychology or psychotherapy to employees located in the US or Canada. Only the non-clinical lane remains.

### 5.2 How "practice of psychology" is defined (it varies a lot)
- **Narrow, Oregon:** "rendering or offering to render supervision, consultation, evaluation or therapy services to individuals, groups or organizations **for the purpose of diagnosing or treating behavioral, emotional or mental disorders**" (ORS 675.010(4)). The DSM is the reference.
- **Broad, New York:** "observation, description, evaluation, interpretation, and modification of behavior" to prevent symptomatic behaviour and **enhance relationships and mental health**, including "psychological testing and **counseling**; psychoanalysis; psychotherapy; the diagnosis and treatment of mental, nervous, emotional, cognitive or behavioral disorders" (Education Law 7601-a).
- **What this means:** under broad definitions, "psychologists resolving personal and professional issues" can be read as practising psychology. The safe design is to keep the service's purpose and methods non-clinical everywhere.

### 5.3 Carve-outs that make the non-clinical lane possible
- **New York:** people and organisations "may provide instruction, advice, support, encouragement or information to individuals, families and relational groups" without a licence.
- **Oregon (ORS 675.090(1)(a)):** people who teach, research, or "provide consulting services to an organization or institution" are exempt, **provided they do not supervise direct psychological services and do not treat any behavioral, emotional or mental disorder of an individual**. This supports **workshops and consulting to employers**.
- **Colorado (C.R.S. 12-245-217):** the clearest coach exemption in the country. It covers a professional coach "who has had coach-specific training and who serves clients exclusively as a coach", as long as they don't practise psychology, psychotherapy or counselling.
- **Quebec (Bill 21):** psychotherapy is reserved, but the regulator says support meetings, support interventions, psychoeducation, coaching and crisis intervention are **not** psychotherapy.
- **Ontario:** the restricted activity is narrow: "treating, by means of psychotherapy technique, delivered through a therapeutic relationship, an individual's **serious disorder** of thought, cognition, mood, emotional regulation, perception or memory..." Support that doesn't treat a serious disorder falls outside the controlled act, though titles remain protected.
- **Industry benchmark:** the big employer platforms staff their non-clinical tier with **ICF-certified coaches**:
  - Lyra requires graduation from an ICF-accredited program and accepts about 2% of applicants;
  - Modern Health uses ICF-certified coaches in 60+ countries;
  - an ICF credential needs at least 60 training hours and 100+ coaching hours.

  **An ICF credential gives Hearth's Pakistan-based Keepers a label buyers recognise and that no US or Canadian law protects.**

### 5.4 Title protection: can they be called "psychologists" to buyers?
- **No, not to US or Canadian buyers, for services delivered there.**
  - "Psychologist" is a protected title in every US state and Canadian province.
  - Oregon goes further: "represent oneself to be a psychologist" includes any "title **or description of services** incorporating the words 'psychology,' 'psychological,' 'psychotherapy' or 'psychologist'". Its board's FAQ adds that you may not advertise services for DSM "disorders" such as "depression, anxiety, ADHD". Penalties include civil fines up to $10,000 and a Class A misdemeanour.
  - New York reserves "psychologist," "**psychology**" and "psychological" in connection with practice.
  - "Psychotherapist" is protected in Ontario (a provincial offence) and Quebec.
- **Grey zone (LAWYER):** a factual line in a Keeper bio such as "MSc Psychology, University of X, Pakistan", with no title and no claimed licence, may be defensible in some states. In Oregon-style or New York-style states it is risky if tied to the service. Default: describe the **training** ("trained in listening and peer support; ICF coaching credential"), not the degree title.
- **Hearth's own rules already point this way.** AGENTS.md says never to call a Keeper a clinician or imply clinical outcomes, and the Keepers shown on the site are placeholders (memory: placeholder-keepers). They **cannot be shown to employer buyers as real staff**, and fabricated bios or testimonials are an FTC problem.

### 5.5 What a B2B pitch must never claim
- "Therapy", "counselling", "treatment", "clinical", "psychologists" or "psychological services", "licensed" (unless licensed where the employee is), or "EAP" or "EAP replacement" (unless counsel has structured it as one; see 4.1).
- Named conditions as specialties (depression, anxiety, PTSD, ADHD, burnout as a diagnosis). The Oregon board's FAQ treats this as offering psychological services.
- Outcome numbers ("reduces burnout 30%", "improves mental health", ROI multiples). The FTC requires competent and reliable scientific evidence for health claims, and the misrepresentation ban now covers B2B telemarketing (2.1).
- "HIPAA-compliant" (4.2), or "100% confidential" for groups (4.8).
- "24/7" or "crisis support". Hearth is not a crisis service, and its own `/crisis` page says so.
- Fake or placeholder testimonials, client logos, Keeper names or member counts.
- Privacy promises Hearth can't keep. The FTC's BetterHelp order ($7.8M, final July 2023) punished sharing intake answers with ad platforms in breach of the company's own privacy statements.

### 5.6 What employer buyers and their legal teams ask about credentials
1. Are providers **licensed in the state or province where each employee is located**? Hearth's answer must be: "our Keepers are non-clinical; clinical needs are referred to licensed care".
2. How are credentials checked? Primary-source verification of degrees and certificates, **background checks** (for Pakistan-based providers), references.
3. Training hours, supervision model, quality review, how the Keepers themselves are supported, caseload limits.
4. **Escalation to licensed care:** a named referral path (Hearth's Bridge idea), plus a US- or Canada-licensed clinical advisor who reviews protocols (**LAWYER** on structuring this so it isn't supervision of unlicensed practice).
5. The crisis protocol (4.7), and professional liability coverage with limits (4.6).
6. Where providers are physically located, where data is stored, and who the subprocessors are.
7. Language and cultural fit, which is Hearth's strongest answer, and what the employer receives (aggregate only, 4.4).

### 5.7 Insurance for foreign-trained psychologists working as non-clinical listeners
- It is available, but only if placed deliberately:
  - standard non-US policies exclude the USA and Canada;
  - US carriers insure US businesses and underwrite on the actual service;
  - policies commonly exclude services that need a licence the provider doesn't hold.
- **Describe the service exactly as delivered** (non-clinical peer support, coaching, education) and make sure providers stay inside that description. Otherwise a claim may be denied.
- **BROKER**, preferably one who places coaching or allied-health risks in the Lloyd's or US surplus-lines markets. Budget estimate in 4.6.

### 5.8 Where a lawyer is needed before the first pitch (in order)
1. **Licensure and title review:** the offer, Keeper descriptions and pitch wording, for the first target states (for example NY, NJ, TX, CA, IL, WA) and provinces (Ontario, BC, Quebec, Alberta). Budget estimate: $2,000 to $10,000 depending on how many states; ask for a fixed fee.
2. **ERISA and HIPAA position memo:** whether an employer-paid Hearth program is an EAP or group health plan (4.1, 4.2).
3. **Services agreement and privacy terms:** MHMDA, PIPEDA and Law 25 (4.3, 4.5).
4. **Pakistani telecom and tax:** calling from Pakistan, and the Section 154A classification (2.4, 3.2).

---

## 6. The minimum viable "B2B-ready" kit, compared with enterprise procurement

### 6.1 Enough to close a first small deal
| # | Item | What it is | Cost (est.) | Time |
|---|---|---|---|---|
| 1 | One-page offer | A PDF plus a web page: non-clinical peer support, small-group sessions and workshops for employees; what the employer gets (aggregate report only); what it is not (therapy, crisis service). A new public page also needs the sitemap and llms.txt steps from AGENTS.md. | $0 | 2 to 3 days |
| 2 | Services agreement | **Common Paper Professional Services Agreement** (free standard terms, one cover page), plus the **Common Paper DPA**, plus a Hearth schedule: scope, the non-clinical disclaimer, crisis protocol, group rules, no-privilege notice, reporting limits, governing law. One fixed-fee **LAWYER** review. | $0 templates; $500 to $2,000 review | 1 to 2 weeks |
| 3 | Licensure and title sign-off | Section 5.8 item 1. **Do this before pitching.** | $2,000 to $10,000 | 1 to 3 weeks |
| 4 | Invoice path | Whop invoice (card or ACH) now; a W-8BEN ready to send | $0 setup; about 1.5% to 3% fees | Same day |
| 5 | Privacy and safety one-pager | What is collected, where it is stored, who sees what, employer sees aggregate only, no recording, 988/911, not therapy | $0 (covered by item 2's review) | 1 week |
| 6 | Keeper credential sheet | Real people only: training hours, ICF status or plan, background check, languages. No protected titles. | Background checks vary; ICF coach training is extra if pursued | 1 to 2 weeks |
| 7 | Insurance | General plus professional liability, $1M/$2M, with US and Canada territory (**BROKER**). Small buyers may not ask, but have it bound, or at least quoted, before signing. | $1,500 to $5,000 a year (estimate) | 2 to 4 weeks |
| 8 | Outreach setup | Secondary domain, 4 inboxes, sending tool, DNCL registration (Canada), Quo number | About $70 to $130 a month | Warm-up 3 to 4 weeks (runs alongside everything else) |
| 9 | Fix the Canadian crisis number | 9-8-8 in `app/crisis/page.tsx` | $0 | 1 hour |

**Total: about $4,000 to $17,000 in year one, plus about $70 to $130 a month in tools.** Most of the variation is legal scope and insurance. The low end is $500 contract review + about $2,000 licensure review limited to a few states + about $1,500 insurance. **Elapsed time: 3 to 5 weeks.** Calls and LinkedIn can start in week 1, once the offer wording is cleared.

### 6.2 What enterprise procurement adds
| Requirement | Cost | Time |
|---|---|---|
| SOC 2 Type 1 / Type 2 (first year, all-in) | $15,000 to $40,000 / $30,000 to $80,000 (Vanta or Drata about $8,000 to $25,000 a year; pen test $8,000 to $25,000) | 1 to 3 months / 6 to 12 months (4 to 6 with a compliance platform) |
| US entity with W-9, US bank, supplier-portal onboarding | $297 to $500 to form, $299 to $497 a year, plus an accountant for Form 5472 or 1120 | 2 to 6 weeks |
| Higher insurance limits (cyber and professional $1M to $5M+; up to $20M at some Fortune 500s) | $5,000 to $15,000+ a year (business.md budgets $8,000 to $15,000) | 1 to 2 months |
| Security questionnaire, DPA negotiation, possibly a BAA (if part of the health plan) | Legal time | Weeks per deal |
| Licensed clinical tier or referral network for employees' states, and the ERISA or EAP structure | Significant; a separate project | Months |
| Net 45 to 90 payment terms, purchase orders, wire only | Cash-flow cost | Every deal |
| **Total sales cycle** | | **3 to 12 months** |

---

## 7. What blocks, ranked
1. **Licensure and titles.** Pakistan-licensed psychologists can't practise clinically with US or Canadian employees or be sold as "psychologists". Rewrite the offer as non-clinical and get a lawyer's sign-off before the first call.
2. **The cost of clinical framing to the buyer.** A counselling-style program pulls the employer into ERISA, COBRA and HIPAA duties. Non-clinical framing is both lawful and easier to buy.
3. **CASL.** Cold email to Canada is narrow (conspicuous publication only, with evidence). US email is opt-out. **Start with US prospects**; for Canada, use calls (B2B-exempt from the DNCL, after the free registration) and addresses the person published themselves.
4. **Insurance with US and Canada territory** for a Pakistan-based provider is placeable but specialised, so start with a broker early.
5. **Deliverability lead time:** no safe cold email from a new domain for 3 to 4 weeks.
6. **Enterprise procurement** (SOC 2, limits, US entity, net 90) rules out large companies for 6 to 12 months or more. Small and mid-size companies paying by Whop invoice are feasible now.
7. **Housekeeping:** outdated Canadian crisis number on `/crisis`; placeholder Keepers can't appear in B2B materials.

---

## Sources (accessed 2026-09-11; publication dates where shown)

**Cold email**
- FTC, CAN-SPAM Act: A Compliance Guide for Business (Aug 2023; penalty updated Jan 2024): https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business
- CRTC, CASL FAQ and implied-consent guidance: https://crtc.gc.ca/eng/com500/faq500.htm ; https://crtc.gc.ca/eng/com500/guide.htm
- Lexology, FCA upholds CRTC approach to B2B exemption and conspicuous publication (2020): https://www.lexology.com/library/detail.aspx?g=d7c5b6cb-1b30-4a87-b161-35a65cc97f56
- Norton Rose Fulbright, CRTC reduces CompuFinder penalty to $200,000 (2017): https://www.nortonrosefulbright.com/en/knowledge/publications/1b3bc47c/the-crtc-determines-that-canadas-anti-spam-legislation-is-constitutional-and-reduces-the-first-penalty-handed-out-under-the-legislation-to-200000
- SMARTe, CASL compliance for B2B cold email (2026): https://www.smarte.pro/blog/casl-compliance
- Gmail sender guidelines: https://support.google.com/mail/answer/81126?hl=en
- Microsoft Tech Community, Outlook requirements for high-volume senders (2025): https://techcommunity.microsoft.com/blog/microsoftdefenderforoffice365blog/strengthening-email-ecosystem-outlook%e2%80%99s-new-requirements-for-high%e2%80%90volume-senders/4399730
- Brevo anti-spam policy: https://www.brevo.com/legal/antispampolicy/ ; Puzzle Inbox, Is Brevo cold email allowed (2026): https://puzzleinbox.com/blog/brevo-cold-email-allowed-tos-2026/
- Instantly, Cold Email Benchmark Report 2026: https://instantly.ai/cold-email-benchmark-report-2026
- Cleanlist, cold email response rate (Feb 18, 2026): https://www.cleanlist.ai/blog/2026-02-18-cold-email-response-rate-statistics
- LeadHaste, meeting booked rate benchmarks 2026: https://leadhaste.com/blog/cold-email-meeting-booked-rate-benchmarks-2026
- Warm-up and volume: https://www.unifygtm.com/explore/cold-email-2026-domain-setup-deliverability-sequences ; https://www.warmy.io/blog/how-long-to-warm-up-new-domains-before-starting-to-send-campaigns/
- Google Workspace pricing: https://workspace.google.com/pricing ; Instantly pricing (Woodpecker, 2026): https://woodpecker.co/blog/instantly-ai-pricing/
- Apollo free plan (Salesmotion, 2026): https://salesmotion.io/blog/apollo-pricing ; Hunter free plan (2026): https://costbench.com/software/sales-intelligence/hunter-io/free-plan/

**Calling and LinkedIn**
- FTC, Telemarketing Sales Rule amendments (Mar 2024): https://www.ftc.gov/business-guidance/blog/2024/03/revised-rule-proposed-amendment-expand-fight-against-illegal-telemarketing ; Federal Register (Apr 16, 2024): https://www.federalregister.gov/documents/2024/04/16/2024-07180/telemarketing-sales-rule
- FCC, AI-generated voices are "artificial" under the TCPA, FCC 24-17 (Feb 8, 2024): https://docs.fcc.gov/public/attachments/FCC-24-17A1.pdf
- JD Supra, Washington and Oklahoma mini-TCPAs: https://www.jdsupra.com/legalnews/what-you-need-to-know-about-washington-4500727/ ; Skipcall, cold calling cell phones in B2B (2026): https://skipcall.io/en/blog/cold-calling-cell-phones
- CRTC, telemarketing rules, registration and exemptions: https://crtc.gc.ca/eng/phone/telemarketing/reg.htm ; https://crtc.gc.ca/eng/phone/telemarketing/exempt.htm ; https://crtc.gc.ca/eng/phone/telemarketing/format.htm
- Belkins, B2B Cold Calling Benchmarks 2026 (June 26, 2026): https://belkins.io/blog/cold-calling-benchmarks
- Quo pricing (2026): https://www.quo.com/blog/quo-pricing/ ; Skype retirement (Microsoft, 2025): https://support.microsoft.com/en-us/skype/skype-is-retiring-in-may-2025-what-you-need-to-know
- PTA VoIP clarifications (older forum thread, low confidence): https://groups.google.com/g/telecom-grid-pakistan/c/RlGyQCdF18o
- LinkedIn limits (2026): https://overloop.com/blog/linkedin-limits ; Sales Navigator pricing: https://business.linkedin.com/sell/sales-navigator/compare-plans ; LinkedIn prohibited software: https://www.linkedin.com/help/linkedin/answer/a1341387

**Payments and tax**
- Whop Docs, Send an invoice: https://docs.whop.com/payments/send-an-invoice ; Whop fees: https://docs.whop.com/payments-and-billing/fees/fees ; third-party fee breakdown (2026): https://www.ruzuku.com/learn/articles/whop-pricing
- Payoneer in Pakistan (WorldFirst, 2026): https://www.worldfirst.com/sasia/blog/business-banking-insights/payoneer-review/ ; Paid Across: https://paidacross.com/receive/usd-to-pkr
- Wise and Pakistan (AbroadMate, 2026): https://abroadmate.me/guides/wise-in-pakistan-2026-guide ; StartGlobal: https://startglobal.co/us/international/pakistan/wise/
- Stripe Atlas (2026): https://guptadeepak.com/startup-offers/guides/stripe-atlas ; Firstbase pricing: https://www.rho.co/blog/firstbase-pricing ; doola vs Firstbase: https://www.entity.inc/blog/doola-vs-firstbase-vs-entity-inc/
- Foreign contractors and W-8 (2026): https://www.taxesforexpats.com/articles/foreign-business/form-1099-for-foreign-contractors.html ; https://beancount.io/blog/2026/05/10/form-w-8ben-w-8ben-e-foreign-vendor-30-percent-withholding-us-business-cross-border-payments-guide
- Form 5472 (Greenback; Loeb & Loeb 2021): https://www.greenbacktaxservices.com/knowledge-center/form-5472/ ; https://www.loeb.com/en/insights/publications/2021/03/obligations-to-file-form-5472-for-foreign-owned-disregarded-entities
- CRA, Regulation 105 (IC75-6): https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/ic75-6/required-withholding-amounts-paid-non-residents-providing-services-canada.html ; MLT Aikins: https://www.mltaikins.com/insights/the-end-of-regulation-105-administrative-relief/
- Pakistan Section 154A (filing.pk, 2026): https://filing.pk/blog/freelancer-tax-pakistan
- Vendor insurance baselines: https://www.vertikalrms.com/article/vendor-insurance-requirements-by-industry-guide-2026/ ; https://www.risk.cornell.edu/vendor-provider-main-page/cyber-and-technology/ ; https://joinalliancerisk.com/startup-insurance-enterprise-contracts/

**Liability and regulation**
- Newfront, Most EAPs are group health plans subject to COBRA (Feb 24, 2022): https://www.newfront.com/blog/most-eaps-are-group-health-plans-subject-to-cobra
- Thomson Reuters, Are EAPs subject to ERISA (DOL AO 91-26A): https://tax.thomsonreuters.com/blog/are-employee-assistance-plans-subject-to-erisa/
- California Lawyers Association, MHMDA (May 2, 2024): https://calawyers.org/privacy-law/the-washington-my-health-my-data-act-not-just-washington-or-health/ ; RCW 19.373.010: https://app.leg.wa.gov/RCW/default.aspx?cite=19.373.010 ; WA AG: https://www.atg.wa.gov/protecting-washingtonians-personal-health-data-and-privacy
- 29 CFR 1630.14 (eCFR): https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XIV/part-1630/section-1630.14
- OPC, Guidelines for processing personal data across borders: https://www.priv.gc.ca/en/privacy-topics/airports-and-borders/gl_dab_090127/
- Quebec Law 25 transfers (McCarthy Tetrault): https://www.mccarthy.ca/en/insights/blogs/techlex/quebec-privacy-regulators-guide-law-25-compliant-privacy-impact-assessments
- Hiscox life coach insurance: https://www.hiscox.com/small-business-insurance/professional-business-insurance/life-career-coaches-insurance ; coach insurance costs (FitSmallBusiness): https://fitsmallbusiness.com/life-coach-insurance/
- USA and Canada exclusions for non-US insureds (Whinney; AUZi): https://www.whinneyinsurance.co.uk/professional-indemnity-insurance-for-the-usa-and-canada/ ; https://help.auzi.com/support/solutions/articles/11000125298-why-does-my-policy-exclude-the-usa-and-canada-
- Canada 9-8-8 launch (Government of Canada, Nov 2023): https://www.canada.ca/en/public-health/news/2023/11/government-of-canada-launches-three-digit-suicide-crisis-helpline.html ; CAMH: https://www.camh.ca/en/camh-news-and-stories/canada-988-suicide-crisis-helpline-launches-today
- Lexipol, court rulings on peer-support confidentiality (Mar 25, 2024): https://www.lexipol.com/resources/blog/court-rulings-sound-alarm-on-confidentiality-in-peer-support-group-interventions/
- FTC, BetterHelp final order (July 2023): https://www.ftc.gov/news-events/news/press-releases/2023/07/ftc-gives-final-approval-order-banning-betterhelp-sharing-sensitive-health-data-advertising

**Cross-border practice**
- APA, Guidelines for the Practice of Telepsychology: https://www.apa.org/practice/guidelines/telepsychology-revision.pdf
- NYSED, Psychology licensure Q&A: https://www.op.nysed.gov/professions/psychology/questions-answers-about-licensure-and-limited-permits
- Oregon Board of Psychology, Unlicensed Practice FAQ (updated Dec 2024; quotes ORS 675.010, 675.020, 675.070, 675.090, 675.990): https://www.oregon.gov/psychology/Documents/Unlicensed_Practice_FAQ.pdf
- C.R.S. 12-245-217 (Justia, 2024): https://law.justia.com/codes/colorado/title-12/health-care-professions-and-occupations/article-245/part-2/section-12-245-217/
- PSYPACT in 2026: https://behavioralhealth.careers/blog/psypact-states-explained-telepsychology-in-2026/
- CPBAO, time-limited registration for other Canadian jurisdictions: https://cpbao.ca/applicants/how-to-apply/time-limited-registration-for-practitioners-from-other-jurisdictions/
- CRPO, Controlled Act of Psychotherapy: https://crpo.ca/apply-to-crpo/controlled-act-of-psychotherapy/
- Ordre des psychologues du Quebec, unlawful practice and title: https://www.ordrepsy.qc.ca/english/what-is-unlawful-practice-and-what-is-unauthorized-use-of-a-title- ; CCPA Quebec regulation: https://www.ccpa-accp.ca/quebec-regulation/
- Lyra, what is a mental health coach: https://www.lyrahealth.com/blog/what-is-mental-health-coaching/ ; Modern Health coaching and therapy approach: https://www.modernhealth.com/post/a-look-at-our-coaching-and-therapy-approach
- Common Paper PSA and DPA: https://commonpaper.com/standards/professional-services-agreement/ ; https://commonpaper.com/standards/data-processing-agreement/
- SOC 2 cost (Drata; SOC2auditors 2026): https://drata.com/learn/soc-2/cost ; https://soc2auditors.org/soc-2-audit-cost/
