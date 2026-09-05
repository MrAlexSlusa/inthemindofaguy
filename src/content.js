// All site content. Prose is the placeholder copy from the design prototype,
// written to the right length and voice — replace it with the real thing.

export const site = {
  title: 'In the mind of a guy',
  name: 'in the mind of a guy',
  year: '2026',
  email: 'hello@example.com'
};

export const home = {
  eyebrow: 'writing here since 2019 · 61 entries',
  title: 'In the mind of a guy',
  lede: "Everything I think about, written down before I lose it. Opinions I'll defend, books that changed the furniture in my head, and the long thoughts that need more than one sitting.",
  cards: [
    {
      label: '01 / opinions',
      title: 'Where I stand',
      dek: 'What I think today, dated, and where each position came from. Some of it has already changed.',
      count: '18 entries →',
      href: '/opinions/'
    },
    {
      label: '02 / books',
      title: "What I've been reading",
      dek: 'What I kept from each one, what I copied out, and a mark out of five that is only for me.',
      count: '41 logged →',
      href: '/books/'
    },
    {
      label: '03 / deep think',
      title: 'The long thoughts',
      dek: 'Essays that took months. Read them slowly or not at all.',
      count: '6 essays →',
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
  latest: [
    {
      date: '02 SEP',
      title: "Nobody is coming to tell you it's time",
      meta: 'deep think · 14 min',
      href: '/deep-think/nobody-is-coming-to-tell-you-its-time/'
    },
    {
      date: '24 AUG',
      title: 'Hobbies should stay bad',
      meta: 'opinion · 4 min',
      href: '/opinions/hobbies-should-stay-bad/'
    },
    {
      date: '11 AUG',
      title: 'Finished the one about tides',
      meta: 'books · ★★★★☆',
      href: '/books/'
    }
  ],
  pinned: {
    quote: "I write to find out what I think. If I already knew, I'd just say it.",
    attribution: '— written on the first day, 2019'
  }
};

export const opinionsIndex = {
  eyebrow: 'section 01',
  title: 'Opinions',
  intro: 'Each one is an essay, not a slogan: the position, where it came from, and what it costs to hold. Dated, because I expect to disagree with some of them later.',
  closing: '14 older opinions in the archive. Two I have since retracted, kept anyway.'
};

export const opinions = [
  {
    number: '01',
    slug: 'hobbies-should-stay-bad',
    title: 'Hobbies should stay bad.',
    // titleHtml carries the highlighter sweep from the design.
    titleHtml: 'Hobbies should <span class="mark">stay bad</span>.',
    dek: 'What happens the moment a private thing becomes a paid one.',
    date: 'aug 2026',
    readTime: '4 min read',
    eyebrow: '01 · aug 2026 · 4 min',
    inverted: false,
    body: [
      'The moment you get good at something, someone offers to pay you for it, and then it is work with extra steps. I have watched this happen to four friends. One took photographs of his own street for years, badly, on a camera he did not understand. Now he shoots weddings most Saturdays and has not photographed his street since 2021.',
      'What gets lost is not the time. It is the permission to be mediocre. An amateur can abandon a piece halfway through because it turned out boring. A professional has to finish it, and finishing things you have stopped caring about is the whole texture of a job. Once money is involved there is a standard, and a standard means comparison, and comparison is the exact thing I was trying to get away from when I sat down at the piano at eleven at night.',
      'So I play at the level of a determined nine-year-old and I intend to stay there. I have never had a lesson. I learn songs by finding the notes one at a time, which takes a fortnight and would horrify anyone who can actually play. There is no recital at the end. Nobody hears it except my neighbour, who has never once complained, which I choose to read as praise.',
      'The objection I get is that this is a waste — that with a teacher and a plan I would be good in two years. Probably true. But good at what, and for whom? The value of the hour is that it is the only hour of my week with no audience and no metric. If I got good, I would start recording it. If I recorded it, I would start posting it. I know myself well enough to see the whole road from here.',
      'Keep one thing you are bad at, deliberately, forever. Not as a hobby you are working up to being good at, which is just a job with a slow start. As a permanent amateur activity, protected from improvement. It is one of the last free things.'
    ]
  },
  {
    number: '02',
    slug: 'most-advice-is-autobiography',
    title: 'Most advice is autobiography.',
    dek: 'The map was drawn in a country that no longer exists.',
    date: 'jun 2026',
    readTime: '4 min read',
    eyebrow: '02 · jun 2026 · 4 min',
    inverted: true,
    body: [
      'When someone tells you how to live, they are almost always describing the problem they solved in their thirties. It is their map, not the terrain, and the map was drawn in a country that no longer exists.',
      'A man I worked for used to tell everyone to quit and go freelance. He said it to interns, to people with new mortgages, to a colleague whose wife was between jobs. He had done it himself in 2009 and it had worked, and he had built a whole personality on top of that fact. What he never mentioned was that his rent at the time was two hundred euros and he had no dependents and a brother with a spare room. The advice was not wrong. It was just autobiography with the costs edited out.',
      'This is not dishonesty. It is how memory works. We remember the decision and forget the conditions, because the decision felt like character and the conditions felt like weather. Ten years later the weather has vanished from the story entirely and all that is left is a brave man making a brave choice, offered to you as a method.',
      'The fix is one question: what did it cost you? Not what did you gain. What did you give up, who paid for it, and what would have happened if it had gone wrong? People answer this honestly far more often than you would expect, and the answer is where the actual information lives. Suddenly you are not receiving a rule, you are looking at a trade, and you can compare it to the trade in front of you.',
      'I try to apply it to myself before I open my mouth. Everything in this section is autobiography. The dates are on it for that reason: so you can see how old the map is before you try to walk it.'
    ]
  },
  {
    number: '03',
    slug: 'you-cannot-schedule-a-friendship',
    title: 'You cannot schedule a friendship.',
    dek: 'Why the good part only ever shows up in the hour nobody planned.',
    date: 'mar 2026',
    readTime: '4 min read',
    eyebrow: '03 · mar 2026 · 4 min',
    inverted: false,
    body: [
      'The good part happens in the loose hour nobody planned. Not the dinner. The forty minutes after the dinner, when everyone should have gone home and nobody has, and the conversation finally gets to the thing.',
      'For about three years I ran my friendships like a well-organised project. Recurring calendar events, a rotating list, a monthly call with a friend in another timezone. It looked responsible and it produced almost nothing. We would get on the call, report the headlines — job fine, flat fine, knee still bad — and hang up on schedule feeling like we had done the maintenance. I knew the facts of his life and nothing about how he was.',
      'What survived instead was inefficiency. Long walks with no destination. Bad films chosen badly. Sitting in a parked car outside somebody’s house for half an hour because the conversation was not finished. Driving someone to the airport, which is the single highest-yield activity in friendship and cannot be replaced by anything, because the conversation has a fixed end and everyone knows it. None of it goes in a calendar, because the value is precisely that it is unscheduled and therefore unpressured. Nobody has to perform being fine for a slot that ends at four.',
      'This is inconvenient, because loose hours do not appear on their own after about thirty. You have to make room without naming what the room is for, which feels like waste and is not. The friends I still have are the ones I am occasionally, pointlessly available to, and the ones who are that way with me. It is not a fair system. It rewards people who live nearby and punishes the ones who moved, which is why the friendships I have lost are mostly geographic rather than emotional.',
      'So I still schedule the dinner. I just stopped treating the dinner as the point. The point is whatever happens in the hour I did not plan for, and the only way to get that hour is to leave it empty on purpose.'
    ]
  },
  {
    number: '04',
    slug: 'nobody-needs-a-five-year-plan',
    title: 'Nobody needs a five-year plan.',
    dek: 'A direction and one honest next step, and what the plan charges you in the meantime.',
    date: 'jan 2026',
    readTime: '4 min read',
    eyebrow: '04 · jan 2026 · 4 min',
    inverted: false,
    body: [
      'A direction and a good next step will do. I have never once been where my five-year plan said I would be, and the plan mostly charged me the years in between as rent.',
      'I wrote my first one at 24, on a train, with a pen I had bought for the occasion. It had milestones. By year three I was supposed to be running a small team in a city I have still never lived in. What actually happened was that a project fell over, someone I barely knew offered me something adjacent and strange, and I said yes because I needed the money. That accident is the reason for most of what I do now.',
      'The problem with the plan was not that it was wrong. Plans are supposed to be wrong. The problem was what it did to the years while it was still alive. Every month that did not move a milestone felt like a month lost, including the months that were teaching me things the plan had no column for. I was measuring an unfamiliar life against a document written by someone with less information than me — my own younger self, on a train, showing off to nobody.',
      'What I use now is smaller and I trust it more. One sentence about direction, vague on purpose: work that involves writing, in a place with water, with people who explain things. Then one honest next step, the kind you can start this week. That is the whole system. The direction survives contact with reality because it does not specify the route, and the next step is short enough that I cannot be wrong about it for long.',
      'I am less sure of this one than the others, because I suspect it is easier to say with a stable income than without one, and I do not know how much of my confidence here is just luck wearing a theory.'
    ]
  }
];

export const booksIndex = {
  eyebrow: 'section 02',
  title: 'Books',
  intro: 'A record of what each book actually did to me, written the week I finished it: the argument, what I kept, and the lines I copied out. The marks are the only scores on this site.',
  readingNow: {
    label: 'reading now',
    line: 'Three at once, which is either curiosity or avoidance.',
    progress: 'memoir p.140 · tides p.62 · one restarted ×4'
  },
  closing: '36 earlier entries in the archive. Marks are for me, not for the author.'
};

export const books = [
  {
    number: '41',
    finished: 'finished 11 aug 26',
    title: 'A Book About Tides',
    attribution: 'Marguerite Hale · 2021 · 288pp · borrowed',
    mark: '★★★★☆',
    tags: ['nature', 'would re-read'],
    highlight: false,
    take: [
      'I picked this up expecting a science book and got something closer to a diary of one coastline. Hale spends forty pages on a single stretch of mud and it never drags, because she is actually writing about patience — the tide arrives whether or not you are ready, and the only skill available is reading it early.',
      'Made me care about the moon, which I did not expect at 34. Loses a mark for the last two chapters, which turn into policy.'
    ],
    quote: '&ldquo;Nothing on a shoreline is permanent except the schedule.&rdquo; — p.112, copied into my own notes twice'
  },
  {
    number: '40',
    finished: 'finished 02 aug 26',
    title: 'The Quiet Machine',
    attribution: 'Idris Bello · 2019 · 340pp · own it',
    mark: '★★★☆☆',
    tags: ['work', 'skim the middle'],
    highlight: false,
    take: [
      'Two excellent chapters carrying nine that could go. The argument — that most organisations run on quiet, uncredited maintenance rather than on decisions — is right, and chapter three proves it with a case study I have thought about every week since.',
      'Then it repeats itself in a suit. Read 1, 3 and 11 and give the rest away.'
    ],
    quote: '&ldquo;The people holding it together are rarely in the room where it is explained.&rdquo; — p.71'
  },
  {
    number: '39',
    finished: 'finished 19 jul 26 · fifth time',
    title: 'Letters to a Younger Brother',
    attribution: 'Anon. · 1974 · 96pp · falling apart',
    mark: '★★★★★',
    tags: ['changed my mind', 'annual'],
    highlight: true,
    take: [
      'Ninety-six pages of an older man explaining, without once giving instructions, how to be less afraid. I found it in a second-hand shop at 24 and it rearranged the furniture in my head — most of what shows up in the Deep Think section started as an argument with this book.',
      'I re-read it every July. It is shorter every time, which I assume means I am doing something right.'
    ],
    quote: '&ldquo;You are not late. You are simply not finished.&rdquo; — letter nine'
  },
  {
    number: '38',
    finished: 'finished 28 jun 26',
    title: 'Hours in the Garage',
    attribution: 'R. Ferreira · 2015 · 210pp · gift',
    mark: '★★★★☆',
    tags: ['memoir', 'fathers'],
    highlight: false,
    take: [
      'Read it because of my father and stayed for the sentences. Ferreira grew up handing tools to a man who never explained what he was building, and the book is honest about what that does to you: you become extremely good at anticipating and very bad at asking.',
      'The chapter on labelled drawers is the reason I finally started writing about mine.'
    ],
    quote: null
  },
  {
    number: '37',
    finished: 'abandoned p.90',
    title: 'Nine Arguments',
    attribution: 'P. Sandoval · 2023 · 402pp · library',
    mark: '★★☆☆☆',
    tags: ['gave up'],
    highlight: false,
    take: [
      'Right about almost everything and no fun about any of it. Every chapter wins its case and then keeps cross-examining, and by page ninety I noticed I agreed with the author and no longer wanted to.',
      'Logged anyway. Abandoning books is data.'
    ],
    quote: null
  }
];

export const deepIndex = {
  eyebrow: 'section 03',
  titleHtml: 'Deep&nbsp;Think',
  title: 'Deep Think',
  intro: 'Six essays, each of which took months. One page each, read slowly or not at all.'
};

export const essays = [
  {
    number: '06',
    slug: 'nobody-is-coming-to-tell-you-its-time',
    title: 'Nobody is coming to tell you it’s time',
    dek: 'On permission, and the fact that there is no tier of adults above you holding the schedule.',
    date: '02 sept 2026',
    readTime: '14 min',
    byline: '02 sept 2026 · 14 min · written over eight months',
    leadIn: 'I spent most of my twenties',
    body: [
      ' waiting for a signal. Not a big one. Just something official-looking that would confirm I was allowed to start: a promotion, a birthday, a person telling me I was ready. It never came, and for a long time I read that as evidence that I was not.',
      'The thing about permission is that it feels like a scarce resource, so you go looking for whoever holds it. At work that is a manager. At home it was, for me, my father, who labelled every drawer in his garage and had an answer for everything except what I should do with my life. When I finally asked him directly, in the garage, at 31, he said he had been waiting for me to stop asking.',
      'What I have come to think is that waiting is a strategy, and a rational one. It is cheap. If nobody told you to go, nobody can blame you for standing still, and standing still never shows up on the list of things you got wrong. The cost is invisible, which is exactly why it accumulates. Nobody sends you an invoice for the four years you spent nearly starting.',
      'It helps to notice how the waiting disguises itself. Mine came dressed as preparation. I read about the thing instead of doing the thing, and reading is close enough to work that it silences the part of you that would otherwise get restless. I have a folder from 2018 with forty-one saved articles about writing and nothing written. The folder was not laziness. It was a very sophisticated way of standing still while producing evidence of movement.',
      'The other disguise is the qualification. One more year of experience, one more certificate, one more round of savings, and then. Sometimes that is real — sometimes you genuinely cannot start yet, and pretending otherwise is how people get hurt. But the test is easy to run: ask what specifically will be different, and by when. If the answer has a date and a number, it is preparation. If the answer is a feeling, it is waiting.',
      { pullQuote: 'Permission is the only resource that becomes real the moment you stop asking for it.' },
      'I do not have a method. What I have is a habit: when I notice I am waiting, I write down who I think I am waiting for, by name. Half the time there is no name — the permission I want is coming from an institution, or from the general public, or from an imagined committee of people who are competent in a way I am not. The other half it is a real person who has not thought about my situation since the day we discussed it, and never will again, because they are busy waiting for their own signal from someone else.',
      'That is the part that took me longest to accept. The people I was waiting for were waiting too. My father, labelling drawers, was waiting for me to stop asking. My first manager, who I was certain had a plan for my career, told me years later that she had been improvising the entire time and had assumed I could tell. There is no tier of adults above you who have been issued the schedule. It goes all the way up and it is empty at the top.',
      'What replaces permission, in practice, is something much less satisfying: a small irreversible act. Not a leap. Sending the email. Booking the one lesson. Telling two people out loud what you intend to do, so that the version of you who wants to quietly drop it now has to actively lie. All of my genuine starts have looked like that, and none of them felt like a beginning at the time. They felt like Tuesdays.',
      'I keep circling this from different angles because the lesson does not take. I learn it, forget it, and then something small happens — a job wobbles, someone doubts me in passing — and I am standing in a doorway again, waiting for a voice that is not coming. Writing it down is how I shorten the gap between the waiting and the noticing. It used to be years. It is now closer to a fortnight, which I am counting as progress.'
    ],
    footnotes: [
      '† The garage conversation is reconstructed. He remembers saying it differently, and he is probably right.',
      '‡ An earlier version of this argument, from 2023, was mostly wrong.'
    ],
    marginNotes: [
      { label: 'margin', text: "Cut a whole section here about jobs. It was three pages of complaining wearing an argument's coat." },
      { label: 'still unsure', text: 'Is this true for people with fewer options than me? Probably not. Left in as a question.' }
    ]
  },
  {
    number: '05',
    slug: 'the-year-i-stopped-keeping-score',
    title: 'The year I stopped keeping score',
    dek: 'Nine years of a spreadsheet, then a green week I could not remember.',
    date: '18 may 2026',
    readTime: '12 min',
    byline: '18 may 2026 · 12 min',
    leadIn: 'For nine years I kept a spreadsheet',
    body: [
      ' of my own life. Not a diary — a scoreboard. Words written, kilometres run, books finished, days without a drink, hours of what I had decided to call deep work. Every Sunday evening I filled in the week and gave it a colour. Green weeks were good. Amber weeks needed a plan. I could tell you, to the day, when I had last been consistent.',
      'The spreadsheet was not stupid. It got me running, and it is the reason I finished anything at all in my twenties. What a number does is remove the argument: you either went out or you did not, and no amount of narrating yourself as a runner fills the cell. For a while that honesty was exactly what I needed, because I was very good at feeling like I was working.',
      'The trouble arrived slowly, the way it does. I started choosing activities because they were countable. A long walk with a friend became worse than a run, because the run had a number. Reading a difficult book for an hour and understanding two pages scored badly against skimming forty. I once cut a phone call short — my brother, no particular reason for calling — because it was eating into a block I had already coloured in. I remember noticing that and deciding it was discipline.',
      'What finally did it was a green week I could not remember. Perfect columns, every target hit, and no recollection of a single hour of it. I had optimised a week straight out of my own memory. I deleted the file that evening, which was less dramatic than it sounds, because I had four backups and restored it twice in the following month.',
      'What came back was harder to count and I am still not fluent in it. Aimless afternoons. Conversations that go long. A book I have read three times and cannot summarise. I have no evidence that any of it is productive and no way to defend it in a performance review. The honest summary is that I traded a life I could describe precisely for one I can only describe badly, and I have not once wanted the spreadsheet back — except on the Sunday evenings, which are still oddly empty.'
    ],
    footnotes: [],
    marginNotes: [
      { label: 'margin', text: 'Cut a section on which apps I used. Nobody needs the tooling; the tooling was never the point.' },
      { label: 'still unsure', text: 'Some people genuinely thrive on this and I do not think they are lying. Possibly I just kept score badly.' }
    ]
  },
  {
    number: '04',
    slug: 'my-fathers-tools',
    title: 'My father’s tools',
    dek: 'He labelled every drawer. I inherited the labels and none of the skill.',
    date: '11 mar 2026',
    readTime: '9 min',
    byline: '11 mar 2026 · 9 min',
    leadIn: 'My father labelled every drawer',
    body: [
      ' in his garage with a strip of masking tape and small capital letters. SPADE BITS. WASHERS M6. NOT M8. Thirty-one drawers, and the system did not change once in my entire childhood, which is how I can still find a washer in a building I have not lived in for twenty years.',
      'What he never did was explain. I handed him things. That was the job: stand close, watch the hand, guess which tool was wanted next, pass it before he asked. He would say nothing for an hour and then, at the end, hold the finished thing up and say quiet, which was his highest grade. I learned an enormous amount about anticipation in that garage and almost nothing about the work itself.',
      'It took me until my thirties to see what that had built. I am extremely good at reading a room, sensing what somebody needs before they say it, and arranging myself around it. I am very bad at asking a direct question, because in the garage a question meant you had not been watching properly. Those are the same skill viewed from two sides, and I did not choose either of them.',
      { pullQuote: 'The labels were the work. The tools were just what the labels were about.' },
      'When he sold the house I took four things: a hand plane, a spirit level with a crack in the glass, a pair of pliers with his initials filed into the handle, and about six feet of masking tape with the labels still on it. I have used the plane twice. I have kept the labels on a shelf, which is either sentimental or the most accurate inheritance available, since the labels were always the real work.',
      'He is 74 and still fixes things faster than I can find the video explaining how. Last year I asked him — directly, badly, over the phone — why he never talked me through any of it. He said he assumed I was watching, and that talking would have interrupted the watching. Which is, I think, the most honest thing either of us has said about the other, and it arrived thirty years late in both directions.'
    ],
    footnotes: [],
    marginNotes: [
      { label: 'margin', text: 'Written mostly in his garage, on a phone, standing up.' }
    ]
  },
  {
    number: '03',
    slug: 'learning-to-be-bored-again',
    title: 'Learning to be bored again',
    dek: 'Three months with nothing in my ears, and what turned up in the silence.',
    date: '02 nov 2025',
    readTime: '11 min',
    byline: '02 nov 2025 · 11 min',
    leadIn: 'I had not been bored since roughly 2012.',
    body: [
      ' Not once. Every queue, every walk to the shop, every four-minute wait for a kettle came with a podcast, and I would have told you this was efficient. Two hours a day of learning, stacked on top of hours that were otherwise dead. On paper it is unarguable.',
      'Then in July I forgot my headphones on a trip and walked around a city for six days in silence. It was not pleasant. The first two days I felt something close to withdrawal: a low irritation, a constant reaching for a pocket. By day four the reaching stopped, and what replaced it was the strangest part — I started finishing thoughts. Not new thoughts. Old ones, months old, that had been queued up somewhere waiting for a gap.',
      'So I kept going for three months. No audio while walking, cooking, or on the metro. The results, honestly, were mixed. I did not become calm. I did not have visions. What I got was a persistent, mildly uncomfortable stream of unfinished business: things I had been avoiding deciding, a conversation I owed someone, the fact that I had been unhappy at work for about a year without ever having the free minute in which to notice it.',
      'That is the part nobody sells you. The podcasts were not stealing my attention, they were doing me a favour — they were keeping the unfinished business at a manageable distance. Silence is not restful. Silence is where the invoices are.',
      'I have not stayed pure about it. I listen on long drives and while doing the washing up, because some hours genuinely are dead. But the walk to the shop stays empty now, and roughly once a fortnight something surfaces on it that I would not otherwise have had a slot for. Boredom is not a virtue. It is just the only room in the building where the awkward stuff is allowed to knock.'
    ],
    footnotes: [],
    marginNotes: [
      { label: 'margin', text: 'Three months is not long enough to claim anything. I am claiming it anyway.' },
      { label: 'note', text: 'The unhappy-at-work realisation cost me a job and I still count it as the profit.' }
    ]
  },
  {
    number: '02',
    slug: 'what-i-got-wrong-about-ambition',
    title: 'What I got wrong about ambition',
    dek: 'I thought it was a size. It turned out to be a direction.',
    date: '14 apr 2025',
    readTime: '16 min',
    byline: '14 apr 2025 · 16 min',
    leadIn: 'I used to think ambition was a size.',
    body: [
      ' Some people wanted big things and some people wanted small things, and which one you were said something permanent about you. I wanted big things, obviously, because I had read the same fifteen biographies as everybody else and they all describe the same shape: a person who wants more, earlier, than the people around them.',
      "Holding it that way has one useful property and one fatal one. The useful property is fuel — you will work absurd hours for a size, because the number is always visible and always short. The fatal one is that a size has no content. It does not tell you what to do on Tuesday. So you outsource the content to whatever is nearest: your employer's roadmap, your industry's idea of a good year, the promotion ladder, which is a machine specifically built to convert other people's ambition into someone else's product.",
      'I did that for six years and got most of what I aimed at. Then I sat in a review in which a man I did not like told me I was on track, and felt nothing at all — not disappointment, just the flat absence you get when a prize turns out to be someone else’s. I had been extremely ambitious and almost entirely unspecific, and unspecific ambition is just availability with good posture.',
      { pullQuote: 'Unspecific ambition is just availability with good posture.' },
      'What works better, for me, is a direction. Not a target, and definitely not a size: a sentence about the kind of work I want to be near. Mine is roughly work that involves writing, in a place with water, with people who explain things. It is unimpressive and unquotable, and it has the property a size never had — it can evaluate an offer. Most of the offers that flattered me at 28 fail it immediately.',
      'The uncomfortable part is that a direction is much harder to brag about, and I notice I still reach for the size when someone asks what I am doing. Ambition, held as a direction, looks from the outside like a lack of ambition. I have decided I can live with that, most days, and I write about it partly to keep deciding it.'
    ],
    footnotes: [],
    marginNotes: [
      { label: 'margin', text: 'The review is compressed. It was two meetings and I come off better here than I did there.' }
    ]
  },
  {
    number: '01',
    slug: 'on-leaving-cities',
    title: 'On leaving cities',
    dek: 'Four moves in nine years, and a short accounting of what each one cost.',
    date: '09 sept 2023',
    readTime: '12 min',
    byline: '09 sept 2023 · 12 min',
    leadIn: 'Four moves in nine years,',
    body: [
      ' two of them for work, one for a person, one for no defensible reason at all. I used to describe this as being open to opportunity. What follows is a more honest accounting, because the moves were not free and I have never once written down the bill.',
      'The obvious cost is logistics and it is the one everybody warns you about, so it is the one that hurts least. Boxes, deposits, a bank that will not believe you live where you live. Six weeks of low-grade administrative misery, then done. If moving only cost that, I would move again next year.',
      'The real cost is that friendship does not travel well and nobody tells you the exchange rate. A friendship in the same city runs on accident: you see each other because you are both there. Move, and the accident stops, and the friendship has to survive on intention alone — on someone deciding, repeatedly, on a Tuesday, to type a message with no occasion attached. Most do not. Not through any failure of affection; the mechanism is just gone. I have four friendships that survived four moves and I could not have predicted a single one of them in advance.',
      'The second cost is subtler: you become a person who is good at arriving. I know exactly how to build a life in a new city in three weeks — the café, the swimming pool, the route, the two people. It is a genuine skill and it quietly rewards leaving, because arriving is the part I am good at and year six is the part I am not. Twice now I have moved at exactly the point where staying would have started to ask something of me.',
      'I have been in the same flat for four years, which is my record. Nothing dramatic keeps me here. It is closer to the opposite: nothing dramatic is happening, and I am finally curious about what year six looks like when you do not leave before it.'
    ],
    footnotes: [],
    marginNotes: [
      { label: 'margin', text: 'Written after helping a friend move. Bad mood, possibly load-bearing.' }
    ]
  }
];

export const about = {
  eyebrow: 'section 04',
  title: "The guy, and what he's doing here.",
  portraitCaption: '[ portrait — drop image here ]',
  facts: [
    ['writing', 'since 2019'],
    ['based', 'Lisbon, mostly'],
    ['day job', 'research, then product'],
    ['email', '<a href="mailto:hello@example.com">hello@example.com</a>']
  ],
  body: [
    "I started this because I kept having the same conversation twice and wanted somewhere to put the second half of it. For two years it was a link I sent to four friends. It's now a link I send to strangers, which is a strange thing to get used to.",
    "Most of what's here is about the ordinary machinery of a life: the moves, the jobs, the people who stayed, the habits that turned out to be decisions in disguise. I'm not trying to be right in public. I'm trying to think clearly enough to notice when I've changed my mind.",
    "Nothing is sponsored, nothing is behind a wall, and I don't run analytics. If something here is useful, forward it to one person instead of sharing it with a hundred."
  ],
  note: {
    label: 'note',
    text: 'The archive keeps everything, including the posts I now find embarrassing. Deleting them felt like lying.'
  }
};
