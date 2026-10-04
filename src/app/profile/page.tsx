"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Play, 
  ArrowRight, 
  CheckCircle2, 
  BookOpen, 
  Newspaper, 
  Globe, 
  Share2, 
  MessageCircle,
  Video,
  X,
  Clock,
  Calendar,
  Layers,
  Search,
  Award
} from "lucide-react";
import { 
  OFFICIAL_PROFILE, 
  AUTHOR_PROFILES, 
  MEDIA_PUBLICATIONS, 
  PublicationArticle 
} from "@/data/publications";
import { YouTubeIcon, LinkedInIcon, InstagramIcon } from "@/components/SocialIcons";

export default function ProfilePage() {
  const [activeModalArticle, setActiveModalArticle] = useState<PublicationArticle | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getProfileIcon = (type: string) => {
    switch (type) {
      case "youtube":
        return <YouTubeIcon className="w-5 h-5 text-red-500" />;
      case "linkedin":
        return <LinkedInIcon className="w-5 h-5 text-blue-400" />;
      case "newspaper":
        return <Newspaper className="w-5 h-5 text-[#d89ba4]" />;
      case "book":
        return <BookOpen className="w-5 h-5 text-emerald-400" />;
      default:
        return <Globe className="w-5 h-5 text-[#d89ba4]" />;
    }
  };

  return (
    <div className="py-12 md:py-20 bg-[#0c0c0e] text-zinc-300 min-h-screen">
      
      {/* Schema.org Person & ProfilePage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "ProfilePage",
                "@id": "https://www.harshitadagha.in/profile",
                "name": "Harshita Dagha Maisheri | Professional Profile",
                "description": OFFICIAL_PROFILE.headline,
                "breadcrumb": {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://www.harshitadagha.in"
                    },
                    {
                      "@type": "ListItem",
                      "position": 2,
                      "name": "Harshita Dagha Maisheri Profile",
                      "item": "https://www.harshitadagha.in/profile"
                    }
                  ]
                }
              },
              {
                "@type": "Person",
                "name": OFFICIAL_PROFILE.fullName,
                "alternateName": [OFFICIAL_PROFILE.shortName, "Harshita Dagha"],
                "jobTitle": OFFICIAL_PROFILE.headline,
                "description": OFFICIAL_PROFILE.bioParagraphs[0],
                "email": OFFICIAL_PROFILE.email,
                "telephone": `+91${OFFICIAL_PROFILE.phone}`,
                "url": "https://www.harshitadagha.in/profile",
                "worksFor": {
                  "@type": "Organization",
                  "name": OFFICIAL_PROFILE.agency
                },
                "sameAs": AUTHOR_PROFILES.map((p) => p.url)
              }
            ]
          })
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================== */}
        {/* 1. HERO HEADER: IDENTITY & CONTACT INFORMATION                  */}
        {/* ============================================================== */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#17171d] to-[#121216] border border-white/10 p-6 sm:p-10 lg:p-12 mb-16 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#d89ba4]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Info & Headline */}
            <div className="lg:col-span-8">
              
              {/* Top Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d89ba4]/10 text-[#d89ba4] border border-[#d89ba4]/25 text-xs font-semibold uppercase tracking-wider mb-5 flex-wrap">
                <Sparkles className="w-3.5 h-3.5 text-[#d89ba4]" />
                <span className="text-white">Official Professional Profile</span>
                <span className="text-zinc-600">|</span>
                <span className="text-zinc-400">Founder, {OFFICIAL_PROFILE.agency}</span>
              </div>

              {/* Exact Full Name */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.08] mb-3">
                {OFFICIAL_PROFILE.fullName}
              </h1>

              {/* Exact Subtitle Headline */}
              <p className="text-lg sm:text-xl font-medium text-[#d89ba4] mb-6">
                {OFFICIAL_PROFILE.headline}
              </p>

              {/* Core Positioning Quote */}
              <div className="p-4 sm:p-5 rounded-2xl bg-black/40 border-l-4 border-[#d89ba4] mb-8">
                <p className="text-base sm:text-lg font-serif italic text-white font-medium leading-snug">
                  &ldquo;{OFFICIAL_PROFILE.positioningQuote}&rdquo;
                </p>
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mt-1.5 block">
                  — Core Market Positioning & Philosophy
                </span>
              </div>

              {/* Contact Information Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                {/* Email */}
                <a
                  href={`mailto:${OFFICIAL_PROFILE.email}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#d89ba4]/15 border border-[#d89ba4]/30 flex items-center justify-center text-[#d89ba4] shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="text-left overflow-hidden">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block">
                      Email Contact
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white truncate block">
                      {OFFICIAL_PROFILE.email}
                    </span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${OFFICIAL_PROFILE.phone}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block">
                      Direct Phone
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white block">
                      {OFFICIAL_PROFILE.phoneFormatted}
                    </span>
                  </div>
                </a>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <a
                  href={OFFICIAL_PROFILE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-full bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 text-sm font-semibold shadow-md transition-all text-center hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Connect on WhatsApp</span>
                </a>

                <a
                  href="#publications"
                  className="inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/15 text-sm font-semibold transition-all text-center"
                >
                  <Newspaper className="w-4 h-4 text-[#d89ba4]" />
                  <span>Explore 8 Media Features</span>
                </a>

                <button
                  onClick={handleShare}
                  className="inline-flex justify-center items-center gap-2 px-5 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 text-sm font-semibold transition-all cursor-pointer"
                >
                  <Share2 className="w-4 h-4" />
                  <span>{copied ? "Link Copied!" : "Share Profile"}</span>
                </button>
              </div>

            </div>

            {/* Right: Studio Photo */}
            <div className="lg:col-span-4">
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-[#141418]">
                  <Image
                    src="/images/harshita-portrait-main.jpg"
                    alt="Harshita Dagha Maisheri - Podcast Host, Branding & PR Strategist"
                    fill
                    priority
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="inline-block px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-semibold uppercase tracking-wider mb-1">
                      Based in Mumbai, India
                    </span>
                    <h3 className="font-serif font-bold text-lg text-white">
                      Harshita Dagha Maisheri
                    </h3>
                    <p className="text-xs text-zinc-400">
                      16+ Years Experience · Founder, Beingblahblah
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ============================================================== */}
        {/* 2. PROFESSIONAL PROFILE & EXTENSIVE BIO                        */}
        {/* ============================================================== */}
        <div className="mb-20">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#d89ba4] block mb-2">
              Executive Background
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-tight">
              Professional Profile
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-5 text-base sm:text-lg text-zinc-300 leading-relaxed">
              {OFFICIAL_PROFILE.bioParagraphs.map((para, idx) => (
                <p key={idx} className="font-normal">
                  {para}
                </p>
              ))}
            </div>

            <div className="lg:col-span-4 space-y-4">
              <div className="p-6 rounded-3xl bg-[#141418] border border-white/10 shadow-lg">
                <h3 className="font-serif font-bold text-lg text-white mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#d89ba4]" />
                  <span>Key Specializations</span>
                </h3>
                <div className="space-y-2 text-xs text-zinc-300 font-medium">
                  {[
                    "Brand Strategy & Narrative Positioning",
                    "Personal Branding for Founders & CXOs",
                    "Digital PR & Media Placement",
                    "Social Media Strategy & Content Architecture",
                    "Celebrity & Influencer Marketing",
                    "LinkedIn Strategy & Thought Leadership",
                    "Generative Engine Optimization (GEO)",
                    "SEO & AI Search Visibility (ChatGPT, Gemini)",
                    "Executive Multicam Podcast Hosting"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#d89ba4] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-[#141418] border border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                  Location & Reach
                </span>
                <p className="text-sm font-semibold text-white">
                  Mumbai Studio HQ · Serving Clients & Guests Pan-India
                </p>
                <p className="text-xs text-zinc-400 mt-2">
                  Operating acoustic studio in Bandra Kurla Complex (BKC) with digital & media reach spanning Bengaluru, Delhi NCR, Hyderabad, and global markets.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 3. VIDEO FEATURE (YOUTUBE EMBED WITH LOGO & PLAY)               */}
        {/* ============================================================== */}
        <div id="video-feature" className="mb-20 scroll-mt-24">
          <div className="bg-[#121216] rounded-3xl p-6 sm:p-10 border border-red-500/30 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 text-red-300 border border-red-500/40 text-xs font-semibold uppercase tracking-wider mb-2.5">
                  <YouTubeIcon className="w-3.5 h-3.5 text-red-400" />
                  <span>Featured Video Presentation</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white tracking-tight">
                  {OFFICIAL_PROFILE.videoFeature.title}
                </h2>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  {OFFICIAL_PROFILE.videoFeature.description}
                </p>
              </div>

              <a
                href={OFFICIAL_PROFILE.videoFeature.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-all shadow-md shrink-0 hover:scale-105 active:scale-95"
              >
                <YouTubeIcon className="w-4 h-4 fill-white" />
                <span>Watch on YouTube</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Responsive Video Container */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
              {!isVideoPlaying ? (
                <div 
                  onClick={() => setIsVideoPlaying(true)}
                  className="absolute inset-0 cursor-pointer group flex items-center justify-center"
                >
                  <Image
                    src="/images/harshita-studio-navy.jpg"
                    alt={OFFICIAL_PROFILE.videoFeature.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                  {/* YouTube Play Button Overlay */}
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <div className="w-20 h-20 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 fill-white ml-1" />
                    </div>
                    <div className="px-4 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                      <YouTubeIcon className="w-3.5 h-3.5 text-red-500" />
                      <span>Click to Play Official Video</span>
                    </div>
                  </div>
                </div>
              ) : (
                <iframe
                  src={`${OFFICIAL_PROFILE.videoFeature.embedUrl}?autoplay=1`}
                  title={OFFICIAL_PROFILE.videoFeature.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-0"
                />
              )}
            </div>

            <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-zinc-400 gap-2">
              <span>Watch Harshita Dagha live on YouTube discussing storytelling, brand positioning & human connection.</span>
              <span className="font-mono text-zinc-500">Video ID: {OFFICIAL_PROFILE.videoFeature.videoId}</span>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 4. ONLINE PROFILES & CHANNELS                                   */}
        {/* ============================================================== */}
        <div className="mb-20">
          <div className="max-w-3xl mb-8">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#d89ba4] block mb-1">
                  Digital Footprint
                </span>
                <h2 className="text-3xl font-serif text-white tracking-tight">
                  Online Profiles & Channels
                </h2>
              </div>
              <div className="sm:hidden text-xs text-zinc-400 font-medium">
                <span>Swipe sideways →</span>
              </div>
            </div>
            <p className="text-sm text-zinc-400">
              Explore Harshita Dagha&apos;s verified author columns, social media presence, and publication portals.
            </p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 no-scrollbar sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:mx-0 sm:px-0 sm:overflow-visible">
            {AUTHOR_PROFILES.map((profile, idx) => (
              <a
                key={idx}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[82vw] sm:w-auto shrink-0 snap-center p-5 rounded-2xl bg-[#141418] border border-white/10 hover:border-[#d89ba4]/40 hover:bg-[#18181f] transition-all flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {getProfileIcon(profile.iconType)}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 text-zinc-400 border border-white/5">
                      {profile.badge}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-base text-white group-hover:text-[#d89ba4] transition-colors mb-1.5 flex items-center gap-1.5">
                    <span>{profile.name}</span>
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    {profile.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-zinc-300 group-hover:text-[#d89ba4]">
                  <span>Visit {profile.platform}</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* 5. MEDIA FEATURES, INTERVIEWS & PUBLICATIONS (ALL 8 ARTICLES)   */}
        {/* ============================================================== */}
        <div id="publications" className="mb-20 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#d89ba4] block mb-2">
                Press Discourse & Journalism
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-tight">
                Media Features, Interviews & Publications
              </h2>
              <p className="text-sm text-zinc-400 mt-1 max-w-2xl">
                Read all 8 published features, author articles, and interviews in full detail right here on our website, or verify via original live publication links.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="md:hidden inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-300">
                <span>Swipe sideways (8 articles) →</span>
              </div>
              <div className="hidden md:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-zinc-300 shrink-0">
                <Newspaper className="w-3.5 h-3.5 text-[#d89ba4]" />
                <span>8 Verified Publications</span>
              </div>
            </div>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 no-scrollbar md:grid md:grid-cols-2 md:gap-6 md:mx-0 md:px-0 md:overflow-visible">
            {MEDIA_PUBLICATIONS.map((pub) => (
              <div
                key={pub.id}
                className="w-[85vw] sm:w-[420px] md:w-auto shrink-0 snap-center p-6 sm:p-7 rounded-3xl bg-[#141418] border border-white/10 hover:border-[#d89ba4]/40 hover:bg-[#16161c] transition-all flex flex-col justify-between shadow-lg group"
              >
                <div>
                  {/* Outlet & Category Bar */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-serif font-bold text-base sm:text-lg text-white group-hover:text-[#d89ba4] transition-colors">
                      {pub.outlet}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/5 text-[#d89ba4] border border-white/10">
                      {pub.outletBadge}
                    </span>
                  </div>

                  {/* Title */}
                  <Link href={`/publications/${pub.slug}`}>
                    <h3 className="font-serif font-bold text-lg sm:text-xl text-zinc-100 hover:text-[#d89ba4] transition-colors leading-snug mb-2.5">
                      {pub.title}
                    </h3>
                  </Link>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5">
                    {pub.excerpt}
                  </p>
                </div>

                <div>
                  {/* Meta Bar */}
                  <div className="flex items-center justify-between text-xs text-zinc-500 py-3 border-t border-white/10 mb-4">
                    <span className="font-mono text-zinc-400">{pub.date}</span>
                    <span className="text-zinc-400">{pub.readTime}</span>
                  </div>

                  {/* Action Buttons: Read on Website + View Original */}
                  <div className="flex items-center gap-2.5">
                    {/* Read On Our Website */}
                    <Link
                      href={`/publications/${pub.slug}`}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-white/10 hover:bg-[#d89ba4] hover:text-black text-white text-xs font-bold transition-all shadow-xs"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    {/* Quick Modal Preview */}
                    <button
                      onClick={() => setActiveModalArticle(pub)}
                      className="inline-flex items-center justify-center py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 text-xs font-semibold transition-all cursor-pointer"
                      title="Quick Preview"
                    >
                      <span>Quick View</span>
                    </button>

                    {/* Direct External Link */}
                    <a
                      href={pub.originalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-[#d89ba4] border border-white/10 transition-colors"
                      title={`Open original on ${pub.outlet}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* 6. WHATSAPP & BOOKING BANNER                                    */}
        {/* ============================================================== */}
        <div className="bg-gradient-to-r from-emerald-950/40 via-[#141418] to-[#141418] text-white rounded-3xl p-8 sm:p-10 border border-emerald-500/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
              Direct Production & Advisory Desk
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white mb-2">
              Connect with Harshita Dagha Maisheri
            </h2>
            <p className="text-sm text-zinc-300 max-w-xl leading-relaxed">
              Available for Brand Strategy Advisory, Executive Podcast Guest Booking, Celebrity Marketing, Keynote Speaking & Digital PR Campaigns.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-xs text-zinc-400">
              <span>📧 {OFFICIAL_PROFILE.email}</span>
              <span>•</span>
              <span>📞 {OFFICIAL_PROFILE.phoneFormatted}</span>
              <span>•</span>
              <span>📍 {OFFICIAL_PROFILE.location}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <a
              href={OFFICIAL_PROFILE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-bold shadow-lg shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all text-center"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Connect on WhatsApp</span>
            </a>

            <Link
              href="/be-a-guest"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#d89ba4] hover:bg-[#e2a8b1] text-zinc-950 text-sm font-bold shadow-md hover:scale-105 active:scale-95 transition-all text-center"
            >
              <span>Book / Pitch Podcast</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>

      {/* ============================================================== */}
      {/* QUICK VIEW ARTICLE MODAL                                        */}
      {/* ============================================================== */}
      {activeModalArticle && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={() => setActiveModalArticle(null)}
        >
          <div 
            className="bg-[#131317] border border-white/15 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalArticle(null)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="pr-10 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#d89ba4] block mb-1">
                {activeModalArticle.outlet} · {activeModalArticle.outletBadge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                {activeModalArticle.title}
              </h2>
              <div className="flex items-center gap-3 text-xs text-zinc-400 mt-2 font-mono">
                <span>{activeModalArticle.date}</span>
                <span>•</span>
                <span>{activeModalArticle.readTime}</span>
              </div>
            </div>

            {/* Modal Content */}
            <div className="space-y-6 text-zinc-300 text-sm sm:text-base leading-relaxed mb-8">
              <p className="font-medium text-white italic border-l-4 border-[#d89ba4] pl-3 py-1 bg-white/5 rounded-r-xl">
                {activeModalArticle.excerpt}
              </p>

              <p>{activeModalArticle.intro}</p>

              {activeModalArticle.sections.map((sec, i) => (
                <div key={i} className="space-y-2">
                  <h3 className="font-serif font-bold text-lg text-white">{sec.heading}</h3>
                  {sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              ))}

              {activeModalArticle.quote && (
                <div className="p-4 rounded-xl bg-white/5 border-l-4 border-[#d89ba4] text-white italic font-serif">
                  &ldquo;{activeModalArticle.quote}&rdquo;
                </div>
              )}
            </div>

            {/* Modal Footer Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-white/10">
              <Link
                href={`/publications/${activeModalArticle.slug}`}
                onClick={() => setActiveModalArticle(null)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#d89ba4] text-zinc-950 font-bold text-xs"
              >
                <span>Open Full Page Dedicated Reader</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href={activeModalArticle.originalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-xs border border-white/10"
              >
                <span>Open on {activeModalArticle.outlet}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
