import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editorial, Vlogs & Press Features",
  description: "Explore articles, vlogs, and media insights on branding, PR strategy, GEO, and business storytelling by Harshita Dagha in Mumbai.",
  alternates: {
    canonical: "https://www.harshitadagha.in/blog",
  },
  openGraph: {
    title: "Editorial, Vlogs & Press Features | Harshita Dagha",
    description: "Explore articles, vlogs, and media insights on branding, PR strategy, GEO, and business storytelling by Harshita Dagha in Mumbai.",
    url: "https://www.harshitadagha.in/blog",
    type: "website",
    images: [
      {
        url: "/images/harshita-speaking.jpg",
        width: 1200,
        height: 800,
        alt: "Harshita Dagha Editorial & Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Editorial, Vlogs & Press Features | Harshita Dagha",
    description: "Explore articles, vlogs, and media insights on branding, PR strategy, GEO, and business storytelling by Harshita Dagha in Mumbai.",
    images: ["/images/harshita-speaking.jpg"],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
