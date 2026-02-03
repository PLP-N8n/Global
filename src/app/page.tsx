import { Header, Footer } from "@/components/layout";
import {
  Hero,
  TrustBanner,
  About,
  Products,
  Brands,
  Services,
  Contact,
} from "@/components/sections";
import { WhatsAppFloat } from "@/components/ui";

/**
 * Global Telecom Homepage
 *
 * Design Philosophy: LUXURY
 * - Clean, elegant, premium feel
 * - Glassmorphism effects for modern touch
 * - SEO-optimized section ordering
 * - Trust-driven with local authority
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg)]">
      <Header />

      <main className="flex-1">
        {/* Hero - First impression with immersive imagery */}
        <Hero />

        {/* Trust Banner - Authorized dealer badges (SEO: trust signals early) */}
        <TrustBanner />

        {/* About - Local story for SEO (moved up as requested) */}
        <About />

        {/* Products - Bento showcase */}
        <Products />

        {/* Brands - Authority through partnerships */}
        <Brands />

        {/* Services - Value propositions */}
        <Services />

        {/* Contact - Drive conversions */}
        <Contact />
      </main>

      <Footer />

      {/* Floating WhatsApp button for mobile */}
      <WhatsAppFloat />
    </div>
  );
}
