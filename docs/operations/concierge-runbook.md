# Concierge runbook

How one member is served, by hand, from the moment they pay to the Friday note.
Written 2026-08-22 so that it can be followed at 11pm. Tracked as **KAN-67**.

The PRD says matching is founder-curated and booking is "buy not build" for the
first six months. That is the right call, and it means that for the first members
the product *is* this procedure. Every stage below names one owner and one maximum
time. A stage with no owner does not happen. The intake form proved that between May
and August, when every submission was logged and nobody was told.

## The tools, and nothing else

| Job | Tool | Why |
|---|---|---|
| Money | Whop | Already live. Founder alert on every event (KAN-66). |
| Founder alerts and member emails | Brevo, from `hello@dearhearth.com` | One sender. Do not add another. |
| Booking | Cal.com free tier, one page per Keeper, owned by Hearth | Google Meet links generated for free. See KAN-68. |
| Video | Google Meet, via Cal.com | Not recorded by default. Matches the trust page. |
| The Long Talk | The email thread between Keeper and member | Nothing to install, 24-hour replies feel natural, and member disclosures never sit on a Keeper's personal phone. **Not WhatsApp.** |
| Match records | The founder's inbox and one spreadsheet | Until there is a database with real access controls. |
| Keeper pay | Wise or Payoneer, biweekly, USD | See KAN-70. |

## Stage 0. Before any member: the preconditions

Nothing below works until these are true. Check them once, tick them off.

- [ ] At least one real Keeper is contracted, trained on this runbook, and has a Cal.com booking page (KAN-56, KAN-68).
- [ ] The founder alert email arrives within a minute of a test payment (KAN-66, verified 2026-08-22).
- [ ] A dry-run Keeper payout has landed (KAN-70).
- [ ] The interim crisis wording is in the Keeper's hands (Stage 11).
- [ ] Whop has a payout method (KAN-33) so that money can actually reach a bank.

## Stage 1. A payment arrives

**Trigger:** the email "New paying member: <email>" from hello@dearhearth.com.
**Owner:** founder. **Maximum time to act:** 24 hours, because the 72-hour match clock started when they paid.

The member has already received the welcome email. It told them: complete the intake if you have not, you will be matched by hand within 72 hours, your Keeper will email you to book the first Sit.

1. Reply to nobody yet. Open the alert. Note the email, plan, amount.
2. Search the inbox for that email address. Either an intake notification ("New Hearth intake") is there, or it is not.
3. Add a row to the members sheet: date paid, email, plan, intake found yes/no, Keeper (blank), first Sit (blank).

## Stage 2. Find the intake, or ask for it

**Owner:** founder. **Maximum time:** 24 hours from payment.

**If the intake exists:** read all of it. The safety screen first. Then languages, themes, time zone, the open text. You are looking for the one or two things they actually came for, which are usually in the open text and not in the checkboxes.

**If there is no intake:** the welcome email already asked once. Send one personal line, not a template: "Your payment came through, thank you. To match you well we need the twelve-minute intake: dearhearth.com/intake. Reply here if anything in it is unclear." Then wait. Do not match without it. A guess is worse than a day's delay.

**If the intake has a safety flag** (`safetyCheck: yes`): this person gets a personal reply from the founder within 4 hours, before any matching, with the crisis numbers and a plain question about how they are today. The founder's notification already carries the red banner. Match them only after that reply, and only to a Keeper briefed on it.

## Stage 3. Match

**Owner:** founder. **Maximum time:** 72 hours from payment, total. The site promises it.

In practice the match is made on four things, in this order:

1. **Language.** A Keeper who speaks the member's first language beats every other factor if the member listed one.
2. **Time zone.** A Sit has to be bookable at a sane hour for both. Four hours of overlap is the minimum.
3. **Themes.** The Keeper must have lived something adjacent to what the member brought. Not identical. Adjacent.
4. **The gut read.** After the first three, ask: who would I want to sit with, if I had written this intake?

Write a match note, three lines, in the members sheet: why this Keeper, what the member is carrying in one sentence, and anything the Keeper must know before the first Sit (a safety flag, a bereavement date, a language mix).

Then forward the intake notification email to the Keeper with the match note at the top. That email is the Keeper's brief. It contains everything the member wrote, so it goes to the Keeper's Hearth address only.

## Stage 4. The Keeper's introduction

**Owner:** Keeper. **Maximum time:** 24 hours from receiving the brief.

The Keeper emails the member directly, from their Hearth address, cc hello@dearhearth.com so the thread is never lost. This email is the beginning of the Long Talk. Template, to be rewritten in the Keeper's own voice every time:

> Subject: Hello from your Keeper at Hearth
>
> Hi [first name],
>
> I am [name], and I will be your Keeper. [One true sentence about why you were paired: the founder read what you wrote about your mother and thought of me, because I spent four years in that same fight.]
>
> Our first Sit is a 35 to 60 minute video or audio conversation. There is nothing to prepare. Here is my calendar; pick whatever time suits you: [Cal.com link]
>
> Between Sits this email thread is ours. Write whenever you like. I reply within a day, usually sooner, and I am not in a hurry.
>
> One plain thing, because it matters: I am a trained peer companion, not a therapist. If at any point what you are carrying needs clinical care, I will say so and help you find it.
>
> [name]

No bullet points, no emoji, no em dashes. Under 200 words.

## Stage 5. Booking

**Owner:** member books; Keeper confirms. **Maximum time:** first Sit held within 5 days of the introduction, ideally 48 hours.

