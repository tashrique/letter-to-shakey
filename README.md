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

## Setting the password

The whole site sits behind a password screen (`src/components/PasswordGate.tsx`).
To set it:

```bash
node scripts/hash-password.mjs "your password here"
```

Paste the printed hash into `passwordHash` in `src/data/auth.ts`. The
plaintext password never has to touch a file that gets committed.

**Important — read this before you rely on it:** this site is a static
export with no server, so the password check runs entirely in the visitor's
browser. It's a real deterrent against someone stumbling on the link or
guessing, but it is *not* real security — anyone who opens browser dev tools
can read the hash and brute-force it offline, or just run
`sessionStorage.setItem("letter-unlocked", "1")` in the console to skip the
gate outright. If you ever need it to actually be unbypassable, that
requires a server-side check (e.g. deploying to Vercel with an API route and
an httpOnly cookie) instead of this static-export approach.

Once unlocked, a visitor stays unlocked for that browser tab/session (stored
in `sessionStorage`) — reloading the page won't re-prompt them, but closing
the browser or opening it in a new/incognito window will.

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
- `src/components/PasswordGate.tsx` — the password screen (see above).
- `src/data/content.ts` — all the text content (see above).
- `src/data/auth.ts` — the password hash (see above).
- `scripts/hash-password.mjs` — generates the hash to paste into `auth.ts`.

## Deploying

The easiest option is [Vercel](https://vercel.com/new) — connect the repo and
it deploys automatically. Any static/Node host that supports Next.js works
too.
