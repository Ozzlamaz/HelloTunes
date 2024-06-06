import { useInfiniteQuery } from "@tanstack/react-query";
import getData from "../services/apiClient";
import { InfiniteResponseData } from "../interfaces/InfiniteResponseData";
import { Artist } from "../interfaces/Artist";
import { Album } from "../interfaces/Album";
import { Track } from "../interfaces/Track";
import { Params } from "react-router-dom";
import { AxiosError } from "axios";

const useInfiniteItems = (params: Params<string>) => {
  return useInfiniteQuery<
    InfiniteResponseData<Album | Artist | Track>,
    AxiosError
  >({
    queryKey: ["InfiniteSearchResponse", params],
    queryFn: ({ pageParam }) =>
      getData("/search?", {
        params: {
          ...params,
          limit: 20,
          offset: pageParam,
        },
      }),
    staleTime: 8 * 60 * 60 * 1000, // 8h
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage[`${params.type}s`].next &&
        lastPage[`${params.type}s`].items.length !== 0
        ? allPages.length * 20
        : undefined;
    },
  });
};

export default useInfiniteItems;
