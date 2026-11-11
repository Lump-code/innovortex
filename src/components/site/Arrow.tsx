type ArrowProps = { className?: string; direction?: "right" | "down" };

/** Thin editorial arrow. Points right; CSS rotates it to the ↗ resting state. */
export function Arrow({ className, direction = "right" }: ArrowProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
      style={direction === "down" ? { transform: "rotate(90deg)" } : undefined}
    >
      <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
