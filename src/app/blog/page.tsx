"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Sparkles, 
  ArrowRight,
  ExternalLink,
  Newspaper,
  BookOpen,
  Calendar,
  Clock,
  MessageCircle,
  Award
} from "lucide-react";
import { MEDIA_PUBLICATIONS, OFFICIAL_PROFILE } from "@/data/publications";

export default function BlogPublicationsPage() {
  return (
    <div className="py-12 md:py-20 bg-[#0c0c0e] text-[#f4f4f5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 text-[#d89ba4] border border-white/10 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#d89ba4]" />
            <span>Media Coverage & Author Archives</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
            Harshita Dagha Maisheri · Publications & Press
          </h1>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Read in-depth editorial features, published book chapters, and national business interviews authored by and featuring Harshita Dagha.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/profile"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs font-semibold border border-white/10 transition-all"
            >
              <span>View Full Professional Profile</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <a
              href={OFFICIAL_PROFILE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold shadow-md transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* 8 Media Publications Grid (Mobile Horizontal Swipe, Desktop 2-column) */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 no-scrollbar md:grid md:grid-cols-2 md:gap-6 md:mx-0 md:px-0 md:overflow-visible mb-16">
          {MEDIA_PUBLICATIONS.map((pub) => (
            <div
              key={pub.id}
              className="w-[85vw] sm:w-[420px] md:w-auto shrink-0 snap-center p-6 sm:p-7 rounded-3xl bg-[#141418] border border-white/10 hover:border-[#d89ba4]/40 hover:bg-[#16161c] transition-all flex flex-col justify-between shadow-lg group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-serif font-bold text-base sm:text-lg text-white group-hover:text-[#d89ba4] transition-colors">
                    {pub.outlet}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/5 text-[#d89ba4] border border-white/10">
                    {pub.outletBadge}
                  </span>
                </div>

                <Link href={`/publications/${pub.slug}`}>
                  <h2 className="font-serif font-bold text-lg sm:text-xl text-zinc-100 group-hover:text-[#d89ba4] transition-colors leading-snug mb-3">
                    {pub.title}
                  </h2>
                </Link>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  {pub.excerpt}
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs text-zinc-500 py-3 border-t border-white/10 mb-4">
                  <span className="font-mono text-zinc-400">{pub.date}</span>
                  <span className="text-zinc-400">{pub.readTime}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <Link
                    href={`/publications/${pub.slug}`}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-white/10 hover:bg-[#d89ba4] hover:text-black text-white text-xs font-bold transition-all shadow-xs"
                  >
                    <span>Read on Our Website</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={pub.originalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-[#d89ba4] border border-white/10 transition-colors"
                    title={`View original on ${pub.outlet}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
