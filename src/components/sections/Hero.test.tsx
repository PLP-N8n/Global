"use client";

import { act, fireEvent, render } from "@testing-library/react";
import { Hero } from "./Hero";

let reducedMotionValue = false;

vi.mock("motion/react", async () => {
  const actual = await vi.importActual<typeof import("motion/react")>("motion/react");
  return {
    ...actual,
    useReducedMotion: () => reducedMotionValue,
  };
});

describe("Hero", () => {
  it("sets poster and preload metadata on the video", () => {
    reducedMotionValue = false;

    const { container } = render(<Hero />);
    const video = container.querySelector("video");

    expect(video).not.toBeNull();
    expect(video?.getAttribute("poster")).toBe("/images/hero-phone.png");
    expect(video?.getAttribute("preload")).toBe("metadata");
  });

  it("shows poster image when reduced motion is preferred", () => {
    reducedMotionValue = true;

    const { container } = render(<Hero />);

    expect(container.querySelector("video")).toBeNull();
    const image = container.querySelector("img") as HTMLImageElement | null;
    expect(image?.getAttribute("src")).toBe("/images/hero-phone.png");
  });

  it("falls back to poster image when video fails to load", () => {
    reducedMotionValue = false;

    const { container } = render(<Hero />);
    const video = container.querySelector("video") as HTMLVideoElement;

    act(() => {
      fireEvent.error(video);
    });

    expect(container.querySelector("video")).toBeNull();
    const image = container.querySelector("img") as HTMLImageElement | null;
    expect(image?.getAttribute("src")).toBe("/images/hero-phone.png");
  });

  it("renders the hero overlay for text contrast", () => {
    reducedMotionValue = false;

    const { container } = render(<Hero />);
    const overlay = container.querySelector(".hero-overlay");

    expect(overlay).not.toBeNull();
  });
});
