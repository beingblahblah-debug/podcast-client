"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Sparkles,
  Layers,
  Send,
  CheckCircle2
} from "lucide-react";
import { InstagramIcon } from "@/components/SocialIcons";
import { PODCAST_STATS, PRESS_LOGOS } from "@/data/episodes";

export default function Hero() {
  const whatsappUrl = "https://wa.me/918779003799?text=Hi%20Beingblahblah,%20we%20would%20like%20to%20discuss%20branding,%20PR,%20or%20media%20services.";

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-[#0c0c0e] bg-mesh-dark border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Left copy, Right visual brand & founder showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Company Value Proposition & Primary CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Company Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 mb-6 backdrop-blur-md flex-wrap">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-white font-black uppercase tracking-wider text-[11px]">
                BEINGBLAHBLAH
              </span>
              <span className="text-zinc-600">|</span>
              <span className="text-[#d89ba4] font-semibold">Branding · PR · Digital Media</span>
              <span className="text-zinc-600">|</span>
              <span className="text-zinc-400 font-normal">Mumbai HQ</span>
            </div>

            {/* Main Company Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-[1.08] mb-4">
              Building Brands. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#d89ba4]">
                Creating Influence.
              </span> <br className="hidden sm:inline" />
              Making Stories Matter.
            </h1>

            {/* Subheadline in tasteful dusty rose */}
            <p className="text-lg sm:text-xl font-serif text-[#d89ba4] tracking-tight leading-snug mb-5 font-normal">
              Integrated brand communication, PR, and digital visibility for businesses and leaders.
            </p>

            {/* Core Value Proposition Paragraph */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-6 max-w-xl font-normal">
              Beingblahblah is a branding, PR and digital media company helping businesses, founders and professionals build visibility, credibility and meaningful connections through strategic storytelling, digital marketing, media relations and modern brand communication.
            </p>

            {/* Editorial Positioning Quote */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border-l-2 border-[#d89ba4] mb-8 max-w-xl">
              <p className="text-sm font-serif italic text-zinc-300">
                &ldquo;We help brands get noticed, build credibility, and create stories that audiences remember.&rdquo;
              </p>
            </div>

            {/* CTA Buttons: Primary Pink + Dark Outline + WhatsApp */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-6">
              {/* Primary: Explore Our Services */}
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#d89ba4] hover:bg-[#e2a8b1] text-zinc-950 text-sm font-bold shadow-lg shadow-[#d89ba4]/10 transition-all hover:scale-102 active:scale-98 text-center"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 text-zinc-950" />
              </Link>

              {/* Secondary: Work With Us */}
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#141418] hover:bg-[#1a1a20] border border-white/15 hover:border-white/30 text-zinc-200 hover:text-white text-sm font-medium transition-all hover:scale-102 active:scale-98 text-center"
              >
                <span>Work With Us</span>
              </Link>

              {/* WhatsApp direct chat */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-emerald-600/15 hover:bg-emerald-600/25 border border-emerald-500/30 text-emerald-300 text-sm font-medium transition-all text-center"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>WhatsApp Desk</span>
              </a>
            </div>

            {/* Core Capability Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/10 w-full text-xs text-zinc-400">
              <span className="font-semibold text-zinc-300 uppercase tracking-wider text-[10px]">Solutions:</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300">Brand Strategy</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300">Public Relations & Digital PR</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300">Celebrity Marketing</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300">Podcast Production</span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300">GEO & AI Search</span>
            </div>

          </div>

          {/* Right Column: Beingblahblah Company & Founder Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Subtle brand aura */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#d89ba4]/15 via-purple-500/10 to-transparent rounded-3xl blur-2xl opacity-60" />

              {/* Card Container */}
              <div className="relative rounded-3xl bg-[#141418] p-5 sm:p-6 border border-white/10 shadow-2xl">
                
                {/* Visual Showcase: Media studio & founder leadership */}
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden mb-5 border border-white/10 shadow-inner group">
                  <Image
                    src="/images/harshita-portrait-main.jpg"
                    alt="Harshita Dagha Maisheri - Founder of Beingblahblah"
                    fill
                    priority
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-[#0c0c0e]/30 to-transparent" />
                  
                  {/* Top Company Badge */}
                  <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-full text-xs font-semibold text-white shadow flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#d89ba4]" />
                    <span className="font-black uppercase tracking-wider text-[11px]">BEINGBLAHBLAH</span>
                  </div>

                  {/* Top Right Instagram pill with followers count */}
                  <a
                    href="https://www.instagram.com/beingblahblah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 bg-gradient-to-r from-purple-600/90 to-pink-600/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-white shadow flex items-center gap-1.5 hover:scale-105 transition-all"
                  >
                    <InstagramIcon className="w-3.5 h-3.5" />
                    <span>100K+ Followers</span>
                  </a>

                  {/* Bottom Founder Card Overlay */}
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-[10px] font-bold text-[#d89ba4] uppercase tracking-widest block mb-1">
                      Leadership & Strategic Direction
                    </span>
                    <h3 className="font-serif font-bold text-2xl text-white leading-tight">
                      Harshita Dagha Maisheri
                    </h3>
                    <p className="text-xs text-zinc-300 mt-1">
                      Founder, Beingblahblah · 16+ Years Experience in Branding & PR
                    </p>
                  </div>
                </div>

                {/* Bottom Interactive Box: Meet Founder & Explore Services */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#d89ba4] block">
                      Agency Solutions
                    </span>
                    <p className="text-xs text-zinc-400">
                      Brand Strategy · Digital PR · Podcast Media
                    </p>
                  </div>

                  <Link
                    href="/profile"
                    className="px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold shrink-0 transition-colors border border-white/10 flex items-center gap-1.5"
                  >
                    <span>Meet Founder</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Global Stats Grid in Dark Luxury Styling */}
        <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-5 rounded-2xl bg-[#141418] border border-white/10">
            <span className="text-3xl sm:text-4xl font-serif text-[#d89ba4] block font-bold">
              100,000+
            </span>
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mt-1 block">
              Instagram Community (@beingblahblah)
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-[#141418] border border-white/10">
            <span className="text-3xl sm:text-4xl font-serif text-white block">
              16+ Years
            </span>
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mt-1 block">
              Branding & Strategic PR Track Record
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-[#141418] border border-white/10">
            <span className="text-3xl sm:text-4xl font-serif text-white block">
              180+
            </span>
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mt-1 block">
              Episodes & Brand Conversations
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-[#141418] border border-white/10">
            <span className="text-3xl sm:text-4xl font-serif text-white block">
              5.2M+
            </span>
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mt-1 block">
              Verified Digital Impressions
            </span>
          </div>
        </div>

        {/* Press mentions */}
        <div className="mt-12 text-center">
          <p className="text-xs uppercase tracking-widest font-medium text-zinc-500 mb-6">
            Trusted by founders and covered by premier business media
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-14 opacity-75">
            {PRESS_LOGOS.map((press) => (
              <div key={press.name} className="flex flex-col items-center">
                <span className="font-serif font-bold text-lg sm:text-xl text-zinc-300 tracking-tight">
                  {press.name}
                </span>
                <span className="text-[10px] text-zinc-500 font-sans">
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
