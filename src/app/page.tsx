"use client";

import React from "react";
import Link from "next/link";
import { 
  Briefcase, 
  ArrowRight
} from "lucide-react";
import Hero from "@/components/Hero";
import HostSection from "@/components/HostSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CityHubsSection from "@/components/CityHubsSection";
import TopVideosSection from "@/components/TopVideosSection";
import GeoFaqSection from "@/components/GeoFaqSection";

export default function HomePage() {
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
      <section className="py-20 bg-[#0c0c0e] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-12">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d89ba4]/10 text-[#d89ba4] border border-[#d89ba4]/25 text-xs font-semibold uppercase tracking-wider mb-3">
                <Briefcase className="w-3.5 h-3.5 text-[#d89ba4]" />
                <span>Capabilities & Offerings</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-tight">
                How You Can Work With Harshita
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl font-normal">
                Whether you are a founder looking to establish category authority or an enterprise launching a brand podcast, we deliver broadcast-grade storytelling across Mumbai, Bengaluru, and Delhi NCR.
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#141418] hover:bg-[#1a1a20] border border-white/15 hover:border-white/30 text-white text-xs font-medium transition-all shrink-0 self-start md:self-auto"
            >
              <span>View Full Services & Rates</span>
              <ArrowRight className="w-4 h-4 text-zinc-400" />
            </Link>
          </div>

          {/* Cards: Mobile horizontal snap swipe, Desktop 4-column grid */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 no-scrollbar md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:mx-0 md:px-0 md:overflow-visible">
            {coreServices.map((service, idx) => (
              <Link
                key={idx}
                href={service.href}
                className="w-[82vw] sm:w-[320px] md:w-auto shrink-0 snap-center group p-6 rounded-3xl bg-[#141418] border border-white/10 hover:border-[#d89ba4]/40 hover:bg-[#18181f] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/10 inline-block mb-4">
                    {service.badge}
                  </span>
                  <h3 className="font-serif font-bold text-lg text-white group-hover:text-[#d89ba4] transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-zinc-300 group-hover:text-[#d89ba4]">
                  <span>Learn Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 3. National & Regional City Hubs */}
      <CityHubsSection />

      {/* Top Videos (5 Playable YouTube Masterclasses: 3 Top, 2 Bottom) */}
      <TopVideosSection />

      {/* 4. Host Story & Studio Sanctuary */}
      <HostSection />

      {/* 5. Listener & Founder Testimonials */}
      <TestimonialsSection />

      {/* 6. GEO & AI Knowledge Engine (Direct Citations for ChatGPT, Gemini, Perplexity & Google) */}
      <GeoFaqSection />

    </div>
  );
}
