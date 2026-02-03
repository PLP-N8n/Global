import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Global Telecom | Premium Electronics Store in Panipat, Haryana",
  description:
    "Panipat's trusted destination for premium electronics. Authorized dealer for Samsung, Apple, LG, Sony & more. Quality mobile phones, 4K TVs, home appliances with genuine warranty. Visit our store or connect via WhatsApp.",
  keywords: [
    "electronics store Panipat",
    "mobile shop Panipat",
    "Global Telecom Panipat",
    "Samsung authorized dealer Panipat",
    "Apple store Panipat",
    "4K TV shop Haryana",
    "premium electronics retailer",
    "smartphone store Panipat",
    "home appliances Panipat",
  ],
  authors: [{ name: "Global Telecom" }],
  openGraph: {
    title: "Global Telecom | Premium Electronics Store in Panipat",
    description:
      "Panipat's most trusted electronics retailer. Premium mobile phones, TVs, and appliances with genuine warranty and expert service.",
    type: "website",
    locale: "en_IN",
    siteName: "Global Telecom",
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Telecom | Premium Electronics Store in Panipat",
    description: "Panipat's trusted destination for premium electronics.",
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
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Load Fonts - Playfair Display (headings), Manrope (body), Cinzel (accents), Noto Sans Devanagari (Hindi) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Manrope:wght@400;500;600;700&family=Cinzel:wght@400;500&family=Noto+Sans+Devanagari:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
