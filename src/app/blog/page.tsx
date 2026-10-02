"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, Clock, Calendar, ArrowRight, Sparkles, Tag } from "lucide-react";

interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
}

export default function BlogPage() {
  const articles: Article[] = [
    {
      id: "interviewing-for-the-unspoken",
      title: "How to Interview Titans: What 250 Episodes Taught Me About Silence",
      category: "Interview Craft",
      date: "September 28, 2026",
      readTime: "7 min read",
      excerpt: "The most profound revelations never come during the first answer. They come during the 8 seconds of pregnant silence after the PR answer runs out of steam.",
      image: "/images/studio.jpg"
    },
    {
      id: "my-daily-cognitive-protocol",
      title: "My 4-Hour Morning Protocol for High-Output Interview Preparation",
      category: "Deep Work",
      date: "September 15, 2026",
      readTime: "6 min read",
      excerpt: "Behind every 60-minute episode lies 40 hours of reading out-of-print books, analyzing doctoral dissertations, and mapping conversational inflection points.",
      image: "/images/host.jpg"
    },
    {
      id: "five-books-that-rewired-my-mind",
      title: "The 5 Unorthodox Books I Gift Most Frequently to Podcast Guests",
      category: "Reading Vault",
      date: "August 30, 2026",
      readTime: "9 min read",
      excerpt: "Skip the generic airport business bestsellers. These five obscure texts on ancient stoicism, cognitive cybernetics, and architecture shaped my worldview.",
      image: "/images/cover.jpg"
    },
    {
      id: "building-studio-a-acoustics",
      title: "Why We Built Studio A with Cedar Wood Slats Instead of Foam Panels",
      category: "Studio & Audio",
      date: "August 12, 2026",
      readTime: "5 min read",
      excerpt: "Synthetic foam deadens high frequencies while letting muddy bass resonances bounce uncontrollably. Here is how organic acoustic diffusion creates intimacy.",
      image: "/images/studio.jpg"
    }
  ];

  const [selectedTag, setSelectedTag] = useState("All");
  const tags = ["All", "Interview Craft", "Deep Work", "Reading Vault", "Studio & Audio"];

  const filtered = selectedTag === "All" 
    ? articles 
    : articles.filter(a => a.category === selectedTag);

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-semibold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-amber-600" />
            <span>Essays & Backstage Notes</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-950 tracking-tight mb-4">
            The Elevate Dispatches
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Long-form essays, intellectual frameworks, and behind-the-scenes debriefs written by Jessica Chen and guest thinkers.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedTag === tag
                  ? "bg-slate-950 text-white shadow-xs"
                  : "bg-white border border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-slate-50"
              }`}
            >
              {tag}
            </button>
          ))}
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
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
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

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0 flex items-center justify-between border-t border-slate-100 pt-4">
                <span className="text-xs font-semibold text-slate-800">
                  By Jessica Chen
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 group-hover:translate-x-1 transition-transform">
                  <span>Read Dispatch</span>
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
