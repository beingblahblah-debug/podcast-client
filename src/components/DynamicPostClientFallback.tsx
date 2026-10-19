"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  Quote,
  Eye,
  Globe,
  ExternalLink,
  MessageCircle,
  Loader2
} from "lucide-react";
import { BlogPost, DEFAULT_ARTICLES, extractYouTubeId } from "@/data/posts";
import { getLocalCustomPosts, saveLocalCustomPosts } from "@/lib/postStore";
import { YouTubeIcon } from "@/components/SocialIcons";
import FormattedPostContent from "@/components/FormattedPostContent";
import { ShareButton } from "@/components/BlogInteractive";

interface Props {
  postId: string;
}

export default function DynamicPostClientFallback({ postId }: Props) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function resolvePost() {
      // 0. Static data check (always up to date)
      const staticFound = DEFAULT_ARTICLES.find((p) => p.id === postId || p.id.toLowerCase() === postId.toLowerCase());
      if (staticFound && active) {
        setPost(staticFound);
        setIsLoading(false);
        return;
      }

      // 1. Instant check in browser localStorage
      const localPosts = getLocalCustomPosts();
      const localFound = localPosts.find((p) => p.id === postId || p.id.toLowerCase() === postId.toLowerCase());

      if (localFound && active) {
        setPost(localFound);
        setIsLoading(false);
        // Reseed server /tmp cache in the background in case Lambda recycled
        try {
          fetch("/api/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(localFound)
          }).catch(() => {});
        } catch (_) {}
        return;
      }

      // 2. Query server API route
      try {
        const res = await fetch(`/api/posts?id=${encodeURIComponent(postId)}`, { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          if (data.success && data.post && active) {
            setPost(data.post);
            setIsLoading(false);
            // Save to localStorage for instant subsequent loads
            saveLocalCustomPosts([data.post, ...localPosts.filter((p) => p.id !== data.post.id)]);
            return;
          }
        }
      } catch (err) {
        console.warn("Failed to fetch custom post from API:", err);
      }

      if (active) {
        setIsLoading(false);
      }
    }

    resolvePost();

    return () => {
      active = false;
    };
  }, [postId]);

  // Loading Skeleton State
  if (isLoading) {
    return (
      <div className="py-20 md:py-32 bg-[#0c0c0e] min-h-screen text-[#f4f4f5] flex flex-col items-center justify-center px-4">
        <div className="flex flex-col items-center gap-4 text-center max-w-md">
          <div className="w-12 h-12 rounded-full border-2 border-[#d89ba4] border-t-transparent animate-spin flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-[#d89ba4]" />
          </div>
          <h2 className="text-xl font-serif font-bold text-white">Loading Masterclass Episode...</h2>
          <p className="text-xs text-zinc-400">
            Retrieving live publication assets and verified media data.
          </p>
        </div>
      </div>
    );
  }

  // Not Found State (Graceful fallback instead of blank 404 crash)
  if (!post) {
    return (
      <div className="py-20 md:py-32 bg-[#0c0c0e] min-h-screen text-[#f4f4f5] flex flex-col items-center justify-center px-4">
        <div className="max-w-md w-full text-center p-8 rounded-3xl bg-[#141418] border border-white/10 shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-[#d89ba4]/10 text-[#d89ba4] mx-auto mb-5 flex items-center justify-center border border-[#d89ba4]/20">
            <Sparkles className="w-8 h-8" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
            Article Not Found
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
            The article or episode you are looking for ({postId}) is currently unavailable or has been archived.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/blog"
              className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#d89ba4] text-black text-xs font-bold hover:bg-[#e2a8b2] transition-colors"
            >
              Browse Blog &amp; Vlogs Hub
            </Link>
            <Link
              href="/top-10"
              className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-white/10 text-white text-xs font-bold hover:bg-white/20 transition-colors"
            >
              Top 10 Directory
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const isVlog = post.type === "vlog";
  const videoId = post.videoId || (post.videoUrl ? extractYouTubeId(post.videoUrl) : null);
  const relatedPosts = DEFAULT_ARTICLES.filter((p) => p.id !== postId).slice(0, 3);

  return (
    <article className="py-12 md:py-20 bg-[#0c0c0e] min-h-screen text-[#f4f4f5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-zinc-500 font-medium mb-6 flex-wrap">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-white transition-colors">Blog &amp; Vlogs</Link>
          <span>/</span>
          <span className="text-zinc-300 font-bold truncate max-w-[200px] sm:max-w-none">
            {post.category}
          </span>
        </div>

        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-bold text-zinc-400 hover:text-white mb-6 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Vlogs &amp; Articles</span>
        </Link>

        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2.5 flex-wrap mb-4">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 text-[#d89ba4] border border-white/10">
              {post.category}
            </span>
            <span className="text-xs text-zinc-500">·</span>
            <span className="text-xs text-zinc-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {post.date}
            </span>
            <span className="text-xs text-zinc-500">·</span>
            <span className="text-xs text-zinc-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime || post.duration || "5 min read"}
            </span>
            <span className="text-xs text-zinc-500">·</span>
            <span className="text-xs text-zinc-300 flex items-center gap-1 font-semibold">
              <Eye className="w-3.5 h-3.5 text-[#d89ba4]" />
              {post.views || "12.4K views"}
            </span>
            <span className="text-xs text-zinc-500">·</span>
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live &amp; Public
            </span>
            {isVlog && (
              <>
                <span className="text-xs text-zinc-500">·</span>
                <span className="text-xs text-red-400 flex items-center gap-1 font-semibold">
                  <YouTubeIcon className="w-3.5 h-3.5 fill-red-500" />
                  Video Masterclass
                </span>
              </>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-[1.18] mb-6">
            {post.title}
          </h1>

          <p className="text-lg sm:text-xl text-zinc-300 font-serif italic leading-relaxed border-l-4 border-[#d89ba4] pl-4 py-1.5 bg-white/[0.03] rounded-r-2xl">
            {post.excerpt}
          </p>
        </div>

        {/* Author Row & Share */}
        <div className="flex items-center justify-between py-5 border-y border-white/10 mb-8">
          <div className="flex items-center space-x-3.5">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-white/15 shadow-sm shrink-0">
              <Image
                src={post.author?.avatar || "/images/harshita-avatar-main.jpg"}
                alt={post.author?.name || "Harshita Dagha"}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">{post.author?.name || "Harshita Dagha"}</h3>
              <p className="text-xs text-zinc-400">{post.author?.role || "Podcast Host & PR Strategist"}</p>
            </div>
          </div>

          <ShareButton title={post.title} />
        </div>

        {/* TL;DR EXECUTIVE SUMMARY */}
        <div className="mb-10 space-y-6">
          <section
            aria-label="TL;DR Executive Summary"
            className="rounded-3xl bg-gradient-to-r from-[#d89ba4]/15 via-[#16161c] to-[#121216] border border-[#d89ba4]/35 p-6 sm:p-7 shadow-lg"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="flex h-2 w-2 rounded-full bg-[#d89ba4] animate-ping" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#d89ba4]">
                TL;DR Executive Summary · 3 Core Takeaways (AI RAG Extract)
              </span>
            </div>
            <ul className="space-y-2.5 text-sm sm:text-base text-zinc-200">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#d89ba4] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Core Thesis:</strong> Unscripted clarity, authentic human storytelling, and founder vulnerability outperform sanitized corporate PR every time.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#d89ba4] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Operational Moat:</strong> Building permanent entity authority across Google and AI engines requires combining keyword search intent with third-party media credibility.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-[#d89ba4] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Strategic Action:</strong> Shift from disposable social noise to sovereign, long-form podcast dialogues and indexed editorial pillars.
                </span>
              </li>
            </ul>
          </section>
        </div>

        {/* Video or Hero Image */}
        {isVlog && videoId ? (
          <div className="mb-10">
            <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1`}
                title={post.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
            {post.videoUrl && (
              <div className="mt-3 flex items-center justify-between text-xs text-zinc-400">
                <span>Stream full conversation in 4K resolution.</span>
                <a
                  href={post.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-red-400 hover:text-red-300 font-semibold"
                >
                  <YouTubeIcon className="w-3.5 h-3.5 fill-current" />
                  <span>Watch Direct on YouTube</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            )}
          </div>
        ) : post.coverImage ? (
          <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 mb-10 bg-gradient-to-b from-[#141418] via-[#0f0f14] to-[#0a0a0d] flex items-center justify-center min-h-[320px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <Image
                src={post.coverImage}
                alt=""
                fill
                priority
                className="object-cover blur-3xl opacity-35 scale-125"
                aria-hidden
              />
            </div>
            <div className="relative z-10 w-full flex items-center justify-center p-2 sm:p-4">
              <img
                src={post.coverImage}
                alt={post.title}
                className="max-h-[580px] w-auto max-w-full object-contain rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        ) : null}

        {/* Content Body */}
        <div className="prose prose-invert prose-lg max-w-none mb-14 text-zinc-300">
          <FormattedPostContent content={post.content} />
        </div>

        {/* Gallery Images if any */}
        {post.galleryImages && post.galleryImages.length > 0 && (
          <div className="mb-14">
            <h3 className="font-serif font-bold text-xl text-white mb-4">Behind The Scenes Gallery</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {post.galleryImages.map((img, i) => (
                <div key={i} className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
                  <Image
                    src={img}
                    alt={`Gallery view ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10 mb-12">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-zinc-300 border border-white/10"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* WhatsApp & Media Advisory Callout */}
        <div className="rounded-3xl bg-[#141418] border border-white/10 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 mb-16 shadow-xl">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#d89ba4] block mb-1">
              Direct Executive Booking
            </span>
            <h3 className="text-lg sm:text-xl font-serif font-bold text-white mb-1">
              Connect With Harshita Dagha
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-md">
              Available for Brand Strategy Advisory, Executive Podcast Guest Booking, and Digital PR.
            </p>
          </div>

          <a
            href="https://wa.me/918779003799?text=Hi%20Harshita%20Dagha,%20I%20would%20like%20to%20connect%20with%20your%20desk."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold shadow-lg shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Connect on WhatsApp</span>
          </a>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="pt-10 border-t border-white/10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                More Vlogs &amp; Articles
              </h3>
              <Link href="/blog" className="text-xs font-bold text-[#d89ba4] hover:underline">
                View All Hub →
              </Link>
            </div>

            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 no-scrollbar sm:grid sm:grid-cols-3 sm:gap-6 sm:mx-0 sm:px-0 sm:overflow-visible">
              {relatedPosts.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/blog/${rel.id}`}
                  className="w-[80vw] sm:w-auto shrink-0 snap-center group p-5 rounded-2xl bg-[#141418] border border-white/10 hover:border-[#d89ba4]/40 hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#d89ba4] bg-white/5 px-2 py-0.5 rounded border border-white/10 inline-block mb-2">
                      {rel.category}
                    </span>
                    <h4 className="font-serif font-bold text-base text-white group-hover:text-[#d89ba4] transition-colors line-clamp-2 mb-2">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-zinc-400 line-clamp-2 mb-3">
                      {rel.excerpt}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-zinc-300 group-hover:text-[#d89ba4] flex items-center gap-1 group-hover:translate-x-1 transition-transform pt-2 border-t border-white/10">
                    <span>{rel.type === "vlog" ? "Watch Vlog" : "Read Article"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </article>
  );
}
