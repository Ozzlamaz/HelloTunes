import { Box, CardBody, Heading, Image, Stack } from "@chakra-ui/react";
import { Track } from "../../interfaces/Track";
import SkeletonCard from "../SkeletonCard";
import DetailsCard from "./DetailsCard";
import DetailsHeading from "./DetailsHeading";
import durationFormater from "../../services/durationFormater";
import audio from "../../assets/Course Structure.mp4";

interface Props {
  track: Track;
  isLoading: boolean;
}

const TrackDetailsCard = ({ track, isLoading }: Props) => {
  if (isLoading) return <SkeletonCard details />;
  return (
    <DetailsCard>
      <Image
        width={320}
        height={320}
        marginX={"auto"}
        borderRadius={5}
        src={track?.album.images[1].url}
      />
      <CardBody marginY={"auto"}>
        <Heading as={"h3"} size={"sm"}>
          {track.type}
        </Heading>
        <Heading as={"h1"} size={"lg"}>
          {track.name}
        </Heading>
        <DetailsHeading>Album: {track.album.name}</DetailsHeading>
        <DetailsHeading>
          Artist/s: {track?.artists.map((artist) => artist.name).join(", ")}
        </DetailsHeading>
        <DetailsHeading>Popularity: {track?.popularity}</DetailsHeading>
        <DetailsHeading>
          Duration: {durationFormater(track.duration_ms)}
        </DetailsHeading>
        <audio controls src={audio} />
      </CardBody>
    </DetailsCard>
  );
};
export default TrackDetailsCard;
