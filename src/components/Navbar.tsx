"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Radio, 
  Menu, 
  X, 
  Sparkles, 
  Headphones, 
  Search, 
  Play, 
  ExternalLink,
  Flame
} from "lucide-react";
import { useAudio } from "@/context/AudioContext";
import { EPISODES } from "@/data/episodes";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { playEpisode, isPlaying, currentEpisode, togglePlay } = useAudio();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Episodes", href: "/episodes" },
    { 
      label: "Top 10 Chart", 
      href: "/top-10", 
      badge: "Trending" 
    },
    { label: "About Jessica", href: "/about" },
    { label: "Be a Guest", href: "/be-a-guest" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  const handlePlayLatest = () => {
    if (EPISODES.length > 0) {
      if (currentEpisode?.id === EPISODES[0].id) {
        togglePlay();
      } else {
        playEpisode(EPISODES[0]);
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      {/* Top micro announcement bar */}
      <div className="bg-slate-900 text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-amber-400 text-slate-950">
              NEW EPISODE
            </span>
            <span className="truncate text-slate-300 hidden sm:inline">
              Ep #128: The Architecture of Ambition with Dr. Aris Thorne is now live!
            </span>
            <span className="truncate text-slate-300 sm:hidden">
              Ep #128 is now live!
            </span>
          </div>

          <div className="flex items-center space-x-4 text-[11px] text-slate-300">
            <a 
              href="https://spotify.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <span>Spotify</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
            <span className="text-slate-600">|</span>
            <a 
              href="https://apple.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-violet-400 transition-colors flex items-center gap-1"
            >
              <span>Apple Podcasts</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center space-x-3.5 group">
            <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-tr from-slate-950 via-slate-800 to-amber-600 flex items-center justify-center text-white shadow-md shadow-slate-900/10 group-hover:scale-105 transition-transform">
              <Radio className="w-5 h-5 text-amber-300" />
              <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif tracking-wider font-bold text-lg sm:text-xl text-slate-900 leading-tight">
                THE ELEVATE
              </span>
              <span className="text-[11px] font-medium tracking-widest text-slate-500 uppercase">
                with Jessica Chen
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "text-slate-950 bg-slate-100 font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {link.label === "Top 10 Chart" && (
                      <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
                    )}
                    {link.label}
                    {link.badge && (
                      <span className="ml-1 text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
                        {link.badge}
                      </span>
                    )}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Action Area */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={handlePlayLatest}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-950 text-white hover:bg-slate-800 text-sm font-medium transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                <Play className="w-2.5 h-2.5 fill-white text-white ml-0.5" />
              </div>
              <span>{isPlaying && currentEpisode?.id === EPISODES[0].id ? "Pause Latest" : "Play Latest"}</span>
            </button>

            <Link
              href="/be-a-guest"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200/80 hover:bg-amber-100 text-sm font-medium transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Pitch as Guest</span>
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={handlePlayLatest}
              className="p-2 rounded-xl bg-slate-950 text-white"
              aria-label="Play latest"
            >
              <Play className="w-4 h-4 fill-white" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white/98 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  isActive
                    ? "bg-slate-100 text-slate-950 font-semibold"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <div className="flex items-center gap-2">
                  {link.label === "Top 10 Chart" && (
                    <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
                  )}
                  <span>{link.label}</span>
                </div>
                {link.badge && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                    {link.badge}
                  </span>
                )}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <Link
              href="/be-a-guest"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-xl bg-amber-500 text-slate-950 font-medium text-sm hover:bg-amber-400"
            >
              Pitch as a Guest
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
