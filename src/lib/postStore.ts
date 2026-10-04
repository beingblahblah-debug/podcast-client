"use client";

import { BlogPost, DEFAULT_VLOGS, DEFAULT_ARTICLES, extractYouTubeId, getYouTubeThumbnail } from "@/data/posts";

const STORAGE_KEY = "harshita_custom_posts_v1";

export function getLocalCustomPosts(): BlogPost[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    console.error("Failed to read posts from localStorage", e);
    return [];
  }
}

export function saveLocalCustomPosts(posts: BlogPost[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  } catch (e) {
    console.error("Failed to save posts to localStorage", e);
  }
}

export function getAllPosts(customFromProps?: BlogPost[]): BlogPost[] {
  let custom = customFromProps || [];
  if (typeof window !== "undefined" && custom.length === 0) {
    custom = getLocalCustomPosts();
  }
  // Custom posts appear at top, then default vlogs, then default articles
  return [...custom, ...DEFAULT_VLOGS, ...DEFAULT_ARTICLES];
}

export async function createNewPost(params: {
  type: "vlog" | "article";
  title: string;
  category: string;
  excerpt: string;
  content: string;
  videoUrl?: string;
  coverImage?: string;
  tags?: string[];
}): Promise<BlogPost> {
  const { type, title, category, excerpt, content, videoUrl, coverImage, tags = [] } = params;

  let videoId: string | undefined = undefined;
  let finalCover = coverImage || "/images/harshita-navy-mic.jpg";

  if (type === "vlog" && videoUrl) {
    const extracted = extractYouTubeId(videoUrl);
    if (extracted) {
      videoId = extracted;
      if (!coverImage) {
        finalCover = getYouTubeThumbnail(extracted);
      }
    }
  }

  const slugBase = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
  
  const id = `${slugBase}-${Date.now().toString(36).slice(-4)}`;

  const newPost: BlogPost = {
    id,
    type,
    title: title.trim(),
    category: category.trim() || (type === "vlog" ? "Vlog" : "Article"),
    date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
    duration: type === "vlog" ? "Video Episode" : undefined,
    readTime: `${Math.max(2, Math.ceil((content.length + excerpt.length) / 800))} min read`,
    excerpt: excerpt.trim() || content.slice(0, 180).trim() + "...",
    coverImage: finalCover,
    videoUrl: videoUrl?.trim(),
    videoId,
    content: content.trim(),
    author: {
      name: "Harshita Dagha",
      role: type === "vlog" ? "Host & Creator" : "Author & PR Strategist",
      avatar: "/images/harshita-avatar-main.jpg"
    },
    tags,
    isCustom: true,
    createdAt: new Date().toISOString()
  };

  // 1. Save to local storage for immediate browser reflection
  const localList = getLocalCustomPosts();
  saveLocalCustomPosts([newPost, ...localList]);

  // 2. Also attempt server-side persistence via API
  try {
    await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost)
    });
  } catch (err) {
    console.warn("Could not sync post to server disk (will remain in browser):", err);
  }

  return newPost;
}

export async function deletePostById(id: string): Promise<void> {
  const localList = getLocalCustomPosts();
  saveLocalCustomPosts(localList.filter((p) => p.id !== id));

  try {
    await fetch(`/api/posts?id=${encodeURIComponent(id)}`, {
      method: "DELETE"
    });
  } catch (err) {
    console.warn("Could not delete post on server disk:", err);
  }
}
