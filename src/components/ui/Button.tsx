"use client";

import { forwardRef, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "whatsapp" | "call" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
    href?: never;
  };

type ButtonAsLink = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-[var(--color-ink)] text-[var(--color-paper)]
    hover:bg-[var(--color-ink-light)]
    active:bg-[#3d3d3d]
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

  const baseStyles = `
    inline-flex items-center justify-center gap-2
    font-medium leading-none
    rounded-md
    transition-all duration-200 ease-out
    cursor-pointer
    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brass)]
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
    const { as, href, ...linkRest } = rest as ButtonAsLink;
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={combinedClassName}
        {...linkRest}
      >
        {content}
      </a>
    );
  }

  const { as, ...buttonRest } = rest as ButtonAsButton;
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={combinedClassName}
      {...buttonRest}
    >
      {content}
    </button>
  );
});

Button.displayName = "Button";

export { Button };
export type { ButtonProps, ButtonVariant, ButtonSize };
