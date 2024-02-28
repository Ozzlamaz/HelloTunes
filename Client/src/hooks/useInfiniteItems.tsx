import { useInfiniteQuery } from "@tanstack/react-query";
import getData from "../services/apiClient";
import { FilterQuery } from "../interfaces/FilterQuery";
import { InfiniteResponseData } from "../interfaces/InfiniteResponseData";
import { Artist } from "../interfaces/Artist";
import { Album } from "../interfaces/Album";
import { Track } from "../interfaces/Track";

const useInfiniteItems = (filterQuery: FilterQuery) => {
  return useInfiniteQuery<InfiniteResponseData<Album | Artist | Track>, Error>({
    queryKey: ["SearchResponse", filterQuery],
    queryFn: ({ pageParam }) =>
      getData("/search?", {
        params: {
          ...filterQuery,
          offset: pageParam,
        },
      }),
    staleTime: 8 * 60 * 60 * 1000, // 8h
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (lastPage.albums) {
        return lastPage.albums.next
          ? lastPage.albums.offset + filterQuery.limit
          : undefined;
      }
      if (lastPage.artists) {
        return lastPage.artists.next
          ? lastPage.artists.offset + filterQuery.limit
          : undefined;
      }
      if (lastPage.tracks) {
        return lastPage.tracks.next
          ? lastPage.tracks.offset + filterQuery.limit
          : undefined;
      }
    },
  });
};

export default useInfiniteItems;
