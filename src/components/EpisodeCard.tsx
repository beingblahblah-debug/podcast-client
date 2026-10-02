"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, ArrowRight, Eye, Sparkles } from "lucide-react";
import { Episode } from "@/data/episodes";

interface EpisodeCardProps {
  episode: Episode;
  highlightRank?: boolean;
}

export default function EpisodeCard({ episode, highlightRank = false }: EpisodeCardProps) {
  return (
    <Link
      href={`/episodes/${episode.id}`}
      className="group relative bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
    >
      {/* Background ambient accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-colors pointer-events-none" />

      <div>
        {/* Header row with badges and optional rank */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2 flex-wrap">
            {highlightRank && episode.rank && (
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-950 text-white text-xs font-mono font-bold shadow-sm">
                #{episode.rank}
              </span>
            )}
            <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200/60">
              {episode.category}
            </span>
            <span className="text-xs font-mono font-medium text-slate-400">
              Show #{episode.number}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <Clock className="w-3.5 h-3.5" />
            <span>{episode.duration}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-serif font-bold text-slate-900 group-hover:text-amber-700 transition-colors line-clamp-2 leading-snug mb-2">
          {episode.title}
        </h3>

        {/* Subtitle / summary */}
        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-5">
          {episode.subtitle || episode.summary}
        </p>

        {/* Guest Preview */}
        <div className="flex items-center space-x-3 p-3 rounded-2xl bg-slate-50/80 border border-slate-100 mb-5">
          <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-white shadow-sm">
            <Image
              src={episode.guest.avatar}
              alt={episode.guest.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="text-xs font-bold text-slate-900 truncate">
              {episode.guest.name}
            </h4>
            <p className="text-[11px] text-slate-500 truncate">
              {episode.guest.role} · {episode.guest.company}
            </p>
          </div>
        </div>
      </div>

      {/* Footer row: Action & Metrics */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
          <span>Read Show Takeaways</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </span>

        <div className="flex items-center gap-1 text-[11px] font-medium text-slate-400 font-mono">
          <Eye className="w-3.5 h-3.5 text-slate-400" />
          <span>{episode.streamCount}</span>
        </div>
      </div>
    </Link>
  );
}
