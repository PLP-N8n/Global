"use client";

import { ReactNode } from "react";

type IconContainerSize = "sm" | "md" | "lg" | "xl";
type IconContainerVariant = "default" | "gradient" | "gold" | "outline";

interface IconContainerProps {
  children: ReactNode;
  size?: IconContainerSize;
  variant?: IconContainerVariant;
  className?: string;
}

const sizeClasses: Record<IconContainerSize, string> = {
  sm: "w-10 h-10",
  md: "w-14 h-14",
  lg: "w-16 h-16",
  xl: "w-20 h-20",
};

const variantClasses: Record<IconContainerVariant, string> = {
  default:
    "bg-neutral-100 text-black border-0",
  gradient:
    "bg-neutral-100 text-black border-0",
  gold:
    "bg-amber-50 text-amber-700 border-0",
  outline:
    "bg-transparent border-2 border-neutral-200 text-black",
};

export function IconContainer({
  children,
  size = "md",
  variant = "default",
  className = "",
}: IconContainerProps) {
  const baseClasses = `
    rounded-full flex items-center justify-center
    transition-colors duration-300
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${className}
  `.trim();

  return <div className={baseClasses}>{children}</div>;
}

interface IconContainerAnimatedProps extends IconContainerProps {
  pulseOnView?: boolean;
}

export function IconContainerAnimated({
  children,
  ...props
}: IconContainerAnimatedProps) {
  return <IconContainer {...props}>{children}</IconContainer>;
}
