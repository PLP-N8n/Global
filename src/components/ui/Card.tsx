"use client";

import { forwardRef, HTMLAttributes } from "react";
import { motion, useReducedMotion } from "motion/react";

interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onDrag'> {
  variant?: "default" | "elevated" | "outline" | "warm" | "featured";
  padding?: "none" | "sm" | "md" | "lg";
  hover?: boolean;
}

const variantStyles: Record<NonNullable<CardProps["variant"]>, string> = {
  default: `
    bg-white
    border border-[var(--color-paper-deep)]
    shadow-sm
  `,
  elevated: `
    bg-white
    shadow-md
    border-0
  `,
  outline: `
    bg-transparent
    border-2 border-[var(--color-paper-deep)]
  `,
  warm: `
    bg-[var(--color-paper-warm)]
    border border-[var(--color-paper-deep)]
  `,
  featured: `
    bg-white
    border-2 border-[var(--color-gold-300)]
    shadow-md
    relative
    overflow-hidden
  `,
};

const paddingStyles: Record<NonNullable<CardProps["padding"]>, string> = {
  none: "p-0",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

/**
 * Card Component
 *
 * A container that feels familiar but not generic.
 * Cards should have clear boundaries and subtle depth.
 *
 * This is a trust interface, not a design experiment.
 *
 * Motion:
 * - Subtle lift on hover (y: -4)
 * - Enhanced shadow transitions
 * - Featured variant has brass accent line
 */
const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = "default",
      padding = "md",
      hover = false,
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    const shouldReduceMotion = useReducedMotion();

    const baseStyles = `
      rounded-lg
      transition-shadow duration-200
    `;

    // Add cursor-pointer for hover cards when reduced motion
    const hoverStyles = hover && shouldReduceMotion ? "hover:shadow-md cursor-pointer" : "";

    const combinedClassName = `
      ${baseStyles}
      ${variantStyles[variant]}
      ${paddingStyles[padding]}
      ${hoverStyles}
      ${className}
    `.trim().replace(/\s+/g, " ");

    // Featured variant brass accent line
    const featuredAccent = variant === "featured" && (
      <div
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-gold-400)] via-[var(--color-gold-600)] to-[var(--color-gold-400)]"
        aria-hidden="true"
      />
    );

    // Always render motion.div for consistent SSR/client output
    if (hover) {
      return (
        <motion.div
          ref={ref}
          className={combinedClassName}
          whileHover={shouldReduceMotion ? undefined : {
            y: -4,
            boxShadow: "0 10px 20px -5px rgba(26, 26, 26, 0.1), 0 4px 8px -4px rgba(26, 26, 26, 0.06)",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          {featuredAccent}
          {children}
        </motion.div>
      );
    }

    return (
      <div ref={ref} className={combinedClassName} {...props}>
        {featuredAccent}
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

// Card sub-components for composition
interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className = "", children, ...props }, ref) => (
    <div
      ref={ref}
      className={`mb-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
);

CardHeader.displayName = "CardHeader";

interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: "h2" | "h3" | "h4" | "h5" | "h6";
}

const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ as: Component = "h3", className = "", children, ...props }, ref) => (
    <Component
      ref={ref}
      className={`text-xl font-semibold text-[var(--color-ink)] leading-tight ${className}`}
      {...props}
    >
      {children}
    </Component>
  )
);

CardTitle.displayName = "CardTitle";

interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className = "", children, ...props }, ref) => (
    <p
      ref={ref}
      className={`text-[var(--color-ink-muted)] leading-relaxed ${className}`}
      {...props}
    >
      {children}
    </p>
  )
);

CardDescription.displayName = "CardDescription";

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className = "", children, ...props }, ref) => (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  )
);

CardContent.displayName = "CardContent";

interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {}

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className = "", children, ...props }, ref) => (
    <div
      ref={ref}
      className={`mt-4 pt-4 border-t border-[var(--color-paper-deep)] ${className}`}
      {...props}
    >
      {children}
    </div>
  )
);

CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};
export type { CardProps };
