import { createRef, useEffect } from "react";

export default function useHorizontalScroll<T extends HTMLElement>(
  scrollBehavior: ScrollBehavior = "auto"
) {
  const elementRef = createRef<T>();

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY == 0) return;
      e.preventDefault();
      element.scrollTo({
        left: element.scrollLeft + e.deltaY,
        behavior: scrollBehavior,
      });
    };

    element.addEventListener("wheel", onWheel);
    return () => element.removeEventListener("wheel", onWheel);
  }, []);

  return elementRef;
}
