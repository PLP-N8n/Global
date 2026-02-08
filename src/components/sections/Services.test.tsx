"use client";

import { render } from "@testing-library/react";
import { Services } from "./Services";

describe("Services", () => {
  it("renders all shop images with descriptive alt text", () => {
    const { getAllByRole } = render(<Services />);
    const images = getAllByRole("img") as HTMLImageElement[];

    const altTexts = images.map((img) => img.getAttribute("alt"));
    expect(altTexts).toContain("Global Telecom shop front in Panipat");
    expect(altTexts).toContain("Inside view of Global Telecom store");
    expect(altTexts).toContain("Global Telecom storefront, street view");
  });

  it("shows skeleton loaders during image loading", () => {
    const { container } = render(<Services />);
    const skeletons = container.querySelectorAll(".skeleton-loader");
    expect(skeletons.length).toBeGreaterThanOrEqual(1);
  });

  it("uses a two-column grid layout for images and trust points", () => {
    const { container } = render(<Services />);
    const grid = container.querySelector(".grid.lg\\:grid-cols-2");

    expect(grid).not.toBeNull();
  });
});
