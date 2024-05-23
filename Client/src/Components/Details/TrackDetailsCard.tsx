import { CardBody, Heading, Image } from "@chakra-ui/react";
import { Track } from "../../interfaces/Track";
import SkeletonCard from "../SkeletonCard";
import DetailsCard from "./DetailsCard";
import DetailsHeading from "./DetailsHeading";
import durationFormater from "../../services/durationFormater";
import Heading1 from "../Headings/Heading1";

interface Props {
  track?: Track;
  isLoading: boolean;
}

const TrackDetailsCard = ({ track, isLoading }: Props) => {
  if (isLoading) return <SkeletonCard detailsCard />;
  return (
    <DetailsCard>
      <Image
        aspectRatio={1 / 1}
        height={"21rem"}
        margin={"auto"}
        borderRadius={5}
        src={track?.album.images[1].url}
      />
      <CardBody marginY={"auto"}>
        <Heading
          textAlign={{ base: "center", sm: "left" }}
          as={"h3"}
          size={"sm"}
        >
          {track?.type}
        </Heading>
        <Heading1 isLoading={isLoading}>{track?.name}</Heading1>
        <DetailsHeading detail="Album">{[track?.album.name]}</DetailsHeading>
        <DetailsHeading detail="Artist/s">
          {[track?.artists.map((artist) => artist.name) || []]}
        </DetailsHeading>
        <DetailsHeading detail="Popularity">
          {[track?.popularity]}
        </DetailsHeading>
        <DetailsHeading detail="Duration">
          {[durationFormater(track?.duration_ms)]}
        </DetailsHeading>
      </CardBody>
    </DetailsCard>
  );
};
export default TrackDetailsCard;
