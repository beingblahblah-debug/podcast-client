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
        source: "/top-female-podcasters",
        destination: "/highlights",
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

