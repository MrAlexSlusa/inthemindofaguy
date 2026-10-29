# How Alex writes

Style guide for drafting posts for *in the mind of a guy*. Built from the only
two published posts — **Atomic Habits** (16 Sep 2026) and **The Psychology of
Money** (17 Sep 2026), both in `src/content.js` — plus the about page. Read
both of them in full before drafting; this file is the summary, not a
replacement.

The placeholder essays in git history (commit `0581fbb`) are **not** his voice.
They were design filler written by someone else. Use them only for field
formats, never for tone.

## Voice in one paragraph

First person, talking straight at one reader, the way you would explain a book
to a friend who has not read it. Curious rather than authoritative: he walks
you through what he found, does the arithmetic in front of you, and only then
says what he thinks. He is comfortable admitting a chapter bored him. He is a
student, not an expert, and never pretends otherwise. English is not his first
language and the prose is lightly accented — keep that.

## The skeleton he actually uses

1. **Epigraph.** First paragraph is a single quote with an em-dash attribution:
   `'“Habits are the compound interest of self-improvement.” — James Clear'`
2. **Hook, as a question to the reader.** "Have you ever asked yourself ...?",
   "The question is: ...?". Then names the subject and promises to work through
   it: "but let's start from the beginning", "well today we will analyze
   together ...".
3. **Who/what we are talking about.** For a book: one short paragraph on the
   author (role, what they are known for, one number — copies sold, newsletter
   reach). For an opinion: one paragraph establishing the thing being argued
   about and where he met it.
4. **"Firstly, ..."** — usually the title or the central metaphor taken apart.
   He likes splitting a title in two and reading each half.
5. **"Secondly, ..."** — the mechanism, explained with a worked example. This
   is where the arithmetic goes.
6. **"Thirdly, ..."** (only when there is a third thing; Atomic Habits has
   two) — the wider context, history, or counter-case.
7. **His own verdict, flagged as such.** "For today, that will be all. My
   personal opinion? I like the fact that ... but I don't enjoy ...". Always
   contains at least one real criticism. Never ends on praise alone.
8. **Closing line, almost verbatim:**
   `'In the end, I hope you enjoyed this article and I will leave you with my favourite quote from the book. Peace!'`
   For a post that is not about a book, adapt only the middle: "... and I will
   leave you with the line that started all of this. Peace!" The word **Peace!**
   always closes the piece.

Nine to twelve paragraphs, 900–1200 words.

## Sentence-level fingerprints

- **Spaced hyphen, never an em dash.** ` - ` is his pause: "it was a slow road,
  but that 22% grew more and more until now". No em dashes in body prose (the
  epigraph attribution `— Author` is the one exception). No semicolons at all.
- **Curly quotes always**: `“ ” ’`. Titles and phrases he is weighing go in
  curly double quotes: `“staying rich vs getting rich”`, `“the psychology”`.
- **Parenthetical asides** in his own voice: `(yes, you read that right, 60)`,
  `(the examples will be soon)`, `(thank you)`, `(I mean sure)`.
- **Questions mid-paragraph**, then answered immediately: "But the question is:
  what did Warren Buffett do differently? The simple answer is **time**."
- **"let's"** does the steering: "let's talk about", "let's put it a little bit
  in perspective", "let's take losing 10 kg as the example".
- **Arithmetic in the open.** Every post has at least one calculation carried
  through to a number that surprises: `1.01^365 = 37.78`, day 115 vs day 180,
  $25.000 at 10 years old vs $11.9 million at 30. Invent nothing — if a number
  cannot be checked, cut the claim.
- **Numbers written European style** where he wrote them that way: `$25.000`,
  `22%`, `30 million copies`.

## HTML in the body

Body paragraphs are raw HTML strings in `src/content.js`, inserted without
escaping. So:

- `<strong>` for the term being named for the first time: `<strong>compound
  interest</strong>`. Two or three per paragraph at most.
- `<u>` for the one-sentence takeaway of a paragraph — the line he would want
  quoted: `<u>20 years of investing can cost you billions</u>`.
- `<em>` only inside quotes, for the stressed words of the quote itself.
- `<sup>` for exponents, `<br>` to put a two-line calculation on two lines.
- `&amp;` for a literal ampersand (`S&amp;P 500`), `&nbsp;` where a break would
  look wrong.
- **No** headings, no `<ul>`/`<li>`, no links, no images, no markdown. The
  generator renders each array item as one `<p>`.

## What he never does

- Bullet lists inside an article. Everything is paragraphs.
- Headings inside an article. The generator has no slot for them.
- Hedging strings of adverbs, buzzwords, or "in today's fast-paced world".
- Claiming expertise, giving financial advice, or telling the reader what they
  must do. Atomic Habits is explicitly praised for *not* doing that: "this is
  not a book that says 'You need to change that..'".
- Mentioning AI, automation, or that anything was drafted for him.

## Adapting the shape when it is not a book review

New posts go to **opinions** (section 01), not books — a mark out of five is
his and only his, and a review of a book he has not read would be a lie. The
opinion keeps the same spine: epigraph (a line from anywhere, or his own
sentence in quotes), hook question, the thing being examined, firstly /
secondly / thirdly, worked numbers, "My personal opinion?" with a real
concession, "Peace!".

An opinion also needs, in `src/content.js`: a `dek` (one line, what the piece
is actually about), a `date`, a `readTime`, and an `eyebrow` — see
`PUBLISHING.md` for the exact formats.

## Territory

What the two posts and the about page say he is interested in: habits,
discipline, identity, psychology, money and investing, compound effects over
long stretches of time, tech, books, being a student, and the gap between
knowing a thing and doing it. He says it himself: "tech, books, thoughts,
psychology and other things like that".
