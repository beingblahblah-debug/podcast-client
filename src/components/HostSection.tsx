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
          
          {/* Left: Founder Imagery Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Studio photo backdrop */}
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-[#141418]">
                <Image
                  src="/images/harshita-studio-navy.jpg"
                  alt="Harshita Dagha Maisheri - Founder of Beingblahblah in Mumbai BKC Studio"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md border border-white/15 px-3.5 py-1.5 rounded-full text-xs font-medium text-white shadow">
                  📍 Flagship Studio · Bandra Kurla Complex, Mumbai
                </div>
              </div>

              {/* Overlapping founder portrait badge */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-44 sm:w-56 aspect-square rounded-3xl overflow-hidden border-4 border-[#0c0c0e] shadow-2xl bg-[#141418]">
                <Image
                  src="/images/harshita-avatar-main.jpg"
                  alt="Harshita Dagha Maisheri - Founder, Beingblahblah"
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Leadership chip */}
              <div className="absolute -top-4 -left-4 bg-[#141418] text-white font-medium px-4 py-2 rounded-2xl shadow-lg flex items-center gap-2 text-xs border border-white/15">
                <span className="w-2.5 h-2.5 rounded-full bg-[#d89ba4]" />
                <span className="text-[#d89ba4] font-semibold">Strategic Leadership</span>
                <span className="text-zinc-600">·</span>
                <span className="text-zinc-400">16+ Yrs Exp</span>
              </div>

            </div>
          </div>

          {/* Right: Founder Profile Supporting the Company */}
          <div className="lg:col-span-6 pt-6 lg:pt-0">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d89ba4]/10 text-[#d89ba4] border border-[#d89ba4]/25 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#d89ba4]" />
              <span>Leadership & Strategic Vision</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight mb-2">
              Meet Our Founder
            </h2>
            
            <div className="mb-4">
              <h3 className="text-xl sm:text-2xl font-serif text-[#d89ba4] font-bold">
                Harshita Dagha Maisheri
              </h3>
              <p className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mt-0.5">
                Founder, Beingblahblah
              </p>
            </div>

            <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                Beingblahblah was founded by <strong>Harshita Dagha Maisheri</strong>, a branding, public relations and digital marketing professional with over 16 years of experience.
              </p>
              <p>
                Her experience across brand strategy, digital marketing, content, media and public relations has helped shape Beingblahblah&apos;s approach to modern brand communication. As the founder, she leads the brand&apos;s vision and strategic direction.
              </p>
              <div className="text-xs sm:text-sm text-zinc-300 bg-[#141418] p-4 rounded-2xl border border-white/10">
                <strong className="text-white block mb-1">Published Writer & Strategic Advisor:</strong>
                Writing and media experience includes work associated with <em>The Times of India</em>, <em>Femina</em>, <em>Forbes India</em>, <em>Fortune India</em>, <em>Mid-day</em>, <em>Hindustan Times</em>, <em>India.com</em>, and <em>BuzzFeed Community</em>.
              </div>
            </div>

            {/* Highlights checkmarks */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-medium text-zinc-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>16+ Years Branding & PR Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>TEDx Speaker & Keynote Host</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Celebrity & Executive Collaborations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>GEO, AI Search & Brand Discovery</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                href="/profile"
                className="inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-full bg-[#d89ba4] hover:bg-[#e2a8b1] text-zinc-950 font-bold text-sm transition-all shadow-md hover:scale-105 active:scale-95 w-full sm:w-auto text-center"
              >
                <span>Meet Our Founder</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="https://youtu.be/AUFI1ELJyjk?si=1yXM7qTrkqAb0JY6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white font-semibold text-sm transition-all shadow-md hover:scale-105 active:scale-95 w-full sm:w-auto text-center"
              >
                <Video className="w-4 h-4 text-white" />
                <span>Watch TEDx Talk</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
