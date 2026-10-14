import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Trophy, Sparkles, ArrowRight, ArrowLeft } from "lucide-react";
import Top10Section from "@/components/Top10Section";

export const metadata: Metadata = {
  title: "Top 10 Podcasters National Directory (October 2026) | Harshita Dagha",
  description: "Explore India's Top 10 Podcasters National Directory and listener chart-toppers. Updated for October 2026 with criteria, verified rankings, and executive insights.",
  alternates: {
    canonical: "https://www.harshitadagha.in/top-10",
  },
  openGraph: {
    title: "Top 10 Podcasters National Directory (October 2026) | Harshita Dagha",
    description: "Explore India's Top 10 Podcasters National Directory and listener chart-toppers.",
    url: "https://www.harshitadagha.in/top-10",
    type: "website",
  },
};

export default function Top10Page() {
  return (
    <main className="min-h-screen bg-[#0c0c0e] text-[#f4f4f5]">
      {/* Updated for October 2026 Banner */}
      <div className="bg-gradient-to-r from-[#d89ba4]/20 via-[#181822] to-[#121218] border-b border-[#d89ba4]/30 px-4 py-3 sm:py-3.5 text-center">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-zinc-200">
          <span className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-[#d89ba4] bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10 text-[11px]">
            <Sparkles className="w-3.5 h-3.5" />
            Updated for October 2026
          </span>
          <span>
            Read our fresh national rankings &amp; 7-point quality scorecard:
          </span>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <Link
              href="/blog/top-podcasters-in-india-october-2026"
              className="inline-flex items-center gap-1 font-bold text-[#d89ba4] hover:text-white underline underline-offset-4 transition-colors"
            >
              <span>Top Podcasters in India (Oct 2026)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <span className="text-zinc-600">·</span>
            <Link
              href="/blog/top-female-podcasters-in-india-october-2026"
              className="inline-flex items-center gap-1 font-medium text-zinc-300 hover:text-white underline underline-offset-4 transition-colors"
            >
              <span>Top Female Podcasters</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Directory Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        <div className="flex items-center gap-2 text-xs text-zinc-500 font-medium mb-6">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span className="text-zinc-300 font-bold">Top 10 Directory</span>
        </div>

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 text-[#d89ba4] border border-white/10 text-xs font-bold uppercase tracking-wider mb-4">
            <Trophy className="w-3.5 h-3.5 text-[#d89ba4]" />
            <span>National Directory &amp; Hall of Fame</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight mb-4">
            Top 10 Podcasters National Directory
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
            The national directory of chart-topping executive conversations, viral video masterclasses, and verified media broadcasts across India.
          </p>
        </div>
      </div>

      {/* Top 10 Full Page Section */}
      <Top10Section isFullPage={true} />
    </main>
  );
}
