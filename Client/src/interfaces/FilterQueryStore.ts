import { FilterQuery } from "./FilterQuery";

export interface FilterQueryStore {
  filterQuery: FilterQuery;
  setQuery: (q: string) => void;
  setType: (type: string) => void;
  setLimit: (limit: number) => void;
}
