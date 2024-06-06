import { Artist } from "../../interfaces/Artist";
import { Album } from "../../interfaces/Album";
import useRelatedItems from "../../hooks/useRelatedItems";
import ItemGrid from "../Containers/ItemGrid";
import InfiniteScroll from "react-infinite-scroll-component";
import ScrollContainer from "../Containers/ScrollContainer";
import Heading2 from "../Headings/Heading2";
import CustomErrorComp from "../Error/CustomErrorComp";
import SubSection from "../Containers/SubSection";

interface Props {
  artist?: Artist;
  album?: Album;
  isLoading: boolean;
}

const RelatedAlbums = ({ artist, album, isLoading }: Props) => {
  const relatableId = artist?.id || album?.artists[0].id;
  const {
    data,
    isLoading: albumsLoading,
    hasNextPage,
    fetchNextPage,
  } = useRelatedItems<Album>("artists", relatableId, "albums");

  const itemCount =
    data?.pages.reduce((total, page) => total + page.items.length, 0) || 0;

  if (data?.pages[0].items.length === 0)
    return (
      <SubSection>
        <Heading2 isLoading={isLoading}>Albums</Heading2>
        <CustomErrorComp error={"No Related Albums Found"} />
      </SubSection>
    );

  return (
    <>
      <Heading2 paddingX={5} isLoading={isLoading || albumsLoading}>
        {artist?.name + " albums"}
      </Heading2>
      <ScrollContainer id="scroll-container-albums" maxHeight="55rem">
        <InfiniteScroll
          dataLength={albumsLoading ? 20 : itemCount}
          next={fetchNextPage}
          hasMore={hasNextPage}
          loader={<div>...loading</div>}
          endMessage={itemCount < 15 ? null : <div>No More Results</div>}
          scrollableTarget="scroll-container-albums"
        >
          <ItemGrid
            isLoading={isLoading || albumsLoading}
            relatedPages={data?.pages}
            relatableId={relatableId}
          />
        </InfiniteScroll>
      </ScrollContainer>
    </>
  );
};
export default RelatedAlbums;
