// Static site generator for "in the mind of a guy".
// No dependencies. Node 18+.  Usage: node build.mjs   (BASE_PATH=/repo-name for project Pages)

import { mkdir, writeFile, copyFile, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  site, home, opinionsIndex, opinions, booksIndex, books,
  deepIndex, essays, about
} from './src/content.js';

const root = dirname(fileURLToPath(import.meta.url));
const outDir = join(root, 'dist');

// Project Pages serve from /<repo>/ — every internal href goes through url().
const BASE = (process.env.BASE_PATH || '').replace(/\/$/, '');
const url = (p) => (p === '/' ? `${BASE}/` : `${BASE}${p}`);

const esc = (s) => String(s).replace(/&(?![a-zA-Z#][a-zA-Z0-9]*;)/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/* ---------------------------------------------------------------- shell */

const NAV = [
  ['home', '/'],
  ['opinions', '/opinions/'],
  ['books', '/books/'],
  ['deep think', '/deep-think/'],
  ['about', '/about/']
];

function layout({ title, description, crumb, navKey, body }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=IBM+Plex+Mono:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${url('/styles.css')}">
</head>
<body>
<a class="skip-link" href="#main">skip to content</a>
<div class="page">
  <div class="ruling" aria-hidden="true"></div>
  <div class="page-body">
    <header class="site-header">
      <div class="site-header__inner">
        <a class="masthead" href="${url('/')}">
          <span class="masthead__mark" aria-hidden="true"></span>
          <span class="masthead__name">${site.name}</span>
        </a>
        <nav class="site-nav" aria-label="Sections">
          ${NAV.map(([label, href]) => {
            const current = label === navKey ? ' aria-current="page"' : '';
            return `<a href="${url(href)}"${current}>${label}</a>`;
          }).join('\n          ')}
        </nav>
        <span class="crumb">${crumb}</span>
      </div>
    </header>
${body}
    <footer class="site-footer">
      <div class="site-footer__inner">
        <span>${site.name} · ${site.year}</span>
        <span class="site-footer__links">
          <a href="${url('/')}">home</a>
          <span>archive</span>
          <span>rss</span>
        </span>
      </div>
    </footer>
  </div>
</div>
</body>
</html>
`;
}

function pager({ prev, next, allLabel, allHref }) {
  const prevHtml = prev.href
    ? `<a class="pager__prev" href="${url(prev.href)}">${prev.label}</a>`
    : `<span class="pager__prev is-inert">${prev.label}</span>`;
  const nextHtml = next.href
    ? `<a class="pager__next" href="${url(next.href)}">${next.label}</a>`
    : `<span class="pager__next is-inert">${next.label}</span>`;
  return `    <nav class="pager" aria-label="More in this section">
      ${prevHtml}
      <a class="pager__all" href="${url(allHref)}">${allLabel}</a>
      ${nextHtml}
    </nav>`;
}

const marginRail = (notes) =>
  !notes.length ? '<aside class="rail"></aside>' : `<aside class="rail">
${notes.map((n) => `        <div class="margin-note">
          <p class="margin-note__label">${n.label}</p>
          <p class="margin-note__text">${n.text}</p>
        </div>`).join('\n')}
      </aside>`;

/* ---------------------------------------------------------------- pages */

function homePage() {
  const body = `    <main id="main" class="section section--home">
      <p class="eyebrow home-eyebrow">${home.eyebrow}</p>
      <h1 class="home-title">${home.title}<span class="caret" aria-hidden="true">_</span></h1>
      <p class="home-lede">${home.lede}</p>

      <div class="section-grid">
${home.cards.map((c) => `        <a class="section-card" href="${url(c.href)}">
          <p class="section-card__label">${c.label}</p>
          <h2 class="section-card__title">${c.title}</h2>
          <p class="section-card__dek">${c.dek}</p>
          <p class="section-card__count">${c.count}</p>
        </a>`).join('\n')}
      </div>

      <div class="home-latest">
        <div>
          <p class="latest-label">most recent</p>
${home.latest.map((r) => `          <a class="latest-row" href="${url(r.href)}">
            <span class="latest-row__date">${r.date}</span>
            <span>
              <h3 class="latest-row__title">${r.title}</h3>
              <p class="latest-row__meta">${r.meta}</p>
            </span>
          </a>`).join('\n')}
        </div>
        <aside class="pinned">
          <p class="pinned__label">pinned</p>
          <p class="pinned__quote">${home.pinned.quote}</p>
          <p class="pinned__attr">${home.pinned.attribution}</p>
        </aside>
      </div>
    </main>`;
  return layout({
    title: site.title,
    description: home.lede,
    crumb: 'home',
    navKey: 'home',
    body
  });
}

function opinionsIndexPage() {
  const body = `    <main id="main" class="section">
      <p class="eyebrow">${opinionsIndex.eyebrow}</p>
      <h1 class="section-title">${opinionsIndex.title}</h1>
      <p class="section-intro">${opinionsIndex.intro}</p>
${opinions.map((o) => `      <a class="opinion-row" href="${url(`/opinions/${o.slug}/`)}">
        <span class="opinion-row__num">${o.number}</span>
        <span>
          <h2 class="opinion-row__title">${o.title}</h2>
          <p class="opinion-row__dek">${o.dek}</p>
          <p class="opinion-row__meta">${o.date} · ${o.readTime}</p>
        </span>
      </a>`).join('\n')}
      <p class="closing-note">${opinionsIndex.closing}</p>
    </main>`;
  return layout({
    title: `Opinions — ${site.title}`,
    description: opinionsIndex.intro,
    crumb: '01 / opinions',
    navKey: 'opinions',
    body
  });
}

function opinionPage(o, i) {
  const prevItem = opinions[i - 1];
  const nextItem = opinions[i + 1];
  const inner = `      <div class="opinion-body">
        <p class="opinion-eyebrow">${o.eyebrow}</p>
        <h1 class="opinion-title">${o.titleHtml || o.title}</h1>
        <hr class="opinion-rule">
        <div class="opinion-prose">
${o.body.map((p) => `          <p>${p}</p>`).join('\n')}
        </div>
      </div>`;

  const band = o.inverted
    ? `    <div class="band-dark">\n${inner}\n    </div>`
    : `    <div>\n${inner}\n    </div>`;

  const body = `    <main id="main" class="article-page">
    <div class="article-top">
      <a class="back-link" href="${url('/opinions/')}">← opinions</a>
    </div>
${band}
${pager({
    prev: prevItem
      ? { label: `← ${prevItem.number} ${prevItem.title.replace(/\.$/, '')}`, href: `/opinions/${prevItem.slug}/` }
      : { label: '← nothing newer' },
    next: nextItem
      ? { label: `${nextItem.number} ${nextItem.title.replace(/\.$/, '')} →`, href: `/opinions/${nextItem.slug}/` }
      : { label: 'older ones in the archive' },
    allLabel: 'all opinions',
    allHref: '/opinions/'
  })}
    </main>`;

  return layout({
    title: `${o.title} — ${site.title}`,
    description: o.dek,
    crumb: `01 / opinions · ${o.number}`,
    navKey: 'opinions',
    body
  });
}

function booksPage() {
  const body = `    <main id="main" class="section">
      <div class="books-head">
        <div>
          <p class="eyebrow">${booksIndex.eyebrow}</p>
          <h1 class="section-title">${booksIndex.title}</h1>
          <p class="books-intro">${booksIndex.intro}</p>
        </div>
        <div class="reading-now">
          <p class="reading-now__label">${booksIndex.readingNow.label}</p>
          <p class="reading-now__line">${booksIndex.readingNow.line}</p>
          <p class="reading-now__progress">${booksIndex.readingNow.progress}</p>
        </div>
      </div>
      <div class="ledger">
${books.map((b) => `        <article class="book${b.highlight ? ' book--highlight' : ''}">
          <div>
            <p class="book__meta-top">${b.number} · ${b.finished}</p>
            <h2 class="book__title">${b.title}</h2>
            <p class="book__attribution">${b.attribution}</p>
            <div class="book__marks">
              <span class="book__stars" aria-label="${b.mark.split('★').length - 1} out of 5">${b.mark}</span>
${b.tags.map((t) => `              <span class="chip${b.highlight ? ' chip--purple' : ''}">${t}</span>`).join('\n')}
            </div>
          </div>
          <div class="book__take">
${b.take.map((p) => `            <p>${p}</p>`).join('\n')}
${b.quote ? `            <blockquote class="book__quote"><p>${b.quote}</p></blockquote>` : ''}
          </div>
        </article>`).join('\n')}
      </div>
      <p class="closing-note">${booksIndex.closing}</p>
    </main>`;
  return layout({
    title: `Books — ${site.title}`,
    description: booksIndex.intro,
    crumb: '02 / books',
    navKey: 'books',
    body
  });
}

function deepIndexPage() {
  const body = `    <main id="main" class="section">
      <p class="eyebrow">${deepIndex.eyebrow}</p>
      <h1 class="section-title">${deepIndex.titleHtml}</h1>
      <p class="section-intro">${deepIndex.intro}</p>
${essays.map((e, i) => `      <a class="deep-row" href="${url(`/deep-think/${e.slug}/`)}">
        <span class="deep-row__num">${e.number}</span>
        <span>
          <h2 class="deep-row__title">${e.title}</h2>
          <p class="deep-row__dek">${e.dek}</p>
          <p class="deep-row__meta">${e.date} · ${e.readTime}</p>
        </span>
        <span class="deep-row__cta"><span class="${i === 0 ? 'is-newest' : ''}">${i === 0 ? 'newest →' : 'read →'}</span></span>
      </a>`).join('\n')}
    </main>`;
  return layout({
    title: `Deep Think — ${site.title}`,
    description: deepIndex.intro,
    crumb: '03 / deep think',
    navKey: 'deep think',
    body
  });
}

function essayPage(e, i) {
  const prevItem = essays[i - 1];
  const nextItem = essays[i + 1];

  const paragraphs = e.body.map((block, idx) => {
    if (typeof block === 'object' && block.pullQuote) {
      return `        <blockquote class="pull-quote"><p>${block.pullQuote}</p></blockquote>`;
    }
    if (idx === 0) {
      return `        <p><span class="lead-in">${e.leadIn}</span>${block}</p>`;
    }
    return `        <p>${block}</p>`;
  }).join('\n');

  const footnotes = e.footnotes.length
    ? `        <div class="footnotes">
${e.footnotes.map((f) => `          <p>${f}</p>`).join('\n')}
        </div>`
    : '';

  const body = `    <main id="main" class="article-page">
    <div class="article-top article-top--essay">
      <a class="back-link" href="${url('/deep-think/')}">← deep think</a>
    </div>
    <div class="essay-head">
      <div>
        <p class="eyebrow">section 03 · deep think · essay ${e.number}</p>
        <h1 class="essay-title">${e.title}</h1>
        <p class="essay-byline">${e.byline}</p>
      </div>
    </div>
    <div class="essay-grid">
      <article class="essay-prose">
${paragraphs}
${footnotes}
      </article>
      ${marginRail(e.marginNotes)}
    </div>
${pager({
    prev: prevItem
      ? { label: `← ${prevItem.number} ${prevItem.title}`, href: `/deep-think/${prevItem.slug}/` }
      : { label: '← nothing newer' },
    next: nextItem
      ? { label: `${nextItem.number} ${nextItem.title} →`, href: `/deep-think/${nextItem.slug}/` }
      : { label: 'this is the first one' },
    allLabel: 'all six essays',
    allHref: '/deep-think/'
  })}
    </main>`;

  return layout({
    title: `${e.title} — ${site.title}`,
    description: e.dek,
    crumb: `03 / deep think · ${e.number}`,
    navKey: 'deep think',
    body
  });
}

function aboutPage() {
  const body = `    <main id="main" class="section">
      <div class="about-grid">
        <div>
          <div class="portrait">
            <span>${about.portraitCaption}</span>
          </div>
          <dl class="about-facts">
${about.facts.map(([k, v]) => `            <dt>${k}</dt><dd>${v}</dd>`).join('\n')}
          </dl>
        </div>
        <div>
          <p class="eyebrow">${about.eyebrow}</p>
          <h1 class="about-title">${about.title}</h1>
          <div class="about-prose">
${about.body.map((p) => `            <p>${p}</p>`).join('\n')}
          </div>
          <div class="about-note">
            <p class="about-note__label">${about.note.label}</p>
            <p class="about-note__text">${about.note.text}</p>
          </div>
        </div>
      </div>
    </main>`;
  return layout({
    title: `About — ${site.title}`,
    description: about.body[0],
    crumb: '04 / about',
    navKey: 'about',
    body
  });
}

/* ---------------------------------------------------------------- write */

async function emit(route, html) {
  const dir = route === '/' ? outDir : join(outDir, route);
  await mkdir(dir, { recursive: true });
  await writeFile(join(dir, 'index.html'), html, 'utf8');
  return route;
}

const routes = [];

await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });

routes.push(await emit('/', homePage()));
routes.push(await emit('/opinions', opinionsIndexPage()));
for (const [i, o] of opinions.entries()) {
  routes.push(await emit(`/opinions/${o.slug}`, opinionPage(o, i)));
}
routes.push(await emit('/books', booksPage()));
routes.push(await emit('/deep-think', deepIndexPage()));
for (const [i, e] of essays.entries()) {
  routes.push(await emit(`/deep-think/${e.slug}`, essayPage(e, i)));
}
routes.push(await emit('/about', aboutPage()));

await copyFile(join(root, 'src', 'styles.css'), join(outDir, 'styles.css'));
// Keep GitHub Pages from running the output through Jekyll.
await writeFile(join(outDir, '.nojekyll'), '', 'utf8');

console.log(`built ${routes.length} pages into dist/${BASE ? ` (base path "${BASE}")` : ''}`);
for (const r of routes) console.log('  ' + r);
