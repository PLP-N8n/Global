"use client";

import fc from "fast-check";
import { render } from "@testing-library/react";
import { OptimizedImage } from "./OptimizedImage";

const RUNS = 100;

describe("OptimizedImage properties", () => {
  it("Property 3: Skeleton Loader During Image Loading", () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 400 }),
        fc.integer({ min: 1, max: 400 }),
        (width, height) => {
          const { container, unmount } = render(
            <OptimizedImage
              src="/images/sample.png"
              alt="Sample"
              width={width}
              height={height}
            />
          );

          expect(container.querySelector(".skeleton-loader")).not.toBeNull();
          unmount();
        }
      ),
      { numRuns: RUNS }
    );
  });
});
