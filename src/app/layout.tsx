import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AudioProvider } from "@/context/AudioContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theelevatepodcast.com"),
  title: "Jessica Chen | Podcast Host, Executive Interviewer & Media Producer",
  description: "Official portfolio & media production desk of Jessica Chen. Host of The Elevate Show (4.8M+ impressions). Specializing in executive founder interviews, corporate podcasting, keynote event moderation, and thought leadership.",
  keywords: [
    "Jessica Chen",
    "Jessica Chen Podcast",
    "The Elevate Podcast",
    "Executive Interviewer New York",
    "Female Podcast Host",
    "Corporate Podcasting Services",
    "Podcast Guest Booking",
    "Keynote Stage Moderator",
    "Thought Leadership Media",
    "Brooklyn Studio A",
    "Brand Sponsorship Podcast"
  ],
  authors: [{ name: "Jessica Chen", url: "https://theelevatepodcast.com" }],
  creator: "Jessica Chen",
  publisher: "The Elevate Media Group",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Jessica Chen | Podcast Host & Executive Interviewer",
    description: "Official website & show portfolio of Jessica Chen. 250+ masterclass episodes, 4.8M+ downloads. Brooklyn Studio A & Worldwide Remote.",
    url: "https://theelevatepodcast.com",
    siteName: "Jessica Chen Official Media",
    images: [
      {
        url: "/images/host.jpg",
        width: 1200,
        height: 1200,
        alt: "Jessica Chen - Podcast Host & Executive Interviewer",
      },
      {
        url: "/images/cover.jpg",
        width: 1200,
        height: 1200,
        alt: "The Elevate Show with Jessica Chen",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jessica Chen | Host of The Elevate Show",
    description: "Executive founder interviews, thought leadership, and corporate podcasting.",
    images: ["/images/host.jpg"],
  },
};

// Rich Structured Schema for Google Rich Snippets & GEO Search
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://theelevatepodcast.com/#jessicachen",
      "name": "Jessica Chen",
      "jobTitle": "Podcast Host & Executive Interviewer",
      "description": "Celebrated investigative journalist and host of The Elevate Podcast with over 4.8 million global downloads.",
      "image": "https://theelevatepodcast.com/images/host.jpg",
      "url": "https://theelevatepodcast.com",
      "sameAs": [
        "https://twitter.com",
        "https://linkedin.com",
        "https://instagram.com",
        "https://youtube.com"
      ],
      "knowsAbout": [
        "Executive Leadership",
        "Artificial Intelligence",
        "Neuroscience of Decision Making",
        "High-Performance Mindset",
        "Corporate Storytelling",
        "Journalistic Interviewing"
      ]
    },
    {
      "@type": "PodcastSeries",
      "@id": "https://theelevatepodcast.com/#show",
      "name": "The Elevate Show with Jessica Chen",
      "description": "Deep, unfiltered dialogues on ambition, mindsets, technology breakthroughs, and the human soul.",
      "url": "https://theelevatepodcast.com",
      "author": { "@id": "https://theelevatepodcast.com/#jessicachen" },
      "inLanguage": "en-US"
    },
    {
      "@type": "ProfessionalService",
      "name": "Jessica Chen Media & Podcast Production",
      "url": "https://theelevatepodcast.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "55 Water Street, DUMBO",
        "addressLocality": "Brooklyn",
        "addressRegion": "NY",
        "postalCode": "11201",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 40.7033,
        "longitude": -73.9897
      },
      "telephone": "+1-987-654-3210",
      "priceRange": "$$$$"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#fafaf9] text-slate-900 selection:bg-amber-200">
        <AudioProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <WhatsAppButton />
          <Footer />
        </AudioProvider>
      </body>
    </html>
  );
}
