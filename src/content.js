// All site content.
//
// The site is currently empty, waiting for real writing. Add posts by pushing
// entries into the arrays below — the index pages, home cards and prev/next
// chains all build themselves from these.
//
// Anything marked PLACEHOLDER is design filler, not a real claim, and should be
// replaced before it means anything.

export const site = {
  title: 'In the mind of a guy',
  name: 'in the mind of a guy',
  year: '2026',
  email: 'hello@example.com' // PLACEHOLDER
};

export const home = {
  eyebrow: 'a place to put things down',
  title: 'In the mind of a guy',
  lede: 'Nothing published yet.', // PLACEHOLDER — the standing description of the site
  cards: [
    {
      label: '01 / opinions',
      title: 'Where I stand',
      dek: 'What I think today, dated, and where each position came from.',
      href: '/opinions/'
    },
    {
      label: '02 / books',
      title: "What I've been reading",
      dek: 'What I kept from each one, what I copied out, and a mark out of five that is only for me.',
      href: '/books/'
    },
    {
      label: '03 / deep think',
      title: 'The long thoughts',
      dek: 'Essays that take months. Read them slowly or not at all.',
      href: '/deep-think/'
    },
    {
      label: '04 / about',
      title: 'Who is typing',
      dek: 'The short answer, then the long one, then how to reach me.',
      count: 'read →',
      href: '/about/'
    }
  ],
  // Newest few posts, shown on the home page. Built by hand so the order is
  // deliberate: { date, title, meta, href }.
  latest: [],
  // Set to { quote, attribution } to bring back the purple pinned card.
  pinned: null
};

export const opinionsIndex = {
  eyebrow: 'section 01',
  title: 'Opinions',
  intro: 'Each one is an essay, not a slogan: the position, where it came from, and what it costs to hold. Dated, because I expect to disagree with some of them later.',
  empty: 'Nothing here yet.',
  closing: null
};

// Each: { number, slug, title, titleHtml?, dek, date, readTime, eyebrow,
//          inverted?, body: [paragraphs] }
// Newest first. `inverted: true` puts the essay on the dark purple band.
export const opinions = [];

export const booksIndex = {
  eyebrow: 'section 02',
  title: 'Books',
  intro: 'A record of what each book actually did to me, written the week I finished it: the argument, what I kept, and the lines I copied out. The marks are the only scores on this site.',
  // Set to { label, line, progress } to bring back the dashed "reading now" card.
  readingNow: null,
  empty: 'Nothing logged yet.',
  closing: null
};

// Each: { number, finished, title, attribution, mark, tags: [], highlight?,
//          take: [paragraphs], quote? }
export const books = [];

export const deepIndex = {
  eyebrow: 'section 03',
  titleHtml: 'Deep&nbsp;Think',
  title: 'Deep Think',
  intro: 'Essays that take months. One page each, read slowly or not at all.',
  empty: 'Nothing here yet.'
};

// Each: { number, slug, title, dek, date, readTime, byline, leadIn,
//          body: [paragraphs, or { pullQuote }], footnotes: [], marginNotes: [{label,text}] }
// Newest first. `leadIn` is the opening phrase set in Space Mono.
export const essays = [];

export const about = {
  eyebrow: 'section 04',
  title: "The guy, and what he's doing here.",
  portraitCaption: '[ portrait — drop image here ]',
  // PLACEHOLDER — real details go here.
  facts: [
    ['writing', '—'],
    ['based', '—'],
    ['day job', '—'],
    ['email', '—']
  ],
  // PLACEHOLDER — replace with the real introduction.
  body: [
    'Still writing this part.'
  ],
  note: null
};
