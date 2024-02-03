import { FilterQuery } from "./FilterQuery";

export interface FilterQueryStore {
  filterQuery: FilterQuery;
  setQuery: (q: string) => void;
  setType: (type: string) => void;
  setGenre: (genre: string) => void;
  setYear: (year: string) => void;
}
