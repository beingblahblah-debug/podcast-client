"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Flame, 
  Trophy, 
  Play, 
  Pause, 
  Headphones, 
  Star, 
  ArrowRight, 
  Sparkles,
  TrendingUp,
  Clock,
  Award,
  Mic2
} from "lucide-react";
import { EPISODES, Episode } from "@/data/episodes";

export default function Top10Section({ isFullPage = false }: { isFullPage?: boolean }) {
  const [filter, setFilter] = useState<"all" | "trending" | "business">("all");

  const top10Episodes = EPISODES.filter((ep) => ep.isTop10).sort((a, b) => (a.rank || 99) - (b.rank || 99));

  const filteredEpisodes = top10Episodes.filter((ep) => {
    if (filter === "trending") return (ep.rank || 99) <= 5;
    if (filter === "business") return ep.category === "Leadership" || ep.category === "Tech & AI";
    return true;
  });

  const displayList = isFullPage ? filteredEpisodes : filteredEpisodes.slice(0, 7);

  const getRankBadgeClass = (rank: number) => {
    if (rank === 1) {
      return "bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 font-black shadow-lg shadow-amber-500/25";
    }
    if (rank === 2) {
      return "bg-gradient-to-br from-slate-200 to-slate-400 text-slate-950 font-bold shadow-md";
    }
    if (rank === 3) {
      return "bg-gradient-to-br from-amber-700 to-amber-900 text-amber-100 font-bold shadow-md";
    }
    return "bg-slate-100 text-slate-700 font-semibold border border-slate-200";
  };

  return (
    <section className="relative py-20 bg-slate-50/70 border-y border-slate-200/60 overflow-hidden">
      {/* Decorative ambient background accents */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-gradient-to-b from-amber-200/20 via-orange-100/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300/60 text-xs font-bold uppercase tracking-wider mb-3">
              <Trophy className="w-3.5 h-3.5 text-amber-600" />
              <span>Listener Hall of Fame</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-950 tracking-tight">
              Top 10 Chart-Toppers
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
              The ten most downloaded, shared, and influential conversations in the history of The Harshita Dagha Show, curated by listener impact and stream metrics.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm shrink-0 self-start md:self-auto">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === "all"
                  ? "bg-slate-950 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-950 hover:bg-slate-50"
              }`}
            >
              All Top 10
            </button>
            <button
              onClick={() => setFilter("trending")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                filter === "trending"
                  ? "bg-slate-950 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-950 hover:bg-slate-50"
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>Top 5 Trending</span>
            </button>
            <button
              onClick={() => setFilter("business")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                filter === "business"
                  ? "bg-slate-950 text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-950 hover:bg-slate-50"
              }`}
            >
              Tech & Leadership
            </button>
          </div>
        </div>

        {/* Top 10 List */}
        <div className="space-y-3.5">
          {displayList.map((episode) => {
            const rank = episode.rank || 0;

            return (
              <div
                key={episode.id}
                className="group relative rounded-2xl bg-white p-4 sm:p-5 border border-slate-200/80 hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
              >
                {/* Left block: Rank & Play & Title */}
                <div className="flex items-center space-x-4 min-w-0 flex-1">
                  
                  {/* Rank number badge */}
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-2xl shrink-0 flex items-center justify-center text-sm font-mono ${getRankBadgeClass(rank)}`}>
                    #{rank < 10 ? `0${rank}` : rank}
                  </div>

                  {/* Episode Link Icon */}
                  <Link
                    href={`/episodes/${episode.id}`}
                    className="w-11 h-11 rounded-2xl shrink-0 flex items-center justify-center bg-slate-100 group-hover:bg-amber-400 text-slate-700 group-hover:text-slate-950 transition-colors shadow-2xs"
                    title="Explore show notes"
                  >
                    <Mic2 className="w-4 h-4" />
                  </Link>

                  {/* Episode details */}
                  <div className="min-w-0 flex-1 pr-2">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {episode.category}
                      </span>
                      {episode.trendingBadge && (
                        <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded">
                          {episode.trendingBadge}
                        </span>
                      )}
                      <span className="text-xs text-slate-400 hidden sm:inline">
                        Ep #{episode.number}
                      </span>
                    </div>

                    <Link href={`/episodes/${episode.id}`} className="block">
                      <h3 className="font-serif font-bold text-slate-900 text-base sm:text-lg group-hover:text-amber-700 transition-colors line-clamp-1">
                        {episode.title}
                      </h3>
                    </Link>

                    <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                      {episode.subtitle}
                    </p>
                  </div>
                </div>

                {/* Right block: Guest info + Stats + Action */}
                <div className="flex items-center justify-between md:justify-end space-x-6 w-full md:w-auto shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-slate-100">
                  
                  {/* Guest studio voice badge */}
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-full bg-slate-900 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0 shadow-xs">
                      <Mic2 className="w-3.5 h-3.5" />
                    </div>
                    <div className="text-left hidden sm:block">
                      <p className="text-xs font-semibold text-slate-900 leading-tight">
                        {episode.guest.name}
                      </p>
                      <p className="text-[10px] text-slate-500 truncate max-w-[120px]">
                        {episode.guest.company}
                      </p>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="flex items-center space-x-4 text-xs text-slate-500">
                    <div className="flex items-center gap-1">
                      <Headphones className="w-3.5 h-3.5 text-slate-400" />
                      <span className="font-mono">{episode.streamCount}</span>
                    </div>

                    <div className="flex items-center gap-1 text-amber-600 font-semibold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{episode.rating}</span>
                    </div>

                    <div className="hidden lg:flex items-center gap-1 text-slate-400">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{episode.duration}</span>
                    </div>
                  </div>

                  {/* Read notes */}
                  <Link
                    href={`/episodes/${episode.id}`}
                    className="p-2 rounded-xl text-slate-400 hover:text-slate-950 hover:bg-slate-100 transition-colors"
                    title="View show notes"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                </div>
              </div>
            );
          })}
        </div>

        {/* View All Top 10 button if not full page */}
        {!isFullPage && (
          <div className="mt-8 text-center">
            <Link
              href="/top-10"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-900 font-semibold text-sm shadow-sm hover:shadow transition-all group"
            >
              <span>Explore All Top 10 Ranked Episodes</span>
              <ArrowRight className="w-4 h-4 text-slate-600 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
