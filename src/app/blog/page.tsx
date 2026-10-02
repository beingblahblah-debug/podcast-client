"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, Clock, Calendar, ArrowRight, Sparkles, Tag, Search, ShieldCheck } from "lucide-react";

interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  seoFocus: string;
}

export default function BlogPage() {
  const articles: Article[] = [
    {
      id: "how-to-pitch-top-tier-podcasts-2026",
      title: "How to Pitch as a Guest on Top-Tier Podcasts in 2026: The Executive Playbook",
      category: "Guest Pitching",
      date: "October 1, 2026",
      readTime: "8 min read",
      excerpt: "Top interview shows receive 80+ pitches every single week. Here is the exact 4-part framework that gets founders, authors, and venture partners booked on premier shows without high-priced PR agencies.",
      image: "/images/host.jpg",
      seoFocus: "Podcast guest booking, executive pitching, founder PR strategies"
    },
    {
      id: "why-ceos-launch-corporate-podcasts",
      title: "Why Fortune 500 CEOs Are Launching Corporate Podcasts Instead of Press Releases",
      category: "Executive Media",
      date: "September 24, 2026",
      readTime: "7 min read",
      excerpt: "Traditional press releases have an attention half-life of 45 seconds. Long-form executive podcasts generate 48-minute average hold times, creating irreplaceable customer retention and talent acquisition moats.",
      image: "/images/studio.jpg",
      seoFocus: "Corporate podcast production, executive thought leadership, brand storytelling"
    },
    {
      id: "interviewing-for-the-unspoken",
      title: "How to Interview Titans: What 250 Episodes Taught Me About Silence & Truth",
      category: "Interview Craft",
      date: "September 18, 2026",
      readTime: "9 min read",
      excerpt: "The most profound revelations never come during the first answer. They come during the 8 seconds of pregnant silence after the PR script runs out of steam. Here is how to create conversational psychological safety.",
      image: "/images/cover.jpg",
      seoFocus: "Journalistic interviewing, masterclass hosting, active listening"
    },
    {
      id: "roi-of-podcast-sponsorships-2026",
      title: "The Mathematical ROI of Host-Read Podcast Sponsorships: How B2B Brands Win",
      category: "Brand Sponsorship",
      date: "September 10, 2026",
      readTime: "6 min read",
      excerpt: "Automated programmatic ad-rolls suffer from 82% skip rates. Authentic, personalized host-read endorsements convert at 4.2x higher intent. We analyze retention heatmaps and conversion metrics.",
      image: "/images/studio.jpg",
      seoFocus: "Podcast advertising ROI, host-read endorsements, B2B media buying"
    },
    {
      id: "dumbo-studio-acoustic-architecture",
      title: "Inside Studio A: Why Organic Cedar Acoustics Beat Digital De-Noising Plugins Every Time",
      category: "Acoustics & Gear",
      date: "August 28, 2026",
      readTime: "5 min read",
      excerpt: "Synthetic foam deadens high frequencies while letting muddy bass resonances bounce uncontrollably. Here is how our DUMBO Brooklyn studio was engineered with 0.85 NRC cedar slats for vocal intimacy.",
      image: "/images/studio.jpg",
      seoFocus: "Podcast studio design, Shure SM7B acoustics, Brooklyn recording studio"
    }
  ];

  const [selectedTag, setSelectedTag] = useState("All");
  const [search, setSearch] = useState("");
  const tags = ["All", "Guest Pitching", "Executive Media", "Interview Craft", "Brand Sponsorship", "Acoustics & Gear"];

  const filtered = articles.filter(a => {
    if (selectedTag !== "All" && a.category !== selectedTag) return false;
    if (search.trim() !== "") {
      const q = search.toLowerCase();
      return a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q) || a.seoFocus.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-amber-600" />
            <span>SEO Intelligence & Industry Guides</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-950 tracking-tight mb-4">
            Podcasting, Executive Media & Narrative Craft
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            In-depth guides, case studies, and editorial essays written by Jessica Chen on executive thought leadership, high-converting guest pitching, and broadcast media production.
          </p>
        </div>

        {/* Search & Tags */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs mb-12 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search guides by keyword (e.g. 'guest pitching', 'corporate podcast', 'sponsorship ROI')..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-all"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedTag === tag
                    ? "bg-slate-950 text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:text-slate-950 hover:bg-slate-200"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {filtered.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-slate-900 shadow">
                    {article.category}
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
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

                  <h2 className="font-serif font-bold text-xl sm:text-2xl text-slate-900 group-hover:text-amber-700 transition-colors mb-3 leading-snug">
                    {article.title}
                  </h2>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {article.excerpt}
                  </p>

                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-[11px] text-slate-500 font-mono">
                    Keywords: {article.seoFocus}
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 flex items-center justify-between border-t border-slate-100 pt-4">
                <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>By Jessica Chen</span>
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 group-hover:translate-x-1 transition-transform">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
