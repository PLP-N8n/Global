"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type IconContainerSize = "sm" | "md" | "lg" | "xl";
type IconContainerVariant = "default" | "gradient" | "brass" | "outline";

interface IconContainerProps {
  children: ReactNode;
  size?: IconContainerSize;
  variant?: IconContainerVariant;
  className?: string;
  animate?: boolean;
}

const sizeClasses: Record<IconContainerSize, string> = {
  sm: "w-10 h-10",
  md: "w-14 h-14",
  lg: "w-16 h-16",
  xl: "w-20 h-20",
};

const variantClasses: Record<IconContainerVariant, string> = {
  default: "bg-[var(--color-paper-warm)] text-[var(--color-gold)]",
  gradient:
    "bg-gradient-to-br from-[var(--color-gold-100)] to-[var(--color-gold-200)] text-[var(--color-gold-700)]",
  brass:
    "bg-gradient-to-br from-[var(--color-gold-500)] to-[var(--color-gold-600)] text-white",
  outline:
    "bg-transparent border-2 border-[var(--color-gold-300)] text-[var(--color-gold)]",
};

/**
 * IconContainer Component
 *
 * Styled icon wrapper with gradient backgrounds.
 * Creates consistent icon presentation across the site.
 *
 * Design Philosophy:
 * - Icons need proper visual weight and framing
 * - Gradient backgrounds add premium feel
 * - Consistent sizing ensures visual rhythm
 */
export function IconContainer({
  children,
  size = "md",
  variant = "default",
  className = "",
  animate = false,
}: IconContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  const baseClasses = `
    rounded-lg flex items-center justify-center
    transition-colors duration-300
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `.trim();

  // Always render motion.div for consistency, but conditionally apply hover
  if (animate) {
    return (
      <motion.div
        className={baseClasses}
        whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={baseClasses}>{children}</div>;
}

/**
 * IconContainerAnimated Component
 *
 * Icon container with pulse animation on scroll.
 * Use for service/feature icons that should draw attention.
 */
interface IconContainerAnimatedProps extends IconContainerProps {
  pulseOnView?: boolean;
}

export function IconContainerAnimated({
  children,
  pulseOnView = true,
  ...props
}: IconContainerAnimatedProps) {
  const shouldReduceMotion = useReducedMotion();

  // Always render motion wrapper for consistent SSR/client output
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileInView={
        shouldReduceMotion || !pulseOnView
          ? undefined
          : {
              scale: [1, 1.05, 1],
              transition: {
                duration: 0.6,
                times: [0, 0.5, 1],
                ease: "easeInOut",
              },
            }
      }
      viewport={{ once: true, margin: "-50px" }}
    >
      <IconContainer {...props}>{children}</IconContainer>
    </motion.div>
  );
}
