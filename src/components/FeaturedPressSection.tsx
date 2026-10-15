import React from "react";
import Link from "next/link";
import { Newspaper, ExternalLink } from "lucide-react";

export default function FeaturedPressSection() {
  return (
    <section 
      id="featured-press-citations"
      aria-label="Featured On & External Press Citations"
      className="rounded-3xl bg-[#141418] border border-white/10 p-6 sm:p-8 shadow-xl"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <span className="p-2 rounded-xl bg-[#d89ba4]/10 text-[#d89ba4] border border-[#d89ba4]/20">
            <Newspaper className="w-4 h-4" />
          </span>
          <div>
            <h3 className="font-serif font-bold text-lg sm:text-xl text-white">
              Featured On &amp; Verifiable Press Coverage
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
            <span className="font-bold text-white group-hover:text-[#d89ba4] transition-colors">ANI &amp; Startup Reporter</span>
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
            Author &amp; columnist covering women in leadership, empowerment, and creative entrepreneurship.
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
            Industry forecast: &ldquo;Most Brands Will Not Survive the 2026 Content Crash.&rdquo;
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
            Crafting Meaningful Brand Narratives Through Human Storytelling &amp; Authenticity.
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
  );
}
