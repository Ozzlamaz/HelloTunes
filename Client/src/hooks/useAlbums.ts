import { useQuery } from "@tanstack/react-query";
import { FilterQuery } from "../interfaces/FilterQuery";
import getData from "../services/apiClient";
import { Album } from "../interfaces/Album";

const useAlbums = (filterQuery: FilterQuery) => {
  return useQuery<ResponseData<Album>>({
    queryKey: ["Albums", filterQuery],
    queryFn: () =>
      getData("/search?", {
        params: {
          ...filterQuery,
          type: "album",
          limit: 5,
        },
      }),
    staleTime: 60 * 60 * 1000, // 1h
  });
};

export default useAlbums;
