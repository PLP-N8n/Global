"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { FadeIn, SectionHeader } from "@/components/ui";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

const storeValues = [
  { label: "Quality", desc: "गुणवत्ता" },
  { label: "Honesty", desc: "ईमानदारी" },
  { label: "Service", desc: "सेवा" },
  { label: "Value", desc: "मूल्य" },
];

/**
 * About Section
 *
 * Tell the store's story with authenticity.
 * This is about establishing local roots and trust.
 *
 * Design: Warm, personal, but not overly casual.
 * "We're a real business with real people."
 *
 * Motion:
 * - Split reveal: image from left, text from right
 * - Brass corner brackets on image frame
 * - "Our Promise" cards with hover lift
 * - Layered paper texture background
 */
export function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="section section-deep relative overflow-hidden">
      {/* Layered paper texture background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[var(--color-paper-400)] via-[var(--color-paper-400)] to-[var(--color-paper-500)]"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Visual area - slides from left */}
          <FadeIn direction="right" className="order-2 lg:order-1">
            {/* Image with brass corner brackets */}
            <div className="relative">
              {/* Brass corner brackets */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-l-2 border-t-2 border-[var(--color-gold-400)]" aria-hidden="true" />
              <div className="absolute -top-3 -right-3 w-8 h-8 border-r-2 border-t-2 border-[var(--color-gold-400)]" aria-hidden="true" />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-l-2 border-b-2 border-[var(--color-gold-400)]" aria-hidden="true" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-r-2 border-b-2 border-[var(--color-gold-400)]" aria-hidden="true" />

              {/* Owner photo */}
              <div className="relative bg-[var(--color-paper)] rounded-lg overflow-hidden aspect-[4/3] shadow-md">
                <Image
                  src="/images/owner.jpg"
                  alt="Store owner at Global Telecom"
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-[var(--color-ink-900)]/15 via-transparent to-[var(--color-gold-100)]/25"
                  aria-hidden="true"
                />
                {/* Decorative frame */}
                <div className="absolute inset-3 border border-[var(--color-gold)]/20 rounded" />
              </div>
            </div>
          </FadeIn>

          {/* Content - slides from right */}
          <FadeIn direction="left" delay={150} className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-ink)] mb-4">
              About Global Telecom
            </h2>
            <p className="text-xl text-[var(--color-gold)] font-medium hindi mb-6">
              ग्लोबल टेलीकॉम के बारे में
            </p>

            <div className="space-y-4 text-[var(--color-ink-light)] leading-relaxed">
              <p>
                Global Telecom has been serving the people of Panipat and surrounding
                areas for over 15 years. What started as a small mobile phone shop
                has grown into a trusted destination for all electronics needs.
              </p>

              <p>
                We believe in building lasting relationships with our customers.
                When you buy from us, you&apos;re not just making a purchase — you&apos;re
                becoming part of a community that values honesty, quality, and
                genuine service.
              </p>

              <p className="hindi text-[var(--color-ink-muted)]">
                हम अपने ग्राहकों के साथ स्थायी संबंध बनाने में विश्वास करते हैं।
                जब आप हमसे खरीदते हैं, तो आप सिर्फ खरीदारी नहीं कर रहे - आप एक
                परिवार का हिस्सा बन रहे हैं।
              </p>
            </div>

            {/* Store values with hover lift */}
            <div className="mt-8 pt-8 border-t border-[var(--color-paper)]">
              <h3 className="text-lg font-semibold text-[var(--color-ink)] mb-4">
                Our Promise
              </h3>
              <motion.div
                className="grid grid-cols-2 gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={staggerContainer(0.08, 0.2)}
              >
                {storeValues.map((value) => (
                  <motion.div
                    key={value.label}
                    className="bg-[var(--color-paper)] rounded-lg p-4 cursor-default"
                    variants={staggerItem}
                    whileHover={shouldReduceMotion ? {} : { y: -4, boxShadow: "0 8px 16px rgba(26, 26, 26, 0.08)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <p className="font-semibold text-[var(--color-ink)]">
                      {value.label}
                    </p>
                    <p className="text-sm text-[var(--color-ink-muted)] hindi">
                      {value.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
