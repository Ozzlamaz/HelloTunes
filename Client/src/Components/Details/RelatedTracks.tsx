import InfiniteScroll from "react-infinite-scroll-component";
import useRelatedItems from "../../hooks/useRelatedItems";
import Heading1 from "../Heading1";
import ItemGrid from "../Containers/ItemGrid";
import ItemCard from "../Cards/ItemCard";
import { Track } from "../../interfaces/Track";
import ScrollContainer from "../Containers/ScrollContainer";

interface Props {
  track?: Track;
  isLoading: boolean;
}

const RelatedTracks = ({ track, isLoading }: Props) => {
  const {
    data,
    isLoading: tracksLoading,
    hasNextPage,
    fetchNextPage,
  } = useRelatedItems<Track>("albums", track?.album.id, "tracks");

  const itemCount =
    data?.pages.reduce((total, page) => total + page.items.length, 0) || 0;
  return (
    <>
      <Heading1>{isLoading ? "..." : track?.album.name + " tracks"}</Heading1>
      <ScrollContainer id="scroll-container" maxHeight="55rem">
        <InfiniteScroll
          dataLength={tracksLoading ? 20 : itemCount}
          next={fetchNextPage}
          hasMore={hasNextPage}
          loader={<div>...loading</div>}
          endMessage={itemCount < 15 ? null : <div>No More Results</div>}
          scrollableTarget="scroll-container"
        >
          <ItemGrid list>
            {data?.pages.map((page) =>
              page.items.map((item) => (
                <ItemCard details item={item} key={item.id} />
              ))
            )}
          </ItemGrid>
        </InfiniteScroll>
      </ScrollContainer>
    </>
  );
};
export default RelatedTracks;
