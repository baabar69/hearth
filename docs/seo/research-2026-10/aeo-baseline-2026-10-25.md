# AEO baseline: is Hearth named by AI answer engines? (2026-10-25)

AEO (answer engine optimisation) means being named and cited when people ask ChatGPT,
Perplexity, Google's AI Overviews and AI Mode, Copilot, Claude and similar tools. This is
the "before" picture: the October guides went live 2026-10-24 and Google indexing was
requested 2026-10-25, so engines had not read them yet. Re-run monthly with the same
prompts.

Method: Chrome on the founder's machine (Lahore IP, so Google may differ from the US),
logged out where possible. ChatGPT and DuckDuckGo/Brave were not reached before the run
was stopped. Claude's view was checked with its web search tool.

## Prompts

- P1 "What is Dear Hearth?" (the domain form people may type)
- P2 "What are the best online peer support services?"
- P3 "Where can I get one-to-one peer support online with the same person every time?"
- P4 "What are good alternatives to therapy?"
- P5 "Can I pay someone to just listen to me?"
- P6 "Is there online emotional support for South Asians that speaks Urdu or Hindi?"

## Results: is Hearth mentioned?

| Prompt | Perplexity | Google AI Overview | Google AI Mode | Bing / Copilot | Claude search |
|---|---|---|---|---|---|
| P1 | Yes, one thin sentence, sourced from /terms, /faq, /trust | No by default: Google autocorrects to "Dear Heart". Yes and correct (including prices) if the spelling is forced | Yes, correct | Yes, but blended with the 1964 film *Dear Heart* | No; returns hearth-home.org and hearth.com |
| P2 | No | No | not run | No | No |
| P3 | Sign-up wall | No | No | No | No; concluded no service reliably keeps the same person |
| P4 | No | No | not run | No | not run |
| P5 | Sign-up wall | No | not run | not run | not run |
| P6 | Sign-up wall | No | not run | not run | not run |

## Who is recommended instead, and what is cited

- **P2 best online peer support.** Google AIO: HeyPeers, ShareWell, 7 Cups, Togetherall, NAMI, Sanvello. Bing: 7 Cups, TalkLife, HeyPeers, ShareWell, Peer Collective, Sesh. Perplexity: MHA/Inspire, NAMI, 7 Cups. Cited: heypeers.com, sharewellnow.com, advocates.org, togetherall.com, 7cups.com, **calmsage.com** ("12 Best Online Peer Counseling Platforms"), **selfpause.com** ("Best Peer Support Platforms 2026, Ranked"), medicalnewstoday.com, healthline.com, psychcentral.com, Reddit, Quora.
- **P3 same person.** Google AIO: ShareWell, HeyPeers, WEconnect Health, 7 Cups. AI Mode asked the user: "a platform that automatically assigns someone to you, or choose them yourself?" (Hearth's hand-matching). Bing: WEconnect, The Peer Network, RecoveryBridge. Cited: weconnecthealth.io, thepeernetwork.com, sharewellnow.com, heypeers.com, recoverybridge.app, buddyhelp.org.
- **P4 alternatives to therapy.** Categories only, no brands. Cited: talkspace.com blog, citizenadvocates.net, hopefulpanda.com, wojdo.com, breeze-wellbeing.com, thedigitalhope.com, lifesketch.co, forbes.com/health, mind.org.uk, rethink.org, verywellhealth.com, Reddit r/TalkTherapy. The AIO's "peer support groups" bullet had no citation.
- **P5 pay someone to listen.** Framed as friend-rental (FriendPC, RentaCyberFriend, Fiverr). Cited: Reddit r/therapists, r/Advice, r/ThirtiesIndia, Quora, lets-just-talk-ok.co.uk, hearme.app.
- **P6 South Asian, Urdu/Hindi.** South Asian Network, AAHNA, Ashiyanaa, The Meeting Matters, Rethink/Sahayak, MCHB peer groups. Cited: southasiannetwork.org, southasiantherapy.org, themeetingmatters.com, mchb.org, samhin.org/resources, mmhla.org, ursafespace.com. Hearth's diaspora strength is invisible.

## Other findings from the audit

- AI crawlers get full content in raw HTML; robots.txt allows every AI crawler.
- "Dear Hearth" spelling is autocorrected to "Dear Heart" on Google and Bing. The company
  name is **Hearth** (founder, 2026-10-25); "Dear Hearth" is only the domain/handle form,
  kept as `alternateName` in schema.
- The Wikidata item Q141431662 was **deleted 2026-09-13** for notability. Its `sameAs`
  link was removed. Recreate only after independent press coverage exists.
- LinkedIn company page is titled "Hearth"; Crunchbase blocks automated checks.
- No Trustpilot profile found; no third-party mentions of dearhearth.com anywhere.
- /about says "Founder: Coming soon" and "Founder's letter, 2024".

## Gaps and owners

**Done in code (2026-10-25):** homepage FAQ "What is Hearth?" with a quotable definition;
brand name in visible text; dead Wikidata link removed; llms.txt disambiguation; new pages
for the comparison hub, 7 Cups alternatives, Urdu/Hindi/Punjabi support; a "matched vs
choosing your own peer" section on the one-to-one guide.

**Founder:** get listed on calmsage.com and selfpause.com and pitch the smaller
"alternatives to therapy" blogs; honest, disclosed Reddit and Quora answers; a Trustpilot
profile with real member reviews; name the founder on /about; Bing Webmaster Tools; South
Asian directories (samhin.org, mmhla.org); press coverage, then Wikidata.
