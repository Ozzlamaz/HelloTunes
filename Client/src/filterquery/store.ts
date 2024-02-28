import { create } from "zustand";
import { FilterQueryStore } from "../interfaces/FilterQueryStore";

const useFilterQueryStore = create<FilterQueryStore>((set) => ({
  filterQuery: {
    q: "tag:new",
    type: "artist,album,track",
    limit: 5,
  },
  setQuery: (q) =>
    set((store) => ({
      filterQuery: { ...store.filterQuery, q },
    })),
  setType: (type) =>
    set((store) => ({ filterQuery: { ...store.filterQuery, type } })),
  setLimit: (limit) =>
    set((store) => ({ filterQuery: { ...store.filterQuery, limit } })),
}));

export default useFilterQueryStore;
