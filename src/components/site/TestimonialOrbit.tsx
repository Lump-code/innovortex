import { useEffect, useRef, useState } from "react";
import type { Testimonial } from "@/data/site";
import { Rating } from "./Rating";

type Dims = { rx: number; ry: number; item: number };

function measure(width: number): Dims {
  if (width < 640) return { rx: width * 0.3, ry: 150, item: Math.min(250, width * 0.7) };
  if (width < 1024) return { rx: width * 0.33, ry: 170, item: 270 };
  return { rx: Math.min(width * 0.36, 560), ry: 185, item: 300 };
}

/**
 * Testimonials travelling around a tilted orbit that wraps a wireframe sphere.
 * Depth drives scale, opacity and stacking; hovering one slows the orbit and
 * brings that voice forward.
 */
export function TestimonialOrbit({ items }: { items: Testimonial[] }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const hovered = useRef<number | null>(null);
  const [dims, setDims] = useState<Dims>({ rx: 520, ry: 185, item: 300 });
  const dimsRef = useRef(dims);
  const average = items.reduce((s, t) => s + t.rating, 0) / items.length;

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const update = () => {
      const d = measure(el.clientWidth);
      dimsRef.current = d;
      setDims(d);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let angle = 0;
    let speed = 1;
    let last = performance.now();
    let raf = 0;
    const n = items.length;
    const fullTurnMs = 64000;

    const frame = (now: number) => {
      const dt = Math.min(64, now - last);
      last = now;
      const targetSpeed = reduce ? 0 : hovered.current === null ? 1 : 0.12;
      speed += (targetSpeed - speed) * 0.06;
      angle += ((Math.PI * 2) / fullTurnMs) * dt * speed;

      const { rx, ry } = dimsRef.current;
      for (let i = 0; i < n; i++) {
        const el = itemRefs.current[i];
        if (!el) continue;
        const theta = angle + (i / n) * Math.PI * 2;
        const x = Math.cos(theta) * rx;
        const y = Math.sin(theta) * ry;
        const depth = (Math.sin(theta) + 1) / 2; // 1 = front (bottom of the orbit)
        const isHovered = hovered.current === i;
        const scale = (0.55 + depth * 0.45) * (isHovered ? 1.22 : 1);
        el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${scale})`;
        el.style.opacity = String(isHovered ? 1 : 0.12 + depth * 0.88);
        el.style.zIndex = String(isHovered ? 200 : Math.round(depth * 100));
        el.style.filter = isHovered || depth > 0.6 ? "none" : `blur(${(0.6 - depth) * 2.5}px)`;
      }
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [items.length]);

  const sphere = Math.min(dims.rx * 0.9, 340);

  return (
    <div
      ref={stageRef}
      className="relative mx-auto h-[600px] w-full overflow-x-clip md:h-[720px]"
      aria-roledescription="carousel"
    >
      {/* Wireframe sphere at the centre of the orbit */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-hairline"
        style={{ width: sphere, height: sphere }}
      >
        <svg viewBox="0 0 200 200" className="h-full w-full" fill="none" stroke="currentColor" strokeWidth="0.6">
          <circle cx="100" cy="100" r="99" />
          {[0.25, 0.55, 0.85].map((k) => (
            <ellipse key={`lat-${k}`} cx="100" cy="100" rx="99" ry={99 * k} />
          ))}
          <g className="origin-center animate-spin-slow [transform-box:fill-box]" style={{ animationDuration: "40s" }}>
            {[0.2, 0.5, 0.8].map((k) => (
              <ellipse key={`lon-${k}`} cx="100" cy="100" rx={99 * k} ry="99" />
            ))}
          </g>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <Rating value={Number(average.toFixed(1))} className="text-foreground" />
          <span className="label-eyebrow mt-2">Average rating</span>
        </div>
      </div>

      <ul className="absolute left-1/2 top-1/2 h-0 w-0">
        {items.map((t, i) => (
          <li
            key={t.name}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            onMouseEnter={() => (hovered.current = i)}
            onMouseLeave={() => (hovered.current = null)}
            onFocus={() => (hovered.current = i)}
            onBlur={() => (hovered.current = null)}
            tabIndex={0}
            data-cursor="link"
            className="absolute left-0 top-0 border-t border-hairline bg-background pb-4 pt-4 transition-[filter] will-change-transform"
            style={{ width: dims.item }}
          >
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-[15px] font-semibold uppercase">{t.name}</span>
              <Rating value={t.rating} />
            </div>
            <p className="mt-3 text-[14px] font-normal leading-[1.5] text-muted-foreground">“{t.text}”</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
