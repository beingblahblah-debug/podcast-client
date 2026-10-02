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
import { EPISODES, CATEGORIES } from "@/data/episodes";

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const whatsappUrl = "https://wa.me/919876543210?text=Hi%20Jessica,%20I%20would%20like%20to%20discuss%20a%20podcast%20episode%20/%20guest%20appearance.";

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

      {/* 2. Services Overview Banner (What Jessica Chen Does) */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
                <Briefcase className="w-3.5 h-3.5 text-amber-600" />
                <span>Capabilities & Offerings</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 tracking-tight">
                How You Can Work With Jessica
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
                Whether you are a founder looking to establish category authority or an enterprise launching a brand podcast, we deliver broadcast-grade storytelling.
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreServices.map((service, idx) => (
              <Link
                key={idx}
                href={service.href}
                className="group p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-slate-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
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

      {/* 4. Portfolio of Recorded Shows & Masterclasses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
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

          {/* Grid of episodes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEpisodes.slice(0, 6).map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} highlightRank={episode.isTop10} />
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

      {/* 5. Host Story & Brooklyn Studio */}
      <HostSection />

      {/* 6. Listener & Client Testimonials */}
      <TestimonialsSection />

      {/* 7. High-Converting WhatsApp & Pitch Callout Banner */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white border-t border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Booking & Editorial Desk</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-950 tracking-tight mb-4">
            Have a story that demands an examined conversation?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            If you are a founder, author, or thinker with an unprecedented perspective, connect with Jessica Chen&apos;s editorial desk or message us directly on WhatsApp.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-lg shadow-emerald-500/25 transition-all hover:scale-105 active:scale-95"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>Instant WhatsApp Pitch</span>
            </a>

            <Link
              href="/be-a-guest"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all"
            >
              <CalendarCheck className="w-4 h-4 text-amber-400" />
              <span>Submit Formal Guest Application</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
