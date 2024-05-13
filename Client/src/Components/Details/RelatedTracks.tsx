import InfiniteScroll from "react-infinite-scroll-component";
import useRelatedItems from "../../hooks/useRelatedItems";
import SubSection from "../SubSection";
import Heading1 from "../Heading1";
import ItemGrid from "../ItemGrid";
import ItemCard from "../Cards/ItemCard";
import { Track } from "../../interfaces/Track";

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
    <SubSection
      id="scrollableDiv"
      height={itemCount < 15 ? "fit-content" : "55rem"}
    >
      <Heading1>{isLoading ? "..." : track?.album.name + " tracks"}</Heading1>
      <InfiniteScroll
        dataLength={tracksLoading ? 20 : itemCount}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={<div>...loading</div>}
        endMessage={itemCount < 15 ? null : <div>No More Results</div>}
        scrollableTarget="scrollableDiv"
      >
        <ItemGrid list>
          {data?.pages.map((page) =>
            page.items.map((item) => (
              <ItemCard details item={item} key={item.id} />
            ))
          )}
        </ItemGrid>
      </InfiniteScroll>
    </SubSection>
  );
};
export default RelatedTracks;
