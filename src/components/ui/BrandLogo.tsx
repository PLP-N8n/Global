"use client";

import { cn } from "@/lib/utils";
import type { BrandLogoProps } from "@/types/image";

const sizeClasses = {
  grid: "w-20 h-10",
  marquee: "w-24 h-12",
};

export function BrandLogo({
  name,
  logo,
  className,
  size = "grid",
}: BrandLogoProps) {
  return (
    <div className={cn("flex items-center justify-center", sizeClasses[size], className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logo}
        alt={`${name} logo`}
        className="max-w-full max-h-full object-contain"
        loading="lazy"
      />
    </div>
  );
}
