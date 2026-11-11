import { act, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useHoverIntentAccordion } from "./use-hover-intent-accordion";

describe("FAQ hover-intent accordion", () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it("does not open before the pointer has rested for one second", () => {
    const { result } = renderHook(() => useHoverIntentAccordion(1000));
    act(() => result.current.getHandlers(2).onMouseEnter());
    act(() => vi.advanceTimersByTime(999));
    expect(result.current.openIndex).toBeNull();
  });

  it("opens after resting on a question for more than one second", () => {
    const { result } = renderHook(() => useHoverIntentAccordion(1000));
    act(() => result.current.getHandlers(2).onMouseEnter());
    act(() => vi.advanceTimersByTime(1001));
    expect(result.current.openIndex).toBe(2);
  });

  it("cancels the auto-open when the pointer leaves early", () => {
    const { result } = renderHook(() => useHoverIntentAccordion(1000));
    act(() => result.current.getHandlers(1).onMouseEnter());
    act(() => vi.advanceTimersByTime(500));
    act(() => result.current.getHandlers(1).onMouseLeave());
    act(() => vi.advanceTimersByTime(1000));
    expect(result.current.openIndex).toBeNull();
  });

  it("opens immediately on click", () => {
    const { result } = renderHook(() => useHoverIntentAccordion(1000));
    act(() => result.current.getHandlers(3).onClick());
    expect(result.current.openIndex).toBe(3);
  });

  it("closes an open question when it is clicked again, without the hover timer reopening it", () => {
    const { result } = renderHook(() => useHoverIntentAccordion(1000));
    act(() => result.current.getHandlers(0).onMouseEnter());
    act(() => vi.advanceTimersByTime(1100));
    expect(result.current.openIndex).toBe(0);
    act(() => result.current.getHandlers(0).onClick());
    act(() => vi.advanceTimersByTime(2000));
    expect(result.current.openIndex).toBeNull();
  });

  it("a click during a pending hover opens right away and is not undone by the timer", () => {
    const { result } = renderHook(() => useHoverIntentAccordion(1000));
    act(() => result.current.getHandlers(4).onMouseEnter());
    act(() => vi.advanceTimersByTime(300));
    act(() => result.current.getHandlers(4).onClick());
    expect(result.current.openIndex).toBe(4);
    act(() => vi.advanceTimersByTime(2000));
    expect(result.current.openIndex).toBe(4);
  });
});
