# Fri 10am ET · Friday-note Reel (signed "Your Keeper": named Keepers are placeholders until real hires, KAN-45) · "You said it's fine four times on Tuesday's call"

**Hook:** You said "it's fine" four times on Tuesday's call. (Left-aligned, top third of the card, so it survives the 1:1 grid crop.)

## The note, verbatim (labelled on screen: "An example, with details changed.")

Friday note · from your Keeper

You said "it's fine" four times on Tuesday's call.

Once about your mother. Twice about work. Once about the thing you stopped saying halfway.

I am not going to make it mean anything. I just wanted you to know I counted.

Being the steady one is a job. Nobody puts it on a calendar and nobody signs off on it.

Bring the fourth one to Sunday's call if you want. If you would rather talk about your brother's wedding, we will do that instead.

Either way, I will be there at four.

Your Keeper

## On-screen beats (29s, 870 frames at 30fps; lines stack and stay, so the final frame is the complete note)

| Beat | Seconds | On screen | Note |
|---|---|---|---|
| 0 | 0.0 | Mono stamp FRIDAY NOTE · FROM YOUR KEEPER fades in at the top of the card. Label "An example, with details changed." fades in below the card. | Both persist for the full 29s. |
| 1 | 0.0 to 3.0 | You said "it's fine" four times on Tuesday's call. | "four times" in ember, the only ember in the body. |
| 2 | 3.0 to 4.8 | Once about your mother. | Beats 2 to 4 are one staggered line group. |
| 3 | 4.8 to 6.4 | Twice about work. | |
| 4 | 6.4 to 9.0 | Once about the thing you stopped saying halfway. | |
| 5 | 9.0 to 11.6 | I am not going to make it mean anything. | |
| 6 | 11.6 to 14.4 | I just wanted you to know I counted. | The true thing. Hold the full 2.8s. |
| 7 | 14.4 to 17.0 | Being the steady one is a job. | |
| 8 | 17.0 to 20.0 | Nobody puts it on a calendar and nobody signs off on it. | |
| 9 | 20.0 to 22.8 | Bring the fourth one to Sunday's call if you want. | Callback to beat 4. |
| 10 | 22.8 to 25.8 | If you would rather talk about your brother's wedding, we will do that instead. | Continuity proof: the Keeper already knows the family. |
| 11 | 25.8 to 28.0 | Either way, I will be there at four. | |
| 12 | 28.0 to 29.0 | Ember hairline rule, then "Your Keeper" in italic. hearth wordmark bottom centre. | Whole note visible: the screenshot frame. |

No voiceover. No CTA inside the video.

## Caption

A Friday note, from a Keeper to someone who was the strong one all week.

Every Friday your Keeper writes you a few lines about what they noticed that week. Not advice, just proof that someone was paying attention. This one is an example, with details changed.

Hearth is peer support, not therapy. The same person in month one and in year three.

Hearth: one trained listener, yours for years. $39 a month. Link in bio.

#peersupport #eldestdaughter #southasian #immigrantparents #hearthkeepers

## Trial hooks

1. I counted. You said it's fine four times on Tuesday.
2. Four times on Tuesday's call, you said it was fine.

## Cover line

You said it's fine four times.

## Production note

Base: fork `docs/marketing/remotion-prompts/02-instagram-reel-letter-to-pattern.md` as a Friday-note variant. Two changes: lines stack instead of replacing each other, and the block is left-aligned (centred type reads as a quote-card meme).

Paper and card: background paper #F2EDE5 with the grain PNG at 7% multiply. The note sits on a #FFF7EE card with a 1px dashed ember (#9C2A1A) border at low opacity, which is the `.friday` card from `app/globals.css`, so the Reel and the product look like the same object.

Type: Fraunces 400, 52px, line-height 1.45, ink, max width 820px, left-aligned, 100px padding. Signature "Your Keeper" in Fraunces 400 italic 44px, right-aligned under a 60px ember hairline. Wordmark "hearth" in Fraunces 500 ember 40px, bottom centre, entering with the signature. Six-pointed seal (U+273B) in ember at 10% opacity, bottom right. Stamp: JetBrains Mono 500, 22px, uppercase, 0.18em, ember, "FRIDAY NOTE · FROM YOUR KEEPER" (middot, never a dash). Label: JetBrains Mono 400, 20px, sentence case, sage, pinned below the card at full opacity, legible on the cover still too.

Reveal: fade-in per line, word by word, 4-frame stagger, opacity 0 to 1 over 12 frames, 6px upward translate. No typewriter cursor. If testing typing-on, 28 characters per second, no cursor, no per-character sound.

Audio: no voiceover. Paper-and-room ambient at about -24dB, curve interpolate(frame, [0, 30, 840, 870], [0, 0.08, 0.08, 0]). One soft pen tick at each line's first word, volume 0.12. Registers as Original Audio. Music alternative: one sustained piano note per stanza, Hania Rani register, -22dB.

Loop: frame 869 holds the complete note for the save, then cuts to blank paper at frame 0.

Render:
npx remotion render src/index.ts ReelFridayNoteItsFine out/reels/2026-08-friday-note-its-fine.mp4 --codec=h264 --crf=18 --pixel-format=yuv420p
npx remotion still src/index.ts ReelFridayNoteItsFine out/reels/2026-08-friday-note-its-fine-cover.png --frame=90

Posting: Friday 10am ET, trial reel first, clean export cross-posted to TikTok and Shorts the same day.
