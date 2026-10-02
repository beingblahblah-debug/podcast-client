"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  ArrowRight, 
  Radio, 
  Filter, 
  Flame, 
  Headphones,
  Compass
} from "lucide-react";
import Hero from "@/components/Hero";
import Top10Section from "@/components/Top10Section";
import HostSection from "@/components/HostSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import EpisodeCard from "@/components/EpisodeCard";
import { EPISODES, CATEGORIES } from "@/data/episodes";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredEpisodes = EPISODES.filter((ep) => {
    if (selectedCategory === "All") return true;
    return ep.category === selectedCategory;
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Top 10 Leaderboard Showcase */}
      <Top10Section />

      {/* 3. Explore Recent Episodes Catalog */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading & Category Filter */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-2 border border-slate-200">
                <Compass className="w-3.5 h-3.5 text-amber-600" />
                <span>Explore the Catalog</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 tracking-tight">
                Latest Episodes
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                Listen to masterclass interviews across leadership, neuroscience, technology, and creativity.
              </p>
            </div>

            {/* Category filter pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-slate-950 text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:text-slate-950 hover:bg-slate-200/70"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of episodes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEpisodes.slice(0, 6).map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} highlightRank={episode.isTop10} />
            ))}
          </div>

          {/* View All Button */}
          <div className="mt-12 text-center">
            <Link
              href="/episodes"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-950 text-white hover:bg-slate-800 font-semibold text-sm shadow-md hover:shadow-lg transition-all group"
            >
              <span>Browse All {EPISODES.length}+ Recorded Episodes</span>
              <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* 4. Host Story & Studio */}
      <HostSection />

      {/* 5. Listener Testimonials */}
      <TestimonialsSection />

      {/* 6. Guest Pitch Callout Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white border-t border-slate-200/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Have a transformational story?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-950 tracking-tight mb-4">
            We are always booking remarkable minds.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            If you have built something extraordinary, survived a radical inflection point, or possess rare domain mastery, pitch Jessica&apos;s editorial desk.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/be-a-guest"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              <span>Submit Guest Pitch Application</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-semibold text-sm transition-colors"
            >
              <span>Sponsorship & Media Kit</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
