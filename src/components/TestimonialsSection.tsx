"use client";

import React from "react";
import Image from "next/image";
import { Star, Quote, MessageSquareHeart, MoveRight } from "lucide-react";
import { TESTIMONIALS } from "@/data/episodes";

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-slate-50/50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-800 border border-rose-200 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquareHeart className="w-3.5 h-3.5 text-rose-500" />
            <span>Listener Love</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 tracking-tight">
            Trusted by 65,000+ Active Thinkers
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            What founders, researchers, and dedicated listeners say about the show.
          </p>
        </div>

        {/* Mobile Swipe Cue */}
        <div className="flex md:hidden items-center justify-between text-xs text-slate-500 font-medium mb-3 px-1">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Verified Listener Endorsements
          </span>
          <span className="text-amber-800 font-bold inline-flex items-center gap-1">
            <span>Swipe</span>
            <MoveRight className="w-3.5 h-3.5" />
          </span>
        </div>

        {/* Cards: Mobile horizontal swipe carousel, Desktop 3-column grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 no-scrollbar md:grid md:grid-cols-3 md:gap-6 md:mx-0 md:px-0 md:overflow-visible">
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="w-[85vw] sm:w-[360px] md:w-auto shrink-0 snap-center bg-white rounded-3xl p-7 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-slate-200 mb-2" />
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center space-x-3 pt-4 border-t border-slate-100">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-slate-200 shadow-sm shrink-0">
                  <Image
                    src={item.avatar}
                    alt={item.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{item.author}</h4>
                  <p className="text-xs text-slate-500">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

