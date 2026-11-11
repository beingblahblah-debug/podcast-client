import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { 
  Briefcase, 
  ArrowRight,
  Sparkles,
  Layers,
  CheckCircle2,
  Tv,
  Mic,
  TrendingUp,
  Share2,
  Search,
  Cpu,
  Video,
  ExternalLink,
  MessageCircle
} from "lucide-react";
import { InstagramIcon } from "@/components/SocialIcons";
import Hero from "@/components/Hero";
import HostSection from "@/components/HostSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CityHubsSection from "@/components/CityHubsSection";
import TopVideosSection from "@/components/TopVideosSection";
import LatestArticlesSection from "@/components/LatestArticlesSection";
import GeoFaqSection from "@/components/GeoFaqSection";
import { REELS } from "@/data/reels";

export const metadata: Metadata = {
  title: "Beingblahblah | Branding, Public Relations, Digital PR & Media Company",
  description: "Beingblahblah is a branding, public relations, digital marketing, media and brand visibility company helping businesses, founders and brands build recognition, authority and audience trust.",
  alternates: {
    canonical: "https://www.harshitadagha.in",
  },
  openGraph: {
    title: "Beingblahblah | Branding, Public Relations, Digital PR & Media Company",
    description: "Beingblahblah is a branding, public relations, digital marketing, media and brand visibility company helping businesses, founders and brands build recognition, authority and audience trust.",
    url: "https://www.harshitadagha.in",
    type: "website",
  },
};

