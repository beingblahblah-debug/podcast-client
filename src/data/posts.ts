export interface BlogPost {
  id: string;
  type: "vlog" | "article";
  title: string;
  category: string;
  date: string;
  readTime?: string;
  duration?: string;
  excerpt: string;
  coverImage?: string;
  videoUrl?: string;
  videoId?: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags?: string[];
  featured?: boolean;
  isCustom?: boolean;
  createdAt?: string;
}

// Helper to extract YouTube video ID from various URL formats
export function extractYouTubeId(url: string): string | null {
  if (!url) return null;
  const cleanUrl = url.trim();
  
  // Standard youtu.be/ID
  const shortMatch = cleanUrl.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (shortMatch) return shortMatch[1];

  // Standard youtube.com/watch?v=ID
  const watchMatch = cleanUrl.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  if (watchMatch) return watchMatch[1];

  // Embed youtube.com/embed/ID
  const embedMatch = cleanUrl.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/);
  if (embedMatch) return embedMatch[1];

  // Shorts youtube.com/shorts/ID
  const shortsMatch = cleanUrl.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/);
  if (shortsMatch) return shortsMatch[1];

  // Raw 11-char ID
  if (/^[a-zA-Z0-9_-]{11}$/.test(cleanUrl)) {
    return cleanUrl;
  }

  return null;
}

export function getYouTubeThumbnail(videoId: string): string {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}

