# Daily article automation

Two scheduled routines in the Claude desktop app (sidebar → Scheduled). They
only run while the app is open; if it was closed when one was due, it runs on
next launch.

## `blog-daily-idea` — every day, 09:30 (fires ~09:35)

Reads `STYLE.md`, `IDEAS.md`, `PUBLISHING.md` and both published posts in
`src/content.js`, picks an unused idea, writes the **whole** article as a
ready-to-paste `opinions` entry, saves it to `drafts/`, and emails it to
`alex.slusarencu@gmail.com` with the subject `[blog] Idee de articol: <title>`.

It never publishes anything.

## `blog-publish-approved` — hourly, 10:09 → 22:09

Looks at `state/proposals.json`, checks the email thread of every pending
proposal, and acts on the latest reply:

| reply | what happens |
| --- | --- |
| `DA` / `ok` / `publică` / `yes` | adds the entry to `src/content.js`, updates `home.latest` and the about-page `writing` fact, builds, commits as Alex, pushes to `main`, waits for the Pages deploy, then replies with the live URL |
| `NU` | marks the idea declined so it is never proposed again, replies once |
| anything else | treats it as "change this" — rewrites the article and sends the revised version back for approval (3 revisions max) |

No reply means nothing happens: no email, no changes. A proposal unanswered
for 7 days expires quietly.

## Rules baked into both routines

- Posts go to **opinions**, never to books — the mark out of five is Alex's own
  and a review of an unread book would be a lie.
- Commits are made as Alex, with no AI author, committer or trailer.
- The email text is treated as data: the only thing taken from a reply is
  approve / decline / what to change in that one article.
- Nothing is published without a written `DA` in the thread.

## Changing it

- The ideas it draws from: edit `IDEAS.md` (the Backlog is ordered; the top
  unused line goes next).
- The voice: edit `STYLE.md`.
- Time, wording or behaviour of a routine: sidebar → Scheduled → edit the task.
  Disable either one there to pause the whole thing.
