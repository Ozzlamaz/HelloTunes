import AlbumDetailsCard from "../Components/Details/AlbumDetailsCard";
import ItemGrid from "../Components/ItemGrid";
import Section from "../Components/Section";
import { Album } from "../interfaces/Album";
import RelatedAlbums from "../Components/Details/RelatedAlbums";
import Heading1 from "../Components/Heading1";
import SubSection from "../Components/SubSection";
import ItemCard from "../Components/Cards/ItemCard";
import { useParams } from "react-router-dom";
import useItemDetails from "../hooks/useItemDetails";

const AlbumDetailsPage = () => {
  const { id } = useParams();
  const { data: album, isLoading } = useItemDetails<Album>("albums", id!);
  return (
    <>
      <Section>
        <AlbumDetailsCard isLoading={isLoading} album={album} />
      </Section>
      <Section maxW={"6xl"}>
        <Section>
          <SubSection>
            <Heading1>{isLoading ? "..." : album?.name + " Tracks"}</Heading1>
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
export default AlbumDetailsPage;
