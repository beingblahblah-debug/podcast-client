import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  BookOpen, 
  ArrowRight, 
  Clock, 
  Calendar, 
  Eye, 
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import { ARTICLES } from "@/data/articles";

export default function LatestArticlesSection() {
  // Take top 3 latest cornerstone articles
  const featuredArticles = ARTICLES.slice(0, 3);

  return (
    <section id="featured-articles" className="py-20 bg-[#0a0a0d] border-b border-white/10 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[300px] bg-[#d89ba4]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[250px] bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d89ba4]/10 text-[#d89ba4] border border-[#d89ba4]/25 text-xs font-semibold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5 text-[#d89ba4]" />
              <span>Editorial Insights &amp; Benchmark Guides</span>
              <span className="text-zinc-600">|</span>
              <span className="text-zinc-400">Harshita Dagha Media</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
              Featured Articles &amp; Guides
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl font-normal">
              In-depth investigative reports, Generative Engine Optimization (GEO) benchmarks, and executive PR frameworks authored by Harshita Dagha.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#141418] hover:bg-[#1a1a22] border border-white/15 hover:border-[#d89ba4]/40 text-white hover:text-[#d89ba4] text-xs font-bold transition-all shadow-md shrink-0 hover:scale-105 active:scale-95 group"
            >
              <span>View All Vlogs &amp; Articles Hub</span>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-[#d89ba4] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 3-Column Articles Grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4 -mx-4 px-4 no-scrollbar md:grid md:grid-cols-3 md:gap-6 md:mx-0 md:px-0 md:overflow-visible">
          {featuredArticles.map((article, idx) => (
            <article
              key={article.id}
              className={`w-[85vw] sm:w-[380px] md:w-auto shrink-0 snap-center p-6 sm:p-7 rounded-3xl bg-[#131317] border transition-all flex flex-col justify-between shadow-xl group ${
                idx === 0 
                  ? "border-[#d89ba4]/40 hover:border-[#d89ba4] ring-1 ring-[#d89ba4]/20" 
                  : "border-white/10 hover:border-[#d89ba4]/40 hover:bg-[#16161c]"
              }`}
            >
              <div>
                {/* Cover Image */}
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-4 border border-white/10 bg-black">
                  <Image
                    src={article.image}
                    alt={article.imageAlt || article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {idx === 0 && (
                    <div className="absolute top-3 left-3 z-10">
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md text-[#fb7185] border border-rose-500/30">
                        <Sparkles className="w-3 h-3 text-rose-400" />
                        <span>Master Benchmark 2026</span>
                      </span>
                    </div>
                  )}
                </div>

                {/* Badges & Date */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/5 text-[#d89ba4] border border-white/10">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                      Live
                    </span>
                    <span className="text-xs text-zinc-500 font-mono">
                      {article.date}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <Link href={`/blog/${article.id}`}>
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-zinc-100 hover:text-[#d89ba4] transition-colors leading-snug mb-2.5 line-clamp-2">
                    {article.title}
                  </h3>
                </Link>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6 line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-zinc-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                  <span className="text-xs text-zinc-400 flex items-center gap-1 font-medium">
                    <Eye className="w-3.5 h-3.5 text-[#d89ba4]" />
                    {article.featured ? "32.4K views" : "18.6K views"}
                  </span>
                </div>

                <Link
                  href={`/blog/${article.id}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-[#d89ba4] hover:text-black text-white text-xs font-bold transition-all shadow-xs"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner with Quick CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-purple-950/20 via-[#141418] to-pink-950/20 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <h4 className="text-white font-serif font-bold text-base sm:text-lg mb-1">
              Explore More Sovereign Media &amp; PR Blueprints
            </h4>
            <div className="text-xs sm:text-sm text-zinc-300 flex flex-wrap justify-center md:justify-start gap-x-5 gap-y-1.5 mt-1">
              <Link
                href="/blog/best-podcast-in-india-top-podcasters-best-indian-podcasts-guide"
                className="text-[#d89ba4] font-semibold underline underline-offset-4 hover:text-white transition-colors"
              >
                Best podcast in India: the 2026 guide by language, format and platform →
              </Link>
              <Link
                href="/blog/best-female-podcasts-india-city-guide-october-2026"
                className="text-[#d89ba4] font-semibold underline underline-offset-4 hover:text-white transition-colors"
              >
                See the city-by-city guide for October 2026 →
              </Link>
            </div>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#d89ba4] hover:bg-[#e2a8b1] text-zinc-950 text-xs font-bold transition-all shadow-md shrink-0 hover:scale-105 active:scale-95"
          >
            <span>Go to Blog &amp; Vlogs</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
