"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Mic, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  Download, 
  ArrowRight, 
  Sliders, 
  Radio, 
  Heart, 
  Globe2, 
  Users2,
  Building2,
  MapPin
} from "lucide-react";
import { PODCAST_STATS, PRESS_LOGOS } from "@/data/episodes";

export default function AboutPage() {
  const milestones = [
    {
      year: "2021",
      title: "Episode 001 in Mumbai",
      description: "Harshita recorded her first founder interview in Mumbai with a pair of broadcast dynamic microphones. Over 1,200 startup operators tuned in within 48 hours."
    },
    {
      year: "2023",
      title: "1,000,000 Downloads & BKC Studio Opening",
      description: "The show reached the #1 spot on business and leadership charts in India. Opened flagship acoustic broadcast studio in Bandra Kurla Complex (BKC), Mumbai."
    },
    {
      year: "2024",
      title: "Ranked #1 Female Business Podcaster in India",
      description: "Recognized across leading national media. Expanded mobile broadcast units to Bengaluru (Koramangala/Indiranagar) and Delhi NCR for on-location founder masterclasses."
    },
    {
      year: "2026",
      title: "5.2M+ Downloads Across 150 Countries",
      description: "Over 180 long-form masterclass dialogues recorded with unicorn founders, top venture capitalists, enterprise CXOs, and global diaspora pioneers."
    }
  ];

  const gearList = [
    { name: "Shure SM7B Dynamic Broadcast Microphones", desc: "Legendary vocal warmth, radio presence, and ultra-crisp speech capture." },
    { name: "Cloudlifter CL-1 Mic Activators", desc: "+25dB of ultra-clean, transparent gain for broadcast dynamics." },
    { name: "Rødecaster Pro II Audio Workstation", desc: "Studio-grade Aphex digital signal processing and ultra-low noise preamps." },
    { name: "Acoustic Slatted Cedar Paneling", desc: "Natural organic room warmth with 0.85 NRC acoustic reflection dampening." },
    { name: "Sony FX3 Full-Frame Cinema Cameras", desc: "Cinematic 4K 60fps multicam broadcast for YouTube video releases." },
    { name: "Genelec 8030C Active Studio Monitors", desc: "Dead-accurate neutral acoustic monitoring for post-production mastery." }
  ];

  const cityPresence = [
    {
      name: "Mumbai (Studio HQ)",
      area: "Bandra Kurla Complex (BKC)",
      details: "Flagship acoustic recording studio. Hosting finance leaders, consumer brand creators, and unicorn founders."
    },
    {
      name: "Bengaluru (Tech Desk)",
      area: "Koramangala · Indiranagar",
      details: "On-site founder dialogues with AI researchers, deep-tech architects, and venture capital managing partners."
    },
    {
      name: "Delhi NCR (Corporate Desk)",
      area: "Cyber City Gurugram · Central Delhi",
      details: "Keynote moderations, enterprise CEO profiles, and institutional business summits."
    }
  ];

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Row: Bio & Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5 text-amber-700" />
              <span>India&apos;s #1 Female Executive Podcaster</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-950 tracking-tight leading-[1.15] mb-6">
              Hi, I&apos;m Harshita Dagha. I unpack the truths behind India&apos;s greatest builders.
            </h1>

            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                In an era dominated by 30-second soundbites, clickbait headlines, and scripted PR interviews, genuine business and founder wisdom is vanishingly rare.
              </p>
              <p>
                I founded <em>The Harshita Dagha Show</em> in Mumbai to give India&apos;s most visionary entrepreneurs, innovators, and investors an unhurried, intellectual sanctuary. Where they can dismantle their armor and candidly dissect near-death startup moments, valuation crises, leadership loneliness, and the reality of scaling companies from zero to thousands of crores.
              </p>
              <p>
                Today, with over 5.2 million global downloads and an audience spanning founders, CXOs, and ambitious professionals in 150+ countries, my mission is simple: to document the playbook of India&apos;s economic renaissance.
              </p>
            </div>

            {/* Quick buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/be-a-guest"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-950 text-white hover:bg-slate-800 text-sm font-semibold shadow-md transition-all"
              >
                <span>Pitch a Founder or Story</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </Link>

              <a
                href="#studio"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-sm font-semibold transition-colors"
              >
                <Sliders className="w-4 h-4 text-slate-600" />
                <span>Explore Studio Specs</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/host.jpg"
                  alt="Harshita Dagha Portrait - Top Female Podcaster in India"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Floating quote badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl border border-slate-200/80 max-w-xs hidden sm:block">
                <p className="text-xs font-serif italic text-slate-800 leading-relaxed mb-2">
                  &ldquo;Curiosity is an act of courage. It requires asking the question everyone in the boardroom is afraid to speak aloud.&rdquo;
                </p>
                <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider block">
                  — Harshita Dagha
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Global Stats */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 mb-24 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-2">
              Audience Reach & Impact
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              India&apos;s Most Influential Executive Audio Community
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <span className="text-4xl sm:text-5xl font-serif font-bold text-amber-400 block mb-1">
                {PODCAST_STATS.totalDownloads}
              </span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">
                Verified Global Downloads
              </span>
            </div>
            <div>
              <span className="text-4xl sm:text-5xl font-serif font-bold text-white block mb-1">
                {PODCAST_STATS.totalEpisodes}
              </span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">
                Executive Masterclasses
              </span>
            </div>
            <div>
              <span className="text-4xl sm:text-5xl font-serif font-bold text-white block mb-1">
                {PODCAST_STATS.countriesReached}
              </span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">
                Countries Reached
              </span>
            </div>
            <div>
              <span className="text-4xl sm:text-5xl font-serif font-bold text-emerald-400 block mb-1">
                {PODCAST_STATS.averageRating}
              </span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">
                Average Rating (Top 1%)
              </span>
            </div>
          </div>
        </div>

        {/* Regional Hubs Callout on About Page */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block mb-1">
              Geographic Presence
            </span>
            <h2 className="text-3xl font-serif font-bold text-slate-950 tracking-tight">
              Studio & On-Location Recording Hubs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cityPresence.map((city, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-2">
                    <MapPin className="w-4 h-4 text-amber-600" />
                    <span>{city.name}</span>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-slate-950 mb-1">{city.area}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{city.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Studio Sanctuary Section */}
        <div id="studio" className="mb-24 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
                <Image
                  src="/images/studio.jpg"
                  alt="Harshita Dagha Broadcast Studio in BKC Mumbai"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-3">
                <Sliders className="w-3.5 h-3.5 text-amber-600" />
                <span>Broadcast Engineering</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 tracking-tight mb-4">
                Flagship Studio · BKC, Mumbai
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Designed specifically for executive and founder dialogues. Features acoustically treated cedar wood resonance dampening, isolated analog preamps, and cinematic multicam 4K capture.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {gearList.map((gear, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                    <h4 className="text-xs font-bold text-slate-900 mb-1">{gear.name}</h4>
                    <p className="text-[11px] text-slate-500 leading-normal">{gear.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Timeline Milestones */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-slate-950 tracking-tight">
              The Journey of Harshita Dagha Media
            </h2>
            <p className="text-slate-500 text-sm mt-1">From a single Mumbai studio session to India&apos;s leading executive audio network.</p>
          </div>

          <div className="space-y-6">
            {milestones.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-start gap-4 sm:gap-6 hover:shadow-md transition-shadow"
              >
                <span className="px-3.5 py-1.5 rounded-xl bg-slate-900 text-amber-300 font-mono font-bold text-sm shrink-0">
                  {item.year}
                </span>
                <div>
                  <h3 className="font-serif font-bold text-lg text-slate-950 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
