"use client";

import { ReactNode } from "react";
import { motion, Variants } from "motion/react";
import { usePrefersReducedMotion } from "@/lib/hooks";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

/**
 * StaggerContainer Component
 *
 * A wrapper that creates staggered entrance animations for its children.
 * Use with StaggerItem for each child that should animate.
 *
 * Motion Philosophy:
 * - Sequential reveals create narrative flow
 * - Staggered children feel more natural than simultaneous
 * - Respects reduced-motion preferences
 */
export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
  delayChildren = 0,
}: StaggerContainerProps) {
  const shouldReduceMotion = usePrefersReducedMotion();
  const reduceMotion = shouldReduceMotion;

  // Always use motion.div for consistent SSR/client output
  // Just use different variants based on motion preference
  const variants: Variants = reduceMotion
    ? { hidden: {}, visible: {} }
    : staggerContainer(staggerDelay, delayChildren);

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerItem Component
 *
 * Child component to use within StaggerContainer.
 * Each StaggerItem will animate in sequence based on the container's stagger delay.
 */
export function StaggerItem({ children, className = "" }: StaggerItemProps) {
  const shouldReduceMotion = usePrefersReducedMotion();
  const reduceMotion = shouldReduceMotion;

  // Always use motion.div for consistent SSR/client output
  const variants: Variants = reduceMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : staggerItem;

  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}

/**
 * StaggerGrid Component
 *
 * Convenience component for staggered grid layouts.
 * Automatically applies grid styling with stagger animation.
 */
interface StaggerGridProps extends StaggerContainerProps {
  columns?: {
    sm?: number;
    md?: number;
    lg?: number;
  };
  gap?: number;
}

export function StaggerGrid({
  children,
  className = "",
  staggerDelay = 0.08,
  delayChildren = 0,
  columns = { sm: 1, md: 2, lg: 4 },
  gap = 6,
}: StaggerGridProps) {
  const shouldReduceMotion = usePrefersReducedMotion();
  const reduceMotion = shouldReduceMotion;

  const gridClassName = `grid gap-${gap} grid-cols-1 ${columns.sm ? `sm:grid-cols-${columns.sm}` : ""} ${columns.md ? `md:grid-cols-${columns.md}` : ""} ${columns.lg ? `lg:grid-cols-${columns.lg}` : ""} ${className}`;

  const variants: Variants = reduceMotion
    ? { hidden: {}, visible: {} }
    : staggerContainer(staggerDelay, delayChildren);

  return (
    <motion.div
      className={gridClassName}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
