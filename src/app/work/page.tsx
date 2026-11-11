import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  Briefcase, 
  Sparkles, 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  Tv, 
  Mic, 
  Cpu, 
  Share2, 
  TrendingUp, 
  Video,
  Award
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Work & Portfolio | Beingblahblah Brand & Media Case Studies",
  description: "Explore verified case studies, media appearances, broadcast podcast productions, and digital PR campaigns executed by Beingblahblah in Mumbai, India.",
  alternates: {
    canonical: "https://www.harshitadagha.in/work",
  },
  openGraph: {
    title: "Our Work & Portfolio | Beingblahblah Brand & Media Case Studies",
    description: "Explore verified case studies, media appearances, broadcast podcast productions, and digital PR campaigns executed by Beingblahblah in Mumbai, India.",
    url: "https://www.harshitadagha.in/work",
    type: "website",
  },
};

export default function WorkPage() {
  const caseStudies = [
    {
      discipline: "Brand Strategy",
      badge: "Narrative & Positioning",
      title: "Category Authority Architecture for High-Growth Tech Founders",
      objective: "Reposition early-to-growth stage technology founders from unknown technical operators into category-defining industry authorities.",
      workUndertaken: "Engineered core brand narratives, crafted 10-point messaging matrix, aligned public profiles, and harmonized visual-verbal identity across corporate assets.",
      deliverables: [
        "Sovereign brand messaging architecture",
        "Executive persona & thought leadership roadmap",
        "Multi-channel content distribution guidelines",
        "Strategic investor narrative alignment"
      ],
      outcomes: "Accelerated category recognition, heightened investor inbound interest, and clear differentiation in crowded SaaS and venture sectors.",
      linkText: "Explore Brand Strategy Services",
      linkHref: "/services#brand-strategy"
    },
    {
      discipline: "Digital PR",
      badge: "Earned National Media",
      title: "Strategic Editorial Feature Syndication across National Press",
      objective: "Secure legitimate, high-credibility media exposure and earned editorial features across premier Indian business publications.",
      workUndertaken: "Developed research-backed story angles, pitched national business desks, authored industry op-eds, and managed sovereign media syndication.",
      deliverables: [
        "Earned editorial features in premier publications (e.g., Mid-day, Times of India group features)",
        "Sovereign crisis communication guardrails",
        "High-DA permanent brand references and do-follow citations",
        "Verified digital press clippings package"
      ],
      outcomes: "Established unassailable third-party credibility, enhanced corporate domain authority, and elevated public brand sentiment.",
      linkText: "Explore Digital PR Solutions",
      linkHref: "/services#digital-pr-celebrity"
    },
    {
      discipline: "Media Features",
      badge: "Published Columns",
      title: "Content Marketing & Lifestyle Op-Eds in Premier Publications",
      objective: "Establish recurring media presence and cultural resonance through thought-provoking lifestyle and business commentary.",
      workUndertaken: "Authored long-form analytical features, culture breakdowns, and lifestyle articles for established mastheads including Forbes India, Femina, and Fortune India platforms.",
      deliverables: [
        "Published editorial bylines and opinion columns",
        "Author profile optimization across media networks",
        "Repurposed social quote tiles and LinkedIn carousels"
      ],
      outcomes: "Over 500,000+ organic readers reached across syndicated editorial columns, driving organic corporate inquiries.",
      linkText: "Read Published Articles",
      linkHref: "/profile#publications"
    },
    {
      discipline: "Podcast Productions",
      badge: "Broadcast Studio",
      title: "The Harshita Dagha Show: 180+ Episode Broadcast Production",
      objective: "Produce an unscripted, intellectually rigorous long-form video podcast focused on business, venture capital, medicine, and human inflection points.",
      workUndertaken: "Turnkey studio production in Bandra Kurla Complex (BKC), Mumbai: 4K multi-camera cinematography, audio engineering, guest briefing, and multi-channel atomization.",
      deliverables: [
        "180+ broadcast-grade 4K studio episodes",
        "Multi-platform distribution across Spotify, Apple Podcasts, and YouTube",
        "SEO-optimized show notes, transcript summaries, and key takeaway guides",
        "Curated 5-clip vertical social reels for LinkedIn and Instagram"
      ],
      outcomes: "5.2M+ verified digital impressions, top 1% global podcast ranking, and recognized as a leading business and executive podcast from India.",
      linkText: "Watch Podcast Episodes",
      linkHref: "/episodes"
    },
    {
      discipline: "Celebrity Collaborations",
      badge: "Celebrity Booking & PR",
      title: "High-Profile Celebrity Appearances & Corporate Gala Bookings",
      objective: "Facilitate seamless celebrity bookings, store inaugurations, private event appearances, and chief guest curation in Mumbai and major Indian hubs.",
      workUndertaken: "End-to-end talent coordination, technical rider negotiation, security protocols, event alignment, and agreed promotional deliverables.",
      deliverables: [
        "Celebrity talent suitability audit and contract negotiation",
        "Event flow integration (keynote, ribbon cutting, or interactive talk)",
        "Media press release and red-carpet photo call coordination",
        "Post-event promotional video highlights"
      ],
      outcomes: "Flawless on-time execution with maximum brand visibility, viral social engagement, and high-impact regional press coverage.",
      linkText: "View Celebrity Booking Services",
      linkHref: "/services#digital-pr-celebrity"
    },
    {
      discipline: "Content & Social Media",
      badge: "Viral Distribution",
      title: "Building an Organic 100K+ Instagram Community (@beingblahblah)",
      objective: "Grow an authentic, high-converting social media following centered on unscripted founder wisdom, business frameworks, and media storytelling.",
      workUndertaken: "Cinematic vertical video editing, psychological hook formulation, daily narrative publishing, and active community dialogue management.",
      deliverables: [
        "Hundreds of high-retention video reels and carousels",
        "Organic audience acquisition strategies with zero fake bots",
        "High-engagement comment section curation and direct message lead routing"
      ],
      outcomes: "Over 100,000 engaged followers, viral reach with multiple reels surpassing 100K+ views, and direct commercial lead generation.",
      linkText: "Visit Beingblahblah Instagram",
      linkHref: "https://www.instagram.com/beingblahblah"
    },
    {
      discipline: "GEO & AI Visibility",
      badge: "AI-Era Frontier",
      title: "Knowledge Graph Engineering & Google AI Overview Dominance",
      objective: "Ensure brand and executive entities are accurately cited, recommended, and surfaced by generative AI search models (ChatGPT, Gemini, Perplexity).",
      workUndertaken: "Semantic schema markup (`ItemList`, `Person`, `Organization`), Wikidata entity reconciliation, authoritative press citation networks, and GEO grounding frameworks.",
      deliverables: [
        "Complete JSON-LD semantic architecture & llms.txt integration",
        "Topical entity grounding across Google Knowledge Graph",
        "Direct citation in Google AI Overviews for primary industry queries"
      ],
      outcomes: "Ranked #1 citation for targeted industry search terms and permanent visibility across leading AI conversational engines.",
      linkText: "Explore GEO Services",
      linkHref: "/services#geo-ai-visibility"
    }
  ];

  return (
    <div className="py-12 md:py-24 bg-[#0c0c0e] text-[#f4f4f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 text-[#d89ba4] border border-white/10 text-xs font-bold uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5 text-[#d89ba4]" />
            <span>BEINGBLAHBLAH VERIFIED PORTFOLIO</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.12] mb-4">
            Our Work: Strategic Campaigns & Media Productions
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            A curated showcase of authentic projects, broadcast podcast masterclasses, national digital PR campaigns, and verified brand transformations executed by Beingblahblah.
          </p>
        </div>

        {/* 7 Disciplines Grid */}
        <div className="space-y-10">
          {caseStudies.map((study, idx) => (
            <div
              key={idx}
              className="p-8 sm:p-10 rounded-3xl bg-[#141418] border border-white/10 hover:border-[#d89ba4]/30 transition-all shadow-xl"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-white/10">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#d89ba4] px-3 py-1 rounded-full bg-[#d89ba4]/10 border border-[#d89ba4]/20">
                      {study.discipline}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                      {study.badge}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                    {study.title}
                  </h2>
                </div>

                <Link
                  href={study.linkHref}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-bold transition-all shrink-0 self-start lg:self-auto border border-white/15"
                >
                  <span>{study.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* 3-Column Breakdown: Objective, Work, Outcomes */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
                
                <div className="space-y-2 bg-[#0c0c0e] p-5 rounded-2xl border border-white/5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">
                    01. Project Objective
                  </span>
                  <p className="text-zinc-300 leading-relaxed font-normal">
                    {study.objective}
                  </p>
                </div>

                <div className="space-y-2 bg-[#0c0c0e] p-5 rounded-2xl border border-white/5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">
                    02. Work Undertaken
                  </span>
                  <p className="text-zinc-300 leading-relaxed font-normal">
                    {study.workUndertaken}
                  </p>
                </div>

                <div className="space-y-2 bg-[#0c0c0e] p-5 rounded-2xl border border-emerald-500/20 bg-emerald-950/10">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block">
                    03. Verified Outcomes
                  </span>
                  <p className="text-emerald-200/90 leading-relaxed font-normal">
                    {study.outcomes}
                  </p>
                </div>

              </div>

              {/* Deliverables List */}
              <div className="mt-6 pt-6 border-t border-white/5">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-3">
                  Key Deliverables Included:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
                  {study.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#d89ba4] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center py-16 px-6 rounded-3xl bg-gradient-to-b from-[#141418] to-[#0c0c0e] border border-white/10">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl font-serif font-bold text-white">
              Ready to Execute Your Next Campaign?
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Partner with Beingblahblah for strategic branding, sovereign digital PR, 4K studio podcasting, and GEO search visibility.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-full bg-[#d89ba4] hover:bg-[#e2a8b1] text-zinc-950 text-xs font-bold uppercase tracking-wider transition-all shadow-md"
              >
                Start a Conversation
              </Link>
              <Link
                href="/services"
                className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-bold uppercase tracking-wider transition-all"
              >
                View Services & Scopes
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

