"use client";

import { Transition, Variants } from "motion/react";

// ============================================
// SPRING TRANSITIONS
// ============================================

export const spring: Transition = {
  type: "spring",
  stiffness: 500,
  damping: 35,
};

export const smooth: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 30,
};

export const gentle: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 28,
};

export const quick: Transition = {
  type: "spring",
  stiffness: 600,
  damping: 35,
};

export const slow: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 25,
};

// ============================================
// ENTRANCE VARIANTS
// ============================================

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: gentle,
  },
};

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const scaleUp: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: smooth,
  },
};

export const slideFromLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: gentle,
  },
};

export const slideFromRight: Variants = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: gentle,
  },
};

// ============================================
// HERO TEXT REVEAL
// ============================================

export const heroTextReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
    skewY: 3,
  },
  visible: {
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 30,
    },
  },
};

// ============================================
// STAGGER CONTAINER
// ============================================

export const staggerContainer = (
  staggerDelay: number = 0.06,
  delayChildren: number = 0
): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: delayChildren,
    },
  },
});

export const staggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: gentle,
  },
};

// ============================================
// HOVER EFFECTS
// ============================================

export const hoverScale = {
  scale: 1.02,
  transition: quick,
};

export const hoverLift = {
  y: -4,
  transition: quick,
};

export const tapScale = {
  scale: 0.98,
};

// ============================================
// SPECIAL ANIMATIONS
// ============================================

export const floatAnimation: Variants = {
  initial: { y: 0 },
  animate: {
    y: [-4, 4, -4],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const pulseAnimation: Variants = {
  initial: { scale: 1, opacity: 1 },
  animate: {
    scale: [1, 1.05, 1],
    opacity: [1, 0.9, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// ============================================
// VIEW TRANSITIONS (for whileInView)
// ============================================

export const viewportOnce = {
  once: true,
  margin: "-50px 0px",
  amount: 0.1 as const,
};
