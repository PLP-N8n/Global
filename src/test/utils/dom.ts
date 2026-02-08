type MatchMediaListener = (event: MediaQueryListEvent) => void;

export interface MatchMediaController {
  setMatches: (next: boolean) => void;
}

export function setupMatchMedia(initialMatches = false): MatchMediaController | undefined {
  if (typeof window === "undefined") {
    return;
  }

  let currentMatches = initialMatches;
  const listeners = new Set<MatchMediaListener>();

  window.matchMedia = (query: string): MediaQueryList => {
    const mql: MediaQueryList = {
      matches: currentMatches,
      media: query,
      onchange: null,
      addEventListener: (_: string, listener: EventListenerOrEventListenerObject) => {
        listeners.add(listener as MatchMediaListener);
      },
      removeEventListener: (_: string, listener: EventListenerOrEventListenerObject) => {
        listeners.delete(listener as MatchMediaListener);
      },
      addListener: (listener: MatchMediaListener) => {
        listeners.add(listener);
      },
      removeListener: (listener: MatchMediaListener) => {
        listeners.delete(listener);
      },
      dispatchEvent: (event: Event) => {
        listeners.forEach((listener) => {
          listener(event as MediaQueryListEvent);
        });
        return true;
      },
    };

    return mql;
  };

  return {
    setMatches: (next: boolean) => {
      currentMatches = next;
      const event = new Event("change") as MediaQueryListEvent;
      Object.defineProperty(event, "matches", {
        configurable: true,
        value: next,
      });
      listeners.forEach((listener) => listener(event));
    },
  };
}

export function setupIntersectionObserver() {
  if (typeof window === "undefined" || "IntersectionObserver" in window) {
    return;
  }

  class MockIntersectionObserver implements IntersectionObserver {
    readonly root: Element | null = null;
    readonly rootMargin: string = "";
    readonly thresholds: ReadonlyArray<number> = [];

    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords(): IntersectionObserverEntry[] {
      return [];
    }
  }

  (window as unknown as Record<string, unknown>).IntersectionObserver = MockIntersectionObserver;
}

export function setupResizeObserver() {
  if (typeof window === "undefined" || "ResizeObserver" in window) {
    return;
  }

  class MockResizeObserver implements ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }

  (window as unknown as Record<string, unknown>).ResizeObserver = MockResizeObserver;
}
