import { Suspense } from "react";
import { useDeferredMount } from "../hooks/useDeferredMount";

function SectionFallback({ minHeight }) {
  return (
    <div
      className="w-full flex items-center justify-center text-gray-500 text-sm"
      style={{ minHeight }}
      aria-hidden="true"
    >
      <div className="h-8 w-8 rounded-full border-2 border-teal-500/40 border-t-teal-400 animate-spin" />
    </div>
  );
}

/**
 * Renders a lazy section only when near viewport (phones) or immediately on md+.
 */
export default function DeferredSection({
  children,
  id,
  minHeight = "60vh",
}) {
  const [ref, shouldMount] = useDeferredMount();

  return (
    <section
      id={id}
      ref={ref}
      className="relative z-10 content-auto"
      style={{ contentVisibility: "auto", containIntrinsicSize: `auto ${minHeight}` }}
    >
      {shouldMount ? (
        <Suspense fallback={<SectionFallback minHeight={minHeight} />}>
          {children}
        </Suspense>
      ) : (
        <SectionFallback minHeight={minHeight} />
      )}
    </section>
  );
}
