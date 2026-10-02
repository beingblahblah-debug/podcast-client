"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  CheckCircle2, 
  Sparkles, 
  Mic2, 
  Video, 
  Radio, 
  Users2, 
  ArrowRight, 
  ShieldCheck, 
  TrendingUp, 
  Building2, 
  Share2, 
  CalendarCheck,
  Award
} from "lucide-react";
import { PRESS_LOGOS } from "@/data/episodes";

export default function ServicesPage() {
  const whatsappUrl = "https://wa.me/919876543210?text=Hi%20Harshita%20Dagha%20Media,%20I%20am%20interested%20in%20discussing%20podcast%20services%20/%20sponsorship%20/%20host%20booking.";

  const services = [
    {
      id: "featured-interview",
      title: "Featured Founder & Executive Guest Profile",
      tagline: "Establish Unshakeable Industry Authority",
      description: "A 60-minute, broadcast-grade long-form interview exploring your career inflection points, proprietary mental frameworks, and company vision. Includes multi-platform syndication across Apple Podcasts, Spotify, and 4K YouTube.",
      deliverables: [
        "60-90 minute deep-dive interview in Mumbai Studio HQ (BKC) or 4K remote studio",
        "Permanent distribution to 65,000+ verified active listeners",
        "Five 4K vertical viral video reels for LinkedIn, TikTok & Instagram",
        "Full SEO-optimized show notes & permanent do-follow backlinks",
        "High-resolution studio portrait photography package"
      ],
      idealFor: "Venture-backed founders, authors, fund managers, and category leaders.",
      badge: "Most Requested"
    },
    {
      id: "corporate-podcasting",
      title: "Turnkey Corporate & Brand Podcasting",
      tagline: "End-to-End Enterprise Media Production",
      description: "Harshita Dagha and her veteran production desk develop, host, and engineer private or public podcast series for enterprises, tech giants, and visionary foundations seeking narrative leadership.",
      deliverables: [
        "Full creative concepting, season narrative arcs, and script debriefs",
        "Executive media training and vocal pacing coaching for internal hosts",
        "Broadcast sound design, custom sonic branding, and audio mastering",
        "Global syndication pipeline to all major podcast directories",
        "Comprehensive retention heatmaps and listener demographic intelligence"
      ],
      idealFor: "Enterprises, venture capital firms, healthcare systems, and tech platforms.",
      badge: "Enterprise"
    },
    {
      id: "event-moderation",
      title: "Keynote Interviewer & Summit Stage Host",
      tagline: "High-Energy, Intellectually Rigorous Stage Presence",
      description: "Bring Harshita's celebrated interview acumen to your global conference, investor summit, or annual general meeting. Known for extracting authentic, headline-generating answers from titans of industry.",
      deliverables: [
        "Main-stage keynote fireside chat moderation",
        "Pre-summit briefing calls with high-profile VIP speakers",
        "Panel moderation that actively eliminates corporate PR fluff",
        "Post-event audio/video highlights for social syndication"
      ],
      idealFor: "Tech conferences, economic forums, leadership retreats, and galas.",
      badge: "Live Stage"
    },
    {
      id: "show-sponsorship",
      title: "Brand Sponsorship & Authentic Host-Read Ads",
      tagline: "High-Trust Influence with Affluent Decision Makers",
      description: "Integrate your product or service into The Harshita Dagha Show. Unlike robotic automated ad-rolls, Harshita only accepts 2 curated sponsors per episode and records passionate, personal endorsements.",
      deliverables: [
        "60-second host-read mid-roll and 30-second pre-roll endorsements",
        "Permanent audio & video placement (no dynamic ad deletion)",
        "Direct hyperlink integration in newsletter reaching 65,000+ subscribers",
        "Social media shout-outs across LinkedIn and Twitter/X"
      ],
      idealFor: "B2B SaaS, fintech platforms, luxury productivity tools, and health tech.",
      badge: "Sponsorship"
    }
  ];

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with SEO Keywords & Trust Signals */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5 text-amber-600" />
            <span>Media Production & Host For Hire</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-950 tracking-tight leading-[1.12] mb-4">
            Executive Podcasting, Stage Hosting & Brand Partnerships
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Work with India&apos;s #1 female executive podcast host <strong className="text-slate-900">Harshita Dagha</strong>. From featured executive guest appearances to full-scale enterprise podcast development across Mumbai, Bengaluru, and Delhi NCR, we create category-defining audio and video media.
          </p>
        </div>

        {/* WhatsApp Fast-Track Callout Card */}
        <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-emerald-500/30 shadow-xl mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Fast-Track Production Booking</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-1">
              Need a swift response on dates or sponsorship?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Connect directly with Harshita Dagha&apos;s executive producer via WhatsApp for quick availability checks, rate cards, and studio booking.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-bold shadow-lg shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>Instant WhatsApp Inquiry</span>
            </a>
          </div>
        </div>

        {/* Services Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200">
                    {service.badge}
                  </span>
                  <span className="text-xs text-amber-700 font-semibold font-mono">
                    Mumbai HQ, Bengaluru & Global Remote
                  </span>
                </div>

                <h3 className="font-serif font-bold text-2xl text-slate-950 group-hover:text-amber-700 transition-colors mb-2 leading-snug">
                  {service.title}
                </h3>

                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
                  {service.tagline}
                </p>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Deliverables list */}
                <div className="mb-6 space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Included Deliverables:
                  </h4>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 mb-6">
                  <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wide block mb-0.5">
                    Ideal Fit For:
                  </span>
                  <p className="text-xs text-slate-600">{service.idealFor}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-5 border-t border-slate-100 flex items-center justify-between gap-3">
                <a
                  href={`https://wa.me/919876543210?text=Hi%20Harshita%20Dagha%20Media,%20I%20am%20interested%20in%20learning%20more%20about%20your%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-xs font-bold transition-colors"
                >
                  <span>Discuss via WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <Link
                  href="/contact"
                  className="text-xs font-semibold text-slate-600 hover:text-slate-900 underline"
                >
                  Send Proposal
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Media & Press Credibility Banner */}
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200/80 mb-20 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3 block">
            Recognized by World-Class Media & Cultural Institutions
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 mb-8">
            Our conversations are cited across global journalism
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-80">
            {PRESS_LOGOS.map((press) => (
              <div key={press.name} className="flex flex-col items-center">
                <span className="font-serif font-bold text-xl sm:text-2xl text-slate-800">
                  {press.name}
                </span>
                <span className="text-[11px] text-slate-500 font-sans">
                  {press.subtitle}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

function Briefcase(props: any) {
  return (
    <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}
