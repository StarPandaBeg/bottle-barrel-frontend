import { persistNSync } from "persist-and-sync";
import { StateCreator, createStore } from "zustand/vanilla";
import {
  FavoriteActions,
  FavoriteSlice,
  FavoriteState,
  createFavoriteSlice,
  initialState as favoriteInitialState,
} from "./favorite";

const StorageKey = "app-storage";

export interface StoreState extends FavoriteState {}
export interface StoreActions extends FavoriteActions {}
export interface Store extends FavoriteSlice {}

const initialState: StoreState = {
  ...favoriteInitialState,
};

const initializer: (state: StoreState) => StateCreator<Store> =
  (state) =>
  (...a) => ({
    ...state,
    ...createFavoriteSlice(...a),
  });

const createAppStore = (state: StoreState = initialState) =>
  createStore<Store>()(
    persistNSync(initializer(state), {
      name: StorageKey,
    })
  );

export { createAppStore, initialState };