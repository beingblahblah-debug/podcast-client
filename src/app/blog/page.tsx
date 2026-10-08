"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  ArrowRight,
  ExternalLink,
  Newspaper,
  BookOpen,
  Calendar,
  Clock,
  MessageCircle,
  Play,
  X,
  Plus,
  Video,
  FileText,
  Search,
  CheckCircle2,
  Tv,
  Radio
} from "lucide-react";
import { MEDIA_PUBLICATIONS, OFFICIAL_PROFILE } from "@/data/publications";
import { BlogPost, DEFAULT_VLOGS, DEFAULT_ARTICLES } from "@/data/posts";
import { getAllPosts } from "@/lib/postStore";
import { YouTubeIcon } from "@/components/SocialIcons";

export default function BlogVlogsHubPage() {
  const [activeFilter, setActiveFilter] = useState<"all" | "vlogs" | "articles" | "press">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const [allPosts, setAllPosts] = useState<BlogPost[]>(() => [...DEFAULT_VLOGS, ...DEFAULT_ARTICLES]);

  useEffect(() => {
    // Refresh with any custom posts from store
    const list = getAllPosts();
    setAllPosts(list);
  }, []);

  // Filter posts based on active tab and search query
  const filteredPosts = allPosts.filter((post) => {
    const matchesFilter = 
      activeFilter === "all" ||
      (activeFilter === "vlogs" && post.type === "vlog") ||
      (activeFilter === "articles" && post.type === "article");

    const matchesSearch = 
      searchQuery.trim() === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const filteredPress = MEDIA_PUBLICATIONS.filter((pub) => {
    if (activeFilter === "vlogs" || activeFilter === "articles") return false;
    if (searchQuery.trim() === "") return true;
    return (
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.outlet.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const renderVlogCard = (post: BlogPost) => {
    const isPlaying = playingVideoId === post.videoId;

    return (
      <div
        key={post.id}
        className="rounded-3xl bg-[#141418] border border-white/10 overflow-hidden shadow-xl hover:border-[#d89ba4]/40 hover:shadow-2xl transition-all flex flex-col justify-between group"
      >
        {/* Video Player or Thumbnail */}
        <div className="relative aspect-video w-full bg-black overflow-hidden">
          {isPlaying && post.videoId ? (
            <div className="relative w-full h-full">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${post.videoId}?autoplay=1&rel=0&modestbranding=1`}
                title={post.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
              <button
                onClick={() => setPlayingVideoId(null)}
                className="absolute top-2 right-2 z-20 w-8 h-8 rounded-full bg-black/80 hover:bg-black text-white flex items-center justify-center transition-colors border border-white/20 cursor-pointer"
                title="Close player"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div
              onClick={() => post.videoId && setPlayingVideoId(post.videoId)}
              className="relative w-full h-full cursor-pointer group/thumb"
            >
              <Image
                src={post.coverImage || "/images/harshita-navy-mic.jpg"}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover/thumb:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover/thumb:from-black/60 transition-colors" />

              {/* Badges */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10 pointer-events-none">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#d89ba4] border border-white/15">
                  {post.category}
                </span>

                <div className="w-7 h-7 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-md">
                  <YouTubeIcon className="w-3.5 h-3.5 fill-white" />
                </div>
              </div>

              {/* Center Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-red-600 group-hover/thumb:bg-red-500 text-white flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.6)] group-hover/thumb:scale-110 transition-transform">
                  <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-white ml-1" />
                </div>
              </div>

              {/* Bottom Quick Play Label */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-zinc-300 font-semibold z-10 pointer-events-none">
                <span className="px-2.5 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10">
                  {post.duration || "Video Vlog"}
                </span>
                <span className="text-zinc-300 group-hover/thumb:text-white transition-colors">
                  ▶ Click to play here
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col justify-between flex-1">
          <div>
            <Link href={`/blog/${post.id}`}>
              <h3 className="font-serif font-bold text-lg text-white hover:text-[#d89ba4] transition-colors leading-snug line-clamp-2 mb-2">
                {post.title}
              </h3>
            </Link>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-3 mb-4">
              {post.excerpt}
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
            <Link
              href={`/blog/${post.id}`}
              className="inline-flex items-center gap-1 font-bold text-[#d89ba4] hover:text-[#e2a8b1] transition-colors"
            >
              <span>Read Notes & Discussion</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {post.videoUrl && (
              <a
                href={post.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-zinc-500 hover:text-white text-[11px] transition-colors"
              >
                <span>YouTube</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderArticleCard = (post: BlogPost) => (
    <div
      key={post.id}
      className="p-6 sm:p-7 rounded-3xl bg-[#141418] border border-white/10 hover:border-[#d89ba4]/40 hover:bg-[#16161c] transition-all flex flex-col justify-between shadow-lg group"
    >
      <div>
        {post.coverImage && (
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-4 border border-white/10 bg-black">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}

        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/5 text-[#d89ba4] border border-white/10">
            {post.category}
          </span>
          <span className="text-xs text-zinc-500 font-mono">
            {post.date}
          </span>
        </div>

        <Link href={`/blog/${post.id}`}>
          <h3 className="font-serif font-bold text-lg sm:text-xl text-zinc-100 hover:text-[#d89ba4] transition-colors leading-snug mb-2.5">
            {post.title}
          </h3>
        </Link>

        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 line-clamp-3">
          {post.excerpt}
        </p>
      </div>

      <div className="pt-4 border-t border-white/10 flex items-center justify-between">
        <span className="text-xs text-zinc-500 flex items-center gap-1">
          <Clock className="w-3.5 h-3.5" />
          {post.readTime || "5 min read"}
        </span>

        <Link
          href={`/blog/${post.id}`}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-[#d89ba4] hover:text-black text-white text-xs font-bold transition-all shadow-xs"
        >
          <span>Read Full Article</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );

  return (
    <div className="py-12 md:py-20 bg-[#0c0c0e] text-[#f4f4f5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Banner */}
        <div className="relative rounded-3xl bg-[#121216] p-8 md:p-12 border border-white/10 shadow-2xl mb-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#d89ba4]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 text-[#d89ba4] border border-white/10 text-xs font-semibold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#d89ba4]" />
                <span>Harshita Dagha Media · Vlogs, Video Shows & Articles</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
                Vlog Show & Editorial Insights
              </h1>

              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Watch full masterclass video vlogs, unedited founder dialogues, and read in-depth editorial breakdowns on Brand Strategy, GEO, AI Visibility, and Family Law.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
              <Link
                href="/admin"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#d89ba4] hover:bg-[#e2a8b1] text-black text-xs font-bold transition-all shadow-md shrink-0 hover:scale-105 active:scale-95 text-center"
              >
                <Plus className="w-4 h-4 stroke-[2.5]" />
                <span>+ Paste Vlog or Article</span>
              </Link>

              <a
                href={OFFICIAL_PROFILE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold shadow-md transition-all shrink-0 text-center"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                activeFilter === "all"
                  ? "bg-[#d89ba4] text-black shadow-md"
                  : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10"
              }`}
            >
              All Content ({allPosts.length + MEDIA_PUBLICATIONS.length})
            </button>

            <button
              onClick={() => setActiveFilter("vlogs")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                activeFilter === "vlogs"
                  ? "bg-red-600 text-white shadow-md"
                  : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10"
              }`}
            >
              <Video className="w-3.5 h-3.5" />
              <span>🎥 Vlogs & Videos ({allPosts.filter(p => p.type === "vlog").length})</span>
            </button>

            <button
              onClick={() => setActiveFilter("articles")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                activeFilter === "articles"
                  ? "bg-[#d89ba4] text-black shadow-md"
                  : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>✍️ Articles ({allPosts.filter(p => p.type === "article").length})</span>
            </button>

            <button
              onClick={() => setActiveFilter("press")}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                activeFilter === "press"
                  ? "bg-[#d89ba4] text-black shadow-md"
                  : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10"
              }`}
            >
              <Newspaper className="w-3.5 h-3.5" />
              <span>📰 Press Publications ({MEDIA_PUBLICATIONS.length})</span>
            </button>
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search vlogs or articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#141418] border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-[#d89ba4] transition-all"
            />
          </div>
        </div>

        {/* Mobile Swipe Notice */}
        <div className="md:hidden flex items-center justify-between text-xs text-zinc-500 mb-4 px-1">
          <span>Swipe cards sideways</span>
          <span>👉</span>
        </div>

        {/* ============================================================== */}
        {/* POSTS GRID / HORIZONTAL TOUCH CAROUSEL ON MOBILE               */}
        {/* ============================================================== */}
        {filteredPosts.length > 0 && (
          <div className="mb-16">
            {activeFilter === "all" && (
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-white flex items-center gap-2">
                  <Tv className="w-5 h-5 text-[#d89ba4]" />
                  <span>Featured Vlogs & Written Articles</span>
                </h2>
              </div>
            )}

            <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 -mx-4 px-4 no-scrollbar md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:mx-0 md:px-0 md:overflow-visible">
              {filteredPosts.map((post) => (
                <div key={post.id} className="w-[85vw] sm:w-[360px] md:w-auto shrink-0 snap-center">
                  {post.type === "vlog" ? renderVlogCard(post) : renderArticleCard(post)}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* PRESS PUBLICATIONS SECTION                                     */}
        {/* ============================================================== */}
        {filteredPress.length > 0 && (
          <div className="mb-16 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#d89ba4] block mb-1">
                  National Journalism & Press Archives
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                  Media Features & Author Publications ({filteredPress.length})
                </h2>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  Verified columns authored by Harshita Dagha across Mid-day, Times of India, and leading publications.
                </p>
              </div>

              <Link
                href="/profile#publications"
                className="text-xs font-bold text-[#d89ba4] hover:underline shrink-0"
              >
                View on Official Profile →
              </Link>
            </div>

            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 no-scrollbar md:grid md:grid-cols-2 md:gap-6 md:mx-0 md:px-0 md:overflow-visible">
              {filteredPress.map((pub) => (
                <div
                  key={pub.id}
                  className="w-[85vw] sm:w-[420px] md:w-auto shrink-0 snap-center p-6 sm:p-7 rounded-3xl bg-[#141418] border border-white/10 hover:border-[#d89ba4]/40 hover:bg-[#16161c] transition-all flex flex-col justify-between shadow-lg group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-serif font-bold text-base sm:text-lg text-white group-hover:text-[#d89ba4] transition-colors">
                        {pub.outlet}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/5 text-[#d89ba4] border border-white/10">
                        {pub.outletBadge}
                      </span>
                    </div>

                    <Link href={`/publications/${pub.slug}`}>
                      <h3 className="font-serif font-bold text-lg sm:text-xl text-zinc-100 group-hover:text-[#d89ba4] transition-colors leading-snug mb-3">
                        {pub.title}
                      </h3>
                    </Link>

                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                      {pub.excerpt}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-xs text-zinc-500 py-3 border-t border-white/10 mb-4">
                      <span className="font-mono text-zinc-400">{pub.date}</span>
                      <span className="text-zinc-400">{pub.readTime}</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Link
                        href={`/publications/${pub.slug}`}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-white/10 hover:bg-[#d89ba4] hover:text-black text-white text-xs font-bold transition-all shadow-xs"
                      >
                        <span>Read on Website</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <a
                        href={pub.originalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-[#d89ba4] border border-white/10 transition-colors"
                        title={`View original on ${pub.outlet}`}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Empty Search Result Fallback */}
        {filteredPosts.length === 0 && filteredPress.length === 0 && (
          <div className="py-20 text-center rounded-3xl bg-[#141418] border border-white/10 p-8">
            <Search className="w-10 h-10 text-zinc-500 mx-auto mb-3" />
            <h3 className="text-xl font-serif font-bold text-white mb-1">No posts found matching &ldquo;{searchQuery}&rdquo;</h3>
            <p className="text-xs text-zinc-400 mb-6">Try searching another term, or paste a new vlog or article in the admin panel.</p>
            <Link
              href="/admin"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#d89ba4] text-black text-xs font-bold"
            >
              <Plus className="w-4 h-4" />
              <span>Paste New Post in Admin</span>
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}
