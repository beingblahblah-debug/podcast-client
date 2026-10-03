export interface Guest {
  name: string;
  role: string;
  company: string;
  avatar: string;
  bio: string;
  twitter?: string;
  linkedin?: string;
}

export interface Chapter {
  time: string;
  seconds: number;
  title: string;
}

export interface Episode {
  id: string;
  number: number;
  season: number;
  title: string;
  subtitle: string;
  category: "Tech & AI" | "Leadership" | "Mindset" | "Creative Life" | "Culture";
  duration: string;
  durationSec: number;
  releaseDate: string;
  coverImage: string;
  audioUrl: string;
  isTop10: boolean;
  rank?: number; // 1 to 10
  streamCount: string;
  rating: number;
  featured?: boolean;
  trendingBadge?: string;
  summary: string;
  description: string;
  takeaways: string[];
  guest: Guest;
  chapters: Chapter[];
  transcriptSnippet: string;
  spotifyUrl: string;
  appleUrl: string;
  youtubeUrl: string;
}

export const EPISODES: Episode[] = [
  {
    id: "ep-128-architecture-of-ambition",
    number: 128,
    season: 4,
    title: "The Architecture of Ambition: Rebuilding Your Mind for High-Stakes Decisiveness",
    subtitle: "How elite operators make irreversible decisions under total uncertainty without burning out.",
    category: "Mindset",
    duration: "64 min",
    durationSec: 3840,
    releaseDate: "October 1, 2026",
    coverImage: "/images/cover.jpg",
    audioUrl: "/audio/sample-episode.wav",
    isTop10: true,
    rank: 1,
    streamCount: "842,000",
    rating: 4.98,
    featured: true,
    trendingBadge: "⭐ #1 All-Time Most Streamed",
    summary: "Dr. Elena Vance sits down with cognitive neuroscientist & venture partner Dr. Aris Thorne to break down how top leaders rewire mental heuristics when navigating billion-dollar crossroad moments.",
    description: `What happens when every decision you make has an irreversible cascade effect? In this deep-dive dialogue, Dr. Aris Thorne unpacks the physiological footprint of decision fatigue, the '10-10-10' psychological framework for high-stakes leadership, and why modern high-achievers confuse stress with purpose.

We also explore his morning cognitive reset routine, how sleep stages impact tactical clarity, and why trusting intuition requires rigorous mathematical guardrails.`,
    takeaways: [
      "The 'Cold-State Rule': Never commit to a high-consequence decision within 2 hours of a dopamine spike.",
      "Why 90% of strategic anxiety is actually metabolic deficit rather than structural risk.",
      "The 3-tier boundary method to eliminate context switching and preserve creative flow state.",
      "How to deconstruct decision failure without eroding baseline self-trust."
    ],
    guest: {
      name: "Dr. Aris Thorne",
      role: "Director of Cognitive Systems & Partner",
      company: "Apex Neuro Labs",
      avatar: "/images/host.jpg",
      bio: "Former DARPA neuroscience researcher turned advisor to Fortune 50 founders and Olympic coaches.",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    },
    chapters: [
      { time: "00:00", seconds: 0, title: "Prologue: The Cost of Second-Guessing" },
      { time: "05:14", seconds: 314, title: "The Brain on High-Stakes Pressure" },
      { time: "18:42", seconds: 1122, title: "The 10-10-10 Mental Calibration Rule" },
      { time: "33:10", seconds: 1990, title: "Rewiring Cortisol Responses in Crisis" },
      { time: "49:25", seconds: 2965, title: "Building an Unshakeable Evening Debrief Ritual" },
      { time: "59:10", seconds: 3550, title: "Final Reflection: Ambition Without Destruction" }
    ],
    transcriptSnippet: "Elena: When you look at high-performing executives who break under pressure versus those who flourish, what is the single physiological divergence you spot first?\n\nDr. Thorne: It is almost never intellect or stamina. It is their relationship with ambiguity. Amateurs demand certainty before moving; seasoned operators learn to metabolize ambiguity like oxygen.",
    spotifyUrl: "https://spotify.com",
    appleUrl: "https://apple.com",
    youtubeUrl: "https://youtube.com"
  },
  {
    id: "ep-127-beyond-algorithms",
    number: 127,
    season: 4,
    title: "Beyond the Algorithms: Reclaiming Creative Sovereignty in the Age of Synthetic Intelligence",
    subtitle: "Designing human-first art, stories, and products that algorithms can never replicate.",
    category: "Tech & AI",
    duration: "58 min",
    durationSec: 3480,
    releaseDate: "September 24, 2026",
    coverImage: "/images/cover.jpg",
    audioUrl: "/audio/sample-episode.wav",
    isTop10: true,
    rank: 2,
    streamCount: "719,000",
    rating: 4.96,
    trendingBadge: "🔥 Trending #2",
    summary: "Renowned product architect and essayist Maya Lin discussing how autonomous generative tools are altering human taste, and how creators can build enduring taste moats.",
    description: `As synthetic generation tools make commodity content infinite, true artistic distinction becomes radically scarce. Maya Lin breaks down the psychology of taste, why raw imperfections are the new luxury signifier, and how modern creators can design sovereign intellectual property.`,
    takeaways: [
      "The Taste Moat: Why curation is the supreme differentiator when generation cost is zero.",
      "The danger of algorithmic feedback loops sanitizing radical creative risks.",
      "How to set up an offline sanctuary workflow that protects deep incubation periods.",
      "The future of human-crafted media economies and paid patronage communities."
    ],
    guest: {
      name: "Maya Lin",
      role: "Chief Design Evangelist & Author",
      company: "Studio Form & Flux",
      avatar: "/images/host.jpg",
      bio: "Author of 'The Sacred Flaw' and former lead design philosopher at legendary hardware collectives.",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    },
    chapters: [
      { time: "00:00", seconds: 0, title: "The Synthetic Abundance Paradox" },
      { time: "08:30", seconds: 510, title: "Why Friction is the Secret Sauce of Art" },
      { time: "22:15", seconds: 1335, title: "Curation as a Moral Stance" },
      { time: "38:40", seconds: 2320, title: "The Rise of Micro-Communities" },
      { time: "52:10", seconds: 3130, title: "Closing: Protecting Your Inner Fire" }
    ],
    transcriptSnippet: "Maya: True style is not what you add; it is the deliberate omissions you refuse to let an algorithm autocomplete for you.",
    spotifyUrl: "https://spotify.com",
    appleUrl: "https://apple.com",
    youtubeUrl: "https://youtube.com"
  },
  {
    id: "ep-126-zero-to-category-king",
    number: 126,
    season: 4,
    title: "Zero to Category King: Unconventional Playbooks for Radical Product Differentiation",
    subtitle: "Why competing is for losers and how to invent a monopoly category people obsess over.",
    category: "Leadership",
    duration: "71 min",
    durationSec: 4260,
    releaseDate: "September 17, 2026",
    coverImage: "/images/cover.jpg",
    audioUrl: "/audio/sample-episode.wav",
    isTop10: true,
    rank: 3,
    streamCount: "684,000",
    rating: 4.95,
    trendingBadge: "👑 Top Rated in Business",
    summary: "Serial enterprise founder Julian Vance on breaking industry orthodoxies, positioning from first principles, and building fanatical early user love.",
    description: `Most startups fail because they build a 10% better version of an existing product. Julian Vance shares the counter-intuitive framework he used to bootstrap three multi-hundred-million-dollar software companies without taking predatory term sheets.`,
    takeaways: [
      "The 'Anti-Competitor Matrix': Finding what the market leader is proud of and attacking the unintended consequence.",
      "Why your first 100 passionate customers matter 100x more than 10,000 lukewarm signups.",
      "The art of storytelling as corporate leverage.",
      "Managing emotional capital during founder wilderness periods."
    ],
    guest: {
      name: "Julian Vance",
      role: "Founder & General Partner",
      company: "Vanguard Genesis",
      avatar: "/images/host.jpg",
      bio: "Founding member of three unicorn startups and keynote speaker on category design.",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    },
    chapters: [
      { time: "00:00", seconds: 0, title: "The Myth of Incremental Improvement" },
      { time: "11:20", seconds: 680, title: "Finding Your Unfair Contrarian Insight" },
      { time: "27:45", seconds: 1665, title: "Pricing for Respect Rather Than Desperation" },
      { time: "46:10", seconds: 2770, title: "Hiring Culture Keepers, Not Mercenaries" },
      { time: "65:00", seconds: 3900, title: "The Final Hurdle" }
    ],
    transcriptSnippet: "Julian: If you cannot state your company's core disagreement with current industry consensus in one sentence, you haven't found your value proposition yet.",
    spotifyUrl: "https://spotify.com",
    appleUrl: "https://apple.com",
    youtubeUrl: "https://youtube.com"
  },
  {
    id: "ep-125-the-neurochemistry-of-calm",
    number: 125,
    season: 4,
    title: "The Neurochemistry of Calm: Unlocking Sustained Focus Under Relentless Digital Noise",
    subtitle: "Dopamine fasting, vagus nerve stimulation, and reclaiming cognitive sovereignty.",
    category: "Mindset",
    duration: "52 min",
    durationSec: 3120,
    releaseDate: "September 10, 2026",
    coverImage: "/images/cover.jpg",
    audioUrl: "/audio/sample-episode.wav",
    isTop10: true,
    rank: 4,
    streamCount: "630,000",
    rating: 4.97,
    trendingBadge: "🌿 Listener Favorite",
    summary: "Integrative neurobiologist Dr. Sanjana Roy reveals actionable protocols for resetting your attention span and down-regulating baseline cortisol.",
    description: `Our nervous systems were never evolved to process 12 hours of screen luminescence and thousands of push notifications daily. Dr. Sanjana Roy details exact, science-backed behavioral interventions to restore parasympathetic tone and eliminate brain fog.`,
    takeaways: [
      "The 4-7-8 physiological sigh: instant heart rate variability optimization.",
      "How morning sunlight within 30 minutes of waking anchors your 24-hour circadian clock.",
      "The biological mechanism behind digital addiction and the 7-day neuro-reset protocol.",
      "Nutrition and adaptogens that protect against neuro-inflammatory stress."
    ],
    guest: {
      name: "Dr. Sanjana Roy",
      role: "Lead Neurobiologist",
      company: "MindBody Research Institute",
      avatar: "/images/host.jpg",
      bio: "Stanford medical alumnus and host of the Mind & Molecule public lectures.",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    },
    chapters: [
      { time: "00:00", seconds: 0, title: "The Overstimulated Modern Mind" },
      { time: "09:12", seconds: 552, title: "Understanding the Vagus Nerve Superhighway" },
      { time: "21:30", seconds: 1290, title: "Protocols for Instant Physiological Reset" },
      { time: "37:45", seconds: 2265, title: "The 7-Day Dopamine Calibration" },
      { time: "48:00", seconds: 2880, title: "Actionable Daily Routine" }
    ],
    transcriptSnippet: "Dr. Roy: Calm is not the absence of chaos around you; it is the physiological capacity to keep your prefrontal cortex online while the world spins.",
    spotifyUrl: "https://spotify.com",
    appleUrl: "https://apple.com",
    youtubeUrl: "https://youtube.com"
  },
  {
    id: "ep-124-the-art-of-unreasonable-hospitality",
    number: 124,
    season: 4,
    title: "The Art of Unreasonable Hospitality: Turning Human Connection into an Unfair Advantage",
    subtitle: "How extraordinary empathy transformed a struggling boutique into a global hospitality benchmark.",
    category: "Culture",
    duration: "61 min",
    durationSec: 3660,
    releaseDate: "September 03, 2026",
    coverImage: "/images/cover.jpg",
    audioUrl: "/audio/sample-episode.wav",
    isTop10: true,
    rank: 5,
    streamCount: "598,000",
    rating: 4.94,
    summary: "Michelin-starred restaurateur Clara Dupont discusses why bespoke kindness and radical attentiveness beat big marketing budgets every single time.",
    description: `What does it mean to deliver hospitality that brings tears to customers' eyes? Clara Dupont shares stories from the world's most demanding dining rooms and translates those exact empathy systems into lessons for tech products, team culture, and personal relationships.`,
    takeaways: [
      "The 'One Unexpected Delight' rule that turns casual clients into lifetime evangelists.",
      "How to train your frontline team to read micro-cues and unspoken desires.",
      "The economic ROI of doing things that do not scale.",
      "Why culture is what happens when the leader is not in the room."
    ],
    guest: {
      name: "Clara Dupont",
      role: "Co-Founder & Culinary Director",
      company: "Maison Lumière Group",
      avatar: "/images/host.jpg",
      bio: "Recipient of three James Beard honors and curator of bespoke experiential events globally.",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    },
    chapters: [
      { time: "00:00", seconds: 0, title: "A Dinner That Changed Everything" },
      { time: "14:20", seconds: 860, title: "The Anatomy of a Flawless Welcome" },
      { time: "28:50", seconds: 1730, title: "Creating Emotional Memories" },
      { time: "44:10", seconds: 2650, title: "Translating Hospitality to Modern Digital Brands" },
      { time: "56:30", seconds: 3390, title: "Final Words on Compassion" }
    ],
    transcriptSnippet: "Clara: People will forget 90% of your product specifications, but they will never forget how dignified and seen you made them feel.",
    spotifyUrl: "https://spotify.com",
    appleUrl: "https://apple.com",
    youtubeUrl: "https://youtube.com"
  },
  {
    id: "ep-123-mastering-the-unspoken",
    number: 123,
    season: 3,
    title: "Mastering the Unspoken: Body Language, Executive Presence & Nonverbal Negotiation",
    subtitle: "Decode hidden micro-expressions and project effortless authority in any room.",
    category: "Leadership",
    duration: "55 min",
    durationSec: 3300,
    releaseDate: "August 27, 2026",
    coverImage: "/images/cover.jpg",
    audioUrl: "/audio/sample-episode.wav",
    isTop10: true,
    rank: 6,
    streamCount: "542,000",
    rating: 4.93,
    summary: "International hostage negotiator & behavioral analyst Marcus Vance walks through reading rooms, defusing hostile interactions, and commanding quiet presence.",
    description: `Words account for less than 15% of emotional impact in high-pressure conversations. Marcus Vance teaches the tactical nonverbal tools used in embassy negotiations to establish instant rapport, spot deception, and align opposing parties.`,
    takeaways: [
      "The mirror-and-label verbal technique that disarms aggressive counterparties.",
      "How micro-posture adjustments alter your own hormonal status before walking on stage.",
      "Spotting cluster cues of anxiety vs disingenuous agreement.",
      "Maintaining calm silence as an active conversational tool."
    ],
    guest: {
      name: "Marcus Vance",
      role: "Senior Crisis Negotiator & Strategist",
      company: "Equinox Advisory",
      avatar: "/images/host.jpg",
      bio: "Advises international peace delegations, enterprise C-suites, and diplomatic corps.",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    },
    chapters: [
      { time: "00:00", seconds: 0, title: "The Secrets Told Without Sound" },
      { time: "12:15", seconds: 735, title: "Micro-Expressions Decoded" },
      { time: "25:40", seconds: 1540, title: "The Power of Tactical Pause" },
      { time: "41:00", seconds: 2460, title: "De-escalating High-Stakes Conflicts" },
      { time: "51:30", seconds: 3090, title: "Mastery in Everyday Conversations" }
    ],
    transcriptSnippet: "Marcus: The most dangerous person in the room is the one who is comfortable with 10 seconds of complete silence after a provocative statement.",
    spotifyUrl: "https://spotify.com",
    appleUrl: "https://apple.com",
    youtubeUrl: "https://youtube.com"
  },
  {
    id: "ep-122-the-creative-inflection-point",
    number: 122,
    season: 3,
    title: "The Creative Inflection Point: Navigating Burnout, Re-invention, and Second Acts",
    subtitle: "When success feels hollow: how legendary creators dismantle what works to build what matters.",
    category: "Creative Life",
    duration: "68 min",
    durationSec: 4080,
    releaseDate: "August 20, 2026",
    coverImage: "/images/cover.jpg",
    audioUrl: "/audio/sample-episode.wav",
    isTop10: true,
    rank: 7,
    streamCount: "518,000",
    rating: 4.97,
    summary: "Grammy-nominated record producer and multimedia artist Chloe Sterling opens up about walking away from massive commercial deals to rediscover authentic sonic freedom.",
    description: `What happens when you achieve the dream you spent fifteen years chasing, only to discover it doesn't nourish your spirit? Chloe Sterling shares the raw, vulnerable story of stepping into creative sabbatical, rebuilding from zero, and authoring her truest masterpiece.`,
    takeaways: [
      "The 'Creative Sandbox' principle: separating commercial output from spiritual curiosity.",
      "How to recognize subtle chronic burnout before it becomes catastrophic collapse.",
      "Building a peer circle that cares about your character rather than your vanity metrics.",
      "The courage to say 'no' to lucrative paths that dilute your authentic frequency."
    ],
    guest: {
      name: "Chloe Sterling",
      role: "Music Producer & Visual Artist",
      company: "Sterling Sound Collective",
      avatar: "/images/host.jpg",
      bio: "Producer with 12 RIAA certified platinum records and curator of interdisciplinary art installations.",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    },
    chapters: [
      { time: "00:00", seconds: 0, title: "The Gold Record in the Trash Can" },
      { time: "16:00", seconds: 960, title: "The Anatomy of Soul Burnout" },
      { time: "31:20", seconds: 1880, title: "Entering the Empty Canvas" },
      { time: "48:50", seconds: 2930, title: "Finding Your Sound Again" },
      { time: "62:15", seconds: 3735, title: "Advice for Emerging Artists" }
    ],
    transcriptSnippet: "Chloe: If you keep feeding the monster of other people's expectations, you will wake up one day with applause ringing in your ears and nothing left in your chest.",
    spotifyUrl: "https://spotify.com",
    appleUrl: "https://apple.com",
    youtubeUrl: "https://youtube.com"
  },
  {
    id: "ep-121-future-of-longevity",
    number: 121,
    season: 3,
    title: "The Longevity Horizon: Cellular Autophagy, Biomarkers & Adding 30 Healthy Years",
    subtitle: "The clinical breakthroughs transforming aging from an inevitable decay to a treatable condition.",
    category: "Mindset",
    duration: "59 min",
    durationSec: 3540,
    releaseDate: "August 13, 2026",
    coverImage: "/images/cover.jpg",
    audioUrl: "/audio/sample-episode.wav",
    isTop10: true,
    rank: 8,
    streamCount: "492,000",
    rating: 4.91,
    summary: "Epigenetics pioneer Dr. David Hensley on cellular senescence, optimal fasting intervals, and biomarker panels everyone should track in their 30s and 40s.",
    description: `We are entering an unprecedented epoch where healthspan and lifespan can be decoupled from chronological years. Dr. Hensley shares his personal lab protocols, daily molecular supplements, and the truth behind expensive wellness fads.`,
    takeaways: [
      "The top 5 blood biomarkers that accurately predict biological aging rate.",
      "How zone-2 cardiovascular training activates mitochondrial biogenesis.",
      "Intermittent hypoxia and heat shock protein activation via sauna protocols.",
      "Distinguishing proven clinical research from predatory supplement marketing."
    ],
    guest: {
      name: "Dr. David Hensley",
      role: "Head of Epigenetic Medicine",
      company: "Oxford Longevity Consortium",
      avatar: "/images/host.jpg",
      bio: "Senior Fellow at the Longevity Institute and lead investigator on cellular reprogramming clinical trials.",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    },
    chapters: [
      { time: "00:00", seconds: 0, title: "Redefining the Aging Curve" },
      { time: "10:30", seconds: 630, title: "Mitochondria: Your Energy Powerplants" },
      { time: "24:15", seconds: 1455, title: "The Fasting & Autophagy Protocols" },
      { time: "40:00", seconds: 2400, title: "Biomarkers That Actually Matter" },
      { time: "54:00", seconds: 3240, title: "Summary & Action Checklist" }
    ],
    transcriptSnippet: "Dr. Hensley: We don't want to just add years to life; we want to add life to those years so you can hike a mountain with your grandchildren at 85.",
    spotifyUrl: "https://spotify.com",
    appleUrl: "https://apple.com",
    youtubeUrl: "https://youtube.com"
  },
  {
    id: "ep-120-the-quiet-power-of-taste",
    number: 120,
    season: 3,
    title: "The Quiet Power of Taste: How World-Class Curators Shape Global Culture",
    subtitle: "Developing an eye that spots greatness before consensus catches on.",
    category: "Culture",
    duration: "63 min",
    durationSec: 3780,
    releaseDate: "August 06, 2026",
    coverImage: "/images/cover.jpg",
    audioUrl: "/audio/sample-episode.wav",
    isTop10: true,
    rank: 9,
    streamCount: "475,000",
    rating: 4.92,
    summary: "Architectural director and gallery curator Nadia Al-Mansoor dissects the mechanics of aesthetic refinement and cultural foresight.",
    description: `Taste cannot be purchased, automated, or faked. Nadia Al-Mansoor takes us inside private galleries, luxury atelier houses, and underground architectural movements to show how an educated eye perceives harmony, balance, and timelessness.`,
    takeaways: [
      "The difference between trend-following fashion and enduring cultural architecture.",
      "How to train your aesthetic perception by studying disparate disciplines.",
      "The role of tactile spatial materials in human mental peace.",
      "Why simplicity is the ultimate sophistication in physical and digital spaces."
    ],
    guest: {
      name: "Nadia Al-Mansoor",
      role: "Architectural Curator & Critic",
      company: "Atelier Form",
      avatar: "/images/host.jpg",
      bio: "Curator of international biennials and architectural advisor to metropolitan civic spaces.",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    },
    chapters: [
      { time: "00:00", seconds: 0, title: "The Invisible Geometry of Beauty" },
      { time: "13:40", seconds: 820, title: "Why Trends Rot Fast" },
      { time: "29:10", seconds: 1750, title: "Building an Aesthetic Vault" },
      { time: "45:30", seconds: 2730, title: "Design for the Soul" },
      { time: "58:00", seconds: 3480, title: "Curator's Manifesto" }
    ],
    transcriptSnippet: "Nadia: Bad taste is loud because it is insecure. Good taste speaks softly because the truth does not need to shout.",
    spotifyUrl: "https://spotify.com",
    appleUrl: "https://apple.com",
    youtubeUrl: "https://youtube.com"
  },
  {
    id: "ep-119-the-autonomous-economy",
    number: 119,
    season: 3,
    title: "The Autonomous Economy: Thriving When Software Does Everything Except Care",
    subtitle: "The future of careers, human value, and building anti-fragile businesses in 2027.",
    category: "Tech & AI",
    duration: "67 min",
    durationSec: 4020,
    releaseDate: "July 30, 2026",
    coverImage: "/images/cover.jpg",
    audioUrl: "/audio/sample-episode.wav",
    isTop10: true,
    rank: 10,
    streamCount: "461,000",
    rating: 4.90,
    summary: "Economist and futurist Dr. Kenji Sato on the shifting economic landscape, high-trust human services, and the new currency of personal authenticity.",
    description: `As cognitive labor becomes digitized, the market value of raw technical execution drops while the premium on human trust, empathy, and bespoke synthesis explodes. Dr. Sato provides a survival guide for ambitious professionals over the next decade.`,
    takeaways: [
      "The 'Trust Premium': Why verified human authenticity will command 5x higher margins.",
      "The death of the average middleman and the rise of hyper-personalized solo conglomerates.",
      "Skills that remain fundamentally immune to artificial automation.",
      "How to future-proof your career trajectory and personal investment portfolio."
    ],
    guest: {
      name: "Dr. Kenji Sato",
      role: "Chief Economist",
      company: "Global Horizon Institute",
      avatar: "/images/host.jpg",
      bio: "Frequent keynote speaker at the World Economic Forum and author of 'The Next Wealth Paradigm'.",
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    },
    chapters: [
      { time: "00:00", seconds: 0, title: "The Great Unbundling of Labor" },
      { time: "15:20", seconds: 920, title: "The Trust Premium Formula" },
      { time: "32:00", seconds: 1920, title: "What Machines Cannot Replicate" },
      { time: "48:15", seconds: 2895, title: "Designing Your 10-Year Career Moat" },
      { time: "61:00", seconds: 3660, title: "Closing Vision" }
    ],
    transcriptSnippet: "Dr. Sato: In a world where intelligence is a free utility like electricity, the scarcest resource will simply be whether someone believes you have a soul.",
    spotifyUrl: "https://spotify.com",
    appleUrl: "https://apple.com",
    youtubeUrl: "https://youtube.com"
  }
];

