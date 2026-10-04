"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Play, 
  X, 
  ExternalLink, 
  Sparkles, 
  ArrowUpRight,
  Tv
} from "lucide-react";
import { YouTubeIcon } from "@/components/SocialIcons";

interface VideoItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  thumbnail: string;
  url: string;
}

export default function TopVideosSection() {
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  const topVideos: VideoItem[] = [
    {
      id: "UIEBj-3enk0",
      title: "Legal Secrets Unveiled | Divorce & Family Law Explained | Know Your Rights, Legal Tips & Real",
      category: "Legal & Rights",
      badge: "Family Law Masterclass",
      thumbnail: "https://i.ytimg.com/vi/UIEBj-3enk0/hqdefault.jpg",
      url: "https://youtu.be/UIEBj-3enk0?si=UO0LmhaIn-B4Vnsf"
    },
    {
      id: "K_6wJPU-sQw",
      title: "Agency Founder Reveals How We Scale Reach with GEO | Generative Engine Optimization | GEO Strategy",
      category: "GEO & AI Strategy",
      badge: "Marketing Masterclass",
      thumbnail: "https://i.ytimg.com/vi/K_6wJPU-sQw/hqdefault.jpg",
      url: "https://youtu.be/K_6wJPU-sQw?si=Byqg4u9PDuwyTkfp"
    },
    {
      id: "p7UxBljaKys",
      title: "The Truth About Pathology, Blood Tests & Lab Reports | Doctor Podcast",
      category: "Healthcare & Diagnostics",
      badge: "Doctor Podcast",
      thumbnail: "https://i.ytimg.com/vi/p7UxBljaKys/hqdefault.jpg",
      url: "https://youtu.be/p7UxBljaKys?si=AhG72ffybL0gkEm4"
    },
    {
      id: "03YJwVMV0D8",
      title: "The Truth About the Universe, Karma & Shiva | Must-Watch Spiritual Podcast",
      category: "Spirituality & Philosophy",
      badge: "Spiritual Dialogue",
      thumbnail: "https://i.ytimg.com/vi/03YJwVMV0D8/hqdefault.jpg",
      url: "https://youtu.be/03YJwVMV0D8?si=lS2mviTqXL7ljQ4q"
    },
    {
      id: "2puQ59SOAwQ",
      title: "The Truth About Plastic | What Surgeons Don’t Tell You | Plastic Surgery Facts, Risks & Reality",
      category: "Aesthetics & Medical Reality",
      badge: "Surgeon Dialogue",
      thumbnail: "https://i.ytimg.com/vi/2puQ59SOAwQ/hqdefault.jpg",
      url: "https://youtu.be/2puQ59SOAwQ?si=woSikVR6k8zLE7cB"
    }
  ];

  const firstRow = topVideos.slice(0, 3);
  const secondRow = topVideos.slice(3, 5);

  const renderVideoCard = (video: VideoItem) => {
    const isPlaying = playingVideoId === video.id;

    return (
      <div
        key={video.id}
        className="rounded-3xl bg-[#141418] border border-white/10 overflow-hidden shadow-xl hover:border-[#d89ba4]/40 hover:shadow-2xl transition-all flex flex-col justify-between group"
      >
        {/* Video Player Container */}
        <div className="relative aspect-video w-full bg-black overflow-hidden">
          {isPlaying ? (
            <div className="relative w-full h-full">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
              <button
                onClick={() => setPlayingVideoId(null)}
                className="absolute top-2 right-2 z-20 w-8 h-8 rounded-full bg-black/80 hover:bg-black text-white flex items-center justify-center transition-colors border border-white/20 cursor-pointer"
                title="Close player"
                aria-label="Close player"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div
              onClick={() => setPlayingVideoId(video.id)}
              className="relative w-full h-full cursor-pointer group/thumb"
            >
              {/* Thumbnail Image */}
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover/thumb:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover/thumb:from-black/60 transition-colors" />

              {/* Top Badges */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10 pointer-events-none">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#d89ba4] border border-white/15">
                  {video.category}
                </span>

                <div className="w-7 h-7 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-md">
                  <YouTubeIcon className="w-3.5 h-3.5 fill-white" />
                </div>
              </div>

              {/* Center Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-red-600 group-hover/thumb:bg-red-500 text-white flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.6)] group-hover/thumb:scale-110 transition-transform">
                  <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-white ml-1" />
                </div>
              </div>

              {/* Bottom Quick Play Label */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-zinc-300 font-semibold z-10 pointer-events-none">
                <span className="px-2.5 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10">
                  {video.badge}
                </span>
                <span className="text-zinc-300 group-hover/thumb:text-white transition-colors">
                  ▶ Click to play here
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Card Content & Title */}
        <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
          <div>
            <h3 
              onClick={() => setPlayingVideoId(video.id)}
              className="font-serif font-bold text-base sm:text-lg text-white hover:text-[#d89ba4] transition-colors leading-snug line-clamp-2 cursor-pointer mb-3"
            >
              {video.title}
            </h3>
          </div>

          <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
            <button
              onClick={() => setPlayingVideoId(video.id)}
              className="inline-flex items-center gap-1.5 font-bold text-[#d89ba4] hover:text-[#e2a8b1] transition-colors cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>{isPlaying ? "Playing In-Place" : "Watch Video"}</span>
            </button>

            <a
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors text-[11px]"
              title="Open on YouTube"
            >
              <span>YouTube</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="top-videos" className="py-20 bg-[#0c0c0e] border-b border-white/10 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-red-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/15 text-red-300 border border-red-500/30 text-xs font-semibold uppercase tracking-wider mb-3">
              <Tv className="w-3.5 h-3.5 text-red-400" />
              <span>Featured Watchlist</span>
              <span className="text-zinc-600">|</span>
              <span className="text-zinc-400">Harshita Dagha Show</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
              Top Videos
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl font-normal">
              Stream top masterclass interviews and deep-dive conversations right here without leaving the page. Click any video to play instantly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            {/* Mobile swipe helper badge */}
            <div className="md:hidden inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300 font-medium">
              <span>Swipe sideways to explore (5 videos) →</span>
            </div>

            <a
              href="https://youtube.com/@harshitadagha?si=vqaTaxvZHC02_uYG"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-all shadow-md shrink-0 hover:scale-105 active:scale-95"
            >
              <YouTubeIcon className="w-4 h-4 fill-white" />
              <span>Visit YouTube Channel</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* ============================================================== */}
        {/* MOBILE VIEW (< md): Horizontal Right-to-Left Touch Carousel     */}
        {/* ============================================================== */}
        <div className="md:hidden">
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 no-scrollbar">
            {topVideos.map((video) => (
              <div key={video.id} className="w-[86vw] sm:w-[350px] shrink-0 snap-center">
                {renderVideoCard(video)}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-1.5 pt-2 text-zinc-500 text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d89ba4]" />
            <span>Swipe left / right across 5 featured videos</span>
          </div>
        </div>

        {/* ============================================================== */}
        {/* DESKTOP VIEW (>= md): 3 Top Row + 2 Bottom Centered Grid        */}
        {/* ============================================================== */}
        <div className="hidden md:block">
          {/* 1st Row: 3 Videos */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            {firstRow.map(renderVideoCard)}
          </div>

          {/* 2nd Row: 2 Videos (Centered & balanced) */}
          <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
            {secondRow.map(renderVideoCard)}
          </div>
        </div>

      </div>
    </section>
  );
}
