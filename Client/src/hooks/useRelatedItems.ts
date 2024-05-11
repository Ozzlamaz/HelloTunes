import { useInfiniteQuery } from "@tanstack/react-query";
import getData from "../services/apiClient";
import { RelatedItemsRes } from "../interfaces/RelatedItemsRes";
import { Track } from "../interfaces/Track";
import { Artist } from "../interfaces/Artist";
import { Album } from "../interfaces/Album";

const useRelatedItems = (
  relatedType: string,
  relatedId: string | undefined,
  relatedItems: string
) =>
  useInfiniteQuery<RelatedItemsRes<Album | Artist | Track>>({
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

export default useRelatedItems;
