import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Single-open accordion that opens an item after the pointer rests on it for
 * `delay` ms, and also toggles on click. A click cancels any pending hover
 * timer, so the two never fight each other.
 */
export function useHoverIntentAccordion(delay = 1000) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clear = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  }, []);

  useEffect(() => clear, [clear]);

  const getHandlers = useCallback(
    (index: number) => ({
      onMouseEnter: () => {
        clear();
        timer.current = setTimeout(() => {
          timer.current = null;
          setOpenIndex(index);
        }, delay);
      },
      onMouseLeave: clear,
      onClick: () => {
        clear();
        setOpenIndex((current) => (current === index ? null : index));
      },
    }),
    [clear, delay],
  );

  return { openIndex, getHandlers };
}
