import ArtistDetailsCard from "../Components/Details/ArtistDetailsCard";
import Section from "../Components/Containers/Section";
import { Artist } from "../interfaces/Artist";
import RelatedAlbums from "../Components/Details/RelatedAlbums";
import useItemDetails from "../hooks/useItemDetails";
import { useParams } from "react-router-dom";
import SubSection from "../Components/Containers/SubSection";
import ResponseErrorComp from "../Components/Error/ResponseErrorComp";

const ArtistDetailsPage = () => {
  const { id } = useParams();
  const {
    data: artist,
    isLoading,
    error,
  } = useItemDetails<Artist>("artists", id!);

  if (error) return <ResponseErrorComp error={error} />;

  return (
    <>
      <Section>
        <ArtistDetailsCard isLoading={isLoading} artist={artist} />
      </Section>
      <Section>
        <SubSection>
          <RelatedAlbums artist={artist} isLoading={isLoading} />
        </SubSection>
      </Section>
    </>
  );
};
export default ArtistDetailsPage;
