"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Play, 
  Pause, 
  Flame, 
  Sparkles, 
  Share2, 
  ArrowRight, 
  Eye, 
  Clock, 
  Volume2, 
  TrendingUp,
  Radio,
  X
} from "lucide-react";
import { useAudio } from "@/context/AudioContext";
import { EPISODES } from "@/data/episodes";

interface ReelItem {
  id: string;
  title: string;
  category: "Mindset" | "AI & Tech" | "Venture & Startups" | "Studio Life";
  views: string;
  duration: string;
  thumbnail: string;
  quote: string;
  guestName: string;
  guestRole: string;
  relatedEpisodeId: string;
}

export default function HighlightsPage() {
  const { playEpisode, isPlaying, currentEpisode, togglePlay } = useAudio();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalReel, setActiveModalReel] = useState<ReelItem | null>(null);

  const reels: ReelItem[] = [
    {
      id: "reel-1",
      title: "The #1 Cap Table Mistake That Dilutes Founders by 40% Before Series B",
      category: "Venture & Startups",
      views: "248K views",
      duration: "0:58",
      thumbnail: "/images/host.jpg",
      quote: "Never give up pro-rata rights in your seed round just because the lead investor demands a vanity valuation.",
      guestName: "Harshita Dagha",
      guestRole: "with Top VC Managing Partner",
      relatedEpisodeId: "ep-126-zero-to-category-king"
    },
    {
      id: "reel-2",
      title: "Why High-Stakes Decisions Require Managing Dopamine, Not Just Time",
      category: "Mindset",
      views: "312K views",
      duration: "0:52",
      thumbnail: "/images/cover.jpg",
      quote: "Burnout isn't caused by working 14 hours; it's caused by working 2 hours on something that creates chronic cognitive dissonance.",
      guestName: "Harshita Dagha",
      guestRole: "with Neuroscientist & Performance Architect",
      relatedEpisodeId: "ep-128-architecture-of-ambition"
    },
    {
      id: "reel-3",
      title: "Foundational AI Models vs Vertical SaaS: Where the Next Trillion Dollars Belongs",
      category: "AI & Tech",
      views: "185K views",
      duration: "0:45",
      thumbnail: "/images/studio.jpg",
      quote: "Commoditized LLM wrappers are dead. The defensibility lies exclusively in proprietary domain workflows and proprietary training data.",
      guestName: "Harshita Dagha",
      guestRole: "with Silicon Valley AI Founder",
      relatedEpisodeId: "ep-127-beyond-algorithms"
    },
    {
      id: "reel-4",
      title: "Inside Studio A (BKC): Why We Build 0.85 NRC Acoustic Sanctuaries",
      category: "Studio Life",
      views: "142K views",
      duration: "0:39",
      thumbnail: "/images/studio.jpg",
      quote: "When a guest sits down and the city noise vanishes, their voice drops an octave. That is when real truth is recorded.",
      guestName: "Harshita Dagha",
      guestRole: "Behind the Scenes in Mumbai",
      relatedEpisodeId: "ep-125-the-neurochemistry-of-calm"
    },
    {
      id: "reel-5",
      title: "The Art of Unreasonable Negotiation: Silence as a Strategic Weapon",
      category: "Venture & Startups",
      views: "295K views",
      duration: "0:55",
      thumbnail: "/images/host.jpg",
      quote: "In high-stakes boardrooms, whoever speaks first after an uncomfortable term sheet offer has already conceded leverage.",
      guestName: "Harshita Dagha",
      guestRole: "with Veteran M&A Negotiator",
      relatedEpisodeId: "ep-123-mastering-the-unspoken"
    },
    {
      id: "reel-6",
      title: "Autonomous AI Agents in Enterprise: The Shift from Software to Digital Employees",
      category: "AI & Tech",
      views: "210K views",
      duration: "0:48",
      thumbnail: "/images/cover.jpg",
      quote: "We are moving from software you operate to software you manage like a fleet of high-speed junior analysts.",
      guestName: "Harshita Dagha",
      guestRole: "with Enterprise Tech Architect",
      relatedEpisodeId: "ep-119-the-autonomous-economy"
    }
  ];

  const categories = ["All", "Venture & Startups", "Mindset", "AI & Tech", "Studio Life"];

  const filteredReels = reels.filter((r) => {
    if (selectedCategory === "All") return true;
    return r.category === selectedCategory;
  });

  return (
    <div className="py-12 md:py-20 bg-[#fafaf9] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-rose-50 text-rose-900 border border-rose-200 text-xs font-bold uppercase tracking-wider mb-4">
            <Flame className="w-3.5 h-3.5 text-rose-600 fill-rose-600" />
            <span>Shorts, Video Reels & Viral Highlights</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-950 tracking-tight mb-4">
            Bite-Sized Masterclasses & Unscripted Moments
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            High-impact 60-second video reels and viral insights from The Harshita Dagha Show. Unpacking founder resilience, venture mechanics, and backstage revelations from our Mumbai BKC broadcast sanctuary.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-slate-950 text-white shadow-xs"
                  : "bg-white text-slate-600 hover:text-slate-950 border border-slate-200 hover:border-slate-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 9:16 Vertical Video Reels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {filteredReels.map((reel) => {
            return (
              <div
                key={reel.id}
                className="group relative rounded-3xl bg-slate-950 text-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between border border-slate-800"
              >
                {/* 9:16 Aspect Ratio Visual Container */}
                <div className="relative aspect-[9/14] w-full overflow-hidden">
                  <Image
                    src={reel.thumbnail}
                    alt={reel.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-90"
                  />
                  
                  {/* Subtle vignette gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-black/40 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[10px] font-bold text-amber-300 border border-amber-300/30">
                      {reel.category}
                    </span>
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold text-slate-200">
                      <Eye className="w-3 h-3 text-rose-400" />
                      {reel.views}
                    </span>
                  </div>

                  {/* Central Play Button */}
                  <button
                    onClick={() => setActiveModalReel(reel)}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/90 hover:bg-white text-slate-950 flex items-center justify-center shadow-xl group-hover:scale-110 active:scale-95 transition-all cursor-pointer"
                    aria-label="Play Reel"
                  >
                    <Play className="w-6 h-6 fill-current ml-0.5 text-slate-950" />
                  </button>

                  {/* Bottom Text Content inside Reel */}
                  <div className="absolute bottom-4 left-4 right-4 space-y-2">
                    <div className="text-[11px] font-mono text-amber-300 flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      <span>{reel.duration} clip</span>
                      <span>·</span>
                      <span className="text-slate-300 font-sans font-semibold">{reel.guestRole}</span>
                    </div>

                    <h3 className="font-serif font-bold text-base sm:text-lg text-white leading-snug line-clamp-2">
                      {reel.title}
                    </h3>

                    <p className="text-xs text-slate-300 italic line-clamp-2 pt-1 border-t border-white/10">
                      &ldquo;{reel.quote}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-4 bg-slate-900 flex items-center justify-between text-xs font-bold border-t border-slate-800">
                  <button
                    onClick={() => setActiveModalReel(reel)}
                    className="text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Watch Clip</span>
                  </button>

                  <Link
                    href={`/episodes/${reel.relatedEpisodeId}`}
                    className="text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>Full Episode</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Video / Reel Player */}
        {activeModalReel && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
            <div className="relative w-full max-w-md rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-2xl overflow-hidden p-6 space-y-4">
              <button
                onClick={() => setActiveModalReel(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="relative aspect-[9/13] w-full rounded-2xl overflow-hidden bg-black flex items-center justify-center">
                <Image
                  src={activeModalReel.thumbnail}
                  alt={activeModalReel.title}
                  fill
                  className="object-cover opacity-60"
                />
                <div className="relative z-10 text-center p-6 space-y-3">
                  <div className="w-16 h-16 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center mx-auto shadow-xl animate-pulse">
                    <Volume2 className="w-8 h-8" />
                  </div>
                  <span className="text-xs font-bold text-amber-300 tracking-wider uppercase block">
                    Audio Clip Playing
                  </span>
                  <p className="font-serif font-bold text-lg text-white">
                    {activeModalReel.title}
                  </p>
                  <p className="text-xs text-slate-300 italic">
                    &ldquo;{activeModalReel.quote}&rdquo;
                  </p>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-slate-400">{activeModalReel.views}</span>
                <Link
                  href={`/episodes/${activeModalReel.relatedEpisodeId}`}
                  onClick={() => setActiveModalReel(null)}
                  className="px-4 py-2 rounded-full bg-white text-slate-950 text-xs font-bold hover:bg-amber-400 transition-colors"
                >
                  Listen to Full 60-Min Episode →
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* WhatsApp Consultation / Syndication Banner */}
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
