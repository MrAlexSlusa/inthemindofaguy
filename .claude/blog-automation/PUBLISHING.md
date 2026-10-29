# Publishing a post to the site

Mechanics only. Repo: `C:\Users\alexs\personal\IT\GItHub Repositories\inthemindofaguy`.
Everything is one file: `src/content.js`. Push to `main` and GitHub Actions
rebuilds and deploys in about half a minute.

Live site: <https://mralexslusa.github.io/inthemindofaguy/>

## 1. Add the entry

New posts from this automation are **opinions**. Prepend to the `opinions`
array in `src/content.js` (newest first):

```js
{
  number: '01',                       // next number, zero-padded; count the array
  slug: 'hobbies-should-stay-bad',    // lowercase, hyphens, becomes the URL, never changes
  title: 'Hobbies should stay bad.',  // sentence case, usually ends with a full stop
  // titleHtml is optional: wraps part of the title in the purple highlighter.
  titleHtml: 'Hobbies should <span class="mark">stay bad</span>.',
  dek: 'What happens the moment a private thing becomes a paid one.',
  date: 'oct 2026',                   // lowercase short month + year
  readTime: '5 min read',
  eyebrow: '01 · oct 2026 · 5 min',   // number · date · read time without "read"
  inverted: false,                    // see below
  body: [ /* one HTML string per paragraph */ ]
}
```

`inverted: true` puts an opinion on the dark purple band. Exactly one opinion
should have it — the one numbered `02`, as the design intends. Leave every
other entry `false`.

Read time: count the words and divide by 200, rounded to the nearest minute.

## 2. Update the three places that track "most recent post"

- **`home.latest`** — prepend `{ date: '29 Oct 2026', title: '<title without the
  trailing full stop>', meta: 'opinions · <two or three word subject>', href:
  '/opinions/<slug>/' }`. Date format here is `17 Sep 2026`, not the `oct 2026`
  used on the entry. Keep the list to the newest three.
- **`about.facts`** — set the `writing` row to `'opinions · 29 Oct 2026'`
  (category of the newest post + its date). This rule comes from the user's own
  instruction in the Drive "About me" doc.
- **`home.lede`** — only if it has become factually wrong. It currently reads
  "One book down. More on the way.", which an opinion does not contradict.
  Do not invent new marketing copy.

Nothing else needs touching: the index pages, home cards and prev/next chains
all build themselves from the arrays.

## 3. Build before committing

```
node build.mjs
```

It must exit 0 and `dist/opinions/<slug>/index.html` must exist and contain the
new title. Fix anything it reports; never commit a build that fails.

## 4. Commit as Alex, never as an AI

Hard rule from the user's global instructions:

- Check `git config user.name` and `git config user.email` first. They must
  resolve to the user (`MrAlexSlusa` / his address). If they do not, fix them
  before committing.
- **No `Co-Authored-By:` trailer. No `Claude-Session:` trailer. No AI name
  anywhere in the author, committer or message.** GitHub's contributor graph
  reads trailers too.
- Commit message in the style of the existing history: imperative, one line,
  no body needed. `git log --oneline` for examples — "Publish The Psychology of
  Money book review", "Rate The Psychology of Money 3.5/5".

```
git add src/content.js
git commit -m "Publish <title> opinion"
git push origin main
```

## 5. Confirm it actually deployed

`gh run list --limit 1` (or `gh run watch`) until the Pages workflow for that
commit succeeds. The post is then live at
`https://mralexslusa.github.io/inthemindofaguy/opinions/<slug>/`.

If the run fails, do not claim the post is live. Say what failed.

## Where drafts live

`.claude/blog-automation/drafts/<YYYY-MM-DD>-<slug>.json` holds the proposal as
a ready-to-paste entry plus the plain-text version that went out by email.
`.claude/blog-automation/state/proposals.json` is the ledger: one record per
proposal with its email thread id and status
(`pending` / `published` / `declined` / `revised`).
