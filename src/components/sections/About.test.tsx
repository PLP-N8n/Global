"use client";

import { render } from "@testing-library/react";
import { About } from "./About";

describe("About", () => {
  it("renders both founder and owner portraits with descriptive alt text", () => {
    const { getAllByRole } = render(<About />);
    const images = getAllByRole("img") as HTMLImageElement[];

    const alts = images.map((img) => img.getAttribute("alt"));
    expect(alts).toContain("Tarun Saluja, Founder of Global Telecom");
    expect(alts).toContain("Sunny, Owner of Global Telecom");
  });

  it("renders two portrait images", () => {
    const { getAllByRole } = render(<About />);
    expect(getAllByRole("img")).toHaveLength(2);
  });
});
