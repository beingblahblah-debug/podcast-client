"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const whatsappUrl = "https://wa.me/918779003799?text=Hi%20Harshita%20Dagha,%20I%20would%20like%20to%20connect%20regarding%20branding,%20PR,%20or%20podcast%20booking.";

  const navLinks = [
    { label: "Reels & Clips", href: "/highlights" },
    { label: "Services", href: "/services" },
    { label: "Harshita Profile", href: "/profile" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-3 sm:top-4 z-50 w-full transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Luxury Dark Floating Glass Pill Container - Exactly aligned from start of Box 1 to end of Box 4 */}
        <div className="w-full relative rounded-full bg-[#131317]/95 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)] px-5 sm:px-8 py-2.5 sm:py-3 flex items-center justify-between transition-all">
          
          {/* Subtle glossy sheen highlight */}
          <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

          {/* 1. Left Brand Identity */}
          <Link 
            href="/" 
            title="Harshita Dagha - Return to Home" 
            aria-label="Harshita Dagha - Return to Home"
            className="flex items-center group shrink-0 cursor-pointer gap-3"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-black border border-white/15 shadow-sm flex items-center justify-center shrink-0">
              <Image
                src="/images/logo.png"
                alt="Harshita Dagha Official Monogram Logo"
                width={40}
                height={40}
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-serif font-bold text-base sm:text-lg lg:text-xl text-white leading-none tracking-tight group-hover:text-[#d89ba4] transition-colors whitespace-nowrap">
                Harshita Dagha
              </span>
              <span className="text-[9px] font-bold tracking-[0.24em] uppercase text-zinc-400 mt-1">
                The Show
              </span>
            </div>
          </Link>

          {/* 2. Center Desktop Navigation Links (Centrally spaced with generous breathing room) */}
          <nav className="hidden lg:flex items-center justify-center gap-1 xl:gap-2 mx-auto px-2 xl:px-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`h-9 inline-flex items-center justify-center px-3 xl:px-4 rounded-full text-xs xl:text-sm font-medium tracking-normal transition-all whitespace-nowrap shrink-0 border ${
                    isActive
                      ? "text-white bg-white/10 font-bold border-white/10 shadow-xs"
                      : "text-zinc-300 hover:text-white hover:bg-white/5 border-transparent"
                  }`}
                >
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* 3. Right Action CTAs (Generous spacing to ensure Contact and WhatsApp never collide) */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0 ml-6 lg:ml-8">
            {/* WhatsApp Pill */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex h-9 items-center justify-center gap-2 px-4 rounded-full bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 text-xs font-semibold shadow-sm hover:scale-105 active:scale-95 transition-all shrink-0"
            >
              <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>WhatsApp</span>
            </a>

            {/* Book Podcast Pill */}
            <Link
              href="/be-a-guest"
              className="hidden sm:inline-flex h-9 items-center justify-center gap-1.5 px-4 sm:px-4.5 rounded-full bg-[#d89ba4] hover:bg-[#e2a8b1] text-zinc-950 text-xs font-bold border border-[#d89ba4] transition-all shadow-md hover:scale-105 active:scale-95 shrink-0"
            >
              <span>Book Podcast</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile quick actions & hamburger trigger */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden h-9 w-9 rounded-full bg-emerald-600/30 border border-emerald-500/40 text-emerald-400 shadow-sm flex items-center justify-center"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`h-9 w-9 rounded-full border transition-colors flex items-center justify-center ${
                  mobileMenuOpen 
                    ? "bg-white/20 border-white/30 text-white" 
                    : "border-white/10 text-zinc-300 hover:bg-white/5"
                }`}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Mobile Dropdown Overlay */}
      {mobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="absolute top-2 left-4 right-4 z-50 lg:hidden rounded-3xl border border-white/10 bg-[#131317]/98 backdrop-blur-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] space-y-3">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-medium transition-all ${
                        isActive
                          ? "bg-white/10 text-white font-bold border border-white/10"
                          : "text-zinc-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className={`w-4 h-4 ${isActive ? "text-[#d89ba4]" : "text-zinc-500"}`} />
                    </Link>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3.5 rounded-full bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 font-semibold text-center text-sm shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  <span>Connect on WhatsApp</span>
                </a>
                <Link
                  href="/be-a-guest"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3.5 rounded-full bg-[#d89ba4] hover:bg-[#e2a8b1] text-zinc-950 font-bold text-center text-sm shadow-md flex items-center justify-center gap-1.5 transition-transform active:scale-95"
                >
                  <span>Book / Pitch Podcast</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

