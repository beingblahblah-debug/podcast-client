"use client";

import React, { useState } from "react";
import { Share2, HelpCircle, ChevronDown } from "lucide-react";

export function ShareButton({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 text-xs font-bold transition-colors cursor-pointer"
      title={`Share ${title}`}
    >
      <Share2 className="w-3.5 h-3.5" />
      <span>{copied ? "Link Copied!" : "Share Article"}</span>
    </button>
  );
}

export interface FaqItem {
  question: string;
  answer: string;
}

export function ArticleFaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="mb-14 pt-10 border-t border-white/10">
      <div className="flex items-center gap-2 mb-6">
        <HelpCircle className="w-5 h-5 text-[#d89ba4]" />
        <h3 className="text-2xl font-serif font-bold text-white tracking-tight">
          Frequently Asked Questions (FAQ)
        </h3>
      </div>
      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="rounded-2xl bg-[#141418] border border-white/10 overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 text-white hover:text-[#d89ba4] transition-colors cursor-pointer"
              >
                <span className="font-serif font-semibold text-base sm:text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform ${
                    isOpen ? "rotate-180 text-[#d89ba4]" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-zinc-300 leading-relaxed border-t border-white/5">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
