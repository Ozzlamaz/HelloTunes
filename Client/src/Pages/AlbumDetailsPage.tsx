import AlbumDetailsCard from "../Components/Details/AlbumDetailsCard";
import ItemGrid from "../Components/Containers/ItemGrid";
import Section from "../Components/Containers/Section";
import { Album } from "../interfaces/Album";
import RelatedAlbums from "../Components/Details/RelatedAlbums";
import SubSection from "../Components/Containers/SubSection";
import { useParams } from "react-router-dom";
import useItemDetails from "../hooks/useItemDetails";
import ScrollContainer from "../Components/Containers/ScrollContainer";
import Heading2 from "../Components/Headings/Heading2";
import ResponseErrorComp from "../Components/Error/ResponseErrorComp";

const AlbumDetailsPage = () => {
  const { id } = useParams();
  const {
    data: album,
    isLoading,
    error,
  } = useItemDetails<Album>("albums", id!);

  if (error) return <ResponseErrorComp error={error} />;

  return (
    <>
      <Section>
        <AlbumDetailsCard isLoading={isLoading} album={album} />
      </Section>
      <Section maxW={"6xl"}>
        <SubSection>
          <Heading2 paddingX={5} isLoading={isLoading}>
            {album?.name + " Tracks"}
          </Heading2>
          <ScrollContainer id="scroll-container-tracks" maxHeight="55rem">
            <ItemGrid
              isLoading={isLoading}
              details
              items={album?.tracks.items}
              list
            />
          </ScrollContainer>
        </SubSection>
        <SubSection>
          <RelatedAlbums artist={album?.artists[0]} isLoading={isLoading} />
        </SubSection>
      </Section>
    </>
  );
};
export default AlbumDetailsPage;
