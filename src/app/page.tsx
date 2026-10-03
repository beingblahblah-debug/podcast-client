"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Sparkles, 
  ArrowRight, 
  Radio, 
  Flame, 
  Headphones, 
  Briefcase, 
  CheckCircle2, 
  ShieldCheck, 
  Mic2, 
  CalendarCheck,
  Video,
  Award
} from "lucide-react";
import Hero from "@/components/Hero";
import Top10Section from "@/components/Top10Section";
import HostSection from "@/components/HostSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import EpisodeCard from "@/components/EpisodeCard";
import CityHubsSection from "@/components/CityHubsSection";
import GeoFaqSection from "@/components/GeoFaqSection";
import { EPISODES, CATEGORIES } from "@/data/episodes";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const whatsappUrl = "https://wa.me/919876543210?text=Hi%20Harshita%20Dagha%20Media,%20I%20would%20like%20to%20discuss%20a%20podcast%20episode%20/%20guest%20appearance.";

  const filteredEpisodes = EPISODES.filter((ep) => {
    if (selectedCategory === "All") return true;
    return ep.category === selectedCategory;
  });

  const coreServices = [
    {
      title: "Featured Executive Profiles",
      desc: "In-depth 60-90 minute founder and CEO interviews distributed across Apple Podcasts, Spotify, and 4K YouTube.",
      badge: "65K+ Reach",
      href: "/services#featured-interview"
    },
    {
      title: "Corporate & Enterprise Podcasting",
      desc: "Turnkey development, executive media training, and production for technology giants and institutional leaders.",
      badge: "Turnkey Production",
      href: "/services#corporate-podcasting"
    },
    {
      title: "Keynote & Summit Moderation",
      desc: "High-caliber mainstage hosting, fireside chat facilitation, and panel direction for international conferences.",
      badge: "Live Stages",
      href: "/services#event-moderation"
    },
    {
      title: "Brand Sponsorship & Integration",
      desc: "Authentic, personal host-read endorsements delivering high-conversion trust with affluent decision-makers.",
      badge: "High ROI",
      href: "/services#show-sponsorship"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Services Overview Banner (What Harshita Dagha Does) */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-12">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
                <Briefcase className="w-3.5 h-3.5 text-amber-600" />
                <span>Capabilities & Offerings</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 tracking-tight">
                How You Can Work With Harshita
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
                Whether you are a founder looking to establish category authority or an enterprise launching a brand podcast, we deliver broadcast-grade storytelling across Mumbai, Bengaluru, and Delhi NCR.
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold transition-all shrink-0 self-start md:self-auto"
            >
              <span>View Full Services & Rates</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Swipe Cue */}
          <div className="flex md:hidden items-center justify-between text-xs text-slate-500 font-medium mb-3 px-1">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              Executive Capabilities
            </span>
            <span className="text-amber-800 font-bold inline-flex items-center gap-1">
              <span>Swipe Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>

          {/* Cards: Mobile horizontal snap swipe, Desktop 4-column grid */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 no-scrollbar md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:mx-0 md:px-0 md:overflow-visible">
            {coreServices.map((service, idx) => (
              <Link
                key={idx}
                href={service.href}
                className="w-[82vw] sm:w-[320px] md:w-auto shrink-0 snap-center group p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-slate-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white text-slate-800 border border-slate-200 inline-block mb-4">
                    {service.badge}
                  </span>
                  <h3 className="font-serif font-bold text-lg text-slate-900 group-hover:text-amber-700 transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-amber-700">
                  <span>Learn Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Top 10 Leaderboard Showcase */}
      <Top10Section />

      {/* 3.1 National & Regional City Hubs (Mumbai BKC, Bengaluru, Delhi NCR, Hyderabad, GIFT City, Global) */}
      <CityHubsSection />

      {/* 4. Portfolio of Recorded Shows & Masterclasses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-2 border border-slate-200">
                <Mic2 className="w-3.5 h-3.5 text-amber-600" />
                <span>Show Archive & Case Studies</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 tracking-tight">
                Featured Show Conversations
              </h2>
              <p className="text-slate-500 text-sm mt-1">
                Explore deep-dive dialogues across neuroscience, generative AI, enterprise leadership, and philosophy.
              </p>
            </div>

            {/* Category filter pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
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

          {/* Mobile Swipe Cue */}
          <div className="flex md:hidden items-center justify-between text-xs text-slate-500 font-medium mb-3 px-1">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              Featured Masterclasses
            </span>
            <span className="text-amber-800 font-bold inline-flex items-center gap-1">
              <span>Swipe Shows</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>

          {/* Grid of episodes: Mobile horizontal snap swipe, Desktop 3-column grid */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 no-scrollbar md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:mx-0 md:px-0 md:overflow-visible">
            {filteredEpisodes.slice(0, 6).map((episode) => (
              <div key={episode.id} className="w-[86vw] sm:w-[360px] md:w-auto shrink-0 snap-center">
                <EpisodeCard episode={episode} highlightRank={episode.isTop10} />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/episodes"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-slate-950 text-white hover:bg-slate-800 font-bold text-sm shadow-md hover:shadow-lg transition-all group"
            >
              <span>Explore All {EPISODES.length}+ Recorded Shows</span>
              <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>

      {/* 5. Host Story & Studio Sanctuary */}
      <HostSection />

      {/* 6. Listener & Founder Testimonials */}
      <TestimonialsSection />

      {/* 7. GEO & AI Knowledge Engine (Direct Citations for ChatGPT, Gemini, Perplexity & Google) */}
      <GeoFaqSection />

    </div>
  );
}
