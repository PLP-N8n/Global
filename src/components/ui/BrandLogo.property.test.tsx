"use client";

import fc from "fast-check";
import { render } from "@testing-library/react";
import { BrandLogo } from "./BrandLogo";

const RUNS = 100;

describe("BrandLogo properties", () => {
  it("Property 2: Brand Logo Alt Text Format", () => {
    fc.assert(
      fc.property(fc.string({ minLength: 1 }).filter((name) => name.trim().length > 0), (name) => {
        const { getByRole, unmount } = render(
          <BrandLogo name={name} logo="/brands/test.png" />
        );

        const image = getByRole("img") as HTMLImageElement;
        expect(image.getAttribute("alt")).toBe(`${name} logo`);

        unmount();
      }),
      { numRuns: RUNS }
    );
  });

  it("Property 3: Brand Logo Src Attribute", () => {
    const logos = [
      "/brands/apple.png", "/brands/samsung.png", "/brands/lg.png",
      "/brands/sony.png", "/brands/vivo.png", "/brands/oppo.png",
    ];

    fc.assert(
      fc.property(
        fc.string({ minLength: 1 }).filter((name) => name.trim().length > 0),
        fc.constantFrom(...logos),
        (name, logo) => {
          const { getByRole, unmount } = render(
            <BrandLogo name={name} logo={logo} />
          );

          const image = getByRole("img") as HTMLImageElement;
          expect(image.getAttribute("src")).toBe(logo);

          unmount();
        }
      ),
      { numRuns: RUNS }
    );
  });
});
