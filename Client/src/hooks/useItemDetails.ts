import { useQuery } from "@tanstack/react-query";
import getData from "../services/apiClient";
import { AxiosError } from "axios";

const useItemDetails = <T>(type: string, id: string) => {
  return useQuery<T, AxiosError>({
    queryKey: ["ItemDetails", id],
    queryFn: () => getData(`${type}/${id}`),
    staleTime: 8 * 60 * 60 * 1000, // 8h
  });
};

export default useItemDetails;
