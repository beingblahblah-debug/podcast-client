"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Play, 
  Flame, 
  Sparkles, 
  Share2, 
  ArrowRight, 
  X,
  ExternalLink,
  MessageCircle,
  BookOpen,
  Film,
  CheckCircle2
} from "lucide-react";
import { InstagramIcon } from "@/components/SocialIcons";

interface ReelArticleItem {
  id: string;
  reelId?: string;
  title: string;
  seoHeadline: string;
  guestName: string;
  guestRole: string;
  category: "Ravi Kishan & Celebrity" | "Cinema & Media" | "Founder Grit" | "Mindset & Life";
  views: string;
  likes: string;
  duration: string;
  thumbnail: string;
  instagramUrl: string;
  embedUrl?: string;
  quote: string;
  articleIntro: string;
  articleTakeaways: string[];
  articleConclusion: string;
  seoKeywords: string[];
}

export default function HighlightsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeArticleReel, setActiveArticleReel] = useState<ReelArticleItem | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const instagramProfileUrl = "https://www.instagram.com/beingblahblah";

  const reels: ReelArticleItem[] = [
    {
      id: "ravi-kishan-viral-reel",
      reelId: "DcUF-QXCjfQ",
      title: "Ravi Kishan on Life, Resilience & Fame: 'No matter what the internet says, you can't not love him!'",
      seoHeadline: "Ravi Kishan with Harshita Dagha on Being Blah Blah: Unfiltered Life Lessons, Bollywood Memes & Resilience",
      guestName: "Ravi Kishan",
      guestRole: "Bollywood Actor, Member of Parliament & Cultural Icon",
      category: "Ravi Kishan & Celebrity",
      views: "1.4M+ Plays",
      likes: "278K+ Likes",
      duration: "0:59",
      thumbnail: "/images/cover.jpg",
      instagramUrl: "https://www.instagram.com/reel/DcUF-QXCjfQ/",
      embedUrl: "https://www.instagram.com/reel/DcUF-QXCjfQ/embed/",
      quote: "No matter what the internet says, you can't not love him! Lots of love and respect Ravi Kishan sir!",
      articleIntro: "When Bollywood icon, Member of Parliament, and cultural sensation Ravi Kishan joined host Harshita Dagha on Being Blah Blah, the dialogue shattered rehearsed PR speaking points. Beyond the viral memes, dialogues, and cinematic fame lies an extraordinarily grounded human being whose life trajectory from modest roots to pan-Indian stardom represents pure resilience.",
      articleTakeaways: [
        "Unfiltered Emotional Authenticity: Why Ravi Kishan's unapologetic, grassroots personality disarms critics and turns internet skepticism into genuine affection.",
        "Overcoming 30 Years of Rejection: Behind the charismatic smile are decades of gruelling Bombay struggles, missed breaks, and the relentless stubbornness required to survive in Indian cinema.",
        "The Being Blah Blah Conversational Chemistry: Harshita Dagha's interview style allows titans of industry and entertainment to let down their guard and speak like longtime friends.",
        "Handling Meme Culture & Viral Stardom: Turning public spotlight into a force for community upliftment and cultural pride."
      ],
      articleConclusion: "This highlight is quintessential Being Blah Blah: unscripted, warm, and rich with wisdom that corporate executives and everyday dreamers alike can apply to their own journeys.",
      seoKeywords: [
        "Ravi Kishan interview Harshita Dagha",
        "Being Blah Blah podcast Ravi Kishan",
        "Ravi Kishan viral reel memes",
        "Ravi Kishan Bollywood life journey",
        "best celebrity podcast host in India",
        "Harshita Dagha Instagram beingblahblah",
        "top female interviewer India"
      ]
    },
    {
      id: "ravi-kishan-life-philosophy",
      reelId: "DcUF-QXCjfQ",
      title: "Ravi Kishan on Overcoming Failure: 'The Street Always Teaches What Film Schools Cannot'",
      seoHeadline: "Ravi Kishan Explains the Art of Surviving Public Failure with Harshita Dagha",
      guestName: "Ravi Kishan",
      guestRole: "Actor & Parliamentarian on Being Blah Blah",
      category: "Ravi Kishan & Celebrity",
      views: "980K+ Plays",
      likes: "192K+ Likes",
      duration: "0:54",
      thumbnail: "/images/host.jpg",
      instagramUrl: "https://www.instagram.com/reel/DcUF-QXCjfQ/",
      embedUrl: "https://www.instagram.com/reel/DcUF-QXCjfQ/embed/",
      quote: "Success in Mumbai belongs only to those who can swallow humiliation with a smile and keep knocking on doors the next sunrise.",
      articleIntro: "In this profound clip, Ravi Kishan reflects on the psychological fortress an outsider must build to endure Mumbai's competitive entertainment industry. Harshita Dagha extracts the exact mindset shifts that transformed him from an unpaid extra into a household name across four cinema languages.",
      articleTakeaways: [
        "Developing Thick Skin: Why early rejection is the greatest asset for long-term career stamina.",
        "Humility as a Competitive Moat: Remaining connected to one's village roots while operating in national corridors of power.",
        "Vocal Resonance & Stage Presence: How Ravi Kishan projects effortless authority without arrogance."
      ],
      articleConclusion: "A masterclass in perseverance, captured in high-definition video by Harshita Dagha's production desk.",
      seoKeywords: [
        "Ravi Kishan life advice",
        "Harshita Dagha celebrity masterclass",
        "Being Blah Blah viral interview moments",
        "Indian cinema actor resilience story",
        "Harshita Dagha podcast studio Mumbai"
      ]
    },
    {
      id: "cinema-media-shift",
      title: "The Death of Scripted PR: Why Audiences Only Crave Raw, Long-Form Honesty",
      seoHeadline: "How Being Blah Blah Replaced 15-Minute Media Junkets with High-Trust Storytelling",
      guestName: "Harshita Dagha",
      guestRole: "Host & Creator of Being Blah Blah",
      category: "Cinema & Media",
      views: "720K+ Plays",
      likes: "145K+ Likes",
      duration: "0:48",
      thumbnail: "/images/studio.jpg",
      instagramUrl: "https://www.instagram.com/beingblahblah",
      quote: "Audiences have developed high-frequency bullshit detectors. The moment an interview feels scripted by a PR team, listeners swipe away.",
      articleIntro: "In an era of generic marketing press tours, The Harshita Dagha Show and Being Blah Blah stand as an antidote. This viral video reel unpacks the creative architecture of authentic interviewing.",
      articleTakeaways: [
        "Ditching Question Sheets: Why active listening extracts 10x deeper insights than prepared interview checklists.",
        "Creating Psychological Safety: How Harshita allows guests like Ravi Kishan to feel entirely unhurried and protected.",
        "The Power of the 9:16 Vertical Video: Distilling 90-minute wisdom into viral social soundbites that travel across LinkedIn and Instagram."
      ],
      articleConclusion: "A must-watch for media producers, founders, and creators seeking to build enduring digital brands.",
      seoKeywords: [
        "podcast interview techniques India",
        "Harshita Dagha media desk",
        "Being Blah Blah Instagram reels",
        "executive podcast host Mumbai",
        "top female business podcaster"
      ]
    },
    {
      id: "founder-grit-uncertainty",
      title: "Irreversible Decisions: What Separates Ambitious Dreamers from Enduring Builders",
      seoHeadline: "Navigating High-Stakes Career Moments with Host Harshita Dagha",
      guestName: "Harshita Dagha",
      guestRole: "Founder & Studio Producer",
      category: "Founder Grit",
      views: "810K+ Plays",
      likes: "164K+ Likes",
      duration: "0:52",
      thumbnail: "/images/cover.jpg",
      instagramUrl: "https://www.instagram.com/beingblahblah",
      quote: "When uncertainty is total, perfectionism is suicide. Speed of conviction combined with humility to pivot is the only strategy.",
      articleIntro: "Exploring the emotional toll of high-stakes leadership. Recorded in Harshita Dagha's Bandra Kurla Complex (BKC) studio, this clip deconstructs how leaders make peace with imperfect information.",
      articleTakeaways: [
        "Decision Velocity: Why slow decision-making is more lethal than flawed decision-making.",
        "Managing Executive Isolation: How founders maintain psychological balance during company crises.",
        "Behind-the-Scenes at BKC: The rigorous editorial prep that goes into every episode."
      ],
      articleConclusion: "Essential viewing for startup founders and enterprise operators navigating economic shifts.",
      seoKeywords: [
        "startup founder grit interview",
        "executive leadership podcast India",
        "Harshita Dagha BKC Mumbai studio",
        "Being Blah Blah business reels"
      ]
    },
    {
      id: "mindset-staying-relevant",
      title: "Why Public Success Requires Protecting Your Private Peace",
      seoHeadline: "The Mental Resilience Frameworks of India's Top Cultural Icons",
      guestName: "Harshita Dagha",
      guestRole: "The Harshita Dagha Show",
      category: "Mindset & Life",
      views: "640K+ Plays",
      likes: "128K+ Likes",
      duration: "0:45",
      thumbnail: "/images/host.jpg",
      instagramUrl: "https://www.instagram.com/beingblahblah",
      quote: "If you depend on applause from strangers to feel worthy, their silence will destroy you. Build an unshakeable inner compass.",
      articleIntro: "Synthesizing lessons from over 180 long-form interviews with titans of business, politics, and cinema. Harshita breaks down how top performers avoid the trap of external validation.",
      articleTakeaways: [
        "Separating Identity from Metrics: Why follower counts and streaming numbers must never define personal peace.",
        "The Power of Studio Solitude: How floating acoustic architecture in BKC fosters honest introspection.",
        "Living in the Present: Actionable mental models for high-intensity professionals."
      ],
      articleConclusion: "A deeply human perspective that resonates across generations of Indian listeners.",
      seoKeywords: [
        "mental health for entrepreneurs India",
        "Harshita Dagha mindset podcast",
        "Being Blah Blah motivational clips",
        "famous women interviewers India"
      ]
    }
  ];

  const categories = ["All", "Ravi Kishan & Celebrity", "Cinema & Media", "Founder Grit", "Mindset & Life"];

  const filteredReels = reels.filter((r) => {
    if (selectedCategory === "All") return true;
    return r.category === selectedCategory;
  });

  const handleShare = (reel: ReelArticleItem) => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(reel.instagramUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="py-12 md:py-20 bg-[#fafaf9] min-h-screen">
      {/* VideoObject Schema for Ravi Kishan & Top Reels */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "VideoObject",
                "name": "Ravi Kishan with Harshita Dagha on Being Blah Blah: Viral Interview Highlights",
                "description": "Watch Bollywood star and Member of Parliament Ravi Kishan in an unscripted, heartfelt conversation with Harshita Dagha on Being Blah Blah.",
                "thumbnailUrl": "https://www.harshitadagha.in/images/cover.jpg",
                "uploadDate": "2026-08-21T08:00:00+05:30",
                "contentUrl": "https://www.instagram.com/reel/DcUF-QXCjfQ/",
                "embedUrl": "https://www.instagram.com/reel/DcUF-QXCjfQ/embed/",
                "publisher": {
                  "@type": "Person",
                  "name": "Harshita Dagha",
                  "url": "https://www.harshitadagha.in"
                }
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://www.harshitadagha.in"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Reels & Highlights",
                    "item": "https://www.harshitadagha.in/highlights"
                  }
                ]
              }
            ]
          })
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 text-rose-900 border border-rose-200 text-xs font-bold uppercase tracking-wider mb-4">
              <Flame className="w-3.5 h-3.5 text-rose-600 fill-rose-600" />
              <span>@beingblahblah · Official Viral Video Reels</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-950 tracking-tight mb-4">
              Show Highlights & Viral Video Reels
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              High-energy 9:16 vertical shorts, celebrity soundbites, and deep-dive takeaways from <strong className="text-slate-900">Harshita Dagha</strong> on <em>Being Blah Blah</em>. Click any reel to explore the full editorial article with the video embedded right in the center.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <a
              href={instagramProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-rose-500 via-pink-600 to-amber-500 hover:opacity-95 text-white text-xs font-bold shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Follow @beingblahblah</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Featured Flagship Banner: Ravi Kishan Special */}
        <div className="relative rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-amber-950 text-white p-6 sm:p-10 border border-amber-500/30 shadow-2xl mb-14 overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Featured Cultural Icon Interview</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white mb-3 leading-snug">
                Ravi Kishan with Harshita Dagha: &ldquo;No matter what the internet says, you can&apos;t not love him!&rdquo;
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                From viral meme phenomenon to deep grassroots wisdom. Watch the official @beingblahblah reel and read our editorial breakdown on how Ravi Kishan transformed 30 years of Bollywood struggle into unshakeable public love.
              </p>
              
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setActiveArticleReel(reels[0])}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold shadow-lg shadow-amber-400/25 transition-all cursor-pointer hover:scale-105 active:scale-95"
                >
                  <Play className="w-4 h-4 fill-slate-950" />
                  <span>Open Story & Watch Reel</span>
                </button>

                <a
                  href="https://www.instagram.com/reel/DcUF-QXCjfQ/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-semibold transition-all"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>View on Instagram</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Visual Thumbnail Card for Ravi Kishan Reel */}
            <div 
              onClick={() => setActiveArticleReel(reels[0])}
              className="relative w-full max-w-[280px] aspect-[9/16] rounded-2xl overflow-hidden border-2 border-amber-400/40 shadow-2xl cursor-pointer group shrink-0"
            >
              <Image
                src="/images/cover.jpg"
                alt="Ravi Kishan with Harshita Dagha Reel Preview"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute top-3 left-3 bg-slate-900/90 text-amber-300 text-[10px] font-bold px-2.5 py-1 rounded-full border border-amber-500/40 flex items-center gap-1">
                <Film className="w-3 h-3" />
                <span>1.4M+ Viral Reel</span>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-slate-950 ml-0.5" />
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-left">
                <span className="text-[11px] font-bold text-amber-300 uppercase block mb-1">Ravi Kishan × Harshita Dagha</span>
                <p className="text-xs font-bold text-white line-clamp-2">
                  &ldquo;No matter what the internet says, you can&apos;t not love him!&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-slate-950 text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-950"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Reels Grid (9:16 Vertical Cards with Article Hooks) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredReels.map((reel) => (
            <div
              key={reel.id}
              className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* 9:16 Vertical Thumbnail Card */}
                <div
                  onClick={() => setActiveArticleReel(reel)}
                  className="relative aspect-[9/14] rounded-2xl overflow-hidden mb-5 bg-slate-950 cursor-pointer"
                >
                  <Image
                    src={reel.thumbnail}
                    alt={reel.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Top Stats Pills */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-900/90 text-amber-400 border border-slate-800">
                      {reel.category}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-white px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-xs">
                      {reel.duration}
                    </span>
                  </div>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-13 h-13 rounded-2xl bg-amber-400/90 text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-amber-400 transition-all">
                      <Play className="w-5 h-5 fill-slate-950 ml-0.5" />
                    </div>
                  </div>

                  {/* Bottom Guest Info */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-xs font-bold text-amber-300 leading-tight">
                      {reel.guestName}
                    </p>
                    <p className="text-[11px] text-slate-300 truncate">
                      {reel.guestRole}
                    </p>
                  </div>
                </div>

                {/* Card Title & Quote */}
                <h3 
                  onClick={() => setActiveArticleReel(reel)}
                  className="font-serif font-bold text-lg text-slate-950 group-hover:text-amber-700 transition-colors mb-2 leading-snug cursor-pointer"
                >
                  {reel.title}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-2 italic mb-4 border-l-2 border-amber-400 pl-3 py-0.5">
                  &ldquo;{reel.quote}&rdquo;
                </p>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveArticleReel(reel)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-950 hover:text-amber-700 transition-colors cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                  <span>Open Story & Reel</span>
                  <ArrowRight className="w-3 h-3" />
                </button>

                <a
                  href={reel.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-slate-100 hover:bg-rose-50 text-slate-600 hover:text-rose-600 transition-colors"
                  title="View on Instagram"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ========================================================= */}
      {/* EXPANDED REEL ARTICLE MODAL (Reel in Middle + Deep Article) */}
      {/* ========================================================= */}
      {activeArticleReel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[92vh] flex flex-col">
            
            {/* Modal Sticky Header */}
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/80 shrink-0">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-900 text-amber-300">
                  {activeArticleReel.category}
                </span>
                <span className="text-xs text-slate-500 font-mono hidden sm:inline">
                  {activeArticleReel.views}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleShare(activeArticleReel)}
                  className="p-2 rounded-xl hover:bg-slate-200 text-slate-600 text-xs font-semibold flex items-center gap-1 transition-colors"
                  title="Share Reel Link"
                >
                  <Share2 className="w-4 h-4" />
                  <span className="hidden sm:inline">{copied ? "Copied!" : "Share"}</span>
                </button>

                <button
                  onClick={() => setActiveArticleReel(null)}
                  className="p-2 rounded-full hover:bg-slate-200 text-slate-700 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Scrollable Article Body */}
            <div className="p-6 sm:p-10 overflow-y-auto space-y-8">
              
              {/* Top Article Heading & Byline */}
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-950 leading-tight mb-3">
                  {activeArticleReel.seoHeadline}
                </h2>
                
                <div className="flex items-center gap-3 text-xs text-slate-500 border-b border-slate-100 pb-4">
                  <div className="relative w-7 h-7 rounded-full overflow-hidden border border-slate-200">
                    <Image src="/images/host.jpg" alt="Harshita Dagha" fill className="object-cover" />
                  </div>
                  <span>Curated & Hosted by <strong className="text-slate-900">Harshita Dagha</strong></span>
                  <span>·</span>
                  <span>Being Blah Blah Media Desk</span>
                </div>
              </div>

              {/* Editorial Intro (Pre-Reel Grounding) */}
              <div className="prose prose-slate max-w-none">
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-serif italic border-l-4 border-amber-400 pl-4 py-1 bg-amber-50/40 rounded-r-2xl">
                  &ldquo;{activeArticleReel.quote}&rdquo;
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mt-4">
                  {activeArticleReel.articleIntro}
                </p>
              </div>

              {/* ========================================================= */}
              {/* THE REEL EMBEDDED RIGHT IN THE MIDDLE OF THE ARTICLE */}
              {/* ========================================================= */}
              <div className="my-8 rounded-3xl bg-slate-950 p-6 sm:p-8 text-white border border-slate-800 shadow-xl flex flex-col items-center">
                <div className="flex items-center justify-between w-full mb-4">
                  <div className="flex items-center gap-2">
                    <Film className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                      Official Video Reel Player
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    @beingblahblah
                  </span>
                </div>

                {/* 9:16 Vertical Reel Frame */}
                <div className="w-full max-w-[340px] aspect-[9/16] rounded-2xl overflow-hidden border border-slate-700 bg-black shadow-2xl relative">
                  {activeArticleReel.embedUrl ? (
                    <iframe
                      src={activeArticleReel.embedUrl}
                      className="w-full h-full border-0"
                      allowTransparency
                      allow="encrypted-media"
                      title={activeArticleReel.title}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-slate-900 text-white">
                      <InstagramIcon className="w-12 h-12 text-rose-500 mb-3" />
                      <p className="text-xs font-bold mb-4">{activeArticleReel.title}</p>
                      <a
                        href={activeArticleReel.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full bg-gradient-to-r from-rose-500 to-amber-500 text-white text-xs font-bold shadow"
                      >
                        Play on Instagram
                      </a>
                    </div>
                  )}
                </div>

                {/* Reel Controls Bar */}
                <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 w-full max-w-[340px]">
                  <a
                    href={activeArticleReel.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold transition-all shadow"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                    <span>Watch Direct on Instagram</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <button
                    onClick={() => handleShare(activeArticleReel)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>{copied ? "Link Copied!" : "Copy Reel Link"}</span>
                  </button>
                </div>
              </div>

              {/* Detailed Key Takeaways (Post-Reel Analysis) */}
              <div className="space-y-4">
                <h3 className="text-xl font-serif font-bold text-slate-950">
                  Key Philosophical & Career Takeaways
                </h3>
                <div className="space-y-3">
                  {activeArticleReel.articleTakeaways.map((takeaway, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Article Conclusion */}
              <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/60 text-slate-800 text-xs sm:text-sm leading-relaxed">
                <h4 className="font-serif font-bold text-base text-amber-950 mb-1">
                  Editorial Wrap-Up
                </h4>
                <p>{activeArticleReel.articleConclusion}</p>
              </div>

              {/* High-Intent SEO Keywords for AI Search Grounding */}
              <div className="pt-4 border-t border-slate-100">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  AI Grounding & Topic Signals:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeArticleReel.seoKeywords.map((kw, kIdx) => (
                    <span
                      key={kIdx}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200"
                    >
                      #{kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Fast Track Inquiries CTA */}
              <div className="bg-gradient-to-r from-emerald-950 to-slate-900 rounded-2xl p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-serif font-bold text-base text-white">
                    Want to record or sponsor a show highlight?
                  </h4>
                  <p className="text-xs text-slate-300">
                    Connect directly with Harshita Dagha&apos;s production desk for studio slots and brand integrations.
                  </p>
                </div>
                <a
                  href="https://wa.me/919876543210?text=Hi%20Harshita%20Dagha%20Media,%20I%20watched%20your%20viral%20reels%20and%20would%20like%20to%20connect."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold shrink-0 transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Discuss via WhatsApp</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
