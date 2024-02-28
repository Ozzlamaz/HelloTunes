import { Card, CardBody } from "@chakra-ui/card";
import CardContainer from "./CardContainer";
import { Album } from "../interfaces/Album";
import { Artist } from "../interfaces/Artist";
import { Track } from "../interfaces/Track";
import AlbumCardBody from "./AlbumCardBody";
import ArtistCardBody from "./ArtistCardBody";
import TrackCardBody from "./TrackCardBody";

interface Props {
  item?: Album | Artist | Track;
  topResult?: true;
}

const ItemCard = ({ item, topResult }: Props) => {
  return (
    <CardContainer>
      <Card>
        <CardBody padding={5}>
          {item?.type === "album" ? (
            <AlbumCardBody item={item} />
          ) : item?.type === "artist" ? (
            <ArtistCardBody topResult={topResult} item={item} />
          ) : item?.type === "track" ? (
            <TrackCardBody item={item} />
          ) : null}
        </CardBody>
      </Card>
    </CardContainer>
  );
};
export default ItemCard;
