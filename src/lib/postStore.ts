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
    window.dispatchEvent(new Event("harshita-posts-updated"));
  } catch (e) {
    console.error("Failed to save posts to localStorage", e);
  }
}

/**
 * Fetch posts from the server API and merge with any locally cached posts.
 * Deduplicates by ID.
 */
export async function fetchServerCustomPosts(): Promise<BlogPost[]> {
  const local = getLocalCustomPosts();
  try {
    const res = await fetch("/api/posts", { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      if (data.success && Array.isArray(data.posts)) {
        const serverPosts: BlogPost[] = data.posts;
        // Merge: server posts + local posts not on server
        const serverIds = new Set(serverPosts.map((p) => p.id));
        const missingLocal = local.filter((p) => !serverIds.has(p.id));
        const merged = [...serverPosts, ...missingLocal];
        saveLocalCustomPosts(merged);
        return merged;
      }
    }
  } catch (e) {
    console.warn("Could not fetch server custom posts, using local cache:", e);
  }
  return local;
}

/**
 * Synchronous get for immediate SSR/first-paint hydration
 */
export function getAllPosts(customFromProps?: BlogPost[]): BlogPost[] {
  let custom = customFromProps || [];
  if (typeof window !== "undefined" && custom.length === 0) {
    custom = getLocalCustomPosts();
  }
  // Custom posts appear at top, then default vlogs, then default articles
  return [...custom, ...DEFAULT_VLOGS, ...DEFAULT_ARTICLES];
}

/**
 * Async get that refreshes from server API and returns all unified posts
 */
export async function getAllPostsAsync(): Promise<BlogPost[]> {
  const custom = await fetchServerCustomPosts();
  return [...custom, ...DEFAULT_VLOGS, ...DEFAULT_ARTICLES];
}

/**
 * Fetch a single post by ID (checks memory/local, then server API, then default sets)
 */
export async function fetchPostById(id: string): Promise<BlogPost | null> {
  // Check static / default sets first
  const staticFound = DEFAULT_VLOGS.find((v) => v.id === id) || DEFAULT_ARTICLES.find((a) => a.id === id);
  if (staticFound) return staticFound;

  // Check local cache
  const local = getLocalCustomPosts();
  const localFound = local.find((p) => p.id === id);
  if (localFound) return localFound;

  // Fetch from server API
  try {
    const res = await fetch(`/api/posts?id=${encodeURIComponent(id)}`, { cache: "no-store" });
    if (res.ok) {
      const data = await res.json();
      if (data.success && data.post) {
        // Cache locally
        saveLocalCustomPosts([data.post, ...local.filter((p) => p.id !== data.post.id)]);
        return data.post;
      }
    }
  } catch (e) {
    console.warn(`Failed to fetch post with id ${id} from server:`, e);
  }

  return null;
}

export async function createNewPost(params: {
  type: "vlog" | "article";
  title: string;
  category: string;
  excerpt: string;
  content: string;
  videoUrl?: string;
  coverImage?: string;
  galleryImages?: string[];
  tags?: string[];
}): Promise<BlogPost> {
  const { type, title, category, excerpt, content, videoUrl, coverImage, galleryImages = [], tags = [] } = params;

  let videoId: string | undefined = undefined;
  let finalCover = coverImage || (galleryImages.length > 0 ? galleryImages[0] : "/images/harshita-navy-mic.jpg");

  if (type === "vlog" && videoUrl) {
    const extracted = extractYouTubeId(videoUrl);
    if (extracted) {
      videoId = extracted;
      if (!coverImage && galleryImages.length === 0) {
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
    category: category.trim() || (type === "vlog" ? "Vlog" : "Brand PR"),
    date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
    duration: type === "vlog" ? "Video Episode" : undefined,
    readTime: `${Math.max(2, Math.ceil((content.length + excerpt.length) / 800))} min read`,
    excerpt: excerpt.trim() || content.slice(0, 180).trim() + "...",
    coverImage: finalCover,
    galleryImages,
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

  // 1. Save to local storage for instant browser reflection
  const localList = getLocalCustomPosts();
  saveLocalCustomPosts([newPost, ...localList.filter((p) => p.id !== id)]);

  // 2. Persist to server API
  try {
    const res = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost)
    });
    if (res.ok) {
      const data = await res.json();
      if (data.success && data.post) {
        return data.post;
      }
    }
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
