"use client";

import { forwardRef, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { motion, useReducedMotion } from "motion/react";

type ButtonVariant = "primary" | "secondary" | "whatsapp" | "call" | "ghost" | "brass" | "gold";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

// Omit HTML events that conflict with Motion's event types
type ConflictingEvents =
  | 'onDrag' | 'onDragEnd' | 'onDragEnter' | 'onDragExit' | 'onDragLeave' | 'onDragOver' | 'onDragStart' | 'onDrop'
  | 'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration';

type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, ConflictingEvents> & {
    as?: "button";
    href?: never;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, ConflictingEvents> & {
    as: "a";
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-[var(--color-ink-900)] text-[var(--color-paper)]
    hover:bg-[var(--color-ink-700)]
    active:bg-[var(--color-ink-800)]
  `,
  secondary: `
    bg-transparent text-[var(--color-ink)]
    border-2 border-[var(--color-ink)]
    hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)]
  `,
  whatsapp: `
    bg-[var(--color-whatsapp)] text-white
    hover:bg-[var(--color-whatsapp-hover)]
    active:bg-[#064e45]
  `,
  call: `
    bg-[var(--color-call)] text-white
    hover:bg-[var(--color-call-hover)]
    active:bg-[#0a3a7a]
  `,
  ghost: `
    bg-transparent text-[var(--color-ink)]
    hover:bg-[var(--color-paper-warm)]
  `,
  brass: `
    bg-gradient-to-r from-[var(--color-gold-500)] to-[var(--color-gold-600)] text-[var(--color-ink-900)]
    hover:from-[var(--color-gold-600)] hover:to-[var(--color-gold-700)]
    shadow-[0_2px_4px_rgba(201,162,39,0.25)]
    hover:shadow-[0_4px_8px_rgba(201,162,39,0.3)]
    font-semibold
  `,
  gold: `
    bg-[var(--color-ink-900)] text-[var(--color-gold)]
    border-2 border-[var(--color-gold-500)]
    hover:bg-[var(--color-gold)] hover:text-[var(--color-ink-900)]
    shadow-[0_2px_4px_rgba(201,162,39,0.2)]
    hover:shadow-[0_4px_8px_rgba(201,162,39,0.3)]
  `,
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm min-h-[40px]",
  md: "px-6 py-3 text-base min-h-[48px]",
  lg: "px-8 py-4 text-lg min-h-[56px]",
};

/**
 * Button Component
 *
 * A pressable, trust-building button with clear visual weight.
 * Buttons should look pressable, not ornamental.
 *
 * Variants:
 * - primary: Main actions
 * - secondary: Secondary actions with outline style
 * - whatsapp: WhatsApp CTA (green)
 * - call: Phone call CTA (blue)
 * - ghost: Subtle/tertiary actions
 * - brass: Premium accent CTAs with metallic gradient
 *
 * Motion:
 * - Subtle lift on hover (y: -2)
 * - Press feedback on tap (scale: 0.98)
 * - Enhanced shadow on hover
 */
const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>((props, ref) => {
  const {
    variant = "primary",
    size = "md",
    fullWidth = false,
    icon,
    iconPosition = "left",
    className = "",
    children,
    ...rest
  } = props;

  const shouldReduceMotion = useReducedMotion();

  const baseStyles = `
    inline-flex items-center justify-center gap-2
    font-medium leading-none
    rounded-md
    transition-all duration-200 ease-out
    cursor-pointer
    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-gold)]
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const combinedClassName = `
    ${baseStyles}
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${fullWidth ? "w-full" : ""}
    ${className}
  `.trim().replace(/\s+/g, " ");

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="flex-shrink-0">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="flex-shrink-0">{icon}</span>}
    </>
  );

  if (props.as === "a") {
    const { as, href, target, rel, ...linkRest } = rest as ButtonAsLink & { target?: string; rel?: string };

    // Always render motion.a for consistent SSR/client output
    return (
      <motion.a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        className={combinedClassName}
        whileHover={shouldReduceMotion ? undefined : { y: -2 }}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {content}
      </motion.a>
    );
  }

  const { as, ...buttonRest } = rest as ButtonAsButton;

  // Always render motion.button for consistent SSR/client output
  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={combinedClassName}
      whileHover={shouldReduceMotion ? undefined : { y: -2 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      {...buttonRest}
    >
      {content}
    </motion.button>
  );
});

Button.displayName = "Button";

export { Button };
export type { ButtonProps, ButtonVariant, ButtonSize };
