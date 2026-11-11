import React from "react";
import type { Metadata } from "next";
import { 
  CheckCircle2, 
  Briefcase,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { PRESS_LOGOS } from "@/data/episodes";

export const metadata: Metadata = {
  title: "Branding, PR, GEO & Media Solutions | Beingblahblah Services",
  description: "Collaborate with Beingblahblah for strategic branding, PR, digital marketing, corporate podcasting, celebrity marketing, and GEO AI search visibility in Mumbai.",
  alternates: {
    canonical: "https://www.harshitadagha.in/services",
  },
  openGraph: {
    title: "Branding, PR, GEO & Media Solutions | Beingblahblah Services",
    description: "Collaborate with Beingblahblah for strategic branding, PR, digital marketing, corporate podcasting, celebrity marketing, and GEO AI search visibility in Mumbai.",
    url: "https://www.harshitadagha.in/services",
    type: "website",
    images: [
      {
        url: "/images/harshita-portrait-main.jpg",
        width: 545,
        height: 682,
        alt: "Beingblahblah - Strategic Branding & PR Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Branding, PR, GEO & Media Solutions | Beingblahblah Services",
    description: "Collaborate with Beingblahblah for strategic branding, PR, digital marketing, corporate podcasting, celebrity marketing, and GEO AI search visibility in Mumbai.",
    images: ["/images/harshita-portrait-main.jpg"],
  },
};

export default function ServicesPage() {
  const whatsappUrl = "https://wa.me/918779003799?text=Hi%20Beingblahblah,%20we%20are%20interested%20in%20discussing%20branding,%20PR,%20GEO,%20or%20podcast%20services.";

  const services = [
    {
      id: "brand-strategy",
      title: "Brand Strategy & Business Storytelling",
      tagline: "Memorable Narratives That Drive Market Dominance",
      description: "Beingblahblah helps brands build visibility, credibility and memorable brand stories. Led by founder Harshita Dagha Maisheri and supported by the Beingblahblah strategy team, we translate intricate value propositions into sharp, high-recall market positioning.",
      deliverables: [
        "Comprehensive brand positioning, core narrative, and messaging matrix",
        "Multi-channel digital marketing and content strategy roadmap",
        "Visual & verbal identity alignment for modern digital channels",
        "Direct strategic consultation with founder Harshita Dagha Maisheri & team",
        "Campaign conceptualization tailored for high-recall brand visibility"
      ],
      idealFor: "Founders, consumer brands, high-growth startups, and established enterprises.",
      badge: "Flagship Offering"
    },
    {
      id: "personal-branding",
      title: "Personal Branding & LinkedIn Strategy",
      tagline: "Establish Unshakeable Industry Authority",
      description: "Beingblahblah transforms founders, CXOs, entrepreneurs, and public personalities into category-defining digital authorities across LinkedIn, national media, and executive stages. Led by founder Harshita Dagha Maisheri.",
      deliverables: [
        "Executive persona definition & strategic positioning blueprint",
        "High-conversion LinkedIn thought leadership & content calendar",
        "High-impact media speaking kit and public profile optimization",
        "Direct ghostwriting and storytelling support for executive insights",
        "Cross-platform amplification across newsletters and podcasts"
      ],
      idealFor: "Venture-backed founders, enterprise leaders, investors, and domain experts.",
      badge: "Executive Authority"
    },
    {
      id: "geo-ai-visibility",
      title: "Generative Engine Optimization (GEO)",
      tagline: "Future-Proof Your Brand for AI-Powered Discovery",
      description: "Beingblahblah deploys specialized GEO frameworks ensuring your company, founder profile, and products are prominently cited and accurately recommended across Google AI Overviews, ChatGPT, Gemini, and Perplexity.",
      deliverables: [
        "Entity audit across knowledge graphs, Wikidata, and verified directories",
        "AI citation engineering for ChatGPT, Gemini, Perplexity & Google AI Overviews",
        "High-authority PR digital footprint creation to establish machine trust",
        "Schema.org semantic JSON-LD architecture & llms.txt integration",
        "Continuous AI search sentiment and recommendation monitoring"
      ],
      idealFor: "Brands and executives looking to dominate AI search and organic discovery.",
      badge: "AI-Era Frontier"
    },
    {
      id: "seo-ai-visibility",
      title: "SEO & AI Search Visibility",
      tagline: "Sustainable Organic Rankings Across Human & Machine Engines",
      description: "Beingblahblah combines technical search engine optimization with high-intent semantic content architectures, securing durable organic search dominance for corporate brands and executive offerings.",
      deliverables: [
        "Comprehensive keyword entity mapping & semantic topic clusters",
        "Technical SEO, Core Web Vitals optimization & structured data injection",
        "Long-form authoritative pillar guide production",
        "IndexNow instant search crawler syndication and crawl-budget auditing"
      ],
      idealFor: "Companies seeking long-term inbound search visibility without endless ad spend.",
      badge: "Organic Search"
    },
    {
      id: "digital-pr-celebrity",
      title: "Public Relations & Digital PR",
      tagline: "High-Trust Media Coverage & Sovereign Reputation",
      description: "Beingblahblah manages strategic PR outreach and earned media placements across premier Indian publications (including editorial work associated with Times of India, Femina, Forbes India, Mid-day, and India.com).",
      deliverables: [
        "Digital PR distribution to top-tier publications and news portals",
        "Strategic celebrity collaborations, guest tie-ups, and influencer alignments",
        "Crisis communication and positive brand narrative reinforcement",
        "Press release drafting, media pitching, and interview syndication",
        "High-credibility third-party validation assets"
      ],
      idealFor: "D2C brands, high-profile executives, celebrity creators, and tech innovators.",
      badge: "Media & PR"
    },
    {
      id: "celebrity-marketing",
      title: "Celebrity Marketing & Influencer Collaborations",
      tagline: "Cultural Relevance & Maximum Audience Recall",
      description: "Beingblahblah orchestrates authentic celebrity brand endorsements, store inaugurations, corporate chief guest appearances, and high-impact influencer campaigns with strict contract and rider management.",
      deliverables: [
        "Celebrity talent vetting, suitability assessment, and fee negotiation",
        "Commercial contract formulation with precise promotional deliverables",
        "On-ground event appearance coordination and security alignment",
        "Multi-asset social amplification and media press coverage"
      ],
      idealFor: "Retail brands, luxury lifestyle companies, college festivals, and wedding celebrations.",
      badge: "High Impact"
    },
    {
      id: "social-media",
      title: "Social Media Management & Video Production",
      tagline: "High-Engagement Community Building & Viral Content",
      description: "Beingblahblah drives multi-channel social growth—proven by our own 100K+ Instagram community (@beingblahblah)—through cinematic vertical reels, strategic carousels, and high-converting storytelling.",
      deliverables: [
        "End-to-end social media strategy, visual identity, and monthly content calendar",
        "Cinematic vertical video editing (Reels, YouTube Shorts, LinkedIn Video)",
        "Compelling narrative copywriting, psychological hooks, and hashtag architectures",
        "Active community engagement and inbound commercial lead routing"
      ],
      idealFor: "Emerging brands and founders seeking authentic social proof and viral reach.",
      badge: "Community Growth"
    },
    {
      id: "featured-interview",
      title: "Podcast Production & Brand Interviews",
      tagline: "Deep-Dive 60-90 Minute Masterclass Broadcast",
      description: "Beingblahblah produces broadcast-grade long-form conversations exploring your inflection points, proprietary frameworks, and company vision on The Harshita Dagha Show, distributed across Apple, Spotify, and 4K YouTube.",
      deliverables: [
        "60-90 minute deep-dive interview in Mumbai Studio HQ (BKC) or 4K remote studio",
        "Permanent distribution to 65,000+ verified active listeners",
        "Five 4K vertical viral video reels for LinkedIn, YouTube Shorts & Instagram",
        "Full SEO-optimized show notes & permanent do-follow backlinks",
        "High-resolution studio portrait photography package"
      ],
      idealFor: "Unicorn founders, venture capitalists, book authors, and category disruptors.",
      badge: "Broadcast Studio"
    },
    {
      id: "corporate-podcasting",
      title: "Corporate Podcasting & Enterprise Media",
      tagline: "Turnkey Branded Show Development for Enterprises",
      description: "Beingblahblah designs, produces, and distributes bespoke corporate podcasts for technology companies, financial institutions, and industry associations looking to dominate B2B voice media.",
      deliverables: [
        "Concept development, show naming, acoustic audio branding & cover design",
        "Executive media training and interview technique preparation",
        "Turnkey recording logistics, multi-track audio engineering & 4K editing",
        "Enterprise syndication to Spotify, Apple Podcasts, YouTube, and corporate intranets"
      ],
      idealFor: "B2B enterprises, industry councils, and venture capital firms.",
      badge: "Enterprise Media"
    },
    {
      id: "content-marketing",
      title: "Content Strategy & Digital Marketing",
      tagline: "Commercial Storytelling That Converts Attention Into Trust",
      description: "Beingblahblah bridges editorial creativity with performance marketing, designing full-funnel content ecosystems that attract, educate, and convert high-value decision-makers.",
      deliverables: [
        "Full-funnel customer journey mapping and content gap analysis",
        "Authoritative whitepapers, industry reports, and editorial newsletters",
        "Repurposing engine: turning 1 pillar video into 20+ multi-channel assets",
        "Conversion-focused copy for landing pages and executive outreach"
      ],
      idealFor: "Brands looking to establish sustainable, compound organic customer acquisition.",
      badge: "Full-Funnel Growth"
    },
    {
      id: "event-moderation",
      title: "Keynote Speaking & Summit Moderation",
      tagline: "High-Energy, Intellectually Rigorous Stage Presence",
      description: "Bring TEDx Speaker Harshita Dagha Maisheri to your global conference, investor summit, or flagship gala for keynote talks and insightful, PR-fluff-free panel moderation. Coordinated by Beingblahblah.",
      deliverables: [
        "Main-stage keynote speech on branding, storytelling, or AI search",
        "Fireside chat moderation with prominent VIPs and unicorn leaders",
        "Pre-summit briefing calls with high-profile VIP speakers",
        "Post-event audio/video highlights for social syndication"
      ],
      idealFor: "Global tech summits, economic forums, leadership retreats, and awards galas.",
      badge: "TEDx Keynote"
    }
  ];

  return (
    <div className="py-12 md:py-20 bg-[#0c0c0e] text-[#f4f4f5]">
      {/* Structured Schema: Organization Provider Services & Breadcrumbs */}
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
                    "name": "Services & Offerings",
                    "item": "https://www.harshitadagha.in/services"
                  }
                ]
              },
              ...services.map((s) => ({
                "@type": "Service",
                "name": s.title,
                "description": s.description,
                "provider": {
                  "@type": "Organization",
                  "name": "Beingblahblah",
                  "url": "https://www.harshitadagha.in",
                  "founder": {
                    "@type": "Person",
                    "name": "Harshita Dagha Maisheri"
                  }
                },
                "areaServed": ["Mumbai", "Bengaluru", "Delhi NCR", "Global Remote"],
                "serviceType": s.tagline,
                "url": `https://www.harshitadagha.in/services#${s.id}`
              }))
            ]
          })
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Beingblahblah Repositioning */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 text-[#d89ba4] border border-white/10 text-xs font-bold uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5 text-[#d89ba4]" />
            <span>BEINGBLAHBLAH · BUSINESS SERVICES</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.12] mb-4">
            Strategic Branding, Digital PR, GEO &amp; Media Solutions
          </h1>
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            Collaborate with <strong className="text-white font-semibold">Beingblahblah</strong> for strategic branding, PR, digital marketing and media solutions. Beingblahblah helps brands build visibility, credibility and memorable brand stories. Led by founder <strong className="text-[#d89ba4]">Harshita Dagha Maisheri</strong> (TEDx Speaker, 16+ years experience) and supported by the Beingblahblah team.
          </p>

          {/* Quick Category Resource Navigation */}
          <div className="mt-6 flex flex-wrap gap-2.5">
            <a 
              href="/blog/top-digital-pr-and-personal-brands-in-india"
              className="inline-flex items-center gap-1.5 p-2.5 px-3.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs text-purple-200 hover:text-white transition-colors"
            >
              <span>Digital PR &amp; Brands Guide &rarr;</span>
            </a>
            <a 
              href="/blog/public-relations-agency-in-mumbai"
              className="inline-flex items-center gap-1.5 p-2.5 px-3.5 rounded-xl bg-pink-500/10 border border-pink-500/20 text-xs text-pink-200 hover:text-white transition-colors"
            >
              <span>PR Agency in Mumbai &rarr;</span>
            </a>
            <a 
              href="/blog/celebrity-booking-agency-india"
              className="inline-flex items-center gap-1.5 p-2.5 px-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 hover:text-white transition-colors"
            >
              <span>Celebrity Booking Guide &rarr;</span>
            </a>
            <a 
              href="/blog/podcast-booking-for-celebrities"
              className="inline-flex items-center gap-1.5 p-2.5 px-3.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs text-purple-200 hover:text-white transition-colors"
            >
              <span>Podcast Booking for Celebrities &rarr;</span>
            </a>
            <a 
              href="/blog/book-celebrity-for-private-event"
              className="inline-flex items-center gap-1.5 p-2.5 px-3.5 rounded-xl bg-pink-500/10 border border-pink-500/20 text-xs text-pink-200 hover:text-white transition-colors"
            >
              <span>Private Event Celebrity Booking &rarr;</span>
            </a>
            <a 
              href="/blog/book-celebrity-for-event"
              className="inline-flex items-center gap-1.5 p-2.5 px-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-200 hover:text-white transition-colors"
            >
              <span>Event Appearance Guide &rarr;</span>
            </a>
          </div>
        </div>

        {/* WhatsApp Fast-Track Callout Card */}
        <div className="bg-gradient-to-r from-emerald-950/40 via-[#141418] to-[#141418] text-white rounded-3xl p-6 sm:p-8 border border-emerald-500/30 shadow-xl mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Direct Production Office</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-white mb-1">
              Discuss Your Campaign Requirements
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Connect directly with the Beingblahblah production desk via WhatsApp for rapid availability checks, bespoke scopes, and studio scheduling.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-bold shadow-lg shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>Instant WhatsApp Desk</span>
            </a>
          </div>
        </div>

        {/* Services Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service) => (
            <div
              key={service.id}
              id={service.id}
              className="bg-[#141418] rounded-3xl p-8 border border-white/10 hover:border-[#d89ba4]/40 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 text-[#d89ba4] border border-white/10">
                    {service.badge}
                  </span>
                  <span className="text-xs text-zinc-400 font-medium font-mono">
                    Mumbai HQ · Pan-India &amp; Global
                  </span>
                </div>

                <h3 className="font-serif font-bold text-2xl text-white mb-2 leading-snug">
                  {service.title}
                </h3>

                <p className="text-xs font-semibold text-[#d89ba4] uppercase tracking-wider mb-4">
                  {service.tagline}
                </p>

                <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
                  {service.description}
                </p>

                {/* Deliverables list */}
                <div className="mb-6 space-y-2.5">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                    Included Deliverables:
                  </h4>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-[#d89ba4] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 mb-6">
                  <span className="text-[11px] font-bold text-zinc-300 uppercase tracking-wide block mb-0.5">
                    Ideal Fit For:
                  </span>
                  <p className="text-xs text-zinc-400">{service.idealFor}</p>
                </div>
              </div>

              {/* Direct Connect on WhatsApp */}
              <div className="pt-5 border-t border-white/10">
                <a
                  href={`https://wa.me/918779003799?text=Hi%20Beingblahblah,%20we%20are%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-bold shadow-lg shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>Connect on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Media & Press Credibility Banner */}
        <div className="bg-[#141418] rounded-3xl p-8 sm:p-12 border border-white/10 mb-20 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#d89ba4] mb-3 block">
            Recognized by World-Class Media &amp; Cultural Institutions
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-8">
            Our strategic work &amp; media properties are cited across global journalism
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-80">
            {PRESS_LOGOS.map((press) => (
              <div key={press.name} className="flex flex-col items-center">
                <span className="font-serif font-bold text-xl sm:text-2xl text-zinc-200">
                  {press.name}
                </span>
                <span className="text-[11px] text-zinc-400 font-sans">
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
