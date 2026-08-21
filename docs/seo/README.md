# SEO and search visibility

Last updated 2026-08-21.

The problem in one line: searching "dearhearth" or "dear hearth" does not surface
dearhearth.com. Only typing the full domain works, and that is navigation, not search.

**Status 2026-08-21: 37 pages are indexed**, no manual actions. So this is not a
crawling or discovery problem — Google has read the site. It is a ranking problem,
which means authority and relevance, not technical SEO. See
`search-console-findings.md`.

## Documents here

| File | What it covers |
|---|---|
| `search-console-findings.md` | The diagnosis, the evidence, and what has been ruled out |
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

Reachable targets, in order of realism:

1. `dearhearth`, `dear hearth` — should be #1 once indexed
2. `hearth peer support`, `hearth keeper`
3. Comparison and alternative queries — `peer support vs therapy`,
   `BetterHelp alternative`. These carry buying intent and are where a new site
   can genuinely compete.

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
