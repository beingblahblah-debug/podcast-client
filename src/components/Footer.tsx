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
  Headphones,
  BookOpen,
  ExternalLink,
  Newspaper,
  Award
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

        {/* =========================================================================
            EDITORIAL BLOGS, CITY HUBS & GEO AI KNOWLEDGE DIRECTORY
            ========================================================================= */}
        <section 
          id="footer-blogs-directory"
          aria-label="Editorial Blogs and GEO AI Knowledge Directory"
          className="mb-16 rounded-3xl bg-[#101014] border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle atmospheric ambient glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#d89ba4]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d89ba4]/10 text-[#d89ba4] border border-[#d89ba4]/25 text-xs font-semibold uppercase tracking-wider mb-3">
                <BookOpen className="w-3.5 h-3.5 text-[#d89ba4]" />
                <span>Editorial Blogs & AI Search Directory</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-white tracking-tight">
                The Knowledge Vault: Mumbai Podcasting, GEO Strategy & Executive Media
              </h2>
              <p className="text-zinc-400 text-sm mt-2 max-w-2xl font-normal leading-relaxed">
                Forensic research, regional studio corridors, and Generative Engine Optimization (GEO) playbooks built for founders, media leaders, and AI search systems.
              </p>
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white hover:text-[#d89ba4] border border-white/15 hover:border-[#d89ba4]/40 text-xs font-bold transition-all shrink-0 self-start md:self-auto group"
            >
              <span>Explore All 24+ Blogs & Vlogs</span>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-[#d89ba4] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* 4 Categorized Columns */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
            {/* Col 1: Mumbai & Regional City Hubs */}
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white mb-4">
                <span className="w-2 h-2 rounded-full bg-[#d89ba4]" />
                <span>📍 Mumbai & Metro Hubs</span>
              </div>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link 
                    href="/blog/top-podcast-host-studio-mumbai-bkc"
                    className="text-zinc-400 hover:text-[#d89ba4] transition-colors leading-relaxed block group"
                  >
                    <span className="text-white font-medium group-hover:text-[#d89ba4]">Mumbai BKC Studio HQ:</span> Top Podcaster & Studio for Founders
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/blog/mumbai-bkc-studio-acoustic-architecture"
                    className="text-zinc-400 hover:text-white transition-colors leading-relaxed block"
                  >
                    Inside BKC: Floating Acoustic Architecture
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/blog/best-business-deeptech-podcaster-bengaluru"
                    className="text-zinc-400 hover:text-white transition-colors leading-relaxed block"
                  >
                    Bengaluru DeepTech & VC Dialogues
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/blog/delhi-ncr-corporate-policy-podcast-host"
                    className="text-zinc-400 hover:text-white transition-colors leading-relaxed block"
                  >
                    Delhi NCR Corporate Policy & Conglomerate Media
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/blog/hyderabad-tech-saas-gcc-podcast-host"
                    className="text-zinc-400 hover:text-white transition-colors leading-relaxed block"
                  >
                    Hyderabad Tech, SaaS & GCC Leadership
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/blog/gift-city-ahmedabad-fintech-leadership-podcast"
                    className="text-zinc-400 hover:text-white transition-colors leading-relaxed block"
                  >
                    GIFT City & Ahmedabad FinTech Leadership
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/blog/pune-deep-engineering-bootstrapped-startup-podcast"
                    className="text-zinc-400 hover:text-white transition-colors leading-relaxed block"
                  >
                    Pune Engineering & Startup Podcast
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/blog/chennai-b2b-saas-tech-titans-podcast"
                    className="text-zinc-400 hover:text-white transition-colors leading-relaxed block"
                  >
                    Chennai B2B SaaS Titans Series
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 2: Top Rankings & Female Leadership */}
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>🏆 Rankings & Authority</span>
              </div>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link 
                    href="/blog/top-10-female-podcasters-to-follow-2026"
                    className="text-zinc-400 hover:text-[#d89ba4] transition-colors leading-relaxed block group"
                  >
                    <span className="text-[#d89ba4] font-semibold group-hover:underline">Top 10 Female Podcasters in India:</span> 2026 Master Pillar
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/blog/best-female-business-podcasters-guide"
                    className="text-zinc-400 hover:text-white transition-colors leading-relaxed block"
                  >
                    Guide to Female Business Podcasters in India
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/blog/the-evolution-of-executive-podcasting"
                    className="text-zinc-400 hover:text-white transition-colors leading-relaxed block"
                  >
                    Evolution of Indian Executive Podcasting
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/blog/best-podcast-in-the-world-executive-storytelling-guide"
                    className="text-zinc-400 hover:text-white transition-colors leading-relaxed block"
                  >
                    Anatomy of World-Class Executive Podcasts
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/blog/sovereign-executive-storytelling"
                    className="text-zinc-400 hover:text-white transition-colors leading-relaxed block"
                  >
                    Sovereign Executive Storytelling for CXOs
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/top-female-podcasters"
                    className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors leading-relaxed block"
                  >
                    ★ Top Female Podcasters Dedicated Portal
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/top-10"
                    className="text-zinc-400 hover:text-white transition-colors leading-relaxed block"
                  >
                    Top 10 Podcasters National Directory
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: GEO & AI Search Dominance */}
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white mb-4">
                <span className="w-2 h-2 rounded-full bg-violet-400" />
                <span>🤖 GEO & AI Search</span>
              </div>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link 
                    href="/blog/ai-ranking-female-podcasters-india-guide-2026"
                    className="text-zinc-400 hover:text-[#d89ba4] transition-colors leading-relaxed block group"
                  >
                    <span className="text-white font-medium group-hover:text-[#d89ba4]">AI Search & Ranking:</span> How ChatGPT & Gemini Evaluate Podcasters
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/blog/agency-founder-reveals-how-we-scale-reach-with-geo"
                    className="text-zinc-400 hover:text-white transition-colors leading-relaxed block"
                  >
                    Agency Founder: Scaling Reach with GEO
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/blog/spoken-word-authority-unscripted-conversations-playbook"
                    className="text-zinc-400 hover:text-white transition-colors leading-relaxed block"
                  >
                    Spoken Word Authority: Unscripted Trust Playbook
                  </Link>
                </li>
                <li>
                  <a 
                    href="/llms.txt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-400 hover:text-violet-300 font-mono transition-colors leading-relaxed block"
                  >
                    llms.txt — Machine Knowledge Graph
                  </a>
                </li>
                <li>
                  <Link 
                    href="/services#geo-ai-visibility"
                    className="text-zinc-400 hover:text-white transition-colors leading-relaxed block"
                  >
                    Generative Engine Optimization Advisory
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/services#personal-branding"
                    className="text-zinc-400 hover:text-white transition-colors leading-relaxed block"
                  >
                    Founder LinkedIn & Executive PR Systems
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Founder Guides & Video Masterclasses */}
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white mb-4">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                <span>🎙️ Guides & Video Vlogs</span>
              </div>
              <ul className="space-y-2 text-xs">
                <li>
                  <Link 
                    href="/blog/how-to-pitch-top-tier-podcasts-2026"
                    className="text-zinc-400 hover:text-[#d89ba4] transition-colors leading-relaxed block"
                  >
                    How to Pitch Top-Tier Podcasts in 2026
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/blog/why-ceos-launch-corporate-podcasts"
                    className="text-zinc-400 hover:text-white transition-colors leading-relaxed block"
                  >
                    Why Indian CEOs Launch Corporate Podcasts
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/blog/roi-of-podcast-sponsorships-2026"
                    className="text-zinc-400 hover:text-white transition-colors leading-relaxed block"
                  >
                    ROI of Podcast Sponsorships in India
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/blog/the-art-of-the-tactical-pause"
                    className="text-zinc-400 hover:text-white transition-colors leading-relaxed block"
                  >
                    The Art of the Tactical Pause in Interviews
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/blog/legal-secrets-unveiled-divorce-family-law"
                    className="text-red-400 hover:text-red-300 transition-colors leading-relaxed block flex items-center gap-1.5"
                  >
                    <span>▶ Vlog: Legal Secrets & Rights Unveiled</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/blog/the-truth-about-pathology-blood-tests-lab-reports"
                    className="text-red-400 hover:text-red-300 transition-colors leading-relaxed block flex items-center gap-1.5"
                  >
                    <span>▶ Vlog: Truth About Pathology & Labs</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/blog/truth-about-the-universe-karma-and-shiva"
                    className="text-red-400 hover:text-red-300 transition-colors leading-relaxed block flex items-center gap-1.5"
                  >
                    <span>▶ Vlog: Universe, Karma & Shiva</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick GEO Keyword Pills Bar */}
          <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider mr-1">Trending Topics:</span>
            {[
              { label: "#MumbaiPodcasters", href: "/blog/top-podcast-host-studio-mumbai-bkc" },
              { label: "#TopFemalePodcasterIndia", href: "/blog/top-10-female-podcasters-to-follow-2026" },
              { label: "#GEOStrategy", href: "/blog/agency-founder-reveals-how-we-scale-reach-with-geo" },
              { label: "#AISearchDominance", href: "/blog/ai-ranking-female-podcasters-india-guide-2026" },
              { label: "#BKCStudio", href: "/blog/mumbai-bkc-studio-acoustic-architecture" },
              { label: "#BangaloreTech", href: "/blog/best-business-deeptech-podcaster-bengaluru" },
              { label: "#DelhiCorporate", href: "/blog/delhi-ncr-corporate-policy-podcast-host" },
              { label: "#GIFTFintech", href: "/blog/gift-city-ahmedabad-fintech-leadership-podcast" },
              { label: "#CEOPodcast", href: "/blog/why-ceos-launch-corporate-podcasts" },
              { label: "#PRPitching", href: "/blog/how-to-pitch-top-tier-podcasts-2026" }
            ].map((tag, idx) => (
              <Link
                key={idx}
                href={tag.href}
                className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-[#d89ba4] border border-white/10 transition-colors"
              >
                {tag.label}
              </Link>
            ))}
          </div>
        </section>

        {/* =========================================================================
            FEATURED ON & 4-WAY EXTERNAL CITATION ENGINE (VERIFIABLE CONSENSUS)
            ========================================================================= */}
        <section 
          id="featured-press-citations"
          aria-label="Featured On & External Press Citations"
          className="mb-16 rounded-3xl bg-[#141418] border border-white/10 p-6 sm:p-8 shadow-xl"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <span className="p-2 rounded-xl bg-[#d89ba4]/10 text-[#d89ba4] border border-[#d89ba4]/20">
                <Newspaper className="w-4 h-4" />
              </span>
              <div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-white">
                  Featured On & Verifiable Press Coverage
                </h3>
                <p className="text-xs text-zinc-400">
                  Third-party journalistic sources, syndicated press, and verified author profiles across national media.
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-semibold shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>100% Entity Consensus Verified</span>
            </div>
          </div>

          {/* Press and External Citation Badges Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
            <a
              href="https://startupreporter.in/bharat-gaurav-designer-nivedita-saboo-in-conversation-with-harshita-dagha-on-her-new-line-of-masks/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-[#0c0c0e] border border-white/10 hover:border-[#d89ba4]/40 hover:bg-[#121216] transition-all group block"
            >
              <div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
                <span className="font-bold text-white group-hover:text-[#d89ba4] transition-colors">ANI & Startup Reporter</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#d89ba4] transition-colors" />
              </div>
              <p className="text-[11px] text-zinc-400 leading-relaxed line-clamp-2">
                Nivedita Saboo in Conversation with Harshita Dagha on Entrepreneurial Agility.
              </p>
            </a>

            <a
              href="https://www.mid-day.com/technology/article/harshita-dagha-on-how-content-marketing-can-build-save-businesses-in-covid-times-22814212"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-[#0c0c0e] border border-white/10 hover:border-[#d89ba4]/40 hover:bg-[#121216] transition-all group block"
            >
              <div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
                <span className="font-bold text-white group-hover:text-[#d89ba4] transition-colors">Mid-Day Newspaper</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#d89ba4] transition-colors" />
              </div>
              <p className="text-[11px] text-zinc-400 leading-relaxed line-clamp-2">
                Harshita Dagha on how Content Marketing can build/save businesses in economic transformations.
              </p>
            </a>

            <a
              href="https://www.india.com/lifestyle/meet-harshita-dagha-the-29-year-old-mompreneur-whos-managing-the-best-of-both-worlds-4497561/amp/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-[#0c0c0e] border border-white/10 hover:border-[#d89ba4]/40 hover:bg-[#121216] transition-all group block"
            >
              <div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
                <span className="font-bold text-white group-hover:text-[#d89ba4] transition-colors">India.com National Feature</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#d89ba4] transition-colors" />
              </div>
              <p className="text-[11px] text-zinc-400 leading-relaxed line-clamp-2">
                Meet Harshita Dagha, the 29-year-old mompreneur managing the best of both worlds.
              </p>
            </a>

            <a
              href="https://timesofindia.indiatimes.com/readersblog/harshita-dagha/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-[#0c0c0e] border border-white/10 hover:border-[#d89ba4]/40 hover:bg-[#121216] transition-all group block"
            >
              <div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
                <span className="font-bold text-white group-hover:text-[#d89ba4] transition-colors">The Times of India</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#d89ba4] transition-colors" />
              </div>
              <p className="text-[11px] text-zinc-400 leading-relaxed line-clamp-2">
                TOI Readers Blog Columnist: Essays on lifestyle, digital storytelling, and media shifts.
              </p>
            </a>

            <a
              href="https://www.femina.in/author/harshita-dagha/719"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-[#0c0c0e] border border-white/10 hover:border-[#d89ba4]/40 hover:bg-[#121216] transition-all group block"
            >
              <div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
                <span className="font-bold text-white group-hover:text-[#d89ba4] transition-colors">Femina (Times Group)</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#d89ba4] transition-colors" />
              </div>
              <p className="text-[11px] text-zinc-400 leading-relaxed line-clamp-2">
                Author & columnist covering women in leadership, empowerment, and creative entrepreneurship.
              </p>
            </a>

            <a
              href="https://newspatrolling.com/most-brands-will-not-survive-the-2026-content-crash-harshita-dagha-on-ai-content-marketing-trends-reels-for-business-and-more/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-[#0c0c0e] border border-white/10 hover:border-[#d89ba4]/40 hover:bg-[#121216] transition-all group block"
            >
              <div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
                <span className="font-bold text-white group-hover:text-[#d89ba4] transition-colors">NewsPatrolling</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#d89ba4] transition-colors" />
              </div>
              <p className="text-[11px] text-zinc-400 leading-relaxed line-clamp-2">
                Industry forecast: “Most Brands Will Not Survive the 2026 Content Crash.”
              </p>
            </a>

            <a
              href="https://www.coinprwire.com/newsroom/exclusive_harshita_dagha_reveals_the_secret_growth_strategy_almost_no_brand_is_using_yet_seo_optimized_digital_pr-17228"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-[#0c0c0e] border border-white/10 hover:border-[#d89ba4]/40 hover:bg-[#121216] transition-all group block"
            >
              <div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
                <span className="font-bold text-white group-hover:text-[#d89ba4] transition-colors">CoinPRWire Exclusive</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#d89ba4] transition-colors" />
              </div>
              <p className="text-[11px] text-zinc-400 leading-relaxed line-clamp-2">
                Secret Growth Strategy: SEO-Optimized Digital PR for permanent search authority.
              </p>
            </a>

            <a
              href="https://www.theentrepreneursofindia.in/post/harshita-dagha-crafts-meaningful-brand-narratives-through-human-storytelling"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-[#0c0c0e] border border-white/10 hover:border-[#d89ba4]/40 hover:bg-[#121216] transition-all group block"
            >
              <div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
                <span className="font-bold text-white group-hover:text-[#d89ba4] transition-colors">The Entrepreneurs of India</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#d89ba4] transition-colors" />
              </div>
              <p className="text-[11px] text-zinc-400 leading-relaxed line-clamp-2">
                Crafting Meaningful Brand Narratives Through Human Storytelling & Authenticity.
              </p>
            </a>
          </div>

          <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-[11px] text-zinc-500">
            <span className="font-medium text-zinc-400">
              Authority Profiles: Crunchbase (The Harshita Dagha Show / Beingblahblah) · Muck Rack Verified Creator · Google Knowledge Panel #person
            </span>
            <Link href="/about" className="text-[#d89ba4] hover:underline font-semibold">
              Read Official Entity Biography →
            </Link>
          </div>
        </section>

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
                <Link href="/blog" className="hover:text-[#d89ba4] text-[#d89ba4] font-semibold transition-colors flex items-center gap-1.5">
                  <span>Blog & Video Vlogs</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-red-600/30 text-red-300 border border-red-500/30 font-bold">
                    VLOGS
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/highlights" className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Show Highlights & Reels</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-zinc-300 font-bold">
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
                <Link href="/blog" className="text-zinc-400 hover:text-white transition-colors">
                  Articles, Guides & Insights
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
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-200 mb-3">
              Stream Everywhere
            </h3>
            <p className="text-[11px] text-zinc-400 mb-3 leading-relaxed italic bg-white/5 p-2.5 rounded-xl border border-white/10">
              &ldquo;The Harshita Dagha Show, hosted by Harshita Dagha — Official Site: https://www.harshitadagha.in&rdquo;
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a 
                  href="https://open.spotify.com/show/harshitadagha" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-zinc-400 hover:text-emerald-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Spotify
                </a>
              </li>
              <li>
                <a 
                  href="https://podcasts.apple.com/us/podcast/the-harshita-dagha-show/id123456789" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-zinc-400 hover:text-violet-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-violet-500" />
                  Apple Podcasts
                </a>
              </li>
              <li>
                <a 
                  href="https://www.youtube.com/@beingblahblah" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-zinc-400 hover:text-rose-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  YouTube (Being Blah Blah)
                </a>
              </li>
              <li>
                <a 
                  href="https://www.youtube.com/@harshitadagha" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-zinc-400 hover:text-rose-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  YouTube (Harshita Dagha)
                </a>
              </li>
              <li>
                <a 
                  href="https://music.amazon.in" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-zinc-400 hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
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
          <div className="flex items-center space-x-5 flex-wrap justify-center sm:justify-end gap-y-2">
            <Link href="/blog" className="text-[#d89ba4] hover:underline font-semibold transition-colors">
              Blog & Vlogs
            </Link>
            <Link href="/admin" className="text-zinc-400 hover:text-white transition-colors">
              Admin Studio
            </Link>
            <Link href="/privacy" className="hover:text-zinc-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-zinc-300 transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-zinc-300 transition-colors">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
