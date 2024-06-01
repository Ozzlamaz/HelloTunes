import { CardBody, Heading, Image } from "@chakra-ui/react";
import { Track } from "../../interfaces/Track";
import SkeletonCard from "../SkeletonCard";
import DetailsCard from "./DetailsCard";
import DetailsListing from "./DetailsListing";
import durationFormater from "../../services/durationFormater";
import Heading1 from "../Headings/Heading1";
import PHTrack from "../../assets/placeholders/PHTrack.webp";

interface Props {
  track?: Track;
  isLoading: boolean;
}

const TrackDetailsCard = ({ track, isLoading }: Props) => {
  if (isLoading) return <SkeletonCard detailsCard />;
  if (track)
    return (
      <DetailsCard imageSrc={track.album.images[0]?.url || PHTrack}>
        <Image
          aspectRatio={1 / 1}
          height={"20rem"}
          objectFit={"cover"}
          margin={"auto"}
          borderRadius={5}
          src={track.album.images[1]?.url}
          background={`url(${PHTrack})`}
          bgSize={"cover"}
          alt={""}
        />
        <CardBody marginY={"auto"}>
          <Heading
            textAlign={{ base: "center", sm: "left" }}
            as={"h3"}
            size={"sm"}
          >
            {track.type}
          </Heading>
          <Heading1 isLoading={isLoading}>{track.name}</Heading1>
          <DetailsListing
            heading="Album"
            detailWithLinks={[
              {
                name: track.album.name,
                id: track.album.id,
                type: track.album.type,
              },
            ]}
          />
          <DetailsListing
            heading="Artist/s"
            detailWithLinks={track.artists.map((artist) => ({
              name: artist.name,
              id: artist.id,
              type: artist.type,
            }))}
          />
          <DetailsListing heading="Popularity" detail={track.popularity} />
          <DetailsListing
            heading="Duration"
            detail={durationFormater(track.duration_ms)}
          />
        </CardBody>
      </DetailsCard>
    );
};
export default TrackDetailsCard;
