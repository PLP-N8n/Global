"use client";

import { motion, useReducedMotion } from "motion/react";
import { viewportOnce, fadeIn } from "@/lib/motion";

type DividerVariant = "simple" | "ornate" | "brass";

interface DividerProps {
  variant?: DividerVariant;
  className?: string;
}

/**
 * Divider Component
 *
 * Decorative dividers for visual separation between sections.
 * Multiple variants for different contexts.
 *
 * Design Philosophy:
 * - Simple: Subtle separation without distraction
 * - Ornate: Premium feel with central ornament
 * - Brass: Brand accent with metallic gradient
 */
export function Divider({ variant = "simple", className = "" }: DividerProps) {
  const shouldReduceMotion = useReducedMotion();

  const renderDivider = () => {
    switch (variant) {
      case "ornate":
        return (
          <div
            className={`flex items-center justify-center gap-4 py-4 ${className}`}
            role="separator"
            aria-hidden="true"
          >
            <span className="flex-1 max-w-24 h-px bg-gradient-to-r from-transparent via-[var(--color-gold-300)] to-[var(--color-gold-400)]" />
            <span className="relative">
              <span className="w-3 h-3 rotate-45 bg-[var(--color-gold-400)] block" />
              <span className="absolute inset-0 w-3 h-3 rotate-45 bg-[var(--color-gold-200)] -translate-x-0.5 -translate-y-0.5" />
            </span>
            <span className="flex-1 max-w-24 h-px bg-gradient-to-l from-transparent via-[var(--color-gold-300)] to-[var(--color-gold-400)]" />
          </div>
        );

      case "brass":
        return (
          <div
            className={`py-4 ${className}`}
            role="separator"
            aria-hidden="true"
          >
            <div className="h-0.5 bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent" />
          </div>
        );

      case "simple":
      default:
        return (
          <div
            className={`py-4 ${className}`}
            role="separator"
            aria-hidden="true"
          >
            <div className="h-px bg-[var(--color-paper-deep)]" />
          </div>
        );
    }
  };

  if (shouldReduceMotion) {
    return renderDivider();
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeIn}
    >
      {renderDivider()}
    </motion.div>
  );
}

/**
 * VerticalDivider Component
 *
 * Vertical divider for side-by-side layouts.
 */
interface VerticalDividerProps {
  variant?: "simple" | "brass";
  className?: string;
  height?: string;
}

export function VerticalDivider({
  variant = "simple",
  className = "",
  height = "h-12",
}: VerticalDividerProps) {
  const bgClass =
    variant === "brass"
      ? "bg-gradient-to-b from-transparent via-[var(--color-gold)] to-transparent"
      : "bg-[var(--color-paper-deep)]";

  return (
    <div
      className={`w-px ${height} ${bgClass} ${className}`}
      role="separator"
      aria-hidden="true"
    />
  );
}
