import ArtistDetailsCard from "../Components/Details/ArtistDetailsCard";
import Section from "../Components/Containers/Section";
import { Artist } from "../interfaces/Artist";
import RelatedAlbums from "../Components/Details/RelatedAlbums";
import useItemDetails from "../hooks/useItemDetails";
import { useParams } from "react-router-dom";
import SubSection from "../Components/Containers/SubSection";

const ArtistDetailsPage = () => {
  const { id } = useParams();
  const { data: artist, isLoading } = useItemDetails<Artist>("artists", id!);
  return (
    <>
      <Section>
        <ArtistDetailsCard isLoading={isLoading} artist={artist} />
      </Section>
      <Section maxW="6xl">
        <SubSection>
          <RelatedAlbums artist={artist} isLoading={isLoading} />
        </SubSection>
      </Section>
    </>
  );
};
export default ArtistDetailsPage;
