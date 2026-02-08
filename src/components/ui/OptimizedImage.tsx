"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ImageWithFallback } from "./ImageWithFallback";
import { SkeletonLoader } from "./SkeletonLoader";
import type { OptimizedImageProps, LoadingState } from "@/types/image";

const sizeValue = (value?: string | number) => {
  if (value === undefined) return undefined;
  return typeof value === "number" ? `${value}px` : value;
};

function OptimizedImageInner({
  showSkeleton = true,
  skeletonVariant = "rectangular",
  className,
  fallbackSrc,
  onLoad,
  onError,
  src,
  alt,
  width,
  height,
  fill,
  ...rest
}: OptimizedImageProps) {
  const [status, setStatus] = useState<LoadingState>("loading");
  const [, setErrorCount] = useState(0);

  const maxErrorsBeforeError = fallbackSrc ? 3 : 2;

  const handleLoad = () => {
    setStatus("success");
    onLoad?.();
  };

  const handleError = () => {
    setErrorCount((prev) => {
      const next = prev + 1;
      if (next >= maxErrorsBeforeError) {
        setStatus("error");
        onError?.();
      }
      return next;
    });
  };

  const isLoading = status === "loading";

  return (
    <div
      className={cn("relative", fill ? "w-full h-full" : "inline-block")}
      style={!fill ? { width: sizeValue(width), height: sizeValue(height) } : undefined}
    >
      {showSkeleton && isLoading && (
        <SkeletonLoader
          width="100%"
          height="100%"
          variant={skeletonVariant}
          className="absolute inset-0"
        />
      )}

      <ImageWithFallback
        {...rest}
        src={src}
        alt={alt}
        fallbackSrc={fallbackSrc}
        width={width}
        height={height}
        fill={fill}
        className={cn(
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
}

export function OptimizedImage(props: OptimizedImageProps) {
  const key = `${props.src}|${props.fallbackSrc ?? ""}`;
  return <OptimizedImageInner key={key} {...props} />;
}
