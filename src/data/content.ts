// All the words on this site live here. Nothing about layout or animation —
// just edit the strings below and the site updates everywhere it's used.

export const herName = "Oishy Shake"; // TODO: swap in her actual name
export const hisName = "Tashrique";
export const todayLabel = "August 9, 2026"; // TODO: update if you publish this on a different day

export const envelope = {
  eyebrow: "for you",
  title: "A letter back to you",
  subtitle:
    "I read every word of it, multiple times, and I mean every one word of this.",
  cta: "Open it",
};

export const lockScreen = {
  eyebrow: "this letter is locked",
  title: "You know what to type.",
  subtitle: "Enter the password to open it.",
  placeholder: "Password",
  button: "Unlock",
  error: "That's not it. Try again.",
  cooldown: "Too many tries — wait a moment before trying again.",
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
      "I read your letter on the rickshaw the moment I dropped you off at your home. Then I read it three more times, when I went back home. I couldn't reply to you because I was leaving the next day, I sat down to write you a handwritten letter and deliver it to you after I left, but I couldn't. My hands were not moving. I put your letter in my wallet and read it multiple times again in the airport and also when I reached my new home.",
      "Oishy, I felt the tiredness in your handwriting. And I felt the sentences you clearly didn't want to write but wrote anyway because you needed me to actually know. So before I write anything more, thanks for letting your guard down and being vulnerable with me. That letter took you a lot of courage to write and hand me.",
      "This is my reply. I know I took a while. I wrote it more than once and rewrote because I wanted to get it right, and I mean all of it.",
    ],
  },
  {
    id: "understanding-girl",
    eyebrow: "02",
    title: "You never had to earn my patience by hiding your pain.",
    body: [
      "You told me you kept trying to be the “understanding girl”. You wanted to act mature, unbothered, easy and beyond all of that, you were quietly breaking. Out of everything in your letter, this made me think the the most.",
      "Im sorry I let it get to where you felt you had to carry that alone. I'm sorry there were times I made being honest with me harder instead of easier. You should never have to bottle anything up around me, or sit there thinking Tashrique will judge me if I say this. If it mattered enough to hurt you, it was never small. Little things, lame things, obvious things, I would never judge you oishy.",
      "I don't need the version of you that performs being okay. I want the real you, even when you're upset with me, even when you doesn't know how to say it right yet. I want to be a safe place for you. That's it.",    ],
  },
  {
    id: "trust",
    eyebrow: "03",
    title: "On trust.",
    body: [
      "You wrote it's hard to trust me right now. I understand totally. And its my fault. I will build the trust within us. It will be in small, unremarkable, consistent moments, over time, by actually doing and showing the way I say I will.",
      "I want to be the one who does that for you. However long it takes.",
    ],
  },
  {
    id: "the-answer",
    eyebrow: "04",
    title: "You asked me directly. So here's my answer.",
    body: [
      "You asked if I want to wait for you: if I do, stay loyal; if I don't, let it go, and let you know your final decision.",
      "So I'm going to answer directly too - ",
      "There's no one else. There hasn't been, and there won't be. It's not that nothing else exists around me — it does, more than you probably realize. It's that none of it is what I want. I've had every easy excuses and options to move on, and I keep choosing not to. On purpose. Every time.",
    ],
    aside: "keep reading — the rest of the answer is below.",
  },
  {
    id: "naseeb",
    eyebrow: "05",
    title: "I believe in our naseeb more than you know.",
    body: [
      "I believe very strongly in our naseeb to be with each other, Oishy. I don't think what we have was an accident, and I'm not in a hurry to let go of something that took this long, and this much of both of us, to become this deep.",
      "You said I've loved you more than your own family ever has. I don't repeat that to feel proud of it. Because I want to keep being that for you. Married, years from now, arguing about something small in a kitchen somewhere. That's the version of us I'm holding. I want to marry you one day, Oishy. I'm not saying that to rush you or put pressure on you. It's true, and you shouldn't have to guess where my mind is.",    ],
  },
  {
    id: "not-nasty",
    eyebrow: "06",
    title: "This isn't ending. And even if it were, it was never going to be ugly.",
    body: [
      "You asked me to respect whatever we had, and to not let it turn into a nasty part of your life. I promise you that, no matter what happens.",
      "But I don't think this is an ending. I think it's a pause, one we both need. Take the time. Take the space. I won't rush you out of it, and I won't make you feel guilty for needing it. I am happy that you feel more confident in yourself now. I am glad that you are more productive and doing the things in life without having to hold onto a string.",
    ],
  },
  {
    id: "until-then",
    eyebrow: "07",
    title: "Until then.",
    body: [
      "I miss you too. More than I can say or fit in one letter,  more than fits in this whole website.",
      "I love you. I'm not going anywhere. Whenever you're ready, I'm still yours.",
    ],
  },
];

export const answerReveal = {
  prompt: "Tap when you're ready.",
  reveal: "Yes. I want to wait for you.",
  follow:
  "I'll stay loyal, and I'll wait as long as you need. You're just who I want. If anything in me ever changed, you'd hear it from me first, before you ever had to wonder. But I don't see that day coming. What I feel for you hasn't moved an inch."};

export const signature = {
  line1: `Yours, still and always,`,
  name: hisName,
  date: todayLabel,
  ps: "P.S. — Whatever you decide, thank you for loving me the way you did. It was never wasted on me.",
};
