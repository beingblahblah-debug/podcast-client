"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Radio, 
  Search, 
  Sparkles, 
  Clock, 
  ArrowRight, 
  Filter, 
  ExternalLink,
  Flame,
  CheckCircle2,
  Mic2,
  Play
} from "lucide-react";
import { EPISODES, Episode } from "@/data/episodes";
import EpisodeCard from "@/components/EpisodeCard";
import { YouTubeIcon } from "@/components/SocialIcons";

interface TopPodcastVideo {
  id: string;
  youtubeId: string;
  title: string;
  guest: string;
  role: string;
  category: string;
  duration: string;
  views: string;
  badge: string;
  description: string;
}

const TOP_PODCAST_VIDEOS: TopPodcastVideo[] = [
  {
    id: "divorce-family-law",
    youtubeId: "UIEBj-3enk0",
    title: "Legal Secrets Unveiled | Divorce & Family Law Explained | Know Your Rights & Real Advice",
    guest: "Senior Family Advocates",
    role: "Legal & Matrimonial Strategists",
    category: "Legal & Rights",
    duration: "45 mins",
    views: "128K views",
    badge: "Trending #1 Masterclass",
    description: "An unscripted, high-depth masterclass dialogue examining matrimonial rights, divorce laws, child custody, asset division, and legal defense frameworks in India."
  },
  {
    id: "scaling-with-geo",
    youtubeId: "K_6wJPU-sQw",
    title: "Agency Founder Reveals How We Scale Reach with GEO | Generative Engine Optimization",
    guest: "Harshita Dagha",
    role: "Founder, Beingblahblah",
    category: "GEO & AI Strategy",
    duration: "52 mins",
    views: "94K views",
    badge: "Strategy Masterclass",
    description: "How high-growth brands and personal brands dominate AI search queries across ChatGPT, Google Gemini, Perplexity, and DeepSeek using Generative Engine Optimization."
  },
  {
    id: "truth-about-pathology",
    youtubeId: "p7UxBljaKys",
    title: "The Truth About Pathology, Blood Tests & Lab Reports | Doctor Podcast",
    guest: "Senior Pathology Specialists",
    role: "Diagnostic Medicine & Healthcare",
    category: "Healthcare & Diagnostics",
    duration: "38 mins",
    views: "64K views",
    badge: "Doctor Podcast Special",
    description: "What do your blood tests really indicate? A revealing masterclass conversation on preventive diagnostics, lab accuracy, and early biomarker detection."
  },
  {
    id: "universe-karma-shiva",
    youtubeId: "03YJwVMV0D8",
    title: "The Truth About the Universe, Karma & Shiva | Must-Watch Spiritual Podcast",
    guest: "Spiritual Philosopher & Author",
    role: "Vedanta & Consciousness",
    category: "Spirituality & Philosophy",
    duration: "65 mins",
    views: "142K views",
    badge: "Spiritual Dialogue",
    description: "A contemplative masterclass dialogue exploring cosmic energy, karmic cycles, consciousness, and the timeless philosophy of Shiva in everyday modern life."
  },
  {
    id: "truth-about-plastic-surgery",
    youtubeId: "2puQ59SOAwQ",
    title: "The Truth About Plastic | What Surgeons Don’t Tell You | Plastic Surgery Facts & Risks",
    guest: "Board-Certified Aesthetic Surgeons",
    role: "Cosmetic Surgery & Dermatology",
    category: "Medical Reality",
    duration: "49 mins",
    views: "81K views",
    badge: "Medical Masterclass",
    description: "Unfiltered truths about aesthetic procedures, recovery realities, surgical risks, and the psychological impact of cosmetic treatments."
  }
];

