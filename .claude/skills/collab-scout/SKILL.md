---
name: collab-scout
description: Find US and Canada based diaspora accounts, creators, communities and podcasts for Hearth to engage with and propose Collab posts to, and draft the outreach. Use monthly or when the founder says "/collab-scout", "who should we collab with", or "engagement list".
---

# /collab-scout

Seeds the early-engagement graph that decides where Instagram sends Hearth's Reels (see `docs/marketing/07-instagram-playbook.md` section 1, point 2). Two outputs: an engagement list and a Collab shortlist.

## Steps
1. Read `.agents/product-marketing.md` for the audience and language.
2. Dispatch the `hearth-collab-scout` agent with: the audience (South Asian diaspora in the US and Canada, 28 to 45, eldest daughters, immigrant-parent dynamics, caregiving, grief, between-worlds identity), the lanes (creators 5k to 250k, community pages, podcasts, newsletters with Instagram presence, therapists and coaches who speak to this audience, member-type people), and the exclusions (accounts that sell therapy as "cheap therapy", crisis-content accounts, anyone outside US/CA).
3. From the agent's report, write `docs/marketing/weeks/<current week>/collab-targets.md` with two tables:
   - **Engage** (25 accounts): handle, type, location, followers (approx), why they fit, one comment angle, best time to comment (ET).
   - **Collab** (10 accounts): handle, followers, what we would make together, what they get, proposed format (Collab Reel, carousel, joint Live), risk notes.
4. Invoke the `influencer-marketing` skill to draft three outreach DMs (creator, community page, member-turned-ambassador) and the one-paragraph Collab brief. FTC disclosure line included for any paid piece. Write the DMs as human templates with fuzzy variables, Saraev style (3:49:14): "Hi {firstName}, saw {theirThingInCommon}. I'm {myThingInCommon} too and wanted to say hi." Each fuzzy slot is 5 to 10 words written from that account's actual posts; the fewer AI words the better; lowercase and casual is fine; no em dashes.
5. Guardrails: no follow-for-follow, no engagement pods, no comments with links, no approaching accounts in crisis spaces, no paid deals without the founder's approval.

Reply with the file path, the top five accounts to start commenting on tomorrow, and the one Collab to pitch first. No em dashes.

## Self-healing and errors (standard footer)
If the same error occurs three times, something has changed in a tool or file you depend on: investigate, fix it, update this skill, and append a dated line to "Changelog" below. Log every failure to `docs/marketing/errors.md` as "date · skill · what failed · what was tried · fixed or not".

## Changelog
- 2026-08-22: created.
- 2026-08-22: standard self-healing and error-log footer added (Saraev rules 8 and 9, see docs/marketing/08-saraev-method-for-hearth.md).
