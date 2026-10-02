"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Trophy, 
  Flame, 
  Play, 
  Pause, 
  Star, 
  Headphones, 
  Clock, 
  ArrowRight, 
  Share2, 
  Sparkles,
  ExternalLink,
  Award,
  TrendingUp,
  Bookmark
} from "lucide-react";
import { EPISODES, Episode } from "@/data/episodes";
import { useAudio } from "@/context/AudioContext";

export default function Top10Page() {
  const { playEpisode, isPlaying, currentEpisode, togglePlay } = useAudio();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const top10 = EPISODES.filter((ep) => ep.isTop10).sort((a, b) => (a.rank || 99) - (b.rank || 99));

  const handleShare = (episodeId: string) => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(`${window.location.origin}/episodes/${episodeId}`);
      setCopiedId(episodeId);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Prestige Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Trophy className="w-4 h-4 text-amber-600" />
            <span>The Definitive Podcast Leaderboard</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-950 tracking-tight mb-4">
            The All-Time Top 10
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            The ten most downloaded, cited, and culturally significant episodes of The Elevate Podcast, chosen by 4.8 million listener streams across 150 nations.
          </p>
        </div>

        {/* Podium Top 3 Spotlight Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16 items-end">
          
          {/* #2 Rank Card */}
          {top10[1] && (
            <div className="order-2 lg:order-1 bg-white rounded-3xl p-6 border border-slate-200/90 shadow-md hover:shadow-xl transition-all relative">
              <div className="flex items-center justify-between mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-slate-200 to-slate-400 text-slate-900 font-mono font-black text-sm shadow">
                  #02
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                  {top10[1].category}
                </span>
              </div>

              <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 border border-slate-100">
                <Image
                  src={top10[1].guest.avatar}
                  alt={top10[1].guest.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="text-xs font-bold">{top10[1].guest.name}</p>
                  <p className="text-[10px] text-slate-300">{top10[1].guest.role}</p>
                </div>
              </div>

              <Link href={`/episodes/${top10[1].id}`}>
                <h3 className="font-serif font-bold text-lg text-slate-900 hover:text-amber-600 transition-colors line-clamp-2 mb-2">
                  {top10[1].title}
                </h3>
              </Link>
              <p className="text-xs text-slate-500 line-clamp-2 mb-4">
                {top10[1].subtitle}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <button
                  onClick={() => {
                    if (currentEpisode?.id === top10[1].id) togglePlay();
                    else playEpisode(top10[1]);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-all"
                >
                  {isPlaying && currentEpisode?.id === top10[1].id ? (
                    <Pause className="w-3.5 h-3.5 fill-white" />
                  ) : (
                    <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
                  )}
                  <span>Listen ({top10[1].duration})</span>
                </button>
                <span className="text-xs text-slate-400 font-mono">{top10[1].streamCount} plays</span>
              </div>
            </div>
          )}

          {/* #1 Champion Card (Taller, Gold border, Elevated) */}
          {top10[0] && (
            <div className="order-1 lg:order-2 bg-gradient-to-b from-amber-50/60 via-white to-white rounded-3xl p-7 border-2 border-amber-400 shadow-2xl relative lg:-translate-y-4">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-950 font-black text-[11px] uppercase tracking-widest px-4 py-1 rounded-full shadow-md flex items-center gap-1.5">
                <Trophy className="w-3.5 h-3.5" />
                <span>#1 All-Time Most Streamed</span>
              </div>

              <div className="flex items-center justify-between mb-4 mt-2">
                <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 font-mono font-black text-base shadow-lg shadow-amber-500/30">
                  #01
                </span>
                <div className="flex items-center gap-1 text-amber-600 text-xs font-bold">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>4.98 Rating</span>
                </div>
              </div>

              <div className="relative aspect-video rounded-2xl overflow-hidden mb-5 border border-amber-200">
                <Image
                  src={top10[0].guest.avatar}
                  alt={top10[0].guest.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="text-sm font-bold">{top10[0].guest.name}</p>
                  <p className="text-xs text-amber-300">{top10[0].guest.role} · {top10[0].guest.company}</p>
                </div>
              </div>

              <Link href={`/episodes/${top10[0].id}`}>
                <h3 className="font-serif font-bold text-xl text-slate-900 hover:text-amber-600 transition-colors line-clamp-2 mb-2 leading-snug">
                  {top10[0].title}
                </h3>
              </Link>
              <p className="text-xs text-slate-600 line-clamp-2 mb-5">
                {top10[0].subtitle}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-amber-100">
                <button
                  onClick={() => {
                    if (currentEpisode?.id === top10[0].id) togglePlay();
                    else playEpisode(top10[0]);
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-md"
                >
                  {isPlaying && currentEpisode?.id === top10[0].id ? (
                    <Pause className="w-4 h-4 fill-white" />
                  ) : (
                    <Play className="w-4 h-4 fill-white ml-0.5" />
                  )}
                  <span>Play Masterclass</span>
                </button>
                <span className="text-xs text-amber-900 font-bold font-mono">
                  {top10[0].streamCount} streams
                </span>
              </div>
            </div>
          )}

          {/* #3 Rank Card */}
          {top10[2] && (
            <div className="order-3 bg-white rounded-3xl p-6 border border-slate-200/90 shadow-md hover:shadow-xl transition-all relative">
              <div className="flex items-center justify-between mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-700 to-amber-900 text-amber-100 font-mono font-black text-sm shadow">
                  #03
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                  {top10[2].category}
                </span>
              </div>

              <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 border border-slate-100">
                <Image
                  src={top10[2].guest.avatar}
                  alt={top10[2].guest.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="text-xs font-bold">{top10[2].guest.name}</p>
                  <p className="text-[10px] text-slate-300">{top10[2].guest.role}</p>
                </div>
              </div>

              <Link href={`/episodes/${top10[2].id}`}>
                <h3 className="font-serif font-bold text-lg text-slate-900 hover:text-amber-600 transition-colors line-clamp-2 mb-2">
                  {top10[2].title}
                </h3>
              </Link>
              <p className="text-xs text-slate-500 line-clamp-2 mb-4">
                {top10[2].subtitle}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <button
                  onClick={() => {
                    if (currentEpisode?.id === top10[2].id) togglePlay();
                    else playEpisode(top10[2]);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-all"
                >
                  {isPlaying && currentEpisode?.id === top10[2].id ? (
                    <Pause className="w-3.5 h-3.5 fill-white" />
                  ) : (
                    <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
                  )}
                  <span>Listen ({top10[2].duration})</span>
                </button>
                <span className="text-xs text-slate-400 font-mono">{top10[2].streamCount} plays</span>
              </div>
            </div>
          )}

        </div>

        {/* Detailed Leaderboard Table for #4 through #10 */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden p-6 sm:p-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-slate-950">
              The Complete Top 10 Hall of Fame
            </h2>
            <span className="text-xs text-slate-400 font-medium">Rankings updated monthly</span>
          </div>

          <div className="space-y-4">
            {top10.map((episode) => {
              const isThisPlaying = isPlaying && currentEpisode?.id === episode.id;
              const rank = episode.rank || 0;

              return (
                <div
                  key={episode.id}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${
                    isThisPlaying
                      ? "border-amber-400 bg-amber-50/20 shadow-md ring-1 ring-amber-400/40"
                      : "border-slate-100 hover:border-slate-300 hover:bg-slate-50/50"
                  }`}
                >
                  {/* Left: Rank & Info */}
                  <div className="flex items-center space-x-4 min-w-0 flex-1">
                    <span className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 font-mono font-bold flex items-center justify-center text-sm shrink-0 border border-slate-200">
                      #{rank < 10 ? `0${rank}` : rank}
                    </span>

                    <button
                      onClick={() => {
                        if (currentEpisode?.id === episode.id) togglePlay();
                        else playEpisode(episode);
                      }}
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                        isThisPlaying
                          ? "bg-amber-500 text-slate-950 shadow"
                          : "bg-slate-900 text-white hover:bg-slate-800"
                      }`}
                    >
                      {isThisPlaying ? (
                        <Pause className="w-4 h-4 fill-current" />
                      ) : (
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      )}
                    </button>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                          {episode.category}
                        </span>
                        <span className="text-xs text-slate-400">
                          Episode #{episode.number}
                        </span>
                      </div>
                      <Link href={`/episodes/${episode.id}`}>
                        <h3 className="font-serif font-bold text-slate-900 text-base hover:text-amber-700 transition-colors line-clamp-1">
                          {episode.title}
                        </h3>
                      </Link>
                      <p className="text-xs text-slate-500 line-clamp-1">
                        Guest: {episode.guest.name} · {episode.guest.company}
                      </p>
                    </div>
                  </div>

                  {/* Right: Metrics & Actions */}
                  <div className="flex items-center justify-between md:justify-end space-x-6 w-full md:w-auto shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Headphones className="w-3.5 h-3.5 text-slate-400" />
                      <span className="font-mono">{episode.streamCount}</span>
                    </div>

                    <div className="flex items-center gap-1 text-xs text-amber-600 font-semibold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{episode.rating}</span>
                    </div>

                    <button
                      onClick={() => handleShare(episode.id)}
                      className="p-2 text-slate-400 hover:text-slate-900 relative"
                      title="Share episode link"
                    >
                      <Share2 className="w-4 h-4" />
                      {copiedId === episode.id && (
                        <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-1.5 py-0.5 rounded shadow">
                          Copied!
                        </span>
                      )}
                    </button>

                    <Link
                      href={`/episodes/${episode.id}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-slate-800 hover:text-amber-700 transition-colors"
                    >
                      <span>Full Notes</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
