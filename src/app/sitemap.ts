import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import { ARTICLES } from '@/data/articles';
import { DEFAULT_VLOGS, BlogPost } from '@/data/posts';
import { EPISODES } from '@/data/episodes';
import { REELS } from '@/data/reels';

function getCustomPostsForSitemap(): BlogPost[] {
  const localDataFilePath = path.join(process.cwd(), 'src', 'data', 'custom_posts.json');
  const tmpDataFilePath = path.join('/tmp', 'custom_posts.json');

  try {
    if (fs.existsSync(localDataFilePath)) {
      const data = fs.readFileSync(localDataFilePath, 'utf-8');
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {
    // fallback
  }

  try {
    if (fs.existsSync(tmpDataFilePath)) {
      const data = fs.readFileSync(tmpDataFilePath, 'utf-8');
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch (e) {
    // fallback
  }

  return [];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.harshitadagha.in';

  // Core static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/episodes`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/top-female-podcasters`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/top-10`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/be-a-guest`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/highlights`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Dynamic Blog Articles (Editorial set)
  const articleRoutes: MetadataRoute.Sitemap = ARTICLES.map((article) => ({
    url: `${baseUrl}/blog/${article.id}`,
    lastModified: new Date(article.date),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Dynamic Video Vlogs (Default set)
  const vlogRoutes: MetadataRoute.Sitemap = DEFAULT_VLOGS.map((vlog) => ({
    url: `${baseUrl}/blog/${vlog.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Dynamic Custom Admin Posts (Instantly added upon publishing)
  const customPosts = getCustomPostsForSitemap();
  const customPostRoutes: MetadataRoute.Sitemap = customPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: post.createdAt ? new Date(post.createdAt) : new Date(),
    changeFrequency: 'daily',
    priority: 0.95,
  }));

  // Dynamic Episode Pages
  const episodeRoutes: MetadataRoute.Sitemap = EPISODES.map((ep) => ({
    url: `${baseUrl}/episodes/${ep.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Dynamic Reel Highlight Pages
  const highlightRoutes: MetadataRoute.Sitemap = REELS.map((reel) => ({
    url: `${baseUrl}/highlights/${reel.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [
    ...staticRoutes, 
    ...customPostRoutes, 
    ...articleRoutes, 
    ...vlogRoutes, 
    ...episodeRoutes, 
    ...highlightRoutes
  ];
}
