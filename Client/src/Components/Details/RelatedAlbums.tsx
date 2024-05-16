import useRelatedItems from "../../hooks/useRelatedItems";
import { Artist } from "../../interfaces/Artist";
import ItemGrid from "../Containers/ItemGrid";
import Heading1 from "../Heading1";
import InfiniteScroll from "react-infinite-scroll-component";
import ItemCard from "../Cards/ItemCard";
import { Album } from "../../interfaces/Album";
import ScrollContainer from "../Containers/ScrollContainer";

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
  } = useRelatedItems<Album>("artists", artist?.id, "albums");

  const itemCount =
    data?.pages.reduce((total, page) => total + page.items.length, 0) || 0;

  return (
    <>
      <Heading1>{isLoading ? "..." : artist?.name + " albums"}</Heading1>
      <ScrollContainer id="scroll-container" maxHeight="55rem">
        <InfiniteScroll
          dataLength={albumsLoading ? 20 : itemCount}
          next={fetchNextPage}
          hasMore={hasNextPage}
          loader={<div>...loading</div>}
          endMessage={itemCount < 15 ? null : <div>No More Results</div>}
          scrollableTarget="scroll-container"
        >
          <ItemGrid>
            {data?.pages.map((page) =>
              page.items.map((item) => <ItemCard item={item} key={item.id} />)
            )}
          </ItemGrid>
        </InfiniteScroll>
      </ScrollContainer>
    </>
  );
};
export default RelatedAlbums;
