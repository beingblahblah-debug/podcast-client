"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Pause, Clock, Calendar, Star, Headphones, ArrowUpRight } from "lucide-react";
import { Episode } from "@/data/episodes";
import { useAudio } from "@/context/AudioContext";

interface EpisodeCardProps {
  episode: Episode;
  highlightRank?: boolean;
}

export default function EpisodeCard({ episode, highlightRank = false }: EpisodeCardProps) {
  const { playEpisode, isPlaying, currentEpisode, togglePlay } = useAudio();
  const isThisPlaying = isPlaying && currentEpisode?.id === episode.id;

  const handlePlayClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (currentEpisode?.id === episode.id) {
      togglePlay();
    } else {
      playEpisode(episode);
    }
  };

  return (
    <div className="group relative bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden">
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
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200/60">
              {episode.category}
            </span>
            <span className="text-xs font-medium text-slate-400">
              Ep #{episode.number}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <Clock className="w-3.5 h-3.5" />
            <span>{episode.duration}</span>
          </div>
        </div>

        {/* Title */}
        <Link href={`/episodes/${episode.id}`} className="block group/link">
          <h3 className="text-lg font-serif font-bold text-slate-900 group-hover/link:text-amber-700 transition-colors line-clamp-2 leading-snug mb-2">
            {episode.title}
          </h3>
        </Link>

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

      {/* Footer row: Play button & Action links */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <button
          onClick={handlePlayClick}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all shadow-sm ${
            isThisPlaying
              ? "bg-amber-500 text-slate-950 scale-105 shadow-amber-500/20"
              : "bg-slate-950 text-white hover:bg-slate-800"
          }`}
        >
          {isThisPlaying ? (
            <>
              <Pause className="w-3.5 h-3.5 fill-current" />
              <span>Playing Now</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              <span>Play Episode</span>
            </>
          )}
        </button>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-[11px] font-medium text-slate-400">
            <Headphones className="w-3.5 h-3.5 text-slate-400" />
            <span>{episode.streamCount}</span>
          </div>

          <Link
            href={`/episodes/${episode.id}`}
            className="w-8 h-8 rounded-full border border-slate-200 text-slate-600 hover:text-slate-950 hover:border-slate-400 flex items-center justify-center transition-colors"
            title="Read show notes"
          >
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
