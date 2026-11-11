import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type RiseLinesProps = {
  lines: { text: string; className?: string }[];
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "p";
};

/** Oversized lines that emerge upward from their own baseline. */
export function RiseLines({ lines, className, delay = 150, stagger = 110, as: Tag = "h1" }: RiseLinesProps) {
  return (
    <Tag className={className} aria-label={lines.map((l) => l.text).join(" ")}>
      {lines.map((line, i) => (
        <span key={i} className={cn("line-mask", line.className)} aria-hidden="true">
          <span
            className="line-rise"
            style={{ animationDelay: `${delay + i * stagger}ms` } as CSSProperties}
          >
            {line.text}
          </span>
        </span>
      ))}
    </Tag>
  );
}
