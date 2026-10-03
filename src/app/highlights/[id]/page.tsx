"use client";

import React, { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  ArrowLeft, 
  Share2, 
  Sparkles, 
  Flame, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  ExternalLink, 
  MessageCircle, 
  Film, 
  ChevronDown, 
  ChevronRight,
  BookOpen,
  ArrowRight
} from "lucide-react";
import { REELS, ReelItem } from "@/data/reels";
import { InstagramIcon } from "@/components/SocialIcons";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ReelDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const reel = REELS.find((r) => r.id === resolvedParams.id);

  if (!reel) {
    notFound();
  }

  const [copied, setCopied] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const currentIndex = REELS.findIndex((r) => r.id === reel.id);
  const prevReel = currentIndex > 0 ? REELS[currentIndex - 1] : null;
  const nextReel = currentIndex < REELS.length - 1 ? REELS[currentIndex + 1] : null;
  const otherReels = REELS.filter((r) => r.id !== reel.id).slice(0, 3);

  const whatsappInquiryUrl = `https://wa.me/919876543210?text=Hi%20Harshita%20Dagha%20Media,%20I%20just%20read%20your%20story%20on%20${encodeURIComponent(reel.title)}%20and%20want%20to%20connect.`;

  return (
    <article className="min-h-screen bg-[#fafaf9] py-10 md:py-16 text-slate-900">
      {/* Schema.org Structured Data: VideoObject, Article, BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                "headline": reel.seoHeadline,
                "description": reel.articleLead,
                "image": `https://www.harshitadagha.in${reel.thumbnail}`,
                "datePublished": "2026-10-01T08:00:00+05:30",
                "dateModified": "2026-10-03T08:00:00+05:30",
                "author": {
                  "@type": "Person",
                  "name": "Harshita Dagha",
                  "url": "https://www.harshitadagha.in"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "Being Blah Blah Media Group",
                  "url": "https://www.harshitadagha.in"
                },
                "mainEntityOfPage": `https://www.harshitadagha.in/highlights/${reel.id}`
              },
              {
                "@type": "VideoObject",
                "name": reel.title,
                "description": reel.articleLead,
                "thumbnailUrl": `https://www.harshitadagha.in${reel.thumbnail}`,
                "uploadDate": "2026-10-01T08:00:00+05:30",
                "contentUrl": reel.instagramUrl,
                "embedUrl": reel.embedUrl || reel.instagramUrl,
                "publisher": {
                  "@type": "Person",
                  "name": "Harshita Dagha",
                  "url": "https://www.harshitadagha.in"
                }
              },
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
                    "name": "Show Highlights & Reels",
                    "item": "https://www.harshitadagha.in/highlights"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": reel.title,
                    "item": `https://www.harshitadagha.in/highlights/${reel.id}`
                  }
                ]
              }
            ]
          })
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb Bar */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <Link
            href="/highlights"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-slate-950 transition-colors bg-white px-4 py-2 rounded-full border border-slate-200 shadow-2xs group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to All 10 Highlights</span>
          </Link>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-bold transition-all shadow-2xs cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copied ? "Link Copied!" : "Share Story"}</span>
          </button>
        </div>

        {/* Header Hero Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm mb-10">
          
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-rose-50 text-rose-800 border border-rose-200">
              {reel.category}
            </span>
            <span className="text-xs font-mono font-semibold text-slate-500 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {reel.readingTime}
            </span>
            <span className="text-xs font-mono font-semibold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
              {reel.views}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-950 leading-tight mb-4 tracking-tight">
            {reel.seoHeadline}
          </h1>

          {/* Byline & Show Desk */}
          <div className="flex items-center gap-3 pt-4 border-t border-slate-100 text-xs text-slate-600">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-200 shrink-0">
              <Image src="/images/host.jpg" alt="Harshita Dagha" fill className="object-cover" />
            </div>
            <div>
              <p className="font-bold text-slate-900">
                Curated & Hosted by Harshita Dagha
              </p>
              <p className="text-slate-500">
                Being Blah Blah Media Desk · BKC Mumbai
              </p>
            </div>
          </div>
        </div>

        {/* Lead Quote Callout */}
        <div className="mb-10 p-6 sm:p-8 rounded-3xl bg-amber-500/10 border-l-4 border-amber-500 text-slate-900 shadow-sm">
          <p className="font-serif italic text-lg sm:text-xl leading-relaxed text-amber-950">
            &ldquo;{reel.quote}&rdquo;
          </p>
          <span className="block mt-3 text-xs font-bold uppercase tracking-wider text-amber-800">
            — {reel.guestName} ({reel.guestRole})
          </span>
        </div>

        {/* Article Intro (Part 1) */}
        <div className="prose prose-slate max-w-none text-slate-700 text-base sm:text-lg leading-relaxed mb-10 space-y-4">
          <p className="font-medium text-slate-900 first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-2">
            {reel.articleLead}
          </p>
          
          {reel.articleSections.slice(0, 1).map((section, idx) => (
            <div key={idx} className="space-y-3 pt-4">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 tracking-tight">
                {section.heading}
              </h2>
              {section.content.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}
              {section.subQuote && (
                <blockquote className="p-4 rounded-2xl bg-white border border-slate-200 text-sm font-serif italic text-slate-800 my-4 shadow-2xs">
                  &ldquo;{section.subQuote}&rdquo;
                </blockquote>
              )}
            </div>
          ))}
        </div>

        {/* ========================================================= */}
        {/* THE INSTAGRAM REEL EMBEDDED RIGHT IN THE MIDDLE OF ARTICLE */}
        {/* ========================================================= */}
        <section className="my-12 rounded-3xl bg-slate-950 p-6 sm:p-10 text-white border border-slate-800 shadow-2xl flex flex-col items-center">
          
          <div className="flex items-center justify-between w-full mb-6 max-w-md">
            <div className="flex items-center gap-2">
              <Flame className="w-5 h-5 text-amber-400 fill-amber-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                Official Instagram Reel Player
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-400">
              @beingblahblah
            </span>
          </div>

          {/* 9:16 Vertical Reel Player Container */}
          <div className="w-full max-w-[360px] aspect-[9/16] rounded-2xl overflow-hidden border border-slate-700 bg-black shadow-2xl relative">
            {reel.embedUrl ? (
              <iframe
                src={reel.embedUrl}
                className="w-full h-full border-0"
                allowFullScreen
                scrolling="no"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title={reel.title}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-slate-900 text-white">
                <InstagramIcon className="w-16 h-16 text-rose-500 mb-4" />
                <h3 className="text-sm font-bold mb-2">{reel.title}</h3>
                <p className="text-xs text-slate-300 mb-6 line-clamp-2">{reel.quote}</p>
                <a
                  href={reel.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-rose-500 to-amber-500 text-white text-xs font-bold shadow-lg"
                >
                  Play on Instagram App
                </a>
              </div>
            )}
          </div>

          {/* Video Action Controls Bar */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 w-full max-w-md">
            <a
              href={reel.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 hover:opacity-95 text-white text-xs font-bold transition-all shadow-md hover:scale-105 active:scale-95"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Watch Direct on Instagram</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={handleShare}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copied ? "Link Copied!" : "Copy Reel Link"}</span>
            </button>
          </div>
        </section>

        {/* Article Deep Dive (Part 2: Deep Takeaways & Remaining Sections) */}
        <div className="prose prose-slate max-w-none text-slate-700 text-base sm:text-lg leading-relaxed mb-12 space-y-6">
          {reel.articleSections.slice(1).map((section, idx) => (
            <div key={idx} className="space-y-3 pt-4">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 tracking-tight">
                {section.heading}
              </h2>
              {section.content.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}
              {section.subQuote && (
                <blockquote className="p-4 rounded-2xl bg-white border border-slate-200 text-sm font-serif italic text-slate-800 my-4 shadow-2xs">
                  &ldquo;{section.subQuote}&rdquo;
                </blockquote>
              )}
            </div>
          ))}
        </div>

        {/* Key Takeaways Checklist Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-slate-950">
              Key Strategic & Philosophical Takeaways
            </h3>
          </div>

          <div className="space-y-3.5">
            {reel.articleTakeaways.map((takeaway, idx) => (
              <div key={idx} className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-sm text-slate-800 leading-relaxed">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{takeaway}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Frequently Asked Questions (Accordion) */}
        {reel.faqs && reel.faqs.length > 0 && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm mb-12">
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-slate-950 mb-6">
              Frequently Asked Questions About This Show Highlight
            </h3>

            <div className="space-y-3">
              {reel.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200/80 overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-serif font-bold text-sm sm:text-base text-slate-900 hover:text-amber-800 transition-colors"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                          isOpen ? "rotate-180 text-amber-600" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* High-Intent AI Search Grounding Keywords */}
        <div className="p-6 rounded-3xl bg-slate-100/70 border border-slate-200 mb-12">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-3">
            AI Engine Grounding & Entity Topic Signals:
          </span>
          <div className="flex flex-wrap gap-2">
            {reel.seoKeywords.map((kw, idx) => (
              <span
                key={idx}
                className="text-xs font-mono px-3 py-1 rounded-xl bg-white text-slate-700 border border-slate-200/80 shadow-2xs"
              >
                #{kw}
              </span>
            ))}
          </div>
        </div>

        {/* WhatsApp Consultation & Studio Pitch CTA */}
        <div className="rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-amber-950 text-white p-6 sm:p-10 border border-amber-500/30 shadow-2xl mb-14 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-lg">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block mb-2">
              Studio A · Bandra Kurla Complex (BKC) Mumbai
            </span>
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-white mb-2">
              Want to record a masterclass or syndicate viral reels?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Every guest on The Harshita Dagha Show receives broadcast-quality audio, 4K multi-camera master files, and 5 viral vertical video reels cut for maximum engagement.
            </p>
          </div>

          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold shrink-0 transition-all shadow-lg hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Connect on WhatsApp</span>
          </a>
        </div>

        {/* Next & Previous Reel Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
          {prevReel ? (
            <Link
              href={`/highlights/${prevReel.id}`}
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 transition-all group flex flex-col justify-between shadow-2xs"
            >
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1 mb-2">
                <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                Previous Highlight
              </span>
              <p className="font-serif font-bold text-sm text-slate-900 group-hover:text-amber-700 transition-colors line-clamp-2">
                {prevReel.title}
              </p>
            </Link>
          ) : <div />}

          {nextReel ? (
            <Link
              href={`/highlights/${nextReel.id}`}
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 transition-all group flex flex-col justify-between items-end text-right shadow-2xs"
            >
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1 mb-2">
                Next Highlight
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
              <p className="font-serif font-bold text-sm text-slate-900 group-hover:text-amber-700 transition-colors line-clamp-2">
                {nextReel.title}
              </p>
            </Link>
          ) : <div />}
        </div>

        {/* Explore More Highlights with Mobile Horizontal Snapping Slider */}
        <div className="pt-8 border-t border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-serif font-bold text-xl text-slate-950">
              More Show Highlights from @beingblahblah
            </h3>
            <span className="text-xs text-amber-800 font-bold inline-flex items-center gap-1 sm:hidden">
              <span>Swipe right →</span>
            </span>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 scrollbar-none sm:grid sm:grid-cols-3 sm:gap-6 sm:mx-0 sm:px-0 sm:overflow-visible">
            {otherReels.map((item) => (
              <Link
                key={item.id}
                href={`/highlights/${item.id}`}
                className="w-[78vw] max-w-[290px] sm:w-auto shrink-0 snap-center group bg-white rounded-2xl p-4 border border-slate-200/90 hover:border-amber-300 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[9/13] rounded-xl overflow-hidden mb-3 bg-slate-950">
                    <Image src={item.thumbnail} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2 text-white">
                      <span className="text-[10px] font-bold text-amber-300 block">{item.guestName}</span>
                    </div>
                  </div>
                  <h4 className="font-serif font-bold text-xs text-slate-900 group-hover:text-amber-700 transition-colors line-clamp-2">
                    {item.title}
                  </h4>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-amber-800">
                  <span>Read Article</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </article>
  );
}
