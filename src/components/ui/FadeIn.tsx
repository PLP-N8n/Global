"use client";

import { ReactNode } from "react";
import { motion, Variants, Easing } from "motion/react";
import { usePrefersReducedMotion } from "@/lib/hooks";
import { gentle, viewportOnce } from "@/lib/motion";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 40,
}: FadeInProps) {
  const shouldReduceMotion = usePrefersReducedMotion();
  const reduceMotion = shouldReduceMotion;

  const getVariants = (): Variants => {
    const delayInSeconds = delay / 1000;
    const easing: Easing = "easeOut";

    if (reduceMotion) {
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
