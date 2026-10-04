"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Sparkles, 
  Video, 
  FileText, 
  Plus, 
  Trash2, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Eye, 
  ArrowLeft, 
  Lock, 
  Unlock, 
  Play, 
  Layers, 
  Upload, 
  RefreshCw,
  FolderOpen
} from "lucide-react";
import { BlogPost, extractYouTubeId, getYouTubeThumbnail } from "@/data/posts";
import { 
  getAllPosts, 
  createNewPost, 
  deletePostById, 
  getLocalCustomPosts, 
  saveLocalCustomPosts 
} from "@/lib/postStore";
import { YouTubeIcon } from "@/components/SocialIcons";

export default function AdminDashboardPage() {
  // Simple session authentication gate
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [passcode, setPasscode] = useState("");
  const [authError, setAuthError] = useState("");

  // Active Tab: "vlog" | "article" | "manage" | "json"
  const [activeTab, setActiveTab] = useState<"vlog" | "article" | "manage" | "json">("vlog");

  // All Posts List
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Vlog Form State
  const [vlogUrl, setVlogUrl] = useState("");
  const [vlogTitle, setVlogTitle] = useState("");
  const [vlogCategory, setVlogCategory] = useState("Vlog & Behind The Scenes");
  const [vlogExcerpt, setVlogExcerpt] = useState("");
  const [vlogContent, setVlogContent] = useState("");
  const [vlogTags, setVlogTags] = useState("Vlog, Harshita Dagha, Video");

  // Article Form State
  const [articleTitle, setArticleTitle] = useState("");
  const [articleCategory, setArticleCategory] = useState("Brand Strategy");
  const [articleExcerpt, setArticleExcerpt] = useState("");
  const [articleContent, setArticleContent] = useState("");
  const [articleCover, setArticleCover] = useState("/images/harshita-navy-mic.jpg");
  const [articleVideoUrl, setArticleVideoUrl] = useState("");
  const [articleTags, setArticleTags] = useState("Branding, PR, Leadership");

  // JSON Import State
  const [jsonInput, setJsonInput] = useState("");

  // Auto-detect YouTube preview
  const detectedVideoId = extractYouTubeId(vlogUrl);

  useEffect(() => {
    // Check if already authenticated in this session
    const savedAuth = sessionStorage.getItem("harshita_admin_auth");
    if (savedAuth === "true") {
      setIsAuthenticated(true);
    }
    loadPosts();
  }, []);

  const loadPosts = () => {
    const list = getAllPosts();
    setPosts(list);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default pass: "admin" or "admin2026" or "harshita"
    const valid = ["admin", "admin2026", "harshita", "beingblahblah"];
    if (valid.includes(passcode.trim().toLowerCase())) {
      setIsAuthenticated(true);
      sessionStorage.setItem("harshita_admin_auth", "true");
      setAuthError("");
    } else {
      setAuthError("Invalid passcode. Enter 'admin2026' or click Quick Login below.");
    }
  };

  const handleQuickLogin = () => {
    setIsAuthenticated(true);
    sessionStorage.setItem("harshita_admin_auth", "true");
  };

  const showNotification = (text: string, type: "success" | "error" = "success") => {
    setStatusMessage({ text, type });
    setTimeout(() => setStatusMessage(null), 4000);
  };

  // Submit Vlog
  const handleSubmitVlog = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!vlogTitle.trim()) {
      showNotification("Please enter a vlog title", "error");
      return;
    }
    if (!vlogUrl.trim() || !detectedVideoId) {
      showNotification("Please provide a valid YouTube video link", "error");
      return;
    }

    setIsSubmitting(true);
    try {
      const created = await createNewPost({
        type: "vlog",
        title: vlogTitle,
        category: vlogCategory,
        excerpt: vlogExcerpt || `Harshita Dagha in-depth conversation and masterclass video vlog: ${vlogTitle}`,
        content: vlogContent || `Watch the full video conversation above with Harshita Dagha. Unedited discussion on ${vlogCategory}.`,
        videoUrl: vlogUrl,
        tags: vlogTags.split(",").map((t) => t.trim()).filter(Boolean)
      });

      showNotification(`Vlog "${created.title}" successfully published!`);
      // Reset form
      setVlogUrl("");
      setVlogTitle("");
      setVlogExcerpt("");
      setVlogContent("");
      loadPosts();
      setActiveTab("manage");
    } catch (err: any) {
      showNotification(err?.message || "Failed to publish vlog", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Submit Article
  const handleSubmitArticle = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!articleTitle.trim()) {
      showNotification("Please enter an article title", "error");
      return;
    }
    if (!articleContent.trim()) {
      showNotification("Please enter the article content", "error");
      return;
    }

    setIsSubmitting(true);
    try {
      const created = await createNewPost({
        type: "article",
        title: articleTitle,
        category: articleCategory,
        excerpt: articleExcerpt || articleContent.slice(0, 160) + "...",
        content: articleContent,
        coverImage: articleCover,
        videoUrl: articleVideoUrl.trim() || undefined,
        tags: articleTags.split(",").map((t) => t.trim()).filter(Boolean)
      });

      showNotification(`Article "${created.title}" successfully published!`);
      // Reset form
      setArticleTitle("");
      setArticleExcerpt("");
      setArticleContent("");
      setArticleVideoUrl("");
      loadPosts();
      setActiveTab("manage");
    } catch (err: any) {
      showNotification(err?.message || "Failed to publish article", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Delete Post
  const handleDeletePost = async (id: string, title: string) => {
    if (confirm(`Are you sure you want to remove "${title}"?`)) {
      await deletePostById(id);
      loadPosts();
      showNotification(`"${title}" deleted successfully`);
    }
  };

  // Copy Link
  const handleCopyLink = (id: string) => {
    if (typeof window !== "undefined") {
      const url = `${window.location.origin}/blog/${id}`;
      navigator.clipboard.writeText(url);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  // Bulk JSON Import
  const handleImportJson = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      const items = Array.isArray(parsed) ? parsed : [parsed];
      const local = getLocalCustomPosts();
      
      const newItems: BlogPost[] = items.map((item, idx) => ({
        id: item.id || `post-${Date.now()}-${idx}`,
        type: item.type || (item.videoUrl ? "vlog" : "article"),
        title: item.title || "Untitled Post",
        category: item.category || "General",
        date: item.date || new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
        readTime: item.readTime || "5 min read",
        excerpt: item.excerpt || item.title || "",
        coverImage: item.coverImage || (item.videoId ? getYouTubeThumbnail(item.videoId) : "/images/harshita-navy-mic.jpg"),
        videoUrl: item.videoUrl,
        videoId: item.videoId || (item.videoUrl ? extractYouTubeId(item.videoUrl) || undefined : undefined),
        content: item.content || item.excerpt || "",
        author: item.author || {
          name: "Harshita Dagha",
          role: "Podcast Host & PR Strategist",
          avatar: "/images/harshita-avatar-main.jpg"
        },
        tags: item.tags || [],
        isCustom: true,
        createdAt: new Date().toISOString()
      }));

      saveLocalCustomPosts([...newItems, ...local]);
      loadPosts();
      setJsonInput("");
      showNotification(`Imported ${newItems.length} post(s) successfully!`);
      setActiveTab("manage");
    } catch (err: any) {
      showNotification("Invalid JSON format. Please check syntax.", "error");
    }
  };

  // Pre-fill samples for fast testing
  const prefillSampleVlog = () => {
    setVlogUrl("https://youtu.be/UIEBj-3enk0?si=UO0LmhaIn-B4Vnsf");
    setVlogTitle("Legal Secrets Unveiled | Divorce & Family Law Masterclass");
    setVlogCategory("Legal Masterclass");
    setVlogExcerpt("An in-depth breakdown of matrimonial rights, child custody, asset division, and legal tips with senior advocates.");
    setVlogContent("Full show notes and video masterclass hosted by Harshita Dagha.\n\nKey takeaways:\n- Legal rights and asset division frameworks\n- Custody protocols in modern family courts\n- Resolving disputes via mediation before costly litigation.");
    setVlogTags("Law, Family Law, Masterclass, Harshita Dagha");
  };

  // =========================================================================
  // AUTHENTICATION GATE
  // =========================================================================
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0c0c0e] flex items-center justify-center px-4 py-16 text-zinc-300">
        <div className="max-w-md w-full p-8 rounded-3xl bg-[#141418] border border-white/10 shadow-2xl">
          <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[#d89ba4]/10 text-[#d89ba4] mx-auto mb-5 border border-[#d89ba4]/20">
            <Lock className="w-6 h-6" />
          </div>

          <div className="text-center mb-6">
            <h1 className="text-2xl font-serif font-bold text-white tracking-tight">
              Studio Admin Portal
            </h1>
            <p className="text-xs text-zinc-400 mt-1">
              Harshita Dagha Media · Blog, Vlog & Article Management
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                Admin Passcode
              </label>
              <input
                type="password"
                placeholder="Enter passcode (e.g. admin2026)"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-black border border-white/15 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#d89ba4] transition-all"
                autoFocus
              />
            </div>

            {authError && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-red-950/40 border border-red-500/30 text-red-300 text-xs">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-[#d89ba4] hover:bg-[#e2a8b1] text-black font-bold text-sm transition-all shadow-md cursor-pointer"
            >
              Sign In to Studio Admin
            </button>

            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-white/10"></div>
              <span className="flex-shrink mx-3 text-zinc-500 text-[10px] uppercase font-bold">Or One-Click</span>
              <div className="flex-grow border-t border-white/10"></div>
            </div>

            <button
              type="button"
              onClick={handleQuickLogin}
              className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Unlock className="w-3.5 h-3.5 text-[#d89ba4]" />
              <span>Direct Studio Login</span>
            </button>
          </form>

          <div className="mt-6 pt-5 border-t border-white/10 text-center">
            <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-white transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Public Website</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // MAIN ADMIN DASHBOARD
  // =========================================================================
  return (
    <div className="min-h-screen bg-[#0c0c0e] text-zinc-300 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d89ba4]/10 text-[#d89ba4] border border-[#d89ba4]/25 text-xs font-semibold uppercase tracking-wider mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-[#d89ba4]" />
              <span>Harshita Dagha Studio Desk</span>
              <span className="text-zinc-600">|</span>
              <span className="text-emerald-400">Admin Mode Active</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Blog & Vlog Admin Portal
            </h1>
            <p className="text-sm text-zinc-400 mt-1">
              Easily paste YouTube vlog links, add articles, and manage live published posts.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold transition-all"
            >
              <Eye className="w-3.5 h-3.5 text-[#d89ba4]" />
              <span>View Live Blog</span>
            </Link>

            <button
              onClick={() => {
                sessionStorage.removeItem("harshita_admin_auth");
                setIsAuthenticated(false);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-red-950/30 hover:bg-red-900/40 text-red-300 border border-red-500/20 text-xs font-semibold transition-all cursor-pointer"
            >
              <Lock className="w-3 h-3" />
              <span>Log Out</span>
            </button>
          </div>
        </div>

        {/* Status Notification Toast */}
        {statusMessage && (
          <div className={`mb-6 p-4 rounded-2xl flex items-center justify-between gap-3 text-sm font-medium ${
            statusMessage.type === "success" 
              ? "bg-emerald-950/60 border border-emerald-500/40 text-emerald-200" 
              : "bg-red-950/60 border border-red-500/40 text-red-200"
          }`}>
            <div className="flex items-center gap-2.5">
              {statusMessage.type === "success" ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
              )}
              <span>{statusMessage.text}</span>
            </div>
            <button 
              onClick={() => setStatusMessage(null)}
              className="text-xs opacity-70 hover:opacity-100 cursor-pointer"
            >
              ✕
            </button>
          </div>
        )}

        {/* Tab Navigation Pill Bar */}
        <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#141418] border border-white/10 mb-8 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab("vlog")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
              activeTab === "vlog"
                ? "bg-[#d89ba4] text-black shadow-md"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Video className="w-4 h-4" />
            <span>🎥 Paste Vlog (Video Show)</span>
          </button>

          <button
            onClick={() => setActiveTab("article")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
              activeTab === "article"
                ? "bg-[#d89ba4] text-black shadow-md"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>✍️ Paste Article (Blog Post)</span>
          </button>

          <button
            onClick={() => setActiveTab("manage")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
              activeTab === "manage"
                ? "bg-[#d89ba4] text-black shadow-md"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <FolderOpen className="w-4 h-4" />
            <span>📋 Manage Posts ({posts.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("json")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
              activeTab === "json"
                ? "bg-[#d89ba4] text-black shadow-md"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Upload className="w-4 h-4" />
            <span>📦 Bulk JSON / Paste Raw</span>
          </button>
        </div>

        {/* ============================================================== */}
        {/* TAB 1: PASTE VLOG FORM                                          */}
        {/* ============================================================== */}
        {activeTab === "vlog" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 bg-[#141418] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-serif font-bold text-white">Paste New Video Vlog</h2>
                  <p className="text-xs text-zinc-400 mt-0.5">Simply paste a YouTube link to publish a video episode.</p>
                </div>
                <button
                  type="button"
                  onClick={prefillSampleVlog}
                  className="text-xs text-[#d89ba4] hover:underline cursor-pointer"
                >
                  ⚡ Fill Sample
                </button>
              </div>

              <form onSubmit={handleSubmitVlog} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                    YouTube / Vlog Video Link *
                  </label>
                  <input
                    type="url"
                    required
                    placeholder="https://youtu.be/... or https://www.youtube.com/watch?v=..."
                    value={vlogUrl}
                    onChange={(e) => setVlogUrl(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/15 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#d89ba4] transition-all"
                  />
                  <p className="text-[11px] text-zinc-500 mt-1.5">
                    Supports any YouTube video, short, or share link.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                    Vlog Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Legal Secrets Unveiled | Family Law Masterclass"
                    value={vlogTitle}
                    onChange={(e) => setVlogTitle(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/15 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#d89ba4] transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                      Category
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Vlog, Masterclass, Founder Dialogue"
                      value={vlogCategory}
                      onChange={(e) => setVlogCategory(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-black border border-white/15 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#d89ba4] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                      Tags (Comma separated)
                    </label>
                    <input
                      type="text"
                      placeholder="Vlog, Law, AI, Storytelling"
                      value={vlogTags}
                      onChange={(e) => setVlogTags(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-black border border-white/15 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#d89ba4] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                    Short Excerpt / Hook
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Brief 1-2 sentence preview shown on cards..."
                    value={vlogExcerpt}
                    onChange={(e) => setVlogExcerpt(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/15 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#d89ba4] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                    Full Show Notes & Breakdown (Paragraphs / Points)
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Paste full notes, timestamps, key takeaways, and discussion summary..."
                    value={vlogContent}
                    onChange={(e) => setVlogContent(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/15 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#d89ba4] transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-[#d89ba4] hover:bg-[#e2a8b1] text-black font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Video className="w-4 h-4 fill-current" />
                  <span>{isSubmitting ? "Publishing..." : "🚀 Publish Vlog Live"}</span>
                </button>
              </form>
            </div>

            {/* Live Preview Panel */}
            <div className="lg:col-span-5 space-y-5">
              <div className="bg-[#141418] rounded-3xl p-6 border border-white/10 shadow-xl">
                <span className="text-xs font-bold uppercase tracking-wider text-[#d89ba4] block mb-3">
                  Live Preview
                </span>

                {detectedVideoId ? (
                  <div className="space-y-4">
                    <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black border border-white/10">
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${detectedVideoId}`}
                        title="Vlog Preview"
                        className="w-full h-full border-0"
                        allowFullScreen
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 text-[#d89ba4] border border-white/10">
                        {vlogCategory || "Vlog"}
                      </span>
                      <h3 className="font-serif font-bold text-base text-white mt-2">
                        {vlogTitle || "Vlog Title Will Appear Here"}
                      </h3>
                      <p className="text-xs text-zinc-400 mt-1 line-clamp-3">
                        {vlogExcerpt || "Short summary preview..."}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="h-56 rounded-2xl border border-dashed border-white/15 flex flex-col items-center justify-center text-center p-6 text-zinc-500">
                    <Video className="w-10 h-10 mb-2 text-zinc-600" />
                    <p className="text-xs font-medium">Paste a YouTube link in the form to see live thumbnail & video preview here.</p>
                  </div>
                )}
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 text-xs text-zinc-400 space-y-2">
                <h4 className="font-bold text-white flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#d89ba4]" />
                  <span>How Vlogs are Displayed:</span>
                </h4>
                <p>• Automatically embedded with YouTube 16:9 player on `/blog`</p>
                <p>• Playable right on the page without redirecting visitors</p>
                <p>• Mobile-optimized with right-to-left touch carousel</p>
                <p>• Generates dedicated page at `/blog/[vlog-slug]`</p>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 2: PASTE ARTICLE FORM                                       */}
        {/* ============================================================== */}
        {activeTab === "article" && (
          <div className="bg-[#141418] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl max-w-4xl mx-auto">
            <div className="mb-6">
              <h2 className="text-xl font-serif font-bold text-white">Paste New Written Article</h2>
              <p className="text-xs text-zinc-400 mt-0.5">Publish thought leadership articles, editorial guides, or PR analyses.</p>
            </div>

            <form onSubmit={handleSubmitArticle} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                  Article Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Why Generative Engine Optimization is Replacing Traditional SEO in 2026"
                  value={articleTitle}
                  onChange={(e) => setArticleTitle(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-black border border-white/15 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#d89ba4] transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                    Category
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Brand Strategy, GEO & AI, Podcasting"
                    value={articleCategory}
                    onChange={(e) => setArticleCategory(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/15 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#d89ba4] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                    Tags (Comma separated)
                  </label>
                  <input
                    type="text"
                    placeholder="PR, Executive, Branding, Media"
                    value={articleTags}
                    onChange={(e) => setArticleTags(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/15 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#d89ba4] transition-all"
                  />
                </div>
              </div>

              {/* Cover Image Selector */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                  Cover Image
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3">
                  {[
                    { label: "Navy Mic", path: "/images/harshita-navy-mic.jpg" },
                    { label: "Studio Setup", path: "/images/harshita-studio-navy.jpg" },
                    { label: "Portrait", path: "/images/harshita-navy-portrait.jpg" },
                    { label: "Main Avatar", path: "/images/harshita-avatar-main.jpg" },
                  ].map((img, i) => (
                    <div
                      key={i}
                      onClick={() => setArticleCover(img.path)}
                      className={`relative aspect-video rounded-xl overflow-hidden cursor-pointer border-2 transition-all ${
                        articleCover === img.path ? "border-[#d89ba4] scale-102" : "border-white/10 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image src={img.path} alt={img.label} fill className="object-cover" />
                      <div className="absolute inset-x-0 bottom-0 bg-black/80 px-2 py-0.5 text-[9px] font-bold text-center text-white">
                        {img.label}
                      </div>
                    </div>
                  ))}
                </div>
                <input
                  type="text"
                  placeholder="Or enter custom image URL: https://..."
                  value={articleCover}
                  onChange={(e) => setArticleCover(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-black border border-white/15 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-[#d89ba4]"
                />
              </div>

              {/* Optional Video inside Article */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                  Optional YouTube Video URL (To embed inside this article)
                </label>
                <input
                  type="url"
                  placeholder="https://youtu.be/... (optional)"
                  value={articleVideoUrl}
                  onChange={(e) => setArticleVideoUrl(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-black border border-white/15 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#d89ba4]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                  Article Excerpt / Abstract
                </label>
                <textarea
                  rows={2}
                  placeholder="Brief summary for search engines and card displays..."
                  value={articleExcerpt}
                  onChange={(e) => setArticleExcerpt(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-black border border-white/15 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#d89ba4]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                  Full Article Body (Paste text, paragraphs, or headings) *
                </label>
                <textarea
                  rows={12}
                  required
                  placeholder="Paste your complete article text here. Separate paragraphs with a blank line. You can use markdown headings like # or ##."
                  value={articleContent}
                  onChange={(e) => setArticleContent(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-black border border-white/15 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#d89ba4] font-mono"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-[#d89ba4] hover:bg-[#e2a8b1] text-black font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <FileText className="w-4 h-4 fill-current" />
                <span>{isSubmitting ? "Publishing..." : "📝 Publish Article Live"}</span>
              </button>
            </form>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 3: MANAGE POSTS LIST                                        */}
        {/* ============================================================== */}
        {activeTab === "manage" && (
          <div className="bg-[#141418] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-xl font-serif font-bold text-white">All Published Content ({posts.length})</h2>
                <p className="text-xs text-zinc-400 mt-0.5">Manage live vlogs, articles, and podcast features.</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={loadPosts}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-zinc-300 border border-white/10 cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Refresh</span>
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="p-4 sm:p-5 rounded-2xl bg-black/40 border border-white/10 hover:border-white/20 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="flex items-start sm:items-center gap-3.5 min-w-0 flex-1">
                    {post.coverImage && (
                      <div className="relative w-16 h-12 rounded-xl overflow-hidden shrink-0 border border-white/10 bg-black">
                        <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
                        {post.type === "vlog" && (
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <Play className="w-4 h-4 fill-red-500 text-red-500" />
                          </div>
                        )}
                      </div>
                    )}

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                          post.type === "vlog" 
                            ? "bg-red-500/20 text-red-400 border border-red-500/30" 
                            : "bg-[#d89ba4]/20 text-[#d89ba4] border border-[#d89ba4]/30"
                        }`}>
                          {post.type === "vlog" ? "🎥 Vlog" : "✍️ Article"}
                        </span>
                        <span className="text-[10px] font-semibold text-zinc-400 bg-white/5 px-2 py-0.5 rounded">
                          {post.category}
                        </span>
                        {post.isCustom && (
                          <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                            Custom Post
                          </span>
                        )}
                      </div>

                      <h3 className="font-serif font-bold text-sm sm:text-base text-white truncate">
                        {post.title}
                      </h3>
                      <p className="text-xs text-zinc-500 truncate mt-0.5">
                        {post.date} · {post.readTime || post.duration || "5 min read"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                    <Link
                      href={`/blog/${post.id}`}
                      target="_blank"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-xs text-zinc-300 hover:text-white transition-colors"
                      title="View live page"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View</span>
                    </Link>

                    <button
                      onClick={() => handleCopyLink(post.id)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-xs text-zinc-300 hover:text-white transition-colors cursor-pointer"
                      title="Copy link"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copiedId === post.id ? "Copied!" : "Link"}</span>
                    </button>

                    {post.isCustom && (
                      <button
                        onClick={() => handleDeletePost(post.id, post.title)}
                        className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-red-950/40 hover:bg-red-900/60 text-red-300 text-xs transition-colors cursor-pointer"
                        title="Delete custom post"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 4: BULK JSON IMPORT / EXPORT                                */}
        {/* ============================================================== */}
        {activeTab === "json" && (
          <div className="bg-[#141418] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl max-w-4xl mx-auto space-y-6">
            <div>
              <h2 className="text-xl font-serif font-bold text-white">Bulk JSON & Quick Paste</h2>
              <p className="text-xs text-zinc-400 mt-0.5">
                If you have articles or vlogs formatted in JSON, paste them here to import all at once.
              </p>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                  JSON Data Input
                </label>
                <button
                  onClick={() => {
                    const sample = [
                      {
                        title: "Sample Vlog on Brand Strategy",
                        type: "vlog",
                        videoUrl: "https://youtu.be/K_6wJPU-sQw",
                        category: "GEO Strategy",
                        excerpt: "How to scale business visibility with generative engine optimization.",
                        content: "Unedited breakdown with Harshita Dagha."
                      }
                    ];
                    setJsonInput(JSON.stringify(sample, null, 2));
                  }}
                  className="text-xs text-[#d89ba4] hover:underline cursor-pointer"
                >
                  Load Sample JSON Template
                </button>
              </div>

              <textarea
                rows={10}
                placeholder="[ { title: '...', type: 'vlog', videoUrl: 'https://youtu.be/...' } ]"
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-black border border-white/15 text-white font-mono text-xs focus:outline-none focus:border-[#d89ba4]"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={handleImportJson}
                disabled={!jsonInput.trim()}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#d89ba4] hover:bg-[#e2a8b1] text-black font-bold text-xs transition-all shadow-md cursor-pointer disabled:opacity-40"
              >
                📥 Import Posts Now
              </button>

              <button
                onClick={() => {
                  const data = JSON.stringify(posts, null, 2);
                  navigator.clipboard.writeText(data);
                  showNotification("All posts copied to clipboard as JSON!");
                }}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold transition-all cursor-pointer"
              >
                📋 Copy All Existing Posts as JSON
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
