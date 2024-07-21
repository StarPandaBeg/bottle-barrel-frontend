import {
  useAppStore,
  useAppStoreContext,
} from "@/components/providers/zustand";
import { useEffect, useRef, useState } from "react";

export default function useFavorite(
  id: number
): [boolean, (state: boolean) => void] {
  const store = useAppStoreContext();
  const favorites = useRef(store.getState().favorites);

  const [toggleFavorite, isFavorite] = useAppStore((state) => [
    state.toggleFavorite,
    state.isFavorite,
  ]);
  const [isProductFavorite, setProductFavorite] = useState(false);

  useEffect(() => {
    setProductFavorite(isFavorite(id));

    return store.subscribe((state) => {
      favorites.current = state.favorites;
      setProductFavorite(state.isFavorite(id));
    });
  }, [id, isFavorite]);

  const toggleProductFavorite = (state: boolean) => toggleFavorite(id, state);
  return [isProductFavorite, toggleProductFavorite];
}
