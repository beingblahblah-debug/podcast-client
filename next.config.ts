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
        source: "/blog/best-female-podcasts-india",
        destination: "/blog/best-female-podcasts-india-city-guide-october-2026",
        permanent: true,
      },
      {
        source: "/best-female-podcasts-india-city-guide-october-2026",
        destination: "/blog/best-female-podcasts-india-city-guide-october-2026",
        permanent: true,
      },
      {
        source: "/best-female-podcasts-india-city-guide",
        destination: "/blog/best-female-podcasts-india-city-guide-october-2026",
        permanent: true,
      },
      {
        source: "/blog/best-female-podcasts-india-city-guide",
        destination: "/blog/best-female-podcasts-india-city-guide-october-2026",
        permanent: true,
      },
      {
        source: "/best-podcast-in-india-top-podcasters-best-indian-podcasts-guide",
        destination: "/blog/best-podcast-in-india-top-podcasters-best-indian-podcasts-guide",
        permanent: true,
      },
      {
        source: "/best-podcast-in-india",
        destination: "/blog/best-podcast-in-india-top-podcasters-best-indian-podcasts-guide",
        permanent: true,
      },
      {
        source: "/best-indian-podcasts",
        destination: "/blog/best-podcast-in-india-top-podcasters-best-indian-podcasts-guide",
        permanent: true,
      },
      {
        source: "/top-podcasters-in-india",
        destination: "/blog/best-podcast-in-india-top-podcasters-best-indian-podcasts-guide",
        permanent: true,
      },
      {
        source: "/top-podcasters-india",
        destination: "/blog/best-podcast-in-india-top-podcasters-best-indian-podcasts-guide",
        permanent: true,
      },
      {
        source: "/best-female-podcasts-india",
        destination: "/blog/best-female-podcasts-india-city-guide-october-2026",
        permanent: true,
      },
      {
        source: "/popular-women-podcasts-india",
        destination: "/blog/best-female-podcasts-india-city-guide-october-2026",
        permanent: true,
      },
      {
        source: "/blog/best-podcast-in-india",
        destination: "/blog/best-podcast-in-india-top-podcasters-best-indian-podcasts-guide",
        permanent: true,
      },
      {
        source: "/blog/best-podcast-in-india-guide",
        destination: "/blog/best-podcast-in-india-top-podcasters-best-indian-podcasts-guide",
        permanent: true,
      },
      {
        source: "/blog/top-podcasters-in-india",
        destination: "/blog/best-podcast-in-india-top-podcasters-best-indian-podcasts-guide",
        permanent: true,
      },
      {
        source: "/blog/best-indian-podcasts",
        destination: "/blog/best-podcast-in-india-top-podcasters-best-indian-podcasts-guide",
        permanent: true,
      },
      {
        source: "/blog/popular-women-podcasts-india",
        destination: "/blog/best-female-podcasts-india-city-guide-october-2026",
        permanent: true,
      },
      {
        source: "/blog/best-podcasts-by-indian-women-best-female-podcasts-india",
        destination: "/blog/best-podcasts-by-indian-women",
        permanent: true,
      },
      {
        source: "/blog/indian-women-podcasters-list-young-female-podcast-hosts",
        destination: "/indian-women-podcasters-list",
        permanent: true,
      },
      {
        source: "/blog/how-to-get-booked-on-podcasts-mumbai-india",
        destination: "/blog/how-to-pitch-top-tier-podcasts-2026",
        permanent: true,
      },
      {
        source: "/blog/podcasts-looking-for-guests-mumbai-india-october-2026",
        destination: "/blog/how-to-pitch-top-tier-podcasts-2026",
        permanent: true,
      },
      {
        source: "/blog/podcast-guest-opportunities-how-to-become-a-podcast-guest-mumbai",
        destination: "/be-a-guest",
        permanent: true,
      },
      {
        source: "/blog/best-podcasts-by-women-india",
        destination: "/blog/best-podcasts-by-indian-women",
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
  async headers() {
    return [
      {
        source: "/(top-female-podcasters|top-female-podcasters-india|indian-women-podcasters-list|young-female-podcasters-india|indian-women-podcast-hosts|best-podcasts-by-indian-women|best-female-podcasts-india|popular-women-podcasts-india|top-podcasters-in-india|best-podcast-in-india|best-indian-podcasts)",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

