import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Female Podcasters in India",
  description: "Discover top female podcasters in India. Explore masterclasses, founder stories, and cultural leadership hosted by Harshita Dagha in Mumbai.",
  alternates: {
    canonical: "https://www.harshitadagha.in/top-female-podcasters",
  },
  openGraph: {
    title: "Top Female Podcasters in India | Harshita Dagha",
    description: "Discover top female podcasters in India. Explore masterclasses, founder stories, and cultural leadership hosted by Harshita Dagha in Mumbai.",
    url: "https://www.harshitadagha.in/top-female-podcasters",
    type: "website",
    images: [
      {
        url: "/images/harshita-portrait-main.jpg",
        width: 545,
        height: 682,
        alt: "Top Female Podcasters in India - Harshita Dagha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Female Podcasters in India | Harshita Dagha",
    description: "Discover top female podcasters in India. Explore masterclasses, founder stories, and cultural leadership hosted by Harshita Dagha in Mumbai.",
    images: ["/images/harshita-portrait-main.jpg"],
  },
};

export default function TopFemalePodcastersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
