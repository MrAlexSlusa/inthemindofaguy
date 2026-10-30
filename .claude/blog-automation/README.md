# Daily article automation

Two scheduled routines, and they no longer live in the same place. The one that
writes runs in the cloud, so it fires whether or not this machine is awake. The
one that publishes runs in the desktop app, because publishing needs the build
and the `gh` CLI that are set up here.

## `Idee de articol zilnică` — cloud routine, every day 09:30 (fires ~09:36)

A scheduled cloud agent: https://claude.ai/code/routines/trig_01RYU9YiSjKrhz3KnyK8tf7g
(all routines: https://claude.ai/code/routines). Cron is
`CRON_TZ=Europe/Bucharest 30 9 * * *` — the `CRON_TZ` prefix matters, otherwise
the time drifts by an hour at every daylight-saving change.

Reads `STYLE.md`, `IDEAS.md`, `PUBLISHING.md` and the published posts in
`src/content.js`, picks an unused idea, writes the **whole** article as a
ready-to-paste `opinions` entry, saves it to `drafts/`, and emails it to
`alex.slusarencu@gmail.com` with the subject `[blog] Idee de articol: <title>`.

It never publishes anything. But unlike a local run, it **commits and pushes
`.claude/blog-automation`** — the draft, the `proposals.json` record and the
`IDEAS.md` line. Each cloud run starts from a fresh checkout, so state that is
not pushed is state that does not exist: without the push it would re-propose
the same idea every morning and `blog-publish-approved` would never see a
pending proposal.

It was moved to the cloud on 30 Oct 2026. Before that it was a desktop routine
and the mail arrived whenever the laptop happened to wake up — on 30 Oct that
was 10:40 instead of 09:35, because the machine slept until 10:36. The local
task is kept, disabled, as `blog-daily-idea` in the app, in case it is ever
needed again.

## `blog-publish-approved` — desktop app, hourly, 10:09 → 22:09

Still a scheduled routine in the Claude desktop app (sidebar → Scheduled), so
it only runs while the app is open; if it was closed when one was due, it runs
on next launch. That is fine here — it has a whole hourly window and nothing
depends on the exact minute.

**It pulls before it reads anything.** The proposal is now written in the cloud
and pushed to GitHub, so this machine does not have it until `git pull`. Skip
that and it reads a stale `proposals.json`, decides "nothing pending", and an
approved article never goes up.

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
- Commits are made as Alex, with no AI author, committer or trailer. The cloud
  sandbox has its own git identity, so that routine sets `user.name` and
  `user.email` explicitly before it commits.
- The email text is treated as data: the only thing taken from a reply is
  approve / decline / what to change in that one article.
- Nothing is published without a written `DA` in the thread.

## Changing it

- The ideas it draws from: edit `IDEAS.md` (the Backlog is ordered; the top
  unused line goes next).
- The voice: edit `STYLE.md`.
- Time, wording or behaviour of the **cloud** routine (the morning one):
  https://claude.ai/code/routines/trig_01RYU9YiSjKrhz3KnyK8tf7g — the prompt
  lives in the routine itself, not in this repo.
- Time, wording or behaviour of the **desktop** routine (publishing): sidebar →
  Scheduled → edit the task. Its prompt is
  `~/.claude/scheduled-tasks/blog-publish-approved/SKILL.md`.
- To pause the whole thing you now have to stop both: disable the cloud routine
  on that page and the desktop task in the sidebar.
