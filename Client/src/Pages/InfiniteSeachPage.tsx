import { useParams } from "react-router-dom";
import ItemGrid from "../Components/ItemGrid";
import useInfiniteItems from "../hooks/useInfiniteItems";
import InfiniteScroll from "react-infinite-scroll-component";
import Section from "../Components/Section";
import SubSection from "../Components/SubSection";
import ItemCard from "../Components/Cards/ItemCard";
import Heading1 from "../Components/Heading1";

const InfiniteSeachPage = () => {
  const params = useParams();

  const { data, fetchNextPage, hasNextPage, isLoading } =
    useInfiniteItems(params);

  const itemCount =
    data?.pages.reduce(
      (total, page) => total + page[`${params.type}s`].items.length,
      0
    ) || 0;

  return (
    <Section maxW="6xl">
      <SubSection>
        <Heading1>{isLoading ? "..." : `${params.q} ${params.type}s`}</Heading1>
        <InfiniteScroll
          dataLength={isLoading ? 20 : itemCount}
          next={fetchNextPage}
          hasMore={hasNextPage}
          loader={<div>...loading</div>}
          endMessage={<div>No More Results</div>}
        >
          <ItemGrid list={params.type === "track" && true}>
            {data?.pages.map((page) =>
              page[`${params.type}s`].items.map((item) => (
                <ItemCard key={item.id} item={item} />
              ))
            )}
          </ItemGrid>
        </InfiniteScroll>
      </SubSection>
    </Section>
  );
};
export default InfiniteSeachPage;
