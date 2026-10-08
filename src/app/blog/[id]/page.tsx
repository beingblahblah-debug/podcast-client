"use client";

import React, { use, useState, useEffect } from "react";
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
  Video,
  ExternalLink,
  MessageCircle,
  HelpCircle,
  Headphones,
  Tv
} from "lucide-react";
import { ARTICLES, Article } from "@/data/articles";
import { BlogPost, DEFAULT_VLOGS, DEFAULT_ARTICLES, extractYouTubeId, getYouTubeThumbnail } from "@/data/posts";
import { getAllPosts } from "@/lib/postStore";
import { YouTubeIcon } from "@/components/SocialIcons";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ArticleOrVlogDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const postId = resolvedParams.id;

  const [post, setPost] = useState<BlogPost | null>(null);
  const [legacyArticle, setLegacyArticle] = useState<Article | null>(null);
  const [copied, setCopied] = useState(false);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    // 1. Prioritize full editorial article from ARTICLES (has structured sections, FAQs, quotes, badges)
    const foundLegacy = ARTICLES.find((a) => a.id === postId);
    if (foundLegacy) {
      setLegacyArticle(foundLegacy);
      const all = getAllPosts();
      setRelatedPosts(all.filter((p) => p.id !== foundLegacy.id).slice(0, 3));
      setIsLoading(false);
      return;
    }

    // 2. Fallback to dynamic/custom posts or video vlogs
    const all = getAllPosts();
    const foundPost = all.find((p) => p.id === postId);
    if (foundPost) {
      setPost(foundPost);
      setRelatedPosts(all.filter((p) => p.id !== foundPost.id).slice(0, 3));
      setIsLoading(false);
      return;
    }

    setIsLoading(false);
  }, [postId]);

  if (!isLoading && !post && !legacyArticle) {
    notFound();
  }

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // -------------------------------------------------------------------------
  // RENDER DYNAMIC VLOG OR ARTICLE
  // -------------------------------------------------------------------------
  if (post) {
    const isVlog = post.type === "vlog";
    const videoId = post.videoId || (post.videoUrl ? extractYouTubeId(post.videoUrl) : null);

    return (
      <article className="py-12 md:py-20 bg-[#0c0c0e] min-h-screen text-[#f4f4f5]">
        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": isVlog ? "VideoObject" : "BlogPosting",
              "headline": post.title,
              "description": post.excerpt,
              "image": [post.coverImage || "https://www.harshitadagha.in/images/harshita-navy-mic.jpg"],
              "datePublished": post.createdAt || "2026-10-04",
              "author": {
                "@type": "Person",
                "name": post.author.name,
                "jobTitle": post.author.role,
                "url": "https://www.harshitadagha.in"
              }
            })
          }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-zinc-500 font-medium mb-6 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-white transition-colors">Vlogs & Blog</Link>
            <span>/</span>
            <span className="text-zinc-300 font-bold truncate max-w-[240px] sm:max-w-none">{post.category}</span>
          </div>

          {/* Back to Blog */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-zinc-400 hover:text-white mb-6 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Vlogs & Articles</span>
          </Link>

          {/* Header Meta & Badges */}
          <div className="mb-6">
            <div className="flex items-center gap-2.5 flex-wrap mb-4">
              <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                isVlog 
                  ? "bg-red-500/20 text-red-300 border border-red-500/30" 
                  : "bg-white/5 text-[#d89ba4] border border-white/10"
              }`}>
                {isVlog ? "🎥 Video Vlog" : "✍️ Editorial Article"}
              </span>

              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/10">
                {post.category}
              </span>

              <span className="text-xs text-zinc-500">·</span>
              <span className="text-xs text-zinc-400 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>

              {post.readTime && (
                <>
                  <span className="text-xs text-zinc-500">·</span>
                  <span className="text-xs text-zinc-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-[1.18] mb-6">
              {post.title}
            </h1>

            <p className="text-lg sm:text-xl text-zinc-300 font-serif italic leading-relaxed border-l-4 border-[#d89ba4] pl-4 py-1.5 bg-white/[0.03] rounded-r-2xl">
              {post.excerpt}
            </p>
          </div>

          {/* Author Row & Share */}
          <div className="flex items-center justify-between py-5 border-y border-white/10 mb-8">
            <div className="flex items-center space-x-3.5">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border border-white/15 shadow-sm shrink-0">
                <Image
                  src={post.author.avatar || "/images/harshita-avatar-main.jpg"}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">{post.author.name}</h3>
                <p className="text-xs text-zinc-400">{post.author.role}</p>
              </div>
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 text-xs font-bold transition-colors cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copied ? "Link Copied!" : "Share"}</span>
            </button>
          </div>

          {/* Video Player (If Vlog or if videoUrl exists) */}
          {videoId ? (
            <div className="mb-10">
              <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=0&rel=0&modestbranding=1`}
                  title={post.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>

              {post.videoUrl && (
                <div className="mt-3 flex items-center justify-between text-xs text-zinc-400">
                  <span>Stream full conversation in 4K resolution.</span>
                  <a
                    href={post.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-red-400 hover:text-red-300 font-semibold"
                  >
                    <YouTubeIcon className="w-3.5 h-3.5 fill-current" />
                    <span>Watch Direct on YouTube</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>
          ) : (
            post.coverImage && (
              <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-lg border border-white/10 mb-10">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            )
          )}

          {/* Main Body Content */}
          <div className="prose prose-invert prose-lg max-w-none mb-14 text-zinc-300">
            <div className="space-y-6 text-base sm:text-lg leading-relaxed whitespace-pre-line font-normal">
              {post.content}
            </div>
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap pb-8 mb-10 border-b border-white/10">
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Tags:</span>
              {post.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* WhatsApp Direct Contact */}
          <div className="bg-gradient-to-r from-emerald-950/40 via-[#141418] to-[#141418] text-white rounded-3xl p-8 border border-emerald-500/30 shadow-xl mb-14 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                Direct Production & Advisory Desk
              </span>
              <h3 className="font-serif font-bold text-xl sm:text-2xl text-white mb-1">
                Connect with Harshita Dagha
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 max-w-md">
                Available for Brand Strategy Advisory, Executive Podcast Guest Booking, and Digital PR.
              </p>
            </div>

            <a
              href="https://wa.me/918779003799?text=Hi%20Harshita%20Dagha,%20I%20would%20like%20to%20connect%20with%20your%20desk."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold shadow-lg shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all shrink-0 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="pt-10 border-t border-white/10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  More Vlogs & Articles
                </h3>
                <Link href="/blog" className="text-xs font-bold text-[#d89ba4] hover:underline">
                  View All Hub →
                </Link>
              </div>

              <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 no-scrollbar sm:grid sm:grid-cols-3 sm:gap-6 sm:mx-0 sm:px-0 sm:overflow-visible">
                {relatedPosts.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/blog/${rel.id}`}
                    className="w-[80vw] sm:w-auto shrink-0 snap-center group p-5 rounded-2xl bg-[#141418] border border-white/10 hover:border-[#d89ba4]/40 hover:shadow-lg transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#d89ba4] bg-white/5 px-2 py-0.5 rounded border border-white/10 inline-block mb-2">
                        {rel.category}
                      </span>
                      <h4 className="font-serif font-bold text-base text-white group-hover:text-[#d89ba4] transition-colors line-clamp-2 mb-2">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-zinc-400 line-clamp-2 mb-3">
                        {rel.excerpt}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-zinc-300 group-hover:text-[#d89ba4] flex items-center gap-1 group-hover:translate-x-1 transition-transform pt-2 border-t border-white/10">
                      <span>{rel.type === "vlog" ? "Watch Vlog" : "Read Article"}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </article>
    );
  }

  // -------------------------------------------------------------------------
  // RENDER LEGACY EDITORIAL ARTICLE (From src/data/articles.ts)
  // -------------------------------------------------------------------------
  const article = legacyArticle!;
  return (
    <article className="py-12 md:py-20 bg-[#0c0c0e] min-h-screen text-[#f4f4f5]">
      {/* Schema.org BlogPosting & FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BlogPosting",
                "headline": article.title,
                "description": article.excerpt,
                "datePublished": article.date,
                "image": article.image.startsWith("http") ? article.image : `https://www.harshitadagha.in${article.image}`,
                "author": {
                  "@type": "Person",
                  "name": article.author.name,
                  "jobTitle": article.author.role
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "The Harshita Dagha Show",
                  "url": "https://www.harshitadagha.in"
                },
                "mainEntityOfPage": `https://www.harshitadagha.in/blog/${article.id}`,
                "keywords": article.seoFocus
              },
              ...(article.faqs && article.faqs.length > 0 ? [{
                "@type": "FAQPage",
                "mainEntity": article.faqs.map(faq => ({
                  "@type": "Question",
                  "name": faq.question,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                  }
                }))
              }] : [])
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

        {/* Article Meta */}
        <div className="mb-6">
          <div className="flex items-center gap-2.5 flex-wrap mb-4">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 text-[#d89ba4] border border-white/10">
              {article.category}
            </span>

            {article.city && (
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/10 flex items-center gap-1">
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
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 text-xs font-bold transition-colors cursor-pointer"
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

        {/* Content */}
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

                {section.internalLink && (
                  <div className="pt-2">
                    <Link
                      href={section.internalLink.href}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-[#d89ba4] hover:underline"
                    >
                      <span>{section.internalLink.text}</span>
                      <ArrowRight className="w-4 h-4" />
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

        {/* FAQs Accordion for GEO and Search Visibility */}
        {article.faqs && article.faqs.length > 0 && (
          <div className="mb-14 pt-10 border-t border-white/10">
            <div className="flex items-center gap-2 mb-6">
              <HelpCircle className="w-5 h-5 text-[#d89ba4]" />
              <h3 className="text-2xl font-serif font-bold text-white tracking-tight">
                Frequently Asked Questions (FAQ)
              </h3>
            </div>
            <div className="space-y-3">
              {article.faqs.map((faq, fIdx) => {
                const isOpen = openFaqIndex === fIdx;
                return (
                  <div
                    key={fIdx}
                    className="rounded-2xl bg-[#141418] border border-white/10 overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : fIdx)}
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
        )}

        {/* WhatsApp Direct Contact */}
        <div className="bg-gradient-to-r from-emerald-950/40 via-[#141418] to-[#141418] text-white rounded-3xl p-8 border border-emerald-500/30 shadow-xl mb-14 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
              Direct Production & Advisory Desk
            </span>
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-white mb-1">
              Connect with Harshita Dagha
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-md">
              Available for Brand Strategy Advisory, Executive Podcast Guest Booking, and Generative Engine Optimization (GEO).
            </p>
          </div>

          <a
            href="https://wa.me/918779003799?text=Hi%20Harshita%20Dagha,%20I%20read%20your%20article%20and%20would%20like%20to%20connect%20with%20your%20desk."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold shadow-lg shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all shrink-0 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Connect on WhatsApp</span>
          </a>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="pt-10 border-t border-white/10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                More Articles & Vlogs
              </h3>
              <Link href="/blog" className="text-xs font-bold text-[#d89ba4] hover:underline">
                View All Hub →
              </Link>
            </div>

            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 no-scrollbar sm:grid sm:grid-cols-3 sm:gap-6 sm:mx-0 sm:px-0 sm:overflow-visible">
              {relatedPosts.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/blog/${rel.id}`}
                  className="w-[80vw] sm:w-auto shrink-0 snap-center group p-5 rounded-2xl bg-[#141418] border border-white/10 hover:border-[#d89ba4]/40 hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#d89ba4] bg-white/5 px-2 py-0.5 rounded border border-white/10 inline-block mb-2">
                      {rel.category}
                    </span>
                    <h4 className="font-serif font-bold text-base text-white group-hover:text-[#d89ba4] transition-colors line-clamp-2 mb-2">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-zinc-400 line-clamp-2 mb-3">
                      {rel.excerpt}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-zinc-300 group-hover:text-[#d89ba4] flex items-center gap-1 group-hover:translate-x-1 transition-transform pt-2 border-t border-white/10">
                    <span>{rel.type === "vlog" ? "Watch Vlog" : "Read Article"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </article>
  );
}
