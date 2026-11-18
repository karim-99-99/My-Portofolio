/**
 * Lightweight static background — no Framer Motion, no continuous
 * GPU animations. Keeps first paint fast and prevents scroll flicker
 * from compositing animated layers under backdrop-blur content.
 */
const AnimatedSpadeBackground = () => {
  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gray-900" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(45, 212, 191, 0.12), transparent 55%), radial-gradient(ellipse 60% 40% at 100% 50%, rgba(56, 189, 248, 0.06), transparent 50%), radial-gradient(ellipse 50% 40% at 0% 80%, rgba(45, 212, 191, 0.05), transparent 50%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148, 163, 184, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  );
};

export default AnimatedSpadeBackground;
