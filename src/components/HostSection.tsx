"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Mic, Radio, Award, Heart, CheckCircle2, ArrowRight } from "lucide-react";

export default function HostSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Studio & Host Imagery Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Studio photo backdrop */}
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-xl border border-slate-200">
                <Image
                  src="/images/harshita-navy-mic.jpg"
                  alt="Harshita Dagha Maisheri in Mumbai BKC Podcast Studio"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/20" />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-900 shadow">
                  📍 Flagship Studio · Bandra Kurla Complex, Mumbai
                </div>
              </div>

              {/* Overlapping host portrait badge */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-44 sm:w-56 aspect-square rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src="/images/harshita-avatar.jpg"
                  alt="Harshita Dagha Maisheri - TEDx Speaker & Podcast Host"
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Award chip */}
              <div className="absolute -top-4 -left-4 bg-slate-950 text-white font-semibold px-4 py-2 rounded-2xl shadow-lg flex items-center gap-2 text-xs border border-amber-400/40">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
                <span className="text-amber-400 font-bold">TEDx Speaker</span>
                <span className="text-slate-400">·</span>
                <span>16+ Yrs Exp</span>
              </div>

            </div>
          </div>

          {/* Right: Harshita's Story */}
          <div className="lg:col-span-6 pt-6 lg:pt-0">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Founder, Beingblahblah · Podcast Host in India</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-950 tracking-tight leading-tight mb-4">
              &ldquo;She gives brands celebs, visibility, and stories that people remember.&rdquo;
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                <strong>Harshita Dagha Maisheri</strong> is an Indian podcast host, branding expert, PR strategist, Generative Engine Optimization (GEO) expert, and social media strategist with <strong>16+ years of experience</strong> across branding, digital marketing, public relations, and celebrity conversations.
              </p>
              <p>
                As founder of <em>Beingblahblah</em>, Harshita hosts candid dialogues with entrepreneurs, celebrities, creators, and business leaders — turning conversations into powerful brand assets designed for YouTube, Instagram, LinkedIn, Google Search, and AI-powered discovery.
              </p>
              <p className="text-xs sm:text-sm text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                <strong className="text-slate-950 block mb-1">Published Writer & Media Association:</strong>
                Professional writing and media experience includes work associated with <em>The Times of India</em>, <em>Femina</em>, <em>Forbes India</em>, <em>Fortune India</em>, <em>Mid-day</em> (May 2020 feature), <em>Hindustan Times</em>, <em>India.com</em>, and <em>BuzzFeed Community</em>.
              </p>
            </div>

            {/* Highlights checkmarks */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-medium text-slate-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>TEDx Speaker & Keynote Host</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>16+ Years Marketing & PR Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Celebrity & Unicorn Founder Dialogues</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>GEO, AI Search & Google Visibility</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="https://youtu.be/AUFI1ELJyjk?si=1yXM7qTrkqAb0JY6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-sm transition-all shadow-md hover:scale-105 active:scale-95 w-full sm:w-auto text-center"
              >
                <span>Watch TEDx Talk</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="/about"
                className="inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-full bg-slate-950 text-white hover:bg-slate-800 font-semibold text-sm transition-all shadow-sm w-full sm:w-auto text-center"
              >
                <span>Read Full Biography</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
