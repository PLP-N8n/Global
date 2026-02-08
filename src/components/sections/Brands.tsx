"use client";

import { motion, useReducedMotion } from "motion/react";
import { SectionHeader, FadeIn } from "@/components/ui";

interface Brand {
  name: string;
  logo: string;
}

const brands: Brand[] = [
  { name: "Samsung", logo: "/brands/samsung.png" },
  { name: "Apple", logo: "/brands/apple.png" },
  { name: "Vivo", logo: "/brands/vivo.png" },
  { name: "Oppo", logo: "/brands/oppo.png" },
  { name: "Realme", logo: "/brands/realme.png" },
  { name: "OnePlus", logo: "/brands/one-plus.png" },
  { name: "Xiaomi", logo: "/brands/xiaomi.png" },
  { name: "LG", logo: "/brands/lg.png" },
  { name: "Sony", logo: "/brands/sony.png" },
  { name: "boAt", logo: "/brands/boat.png" },
  { name: "JBL", logo: "/brands/jbl.png" },
  { name: "Havells", logo: "/brands/havells.png" },
  { name: "Motorola", logo: "/brands/motorola.png" },
];

const marqueeItems = [...brands, ...brands];

function BrandTile({ brand }: { brand: Brand }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-5 px-4 rounded-xl bg-white/[0.07] border border-white/[0.08] hover:bg-white/[0.12] hover:border-white/[0.15] transition-all duration-300 group">
      <div className="w-16 h-10 md:w-20 md:h-12 flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={brand.logo}
          alt={`${brand.name} logo`}
          className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          loading="lazy"
        />
      </div>
      <span className="text-[10px] text-white/40 group-hover:text-white/70 font-medium tracking-wider uppercase transition-colors duration-300">
        {brand.name}
      </span>
    </div>
  );
}

function MarqueeItem({ brand, dimmer }: { brand: Brand; dimmer?: boolean }) {
  return (
    <div className="flex-shrink-0 flex flex-col items-center gap-2 group px-4">
      <div className="w-20 h-10 md:w-24 md:h-12 flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={brand.logo}
          alt={`${brand.name} logo`}
          className={`max-w-full max-h-full object-contain transition-opacity duration-300 ${
            dimmer
              ? "opacity-30 group-hover:opacity-90"
              : "opacity-50 group-hover:opacity-100"
          }`}
          loading="lazy"
        />
      </div>
      <span className="text-[9px] text-white/0 group-hover:text-white/50 font-medium tracking-wider uppercase transition-all duration-300">
        {brand.name}
      </span>
    </div>
  );
}

export function Brands() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="brands" className="section section-ink overflow-hidden">
      <div className="container">
        <SectionHeader
          title="Brands We Carry"
          titleHi="हमारे ब्रांड्स"
          subtitle="Availability changes quickly. Call or WhatsApp to confirm stock on a specific model."
          align="center"
          dark
        />
      </div>

      {shouldReduceMotion ? (
        <FadeIn direction="up">
          <div className="container">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
              {brands.map((brand) => (
                <BrandTile key={brand.name} brand={brand} />
              ))}
            </div>
          </div>
        </FadeIn>
      ) : (
        <div className="space-y-5">
          {/* Row 1 — scrolls left */}
          <div className="relative">
            <motion.div
              className="flex gap-4 md:gap-8 items-center"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ x: { duration: 35, repeat: Infinity, ease: "linear" } }}
            >
              {marqueeItems.map((brand, i) => (
                <MarqueeItem key={`r1-${brand.name}-${i}`} brand={brand} />
              ))}
            </motion.div>
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-r from-[var(--color-ink-900)] to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-l from-[var(--color-ink-900)] to-transparent pointer-events-none z-10" />
          </div>

          {/* Row 2 — scrolls right, dimmer */}
          <div className="relative" aria-hidden="true">
            <motion.div
              className="flex gap-4 md:gap-8 items-center"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ x: { duration: 42, repeat: Infinity, ease: "linear" } }}
            >
              {[...marqueeItems].reverse().map((brand, i) => (
                <MarqueeItem key={`r2-${brand.name}-${i}`} brand={brand} dimmer />
              ))}
            </motion.div>
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-r from-[var(--color-ink-900)] to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-l from-[var(--color-ink-900)] to-transparent pointer-events-none z-10" />
          </div>
        </div>
      )}

      {/* Bottom tagline */}
      <div className="container mt-10 md:mt-14">
        <FadeIn direction="up">
          <p className="text-center text-xs text-white/30 tracking-wide uppercase">
            {brands.length} brands &middot; Authorized dealer &middot; Genuine warranty
          </p>
        </FadeIn>
      </div>

      {/* Screen reader text */}
      <div className="visually-hidden">
        <p>Brands available: {brands.map((b) => b.name).join(", ")}</p>
      </div>
    </section>
  );
}
