import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile & Media Dossier",
  description: "Official bio, verified author portfolio, TEDx credentials, and media features of Harshita Dagha, Founder of Beingblahblah and Podcast Host in India.",
  alternates: {
    canonical: "https://www.harshitadagha.in/profile",
  },
  openGraph: {
    title: "Profile & Media Dossier | Harshita Dagha",
    description: "Official bio, verified author portfolio, TEDx credentials, and media features of Harshita Dagha, Founder of Beingblahblah and Podcast Host in India.",
    url: "https://www.harshitadagha.in/profile",
    type: "profile",
    images: [
      {
        url: "/images/harshita-speaking.jpg",
        width: 1200,
        height: 800,
        alt: "Harshita Dagha Profile & Speaker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Profile & Media Dossier | Harshita Dagha",
    description: "Official bio, verified author portfolio, TEDx credentials, and media features of Harshita Dagha, Founder of Beingblahblah and Podcast Host in India.",
    images: ["/images/harshita-speaking.jpg"],
  },
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
