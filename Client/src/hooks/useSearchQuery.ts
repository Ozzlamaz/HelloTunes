import { useQuery } from "@tanstack/react-query";
import getData from "../services/apiClient";
import { FilterQuery } from "../interfaces/FilterQuery";
import { SearchResponse } from "../interfaces/SearchResponse";
import { Album } from "../interfaces/Album";
import { Artist } from "../interfaces/Artist";
import { Track } from "../interfaces/Track";

const useSearchQuery = (FilterQuery: FilterQuery) => {
  return useQuery<SearchResponse<Album | Artist | Track>, Error>({
    queryKey: ["SearchResponse", FilterQuery],
    queryFn: () =>
      getData("/search?", {
        params: {
          ...FilterQuery,
        },
      }),
    staleTime: 8 * 60 * 60 * 1000, // 8h
  });
};

export default useSearchQuery;
