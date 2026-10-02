"use client";

import React, { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  Play, 
  Pause, 
  Clock, 
  Calendar, 
  Share2, 
  Download, 
  CheckCircle2, 
  Bookmark, 
  ArrowLeft, 
  ListOrdered, 
  FileText, 
  Sparkles,
  Radio,
  MessageSquare,
  Send,
  ExternalLink
} from "lucide-react";
import { XTwitterIcon, LinkedInIcon } from "@/components/SocialIcons";
import { EPISODES, Episode } from "@/data/episodes";
import { useAudio } from "@/context/AudioContext";
import EpisodeCard from "@/components/EpisodeCard";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function EpisodeDetailPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const episode = EPISODES.find((ep) => ep.id === resolvedParams.id);

  if (!episode) {
    notFound();
  }

  const { playEpisode, isPlaying, currentEpisode, togglePlay, currentTime, duration, seek } = useAudio();
  const isThisPlaying = isPlaying && currentEpisode?.id === episode.id;

  const [activeTab, setActiveTab] = useState<"notes" | "transcript">("notes");
  const [copied, setCopied] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState<Array<{ name: string; time: string; text: string }>>([
    {
      name: "Marcus Aurelius Fan",
      time: "2 days ago",
      text: "The point at chapter 18:42 completely changed how I look at our quarterly roadmap. Mandatory listening for any startup founder."
    },
    {
      name: "Evelyn K.",
      time: "4 days ago",
      text: "Harshita asks the questions everyone in the audience is thinking but too hesitant to say out loud. Incredible interview!"
    }
  ]);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentText.trim()) {
      setComments([
        {
          name: "Fellow Listener",
          time: "Just now",
          text: commentText.trim()
        },
        ...comments
      ]);
      setCommentText("");
    }
  };

  const relatedEpisodes = EPISODES.filter(
    (ep) => ep.id !== episode.id && ep.category === episode.category
  ).slice(0, 2);

  const fallbackRelated = relatedEpisodes.length > 0 
    ? relatedEpisodes 
    : EPISODES.filter((ep) => ep.id !== episode.id).slice(0, 2);

  return (
    <div className="py-10 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          href="/episodes"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Episodes</span>
        </Link>

        {/* Episode Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2.5 flex-wrap mb-4">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
              {episode.category}
            </span>
            <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
              Episode #{episode.number}
            </span>
            <span className="text-xs text-slate-400">·</span>
            <span className="text-xs text-slate-500 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {episode.releaseDate}
            </span>
            <span className="text-xs text-slate-400">·</span>
            <span className="text-xs text-slate-500 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {episode.duration}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-950 tracking-tight leading-tight mb-4">
            {episode.title}
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl">
            {episode.subtitle}
          </p>
        </div>

        {/* Big Dedicated Audio Player Banner */}
        <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-8 shadow-2xl mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
            
            {/* Big Play / Pause button */}
            <button
              onClick={() => {
                if (currentEpisode?.id === episode.id) {
                  togglePlay();
                } else {
                  playEpisode(episode);
                }
              }}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 flex items-center justify-center shrink-0 transition-transform active:scale-95 shadow-lg shadow-amber-400/20 cursor-pointer"
              title={isThisPlaying ? "Pause" : "Play"}
            >
              {isThisPlaying ? (
                <Pause className="w-8 h-8 fill-current" />
              ) : (
                <Play className="w-8 h-8 fill-current ml-1" />
              )}
            </button>

            {/* Middle audio details */}
            <div className="flex-1 min-w-0 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                <span className="text-xs text-amber-400 font-mono tracking-widest uppercase">
                  {isThisPlaying ? "Now Playing In Full Quality" : "Audio Master Available"}
                </span>
                <span className="text-slate-600">·</span>
                <span className="text-xs text-slate-400 font-mono">Stereo 44.1kHz</span>
              </div>
              <h3 className="text-lg sm:text-xl font-serif font-bold truncate text-white">
                {episode.title}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Featuring {episode.guest.name} ({episode.guest.role})
              </p>
            </div>

            {/* Quick action buttons */}
            <div className="flex items-center gap-2.5 shrink-0">
              <button
                onClick={handleShare}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1.5 transition-colors relative"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share</span>
                {copied && (
                  <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-950 text-[10px] font-bold px-2 py-0.5 rounded shadow">
                    Link Copied!
                  </span>
                )}
              </button>

              <a
                href={episode.audioUrl}
                download
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1.5 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download MP3</span>
              </a>
            </div>

          </div>

          {/* Chapters Quick Jump Bar */}
          <div className="mt-6 pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 overflow-x-auto gap-4">
            <span className="font-semibold text-slate-300 shrink-0">Quick Chapters:</span>
            <div className="flex items-center gap-2">
              {episode.chapters.slice(0, 4).map((ch, idx) => (
                <button
                  key={idx}
                  onClick={() => playEpisode(episode, ch.seconds)}
                  className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-amber-300 text-xs font-mono transition-colors whitespace-nowrap"
                >
                  {ch.time} {ch.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Guest Profile Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-12 flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 border-2 border-slate-100 shadow-md">
            <Image
              src={episode.guest.avatar}
              alt={episode.guest.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <div>
                <h3 className="text-xl font-serif font-bold text-slate-950">
                  {episode.guest.name}
                </h3>
                <p className="text-xs font-semibold text-amber-700">
                  {episode.guest.role} · {episode.guest.company}
                </p>
              </div>

              <div className="flex items-center justify-center sm:justify-end space-x-2">
                {episode.guest.twitter && (
                  <a
                    href={episode.guest.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                    aria-label="X (formerly Twitter)"
                  >
                    <XTwitterIcon className="w-3.5 h-3.5" />
                  </a>
                )}
                {episode.guest.linkedin && (
                  <a
                    href={episode.guest.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                    aria-label="LinkedIn profile"
                  >
                    <LinkedInIcon className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {episode.guest.bio}
            </p>
          </div>
        </div>

        {/* Content Tabs (Show Notes vs Transcript) */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 border-b border-slate-200 mb-8">
            <button
              onClick={() => setActiveTab("notes")}
              className={`pb-3 px-4 text-sm font-semibold border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "notes"
                  ? "border-slate-950 text-slate-950 font-bold"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Full Show Notes & Insights</span>
            </button>
            <button
              onClick={() => setActiveTab("transcript")}
              className={`pb-3 px-4 text-sm font-semibold border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "transcript"
                  ? "border-slate-950 text-slate-950 font-bold"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              <ListOrdered className="w-4 h-4" />
              <span>Interactive Transcript</span>
            </button>
          </div>

          {/* Show Notes Tab */}
          {activeTab === "notes" && (
            <div className="space-y-10">
              
              {/* Key Takeaways Box */}
              <div className="rounded-3xl bg-amber-50/60 p-6 sm:p-8 border border-amber-200/80">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-base mb-4">
                  <Sparkles className="w-5 h-5 text-amber-600" />
                  <h3>Key Takeaways & Core Lessons</h3>
                </div>
                <div className="space-y-3">
                  {episode.takeaways.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <p className="text-slate-800 text-sm leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Episode Description */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <h3 className="font-serif font-bold text-xl text-slate-950 mb-4">
                  Episode Summary
                </h3>
                <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                  {episode.description}
                </div>
              </div>

              {/* Clickable Timestamp Chapters */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
                <h3 className="font-serif font-bold text-xl text-slate-950 mb-2">
                  Interactive Chapters
                </h3>
                <p className="text-xs text-slate-500 mb-6">
                  Click any timestamp below to jump directly to that section in the player.
                </p>

                <div className="divide-y divide-slate-100">
                  {episode.chapters.map((ch, idx) => (
                    <div
                      key={idx}
                      onClick={() => playEpisode(episode, ch.seconds)}
                      className="py-3.5 flex items-center justify-between group cursor-pointer hover:bg-slate-50 px-3 rounded-xl transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="font-mono text-xs font-bold text-amber-700 bg-amber-50 group-hover:bg-amber-100 px-2 py-1 rounded">
                          {ch.time}
                        </span>
                        <span className="text-sm font-medium text-slate-800 group-hover:text-slate-950">
                          {ch.title}
                        </span>
                      </div>
                      <span className="text-xs text-slate-400 group-hover:text-slate-900 group-hover:underline flex items-center gap-1">
                        <span>Jump</span>
                        <Play className="w-3 h-3 fill-current" />
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* Transcript Tab */}
          {activeTab === "transcript" && (
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-serif font-bold text-xl text-slate-950">
                    Audio Transcript Excerpt
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Verified transcript generated from master studio tape.
                  </p>
                </div>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(episode.transcriptSnippet);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                >
                  {copied ? "Copied!" : "Copy Excerpt"}
                </button>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 font-sans text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                {episode.transcriptSnippet}
              </div>

              <div className="mt-6 p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 flex items-center justify-between">
                <span>Want the complete unedited 12-page PDF transcript?</span>
                <Link href="/about" className="font-bold underline hover:text-amber-950">
                  Join VIP Newsletter →
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Discussion & Listener Notes */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs mb-16">
          <div className="flex items-center gap-2 mb-6">
            <MessageSquare className="w-5 h-5 text-amber-600" />
            <h3 className="font-serif font-bold text-xl text-slate-950">
              Listener Discussion ({comments.length})
            </h3>
          </div>

          <form onSubmit={handleAddComment} className="mb-8">
            <div className="relative">
              <textarea
                rows={3}
                required
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Share your reflection or core takeaway from this conversation..."
                className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:bg-white transition-all"
              />
            </div>
            <div className="mt-2.5 flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
              >
                <span>Post Reflection</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>

          <div className="space-y-4">
            {comments.map((c, i) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-bold text-slate-900">{c.name}</span>
                  <span className="text-slate-400">{c.time}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {c.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Recommended Episodes */}
        <div className="pt-8 border-t border-slate-200">
          <h3 className="text-2xl font-serif font-bold text-slate-950 mb-6">
            Recommended Next Conversations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fallbackRelated.map((ep) => (
              <EpisodeCard key={ep.id} episode={ep} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
