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
      date: '6 Nov 2026',
      title: 'Books finished is the wrong number',
      meta: 'opinions · reading, books',
      href: '/opinions/books-finished-is-the-wrong-number/'
    },
    {
      date: '5 Nov 2026',
      title: 'Enough is a number you pick',
      meta: 'opinions · money, enough',
      href: '/opinions/enough-is-a-number-you-pick/'
    },
    {
      date: '4 Nov 2026',
      title: 'Motivation is a mood',
      meta: 'opinions · motivation, habits',
      href: '/opinions/motivation-is-a-mood/'
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
export const opinions = [
  {
    "number": "09",
    "slug": "books-finished-is-the-wrong-number",
    "title": "Books finished is the wrong number.",
    "titleHtml": "Books finished is the <span class=\"mark\">wrong number</span>.",
    "dek": "Twenty minutes a day is about nineteen books a year. Read at half the speed, it is nine and a half - and the same 122 hours.",
    "date": "nov 2026",
    "readTime": "6 min read",
    "eyebrow": "09 · nov 2026 · 6 min",
    "inverted": false,
    "body": [
      "“Some books are to be tasted, others to be swallowed, and some few to be chewed and digested.” — Francis Bacon",
      "Have you ever asked yourself which number you would rather have at the end of a year: how many books you finished, or how much of them you still remember? I finished the two books I reviewed here, “Atomic Habits” and “The Psychology of Money”, one day apart, on the 16th and the 17th of September. When I looked at those dates again this week, my first feeling was pride. My second feeling was a question I did not like so much: <strong>how much of the second one did I actually chew?</strong> Let’s start from the beginning.",
      "The thing I want to look at is the way reading gets counted. You have probably seen it: reading challenges with a goal of 52 books a year, one every week, people posting the pile of everything they read in December, apps that promise to make you read three times faster. I am not against any of it, I like seeing a big pile too (I mean sure, who doesn’t). But all of it measures the same thing - the number of last pages you turned. And Francis Bacon, who wrote the line at the top in an essay called “Of Studies” more than 400 years ago, already knew that books are not all the same kind of meal.",
      "Firstly, let’s split the phrase “books finished” in two, because I think the problem is in the second word. “Books” is fine, a book is a book. But “finished” only tells you where your eyes stopped, not what stayed. Woody Allen has a joke about this that I love: “I took a speed-reading course and read War and Peace in twenty minutes. It involves Russia.” He finished it. Technically, he can put it on the pile. <u>A finished book and a read book are not the same thing, and the count cannot see the difference.</u> In my article about studying, I wrote that when you read a page for the third time it feels familiar, and familiar feels like known. Reading fast for the count is the same trap, just with a bigger number at the end.",
      "Secondly, let’s do the arithmetic, because the number is less impressive than it sounds either way. In 2019 the psychologist <strong>Marc Brysbaert</strong> looked at 190 studies with almost 18.000 people and found that adults read non-fiction in English silently at about <strong>238 words per minute</strong> (and fiction at about 260). Let’s say you read 20 minutes every day, a page has 300 words and a book has 300 pages. These last two are my assumptions, books are very different.<br>Words per day: 20 × 238 = 4.760<br>Words per year: 4.760 × 365 = 1.737.400<br>Pages per year: 1.737.400 ÷ 300 = about 5.791<br>Books per year: 5.791 ÷ 300 = about 19",
      "Nineteen books from 20 minutes a day, which is really nice. Now let’s say you read the way I want to read a book like “The Psychology of Money”: you stop, you go back a page, you write one sentence after each chapter. Say that cuts your speed in half, to 119 words per minute. Then the same 20 minutes give you about <strong>9 and a half books</strong> a year instead of 19. On the pile, it looks like you lost half. But here is the thing nobody puts in the post: both readers spent exactly the same time, 7.300 minutes, about 122 hours. <u>The slow reader did not read less, they just counted less.</u> The only question is which of the two remembers more in December.",
      "And can you just get fast and keep everything? I wanted that to be true. In 2016, Keith Rayner and four other researchers published a long review called <strong>“So Much to Read, So Little Time”</strong>, about what we know of how reading works and whether speed reading helps. Their answer is not the one the apps want: there is a <strong>trade-off between speed and accuracy</strong>. You can go faster, but you understand less, because the limit is not how fast your eyes move, it is how fast you understand the words. Just for the arithmetic: a 300-page book is about 90.000 words, so at 238 words a minute it takes a bit more than six hours. At 1.000 words a minute it would take 90 minutes, and you would probably know that it involves Russia.",
      "Thirdly, I have to argue against myself a little, because slow is not always the right answer either. Bacon did not say every book should be chewed. He said some should only be tasted, some swallowed, and only “some few” chewed and digested. Reading a lot has its own value: you find out what you like, you get better at reading in general, and you meet the one book that deserves the slow read only because you read the ones that did not. If I read everything as slowly as I want to read Housel, I would probably never find the next book worth reading slowly.",
      "So this is what I am going to try, because I do not want this to stay only an idea. I will stop counting books and count two other things every month: the pages I read, and the sentences I wrote down after each chapter. Pages tell me if I am reading at all. Sentences tell me if anything stayed. And somewhere in the first chapter of a new book, I will decide if it is one to taste, to swallow or to chew - and read it at that speed, without feeling guilty about any of the three.",
      "For today, that will be all. My personal opinion? I really believe that the books that changed something for me are the ones I read slowly. But I have to be honest: “I read slowly on purpose” is also a very comfortable thing to say when you simply did not read much. Slow can be an excuse that sounds like a philosophy. And the count is not useless - a goal of one book a month is what makes some people open a book at all, and that is worth more than a perfect method nobody uses. Also, as a student, I do not always get to choose: sometimes there are 60 pages for tomorrow, and you swallow them. What I take from it is smaller: <strong>the number of books is a fine way to start, but a bad way to judge what you read</strong>.",
      "In the end, I hope you enjoyed this article and I will leave you with the line that started all of this. Peace!",
      "“Some books are to be tasted, others to be swallowed, and some few to be chewed and digested.” — Francis Bacon"
    ]
  },
  {
    "number": "08",
    "slug": "enough-is-a-number-you-pick",
    "title": "Enough is a number you pick.",
    "titleHtml": "Enough is a number <span class=\"mark\">you pick</span>.",
    "dek": "Two people get the same raises for six years. The one who decided what enough was saved 2.5 times more.",
    "date": "nov 2026",
    "readTime": "6 min read",
    "eyebrow": "08 · nov 2026 · 6 min",
    "inverted": false,
    "body": [
      "“The hardest financial skill is getting the goalpost to stop moving.” — Morgan Housel",
      "Have you ever asked yourself how much money would be enough for you? Not “more”, not “a lot”, an actual number. I tried, and the first thing I noticed is that I had never done it before. In the review of “The Psychology of Money” here, the quote I picked as my favourite ends with three words: <em>knowing when you have enough</em>. I liked it so much that I put it at the bottom of the article, and then I never asked myself what my enough is. So the question is: <strong>can you pick “enough” before you have much of anything?</strong> Let’s start from the beginning.",
      "The story Housel uses for this is one of my favourites in the whole book. The writers Kurt Vonnegut and Joseph Heller (the author of “Catch-22”) were at a party at the house of a billionaire on Shelter Island, near New York. Vonnegut asked Heller how it felt to know that their host may have made more money in one day than “Catch-22” had made in its whole history. Heller said he had something the host could never have. And when Vonnegut asked what that was, Heller answered: “The knowledge that I’ve got enough.” Vonnegut wrote it down as a short poem, published in The New Yorker in 2005, six years after Heller died.",
      "Firstly, let’s look at the word itself, because I think it is a strange one. “Enough” sounds like a full stop - you arrive, and the sentence ends. But for most people it is not a full stop, it is a direction. When you have 100, enough is 200. When you have 200, enough is 400. Housel says the hardest financial skill is getting the goalpost to stop moving, and the important word there is not “goalpost”, it is <strong>moving</strong>. <u>Enough is not a place you reach, it is a number you have to decide on, or it keeps running away from you.</u> Nobody hands it to you. If you do not pick it yourself, the people around you and the things you see every day will pick it for you.",
      "Secondly, let’s put some numbers on the moving goalpost, and I want to be clear that this is an example I built, not a prediction. Two people earn $1.000 a month and spend $900, so they both save $100, which is 10%. Every year, both of them get a 10% raise (a lot, I know, I picked it so the numbers stay easy). The first person lets the spending grow exactly as fast as the income, so he always saves 10%. The second person decides that $900 is close to enough, and only lets the spending grow by 3% a year.<br>Monthly income in year 6: $1.000 × 1.1<sup>5</sup> = about $1.611 for both<br>First person in year 6: spends $1.449, saves $161<br>Second person in year 6: spends $1.043, saves $567<br>Saved in total over the six years: <strong>$9.259</strong> against <strong>$22.728</strong>",
      "Read the last line twice. Same job, same raises, and the second person saved about <strong>2.5 times more</strong>. And he did not live like a monk either - his spending still went up by almost 16% in those six years. The difference is that the first person’s spending went up by 61%, exactly as much as the income, so after six years of raises he has nothing extra to show for them except a more expensive month. <u>The raise was the same for both of them. Only one of them actually got to keep it.</u> I left out taxes and prices going up, so read it as the shape of the thing, not as a forecast.",
      "Thirdly, the part of the chapter that is not about saving at all, and I think it is the real reason Housel cares about this word. He opens the chapter with Rajat Gupta, a man who grew up in India, became the head of McKinsey, one of the most famous consulting firms in the world, and sat on the board of Goldman Sachs. He was already rich by any normal measure. In 2012 he was convicted of insider trading and sentenced to two years in prison, for passing secret information from that board to a hedge fund manager. Housel’s line about it is one of the best in the book: “There is no reason to risk what you have and need for what you don’t have and don’t need.” <strong>Not knowing what enough is does not only cost you savings, sometimes it costs you everything you already had.</strong>",
      "So here is what I am going to do, because an article like this is worthless if it ends only in agreement. I am a student, so I do not have a salary to protect yet. But I do have a month, and a month has a number. I will write down what my month actually costs right now, and next to it one sentence: <strong>this is enough for this part of my life</strong>. Then, the next time I have more money than usual, a summer job or a birthday, I will look at that paper before I decide what the extra money is for. Not to forbid anything, just so the goalpost moves only when I move it.",
      "For today, that will be all. My personal opinion? I think the idea is right, but I have to be honest about who is saying it. It is very easy to talk about enough when you are young and do not have much to lose. People who struggle to pay their rent do not need a lecture about enough, they need more. And the research does not say money stops mattering either. In 2010, Daniel Kahneman and Angus Deaton found that how good people feel day to day stops rising at about $75.000 a year. Then in 2021, Matthew Killingsworth found that it keeps rising. In 2023 Killingsworth and Kahneman worked together, with Barbara Mellers, and found that the plateau is real only for the least happy people, at around $100.000, and for most people more money keeps helping. So enough is not “money does not matter”. What I take from it is smaller: <u>more can keep helping you, as long as you are the one who decides where the line is</u>.",
      "In the end, I hope you enjoyed this article and I will leave you with the line that started all of this. Peace!",
      "“The hardest financial skill is getting the goalpost to stop moving.” — Morgan Housel"
    ]
  },
  {
    "number": "07",
    "slug": "motivation-is-a-mood",
    "title": "Motivation is a mood.",
    "titleHtml": "Motivation is <span class=\"mark\">a mood</span>.",
    "dek": "In a simple model where motivation fades 10% a day, it carries you for 7 days out of 30. A system does not need to feel like anything.",
    "date": "nov 2026",
    "readTime": "5 min read",
    "eyebrow": "07 · nov 2026 · 5 min",
    "inverted": false,
    "body": [
      "“Motivation gets you to the first day. It has never once shown up on the eighth.”",
      "Have you ever watched a video at midnight that made you want to change your whole life, and then woken up the next morning as the exact same person? I have, more times than I would like to count. The feeling was real, it was strong, and it was gone before breakfast. So the question is: <strong>why does the thing that starts everything almost never finish anything?</strong> Let’s start from the beginning.",
      "The sentence I want to look at today is “I just need to get motivated.” I have said it about the gym, about studying, about this blog before it existed. It sounds like a plan, but it is really a waiting room. It means: I will do the thing once the feeling arrives. And if you read the article about Mondays here, you already know how much I trust plans that start with waiting.",
      "Firstly, let’s split the two words, the way I like to do with a title. <strong>Motivation</strong> is a feeling. It arrives by itself, usually at the worst time (midnight, after a video, in the shower), and it leaves by itself, without asking you. <strong>Discipline</strong> is a bit of a heavy word, so I prefer to call it a <strong>system</strong>: a decision you already made, about when and where you do the thing, so that on the day itself there is nothing left to decide. <u>Motivation is a mood. A system does not need to feel like anything.</u> That is the whole difference, and I think it is bigger than it looks.",
      "Secondly, let’s put numbers on it, and I want to be clear that this is an example I built, not a measurement. Nobody has measured how fast motivation fades, and it is surely different for everybody. Say on the day you decide, your motivation is at 100. Every day after that it loses 10% of what is left. And say you only show up while it is at 50 or more.<br>Day 1: 100, day 2: 90, day 3: 81, day 4: 72.9, day 5: 65.6, day 6: 59, day 7: 53.1<br>Day 8: 47.8, and you stop<br>That is <strong>7 days out of 30</strong>. Now take a boring system instead: the same time every day, with one rest day a week. In 30 days that is 4 rest days, so <strong>26 days out of 30</strong>. If I take the formula from the first article on this blog, 1.01<sup>7</sup> = 1.07 and 1.01<sup>26</sup> = 1.30. Neither is impressive after one month. But <u>one of them is still running on day 31, and the other one is waiting for the next video</u>.",
      "Here is why day 31 matters so much. In 2010, Phillippa Lally and her colleagues at University College London published a study called <strong>“How are habits formed”</strong>. 96 volunteers each picked one new daily behaviour, like drinking a glass of water with lunch or going for a run before dinner, and every day they wrote down how automatic it felt. The median time until it felt automatic was <strong>66 days</strong>, and the range went from 18 to 254. Now put that next to my example. On day 66, the motivation in my little model is at 0.11. Almost nothing. <u>The habit becomes easy exactly when the feeling that started it is long gone</u>, which means the feeling was never the thing that could carry you there.",
      "There was one more result in that study that I like a lot. Missing a single day did not really damage the process. The people who skipped once were not sent back to zero. A system can survive a bad day. Motivation cannot survive a boring week.",
      "Thirdly, and this is the part that changed how I see the word “discipline”. In 2012, Wilhelm Hofmann, Roy Baumeister and two colleagues published a study where adults in Germany carried a phone that beeped at random moments during the day for a week, and each time they reported if they were feeling a desire and if they were resisting it. You would expect the people with the most self-control to be the ones who resist the most. It was not like that. The people who scored high on self-control reported <strong>fewer temptations in the first place</strong>. They were not fighting harder, they had arranged their lives so there was less to fight. So <u>discipline is not willpower in the moment, it is decisions made before the moment</u>, and that is just another name for a system.",
      "So here is what I am going to do, because an article like this is worthless if it ends only in agreement. Today is a Wednesday, the middle of the week, not a fresh start of anything, which is exactly why it is a good day to set this up. I am writing on a piece of paper the time and the place for the thing I keep “waiting to feel like” doing. That is it. And the next time a burst of motivation shows up, I will not spend it doing more. I will spend it making the system easier for the days when I feel nothing - preparing the bag, clearing the desk, putting the book where I will see it.",
      "For today, that will be all. My personal opinion? I think the argument is right, but I don’t fully like how it usually gets told. “Discipline beats motivation” can turn very fast into a voice that shames you for being tired, and some days rest really is the correct answer. My 10% a day is invented, and the real curve is surely messier, with days where the feeling comes back for no reason. And I have to admit that motivation is not useless - without one late night of wanting it, nobody would ever sit down and design a system in the first place. What I take from it is smaller: <strong>let motivation start the thing, but never let it be the thing that has to show up</strong>.",
      "In the end, I hope you enjoyed this article and I will leave you with the line that started all of this. Peace!",
      "“Motivation gets you to the first day. It has never once shown up on the eighth.”"
    ]
  },
  {
    "number": "06",
    "slug": "i-am-a-person-who-studies",
    "title": "I am a person who studies.",
    "titleHtml": "I am a person <span class=\"mark\">who studies</span>.",
    "dek": "“I want good grades” gets checked a few times a year. “I am a person who studies” gets checked every evening, and that changes what one bad day costs.",
    "date": "nov 2026",
    "readTime": "6 min read",
    "eyebrow": "06 · nov 2026 · 6 min",
    "inverted": false,
    "body": [
      "“Every action you take is a vote for the type of person you wish to become.” — James Clear",
      "Have you ever asked yourself what you actually answer when somebody asks why you study? Mine was always the same, and I never thought about it: “I want good grades.” In the last two articles I tried to study with the book closed, then I put the phone in another room, and somewhere between those two experiments I noticed that the sentence underneath all of it was never the method. It was that answer. So the question is: <strong>what if the reason you give for studying is part of the reason it is so hard?</strong> Let’s start from the beginning.",
      "In the Atomic Habits review, back in September, I wrote about the three layers James Clear puts around every habit: the <strong>outcome</strong> on the outside, the <strong>process</strong> in the middle, and the <strong>identity</strong> in the centre. I explained it with the gym and the 10 kg, because that is the example everybody uses. But I am a student, and the place where I spend most of my hours is not the gym, it is the desk. And “I want good grades” is about the purest outcome sentence there is. So today I want to test the argument where it matters most for me.",
      "Firstly, let’s put the two sentences next to each other, the way I like to split a title. “I want good grades” starts with <strong>want</strong>, which means it is about something you do not have yet, and it ends with a thing that somebody else decides, on one day, a few times a year. “I am a person who studies” starts with <strong>I am</strong>, it is about today, and the only person who can check it is you. <u>An outcome gets checked on the day of the test. An identity gets checked every evening.</u> This is what Clear means when he says every action is a vote. Nobody becomes a person who studies in one night, but every night you either add a vote or you don’t.",
      "Secondly, let’s count the votes, because I think the number changes how a bad day feels. Today is Tuesday, the 3rd of November, and there are 59 days left until the end of the year.<br>Days from today to the 31st of December: 59<br>Weekdays in those 59 days: 43<br>Say I skip every Friday, and there are 8 Fridays left: 43 - 8 = 35 votes out of 43, so <strong>81%</strong><br>That is a very clear majority, and I did not need a perfect week once. Now look at what “I want good grades” does with the same two months. On all the evenings without a test it has nothing to say, so skipping one feels free. And on the day the grade comes, one bad result feels like a verdict on the whole thing. <u>The outcome sentence makes every normal evening worthless and every bad test final. The identity sentence makes every evening count and no single one decisive.</u>",
      "Thirdly, the part that made me take this seriously, because I wanted to know if it is more than a nice way of talking. In 2011, four psychologists, Christopher Bryan, Gregory Walton, Todd Rogers and Carol Dweck, published a study called <strong>“Motivating voter turnout by invoking the self”</strong>. Just before the 2008 presidential election, 88 registered voters in California filled in a short survey. For half of them the questions talked about <strong>voting</strong>. For the other half, the same questions talked about <strong>being a voter</strong>. That was the whole difference. Then the researchers checked the official records to see who really voted.<br>“Voting” group: 81.8% voted<br>“Being a voter” group: 95.5% voted<br>That is 13.7 points, from changing a verb into a noun. They repeated it in New Jersey in 2009 and got 79.0% against 89.9%, almost 11 points.",
      "Why would one word do that? I think it is because a verb is something you do on a day, and a noun is something you are. Skipping a verb costs you nothing, it is just one day. Skipping a noun costs you a little bit of who you said you were. Put it in school terms: “I want good grades” lets you skip tonight, because tonight does not decide the grade. <u>“I am a person who studies” does not let you skip tonight for free, because tonight is the only place that sentence can be true.</u>",
      "But there is a trap here, and I fell into it before. If “a person who studies” turns into “a person who sits at the desk for four hours”, then the identity is just the look of studying. On Sunday I wrote that the hours are not the learning, and that still stands. So the identity has to be defined by the real thing, not the costume. For me, a person who studies is a person who closes the book and tries to write down what is in it, even when the page comes out half empty.",
      "So here is what I am going to do, because an article like this is worthless if it ends only in agreement. On a piece of paper I am drawing 43 boxes, one for every weekday from today to the 31st of December. A box gets marked only if that evening I closed the book and tried to remember, no matter for how long and no matter how badly it went. I am not writing down any grade on that paper. At the end of the year I will count the boxes, and that number will tell me more about who I am as a student than anything on a report card.",
      "For today, that will be all. My personal opinion? I think the idea is right, and I can already feel the difference between the two sentences in my own head. But I have to be fair about the evidence. In 2016 a much bigger replication, by Alan Gerber and his colleagues, tried the same noun versus verb trick and found no real difference in turnout, so I would not build everything on one word in one survey. I also think “I am a person who studies” can feel like a small lie on the first day, when you have not done anything yet. And grades do matter - they decide schools and scholarships, and pretending they don’t would be dishonest. What I take from it is smaller: <strong>the grade is the scoreboard, but the person who studies is the one who plays</strong>.",
      "In the end, I hope you enjoyed this article and I will leave you with the line that started all of this. Peace!",
      "“Every action you take is a vote for the type of person you wish to become.” — James Clear"
    ]
  },
  {
    number: '05',
    slug: 'just-checking-is-never-one-minute',
    title: 'Just checking is never one minute.',
    titleHtml: 'Just checking is never <span class="mark">one minute</span>.',
    dek: 'A phone check takes two minutes on the screen. Getting back to what you were doing is the part nobody counts.',
    date: 'nov 2026',
    readTime: '5 min read',
    eyebrow: '05 · nov 2026 · 5 min',
    inverted: false,
    body: [
      '“The check takes one minute. Coming back takes the rest of the hour.”',
      'Have you ever asked yourself how long “just checking” your phone actually takes? Not the time on the screen - the whole thing, from the moment you pick it up to the moment you are really back in what you were doing. Yesterday I wrote about studying with the book closed, and while I was trying it, the thing that kept breaking the session was not the book. It was the phone, face down, half a meter away. So the question is: <strong>why is a thing that takes one minute so expensive?</strong> Let’s start from the beginning.',
      'Everybody knows the phone is distracting, that part is not news. What I want to look at is the sentence we use to make it fine: “I am just checking.” Just checking the messages, just checking if somebody answered, just checking the score. The word “just” is doing a lot of work there. It says the thing is small, so it costs nothing, so there is no decision to make. I have said it more times today than I would like to admit, and it is only morning.',
      'Firstly, let’s talk about why the hand goes to the phone in the first place, because I don’t think it is weakness. In the 1950s the psychologist <strong>B. F. Skinner</strong> studied how animals respond to rewards, and he found that the schedule that produced the most stubborn behaviour was not a reward every time. It was a reward after an unpredictable number of tries - what he called a <strong>variable ratio</strong> schedule. You press, nothing. You press, nothing. You press, something. And because you never know which press is the one, you keep pressing. This is exactly how a slot machine works, and it is exactly how a phone works. Most checks give you nothing, some give you a message you actually wanted, and <u>the nothing is what keeps you coming back, because the next one might be the good one</u>.',
      'That is why I call it a slot machine with homework on it. The same object holds the thing you are supposed to be doing and the thing designed to pull you away from it, and you carry both in the same pocket.',
      'Secondly, the real cost, which is not on the screen. In 2009 Sophie Leroy, a researcher who studies how people work, published a paper with a very honest title: <strong>“Why is it so hard to do my work?”</strong>. Her idea is called <strong>attention residue</strong>. When you switch from one task to another, part of your attention stays behind on the first one, and the next task gets done by a smaller version of you. So when you put the phone down after “just checking”, you are not fully back. Part of you is still thinking about the message, the video, the thing you did not answer.',
      'Now let’s put it a little bit in perspective, and I want to be clear that this is an example I built, not a measurement. Take a two-hour study session, 120 minutes. You check the phone every 15 minutes, which is 8 checks. Each check is 2 minutes on the screen. Then say it takes you 5 minutes to really get back to where you were (I picked 5 because it felt honest for me, nobody gave me that number).<br>Time on the phone: 8 × 2 = 16 minutes<br>Time getting back in: 8 × 5 = 40 minutes<br>Total: 56 minutes out of 120, so about <strong>47% of the session</strong><br>The phone’s screen time report would show you the 16. It would never show you the 40. <u>“Just checking” gets counted in minutes on the screen, but it gets paid in minutes off the work.</u> Five sessions like that in a week and you lost 280 minutes, more than four and a half hours, and you were “studying” the whole time.',
      'Thirdly, and this one surprised me the most. In 2017, Adrian Ward and his colleagues at the University of Texas at Austin published a study called <strong>“Brain Drain”</strong>. Almost 800 people did tests that need full concentration, and they were asked to put their phone either on the desk face down, in their pocket or bag, or in another room. The phones were silent, nobody checked anything. And still, the people whose phone was in another room did best on the tests, and the ones with the phone on the desk did worst. Their conclusion is that a phone does not even need to ring to take something from you - <u>part of your mind is busy not checking it</u>.',
      'So here is what I am going to do, because an article like this is worthless if it ends only in agreement. For the rest of the week, when I sit down to study, the phone goes in another room, not face down, not on silent, another room. And at the end of each session I write down one number: how many times I got up, or wanted to get up, to go and check it. Not to feel bad about it, but because I have never once counted, and I think the number will tell me more than any study.',
      'For today, that will be all. My personal opinion? I think the idea is right and I can feel it in my own evenings. But I have to be fair about the evidence. Skinner worked with rats and pigeons, not with students and group chats, and the slot machine comparison is a comparison, not a proof. Later researchers who tried to repeat the “Brain Drain” experiment have not always found the same effect, so I would not build everything on it. And the phone is also where my notes are, where my friends are, and where half of what I read for this blog comes from - it is not the enemy, and pretending it is would be a bit dramatic. What I take from it is smaller: <strong>“just checking” is never just one minute, and the cost is in the coming back</strong>.',
      'In the end, I hope you enjoyed this article and I will leave you with the line that started all of this. Peace!',
      '“The check takes one minute. Coming back takes the rest of the hour.”'
    ]
  },
  {
    number: '04',
    slug: 'studying-is-not-learning',
    title: 'Studying is not learning.',
    titleHtml: 'Studying is not <span class="mark">learning</span>.',
    dek: 'Students who read a text four times remembered the least a week later, and were the most sure they would remember it.',
    date: 'nov 2026',
    readTime: '5 min read',
    eyebrow: '04 · nov 2026 · 5 min',
    inverted: false,
    body: [
      '“The page you can recognise is not the page you can remember.”',
      'Have you ever asked yourself how much of what you studied last week you could write down right now, with the book closed? Not recognise if you saw it again - write down. I am a student, so this is not a theoretical question for me. Today is the 1st of November, the year has two months left, and for anyone in school that means the hours at the desk are about to go up. So the question is: <strong>are those hours turning into something that stays, or are they just hours?</strong> Let’s start from the beginning.',
      'The way most of us study, and the way I studied for years, is simple. You open the notes, you read them, and when you finish you read them again. A second time, a third time, maybe with a highlighter so it feels more serious. Nobody really teaches you this, you just do it. And it has one big advantage - every time you go through the page it feels easier, and easier feels exactly like progress.',
      'Firstly, let’s split the title in two, the way I like to do. <strong>“Studying”</strong> is something you do - it is measured in hours, in pages, in how tired you are at the end of the evening. <strong>“Learning”</strong> is something that happens to you - it is measured only later, when the book is closed and somebody asks you a question. The problem is that we track the first one and assume the second one comes with it. <u>Time at the desk is the input, not the result</u>, and the two can be very far apart without you noticing anything.',
      'Secondly, let’s look at an experiment that measured exactly that gap. In 2006, two psychologists from Washington University in St. Louis, Henry Roediger and Jeffrey Karpicke, published a study called <strong>“Test-Enhanced Learning”</strong>. Students got a short text to learn, and the groups spent their sessions differently. One group read it four times. Another group read it once and then, three times, put the text away and wrote down everything they could remember. Same text, same number of sessions. The only difference was reading versus trying to remember.',
      'Five minutes after the last session, the group that read it four times was ahead, which is what everybody would expect. A week later, it turned around.<br>Read it four times: <strong>40%</strong> of the ideas remembered after one week<br>Read it once, then tried to recall it three times: <strong>61%</strong> after one week<br>61 against 40 is 21 points, and 21 out of 40 means the second group remembered about <strong>52% more</strong>, with three fewer readings. Let’s put it a little bit in perspective. Say a subject has 10 chapters with 100 ideas each, 1.000 ideas in total. After a week, the first method leaves you with about 400 and the second with about 610. <u>That is 210 ideas, and the only thing that bought them was closing the book.</u>',
      'Thirdly, and this is the part that bothered me the most. The students were also asked how well they thought they would remember the text a week later. The group that read it four times gave the highest predictions. The group that kept testing itself gave the lowest. Exactly the opposite of what happened. I think this explains why everybody keeps re-reading: when you read a page for the third time it feels familiar, and <strong>familiar feels like known</strong>. But recognising something when it is in front of you and pulling it out of your head when it is not are two different skills, and the exam only asks for the second one.',
      'This is also why testing yourself feels so bad. You close the book, you try to remember, you get maybe half of it, and the half you did not get is right there, staring at you. Re-reading never shows you that empty half. <u>Re-reading feels good because it hides what you do not know, and testing feels bad because it shows it to you.</u> The feeling is wrong in both directions.',
      'So here is what I am going to do, because an article like this is worthless if it ends only in agreement. For the rest of November, every time I finish a chapter, I read it once, I close it, and I write on an empty page everything I can remember before I open it again. And the thing I will measure is not the hours (I already know I can sit at a desk). It is how much of that page I can fill a week later, with nothing in front of me. If the number is embarrassing at the beginning, then good - at least it is a real number.',
      'For today, that will be all. My personal opinion? I think the result is right, and it changed how I look at my own evenings at the desk. But I have to be fair: this was one study, with short texts and students in a lab, not a whole semester of real subjects, and I would not build everything on one paper. Re-reading is also not useless - the first reading is how the information gets in at all, and you cannot recall something you never read. And I will admit that testing yourself is slower and much more annoying, and on a tired evening I know which one I will want to do. What I take from it is smaller: <strong>the hours are not the learning, what you can write with the book closed is</strong>.',
      'In the end, I hope you enjoyed this article and I will leave you with the line that started all of this. Peace!',
      '“The page you can recognise is not the page you can remember.”'
    ]
  },
  {
    number: '03',
    slug: 'the-cost-of-starting-on-monday',
    title: 'The cost of starting on Monday.',
    titleHtml: 'The cost of starting <span class="mark">on Monday</span>.',
    dek: 'There are 9 Mondays left in 2026. Every one that gets promised something costs about four days, and a little of your trust in your own word.',
    date: 'oct 2026',
    readTime: '5 min read',
    eyebrow: '03 · oct 2026 · 5 min',
    inverted: false,
    body: [
      '“Monday is not a plan. It is a place to put one.”',
      'Have you ever asked yourself how many Mondays you have promised something to? Not done something on, just promised. I tried to count mine and I gave up, which is already an answer. Today is the last day of October, and there are exactly <strong>9 Mondays left in 2026</strong>, from the 2nd of November to the 28th of December. So the question is: <strong>why does a plan feel safer when it starts on a Monday, and what does that safety actually cost?</strong> Let’s start from the beginning.',
      'The sentence is “I will start on Monday”, and if you read this blog you have already met it twice. In the Atomic Habits review I wrote about the voice that says “I will start from Monday” and how it keeps you on the outside of a habit. Two days ago, in the article about the maths, it came back as the line that follows two missed days in a row. Two appearances in a blog this young is a lot for a sentence I never really looked at, so today I want to take it apart.',
      'Firstly, let’s split it in two, the way I like to do with a title. “I will start” is the decision. “On Monday” is the delay. The trick is that the first half gives you almost the whole good feeling of starting - you picked the thing, you said it out loud, maybe you even told someone. And then the second half quietly removes the only part that costs anything. <u>Saying “I will start on Monday” feels like a beginning, but it is a way to get the reward of a decision without paying for it.</u> By the time Monday comes, the good feeling is already spent, and what is left is just the work.',
      'Secondly, let’s put a number on the delay, because it is bigger than it looks. If you decide on a Tuesday, waiting for Monday costs you six days. If you decide on a Sunday, one. If you decide on a Monday and still say “next Monday” (I have done this), seven. Take the average over the seven days of the week and it comes to <strong>four days lost every single time</strong>. That is small once. But a year has 52 Mondays, and the sentence does not get used once - it gets used every time a week goes badly, which is exactly when you need it least.',
      'Now the bigger version, which is the one that is waiting for all of us right now. At the end of October, the most tempting Monday is not next week, it is January. “I will start in the new year.” Except the 1st of January 2027 is a Friday, so the new year, for anyone who wants a clean start, really means <strong>Monday the 4th of January</strong>.<br>From today, the 31st of October, to the 4th of January: 65 days<br>From Monday the 2nd of November to the 4th of January: 63 days, and 9 Mondays that go by unused<br>And if I take the same formula from the article two days ago and pretend I showed up on every one of those days, 1.01<sup>63</sup> = 1.87. Nobody would notice 1.87 on me. But <u>that is not the point of the 63 days, the point is that on the 4th of January I would be on day 64 instead of day 1</u>.',
      'There is also a cost that does not fit in a formula. Every Monday that was promised something and did not get it teaches you a small lesson: that your own promises are negotiable. Once is nothing. But after a few of them, the sentence “I will start on Monday” stops being a plan even to you - you hear yourself say it and part of you already knows it will not happen. I think this is the real price. Not the days, but <strong>the trust you have in your own word</strong>, spent four days at a time.',
      'Thirdly, and this is where I have to be fair to Monday. There is real research saying that fresh starts work. In 2014, Hengchen Dai, Katherine Milkman and Jason Riis published a study they called <strong>“The Fresh Start Effect”</strong>, and they found that people are more likely to go after their goals right after a landmark in time - the start of a week, of a month, of a year, a birthday. A new date draws a line between the old you and the new you, and that line helps. So Monday is not useless. <u>The problem is not the landmark, it is the empty space in front of it.</u> A fresh start is worth something if you arrive at it already moving, and almost nothing if you are only arriving at it to begin.',
      'So here is what I am going to do, because an article like this is worthless if it ends only in agreement. Today is a Saturday, which is the worst possible day to start anything according to my own instincts. That is exactly why I will start today, with the smallest version of the thing - ten minutes, nothing more - and let Monday be the third day instead of the first. If the fresh start effect is real, it should work even better on someone who already has two days behind him. And if I miss one, the rule from last time still stands: never miss twice.',
      'For today, that will be all. My personal opinion? I think “start now” is right, but I also think it is a bit too easy to say, and I do not fully trust advice that sounds that clean. Sometimes waiting really is the correct choice - if you need running shoes, Monday is a reasonable day to have bought them by, and nobody should feel guilty for planning. And I have to admit something: while writing this, on a Saturday, part of me was already thinking that Monday would be a nicer day to start. So I am not above the sentence. What I believe is smaller: <strong>Monday can be the day you continue, it just should not be the day you begin</strong>.',
      'In the end, I hope you enjoyed this article and I will leave you with the line that started all of this. Peace!',
      '“Monday is not a plan. It is a place to put one.”'
    ]
  },
  {
    number: '02',
    slug: 'saving-at-eighteen-is-not-about-the-money',
    title: 'Saving at eighteen is not about the money.',
    titleHtml: 'Saving at eighteen is not <span class="mark">about the money</span>.',
    dek: 'The same $100 a month costs almost nothing at eighteen and a lot at thirty. What the early years really buy is the habit.',
    date: 'oct 2026',
    readTime: '5 min read',
    eyebrow: '02 · oct 2026 · 5 min',
    inverted: true,
    body: [
      '“The deposit is cheap. The habit is what you are really buying.”',
      'Have you ever asked yourself why everybody older than you says “start saving early”, and why it never sounds like advice you can use? I think I know why. It is always said as if it were a rule about money, and at eighteen you do not have money. So the question is: <strong>if I have almost nothing to save, what exactly is early supposed to give me?</strong> Let’s start from the beginning, with the numbers, because they are the part nobody argues with.',
      'Here is the setup, and I want to be clear that it is an example I built, not a prediction. Two people save the same thing: $1.200 a year, so $100 a month. They both earn 7% a year on it, and for simplicity the interest is added once per year, at the end of the year. The 7% is an assumption I picked for the exercise, nobody promises it, and real returns jump around from year to year. Both stop at 65. The only difference is when they begin. One starts at 18, the other at 30.',
      'Firstly, let’s see what each of them ends up with.<br>Starting at 18, so 47 years of deposits: $1.200 put in 47 times is $56.400, and it grows to <strong>$395.069</strong><br>Starting at 30, so 35 years of deposits: $1.200 put in 35 times is $42.000, and it grows to <strong>$165.884</strong><br>Look at the gap between the two lists. The person who started at 18 put in $14.400 more and finished with $229.185 more. <u>Twelve extra years of saving cost $14.400 and returned $229.185</u>, which is almost 16 dollars out for every dollar in. Those twelve years were not special. They were just the ones that had the longest time left to grow.',
      'Secondly, here is the version that surprised me more. Take a third person who starts at 18 like the first one, but gets tired and stops after only 10 years. Total deposited: $12.000. After that, not one more dollar goes in, the money just sits there at the same 7% until 65.<br>$1.200 a year for 10 years at 7% = $16.580<br>$16.580 left alone for 37 more years = <strong>$202.664</strong><br>Read that twice. $12.000 put in before 28 beats $42.000 put in between 30 and 65. The person who deposited less than a third of the money finished <u>with more, because the money had a head start the other one can never buy back</u>.',
      'Now, notice what that does to the usual advice. If it were only about the money, the conclusion would be “earn more, then save more”, and you would wait until you had a salary worth saving from. The arithmetic says the opposite. The first ten years are the ones that carry the whole result, and in those years the deposit is smallest and the sacrifice is smallest too. <strong>$100 a month at eighteen is a few nights out. $100 a month at thirty is a bill you notice.</strong> The same amount, the same discipline, a completely different price.',
      'Thirdly, and this is why I put “not about the money” in the title. If the money were the point, an 18 year old saving $100 a month would be doing something almost pointless, since $16.580 after ten years is not going to change anybody’s life. What it does change is the person. It is the first time you set up something that works while you are not thinking about it, and you find out that you can live fine without that $100. I wrote in the Atomic Habits review that identity sits in the middle of everything. “I am a person who saves” is a sentence you can only say honestly after you have done it for a while, and <u>the cheapest moment to start building that sentence is when the habit costs you almost nothing</u>.',
      'I want to be honest about what this does not show. The 7% is not guaranteed, and some years it will be negative. Prices go up, so $395.069 in 47 years will not buy what it buys today, and I did not adjust for that. I also ignored taxes and fees, and I ignored the biggest thing of all - that at eighteen you may truly not have $100 a month, and nothing I wrote changes that. So read the numbers as the shape of the thing, not as a forecast. The shape is what I trust: the early years weigh more than the late ones, and they weigh most exactly when the amount is smallest.',
      'For today, that will be all. My personal opinion? I think the argument is right and I still do not fully like how it gets told. “Start early” is true, but it quietly shames everybody who is thirty, or forty, and did not. They are not lost - the 30 year old above still finishes with $165.884, and the next best time to start is today. And I will also admit that I find the 18 versus 30 comparison a bit too tidy, because nobody lives that cleanly for 47 years. What I take from it is smaller and more useful than the headline: if the money is going to be small anyway, then the real thing to protect in the beginning is the <strong>habit</strong>, and the habit should be cheap enough that nothing talks you out of it.',
      'In the end, I hope you enjoyed this article and I will leave you with the line that started all of this. Peace!',
      '“The deposit is cheap. The habit is what you are really buying.”'
    ]
  },
  {
    number: '01',
    slug: 'everybody-has-done-the-maths',
    title: 'Everybody has done the maths.',
    // titleHtml carries the highlighter sweep from the design.
    titleHtml: 'Everybody has done <span class="mark">the maths</span>.',
    dek: 'The 1% is the easy part. The whole result is in the number of days you showed up.',
    date: 'oct 2026',
    readTime: '5 min read',
    eyebrow: '01 · oct 2026 · 5 min',
    inverted: false,
    body: [
      '“Everybody has done the maths. Almost nobody has done the days.”',
      'Have you ever asked yourself why you can explain something perfectly and still not do it? I can explain compound habits to you right now, in two minutes, with the arithmetic - I wrote a whole article about it on this blog in September. And if you asked me what actually changed in my week after I wrote it, the honest answer is: nothing I could point at. So the question is: <strong>if understanding the mechanism is free, why does nothing move?</strong> Let’s start from the beginning.',
      'The idea in one paragraph, for anyone who has not read the Atomic Habits review here. James Clear argues that habits work like compound interest: a 1% improvement, repeated, does something to you that one big effort never can. Run it for a year and the numbers stop looking reasonable.<br>Better by 1% every day: 1.01<sup>365</sup> = 37.78<br>Worse by 1% every day: 0.99<sup>365</sup> = 0.03<br>Thirty-seven against almost zero. It is the most quoted calculation in self-improvement, and it is correct.',
      'Firstly, let’s be honest about what reading that costs you - nothing. Twenty minutes and a good feeling. And the good feeling is the actual problem, because <u>understanding a mechanism feels almost exactly like owning it</u>. I can explain how a bench press works. Explaining it has never once moved the bar. The maths of compound habits is that same kind of knowledge: a description of a result, not a method for reaching it, and the moment you finish reading it your brain files the whole subject under “done”.',
      'Secondly, there is a number in that formula that almost nobody fills in, and it is not the 1%. It is the exponent - the days you actually showed up. Watch what happens when you stop assuming a perfect year.<br>Every single day: 1.01<sup>365</sup> = 37.78<br>Six days a week, one rest day: 1.01<sup>313</sup> = 22.52<br>Three days a week, which is how most of us really live: 1.01<sup>156</sup> = 4.72<br>Look at the middle line again. One rest day a week - the most reasonable thing in the world - and you did <strong>86% of the days for 60% of the result</strong>. The bottom line is worse: three days a week is 43% of the days and <strong>12% of the result</strong>. <u>The 1% is not what makes the number big. The days are.</u>',
      'This cuts both ways, and I think the second half is the part worth keeping. The bad news is that the version of a habit most of us run - a few times a week, when the week allows it - pays nothing close to what we imagined while reading the book. The good news is that the distance between 4.72 and 22.52 is not made of talent, or discipline, or any other thing you either have or you don’t. It is made of <strong>three days</strong>. Three days a week is the entire difference between a habit that does almost nothing and a habit that does most of what was advertised.',
      'Thirdly, what I am going to do about it, because an article that ends in agreement is worth nothing. One habit, thirty days, written on a piece of paper where I have to look at it, and the only thing I am allowed to write down is whether I showed up. Not how it went. Not how I felt about it. Showed up, or didn’t. And I already know what thirty days gives back:<br>1.01<sup>30</sup> = 1.35<br>0.99<sup>30</sup> = 0.74<br>1.35. That is nothing. Nobody is going to notice 1.35 on me, and that is exactly why I am counting days instead of results - <u>the first month is not the payoff, it is the proof that I can be the person who attends</u>.',
      'The thing that will try to end it is not a bad day, it is the second one. One missed day is a rest day and the exponent barely notices. Two missed days in a row is a new pattern, and the sentence that comes next is always the same: “I will start again on Monday”. Clear has three words for this that are worth more than the chapter around them - never miss twice. I am writing them at the top of the paper.',
      'For today, that will be all. My personal opinion? I still think the idea is right and I gave the book five stars for a reason. But the framing bothers me more the longer I sit with it. Calling it “1% better” puts all the attention on the size of the step, when everything in the formula that matters is the exponent - and worse, 1% is not something you can measure in a real day. I cannot read 1% better today. Nobody can. What I can do is open the book or not open it, which is a yes or a no, not a percentage. If I were writing that chapter I would put the days first and the 1% second, as the thing that makes attendance worth something rather than the thing you are supposed to be optimising.',
      'In the end, I hope you enjoyed this article and I will leave you with the line I opened it with, because it is the whole thing in one sentence. Peace!',
      '“Everybody has done the maths. Almost nobody has done the days.”'
    ]
  }
];

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
    mark: '★★★½',
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
    ['writing', 'opinions · 6 Nov 2026'],
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
