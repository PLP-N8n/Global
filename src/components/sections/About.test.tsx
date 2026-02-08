"use client";

import { render } from "@testing-library/react";
import { About } from "./About";

describe("About", () => {
  it("uses OptimizedImage with descriptive alt text", () => {
    const { getByRole } = render(<About />);
    const image = getByRole("img") as HTMLImageElement;

    expect(image.getAttribute("alt")).toBe("Sunny, Founder & Owner of Global Telecom, Panipat");
  });

  it("shows a skeleton loader during image loading", () => {
    const { container } = render(<About />);
    expect(container.querySelector(".skeleton-loader")).not.toBeNull();
  });

  it("does not use priority loading for the image", () => {
    const { getByRole } = render(<About />);
    const image = getByRole("img");

    expect(image.getAttribute("data-priority")).toBeNull();
  });
});