Cal.com sends the confirmation and the 24-hour and 1-hour reminders. The Keeper does nothing unless the member has not booked within 3 days, in which case one warm nudge: "No rush, and no pressure. When you are ready, the link is still there."

If the Meet link fails on the day, the Keeper emails a fresh one within 5 minutes and adds 10 minutes to the Sit.

## Stage 6. The first Sit

**Owner:** Keeper.

**Before:** re-read the brief. Ten minutes, phone off.

**During:** the member talks. The Keeper's job is to let the first ten minutes be whatever they are. Say early: "There is nothing you have to get to today." End five minutes before time so nobody is cut off mid-sentence.

**After, within 24 hours:** a short note to the member in the thread. Not a summary, not advice. Two or three lines about one thing that stayed with the Keeper, and the booking link for the next Sit.

**After, same day:** one line to the founder: "First Sit with [first name] done. [Anything the founder must know, or: nothing to flag.]" The founder updates the sheet.

## Stage 7. The change request

**Owner:** founder. **Maximum time:** 48 hours to a new introduction.

The site promises: if the first Sit is not the right fit, ask and we assign someone else, no questions, no extra charge.

When a member asks, in any words: the founder replies within 24 hours, says only "of course" and asks nothing, tells the current Keeper the same day with no blame attached, and makes a new match from Stage 3 with the change request as one more line of brief. The new Keeper's introduction goes out within 48 hours of the request.

Later change requests are handled the same way. The PRD calls them rare by design. Treat them as information about the match, never about the member.

## Stage 8. The Long Talk

**Owner:** Keeper. **Reply SLA:** 24 hours, every time, including weekends. Hearth Deep members: 4 hours during the Keeper's stated availability.

The email thread that started with the introduction. Rules the Keeper keeps:

- Reply within the SLA even if the reply is "I read this. I am thinking about it. More tomorrow."
- Never diagnose, never advise on medication, never forward the thread to anyone but the founder.
- If a message carries a crisis marker, Stage 11 starts immediately, before the reply.
- Long Talk is slow on purpose. A Keeper who replies in five minutes every time is teaching the member the wrong rhythm.

## Stage 9. The Friday Reflection

**Owner:** Keeper. **When:** every Friday, 6pm in the member's time zone. **Length:** under 200 words.

One unsolicited message: what stayed with the Keeper from this week. Written fresh each time. Never templated, never generated. This is the single feature members of services like this mention most when they stay, and it is also the easiest to drop. The founder checks the sheet on Saturday morning: every active member has a Friday note in the thread, or the Keeper hears about it that day.

## Stage 10. Cancellation

**Trigger:** the email "Membership cancelled: <email>".
**Owner:** founder, then Keeper. **Maximum time:** Keeper's closing note within 48 hours.

Access continues to the end of the paid period. The founder tells the Keeper the same day. The Keeper sends one warm closing note in the thread: gratitude, one true thing about the time together, and the door left open. No win-back sequence, no survey, no discount. If the member says why, the founder records it in the sheet. Refund rate and cancellations are tier-1 KPIs.

## Stage 11. Crisis

**Owner:** whoever is in the conversation, then the founder. This stage overrides every other.

There are no signed Bridge therapists yet (KAN-69). The business plan's wording, "I'll connect you with one of our partner therapists today", is a promise nobody can keep. Until the Bridge is real, the Keeper says only what is true.

**In a Sit or in the thread, when a member discloses thoughts of self-harm, suicidal ideation, abuse, or signs of psychosis:**

1. **Stay.** Acknowledge what they said in their words. Do not change the subject, do not rush.
2. **Say this, or close to it:** "I want to make sure you have the right support for this, and I am going to be straight with you about what I am and am not. I am your Keeper, not a clinician. I am going to give you two numbers now, and I will stay with you while you decide."
3. **The numbers:** US, call or text 988. UK and Ireland, Samaritans 116 123. Canada, 1-866-585-0445. Pakistan, Umang 0311-7786264. Elsewhere, local emergency services.
4. **For clinical need that is not an emergency:** Open Path Collective, Psychology Today's directory, the member's GP. Offer to help them write the first email, there and then.
5. **After, within 2 hours:** the Keeper emails the founder. Subject line starts with CRISIS.
6. **Founder follows up with the member** within 24 hours, then at 7 days and 30 days. Each contact logged in the sheet.
7. **What nobody does:** diagnose, advise on medication, promise a therapist Hearth does not have, or carry on the next week as if nothing happened.

Members are told at intake that safety disclosures are shared with the founder. This is the transparency the PRD requires; it is not surveillance.

## Stage 12. Keeper pay

**Owner:** founder. **When:** every second Friday.

80 percent of each active member's fee for the period, to their Keeper, in USD, via Wise or Payoneer. The founder keeps the calculation in the members sheet: member, plan, fee, Keeper, share. The percentage is internal and is not published anywhere (founder decision, 2026-08-22). Full mechanics, including what happens if the Pakistani entity cannot send USD abroad cleanly, are in KAN-70.

## What the founder checks, and when

| When | Check |
|---|---|
| Every alert email | Acted on within the stage's maximum time |
| Daily | Any member past 72 hours without a Keeper? Any safety-flagged intake without a reply? |
| Saturday morning | Every active member has a Friday note |
| Every second Friday | Keeper pay run |
| Monthly | Refund rate, cancellations with reasons, time from payment to first Sit |

## What this runbook does not cover

Real authentication, a member dashboard, in-app chat, LLM crisis scanning, native apps. All of it is in the PRD. None of it is what stands between zero members and ten. This document is.
