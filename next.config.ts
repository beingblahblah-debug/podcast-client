import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/articles",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/top-female-podcasters-in-india-october-2026",
        destination: "/blog/top-female-podcasters-in-india-october-2026",
        permanent: true,
      },
      {
        source: "/top-female-podcasters-india-october-2026",
        destination: "/blog/top-female-podcasters-in-india-october-2026",
        permanent: true,
      },
      {
        source: "/blog/top-female-podcasters-india-october-2026",
        destination: "/blog/top-female-podcasters-in-india-october-2026",
        permanent: true,
      },
      {
        source: "/privacy-policy",
        destination: "/privacy",
        permanent: true,
      },
      {
        source: "/terms-and-conditions",
        destination: "/terms",
        permanent: true,
      },
      {
        source: "/reels",
        destination: "/highlights",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

