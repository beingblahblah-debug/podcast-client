"use client";

import React, { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  Calendar, 
  Clock, 
  ArrowLeft, 
  Share2, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  ExternalLink,
  MessageCircle,
  BookOpen,
  Newspaper,
  Award
} from "lucide-react";
import { MEDIA_PUBLICATIONS, OFFICIAL_PROFILE } from "@/data/publications";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function PublicationDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const article = MEDIA_PUBLICATIONS.find(
    (a) => a.slug === resolvedParams.slug || a.id === resolvedParams.slug
  );

  if (!article) {
    notFound();
  }

  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const otherPublications = MEDIA_PUBLICATIONS.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <article className="py-12 md:py-20 bg-[#0c0c0e] min-h-screen text-[#f4f4f5]">
      {/* Schema.org Article Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": article.title,
            "description": article.excerpt,
            "image": [`https://www.harshitadagha.in${article.image}`],
            "datePublished": article.date,
            "author": {
              "@type": "Person",
              "name": "Harshita Dagha Maisheri",
              "jobTitle": "Podcast Host & Brand Strategist",
              "url": "https://www.harshitadagha.in/profile"
            },
            "publisher": {
              "@type": "Organization",
              "name": article.outlet,
              "url": article.originalUrl
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://www.harshitadagha.in/publications/${article.slug}`
            }
          })
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-zinc-500 font-medium mb-6 flex-wrap">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/profile" className="hover:text-white transition-colors">Profile</Link>
          <span>/</span>
          <Link href="/profile#publications" className="hover:text-white transition-colors">Publications</Link>
          <span>/</span>
          <span className="text-zinc-300 font-bold truncate max-w-[240px] sm:max-w-none">{article.outlet}</span>
        </div>

        {/* Back Link */}
        <Link
          href="/profile#publications"
          className="inline-flex items-center gap-2 text-xs font-bold text-zinc-400 hover:text-white mb-6 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Harshita Dagha Profile & Media Archive</span>
        </Link>

        {/* Article Meta Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2.5 flex-wrap mb-4">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 text-[#d89ba4] border border-white/10">
              {article.outlet}
            </span>

            <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/10 flex items-center gap-1 shadow-xs">
              <Newspaper className="w-3 h-3 text-[#d89ba4]" />
              <span>{article.outletCategory}</span>
            </span>

            <span className="text-xs text-zinc-500">·</span>
            <span className="text-xs text-zinc-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {article.date}
            </span>
            <span className="text-xs text-zinc-500">·</span>
            <span className="text-xs text-zinc-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-[1.18] mb-6">
            {article.title}
          </h1>

          <p className="text-lg sm:text-xl text-zinc-300 font-serif italic leading-relaxed border-l-4 border-[#d89ba4] pl-4 py-2 bg-white/[0.03] rounded-r-2xl mb-8">
            {article.excerpt}
          </p>
        </div>

        {/* Source Verification Banner (Direct link to original external publication) */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#17171d] via-[#141418] to-[#141418] border border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10 shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#d89ba4]/15 border border-[#d89ba4]/30 flex items-center justify-center text-[#d89ba4] shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-white block">
                Official Media Feature & Publication
              </span>
              <span className="text-[11px] text-zinc-400 block">
                Published by <strong className="text-zinc-200">{article.outlet}</strong> · Original source indexed online
              </span>
            </div>
          </div>

          <a
            href={article.originalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-[#d89ba4] hover:text-black text-white text-xs font-bold transition-all border border-white/15 shrink-0 shadow-sm"
          >
            <span>View Original on {article.outlet}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Author Bio Bar */}
        <div className="flex items-center justify-between py-5 border-y border-white/10 mb-10">
          <div className="flex items-center space-x-3.5">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/15 shadow-sm shrink-0">
              <Image
                src={article.author.avatar}
                alt={article.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">{article.author.name}</h3>
              <p className="text-xs text-zinc-400">{article.author.role} · {OFFICIAL_PROFILE.agency}</p>
            </div>
          </div>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 text-xs font-bold transition-colors shadow-xs cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copied ? "Link Copied!" : "Share Article"}</span>
          </button>
        </div>

        {/* Cover Image */}
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border border-white/10 mb-12">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Key Takeaways Box */}
        {article.keyTakeaways && article.keyTakeaways.length > 0 && (
          <div className="p-6 sm:p-7 rounded-3xl bg-[#141418] border border-white/10 mb-12 shadow-lg">
            <span className="text-xs font-bold uppercase tracking-wider text-[#d89ba4] block mb-3">
              Key Strategic Takeaways:
            </span>
            <div className="space-y-3">
              {article.keyTakeaways.map((point, pIdx) => (
                <div key={pIdx} className="flex items-start gap-3 text-sm text-zinc-200">
                  <CheckCircle2 className="w-4 h-4 text-[#d89ba4] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Article Body */}
        <div className="prose prose-invert prose-lg max-w-none mb-16">
          <p className="text-base sm:text-lg text-zinc-200 leading-relaxed font-sans font-medium mb-8">
            {article.intro}
          </p>

          <div className="space-y-12">
            {article.sections.map((section, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                  {section.heading}
                </h2>

                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                    {p}
                  </p>
                ))}

                {section.bullets && (
                  <div className="p-5 rounded-2xl bg-[#17171d] border border-white/10 space-y-2.5 my-4">
                    {section.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-sm text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-[#d89ba4] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>

          {article.quote && (
            <div className="my-8 p-6 rounded-2xl bg-white/5 border-l-4 border-[#d89ba4] italic text-zinc-100 font-serif text-lg">
              &ldquo;{article.quote}&rdquo;
            </div>
          )}

          <div className="mt-12 p-7 rounded-3xl bg-[#141418] border border-white/10 text-white">
            <h3 className="text-lg font-serif font-bold text-white mb-2">Editorial Conclusion</h3>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              {article.conclusion}
            </p>
          </div>
        </div>

        {/* Original Article Link CTA Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#141418] border border-white/10 text-center mb-16 shadow-xl">
          <span className="text-xs uppercase font-bold tracking-widest text-[#d89ba4] block mb-2">
            Verified Journalism
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
            Want to read this feature on {article.outlet}?
          </h3>
          <p className="text-sm text-zinc-400 max-w-lg mx-auto mb-6">
            Access the original published article or book directly on the publisher&apos;s live online portal.
          </p>
          <a
            href={article.originalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#d89ba4] hover:bg-[#e2a8b1] text-zinc-950 font-bold text-sm shadow-md transition-all hover:scale-105 active:scale-95"
          >
            <span>Open {article.outlet} Publication</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* WhatsApp Direct Connect */}
        <div className="bg-gradient-to-r from-emerald-950/40 via-[#141418] to-[#141418] text-white rounded-3xl p-8 border border-emerald-500/30 shadow-xl mb-16 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
              Connect with Harshita Dagha
            </span>
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-white mb-1">
              Collaborate on Branding, PR & Podcasting
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-md">
              Chat directly with Harshita Dagha on WhatsApp regarding brand strategy, executive guest bookings, or speaking masterclasses.
            </p>
          </div>

          <a
            href={OFFICIAL_PROFILE.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold shadow-lg shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Other Media Features */}
        <div className="pt-10 border-t border-white/10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
              More Media Features & Publications
            </h3>
            <Link
              href="/profile#publications"
              className="text-xs font-bold text-[#d89ba4] hover:underline flex items-center gap-1"
            >
              <span>View All 8 Publications</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {otherPublications.map((pub) => (
              <Link
                key={pub.id}
                href={`/publications/${pub.slug}`}
                className="group p-5 rounded-2xl bg-[#141418] border border-white/10 hover:border-[#d89ba4]/40 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#d89ba4] bg-white/5 px-2 py-0.5 rounded border border-white/10 block w-fit mb-2">
                    {pub.outlet}
                  </span>
                  <h4 className="font-serif font-bold text-sm text-white group-hover:text-[#d89ba4] transition-colors line-clamp-2 mb-2">
                    {pub.title}
                  </h4>
                  <p className="text-xs text-zinc-400 line-clamp-2 mb-3">
                    {pub.excerpt}
                  </p>
                </div>
                <span className="text-xs font-bold text-zinc-300 group-hover:text-[#d89ba4] flex items-center gap-1 group-hover:translate-x-1 transition-transform pt-2 border-t border-white/10">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </article>
  );
}
