import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MEDIA_PUBLICATIONS } from "@/data/publications";
import PublicationDetailClient from "./PublicationDetailClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = MEDIA_PUBLICATIONS.find(
    (a) => a.slug === slug || a.id === slug
  );

  if (!article) {
    return {
      title: "Publication Not Found | Harshita Dagha",
    };
  }

  const rawDesc = article.excerpt || `Read ${article.title} featured in ${article.outlet} by Harshita Dagha.`;
  const description = rawDesc.length > 155 ? rawDesc.slice(0, 152).trim() + "..." : rawDesc;
  const imageUrl = article.image.startsWith("http")
    ? article.image
    : `https://www.harshitadagha.in${article.image}`;

  return {
    title: article.title,
    description,
    alternates: {
      canonical: `https://www.harshitadagha.in/publications/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} | Harshita Dagha Media`,
      description,
      url: `https://www.harshitadagha.in/publications/${article.slug}`,
      type: "article",
      images: [
        {
          url: imageUrl,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${article.title} | Harshita Dagha Media`,
      description,
      images: [imageUrl],
    },
  };
}

export default async function PublicationDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = MEDIA_PUBLICATIONS.find(
    (a) => a.slug === slug || a.id === slug
  );

  if (!article) {
    notFound();
  }

  return <PublicationDetailClient slug={slug} />;
}
