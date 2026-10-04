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
  ExternalLink,
  Mic2
} from "lucide-react";
import { XTwitterIcon, LinkedInIcon } from "@/components/SocialIcons";
import { EPISODES, Episode } from "@/data/episodes";
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
    <div className="py-10 md:py-16 bg-[#0c0c0e] text-[#f4f4f5]">
      {/* Structured Schema: PodcastEpisode, AudioObject & BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "PodcastEpisode",
                "@id": `https://www.harshitadagha.in/episodes/${episode.id}#episode`,
                "url": `https://www.harshitadagha.in/episodes/${episode.id}`,
                "name": episode.title,
                "description": episode.subtitle || episode.summary,
                "datePublished": episode.releaseDate,
                "timeRequired": `PT${episode.durationSec || 3600}S`,
                "episodeNumber": episode.number,
                "partOfSeries": {
                  "@type": "PodcastSeries",
                  "name": "The Harshita Dagha Show",
                  "url": "https://www.harshitadagha.in"
                }
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://www.harshitadagha.in"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Episodes",
                    "item": "https://www.harshitadagha.in/episodes"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": episode.title,
                    "item": `https://www.harshitadagha.in/episodes/${episode.id}`
                  }
                ]
              }
            ]
          })
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          href="/episodes"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Episodes</span>
        </Link>

        {/* Episode Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2.5 flex-wrap mb-4">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 text-[#d89ba4] border border-white/10">
              {episode.category}
            </span>
            <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-white/5 text-zinc-300 border border-white/5">
              Episode #{episode.number}
            </span>
            <span className="text-xs text-zinc-500">·</span>
            <span className="text-xs text-zinc-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {episode.releaseDate}
            </span>
            <span className="text-xs text-zinc-500">·</span>
            <span className="text-xs text-zinc-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {episode.duration}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-4">
            {episode.title}
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-3xl">
            {episode.subtitle}
          </p>
        </div>

        {/* Executive Masterclass Dialogue Showcase & Official Streaming Links */}
        <div className="bg-[#141418] text-white rounded-3xl p-6 sm:p-8 shadow-2xl mb-12 relative overflow-hidden border border-white/10">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#d89ba4]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            
            {/* Left Column: Masterclass Badge & Title */}
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="text-xs text-[#d89ba4] font-mono tracking-widest uppercase bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-full">
                  Official Masterclass Dialogue
                </span>
                <span className="text-zinc-600">·</span>
                <span className="text-xs text-zinc-400 font-mono">Bandra Kurla Complex (BKC) Studio Master</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-1">
                {episode.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400">
                Featuring {episode.guest.name} ({episode.guest.role} at {episode.guest.company}) · Recorded live with host Harshita Dagha
              </p>
            </div>

            {/* Right Column: Streaming Platform Badges & Share */}
            <div className="flex flex-wrap items-center gap-2.5 shrink-0 w-full lg:w-auto">
              {episode.spotifyUrl && (
                <a
                  href={episode.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-[#1DB954] hover:bg-[#1aa34a] text-black text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm hover:scale-105 active:scale-95"
                >
                  <span>Listen on Spotify</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {episode.appleUrl && (
                <a
                  href={episode.appleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/15 text-xs font-bold flex items-center gap-1.5 transition-all hover:scale-105 active:scale-95"
                >
                  <span>Apple Podcasts</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {episode.youtubeUrl && (
                <a
                  href={episode.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-[#FF0000] hover:bg-[#e00000] text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm hover:scale-105 active:scale-95"
                >
                  <span>Watch on YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              <button
                onClick={handleShare}
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-zinc-200 text-xs font-medium flex items-center gap-1.5 transition-colors relative cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share</span>
                {copied && (
                  <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-[#d89ba4] text-black text-[10px] font-bold px-2 py-0.5 rounded shadow whitespace-nowrap">
                    Link Copied!
                  </span>
                )}
              </button>
            </div>

          </div>

          {/* Chapters Outline Strip */}
          <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400 overflow-x-auto gap-4">
            <span className="font-semibold text-zinc-300 shrink-0">Key Chapter Outline:</span>
            <div className="flex items-center gap-2">
              {episode.chapters.slice(0, 4).map((ch, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-[#0c0c0e] border border-white/10 text-zinc-300 text-xs font-mono whitespace-nowrap"
                >
                  <strong className="text-[#d89ba4] mr-1">{ch.time}</strong> {ch.title}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Guest Profile Card */}
        <div className="bg-[#141418] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-sm mb-12 flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/5 border border-white/10 text-[#d89ba4] flex flex-col items-center justify-center shrink-0 shadow-md">
            <Mic2 className="w-8 h-8 mb-1" />
            <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400">Guest</span>
          </div>

          <div className="flex-1 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <div>
                <h3 className="text-xl font-serif font-bold text-white">
                  {episode.guest.name}
                </h3>
                <p className="text-xs font-semibold text-[#d89ba4]">
                  {episode.guest.role} · {episode.guest.company}
                </p>
              </div>

              <div className="flex items-center justify-center sm:justify-end space-x-2">
                {episode.guest.twitter && (
                  <a
                    href={episode.guest.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
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
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition-colors"
                    aria-label="LinkedIn profile"
                  >
                    <LinkedInIcon className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed">
              {episode.guest.bio}
            </p>
          </div>
        </div>

        {/* Content Tabs (Show Notes vs Transcript) */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 border-b border-white/10 mb-8">
            <button
              onClick={() => setActiveTab("notes")}
              className={`pb-3 px-4 text-sm font-semibold border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "notes"
                  ? "border-[#d89ba4] text-white font-bold"
                  : "border-transparent text-zinc-400 hover:text-white"
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Full Show Notes & Insights</span>
            </button>
            <button
              onClick={() => setActiveTab("transcript")}
              className={`pb-3 px-4 text-sm font-semibold border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "transcript"
                  ? "border-[#d89ba4] text-white font-bold"
                  : "border-transparent text-zinc-400 hover:text-white"
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
              <div className="rounded-3xl bg-white/[0.03] p-6 sm:p-8 border border-white/10">
                <div className="flex items-center gap-2 text-[#d89ba4] font-bold text-base mb-4">
                  <Sparkles className="w-5 h-5 text-[#d89ba4]" />
                  <h3>Key Takeaways & Core Lessons</h3>
                </div>
                <div className="space-y-3">
                  {episode.takeaways.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#d89ba4] shrink-0 mt-0.5" />
                      <p className="text-zinc-200 text-sm leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Episode Description */}
              <div className="bg-[#141418] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xs">
                <h3 className="font-serif font-bold text-xl text-white mb-4">
                  Episode Summary
                </h3>
                <div className="prose prose-invert max-w-none text-zinc-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                  {episode.description}
                </div>
              </div>

              {/* Show Chapters Outline */}
              <div className="bg-[#141418] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xs">
                <h3 className="font-serif font-bold text-xl text-white mb-2">
                  Conversation Chapters & Topics
                </h3>
                <p className="text-xs text-zinc-400 mb-6">
                  Detailed timestamp index covering key discussion milestones in this masterclass dialogue.
                </p>

                <div className="divide-y divide-white/5">
                  {episode.chapters.map((ch, idx) => (
                    <div
                      key={idx}
                      className="py-3.5 flex items-center justify-between px-3 rounded-xl hover:bg-white/5 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <span className="font-mono text-xs font-bold text-[#d89ba4] bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                          {ch.time}
                        </span>
                        <span className="text-sm font-medium text-zinc-200">
                          {ch.title}
                        </span>
                      </div>
                      <span className="text-xs text-zinc-500 font-mono">
                        Part {idx + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* Transcript Tab */}
          {activeTab === "transcript" && (
            <div className="bg-[#141418] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xs">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-serif font-bold text-xl text-white">
                    Audio Transcript Excerpt
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Verified transcript generated from master studio tape.
                  </p>
                </div>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(episode.transcriptSnippet);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                  className="px-3 py-1.5 rounded-lg border border-white/10 text-xs font-semibold text-zinc-300 hover:bg-white/10"
                >
                  {copied ? "Copied!" : "Copy Excerpt"}
                </button>
              </div>

              <div className="p-6 rounded-2xl bg-[#0c0c0e] border border-white/10 font-sans text-sm text-zinc-300 leading-relaxed whitespace-pre-line">
                {episode.transcriptSnippet}
              </div>

              <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-zinc-300 flex items-center justify-between">
                <span>Want the complete unedited 12-page PDF transcript?</span>
                <Link href="/profile" className="font-bold text-[#d89ba4] underline hover:text-[#e8b5be]">
                  Join VIP Newsletter →
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Discussion & Listener Notes */}
        <div className="bg-[#141418] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xs mb-16">
          <div className="flex items-center gap-2 mb-6">
            <MessageSquare className="w-5 h-5 text-[#d89ba4]" />
            <h3 className="font-serif font-bold text-xl text-white">
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
                className="w-full p-4 rounded-2xl bg-[#0c0c0e] border border-white/10 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#d89ba4]/50 focus:bg-[#111115] transition-all"
              />
            </div>
            <div className="mt-2.5 flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#d89ba4] hover:bg-[#c98c95] text-black text-xs font-semibold shadow-xs transition-colors cursor-pointer"
              >
                <span>Post Reflection</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>

          <div className="space-y-4">
            {comments.map((c, i) => (
              <div key={i} className="p-4 rounded-2xl bg-[#0c0c0e] border border-white/5">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-bold text-white">{c.name}</span>
                  <span className="text-zinc-500">{c.time}</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {c.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Recommended Episodes */}
        <div className="pt-8 border-t border-white/10">
          <h3 className="text-2xl font-serif font-bold text-white mb-6">
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
