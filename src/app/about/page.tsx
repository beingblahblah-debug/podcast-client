import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Briefcase, 
  Target, 
  Tv, 
  Cpu, 
  Mic, 
  Share2, 
  TrendingUp, 
  Globe2,
  Video,
  Award
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Beingblahblah – Our Story, Vision & Brand Philosophy",
  description: "Learn about Beingblahblah: a brand communication and digital visibility platform bringing together branding, PR, media, content, marketing and storytelling.",
  alternates: {
    canonical: "https://www.harshitadagha.in/about",
  },
  openGraph: {
    title: "About Beingblahblah – Our Story, Vision & Brand Philosophy",
    description: "Learn about Beingblahblah: a brand communication and digital visibility platform bringing together branding, PR, media, content, marketing and storytelling.",
    url: "https://www.harshitadagha.in/about",
    type: "website",
  },
};

export default function AboutPage() {
  const whatsappUrl = "https://wa.me/918779003799?text=Hi%20Beingblahblah,%20I%20would%20like%20to%20learn%20more%20about%20your%20branding%20and%20PR%20solutions.";

  const problemsSolved = [
    {
      title: "Fragmented Brand Messaging",
      problem: "Brands hire separate PR firms, social media agencies, and video editors who produce disconnected narratives.",
      solution: "Beingblahblah unifies positioning, PR, executive presence, and multi-channel content under one sovereign strategy."
    },
    {
      title: "The Invisibility of High-Value Founders",
      problem: "Visionary operators build transformative products, but remain virtually invisible to investors, media, and top talent.",
      solution: "We build category-defining personal brands and Tier-1 media profiles that convert domain expertise into recognized authority."
    },
    {
      title: "AI Search & Algorithmic Erasure",
      problem: "Traditional SEO is obsolete; AI engines like ChatGPT, Gemini, and Perplexity fail to cite ungrounded brands.",
      solution: "Our Generative Engine Optimization (GEO) audits knowledge graphs and engineers authoritative PR footprints to ensure persistent AI recommendations."
    },
    {
      title: "Low-Recall Advertising Waste",
      problem: "Standard social ad campaigns generate temporary vanity metrics with near-zero long-term audience trust.",
      solution: "We produce unscripted 4K podcast interviews, authentic editorial features, and viral content reels that establish enduring brand affinity."
    }
  ];

  const coreServices = [
    { name: "Brand Strategy & Storytelling", desc: "Core narrative design, value proposition alignment, and messaging architectures." },
    { name: "Public Relations & Digital PR", desc: "National media outreach, editorial placements, press syndication, and sovereign reputation management." },
    { name: "Celebrity & Influencer Marketing", desc: "High-trust celebrity alignments, store inaugurations, event chief guest bookings, and creator tie-ups." },
    { name: "Podcast Production & Broadcasting", desc: "Broadcast-grade 4K studio interviews, executive conversations, and multi-platform distribution." },
    { name: "Generative Engine Optimization (GEO)", desc: "Entity trust engineering to guarantee brand citations in AI answer engines and Google AI Overviews." },
    { name: "Personal Branding & LinkedIn Strategy", desc: "Bespoke executive thought leadership, op-ed ghostwriting, and media kit preparation." }
  ];

  return (
    <div className="py-12 md:py-24 bg-[#0c0c0e] text-[#f4f4f5]">
      
      {/* Schema Markup for Organization & WebPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Beingblahblah – Our Story, Vision & Brand Philosophy",
            "url": "https://www.harshitadagha.in/about",
            "description": "Beingblahblah is a brand communication and digital visibility platform bringing together branding, PR, media, content, marketing and storytelling.",
            "mainEntity": {
              "@type": "Organization",
              "name": "Beingblahblah",
              "url": "https://www.harshitadagha.in",
              "logo": "https://www.harshitadagha.in/images/logo.png",
              "founder": {
                "@type": "Person",
                "name": "Harshita Dagha Maisheri",
                "jobTitle": "Founder",
                "url": "https://www.harshitadagha.in/profile"
              },
              "sameAs": [
                "https://www.instagram.com/beingblahblah",
                "https://www.linkedin.com/in/harshitadagha",
                "https://www.youtube.com/@beingblahblah"
              ]
            }
          })
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-4xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 text-[#d89ba4] border border-white/10 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#d89ba4]" />
            <span>COMPANY PROFILE & PHILOSOPHY</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.12] mb-6">
            About Beingblahblah – Our Story, Vision & Brand Philosophy
          </h1>
          <p className="text-xl sm:text-2xl font-serif text-[#d89ba4] leading-relaxed mb-6 font-normal">
            &ldquo;Beingblahblah is a brand communication and digital visibility platform bringing together branding, PR, media, content, marketing and storytelling.&rdquo;
          </p>
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
            In an era where attention is fleeting and digital noise is deafening, businesses do not just need promotion—they need recognition, sovereign authority, and enduring audience trust. Beingblahblah was built to solve this exact communication dilemma.
          </p>
        </div>

        {/* Section 1: What is Beingblahblah? */}
        <section className="mb-20 p-8 sm:p-12 rounded-3xl bg-[#141418] border border-white/10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#d89ba4]">
                The Platform
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-snug">
                What is Beingblahblah?
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Beingblahblah is an integrated brand communication and visibility agency headquartered in Mumbai, India. We specialize in transforming ambitious founders, category disruptors, and established enterprises into unforgettable market authorities.
              </p>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Unlike traditional advertising shops or transactional PR wire services, Beingblahblah unifies multiple strategic communication disciplines under one roof: brand strategy, digital PR, media production, executive thought leadership, and AI search discovery.
              </p>
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold text-zinc-300">
                <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10">Bespoke Brand Strategy</span>
                <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10">Tier-1 Digital PR</span>
                <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10">Broadcast 4K Podcasting</span>
                <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10">GEO & AI Search Engine Discovery</span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#0c0c0e] p-6 rounded-2xl border border-white/10 space-y-4">
              <h3 className="font-serif font-bold text-lg text-white">
                Brand Core Beliefs
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Substance over vanity:</strong> True influence comes from authentic expertise, not shallow follower numbers.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Conversations build brands:</strong> Unscripted dialogues create deeper human connections than scripted commercials.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>AI readiness is mandatory:</strong> Modern brands must be structured for discovery by both humans and machine algorithms.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Why the Brand Was Established & Problems It Solves */}
        <section className="mb-20">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d89ba4] block mb-2">
              Business Purpose
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Why Beingblahblah Was Established
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 leading-relaxed">
              For over a decade, businesses have struggled with disjointed agency vendor ecosystems. Beingblahblah was created to eliminate the gap between brand narrative, media relations, and digital distribution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {problemsSolved.map((item, idx) => (
              <div 
                key={idx}
                className="p-7 rounded-3xl bg-[#141418] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 text-[#d89ba4] font-mono font-bold text-xs flex items-center justify-center mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="font-serif font-bold text-lg text-white mb-2">
                    {item.title}
                  </h3>
                  <div className="space-y-3 text-xs sm:text-sm text-zinc-300">
                    <p className="text-red-300/80 bg-red-950/20 p-3 rounded-xl border border-red-900/30">
                      <strong>The Problem:</strong> {item.problem}
                    </p>
                    <p className="text-emerald-300/90 bg-emerald-950/20 p-3 rounded-xl border border-emerald-900/30">
                      <strong>Beingblahblah Solution:</strong> {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Service Categories & Integrated Approach */}
        <section className="mb-20 p-8 sm:p-12 rounded-3xl bg-[#141418] border border-white/10 shadow-xl">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d89ba4] block mb-2">
              Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Our Integrated Approach to Brand Communication
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2">
              We operate across 6 unified pillars, ensuring that an executive or corporate brand speaks with consistent clarity across every touchpoint:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#0c0c0e] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-serif font-bold text-base text-white mb-2">
                    {service.name}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                <Link
                  href="/services"
                  className="mt-4 pt-3 border-t border-white/5 text-[11px] font-semibold text-[#d89ba4] hover:text-white flex items-center justify-between"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Media & Podcast Activities */}
        <section className="mb-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-purple-950/20 via-[#141418] to-[#141418] border border-purple-500/20 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-purple-300">
                Media & Broadcasting Wing
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-snug">
                Conversations That Build Brands: The Beingblahblah Media Property
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                As part of its media wing, Beingblahblah produces <em>The Harshita Dagha Show</em> (also widely known as <em>Being Blah Blah</em>). The show is a sovereign long-form audio-video podcast recorded in our flagship 4K broadcast studio in Bandra Kurla Complex (BKC), Mumbai.
              </p>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                With over 180+ published episodes and more than 5.2 million audience impressions, the platform provides founders, venture capitalists, and industry icons with an intellectually honest forum to share their journeys without PR fluff.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link
                href="/episodes"
                className="w-full py-3.5 px-5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white text-xs font-bold text-center transition-all"
              >
                Explore Podcast Episodes
              </Link>
              <Link
                href="/be-a-guest"
                className="w-full py-3.5 px-5 rounded-full bg-[#d89ba4] hover:bg-[#e2a8b1] text-zinc-950 text-xs font-bold text-center transition-all"
              >
                Inquire to Be a Guest
              </Link>
            </div>
          </div>
        </section>

        {/* Section 5: Founder & Leadership Section */}
        <section className="mb-20 p-8 sm:p-12 rounded-3xl bg-[#141418] border border-white/10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-4 relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/images/harshita-portrait-main.jpg"
                  alt="Harshita Dagha Maisheri - Founder of Beingblahblah"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#d89ba4]">
                Leadership & Strategic Vision
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Meet Our Founder: Harshita Dagha Maisheri
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Beingblahblah was founded by <strong>Harshita Dagha Maisheri</strong>, a branding, public relations and digital marketing professional with over 16 years of experience across the Indian and global media landscape.
              </p>
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Her professional journey spans deep work in brand strategy, high-stakes digital PR, celebrity marketing, and content engineering. As the founder, she leads the company&apos;s strategic vision, shapes its client counsel, and hosts its flagship broadcast interviews.
              </p>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Her writing and media experience includes work associated with premier publications such as <em>The Times of India</em>, <em>Femina</em>, <em>Forbes India</em>, <em>Fortune India</em>, <em>Mid-day</em>, <em>Hindustan Times</em>, and <em>India.com</em>.
              </p>
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <Link
                  href="/profile"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#d89ba4] hover:bg-[#e2a8b1] text-zinc-950 text-xs font-bold transition-all shadow-md"
                >
                  <span>View Founder Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="https://youtu.be/AUFI1ELJyjk?si=1yXM7qTrkqAb0JY6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-semibold transition-all"
                >
                  <Video className="w-3.5 h-3.5 text-white" />
                  <span>Watch TEDx Keynote</span>
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Section 6: Vision for the Future & CTA */}
        <section className="text-center py-16 px-6 rounded-3xl bg-gradient-to-b from-[#141418] to-[#0c0c0e] border border-white/10">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#d89ba4]">
              Looking Ahead
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Our Vision for the Future
            </h2>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              As artificial intelligence continues to reshape how humanity discovers information and evaluates credibility, Beingblahblah is committed to pioneering brand communication frameworks that unite undeniable entity authority with authentic, human-centered storytelling.
            </p>
            <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-full bg-[#d89ba4] hover:bg-[#e2a8b1] text-zinc-950 text-xs font-black uppercase tracking-wider transition-all shadow-xl hover:scale-105 active:scale-95"
              >
                Let&apos;s Build Your Brand
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-wider transition-all"
              >
                Direct WhatsApp Inquiries
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
