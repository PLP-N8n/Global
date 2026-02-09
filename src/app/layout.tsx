import type { Metadata } from "next";
import { Bricolage_Grotesque, Spline_Sans, Tiro_Devanagari_Hindi } from "next/font/google";
import { StructuredData } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/constants";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-display-var",
  display: "swap",
});

const body = Spline_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body-var",
  display: "swap",
});

const hindi = Tiro_Devanagari_Hindi({
  subsets: ["devanagari"],
  weight: ["400"],
  variable: "--font-hindi-var",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Global Telecom | Electronics & Mobile Store in Panipat",
    template: "%s | Global Telecom Panipat",
  },
  description:
    "Trusted electronics & mobile store in Panipat since 1997. Samsung, Apple, Vivo, OnePlus, Xiaomi — smartphones, LED TVs, home appliances & accessories with Bajaj Finance EMI.",
  keywords: [
    "electronics store Panipat",
    "mobile shop Panipat",
    "Global Telecom",
    "Global Telecom Panipat",
    "TV shop Panipat",
    "smartphone store Haryana",
    "Samsung dealer Panipat",
    "Apple store Panipat",
    "Vivo shop Panipat",
    "OnePlus store Panipat",
    "Xiaomi shop Panipat",
    "LED TV Panipat",
    "home appliances Panipat",
    "Bajaj Finance EMI Panipat",
    "mobile phone store near me",
    "electronics shop Haryana",
    "best mobile shop Panipat",
    "पानीपत मोबाइल शॉप",
    "पानीपत इलेक्ट्रॉनिक्स स्टोर",
    "ग्लोबल टेलीकॉम पानीपत",
    "phone shop Barsat Road Panipat",
    "authorized Samsung dealer Panipat",
    "electronics retailer",
  ],
  authors: [{ name: "Global Telecom" }],
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-IN": SITE_URL,
      "hi-IN": SITE_URL,
    },
  },
  openGraph: {
    title: "Global Telecom | Electronics & Mobile Store in Panipat",
    description:
      "Trusted electronics & mobile store in Panipat since 1997. Smartphones, LED TVs, appliances & accessories with EMI options.",
    type: "website",
    locale: "en_IN",
    alternateLocale: "hi_IN",
    url: SITE_URL,
    siteName: "Global Telecom",
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Global Telecom — Electronics & Mobile Store in Panipat, Haryana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Telecom | Electronics & Mobile Store in Panipat",
    description:
      "Trusted electronics & mobile store in Panipat since 1997. Smartphones, TVs, appliances & accessories.",
    images: [`${SITE_URL}/images/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: "/manifest.json",
  other: {
    "theme-color": "#C9A96E",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Global Telecom",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${hindi.variable}`}>
      <head>
        <StructuredData />
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
