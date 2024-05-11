import useRelatedItems from "../../hooks/useRelatedItems";
import { Artist } from "../../interfaces/Artist";
import ItemGrid from "../ItemGrid";
import Section from "../Section";
import CustomHeading from "../Heading1";
import SubSection from "../SubSection";
import InfiniteScroll from "react-infinite-scroll-component";
import { Album } from "../../interfaces/Album";

interface Props {
  artist: Artist;
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

  const Items: Album[] = data?.pages.reduce(
    (allItems: Album[], page) => [...allItems, ...page.items],
    []
  );

  return (
    <Section>
      <CustomHeading>
        {isLoading ? "Loading..." : artist.name + " albums"}
      </CustomHeading>
      <SubSection id="scrollableDiv" height="51.65rem">
        <InfiniteScroll
          dataLength={albumsLoading ? 20 : itemCount}
          next={fetchNextPage}
          hasMore={hasNextPage}
          loader={<div>...loading</div>}
          endMessage={<div>No More Results</div>}
          scrollableTarget="scrollableDiv"
        >
          <ItemGrid
            isLoading={isLoading || albumsLoading}
            skelCount={20}
            items={Items}
          />
        </InfiniteScroll>
      </SubSection>
    </Section>
  );
};
export default RelatedAlbums;
