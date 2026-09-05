# in the mind of a guy

A personal blog — essays, opinions, and a reading log. Built from the
"In the Mind of a Guy" design handoff: monospace type, white paper with faint
ruled lines, one royal-purple accent.

Fifteen static pages, no framework, no client-side JavaScript.

## Structure

    build.mjs        generator — templates + routing, no dependencies
    serve.mjs        tiny static preview server for dist/
    src/content.js   all content (essays, opinions, books, about)
    src/styles.css   design tokens and every component
    dist/            build output (gitignored)

## Routes

    /                                    home
    /opinions/                           opinions index
    /opinions/<slug>/                    opinion essay (4)
    /books/                              books ledger
    /deep-think/                         deep think index
    /deep-think/<slug>/                  long-form essay (6)
    /about/                              about

## Develop

    npm run dev      # build, then serve on http://localhost:4321

## Deploy

Pushed to `main`, GitHub Actions builds with `BASE_PATH=/inthemindofaguy`
and publishes `dist/` to GitHub Pages.

## Editing content

Everything lives in `src/content.js`. Each opinion takes `number`, `title`,
`dek`, `date`, `readTime`, `body[]` and an optional `inverted` flag (opinion 02
is the one dark page). Essays add `leadIn`, `marginNotes[]`, `footnotes[]`, and
`{ pullQuote }` blocks inside `body[]`. Books take `mark`, `tags[]`, `quote`
and `highlight`.

The About portrait is still the striped placeholder — drop a real photograph in
and replace the `.portrait` block.

## Publishing from Word

Drafts live in Google Drive, not in this repo, so they can be written from any
device: the folder **"in the mind of a guy — all texts"**, with a subfolder per
section (`opinions`, `deep think`, `books`).

Nothing there is published automatically. Publishing a draft means reading the
document, adding an entry to the right array in `src/content.js`, and pushing to
`main`; Actions rebuilds and deploys in about half a minute.

What has to be decided per post, beyond the prose itself: the slug (it becomes
the URL and should not change once published), the dek shown on the index page,
the date, the read time, and — for Deep Think — the lead-in phrase that opens
the first paragraph in Space Mono, plus any margin notes or pull quotes.
