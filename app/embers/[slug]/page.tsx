import { notFound } from "next/navigation";
import Link from "next/link";
import SharedNav from "../../components/SharedNav";
import SharedFooter from "../../components/SharedFooter";

type Essay = {
  slug: string;
  title: string;
  subtitle: string;
  category:
    | "Grief"
    | "Family"
    | "Diaspora"
    | "Identity"
    | "Intimacy"
    | "Anxiety"
    | "Career"
    | "Parenthood";
  readTime: number;
  publishDate: string;
  author: string;
  excerpt: string;
  body: string[];
};

const ESSAYS: Essay[] = [
  {
    slug: "the-weight-you-inherited",
    title: "The Weight You Inherited",
    subtitle:
      "On the silence that travels between generations and the language we never learned to speak.",
    category: "Family",
    readTime: 7,
    publishDate: "2025-09-12",
    author: "Aruna Bhattacharya",
    excerpt:
      "My grandmother kept her grief in a tin box on the highest shelf of the kitchen, and we all learned to look up at it without asking. I am forty-two now, and only this year did I understand what I had been carrying.",
    body: [
      "My grandmother kept her grief in a tin box on the highest shelf of the kitchen. I never saw inside it. Nobody did. But every woman in our family knew it was there, and we all learned, somewhere around the age of eight, to look up at it without asking.",
      "She was thirteen when partition happened. The train she was on arrived at the station with most of the people on it dead. She was not. For the rest of her life, she made tea the same way every afternoon, four o'clock, two spoons of sugar, and she did not speak about what she had seen. Not to her husband, not to her daughters, not to me.",
      "What she did instead — and what every woman after her did, in different costumes, in different decades — was carry it sideways. My mother carried it as perfectionism. My aunt carried it as a particular way of standing very still when anyone raised their voice. I carried it, for most of my twenties, as an inability to receive a compliment without flinching, as if praise were a thing I had to deflect before it caught me.",
      "I did not know, then, that I was carrying anything. That is how inheritance works in our families. It is not handed to you in a will. It is woven into the way your mother folds the laundry, the particular pause before she answers the phone, the foods she cannot bring herself to cook because they remind her of a kitchen she had to leave. You learn the choreography before you learn that there was ever a choice.",
      "The first time I tried to talk about my grandmother in therapy, I was thirty-four. The therapist was kind and very white and asked me to describe my relationship with her. I said: she was warm. She made the best chai. I loved her. All of which was true. None of which was the real sentence.",
      "The real sentence was: I have been afraid, my whole life, of the look she got sometimes, in the late afternoon, when the light was leaving the kitchen. I have been afraid of inheriting it. I have organized my entire personality around not inheriting it. And I have inherited it anyway, because that is not how grief works. Grief does not ask permission to move into the next generation. It just packs its bag and goes.",
      "I think a lot now about what we were taught to call love. In my family, love was the silence that protected you from the worst story. Love was the not-telling. My mother did not tell me about her own depression until I was thirty-six and had already had two of my own. She thought she was sparing me. I understand the mathematics of her decision. I also understand that what she spared me from was the language. Not the experience. I had the experience without the language, which is the worst possible combination.",
      "There is a particular loneliness in being the first one in your line who tries to put it down. You feel disloyal. You feel as if you are betraying your grandmother by speaking the things she used her whole long life to keep quiet. You feel, on bad days, that your sadness is an indulgence, because what right do you have, really, you who have not seen what she saw, who have not crossed any border on a train with bodies on it.",
      "What I have come to believe — slowly, in the way that real beliefs arrive, after years of being a different kind of person — is that putting it down is not a betrayal. It is the long-delayed exhale of women who could not afford to exhale. My grandmother kept the tin box on the high shelf because someone had to. My mother lowered the box one shelf. I am the first one allowed to open it.",
      "What I find inside is not always what I expected. Sometimes it is rage. Sometimes it is a particular smell — cardamom, kerosene, wet wool — that I cannot place. Sometimes it is just tiredness, an immense and historical tiredness, the kind that settles into the bones of women who have been holding everyone else together for four generations.",
      "If you are reading this, you probably know the box I mean. You may not have words for what is in yours yet. You do not need to. The box has been on the shelf for a very long time. It is not going anywhere. You can take it down when you are ready, and you can take it down with someone — a friend, a Keeper, a therapist, a sister you only just learned how to be honest with. The point is not to empty it in one sitting. The point is to know that you are allowed to look.",
      "My grandmother died in 2009. I never asked her about the train. I regret that, sometimes, and other times I think she would not have wanted to be asked. What I am trying to do now is make sure that when my niece is forty-two, she does not have to write this essay. That the box on her shelf, if there is one, is lighter, because someone, somewhere up the line, finally agreed to carry it out loud.",
    ],
  },
  {
    slug: "on-saying-no-to-your-mother",
    title: "On Saying No to Your Mother",
    subtitle:
      "There is no script for it. There is only the long minute after, and what you do with it.",
    category: "Family",
    readTime: 6,
    publishDate: "2025-10-04",
    author: "Rabia Khan",
    excerpt:
      "I said no to my mother on a Tuesday afternoon, over the phone, about a wedding I did not want to attend. I had practiced the sentence for weeks. It came out smaller than I had expected.",
    body: [
      "I said no to my mother on a Tuesday afternoon, over the phone, about a wedding I did not want to attend. I had practiced the sentence for weeks. I had said it to myself in the car, in the shower, in the kitchen while the kettle was rising. By the time I dialed her, I knew the sentence the way an actor knows a closing monologue. It came out, in the end, smaller than I had expected. Just: I am not going to come, ammi.",
      "There was a pause. I want to tell you that the pause lasted four seconds, but I think it lasted closer to nine. In the pause, I aged about a decade. I felt the old machinery start up, the one I had spent thirty-eight years installing — the apology already forming, the yes-actually-I-can-make-it, the I-will-figure-it-out, the offerings I had always laid down at the feet of her displeasure to avoid this exact silence.",
      "I did not lay any of them down. I held the pause. The pause held me back.",
      "When she finally spoke, she said: tell me why. Not the sharp tell-me-why I had braced for. A different one. Smaller. More tired. As if she had already known, somewhere underneath, that this conversation had been coming for a long time, and was only surprised it had arrived on a Tuesday.",
      "I told her why. I did not do it well. I cried in the middle. I used the word boundary, which I immediately regretted, because it is a word that does not translate, a word that sounds, in our context, like a wall built specifically to keep her out. What I meant was: I cannot make myself smaller for this wedding. I cannot pretend I am a different version of me for three days in front of people who knew me when I was nine. I am too tired to perform daughter for an audience of aunties this year.",
      "She did not say she understood. She said: okay. She said it the way she used to say okay when I was twelve and had asked for something she was not going to give me, and was telling me, by tone, that the conversation was now closed. Then she hung up.",
      "I sat with the phone in my hand for a long time. The kitchen was very quiet. I had won, technically. I had said the sentence. I had not folded. I had done the thing every self-help book and well-meaning friend had told me to do.",
      "I have never felt worse in my life.",
      "This is the part nobody tells you about saying no to your mother. The literature on it is bad. The literature treats it as a finish line — you said the thing, you are free now, congratulations. The literature does not tell you about the seventy-two hours afterwards, when you cannot eat, when you wake at four in the morning and cycle through every harm you have ever caused her, when you compose three different apology texts and delete all of them, when you call your sister and find out she has already heard, and that ammi cried.",
      "Ammi cried. That sentence will end you, the first time you hear it. It is meant to. It has been weaponized in our families for generations precisely because it works. The mother's tears are the final argument. They override every previous sentence in the conversation.",
      "What I had to learn, slowly, in the weeks after, was that ammi crying did not mean I had done the wrong thing. Ammi crying meant ammi was sad. Those are two different facts. I had spent my whole life merging them. I had spent my whole life believing that any sadness in my mother was a bill addressed to me, payable in immediate apology and compliance.",
      "It is not a bill. It is weather. She is allowed to have weather. I am allowed to not be the one who fixes it.",
      "I called my closest friend and said the thing I had not yet said out loud, which was: I am terrified that she will die before we recover from this. That fear, by the way, is the real reason most of us do not say no. It is not respect. It is not duty. It is the math of mortality. We are saying yes to a woman we are afraid of losing, and we are saying yes preemptively, in case the next phone call is the last one. I had to learn, and I am still learning, that the right last words are not the agreeable last words. They are the honest ones.",
      "The wedding happened. I did not go. My mother did not call me for eleven days, and on the twelfth day she called and asked if I had eaten lunch. I said yes. We talked about a cousin's new job. We did not talk about the wedding. We will, one day. We are not there yet.",
      "But the box is open now, between us. The conversation that was not allowed to happen for thirty-eight years has happened. It happened badly, the way first attempts do. It is going to happen again, in better and worse versions, for the rest of our lives. That is not a failure. That is, I am beginning to understand, the relationship.",
    ],
  },
  {
    slug: "late-grief",
    title: "Late Grief",
    subtitle:
      "A song came on in a grocery store and I had to sit down on the floor. He had been dead for ten years.",
    category: "Grief",
    readTime: 6,
    publishDate: "2025-11-18",
    author: "Faisal Mahmood",
    excerpt:
      "My father died in 2014. I gave the eulogy in two languages. I did not cry. I went back to work on a Monday. The grief found me anyway, ten years late, in the spice aisle of a grocery store in Houston.",
    body: [
      "My father died in May of 2014. I gave the eulogy in two languages. I helped my mother with the death certificate. I made the calls to the relatives who had to know, and I made them in the right order, oldest first, which my father would have approved of. I did not cry at the funeral. I cried in the car afterwards, briefly, the way you might sneeze. Then I drove my mother home and made her dinner and went back to work the following Monday, because my father was the kind of man who would have considered a second day off an indulgence.",
      "For the next ten years, I considered myself a person who had handled it.",
      "I told this to people, in those exact words. I handled it. I would say it with a small, rueful smile that I now understand was a kind of armor. Friends would ask, gently, in the early years, how I was doing with the loss, and I would say: I handled it. I had a good father. I had time with him. I am not one of those people with regrets. I am fine.",
      "I was not fine. I was very far from fine. I was so far from fine that I could not see fine from where I was standing. But I had built, around the unfine place, an entire architecture — a job, a marriage, two children, a house with a lawn — and the architecture was so convincing that even I believed it.",
      "The grief found me anyway. Not in the first year, when it would have been welcome. Not on the anniversaries. It found me ten years and four months after his death, in the spice aisle of a Kroger in Houston, on a Saturday afternoon in September, when a song came on the overhead speakers.",
      "It was a Mehdi Hassan ghazal. It was not even his favorite. It was just a song he used to hum, sometimes, while shaving. I had not heard it in maybe fifteen years. The opening notes started, and my legs stopped working, and I sat down on the floor of the grocery store, between the cumin and the cardamom, and I cried in a way I had not known my body knew how to cry. A teenage stocker came over and asked if I was okay. I could not answer him. He brought me water. I sat there for, I think, twenty minutes.",
      "Late grief is not a metaphor. It is a real, observed phenomenon. The grief that gets postponed because there was no time, no permission, no language, no community willing to sit with you long enough — that grief does not evaporate. It waits. I have come to believe that men in our communities are particularly vulnerable to it, because we are particularly trained to be useful in the immediate aftermath. There is a script. The script is: you are the eldest son, you take care of your mother, you make the arrangements, you do not collapse. The script is admirable. The script is also a way of making sure that you, specifically, do not get to grieve.",
      "I performed it beautifully. My mother told relatives that I had been a rock. I was proud of being a rock. Rocks, however, are not metabolizing anything. Rocks are just sitting there with the weight on top of them, and underneath, slowly, something is being crushed.",
      "The grocery store thing was not the bottom. The bottom was a few weeks later, when I realized I could not remember the sound of my father's laugh. I had spent ten years not letting myself think about him in any sustained way, on the theory that thinking about him would unlock something I could not afford to unlock. The cost of that strategy was that I had also locked away the good parts. I had locked away his laugh.",
      "I went looking for it. I called my brother, who had a recording on an old phone of our father telling a story at a wedding. I listened to it, alone, in my car, parked outside my office. I let it play through. I let it end. I played it again. The grief came in waves and the laughter came in waves and I sat there for an hour not getting out of the car, and what I noticed, somewhere in the middle, was that the laughter was louder than I remembered, and the grief was not as terminal as I had feared.",
      "I am not done. I do not think I will be done. I have come to suspect that you are never done with a parent who shaped you, you are only at different points of the conversation. Some weeks I think about him every day. Some weeks I forget for a while. The forgetting used to feel like a betrayal. I am beginning to understand that the forgetting is part of how the love survives — that you cannot hold something at the front of your mind for ten years and have any of it left.",
      "If you are someone who handled it, who gave the eulogy and went back to work, who is congratulating yourself, ten years on, for having gotten through — I am not warning you. I am just telling you that the song is still out there, in some grocery store, on some Saturday. It is going to play. You do not have to be afraid of it. You only have to know, when your legs stop working, that this is not a relapse. This is not a failure. This is the grief, finally, finding a place to land.",
    ],
  },
  {
    slug: "code-switch-fatigue",
    title: "Code-Switch Fatigue",
    subtitle:
      "Three accents, four registers, two names, one tired self at the end of a Tuesday.",
    category: "Diaspora",
    readTime: 7,
    publishDate: "2025-12-09",
    author: "Devika Iyer",
    excerpt:
      "I have three voices. The work voice, the family voice, the friend voice. I switch between them so fast I no longer know which one is the original. I am tired in a way that sleep does not fix.",
    body: [
      "I have three voices. There is the work voice, American and competent, full of phrases like circle back. There is the family voice, which softens at the edges and uses words I would not use in any other room. And there is the friend voice, a kind of code-switched English-Tamil-Hindi hybrid I share with maybe eight people on the planet. On a Tuesday I might use all three within the same hour. A 9am stand-up, a call to my mother on the way back from coffee, a text to my college roommate that opens with hi da. By six pm I am tired in a way that is not about the work.",
      "I used to think this was a discipline I had mastered. I am bilingual, I would have said, casually, at parties, the way some people are bilingual in French and English. The frame was wrong. Bilingualism is the technical part. Code-switching is something else. Code-switching is the constant, low-grade calculation about which version of yourself is allowed in this room, and the price of getting it wrong.",
      "There is a particular feeling, late on a weekday, that I have been trying to name for years. It is not exhaustion exactly. It is more like the feeling of having performed in three plays back to back, in three different languages, with no intermission. You are not sad. You are just no longer sure where the original you ended and the performances began.",
      "I noticed it most clearly the year I was promoted at work. The promotion came with a new layer of code-switching I had not anticipated. I had to speak, in meetings, in a register slightly more authoritative than I had previously used. I had to lower my voice, very slightly, on Zoom. I had to stop apologizing in emails. I had to add, in front of clients, a kind of casual confidence that does not naturally exist in me, because I was raised by women who were taught that confidence in a woman is a warning sign. The cost was not visible until I noticed, one evening, that I had started doing the work-voice with my husband. He noticed before I did. He said: who am I talking to right now.",
      "I think a lot of us, in the diaspora, end up in this place without realizing how we got here. The original code-switch is one we did not choose. It was given to us in elementary school, when we figured out which version of our name to volunteer to the substitute teacher. It was given to us in middle school, when we figured out which lunch was acceptable to eat in the cafeteria. We were children doing complex social calculus, and we got very, very good at it. The skill is real. The skill also calcifies.",
      "By the time you are in your thirties, the code-switching has stopped being a skill and started being a condition. You do it without consent. You do it when you do not need to. You walk into a room of South Asian women you grew up with and you start, against your will, to file the edges off your American voice, even though everyone in the room has the same edges. You walk into a work dinner and you preemptively stop telling the story you were about to tell, because you have done the cost-benefit analysis on it, and the story does not survive the room.",
      "What is exhausting is not the switching. What is exhausting is the surveillance. There is a part of you, all the time, monitoring. Watching the room. Adjusting the dial. Asking: am I being too much. Am I being too little. Whose accent is this. Is this person going to ask where I am really from. If I make this joke will it land or will I have to explain it.",
      "I have started, in my thirties, to do something my twenty-five-year-old self would have considered suicidal. I have started letting the wrong voice come out in the wrong room. I bring my full Tamil-inflected English into a work dinner. I bring my flat American R's home to my mother. I let the joke that requires context land or not land. I am bad at it. I forget, sometimes, and switch back. But I am practicing.",
      "The practice is not about authenticity, which is a word that has been overused into meaninglessness. The practice is about cost. There is an energetic cost to running three operating systems on one nervous system, and I am, in my late thirties, no longer willing to pay it at the rate I once did. I would rather be slightly the wrong person in the room and have some energy left over for my actual life than be precisely the right person in the room and arrive at my own front door empty.",
      "I do not have a solution. I am not sure there is one. I think most of us in the diaspora are going to die a little code-switched, because the conditions that built the muscle are not going anywhere. What I am trying to do is notice. Notice when I am doing it. Notice when I do not have to. Notice, especially, the rooms in which I do not have to — the friends, the Keeper, the one cousin who knew me before any of this — and stay in those rooms longer. They are the rooms in which I get the original voice back, briefly, before Monday.",
    ],
  },
  {
    slug: "the-bedroom-got-quiet",
    title: "The Bedroom Got Quiet",
    subtitle:
      "On the long marriage that drifts, the silence that is not the same as peace, and the small return.",
    category: "Intimacy",
    readTime: 7,
    publishDate: "2026-01-22",
    author: "Saira Ahmed",
    excerpt:
      "We did not fight. We did not stop being kind. The bedroom just got quiet in a way I did not have language for, and I lived inside the quiet for almost three years before I admitted it to anyone.",
    body: [
      "We did not fight. That is the first thing I want to say, because the cultural script for what happened to us is a fight, and we did not have one. We did not stop being kind to each other. We did not stop sitting at the same table at dinner. We did not stop saying I love you at night, in the small voice you use when you are already half asleep.",
      "The bedroom just got quiet.",
      "I am going to use the word bedroom because that is the word, but what I mean is bigger than sex, and smaller. I mean the room itself. The room where we used to talk, after the lights went off, about whatever had happened that day, in the half-whispers of a marriage. The room got quiet first. Then the bed got quiet. Then a year went by, then another, and one Tuesday I realized that I could not remember the last time we had said anything in there that was not logistical.",
      "We had been married fourteen years. We had two children, a mortgage, a shared spreadsheet for the household, and a deep affection for each other that I would have, on any survey, rated as love. I would still rate it as love. I am not unclear about the love. I am clear that something separate from the love had gone quiet, and that the quiet was not the same as peace, and that I had been telling myself it was peace for almost three years.",
      "The cultural narrative on long marriages has two settings, and both of them are wrong. One says: passion fades, accept it, this is what mature love looks like. The other says: if the passion has faded, the marriage is dying, fix it immediately or get out. Neither was true for me. What I was inside was a quiet. The quiet was not hostile. The quiet was not even unhappy, exactly. The quiet was the sound of two people who had been very good at the operational parts of a life — kids, careers, parents, holidays — and had stopped, somewhere along the way, doing the part that was not operational. The part where you ask the other person what they are afraid of right now, and wait long enough for the real answer.",
      "I told my closest friend about it, finally, on a walk. She is a woman I have known for twenty years and I had not said any of this out loud, not even to myself, until I said it to her. I said: I think we have stopped finding each other. She said: when did you notice. I said: about three years ago. She said: that is a long time to not say it.",
      "It was. It is. The not-saying is the part I am most interested in now, because it is the part I think a lot of long marriages live inside without naming. We do not talk about the bedroom going quiet. We do not have the vocabulary for it in our communities. There is no auntie I could have called. There is no Sunday brunch in which any of the women I love would have, organically, brought it up. The whole subject sits, in our culture, in a kind of locked drawer, and the women who have the keys do not pass them down.",
      "What I did do, in those years, was build a small, quiet inner life that had nothing to do with my marriage. I read a lot. I started a long correspondence with an old friend in another city. None of this was a betrayal. All of it was a kind of relocation. I had moved my interesting self into a room my husband did not have a key to.",
      "What broke it open was small. We were on a holiday. The kids were asleep. We were on a balcony. He said, suddenly: I miss us. He said it the way you say something you have been saving for a long time. I started crying. He started crying. We sat there for two hours and said the things we had not been saying. That conversation did not fix it. What it did was name it. We had spent three years in a quiet that neither of us had said out loud, and the naming alone shifted something. The quiet became something we were now in together, instead of something we were each enduring privately.",
      "We are still working on it. We have been to a counselor. We have done the small things — a Friday night where the phones are off, a morning walk, the deliberate practice of asking each other actual questions — and the small things are not nothing, even though they sound like nothing. The bedroom is not what it was at twenty-eight. It will not be. I would not want it to be. What it is becoming is something different, slower, more accurate to who we are now, and that is, I am beginning to think, the actual long marriage. Not the early electricity. Not the operational middle. The slow, deliberate return after the quiet.",
      "If you are inside a quiet right now, I am not going to tell you what to do. I am going to tell you that the quiet is not, by itself, the end. The quiet is information. It is telling you that something has stopped happening that used to happen, and that you have not yet found the words to say it. The words will come. They came for us on a balcony. They will come for you somewhere — a kitchen, a car, a hospital waiting room — and your job, between now and then, is just to keep noticing the quiet, and to refuse, gently, to call it peace.",
    ],
  },
  {
    slug: "the-year-i-stopped-performing",
    title: "The Year I Stopped Performing",
    subtitle:
      "I had been the good daughter, the good employee, the good friend. I was thirty-six when I noticed I had not asked myself what I wanted in maybe a decade.",
    category: "Identity",
    readTime: 7,
    publishDate: "2026-02-14",
    author: "Meera Krishnan",
    excerpt:
      "I had been the good daughter, the good employee, the good friend, the good wife. I was thirty-six when I noticed, in a parking lot, that I had not asked myself what I wanted in maybe a decade. This is what happened next.",
    body: [
      "I was thirty-six when I noticed it. I was sitting in a parking lot, in a Trader Joe's, in a car that smelled faintly of my younger child's lunch, and I was crying for no reason I could articulate. The reason I was crying, eventually, when I let myself look at it, was that I had just spent forty minutes inside the store buying groceries for a dinner I did not want to host, for people I did not particularly like, in service of a tradition that had been my mother-in-law's idea, and I had said yes to it, the way I had said yes to almost everything for the previous decade, without asking myself first.",
      "I had been, in that decade, the good daughter, the good employee, the good friend, the good wife, the good daughter-in-law, the good mother. I had been so good, in so many directions, that I had not noticed the central fact, which was that I had not asked myself what I wanted in maybe ten years. Maybe more. Maybe ever.",
      "This is going to sound like a particular kind of essay. The let-me-find-myself essay. I want to be clear that what I am describing is not that. I did not go to Italy. I did not get a divorce. I did not blow up my life. The cultural script for what happens when a woman wakes up in her mid-thirties is dramatic in a way that is, frankly, available mostly to women without children and without aging parents and without a real job. The drama is a luxury. What I had to do was something more interior, and slower.",
      "What I had to do was stop performing. Not stop functioning. Functioning had to continue. The kids needed lunches. The work needed doing. My mother still needed her weekly call. The performance, though — the additional layer of being seen to be doing it well, of orienting myself by the praise — that I could put down. That, I came to understand, was costing me everything.",
      "The first thing I noticed, when I started paying attention, was how much of my day was performed. I performed enthusiasm at work meetings. I performed a particular warm laugh on the phone with my mother-in-law. I performed competence at the school drop-off, in front of other mothers I now suspect were also performing competence. I performed, even, the version of myself I sent into therapy. The therapist eventually noticed and called me on it. She said: you are very good at this. I want to know who you are when you are not so good at it.",
      "I did not have an answer.",
      "That was the moment I understood the depth of the problem. I had built so many performances, for so many audiences, that I had lost track of the original. I was not even sure there was an original anymore. I was a Russian doll of impressions, all the way down, and at the very center, where the smallest doll was supposed to be, there was a kind of quiet bewilderment. Not despair. Bewilderment.",
      "The work of that year — and it was a year, although it has continued past that year, because this kind of work does not end — was small and unglamorous. It was, mostly, about asking myself one question, multiple times a day, and tolerating the long pause that followed. The question was: what do you actually want right now. Not what should you want. Not what would be convenient. Not what would be approved of. What do you, the unobserved you, want.",
      "The first hundred times I asked it, I had no idea. The question would land in a kind of empty room. I had so thoroughly trained myself to want what I was supposed to want that the muscle for noticing my own preferences had atrophied. I would ask what I wanted for dinner and find that I had no opinion. I would ask what I wanted to do on a Saturday and find that the question itself felt indulgent.",
      "The wanting came back slowly. In small, almost humiliating ways. I wanted, it turned out, to take a bath in the middle of the afternoon. To read a novel nobody would consider serious. To not host the dinner. To stop being on the parents' WhatsApp group. None of these were profound. But each one was a vote, cast quietly, for the existence of an actual person underneath all the performances.",
      "I want to be honest about the cost. People noticed. My mother-in-law noticed. A friend who had relied on me to be the dependable yes-saying friend noticed. The price of stopping the performance is that some people preferred the performance, and they liked you better when you were running it, and when you stop they will, in subtle and not subtle ways, ask you to start again.",
      "What I have come to believe is that the performance was not a costume I had been wearing. It was a load-bearing wall. Taking it down was not a matter of removing a layer to reveal the real me underneath. The real me was not waiting, fully formed, behind the wall. The real me was a person I had to slowly, awkwardly, build, in the rubble, while continuing to make lunches.",
      "I am not done. I am thirty-eight now. I am still, on a regular basis, catching myself mid-performance. The difference is that I now notice. The noticing is the whole thing. The noticing is what I was not doing for the decade before, and the noticing is what makes the next decade different. I do not always stop the performance. Sometimes I am tired and I let it run. But I know, now, when I am running it, and that knowledge is the small flame I am trying to keep lit. It is not a personality. It is just an ember. It is enough.",
    ],
  },
];

