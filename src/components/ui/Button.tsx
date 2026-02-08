"use client";

import { forwardRef, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { motion } from "motion/react";

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
    bg-[var(--color-ink-900)] text-[var(--color-paper-100)]
    hover:bg-[var(--color-ink-700)]
    active:bg-[var(--color-ink-800)]
    shadow-[0_12px_24px_rgba(11,12,16,0.18)]
  `,
  secondary: `
    bg-transparent text-[var(--color-ink-900)]
    border border-[rgba(11,12,16,0.35)]
    hover:bg-[var(--color-ink-900)] hover:text-[var(--color-paper-100)]
  `,
  whatsapp: `
    bg-[var(--color-whatsapp)] text-white
    hover:bg-[var(--color-whatsapp-hover)]
    active:bg-[#0a5f56]
    shadow-[0_10px_20px_rgba(19,119,102,0.25)]
  `,
  call: `
    bg-[var(--color-ink-900)] text-[var(--color-paper-100)]
    hover:bg-[var(--color-ink-700)]
    active:bg-[var(--color-ink-800)]
  `,
  ghost: `
    bg-transparent text-[var(--color-ink-900)]
    hover:bg-[rgba(11,12,16,0.06)]
  `,
  brass: `
    bg-[var(--color-gold-400)] text-[var(--color-ink-900)]
    hover:bg-[var(--color-gold-500)]
    shadow-[0_12px_22px_rgba(197,122,68,0.25)]
    font-semibold
  `,
  gold: `
    bg-[var(--color-gold-500)] text-[var(--color-ink-900)]
    hover:bg-[var(--color-gold-400)]
    shadow-[0_12px_22px_rgba(197,122,68,0.28)]
    font-bold
  `,
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm min-h-[40px]",
  md: "px-6 py-3 text-base min-h-[48px]",
  lg: "px-8 py-4 text-lg min-h-[56px]",
};

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

  const baseStyles = `
    inline-flex items-center justify-center gap-2
    font-semibold leading-none
    rounded-[14px]
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
    const { href, target, rel, ...linkRest } = rest as ButtonAsLink & { target?: string; rel?: string };

    return (
      <motion.a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        className={combinedClassName}
        {...linkRest}
      >
        {content}
      </motion.a>
    );
  }

  const buttonRest = rest as ButtonAsButton;

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={combinedClassName}
      {...buttonRest}
    >
      {content}
    </motion.button>
  );
});

Button.displayName = "Button";

export { Button };
export type { ButtonProps, ButtonVariant, ButtonSize };
