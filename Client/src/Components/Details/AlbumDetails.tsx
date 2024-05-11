import AlbumDetailsCard from "./AlbumDetailsCard";
import ItemGrid from "../ItemGrid";
import Section from "../Section";
import { Album } from "../../interfaces/Album";
import RelatedAlbums from "./RelatedAlbums";
import Heading1 from "../Heading1";
import SubSection from "../SubSection";
import ItemCard from "../Cards/ItemCard";

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
          <SubSection>
            <Heading1>{isLoading ? "..." : album.name + " Tracks"}</Heading1>
            <ItemGrid list>
              {album?.tracks.items.map((item) => (
                <ItemCard details item={item} key={item.id} />
              ))}
            </ItemGrid>
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
