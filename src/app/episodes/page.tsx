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
  Mic2
} from "lucide-react";
import { EPISODES, Episode } from "@/data/episodes";
import EpisodeCard from "@/components/EpisodeCard";

export default function EpisodesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

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
        <div className="max-w-3xl mb-12">
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
