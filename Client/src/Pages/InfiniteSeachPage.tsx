import { useParams } from "react-router-dom";
import ItemGrid from "../Components/ItemGrid";
import useInfiniteItems from "../hooks/useInfiniteItems";
import InfiniteScroll from "react-infinite-scroll-component";
import Section from "../Components/Section";
import SubSection from "../Components/SubSection";
import { SimpleGrid } from "@chakra-ui/react";
import ItemCard from "../Components/Cards/ItemCard";
import { useEffect, useState } from "react";
import { Album } from "../interfaces/Album";
import { Track } from "../interfaces/Track";
import { Artist } from "../interfaces/Artist";

const InfiniteSeachPage = () => {
  const params = useParams();

  const { data, fetchNextPage, hasNextPage, isLoading } =
    useInfiniteItems(params);

  console.log(data);
  const itemCount =
    data?.pages.reduce(
      (total, page) => total + page[`${params.type}s`].items.length,
      0
    ) || 0;

  return (
    <Section maxW="6xl">
      <SubSection>
        <InfiniteScroll
          dataLength={isLoading ? 20 : itemCount}
          next={fetchNextPage}
          hasMore={hasNextPage}
          loader={<div>...loading</div>}
          endMessage={<div>No More Results</div>}
        >
          {/* <ItemGrid
            isLoading={isLoading}
            skelCount={20}
            tracks={params.type === "track" && true}
            items={Items}
          /> */}
          <SimpleGrid spacing={5} columns={{ sm: 1, md: 3, lg: 4, xl: 5 }}>
            {data?.pages.map((page) =>
              page[`${params.type}s`].items.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))
            )}
          </SimpleGrid>
        </InfiniteScroll>
      </SubSection>
    </Section>
  );
};
export default InfiniteSeachPage;
