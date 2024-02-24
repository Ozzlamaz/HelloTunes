import { FilterQuery } from "../interfaces/FilterQuery";

const createURLParams = (filterQuery: FilterQuery) => {
  const urlParams = new URLSearchParams(
    Object.entries(filterQuery).filter(([_, value]) => value !== undefined)
  ).toString();
  return urlParams;
};

export default createURLParams;
