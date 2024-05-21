import { Card, CardBody } from "@chakra-ui/card";
import { Album } from "../../interfaces/Album";
import { Artist } from "../../interfaces/Artist";
import { Track } from "../../interfaces/Track";
import AlbumCardBody from "./AlbumCardBody";
import ArtistCardBody from "./ArtistCardBody";
import TrackCardBody from "./TrackCardBody";
import { Link } from "react-router-dom";

interface Props {
  item?: Album | Artist | Track;
  topResult?: true;
  details?: boolean;
}

const ItemCard = ({ item, topResult, details }: Props) => {
  return (
    <Link to={`/details/${item?.type}/${item?.id}`}>
      <Card
        boxShadow={"lg"}
        transition="background-color 0.2s ease-in"
        _hover={{ backgroundColor: "blackAlpha.50" }}
      >
        <CardBody padding={3}>
          {item?.type === "album" ? (
            <AlbumCardBody item={item} />
          ) : item?.type === "artist" ? (
            <ArtistCardBody topResult={topResult} item={item} />
          ) : item?.type === "track" ? (
            <TrackCardBody details={details} item={item} />
          ) : null}
        </CardBody>
      </Card>
    </Link>
  );
};
export default ItemCard;
