import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { BlogPost, extractYouTubeId, getYouTubeThumbnail } from "@/data/posts";

const localDataFilePath = path.join(process.cwd(), "src", "data", "custom_posts.json");
const tmpDataFilePath = path.join("/tmp", "custom_posts.json");

function readCustomPosts(): BlogPost[] {
  // 1. Try local data file first
  try {
    if (fs.existsSync(localDataFilePath)) {
      const data = fs.readFileSync(localDataFilePath, "utf-8");
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (error) {
    console.warn("Could not read from localDataFilePath:", error);
  }

  // 2. Try /tmp file fallback
  try {
    if (fs.existsSync(tmpDataFilePath)) {
      const data = fs.readFileSync(tmpDataFilePath, "utf-8");
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed)) {
        return parsed;
      }
    }
  } catch (error) {
    console.warn("Could not read from tmpDataFilePath:", error);
  }

  return [];
}

function writeCustomPosts(posts: BlogPost[]): boolean {
  let written = false;

  // Try writing to src/data/custom_posts.json
  try {
    const dir = path.dirname(localDataFilePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(localDataFilePath, JSON.stringify(posts, null, 2), "utf-8");
    written = true;
  } catch (error) {
    console.warn("Could not write to localDataFilePath (read-only filesystem likely):", error);
  }

  // Also write to /tmp as serverless backup
  try {
    fs.writeFileSync(tmpDataFilePath, JSON.stringify(posts, null, 2), "utf-8");
    written = true;
  } catch (error) {
    console.warn("Could not write to tmpDataFilePath:", error);
  }

  return written;
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const posts = readCustomPosts();

    if (id) {
      const post = posts.find((p) => p.id === id);
      if (post) {
        return NextResponse.json({ success: true, post });
      }
      return NextResponse.json({ success: false, message: "Post not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, posts });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error?.message || "Failed to retrieve posts" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      id: providedId,
      type = "article", 
      title, 
      category = "Brand PR", 
      excerpt = "", 
      content = "", 
      videoUrl = "", 
      coverImage = "",
      tags = []
    } = body;

    if (!title || title.trim().length === 0) {
      return NextResponse.json(
        { success: false, message: "Title is required" },
        { status: 400 }
      );
    }

    // Process YouTube / Vlog details
    let videoId: string | undefined = undefined;
    let computedCoverImage = coverImage || "/images/harshita-navy-mic.jpg";

    if (type === "vlog" && videoUrl) {
      const extracted = extractYouTubeId(videoUrl);
      if (extracted) {
        videoId = extracted;
        if (!coverImage) {
          computedCoverImage = getYouTubeThumbnail(extracted);
        }
      }
    }

    // ID generation if not provided
    const slugBase = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
    
    const uniqueSuffix = Date.now().toString(36).slice(-4);
    const finalId = providedId || `${slugBase}-${uniqueSuffix}`;

    const newPost: BlogPost = {
      id: finalId,
      type,
      title: title.trim(),
      category: category.trim() || (type === "vlog" ? "Vlog" : "Brand PR"),
      date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      duration: type === "vlog" ? "Video Episode" : undefined,
      readTime: `${Math.max(2, Math.ceil((content.length + excerpt.length) / 800))} min read`,
      excerpt: excerpt.trim() || (content ? content.slice(0, 180).trim() + "..." : title.trim()),
      coverImage: computedCoverImage,
      videoUrl: videoUrl.trim() || undefined,
      videoId,
      content: content.trim(),
      author: {
        name: "Harshita Dagha",
        role: type === "vlog" ? "Host & Creator" : "Author & PR Strategist",
        avatar: "/images/harshita-avatar-main.jpg"
      },
      tags: Array.isArray(tags) ? tags : typeof tags === "string" ? (tags as string).split(",").map((t: string) => t.trim()).filter(Boolean) : [],
      isCustom: true,
      createdAt: new Date().toISOString()
    };

    const existingPosts = readCustomPosts();
    // Update if already exists, or prepend if new
    const filtered = existingPosts.filter((p) => p.id !== finalId);
    const updated = [newPost, ...filtered];
    writeCustomPosts(updated);

    return NextResponse.json({ success: true, post: newPost }, { status: 201 });
  } catch (error: any) {
    console.error("POST /api/posts error:", error);
    return NextResponse.json(
      { success: false, message: error?.message || "Failed to create post" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, message: "ID is required" }, { status: 400 });
    }

    const existingPosts = readCustomPosts();
    const filtered = existingPosts.filter((p) => p.id !== id);
    writeCustomPosts(filtered);

    return NextResponse.json({ success: true, message: "Post deleted" });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error?.message || "Failed to delete post" },
      { status: 500 }
    );
  }
}
