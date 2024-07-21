import { DependencyList, EffectCallback, useEffect, useRef } from "react";

export function useUpdateEffect(
  effect: EffectCallback,
  deps?: DependencyList | undefined
) {
  const firstCall = useRef(true);
  useEffect(() => {
    if (firstCall.current) {
      firstCall.current = false;
      return;
    }
    return effect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