export const CATEGORIES = [
  "All",
  "Mindset",
  "Tech & AI",
  "Leadership",
  "Creative Life",
  "Culture"
] as const;

export const PODCAST_STATS = {
  totalEpisodes: "180+",
  totalDownloads: "5.2M+",
  countriesReached: "150+",
  averageRating: "4.9★",
  topRank: "#1 Female Business Podcast in India",
  spotifyFollowers: "280K+",
  appleSubscribers: "210K+"
};

export const TESTIMONIALS = [
  {
    quote: "The Harshita Dagha Show is one of the rare platforms where founders open up about near-death company moments, valuation realities, and mental toll without PR fluff.",
    author: "Kunal Shah",
    title: "Founder & Angel Investor",
    avatar: "/images/host.jpg"
  },
  {
    quote: "Harshita has this uncanny gift of extracting the real unit economics and philosophical roots of how great enterprises are built. A masterclass interviewer.",
    author: "Vani Kola",
    title: "Managing Director & Venture Capitalist",
    avatar: "/images/host.jpg"
  },
  {
    quote: "Her interviews are mandatory listening for anyone building in India's startup ecosystem. Unhurried, deeply researched, and razor-sharp.",
    author: "Deepinder Goyal",
    title: "Tech Entrepreneur & Executive",
    avatar: "/images/host.jpg"
  }
];

export const PRESS_LOGOS = [
  { name: "Forbes India", subtitle: "#1 Female Business Voice" },
  { name: "Economic Times", subtitle: "Top Founder Interviewer" },
  { name: "Mint", subtitle: "Essential Listening" },
  { name: "SheThePeople", subtitle: "Trailblazing Creator" },
  { name: "Spotify India", subtitle: "Top 1% Business Audio" },
  { name: "YourStory", subtitle: "Startup Masterclasses" }
];
