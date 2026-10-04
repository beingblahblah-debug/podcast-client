"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, CheckCircle2, ArrowRight, Video } from "lucide-react";

export default function HostSection() {
  return (
    <section className="py-24 bg-[#0c0c0e] relative overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Studio & Host Imagery Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Studio photo backdrop */}
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-[#141418]">
                <Image
                  src="/images/harshita-studio-navy.jpg"
                  alt="Harshita Dagha in Mumbai BKC Podcast Studio"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-full text-xs font-medium text-white shadow">
                  📍 Flagship Studio · Bandra Kurla Complex, Mumbai
                </div>
              </div>

              {/* Overlapping host portrait badge */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-44 sm:w-56 aspect-square rounded-3xl overflow-hidden border-4 border-[#0c0c0e] shadow-2xl bg-[#141418]">
                <Image
                  src="/images/harshita-avatar-main.jpg"
                  alt="Harshita Dagha - TEDx Speaker & Podcast Host"
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Award chip */}
              <div className="absolute -top-4 -left-4 bg-[#141418] text-white font-medium px-4 py-2 rounded-2xl shadow-lg flex items-center gap-2 text-xs border border-white/15">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <span className="text-[#d89ba4] font-semibold">TEDx Speaker</span>
                <span className="text-zinc-600">·</span>
                <span className="text-zinc-400">16+ Yrs Exp</span>
              </div>

            </div>
          </div>

          {/* Right: Harshita's Story */}
          <div className="lg:col-span-6 pt-6 lg:pt-0">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d89ba4]/10 text-[#d89ba4] border border-[#d89ba4]/25 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#d89ba4]" />
              <span>Founder, Beingblahblah · Podcast Host in India</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight mb-4">
              &ldquo;She gives brands celebs, visibility, and stories that people remember.&rdquo;
            </h2>

            <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                <strong>Harshita Dagha</strong> is an Indian podcast host, branding expert, PR strategist, Generative Engine Optimization (GEO) expert, and social media strategist with <strong>16+ years of experience</strong> across branding, digital marketing, public relations, and celebrity conversations.
              </p>
              <p>
                As founder of <em>Beingblahblah</em>, Harshita hosts candid dialogues with entrepreneurs, celebrities, creators, and business leaders — turning conversations into powerful brand assets designed for YouTube, Instagram, LinkedIn, Google Search, and AI-powered discovery.
              </p>
              <div className="text-xs sm:text-sm text-zinc-300 bg-[#141418] p-4 rounded-2xl border border-white/10">
                <strong className="text-white block mb-1">Published Writer & Media Association:</strong>
                Professional writing and media experience includes work associated with <em>The Times of India</em>, <em>Femina</em>, <em>Forbes India</em>, <em>Fortune India</em>, <em>Mid-day</em> (May 2020 feature), <em>Hindustan Times</em>, <em>India.com</em>, and <em>BuzzFeed Community</em>.
              </div>
            </div>

            {/* Highlights checkmarks */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-medium text-zinc-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>TEDx Speaker & Keynote Host</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>16+ Years Marketing & PR Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Celebrity & Unicorn Founder Dialogues</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>GEO, AI Search & Google Visibility</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href="https://youtu.be/AUFI1ELJyjk?si=1yXM7qTrkqAb0JY6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold text-sm transition-all shadow-md hover:scale-105 active:scale-95 w-full sm:w-auto text-center"
              >
                <Video className="w-4 h-4 text-white" />
                <span>Watch TEDx Talk</span>
              </a>

              <Link
                href="/profile"
                className="inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-full bg-[#d89ba4] hover:bg-[#e2a8b1] text-zinc-950 font-bold text-sm transition-all shadow-md hover:scale-105 active:scale-95 w-full sm:w-auto text-center"
              >
                <span>View Harshita Profile</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
