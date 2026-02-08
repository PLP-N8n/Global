"use client";

import fc from "fast-check";
import { act, render } from "@testing-library/react";
import { ImageWithFallback } from "./ImageWithFallback";
import { triggerImageError } from "@/test/utils/image";

const RUNS = 100;
const RETRY_DELAY_MS = 2000;

describe("ImageWithFallback properties", () => {
  it("Property 1: Image Fallback on Load Failure", () => {
    vi.useFakeTimers();

    fc.assert(
      fc.property(
        fc
          .tuple(fc.string({ minLength: 1 }), fc.string({ minLength: 1 }))
          .filter(([src, fallback]) => src !== fallback),
        ([src, fallback]) => {
          const { getByRole, unmount } = render(
            <ImageWithFallback
              src={src}
              alt="Fallback"
              fallbackSrc={fallback}
              width={120}
              height={80}
            />
          );

          const image = getByRole("img") as HTMLImageElement;

          act(() => {
            triggerImageError(image);
          });
          act(() => {
            vi.advanceTimersByTime(RETRY_DELAY_MS);
          });
          act(() => {
            triggerImageError(image);
          });

          expect(image.getAttribute("src")).toBe(fallback);

          unmount();
          vi.clearAllTimers();
        }
      ),
      { numRuns: RUNS }
    );

    vi.useRealTimers();
  });

  it("Property 5: Error Logging on Image Failure", () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    fc.assert(
      fc.property(fc.string({ minLength: 1 }), (src) => {
        errorSpy.mockClear();
        const { getByRole, unmount } = render(
          <ImageWithFallback src={src} alt="Error" width={120} height={80} />
        );

        const image = getByRole("img") as HTMLImageElement;
        act(() => {
          triggerImageError(image);
        });

        expect(errorSpy).toHaveBeenCalled();

        unmount();
      }),
      { numRuns: RUNS }
    );

    errorSpy.mockRestore();
  });

  it("Property 6: Image Load Retry Logic", () => {
    vi.useFakeTimers();
    const timeoutSpy = vi.spyOn(window, "setTimeout");

    fc.assert(
      fc.property(fc.string({ minLength: 1 }), (src) => {
        timeoutSpy.mockClear();

        const { getByRole, unmount } = render(
          <ImageWithFallback src={src} alt="Retry" width={120} height={80} />
        );

        const image = getByRole("img") as HTMLImageElement;

        act(() => {
          triggerImageError(image);
        });

        expect(timeoutSpy).toHaveBeenCalled();
        expect(timeoutSpy.mock.calls[0]?.[1]).toBe(RETRY_DELAY_MS);

        act(() => {
          vi.advanceTimersByTime(RETRY_DELAY_MS);
        });
        act(() => {
          triggerImageError(image);
        });

        expect(timeoutSpy).toHaveBeenCalledTimes(1);

        unmount();
        vi.clearAllTimers();
      }),
      { numRuns: RUNS }
    );

    timeoutSpy.mockRestore();
    vi.useRealTimers();
  });
});
