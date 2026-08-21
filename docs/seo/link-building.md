# Link building and brand entity

Last updated 2026-08-21. Tracked as **KAN-12**.

## The strategy

Ordinary directory submissions mostly do not work, because most directories are
barely crawled themselves. The approach that does work is the opposite: stop waiting
for Google to arrive, and publish on domains Google already crawls every hour, each
linking back.

Most of these links are `nofollow` and pass no ranking weight directly. They matter
for two other reasons, both real:

1. They create a **crawl path** to a domain that currently has none.
2. They generate **branded searches** — someone sees Hearth, then Googles
   "dearhearth". Branded search volume is itself a ranking signal, and it converts
   far better than generic traffic.

## Live profiles

Keep this table current. Every profile that resolves should also appear in the
`sameAs` array of `ORGANIZATION_LD` in `app/layout.tsx` — multiple independent
sources confirming one entity is what Google needs before it will build a Knowledge
Panel.

| Platform | URL | In `sameAs`? |
|---|---|---|
| LinkedIn | https://www.linkedin.com/company/dearhearth | yes |
| Crunchbase | https://www.crunchbase.com/organization/hearth-94b4 | yes |
| F6S | registered as "Hearth Co", URL pending | not yet |
| Wikidata | not created | — |
| Trustpilot | not claimed | — |
| X / Twitter | `x.com/dearhearth` unclaimed — returns 404 | removed |

`x.com/dearhearth` was previously listed in `sameAs` while returning 404. That is a
failed entity claim rather than a harmless one, and it has been removed until the
handle is actually claimed.

## Priority order

1. **Wikidata** — highest leverage, least used. Feeds Google's Knowledge Graph
   directly, and its notability bar is far below Wikipedia's.
2. **Trustpilot** — ranks for brand queries within weeks, so a search for
   "dearhearth" returns something credible while our own domain catches up.
3. **Medium and Substack** — crawled continuously, so a link from either gives
   Google a trusted path in.
4. **LinkedIn *articles*, not posts.** Posts are largely not indexed; articles are.
5. **Reddit and Quora** — crawled hourly. Read the self-promotion rules first;
   mental-health communities remove stealth marketing quickly, and a ban costs more
   than the link is worth.
6. **Product Hunt** — plan it properly, it only happens once.

## Instagram handle

`hearth`, `dearhearth` and `dear.hearth` are all taken. Availability cannot be
checked programmatically — Instagram returns HTTP 200 for every path when logged out,
so any script that checks this is measuring nothing.

Candidates, ranked by how well they hold the brand entity together:
`dearhearthco`, `dearhearth.co`, `wearehearth`, `hearth.keepers`.

Avoid keyword handles like `hearthpeersupport`. They gain nothing — handles carry no
ranking weight — and dilute brand recall.

## Platform copy

### F6S ("Hearth Co")

**Tagline** — 68 of 75 characters:

```
Peer support, paired for the long term. The same Keeper, every time.
```

**What's different about Hearth Co?** — 122 of 140 characters:

```
Everyone else rotates you through a pool. We hand-match one Keeper and keep them. Continuity is the product, not a feature.
```

**Description** — about 1,550 of 2,500 characters:

```
Hearth is a peer-support membership for adults carrying grief, family
pressure, identity questions, caregiving, and the ordinary weight of being
a person.

Every member is hand-matched within 72 hours to a Keeper — a trained, paid
peer companion, not a licensed therapist — and stays with that same Keeper
for as long as the relationship serves them. Continuity is the whole point.
Most support products rotate you through a pool of interchangeable providers
and call it choice. We think being known over time is what actually helps.

Members get The Sit (a 35-60 minute video or audio session, biweekly or
weekly), The Long Talk (an unlimited asynchronous thread with their Keeper),
Friday Reflections (a short written check-in each week), and Circles (small,
time-bound cohort groups).

Hearth is deliberately not therapy. It occupies the space between calling a
friend and booking a clinician — where most of the demand for emotional
support actually sits, and where almost nothing is built. When a member needs
clinical care, their Keeper makes a warm handoff through The Bridge, our
vetted referral network of licensed therapists, and stays in the relationship
throughout.

60% of every subscription goes directly to the Keeper. We don't underpay
companions to sell a cheaper product; that model produces burnout and churn.

Hearthside is $39/month (biweekly Sits). Hearth Deep is $99/month (weekly
Sits). Annual plans at a two-month discount. Cancel in one click.

Launching into the English-speaking adult market across the US, Canada, UK
and Australia.
```

### Wikidata properties

- instance of (P31): business
- official website (P856): `https://dearhearth.com`
- LinkedIn company ID (P4264): `dearhearth`
- Crunchbase organisation ID (P2088): `hearth-94b4`
- inception (P571): 2026

Be factual and avoid promotional language — Wikidata editors remove marketing copy.

## One rule for every external profile

Hearth is **peer support, not therapy**. That distinction has to hold identically on
every profile, in every directory category, and in every article. It is a positioning
choice, a compliance boundary, and — because consistent wording across the web is how
Google learns what an entity is — an SEO mechanism all at once.

## The constraint nothing here solves

Hearth is health-adjacent, which puts it in Google's "Your Money or Your Life"
category, where the quality bar is strictest and a named accountable human is
expected. There isn't one: `llms.txt` still reads "founder profile forthcoming".

The founder is currently employed elsewhere and does not want the venture publicly
attributable yet. That is a legitimate constraint, and it is also a real ceiling on
how far everything above can go. Tracked separately as **KAN-13**.
