"use client";

import React, { useState, useEffect, useRef } from "react";
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
  FolderOpen,
  Image as ImageIcon,
  Laptop,
  Link2,
  X,
  Heading,
  Quote,
  List,
  Check,
  FileCheck
} from "lucide-react";
import { BlogPost, extractYouTubeId, getYouTubeThumbnail } from "@/data/posts";
import { 
  getAllPosts, 
  getAllPostsAsync,
  createNewPost, 
  deletePostById, 
  getLocalCustomPosts, 
  saveLocalCustomPosts 
} from "@/lib/postStore";
import { uploadImageFromComputer } from "@/lib/uploadHelper";
import FormattedPostContent from "@/components/FormattedPostContent";
import { YouTubeIcon } from "@/components/SocialIcons";

export default function AdminDashboardPage() {
  // Simple session authentication gate
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [passcode, setPasscode] = useState("");
  const [authError, setAuthError] = useState("");

  // Active Tab: "article" (default) | "vlog" | "manage" | "json"
  const [activeTab, setActiveTab] = useState<"article" | "vlog" | "manage" | "json">("article");

  // All Posts List
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastPublishedPost, setLastPublishedPost] = useState<BlogPost | null>(null);

  // Article Form State
  const [articleTitle, setArticleTitle] = useState("");
  const [articleCategory, setArticleCategory] = useState("Brand PR");
  const [articleExcerpt, setArticleExcerpt] = useState("");
  const [articleContent, setArticleContent] = useState("");
  const [articleCover, setArticleCover] = useState("/images/harshita-navy-mic.jpg");
  const [articleVideoUrl, setArticleVideoUrl] = useState("");
  const [articleTags, setArticleTags] = useState("Brand PR, Media Strategy, Leadership");

  // Article Cover Selection States
  const [coverSourceTab, setCoverSourceTab] = useState<"upload" | "url" | "library">("upload");
  const [isUploadingCover, setIsUploadingCover] = useState(false);
  const [uploadedCoverInfo, setUploadedCoverInfo] = useState<{ fileName: string; size: string } | null>(null);
  const [isDraggingCover, setIsDraggingCover] = useState(false);
  const coverFileInputRef = useRef<HTMLInputElement>(null);

  // In-Content Image Inserter States
  const [isUploadingContentImg, setIsUploadingContentImg] = useState(false);
  const contentFileInputRef = useRef<HTMLInputElement>(null);
  const articleContentTextareaRef = useRef<HTMLTextAreaElement>(null);

  // Vlog Form State
  const [vlogUrl, setVlogUrl] = useState("");
  const [vlogTitle, setVlogTitle] = useState("");
  const [vlogCategory, setVlogCategory] = useState("Vlog & Behind The Scenes");
  const [vlogExcerpt, setVlogExcerpt] = useState("");
  const [vlogContent, setVlogContent] = useState("");
  const [vlogTags, setVlogTags] = useState("Vlog, Harshita Dagha, Video");
  const [vlogCover, setVlogCover] = useState("");
  const [isUploadingVlogCover, setIsUploadingVlogCover] = useState(false);
  const vlogCoverFileInputRef = useRef<HTMLInputElement>(null);

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

  const loadPosts = async () => {
    // Synchronous local first
    setPosts(getAllPosts());
    // Async server fetch
    try {
      const fresh = await getAllPostsAsync();
      if (fresh && fresh.length > 0) {
        setPosts(fresh);
      }
    } catch (e) {
      console.warn("Could not load fresh posts from server:", e);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
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
    setTimeout(() => setStatusMessage(null), 5000);
  };

  // -------------------------------------------------------------------------
  // IMAGE UPLOAD HANDLERS
  // -------------------------------------------------------------------------
  const handleCoverFileUpload = async (file: File) => {
    if (!file.type.startsWith("image/")) {
      showNotification("Please select a valid image file (JPG, PNG, WebP, etc.)", "error");
      return;
    }

    setIsUploadingCover(true);
    try {
      const result = await uploadImageFromComputer(file);
      setArticleCover(result.url);
      setUploadedCoverInfo({
        fileName: file.name,
        size: `${Math.round(result.size / 1024)} KB`
      });
      showNotification(`Cover image "${file.name}" ready! ✨`);
    } catch (err: any) {
      showNotification(err?.message || "Failed to upload image", "error");
    } finally {
      setIsUploadingCover(false);
    }
  };

  const handleContentImageUpload = async (file: File) => {
    if (!file.type.startsWith("image/")) {
      showNotification("Please select a valid image file", "error");
      return;
    }

    setIsUploadingContentImg(true);
    try {
      const result = await uploadImageFromComputer(file);
      const cleanName = file.name.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ");
      const markdownImage = `\n\n![${cleanName}](${result.url})\n\n`;
      
      const textarea = articleContentTextareaRef.current;
      if (textarea) {
        const start = textarea.selectionStart || articleContent.length;
        const end = textarea.selectionEnd || articleContent.length;
        const newText = articleContent.substring(0, start) + markdownImage + articleContent.substring(end);
        setArticleContent(newText);
      } else {
        setArticleContent((prev) => prev + markdownImage);
      }

      showNotification(`Image "${file.name}" inserted into article! ✨`);
    } catch (err: any) {
      showNotification(err?.message || "Failed to insert image", "error");
    } finally {
      setIsUploadingContentImg(false);
    }
  };

  const handleVlogCoverUpload = async (file: File) => {
    if (!file.type.startsWith("image/")) {
      showNotification("Please select a valid image file", "error");
      return;
    }
    setIsUploadingVlogCover(true);
    try {
      const result = await uploadImageFromComputer(file);
      setVlogCover(result.url);
      showNotification(`Custom vlog thumbnail "${file.name}" uploaded!`);
    } catch (err: any) {
      showNotification(err?.message || "Failed to upload image", "error");
    } finally {
      setIsUploadingVlogCover(false);
    }
  };

  // Helper to insert formatting templates into content textarea
  const insertFormatting = (template: string) => {
    const textarea = articleContentTextareaRef.current;
    if (!textarea) {
      setArticleContent((prev) => prev + template);
      return;
    }
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = articleContent.substring(start, end);
    const replacement = template.replace("$1", selected || "Insert text here");
    const newText = articleContent.substring(0, start) + replacement + articleContent.substring(end);
    setArticleContent(newText);
    textarea.focus();
  };

  // -------------------------------------------------------------------------
  // SUBMISSIONS
  // -------------------------------------------------------------------------
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
        excerpt: articleExcerpt || articleContent.slice(0, 160).replace(/[#*>\-_]/g, "").trim() + "...",
        content: articleContent,
        coverImage: articleCover,
        videoUrl: articleVideoUrl.trim() || undefined,
        tags: articleTags.split(",").map((t) => t.trim()).filter(Boolean)
      });

      setLastPublishedPost(created);
      showNotification(`🎉 Article "${created.title}" successfully published live! 🚀`);
      await loadPosts();
    } catch (err: any) {
      showNotification(err?.message || "Failed to publish article", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetArticleForm = () => {
    setArticleTitle("");
    setArticleExcerpt("");
    setArticleContent("");
    setArticleVideoUrl("");
    setUploadedCoverInfo(null);
    setArticleCover("/images/harshita-navy-mic.jpg");
    setLastPublishedPost(null);
  };

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
        coverImage: vlogCover || undefined,
        tags: vlogTags.split(",").map((t) => t.trim()).filter(Boolean)
      });

      showNotification(`Vlog "${created.title}" successfully published live!`);
      setVlogUrl("");
      setVlogTitle("");
      setVlogExcerpt("");
      setVlogContent("");
      setVlogCover("");
      await loadPosts();
      setActiveTab("manage");
    } catch (err: any) {
      showNotification(err?.message || "Failed to publish vlog", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeletePost = async (id: string, title: string) => {
    if (confirm(`Are you sure you want to remove "${title}"?`)) {
      await deletePostById(id);
      await loadPosts();
      showNotification(`"${title}" deleted successfully`);
    }
  };

  const handleCopyLink = (id: string) => {
    if (typeof window !== "undefined") {
      const url = `${window.location.origin}/blog/${id}`;
      navigator.clipboard.writeText(url);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const handleImportJson = async () => {
    try {
      const parsed = JSON.parse(jsonInput);
      const items = Array.isArray(parsed) ? parsed : [parsed];
      const local = getLocalCustomPosts();
      
      const newItems: BlogPost[] = items.map((item, idx) => ({
        id: item.id || `post-${Date.now()}-${idx}`,
        type: item.type || (item.videoUrl ? "vlog" : "article"),
        title: item.title || "Untitled Post",
        category: item.category || "Brand PR",
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
      await loadPosts();
      setJsonInput("");
      showNotification(`Imported ${newItems.length} post(s) successfully!`);
      setActiveTab("manage");
    } catch (err: any) {
      showNotification("Invalid JSON format. Please check syntax.", "error");
    }
  };

  const prefillSampleArticle = () => {
    setArticleTitle("The New Era of Brand PR: Why High-Signal Visibility Dominates Search in 2026");
    setArticleCategory("Brand PR");
    setArticleTags("Brand PR, Media Strategy, Executive Reputation, Thought Leadership");
    setArticleExcerpt("How modern founders and leaders are replacing fragmented press releases with authoritative multi-channel PR, podcast dialogues, and AI search presence.");
    setArticleContent(`In 2026, the PR landscape has radically transformed. Traditional media mentions alone no longer guarantee brand prestige. Today, high-signal visibility requires a multi-dimensional approach that commands authority across podcasts, generative AI engines, and long-form thought leadership.

## The Paradigm Shift in Corporate Branding

Founders and executives who rely strictly on outdated press announcements are rapidly losing ground to narrative-driven leaders. When potential investors, enterprise clients, or journalists evaluate your brand, they search for depth, authentic perspective, and recorded conversations.

> "A great brand isn't what you announce to the press; it's the undeniable narrative and intellectual depth that audiences discover when they listen to you."

## 3 Core Pillars of High-Impact Brand PR

- **Unfiltered Video Dialogues:** Long-form podcast masterclasses create emotional resonance and build high-trust connections that short ads never achieve.
- **Generative Engine Authority:** AI systems like Perplexity, ChatGPT, and Google Gemini prioritize cited insights from authoritative experts.
- **Multi-Touch Editorial Amplification:** Every keynote or conversation should be repurposed into analytical essays, Substack breakdowns, and executive spotlights.

## Executive Takeaways

Brand PR is no longer an expense line item—it is your organization's highest ROI asset. By investing in genuine thought leadership and clear positioning, you insulate your company against market noise and build enduring authority.`);
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
    <div className="min-h-screen bg-[#0c0c0e] text-zinc-300 py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d89ba4]/10 text-[#d89ba4] border border-[#d89ba4]/25 text-xs font-semibold uppercase tracking-wider mb-2.5">
              <Sparkles className="w-3.5 h-3.5 text-[#d89ba4]" />
              <span>Harshita Dagha Studio Desk</span>
              <span className="text-zinc-600">|</span>
              <span className="text-emerald-400">Live Publishing Ready</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
              Publish & Content Studio
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Select images directly from your computer, compose Brand PR articles, and publish live to the official website.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/blog"
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold transition-all shadow-sm"
            >
              <Eye className="w-3.5 h-3.5 text-[#d89ba4]" />
              <span>View Live Blog & Articles ↗</span>
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
          <div className={`mb-6 p-4 rounded-2xl flex items-center justify-between gap-3 text-sm font-medium transition-all ${
            statusMessage.type === "success" 
              ? "bg-emerald-950/70 border border-emerald-500/40 text-emerald-200 shadow-lg shadow-emerald-950/20" 
              : "bg-red-950/70 border border-red-500/40 text-red-200"
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
            onClick={() => setActiveTab("article")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer ${
              activeTab === "article"
                ? "bg-[#d89ba4] text-black shadow-md"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>✍️ Publish Article (Brand PR & Blogs)</span>
          </button>

          <button
            onClick={() => setActiveTab("vlog")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer ${
              activeTab === "vlog"
                ? "bg-[#d89ba4] text-black shadow-md"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Video className="w-4 h-4" />
            <span>🎥 Publish Vlog (Video Episode)</span>
          </button>

          <button
            onClick={() => setActiveTab("manage")}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer ${
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
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer ${
              activeTab === "json"
                ? "bg-[#d89ba4] text-black shadow-md"
                : "text-zinc-400 hover:text-white hover:bg-white/5"
            }`}
          >
            <Upload className="w-4 h-4" />
            <span>⚙️ Backup & JSON</span>
          </button>
        </div>

        {/* ============================================================== */}
        {/* TAB 1: ARTICLE PUBLISHER (PRIMARY)                             */}
        {/* ============================================================== */}
        {activeTab === "article" && (
          <div className="space-y-8">

            {/* Radiant Success Card if an article was just published */}
            {lastPublishedPost && (
              <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-950/70 via-[#141418] to-emerald-950/40 border border-emerald-500/50 shadow-2xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                      <Check className="w-6 h-6 stroke-[3]" />
                    </div>
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold uppercase tracking-wider mb-1">
                        <span>● Live on Website Now</span>
                      </div>
                      <h3 className="font-serif font-bold text-lg text-white">
                        {lastPublishedPost.title}
                      </h3>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        Category: <strong className="text-zinc-200">{lastPublishedPost.category}</strong> · Slug: <code className="text-[#d89ba4] font-mono">/blog/{lastPublishedPost.id}</code>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <Link
                      href={`/blog/${lastPublishedPost.id}`}
                      target="_blank"
                      className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs transition-all shadow-md flex items-center gap-1.5"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>View Live Article ↗</span>
                    </Link>

                    <button
                      onClick={() => handleCopyLink(lastPublishedPost.id)}
                      className="px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copiedId === lastPublishedPost.id ? "Copied!" : "Copy Link"}</span>
                    </button>

                    <button
                      onClick={resetArticleForm}
                      className="px-3.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 text-xs font-semibold transition-all cursor-pointer"
                    >
                      <span>Write Another</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column: Form Editor */}
              <div className="lg:col-span-7 bg-[#141418] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-serif font-bold text-white">Write & Publish New Article</h2>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Publish thought leadership articles, Brand PR pieces, and editorial insights.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={prefillSampleArticle}
                    className="text-xs text-[#d89ba4] hover:underline cursor-pointer font-medium"
                  >
                    Load Sample Article
                  </button>
                </div>

                <form onSubmit={handleSubmitArticle} className="space-y-6">
                  
                  {/* Article Title */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                      Article Title *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Why Brand PR & High-Signal Visibility Dominates in 2026"
                      value={articleTitle}
                      onChange={(e) => setArticleTitle(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-black border border-white/15 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#d89ba4] transition-all"
                    />
                  </div>

                  {/* Category with Quick Presets */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300">
                        Category / Topic *
                      </label>
                      <span className="text-[11px] text-zinc-500">Click any preset or type custom</span>
                    </div>

                    <input
                      type="text"
                      required
                      placeholder="e.g. Brand PR"
                      value={articleCategory}
                      onChange={(e) => setArticleCategory(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-black border border-white/15 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#d89ba4] transition-all mb-2"
                    />

                    {/* Quick Category Chips */}
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        "Brand PR",
                        "Branding PR",
                        "Brand Strategy",
                        "Executive Visibility",
                        "Media Strategy",
                        "Thought Leadership",
                        "Podcast Masterclass",
                        "GEO & AI Search"
                      ].map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setArticleCategory(cat)}
                          className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
                            articleCategory.toLowerCase() === cat.toLowerCase()
                              ? "bg-[#d89ba4] text-black font-bold shadow-xs"
                              : "bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10"
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                      Tags (Comma separated)
                    </label>
                    <input
                      type="text"
                      placeholder="Brand PR, Media Strategy, Executive Leadership"
                      value={articleTags}
                      onChange={(e) => setArticleTags(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-black border border-white/15 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#d89ba4] transition-all"
                    />
                  </div>

                  {/* ======================================================= */}
                  {/* COVER IMAGE SELECTION (LAPTOP / URL / LIBRARY)          */}
                  {/* ======================================================= */}
                  <div className="p-5 rounded-2xl bg-black/40 border border-white/10 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-white">
                          Cover Image
                        </label>
                        <p className="text-[11px] text-zinc-400">
                          Select an image from your computer, enter a web URL, or choose from studio photos.
                        </p>
                      </div>

                      {/* Source Tabs */}
                      <div className="flex items-center gap-1 p-1 rounded-xl bg-white/5 border border-white/10 shrink-0">
                        <button
                          type="button"
                          onClick={() => setCoverSourceTab("upload")}
                          className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                            coverSourceTab === "upload"
                              ? "bg-[#d89ba4] text-black shadow-xs"
                              : "text-zinc-400 hover:text-white"
                          }`}
                        >
                          <Laptop className="w-3.5 h-3.5" />
                          <span>Computer</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setCoverSourceTab("url")}
                          className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                            coverSourceTab === "url"
                              ? "bg-[#d89ba4] text-black shadow-xs"
                              : "text-zinc-400 hover:text-white"
                          }`}
                        >
                          <Link2 className="w-3.5 h-3.5" />
                          <span>Image URL</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setCoverSourceTab("library")}
                          className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                            coverSourceTab === "library"
                              ? "bg-[#d89ba4] text-black shadow-xs"
                              : "text-zinc-400 hover:text-white"
                          }`}
                        >
                          <ImageIcon className="w-3.5 h-3.5" />
                          <span>Studio</span>
                        </button>
                      </div>
                    </div>

                    {/* Hidden input for local file selection */}
                    <input
                      ref={coverFileInputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleCoverFileUpload(file);
                      }}
                    />

                    {/* TAB: UPLOAD FROM COMPUTER */}
                    {coverSourceTab === "upload" && (
                      <div className="space-y-3">
                        <div
                          onDragOver={(e) => {
                            e.preventDefault();
                            setIsDraggingCover(true);
                          }}
                          onDragLeave={() => setIsDraggingCover(false)}
                          onDrop={(e) => {
                            e.preventDefault();
                            setIsDraggingCover(false);
                            const file = e.dataTransfer.files?.[0];
                            if (file) handleCoverFileUpload(file);
                          }}
                          onClick={() => coverFileInputRef.current?.click()}
                          className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all flex flex-col items-center justify-center ${
                            isDraggingCover
                              ? "border-[#d89ba4] bg-[#d89ba4]/10"
                              : "border-white/15 hover:border-[#d89ba4]/50 bg-white/[0.02] hover:bg-white/[0.04]"
                          }`}
                        >
                          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-3 text-[#d89ba4]">
                            <Laptop className="w-6 h-6" />
                          </div>
                          
                          <p className="text-sm font-semibold text-white">
                            {isUploadingCover ? "Optimizing & uploading image..." : "Click to select image from your laptop / computer"}
                          </p>
                          <p className="text-xs text-zinc-400 mt-1">
                            Or drag and drop your photo here (JPG, PNG, WebP, SVG supported)
                          </p>

                          <button
                            type="button"
                            disabled={isUploadingCover}
                            className="mt-4 px-4 py-2 rounded-xl bg-[#d89ba4] hover:bg-[#e2a8b1] text-black font-bold text-xs transition-all shadow-md flex items-center gap-2 cursor-pointer"
                          >
                            <Upload className="w-3.5 h-3.5" />
                            <span>{isUploadingCover ? "Processing Image..." : "Browse Files from Computer"}</span>
                          </button>
                        </div>

                        {/* Selected / Uploaded File Status */}
                        {uploadedCoverInfo && (
                          <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-300">
                            <div className="flex items-center gap-2 truncate">
                              <FileCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                              <span className="font-semibold truncate">{uploadedCoverInfo.fileName}</span>
                              <span className="text-emerald-400/70 font-mono">({uploadedCoverInfo.size})</span>
                            </div>
                            <button
                              type="button"
                              onClick={() => coverFileInputRef.current?.click()}
                              className="text-[11px] underline hover:text-white shrink-0 ml-2 cursor-pointer"
                            >
                              Replace Image
                            </button>
                          </div>
                        )}
                      </div>
                    )}

                    {/* TAB: WEB IMAGE URL */}
                    {coverSourceTab === "url" && (
                      <div>
                        <input
                          type="url"
                          placeholder="Paste image link: https://images.unsplash.com/... or https://..."
                          value={articleCover}
                          onChange={(e) => {
                            setArticleCover(e.target.value);
                            setUploadedCoverInfo(null);
                          }}
                          className="w-full px-4 py-3 rounded-xl bg-black border border-white/15 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-[#d89ba4] font-mono"
                        />
                        <p className="text-[11px] text-zinc-500 mt-1.5">
                          You can paste direct image links from Unsplash, Imgur, Cloudinary, or any website.
                        </p>
                      </div>
                    )}

                    {/* TAB: STUDIO LIBRARY */}
                    {coverSourceTab === "library" && (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {[
                          { label: "Navy Mic", path: "/images/harshita-navy-mic.jpg" },
                          { label: "Studio Setup", path: "/images/harshita-studio-navy.jpg" },
                          { label: "Portrait", path: "/images/harshita-navy-portrait.jpg" },
                          { label: "Main Avatar", path: "/images/harshita-avatar-main.jpg" },
                        ].map((img, i) => (
                          <div
                            key={i}
                            onClick={() => {
                              setArticleCover(img.path);
                              setUploadedCoverInfo(null);
                            }}
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
                    )}
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

                  {/* Article Excerpt */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                      Article Excerpt / Abstract (Preview Summary)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Brief 1-2 sentence overview for cards and Google search snippet..."
                      value={articleExcerpt}
                      onChange={(e) => setArticleExcerpt(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-black border border-white/15 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#d89ba4]"
                    />
                  </div>

                  {/* ======================================================= */}
                  {/* FULL ARTICLE BODY WITH IN-CONTENT IMAGE UPLOADER        */}
                  {/* ======================================================= */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300">
                        Full Article Body (Paste text, paragraphs, or headings) *
                      </label>
                      <span className="text-[11px] text-zinc-500">Supports markdown headings & quotes</span>
                    </div>

                    {/* Editorial Toolbar */}
                    <div className="p-2 rounded-t-xl bg-[#1a1a20] border border-b-0 border-white/15 flex flex-wrap items-center gap-2">
                      
                      {/* Hidden file input for inserting image directly into article content */}
                      <input
                        ref={contentFileInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) handleContentImageUpload(file);
                        }}
                      />

                      <button
                        type="button"
                        onClick={() => contentFileInputRef.current?.click()}
                        disabled={isUploadingContentImg}
                        className="px-3 py-1.5 rounded-lg bg-[#d89ba4]/20 hover:bg-[#d89ba4]/30 text-[#d89ba4] hover:text-white border border-[#d89ba4]/30 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-xs disabled:opacity-50"
                        title="Select and insert an image from your computer into this article"
                      >
                        <Laptop className="w-3.5 h-3.5" />
                        <span>{isUploadingContentImg ? "Inserting Image..." : "📷 + Insert Image from Computer"}</span>
                      </button>

                      <div className="h-4 w-px bg-white/15 mx-1 hidden sm:block" />

                      <button
                        type="button"
                        onClick={() => insertFormatting("\n\n## $1\n")}
                        className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white text-xs font-semibold transition-all border border-white/10 cursor-pointer"
                        title="Add Heading Level 2"
                      >
                        ## H2
                      </button>

                      <button
                        type="button"
                        onClick={() => insertFormatting("\n\n### $1\n")}
                        className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white text-xs font-semibold transition-all border border-white/10 cursor-pointer"
                        title="Add Heading Level 3"
                      >
                        ### H3
                      </button>

                      <button
                        type="button"
                        onClick={() => insertFormatting("\n\n> \"$1\"\n")}
                        className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white text-xs font-semibold transition-all border border-white/10 cursor-pointer flex items-center gap-1"
                        title="Add Quote Block"
                      >
                        <Quote className="w-3 h-3 text-[#d89ba4]" />
                        <span>Quote</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => insertFormatting("\n- $1\n- Key takeaway 2\n")}
                        className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white text-xs font-semibold transition-all border border-white/10 cursor-pointer flex items-center gap-1"
                        title="Add Bullet List"
                      >
                        <List className="w-3 h-3 text-[#d89ba4]" />
                        <span>Bullets</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => insertFormatting("**$1**")}
                        className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white text-xs font-bold transition-all border border-white/10 cursor-pointer"
                        title="Bold Text"
                      >
                        B
                      </button>
                    </div>

                    <textarea
                      ref={articleContentTextareaRef}
                      rows={14}
                      required
                      placeholder="Paste your complete article text here. Separate paragraphs with a blank line. You can click '📷 + Insert Image from Computer' above to add images anywhere in your post."
                      value={articleContent}
                      onChange={(e) => setArticleContent(e.target.value)}
                      className="w-full px-4 py-3 rounded-b-xl bg-black border border-white/15 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#d89ba4] font-sans leading-relaxed"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-2xl bg-[#d89ba4] hover:bg-[#e2a8b1] text-black font-bold text-sm sm:text-base transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <FileText className="w-5 h-5 fill-current" />
                    <span>{isSubmitting ? "Publishing to Website..." : "🚀 Publish Article Live"}</span>
                  </button>
                </form>
              </div>

              {/* Right Column: Live Article Preview */}
              <div className="lg:col-span-5 space-y-5">
                <div className="bg-[#141418] rounded-3xl p-6 border border-white/10 shadow-xl sticky top-8">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#d89ba4] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Live Article Preview</span>
                    </span>
                    <span className="text-[10px] text-zinc-500 font-mono">
                      {Math.max(2, Math.ceil((articleContent.length + articleExcerpt.length) / 800))} min read
                    </span>
                  </div>

                  <div className="space-y-4 max-h-[750px] overflow-y-auto pr-2 custom-scrollbar">
                    
                    {/* Cover Preview */}
                    <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-black border border-white/10 shadow-md">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={articleCover || "/images/harshita-navy-mic.jpg"}
                        alt="Article preview cover"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Metadata Header */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/5 text-[#d89ba4] border border-white/10">
                          {articleCategory || "Brand PR"}
                        </span>
                        <span className="text-xs text-zinc-500 font-mono">
                          {new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                        </span>
                      </div>

                      <h3 className="font-serif font-bold text-lg sm:text-xl text-white leading-snug">
                        {articleTitle || "Your Article Title Will Appear Here"}
                      </h3>

                      <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                        {articleExcerpt || "Short summary preview for search engines and social cards..."}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/10">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block mb-2">
                        Body Content Preview:
                      </span>
                      {articleContent.trim() ? (
                        <div className="text-xs text-zinc-300">
                          <FormattedPostContent content={articleContent} />
                        </div>
                      ) : (
                        <p className="text-xs text-zinc-600 italic">
                          Start typing or pasting your article to preview formatted paragraphs, headings, and images here.
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 text-xs text-zinc-400 space-y-2">
                  <h4 className="font-bold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>How Articles are Published:</span>
                  </h4>
                  <p>• Instantly live on the public blog hub at <Link href="/blog" target="_blank" className="text-[#d89ba4] underline">/blog</Link></p>
                  <p>• Creates dedicated SEO-optimized URL at <code className="text-zinc-300">/blog/[article-slug]</code></p>
                  <p>• Images selected from computer are optimized automatically and stored reliably</p>
                  <p>• Features Harshita Dagha author schema & GEO search metadata</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 2: VLOG PUBLISHER                                           */}
        {/* ============================================================== */}
        {activeTab === "vlog" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 bg-[#141418] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl">
              <div className="mb-6">
                <h2 className="text-xl font-serif font-bold text-white">Publish New Video Vlog</h2>
                <p className="text-xs text-zinc-400 mt-0.5">Paste YouTube link to instantly embed an episode or masterclass.</p>
              </div>

              <form onSubmit={handleSubmitVlog} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-2">
                    YouTube Video URL *
                  </label>
                  <input
                    type="url"
                    required
                    placeholder="https://youtu.be/... or https://www.youtube.com/watch?v=..."
                    value={vlogUrl}
                    onChange={(e) => setVlogUrl(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-black border border-white/15 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#d89ba4] transition-all"
                  />
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

                {/* Optional Custom Cover from Computer */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
                      Thumbnail Image (Auto-fetched from YouTube, or upload custom)
                    </label>
                    <input
                      ref={vlogCoverFileInputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleVlogCoverUpload(file);
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => vlogCoverFileInputRef.current?.click()}
                      className="text-xs text-[#d89ba4] hover:underline cursor-pointer flex items-center gap-1"
                    >
                      <Laptop className="w-3 h-3" />
                      <span>{isUploadingVlogCover ? "Uploading..." : "Upload from Computer"}</span>
                    </button>
                  </div>
                  {vlogCover && (
                    <div className="relative aspect-video w-32 rounded-lg overflow-hidden border border-white/20">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={vlogCover} alt="Vlog thumbnail" className="w-full h-full object-cover" />
                    </div>
                  )}
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
                    Full Show Notes & Breakdown
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

            {/* Vlog Preview Panel */}
            <div className="lg:col-span-5 space-y-5">
              <div className="bg-[#141418] rounded-3xl p-6 border border-white/10 shadow-xl">
                <span className="text-xs font-bold uppercase tracking-wider text-[#d89ba4] block mb-3">
                  Live Vlog Preview
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
            </div>
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
                <p className="text-xs text-zinc-400 mt-0.5">Manage live articles, vlogs, and custom stories.</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={loadPosts}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-zinc-300 border border-white/10 cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Refresh List</span>
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
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
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
                            Live Post
                          </span>
                        )}
                      </div>

                      <h3 className="font-serif font-bold text-sm sm:text-base text-white truncate">
                        {post.title}
                      </h3>
                      <p className="text-xs text-zinc-500 truncate mt-0.5">
                        {post.date} · {post.readTime || post.duration || "5 min read"} · <code className="text-[#d89ba4] font-mono">/blog/{post.id}</code>
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
                      <span>View Live</span>
                    </Link>

                    <button
                      onClick={() => handleCopyLink(post.id)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-xs text-zinc-300 hover:text-white transition-colors cursor-pointer"
                      title="Copy link"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>{copiedId === post.id ? "Copied!" : "Copy Link"}</span>
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
                        title: "Brand PR in 2026: The Executive Playbook",
                        type: "article",
                        category: "Brand PR",
                        excerpt: "How modern founders navigate high-trust media relations.",
                        content: "Full editorial breakdown with Harshita Dagha.",
                        tags: ["Brand PR", "Media"]
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
                placeholder="[ { title: '...', type: 'article', category: 'Brand PR', content: '...' } ]"
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
