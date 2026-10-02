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
                  src="/images/studio.jpg"
                  alt="The Modern Voice Studio"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/20" />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-slate-900 shadow">
                  📍 Studio A · Brooklyn, NY
                </div>
              </div>

              {/* Overlapping host portrait badge */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-44 sm:w-56 aspect-square rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src="/images/host.jpg"
                  alt="Jessica Chen"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Award chip */}
              <div className="absolute -top-4 -left-4 bg-amber-400 text-slate-950 font-semibold px-4 py-2 rounded-2xl shadow-lg flex items-center gap-2 text-xs">
                <Award className="w-4 h-4 text-slate-950" />
                <span>Webby Nominee 2026</span>
              </div>

            </div>
          </div>

          {/* Right: Jessica's Story */}
          <div className="lg:col-span-6 pt-6 lg:pt-0">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-slate-200">
              <Mic className="w-3.5 h-3.5 text-amber-600" />
              <span>Behind the Microphone</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-950 tracking-tight leading-tight mb-6">
              &ldquo;The best answers only emerge when guests forget the microphones exist.&rdquo;
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Hi, I&apos;m <strong>Jessica Chen</strong>. I spent a decade in investigative journalism before realizing that the most transformative human revelations rarely happen in 3-minute television soundbites or edited press releases.
              </p>
              <p>
                In 2021, I built this studio with two Shure microphones, acoustic cedar wood slats, and a simple premise: give remarkable thinkers 60 uninterrupted minutes with zero agenda except relentless intellectual honesty.
              </p>
              <p>
                Today, <em>The Elevate Podcast</em> is listened to in over 150 countries by venture capitalists, artists, Olympians, and people who simply care about living an examined, ambitious life.
              </p>
            </div>

            {/* Highlights checkmarks */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-medium text-slate-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Zero scripted talking points</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>4.8M+ verified lifetime downloads</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Guest prep with 40+ hrs research</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Broadcast studio audio acoustics</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-950 text-white hover:bg-slate-800 font-semibold text-sm transition-all shadow-sm"
              >
                <span>Read Full Host Bio & Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/be-a-guest"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 hover:bg-amber-100 font-semibold text-sm transition-colors"
              >
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Nominate or Pitch a Guest</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
