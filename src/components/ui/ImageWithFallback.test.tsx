"use client";

import { render } from "@testing-library/react";
import { ImageWithFallback } from "./ImageWithFallback";
import { triggerImageError, triggerImageLoad } from "@/test/utils/image";
import { act } from "@testing-library/react";

describe("ImageWithFallback", () => {
  it("marks image as success on load", () => {
    const { getByRole } = render(
      <ImageWithFallback src="/images/hero.png" alt="Hero" width={100} height={80} />
    );

    const image = getByRole("img") as HTMLImageElement;
    act(() => {
      triggerImageLoad(image);
    });

    expect(image.getAttribute("data-image-status")).toBe("success");
  });

  it("uses fallback when the image fails after retry", () => {
    vi.useFakeTimers();

    const { getByRole } = render(
      <ImageWithFallback
        src="/images/missing.png"
        alt="Missing"
        fallbackSrc="/images/fallback.png"
        width={100}
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

    expect(image.getAttribute("src")).toBe("/images/fallback.png");

    vi.useRealTimers();
  });

  it("marks image as error when no fallback is available", () => {
    vi.useFakeTimers();

    const { getByRole } = render(
      <ImageWithFallback src="/images/missing.png" alt="Missing" width={100} height={80} />
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

    expect(image.getAttribute("data-image-status")).toBe("error");

    vi.useRealTimers();
  });

  it("passes priority prop for above-the-fold images", () => {
    const { getByRole } = render(
      <ImageWithFallback
        src="/images/hero.png"
        alt="Hero"
        width={100}
        height={80}
        priority
      />
    );

    const image = getByRole("img");
    expect(image.getAttribute("data-priority")).toBe("true");
  });
});
