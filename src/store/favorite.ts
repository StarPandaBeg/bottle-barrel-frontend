import { StateCreator } from "zustand";

export interface FavoriteState {
  favorites: number[];
}

export interface FavoriteActions {
  addToFavorite: (id: number) => void;
  removeFromFavorites: (id: number) => void;
  toggleFavorite: (id: number, state?: boolean) => void;
  isFavorite: (id: number) => boolean;
}

export interface FavoriteSlice extends FavoriteState, FavoriteActions {}

const _addToFavorite = (state: FavoriteSlice, id: number) => {
  const favoritesSet = new Set(state.favorites).add(id);
  return {
    favorites: Array.from(favoritesSet),
  };
};

const _removeFromFavorites = (state: FavoriteSlice, id: number) => {
  return { favorites: state.favorites.filter((f) => f !== id) };
};

const _toggleFavorite = (
  state: FavoriteSlice,
  id: number,
  toggleState?: boolean
) => {
  if (toggleState !== undefined) {
    if (toggleState) return _addToFavorite(state, id);
    return _removeFromFavorites(state, id);
  }
  if (state.favorites.includes(id)) return _removeFromFavorites(state, id);
  return _addToFavorite(state, id);
};

const initialState: FavoriteState = {
  favorites: [],
};

const createFavoriteSlice: StateCreator<FavoriteSlice> = (set, get) => ({
  ...initialState,
  addToFavorite: (id) => {
    set((state) => _addToFavorite(state, id));
  },
  removeFromFavorites: (id) => {
    set((state) => _removeFromFavorites(state, id));
  },
  toggleFavorite: (id, toggleState) => {
    set((state) => _toggleFavorite(state, id, toggleState));
  },
  isFavorite: (id) => get().favorites.includes(id),
});

export { createFavoriteSlice, initialState };
