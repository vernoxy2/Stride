import { useEffect, useRef, useState } from "react";

export function useSectionScroller(sectionCount, throttleDelay = 700) {
  const [index, setIndex] = useState(0);
  const isThrottled = useRef(false);
  const containerRef = useRef(null);

  const throttle = (fn) => {
    if (isThrottled.current) return;
    isThrottled.current = true;
    fn();
    setTimeout(() => (isThrottled.current = false), throttleDelay);
  };

  useEffect(() => {
    const onWheel = (e) => {
      const delta = e.deltaY;
      if (delta > 0) throttle(() => setIndex((i) => Math.min(i + 1, sectionCount - 1)));
      else if (delta < 0) throttle(() => setIndex((i) => Math.max(i - 1, 0)));
    };

    const el = containerRef.current || window;
    el.addEventListener("wheel", onWheel, { passive: true });
    return () => el.removeEventListener("wheel", onWheel);
  }, [sectionCount]);

  useEffect(() => {
    let startY = null;
    const onTouchStart = (e) => (startY = e.touches[0].clientY);
    const onTouchMove = (e) => {
      if (startY == null) return;
      const dy = startY - e.touches[0].clientY;
      if (Math.abs(dy) > 40) {
        if (dy > 0) throttle(() => setIndex((i) => Math.min(i + 1, sectionCount - 1)));
        else throttle(() => setIndex((i) => Math.max(i - 1, 0)));
        startY = null;
      }
    };
    const el = containerRef.current || window;
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: true });
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
    };
  }, [sectionCount]);

  return { index, setIndex, containerRef };
}
