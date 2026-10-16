# The daily content machine

One approval a week from the founder. Everything else runs itself. Written 2026-09-09; supersedes the weekly rhythm in `07-instagram-playbook.md` section 4 (the playbook's audience, voice and geography rules still apply).

## The promise, in one line

Every Saturday a finished week appears in Buffer as drafts: seven vertical videos, each with captions written for Instagram, TikTok, Facebook, YouTube Shorts, Threads and Pinterest. The founder watches them on the phone, taps "Add to Queue" on the ones they like, and Buffer posts them, one a day, at the right hour in Eastern Time. Phase 1 posts to Instagram, TikTok and YouTube Shorts; phase 2 adds Facebook and Threads (see "Posting route and cost").

## Why this shape

- **Text-led video is the only lane that renders itself.** Letters, quotes, POV ledgers, Friday notes, notes-app cards and kinetic captions need no footage, no voice, no design tool, so a week can be produced with zero human hours. B-roll and voiceover pieces stay optional until footage exists.
- **One asset, six platforms.** A 1080x1920 MP4 under 30 seconds is native on Instagram Reels, TikTok, Facebook Reels, YouTube Shorts, Threads and Pinterest video pins. Only the caption changes.
- **Approval is the founder's job; everything else is a machine's** (Saraev rule 10: the only step that must stay human is the one where the customer feels it, and for a brand feed that step is "is this true and is it us").

## The seven-day cadence (one post per day, every platform, times in ET)

| Day | Lane | Length | Job |
|---|---|---|---|
| Sun 7pm | Letter-to card sequence | 20 to 25s | The week's anchor; saves and sends |
| Mon 10am | Kinetic quote | 12 to 15s | Reach with non-followers |
| Tue 10am | Notes-app letter | 20s | Trend format, intimacy |
| Wed 10am | "Things nobody tells" card sequence (carousel as video) | 25s | Saves |
| Thu 10am | POV ledger (viral format) | 18 to 20s | Sends; always a trial reel on Instagram |
| Fri 10am | The Friday note, labelled as an example | 22 to 29s | Shows the product |
| Sat 11am | Concealed-truth structure ("when they ask X, I say Y, because I can't say Z") | 18 to 20s | Reach; the format that produced last month's 76x outlier |

Themes rotate weekly through the pillars: being the strong one, family pressure, grief with no name, caregiving years, between two cultures, known in pieces, new parenthood, the Sunday call. Every piece ends on one of the three closers. Every piece states "peer support, not therapy" once at most, never sells on price, and names no Keeper.

## Platform rules (what changes per platform)

| Platform | Caption | Notes |
|---|---|---|
| Instagram Reels | Full caption, 5 hashtags, closer | Business account; post as trial reel when the app offers it; add audio from the trending Original tab or Sound Collection |
| TikTok | One line plus 4 hashtags | Public posting via Buffer's audited app; TikTok's own trending sounds added in-app when possible |
| Facebook Reels | Full caption, no hashtags, site link | Needs a Facebook Page for Hearth (create once, link to the Instagram account) |
| YouTube Shorts | Title under 100 chars plus description with the link and #Shorts | Channel "Dear Hearth" |
| Threads | Hook plus closer, under 500 chars, no hashtags | Auto-created with the Instagram account |
| Pinterest | Title plus description with the link | Video pin; slow burn, strong for saves |

## Posting route and cost (verified 2026-09-11)

The route is $0. Two shortcuts that look free do not work, so they are written down here to stop anyone re-proposing them:

- **Instagram's "share to Facebook" setting does not fire for Reels that Buffer publishes.** Buffer's help centre states it: posts sent through its API skip Instagram's automatic Facebook sharing. Facebook needs its own channel.
- **Instagram cannot auto-share Reels to Threads.** The always-share setting covers photos only; Reels get a manual toggle at posting time, which an API post never sees.
- **Buffer's paid plan charges every channel, not only the extras.** Past the free 3, all channels cost $5 to $6 a month each, so six channels on Buffer is about $30 to $36 a month.

| Phase | Platforms | Tool | Cost |
|---|---|---|---|
| 1 (now) | Instagram Reels, TikTok, YouTube Shorts | Buffer free plan: 3 channels, API included (1 key, 3,000 requests a month), 10 queued posts per channel | $0 |
| 2 (after two clean weeks) | Facebook Reels, Threads | Zernio free tier: first 2 accounts free, API included. A mirror step reads which pieces the founder queued in Buffer and schedules the same pieces to Zernio, so approval stays in one place | $0 |
| Later, only if it earns it | Pinterest | Zernio, $6 a month for the third account | $6 |

Buffer's free plan caps queued posts at 10 per channel and allows 8 unique channel connections in the account's lifetime, so publish the new week on Saturday (when at most one post from the old week is still queued) and never connect and disconnect channels to experiment.

## The pipeline (files in this repo)

1. **Saturday 10:00 PKT, `/content-week`** writes `docs/marketing/weeks/<week>/pieces.json` (seven pieces with beats, lanes, slots and per-platform captions) and `batch.md`.
2. **`node scripts/marketing/render-batch.mjs <pieces.json>`** renders every piece to MP4 with a cover, and writes `approve.html` (videos inline, captions per platform).
3. **Media hosting:** the `renders/` folder is dropped on a public host so Buffer can fetch the files. Zero-setup option: drag the folder onto app.netlify.com/drop; the URL it returns is `MEDIA_BASE_URL`.
4. **`node scripts/marketing/publish-buffer.mjs <pieces.json> --media <MEDIA_BASE_URL>`** creates one Buffer draft per piece per connected channel, scheduled at the piece's slot, with the platform's caption. Nothing publishes yet.
5. **The founder approves in the Buffer app** (Drafts tab, tap Add to Queue). Ten minutes on a Sunday morning. Buffer posts the week.
6. **Monday, `/growth-review`** with the numbers; the decision rules pick next week's emphasis and lanes.

Steps 1, 2 and 4 become one scheduled job once they have run cleanly by hand for two weeks (a local loop first, then a cloud routine), per `08-saraev-method-for-hearth.md`.

## Accounts to create once (founder, about 40 minutes)

Phase 1:

1. Buffer account on the free plan. Connect Instagram, TikTok and YouTube, and nothing else (the free plan's 3 channels). Create the API access token in Buffer settings and put it in `.env.local` as `BUFFER_ACCESS_TOKEN`.
2. TikTok account `@thedearhearth` (business account).
3. YouTube channel "Dear Hearth".

Phase 2:

4. Facebook Page "Dear Hearth" linked to the Instagram account (Facebook Reels can only be posted to a Page).
5. Zernio account on the free tier. Connect the Facebook Page and Threads, and put the API key in `.env.local` as `ZERNIO_API_KEY`.
6. Pinterest business account (optional, only if it earns its $6).

## Guardrails that never change

- Nothing publishes without the founder tapping Add to Queue. Drafts only.
- Every render is self-made text on paper: no reposted clips, no watermarks, no licensed pop music baked in.
- Copy rules from `AGENTS.md`: no em dashes, plain sentence first, no clinical claims, no price as the argument, no named Keepers, no testimonials.
- Trial reels on Instagram for every new format; daily engagement on the target list continues while the machine runs, because the machine makes posts, not audiences.

## Changelog

- 2026-09-09: created. Seven-day cadence, six platforms, Buffer drafts as the approval step, render-batch and publish-buffer scripts.
- 2026-09-11: corrected the posting route. Instagram's Facebook and Threads sharing does not cover Buffer-published Reels, and Buffer's paid plan bills every channel. New route: Buffer free for Instagram, TikTok and YouTube; Zernio free for Facebook and Threads in phase 2. Both $0.
