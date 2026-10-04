"use client";

import React from "react";
import Link from "next/link";
import { 
  MapPin, 
  ArrowUpRight, 
  CheckCircle2
} from "lucide-react";

/* =========================================================================
   AUTHENTIC HANDCRAFTED LANDMARK LOGOS FOR EACH CITY
   ========================================================================= */

// 1. Mumbai — Gateway of India (Iconic waterfront monument with side arches & turrets)
function GatewayOfIndiaIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Base Plinth */}
      <path d="M2 21h20" />
      {/* Outer Flanking Turrets / Pillars */}
      <path d="M4 21V8l1-2h1l1 2v13" />
      <path d="M20 21V8l-1-2h-1l-1 2v13" />
      {/* Upper Cornice & Central Dome */}
      <path d="M6 8h12" />
      <path d="M7 6h10" />
      <path d="M10 6a2 2 0 0 1 4 0" />
      {/* Main Central Grand Arch */}
      <path d="M8 21v-7a4 4 0 0 1 8 0v7" />
      {/* Flanking Side Arches */}
      <path d="M4.5 21v-3a1.5 1.5 0 0 1 2 0v3" />
      <path d="M17.5 21v-3a1.5 1.5 0 0 1 2 0v3" />
    </svg>
  );
}

// 2. Bengaluru — Vidhana Soudha (Grand dome, Ashoka emblem, and pillared state legislative assembly)
function VidhanaSoudhaIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Top Ashoka Finial & Dome */}
      <path d="M12 2v2" />
      <path d="M10 6a2 2 0 0 1 4 0" />
      <path d="M8.5 8h7" />
      <path d="M8 8a4 4 0 0 1 8 0" />
      {/* Neo-Dravidian Upper Roof */}
      <path d="M3 11h18" />
      {/* Symmetrical Grand Colonnade Pillars */}
      <path d="M5 11v7" />
      <path d="M8 11v7" />
      <path d="M11 11v7" />
      <path d="M13 11v7" />
      <path d="M16 11v7" />
      <path d="M19 11v7" />
      {/* Grand Tiered Flight of Steps */}
      <path d="M2 21h20" />
      <path d="M4 19h16" />
      <path d="M7 18h10" />
    </svg>
  );
}

// 3. Delhi NCR — India Gate (Monumental triumphal arch with stepped cornice & flame plinth)
function IndiaGateIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Top Stepped Attic / Cornice */}
      <path d="M7 3h10" />
      <path d="M6 5h12" />
      <path d="M8 3v2" />
      <path d="M16 3v2" />
      {/* Massive Outer Uprights */}
      <path d="M6 5v15" />
      <path d="M18 5v15" />
      {/* Horizontal Frieze / Inscription Band */}
      <path d="M6 9h12" />
      {/* Main Monumental Arch */}
      <path d="M9 20v-6.5a3 3 0 0 1 6 0V20" />
      {/* Inner Decorative Arch Contour */}
      <path d="M10 20v-5.5a2 2 0 0 1 4 0V20" />
      {/* Base Pedestal */}
      <path d="M3 21h18" />
      <path d="M4 20h16" />
    </svg>
  );
}

// 4. Hyderabad — Charminar (Iconic 4-minaret monument with upper arcaded balconies)
function CharminarIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Ground Foundation */}
      <path d="M3 21h18" />
      {/* Left Soaring Minaret with Spiral Balconies */}
      <path d="M4 21V5l1-2 1 2v16" />
      <path d="M3.5 9h3" />
      <path d="M3.5 14h3" />
      {/* Right Soaring Minaret with Spiral Balconies */}
      <path d="M18 21V5l1-2 1 2v16" />
      <path d="M17.5 9h3" />
      <path d="M17.5 14h3" />
      {/* Upper Double-Arcade Gallery */}
      <path d="M6 9h12" />
      <path d="M7 7h10" />
      {/* Upper Central Domelet */}
      <circle cx="12" cy="6" r="1.5" />
      {/* Grand Pointed Center Archway */}
      <path d="M8 21v-6c0-2 2-3.5 4-3.5s4 1.5 4 3.5v6" />
    </svg>
  );
}

// 5. Pune — Shaniwar Wada (Fortified stone Dilli Darwaza with bastions & battlements)
function ShaniwarWadaIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Heavy Stone Foundation */}
      <path d="M2 21h20" />
      {/* Left Bastion Tower (Burj) */}
      <path d="M4 21V7l1.5-1.5L7 7v14" />
      <path d="M3.5 10h4" />
      {/* Right Bastion Tower (Burj) */}
      <path d="M17 21V7l1.5-1.5L20 7v14" />
      <path d="M16.5 10h4" />
      {/* Peshwa Fortification Battlements */}
      <path d="M7 8h10" />
      <path d="M8 6v2" />
      <path d="M11 6v2" />
      <path d="M13 6v2" />
      <path d="M16 6v2" />
      {/* Spiked Delhi Darwaza Arch */}
      <path d="M8 21v-7a4 4 0 0 1 8 0v7" />
      <path d="M12 14v7" />
    </svg>
  );
}

