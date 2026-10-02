import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AudioProvider } from "@/context/AudioContext";
import Navbar from "@/components/Navbar";
import AudioPlayerBar from "@/components/AudioPlayerBar";
import Footer from "@/components/Footer";

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
  title: "The Elevate Podcast with Jessica Chen | Masterclass Audio & Deep Dialogues",
  description: "An intimate, unfiltered podcast hosted by Jessica Chen exploring the mechanics of mastery, emotional resilience, artificial intelligence, and visionary leadership.",
  keywords: ["podcast", "Jessica Chen", "interviews", "mindset", "leadership", "technology", "society and culture"],
  authors: [{ name: "Jessica Chen" }],
  openGraph: {
    title: "The Elevate Podcast with Jessica Chen",
    description: "Deep dialogues on ambition, mindsets & the human soul. Ranked Top 1% worldwide.",
    url: "https://elevatepodcast.com",
    siteName: "The Elevate Podcast",
    images: [
      {
        url: "/images/cover.jpg",
        width: 1200,
        height: 1200,
        alt: "The Elevate Podcast with Jessica Chen",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-[#fafaf9] text-slate-900 selection:bg-amber-200">
        <AudioProvider>
          <Navbar />
          <main className="flex-1 pb-20">{children}</main>
          <AudioPlayerBar />
          <Footer />
        </AudioProvider>
      </body>
    </html>
  );
}
