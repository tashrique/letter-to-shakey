// All the words on this site live here. Nothing about layout or animation —
// just edit the strings below and the site updates everywhere it's used.

export const herName = "My Love"; // TODO: swap in her actual name
export const hisName = "Tashrique";
export const todayLabel = "August 9, 2026"; // TODO: update if you publish this on a different day

export const envelope = {
  eyebrow: "for you",
  title: "A letter back to you",
  subtitle:
    "You wrote to me, so I'm writing back — every word of it read, and every word of this one meant.",
  cta: "Open it",
};

export type ReplySection = {
  id: string;
  eyebrow: string;
  title: string;
  body: string[];
  /** optional short line rendered smaller, after the body, like a breath before moving on */
  aside?: string;
};

export const sections: ReplySection[] = [
  {
    id: "i-read-it",
    eyebrow: "01",
    title: "I read every word.",
    body: [
      "I read your letter the moment it reached me. Then I read it again, slower, because some things deserve to be read twice before you're allowed to respond to them.",
      "I felt all of it — the tiredness underneath your handwriting, the years of trying to seem okay when you weren't, the sentences you clearly didn't want to write but wrote anyway because you needed me to actually know. So before anything else: thank you for trusting me with it. That letter cost you something to send. I don't take that lightly.",
      "This is my reply. Not the fast kind. The kind I sat with for a while, rewrote more than once, and meant completely.",
    ],
  },
  {
    id: "understanding-girl",
    eyebrow: "02",
    title: "You never had to earn my patience by hiding your pain.",
    body: [
      "You wrote that you kept trying to be the “understanding girl” — mature, unbothered, easy — and that underneath all of that, you were quietly breaking. Out of everything in your letter, that's the part that stayed with me the longest.",
      "I'm sorry I let you feel like you had to carry that by yourself. I'm sorry there were moments I made it harder to be honest with me instead of easier. You should never have had to bottle anything up around me — not the resentment, not the hurt, not the things that felt “too small” to say out loud. They weren't small. Not to you, which means not to me either.",
      "I don't want the version of you that performs okay. I want the real one — even upset with me, even messy, even mid-sentence and not sure how to say it right. That was always the only version I wanted.",
    ],
  },
  {
    id: "trust",
    eyebrow: "03",
    title: "On trust.",
    body: [
      "You said it's hard to trust me right now, and I'm not going to argue with that or ask you to just get over it — that's not how trust works, and I know it. It isn't something you can hand back on request. It gets rebuilt in small, unremarkable, consistent moments, over time, by actually showing up the way I say I will.",
      "I want to be the one who does that. Patiently, without keeping score, for as long as it takes. Not because I'm trying to convince you of something, but because you deserve someone whose actions and words are finally the same thing.",
    ],
  },
  {
    id: "the-answer",
    eyebrow: "04",
    title: "You asked me directly. So here's my answer — in full.",
    body: [
      "You asked if I want to wait for you, and told me plainly: if I do, stay loyal; if I don't, let it go, and let you know your final decision.",
      "So I'm going to answer directly too — no vague words, nothing you have to read between the lines to find.",
      "There's no one else. There hasn't been, and there won't be. Not because nothing else exists in front of me — it does, more than you probably know — but because none of it is what I want. I've had every easy excuse to move on quickly, and I'm choosing, on purpose, over and over, not to.",
    ],
    aside: "keep reading — the rest of the answer is below.",
  },
  {
    id: "naseeb",
    eyebrow: "05",
    title: "I believe in your naseeb line more than you know.",
    body: [
      "You said you'd be waiting for your naseeb, with me in it. I believe that too. I don't think what we have was an accident, and I'm not in a hurry to let go of something that took this long, and this much of both of us, to become this real.",
      "You said I've loved you more than your own family ever has. I'm not saying that to feel proud of it — I'm saying I want to keep being that for you. Not just through this. Married, years from now, arguing about something small in a kitchen somewhere — that's the version of us I'm holding onto. I want to marry you one day. I'm not saying that to rush anything or to put pressure on you right now — I'm saying it because it's true, and you deserve to know exactly where my head is, not guess at it.",
    ],
  },
  {
    id: "not-nasty",
    eyebrow: "06",
    title: "This isn't ending. And even if it were, it was never going to be ugly.",
    body: [
      "You asked me to respect whatever we had, and to not let it turn into a nasty part of your life. I promise you that, completely, no matter what happens from here.",
      "But I don't think we're at an ending. I think we're at a pause — one we both need right now — and I'm not going to rush you out of it or make you feel guilty for needing the space and the time. Take what you need. I'll still be here on the other side of it, exactly where you left me.",
    ],
  },
  {
    id: "until-then",
    eyebrow: "07",
    title: "Until then.",
    body: [
      "I miss you too. More than fits in one letter, probably more than fits in this whole website.",
      "I love you. I'm not going anywhere. Whenever you're ready — I'm still yours.",
    ],
  },
];

export const answerReveal = {
  prompt: "Tap when you're ready.",
  reveal: "Yes. I want to wait for you.",
  follow:
    "I'll stay loyal. I'll wait for as long as it takes for you to be ready — not out of obligation, but because you're who I want. If anything in me ever changed, I promise you'd hear it from me first, before you'd ever have to wonder. But I don't expect that day to come, because what I feel for you hasn't moved an inch.",
};

export const signature = {
  line1: `Yours, still and always,`,
  name: hisName,
  date: todayLabel,
  ps: "P.S. — Whatever you decide, thank you for loving me the way you did. It was never wasted on me.",
};
