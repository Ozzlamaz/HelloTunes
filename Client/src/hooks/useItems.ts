import { useQuery } from "@tanstack/react-query";
import getData from "../services/apiClient";
import { ResponseData } from "../interfaces/ResponseData";
import { Params } from "react-router-dom";
import { AxiosError } from "axios";

const useItems = (params: Params<string>) => {
  if (!params.q) {
    params = { ...params, q: "tag:new" };
  }
  if (!params.type) {
    params = { ...params, type: "album,artist,track" };
  }
  return useQuery<ResponseData, AxiosError>({
    queryKey: ["SearchResponse", params],
    queryFn: () =>
      getData("/search?", {
        params: {
          ...params,
          limit: 5,
        },
      }),
    staleTime: 8 * 60 * 60 * 1000, // 8h
  });
};

export default useItems;
