"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Building2, Cpu, Landmark, Globe, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function CityHubsSection() {
  const hubs = [
    {
      city: "Mumbai",
      role: "Studio Headquarters & Broadcast Hub",
      location: "Bandra Kurla Complex (BKC) · Lower Parel",
      desc: "Home to Harshita Dagha's primary acoustic broadcast sanctuary. Hosting India's top finance titans, Bollywood innovators, and Mumbai unicorn founders.",
      badge: "Flagship Studio",
      icon: Building2,
      accent: "from-amber-500/10 via-amber-500/5 to-transparent",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
      stats: "90+ Episodes Recorded"
    },
    {
      city: "Bengaluru",
      role: "DeepTech & Venture Capital Stage",
      location: "Koramangala · Indiranagar · Whitefield",
      desc: "On-the-ground mobile studio setups capturing the pulse of Indian startup capital. Featuring GenAI pioneers, SaaS founders, and top VC managing partners.",
      badge: "Tech Capital",
      icon: Cpu,
      accent: "from-blue-500/10 via-blue-500/5 to-transparent",
      badgeColor: "bg-blue-100 text-blue-900 border-blue-300",
      stats: "50+ VC & Tech Profiles"
    },
    {
      city: "Delhi NCR",
      role: "Enterprise & Policy Summits",
      location: "Cyber City Gurugram · Central Delhi",
      desc: "High-level dialogues with Fortune 500 corporate leaders, public policy pioneers, and national industry conference keynote moderations.",
      badge: "Corporate & Policy",
      icon: Landmark,
      accent: "from-emerald-500/10 via-emerald-500/5 to-transparent",
      badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
      stats: "30+ Keynote Stages"
    },
    {
      city: "Global Remote",
      role: "Cross-Border Executive Streams",
      location: "Silicon Valley · Singapore · London · Dubai",
      desc: "Synchronized dual-end 4K audio-video pipeline allowing seamless, broadcast-grade dialogues with global diaspora leaders anywhere in the world.",
      badge: "Worldwide Reach",
      icon: Globe,
      accent: "from-purple-500/10 via-purple-500/5 to-transparent",
      badgeColor: "bg-purple-100 text-purple-900 border-purple-300",
      stats: "150+ Countries Reached"
    },
  ];

  return (
    <section className="py-20 bg-[#fafaf9] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>National & Global Footprint</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 tracking-tight">
              Operating Across India&apos;s Leading Business & Tech Hubs
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              From her flagship studio in Mumbai to on-location recordings in Bengaluru and Delhi NCR, Harshita Dagha bridges regional startup ecosystems with international thought leadership.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-900 text-xs font-bold transition-all shadow-xs shrink-0 self-start md:self-auto"
          >
            <span>Book Studio or Location Shoot</span>
            <ArrowUpRight className="w-4 h-4 text-amber-600" />
          </Link>
        </div>

        {/* Hubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hubs.map((hub, idx) => {
            const Icon = hub.icon;
            return (
              <div
                key={idx}
                className="group relative p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Background Ambient Glow */}
                <div className={`absolute inset-0 bg-gradient-to-b ${hub.accent} opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none`} />

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 text-amber-400" />
                    </div>
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${hub.badgeColor}`}>
                      {hub.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-slate-950 mb-1">
                    {hub.city}
                  </h3>
                  <div className="text-xs font-semibold text-amber-800 mb-2">
                    {hub.role}
                  </div>
                  <div className="text-[11px] text-slate-600 mb-4 font-medium flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-600 shrink-0" />
                    <span>{hub.location}</span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {hub.desc}
                  </p>
                </div>

                <div className="relative z-10 mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                  <span className="flex items-center gap-1 text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    {hub.stats}
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
