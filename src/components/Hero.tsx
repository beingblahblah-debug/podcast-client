"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  Flame, 
  ArrowRight, 
  CheckCircle2, 
  Mic2, 
  Video, 
  ShieldCheck, 
  Award,
  Globe2,
  CalendarCheck
} from "lucide-react";
import { PODCAST_STATS, PRESS_LOGOS } from "@/data/episodes";

export default function Hero() {
  const whatsappUrl = "https://wa.me/918779003799?text=Hi%20Harshita%20Dagha%20Maisheri,%20I%20would%20like%20to%20connect%20regarding%20branding,%20PR,%20or%20podcast%20booking.";

  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-mesh-light border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Left copy, Right visual showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Authority, SEO Headline, Pitch Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Host Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-slate-200 shadow-xs text-xs font-semibold text-slate-800 mb-6 backdrop-blur-sm flex-wrap">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-slate-950 font-bold uppercase tracking-wider text-[11px]">
                HARSHITA DAGHA MAISHERI
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-rose-600 font-bold">TEDx Speaker</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600 font-medium">16+ Yrs Exp · Founder, Beingblahblah</span>
            </div>

            {/* SEO-Rich Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-950 tracking-tight leading-[1.12] mb-6">
              Podcast Host in India · <span className="underline decoration-amber-400 decoration-wavy decoration-2">Branding, PR, GEO</span> & Social Media Expert.
            </h1>

            {/* Comprehensive SEO Content Subheading */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 max-w-2xl">
              <strong>Harshita Dagha Maisheri</strong> is an Indian podcast host, branding expert, PR strategist, and Generative Engine Optimization (GEO) specialist with <strong>16+ years of experience</strong> across digital marketing, celebrity marketing, and business storytelling. She is the founder of <em>Beingblahblah</em>.
            </p>

            <p className="text-sm sm:text-base text-amber-900 bg-amber-50/80 border-l-4 border-amber-500 px-4 py-2 rounded-r-xl mb-8 max-w-2xl font-medium italic">
              &ldquo;She gives brands celebs, visibility, and stories that people remember.&rdquo;
            </p>

            {/* High-Converting Action Buttons with WhatsApp prominence & TEDx button */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-8">
              {/* WhatsApp direct connect */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-bold shadow-lg shadow-emerald-500/25 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>Connect: +91 87790 03799</span>
              </a>

              {/* Watch TEDx Talk */}
              <a
                href="https://youtu.be/AUFI1ELJyjk?si=1yXM7qTrkqAb0JY6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-full bg-red-600 hover:bg-red-700 text-white text-sm font-bold shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all"
              >
                <Video className="w-4 h-4 text-white" />
                <span>Watch TEDx Talk</span>
              </a>

              {/* Book as Guest */}
              <Link
                href="/be-a-guest"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-full bg-slate-950 text-white hover:bg-slate-800 text-sm font-bold shadow-md hover:shadow-lg transition-all"
              >
                <CalendarCheck className="w-4 h-4 text-amber-400" />
                <span>Book Podcast / Guest</span>
              </Link>
            </div>

            {/* Key Service Tags / Specialties */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-200/80 w-full text-xs text-slate-600">
              <span className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">Specialties:</span>
              <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 font-medium">Brand Strategy</span>
              <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 font-medium">Personal Branding</span>
              <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 font-medium">Digital PR</span>
              <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 font-medium">Celebrity Marketing</span>
              <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 font-medium">GEO & AI Search</span>
              <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 font-medium">Podcast Hosting</span>
            </div>

          </div>

          {/* Right Column: High-Impact Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative aura */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-amber-400/30 via-orange-300/20 to-rose-400/20 rounded-3xl blur-2xl opacity-75" />

              {/* Card Container */}
              <div className="relative rounded-3xl bg-white p-6 sm:p-7 border border-slate-200 shadow-2xl">
                
                {/* Host Portrait */}
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden mb-6 border border-slate-200 shadow-inner group">
                  <Image
                    src="/images/harshita-speaking-portrait.jpg"
                    alt="Harshita Dagha Maisheri - TEDx Speaker, Podcast Host in India & Branding Expert"
                    fill
                    priority
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                  
                  {/* TEDx Speaker chip inside photo */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-950 shadow flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-600" />
                    <span>TEDx Speaker · 16+ Yrs Exp</span>
                  </div>

                  {/* Bottom title inside photo */}
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-[11px] font-bold text-amber-300 uppercase tracking-widest block mb-1">
                      Founder, Beingblahblah · Mumbai
                    </span>
                    <h3 className="font-serif font-bold text-2xl text-white leading-tight">
                      Harshita Dagha Maisheri
                    </h3>
                    <p className="text-xs text-slate-300 mt-1">
                      Podcast Host · Branding, PR, GEO & Celebrity Marketing
                    </p>
                  </div>
                </div>

                {/* Quick Pitch Callout inside Host Box */}
                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900 block">
                      Work with Harshita
                    </span>
                    <p className="text-xs text-slate-600">
                      Brand Strategy · Celebrity PR · Podcasting
                    </p>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold shrink-0 transition-colors"
                  >
                    Direct Chat →
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Global Stats Grid for SEO Authority */}
        <div className="mt-16 pt-10 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <span className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 block">
              {PODCAST_STATS.totalDownloads}
            </span>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1 block">
              Verified Impressions
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <span className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 block">
              {PODCAST_STATS.totalEpisodes}
            </span>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1 block">
              Executive Interviews
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <span className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 block">
              {PODCAST_STATS.countriesReached}
            </span>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1 block">
              Countries Syndicated
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
            <span className="text-3xl sm:text-4xl font-serif font-bold text-amber-600 block">
              {PODCAST_STATS.averageRating}
            </span>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1 block">
              Top 1% Worldwide
            </span>
          </div>
        </div>

        {/* Press mentions */}
        <div className="mt-12 text-center">
          <p className="text-xs uppercase tracking-widest font-semibold text-slate-400 mb-6">
            Trusted by founders and covered by premier business media
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-14 opacity-80">
            {PRESS_LOGOS.map((press) => (
              <div key={press.name} className="flex flex-col items-center">
                <span className="font-serif font-bold text-lg sm:text-xl text-slate-800 tracking-tight">
                  {press.name}
                </span>
                <span className="text-[10px] text-slate-400 font-sans">
                  {press.subtitle}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
