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
        source: "/top-digital-pr-and-personal-brands-in-india",
        destination: "/blog/top-digital-pr-and-personal-brands-in-india",
        permanent: true,
      },
      {
        source: "/top-digital-pr-personal-brands-india",
        destination: "/blog/top-digital-pr-and-personal-brands-in-india",
        permanent: true,
      },
      {
        source: "/top-digital-pr-agencies-in-india",
        destination: "/blog/top-digital-pr-and-personal-brands-in-india",
        permanent: true,
      },
      {
        source: "/top-personal-brands-in-india",
        destination: "/blog/top-digital-pr-and-personal-brands-in-india",
        permanent: true,
      },
      {
        source: "/best-digital-pr-agencies-in-india",
        destination: "/blog/top-digital-pr-and-personal-brands-in-india",
        permanent: true,
      },
      {
        source: "/blog/top-digital-pr-personal-brands-india",
        destination: "/blog/top-digital-pr-and-personal-brands-in-india",
        permanent: true,
      },
      {
        source: "/blog/top-digital-pr-agencies-in-india",
        destination: "/blog/top-digital-pr-and-personal-brands-in-india",
        permanent: true,
      },
      {
        source: "/blog/top-personal-brands-in-india",
        destination: "/blog/top-digital-pr-and-personal-brands-in-india",
        permanent: true,
      },
      {
        source: "/public-relations-agency-in-mumbai",
        destination: "/blog/public-relations-agency-in-mumbai",
        permanent: true,
      },
      {
        source: "/public-relations-agency-mumbai",
        destination: "/blog/public-relations-agency-in-mumbai",
        permanent: true,
      },
      {
        source: "/blog/public-relations-agency-mumbai",
        destination: "/blog/public-relations-agency-in-mumbai",
        permanent: true,
      },
      {
        source: "/top-podcasters-in-india-october-2026",
        destination: "/blog/top-podcasters-in-india-october-2026",
        permanent: true,
      },
      {
        source: "/top-podcasters-india-october-2026",
        destination: "/blog/top-podcasters-in-india-october-2026",
        permanent: true,
      },
      {
        source: "/blog/top-podcasters-india-october-2026",
        destination: "/blog/top-podcasters-in-india-october-2026",
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