export default function EpisodesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedVideo, setSelectedVideo] = useState<TopPodcastVideo>(TOP_PODCAST_VIDEOS[0]);

  const categories = [
    "All",
    "Leadership",
    "Tech & AI",
    "Mindset",
    "Creative Life",
    "Culture"
  ];

  const filteredEpisodes = EPISODES.filter((ep) => {
    const matchesCategory = selectedCategory === "All" || ep.category === selectedCategory;
    const matchesQuery = searchQuery === "" || 
      ep.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ep.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ep.guest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ep.guest.company.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="py-12 md:py-20 bg-[#0c0c0e] text-[#f4f4f5] min-h-screen">
      {/* Structured Schema: ItemList & BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "ItemList",
                "name": "The Harshita Dagha Show Masterclass Episodes Archive",
                "description": "Complete collection of executive interviews and masterclass conversations hosted by Harshita Dagha.",
                "itemListElement": EPISODES.map((item, idx) => ({
                  "@type": "ListItem",
                  "position": idx + 1,
                  "name": item.title,
                  "url": `https://www.harshitadagha.in/episodes/${item.id}`
                }))
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
                    "name": "Episodes",
                    "item": "https://www.harshitadagha.in/episodes"
                  }
                ]
              }
            ]
          })
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Banner */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d89ba4]/10 text-[#d89ba4] border border-[#d89ba4]/25 text-xs font-semibold uppercase tracking-wider mb-4">
            <Radio className="w-3.5 h-3.5 text-[#d89ba4]" />
            <span>Masterclass Library</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-tight mb-4">
            The Harshita Dagha Show Archive
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            Unscripted, high-depth masterclass dialogues with unicorn startup founders, venture capitalists, and industry leaders. Recorded in Bandra Kurla Complex (BKC), Mumbai and syndicated across 150+ countries.
          </p>

          {/* Quick Stats Strip */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400">
            <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
              🎙️ <strong>10+</strong> Executive Masterclasses
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
              🌍 <strong>5.2M+</strong> Global Streams
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
              ⭐ <strong>4.97</strong> Top 1% Rating
            </span>
          </div>
        </div>

        {/* =========================================================================
            FEATURED FULL VIDEO PODCAST PLAYER (TOP PODCAST STREAM)
            ========================================================================= */}
        <section 
          id="featured-video-player"
          aria-label="Featured Full Video Podcast"
          className="mb-14 rounded-3xl bg-[#141418] border border-white/10 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden"
        >
          {/* Ambient lighting glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#d89ba4]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Banner Tag */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/15 text-red-400 border border-red-500/25 text-xs font-bold uppercase tracking-wider mb-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <span>Featured Full Video Podcast · Watch Direct on Page</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                Watch Full Masterclass Episode (4K Video)
              </h2>
            </div>

            {/* YouTube Channel Link */}
            <a
              href="https://www.youtube.com/@harshitadagha"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold shadow-lg shadow-red-600/30 hover:scale-105 active:scale-95 transition-all shrink-0 cursor-pointer self-start sm:self-auto"
            >
              <YouTubeIcon className="w-4 h-4 fill-white" />
              <span>Subscribe on YouTube (@harshitadagha)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* The Main 16:9 Video Player */}
          <div className="relative aspect-video w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black mb-6 z-10">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${selectedVideo.youtubeId}?autoplay=0&rel=0&modestbranding=1&playsinline=1`}
              title={selectedVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>

          {/* Active Video Details Bar */}
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-2 flex-wrap text-xs">
                <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[#d89ba4] font-semibold uppercase tracking-wider text-[11px]">
                  {selectedVideo.category}
                </span>
                <span className="text-zinc-500">·</span>
                <span className="text-zinc-400 font-mono flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {selectedVideo.duration}
                </span>
                <span className="text-zinc-500">·</span>
                <span className="text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 text-[11px]">
                  {selectedVideo.badge}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-bold text-white mb-2 leading-snug">
                {selectedVideo.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {selectedVideo.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="https://www.youtube.com/@harshitadagha"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/15 text-white border border-white/15 text-xs font-bold flex items-center gap-2 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <YouTubeIcon className="w-4 h-4 fill-red-500" />
                <span>Visit YouTube Channel</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            </div>
          </div>

          {/* Quick Playlist / Video Switcher */}
          <div className="mt-6 relative z-10">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                Select from Top Masterclass Episodes:
              </span>
              <span className="text-[11px] text-zinc-500 font-mono">
                5 Full Video Episodes Available
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {TOP_PODCAST_VIDEOS.map((vid) => {
                const isSelected = selectedVideo.id === vid.id;
                return (
                  <button
                    key={vid.id}
                    onClick={() => setSelectedVideo(vid)}
                    className={`p-3 rounded-2xl text-left transition-all border cursor-pointer flex flex-col justify-between group ${
                      isSelected
                        ? "bg-red-600/15 border-red-500/50 shadow-md ring-1 ring-red-500/30"
                        : "bg-[#0c0c0e] hover:bg-white/5 border-white/10 hover:border-white/20"
                    }`}
                  >
                    <div>
                      <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-2 border border-white/10 bg-black">
                        <img
                          src={`https://img.youtube.com/vi/${vid.youtubeId}/mqdefault.jpg`}
                          alt={vid.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            isSelected ? "bg-red-600 text-white shadow-lg" : "bg-black/60 text-white"
                          }`}>
                            <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                          </div>
                        </div>
                        <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/80 text-[10px] font-mono text-zinc-200">
                          {vid.duration}
                        </span>
                      </div>
                      <h4 className={`text-xs font-serif font-bold line-clamp-2 mb-1 ${
                        isSelected ? "text-white" : "text-zinc-200 group-hover:text-white"
                      }`}>
                        {vid.title}
                      </h4>
                    </div>
                    <span className="text-[10px] text-zinc-400 mt-2 block font-medium">
                      {vid.badge}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Filter & Search Bar */}
        <div className="mb-10 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-3xl bg-[#141418] border border-white/10 shadow-lg">
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#d89ba4] text-zinc-950 shadow-md"
                    : "bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search guest or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-[#0c0c0e] border border-white/15 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-[#d89ba4] transition-colors"
            />
          </div>
        </div>

        {/* Episode Grid */}
        {filteredEpisodes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredEpisodes.map((ep) => (
              <EpisodeCard key={ep.id} episode={ep} highlightRank={true} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center rounded-3xl bg-[#141418] border border-white/10 mb-16">
            <Radio className="w-10 h-10 text-zinc-600 mx-auto mb-3" />
            <h3 className="font-serif font-bold text-lg text-white mb-1">No episodes found</h3>
            <p className="text-xs text-zinc-400">
              Try adjusting your category filter or search terms.
            </p>
          </div>
        )}

        {/* VIP Newsletter & Booking Prompt */}
        <div className="p-8 md:p-12 rounded-3xl bg-[#141418] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d89ba4]/10 text-[#d89ba4] border border-[#d89ba4]/25 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#d89ba4]" />
              <span>Studio Guest Bookings</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-tight mb-2">
              Want to be featured on The Harshita Dagha Show?
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              We record executive masterclass dialogues at our flagship BKC studio in Mumbai, as well as on-location in Bengaluru, Delhi NCR, and Hyderabad.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/be-a-guest"
              className="px-6 py-3.5 rounded-full bg-[#d89ba4] hover:bg-[#e2a8b1] text-zinc-950 font-bold text-xs transition-transform hover:scale-105 shadow-md"
            >
              Apply to Be a Guest →
            </Link>
            <Link
              href="/highlights"
              className="px-6 py-3.5 rounded-full bg-[#181820] hover:bg-[#202028] border border-white/15 text-white text-xs font-semibold transition-colors"
            >
              Watch Viral Highlights
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
