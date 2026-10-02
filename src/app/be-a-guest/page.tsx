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
            Be a Guest on The Elevate Show
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
              Jessica and our research team review your submission within 7 business days for intellectual rigor and unique narrative depth.
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
              60-90 minutes of relaxed, broadcast-grade recording in Brooklyn Studio A or 4K remote studio, published to 65,000+ active listeners.
            </p>
          </div>
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
