# A Letter Back to You

A small, interactive reply site — an envelope you open, a letter you scroll
through, and an answer you tap to reveal. Built with Next.js, Tailwind CSS,
and Framer Motion.

## Editing the words

Everything you'll actually want to change lives in one file:

**`src/data/content.ts`**

- `herName` / `hisName` / `todayLabel` — names and the date shown in the signature.
- `envelope` — the text on the closed-envelope intro screen.
- `sections` — each numbered part of the letter (eyebrow label, title, paragraphs).
- `answerReveal` — the prompt button and the big reveal text/paragraph.
- `signature` — the closing line, name, date, and P.S.

Edit the strings in that file and the site updates everywhere they're used —
no need to touch any component.

## Running it locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000). Best viewed on a
larger screen, but it's fully responsive and works on mobile too.

## Structure

- `src/app/page.tsx` — assembles the page: petals background, envelope intro, sections, answer reveal, signature.
- `src/components/Envelope.tsx` — the closed-envelope intro and open interaction.
- `src/components/Petals.tsx` — the floating background petals.
- `src/components/LetterSection.tsx` — a single scroll-revealed section of the letter.
- `src/components/AnswerReveal.tsx` — the tap-to-reveal answer with confetti.
- `src/components/Signature.tsx` — the closing signature block.
- `src/data/content.ts` — all the text content (see above).

## Deploying

The easiest option is [Vercel](https://vercel.com/new) — connect the repo and
it deploys automatically. Any static/Node host that supports Next.js works
too.
