"use client";

import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import type { SkeletonLoaderProps } from "@/types/image";

const sizeValue = (value?: string | number) => {
  if (value === undefined) return undefined;
  return typeof value === "number" ? `${value}px` : value;
};

export function SkeletonLoader({
  width = "100%",
  height = "100%",
  className,
  variant = "rectangular",
  animate = true,
}: SkeletonLoaderProps) {
  const shouldReduceMotion = useReducedMotion();
  const shouldAnimate = animate && !shouldReduceMotion;

  const variantClass =
    variant === "circular"
      ? "rounded-full"
      : variant === "rounded"
        ? "rounded-lg"
        : "rounded-none";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "skeleton-loader",
        variantClass,
        shouldAnimate && "skeleton-shimmer",
        className
      )}
      style={{
        width: sizeValue(width),
        height: sizeValue(height),
      }}
    />
  );
}
