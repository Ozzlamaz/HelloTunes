import { CardBody, Image } from "@chakra-ui/react";
import { Album } from "../../interfaces/Album";
import dateFormater from "../../services/dateFormater";
import DetailsHeading from "./DetailsHeading";
import DetailsCard from "./DetailsCard";
import SkeletonCard from "../SkeletonCard";
import Heading1 from "../Headings/Heading1";
import Heading3 from "../Headings/Heading3";

interface Props {
  album?: Album;
  isLoading: boolean;
}

const AlbumDetailsCard = ({ album, isLoading }: Props) => {
  if (isLoading) return <SkeletonCard detailsCard />;
  return (
    <DetailsCard imageSrc={album?.images[0].url}>
      <Image
        aspectRatio={1 / 1}
        height={"22rem"}
        margin={"auto"}
        borderRadius={5}
        src={album?.images[1].url}
      />
      <CardBody marginY={"auto"}>
        <Heading3 isLoading={isLoading}>{album?.type}</Heading3>
        <Heading1 isLoading={isLoading}>{album?.name}</Heading1>
        <DetailsHeading detail="Artist/s">
          {album?.artists.map((artist) => artist.name) || []}
        </DetailsHeading>
        <DetailsHeading detail="Popularity">
          {[album?.popularity]}
        </DetailsHeading>
        <DetailsHeading detail="Tracks">{[album?.total_tracks]}</DetailsHeading>
        <DetailsHeading detail="Release Date">
          {[dateFormater(album?.release_date)]}
        </DetailsHeading>
      </CardBody>
    </DetailsCard>
  );
};
export default AlbumDetailsCard;
