import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { REELS } from "@/data/reels";
import HighlightDetailClient from "./HighlightDetailClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const reel = REELS.find((r) => r.id === id);

  if (!reel) {
    return {
      title: "Highlight Not Found | Harshita Dagha",
    };
  }

  const rawDesc = reel.seoHeadline || reel.articleLead || reel.quote || `Watch ${reel.title} from The Harshita Dagha Show.`;
  const description = rawDesc.length > 155 ? rawDesc.slice(0, 152).trim() + "..." : rawDesc;
  const imageUrl = reel.thumbnail.startsWith("http")
    ? reel.thumbnail
    : `https://www.harshitadagha.in${reel.thumbnail}`;

  return {
    title: reel.title,
    description,
    alternates: {
      canonical: `https://www.harshitadagha.in/highlights/${id}`,
    },
    openGraph: {
      title: `${reel.title} | Harshita Dagha Highlights`,
      description,
      url: `https://www.harshitadagha.in/highlights/${id}`,
      type: "video.other",
      images: [
        {
          url: imageUrl,
          alt: reel.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${reel.title} | Harshita Dagha Highlights`,
      description,
      images: [imageUrl],
    },
  };
}

export default async function ReelDetailPage({ params }: PageProps) {
  const { id } = await params;
  const reel = REELS.find((r) => r.id === id);

  if (!reel) {
    notFound();
  }

  return <HighlightDetailClient id={id} />;
}
