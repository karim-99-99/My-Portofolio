/**
 * Lightweight static background — no Framer Motion, no blur orbs,
 * no infinite animations. Keeps visual atmosphere without killing scroll FPS.
 */
const AnimatedSpadeBackground = () => {
  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gray-900" />
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 20% 10%, rgba(45, 212, 191, 0.12), transparent 55%), radial-gradient(ellipse 70% 45% at 85% 20%, rgba(56, 189, 248, 0.1), transparent 50%), radial-gradient(ellipse 60% 40% at 50% 90%, rgba(45, 212, 191, 0.08), transparent 55%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
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
