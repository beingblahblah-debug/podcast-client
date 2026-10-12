import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Podcast Highlights & Viral Reels",
  description: "Watch viral reels, high-impact podcast soundbites, and celebrity interview highlights with Harshita Dagha in Mumbai.",
  alternates: {
    canonical: "https://www.harshitadagha.in/highlights",
  },
  openGraph: {
    title: "Podcast Highlights & Viral Reels | Harshita Dagha",
    description: "Watch viral reels, high-impact podcast soundbites, and celebrity interview highlights with Harshita Dagha in Mumbai.",
    url: "https://www.harshitadagha.in/highlights",
    type: "website",
    images: [
      {
        url: "/images/harshita-studio-navy.jpg",
        width: 1024,
        height: 682,
        alt: "The Harshita Dagha Show Highlights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Podcast Highlights & Viral Reels | Harshita Dagha",
    description: "Watch viral reels, high-impact podcast soundbites, and celebrity interview highlights with Harshita Dagha in Mumbai.",
    images: ["/images/harshita-studio-navy.jpg"],
  },
};

export default function HighlightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
