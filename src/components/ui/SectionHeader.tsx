"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion, Variants } from "motion/react";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

interface SectionHeaderProps {
  title: string;
  titleHi?: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  showDecorative?: boolean;
  children?: ReactNode;
}

/**
 * SectionHeader Component
 *
 * Consistent section headers with Hindi support and decorative lines.
 * Creates visual hierarchy and cultural connection.
 *
 * Design Philosophy:
 * - Bilingual headers show intentional inclusivity
 * - Decorative lines add subtle premium feel
 * - Staggered animation creates narrative flow
 */
export function SectionHeader({
  title,
  titleHi,
  subtitle,
  align = "center",
  className = "",
  showDecorative = false,
  children,
}: SectionHeaderProps) {
  const shouldReduceMotion = useReducedMotion();

  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  // Always use motion components for consistent SSR/client output
  const containerVariants: Variants = shouldReduceMotion
    ? { hidden: {}, visible: {} }
    : staggerContainer(0.12, 0);

  const itemVariants: Variants = shouldReduceMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : staggerItem;

  return (
    <motion.div
      className={`max-w-2xl ${alignmentClasses[align]} mb-12 md:mb-16 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={containerVariants}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-serif font-bold text-[var(--color-ink)] mb-4"
        variants={itemVariants}
      >
        {title}
      </motion.h2>

      {titleHi && (
        <motion.p
          className="text-xl text-[var(--color-gold)] font-medium hindi mb-3"
          variants={itemVariants}
        >
          {titleHi}
        </motion.p>
      )}

      {showDecorative && (
        <motion.div
          className="flex items-center justify-center gap-3 my-4"
          variants={itemVariants}
          aria-hidden="true"
        >
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--color-gold-400)]" />
          <span className="w-2 h-2 rounded-full bg-[var(--color-gold)]" />
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-[var(--color-gold-400)]" />
        </motion.div>
      )}

      {subtitle && (
        <motion.p
          className="text-[var(--color-ink-light)] leading-relaxed"
          variants={itemVariants}
        >
          {subtitle}
        </motion.p>
      )}

      {children && (
        <motion.div variants={itemVariants}>
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}
