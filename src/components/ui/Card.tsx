"use client";

import { forwardRef, HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "elevated" | "outline";
  padding?: "none" | "sm" | "md" | "lg";
  hover?: boolean;
  goldBorder?: boolean;
}

const variantStyles: Record<NonNullable<CardProps["variant"]>, string> = {
  default: `
    bg-white
    border border-slate-200
  `,
  glass: `
    bg-white/70
    backdrop-blur-xl
    border border-white/40
    shadow-[0_8px_32px_rgba(0,0,0,0.08)]
  `,
  elevated: `
    bg-white
    shadow-lg
    border-0
  `,
  outline: `
    bg-transparent
    border-2 border-slate-200
  `,
};

const paddingStyles: Record<NonNullable<CardProps["padding"]>, string> = {
  none: "p-0",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = "default",
      padding = "md",
      hover = false,
      goldBorder = false,
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = `
      rounded-2xl
      transition-all duration-300
    `;

    const hoverStyles = hover
      ? "hover:shadow-xl hover:-translate-y-1 cursor-pointer"
      : "";

    const goldBorderStyles = goldBorder
      ? "border-[var(--color-gold)]/20 hover:border-[var(--color-gold)]/50"
      : "";

    const combinedClassName = `
      ${baseStyles}
      ${variantStyles[variant]}
      ${paddingStyles[padding]}
      ${hoverStyles}
      ${goldBorderStyles}
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

// Card sub-components
interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className = "", children, ...props }, ref) => (
    <div ref={ref} className={`mb-4 ${className}`} {...props}>
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
      className={`text-xl font-serif font-semibold text-[var(--color-primary)] leading-tight ${className}`}
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
      className={`text-[var(--color-text-muted)] leading-relaxed ${className}`}
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
      className={`mt-4 pt-4 border-t border-slate-200 ${className}`}
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
