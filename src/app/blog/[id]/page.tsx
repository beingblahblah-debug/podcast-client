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
  BookOpen, 
  ArrowRight,
  User,
  Quote,
  MapPin,
  ChevronDown,
  Play,
  Pause,
  MessageCircle,
  HelpCircle,
  Headphones
} from "lucide-react";
import { ARTICLES, Article } from "@/data/articles";
import { EPISODES, Episode } from "@/data/episodes";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ArticleDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const article = ARTICLES.find((a) => a.id === resolvedParams.id);

  if (!article) {
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

  const relatedArticles = ARTICLES.filter((a) => a.id !== article.id).slice(0, 3);

  // Pull related episodes if specified, or fallback to top 2 episodes
  const relatedEpisodes: Episode[] = article.relatedEpisodeIds 
    ? EPISODES.filter((ep) => article.relatedEpisodeIds?.includes(ep.id))
    : EPISODES.slice(0, 2);

  return (
    <article className="py-12 md:py-20 bg-[#0c0c0e] min-h-screen text-[#f4f4f5]">
      {/* Structured Schema for Search & AI Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://www.harshitadagha.in/blog/${article.id}`
            },
            "headline": article.title,
            "description": article.excerpt,
            "image": [`https://www.harshitadagha.in${article.image}`],
            "datePublished": "2026-10-03",
            "dateModified": "2026-10-03",
            "author": {
              "@type": "Person",
              "name": "Harshita Dagha",
              "jobTitle": "Host & Executive Producer",
              "url": "https://www.harshitadagha.in"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Harshita Dagha Media",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.harshitadagha.in/images/logo.png"
              }
            },
            "keywords": article.seoFocus
          })
        }}
      />

      {/* FAQ Schema if FAQs exist */}
      {article.faqs && article.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": article.faqs.map((f) => ({
                "@type": "Question",
                "name": f.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": f.answer
                }
              }))
            })
          }}
        />
      )}

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
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
                "name": "Articles & Guides",
                "item": "https://www.harshitadagha.in/blog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": article.title,
                "item": `https://www.harshitadagha.in/blog/${article.id}`
              }
            ]
          })
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-zinc-500 font-medium mb-6 flex-wrap">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-white transition-colors">Articles & Guides</Link>
          <span>/</span>
          <span className="text-zinc-300 font-bold truncate max-w-[240px] sm:max-w-none">{article.category}</span>
        </div>

        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-bold text-zinc-400 hover:text-white mb-6 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Articles & Guides</span>
        </Link>

        {/* Article Meta & Tags */}
        <div className="mb-6">
          <div className="flex items-center gap-2.5 flex-wrap mb-4">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 text-[#d89ba4] border border-white/10">
              {article.category}
            </span>

            {article.city && (
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/10 flex items-center gap-1 shadow-xs">
                <MapPin className="w-3 h-3 text-[#d89ba4]" />
                <span>{article.city} Regional Hub</span>
              </span>
            )}

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

          <p className="text-lg sm:text-xl text-zinc-300 font-serif italic leading-relaxed border-l-4 border-[#d89ba4] pl-4 py-1.5 bg-white/[0.03] rounded-r-2xl">
            {article.excerpt}
          </p>
        </div>

        {/* Author Bio Row */}
        <div className="flex items-center justify-between py-6 border-y border-white/10 mb-10">
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
              <h3 className="text-sm font-bold text-white">Written by {article.author.name}</h3>
              <p className="text-xs text-zinc-400">{article.author.role} · The Harshita Dagha Show</p>
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
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-lg border border-white/10 mb-12">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Main Article Content */}
        <div className="prose prose-invert prose-lg max-w-none mb-16">
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-sans font-medium mb-8">
            {article.content.intro}
          </p>

          <div className="space-y-12">
            {article.content.sections.map((section, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                  {section.heading}
                </h2>

                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                    {p}
                  </p>
                ))}

                {section.quote && (
                  <div className="my-6 p-6 rounded-2xl bg-white/5 border-l-4 border-[#d89ba4] italic text-zinc-100 font-serif text-lg">
                    &ldquo;{section.quote}&rdquo;
                  </div>
                )}

                {section.bullets && (
                  <div className="p-6 rounded-2xl bg-[#141418] border border-white/10 space-y-2.5 my-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-white block mb-2">
                      Key Takeaways:
                    </span>
                    {section.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-sm text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-[#d89ba4] shrink-0 mt-1" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Smart In-Text Internal Link */}
                {section.internalLink && (
                  <div className="my-6 p-4 rounded-2xl bg-[#141418] border border-white/10 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#d89ba4] shrink-0" />
                      <span className="text-xs font-semibold text-zinc-200">
                        {section.internalLink.text}
                      </span>
                    </div>
                    <Link
                      href={section.internalLink.href}
                      className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-[#d89ba4] hover:bg-[#c98c95] text-black text-xs font-bold transition-colors shrink-0 shadow-xs"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                )}
              </section>
            ))}
          </div>

          <div className="mt-12 p-7 rounded-3xl bg-[#141418] border border-white/10 text-white">
            <h3 className="text-lg font-serif font-bold text-white mb-2">Executive Conclusion</h3>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              {article.content.conclusion}
            </p>
          </div>
        </div>

        {/* FAQs Accordion (If article has faqs) */}
        {article.faqs && article.faqs.length > 0 && (
          <div className="mb-16 pt-8 border-t border-white/10">
            <div className="flex items-center gap-2 mb-6">
              <HelpCircle className="w-5 h-5 text-[#d89ba4]" />
              <h3 className="text-2xl font-serif font-bold text-white">
                Frequently Asked Questions
              </h3>
            </div>

            <div className="space-y-3">
              {article.faqs.map((faq, fIdx) => {
                const isOpen = openFaqIndex === fIdx;
                return (
                  <div
                    key={fIdx}
                    className="rounded-2xl border border-white/10 bg-[#141418] overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : fIdx)}
                      className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="font-serif font-bold text-base sm:text-lg text-white hover:text-[#d89ba4] transition-colors">
                        {faq.question}
                      </span>
                      <div className={`w-7 h-7 rounded-full bg-white/5 flex items-center justify-center shrink-0 transition-transform ${isOpen ? "rotate-180 bg-[#d89ba4] text-black" : "text-zinc-400"}`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 pt-1 text-sm text-zinc-300 leading-relaxed border-t border-white/10 bg-white/[0.02]">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Relevant Masterclass Episodes (Internal Media Showcase) */}
        {relatedEpisodes.length > 0 && (
          <div className="mb-16 pt-8 border-t border-white/10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Headphones className="w-5 h-5 text-[#d89ba4]" />
                <h3 className="text-2xl font-serif font-bold text-white">
                  Featured Masterclasses on this Topic
                </h3>
              </div>
              <Link
                href="/episodes"
                className="text-xs font-bold text-[#d89ba4] hover:text-[#e8b5be] inline-flex items-center gap-1"
              >
                <span>View All Shows</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedEpisodes.map((ep) => (
                <div
                  key={ep.id}
                  className="p-5 rounded-2xl bg-[#141418] border border-white/10 hover:border-[#d89ba4]/40 hover:shadow-md transition-all flex flex-col justify-between"
                >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                          {ep.category} · Ep #{ep.number}
                        </span>
                        <span className="text-xs text-zinc-400 font-medium">{ep.duration}</span>
                      </div>
                      <Link href={`/episodes/${ep.id}`}>
                        <h4 className="font-serif font-bold text-base text-white hover:text-[#d89ba4] transition-colors line-clamp-2 mb-1.5">
                          {ep.title}
                        </h4>
                      </Link>
                      <p className="text-xs text-zinc-400 line-clamp-2 mb-4">
                        {ep.subtitle}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-white/10">
                      <Link
                        href={`/episodes/${ep.id}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#d89ba4] text-white hover:text-black text-xs font-bold transition-colors"
                      >
                        <span>View Masterclass</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>

                      <span className="text-xs text-zinc-400 font-mono">
                        {ep.duration}
                      </span>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        )}

        {/* WhatsApp Consultation Banner */}
        <div className="bg-gradient-to-r from-emerald-950/40 via-[#141418] to-[#141418] text-white rounded-3xl p-8 border border-emerald-500/30 shadow-xl mb-16 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
              Connect with Harshita Dagha Media
            </span>
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-white mb-1">
              Have questions about executive podcasting?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-md">
              Chat directly with Harshita Dagha&apos;s production desk on WhatsApp regarding guest bookings, speaking engagements, and brand integrations.
            </p>
          </div>

          <a
            href="https://wa.me/918779003799?text=Hi%20Harshita%20Dagha,%20I%20would%20like%20to%20connect%20with%20your%20desk."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold shadow-lg shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Ask via WhatsApp</span>
          </a>
        </div>

        {/* Related Articles with Mobile Horizontal Swipe Carousel */}
        <div className="pt-10 border-t border-white/10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Continue Reading More Guides
            </h3>
            <span className="text-xs text-[#d89ba4] font-bold inline-flex items-center gap-1 sm:hidden">
              <span>Swipe right →</span>
            </span>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 no-scrollbar sm:grid sm:grid-cols-3 sm:gap-6 sm:mx-0 sm:px-0 sm:overflow-visible">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.id}
                href={`/blog/${rel.id}`}
                className="w-[80vw] sm:w-auto shrink-0 snap-center group p-5 rounded-2xl bg-[#141418] border border-white/10 hover:border-[#d89ba4]/40 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#d89ba4] bg-white/5 px-2 py-0.5 rounded border border-white/10">
                      {rel.category}
                    </span>
                    {rel.city && (
                      <span className="text-[10px] font-bold text-zinc-400 flex items-center gap-0.5">
                        <MapPin className="w-2.5 h-2.5" />
                        {rel.city}
                      </span>
                    )}
                  </div>
                  <h4 className="font-serif font-bold text-base text-white group-hover:text-[#d89ba4] transition-colors line-clamp-2 mb-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-zinc-400 line-clamp-2 mb-3">
                    {rel.excerpt}
                  </p>
                </div>
                <span className="text-xs font-bold text-zinc-300 group-hover:text-[#d89ba4] flex items-center gap-1 group-hover:translate-x-1 transition-transform pt-2 border-t border-white/10">
                  <span>Read Guide</span>
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
