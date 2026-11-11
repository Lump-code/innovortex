import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type CursorState = "default" | "link" | "view" | "hidden";

const INTERACTIVE = "a, button, [role='button'], summary, label, [data-cursor='link']";

/**
 * Blend-mode dot cursor. Follows the pointer with a light lerp, grows over
 * interactive elements and turns into a "VIEW" disc over [data-cursor="view"].
 * Only enabled on fine pointers; touch devices keep the system cursor.
 */
export function Cursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [state, setState] = useState<CursorState>("default");
  const [label, setLabel] = useState("View");
  const [visible, setVisible] = useState(false);
  const stateRef = useRef<CursorState>("default");

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mq.matches) return;
    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let tx = -100;
    let ty = -100;
    let cx = tx;
    let cy = ty;
    let raf = 0;

    const resolve = (target: EventTarget | null) => {
      const el = target instanceof Element ? target : null;
      if (!el) return;
      const tagged = el.closest<HTMLElement>("[data-cursor]");
      let next: CursorState = "default";
      if (tagged?.dataset["cursor"] === "view") {
        next = "view";
        setLabel(tagged.dataset["cursorLabel"] ?? "View");
      } else if (tagged?.dataset["cursor"] === "hidden") {
        next = "hidden";
      } else if (el.closest(INTERACTIVE)) {
        next = "link";
      }
      if (next !== stateRef.current) {
        stateRef.current = next;
        setState(next);
      }
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      tx = e.clientX;
      ty = e.clientY;
      setVisible(true);
      resolve(e.target);
    };
    const onLeave = () => setVisible(false);
    const onScroll = () => {
      const el = document.elementFromPoint(tx, ty);
      resolve(el);
    };

    const loop = () => {
      const k = reduce ? 1 : 0.28;
      cx += (tx - cx) * k;
      cy += (ty - cy) * k;
      if (outerRef.current) {
        outerRef.current.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  if (!enabled) return null;

  const scale = state === "view" ? 1 : state === "link" ? 0.42 : state === "hidden" ? 0 : 0.14;

  return (
    <div
      ref={outerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none fixed left-0 top-0 z-[100] transition-opacity duration-300",
        state === "view" ? "mix-blend-normal" : "mix-blend-difference",
        visible ? "opacity-100" : "opacity-0",
      )}
    >
      <div
        className="-ml-10 -mt-10 flex h-20 w-20 items-center justify-center rounded-full bg-inverse text-inverse-foreground transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ transform: `scale(${scale})` }}
      >
        <span
          className={cn(
            "text-[14px] font-medium uppercase transition-opacity duration-300",
            state === "view" ? "opacity-100" : "opacity-0",
          )}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
