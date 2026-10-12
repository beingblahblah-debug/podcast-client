import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Podcast Episodes",
  description: "Listen to masterclass interviews with visionary founders, CXOs, and industry leaders hosted by Harshita Dagha in Mumbai.",
  alternates: {
    canonical: "https://www.harshitadagha.in/episodes",
  },
  openGraph: {
    title: "All Podcast Episodes | The Harshita Dagha Show",
    description: "Listen to masterclass interviews with visionary founders, CXOs, and industry leaders hosted by Harshita Dagha in Mumbai.",
    url: "https://www.harshitadagha.in/episodes",
    type: "website",
    images: [
      {
        url: "/images/harshita-studio-navy.jpg",
        width: 1024,
        height: 682,
        alt: "The Harshita Dagha Show Episodes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Podcast Episodes | The Harshita Dagha Show",
    description: "Listen to masterclass interviews with visionary founders, CXOs, and industry leaders hosted by Harshita Dagha in Mumbai.",
    images: ["/images/harshita-studio-navy.jpg"],
  },
};

export default function EpisodesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