// 6. Ahmedabad — Sidi Saiyyed Jali (Famous carved Tree of Life arched window & Sabarmati)
function AhmedabadJaliIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Semicircular Jali Arch Frame */}
      <path d="M3 21h18" />
      <path d="M4 21V12a8 8 0 0 1 16 0v9" />
      {/* Central Kalpvriksha Tree Trunk */}
      <path d="M12 21v-7" />
      {/* Intricate Filigree Branches */}
      <path d="M12 14c-2-1.5-4-1-5-2" />
      <path d="M12 14c2-1.5 4-1 5-2" />
      <path d="M12 12c-1.5-2-3-3-5-3.5" />
      <path d="M12 12c1.5-2 3-3 5-3.5" />
      <path d="M12 10V6" />
      <circle cx="12" cy="5" r="1" />
      <circle cx="7" cy="8.5" r="1" />
      <circle cx="17" cy="8.5" r="1" />
    </svg>
  );
}

// 7. Chennai — Kapaleeshwarar Temple Gopuram (Pyramidal tiered temple tower with kalashams)
function ChennaiGopuramIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Summit Kalashams (Pinnacles) */}
      <path d="M10 2h4" />
      <path d="M11 2v1" />
      <path d="M13 2v1" />
      {/* Tier 1 */}
      <path d="M9 3h6l-1 3h-4z" />
      {/* Tier 2 */}
      <path d="M7 6h10l-1 4H8z" />
      {/* Tier 3 */}
      <path d="M5 10h14l-1 4H6z" />
      {/* Lower Gateway Structure */}
      <path d="M4 14h16v7H4z" />
      <path d="M2 21h20" />
      {/* Sacred Sanctum Portal */}
      <path d="M10 21v-4a2 2 0 0 1 4 0v4" />
    </svg>
  );
}

// 8. Global Remote — Worldwide Broadcast & Satellite Network
function GlobalRemoteIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.6 9h16.8" />
      <path d="M3.6 15h16.8" />
      <path d="M11.5 3a14 14 0 0 0 0 18" />
      <path d="M12.5 3a14 14 0 0 1 0 18" />
      {/* High-frequency orbital broadcast signal */}
      <circle cx="19" cy="5" r="1.5" fill="currentColor" />
      <path d="M16 5a4 4 0 0 1 4-4" />
    </svg>
  );
}

/* =========================================================================
   CITY HUBS DATA WITH FAMOUS MONUMENT LOGOS
   ========================================================================= */

