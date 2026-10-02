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
  Users2
} from "lucide-react";
import { PODCAST_STATS, PRESS_LOGOS } from "@/data/episodes";

export default function AboutPage() {
  const milestones = [
    {
      year: "2021",
      title: "Episode 001 from a Brooklyn Closet",
      description: "Jessica recorded her first interview with a second-hand USB microphone and a pair of audio monitors. 400 listeners tuned in on day one."
    },
    {
      year: "2023",
      title: "1,000,000 Downloads & Studio A Opening",
      description: "The show hit #1 on the Apple Podcasts Society chart. Built custom acoustic recording sanctuary in Brooklyn, New York."
    },
    {
      year: "2024",
      title: "Webby Award Nomination",
      description: "Nominated for Best Interview Show alongside NPR and The New York Times. Expanded to long-form 4K video broadcasts."
    },
    {
      year: "2026",
      title: "4.8M Downloads Across 150 Countries",
      description: "Over 250 deep dialogues recorded with Nobel laureates, Fortune 500 CEOs, Olympic gold medalists, and creative luminaries."
    }
  ];

  const gearList = [
    { name: "Shure SM7B Dynamic Microphones", desc: "Legendary broadcast vocal clarity and warm low-end proximity effect." },
    { name: "Cloudlifter CL-1 Mic Activators", desc: "+25dB of ultra-clean, transparent passive gain." },
    { name: "Rødecaster Pro II Audio Workstation", desc: "Studio-grade Aphex processing and ultra-low noise Revolution preamps." },
    { name: "Acoustic Slatted Cedar Paneling", desc: "Natural organic room warmth with 0.85 NRC acoustic absorption." },
    { name: "Sony FX3 Full-Frame Cinema Cameras", desc: "Cinematic 4K 60fps multicam broadcast for YouTube video releases." },
    { name: "Genelec 8030C Active Studio Monitors", desc: "Dead-accurate neutral acoustic monitoring in mixing and post-production." }
  ];

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Row: Bio & Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
              <Mic className="w-3.5 h-3.5 text-amber-600" />
              <span>Host & Creator</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-950 tracking-tight leading-[1.15] mb-6">
              Hi, I&apos;m Jessica Chen. I ask the questions people are afraid to voice.
            </h1>

            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              <p>
                Before launching <em>The Elevate Podcast</em>, I spent ten years as an investigative journalist uncovering institutional corruption and profiling cultural pioneers.
              </p>
              <p>
                What I learned was simple: humanity doesn&apos;t need more soundbites or elevator pitches. What we are hungry for is genuine, vulnerable, three-dimensional truth.
              </p>
              <p>
                On this show, my goal is never to grill someone for sensational headlines. My goal is to create an oasis of unhurried curiosity where remarkable thinkers can dismantle their armor and speak from their core.
              </p>
            </div>

            {/* Quick buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/be-a-guest"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-950 text-white hover:bg-slate-800 text-sm font-semibold shadow-md transition-all"
              >
                <span>Pitch a Story or Guest</span>
                <ArrowRight className="w-4 h-4" />
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
                  alt="Jessica Chen Portrait"
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Floating quote badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl border border-slate-200/80 max-w-xs hidden sm:block">
                <p className="text-xs font-serif italic text-slate-800 leading-relaxed mb-2">
                  &ldquo;Curiosity is an act of courage. It requires admitting you don&apos;t know what the answer will be.&rdquo;
                </p>
                <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider block">
                  — Jessica Chen
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
              An International Community of Thought Leaders
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
                Full-Length Episodes
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
                Average Listener Rating
              </span>
            </div>
          </div>
        </div>

        {/* Studio Sanctuary Section */}
        <div id="studio" className="mb-24 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
                <Image
                  src="/images/studio.jpg"
                  alt="Studio A Workspace"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-3">
                <Sliders className="w-3.5 h-3.5 text-amber-600" />
                <span>Acoustic Architecture</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 tracking-tight mb-4">
                Studio A · Brooklyn, New York
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Designed specifically for intimate dialogue. Built with acoustic wood slats, isolated floor floating, and custom analog signal chains so listeners hear every breath, pause, and subtle nuance.
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
              The Journey So Far
            </h2>
            <p className="text-slate-500 text-sm mt-1">Five years of continuous conversations.</p>
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
