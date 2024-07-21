import { useAppStore } from "@/components/providers/zustand";
import { useMemo } from "react";

export default function useRecentProducts(exclude: number | number[] = []) {
  const recentProducts = useAppStore((store) => store.recent);
  const excludeArray = useMemo(
    () => (Array.isArray(exclude) ? exclude : [exclude]),
    [exclude]
  );
  const filtered = useMemo(
    () => recentProducts.filter((id) => !excludeArray.includes(id)),
    [recentProducts, excludeArray]
  );

  return filtered;
}