export function generateStaticParams() {
  return ESSAYS.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const essay = ESSAYS.find((e) => e.slug === slug);
  if (!essay) return { title: "Ember · Hearth" };

  const title = `${essay.title} · Embers · Hearth`;
  const description = essay.excerpt;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: essay.publishDate,
      authors: [essay.author],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function EmberEssayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const essay = ESSAYS.find((e) => e.slug === slug);
  if (!essay) notFound();

  // Pick 3 related essays — same category first, then fill with others.
  const sameCategory = ESSAYS.filter(
    (e) => e.slug !== essay.slug && e.category === essay.category
  );
  const others = ESSAYS.filter(
    (e) => e.slug !== essay.slug && e.category !== essay.category
  );
  const related = [...sameCategory, ...others].slice(0, 3);

  return (
    <>
      <SharedNav />

      {/* HERO */}
      <section
        style={{
          padding: "80px 0 56px",
          borderBottom: "1px solid var(--rule-2)",
        }}
      >
        <div className="wrap">
          <Link
            href="/embers"
            style={{
              fontFamily: "var(--mono)",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--ink-3)",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 40,
            }}
          >
            &larr; All Embers
          </Link>

          <div style={{ maxWidth: 760 }}>
            <div
              className="eyebrow"
              style={{ marginBottom: 22, color: "var(--ember)" }}
            >
              <span className="dot" />
              {essay.category}
            </div>

            <h1
              style={{
                fontSize: "clamp(40px, 5.4vw, 76px)",
                lineHeight: 1.05,
                marginBottom: 24,
                maxWidth: "18ch",
              }}
            >
              {essay.title}
            </h1>

            <p
              style={{
                fontFamily: "var(--serif)",
                fontStyle: "italic",
                fontWeight: 320,
                fontSize: "clamp(20px, 2vw, 26px)",
                lineHeight: 1.45,
                color: "var(--ink-2)",
                maxWidth: "44ch",
                marginBottom: 36,
              }}
            >
              {essay.subtitle}
            </p>

            <div
              style={{
                display: "flex",
                gap: 18,
                flexWrap: "wrap",
                alignItems: "center",
                paddingTop: 22,
                borderTop: "1px solid var(--rule-2)",
                fontFamily: "var(--mono)",
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--ink-3)",
              }}
            >
              <span style={{ color: "var(--ink-2)" }}>{essay.author}</span>
              <span style={{ opacity: 0.5 }}>·</span>
              <span>{formatDate(essay.publishDate)}</span>
              <span style={{ opacity: 0.5 }}>·</span>
              <span>{essay.readTime} min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section style={{ padding: "72px 0 80px" }}>
        <div className="wrap">
          <article
            style={{
              maxWidth: 640,
              margin: "0 auto",
              fontFamily: "var(--serif)",
              fontWeight: 380,
              fontSize: 19.5,
              lineHeight: 1.78,
              color: "var(--ink)",
            }}
          >
            {essay.body.map((para, i) => (
              <p
                key={i}
                style={{
                  margin: "0 0 1.4em 0",
                  textIndent: i === 0 ? 0 : 0,
                }}
              >
                {i === 0 ? (
                  <>
                    <span
                      style={{
                        fontFamily: "var(--serif)",
                        fontSize: "3.4em",
                        fontWeight: 380,
                        lineHeight: 0.9,
                        float: "left",
                        marginRight: 10,
                        marginTop: 8,
                        marginBottom: -6,
                        color: "var(--ember)",
                      }}
                    >
                      {para.charAt(0)}
                    </span>
                    {para.slice(1)}
                  </>
                ) : (
                  para
                )}
              </p>
            ))}

            {/* End-of-essay attribution */}
            <div
              style={{
                marginTop: 56,
                paddingTop: 32,
                borderTop: "1px solid var(--rule-2)",
                fontFamily: "var(--mono)",
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--ink-3)",
                textAlign: "center",
              }}
            >
              Tended by {essay.author}
            </div>
          </article>
        </div>
      </section>

      {/* CTA — quiet, in-line */}
      <section
        style={{
          padding: "64px 0",
          background: "var(--paper-2)",
          borderTop: "1px solid var(--rule-2)",
          borderBottom: "1px solid var(--rule-2)",
        }}
      >
        <div className="wrap">
          <div
            style={{
              maxWidth: 640,
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "var(--serif)",
                fontStyle: "italic",
                fontSize: "clamp(22px, 2.4vw, 30px)",
                lineHeight: 1.4,
                color: "var(--ink)",
                marginBottom: 28,
                fontWeight: 360,
              }}
            >
              If this resonates, pull up a chair.
            </p>
            <Link href="/intake" className="btn btn-primary btn-lg">
              Start an intake <span className="arr">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* RELATED EMBERS */}
      <section style={{ padding: "80px 0 100px" }}>
        <div className="wrap">
          <div className="eyebrow" style={{ marginBottom: 32 }}>
            <span className="dot" />
            More Embers
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 24,
            }}
          >
            {related.map((e) => (
              <Link
                key={e.slug}
                href={`/embers/${e.slug}`}
                style={{
                  background: "var(--paper-2)",
                  border: "1px solid var(--rule)",
                  borderRadius: 8,
                  padding: 28,
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  textDecoration: "none",
                  color: "inherit",
                  transition: "transform .25s ease, box-shadow .25s ease",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 10,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--ember)",
                    }}
                  >
                    {e.category}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 10,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--ink-3)",
                    }}
                  >
                    {e.readTime} min read
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontWeight: 380,
                    fontSize: "clamp(20px, 1.8vw, 26px)",
                    lineHeight: 1.2,
                    color: "var(--ink)",
                  }}
                >
                  {e.title}
                </h3>

                <p
                  style={{
                    fontSize: 14.5,
                    lineHeight: 1.6,
                    color: "var(--ink-2)",
                    flex: 1,
                  }}
                >
                  {e.excerpt}
                </p>

                <div
                  style={{
                    borderTop: "1px solid var(--rule-2)",
                    paddingTop: 14,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: "var(--ink-3)",
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {e.author}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 11,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--ink)",
                      borderBottom: "1px solid var(--ink)",
                      paddingBottom: 2,
                    }}
                  >
                    Read &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SharedFooter />
    </>
  );
}
