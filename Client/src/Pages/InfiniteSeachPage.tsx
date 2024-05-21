import { useParams } from "react-router-dom";
import ItemGrid from "../Components/Containers/ItemGrid";
import useInfiniteItems from "../hooks/useInfiniteItems";
import InfiniteScroll from "react-infinite-scroll-component";
import Section from "../Components/Containers/Section";
import SubSection from "../Components/Containers/SubSection";
import Heading1 from "../Components/Heading1";
import ScrollContainer from "../Components/Containers/ScrollContainer";

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
        <ScrollContainer id="scroll-container" maxHeight="55rem">
          <InfiniteScroll
            dataLength={isLoading ? 20 : itemCount}
            next={fetchNextPage}
            hasMore={hasNextPage}
            loader={<div>...loading</div>}
            endMessage={<div>No More Results</div>}
            scrollableTarget="scroll-container"
          >
            {/* prettier-ignore*/}
            <ItemGrid isLoading={isLoading} pages={data?.pages} list={params.type === "track" && true}/>
          </InfiniteScroll>
        </ScrollContainer>
      </SubSection>
    </Section>
  );
};
export default InfiniteSeachPage;
