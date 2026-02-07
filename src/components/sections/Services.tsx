"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  ShieldIcon,
  TruckIcon,
  CheckCircleIcon,
  SectionHeader,
  FadeIn,
  IconContainerAnimated,
  AnimatedCounter,
} from "@/components/ui";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

interface Service {
  icon: React.ReactNode;
  title: string;
  titleHi: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <ShieldIcon size={28} />,
    title: "Genuine Products",
    titleHi: "असली उत्पाद",
    description:
      "All products are sourced directly from authorized distributors. Every item comes with manufacturer warranty and GST bill.",
  },
  {
    icon: <TruckIcon size={28} />,
    title: "Home Delivery",
    titleHi: "होम डिलीवरी",
    description:
      "Free delivery within Panipat city limits. Safe packaging and careful handling of all electronics.",
  },
  {
    icon: <CheckCircleIcon size={28} />,
    title: "After-Sales Support",
    titleHi: "बिक्री के बाद सेवा",
    description:
      "We stand behind every product we sell. Get help with warranty claims, servicing, and product support.",
  },
];

const benefits = [
  "GST billing on all purchases",
  "Price match with authorized dealers",
  "Easy EMI options available",
  "Exchange offers on select products",
  "Expert product guidance",
];

/**
 * Services Section
 *
 * Communicate the value-adds that make this a trustworthy shop.
 * Focus on practical benefits, not marketing speak.
 *
 * Design: Clear, direct communication. No fluff.
 *
 * Motion:
 * - Connecting visual elements between service cards
 * - AnimatedCounter for "15+" stat
 * - Brass border frame around stat card
 * - Icon pulse animation on scroll
 */
export function Services() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="services" className="section bg-[var(--color-paper)] depth-radial">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <SectionHeader
          title="Why Choose Us"
          titleHi="हमें क्यों चुनें"
          subtitle="More than just a store — we're your local electronics partner."
          showDecorative
        />

        {/* Services Grid with connecting elements */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 md:gap-12 relative"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer(0.15, 0)}
        >
          {/* Connecting lines (hidden on mobile) */}
          <div
            className="hidden md:block absolute top-16 left-1/3 right-1/3 h-px bg-gradient-to-r from-[var(--color-gold-200)] via-[var(--color-gold-400)] to-[var(--color-gold-200)]"
            aria-hidden="true"
          />

          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="text-center relative"
              variants={staggerItem}
            >
              {/* Icon with pulse animation */}
              <IconContainerAnimated
                size="lg"
                variant="outline"
                className="mx-auto mb-5"
                pulseOnView
              >
                {service.icon}
              </IconContainerAnimated>

              {/* Connection dot (hidden on mobile) */}
              {index < services.length - 1 && (
                <div
                  className="hidden md:block absolute top-[60px] right-0 translate-x-1/2 w-2 h-2 rounded-full bg-[var(--color-gold)]"
                  aria-hidden="true"
                />
              )}

              {/* Title */}
              <h3 className="text-xl font-semibold text-[var(--color-ink)] mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-[var(--color-gold)] hindi mb-3">
                {service.titleHi}
              </p>

              {/* Description */}
              <p className="text-[var(--color-ink-muted)] leading-relaxed text-sm max-w-sm mx-auto">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional benefits with stat card */}
        <FadeIn delay={200} className="mt-16 bg-[var(--color-paper-warm)] rounded-lg p-8 md:p-10 relative overflow-hidden">
          {/* Subtle brass gradient overlay */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-[var(--color-gold-50)]/50 to-transparent"
            aria-hidden="true"
          />

          <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <h3 className="text-2xl font-serif font-bold text-[var(--color-ink)] mb-4">
                Shop with Confidence
              </h3>
              <motion.ul
                className="space-y-3"
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={staggerContainer(0.08, 0.2)}
              >
                {benefits.map((benefit) => (
                  <motion.li
                    key={benefit}
                    className="flex items-center gap-3 text-[var(--color-ink-light)]"
                    variants={staggerItem}
                  >
                    <CheckCircleIcon
                      size={18}
                      className="text-[var(--color-success)] flex-shrink-0"
                    />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            {/* Stat card with brass frame */}
            <div className="text-center md:text-right">
              <motion.div
                className="inline-block bg-white rounded-lg p-6 shadow-sm border-2 border-[var(--color-gold-300)] relative"
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {/* Brass gradient top line */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-gold-400)] via-[var(--color-gold-600)] to-[var(--color-gold-400)]"
                  aria-hidden="true"
                />

                <AnimatedCounter
                  value={15}
                  suffix="+"
                  duration={2000}
                  labelBelow="Years of Trust"
                  labelBelowHi="विश्वास के वर्ष"
                />
              </motion.div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
