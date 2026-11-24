import { useEffect, useRef, useState } from "react";

/**
 * Mount children only when the placeholder nears the viewport.
 * Keeps first paint light on phones (slow CPU + cellular).
 */
export function useDeferredMount(options = {}) {
  const {
    // Phones: mount only when the section actually enters view.
    // md+: small prefetch margin is fine.
    rootMarginPhone = "0px 0px",
    rootMarginDesktop = "180px 0px",
    threshold = 0.01,
    forceMountMinWidth = 768,
  } = options;

  const placeholderRef = useRef(null);
  const [shouldMount, setShouldMount] = useState(false);

  useEffect(() => {
    if (shouldMount) return undefined;

    const desktopMq = window.matchMedia(`(min-width: ${forceMountMinWidth}px)`);
    if (desktopMq.matches) {
      setShouldMount(true);
      return undefined;
    }

    const node = placeholderRef.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setShouldMount(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldMount(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: desktopMq.matches ? rootMarginDesktop : rootMarginPhone,
        threshold,
      }
    );

    observer.observe(node);

    const onChange = (e) => {
      if (e.matches) setShouldMount(true);
    };
    desktopMq.addEventListener("change", onChange);

    return () => {
      observer.disconnect();
      desktopMq.removeEventListener("change", onChange);
    };
  }, [
    shouldMount,
    rootMarginPhone,
    rootMarginDesktop,
    threshold,
    forceMountMinWidth,
  ]);

  return [placeholderRef, shouldMount];
}
