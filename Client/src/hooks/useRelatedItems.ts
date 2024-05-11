import { useInfiniteQuery } from "@tanstack/react-query";
import getData from "../services/apiClient";

const useRelatedItems = (
  relatedType: string,
  relatedId: string | undefined,
  relatedItems: string
) => {
  return useInfiniteQuery({
    queryKey: [`related${relatedItems}`, relatedId],
    queryFn: ({ pageParam }) =>
      getData(`${relatedType!}/${relatedId}/${relatedItems}`, {
        params: { offset: pageParam },
      }),
    staleTime: 8 * 60 * 60 * 1000, // 8h,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) =>
      lastPage.items.length !== 0 && lastPage.next
        ? allPages.length * 20
        : undefined,
  });
};

export default useRelatedItems;
