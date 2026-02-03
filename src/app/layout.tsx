import type { Metadata } from "next";
import "./globals.css";

/**
 * Typography System for Global Telecom
 *
 * Fonts are loaded via CSS @import in globals.css for build compatibility.
 * High-quality system font fallbacks ensure consistent experience.
 *
 * Source Serif 4: Editorial serif for headings
 * - Communicates longevity, authority, and trustworthiness
 * - Fallback: Georgia (excellent editorial serif)
 *
 * Source Sans 3: Humanist sans for body text
 * - Clean but not sterile, warm but professional
 * - Fallback: system-ui (modern, readable)
 *
 * Noto Sans Devanagari: Hindi typography
 * - Intentional Hindi support, not an afterthought
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
        {/* Load fonts - these will be fetched client-side */}
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@400;500;600;700&family=Source+Sans+3:wght@400;500;600;700&family=Noto+Sans+Devanagari:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
