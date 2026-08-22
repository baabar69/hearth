# Loop: weekly Instagram content batch

Defined in the `marketing-loops` anatomy. Runs `/content-week` on a schedule and stages drafts for approval. It never publishes.

| Part | Definition |
|---|---|
| **Check cadence** | Weekly, Saturday 10:00 PKT (Friday evening ET), so the batch is ready for the Sunday 7pm ET soft post. |
| **Acts when** | `docs/marketing/weeks/<next ISO week>/` does not exist yet, or exists but `status: draft` is missing. Otherwise: checked, nothing to do. |
| **Purpose** | Four Reels, one carousel, captions, trial hooks and the posting schedule exist by Saturday, every week, in the brand voice, targeted at US/CA diaspora. |
| **Skills used** | `social`, `copywriting`, `content-strategy`, `video` (for Remotion briefs), `brand-voice-enforcement`. Agents: `hearth-content-writer` (parallel drafting), `hearth-collab-scout` (monthly refresh of the engagement list). |
| **Loop body** | 1. Read `.agents/product-marketing.md`, `docs/marketing/07-instagram-playbook.md`, last week's `growth-review.md` (if any). 2. Pick this week's theme from the content pillars and the decision rules (double down on formats with sends per reach above 1.5%). 3. Dispatch `hearth-content-writer` for the four Reel scripts and the carousel in parallel. 4. Assemble `batch.md`: scripts, on-screen text, captions (5 hashtags max), trial-reel hook variants, ET schedule, closers. 5. Run the self-check. 6. Write `docs/marketing/weeks/<week>/batch.md` with `status: draft`. |
| **Self-check** | grep for em dashes and the sensitive-word list (suicide, self-harm, kill myself, depression, disorder, trauma as hook) returns nothing. No clinical claims. Every piece names one true thing and ends on a closer. Every Reel has a trial hook variant. No testimonial without a consent note. |
| **State / idempotency** | The week folder is the dedupe key. `docs/marketing/weeks/metrics.csv` is the running metrics state read by `/growth-review`. |
| **Stop / bail-out** | Skip if the folder already has `status: draft` or `status: approved`. Halt and notify if the playbook or context doc is missing, or if the self-check fails twice. Disable by deleting the schedule. |
| **Output** | `docs/marketing/weeks/<week>/batch.md` and a short summary to the founder: theme, the four hooks, what needs approval. |

## Scheduling

Pick one:

- **Claude Code cloud routine (recommended once the repo is connected):** run `/schedule` and ask for "every Saturday at 10:00 Asia/Karachi, run /content-week in the hearth repo and leave the batch as a draft". Routines run without your laptop.
- **Manual cadence:** type `/content-week` every Saturday. The loop body is the value; the automation is optional.

Companion loop: `/growth-review` every Monday after you paste the week's Insights numbers. Monthly: `/collab-scout` to refresh the engagement and Collab list.
