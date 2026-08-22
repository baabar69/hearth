# The Saraev method, applied to Hearth

Source: Nick Saraev, "Claude Code Marketing Full Course (6 hours)", YouTube yulWjh3rq28, 2026-08-08. Transcript read end to end (82,000 words); minute marks below refer to it. This document is the map from his system to ours, and the record of what was adopted, what was adapted, and what was deliberately not copied.

## His method in one paragraph

Find the one bottleneck that constrains the business and automate only that, after doing it manually once and liking the output (58:03, 1:02:20, 3:27:57). Every build climbs four levels: prompt, skill, loop, cloud routine (1:03:30 to 1:11:31). Marketing is Reach plus Acquire in the RACE frame (49:37), so he automates five functions: creative generation, personalised copy with "fuzzy variables", speed to lead, data ingestion with a dashboard, and scheduled follow-ups. The human designs the process and judges the output; the AI only executes the middle, because three chained 80% steps give 51% (1:13:26). Generate far more than you need and select (1:15:01, 2:02:13). Keep systems alive with credentials stored up front, a self-healing clause, and an errors channel (5:36:30 to 5:49:55). Never automate the moment a customer must feel valued (5:59:22, 6:00:30).

## The five functions, his version and ours

| Function | What he builds | Hearth's version | Status |
|---|---|---|---|
| 1. Creative generation (Reach) | Ad formats as templates, one variable (offer or product), Claude generates 50 variants, a contact-sheet artifact with checkboxes, a human picks winners (1:15:24 to 1:39:25). Compositing via HTML and ImageMagick for simple formats, direct image models for complex ones, generate four times what you need (2:00:40 to 2:02:13). AI video via Higgsfield for UGC-style clips, QA by slicing frames (2:35:08 to 3:09:32). | Templates are our three lanes (letter-to, b-roll essay, viral format) plus carousels. Variables are theme, persona and closer. New: `/hook-batch` generates 40 hooks and 12 cover lines per theme and renders a contact sheet to pick from; `/cover-batch` composites cover and carousel variants to PNG the way he uses ImageMagick, using the Playwright renderer we already use for the highlight covers. AI video becomes the fourth lane once the founder picks reference formats. | Built today: hook-batch, cover-batch. AI-video lane pending founder references. |
| 2. Personalised copy (Reach) | Newsletters and cold email with "fuzzy variables": hard variables from data, 5 to 10 AI-written words per slot, the fewer AI words the better (3:19:59 to 3:32:06). Sheet in, enriched sheet out, then send via Kit or Instantly. | Two places: the intake confirmation and Keeper-match emails (data from the 12-minute intake: topics, open context, how they like to talk), and creator outreach for Collabs (the cold-email template with {theirThingInCommon}). New: `/intake-reply` drafts the personalised acknowledgement; `/collab-scout` outreach now uses fuzzy variables. | Built today: intake-reply; collab-scout updated. |
| 3. Speed to lead (Acquire) | Respond within 30 to 60 seconds of a form fill by email and SMS, paraphrasing what they asked, with a human delay so it feels real (4:11:35 to 4:27:14); routine triggered by API call on form submit (4:33:44). | The "lead" is a person who finished the intake. Speed still matters (they are "still in the same mindset", 4:11:59), but SMS and robotic instant replies are wrong for a sensitive service. Our version: a warm, personalised email within minutes, drafted by `/intake-reply` and sent by a person, plus the existing static confirmation at submit time. The 72-hour match email stays human. | Built today as a draft flow. Auto-send deliberately not built (his own filter: the customer feels this). |
| 4. Data and dashboards (all) | Ingest every source into one place on a schedule, build the dashboard as a web design project, get data on the page before skinning it, detect signals with simple thresholds, host on Netlify behind a password, refresh by routine (4:37:02 to 5:09:00). | Sources: Instagram Insights (weekly paste until the Graph API is connected), Search Console (the SEO session's data), intake submissions, Whop payments (webhook already exists). New: `/dashboard` ingests `data/metrics/*.csv` and renders a static HTML dashboard with the funnel and signals. | Built today as skill plus data schema; first render once two weeks of numbers exist. |
| 5. Follow-ups (Close) | Schedule-driven nudges from a template pool, cadence 1, 2, 3, 7, 14, 21, 28, 56, 84 days, read the history first, never repeat a template, opt-out flag, human tone, no em dashes (5:15:19 to 5:28:25). | People who started the intake and stopped, people matched but not yet paid, members whose first Sit is booked. New: `/followups` with a ten-template pool in brand voice and the cadence; drafts for human send, opt-out rules, crisis words escalate to a person. | Built today. |

## The sixth lever: booking percentage (55:55 to 56:27)

He actually names six levers, not five: creative, copy and outreach under Reach; speed to lead, booking percentage and follow-up under Acquire. Booking percentage is the one that applies most directly to Hearth, and it is a product decision, not a marketing one:

"If you have 10 questions in an opt-in form, you break that down to three or four questions, you'll see a significant improvement in booking percentage. You do so at the cost of qualification, but Claude Code can now do research on the prospect for you autonomously." (56:07)

Hearth's intake is six steps and about twelve minutes. The home page already has a two-step short form (name, email, what brings you here). Recommendation for the founder: measure intake starts against completions from week one (`data/metrics/intake-weekly.csv`). If completion is under 60%, cut the full intake to the fields a human matcher actually needs (first name, email, what you are carrying in your own words, how you like to talk, the safety check) and move the rest to the first Sit. His factory rule says this single step could matter more than any amount of content: if Reels reach is wide and intake completion is narrow, more Reels change nothing.

The same test, stated for our funnel: Reels reach (wide) to profile visits to link clicks to intake started to intake completed (narrow?) to matched to paid. `/growth-review` and `/dashboard` exist to find the narrow step; nothing else should be automated until it is found.

## Speed to lead, the compliance gap he leaves open (3:43:01 to 4:36:34)

His speed-to-lead build never covers consent for texts and calls (TCPA in the US), STOP handling, unsubscribe links, quiet hours, or disclosing that a message signed with a person's name was machine-written. For Hearth that settles the design: no SMS and no outbound calls unless a member explicitly asks; the acknowledgement email is drafted by `/intake-reply` and sent by a named person who actually read it; intake data stays in our own backend (Brevo transactional), and the model only ever sees the minimum fields needed for a 10 to 15 word paraphrase. Two details worth keeping from his build: the page promise that sets the expectation ("you will hear from a person within the hour"), and a resume link for anyone who stopped the intake partway.

## Rules adopted verbatim

1. "Don't come to AI without a process" (1:13:26): every skill starts from a written SOP a human did once.
2. "The moment you find yourself saying the same thing more than once, turn it into a skill" (1:09:36).
3. Generate dozens, review, ship (1:15:01). Plan on four generations per usable output (2:01:50).
4. "Verify that you can actually do the thing you want to do first" (3:27:57). Start at the end, do the thing, then systematise.
5. Fewer AI words, more human words: 5 to 10 word fuzzy variables inside a human-written template (3:29:48, 3:32:06).
6. Descriptive camelCase variable names, because they are instructions to the agent (3:22:16). No dashes, "because it's kind of AI" (3:21:32). This matches the repo's no-em-dash rule.
7. Credentials up front, stored as environment variables (5:38:46). Auth is 70% of maintenance (5:36:30).
8. Self-healing clause on every skill, loop and routine (5:42:17): after the same error three times, investigate, fix, update the skill, append a change log.
9. Errors go where the team already looks (5:46:51). For Hearth: `docs/marketing/errors.md` now, a Slack or WhatsApp channel when there is a team.
10. "Does the customer actually feel this process? Is a relationship at risk?" If yes, automate only up to a final human step (6:00:30).
11. Automate data entry, first drafts, reporting, scheduling. Never the final asset, client relationships, or bad news (5:57:31 to 5:59:22).
12. Effectiveness over efficiency: spend saved time on the work that needs full attention (5:52:34).
13. Parallel subagents for design exploration when only one of five needs to be good (4:55:38 to 4:59:35).
14. Use the best model for design and judgement, a cheaper one for bulk execution (4:47:46).

## Deliberately not copied

- SMS and instant robotic replies to people who just shared something hard. His own rule excludes it; a human reply within minutes is the Hearth version.
- Cold email to scraped lists. Hearth is B2C; the equivalent is warm outreach to creators and communities, with consent and disclosure.
- AI influencer UGC ads. Fabricated people presenting a relationship-based service is the same problem as the placeholder Keepers. Faceless and clearly labelled formats only.
- Anything that states member numbers, outcomes or a Keeper revenue percentage.

## The ladder, for Hearth

| Level | Hearth instance |
|---|---|
| Prompt | Any one-off ask in this repo. |
| Skill | `/ig-plan`, `/content-week`, `/reel`, `/collab-scout`, `/growth-review`, `/hook-batch`, `/cover-batch`, `/intake-reply`, `/followups`, `/dashboard`. |
| Loop | `/content-week` every Saturday; `/hook-batch` daily at 5:59 ET once hooks are the bottleneck; `/followups` every morning. |
| Routine | Move a loop to a cloud routine with `/schedule` once it has run cleanly for two weeks. Credentials go in the routine's environment, outputs to a shared Drive folder, errors to the errors log. |

## What to do first (his bottleneck rule applied to us)

The narrowest step today is not creative volume; it is that nothing has been posted and there are no numbers. So: set up the account (instagram-setup.md), run two weeks of engagement, post the week-35 batch, and only then let `/growth-review` tell us which function is the bottleneck. Do not run daily loops on an account with zero followers.

## Changelog

- 2026-08-22: created from the full transcript; ten skills in place; self-healing and error-log footer added to every skill.
- 2026-08-22: added the sixth lever (booking percentage) and the intake-length recommendation from the chapter 4 reader.
- 2026-08-22: added the speed-to-lead compliance note and the data-minimisation rule from the chapter 11 and 12 reader.
