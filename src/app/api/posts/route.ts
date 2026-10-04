import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { BlogPost, extractYouTubeId, getYouTubeThumbnail } from "@/data/posts";

const dataFilePath = path.join(process.cwd(), "src", "data", "custom_posts.json");

function readCustomPosts(): BlogPost[] {
  try {
    if (!fs.existsSync(dataFilePath)) {
      fs.writeFileSync(dataFilePath, "[]", "utf-8");
      return [];
    }
    const data = fs.readFileSync(dataFilePath, "utf-8");
    return JSON.parse(data) || [];
  } catch (error) {
    console.error("Error reading custom_posts.json:", error);
    return [];
  }
}

function writeCustomPosts(posts: BlogPost[]): boolean {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(posts, null, 2), "utf-8");
    return true;
  } catch (error) {
    console.error("Error writing custom_posts.json:", error);
    return false;
  }
}

export async function GET() {
  const posts = readCustomPosts();
  return NextResponse.json({ success: true, posts });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      type = "vlog", 
      title, 
      category = "General", 
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

    // Slug generation
    const slugBase = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
    
    const uniqueSuffix = Date.now().toString(36).slice(-4);
    const id = `${slugBase}-${uniqueSuffix}`;

    const newPost: BlogPost = {
      id,
      type,
      title: title.trim(),
      category: category.trim() || (type === "vlog" ? "Vlog" : "Article"),
      date: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      duration: type === "vlog" ? "Video Episode" : undefined,
      readTime: `${Math.max(2, Math.ceil((content.length + excerpt.length) / 800))} min read`,
      excerpt: excerpt.trim() || content.slice(0, 180).trim() + "...",
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
    const updated = [newPost, ...existingPosts];
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
