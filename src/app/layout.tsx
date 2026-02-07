import type { Metadata } from "next";
import "./globals.css";

/**
 * Typography System for Global Telecom
 *
 * Fonts are loaded via Google Fonts link tags for build compatibility.
 * Premium font pairing for distinctive, story-driven UI:
 *
 * Literata: Contemporary serif with warmth and ink-trap details
 * - Communicates longevity, authority, and trustworthiness
 * - Fallback: Georgia (excellent editorial serif)
 *
 * Atkinson Hyperlegible: Designed for maximum legibility
 * - Communicates care and accessibility
 * - Clean but not sterile, warm but professional
 * - Fallback: system-ui (modern, readable)
 *
 * Tiro Devanagari Hindi: Professional Hindi typeface
 * - Intentional Hindi support, not an afterthought
 * - Fallback: Mangal
 */

export const metadata: Metadata = {
  title: "Global Telecom | Electronics & Mobile Store in Panipat",
  description:
    "Your trusted electronics retailer in Panipat, Haryana. Quality mobile phones, TVs, appliances, and expert service since establishment. Visit our store or connect via WhatsApp.",
  keywords: [
    "electronics store Panipat",
    "mobile shop Panipat",
    "Global Telecom",
    "TV shop Panipat",
    "smartphone store Haryana",
    "electronics retailer",
  ],
  authors: [{ name: "Global Telecom" }],
  openGraph: {
    title: "Global Telecom | Electronics & Mobile Store in Panipat",
    description:
      "Your trusted electronics retailer in Panipat, Haryana. Quality mobile phones, TVs, appliances, and expert service.",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Load premium font pairing */}
        <link
          href="https://fonts.googleapis.com/css2?family=Literata:opsz,wght@7..72,400;7..72,500;7..72,600;7..72,700&family=Atkinson+Hyperlegible:wght@400;700&family=Tiro+Devanagari+Hindi:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
