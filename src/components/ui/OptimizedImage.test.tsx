"use client";

import { act, render } from "@testing-library/react";
import { OptimizedImage } from "./OptimizedImage";
import { triggerImageError, triggerImageLoad } from "@/test/utils/image";

describe("OptimizedImage", () => {
  it("shows skeleton during loading", () => {
    const { container, getByRole } = render(
      <OptimizedImage src="/images/sample.png" alt="Sample" width={120} height={80} />
    );

    expect(container.querySelector(".skeleton-loader")).not.toBeNull();
    expect(getByRole("img")).toHaveClass("opacity-0");
  });

  it("transitions to image on success", () => {
    const { container, getByRole } = render(
      <OptimizedImage src="/images/sample.png" alt="Sample" width={120} height={80} />
    );

    const image = getByRole("img") as HTMLImageElement;
    act(() => {
      triggerImageLoad(image);
    });

    expect(container.querySelector(".skeleton-loader")).toBeNull();
    expect(image).toHaveClass("opacity-100");
  });

  it("transitions to fallback on error", () => {
    vi.useFakeTimers();

    const { container, getByRole } = render(
      <OptimizedImage
        src="/images/missing.png"
        alt="Missing"
        fallbackSrc="/images/fallback.png"
        width={120}
        height={80}
      />
    );

    const image = getByRole("img") as HTMLImageElement;

    act(() => {
      triggerImageError(image);
    });
    act(() => {
      vi.advanceTimersByTime(2000);
    });
    act(() => {
      triggerImageError(image);
    });
    act(() => {
      triggerImageLoad(image);
    });

    expect(image.getAttribute("src")).toBe("/images/fallback.png");
    expect(container.querySelector(".skeleton-loader")).toBeNull();
    expect(image).toHaveClass("opacity-100");

    vi.useRealTimers();
  });

  it("can disable the skeleton loader", () => {
    const { container } = render(
      <OptimizedImage
        src="/images/sample.png"
        alt="Sample"
        width={120}
        height={80}
        showSkeleton={false}
      />
    );

    expect(container.querySelector(".skeleton-loader")).toBeNull();
  });
});
