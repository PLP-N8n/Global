"use client";

import { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  titleHi?: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  children?: ReactNode;
  dark?: boolean;
}

export function SectionHeader({
  title,
  titleHi,
  subtitle,
  align = "center",
  className = "",
  children,
  dark = false,
}: SectionHeaderProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  return (
    <div
      className={`max-w-2xl ${alignmentClasses[align]} mb-10 md:mb-14 ${className}`}
    >
      <div className={`w-16 h-[2px] ${dark ? "bg-[var(--color-gold-400)]" : "bg-[var(--color-gold-500)]"} mb-6 ${align === "center" ? "mx-auto" : ""}`} />

      <h2 className={`text-3xl md:text-4xl font-semibold text-display tracking-tight ${dark ? "text-white" : "text-[var(--color-ink-900)]"} mb-3`}>
        {title}
      </h2>

      {titleHi && (
        <p className={`${dark ? "text-[rgba(248,242,232,0.7)]" : "text-[var(--color-ink-400)]"} text-lg font-medium hindi mb-3`} lang="hi">
          {titleHi}
        </p>
      )}

      {subtitle && (
        <p className={`${dark ? "text-[rgba(248,242,232,0.7)]" : "text-[var(--color-ink-500)]"} leading-relaxed`}>
          {subtitle}
        </p>
      )}

      {children && (
        <div>{children}</div>
      )}
    </div>
  );
}
