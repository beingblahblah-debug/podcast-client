import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply to Be a Guest",
  description: "Apply to be featured on The Harshita Dagha Show. Share your founder story, proprietary frameworks, and industry vision with our executive audience.",
  alternates: {
    canonical: "https://www.harshitadagha.in/be-a-guest",
  },
  openGraph: {
    title: "Apply to Be a Guest | The Harshita Dagha Show",
    description: "Apply to be featured on The Harshita Dagha Show. Share your founder story, proprietary frameworks, and industry vision with our executive audience.",
    url: "https://www.harshitadagha.in/be-a-guest",
    type: "website",
    images: [
      {
        url: "/images/harshita-studio-navy.jpg",
        width: 1024,
        height: 682,
        alt: "Apply to be a guest on The Harshita Dagha Show",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apply to Be a Guest | The Harshita Dagha Show",
    description: "Apply to be featured on The Harshita Dagha Show. Share your founder story, proprietary frameworks, and industry vision with our executive audience.",
    images: ["/images/harshita-studio-navy.jpg"],
  },
};

export default function BeAGuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