// Initial curated Vlogs from Harshita Dagha Show
export const DEFAULT_VLOGS: BlogPost[] = [
  {
    id: "legal-secrets-unveiled-divorce-family-law",
    type: "vlog",
    title: "Legal Secrets Unveiled | Divorce & Family Law Explained | Know Your Rights, Legal Tips & Real",
    category: "Legal & Rights",
    date: "October 2026",
    duration: "45 mins",
    readTime: "6 min read",
    excerpt: "A groundbreaking deep dive with top legal advocates into divorce laws, child custody, asset division, and marital rights in India. Watch the full episode unedited.",
    videoUrl: "https://youtu.be/UIEBj-3enk0?si=UO0LmhaIn-B4Vnsf",
    videoId: "UIEBj-3enk0",
    coverImage: "https://i.ytimg.com/vi/UIEBj-3enk0/hqdefault.jpg",
    author: {
      name: "Harshita Dagha",
      role: "Podcast Host & PR Strategist",
      avatar: "/images/harshita-avatar-main.jpg"
    },
    tags: ["Law", "Family Law", "Legal Rights", "Masterclass"],
    featured: true,
    content: `In this hard-hitting masterclass dialogue, Harshita Dagha hosts leading family law practitioners to demystify Indian legal proceedings surrounding marriage, separation, maintenance, and child guardianship.

### Key Points Explored in this Vlog:
1. **Understanding Matrimonial Rights:** What the law explicitly states regarding joint assets, stridhan, and financial independence.
2. **Child Custody Dynamics:** How family courts assess the welfare of minor children without bias.
3. **Preventing Protracted Litigation:** How pre-trial mediation and structured settlement protocols save years of trauma and financial drain.

Watch the full vlog dialogue above, or listen to the unedited masterclass audio.`
  },
  {
    id: "agency-founder-reveals-how-we-scale-reach-with-geo",
    type: "vlog",
    title: "Agency Founder Reveals How We Scale Reach with GEO | Generative Engine Optimization | GEO Strategy",
    category: "GEO & AI Strategy",
    date: "October 2026",
    duration: "52 mins",
    readTime: "7 min read",
    excerpt: "Harshita Dagha breaks down Generative Engine Optimization (GEO) — how brands can dominate AI answers across ChatGPT, Google Gemini, and Perplexity.",
    videoUrl: "https://youtu.be/K_6wJPU-sQw?si=Byqg4u9PDuwyTkfp",
    videoId: "K_6wJPU-sQw",
    coverImage: "https://i.ytimg.com/vi/K_6wJPU-sQw/hqdefault.jpg",
    author: {
      name: "Harshita Dagha",
      role: "GEO Expert & Founder, Beingblahblah",
      avatar: "/images/harshita-avatar-main.jpg"
    },
    tags: ["GEO", "AI Search", "ChatGPT", "Branding"],
    featured: true,
    content: `Generative Engine Optimization (GEO) has rapidly outpaced traditional keyword-stuffed SEO. In this session, Harshita Dagha reveals the exact playbook used at Beingblahblah to make executive founders and corporate brands the cited source in AI answer engines.

### Frameworks Unpacked:
- **Entity Identity & Authority Citations:** Structuring brand data so large language models understand who you are.
- **Knowledge Graph Alignment:** Why PR mentions in respected publications directly fuel AI answer prominence.
- **The Death of 10 Blue Links:** Adapting to conversational search where users never visit traditional search result pages.`
  },
  {
    id: "the-truth-about-pathology-blood-tests-lab-reports",
    type: "vlog",
    title: "The Truth About Pathology, Blood Tests & Lab Reports | Doctor Podcast",
    category: "Healthcare & Diagnostics",
    date: "September 2026",
    duration: "38 mins",
    readTime: "5 min read",
    excerpt: "What do your blood test values really mean? Senior pathology specialists sit down with Harshita Dagha to unpack preventative diagnostics and laboratory accuracy.",
    videoUrl: "https://youtu.be/p7UxBljaKys?si=AhG72ffybL0gkEm4",
    videoId: "p7UxBljaKys",
    coverImage: "https://i.ytimg.com/vi/p7UxBljaKys/hqdefault.jpg",
    author: {
      name: "Harshita Dagha",
      role: "Host & Producer",
      avatar: "/images/harshita-avatar-main.jpg"
    },
    tags: ["Healthcare", "Pathology", "Wellness", "Medicine"],
    content: `Medical diagnostics are the foundation of modern preventative health. In this revealing podcast conversation, Harshita Dagha speaks with diagnostic laboratory directors about interpreting reports, testing margins, and avoiding unnecessary medical panic.`
  },
  {
    id: "truth-about-the-universe-karma-and-shiva",
    type: "vlog",
    title: "The Truth About the Universe, Karma & Shiva | Must-Watch Spiritual Podcast",
    category: "Spirituality & Philosophy",
    date: "September 2026",
    duration: "65 mins",
    readTime: "8 min read",
    excerpt: "A contemplative dialogue on cosmic energy, karmic cycles, consciousness, and the timeless philosophy of Shiva in contemporary life.",
    videoUrl: "https://youtu.be/03YJwVMV0D8?si=lS2mviTqXL7ljQ4q",
    videoId: "03YJwVMV0D8",
    coverImage: "https://i.ytimg.com/vi/03YJwVMV0D8/hqdefault.jpg",
    author: {
      name: "Harshita Dagha",
      role: "Podcast Host",
      avatar: "/images/harshita-avatar-main.jpg"
    },
    tags: ["Spirituality", "Philosophy", "Karma", "Consciousness"],
    content: `A deep, meditative conversation exploring ancient Vedic wisdom applied to modern stress, ambition, and inner peace. Harshita Dagha explores the essence of detachment, cosmic resonance, and purposeful living.`
  },
  {
    id: "the-truth-about-plastic-surgery-facts-and-risks",
    type: "vlog",
    title: "The Truth About Plastic | What Surgeons Don’t Tell You | Plastic Surgery Facts, Risks & Reality",
    category: "Aesthetics & Medical Reality",
    date: "August 2026",
    duration: "49 mins",
    readTime: "6 min read",
    excerpt: "Board-certified aesthetic surgeons expose myths, surgical risks, recovery realities, and psychological drivers behind cosmetic interventions.",
    videoUrl: "https://youtu.be/2puQ59SOAwQ?si=woSikVR6k8zLE7cB",
    videoId: "2puQ59SOAwQ",
    coverImage: "https://i.ytimg.com/vi/2puQ59SOAwQ/hqdefault.jpg",
    author: {
      name: "Harshita Dagha",
      role: "Podcast Host",
      avatar: "/images/harshita-avatar-main.jpg"
    },
    tags: ["Aesthetics", "Surgery", "Medical Reality", "Health"],
    content: `An unsparing examination of cosmetic surgery in India. Harshita Dagha sits down with senior reconstructive surgeons to discuss patient safety, ethical practice, realistic expectations, and social media dysmorphia.`
  }
];

import { ARTICLES, Article } from "./articles";

export function articleToBlogPost(art: Article): BlogPost {
  const contentBody = [
    art.content.intro,
    ...art.content.sections.map((s) => {
      let str = `### ${s.heading}\n\n` + s.paragraphs.join("\n\n");
      if (s.quote) str += `\n\n> "${s.quote}"`;
      if (s.bullets && s.bullets.length > 0) {
        str += "\n\n" + s.bullets.map((b) => `- ${b}`).join("\n");
      }
      return str;
    }),
    `### Executive Conclusion\n\n${art.content.conclusion}`
  ].join("\n\n");

  return {
    id: art.id,
    type: "article",
    title: art.title,
    category: art.category,
    date: art.date,
    readTime: art.readTime,
    excerpt: art.excerpt,
    coverImage: art.image,
    author: art.author,
    tags: art.seoFocus ? art.seoFocus.split(",").map((t) => t.trim()) : [art.category],
    featured: art.featured,
    content: contentBody
  };
}

// All 19 curated editorial articles mapped to BlogPost format
export const ALL_EDITORIAL_POSTS: BlogPost[] = ARTICLES.map(articleToBlogPost);

export const DEFAULT_ARTICLES: BlogPost[] = ALL_EDITORIAL_POSTS;
