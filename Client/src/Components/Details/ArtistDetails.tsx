import ArtistDetailsCard from "./ArtistDetailsCard";
import Section from "../Section";
import { Artist } from "../../interfaces/Artist";
import RelatedAlbums from "./RelatedAlbums";

interface Props {
  artist: Artist;
  isLoading: boolean;
}

const ArtistDetails = ({ artist, isLoading }: Props) => {
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
export default ArtistDetails;
