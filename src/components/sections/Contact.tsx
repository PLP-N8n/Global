"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  Button,
  PhoneIcon,
  WhatsAppIcon,
  MapPinIcon,
  ClockIcon,
  FadeIn,
  Divider,
} from "@/components/ui";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

const PHONE_NUMBER = "+91-1234567890";
const WHATSAPP_NUMBER = "911234567890";
const STORE_ADDRESS = "Main Market, GT Road, Panipat, Haryana 132103";
const STORE_HOURS = {
  weekdays: "Monday - Saturday: 10:00 AM - 8:00 PM",
  sunday: "Sunday: 11:00 AM - 6:00 PM",
};

const contactMethods = [
  {
    icon: PhoneIcon,
    label: "Call Us",
    value: PHONE_NUMBER,
    href: `tel:${PHONE_NUMBER}`,
    bgColor: "bg-[var(--color-ink-light)]",
  },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: "Message Us",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    bgColor: "bg-[var(--color-whatsapp)]",
    external: true,
  },
  {
    icon: MapPinIcon,
    label: "Visit Us",
    value: STORE_ADDRESS,
    bgColor: "bg-[var(--color-ink-light)]",
  },
  {
    icon: ClockIcon,
    label: "Store Hours",
    value: `${STORE_HOURS.weekdays}\n${STORE_HOURS.sunday}`,
    bgColor: "bg-[var(--color-ink-light)]",
  },
];

/**
 * Contact Section
 *
 * The goal: drive walk-ins, calls, and WhatsApp enquiries.
 * Make it extremely easy to take action.
 *
 * Design: Clear CTAs, large tap targets, no friction.
 *
 * Motion:
 * - Subtle animated gradient background (slow color shift)
 * - Icon hover animations (subtle bounce)
 * - Brass line separators between contact methods
 * - Custom styled frame for map area
 */
export function Contact() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="contact" className="section bg-[var(--color-ink)] text-[var(--color-paper)] relative overflow-hidden">
      {/* Subtle animated gradient background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0.3 }}
        animate={shouldReduceMotion ? {} : {
          background: [
            "radial-gradient(ellipse at 20% 30%, rgba(168, 144, 112, 0.15) 0%, transparent 50%)",
            "radial-gradient(ellipse at 80% 70%, rgba(168, 144, 112, 0.15) 0%, transparent 50%)",
            "radial-gradient(ellipse at 20% 30%, rgba(168, 144, 112, 0.15) 0%, transparent 50%)",
          ],
        }}
        transition={shouldReduceMotion ? {} : {
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-paper)] mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-[var(--color-gold-light)] font-medium hindi mb-6">
              संपर्क करें
            </p>

            <p className="text-[var(--color-paper-deep)] leading-relaxed mb-8 max-w-md">
              Have questions about a product? Want to check availability?
              Reach out to us — we&apos;re here to help.
            </p>

            {/* Contact methods with stagger animation */}
            <motion.div
              className="space-y-6 mb-10"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer(0.1, 0.2)}
            >
              {contactMethods.map((method, index) => (
                <motion.div key={method.label} variants={staggerItem}>
                  <div className="flex items-start gap-4">
                    {/* Icon with hover bounce */}
                    <motion.div
                      className={`w-12 h-12 ${method.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}
                      whileHover={shouldReduceMotion ? {} : { y: -2, scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                      <method.icon size={24} className="text-[var(--color-paper)]" />
                    </motion.div>
                    <div>
                      <p className="font-semibold text-[var(--color-paper)] mb-1">
                        {method.label}
                      </p>
                      {method.href ? (
                        <a
                          href={method.href}
                          target={method.external ? "_blank" : undefined}
                          rel={method.external ? "noopener noreferrer" : undefined}
                          className="text-[var(--color-paper-deep)] hover:text-[var(--color-paper)] transition-colors text-lg"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-[var(--color-paper-deep)] text-sm whitespace-pre-line">
                          {method.value}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Brass line separator (except last) */}
                  {index < contactMethods.length - 1 && (
                    <div
                      className="mt-6 h-px bg-gradient-to-r from-transparent via-[var(--color-gold-600)]/30 to-transparent"
                      aria-hidden="true"
                    />
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: 0.5 }}
            >
              <Button
                as="a"
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I would like to enquire about your products.`}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                size="lg"
                icon={<WhatsAppIcon size={22} />}
              >
                WhatsApp Now
              </Button>
              <Button
                as="a"
                href={`tel:${PHONE_NUMBER}`}
                variant="call"
                size="lg"
                icon={<PhoneIcon size={22} />}
              >
                Call Now
              </Button>
            </motion.div>
          </FadeIn>

          {/* Map/Location area with custom frame */}
          <FadeIn direction="left" delay={200} className="flex flex-col">
            <div className="relative flex-1">
              {/* Custom styled brass frame */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-[var(--color-gold-500)]" aria-hidden="true" />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-[var(--color-gold-500)]" aria-hidden="true" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-[var(--color-gold-500)]" aria-hidden="true" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-[var(--color-gold-500)]" aria-hidden="true" />

              {/* Map placeholder */}
              <div className="bg-[var(--color-ink-light)] rounded-lg overflow-hidden min-h-[300px] h-full relative">
                {/* This would be replaced with an actual Google Maps embed */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <motion.div
                    whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <MapPinIcon
                      size={48}
                      className="text-[var(--color-paper-deep)] mb-4"
                    />
                  </motion.div>
                  <p className="text-[var(--color-paper-deep)] text-sm mb-2">
                    [Google Maps Embed]
                  </p>
                  <p className="text-[var(--color-paper-deep)] text-xs">
                    Main Market, GT Road
                    <br />
                    Panipat, Haryana 132103
                  </p>
                </div>
              </div>
            </div>

            {/* Directions link */}
            <motion.a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(STORE_ADDRESS)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 bg-[var(--color-ink-light)] hover:bg-[var(--color-ink-muted)] text-[var(--color-paper)] px-6 py-3 rounded-lg transition-colors text-sm font-medium"
              whileHover={shouldReduceMotion ? {} : { y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <MapPinIcon size={18} />
              Get Directions on Google Maps
            </motion.a>
          </FadeIn>
        </div>

        {/* Hindi CTA */}
        <FadeIn delay={400} className="mt-12 pt-8 border-t border-[var(--color-ink-light)] text-center">
          <p className="text-lg text-[var(--color-paper-deep)] hindi">
            किसी भी प्रश्न के लिए हमें कॉल करें या WhatsApp करें।
            <br />
            हम आपकी सेवा में हाज़िर हैं।
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
