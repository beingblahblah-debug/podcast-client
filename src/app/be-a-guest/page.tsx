"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  CheckCircle2, 
  Send, 
  HelpCircle, 
  Mic2, 
  Calendar, 
  Radio,
  FileCheck,
  Building,
  User,
  Mail,
  Video
} from "lucide-react";

export default function BeAGuestPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    role: "",
    topic: "",
    hook: "",
    links: "",
    mode: "in-person"
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Mic2 className="w-3.5 h-3.5 text-amber-600" />
            <span>Editorial Pitch Desk</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-950 tracking-tight mb-4">
            Be a Guest on The Harshita Dagha Show
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            We review every single guest proposal with care. If you have an unprecedented perspective or transformative life journey, we want to hear from you.
          </p>
        </div>

        {/* 3 Steps: How Guest Selection Works */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-900 font-bold font-mono flex items-center justify-center mb-4">
              01
            </div>
            <h3 className="font-serif font-bold text-lg text-slate-900 mb-2">Editorial Review</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Harshita and our research team review your submission within 7 business days for intellectual rigor and unique narrative depth.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-slate-100 text-slate-900 font-bold font-mono flex items-center justify-center mb-4">
              02
            </div>
            <h3 className="font-serif font-bold text-lg text-slate-900 mb-2">Pre-Show Debrief</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              A 20-minute calibration call to align on conversational territory, unlock unexplored stories, and discard cookie-cutter PR answers.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs">
            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-900 font-bold font-mono flex items-center justify-center mb-4">
              03
            </div>
            <h3 className="font-serif font-bold text-lg text-slate-900 mb-2">Recording & Broadcast</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              60-90 minutes of relaxed, broadcast-grade recording in Mumbai Studio HQ (BKC) or 4K remote studio, published to 65,000+ active listeners.
            </p>
          </div>
        </div>

        {/* Fast-Track WhatsApp Pitch Option */}
        <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-emerald-500/40 shadow-xl mb-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Direct WhatsApp Desk</span>
            </div>
            <h3 className="font-serif font-bold text-xl sm:text-2xl text-white mb-1">
              Prefer a direct conversation?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed">
              If your schedule is time-sensitive or you represent a prominent speaker, message Harshita Dagha&apos;s executive producer directly on WhatsApp.
            </p>
          </div>

          <a
            href="https://wa.me/919876543210?text=Hi%20Harshita%20Dagha%20Media,%20I%20would%20like%20to%20pitch%20a%20guest%20/%20discuss%20an%20interview%20appearance%20on%20The%20Harshita%20Dagha%20Show."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold shadow-lg shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all shrink-0 cursor-pointer"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <span>Fast-Track Pitch on WhatsApp</span>
          </a>
        </div>

        {/* Application Form Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl relative overflow-hidden">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950 mb-3">
                Application Received!
              </h2>
              <p className="text-slate-600 text-sm sm:text-base max-w-md mx-auto mb-8 leading-relaxed">
                Thank you, <strong>{formData.fullName}</strong>. Our editorial desk has received your pitch for &ldquo;{formData.topic || "your proposed topic"}&rdquo;. We will review your materials and contact you at <strong>{formData.email}</strong> shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-3 rounded-full bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
              >
                Submit Another Pitch
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-slate-100 pb-4 mb-6">
                <h2 className="text-2xl font-serif font-bold text-slate-950">
                  Guest Pitch Application
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Please provide as much specific detail as possible. Avoid generic corporate biographies.
                </p>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Jennifer Alvarez"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      required
                      placeholder="jennifer@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Role & Organization */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Your Title / Role *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Founder & Chief Scientist"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Company / Institution *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Quantum Genomics Lab"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Working Title / Core Topic */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Proposed Conversation Topic / Working Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rebuilding Cellular Aging: What 10 Years in Gene Therapies Taught Us"
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-all"
                />
              </div>

              {/* The Hook */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Why does this conversation matter right now? (The Hook) *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="What is the contrarian truth you believe that most people in your field disagree with? What personal crucible moment forced this perspective?"
                  value={formData.hook}
                  onChange={(e) => setFormData({ ...formData, hook: e.target.value })}
                  className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-all"
                />
              </div>

              {/* Links */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Links to Past Talks, Articles, or LinkedIn Profile
                </label>
                <input
                  type="text"
                  placeholder="https://linkedin.com/in/... or https://youtube.com/..."
                  value={formData.links}
                  onChange={(e) => setFormData({ ...formData, links: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-all"
                />
              </div>

              {/* Recording Format */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Preferred Recording Format
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className={`p-4 rounded-2xl border cursor-pointer flex items-center gap-3 transition-all ${
                    formData.mode === "in-person"
                      ? "border-slate-900 bg-slate-50 ring-1 ring-slate-900"
                      : "border-slate-200 hover:bg-slate-50"
                  }`}>
                    <input
                      type="radio"
                      name="mode"
                      value="in-person"
                      checked={formData.mode === "in-person"}
                      onChange={() => setFormData({ ...formData, mode: "in-person" })}
                      className="sr-only"
                    />
                    <Mic2 className="w-5 h-5 text-amber-600 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-slate-900">In-Person Studio A</p>
                      <p className="text-[11px] text-slate-500">Brooklyn, New York recording suite</p>
                    </div>
                  </label>

                  <label className={`p-4 rounded-2xl border cursor-pointer flex items-center gap-3 transition-all ${
                    formData.mode === "remote"
                      ? "border-slate-900 bg-slate-50 ring-1 ring-slate-900"
                      : "border-slate-200 hover:bg-slate-50"
                  }`}>
                    <input
                      type="radio"
                      name="mode"
                      value="remote"
                      checked={formData.mode === "remote"}
                      onChange={() => setFormData({ ...formData, mode: "remote" })}
                      className="sr-only"
                    />
                    <Video className="w-5 h-5 text-indigo-600 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-slate-900">Remote Studio 4K</p>
                      <p className="text-[11px] text-slate-500">Hi-fi audio recording kit mailed to you</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Pitch to Editorial Team</span>
                </button>
                <p className="text-center text-xs text-slate-400 mt-3">
                  We treat all proposals with absolute discretion and non-disclosure standards.
                </p>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
