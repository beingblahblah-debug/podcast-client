import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Calendar,
  CheckCircle2,
  HelpCircle,
  Phone,
  Mic,
  Award,
  MapPin,
  Users,
  Compass,
  Video,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Radio,
  BookOpen
} from "lucide-react";
import { KeywordLandingPageData, ALL_10_SPOKES_MAP } from "@/data/keywordLandingPages";

interface Props {
  page: KeywordLandingPageData;
  isHubPage?: boolean;
}

export default function KeywordLandingPageView({ page, isHubPage = false }: Props) {
  // Construct the JSON-LD Graph exactly per specifications:
  // (Person, ProfessionalService, FAQPage, BreadcrumbList, WebPage with dateModified)
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${page.canonicalUrl}#webpage`,
        "url": page.canonicalUrl,
        "name": page.title,
        "description": page.metaDescription,
        "datePublished": page.datePublished,
        "dateModified": page.dateModified,
        "inLanguage": "en-IN",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.harshitadagha.in/#website",
          "url": "https://www.harshitadagha.in",
          "name": "Harshita Dagha Official"
        }
      },
      {
        "@type": "Person",
        "@id": "https://www.harshitadagha.in/#person",
        "name": "Harshita Dagha",
        "jobTitle": "Podcast Host, TEDx Speaker, Branding & PR Strategist",
        "worksFor": {
          "@type": "Organization",
          "name": "Beingblahblah",
          "url": "https://www.harshitadagha.in"
        },
        "url": "https://www.harshitadagha.in",
        "image": "https://www.harshitadagha.in/images/harshita-portrait-main.jpg",
        "sameAs": [
          "https://www.harshitadagha.in/profile",
          "https://youtube.com/@harshitadagha",
          "https://www.instagram.com/beingblahblah",
          "https://www.linkedin.com/in/harshitadagha"
        ]
      },
      {
        "@type": "ProfessionalService",
        "name": "Harshita Dagha Media & Broadcast Studio",
        "url": "https://www.harshitadagha.in",
        "logo": "https://www.harshitadagha.in/images/logo.png",
        "image": "https://www.harshitadagha.in/images/harshita-portrait-main.jpg",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Bandra Kurla Complex (BKC)",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "postalCode": "400051",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 19.0657,
          "longitude": 72.8687
        },
        "areaServed": [
          "Mumbai",
          "Bengaluru",
          "Delhi NCR",
          "Hyderabad",
          "Pune",
          "Global Remote"
        ],
        "telephone": "+91 87790 03799",
        "priceRange": "₹₹₹₹"
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
            "name": "Top Female Podcasters Hub",
            "item": "https://www.harshitadagha.in/top-female-podcasters"
          },
          ...(isHubPage
            ? []
            : [
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": page.title,
                  "item": page.canonicalUrl
                }
              ])
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${page.canonicalUrl}#faq`,
        "mainEntity": page.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <article className="min-h-screen bg-[#0c0c0e] text-[#f4f4f5] selection:bg-[#d89ba4]/30 selection:text-white">
      {/* Search Engine Freeze Directive: Completely prevent indexing and ranking */}
      <meta name="robots" content="noindex, nofollow, noarchive" />
      <meta name="googlebot" content="noindex, nofollow, noarchive" />

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />


      {/* Main Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumbs"
          className="flex items-center gap-2 text-xs text-zinc-500 font-medium mb-8 flex-wrap"
        >
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/top-female-podcasters"
            className="hover:text-white transition-colors"
          >
            Top Female Podcasters
          </Link>
          {!isHubPage && (
            <>
              <span>/</span>
              <span className="text-zinc-300 font-semibold truncate max-w-[240px] sm:max-w-none">
                {page.keyword}
              </span>
            </>
          )}
        </nav>

        {/* Hero Header */}
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#d89ba4] text-xs font-bold uppercase tracking-wider mb-5">
            <Radio className="w-3.5 h-3.5 text-[#d89ba4]" />
            <span>Target Editorial Focus: {page.keyword}</span>
          </div>

          {/* SINGLE H1 AS REQUIRED */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-[1.18] mb-4">
            {page.h1}
          </h1>

          {/* REQUIRED: "Updated [date]" under every H1 */}
          <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-400 mb-6 flex-wrap">
            <span className="inline-flex items-center gap-1.5 font-semibold text-[#d89ba4] bg-[#d89ba4]/10 px-3 py-1 rounded-full border border-[#d89ba4]/20">
              <Calendar className="w-3.5 h-3.5" />
              Updated {page.updatedDate}
            </span>
            <span className="text-zinc-600">·</span>
            <span className="text-zinc-400">Monthly Editorial Review</span>
            <span className="text-zinc-600">·</span>
            <span className="text-zinc-400">Language: English (India, lang=&quot;en-IN&quot;)</span>
          </div>

          {/* Lead Paragraph */}
          <div className="rounded-2xl bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/10 p-6 sm:p-7 shadow-xl">
            <p className="text-base sm:text-lg text-zinc-200 leading-relaxed font-sans font-normal">
              {page.leadParagraph}
            </p>
          </div>
        </header>

        {/* Verified Credibility & Host Credentials Bar */}
        <section
          aria-label="Host Credentials & Transparency Bar"
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-14"
        >
          <div className="rounded-xl bg-white/[0.03] border border-white/10 p-4 text-center">
            <div className="text-xl sm:text-2xl font-serif font-bold text-white mb-0.5">
              16+ Years
            </div>
            <div className="text-[11px] sm:text-xs text-zinc-400 font-medium">
              Digital PR &amp; Media Experience
            </div>
          </div>
          <div className="rounded-xl bg-white/[0.03] border border-white/10 p-4 text-center">
            <div className="text-xl sm:text-2xl font-serif font-bold text-[#d89ba4] mb-0.5">
              TEDx Speaker
            </div>
            <div className="text-[11px] sm:text-xs text-zinc-400 font-medium">
              Storytelling &amp; Personal Branding
            </div>
          </div>
          <div className="rounded-xl bg-white/[0.03] border border-white/10 p-4 text-center">
            <div className="text-xl sm:text-2xl font-serif font-bold text-white mb-0.5">
              BKC, Mumbai
            </div>
            <div className="text-[11px] sm:text-xs text-zinc-400 font-medium">
              Flagship Studio + Multi-City
            </div>
          </div>
          <div className="rounded-xl bg-white/[0.03] border border-white/10 p-4 text-center">
            <div className="text-xl sm:text-2xl font-serif font-bold text-[#d89ba4] mb-0.5">
              180+ / 65K+
            </div>
            <div className="text-[11px] sm:text-xs text-zinc-400 font-medium">
              Interviews &amp; Listener Community
            </div>
          </div>
        </section>

        {/* Visual Feature Card: Studio Interview Photo */}
        <div className="mb-14 rounded-2xl overflow-hidden border border-white/10 bg-[#14141a] grid grid-cols-1 md:grid-cols-12 gap-0 shadow-2xl">
          <div className="md:col-span-5 relative min-h-[300px] md:min-h-full">
            <Image
              src="/images/harshita-dagha-studio-mic.jpg"
              alt="Harshita Dagha recording a podcast episode in her studio with broadcast microphone"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-center">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#d89ba4] mb-2">
              <Mic className="w-3.5 h-3.5" />
              <span>Being Blah Blah · Flagship Broadcasts</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-3">
              Unscripted Masterclasses with India&apos;s Leading Founders &amp; Experts
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed mb-5">
              Operating out of Bandra Kurla Complex (BKC) Mumbai and on-location across Bengaluru, Delhi NCR, and Pune, Harshita Dagha hosts conversations that unpack business unit economics, legal disputes, clinical healthcare, and AI visibility in plain language.
            </p>
            <div className="flex flex-wrap gap-2.5">
              <Link
                href="/episodes"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#d89ba4] text-[#0c0c0e] text-xs font-bold hover:bg-[#e4b5bd] transition-colors"
              >
                <span>Browse Masterclasses</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/be-a-guest"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white text-xs font-bold hover:bg-white/10 transition-colors"
              >
                <span>Pitch to Be a Guest</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Editorial Body Sections: Marked H2s */}
        <div className="space-y-12 mb-16">
          {page.sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-24 rounded-2xl bg-white/[0.02] border border-white/[0.08] p-6 sm:p-8"
            >
              {/* EXACT H2 TAG */}
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4 tracking-tight">
                {section.h2}
              </h2>

              <div className="space-y-4 text-zinc-300 leading-relaxed text-sm sm:text-base">
                {section.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {section.bulletPoints && section.bulletPoints.length > 0 && (
                <div className="mt-5 space-y-2.5">
                  {section.bulletPoints.map((bp, bpIdx) => {
                    const colonIdx = bp.indexOf(":");
                    const hasLabel = colonIdx !== -1 && colonIdx < 45;
                    const label = hasLabel ? bp.slice(0, colonIdx) : "";
                    const rest = hasLabel ? bp.slice(colonIdx + 1) : bp;

                    return (
                      <div
                        key={bpIdx}
                        className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-colors"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#d89ba4] shrink-0 mt-0.5" />
                        <div className="text-sm text-zinc-200 leading-snug">
                          {hasLabel ? (
                            <>
                              <strong className="text-white font-semibold">
                                {label}:
                              </strong>
                              {rest}
                            </>
                          ) : (
                            bp
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {section.callout && (
                <div className="mt-5 p-4 rounded-xl bg-[#d89ba4]/10 border border-[#d89ba4]/30 text-zinc-200">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#d89ba4] mb-1">
                    {section.callout.title}
                  </div>
                  <div className="text-sm italic">{section.callout.text}</div>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Visible Frequently Asked Questions (H2) matching schema word-for-word */}
        <section
          id="frequently-asked-questions"
          className="mb-16 scroll-mt-24 rounded-2xl bg-white/[0.03] border border-white/10 p-6 sm:p-8"
        >
          <div className="flex items-center gap-2 mb-2 text-[#d89ba4] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Verified Knowledge Base</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {page.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-white/[0.03] border border-white/5 p-5 hover:border-white/15 transition-colors"
              >
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 flex items-start gap-2.5">
                  <span className="text-[#d89ba4] font-serif font-bold">Q{idx + 1}.</span>
                  <span>{faq.question}</span>
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* HUB AND SPOKE LINKING WIDGET */}
        <section
          aria-label="Hub and Spoke Topic Directory"
          className="mb-14 rounded-2xl bg-gradient-to-br from-[#1c1c24] to-[#121218] border border-[#d89ba4]/30 p-6 sm:p-8 shadow-xl"
        >
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#d89ba4]">
              <Compass className="w-4 h-4" />
              <span>Topic Hub &amp; Spoke Network</span>
            </div>
            {!isHubPage && (
              <Link
                href="/top-female-podcasters"
                className="inline-flex items-center gap-1 text-xs font-bold text-white hover:text-[#d89ba4] underline underline-offset-4 transition-colors"
              >
                <span>View National Hub Overview</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>

          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-3">
            {isHubPage
              ? "All 10 Dedicated Keyword Spokes in This Guide"
              : "Related Spoke Topics in This Editorial Cluster"}
          </h3>
          {/* New 2026 Master Guides Banner */}
          <div className="mb-6 p-5 rounded-2xl bg-[#d89ba4]/10 border border-[#d89ba4]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-wider font-bold text-[#d89ba4] mb-1">
                New 2026 Master Editorial Benchmarks
              </div>
              <div className="text-xs sm:text-sm text-zinc-300 flex flex-wrap gap-x-5 gap-y-1.5 mt-1">
                <Link
                  href="/blog/best-female-podcasts-india-city-guide-october-2026"
                  className="text-white font-semibold underline underline-offset-4 hover:text-[#d89ba4] transition-colors"
                >
                  See the city-by-city guide for October 2026 →
                </Link>
                <Link
                  href="/blog/best-podcast-in-india-top-podcasters-best-indian-podcasts-guide"
                  className="text-white font-semibold underline underline-offset-4 hover:text-[#d89ba4] transition-colors"
                >
                  Best podcast in India: the 2026 guide by language, format and platform →
                </Link>
              </div>
            </div>
          </div>

          {isHubPage ? (
            /* Render all 10 spokes on the Hub page */
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {ALL_10_SPOKES_MAP.map((spoke) => (
                <Link
                  key={spoke.num}
                  href={spoke.slug}
                  className="group rounded-xl bg-white/[0.03] border border-white/10 p-4 hover:border-[#d89ba4]/50 hover:bg-white/[0.06] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[11px] font-mono text-[#d89ba4] uppercase font-bold tracking-wider">
                        Page {spoke.num}
                      </span>
                      {spoke.isHub && (
                        <span className="text-[10px] font-bold uppercase bg-[#d89ba4]/20 text-[#d89ba4] px-2 py-0.5 rounded-full border border-[#d89ba4]/30">
                          Main Hub
                        </span>
                      )}
                    </div>
                    <div className="text-sm font-bold text-white group-hover:text-[#d89ba4] transition-colors mb-1">
                      {spoke.title}
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {spoke.description}
                    </p>
                  </div>
                  <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-zinc-400 group-hover:text-white transition-colors">
                    <span>Read Guide</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            /* Render Sibling Spokes for non-hub spoke pages */
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {page.siblingLinks.map((sibling, sIdx) => (
                <Link
                  key={sIdx}
                  href={sibling.href}
                  className="group rounded-xl bg-white/[0.03] border border-white/10 p-4 hover:border-[#d89ba4]/50 hover:bg-white/[0.06] transition-all flex flex-col justify-between"
                >
                  <div>
                    {sibling.badge && (
                      <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider text-[#d89ba4] bg-white/5 px-2 py-0.5 rounded border border-white/10 mb-2">
                        {sibling.badge}
                      </span>
                    )}
                    <h4 className="text-sm font-bold text-white group-hover:text-[#d89ba4] transition-colors mb-1.5">
                      {sibling.label}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {sibling.description}
                    </p>
                  </div>
                  <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-zinc-400 group-hover:text-white transition-colors">
                    <span>Explore Spoke</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* Work With Harshita / Call to Action Box */}
        <section
          aria-label="Contact and Collaboration"
          className="rounded-3xl bg-gradient-to-r from-[#d89ba4]/20 via-[#191924] to-[#121218] border border-[#d89ba4]/40 p-7 sm:p-10 text-center shadow-2xl"
        >
          <div className="max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#d89ba4] border border-white/10 text-xs font-bold uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>Work With Harshita Dagha</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
              Book a Featured Executive Masterclass or Studio Recording
            </h3>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6">
              Services include 60 to 90 minute featured executive interviews, corporate podcast production, keynote moderation, host-read brand integrations, and Generative Engine Optimization advisory.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="tel:+918779003799"
                data-track="call-click"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#d89ba4] text-[#0c0c0e] font-bold text-sm hover:bg-[#e4b5bd] transition-all shadow-lg hover:shadow-[#d89ba4]/20"
              >
                <Phone className="w-4 h-4" />
                <span>Call Studio: +91 87790 03799</span>
              </a>
              <Link
                href="/be-a-guest"
                data-track="form-submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 text-white font-bold text-sm border border-white/20 hover:bg-white/20 transition-all"
              >
                <span>Pitch to Be a Guest</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <p className="text-xs text-zinc-500 mt-4">
              Flagship Studio: Bandra Kurla Complex (BKC), Mumbai 400051 · On-location in Bengaluru, Delhi NCR, and Pune
            </p>
          </div>
        </section>
      </div>
    </article>
  );
}
