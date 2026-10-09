import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const host = "www.harshitadagha.in";
const key = "e5b88c7374df489c922579df6400ac21";
const keyLocation = `https://${host}/${key}.txt`;
const sitemapUrl = `https://${host}/sitemap.xml`;

async function notifyAllEngines(urlList: string[]) {
  const results: Record<string, any> = {};

  // 1. IndexNow (api.indexnow.org)
  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host,
        key,
        keyLocation,
        urlList,
      }),
    });
    results.indexNow = { status: res.status, ok: res.ok };
  } catch (err: any) {
    results.indexNow = { error: err.message };
  }

  // 2. Bing IndexNow endpoint
  try {
    const res = await fetch("https://www.bing.com/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host,
        key,
        keyLocation,
        urlList,
      }),
    });
    results.bingIndexNow = { status: res.status, ok: res.ok };
  } catch (err: any) {
    results.bingIndexNow = { error: err.message };
  }

  // 3. Ping Google Sitemap
  try {
    const res = await fetch(`https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`, {
      method: "GET",
    });
    results.googlePing = { status: res.status, ok: res.ok };
  } catch (err: any) {
    results.googlePing = { error: err.message };
  }

  // 4. Ping Bing Sitemap
  try {
    const res = await fetch(`https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`, {
      method: "GET",
    });
    results.bingPing = { status: res.status, ok: res.ok };
  } catch (err: any) {
    results.bingPing = { error: err.message };
  }

  return results;
}

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const { urls } = body;

    const targetUrls = Array.isArray(urls) && urls.length > 0 
      ? urls 
      : [`https://${host}/blog`, `https://${host}`, sitemapUrl];

    const engineResults = await notifyAllEngines(targetUrls);

    return NextResponse.json({
      status: "success",
      message: "Automated search engine indexing triggered successfully",
      sitemapUrl,
      submittedUrls: targetUrls,
      engines: engineResults,
      timestamp: new Date().toISOString()
    });
  } catch (error: any) {
    return NextResponse.json(
      { status: "error", message: error?.message || "Failed to notify search engines" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Collect all custom post URLs from json
    const localDataFilePath = path.join(process.cwd(), "src", "data", "custom_posts.json");
    let customUrls: string[] = [];
    try {
      if (fs.existsSync(localDataFilePath)) {
        const data = fs.readFileSync(localDataFilePath, "utf-8");
        const posts = JSON.parse(data);
        if (Array.isArray(posts)) {
          customUrls = posts.map((p) => `https://${host}/blog/${p.id}`);
        }
      }
    } catch (e) {
      // ignore
    }

    const allUrls = [
      `https://${host}`,
      `https://${host}/blog`,
      `https://${host}/about`,
      `https://${host}/episodes`,
      `https://${host}/highlights`,
      sitemapUrl,
      ...customUrls
    ];

    const engineResults = await notifyAllEngines(allUrls);

    return NextResponse.json({
      status: "success",
      message: "Full site re-indexing completed across Google, Bing, and IndexNow",
      sitemapUrl,
      totalUrlsSubmitted: allUrls.length,
      urls: allUrls,
      engines: engineResults,
      timestamp: new Date().toISOString()
    });
  } catch (error: any) {
    return NextResponse.json(
      { status: "error", message: error?.message || "Re-indexing error" },
      { status: 500 }
    );
  }
}
