import useRelatedItems from "../../hooks/useRelatedItems";
import { Artist } from "../../interfaces/Artist";
import ItemGrid from "../ItemGrid";
import Heading1 from "../Heading1";
import SubSection from "../SubSection";
import InfiniteScroll from "react-infinite-scroll-component";
import ItemCard from "../Cards/ItemCard";

interface Props {
  artist?: Artist;
  isLoading: boolean;
}

const RelatedAlbums = ({ artist, isLoading }: Props) => {
  const {
    data,
    isLoading: albumsLoading,
    hasNextPage,
    fetchNextPage,
  } = useRelatedItems("artists", artist?.id, "albums");

  const itemCount =
    data?.pages.reduce((total, page) => total + page.items.length, 0) || 0;

  return (
    <SubSection id="scrollableDiv" height="55rem">
      <Heading1>{isLoading ? "Loading..." : artist?.name + " albums"}</Heading1>
      <InfiniteScroll
        dataLength={albumsLoading ? 20 : itemCount}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={<div>...loading</div>}
        endMessage={<div>No More Results</div>}
        scrollableTarget="scrollableDiv"
      >
        <ItemGrid>
          {data?.pages.map((page) =>
            page.items.map((item) => <ItemCard item={item} key={item.id} />)
          )}
        </ItemGrid>
      </InfiniteScroll>
    </SubSection>
  );
};
export default RelatedAlbums;
