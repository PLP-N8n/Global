"use client";

import { ReactNode } from "react";
import { useInView } from "@/lib/hooks";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

/**
 * FadeIn Component
 *
 * A wrapper that adds a gentle fade-in animation when the element
 * enters the viewport.
 *
 * Motion Philosophy:
 * - Motion should reinforce clarity and sequencing
 * - Gentle fades and staggered reveals
 * - Respects reduced-motion preferences
 */
export function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: FadeInProps) {
  const [ref, isInView] = useInView();

  const getTransform = () => {
    if (direction === "none") return "translate(0, 0)";
    const distance = "20px";
    switch (direction) {
      case "up":
        return `translateY(${distance})`;
      case "down":
        return `translateY(-${distance})`;
      case "left":
        return `translateX(${distance})`;
      case "right":
        return `translateX(-${distance})`;
      default:
        return "translate(0, 0)";
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translate(0, 0)" : getTransform(),
        transition: `opacity 500ms ease ${delay}ms, transform 500ms ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
