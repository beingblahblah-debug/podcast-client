"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Play, 
  Pause, 
  RotateCcw, 
  RotateCw, 
  Volume2, 
  VolumeX, 
  SkipBack, 
  SkipForward, 
  ChevronUp, 
  ChevronDown,
  Sparkles,
  Share2,
  ExternalLink,
  ListMusic
} from "lucide-react";
import { useAudio } from "@/context/AudioContext";

export default function AudioPlayerBar() {
  const {
    currentEpisode,
    isPlaying,
    currentTime,
    duration,
    playbackRate,
    volume,
    isMuted,
    togglePlay,
    seek,
    skip,
    setRate,
    setVolume,
    toggleMute,
    playNext,
    playPrevious
  } = useAudio();

  const [isMinimized, setIsMinimized] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!currentEpisode) return null;

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return "0:00";
    const minutes = Math.floor(secs / 60);
    const seconds = Math.floor(secs % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  const handleRateCycle = () => {
    const rates = [1, 1.25, 1.5, 1.75, 2, 0.75];
    const currentIndex = rates.indexOf(playbackRate);
    const nextRate = rates[(currentIndex + 1) % rates.length];
    setRate(nextRate);
  };

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.origin + `/episodes/${currentEpisode.id}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <aside 
      aria-label="Persistent Audio Player"
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ${
        isMinimized ? "translate-y-[calc(100%-28px)]" : "translate-y-0"
      }`}
    >
      {/* Mini Toggle handle */}
      <div className="max-w-7xl mx-auto px-4 flex justify-end">
        <button
          onClick={() => setIsMinimized(!isMinimized)}
          className="bg-white/95 border-t border-x border-slate-200 text-slate-600 hover:text-slate-900 rounded-t-lg px-3 py-1 text-xs font-medium flex items-center gap-1 shadow-sm backdrop-blur-md"
          title={isMinimized ? "Expand player" : "Minimize player"}
        >
          {isMinimized ? (
            <>
              <ChevronUp className="w-3.5 h-3.5" />
              <span>Show Player</span>
            </>
          ) : (
            <>
              <ChevronDown className="w-3.5 h-3.5" />
              <span>Minimize</span>
            </>
          )}
        </button>
      </div>

      {/* Main player bar */}
      <div className="bg-white/95 backdrop-blur-xl border-t border-slate-200/90 shadow-[0_-8px_30px_rgb(0,0,0,0.08)] py-3 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6">
          
          {/* Left: Episode info */}
          <div className="flex items-center space-x-3 w-full md:w-1/3 min-w-0">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden shrink-0 border border-slate-200 shadow-sm">
              <Image
                src={currentEpisode.coverImage || "/images/cover.jpg"}
                alt={currentEpisode.title}
                fill
                className="object-cover"
              />
              {isPlaying && (
                <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-[1px] flex items-center justify-center space-x-0.5">
                  <span className="w-1 h-3.5 bg-white rounded-full animate-wave-1" />
                  <span className="w-1 h-5 bg-amber-400 rounded-full animate-wave-2" />
                  <span className="w-1 h-3 bg-white rounded-full animate-wave-3" />
                </div>
              )}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-semibold tracking-wider text-amber-700 uppercase bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200/60">
                  Ep #{currentEpisode.number}
                </span>
                <span className="text-[10px] text-slate-400 font-medium truncate">
                  {currentEpisode.category}
                </span>
              </div>
              <Link
                href={`/episodes/${currentEpisode.id}`}
                className="text-xs sm:text-sm font-semibold text-slate-900 truncate block hover:text-amber-600 transition-colors"
                title={currentEpisode.title}
              >
                {currentEpisode.title}
              </Link>
              <p className="text-[11px] text-slate-500 truncate">
                with {currentEpisode.guest.name} ({currentEpisode.guest.role})
              </p>
            </div>
          </div>

          {/* Center: Playback & Scrubbing controls */}
          <div className="w-full md:w-2/5 flex flex-col items-center gap-1.5">
            {/* Control buttons */}
            <div className="flex items-center space-x-4">
              <button
                onClick={playPrevious}
                className="p-1.5 text-slate-400 hover:text-slate-800 transition-colors"
                title="Previous episode"
              >
                <SkipBack className="w-4 h-4" />
              </button>

              <button
                onClick={() => skip(-15)}
                className="p-1.5 text-slate-500 hover:text-slate-900 transition-colors flex items-center text-[10px] font-semibold"
                title="Back 15s"
              >
                <RotateCcw className="w-4 h-4" />
                <span className="sr-only">Back 15s</span>
              </button>

              <button
                onClick={togglePlay}
                className="w-10 h-10 rounded-full bg-slate-950 text-white flex items-center justify-center hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all shadow-md shadow-slate-900/15"
                title={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 fill-white" />
                ) : (
                  <Play className="w-4 h-4 fill-white ml-0.5" />
                )}
              </button>

              <button
                onClick={() => skip(15)}
                className="p-1.5 text-slate-500 hover:text-slate-900 transition-colors flex items-center text-[10px] font-semibold"
                title="Forward 15s"
              >
                <RotateCw className="w-4 h-4" />
                <span className="sr-only">Forward 15s</span>
              </button>

              <button
                onClick={playNext}
                className="p-1.5 text-slate-400 hover:text-slate-800 transition-colors"
                title="Next episode"
              >
                <SkipForward className="w-4 h-4" />
              </button>
            </div>

            {/* Time scrubber bar */}
            <div className="w-full flex items-center space-x-2 text-[11px] font-mono text-slate-500">
              <span className="w-9 text-right shrink-0">{formatTime(currentTime)}</span>
              <div className="relative flex-1 group py-1 flex items-center cursor-pointer">
                <input
                  type="range"
                  min="0"
                  max={duration || 100}
                  step="0.1"
                  value={currentTime}
                  onChange={(e) => seek(parseFloat(e.target.value))}
                  className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer group-hover:h-2 transition-all"
                  style={{
                    background: `linear-gradient(to right, #0f172a 0%, #0f172a ${progressPercent}%, #e2e8f0 ${progressPercent}%, #e2e8f0 100%)`
                  }}
                  aria-label="Seek time"
                />
              </div>
              <span className="w-9 text-left shrink-0">{formatTime(duration)}</span>
            </div>
          </div>

          {/* Right: Actions, Speed & Volume */}
          <div className="hidden md:flex items-center justify-end space-x-3 w-1/3">
            {/* Speed toggle */}
            <button
              onClick={handleRateCycle}
              className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
              title="Change playback speed"
            >
              {playbackRate}x
            </button>

            {/* Volume control */}
            <div className="flex items-center space-x-1.5 group">
              <button
                onClick={toggleMute}
                className="p-1.5 text-slate-500 hover:text-slate-900 transition-colors"
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-4 h-4 text-rose-500" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-16 h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                aria-label="Volume slider"
              />
            </div>

            {/* Share link button */}
            <button
              onClick={handleShare}
              className="p-1.5 text-slate-400 hover:text-slate-800 transition-colors relative"
              title="Share episode link"
            >
              <Share2 className="w-4 h-4" />
              {copied && (
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-0.5 rounded shadow">
                  Copied!
                </span>
              )}
            </button>

            {/* Link to show notes */}
            <Link
              href={`/episodes/${currentEpisode.id}`}
              className="p-1.5 text-slate-400 hover:text-slate-800 transition-colors"
              title="Open full show notes"
            >
              <ListMusic className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </aside>
  );
}
