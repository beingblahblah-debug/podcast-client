import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EPISODES } from "@/data/episodes";
import EpisodeDetailClient from "./EpisodeDetailClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const episode = EPISODES.find((ep) => ep.id === id);

  if (!episode) {
    return {
      title: "Episode Not Found | Harshita Dagha",
    };
  }

  const title = `${episode.title} - ${episode.guest.name}`;
  const rawDesc = episode.summary || episode.subtitle || `Watch ${episode.title} with ${episode.guest.name} on The Harshita Dagha Show.`;
  const description = rawDesc.length > 155 ? rawDesc.slice(0, 152).trim() + "..." : rawDesc;
  const imageUrl = episode.coverImage.startsWith("http")
    ? episode.coverImage
    : `https://www.harshitadagha.in${episode.coverImage}`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.harshitadagha.in/episodes/${id}`,
    },
    openGraph: {
      title: `${title} | Harshita Dagha`,
      description,
      url: `https://www.harshitadagha.in/episodes/${id}`,
      type: "video.other",
      images: [
        {
          url: imageUrl,
          alt: episode.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Harshita Dagha`,
      description,
      images: [imageUrl],
    },
  };
}

export default async function EpisodeDetailPage({ params }: PageProps) {
  const { id } = await params;
  const episode = EPISODES.find((ep) => ep.id === id);

  if (!episode) {
    notFound();
  }

  return <EpisodeDetailClient id={id} />;
}
