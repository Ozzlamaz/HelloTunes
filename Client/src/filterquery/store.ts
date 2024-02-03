import { create } from "zustand";
import { FilterQueryStore } from "../interfaces/FilterQueryStore";

const useFilterQueryStore = create<FilterQueryStore>((set) => ({
  filterQuery: {
    q: "tag:new",
    type: "album",
    genre: undefined,
    year: undefined,
  },
  setQuery: (q) =>
    set((store) => ({ filterQuery: { q, type: store.filterQuery.type } })),
  setGenre: (genre) =>
    set((store) => ({ filterQuery: { ...store.filterQuery, genre } })),
  setType: (type) =>
    set((store) => ({ filterQuery: { ...store.filterQuery, type } })),
  setYear: (year) =>
    set((store) => ({ filterQuery: { ...store.filterQuery, year } })),
}));

export default useFilterQueryStore;
