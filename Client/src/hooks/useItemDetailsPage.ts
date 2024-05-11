import { useQuery } from "@tanstack/react-query";
import { Params } from "react-router-dom";
import getData from "../services/apiClient";

const useItemDetailsPage = (params: Params<string>) => {
  return useQuery({
    queryKey: ["ItemDetails", params],
    queryFn: () => getData(`${params.type!}s/${params.id!}`),
    staleTime: 8 * 60 * 60 * 1000, // 8h
  });
};

export default useItemDetailsPage;
