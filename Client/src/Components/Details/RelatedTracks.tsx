import InfiniteScroll from "react-infinite-scroll-component";
import useRelatedItems from "../../hooks/useRelatedItems";
import ItemGrid from "../Containers/ItemGrid";
import { Track } from "../../interfaces/Track";
import ScrollContainer from "../Containers/ScrollContainer";
import Heading2 from "../Headings/Heading2";
import SubSection from "../Containers/SubSection";
import CustomErrorComp from "../Error/CustomErrorComp";

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

  if (data?.pages[0].items.length === 0)
    return (
      <SubSection>
        <Heading2 isLoading={isLoading}>Albums</Heading2>
        <CustomErrorComp error={"No Related Artists Found"} />
      </SubSection>
    );

  return (
    <>
      <Heading2 paddingX={5} isLoading={isLoading || tracksLoading}>
        {track?.album.name + " tracks"}
      </Heading2>
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
            relatableId={track?.id}
            list
          />
        </InfiniteScroll>
      </ScrollContainer>
    </>
  );
};
export default RelatedTracks;
