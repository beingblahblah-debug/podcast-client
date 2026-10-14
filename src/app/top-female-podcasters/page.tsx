"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import HighlightsPage from "@/app/highlights/page";

export default function TopFemalePodcastersPage() {
  return (
    <div>
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
              href="/blog/top-female-podcasters-in-india-october-2026"
              className="inline-flex items-center gap-1 font-bold text-white hover:text-[#d89ba4] underline underline-offset-4 transition-colors"
            >
              <span>Top Female Podcasters in India</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <span className="text-zinc-600">·</span>
            <Link
              href="/blog/top-podcasters-in-india-october-2026"
              className="inline-flex items-center gap-1 font-medium text-[#d89ba4] hover:text-white underline underline-offset-4 transition-colors"
            >
              <span>Top Podcasters in India (Oct 2026)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      <HighlightsPage />
    </div>
  );
}
