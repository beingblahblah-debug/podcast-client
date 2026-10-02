"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Download, 
  ChevronDown, 
  HelpCircle,
  Building,
  FileSpreadsheet
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "sponsorship",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqs = [
    {
      q: "What is your typical recording schedule & lead time?",
      a: "We record 4 to 6 weeks in advance of distribution. Episodes are released every Tuesday and Thursday at 6:00 AM Eastern Time."
    },
    {
      q: "How do show sponsorships work on The Elevate Podcast?",
      a: "We only accept 2 sponsors per episode to preserve listener respect. All sponsor reads are personal, authentic endorsements written and delivered directly by Jessica Chen."
    },
    {
      q: "Where is Studio A located?",
      a: "Our private broadcast studio is located in DUMBO, Brooklyn, New York. We provide full car service for visiting guests flying into JFK or LGA."
    },
    {
      q: "Can I syndicate or clip video content for my social channels?",
      a: "Yes! Every guest receives a curated package of five 4K vertical clips, high-resolution portrait photography, and quote tiles for personal distribution."
    }
  ];

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5 text-amber-600" />
            <span>Direct Inquiries</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-slate-950 tracking-tight mb-4">
            Connect With The Show
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            For brand sponsorships, press interviews with Jessica Chen, or studio inquiries, reach out directly to our production office.
          </p>
        </div>

        {/* 2-Column Grid: Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Left Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xl">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-slate-950 mb-2">Message Sent</h3>
                <p className="text-slate-600 text-sm max-w-sm mx-auto mb-6">
                  Thank you, <strong>{formData.name}</strong>. Our executive producer will respond to <strong>{formData.email}</strong> within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 rounded-full bg-slate-900 text-white text-xs font-semibold"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-serif font-bold text-xl text-slate-950 mb-4">
                  Send a Message
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Inquiry Type
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-all cursor-pointer"
                  >
                    <option value="sponsorship">Show Sponsorship & Partnership</option>
                    <option value="press">Press & Speaking Engagement for Jessica</option>
                    <option value="studio">Studio A Booking / Rental</option>
                    <option value="other">General Inquiries</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Your Message *
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Tell us about your brand, budget, timeline, or requested engagement..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-slate-900 focus:bg-white transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Production Desk</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Information & Media Kit */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Media Kit Card */}
            <div className="rounded-3xl bg-gradient-to-br from-amber-500 to-amber-600 text-slate-950 p-8 shadow-xl">
              <span className="text-xs font-black uppercase tracking-wider bg-slate-950 text-amber-300 px-3 py-1 rounded-full mb-4 inline-block">
                Brand Partnerships
              </span>
              <h3 className="font-serif font-bold text-2xl mb-3 text-slate-950">
                2026 Official Media Kit
              </h3>
              <p className="text-xs sm:text-sm text-slate-900/90 leading-relaxed mb-6 font-medium">
                Detailed breakdowns of audience demographics, CPM rates, audio & video integration formats, and retention heatmaps.
              </p>
              <button
                onClick={() => alert("Downloading The Elevate Podcast 2026 Media Kit (PDF)...")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-950 hover:bg-slate-900 text-white text-xs font-bold shadow-md transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-amber-400" />
                <span>Download Media Kit (PDF)</span>
              </button>
            </div>

            {/* Direct Details */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-4">
              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Email Us</h4>
                  <p className="text-xs text-slate-600 mt-0.5">producer@elevatepodcast.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Studio A Address</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    55 Water Street, DUMBO<br />Brooklyn, NY 11201
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* FAQs Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-slate-950">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 text-xs mt-1">Everything you need to know about the show.</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${openFaq === idx ? "rotate-180" : ""}`} />
                </button>
                {openFaq === idx && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