export default function CityHubsSection() {
  const hubs = [
    {
      city: "Mumbai",
      landmarkName: "Gateway of India",
      role: "Studio Headquarters & Broadcast Hub",
      location: "Bandra Kurla Complex (BKC) · Lower Parel",
      desc: "Home to Harshita Dagha's primary acoustic broadcast sanctuary. Hosting India's top finance titans, Bollywood innovators, and Mumbai unicorn founders.",
      badge: "Flagship Studio",
      icon: GatewayOfIndiaIcon,
      stats: "90+ Episodes Recorded"
    },
    {
      city: "Bengaluru",
      landmarkName: "Vidhana Soudha",
      role: "DeepTech & Venture Capital Stage",
      location: "Koramangala · Indiranagar · HSR Layout",
      desc: "On-the-ground mobile studio setups capturing the pulse of Indian startup capital. Featuring GenAI pioneers, SaaS founders, and top VC managing partners.",
      badge: "Tech Capital",
      icon: VidhanaSoudhaIcon,
      stats: "50+ VC & Tech Profiles"
    },
    {
      city: "Delhi NCR",
      landmarkName: "India Gate",
      role: "Enterprise & Policy Summits",
      location: "Cyber City Gurugram · Central Delhi · Noida",
      desc: "High-level dialogues with Fortune 500 corporate leaders, public policy pioneers, and national industry conference keynote moderations.",
      badge: "Corporate & Policy",
      icon: IndiaGateIcon,
      stats: "30+ Keynote Stages"
    },
    {
      city: "Hyderabad",
      landmarkName: "Charminar",
      role: "SaaS & Global Capability Hub",
      location: "HITEC City · Gachibowli · Financial District",
      desc: "Connecting with enterprise software architects, multinational GCC heads, and biotech entrepreneurs shaping India's high-scale digital infrastructure.",
      badge: "Enterprise SaaS",
      icon: CharminarIcon,
      stats: "25+ Enterprise Leaders"
    },
    {
      city: "Pune",
      landmarkName: "Shaniwar Wada",
      role: "Deep Engineering & Manufacturing",
      location: "Kalyani Nagar · Hinjewadi · Viman Nagar",
      desc: "Interviews exploring auto-tech innovation, deep-tech research, and bootstrapped software founders scaling profitable global operations.",
      badge: "Industrial & Tech",
      icon: ShaniwarWadaIcon,
      stats: "20+ Engineering Founders"
    },
    {
      city: "Ahmedabad",
      landmarkName: "Sidi Saiyyed Jali",
      role: "FinTech & New-Age Capital Hub",
      location: "GIFT City IFSC · SG Highway · Prahalad Nagar",
      desc: "Spotlighting the transformation of international financial services, cross-border banking, and legacy family business modernization.",
      badge: "GIFT City IFSC",
      icon: AhmedabadJaliIcon,
      stats: "15+ FinTech Dialogues"
    },
    {
      city: "Chennai",
      landmarkName: "Temple Gopuram",
      role: "B2B SaaS & Institutional Scale",
      location: "OMR Tech Corridor · Guindy · T. Nagar",
      desc: "Conversations with pioneers of the Indian SaaS revolution, hardware manufacturers, and healthcare technology innovators.",
      badge: "SaaS Capital",
      icon: ChennaiGopuramIcon,
      stats: "18+ SaaS Founders"
    },
    {
      city: "Global Remote",
      landmarkName: "Satellite Network",
      role: "Cross-Border Executive Streams",
      location: "Silicon Valley · Singapore · Dubai DIFC · London",
      desc: "Synchronized dual-end 4K audio-video pipeline allowing seamless, broadcast-grade dialogues with global diaspora leaders anywhere in the world.",
      badge: "Worldwide Reach",
      icon: GlobalRemoteIcon,
      stats: "150+ Countries Reached"
    },
  ];

  return (
    <section className="py-20 bg-[#0c0c0e] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 md:mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d89ba4]/10 text-[#d89ba4] border border-[#d89ba4]/25 text-xs font-semibold uppercase tracking-wider mb-3">
              <MapPin className="w-3.5 h-3.5 text-[#d89ba4]" />
              <span>National & Global Footprint</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-tight">
              Operating Across India&apos;s Leading Business & Tech Hubs
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed font-normal">
              From her flagship studio in Mumbai BKC to on-location recordings in Bengaluru, Delhi NCR, Hyderabad, and GIFT City, Harshita Dagha bridges regional startup ecosystems with international thought leadership.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#141418] hover:bg-[#1a1a20] border border-white/15 hover:border-white/30 text-white text-xs font-medium transition-all shadow-sm shrink-0 self-start md:self-auto"
          >
            <span>Book Studio or Location Shoot</span>
            <ArrowUpRight className="w-4 h-4 text-zinc-400" />
          </Link>
        </div>

        {/* Hubs Grid: Mobile horizontal swipe carousel, Desktop 4-column grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 no-scrollbar md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:mx-0 md:px-0 md:overflow-visible">
          {hubs.map((hub, idx) => {
            const Icon = hub.icon;
            return (
              <div
                key={idx}
                className="w-[85vw] sm:w-[340px] md:w-auto shrink-0 snap-center group relative p-7 rounded-3xl bg-[#141418] border border-white/10 shadow-lg hover:border-[#d89ba4]/40 hover:bg-[#18181f] transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Background Ambient Glow */}
                <div className="absolute inset-0 bg-[#d89ba4]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-2 mb-5">
                    {/* Landmark Logo Badge */}
                    <div className="flex items-center gap-2.5">
                      <div className="w-11 h-11 rounded-2xl bg-[#0c0c0e] border border-white/15 text-[#d89ba4] flex items-center justify-center shadow-md group-hover:scale-105 group-hover:border-[#d89ba4]/40 group-hover:bg-[#d89ba4]/10 transition-all">
                        <Icon className="w-6 h-6 text-[#d89ba4]" />
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-semibold px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/5">
                        {hub.landmarkName}
                      </span>
                    </div>

                    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/10">
                      {hub.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-white mb-1 group-hover:text-[#d89ba4] transition-colors">
                    {hub.city}
                  </h3>
                  <div className="text-xs font-semibold text-[#d89ba4] mb-2">
                    {hub.role}
                  </div>
                  <div className="text-[11px] text-zinc-400 mb-4 font-normal flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-zinc-500 shrink-0" />
                    <span>{hub.location}</span>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {hub.desc}
                  </p>
                </div>

                <div className="relative z-10 mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-medium text-zinc-400">
                  <span className="flex items-center gap-1 text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    {hub.stats}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-zinc-400 text-[10px] uppercase font-bold tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Broadcast Active
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
