import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from "react-router-dom";
import useInfiniteItems from "../hooks/useInfiniteItems";
import ItemGrid from "../Components/ItemGrid";
import { Box } from "@chakra-ui/react";

const InfiniteSeachPage = () => {
  const params = useParams();

  const { data, fetchNextPage, hasNextPage } = useInfiniteItems(params);

  if (!data) return <div>Loading...</div>;

  const itemCount = data.pages.reduce(
    (total, page) => total + page[`${params.type}s`].items.length,
    0
  );

  const Items = data.pages.reduce(
    (allItems: any[], page) => [...allItems, ...page[`${params.type}s`].items],
    []
  );

  return (
    <Box marginY={5}>
      <InfiniteScroll
        dataLength={itemCount}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={<div>...loading</div>}
        endMessage={<div>No More Results</div>}
      >
        <ItemGrid tracks={params.type === "track" && true} items={Items} />
      </InfiniteScroll>
    </Box>
  );
};
export default InfiniteSeachPage;
