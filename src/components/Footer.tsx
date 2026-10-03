"use client";

import React, { useState } from "react";
import Link from "next/link";
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
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-28 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Newsletter Card */}
        <div className="relative rounded-3xl bg-gradient-to-r from-slate-800 via-slate-800 to-amber-950/40 p-8 md:p-12 border border-slate-700/60 shadow-2xl mb-16 overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20 text-xs font-semibold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Harshita Dagha Letter</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight mb-3">
                Unedited show notes & backstage debriefs delivered every Sunday.
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
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
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      required
                      placeholder="Enter your personal email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-semibold text-sm transition-all shadow-md shrink-0 cursor-pointer"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
              <p className="text-[11px] text-slate-500 mt-2 text-center lg:text-left">
                Zero spam. One-click unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>

        {/* Multi-column navigation links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-amber-400 flex items-center justify-center text-slate-950">
                <Radio className="w-5 h-5" />
              </div>
              <span className="font-serif font-bold text-xl text-white tracking-wide">
                HARSHITA DAGHA SHOW
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              India&apos;s #1 female executive podcast platform hosted by Harshita Dagha. Unpacking startup scale, AI breakthroughs, and visionary leadership across Mumbai, Bengaluru, and global business hubs.
            </p>
            <div className="flex items-center space-x-3">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="X (formerly Twitter)"
              >
                <XTwitterIcon className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/beingblahblah" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <YouTubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Podcast Exploration */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Rankings & Shows
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/highlights" className="hover:text-amber-400 text-amber-300 font-semibold transition-colors flex items-center gap-1.5">
                  <span>Show Highlights & Reels</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-400 text-slate-950 font-black">
                    VIRAL
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/episodes" className="hover:text-white transition-colors">
                  All Masterclasses Archive
                </Link>
              </li>
              <li>
                <Link href="/top-10" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>Top 10 Episodes Chart</span>
                </Link>
              </li>
              <li>
                <Link href="/episodes?category=Tech+%26+AI" className="hover:text-white transition-colors">
                  Tech & Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link href="/episodes?category=Mindset" className="hover:text-white transition-colors">
                  Mindset & Neurobiology
                </Link>
              </li>
              <li>
                <Link href="/episodes?category=Leadership" className="hover:text-white transition-colors">
                  Executive Leadership
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Host & Studio
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Harshita Dagha
                </Link>
              </li>
              <li>
                <Link href="/about#studio" className="hover:text-white transition-colors">
                  Studio Gear & Setup
                </Link>
              </li>
              <li>
                <Link href="/be-a-guest" className="hover:text-white transition-colors">
                  Be a Guest on the Show
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Essays & Backstage Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Sponsorship Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Streaming Platforms */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Stream Everywhere
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="https://spotify.com" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Spotify
                </a>
              </li>
              <li>
                <a href="https://apple.com" target="_blank" rel="noreferrer" className="hover:text-violet-400 transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-violet-500" />
                  Apple Podcasts
                </a>
              </li>
              <li>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-rose-400 transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  YouTube Video Show
                </a>
              </li>
              <li>
                <a href="https://overcast.fm" target="_blank" rel="noreferrer" className="hover:text-orange-400 transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-500" />
                  Overcast
                </a>
              </li>
              <li>
                <a href="https://amazon.com/music" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-500" />
                  Amazon Music
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & CodeOrbit Credit */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <p>© {new Date().getFullYear()} The Harshita Dagha Show. All rights reserved. Mumbai Studio HQ (BKC).</p>
            <span className="hidden sm:inline text-slate-700">·</span>
            <p>
              Created by{" "}
              <a
                href="https://codeorbit.cloud"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 font-semibold transition-colors underline underline-offset-2"
              >
                codeorbit.cloud
              </a>
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-slate-300 transition-colors">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