export default function HomePage() {
  const whatsappUrl = "https://wa.me/918779003799?text=Hi%20Beingblahblah,%20we%20would%20like%20to%20discuss%20branding,%20PR,%20or%20media%20services.";

  // 10 Individual Company Services
  const companyServices = [
    {
      id: "brand-strategy",
      title: "Brand Strategy & Business Storytelling",
      desc: "Transforming complex business offerings into memorable market narratives, distinctive positioning, and cohesive brand identities.",
      badge: "Core Discipline",
      icon: Sparkles,
      href: "/services#brand-strategy"
    },
    {
      id: "public-relations",
      title: "Public Relations & Digital PR",
      desc: "High-impact editorial features, earned media placements, digital publication syndication, and sovereign reputation management.",
      badge: "Media Outreach",
      icon: Tv,
      href: "/services#digital-pr-celebrity"
    },
    {
      id: "celebrity-marketing",
      title: "Celebrity Marketing & Influencer Collaborations",
      desc: "Authentic celebrity alignments, brand endorsements, store inaugurations, private appearances, and high-trust creator partnerships.",
      badge: "High Impact",
      icon: TrendingUp,
      href: "/services#digital-pr-celebrity"
    },
    {
      id: "social-media",
      title: "Social Media Management",
      desc: "End-to-end creative strategy, cinematic vertical video production, community engagement, and multi-channel content engines.",
      badge: "Community Growth",
      icon: Share2,
      href: "/services#social-media"
    },
    {
      id: "personal-branding",
      title: "Personal Branding & LinkedIn Strategy",
      desc: "Positioning founders, investors, CXOs and domain leaders as category-defining authorities with original thought leadership.",
      badge: "Executive Authority",
      icon: Briefcase,
      href: "/services#personal-branding"
    },
    {
      id: "geo-optimization",
      title: "Generative Engine Optimization (GEO)",
      desc: "Knowledge graph architecture and entity trust engineering to guarantee brand citations in ChatGPT, Perplexity, Gemini, and Google AI.",
      badge: "AI-Era Frontier",
      icon: Cpu,
      href: "/services#geo-ai-visibility"
    },
    {
      id: "seo-visibility",
      title: "SEO & AI Search Visibility",
      desc: "High-intent semantic search optimization, topical authority mapping, and structured Schema markup for sustained organic discovery.",
      badge: "Organic Search",
      icon: Search,
      href: "/services#seo-ai-visibility"
    },
    {
      id: "podcast-production",
      title: "Podcast Production & Brand Interviews",
      desc: "Broadcast-grade 4K studio interviews, executive discussions, and audio-video distribution reaching decision-makers nationwide.",
      badge: "Broadcast Studio",
      icon: Mic,
      href: "/services#featured-interview"
    },
    {
      id: "corporate-podcasting",
      title: "Corporate Podcasting",
      desc: "Turnkey enterprise shows, stakeholder communications, and branded video series engineered for B2B industry dominance.",
      badge: "Enterprise Media",
      icon: Video,
      href: "/services#corporate-podcasting"
    },
    {
      id: "content-strategy",
      title: "Content Strategy & Digital Marketing",
      desc: "Data-driven editorial roadmaps, cross-platform video atomization, and commercial storytelling that converts attention into measurable trust.",
      badge: "Full-Funnel Growth",
      icon: Layers,
      href: "/services#content-marketing"
    }
  ];

  // 8 Why Choose Beingblahblah Pillars
  const whyChoosePillars = [
    {
      title: "Integrated Brand Communication",
      desc: "We bring brand strategy, digital PR, podcasting, social media, and search optimization into one synchronized narrative."
    },
    {
      title: "Strategic Storytelling",
      desc: "We extract authentic founder inflection points and enterprise values, crafting stories that audiences remember and respect."
    },
    {
      title: "Digital PR and Media Outreach",
      desc: "Extensive relationships with premier national publications, digital news portals, and top-tier editorial desks across India."
    },
    {
      title: "Brand Visibility Across Digital Platforms",
      desc: "Consistent, multi-channel omnipresence across YouTube, Instagram, LinkedIn, Google Search, and leading podcast platforms."
    },
    {
      title: "Podcast and Video Content Capabilities",
      desc: "Flagship 4K multi-camera studio in Bandra Kurla Complex (BKC), Mumbai, producing broadcast-grade long-form and short-form assets."
    },
    {
      title: "Modern SEO and GEO Strategies",
      desc: "Pioneering Generative Engine Optimization ensuring your brand is prominently recommended by AI search assistants and language models."
    },
    {
      title: "Business-Focused Communication",
      desc: "Every campaign is anchored in real business objectives—customer acquisition, category authority, investor trust, and executive reputation."
    },
    {
      title: "Personalised Campaign Planning",
      desc: "No cookie-cutter agency templates. Bespoke scopes of work tailored to your stage of growth, industry vertical, and timeline."
    }
  ];

  // Featured Reels from @beingblahblah
  const featuredReels = REELS.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Brand Introduction Section: Welcome to Beingblahblah */}
      <section className="py-20 md:py-28 bg-[#0c0c0e] border-b border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-[#d89ba4] uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#d89ba4]" />
              <span>Brand Identity & Mission</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight mb-8">
              Welcome to Beingblahblah
            </h2>

            <div className="space-y-6 text-zinc-300 text-base sm:text-lg leading-relaxed font-normal text-left sm:text-center">
              <p>
                Beingblahblah is a modern brand communication and digital visibility platform focused on helping businesses transform their ideas into recognisable brands.
              </p>
              <p>
                From brand strategy and digital PR to celebrity marketing, podcast production, social media and AI-powered search visibility, Beingblahblah brings multiple communication disciplines together under one brand.
              </p>
              <p className="font-serif italic text-lg sm:text-xl text-[#d89ba4] pt-2">
                Our focus is simple: help brands get noticed, build credibility and create stories that audiences remember.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-bold transition-all shadow-md hover:scale-105 active:scale-95"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#d89ba4] hover:bg-[#e2a8b1] text-zinc-950 text-xs font-bold transition-all shadow-md hover:scale-105 active:scale-95"
              >
                <span>Explore All Offerings</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Services Overview (10 Individual Categories) */}
      <section className="py-24 bg-[#08080a] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d89ba4]/10 text-[#d89ba4] border border-[#d89ba4]/25 text-xs font-semibold uppercase tracking-wider mb-3">
                <Briefcase className="w-3.5 h-3.5 text-[#d89ba4]" />
                <span>Our Capabilities</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight">
                Beingblahblah Business Offerings
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base mt-3 max-w-2xl font-normal">
                Comprehensive, integrated communication solutions designed to elevate founders, emerging ventures, and established enterprises.
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#141418] hover:bg-[#1a1a20] border border-white/15 hover:border-white/30 text-white text-xs font-bold transition-all shrink-0 self-start md:self-auto"
            >
              <span>View Full Services Matrix</span>
              <ArrowRight className="w-4 h-4 text-zinc-400" />
            </Link>
          </div>

          {/* 10 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyServices.map((service, idx) => {
              const IconComp = service.icon;
              return (
                <Link
                  key={idx}
                  href={service.href}
                  className="group p-7 rounded-3xl bg-[#121216] border border-white/10 hover:border-[#d89ba4]/40 hover:bg-[#17171d] hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#d89ba4] group-hover:scale-110 transition-transform">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/10">
                        {service.badge}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-serif font-bold text-white group-hover:text-[#d89ba4] transition-colors mb-2.5">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                      {service.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-zinc-300 group-hover:text-white">
                    <span>Explore Deliverables</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#d89ba4] group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Why Choose Beingblahblah Section */}
      <section className="py-24 bg-[#0c0c0e] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-[#d89ba4] border border-white/10 text-xs font-semibold uppercase tracking-wider mb-3">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Proven Methodology</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight">
              Why Brands Choose Beingblahblah
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-3 leading-relaxed">
              We operate at the intersection of reputation, storytelling, and digital distribution. Here is why industry leaders partner with our firm:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoosePillars.map((pillar, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-3xl bg-[#141418] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-start"
              >
                <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 text-[#d89ba4] font-mono font-bold text-xs flex items-center justify-center mb-4">
                  0{idx + 1}
                </div>
                <h3 className="font-serif font-bold text-base sm:text-lg text-white mb-2 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Media & Podcast Section: Beingblahblah – Conversations That Build Brands */}
      <section className="py-24 bg-[#08080a] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-[#d89ba4] border border-white/10 text-xs font-semibold uppercase tracking-wider mb-3">
                <Mic className="w-3.5 h-3.5 text-[#d89ba4]" />
                <span>Media Property & Broadcasting</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight">
                Beingblahblah – Conversations That Build Brands
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base mt-4 leading-relaxed">
                Beingblahblah creates meaningful conversations with entrepreneurs, business leaders, celebrities, creators and industry experts. Through long-form interviews, podcasts and digital storytelling, the platform helps transform knowledge and experiences into valuable media content.
              </p>
              <div className="mt-3 text-xs text-zinc-400">
                Show Property: <strong className="text-white">The Harshita Dagha Show / Being Blah Blah</strong> · Hosted by <strong className="text-[#d89ba4]">Harshita Dagha Maisheri</strong> (Host and Founder of Beingblahblah).
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link
                href="/episodes"
                className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-bold transition-all shadow-md"
              >
                Browse All Episodes
              </Link>
              <Link
                href="/be-a-guest"
                className="px-5 py-3 rounded-full bg-[#d89ba4] hover:bg-[#e2a8b1] text-zinc-950 text-xs font-bold transition-all shadow-md"
              >
                Podcast Guest Inquiries
              </Link>
            </div>
          </div>

          {/* Top Videos Section Embed */}
          <TopVideosSection />

        </div>
      </section>

      {/* 6. Instagram – Primary Social Brand Section */}
      <section className="py-24 bg-[#0c0c0e] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-rose-500/10 border border-pink-500/20 text-pink-300 text-xs font-bold uppercase tracking-wider mb-3">
                <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
                <span>Primary Social Identity · @beingblahblah</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight">
                Join Our 100K+ Instagram Community
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
                The official Beingblahblah Instagram identity (<a href="https://www.instagram.com/beingblahblah" target="_blank" rel="noopener noreferrer" className="text-[#d89ba4] underline">@beingblahblah</a>) delivers daily business frameworks, viral founder clips, brand strategy breakdowns, and behind-the-scenes masterclasses to over <strong>100,000+ followers</strong>.
              </p>
            </div>

            <a
              href="https://www.instagram.com/beingblahblah"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 hover:opacity-90 text-white text-xs font-bold transition-all shadow-lg hover:scale-105 active:scale-95 shrink-0 self-start md:self-auto"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Follow Beingblahblah (@beingblahblah)</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-80" />
            </a>
          </div>

          {/* 4 Featured Instagram Reel Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredReels.map((reel) => (
              <a
                key={reel.id}
                href={reel.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-3xl overflow-hidden bg-[#141418] border border-white/10 hover:border-pink-500/40 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl"
              >
                <div className="relative aspect-[9/14] w-full overflow-hidden bg-black">
                  <Image
                    src={reel.thumbnail}
                    alt={reel.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-pink-300 border border-white/10 flex items-center gap-1">
                    <InstagramIcon className="w-3 h-3 text-pink-400" />
                    <span>@beingblahblah</span>
                  </div>

                  <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-zinc-300 border border-white/10">
                    {reel.views}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#d89ba4] block mb-1">
                      {reel.category}
                    </span>
                    <h3 className="font-serif font-bold text-sm sm:text-base leading-snug line-clamp-2">
                      {reel.title}
                    </h3>
                  </div>
                </div>

                <div className="p-4 bg-[#141418] flex items-center justify-between text-xs font-semibold text-zinc-300 group-hover:text-pink-300 transition-colors">
                  <span>Watch on Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* 7. Meet Our Founder Section */}
      <HostSection />

      {/* 8. Testimonials Section */}
      <TestimonialsSection />

      {/* 9. City Hubs Section (Preserving Geographic SEO) */}
      <CityHubsSection />

      {/* 10. Latest Articles & Industry Insights Section */}
      <LatestArticlesSection />

      {/* 11. GeoFaqSection (Preserving AI Overview & Semantic Discovery) */}
      <GeoFaqSection />

      {/* 12. Bottom Brand CTA Banner */}
      <section className="py-20 bg-gradient-to-b from-[#0c0c0e] to-[#08080a] border-t border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d89ba4]/10 text-[#d89ba4] border border-[#d89ba4]/20 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Start Your Campaign</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight mb-4">
            Let&apos;s Build Your Brand with Beingblahblah
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            From strategic brand positioning and digital PR to sovereign executive podcasting, connect with our production office to design a visibility roadmap tailored to your business objectives.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-7 py-4 rounded-full bg-[#d89ba4] hover:bg-[#e2a8b1] text-zinc-950 text-xs font-black uppercase tracking-wider transition-all shadow-xl hover:scale-105 active:scale-95"
            >
              Contact Beingblahblah
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded-full bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Direct WhatsApp Desk</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
