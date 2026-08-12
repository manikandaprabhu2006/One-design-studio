import type { Metadata } from "next";
import "@/styles/globals.css";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";

export const metadata: Metadata = {
  title: {
    default: "One Design Studio | Luxury Architecture & Construction",
    template: "%s | One Design Studio",
  },
  description:
    "One Design Studio creates premium residential and commercial spaces with timeless design, quality craftsmanship and lasting value. Award-winning architecture firm specializing in luxury homes, commercial buildings, and renovations.",
  keywords: [
    "luxury architecture",
    "premium construction",
    "residential design",
    "commercial construction",
    "interior design",
    "renovation",
    "modern architecture",
    "One Design Studio",
  ],
  authors: [{ name: "One Design Studio" }],
  creator: "One Design Studio",
  metadataBase: new URL("https://onedesignstudio.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://onedesignstudio.com",
    siteName: "One Design Studio",
    title: "One Design Studio | Luxury Architecture & Construction",
    description:
      "Premium residential and commercial spaces with timeless design, quality craftsmanship and lasting value.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "One Design Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "One Design Studio | Luxury Architecture & Construction",
    description:
      "Premium residential and commercial spaces with timeless design, quality craftsmanship and lasting value.",
    images: ["/images/og-image.jpg"],
    creator: "@onedesignstudio",
  },
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
