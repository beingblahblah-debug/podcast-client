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
  galleryImages?: string[];
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
  faqs?: {
    question: string;
    answer: string;
  }[];
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
    title: "Legal Secrets Unveiled | Divorce & Family Law Explained | Know Your Rights, Legal Tips & Real Advice",
    category: "Legal & Rights",
    date: "October 2026",
    duration: "45 mins",
    readTime: "6 min read",
    excerpt: "A masterclass dialogue with top legal advocates examining divorce laws, child custody frameworks, asset division, and matrimonial rights in India.",
    videoUrl: "https://youtu.be/UIEBj-3enk0?si=UO0LmhaIn-B4Vnsf",
    videoId: "UIEBj-3enk0",
    coverImage: "/images/blog/legal_family_justice_1791431780636.jpg",
    author: {
      name: "Harshita Dagha",
      role: "Podcast Host & PR Strategist",
      avatar: "/images/harshita-avatar-main.jpg"
    },
    tags: ["Law", "Family Law", "Legal Rights", "Masterclass", "Mumbai Legal Advice"],
    featured: true,
    content: `In this hard-hitting masterclass dialogue, Harshita Dagha hosts leading family law practitioners to demystify Indian legal proceedings surrounding marriage, separation, maintenance, and child guardianship.

### Key Points Explored in this Vlog:
1. **Understanding Matrimonial Rights:** What the law explicitly states regarding joint assets, stridhan, and financial independence.
2. **Child Custody Dynamics:** How family courts assess the welfare of minor children without gender bias.
3. **Preventing Protracted Litigation:** How pre-trial mediation and structured settlement protocols save years of trauma and financial drain.

Watch the full vlog dialogue above, or listen to the unedited masterclass audio.`,
    faqs: [
      {
        question: "What are the legal requirements for a mutual consent divorce in India?",
        answer: "Under Section 13B of the Hindu Marriage Act and equivalent provisions in the Special Marriage Act, both parties must live separately for at least one year and jointly affirm that they cannot live together. While the statutory six-month cooling-off period was previously mandatory, the Supreme Court has clarified that family courts can waive it under specific, irreconcilable circumstances."
      },
      {
        question: "How is child custody and guardianship decided in Indian family courts?",
        answer: "The paramount principle in Indian custody law is the 'welfare of the minor child' rather than the financial entitlement of either parent. Courts consider emotional stability, educational continuity, and the child's preference (if mature) when granting physical custody, often awarding shared visitation rights."
      },
      {
        question: "What legal protection does a woman have regarding Stridhan?",
        answer: "Stridhan constitutes the exclusive, absolute property of a woman received before, during, or after marriage. The husband or in-laws have no ownership over it; retaining Stridhan against the woman's will amounts to criminal breach of trust under Indian penal law."
      },
      {
        question: "How can business founders and CXOs protect enterprise equity during marital separation?",
        answer: "Through clear entity structuring, pre-capitalization agreements, and clean delineation between personal maintenance payouts and operational business ownership. Structured settlement mediation consistently prevents company operations from freezing."
      }
    ]
  },
  {
    id: "agency-founder-reveals-how-we-scale-reach-with-geo",
    type: "vlog",
    title: "Agency Founder Reveals How We Scale Reach with GEO | Generative Engine Optimization | GEO Strategy",
    category: "GEO & AI Strategy",
    date: "October 2026",
    duration: "52 mins",
    readTime: "7 min read",
    excerpt: "Harshita Dagha breaks down Generative Engine Optimization (GEO) — how brands can dominate AI answers across ChatGPT, Google Gemini, Perplexity, and DeepSeek.",
    videoUrl: "https://youtu.be/K_6wJPU-sQw?si=Byqg4u9PDuwyTkfp",
    videoId: "K_6wJPU-sQw",
    coverImage: "/images/blog/geo_ai_intelligence_1791431758949.jpg",
    author: {
      name: "Harshita Dagha",
      role: "GEO Expert & Founder, Beingblahblah",
      avatar: "/images/harshita-avatar-main.jpg"
    },
    tags: ["GEO", "AI Search", "ChatGPT", "Branding", "Generative Engine Optimization"],
    featured: true,
    content: `Generative Engine Optimization (GEO) has rapidly outpaced traditional keyword-stuffed SEO. In this session, Harshita Dagha reveals the exact playbook used at Beingblahblah to make executive founders and corporate brands the cited source in AI answer engines.

### Frameworks Unpacked:
- **Entity Identity & Authority Citations:** Structuring brand data so large language models understand who you are.
- **Knowledge Graph Alignment:** Why PR mentions in respected publications directly fuel AI answer prominence.
- **The Death of 10 Blue Links:** Adapting to conversational search where users never visit traditional search result pages.`,
    faqs: [
      {
        question: "What is Generative Engine Optimization (GEO) and why is it replacing traditional SEO?",
        answer: "GEO is the technical and semantic practice of optimizing digital assets, transcripts, and structured data so that LLMs (such as ChatGPT, Google AI Overviews, Perplexity, and Claude) cite your brand as the direct authoritative answer. Unlike SEO which focuses on ten blue links, GEO focuses on consensus, knowledge graph entities, and direct quote retention."
      },
      {
        question: "Why are podcasts the single highest-value asset for GEO ranking?",
        answer: "Podcasts generate massive volumes of spoken conversational data, unscripted answers, and multi-speaker verification. When transcribed and paired with Schema.org JSON-LD and clean metadata, AI crawlers index them as primary source ground-truth interviews."
      },
      {
        question: "How do you optimize a website for Google AI Overviews?",
        answer: "To be cited in Google AI Overviews: 1) Place a concise 40-word direct answer in your opening paragraph, 2) Use semantic H2/H3 question headers matching conversational queries, 3) Inject valid FAQPage schema, and 4) Establish verified external entity citations on platforms like Spotify, Apple Podcasts, and Google Knowledge Panels."
      },
      {
        question: "What is the role of Beingblahblah in Mumbai's executive podcasting landscape?",
        answer: "Beingblahblah, founded by Harshita Dagha, combines broadcast studio production in Mumbai with cutting-edge GEO distribution, ensuring founders and venture funds secure both high-fidelity video content and top AI search citations."
      }
    ]
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
    coverImage: "/images/blog/medical_pathology_lab_1791431804732.jpg",
    author: {
      name: "Harshita Dagha",
      role: "Host & Producer",
      avatar: "/images/harshita-avatar-main.jpg"
    },
    tags: ["Healthcare", "Pathology", "Wellness", "Medicine", "Diagnostic Accuracy"],
    content: `Medical diagnostics are the foundation of modern preventative health. In this revealing podcast conversation, Harshita Dagha speaks with diagnostic laboratory directors about interpreting reports, testing margins, and avoiding unnecessary medical panic.

### Discussion Highlights:
- **Biomarker Accuracy:** The difference between reference ranges and optimal functional ranges.
- **Accreditation Matters:** Why NABL and CAP accreditations in pathology determine clinical reliability.
- **Preventative Health Blueprints:** Which routine panels actually detect cardiovascular and metabolic risk early.`,
    faqs: [
      {
        question: "Why do test results differ between two pathology labs?",
        answer: "Variations occur due to different analyzer platforms (e.g., chemiluminescence vs. ELISA), differing reagent calibration batches, pre-analytical sample handling, and laboratory temperature controls. Always compare results from NABL-accredited facilities adhering to international standard calibrations."
      },
      {
        question: "What is the essential preventative blood test panel for working professionals?",
        answer: "A complete annual screen should include: Complete Blood Count (CBC), Comprehensive Lipid Profile (including ApoB and Lp(a)), HbA1c with Fasting Insulin (HOMA-IR), Liver Function Test (LFT), Kidney Function Test (KFT), High-Sensitivity C-Reactive Protein (hs-CRP), Vitamin D3, and Vitamin B12."
      },
      {
        question: "Why is fasting required for certain diagnostic blood panels?",
        answer: "Caloric intake triggers insulin release, alters serum triglyceride concentrations, and elevates blood glucose. Standard 10-12 hour fasting ensures baseline metabolic equilibrium, preventing false positive readings in lipid and diabetic profiles."
      }
    ]
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
    tags: ["Spirituality", "Philosophy", "Karma", "Consciousness", "Vedic Wisdom"],
    content: `A deep, meditative conversation exploring ancient Vedic wisdom applied to modern stress, ambition, and inner peace. Harshita Dagha explores the essence of detachment, cosmic resonance, and purposeful living.

### Core Insights:
- **Shiva as Pure Consciousness:** Moving beyond mythological portrayals to understand Shiva as the infinite stillness underlying cosmic movement.
- **The Dynamics of Karma:** How intentionality (Sankalpa) shapes causal cycles rather than fatalistic pre-determination.
- **Detached Execution:** How high-performing leaders cultivate radical detachment from outcomes while giving 100% effort to execution.`,
    faqs: [
      {
        question: "How does Vedic philosophy define the concept of Shiva?",
        answer: "In Advaita and Kashmir Shaivism, Shiva is not merely a deity but the infinite, unconditioned ground of all consciousness (Chit) from which energy (Shakti) and material reality manifest. It represents the timeless witness within every human experience."
      },
      {
        question: "How can modern professionals apply Karma theory to reduce mental fatigue?",
        answer: "The Bhagavad Gita's tenet of Nishkama Karma teaches focusing fully on process, craft, and ethical duty while relinquishing obsessive anxiety over external outcomes. This mindset eliminates performance anxiety and preserves cognitive stamina."
      },
      {
        question: "What is the role of deep meditation in executive decision making?",
        answer: "Scientific neuroscience confirms that daily mindfulness down-regulates amygdala reactivity and strengthens the prefrontal cortex, enhancing emotional resilience, strategic perspective, and intuitive clarity."
      }
    ]
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
    tags: ["Aesthetics", "Surgery", "Medical Reality", "Health", "Patient Safety"],
    content: `An unsparing examination of cosmetic surgery in India. Harshita Dagha sits down with senior reconstructive surgeons to discuss patient safety, ethical practice, realistic expectations, and social media dysmorphia.

### Key Revelations:
- **The Accreditation Checklist:** Why choosing an MCh/DNB Plastic Surgeon is non-negotiable over unverified cosmetic practitioners.
- **The Social Media Trap:** Unmasking filtered Instagram results vs. real biological healing timelines.
- **Psychological Screening:** Why ethical surgeons frequently say 'no' to candidates showing signs of Body Dysmorphic Disorder (BDD).`,
    faqs: [
      {
        question: "What qualifications should patients verify before aesthetic surgery in India?",
        answer: "Ensure the surgeon holds an MCh or DNB in Plastic and Reconstructive Surgery recognized by the National Medical Commission (NMC) and is an active member of the Association of Plastic Surgeons of India (APSI). Avoid unregulated clinics using vague terms like 'cosmetologist' without surgical credentials."
      },
      {
        question: "What is the typical recovery timeline for aesthetic surgical procedures?",
        answer: "While primary swelling subsides within 2 to 3 weeks allowing return to desk work, full tissue maturation, scar remodeling, and final lymphatic resolution take between 6 to 12 months."
      },
      {
        question: "How do board-certified surgeons assess patient psychological readiness?",
        answer: "Ethical surgeons conduct comprehensive consultations to ensure the patient has intrinsic motivations, realistic anatomical expectations, and no underlying untreated body dysmorphic conditions."
      }
    ]
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
    content: contentBody,
    faqs: art.faqs
  };
}

// All 19 curated editorial articles mapped to BlogPost format
export const ALL_EDITORIAL_POSTS: BlogPost[] = ARTICLES.map(articleToBlogPost);

export const DEFAULT_ARTICLES: BlogPost[] = ALL_EDITORIAL_POSTS;

