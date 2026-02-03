"use client";

import { forwardRef, HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outline" | "warm";
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
    const baseStyles = `
      rounded-lg
      transition-shadow duration-200
    `;

    const hoverStyles = hover
      ? "hover:shadow-md cursor-pointer"
      : "";

    const combinedClassName = `
      ${baseStyles}
      ${variantStyles[variant]}
      ${paddingStyles[padding]}
      ${hoverStyles}
      ${className}
    `.trim().replace(/\s+/g, " ");

    return (
      <div ref={ref} className={combinedClassName} {...props}>
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
