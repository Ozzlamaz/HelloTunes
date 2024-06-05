import { Box, Image, Text, HStack } from "@chakra-ui/react";
import { Track } from "../../interfaces/Track";
import durationFormater from "../../services/durationFormater";
import CardHeading from "./CardHeading";
import PHTrack from "../../assets/placeholders/PHTrack.webp";

interface Props {
  track: Track;
  details?: boolean;
}

const TrackCardBody = ({ track, details }: Props) => {
  return (
    <HStack height={"3em"} justifyContent={"space-between"}>
      <HStack overflow={"hidden"}>
        {!details && (
          <Image
            borderRadius={10}
            aspectRatio={1 / 1}
            objectFit={"cover"}
            height={"3em"}
            src={track.album.images[2]?.url || PHTrack}
            alt={""}
          />
        )}
        <Box overflow={"hidden"}>
          <CardHeading size={"sm"} as={"h2"}>
            {track.name}
          </CardHeading>
          {!details && (
            <CardHeading as={"h3"} size={"sm"} color={"gray.500"}>
              {track.artists[0].name}
            </CardHeading>
          )}
        </Box>
      </HStack>
      <Text as={"span"} fontWeight={"bold"}>
        {durationFormater(track.duration_ms)}
      </Text>
    </HStack>
  );
};
export default TrackCardBody;
