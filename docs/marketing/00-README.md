> _Updated 2026-05-13: Hearth's target audience has broadened from South Asian diaspora to universal peer-support: Keepers are now hand-matched for fit rather than positioned around specific language/cultural fluency. The marketing playbook below reflects the original diaspora positioning: kept here for historical context. New marketing assets should follow the universal positioning in `docs/business.md`, `docs/prd.md`, and `docs/landing-page-prd.md`._

# Hearth Marketing: Index

This folder is the operational playbook for Hearth's marketing. Three pieces of primary research feed into three pieces of execution.

## Reading order

If you have 30 minutes, read these three first:

1. **[04-hearth-marketing-strategy.md](./04-hearth-marketing-strategy.md)**: Positioning, audience, voice, channel priorities, funnel, metrics. The single document that should never be more than a year out of date.
2. **[05-content-engine.md](./05-content-engine.md)**: How content actually gets made. Atomic workflow, weekly rhythm, asset pipeline, voice enforcement.
3. **[06-launch-90-day-plan.md](./06-launch-90-day-plan.md)**: Week-by-week execution for the first 90 days.

If you have an afternoon, read the research that produced the above:

4. **[01-marketers-research.md](./01-marketers-research.md)**: How twelve world-class marketers (Donald Miller, Seth Godin, Rory Sutherland, April Dunford, Mark Ritson, Byron Sharp, Alex Hormozi, Russell Brunson, Ann Handley, Brené Brown, Wieden+Kennedy, Calm/Headspace) would advise Hearth.
5. **[03-platform-strategy.md](./03-platform-strategy.md)**: Platform-by-platform deep-dive across IG Reels, IG Carousel, TikTok, YouTube Shorts, YouTube Long, LinkedIn, X, Threads, Pinterest, Substack: current 2026 algorithm dynamics.
6. **[02-remotion-capabilities.md](./02-remotion-capabilities.md)**: Technical reference for the Remotion video codebase. Includes the brand-token TypeScript file and a paste-ready starter prompt template.

## Remotion prompts

The [`remotion-prompts/`](./remotion-prompts/) subfolder contains paste-ready prompts. Each is a self-contained brief that an LLM working in a separate Remotion codebase can use to generate a specific marketing video.

See [remotion-prompts/README.md](./remotion-prompts/README.md) for how to use them.

## Versioning

These documents are living. When the strategy changes, change the document. Don't make a new one and let the old one rot: that's how marketing teams end up with three contradictory playbooks.

The 2026-04 version is the current canonical strategy.

## Instagram system (added 2026-08-22)

Diaspora-first Instagram plan for a US and Canada audience run from Pakistan, with the evidence on how Instagram decides where posts go: **[07-instagram-playbook.md](./07-instagram-playbook.md)**. The shared context every marketing skill reads is `.agents/product-marketing.md`.

Commands (type them in Claude Code in this repo):

| Command | What it does | Cadence |
|---|---|---|
| `/ig-plan` | Stress-tests and updates the Instagram strategy | Monthly, or when something changes |
| `/content-week` | Drafts next week's 4 Reels, carousel, captions, trial hooks and schedule into `weeks/<ISO week>/batch.md` | Weekly (Saturday) |
| `/reel <week> <slug>` | Turns one script into a Remotion production brief | Per Reel |
| `/collab-scout` | Builds the engagement list and Collab shortlist of US/CA diaspora accounts | Monthly |
| `/growth-review` | Ingests Insights numbers, applies the decision rules, sets next week's emphasis | Weekly (Monday) |
| `/hook-batch <theme>` | 40 hooks and 12 cover lines, scored, with a checkbox contact sheet to pick from | When hooks are the bottleneck |
| `/cover-batch <week>` | Composites cover and slide variants to PNG with a contact sheet | Per batch |
| `/intake-reply` | Drafts the personalised acknowledgement email for a completed intake (human sends) | Per intake |
| `/followups` | Today's follow-up drafts from the template pool and cadence (human sends) | Daily |
| `/dashboard` | Rebuilds the static dashboard from data/metrics/*.csv with funnel and signals | Weekly |

The method these follow, and what was deliberately not copied: [08-saraev-method-for-hearth.md](./08-saraev-method-for-hearth.md). Failures are logged in [errors.md](./errors.md).

Agents behind them: `hearth-content-writer`, `hearth-collab-scout`, `hearth-ig-analyst` in `.claude/agents/`. The weekly loop definition and how to schedule it: [loops/weekly-content-loop.md](./loops/weekly-content-loop.md). Nothing in this system publishes or spends without a human.
