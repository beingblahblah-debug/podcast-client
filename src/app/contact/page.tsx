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
      q: "How do show sponsorships work on The Harshita Dagha Show?",
      a: "We only accept 2 vetted sponsors per episode to preserve listener respect. All sponsor reads are personal, authentic endorsements written and delivered directly by Harshita Dagha."
    },
    {
      q: "Where is the flagship studio located?",
      a: "Our private broadcast studio is located in Bandra Kurla Complex (BKC), Mumbai. We provide full studio logistics for visiting founders and CXOs traveling from Bengaluru, Delhi NCR, or abroad."
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
            For brand sponsorships, press interviews with Harshita Dagha, or studio inquiries, reach out directly to our production office.
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
                    <option value="press">Press & Speaking Engagement for Harshita</option>
                    <option value="studio">Mumbai BKC Studio Booking / Production</option>
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
            
            {/* Direct WhatsApp Chat Box */}
            <div className="rounded-3xl bg-[#25D366] text-white p-7 shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span className="text-xs font-black uppercase tracking-wider">Fastest Direct Route</span>
              </div>
              <h3 className="font-serif font-bold text-xl mb-1 text-white">
                Chat Directly on WhatsApp
              </h3>
              <p className="text-xs text-emerald-50 mb-4 leading-relaxed">
                Connect directly with Harshita Dagha Maisheri&apos;s executive office for branding, PR, speaking engagements, and podcast inquiries.
              </p>
              <a
                href="https://wa.me/918779003799?text=Hi%20Harshita%20Dagha%20Maisheri,%20I%20visited%20your%20website%20and%20would%20like%20to%20connect%20with%20your%20production%20office."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-950 hover:bg-slate-900 text-white text-xs font-bold transition-all shadow-md"
              >
                <span>WhatsApp: +91 87790 03799</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              </a>
            </div>

            {/* Media Kit Card */}
            <div className="rounded-3xl bg-gradient-to-br from-amber-500 to-amber-600 text-slate-950 p-8 shadow-xl">
              <span className="text-xs font-black uppercase tracking-wider bg-slate-950 text-amber-300 px-3 py-1 rounded-full mb-4 inline-block">
                Brand Partnerships & PR
              </span>
              <h3 className="font-serif font-bold text-2xl mb-3 text-slate-950">
                Official Media & Speaker Kit
              </h3>
              <p className="text-xs sm:text-sm text-slate-900/90 leading-relaxed mb-6 font-medium">
                Detailed breakdowns of audience demographics, TEDx speaker topics, branding & PR advisory packages, and celebrity podcast formats.
              </p>
              <a
                href="https://wa.me/918779003799?text=Hi%20Harshita,%20please%20share%20your%20Media%20Kit%20and%20rates."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-950 hover:bg-slate-900 text-white text-xs font-bold shadow-md transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-amber-400" />
                <span>Request Media Kit (PDF)</span>
              </a>
            </div>

            {/* Direct Details */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs space-y-4">
              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Email Us</h4>
                  <a href="mailto:beingblahblah@gmail.com" className="text-xs text-amber-800 font-semibold hover:underline mt-0.5 block">
                    beingblahblah@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Direct WhatsApp / Phone</h4>
                  <a href="https://wa.me/918779003799" target="_blank" rel="noreferrer" className="text-xs text-slate-800 font-semibold hover:underline mt-0.5 block">
                    +91 87790 03799 (~ beingblahblah)
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-slate-800 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Studio Headquarters</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Bandra Kurla Complex (BKC)<br />Mumbai, Maharashtra 400051, India
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
