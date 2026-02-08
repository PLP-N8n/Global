import "@testing-library/jest-dom/vitest";
import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";
import React from "react";
import { setupMatchMedia, setupIntersectionObserver, setupResizeObserver } from "./utils/dom";

afterEach(() => {
  cleanup();
});

setupMatchMedia(false);
setupIntersectionObserver();
setupResizeObserver();

vi.mock("next/image", () => {
  const NextImage = React.forwardRef<HTMLImageElement, Record<string, unknown>>(
    (props, ref) => {
      const {
        src,
        alt,
        fill,
        priority,
        ...rest
      } = props as {
        src?: string | { src?: string };
        alt?: string;
        fill?: boolean;
        priority?: boolean;
      } & Record<string, unknown>;

      const resolvedSrc =
        typeof src === "string" ? src : src?.src ?? "";

      return React.createElement("img", {
        ref,
        src: resolvedSrc,
        alt: alt ?? "",
        "data-priority": priority ? "true" : undefined,
        "data-fill": fill ? "true" : undefined,
        ...rest,
      });
    }
  );

  NextImage.displayName = "NextImage";

  return { default: NextImage };
});
