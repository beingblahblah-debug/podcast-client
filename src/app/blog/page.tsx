"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  BookOpen, 
  Clock, 
  Calendar, 
  ArrowRight, 
  Search, 
  Sparkles,
  MapPin,
  TrendingUp,
  Award,
  Compass,
  Building2,
  CheckCircle2,
  MessageCircle
} from "lucide-react";
import { ARTICLES, Article } from "@/data/articles";

export default function BlogPage() {
  const [selectedTag, setSelectedTag] = useState("All");
  const [search, setSearch] = useState("");

  const categories = [
    "All",
    "National Rankings",
    "City Guides",
    "SEO & AI Intelligence",
    "Executive Media & Leadership",
    "Guest Pitching & PR",
    "Brand Sponsorship & ROI",
    "Podcast Production & Acoustics"
  ];

  const filtered = ARTICLES.filter((a) => {
    if (selectedTag !== "All" && a.category !== selectedTag) return false;
    if (search.trim() !== "") {
      const q = search.toLowerCase();
      return (
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.seoFocus.toLowerCase().includes(q) ||
        (a.city && a.city.toLowerCase().includes(q))
      );
    }
    return true;
  });

  const featuredArticle = ARTICLES.find((a) => a.featured) || ARTICLES[0];
  const remainingArticles = filtered.filter((a) => a.id !== (selectedTag === "All" && !search ? featuredArticle.id : ""));

  const cityGuides = ARTICLES.filter((a) => a.category === "City Guides");

  return (
    <div className="py-12 md:py-20 bg-[#fafaf9] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5 text-amber-700" />
            <span>Thought Leadership & Industry Guides</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-950 tracking-tight mb-4">
            Executive Audio, Startup Corridors & Narrative Craft
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            In-depth research, city ecosystem guides, and founder playbooks written by Harshita Dagha. Unpacking how top voices, founders, and institutions lead modern discourse across India and globally.
          </p>
        </div>

        {/* Featured Hero Article Showcase (Only on "All" without active search) */}
        {selectedTag === "All" && !search && featuredArticle && (
          <div className="mb-14">
            <Link
              href={`/blog/${featuredArticle.id}`}
              className="group block rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div className="relative aspect-[16/10] lg:aspect-auto lg:col-span-7 overflow-hidden">
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-slate-950/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-amber-400 border border-amber-400/30 flex items-center gap-1.5 shadow-lg">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Featured Master Guide · 2026 Edition</span>
                  </div>
                </div>

                <div className="p-8 sm:p-10 lg:col-span-5 flex flex-col justify-between bg-gradient-to-b from-white to-slate-50/50">
                  <div>
                    <div className="flex items-center gap-3 text-xs text-slate-500 mb-4">
                      <span className="font-bold text-amber-800 uppercase tracking-wider bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60">
                        {featuredArticle.category}
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {featuredArticle.readTime}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 group-hover:text-amber-700 transition-colors leading-snug mb-4">
                      {featuredArticle.title}
                    </h2>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 line-clamp-4">
                      {featuredArticle.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-200/70 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-200 shadow-sm shrink-0">
                        <Image
                          src={featuredArticle.author.avatar}
                          alt={featuredArticle.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900">{featuredArticle.author.name}</p>
                        <p className="text-[11px] text-slate-500">{featuredArticle.author.role}</p>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-950 text-white text-xs font-bold group-hover:bg-amber-600 transition-colors shadow-xs">
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Pan-India City Hubs Quick Navigation Strip */}
        <div className="mb-12 p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200 inline-block mb-1">
                Regional Startup & Executive Coverage
              </span>
              <h3 className="font-serif font-bold text-lg text-slate-950">
                Explore Dedicated Metro Ecosystem Guides
              </h3>
            </div>
            <button
              onClick={() => setSelectedTag("City Guides")}
              className="text-xs font-bold text-amber-800 hover:text-amber-950 inline-flex items-center gap-1 self-start sm:self-auto cursor-pointer"
            >
              <span>View All 7 City Guides</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar pb-1">
            {cityGuides.map((cg) => (
              <Link
                key={cg.id}
                href={`/blog/${cg.id}`}
                className="px-3.5 py-2 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800 whitespace-nowrap transition-all flex items-center gap-1.5 group shrink-0"
              >
                <MapPin className="w-3 h-3 text-amber-600 group-hover:scale-110 transition-transform" />
                <span>{cg.city}</span>
                <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 transition-all" />
              </Link>
            ))}
          </div>
        </div>

        {/* Search & Category Filter */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs mb-10 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search guides by keyword, city, or topic (e.g. 'Mumbai BKC', 'Bengaluru', 'guest pitching', 'sponsorship ROI')..."
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-all text-slate-900"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedTag(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedTag === cat
                    ? "bg-slate-950 text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:text-slate-950 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Count */}
        <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-6 px-1">
          <span>Showing {remainingArticles.length} guides</span>
          {selectedTag !== "All" && (
            <button
              onClick={() => setSelectedTag("All")}
              className="text-amber-800 font-bold hover:underline cursor-pointer"
            >
              Reset Category Filter
            </button>
          )}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {remainingArticles.map((article) => (
            <Link
              key={article.id}
              href={`/blog/${article.id}`}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 overflow-hidden flex flex-col justify-between group block cursor-pointer"
            >
              <div>
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5">
                    <span className="bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-slate-900 shadow-sm">
                      {article.category}
                    </span>
                    {article.city && (
                      <span className="bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-amber-400 shadow-sm flex items-center gap-1">
                        <MapPin className="w-2.5 h-2.5" />
                        <span>{article.city}</span>
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2.5 text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {article.date}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-lg sm:text-xl text-slate-950 group-hover:text-amber-700 transition-colors mb-2.5 leading-snug line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-900">
                <span className="flex items-center gap-1.5 text-slate-600 text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>By Harshita Dagha</span>
                </span>
                <span className="inline-flex items-center gap-1 text-amber-700 group-hover:translate-x-1 transition-transform">
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Editorial Desk / WhatsApp Consultation Banner */}
        <div className="rounded-3xl bg-slate-900 text-white p-8 md:p-12 border border-slate-800 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-2">
              Harshita Dagha Media Editorial Desk
            </span>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white tracking-tight mb-2">
              Need strategic guidance on executive podcasting?
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Connect directly with our production desk on WhatsApp for guest inquiries, corporate brand podcast development, and keynote moderation across Mumbai, Bengaluru, and Delhi NCR.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://wa.me/918779003799?text=Hi%20Harshita%20Dagha%20Maisheri,%20I%20read%20your%20articles%20and%20guides%20and%20would%20like%20to%20discuss%20an%20executive%20podcast%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold transition-all shadow-lg shadow-emerald-500/25 hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Direct WhatsApp Desk</span>
            </a>

            <Link
              href="/be-a-guest"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-slate-950 hover:bg-slate-100 text-xs font-bold transition-all shadow-md"
            >
              <span>Submit Guest Pitch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
