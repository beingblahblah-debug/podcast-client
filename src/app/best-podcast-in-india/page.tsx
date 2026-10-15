import React from "react";
import type { Metadata } from "next";
import { KEYWORD_LANDING_PAGES } from "@/data/keywordLandingPages";
import KeywordLandingPageView from "@/components/KeywordLandingPageView";

const pageData = KEYWORD_LANDING_PAGES["best-podcast-in-india"];

export const metadata: Metadata = {
  title: pageData.title,
  description: pageData.metaDescription,
  alternates: {
    canonical: pageData.canonicalUrl,
  },
  openGraph: {
    title: pageData.title,
    description: pageData.metaDescription,
    url: pageData.canonicalUrl,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://www.harshitadagha.in/images/harshita-dagha-studio-mic.jpg",
        width: 1200,
        height: 630,
        alt: pageData.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageData.title,
    description: pageData.metaDescription,
    images: ["https://www.harshitadagha.in/images/harshita-dagha-studio-mic.jpg"],
  },
};

export default function BestPodcastInIndiaPage() {
  return <KeywordLandingPageView page={pageData} />;
}
