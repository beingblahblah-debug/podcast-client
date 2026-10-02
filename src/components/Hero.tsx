"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Play, 
  Pause, 
  Sparkles, 
  Flame, 
  Headphones, 
  ArrowRight, 
  Star, 
  CheckCircle,
  Radio,
  ExternalLink
} from "lucide-react";
import { useAudio } from "@/context/AudioContext";
import { EPISODES, PODCAST_STATS, PRESS_LOGOS } from "@/data/episodes";

export default function Hero() {
  const { playEpisode, isPlaying, currentEpisode, togglePlay } = useAudio();
  const featuredEpisode = EPISODES[0];
  const isFeaturedPlaying = isPlaying && currentEpisode?.id === featuredEpisode.id;

  const handleFeaturedPlay = () => {
    if (currentEpisode?.id === featuredEpisode.id) {
      togglePlay();
    } else {
      playEpisode(featuredEpisode);
    }
  };

  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-mesh-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Left copy, Right visual showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200/90 shadow-sm text-xs font-semibold text-slate-800 mb-6 backdrop-blur-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
              </span>
              <span className="text-slate-900 font-bold">THE ELEVATE SHOW</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600 font-medium">Ranked #1 in Society & Culture</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-950 tracking-tight leading-[1.12] mb-6">
              Deep, unfiltered dialogues on <span className="underline decoration-amber-400 decoration-wavy decoration-2">ambition</span>, mindsets & the human soul.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              Hosted by journalist and interviewer <strong className="text-slate-900 font-semibold">Jessica Chen</strong>. Every week, we deconstruct the mental models, creative inflection points, and hard-earned wisdom of founders, neuroscientists, and cultural architects.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-10">
              <button
                onClick={handleFeaturedPlay}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-slate-950 text-white hover:bg-slate-800 text-sm font-semibold shadow-lg shadow-slate-950/15 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center text-slate-950">
                  {isFeaturedPlaying ? (
                    <Pause className="w-3.5 h-3.5 fill-current" />
                  ) : (
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  )}
                </div>
                <span>{isFeaturedPlaying ? "Pause Ep #128" : "Play Latest Episode"}</span>
              </button>

              <Link
                href="/top-10"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 text-sm font-semibold shadow-sm hover:shadow transition-all"
              >
                <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span>Explore Top 10 Chart</span>
              </Link>
            </div>

            {/* Platform listen pills */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs text-slate-500">
              <span className="font-semibold uppercase tracking-wider text-slate-700">Listen on:</span>
              <div className="flex items-center flex-wrap gap-2">
                <a
                  href="https://spotify.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-slate-400 text-slate-800 font-medium transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Spotify
                </a>
                <a
                  href="https://apple.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-slate-400 text-slate-800 font-medium transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <span className="w-2 h-2 rounded-full bg-violet-500" />
                  Apple Podcasts
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-slate-400 text-slate-800 font-medium transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  YouTube
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative background aura */}
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-400/30 to-rose-400/20 rounded-3xl blur-xl opacity-70" />

              {/* Glass Card */}
              <div className="relative rounded-3xl bg-white/95 p-6 sm:p-7 border border-slate-200/90 shadow-2xl backdrop-blur-md">
                
                {/* Host Image and Show Tag */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-6 border border-slate-200 shadow-inner group">
                  <Image
                    src="/images/host.jpg"
                    alt="Podcast Host Jessica Chen"
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  {/* Floating badge inside photo */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-md">
                    🎙️ Hosted by Jessica Chen
                  </div>

                  {/* Bottom bar inside photo */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[11px] font-semibold text-amber-300 uppercase tracking-widest block mb-1">
                      Featured Show #128
                    </span>
                    <h3 className="font-serif font-bold text-lg text-white leading-tight line-clamp-1">
                      {featuredEpisode.title}
                    </h3>
                  </div>
                </div>

                {/* Interactive Player widget inside Hero */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-9 h-9 rounded-xl bg-amber-400 flex items-center justify-center text-slate-950 font-bold shrink-0">
                        <Radio className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-slate-900 truncate">
                          Guest: {featuredEpisode.guest.name}
                        </p>
                        <p className="text-[11px] text-slate-500 truncate">
                          {featuredEpisode.guest.company}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={handleFeaturedPlay}
                      className="px-3 py-1.5 rounded-full bg-slate-950 text-white hover:bg-slate-800 text-xs font-medium flex items-center gap-1.5 transition-colors shrink-0"
                    >
                      {isFeaturedPlaying ? (
                        <>
                          <Pause className="w-3 h-3 fill-current" />
                          <span>Pause</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3 h-3 fill-current ml-0.5" />
                          <span>Listen (64m)</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Soundwave equalizer indicator */}
                  <div className="flex items-center justify-between gap-1 h-7 px-2 bg-white rounded-lg border border-slate-200/60">
                    {[30, 60, 45, 80, 20, 90, 75, 40, 95, 65, 30, 85, 50, 70, 40, 60, 90, 35, 75, 55, 85, 30].map((h, i) => (
                      <span
                        key={i}
                        className={`w-1 rounded-full transition-all duration-300 ${
                          isFeaturedPlaying 
                            ? "bg-amber-500 animate-pulse" 
                            : "bg-slate-300"
                        }`}
                        style={{ height: `${isFeaturedPlaying ? Math.max(15, (h % 25) + 6) : 6}px` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Rating review snippet */}
                <div className="mt-4 flex items-center justify-between text-xs text-slate-500 px-1">
                  <div className="flex items-center gap-1 text-amber-500 font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>4.98 / 5.0 (12,400+ listener ratings)</span>
                  </div>
                  <Link href={`/episodes/${featuredEpisode.id}`} className="text-slate-800 font-semibold hover:underline">
                    Show Notes →
                  </Link>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Podcast stats row */}
        <div className="mt-16 pt-10 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-2xl bg-white border border-slate-200/60 shadow-xs">
            <span className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 block">
              {PODCAST_STATS.totalDownloads}
            </span>
            <span className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1 block">
              Global Downloads
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200/60 shadow-xs">
            <span className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 block">
              {PODCAST_STATS.totalEpisodes}
            </span>
            <span className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1 block">
              Recorded Episodes
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200/60 shadow-xs">
            <span className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 block">
              {PODCAST_STATS.countriesReached}
            </span>
            <span className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1 block">
              Countries Reached
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200/60 shadow-xs">
            <span className="text-3xl sm:text-4xl font-serif font-bold text-amber-600 block">
              {PODCAST_STATS.averageRating}
            </span>
            <span className="text-xs font-medium text-slate-500 uppercase tracking-wider mt-1 block">
              Top 1% Worldwide
            </span>
          </div>
        </div>

        {/* Press mentions */}
        <div className="mt-12 text-center">
          <p className="text-xs uppercase tracking-widest font-semibold text-slate-400 mb-6">
            Featured and recognized by leading culture & business publications
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 opacity-75">
            {PRESS_LOGOS.map((press) => (
              <div key={press.name} className="flex flex-col items-center">
                <span className="font-serif font-bold text-lg sm:text-xl text-slate-800 tracking-tight">
                  {press.name}
                </span>
                <span className="text-[10px] text-slate-400 font-sans">
                  {press.subtitle}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
