"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { SectionHeader, FadeIn } from "@/components/ui";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

interface Brand {
  name: string;
  category: string;
  logo: string;
  logoAlt?: string;
}

const brands: Brand[] = [
  { name: "Samsung", category: "Mobile, TV, Appliances", logo: "/brands/samsung.png" },
  { name: "Vivo", category: "Mobile", logo: "/brands/vivo.png" },
  { name: "Oppo", category: "Mobile", logo: "/brands/oppo.png" },
  { name: "Realme", category: "Mobile, Audio", logo: "/brands/realme.png" },
  { name: "OnePlus", category: "Mobile, TV", logo: "/brands/oneplus.jpg" },
  { name: "Apple", category: "Mobile, Accessories", logo: "/brands/apple.png" },
  { name: "LG", category: "TV, Appliances", logo: "/brands/lg.png" },
  { name: "Sony", category: "TV, Audio", logo: "/brands/sony.png" },
  { name: "Mi (Xiaomi)", category: "Mobile, TV, Accessories", logo: "/brands/xiaomi.jpg", logoAlt: "Xiaomi logo" },
  { name: "boAt", category: "Audio, Accessories", logo: "/brands/boat.jpeg" },
  { name: "JBL", category: "Audio", logo: "/brands/jbl.jpg" },
  { name: "Havells", category: "Appliances", logo: "/brands/havells.png" },
];

/**
 * Brands Section
 *
 * Showcase brand partnerships to establish legitimacy.
 * "We carry real brands" = trust signal.
 *
 * Design: Clean grid, no flashy logos animation.
 * Let the brand names speak for themselves.
 *
 * Motion:
 * - Staggered grid entrance animation
 * - Hover state revealing brand category
 * - "Authorized Dealer" decorative frame at bottom
 * - Alternating background tint for visual rhythm
 */
export function Brands() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="brands" className="section section-warm">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <SectionHeader
          title="Brands We Carry"
          titleHi="हमारे ब्रांड्स"
          subtitle="Authorized dealer for leading electronics brands. All products are 100% genuine with official warranty."
          showDecorative
        />

        {/* Brands Grid with stagger animation */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.05, 0)}
        >
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              variants={staggerItem}
              whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className={`
                bg-white rounded-lg p-6 text-center border border-[var(--color-paper-deep)]
                hover:border-[var(--color-gold)]/40 hover:shadow-md
                transition-all duration-200 group relative overflow-hidden
                ${index % 2 === 0 ? "" : "bg-[var(--color-paper-100)]"}
              `}
            >
              {/* Hover reveal overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[var(--color-gold-50)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                aria-hidden="true"
              />

              <div className="relative z-10">
                {/* Brand logo */}
                <div className="relative w-24 h-12 mx-auto mb-4">
                  <Image
                    src={brand.logo}
                    alt={brand.logoAlt ?? `${brand.name} logo`}
                    fill
                    sizes="96px"
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <span className="visually-hidden">{brand.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Authorized Dealer decorative frame */}
        <FadeIn delay={300} className="text-center mt-12 pt-8 border-t border-[var(--color-paper-deep)]">
          <div className="relative inline-block">
            {/* Decorative brass corners */}
            <div className="absolute -top-2 -left-4 w-4 h-4 border-l-2 border-t-2 border-[var(--color-gold-400)]" aria-hidden="true" />
            <div className="absolute -top-2 -right-4 w-4 h-4 border-r-2 border-t-2 border-[var(--color-gold-400)]" aria-hidden="true" />
            <div className="absolute -bottom-2 -left-4 w-4 h-4 border-l-2 border-b-2 border-[var(--color-gold-400)]" aria-hidden="true" />
            <div className="absolute -bottom-2 -right-4 w-4 h-4 border-r-2 border-b-2 border-[var(--color-gold-400)]" aria-hidden="true" />

            <div className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-lg shadow-sm">
              <span className="w-2 h-2 bg-[var(--color-success)] rounded-full" />
              <span className="text-sm font-medium text-[var(--color-ink-light)]">
                Authorized Dealer &bull; Genuine Products &bull; Official Warranty
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
