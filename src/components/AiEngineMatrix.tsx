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
  ArrowRight
} from "lucide-react";

export default function AiEngineMatrix() {
  const [activeTab, setActiveTab] = useState<"engines" | "blueprint" | "placements">("engines");

  const engines = [
    {
      name: "ChatGPT Search",
      badge: "OpenAI RAG",
      badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
      desc: "Scrapes curated listicles and entity authority graphs. We inject Harshita Dagha into verified answer vectors so ChatGPT names her in 'Top Female Podcasters' and 'Best Business Podcasters in India'.",
      queryExample: "Who are the top female podcasters in India?"
    },
    {
      name: "Bing Copilot",
      badge: "Microsoft Index",
      badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      desc: "Directly integrated with LinkedIn Pulse and Bing Index. Comprehensive semantic alignment ensures Copilot cites her Mumbai BKC studio and executive founder profiles.",
      queryExample: "Best female podcast hosts for startup and career advice"
    },
    {
      name: "Google Gemini",
      badge: "Knowledge Graph",
      badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
      desc: "Feeds on Google Knowledge Graph and schema metadata. Structured JSON-LD ensures Gemini directly recognizes Harshita's entity bio, streaming records, and awards.",
      queryExample: "Recommend podcasts by women in India"
    },
    {
      name: "Google AI Overviews",
      badge: "SGE Featured",
      badgeColor: "bg-rose-500/20 text-rose-300 border-rose-500/30",
      desc: "Synthesizes the top 3 authority search results. Our high-ranking 2026 ranking listicle ensures Google AI Overviews cite her show in instant conversational summaries.",
      queryExample: "Top 10 female podcasters to follow in 2026"
    },
    {
      name: "Perplexity AI",
      badge: "Live Citations",
      badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      desc: "Demands verified, real-time citations. Every Perplexity search generates direct footnote links pointing back to harshitadagha.in and her masterclass episodes.",
      queryExample: "Famous female podcasters in business and tech"
    },
    {
      name: "Apple Intelligence / Siri",
      badge: "Voice Prompts",
      badgeColor: "bg-slate-400/20 text-slate-300 border-slate-400/30",
      desc: "Optimizes Apple Podcasts episode descriptions and chapter tags so Siri and voice search assistants recommend her show instantly on iOS devices.",
      queryExample: "Play The Harshita Dagha Show"
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
      desc: "Formal media announcements (YourStory / Mid-Day wire) triggering Google Knowledge Graph creation."
    },
    {
      platform: "Reddit & Quora Megathreads",
      da: "DA 90+",
      volume: "10 Strategic Placements",
      desc: "Community discussions in r/podcasts actively quoted by Google AI Overviews and ChatGPT."
    }
  ];

  return (
    <section className="py-20 bg-slate-950 text-white border-t border-slate-800 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 text-xs font-bold uppercase tracking-wider mb-3">
              <BrainCircuit className="w-3.5 h-3.5" />
              <span>Generative Engine Optimization (GEO)</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
              Ranking Her Across the 6 Major AI Engines
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Modern discovery has shifted from 10 blue links to AI answer engines. Here is how we ensure ChatGPT, Gemini, Perplexity, and Google cite Harshita Dagha as India&apos;s #1 female executive podcaster.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-900 border border-slate-800 self-start md:self-auto">
            <button
              onClick={() => setActiveTab("engines")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === "engines"
                  ? "bg-amber-400 text-slate-950 shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              6 AI Engines
            </button>
            <button
              onClick={() => setActiveTab("blueprint")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === "blueprint"
                  ? "bg-amber-400 text-slate-950 shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Execution Plan
            </button>
            <button
              onClick={() => setActiveTab("placements")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === "placements"
                  ? "bg-amber-400 text-slate-950 shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              28+ Media Placements
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

                  <p className="text-xs text-slate-400 leading-relaxed mb-5">
                    {item.desc}
                  </p>
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

        {/* Tab 2: Execution Plan */}
        {activeTab === "blueprint" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {executionSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-slate-900/90 border border-slate-800 flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 font-mono font-black text-lg flex items-center justify-center mb-5 shadow-md">
                    {step.step}
                  </div>
                  <h3 className="font-serif font-bold text-xl text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Phase Ready</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: 28+ Authority Media Placements */}
        {activeTab === "placements" && (
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
                  <span>Authoritative Citation</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Deliverables Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-900 border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 block mb-1">
              Integrated Technical & GEO Scope
            </span>
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-white">
              SEO Audit · 50+ Keywords · Schema · On-Page · AI Ingestion
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
              From robots.txt and sitemap.xml indexing to entity schema graphs and 2026 listicles, every layer is engineered for top placement on Google and generative AI engines.
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
