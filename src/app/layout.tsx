import type { Metadata } from "next";
import { Bricolage_Grotesque, Spline_Sans, Tiro_Devanagari_Hindi } from "next/font/google";
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
  title: "Global Telecom | Electronics & Mobile Store in Panipat",
  description:
    "Local electronics shop in Panipat, Haryana. Phones, TVs, appliances, and accessories. Call or WhatsApp to check availability.",
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
      "Local electronics shop in Panipat, Haryana. Phones, TVs, appliances, and accessories.",
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
    <html lang="en" className={`${display.variable} ${body.variable} ${hindi.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
