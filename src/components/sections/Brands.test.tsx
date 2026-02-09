"use client";

import { render } from "@testing-library/react";
import { Brands } from "./Brands";

let reducedMotionValue = false;

vi.mock("motion/react", async () => {
  const actual = await vi.importActual<typeof import("motion/react")>("motion/react");
  return {
    ...actual,
    useReducedMotion: () => reducedMotionValue,
  };
});

describe("Brands", () => {
  it("renders 13 brand logos in reduced motion grid", () => {
    reducedMotionValue = true;

    const { container, getAllByRole } = render(<Brands />);

    expect(getAllByRole("img")).toHaveLength(15);
    expect(container.querySelector(".grid-cols-3")).not.toBeNull();
  });

  it("uses dual-row marquee animation when reduced motion is not preferred", () => {
    reducedMotionValue = false;

    const { container } = render(<Brands />);

    expect(container.querySelector(".grid-cols-3")).toBeNull();
    expect(container.querySelector('[aria-hidden="true"]')).not.toBeNull();
  });

  it("renders logos as img elements with correct src", () => {
    reducedMotionValue = true;
    const { getAllByRole } = render(<Brands />);

    const logos = getAllByRole("img") as HTMLImageElement[];
    const srcs = logos.map((img) => img.getAttribute("src"));
    expect(srcs).toContain("/brands/samsung.png");
    expect(srcs).toContain("/brands/apple.png");
    expect(srcs).toContain("/brands/motorola.png");
  });
});
