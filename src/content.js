// All site content.
//
// Add posts by pushing entries into the arrays below — the index pages, home
// cards and prev/next chains all build themselves from these.
//
// Anything marked PLACEHOLDER is design filler, not a real claim, and should be
// replaced before it means anything.

export const site = {
  title: 'In the mind of a guy',
  name: 'in the mind of a guy',
  year: '2026',
  email: 'contact.alexander.slusharencu@gmail.com'
};

export const home = {
  eyebrow: 'a place to put things down',
  title: 'In the mind of a guy',
  lede: 'One book down. More on the way.',
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
  latest: [
    {
      date: '17 Sep 2026',
      title: 'The Psychology of Money — Book review',
      meta: 'books · Morgan Housel',
      href: '/books/'
    },
    {
      date: '16 Sep 2026',
      title: 'Atomic Habits — Book review',
      meta: 'books · James Clear',
      href: '/books/'
    }
  ],
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
export const books = [
  {
    number: '02',
    finished: '17 Sep 2026',
    title: 'The Psychology of Money',
    attribution: 'Morgan Housel',
    mark: '★★★★☆',
    tags: ['money', 'investing', 'psychology'],
    take: [
      '“Getting money is one thing. Keeping it is another.” — Morgan Housel',
      'Money. Everybody likes money, wants to have it and dreams of spending more than they actually make. The question is: “Have you ever asked yourself <strong>the psychology behind every financially successful person</strong>?”. No? Well today we will analyze together “The Psychology of Money” to better understand it.',
      'Morgan Housel, the author of this book, is a former Wall Street Journal columnist and partner at Collaborative Fund specializing in behavioral finance and investing. His writing focuses on long-term thinking, risk management, and <u>the difference between getting wealthy and staying wealthy</u>.',
      'Firstly, let’s talk about the title because it is very interesting - nothing like we’ve ever seen before - “The Psychology of Money”. If you read the book you will see that the title can be split in two - psychology and money. What he describes as “the psychology” is the mentality of the wealthiest people that we know, built through decades of discipline, that helped them achieve the net worth they have right now (the examples will be soon). Also, the word “money” refers to the deep analysis of the stock market and S&amp;P 500 from the start of it until the present - let’s call it a “history of the market”.',
      'Secondly, all of his studies are also accompanied by examples from wealthy people like Ronald Reed, Richard Slocum and Warren Buffett - this shows that the saying “the perfect person at the perfect time” isn’t just a saying - it is a reality. He highlights the fact that <strong>compound interest</strong> and <strong>“staying rich vs getting rich”</strong> are what make Warren Buffett the person he is today - but let’s put it a little bit in perspective.',
      'Compound interest is a way where you deposit your money into an account and, by having an annual interest (compound interest at 22%), that money slowly grows and you get more and more. But the question is: what did Warren Buffett do differently than others to get to a net worth of over $148 billion? The simple answer is <strong>time</strong>. He started investing at 10 - that is the moment that started everything - $25.000 in and billions at 60 years old (yes, you read that right, 60). He didn’t become rich overnight - it was a slow road, but that 22% grew more and more until now. If he had invested the same amount but started at 30, he would only have got $11.9 million. What we can learn from this is that <u>20 years of investing can cost you billions</u>. Also, “staying rich vs getting rich” is the complement of investing - you need to learn how to stay rich, rather than learn how to get rich. Getting rich requires optimism, risk-taking, and confidence. Staying rich requires the exact opposite: humility, paranoia, and a healthy fear of losing everything. Morgan Housel notes that while thousands of people get rich through bold bets, those who stay rich do so because they focus on <strong>survival at all costs</strong>.',
      'Thirdly, he analyzes and talks a lot about the history of the S&amp;P 500 and how it changed during these years. He explains that the stock market is not just a math problem with a simple answer, but rather <u>a reflection of human emotions</u>. By looking back at major events like economic crises and crashes, Housel shows that the market always changes, but human behavior stays exactly the same. People constantly move between greed when prices go up and absolute panic when they drop. The author points out that the S&amp;P 500 is successful because it naturally replaces failing companies with stronger ones over time. However, ordinary investors often fail to make money because they do not have the patience to wait out the bad times. Ultimately, this historical analysis proves that long-term success in the market does not come from being incredibly smart, but from <strong>being emotionally stable enough to survive the difficult moments without panic selling</strong>.',
      'For today, that will be all. My personal opinion? I like the fact that he presents the people and their mentality but I don’t enjoy looking at so many graphs and stories about the 1920s and 1930s. I know that they are very important for the story and to show what he wants to say, but I believe that some chapters could be changed.',
      'In the end, I hope you enjoyed this article and I will leave you with my favourite quote from the book. Peace!'
    ],
    quote: '“Reputation is invaluable. Freedom and independence are invaluable. Family and friends are invaluable. Being loved by those who you want to love you is invaluable. Happiness is invaluable. And your best shot at keeping these things is knowing when it’s time to stop taking risks that might harm them. <em>Knowing when you have enough</em>.” —Morgan Housel, The Psychology of Money'
  },
  {
    number: '01',
    finished: '16 Sep 2026',
    title: 'Atomic Habits',
    attribution: 'James Clear',
    mark: '★★★★★',
    tags: ['habits', 'self-improvement', 'psychology'],
    take: [
      '“Habits are the compound interest of self-improvement.” — James Clear',
      'Have you ever asked yourself “How do I change my day-to-day habits?”. Well, Atomic Habits by James Clear is the best guide there is for the answer. A small disclaimer, this is not a book that says “You need to change that..”, it is a book that presents <strong>the psychology behind habits</strong> and what you can change everyday so that a new habit can slowly enter your life - but let’s start from the beginning.',
      '“Atomic Habits” by James Clear - even though this is not the full title, this is the most important part. James Clear is an American author, speaker, and expert focused on habits, decision-making, and continuous self-improvement. Beyond his writing, he reaches millions of readers weekly through his popular "3-2-1" email newsletter. His most popular book is this one, “Atomic Habits”, that has reached over <strong>30 million copies sold</strong> worldwide.',
      'Firstly, the title “Atomic Habits” is a metaphor on which the book is based - meaning <u>small changes (“atomical”), have the biggest impact there is on a person</u>. Besides the metaphor, in his book he states that the <strong>1%</strong> everybody ignores everyday, over the course of a year, has an impact that some of us could not even imagine. By applying a simple math on this fact, we can clearly see what it becomes over the course of a year.',
      'Better with 1% everyday: 1.01<sup>365</sup> = 37.78<br>Worse with 1% everyday: 0.99<sup>365</sup> = 0.03',
      '37.78 versus 0.03. It is clear as day that there is a very big difference between the two, and he emphasizes on this very much. To understand it better we can put it in the following perspective: let’s say that you want to read 200 pages over the course of 6 months. With 1% better everyday, you will have already read them by <strong>day 115 - 65 days ahead of schedule</strong>. With 1% worse everyday, by <strong>day 115</strong> you will have read <strong>76 pages</strong> and by <strong>day 180</strong> you will have read <strong>92 pages</strong> - this puts you <strong>108 pages (more than half) behind by the deadline.</strong>',
      'This is only a small demonstration of what <strong>“compound interest”</strong>, because this is the actual name of the phenomenon, does to you only in the course of 6 months.',
      'Secondly, the psychology behind a habit that he presented is made of three parts: <strong>identity</strong> (which is the central part - nucleus), <strong>processes</strong> (which is the intermediate part) and the <strong>outcomes</strong> (which is the outer layer). For a better explanation, let’s take losing 10 kg as the example. The outcome is losing 10 kg, the process is going to the gym and the identity is being fitter. Many of us, when we try to change a habit, work from the outside to inside. What that means is that firstly you want to lose 10kg by going to the gym to finally identify as a fitter person, but this is where everything goes wrong - many studies show that “wanting” to become something that you currently aren’t is the biggest “enemy” in changing your identity. This interferes with the mind that says “you can do it tomorrow” or “I will start from Monday” - this leads to not changing anything because you don’t yet identify as that person (you are not fit yet, only fit people go to the gym). Because of this, the first layer is not passed and the habit gets left behind. Instead, the better approach is to start from inside, from the nucleus, and working your way to the outside. <u>Saying “I want to lose 10 kg” is not better than saying “I am a person that goes to the gym”, but this tricks your brain.</u> With every opportunity, if you say that you go the gym, you will finally start going because you started identifying as that person - this leads to working out and finally losing the 10 kg you desired.',
      'To conclude, this book is not telling you what you have to do now to change your habits, but it presents you with the psychology behind the small changes that to the naked eye are not worth anything and that are helping you everyday change what you do in order to achieve your goals.',
      'This was just a small introduction to the book, of course you have to buy it if you want to learn more, but in my opinion this book is really well structured and has some key elements that you don’t hear everyday. To some of us they aren’t that important or we just “already know them” but if you study it a little bit more, you will be able to change your day-to-day life by adjusting small habits. This is also the reason I started this blog - I also wanted to write articles and talk about my opinion, but until I said “I like to write blogs” and I got the question “So what did you write?”, I didn’t start doing anything because it was hard <u>breaking that first layer</u>.',
      'In the end, I hope you enjoyed this article and I will leave you with my favourite quote from the book. Peace!'
    ],
    quote: '“When you fall in love with the process rather than the product, you don’t have to wait to give yourself permission to be happy. You can be satisfied anytime your system is running.” —James Clear, Atomic Habits'
  }
];

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
  // 'writing' tracks the category and date of the most recent post — update
  // it whenever a new post is published.
  facts: [
    ['writing', 'books · 17 Sep 2026'],
    ['based', 'Book, Life, Thoughts'],
    ['day job', 'Student'],
    ['email', 'contact.alexander.slusharencu@gmail.com']
  ],
  body: [
    'If you are here, then probably (I mean sure), you want to learn about the guy behind all of this. Well, here I am. My name is <strong>Alexandru</strong>, Alex how my friends know me, and I started this whole from a thought that was bugging me in the back of my head: “If you want to talk about the things you like, why don’t you start a blog where you can write about everything - <u>tech, books, thoughts, psychology and other things like that</u>”. This thought stayed in my head for a long time and now, on the 1st of September 2026, I write the first “article” of this blog - the about me section :) .',
    'If you want to see more of me talking, you can also follow me on TikTok and Instagram at @alex_slusha (thank you). That’s pretty much all about me, I hope you like what I write about here and if you do, make sure that you recommend it to your friends & family.'
  ],
  note: null
};
