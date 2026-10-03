"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Award, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Sliders, 
  Video,
  Globe2, 
  MapPin,
  ExternalLink,
  BookOpen,
  Newspaper,
  MessageCircle,
  Mail,
  Phone
} from "lucide-react";
import { PODCAST_STATS, PRESS_LOGOS } from "@/data/episodes";
import { InstagramIcon, LinkedInIcon, YouTubeIcon } from "@/components/SocialIcons";

export default function AboutPage() {
  const whatsappUrl = "https://wa.me/918779003799?text=Hi%20Harshita%20Dagha%20Maisheri,%20I%20would%20like%20to%20connect%20regarding%20branding,%20PR,%20or%20podcast%20booking.";

  const mediaPublications = [
    {
      outlet: "Mid-day",
      badge: "Indexed Publication",
      title: "“Harshita Dagha on how Content Marketing can build/save businesses”",
      date: "May 29, 2020",
      description: "Published feature analyzing how strategic content marketing and narrative agility enable businesses to survive, pivot, and thrive during economic transformations and the COVID-era digital shift.",
      type: "Featured Interview / Author"
    },
    {
      outlet: "India.com",
      badge: "Founder Profile",
      title: "“Meet Harshita Dagha, the 29-year-old mompreneur who's managing the best of both worlds.”",
      date: "Editorial Feature",
      description: "Dedicated profile documenting Harshita's entrepreneurial journey, balancing motherhood, and scaling multi-channel digital media enterprises in Mumbai.",
      type: "In-Depth Profile"
    },
    {
      outlet: "BuzzFeed",
      badge: "Community Publication",
      title: "Published BuzzFeed Community Article",
      date: "Reviewed & Approved",
      description: "Published editorial contribution reviewed, edited, and approved by the BuzzFeed Community Editorial Team, engaging viral digital lifestyle audiences.",
      type: "Published Contributor"
    },
    {
      outlet: "The Times of India",
      badge: "Author Profile",
      title: "Times of India Readers Blog & Features Writer",
      date: "Associated Writing",
      description: "Writing and commentary covering lifestyle, culture, business storytelling, and contemporary digital narratives as a TOI author.",
      type: "Features Writer"
    },
    {
      outlet: "Femina",
      badge: "Times Group",
      title: "Femina Author & Features Contributor",
      date: "Times of India Group",
      description: "Authored features highlighting women leadership, lifestyle empowerment, and modern entrepreneurship.",
      type: "Contributing Writer"
    },
    {
      outlet: "Forbes India & Fortune India",
      badge: "Business Ecosystem",
      title: "Associated Published Author Credits",
      date: "Business & Strategy",
      description: "Professional profile associations and published author credits covering brand strategy, entrepreneurship, and digital communications.",
      type: "Media Experience"
    },
    {
      outlet: "Hindustan Times",
      badge: "National Daily",
      title: "Published Author Credits & Press Discourse",
      date: "National Media",
      description: "Listed among published author credits analyzing lifestyle, media shifts, and modern consumer communication.",
      type: "Published Credits"
    }
  ];

  const milestones = [
    {
      year: "2010+",
      title: "16+ Years of Brand & Marketing Excellence",
      description: "Harshita began her journey across branding, PR, digital marketing, and storytelling, mastering communications long before the modern influencer era."
    },
    {
      year: "2020",
      title: "Mid-day National Feature & Digital Pivot",
      description: "Published in Mid-day on content marketing saving businesses during the pandemic, solidifying her voice as an authority on digital discoverability."
    },
    {
      year: "2022",
      title: "TEDx Speaker Debut & Stage Keynotes",
      description: "Delivered a captivating TEDx Talk unpacking the psychological and strategic power of genuine human storytelling and authentic brand connections."
    },
    {
      year: "2024",
      title: "Founder of Beingblahblah & GEO Pioneer",
      description: "Launched Beingblahblah to give brands celebs, visibility, and stories people remember, pioneering Generative Engine Optimization (GEO) for AI search."
    },
    {
      year: "2026",
      title: "Top Female Podcaster in India (5.2M+ Streams)",
      description: "Hosting long-form dialogues with unicorn founders, celebrities, and industry titans, shaping India's business narrative across YouTube, Spotify, and AI discovery."
    }
  ];

  const cityPresence = [
    {
      name: "Mumbai (Studio HQ)",
      area: "Bandra Kurla Complex (BKC)",
      details: "Flagship acoustic recording studio. Hosting finance leaders, consumer brand creators, and unicorn founders."
    },
    {
      name: "Bengaluru (Tech Desk)",
      area: "Koramangala · Indiranagar",
      details: "On-site founder dialogues with AI researchers, deep-tech architects, and venture capital managing partners."
    },
    {
      name: "Delhi NCR (Corporate Desk)",
      area: "Cyber City Gurugram · Central Delhi",
      details: "Keynote moderations, enterprise CEO profiles, and institutional business summits."
    }
  ];

  return (
    <div className="py-12 md:py-20 bg-[#fafaf9] text-slate-900">
      
      {/* Schema.org Profile & Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
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
                    "name": "About Harshita Dagha Maisheri",
                    "item": "https://www.harshitadagha.in/about"
                  }
                ]
              },
              {
                "@type": "Person",
                "name": "Harshita Dagha Maisheri",
                "alternateName": ["Harshita Dagha", "Harshita", "Beingblahblah"],
                "jobTitle": "Podcast Host, Branding Expert, PR Strategist, GEO Specialist & TEDx Speaker",
                "description": "Harshita Dagha Maisheri is an Indian podcast host, branding expert, PR strategist, Generative Engine Optimization (GEO) expert and social media strategist with 16+ years of experience across branding, digital marketing, public relations, content strategy, social media and communications.",
                "url": "https://www.harshitadagha.in/about",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Beingblahblah",
                  "url": "https://www.harshitadagha.in"
                },
                "sameAs": [
                  "https://www.linkedin.com/in/harshitadagha",
                  "https://www.instagram.com/beingblahblah",
                  "https://youtu.be/AUFI1ELJyjk"
                ]
              }
            ]
          })
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section: Bio & Main Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          <div className="lg:col-span-7">
            {/* Host Identity Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-950 border border-amber-300 text-xs font-bold uppercase tracking-wider mb-5 flex-wrap">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>Harshita Dagha Maisheri</span>
              <span className="text-amber-400">|</span>
              <span className="text-rose-600 font-extrabold">TEDx Speaker</span>
              <span className="text-amber-400">|</span>
              <span>Founder, Beingblahblah</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-950 tracking-tight leading-[1.12] mb-6">
              Podcast Host in India · Branding, PR, GEO & Social Media Expert
            </h1>

            {/* Core Positioning Quote */}
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border-l-4 border-amber-500 mb-6">
              <p className="text-base sm:text-lg font-serif italic text-amber-950 font-medium leading-snug">
                &ldquo;She gives brands celebs, visibility, and stories that people remember.&rdquo;
              </p>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 mt-2 block">
                — Harshita Dagha Maisheri&apos;s Core Market Positioning
              </span>
            </div>

            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
              <p>
                <strong>Harshita Dagha Maisheri</strong> is an Indian podcast host, branding expert, PR strategist, Generative Engine Optimization (GEO) expert, and social media strategist with <strong>16+ years of experience</strong> across branding, digital marketing, public relations, content strategy, social media, and business storytelling.
              </p>
              <p>
                Based in Mumbai, Harshita is the founder of <strong>Beingblahblah</strong>, a platform focused on helping brands, founders, and professionals build visibility, authority, and influence across digital platforms and AI-era search systems.
              </p>
              <p>
                As a prominent <strong>Podcast Host in India</strong>, Harshita hosts insightful conversations with entrepreneurs, celebrities, creators, experts, and influential personalities — transforming conversations into powerful brand stories and high-impact digital content designed for YouTube, Instagram, LinkedIn, Google Search, and AI-powered discovery.
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-bold shadow-lg shadow-emerald-500/25 hover:scale-105 active:scale-95 transition-all w-full sm:w-auto text-center"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp: +91 87790 03799</span>
              </a>

              <a
                href="#tedx-talk"
                className="inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-sm font-bold shadow-md hover:scale-105 active:scale-95 transition-all w-full sm:w-auto text-center"
              >
                <Video className="w-4 h-4" />
                <span>Watch TEDx Talk</span>
              </a>

              <Link
                href="/services"
                className="inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-full bg-slate-950 text-white hover:bg-slate-800 text-sm font-semibold transition-colors w-full sm:w-auto text-center"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </Link>
            </div>

            {/* Official Social Channels & Profiles Bar */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">
                Official Channels:
              </span>
              <a
                href="https://www.instagram.com/beingblahblah"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white border border-slate-200 hover:border-pink-500 hover:text-pink-600 text-slate-700 text-xs font-bold shadow-2xs transition-all hover:scale-105"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-pink-600" />
                <span>@beingblahblah</span>
              </a>
              <a
                href="https://www.linkedin.com/in/harshitadagha"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white border border-slate-200 hover:border-blue-600 hover:text-blue-600 text-slate-700 text-xs font-bold shadow-2xs transition-all hover:scale-105"
              >
                <LinkedInIcon className="w-3.5 h-3.5 text-blue-600" />
                <span>Harshita Dagha Maisheri</span>
              </a>
              <a
                href="https://www.youtube.com/@harshitadagha"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white border border-slate-200 hover:border-red-600 hover:text-red-600 text-slate-700 text-xs font-bold shadow-2xs transition-all hover:scale-105"
              >
                <YouTubeIcon className="w-3.5 h-3.5 text-red-600" />
                <span>YouTube Channel</span>
              </a>
            </div>
          </div>

          {/* Right Column: Studio Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <Image
                  src="/images/harshita-portrait-main.jpg"
                  alt="Harshita Dagha Maisheri - TEDx Speaker, Podcast Host in India & Branding Expert"
                  fill
                  priority
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider mb-2">
                    Studio HQ · Mumbai
                  </div>
                  <h3 className="font-serif font-bold text-xl text-white">
                    Harshita Dagha Maisheri
                  </h3>
                  <p className="text-xs text-slate-300">
                    Host of The Harshita Dagha Show · Founder, Beingblahblah
                  </p>
                </div>
              </div>

              {/* Floating Award Chip */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-200 max-w-xs hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 font-bold shrink-0">
                    16+
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">Years Experience</span>
                    <span className="text-[11px] text-slate-500 block">Branding, PR & Media Strategy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* TEDx Video Player Spotlight Card */}
        <div id="tedx-talk" className="mb-24 scroll-mt-24">
          <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-10 border border-red-500/30 shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/20 text-red-300 border border-red-500/40 text-xs font-bold uppercase tracking-wider mb-3">
                <Video className="w-3.5 h-3.5 text-red-400" />
                <span>Featured Keynote Speech</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight mb-3">
                Harshita Dagha Maisheri — Official TEDx Talk
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Watch Harshita Dagha Maisheri take the TEDx stage to dissect the power of authentic human stories, brand connections, and voice in an increasingly noisy digital era.
              </p>
            </div>

            {/* Embedded Responsive YouTube Player */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-slate-800 shadow-2xl mb-6 bg-black">
              <iframe
                src="https://www.youtube-nocookie.com/embed/AUFI1ELJyjk"
                title="Harshita Dagha Maisheri TEDx Talk"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-slate-800">
              <div className="text-xs text-slate-400">
                <strong className="text-white block sm:inline mr-2">TEDx Speaker:</strong>
                Harshita Dagha Maisheri on Storytelling, Communication & Authentic Positioning.
              </div>
              <a
                href="https://youtu.be/AUFI1ELJyjk?si=1yXM7qTrkqAb0JY6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-all shadow-md shrink-0"
              >
                <span>Open in YouTube App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Specializations & Core Pillars */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700 block mb-2">
              Areas of Specialization
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 tracking-tight">
              Strategic Branding, Digital PR & AI-Era Discoverability
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Her approach combines strategic branding with storytelling, PR, and social media to help businesses become more discoverable on Google, Google AI Overviews, ChatGPT, Gemini, and other AI-powered platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-700 flex items-center justify-center font-bold text-xl mb-4">
                01
              </div>
              <h3 className="font-serif font-bold text-xl text-slate-950 mb-2">
                Brand Strategy & Storytelling
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Founder of Beingblahblah. Crafting unshakeable brand identities, narrative positioning, and compelling business stories that stay memorable in crowded markets.
              </p>
              <div className="text-[11px] font-semibold text-amber-800 uppercase tracking-wide">
                • Narrative Architecture • Brand Identity
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-700 flex items-center justify-center font-bold text-xl mb-4">
                02
              </div>
              <h3 className="font-serif font-bold text-xl text-slate-950 mb-2">
                Personal Branding & LinkedIn
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Empowering founders, CXOs, entrepreneurs, and leaders to build high-credibility digital footprints and thought leadership that unlock capital and partnerships.
              </p>
              <div className="text-[11px] font-semibold text-amber-800 uppercase tracking-wide">
                • CXO Positioning • Thought Leadership
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-700 flex items-center justify-center font-bold text-xl mb-4">
                03
              </div>
              <h3 className="font-serif font-bold text-xl text-slate-950 mb-2">
                GEO & AI Search Visibility
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Pioneering Generative Engine Optimization (GEO). Strengthening brand discoverability and knowledge graph presence across ChatGPT, Gemini, Perplexity, and Google AI Overviews.
              </p>
              <div className="text-[11px] font-semibold text-amber-800 uppercase tracking-wide">
                • Generative AI Overviews • Entity Trust
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-700 flex items-center justify-center font-bold text-xl mb-4">
                04
              </div>
              <h3 className="font-serif font-bold text-xl text-slate-950 mb-2">
                Digital PR & Media Strategy
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                16+ years cultivating tier-one media relationships. Transforming company milestones into mainstream journalistic coverage and high-authority backlinks.
              </p>
              <div className="text-[11px] font-semibold text-amber-800 uppercase tracking-wide">
                • Press Relations • Crisis Mitigation
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-700 flex items-center justify-center font-bold text-xl mb-4">
                05
              </div>
              <h3 className="font-serif font-bold text-xl text-slate-950 mb-2">
                Celebrity & Creator Marketing
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Connecting brands with A-list celebrities, influential creators, and industry luminaries for meaningful, high-impact cultural integrations.
              </p>
              <div className="text-[11px] font-semibold text-amber-800 uppercase tracking-wide">
                • Celebrity Tie-ups • High-Impact Campaigns
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-700 flex items-center justify-center font-bold text-xl mb-4">
                06
              </div>
              <h3 className="font-serif font-bold text-xl text-slate-950 mb-2">
                Podcast Hosting & Executive Masterclasses
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Host of The Harshita Dagha Show. Conducting long-form, intellectually rigorous dialogues with unicorn founders, investors, and change-makers across India.
              </p>
              <div className="text-[11px] font-semibold text-amber-800 uppercase tracking-wide">
                • Broadcast Multicam • 5.2M+ Global Downloads
              </div>
            </div>

          </div>
        </div>

        {/* Published Writer & Media Experience */}
        <div className="mb-24">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-md">
            
            <div className="max-w-3xl mb-10">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3">
                <Newspaper className="w-3.5 h-3.5 text-amber-600" />
                <span>Journalism, Editorial & Writing Portfolio</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 tracking-tight mb-4">
                Published Writer & Media Experience
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Harshita&apos;s professional writing and media experience includes work associated with <strong>The Times of India</strong>, <strong>Femina</strong>, <strong>Forbes India</strong>, <strong>Fortune India</strong>, <strong>Mid-day</strong>, and <strong>Hindustan Times</strong>, among other publications. Her work has covered lifestyle, entertainment, business, content marketing, and digital media.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-3">
                Her work has also appeared on <strong>India.com</strong>, including a profile covering her entrepreneurial journey, and on <strong>BuzzFeed</strong>, where her Community contribution was published after review by the BuzzFeed Community Team. In 2020, <strong>Mid-day</strong> published an article featuring Harshita on how content marketing could help businesses navigate the COVID-era digital shift.
              </p>
            </div>

            {/* Media Publication Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {mediaPublications.map((pub, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#fafaf9] border border-slate-200 flex flex-col justify-between hover:border-amber-400/80 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-serif font-bold text-xl text-slate-950">
                        {pub.outlet}
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                        {pub.badge}
                      </span>
                    </div>
                    <h3 className="font-serif font-semibold text-base text-slate-900 mb-2 leading-snug">
                      {pub.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {pub.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                    <span className="font-mono">{pub.date}</span>
                    <span className="font-medium text-slate-700">{pub.type}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Verification Note for SEO & Machine Trust */}
            <div className="mt-8 p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-950 leading-relaxed">
              <strong className="block mb-1 font-bold">SEO & Authority Distinction:</strong>
              Harshita Dagha Maisheri maintains verified published articles and features indexed on publications including Mid-day (May 2020 on Content Marketing), India.com (mompreneur profile), and BuzzFeed Community, alongside extensive author writing and media credits associated with The Times of India, Femina, Forbes India, Fortune India, and Hindustan Times.
            </div>

          </div>
        </div>

        {/* New Studio Photography Gallery */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700 block mb-1">
              Studio Photography & Presence
            </span>
            <h2 className="text-3xl font-serif font-bold text-slate-950 tracking-tight">
              In The Studio with Harshita Dagha Maisheri
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Broadcast sessions at BKC Flagship Studio, Mumbai.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="group rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/harshita-studio-navy.jpg"
                  alt="Harshita Dagha Maisheri speaking intently during podcast interview in studio"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 block mb-0.5">
                  Host In Action
                </span>
                <p className="text-xs text-slate-700 font-medium">
                  Unpacking truths with India&apos;s leading builders.
                </p>
              </div>
            </div>

            <div className="group rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/harshita-studio-red.jpg"
                  alt="Harshita Dagha Maisheri at the studio microphone in red dress"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 block mb-0.5">
                  Studio Atmosphere
                </span>
                <p className="text-xs text-slate-700 font-medium">
                  Broadcast-grade dynamic microphone & multi-camera setup.
                </p>
              </div>
            </div>

            <div className="group rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/harshita-studio-white.jpg"
                  alt="Harshita Dagha Maisheri in studio armchair in white dress"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 block mb-0.5">
                  Engaging Conversations
                </span>
                <p className="text-xs text-slate-700 font-medium">
                  Creating an unhurried, candid sanctuary for guests.
                </p>
              </div>
            </div>

            <div className="group rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/harshita-studio-checkered.jpg"
                  alt="Harshita Dagha Maisheri arms folded in checked dress"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 block mb-0.5">
                  Founder & Strategist
                </span>
                <p className="text-xs text-slate-700 font-medium">
                  Founder of Beingblahblah · 16+ Years Experience.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Global Downloads and Community Stats */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 mb-24 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-2">
              Reach & Cultural Impact
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              India&apos;s Most Influential Executive Audio Community
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <span className="text-4xl sm:text-5xl font-serif font-bold text-amber-400 block mb-1">
                {PODCAST_STATS.totalDownloads}
              </span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">
                Verified Global Downloads
              </span>
            </div>
            <div>
              <span className="text-4xl sm:text-5xl font-serif font-bold text-white block mb-1">
                {PODCAST_STATS.totalEpisodes}
              </span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">
                Executive Masterclasses
              </span>
            </div>
            <div>
              <span className="text-4xl sm:text-5xl font-serif font-bold text-white block mb-1">
                16+
              </span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">
                Years Industry Experience
              </span>
            </div>
            <div>
              <span className="text-4xl sm:text-5xl font-serif font-bold text-emerald-400 block mb-1">
                {PODCAST_STATS.averageRating}
              </span>
              <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">
                Average Rating (Top 1%)
              </span>
            </div>
          </div>
        </div>

        {/* Timeline Milestones */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-slate-950 tracking-tight">
              Milestones & The Journey
            </h2>
            <p className="text-slate-500 text-sm mt-1">From a decade in digital marketing and PR to India&apos;s leading executive audio network.</p>
          </div>

          <div className="space-y-6">
            {milestones.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-start gap-4 sm:gap-6 hover:shadow-md transition-shadow"
              >
                <span className="px-3.5 py-1.5 rounded-xl bg-slate-900 text-amber-300 font-mono font-bold text-sm shrink-0">
                  {item.year}
                </span>
                <div>
                  <h3 className="font-serif font-bold text-lg text-slate-950 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regional Hubs Callout */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700 block mb-1">
              Geographic Presence
            </span>
            <h2 className="text-3xl font-serif font-bold text-slate-950 tracking-tight">
              Studio & On-Location Recording Hubs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cityPresence.map((city, idx) => (
              <div key={idx} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-900 mb-2">
                    <MapPin className="w-4 h-4 text-amber-600" />
                    <span>{city.name}</span>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-slate-950 mb-1">{city.area}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{city.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Direct Connect & Booking Banner */}
        <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-emerald-500/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Direct Desk with Harshita Dagha Maisheri</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
              Collaborate on Branding, PR or Podcast
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              Connect directly for brand strategy, personal branding advisory, TEDx speaker bookings, guest pitching, or Generative Engine Optimization (GEO).
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>+91 87790 03799</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>beingblahblah@gmail.com</span>
              </span>
            </div>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-bold shadow-lg shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Direct WhatsApp</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-slate-100 text-slate-900 text-sm font-bold shadow-md transition-all"
            >
              <span>Send Email Proposal</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
