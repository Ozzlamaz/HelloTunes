import { useQuery } from "@tanstack/react-query";
import { FilterQuery } from "../interfaces/FilterQuery";
import getData from "../services/apiClient";
import { Artist } from "../interfaces/Artist";

const useArtists = (filterQuery: FilterQuery) => {
  return useQuery<ResponseData<Artist>>({
    queryKey: ["Artists", filterQuery],
    queryFn: () =>
      getData("/search?", {
        params: {
          ...filterQuery,
          type: "artist",
          limit: 5,
        },
      }),
    staleTime: 60 * 60 * 1000, // 1h
  });
};

export default useArtists;
