import { CardBody, Image } from "@chakra-ui/react";
import { Artist } from "../../interfaces/Artist";
import SkeletonCard from "../SkeletonCard";
import DetailsCard from "./DetailsCard";
import Heading1 from "../Headings/Heading1";
import Heading3 from "../Headings/Heading3";
import PHArtist from "../../assets/placeholders/PHArtist.webp";
import DetailsListing from "./DetailsListing";

interface Props {
  artist?: Artist;
  isLoading: boolean;
}

const ArtistDetailsCard = ({ artist, isLoading }: Props) => {
  if (isLoading) return <SkeletonCard detailsCard />;
  if (artist)
    return (
      <DetailsCard imageSrc={artist.images[0]?.url || PHArtist}>
        <Image
          aspectRatio={1 / 1}
          height={"20rem"}
          objectFit={"cover"}
          margin={"auto"}
          borderRadius={5}
          src={artist.images[1]?.url || PHArtist}
          color={"#000"}
          alt={""}
        />
        <CardBody marginY={"auto"}>
          <Heading3 isLoading={isLoading}>{artist.type}</Heading3>
          <Heading1 isLoading={isLoading}>{artist.name}</Heading1>
          <DetailsListing
            heading="Genres"
            detailArr={artist.genres.length > 0 ? artist.genres : ["Unknown"]}
          />
          <DetailsListing heading="Popularity" detail={artist.popularity} />
          <DetailsListing
            heading="Followers"
            detail={artist?.followers.total.toLocaleString()}
          />
        </CardBody>
      </DetailsCard>
    );
};
export default ArtistDetailsCard;
