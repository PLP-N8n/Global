/**
 * Type definitions for image optimization components
 */

import { ImageProps as NextImageProps } from "next/image";

/**
 * Loading state for images
 */
export type LoadingState = "idle" | "loading" | "success" | "error";

/**
 * Image state management
 */
export interface ImageState {
  status: LoadingState;
  currentSrc: string;
  retryCount: number;
  error?: Error;
}

/**
 * Props for ImageWithFallback component
 */
export interface ImageWithFallbackProps
  extends Omit<NextImageProps, "onError" | "onLoad"> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  className?: string;
  onError?: () => void;
  onLoad?: () => void;
}

/**
 * Skeleton loader variants
 */
export type SkeletonVariant = "rectangular" | "circular" | "rounded";

/**
 * Props for SkeletonLoader component
 */
export interface SkeletonLoaderProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  variant?: SkeletonVariant;
  animate?: boolean;
}

/**
 * Skeleton state management
 */
export interface SkeletonState {
  isAnimating: boolean;
  shouldReduceMotion: boolean;
}

/**
 * Props for OptimizedImage component
 */
export interface OptimizedImageProps extends ImageWithFallbackProps {
  showSkeleton?: boolean;
  skeletonVariant?: SkeletonVariant;
}

/**
 * Props for BrandLogo component
 */
export interface BrandLogoProps {
  name: string;
  logo: string;
  className?: string;
  size?: "grid" | "marquee";
}

/**
 * Image asset metadata (for documentation purposes)
 */
export interface ImageAsset {
  // File information
  filename: string; // e.g., "apple.png"
  path: string; // e.g., "/brands/apple.png"
  originalFilename: string; // e.g., "Apple-no background.png"

  // Dimensions
  width: number; // in pixels
  height: number; // in pixels
  aspectRatio: number; // width / height

  // Optimization
  originalSize: number; // in bytes
  optimizedSize: number; // in bytes
  compressionRatio: number; // percentage saved
  format: "png" | "jpg" | "webp";

  // Accessibility
  altText: string; // descriptive alt text
  isDecorative: boolean; // if true, use alt=""

  // Usage
  usedIn: string[]; // component names where used
  priority: boolean; // above-the-fold?
  lazyLoad: boolean; // should lazy load?
}

/**
 * Image loading context for advanced state management
 */
export interface ImageLoadingContext {
  state: LoadingState;
  progress?: number; // 0-100 for progressive loading
  error?: string;
}
