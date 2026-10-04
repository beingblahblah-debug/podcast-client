"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Radio, 
  Mail, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Heart,
  Headphones
} from "lucide-react";
import { XTwitterIcon, LinkedInIcon, YouTubeIcon, InstagramIcon } from "@/components/SocialIcons";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#08080a] text-zinc-400 pt-16 pb-28 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter Card */}
        <div className="relative rounded-3xl bg-[#121216] p-8 md:p-12 border border-white/10 shadow-2xl mb-16 overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-[#d89ba4]/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d89ba4]/10 text-[#d89ba4] border border-[#d89ba4]/25 text-xs font-semibold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Harshita Dagha Letter</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-tight mb-3">
                Unedited show notes & backstage debriefs delivered every Sunday.
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed font-normal">
                Join over 65,000 founders, venture capitalists, and thinkers who receive Harshita&apos;s personal startup breakdowns, unreleased audio snippets, and founder mental frameworks.
              </p>
            </div>

            <div className="w-full lg:w-auto lg:min-w-[380px]">
              {subscribed ? (
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-950/50 border border-emerald-500/40 text-emerald-300">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span className="text-sm font-medium">
                    You&apos;re on the list! Check your inbox for the welcome guide.
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                    <input
                      type="email"
                      required
                      placeholder="Enter your personal email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0c0c0e] border border-white/15 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#d89ba4] transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#d89ba4] hover:bg-[#e2a8b1] text-zinc-950 font-bold text-sm transition-all shadow-md shrink-0 cursor-pointer"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
              <p className="text-[11px] text-zinc-500 mt-2 text-center lg:text-left">
                Zero spam. One-click unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>

        {/* Multi-column navigation links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4 group">
              <div className="relative w-10 h-10 rounded-xl bg-black border border-white/15 overflow-hidden flex items-center justify-center shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Harshita Dagha Logo"
                  width={40}
                  height={40}
                  className="object-contain p-1"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg sm:text-xl text-white tracking-wide group-hover:text-[#d89ba4] transition-colors">
                  HARSHITA DAGHA
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#d89ba4]">
                  TEDx Speaker · Founder, Beingblahblah
                </span>
              </div>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed mb-4 max-w-sm font-normal">
              Indian Podcast Host, Branding Expert, PR Strategist, GEO Expert, and Social Media Strategist with 16+ years of experience. Giving brands celebs, visibility, and stories that people remember.
            </p>
            
            {/* Direct Contact Badges in Footer */}
            <div className="space-y-1.5 mb-6 text-xs text-zinc-400">
              <p className="flex items-center gap-2">
                <span className="text-emerald-400 font-semibold">WhatsApp:</span>
                <a href="https://wa.me/918779003799" target="_blank" rel="noreferrer" className="text-white hover:text-emerald-400 underline font-mono">
                  +91 87790 03799
                </a>
                <span className="text-zinc-500">(~ beingblahblah)</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-[#d89ba4] font-semibold">Email:</span>
                <a href="mailto:beingblahblah@gmail.com" className="text-white hover:text-[#d89ba4] underline">
                  beingblahblah@gmail.com
                </a>
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="X (formerly Twitter)"
              >
                <XTwitterIcon className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/beingblahblah" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/in/harshitadagha" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a 
                href="https://www.youtube.com/@harshitadagha" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <YouTubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Show & Media Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-200 mb-4">
              Show & Media
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/highlights" className="hover:text-[#d89ba4] text-[#d89ba4] font-semibold transition-colors flex items-center gap-1.5">
                  <span>Show Highlights & Reels</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#d89ba4] text-zinc-950 font-bold">
                    VIRAL
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-zinc-400 hover:text-white transition-colors">
                  Branding & PR Services
                </Link>
              </li>
              <li>
                <Link href="/services#personal-branding" className="text-zinc-400 hover:text-white transition-colors">
                  Personal Branding & LinkedIn
                </Link>
              </li>
              <li>
                <Link href="/services#geo-ai-visibility" className="text-zinc-400 hover:text-white transition-colors">
                  Generative Engine Optimization (GEO)
                </Link>
              </li>
              <li>
                <Link href="/services#featured-interview" className="text-zinc-400 hover:text-white transition-colors">
                  Executive Podcast Interviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-200 mb-4">
              Host & Studio
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/profile" className="text-[#d89ba4] font-semibold hover:underline transition-colors">
                  Harshita Dagha Maisheri Profile
                </Link>
              </li>
              <li>
                <Link href="/profile#publications" className="text-zinc-400 hover:text-white transition-colors">
                  Media & Publications (8 Articles)
                </Link>
              </li>
              <li>
                <Link href="/profile#video-feature" className="text-zinc-400 hover:text-white transition-colors">
                  Keynote Speech & Video Feature
                </Link>
              </li>
              <li>
                <Link href="/be-a-guest" className="text-zinc-400 hover:text-white transition-colors">
                  Be a Guest on the Show
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-zinc-400 hover:text-white transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Streaming Platforms */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-200 mb-4">
              Stream Everywhere
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="https://spotify.com" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Spotify
                </a>
              </li>
              <li>
                <a href="https://apple.com" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-violet-400 transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-violet-500" />
                  Apple Podcasts
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-rose-400 transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  YouTube Video Show
                </a>
              </li>
              <li>
                <a href="https://overcast.fm" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-orange-400 transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-500" />
                  Overcast
                </a>
              </li>
              <li>
                <a href="https://amazon.com/music" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-500" />
                  Amazon Music
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & CodeOrbit Credit */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>© {new Date().getFullYear()} The Harshita Dagha Show. All rights reserved. Mumbai Studio HQ (BKC).</p>
            <span className="hidden sm:inline text-zinc-700">·</span>
            <p>
              Created by{" "}
              <a
                href="https://codeorbit.cloud"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d89ba4] hover:text-[#e2a8b1] font-semibold transition-colors underline underline-offset-2"
              >
                codeorbit.cloud
              </a>
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-zinc-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-zinc-300 transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-zinc-300 transition-colors">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
