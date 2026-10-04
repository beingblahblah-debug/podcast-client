"use client";

import React from "react";
import Link from "next/link";
import { Clock, ArrowRight, Eye, Mic2 } from "lucide-react";
import { Episode } from "@/data/episodes";

interface EpisodeCardProps {
  episode: Episode;
  highlightRank?: boolean;
}

export default function EpisodeCard({ episode, highlightRank = false }: EpisodeCardProps) {
  return (
    <Link
      href={`/episodes/${episode.id}`}
      className="group relative bg-[#141418] rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-[#d89ba4]/40 hover:bg-[#18181f] shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer h-full"
    >
      {/* Background ambient accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#d89ba4]/5 rounded-full blur-2xl group-hover:bg-[#d89ba4]/10 transition-colors pointer-events-none" />

      <div>
        {/* Header row with badges and optional rank */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2 flex-wrap">
            {highlightRank && episode.rank && (
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/10 border border-white/15 text-white text-xs font-mono font-bold shadow-sm">
                #{episode.rank}
              </span>
            )}
            <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/10">
              {episode.category}
            </span>
            <span className="text-xs font-mono font-medium text-zinc-400">
              Show #{episode.number}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-zinc-400">
            <Clock className="w-3.5 h-3.5" />
            <span>{episode.duration}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className={`text-lg font-serif font-bold transition-colors line-clamp-2 leading-snug mb-2 ${
          episode.rank === 3 ? "text-[#d89ba4] group-hover:text-white" : "text-white group-hover:text-[#d89ba4]"
        }`}>
          {episode.title}
        </h3>

        {/* Subtitle / summary */}
        <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed mb-5">
          {episode.subtitle || episode.summary}
        </p>

        {/* Guest Preview */}
        <div className="flex items-center space-x-3 p-3 rounded-2xl bg-white/[0.03] border border-white/10 mb-5">
          <div className="w-10 h-10 rounded-2xl bg-[#0c0c0e] border border-white/15 text-[#d89ba4] flex items-center justify-center shrink-0 shadow-sm">
            <Mic2 className="w-4 h-4" />
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="text-xs font-semibold text-white truncate">
              {episode.guest.name}
            </h4>
            <p className="text-[11px] text-zinc-400 truncate">
              {episode.guest.role} · {episode.guest.company}
            </p>
          </div>
        </div>
      </div>

      {/* Footer row: Action & Metrics */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between">
        <span className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-colors ${
          episode.rank === 3 ? "text-[#d89ba4] group-hover:text-white" : "text-zinc-300 group-hover:text-[#d89ba4]"
        }`}>
          <span>Read Show Takeaways</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </span>

        <div className="flex items-center gap-1 text-[11px] font-medium text-zinc-400 font-mono">
          <Eye className="w-3.5 h-3.5 text-zinc-500" />
          <span>{episode.streamCount}</span>
        </div>
      </div>
    </Link>
  );
}
