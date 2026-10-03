import React from "react";
import Link from "next/link";
import { Scale, ArrowLeft, CheckCircle2, ShieldAlert } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | The Harshita Dagha Show",
  description: "Terms and conditions governing the use of The Harshita Dagha Show website, content streaming, intellectual property, and studio bookings.",
};

export default function TermsPage() {
  return (
    <div className="py-16 md:py-24 bg-[#fafaf9] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-slate-900 mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="mb-10 pb-8 border-b border-slate-200">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-900 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Scale className="w-3.5 h-3.5 text-amber-400" />
            <span>Legal Terms · Updated October 2026</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-slate-950 tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Please read these Terms of Service carefully before utilizing harshitadagha.in or streaming audio and video content produced by The Harshita Dagha Show and Harshita Dagha Media.
          </p>
        </div>

        {/* Terms Sections */}
        <div className="prose prose-slate max-w-none space-y-8 text-sm sm:text-base text-slate-700 leading-relaxed">
          
          <section className="space-y-3 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xs">
            <h2 className="text-xl font-serif font-bold text-slate-950">1. Acceptance of Terms</h2>
            <p>
              By accessing, browsing, or streaming content from this website, you agree to be bound by these Terms of Service, applicable laws, and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section className="space-y-3 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xs">
            <h2 className="text-xl font-serif font-bold text-slate-950">2. Intellectual Property Rights</h2>
            <p>
              All audio recordings, video masterclasses, written articles, transcripts, show notes, and brand assets on this website are the sole intellectual property of Harshita Dagha and Harshita Dagha Media, protected by Indian and international copyright and trademark laws.
            </p>
            <ul className="space-y-2 list-none pl-0">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                <span>You may stream and share episodes for non-commercial, personal listening purposes.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                <span>You may quote short audio excerpts (up to 90 seconds) with explicit attribution to The Harshita Dagha Show and a direct link to harshitadagha.in.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                <span>You may not re-upload, broadcast, commercialize, or create derivative audio works without prior written consent from our production desk.</span>
              </li>
            </ul>
          </section>

          <section className="space-y-3 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xs">
            <h2 className="text-xl font-serif font-bold text-slate-950">3. Editorial Disclaimers</h2>
            <p>
              The conversations, masterclasses, and interviews hosted on The Harshita Dagha Show represent the personal perspectives of the individual guests. They do not constitute formal investment, legal, or financial advice. Listeners are encouraged to conduct their own due diligence before making significant business or financial commitments.
            </p>
          </section>

          <section className="space-y-3 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xs">
            <h2 className="text-xl font-serif font-bold text-slate-950">4. Guest Applications & Submissions</h2>
            <p>
              Submission of a guest pitch or application through this website does not guarantee an appearance on the show. Our editorial desk reviews pitches on a rolling basis based on research criteria, scheduling availability, and thematic alignment.
            </p>
          </section>

          <section className="space-y-3 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xs">
            <h2 className="text-xl font-serif font-bold text-slate-950">5. Governing Law & Jurisdiction</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of the Republic of India. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
            </p>
            <p className="pt-2">
              For legal inquiries: <strong className="text-slate-900">legal@harshitadagha.in</strong>
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
