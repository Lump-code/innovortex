import { cn } from "@/lib/utils";

/** Numeric rating where the score sits smaller than "/5". */
export function Rating({ value, max = 5, className }: { value: number; max?: number; className?: string }) {
  return (
    <span className={cn("inline-flex items-baseline font-medium leading-none tabular-nums", className)} aria-label={`Rated ${value} out of ${max}`}>
      <span className="text-[0.95rem]">{value}</span>
      <span className="text-[1.9rem] tracking-[-0.02em]">/{max}</span>
    </span>
  );
}
