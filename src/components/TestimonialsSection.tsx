"use client";

import React from "react";
import { Star, Quote, MessageSquareHeart } from "lucide-react";
import { TESTIMONIALS } from "@/data/episodes";

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-[#0c0c0e] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d89ba4]/10 text-[#d89ba4] border border-[#d89ba4]/25 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquareHeart className="w-3.5 h-3.5 text-[#d89ba4]" />
            <span>Listener Love</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-tight">
            Trusted by 65,000+ Active Thinkers
          </h2>
          <p className="text-zinc-400 text-sm mt-2 font-normal">
            What founders, researchers, and dedicated listeners say about the show.
          </p>
        </div>

        {/* Cards: Mobile horizontal swipe carousel, Desktop 3-column grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 no-scrollbar md:grid md:grid-cols-3 md:gap-6 md:mx-0 md:px-0 md:overflow-visible">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="w-[85vw] sm:w-[360px] md:w-auto shrink-0 snap-center bg-[#141418] rounded-3xl p-7 border border-white/10 hover:border-[#d89ba4]/40 hover:bg-[#18181f] shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-1 text-[#d89ba4] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#d89ba4]" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-white/10 mb-2" />
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center space-x-3 pt-4 border-t border-white/10">
                <div className="w-11 h-11 rounded-2xl bg-[#0c0c0e] border border-white/15 text-[#d89ba4] font-bold font-serif text-sm flex items-center justify-center shrink-0 shadow-sm">
                  {item.author.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">{item.author}</h4>
                  <p className="text-xs text-zinc-400">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

