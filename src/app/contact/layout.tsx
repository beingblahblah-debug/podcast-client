import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Studio Bookings",
  description: "Get in touch with Harshita Dagha and Beingblahblah for brand partnerships, media appearances, TEDx keynotes, and podcast bookings.",
  alternates: {
    canonical: "https://www.harshitadagha.in/contact",
  },
  openGraph: {
    title: "Contact & Studio Bookings | Harshita Dagha",
    description: "Get in touch with Harshita Dagha and Beingblahblah for brand partnerships, media appearances, TEDx keynotes, and podcast bookings.",
    url: "https://www.harshitadagha.in/contact",
    type: "website",
    images: [
      {
        url: "/images/harshita-portrait-main.jpg",
        width: 545,
        height: 682,
        alt: "Contact Harshita Dagha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Studio Bookings | Harshita Dagha",
    description: "Get in touch with Harshita Dagha and Beingblahblah for brand partnerships, media appearances, TEDx keynotes, and podcast bookings.",
    images: ["/images/harshita-portrait-main.jpg"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
