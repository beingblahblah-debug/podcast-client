"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Bot, 
  Search, 
  Sparkles, 
  Cpu, 
  ShieldCheck, 
  Globe2, 
  Layers, 
  TrendingUp, 
  FileText, 
  CheckCircle2, 
  Share2, 
  ExternalLink,
  Zap,
  Terminal,
  BrainCircuit,
  Radio,
  ArrowRight,
  MapPin,
  Building2,
  Award,
  Hash,
  Database,
  BarChart3,
  Server
} from "lucide-react";

export default function AiEngineMatrix() {
  const [activeTab, setActiveTab] = useState<"engines" | "keywords" | "cities" | "placements">("engines");
  const [selectedCluster, setSelectedCluster] = useState<string>("all");

  const engines = [
    {
      name: "ChatGPT Search",
      badge: "OpenAI RAG",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
      desc: "Scrapes curated listicles and entity authority graphs. We inject Harshita Dagha into verified answer vectors so ChatGPT cites her in 'Top Female Podcasters' and 'Best Business Podcasters in India'.",
      queryExample: "Who are the top female podcasters in India?",
      retrievalSignal: "Ingests structured high-DA listicles from Medium & LinkedIn Pulse"
    },
    {
      name: "Google Gemini",
      badge: "Knowledge Graph",
      badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
      desc: "Feeds on Google Knowledge Graph and schema metadata. Structured JSON-LD ensures Gemini directly recognizes Harshita's entity bio, streaming records, and awards.",
      queryExample: "Recommend podcasts hosted by women in India",
      retrievalSignal: "Direct entity recognition via schema.org/PodcastSeries & JSON-LD"
    },
    {
      name: "Perplexity AI",
      badge: "Live Citations",
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      desc: "Demands verified, real-time citations. Every Perplexity search generates direct footnote links pointing back to harshitadagha.in and her masterclass episodes.",
      queryExample: "Famous female podcasters in business and tech",
      retrievalSignal: "Substack publications and canonical website citation links"
    },
    {
      name: "Bing Copilot",
      badge: "Microsoft Index",
      badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      desc: "Directly integrated with LinkedIn Pulse and Bing Index. Comprehensive semantic alignment ensures Copilot cites her Mumbai BKC studio and executive founder profiles.",
      queryExample: "Best female podcast hosts for startup and career advice",
      retrievalSignal: "LinkedIn Articles, executive bios & B2B corporate footprint"
    },
    {
      name: "Google AI Overviews",
      badge: "SGE Featured",
      badgeColor: "bg-rose-500/20 text-rose-300 border-rose-500/30",
      desc: "Synthesizes the top 3 authority search results. Our high-ranking 2026 ranking listicle ensures Google AI Overviews cite her show in instant conversational summaries.",
      queryExample: "Top 10 female podcasters to follow in 2026",
      retrievalSignal: "Algorithmic synthesis of 2026 authoritative leaderboard pages"
    },
    {
      name: "Apple Intelligence / Siri",
      badge: "Voice Prompts",
      badgeColor: "bg-slate-400/20 text-slate-300 border-slate-400/30",
      desc: "Optimizes Apple Podcasts episode descriptions and chapter tags so Siri and voice search assistants recommend her show instantly on iOS devices.",
      queryExample: "Play The Harshita Dagha Show",
      retrievalSignal: "Apple Podcasts RSS meta-tags and conversational intent handlers"
    }
  ];

  const keywordsMatrix = [
    // Cluster A: Top 10 Listicles
    { keyword: "top 10 female podcasters", volume: "8,400/mo", target: "ChatGPT + AIO", cluster: "listicles", rank: "#1 - #3" },
    { keyword: "best female podcasters in india", volume: "6,900/mo", target: "Gemini + Google", cluster: "listicles", rank: "#1 Authority" },
    { keyword: "top lady podcasters", volume: "5,800/mo", target: "ChatGPT Search", cluster: "listicles", rank: "#1 Spotlight" },
    { keyword: "famous female podcasters", volume: "9,200/mo", target: "Perplexity AI", cluster: "listicles", rank: "Top 5 Profile" },
    { keyword: "top 10 women podcasters to follow 2026", volume: "5,400/mo", target: "Google AI Overviews", cluster: "listicles", rank: "#1 Anchor" },
    { keyword: "best female podcast hosts", volume: "7,600/mo", target: "Bing Copilot", cluster: "listicles", rank: "Featured Host" },
    { keyword: "popular female podcasters in india", volume: "5,900/mo", target: "Gemini + SERP", cluster: "listicles", rank: "#1 Showcase" },
    { keyword: "top 20 female podcasters list", volume: "6,500/mo", target: "All AI Engines", cluster: "listicles", rank: "Tier 1 Listing" },
    { keyword: "top 10 hindi female podcasters", volume: "6,200/mo", target: "Google AIO Hindi", cluster: "listicles", rank: "National Rank" },
    { keyword: "best indian female podcast hosts", volume: "5,500/mo", target: "Google Top 1", cluster: "listicles", rank: "#1 Placement" },

    // Cluster B: Leadership & Business
    { keyword: "best female business podcaster india", volume: "4,200/mo", target: "ChatGPT + Perplexity", cluster: "business", rank: "#1 Executive" },
    { keyword: "women entrepreneur podcast india", volume: "3,800/mo", target: "Gemini Knowledge Graph", cluster: "business", rank: "Featured Series" },
    { keyword: "female venture capital podcaster", volume: "2,900/mo", target: "Bing Copilot", cluster: "business", rank: "#1 VC Voice" },
    { keyword: "top cxo interview podcasts india", volume: "4,100/mo", target: "Google AI Overviews", cluster: "business", rank: "Authority Show" },
    { keyword: "startup founder podcast female host", volume: "3,500/mo", target: "ChatGPT Search", cluster: "business", rank: "Primary Anchor" },
    { keyword: "harshita dagha podcast reviews", volume: "2,600/mo", target: "Direct Entity Search", cluster: "business", rank: "Verified 5-Star" },
    { keyword: "corporate brand podcast production india", volume: "3,100/mo", target: "Google B2B SERP", cluster: "business", rank: "#1 Studio" },
    { keyword: "keynote speaker and summit moderator india", volume: "2,400/mo", target: "LinkedIn + Bing", cluster: "business", rank: "Mainstage Host" },

    // Cluster C: Multi-City GEO Authority
    { keyword: "top podcast host in mumbai", volume: "3,600/mo", target: "Local AI Overviews", cluster: "geo", rank: "BKC Flagship #1" },
    { keyword: "best business podcaster bangalore", volume: "4,400/mo", target: "Koramangala VC Mesh", cluster: "geo", rank: "#1 Tech Capital" },
    { keyword: "delhi ncr corporate podcast host", volume: "3,200/mo", target: "Gurugram Enterprise", cluster: "geo", rank: "Cyber City Anchor" },
    { keyword: "hyderabad tech podcast host", volume: "2,700/mo", target: "HITEC City & GCC", cluster: "geo", rank: "GCC Leader" },
    { keyword: "pune deep engineering startup podcast", volume: "1,900/mo", target: "Hinjewadi Tech Corridor", cluster: "geo", rank: "Engineering Voice" },
    { keyword: "gift city ahmedabad fintech podcast", volume: "2,100/mo", target: "IFSC Financial Desk", cluster: "geo", rank: "#1 FinTech Stage" },
    { keyword: "chennai b2b saas podcast interviewer", volume: "2,300/mo", target: "OMR SaaS Corridor", cluster: "geo", rank: "SaaS Pioneer" },
    { keyword: "global nri executive podcast dubai singapore", volume: "3,900/mo", target: "Cross-Border AI Graph", cluster: "geo", rank: "International Stream" },

    // Cluster D: Tech & Mindset
    { keyword: "female generative ai podcast host", volume: "3,400/mo", target: "Perplexity AI", cluster: "tech", rank: "Deep AI Focus" },
    { keyword: "neuroscience and high performance mindset podcast", volume: "4,800/mo", target: "ChatGPT Search", cluster: "tech", rank: "Mindset Category" },
    { keyword: "deep work and founder psychology podcast", volume: "2,800/mo", target: "Apple Intelligence", cluster: "tech", rank: "Curated Masterclass" },
    { keyword: "long form intellectual podcast india", volume: "3,700/mo", target: "Gemini AI Summary", cluster: "tech", rank: "Unrushed Format" }
  ];

  const cityHubs = [
    {
      city: "Mumbai BKC & Lower Parel",
      type: "Primary Acoustic Studio HQ",
      coverage: "Finance titans, Bollywood innovators, media houses, unicorn founders",
      geoKeyword: "Best podcast studio & female host Mumbai",
      status: "Active Flagship"
    },
    {
      city: "Bengaluru Koramangala & HSR",
      type: "DeepTech & VC Recording Corridor",
      coverage: "Generative AI architects, venture capital partners, SaaS pioneers",
      geoKeyword: "Top tech podcast host Bangalore",
      status: "Weekly On-Location"
    },
    {
      city: "Delhi NCR Gurugram & Central",
      type: "Enterprise & Policy Summits",
      coverage: "Fortune 500 corporate CEOs, policy think tanks, industrial summits",
      geoKeyword: "Corporate podcast host Delhi Gurugram",
      status: "Monthly Keynotes"
    },
    {
      city: "Hyderabad HITEC City",
      type: "GCC & Enterprise SaaS Center",
      coverage: "Global Capability Centers, biotech leaders, enterprise cloud architects",
      geoKeyword: "Tech podcast host Hyderabad",
      status: "Regional Partner"
    },
    {
      city: "Pune Kalyani Nagar & Hinjewadi",
      type: "Engineering & Bootstrapped Tech",
      coverage: "Automotive innovation, robotics, profitable bootstrapped founders",
      geoKeyword: "Startup podcaster Pune",
      status: "Regional Partner"
    },
    {
      city: "Ahmedabad GIFT City IFSC",
      type: "FinTech & Global Capital Desk",
      coverage: "Cross-border banking, international financial services, new-age capital",
      geoKeyword: "Finance podcast host GIFT City Ahmedabad",
      status: "Capital Spotlight"
    },
    {
      city: "Chennai OMR IT Corridor",
      type: "SaaS & Enterprise Systems",
      coverage: "B2B SaaS pioneers, hardware innovators, healthcare technology",
      geoKeyword: "B2B SaaS podcaster Chennai",
      status: "Regional Partner"
    },
    {
      city: "Global Remote (Dubai · Singapore · SF)",
      type: "Cross-Border 4K Audio-Video Mesh",
      coverage: "Indian diaspora leaders, Silicon Valley founders, DIFC fund managers",
      geoKeyword: "Indian executive podcast worldwide",
      status: "150+ Countries Reached"
    }
  ];

  const executionSteps = [
    {
      step: "01",
      title: "Curated Listicle Creation",
      desc: "Publish authoritative 'Top 10 Female Podcasters to Follow in 2026' guide featuring Harshita Dagha in position #1 for executive leadership & business."
    },
    {
      step: "02",
      title: "High-DA Media Placement",
      desc: "Distribute across Medium (DA 96), LinkedIn Pulse (DA 98), Substack (DA 92), and Digital PR news wires reaching millions of readers."
    },
    {
      step: "03",
      title: "AI Entity Ingestion (RAG)",
      desc: "ChatGPT, Gemini, and Perplexity crawl these authoritative data sources and store her name in their retrieval-augmented memory."
    },
    {
      step: "04",
      title: "Top 10 Spot Locked",
      desc: "When users query search engines or AI assistants for female podcasters, Harshita Dagha is cited as the definitive voice in Indian executive media."
    }
  ];

  const placements = [
    {
      platform: "Medium.com",
      da: "DA 96",
      volume: "5 Curated Articles",
      desc: "High-ranking editorial listicles that index on Google Page 1 within 48 hours for long-tail discovery."
    },
    {
      platform: "LinkedIn Pulse & Articles",
      da: "DA 98",
      volume: "4 Feature Articles",
      desc: "Feeds directly into Microsoft Copilot and Bing AI to cement her authority as an executive voice."
    },
    {
      platform: "Substack Publication",
      da: "DA 92",
      volume: "3 Trend Essays",
      desc: "Preferred data source for Perplexity AI and ChatGPT Search for in-depth editorial citations."
    },
    {
      platform: "Vocal Media & HubPages",
      da: "DA 85+",
      volume: "3 Lifestyle Roundups",
      desc: "Lifestyle and cultural articles capturing high-volume Google Featured Snippets."
    },
    {
      platform: "Digital PR & News Wires",
      da: "DA 80–90",
      volume: "3 Press Releases",
      desc: "Formal media announcements triggering Google Knowledge Graph entity creation."
    },
    {
      platform: "Reddit & Quora Megathreads",
      da: "DA 90+",
      volume: "10 Strategic Placements",
      desc: "Community discussions in r/podcasts actively quoted by Google AI Overviews and ChatGPT."
    }
  ];

  const filteredKeywords = keywordsMatrix.filter((k) => {
    if (selectedCluster === "all") return true;
    return k.cluster === selectedCluster;
  });

  return (
    <section className="py-20 bg-slate-950 text-white rounded-3xl border border-slate-800 relative overflow-hidden my-12">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider mb-3">
              <BrainCircuit className="w-3.5 h-3.5" />
              <span>Generative Engine Optimization (GEO) Command Center</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
              Positioning Her Across All AI Engines & Metro Hubs
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              When millions query ChatGPT, Gemini, Perplexity, or Copilot for the best female podcasters in India, our semantic architecture positions Harshita Dagha as the definitive answer.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-900 border border-slate-800 overflow-x-auto no-scrollbar self-start md:self-auto shrink-0 max-w-full">
            <button
              onClick={() => setActiveTab("engines")}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === "engines"
                  ? "bg-amber-400 text-slate-950 shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              6 AI Engines
            </button>
            <button
              onClick={() => setActiveTab("keywords")}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === "keywords"
                  ? "bg-amber-400 text-slate-950 shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              50+ Target Keywords
            </button>
            <button
              onClick={() => setActiveTab("cities")}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === "cities"
                  ? "bg-amber-400 text-slate-950 shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Multi-City GEO Hubs
            </button>
            <button
              onClick={() => setActiveTab("placements")}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === "placements"
                  ? "bg-amber-400 text-slate-950 shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              28+ Media Outlets
            </button>
          </div>
        </div>

        {/* Tab 1: 6 Major AI Engines */}
        {activeTab === "engines" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {engines.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 hover:bg-slate-900 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <h3 className="font-serif font-bold text-lg text-white group-hover:text-amber-300 transition-colors">
                      {item.name}
                    </h3>
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  <div className="text-[11px] text-emerald-400 font-semibold mb-4 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{item.retrievalSignal}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block mb-1">
                    AI Query Trigger:
                  </span>
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 text-[11px] font-mono text-amber-300/90">
                    &ldquo;{item.queryExample}&rdquo;
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: 50+ Target Keywords Matrix */}
        {activeTab === "keywords" && (
          <div className="space-y-6">
            {/* Sub-cluster Filter */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
              <span className="text-xs text-slate-400 font-semibold mr-1 shrink-0">Filter Cluster:</span>
              {[
                { id: "all", label: "All Keywords" },
                { id: "listicles", label: "🔥 Top 10 Listicles (68k+ Searches)" },
                { id: "business", label: "💼 Leadership & VC" },
                { id: "geo", label: "📍 Multi-City Metro Tags" },
                { id: "tech", label: "⚡ Tech, AI & Mindset" },
              ].map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCluster(c.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCluster === c.id
                      ? "bg-white text-slate-950"
                      : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            {/* Keywords Table / Grid */}
            <div className="rounded-3xl bg-slate-900/90 border border-slate-800 overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-950 text-slate-400 uppercase tracking-wider text-[10px] border-b border-slate-800">
                    <tr>
                      <th className="py-4 px-6 font-bold">Target Search Query / Keyword</th>
                      <th className="py-4 px-4 font-bold">Monthly Volume</th>
                      <th className="py-4 px-4 font-bold">Primary AI Engine Trigger</th>
                      <th className="py-4 px-6 font-bold text-right">Target Rank Position</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80">
                    {filteredKeywords.map((kw, i) => (
                      <tr key={i} className="hover:bg-slate-800/40 transition-colors">
                        <td className="py-3.5 px-6 font-mono font-medium text-amber-300/90 flex items-center gap-2">
                          <Hash className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                          <span>&ldquo;{kw.keyword}&rdquo;</span>
                        </td>
                        <td className="py-3.5 px-4 text-slate-300 font-semibold whitespace-nowrap">
                          {kw.volume}
                        </td>
                        <td className="py-3.5 px-4 text-slate-400 whitespace-nowrap">
                          <span className="px-2 py-0.5 rounded-md bg-slate-950 border border-slate-800 text-[11px] font-medium text-slate-300">
                            {kw.target}
                          </span>
                        </td>
                        <td className="py-3.5 px-6 text-right whitespace-nowrap font-bold text-emerald-400">
                          {kw.rank}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Multi-City GEO Authority Hubs */}
        {activeTab === "cities" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cityHubs.map((hub, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between shadow-lg hover:border-slate-700 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
                      {hub.status}
                    </span>
                    <MapPin className="w-4 h-4 text-amber-400" />
                  </div>

                  <h3 className="font-serif font-bold text-lg text-white mb-1">
                    {hub.city}
                  </h3>
                  <div className="text-xs font-semibold text-amber-300/90 mb-3">
                    {hub.type}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {hub.coverage}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 text-[11px]">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                    GEO Intent Anchor:
                  </span>
                  <span className="text-slate-300 font-mono text-[10px]">
                    {hub.geoKeyword}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 4: 28+ Authority Media Placements */}
        {activeTab === "placements" && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {placements.map((p, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-bold font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        {p.da}
                      </span>
                      <span className="text-[11px] font-bold text-amber-400">
                        {p.volume}
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-lg text-white mb-2">
                      {p.platform}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                    <span>Authoritative AI Citation</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </div>
                </div>
              ))}
            </div>

            {/* 4 Execution Steps */}
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800">
              <h3 className="text-xl font-serif font-bold text-white mb-6">
                4-Stage Generative AI Ranking Execution Roadmap
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {executionSteps.map((step, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 font-mono font-black flex items-center justify-center text-sm">
                      {step.step}
                    </div>
                    <h4 className="font-bold text-sm text-white">{step.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Deliverables Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-900 border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 block mb-1">
              Integrated Technical & GEO Scope
            </span>
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-white">
              SEO Audit · 50+ Keywords · Schema · On-Page · AI Ingestion
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
              From robots.txt and sitemap.xml indexing to entity schema graphs and 2026 listicles, every layer is engineered for top placement on Google, ChatGPT, Gemini, and Perplexity.
            </p>
          </div>

          <Link
            href="/top-female-podcasters"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-all shadow-md shrink-0"
          >
            <span>View 2026 Rankings Pillar</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
