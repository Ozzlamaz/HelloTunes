import { CardBody, Image } from "@chakra-ui/react";
import { Artist } from "../../interfaces/Artist";
import SkeletonCard from "../SkeletonCard";
import DetailsCard from "./DetailsCard";
import DetailsHeading from "./DetailsHeading";
import Heading1 from "../Headings/Heading1";
import Heading3 from "../Headings/Heading3";

interface Props {
  artist?: Artist;
  isLoading: boolean;
}

const ArtistDetailsCard = ({ artist, isLoading }: Props) => {
  if (isLoading) return <SkeletonCard detailsCard />;
  return (
    <DetailsCard imageSrc={artist?.images[0].url}>
      <Image
        aspectRatio={1 / 1}
        height={"20rem"}
        objectFit={"cover"}
        margin={"auto"}
        borderRadius={5}
        src={artist?.images[1].url}
      />
      <CardBody marginY={"auto"}>
        <Heading3 isLoading={isLoading}>{artist?.type}</Heading3>
        <Heading1 isLoading={isLoading}>{artist?.name}</Heading1>
        <DetailsHeading detail="Genres">
          {artist?.genres || ["Unknown"]}
        </DetailsHeading>
        <DetailsHeading detail="Popularity">
          {[artist?.popularity]}
        </DetailsHeading>
        <DetailsHeading detail="Followers">
          {artist ? [parseInt(artist?.followers.total).toLocaleString()] : []}
        </DetailsHeading>
      </CardBody>
    </DetailsCard>
  );
};
export default ArtistDetailsCard;
