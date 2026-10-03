"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Play, 
  Flame, 
  Sparkles, 
  ArrowRight, 
  ExternalLink,
  BookOpen,
  Film
} from "lucide-react";
import { InstagramIcon } from "@/components/SocialIcons";
import { REELS, ReelItem } from "@/data/reels";

export default function HighlightsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const instagramProfileUrl = "https://www.instagram.com/beingblahblah";

  const categories = [
    "All", 
    "Ravi Kishan & Celebrity", 
    "Cinema & Media", 
    "Founder Grit", 
    "Mindset & Life"
  ];

  const filteredReels = REELS.filter((r) => {
    if (selectedCategory === "All") return true;
    return r.category === selectedCategory;
  });

  const flagshipReel = REELS[0]; // Ravi Kishan Viral Reel

  return (
    <div className="py-12 md:py-20 bg-[#fafaf9] min-h-screen">
      {/* VideoObject & Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "ItemList",
                "name": "Top 10 Show Highlights & Viral Reels",
                "description": "Top viral short-form reels and masterclass highlights from Harshita Dagha on Being Blah Blah.",
                "itemListElement": REELS.map((item, idx) => ({
                  "@type": "ListItem",
                  "position": idx + 1,
                  "name": item.title,
                  "url": `https://www.harshitadagha.in/highlights/${item.id}`
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
              <span>@beingblahblah · Official Top 10 Video Reels & Articles</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-950 tracking-tight mb-4">
              Top 10 Show Highlights & Viral Reels
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Curated 9:16 vertical shorts, celebrity soundbites, and deep-dive editorial essays from <strong className="text-slate-900">Harshita Dagha</strong> on <em>Being Blah Blah</em>. Click any reel to read the full in-depth article with the video reel embedded in the center.
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

        {/* Featured Flagship Banner: Ravi Kishan Viral Reel */}
        {flagshipReel && (
          <div className="relative rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-amber-950 text-white p-6 sm:p-10 border border-amber-500/30 shadow-2xl mb-14 overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Featured Cultural Icon Story · 1.4M+ Plays</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white mb-3 leading-snug">
                  {flagshipReel.title}
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {flagshipReel.articleLead}
                </p>
                
                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href={`/highlights/${flagshipReel.id}`}
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold shadow-lg shadow-amber-400/25 transition-all hover:scale-105 active:scale-95"
                  >
                    <BookOpen className="w-4 h-4 text-slate-950" />
                    <span>Read Full Article & Watch Reel</span>
                    <ArrowRight className="w-4 h-4 text-slate-950" />
                  </Link>

                  <a
                    href={flagshipReel.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-semibold transition-all"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                    <span>Watch Direct on Instagram</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>

              {/* Visual Card for Flagship Reel */}
              <Link 
                href={`/highlights/${flagshipReel.id}`}
                className="relative w-full max-w-[280px] aspect-[9/16] rounded-2xl overflow-hidden border-2 border-amber-400/40 shadow-2xl group shrink-0 block"
              >
                <Image
                  src={flagshipReel.thumbnail}
                  alt={flagshipReel.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                <div className="absolute top-3 left-3 bg-slate-900/90 text-amber-300 text-[10px] font-bold px-2.5 py-1 rounded-full border border-amber-500/40 flex items-center gap-1">
                  <Film className="w-3 h-3" />
                  <span>{flagshipReel.views}</span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-slate-950 ml-0.5" />
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <span className="text-[11px] font-bold text-amber-300 uppercase block mb-1">
                    {flagshipReel.guestName}
                  </span>
                  <p className="text-xs font-bold text-white line-clamp-2">
                    &ldquo;{flagshipReel.quote}&rdquo;
                  </p>
                </div>
              </Link>
            </div>
          </div>
        )}

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

        {/* Top 10 Reels Grid (Direct Page Navigation - NO POPUPS) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredReels.map((reel, idx) => (
            <div
              key={reel.id}
              className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* 9:16 Vertical Thumbnail Card */}
                <Link
                  href={`/highlights/${reel.id}`}
                  className="relative aspect-[9/14] rounded-2xl overflow-hidden mb-5 bg-slate-950 block"
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
                      #{idx + 1} · {reel.category}
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
                </Link>

                {/* Card Title & Quote */}
                <Link href={`/highlights/${reel.id}`}>
                  <h3 className="font-serif font-bold text-lg text-slate-950 group-hover:text-amber-700 transition-colors mb-2 leading-snug">
                    {reel.title}
                  </h3>
                </Link>

                <p className="text-xs text-slate-600 line-clamp-2 italic mb-4 border-l-2 border-amber-400 pl-3 py-0.5">
                  &ldquo;{reel.quote}&rdquo;
                </p>
              </div>

              {/* Bottom Actions: Read Article & Watch Reel */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <Link
                  href={`/highlights/${reel.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-950 group-hover:text-amber-700 transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                  <span>Read Article & Watch Reel</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <a
                  href={reel.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-slate-100 hover:bg-rose-50 text-slate-600 hover:text-rose-600 transition-colors"
                  title="Watch on Instagram"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* WhatsApp & Studio Recording Banner */}
        <div className="rounded-3xl bg-slate-900 text-white p-8 md:p-12 border border-slate-800 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-400 block mb-2">
              Viral Short-Form Video Syndication
            </span>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white tracking-tight mb-2">
              Every guest receives 5 high-converting 4K vertical reels.
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              When you record at our Bandra Kurla Complex (BKC) studio, our post-production desk cuts and captions 5 broadcast-grade viral clips engineered specifically for high engagement on LinkedIn, Instagram, and YouTube.
            </p>
          </div>

          <Link
            href="/be-a-guest"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-rose-500 hover:bg-rose-400 text-white text-xs font-bold transition-all shadow-lg shadow-rose-500/25 shrink-0"
          >
            <span>Apply to Record in Studio A</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </div>
  );
}
