"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import {
  Button,
  PhoneIcon,
  WhatsAppIcon,
  CheckCircleIcon,
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui";
import { staggerContainer, staggerItem, floatAnimation, viewportOnce } from "@/lib/motion";

const PHONE_NUMBER = "+91-1234567890";
const WHATSAPP_NUMBER = "911234567890";

const trustPoints = [
  { text: "Authorized Dealer", textHi: "अधिकृत डीलर" },
  { text: "Genuine Products", textHi: "असली उत्पाद" },
  { text: "Expert Service", textHi: "विशेषज्ञ सेवा" },
];

/**
 * Hero Section
 *
 * The first impression - must establish trust within 5 seconds.
 * "This is a real, reliable shop that has been here for years."
 *
 * Design: Confident, grounded, not flashy or experimental.
 *
 * Motion:
 * - Layered radial gradient background (brass-tinted from center)
 * - Refined geometric grid replacing dot pattern
 * - Staggered content reveal: badge → headline → tagline → CTAs
 * - Brass corner brackets on image frame
 * - Animated "15+ Years" floating badge
 */
export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      {/* Hero video background */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/heroimage.png"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 bg-[var(--color-ink-900)]/60"
          aria-hidden="true"
        />
      </div>

      {/* Layered radial gradient background (gold-tinted from center) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 60% 40%, rgba(201, 162, 39, 0.12) 0%, transparent 55%)`,
        }}
        aria-hidden="true"
      />

      {/* Refined geometric grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(var(--color-ink) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-ink) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content with staggered reveal */}
          <motion.div
            className="max-w-xl"
            initial="hidden"
            animate="visible"
            variants={staggerContainer(0.15, 0.1)}
          >
            {/* Trust badge */}
            <motion.div
              variants={staggerItem}
              className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6"
            >
              <span className="w-2 h-2 bg-[var(--color-success)] rounded-full" />
              <span className="text-sm font-medium text-[var(--color-ink-light)]">
                Serving Panipat Since Establishment
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              variants={staggerItem}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[var(--color-ink)] leading-tight mb-4"
            >
              Your Trusted
              <br />
              <span className="bg-gradient-to-r from-[var(--color-gold-600)] to-[var(--color-gold-500)] bg-clip-text text-transparent">Electronics</span> Store
            </motion.h1>

            {/* Hindi tagline */}
            <motion.p
              variants={staggerItem}
              className="text-xl md:text-2xl text-[var(--color-ink-muted)] mb-2 hindi font-medium"
            >
              आपका विश्वसनीय इलेक्ट्रॉनिक्स स्टोर
            </motion.p>

            {/* Subtitle */}
            <motion.p
              variants={staggerItem}
              className="text-lg text-[var(--color-ink-light)] leading-relaxed mb-8 max-w-md"
            >
              Quality mobile phones, televisions, home appliances, and accessories.
              Visit our store in Panipat or connect with us today.
            </motion.p>

            {/* Trust points */}
            <motion.div variants={staggerItem} className="flex flex-wrap gap-4 mb-8">
              {trustPoints.map((point, index) => (
                <motion.div
                  key={point.text}
                  className="flex items-center gap-2 text-[var(--color-ink-light)]"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <CheckCircleIcon
                    size={20}
                    className="text-[var(--color-success)]"
                  />
                  <span className="text-sm font-medium">{point.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={staggerItem}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                as="a"
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I'm interested in your products.`}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                size="lg"
                icon={<WhatsAppIcon size={22} />}
              >
                Chat on WhatsApp
              </Button>
              <Button
                as="a"
                href={`tel:${PHONE_NUMBER}`}
                variant="secondary"
                size="lg"
                icon={<PhoneIcon size={22} />}
              >
                Call Us Now
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual/Image area */}
          <FadeIn direction="left" delay={300} className="relative lg:pl-8">
            {/* Image with gold corner brackets */}
            <div className="relative">
              {/* Gold corner brackets */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-l-2 border-t-2 border-[var(--color-gold-500)]" aria-hidden="true" />
              <div className="absolute -top-3 -right-3 w-8 h-8 border-r-2 border-t-2 border-[var(--color-gold-500)]" aria-hidden="true" />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-l-2 border-b-2 border-[var(--color-gold-500)]" aria-hidden="true" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-r-2 border-b-2 border-[var(--color-gold-500)]" aria-hidden="true" />

              {/* Main image */}
              <div className="relative bg-[var(--color-ink-900)] rounded-lg overflow-hidden aspect-[4/3] shadow-xl">
                <Image
                  src="/images/heroimage.png"
                  alt="Global Telecom featured products"
                  fill
                  sizes="(min-width: 1024px) 45vw, 90vw"
                  className="object-cover"
                  priority
                />
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-[var(--color-ink-900)]/50 via-transparent to-[var(--color-gold-100)]/20"
                  aria-hidden="true"
                />

                {/* Decorative gold frame */}
                <div className="absolute inset-4 border-2 border-[var(--color-gold-500)]/30 rounded" />

                {/* Logo and store info */}
                <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center h-full">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4 shadow-2xl border-2 border-[var(--color-gold-500)]/50 bg-[var(--color-ink-900)]">
                    <Image
                      src="/logo.jpeg"
                      alt="Global Telecom Logo"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-[var(--color-gold-400)] text-lg font-serif font-semibold">
                    Global Telecom
                  </p>
                  <p className="text-[var(--color-paper-200)] text-sm mt-1">
                    Premium Electronics Store
                  </p>
                </div>
              </div>
            </div>

            {/* Floating info card */}
            <motion.div
              className="absolute -bottom-4 -left-4 lg:left-0 bg-white rounded-lg shadow-md p-4 max-w-[200px]"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-sm font-semibold text-[var(--color-ink)] mb-1">
                Visit Our Store
              </p>
              <p className="text-xs text-[var(--color-ink-muted)]">
                Main Market, GT Road
                <br />
                Panipat, Haryana
              </p>
            </motion.div>

            {/* Animated "15+ Years" floating badge - Black & Gold */}
            <motion.div
              className="absolute -top-2 -right-2 lg:right-4 bg-[var(--color-ink-900)] rounded-lg shadow-lg p-3 border-2 border-[var(--color-gold-500)]"
              initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.8 }}
              animate={shouldReduceMotion ? {} : { opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              {...(!shouldReduceMotion && {
                animate: { y: [0, -6, 0] },
                transition: {
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                },
              })}
            >
              <p className="text-2xl font-serif font-bold text-[var(--color-gold)] leading-none">
                15+
              </p>
              <p className="text-[10px] text-[var(--color-paper-500)] leading-tight mt-1">
                Years of
                <br />
                Trust
              </p>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
