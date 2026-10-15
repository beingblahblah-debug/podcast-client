import React from "react";
import type { Metadata } from "next";
import { KEYWORD_LANDING_PAGES } from "@/data/keywordLandingPages";
import KeywordLandingPageView from "@/components/KeywordLandingPageView";

const pageData = KEYWORD_LANDING_PAGES["top-female-podcasters-india"];

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.metaDescription,
  alternates: {
    canonical: "https://www.harshitadagha.in/top-female-podcasters",
  },
  openGraph: {
    title: pageData.title,
    description: pageData.metaDescription,
    url: "https://www.harshitadagha.in/top-female-podcasters-india",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.harshitadagha.in/images/harshita-dagha-studio-mic.jpg",
        width: 1200,
        height: 630,
        alt: "Top Female Podcasters in India | Harshita Dagha",
      },
    ],
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: pageData.title,
    description: pageData.metaDescription,
    images: ["https://www.harshitadagha.in/images/harshita-dagha-studio-mic.jpg"],
  },
};

export default function TopFemalePodcastersIndiaPage() {
  return <KeywordLandingPageView page={pageData} isHubPage={false} />;
}
