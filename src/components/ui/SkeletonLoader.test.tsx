"use client";

import { render } from "@testing-library/react";
import { SkeletonLoader } from "./SkeletonLoader";

let reducedMotionValue = false;

vi.mock("motion/react", async () => {
  const actual = await vi.importActual<typeof import("motion/react")>("motion/react");
  return {
    ...actual,
    useReducedMotion: () => reducedMotionValue,
  };
});

describe("SkeletonLoader", () => {
  it("renders variants with expected shape classes", () => {
    const { rerender, container } = render(
      <SkeletonLoader variant="rectangular" />
    );

    expect(container.firstChild).toHaveClass("rounded-none");

    rerender(<SkeletonLoader variant="rounded" />);
    expect(container.firstChild).toHaveClass("rounded-lg");

    rerender(<SkeletonLoader variant="circular" />);
    expect(container.firstChild).toHaveClass("rounded-full");
  });

  it("disables shimmer when reduced motion is preferred", () => {
    reducedMotionValue = true;
    const { container } = render(<SkeletonLoader />);

    expect(container.firstChild).not.toHaveClass("skeleton-shimmer");
    reducedMotionValue = false;
  });

  it("applies custom dimensions and className", () => {
    const { container } = render(
      <SkeletonLoader width={120} height="3rem" className="custom-class" />
    );

    const element = container.firstChild as HTMLElement;
    expect(element).toHaveClass("custom-class");
    expect(element.style.width).toBe("120px");
    expect(element.style.height).toBe("3rem");
  });
});
