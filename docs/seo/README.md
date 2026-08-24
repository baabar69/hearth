# SEO and search visibility

Last updated 2026-08-21.

The problem in one line: searching "dearhearth" or "dear hearth" does not surface
dearhearth.com. Only typing the full domain works, and that is navigation, not search.

**Status 2026-08-22.** 37 pages indexed, no manual actions, so this was never a
crawling or discovery problem. The Performance data then showed something sharper: in
3 months the site drew 203 impressions and 3 clicks at average position 31.4, and
**every single query was about "hearth" the English noun** — fireplaces, hearth-keeping,
two rival counselling practices. Zero impressions for peer support, therapy
alternatives, or the brand name.

Google has the site classified under the wrong topic. That is the problem to solve.
See `keyword-strategy.md`.

## Documents here

| File | What it covers |
|---|---|
| `keyword-strategy.md` | What to target, what to ignore, and the content cluster |
| `search-console-findings.md` | Indexing diagnosis, and what has been ruled out |
| `link-building.md` | Off-page strategy, profile URLs, and the copy for each platform |

Tracked in Jira under **KAN-7 — Search visibility**.

## Current state

**On-page SEO is not the bottleneck.** As of 2026-08-21 the site has:

- `robots.txt` allowing crawling, with `Sitemap:` declared, and explicit rules for
  GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot and Google-Extended
- `sitemap.xml` with 33 URLs, all returning HTTP 200
- `index, follow` and correct canonicals on every indexable page
- `llms.txt` for AI search engines
- Organization and WebSite JSON-LD in the root layout, with `sameAs` pointing at
  LinkedIn and Crunchbase
- WebPage + BreadcrumbList schema on the highest-value pages
- Unique titles and descriptions on every page, all under 60 characters including
  the `· Hearth` suffix the layout appends
- `og-image.png` (1200×630), so shared links render a real preview card
- IndexNow submission automated on every production deploy

**Off-page is the bottleneck.** Almost nothing links to the domain. Google has no
trusted path to arrive by, and Bing Webmaster Tools independently reports
"Your site lacks inbound links from high-quality domains."

## What will not work

Do not chase the keyword **"hearth"**. It is a common English noun competing
against Hearth & Hand with Magnolia, hearth.com, a fintech called Hearth, and the
dictionary definition. Ranking there requires years of domain authority.

Also do not chase `therapy`, `online therapy`, `betterhelp` or `mental health`. All
are dominated by established brands with years of authority, and all are heavily
filtered for health content.

Reachable targets, in order of realism:

1. Long-tail informational — `what is peer support`, `someone to talk to who isn't a
   therapist`, `grief support without therapy`
2. `what is a hearth keeper` — we already get impressions for this and convert none
   of them
3. `dear hearth` — unique to us, but currently has no search demand at all, which is
   a brand-awareness problem rather than an SEO one

Full reasoning in `keyword-strategy.md`.

## Fixed along the way

**Soft 404s on every dynamic route** (2026-08-22, KAN-47). `/embers/<anything>`,
`/keepers/<anything>` and `/for/<anything>` all returned HTTP 200 while rendering the
404 page. The pages call `notFound()` correctly, but unknown slugs were rendered on
demand and the streamed response had already committed a 200 by the time it fired.
Google reads that as a soft 404 and crawls the unbounded invalid-URL space
indefinitely. Fixed with `export const dynamicParams = false` on all three, since the
set of essays, Keepers and topics is fully enumerated by `generateStaticParams`.

Found while checking whether `/embers/feed.xml` was a real RSS feed. It was not —
**the site has no feed at all**, which is a missed syndication path worth adding.

## Gotchas worth knowing

- **The title template appends `· Hearth`.** That is 9 characters. Write page
  titles at 51 characters or fewer or Google truncates them.
- **Client components cannot export `metadata`.** Five pages shipped with no
  title of their own because of this. If a page needs interactivity, split it:
  server `page.tsx` holds the metadata, `*Client.tsx` holds the hooks.
- **A `sameAs` entry pointing at a 404 is a failed entity claim**, not a neutral
  one. Only list profiles that actually resolve.
- **IndexNow reaches Bing, Yandex, Seznam and Naver — not Google.** It still
  matters, because Bing's index is what ChatGPT search and DuckDuckGo read from.

## New-page checklist

The binding version of this rule lives in `AGENTS.md` (New-page rule). Short form:
sitemap entry with a real lastmod, llms.txt if citable, founder requests indexing
in Search Console after the deploy (agent hands over the exact URL list), IndexNow
is automatic on deploy. Added 2026-08-24 at the founder's request.

## Coverage report (automated)

`scripts/gsc-coverage.mjs` inspects every sitemap URL through the Search Console
URL Inspection API and emails a weekly summary (indexed count, URLs worth a
manual Request Indexing, canonical mismatches, errors) to hello@dearhearth.com
via Brevo. It runs Mondays 07:00 UTC from `.github/workflows/index-coverage.yml`
and can be run on demand from the Actions tab (workflow_dispatch).

One-time setup still owed by the founder (about ten minutes):
1. console.cloud.google.com: create a project (any name), enable the
   "Google Search Console API".
2. IAM and admin > Service accounts: create one (any name), no roles needed.
3. On the service account: Keys > Add key > JSON. Download the file.
4. search.google.com/search-console > Settings > Users and permissions:
   add the service account's email address (ends in .iam.gserviceaccount.com)
   with Full permission.
5. Hand the JSON file to the agent, which stores it with:
   `gh secret set GSC_SERVICE_ACCOUNT_JSON --repo baabar69/hearth < file.json`
   and triggers a first run to verify.

Until the secret exists the weekly run logs one line and exits green, so
there is no false alarm. BREVO_API_KEY is already set as a repo secret.
The property id defaults to `sc-domain:dearhearth.com`; if Search Console
shows the property as a URL-prefix instead, set repo variable GSC_PROPERTY
to `https://dearhearth.com/`.
