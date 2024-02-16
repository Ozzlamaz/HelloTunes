import { useQuery } from "@tanstack/react-query";
import { FilterQuery } from "../interfaces/FilterQuery";
import getData from "../services/apiClient";
import { Track } from "../interfaces/Track";

const useTracks = (filterQuery: FilterQuery) => {
  return useQuery<ResponseData<Track>, Error>({
    queryKey: ["Tracks", filterQuery],
    queryFn: () =>
      getData("/search?", {
        params: {
          ...filterQuery,
          type: "track",
          limit: 8,
        },
      }),
    staleTime: 60 * 60 * 1000, // 1h
  });
};

export default useTracks;
