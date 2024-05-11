import AlbumDetailsCard from "./AlbumDetailsCard";
import ItemGrid from "../ItemGrid";
import Section from "../Section";
import { Album } from "../../interfaces/Album";
import RelatedAlbums from "./RelatedAlbums";
import Heading1 from "../Heading1";
import SubSection from "../SubSection";

interface Props {
  album: Album;
  isLoading: boolean;
}

const AlbumDetails = ({ album, isLoading }: Props) => {
  return (
    <>
      <Section>
        <AlbumDetailsCard isLoading={isLoading} album={album} />
      </Section>
      <Section maxW={"6xl"}>
        <Section>
          <Heading1>{isLoading ? "..." : album.name + " Tracks"}</Heading1>
          <SubSection>
            <ItemGrid
              isLoading={isLoading}
              skelCount={5}
              tracks
              details
              items={album?.tracks.items}
            />
          </SubSection>
        </Section>
        <Section>
          <RelatedAlbums artist={album?.artists[0]} isLoading={isLoading} />
        </Section>
      </Section>
    </>
  );
};
export default AlbumDetails;
