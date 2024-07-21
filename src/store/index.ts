import { persist } from "zustand/middleware";
import { StateCreator, createStore } from "zustand/vanilla";
import {
  FavoriteActions,
  FavoriteSlice,
  FavoriteState,
  createFavoriteSlice,
  initialState as favoriteInitialState,
} from "./favorite";
import {
  RecentProductsActions,
  RecentProductsSlice,
  RecentProductsState,
  createRecentSlice,
  initialState as recentInitialState,
} from "./recent";

const StorageKey = "app-storage";

export interface StoreState extends FavoriteState, RecentProductsState {}
export interface StoreActions extends FavoriteActions, RecentProductsActions {}
export interface Store extends FavoriteSlice, RecentProductsSlice {}

const initialState: StoreState = {
  ...favoriteInitialState,
  ...recentInitialState,
};

const initializer: (state: StoreState) => StateCreator<Store> =
  (state) =>
  (...a) => ({
    ...createFavoriteSlice(...a),
    ...createRecentSlice(...a),
    ...state,
  });

const createAppStore = (state: StoreState = initialState) =>
  createStore<Store>()(
    persist(initializer(state), {
      name: StorageKey,
    })
  );

export { createAppStore, initialState };
