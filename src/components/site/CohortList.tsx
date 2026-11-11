import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import type { Course } from "@/data/site";
import { cn } from "@/lib/utils";
import { Arrow } from "./Arrow";

type CohortListProps = { courses: Course[]; compact?: boolean };

/**
 * Editorial project-style list. On hover-capable devices a preview image
 * follows the pointer and slides between cohorts; on touch, tapping a row
 * expands its image inline.
 */
export function CohortList({ courses, compact = false }: CohortListProps) {
  const [active, setActive] = useState<number | null>(null);
  const [canHover, setCanHover] = useState(true);
  const [tapped, setTapped] = useState<number | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setCanHover(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  useEffect(() => {
    if (!canHover) return;
    let raf = 0;
    const loop = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.14;
      pos.current.y += (target.current.y - pos.current.y) * 0.14;
      if (previewRef.current) {
        previewRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [canHover]);

  const onMove = (e: React.MouseEvent) => {
    target.current = { x: e.clientX, y: e.clientY };
    if (active === null) pos.current = { ...target.current };
  };

  return (
    <div onMouseMove={canHover ? onMove : undefined} onMouseLeave={() => setActive(null)} className="relative">
      <ul className="border-t border-hairline">
        {courses.map((c, i) => {
          const dim = canHover && active === i;
          const open = !canHover && tapped === i;
          const row = (
            <div
              className={cn(
                "flex items-center justify-between gap-6",
                compact ? "py-10 md:py-12" : "py-12 md:py-[4.75rem]",
              )}
            >
              <span
                className={cn(
                  "font-medium uppercase leading-[0.95] tracking-[-0.03em] transition-[color,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                  compact ? "text-[clamp(1.9rem,4.6vw,4.25rem)]" : "text-[clamp(2.1rem,6.7vw,6rem)]",
                  dim ? "translate-x-4 text-display-dim md:translate-x-10" : "text-display",
                )}
              >
                {c.title}
              </span>
              <span
                className={cn(
                  "shrink-0 text-right text-[12px] font-medium uppercase transition-colors duration-500 md:text-[14px]",
                  dim ? "text-display-dim" : "text-foreground",
                )}
              >
                {c.mentor}
              </span>
            </div>
          );

          return (
            <li key={c.title} className="border-b border-hairline">
              {canHover ? (
                <Link
                  to="/techboard"
                  data-cursor="view"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(null)}
                  className="block"
                  aria-label={`${c.title} — mentored by ${c.mentor}`}
                >
                  {row}
                </Link>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => setTapped(open ? null : i)}
                    aria-expanded={open}
                    className="block w-full text-left"
                  >
                    {row}
                  </button>
                  <div
                    className={cn(
                      "grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                    )}
                  >
                    <div className="overflow-hidden">
                      <img
                        src={c.image}
                        alt={`${c.title} cohort`}
                        loading="lazy"
                        className="aspect-[4/3] w-full rounded-[6px] object-cover"
                      />
                      <Link to="/techboard" className="link-arrow label-caps mb-10 mt-5">
                        <span className="link-arrow-label">View cohort</span>
                        <Arrow className="link-arrow-icon" />
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </li>
          );
        })}
      </ul>

      {canHover && (
        <div
          ref={previewRef}
          aria-hidden="true"
          className="pointer-events-none fixed left-0 top-0 z-30"
        >
          <div
            className={cn(
              "h-[min(24rem,30vw)] w-[min(24rem,30vw)] overflow-hidden rounded-[6px] transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
              active === null ? "scale-0 opacity-0" : "scale-100 opacity-100",
            )}
          >
            <div
              className="h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]"
              style={{ transform: `translateY(-${(active ?? 0) * 100}%)` }}
            >
              {courses.map((c) => (
                <img key={c.title} src={c.image} alt="" className="h-full w-full object-cover" />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
