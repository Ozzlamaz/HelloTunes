import InfiniteScroll from "react-infinite-scroll-component";
import useRelatedItems from "../../hooks/useRelatedItems";
import Heading1 from "../Heading1";
import ItemGrid from "../Containers/ItemGrid";
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
      <Heading1 isLoading={isLoading || tracksLoading}>
        {track?.album.name + " tracks"}
      </Heading1>
      <ScrollContainer id="scroll-container-tracks" maxHeight="55rem">
        <InfiniteScroll
          dataLength={tracksLoading ? 20 : itemCount}
          next={fetchNextPage}
          hasMore={hasNextPage}
          loader={<div>...loading</div>}
          endMessage={itemCount < 15 ? null : <div>No More Results</div>}
          scrollableTarget="scroll-container-tracks"
        >
          <ItemGrid
            isLoading={isLoading || tracksLoading}
            details
            relatedPages={data?.pages}
            list
          />
        </InfiniteScroll>
      </ScrollContainer>
    </>
  );
};
export default RelatedTracks;
