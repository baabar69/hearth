# Search Console findings

Investigation run 2026-08-21. Tracked as **KAN-11**.

## What Google reports

Search Console → Indexing → Pages → "Why pages aren't indexed", 15 pages excluded:

| Reason | Source | Pages |
|---|---|---|
| Not found (404) | Website | 4 |
| Blocked by robots.txt | Website | 3 |
| Page with redirect | Website | 3 |
| Excluded by `noindex` tag | Website | 1 |
| Crawled — currently not indexed | Google systems | 4 |
| Discovered — currently not indexed | Google systems | 0 |

**The number we still do not have** is how many pages are *indexed*. That figure sits
above this table and determines which problem we are solving:

- Near zero indexed → a discovery problem, and inbound links are the fix
- Around 18 indexed (33 in the sitemap minus 15 excluded) → the site is indexed and
  this is a ranking problem, which is a better position to be in

Record it before doing anything else.

## What Bing reports

Bing Webmaster Tools, two recommendations:

- **High** — "Learn how IndexNow boosts site visibility with easy setup."
  Now resolved: `scripts/indexnow.mjs` submits every sitemap URL on each production
  deploy. Manual pings do not clear this; Bing wants a regular signal.
- **Moderate** — "Your site lacks inbound links from high-quality domains."
  This is the real finding, reached independently by Microsoft's crawler.

## Ruled out

Each of these was checked and is not the cause:

- **Technical indexability.** `robots.txt` allows crawling and declares the sitemap.
  Meta robots is `index, follow`. Canonicals are correct.
- **Broken sitemap.** All 33 URLs return HTTP 200.
- **Broken internal links.** Every `href` in the codebase resolves to a real route.
- **Deleted routes.** No `page.tsx` has ever been removed from the repo, so the 404s
  are not from pages that once existed.
- **JavaScript rendering.** The homepage is server-rendered with 2,595 words of body
  text and a real `<h1>`. Client components still SSR.
- **A poisoned domain.** The Wayback Machine holds exactly one capture of
  dearhearth.com before we owned it — an empty parked page from December 2021. No
  spam history to inherit.

## Assessment of each exclusion

**Not found (404) — 4.** Cause unknown; needs the URL list exported from Search
Console. Since no route was ever deleted and every internal link resolves, these are
URLs Google learned about elsewhere: an older sitemap, an inferred variant, or an
external link. A 404 is the correct answer for a URL that was never real — only
redirect where a genuine equivalent exists.

**Blocked by robots.txt — 3.** Almost certainly intentional. `robots.txt` disallows
`/sign-in`, `/checkout`, `/welcome`, `/api/`, `/_next/` and `/admin`, none of which
belong in search results. Confirm the reported URLs come from that set.

**Page with redirect — 3.** Likely `www.dearhearth.com` → apex (a working 301) plus
trailing-slash variants. Internal links with trailing slashes were converted to
`next/link` without them on 2026-08-21, so this should decay on its own.

**Excluded by `noindex` — 1.** Intentional. `app/intake/layout.tsx` sets
`robots: { index: false, follow: false }`. A multi-step form is thin content. Worth an
explicit decision, since `/intake` is the conversion page.

**Crawled — currently not indexed — 4.** The meaningful one. Google fetched these
pages and decided not to index them. On a domain with no inbound links this normally
means "not enough signal to be worth indexing" rather than anything wrong with the
page. Fixed by authority, not by editing the pages.

## Caveat on an earlier claim

An exact-phrase web search for a sentence from the homepage `<h1>` returned nothing
from dearhearth.com, and this was initially described as decisive proof the site was
not indexed. That was overstated. The search tool used is not necessarily Google and
may not honour quoted phrases, so it is weak evidence. The Search Console data above
is the reliable source, and it is not consistent with "nothing is indexed" — only 4
pages sit in "Crawled — currently not indexed".

## Also worth confirming

Search Console → Security & Manual Actions. Both should read "No issues detected".
If there is a manual action, everything else here is moot until it is lifted.
