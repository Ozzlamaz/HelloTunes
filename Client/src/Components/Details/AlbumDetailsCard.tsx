import { CardBody, Heading, Image } from "@chakra-ui/react";
import { Album } from "../../interfaces/Album";
import dateFormater from "../../services/dateFormater";
import DetailsHeading from "./DetailsHeading";
import DetailsCard from "./DetailsCard";
import SkeletonCard from "../SkeletonCard";

interface Props {
  album?: Album;
  isLoading: boolean;
}

const AlbumDetailsCard = ({ album, isLoading }: Props) => {
  if (isLoading) return <SkeletonCard details />;
  return (
    <DetailsCard>
      <Image
        aspectRatio={1 / 1}
        width={320}
        margin={"auto"}
        borderRadius={5}
        src={album?.images[1].url}
      />
      <CardBody marginY={"auto"}>
        <Heading as={"h3"} size={"sm"}>
          {album?.type}
        </Heading>
        <Heading marginY={3} as={"h1"} size={"lg"}>
          {album?.name}
        </Heading>
        <DetailsHeading>
          Artists: {album?.artists.map((artist) => artist.name).join(", ")}
        </DetailsHeading>
        <DetailsHeading>Popularity: {album?.popularity}</DetailsHeading>
        <DetailsHeading>Tracks: {album?.total_tracks}</DetailsHeading>
        <DetailsHeading>
          Release Date: {dateFormater(album?.release_date)}
        </DetailsHeading>
      </CardBody>
    </DetailsCard>
  );
};
export default AlbumDetailsCard;
