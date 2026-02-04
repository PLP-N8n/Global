"use client";

import { forwardRef, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "gold" | "whatsapp" | "call" | "ghost" | "glass";
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
    bg-[var(--color-primary)] text-white
    hover:bg-[var(--color-primary-light)]
    hover:transform hover:-translate-y-0.5
    hover:shadow-lg
  `,
  secondary: `
    bg-transparent text-[var(--color-primary)]
    border-2 border-[var(--color-primary)]
    hover:bg-[var(--color-primary)] hover:text-white
  `,
  gold: `
    bg-[var(--color-gold)] text-[var(--color-primary)]
    hover:bg-[var(--color-gold-light)]
    hover:transform hover:-translate-y-0.5
    hover:shadow-[0_8px_24px_rgba(212,175,55,0.3)]
  `,
  whatsapp: `
    bg-[#25D366] text-white
    hover:bg-[#1EBE5D]
    hover:transform hover:-translate-y-0.5
    hover:shadow-[0_8px_24px_rgba(37,211,102,0.3)]
  `,
  call: `
    bg-[var(--color-call)] text-white
    hover:bg-[var(--color-call-hover)]
  `,
  ghost: `
    bg-transparent text-[var(--color-primary)]
    hover:bg-slate-100
  `,
  glass: `
    bg-white/70 backdrop-blur-xl text-[var(--color-primary)]
    border border-white/40
    hover:bg-white/90
  `,
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-sm min-h-[40px]",
  md: "px-6 py-3 text-base min-h-[48px]",
  lg: "px-8 py-4 text-base min-h-[56px]",
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
    font-medium leading-none
    rounded-full
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
