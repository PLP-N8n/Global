"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion, Variants, Easing } from "motion/react";
import { gentle, viewportOnce } from "@/lib/motion";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
}

/**
 * FadeIn Component
 *
 * A wrapper that adds a gentle fade-in animation when the element
 * enters the viewport using Framer Motion.
 *
 * Motion Philosophy:
 * - Motion should reinforce clarity and sequencing
 * - Gentle fades and staggered reveals
 * - Respects reduced-motion preferences via useReducedMotion()
 */
export function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 24,
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  // Get variants based on direction
  const getVariants = (): Variants => {
    const delayInSeconds = delay / 1000;
    const easing: Easing = "easeOut";

    // If reduced motion, use instant transitions
    if (shouldReduceMotion) {
      return {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
      };
    }

    switch (direction) {
      case "up":
        return {
          hidden: { opacity: 0, y: distance },
          visible: {
            opacity: 1,
            y: 0,
            transition: { ...gentle, delay: delayInSeconds }
          },
        };
      case "down":
        return {
          hidden: { opacity: 0, y: -distance },
          visible: {
            opacity: 1,
            y: 0,
            transition: { ...gentle, delay: delayInSeconds }
          },
        };
      case "left":
        return {
          hidden: { opacity: 0, x: distance },
          visible: {
            opacity: 1,
            x: 0,
            transition: { ...gentle, delay: delayInSeconds }
          },
        };
      case "right":
        return {
          hidden: { opacity: 0, x: -distance },
          visible: {
            opacity: 1,
            x: 0,
            transition: { ...gentle, delay: delayInSeconds }
          },
        };
      case "none":
      default:
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              duration: 0.5,
              ease: easing,
              delay: delayInSeconds
            }
          },
        };
    }
  };

  // Always render motion.div for consistent SSR/client output
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={getVariants()}
    >
      {children}
    </motion.div>
  );
}
