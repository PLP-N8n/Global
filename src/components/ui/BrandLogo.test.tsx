"use client";

import { render } from "@testing-library/react";
import { BrandLogo } from "./BrandLogo";

describe("BrandLogo", () => {
  it("renders logo with correct alt text", () => {
    const { getByRole } = render(
      <BrandLogo name="Apple" logo="/brands/apple.png" />
    );

    const image = getByRole("img") as HTMLImageElement;
    expect(image.getAttribute("alt")).toBe("Apple logo");
  });

  it("uses the correct logo src", () => {
    const { getByRole } = render(
      <BrandLogo name="Samsung" logo="/brands/samsung.png" />
    );

    const image = getByRole("img") as HTMLImageElement;
    expect(image.getAttribute("src")).toBe("/brands/samsung.png");
  });

  it("applies sizing for grid and marquee", () => {
    const { container, rerender } = render(
      <BrandLogo name="LG" logo="/brands/lg.png" size="grid" />
    );

    expect(container.firstChild).toHaveClass("w-20");
    expect(container.firstChild).toHaveClass("h-10");

    rerender(<BrandLogo name="LG" logo="/brands/lg.png" size="marquee" />);

    expect(container.firstChild).toHaveClass("w-24");
    expect(container.firstChild).toHaveClass("h-12");
  });

  it("renders as an img element with object-contain", () => {
    const { getByRole } = render(
      <BrandLogo name="Sony" logo="/brands/sony.png" />
    );

    const image = getByRole("img");
    expect(image.tagName).toBe("IMG");
    expect(image).toHaveClass("object-contain");
  });
});
