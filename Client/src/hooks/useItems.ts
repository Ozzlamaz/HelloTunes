import { useQuery } from "@tanstack/react-query";
import getData from "../services/apiClient";
import { FilterQuery } from "../interfaces/FilterQuery";
import { ResponseData } from "../interfaces/ResponseData";

const useItems = (filterQuery: FilterQuery) => {
  return useQuery<ResponseData, Error>({
    queryKey: ["SearchResponse", filterQuery],
    queryFn: () =>
      getData("/search?", {
        params: {
          ...filterQuery,
        },
      }),
    staleTime: 8 * 60 * 60 * 1000, // 8h
  });
};

export default useItems;
