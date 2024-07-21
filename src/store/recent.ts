import { StateCreator } from "zustand";

const RECENT_STACK_SIZE = 10;

export interface RecentProductsState {
  recent: number[];
}

export interface RecentProductsActions {
  addToRecent: (id: number) => void;
}

export interface RecentProductsSlice
  extends RecentProductsState,
    RecentProductsActions {}

const _addToRecent = (state: RecentProductsSlice, id: number) => {
  const recent = [id, ...state.recent.filter((r) => r !== id)];
  return {
    recent: recent.slice(0, RECENT_STACK_SIZE),
  };
};

const initialState: RecentProductsState = {
  recent: [],
};

const createRecentSlice: StateCreator<RecentProductsSlice> = (set, get) => ({
  ...initialState,
  addToRecent: (id) => {
    set((state) => _addToRecent(state, id));
  },
});

export { createRecentSlice, initialState };
