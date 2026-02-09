import { Header, Footer } from "@/components/layout";
import {
  Hero,
  Products,
  Brands,
  Services,
  About,
  FAQ,
  Contact,
} from "@/components/sections";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" style={{ scrollSnapType: "y proximity" }}>
      <ScrollProgress />
      <Header />

      <main className="flex-1">
        <Hero />
        <Products />
        <Brands />
        <Services />
        <About />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
