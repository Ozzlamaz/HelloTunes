import { useQuery } from "@tanstack/react-query";
import getData from "../services/apiClient";
import { ResponseData } from "../interfaces/ResponseData";

const useNewReleases = () => {
  return useQuery<ResponseData, Error>({
    queryKey: ["NewAlbums"],
    queryFn: () => getData("/browse/new-releases"),
    staleTime: 24 * 60 * 60 * 100, // 24h
  });
};

export default useNewReleases;
