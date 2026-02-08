"use client";

import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { Button, OptimizedImage, PhoneIcon, WhatsAppIcon } from "@/components/ui";
import { STORE } from "@/lib/constants";
import { heroTextReveal, staggerContainer } from "@/lib/motion";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [hasVideoError, setHasVideoError] = useState(false);
  const showVideo = !shouldReduceMotion && !hasVideoError;

  return (
    <section id="shop" className="section-fullbleed flex items-center section-ink">
      {/* Video Background */}
      {showVideo ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-phone.png"
          className="video-bg"
          aria-hidden="true"
          onError={() => setHasVideoError(true)}
        >
          <source src="/videos/hero-cinematic.mp4" type="video/mp4" />
        </video>
      ) : (
        <div className="absolute inset-0" aria-hidden="true">
          <OptimizedImage
            src="/images/hero-phone.png"
            alt=""
            fill
            sizes="100vw"
            priority
            className="object-cover"
            showSkeleton={false}
          />
        </div>
      )}

      {/* Overlay */}
      <div className="hero-overlay" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="container py-24 md:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer(0.15, 0.3)}
            className="max-w-2xl text-left"
          >
            <motion.div className="overflow-hidden">
              <motion.p
                variants={heroTextReveal}
                className="kicker kicker-light mb-4"
              >
                Panipat - Since 2009
              </motion.p>
              <motion.h1
                variants={heroTextReveal}
                className="text-white mb-6 leading-none text-display"
              >
                Global <span className="text-brass">Telecom</span>
              </motion.h1>
            </motion.div>

            <motion.p
              variants={heroTextReveal}
              className="text-lg md:text-xl text-white/70 mb-3 font-medium"
            >
              A trusted local store for phones, TVs, appliances, and honest guidance.
            </motion.p>

            <motion.p
              variants={heroTextReveal}
              className="text-base md:text-lg text-white/60 hindi mb-10"
              lang="hi"
            >
              पानीपत का भरोसेमंद इलेक्ट्रॉनिक्स स्टोर
            </motion.p>

            <motion.div
              variants={heroTextReveal}
              className="flex flex-col sm:flex-row gap-4 justify-start"
            >
              <Button
                as="a"
                href={`tel:${STORE.phone}`}
                variant="gold"
                size="lg"
                icon={<PhoneIcon size={20} />}
              >
                Call the Shop
              </Button>
              <Button
                as="a"
                href={`https://wa.me/${STORE.whatsapp}?text=Hi, I want to check product availability.`}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                size="lg"
                icon={<WhatsAppIcon size={20} />}
              >
                WhatsApp
              </Button>
            </motion.div>

            <motion.div
              variants={heroTextReveal}
              className="mt-10 flex flex-wrap gap-3"
            >
              <span className="badge-pill badge-pill-brass">Phones</span>
              <span className="badge-pill badge-pill-brass">Televisions</span>
              <span className="badge-pill badge-pill-brass">Appliances</span>
              <span className="badge-pill badge-pill-brass">Accessories</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5"
        >
          <motion.div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
