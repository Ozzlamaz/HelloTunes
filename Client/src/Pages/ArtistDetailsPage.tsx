import ArtistDetailsCard from "../Components/Details/ArtistDetailsCard";
import Section from "../Components/Section";
import { Artist } from "../interfaces/Artist";
import RelatedAlbums from "../Components/Details/RelatedAlbums";
import useItemDetails from "../hooks/useItemDetails";
import { useParams } from "react-router-dom";

const ArtistDetailsPage = () => {
  const { id } = useParams();
  const { data: artist, isLoading } = useItemDetails<Artist>("artists", id!);
  return (
    <>
      <Section>
        <ArtistDetailsCard isLoading={isLoading} artist={artist} />
      </Section>
      <Section maxW="6xl">
        <Section>
          <RelatedAlbums artist={artist} isLoading={isLoading} />
        </Section>
      </Section>
    </>
  );
};
export default ArtistDetailsPage;
