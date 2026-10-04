import React from "react";
import Link from "next/link";
import { ShieldCheck, ArrowLeft, Lock, Eye, FileText, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | The Harshita Dagha Show",
  description: "Privacy policy for The Harshita Dagha Show, detailing data collection, listener privacy, cookies, and protection standards.",
};

export default function PrivacyPage() {
  return (
    <div className="py-16 md:py-24 bg-[#0c0c0e] min-h-screen text-[#f4f4f5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="mb-10 pb-8 border-b border-white/10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#d89ba4] text-xs font-semibold tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#d89ba4]" />
            <span>Official Policy · Effective October 2026</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            The Harshita Dagha Show (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), operated from Bandra Kurla Complex (BKC), Mumbai, is committed to safeguarding listener and executive visitor privacy in full compliance with the Digital Personal Data Protection Act (DPDP), GDPR, and Google search quality guidelines.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-6 text-sm sm:text-base text-zinc-300 leading-relaxed">
          
          <section className="space-y-3 bg-[#141418] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl">
            <h2 className="text-xl font-serif font-bold text-white flex items-center gap-2">
              <Eye className="w-5 h-5 text-[#d89ba4] shrink-0" />
              <span>1. Information We Collect</span>
            </h2>
            <p className="text-zinc-400">
              We collect information that you voluntarily provide when submitting a guest application, booking studio services, subscribing to The Harshita Dagha Letter, or contacting our executive desk via WhatsApp:
            </p>
            <ul className="space-y-2.5 list-none pl-0 pt-2">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#d89ba4] mt-1 shrink-0" />
                <span><strong className="text-white">Contact Details:</strong> Name, professional title, corporate affiliation, business email, and phone number.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#d89ba4] mt-1 shrink-0" />
                <span><strong className="text-white">Editorial Pitches:</strong> Biographical information, published works, media appearances, and company funding details submitted for podcast booking.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#d89ba4] mt-1 shrink-0" />
                <span><strong className="text-white">Technical Log Data:</strong> Anonymized browser type, IP address, referral URLs, and pages visited to optimize audio streaming performance.</span>
              </li>
            </ul>
          </section>

          <section className="space-y-3 bg-[#141418] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl">
            <h2 className="text-xl font-serif font-bold text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#d89ba4] shrink-0" />
              <span>2. How We Use Your Information</span>
            </h2>
            <p className="text-zinc-400">
              Collected information is used strictly for legitimate editorial and production purposes:
            </p>
            <ul className="space-y-2.5 list-none pl-0 pt-2">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#d89ba4] mt-1 shrink-0" />
                <span>Reviewing and scheduling guest appearances for The Harshita Dagha Show.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#d89ba4] mt-1 shrink-0" />
                <span>Delivering weekly Sunday show notes and editorial debriefs via email.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#d89ba4] mt-1 shrink-0" />
                <span>Responding to corporate brand sponsorship inquiries and studio bookings.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#d89ba4] mt-1 shrink-0" />
                <span>Ensuring website security, preventing abuse, and complying with legal obligations.</span>
              </li>
            </ul>
          </section>

          <section className="space-y-3 bg-[#141418] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl">
            <h2 className="text-xl font-serif font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#d89ba4] shrink-0" />
              <span>3. Data Sharing & Third Parties</span>
            </h2>
            <p className="text-zinc-400">
              We do not sell, rent, or trade your personal data to any advertisers or third-party brokers. Data is only shared with verified service providers necessary to operate our podcast distribution (e.g., Apple Podcasts, Spotify, secure email delivery, and hosting infrastructure).
            </p>
          </section>

          <section className="space-y-3 bg-[#141418] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl">
            <h2 className="text-xl font-serif font-bold text-white">4. Cookies & Analytics</h2>
            <p className="text-zinc-400">
              We use essential and privacy-friendly analytics cookies to measure audio play completion rates and page load speeds. You can configure your browser to decline non-essential cookies without affecting your ability to stream podcast episodes.
            </p>
          </section>

          <section className="space-y-3 bg-[#141418] p-6 sm:p-8 rounded-2xl border border-white/10 shadow-xl">
            <h2 className="text-xl font-serif font-bold text-white">5. Your Legal Rights & Data Inquiries</h2>
            <p className="text-zinc-400">
              Under applicable data protection laws, you retain the right to request access to, correction of, or deletion of your personal data held by our editorial desk.
            </p>
            <p className="pt-2 text-zinc-400">
              For any privacy inquiries or data removal requests, contact our privacy desk directly at:
              <br />
              <strong className="text-white">Email:</strong> privacy@harshitadagha.in
              <br />
              <strong className="text-white">Studio Address:</strong> Bandra Kurla Complex (BKC), Mumbai, Maharashtra 400051, India.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}
