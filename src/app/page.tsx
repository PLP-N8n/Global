import { Header, Footer } from "@/components/layout";
import {
  Hero,
  Products,
  Brands,
  Services,
  About,
  Contact,
} from "@/components/sections";

/**
 * Global Telecom Homepage
 *
 * Design Philosophy:
 * - Local, Established, Trustworthy, Quietly Confident
 * - "This is a real, reliable shop that has been here for years."
 *
 * The interface feels crafted, not automated.
 * Every visual decision answers: "Does this help a local customer
 * trust this shop within 5 seconds?"
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero - First impression, establish trust immediately */}
        <Hero />

        {/* Products - What we offer, clear categories */}
        <Products />

        {/* Brands - Legitimacy through partnerships */}
        <Brands />

        {/* Services - Why choose us, value proposition */}
        <Services />

        {/* About - Our story, local roots */}
        <About />

        {/* Contact - Drive action: calls, WhatsApp, visits */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
