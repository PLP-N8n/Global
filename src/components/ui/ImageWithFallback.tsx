"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { ImageState, ImageWithFallbackProps, LoadingState } from "@/types/image";

const RETRY_DELAY_MS = 2000;
const MAX_RETRY_COUNT = 1;

const getInitialState = (src: string): ImageState => ({
  status: "loading",
  currentSrc: src,
  retryCount: 0,
});

function ImageWithFallbackInner({
  src,
  alt,
  fallbackSrc,
  onError,
  onLoad,
  ...rest
}: ImageWithFallbackProps) {
  const [state, setState] = useState<ImageState>(() => getInitialState(src));
  const retryTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    return () => {
      if (retryTimer.current) {
        window.clearTimeout(retryTimer.current);
      }
    };
  }, []);

  const updateStatus = (status: LoadingState) => {
    setState((prev) => ({ ...prev, status }));
  };

  const handleLoad = () => {
    updateStatus("success");
    onLoad?.();
  };

  const retryOriginal = () => {
    updateStatus("loading");
    retryTimer.current = window.setTimeout(() => {
      setState((prev) => ({
        ...prev,
        currentSrc: src,
        retryCount: prev.retryCount + 1,
      }));
    }, RETRY_DELAY_MS);
  };

  const handleError = () => {
    console.error(`[ImageWithFallback] Failed to load image: ${state.currentSrc}`);
    onError?.();

    if (state.currentSrc === src && state.retryCount < MAX_RETRY_COUNT) {
      retryOriginal();
      return;
    }

    if (fallbackSrc && state.currentSrc !== fallbackSrc) {
      setState((prev) => ({
        ...prev,
        status: "loading",
        currentSrc: fallbackSrc,
      }));
      return;
    }

    updateStatus("error");
  };

  return (
    <Image
      {...rest}
      src={state.currentSrc}
      alt={alt}
      onLoad={handleLoad}
      onError={handleError}
      data-image-status={state.status}
    />
  );
}

export function ImageWithFallback(props: ImageWithFallbackProps) {
  const key = `${props.src}|${props.fallbackSrc ?? ""}`;
  return <ImageWithFallbackInner key={key} {...props} />;
}
