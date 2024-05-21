import { CardBody, Heading, Image } from "@chakra-ui/react";
import { Artist } from "../../interfaces/Artist";
import SkeletonCard from "../SkeletonCard";
import DetailsCard from "./DetailsCard";
import DetailsHeading from "./DetailsHeading";

interface Props {
  artist?: Artist;
  isLoading: boolean;
}

const ArtistDetailsCard = ({ artist, isLoading }: Props) => {
  if (isLoading) return <SkeletonCard details />;
  return (
    <DetailsCard>
      <Image
        aspectRatio={1 / 1}
        width={320}
        margin={"auto"}
        borderRadius={5}
        src={artist?.images[1].url}
      />
      <CardBody marginY={"auto"}>
        <Heading as={"h3"} size={"sm"}>
          {artist?.type}
        </Heading>
        <Heading as={"h1"} size={"lg"}>
          {artist?.name}
        </Heading>
        <DetailsHeading>
          Genres: {artist?.genres.join(", ") || "Unknown"}
        </DetailsHeading>
        <DetailsHeading>Popularity: {artist?.popularity}</DetailsHeading>
        <DetailsHeading>Followers: {artist?.followers.total}</DetailsHeading>
      </CardBody>
    </DetailsCard>
  );
};
export default ArtistDetailsCard;
