import { Box, Image, Text, HStack } from "@chakra-ui/react";
import { Track } from "../../interfaces/Track";
import durationFormater from "../../services/durationFormater";
import CardHeading from "./CardHeading";

interface Props {
  item: Track;
  details?: boolean;
}

const TrackCardBody = ({ item, details }: Props) => {
  return (
    <HStack height={"3em"} justifyContent={"space-between"}>
      <HStack overflow={"hidden"}>
        {!details && (
          <Image
            borderRadius={10}
            aspectRatio={1 / 1}
            objectFit={"cover"}
            height={"3em"}
            src={item.album.images[2].url}
          />
        )}
        <Box overflow={"hidden"}>
          <CardHeading size={"sm"} as={"h2"}>
            {item.name}
          </CardHeading>
          {!details && (
            <CardHeading as={"h3"} size={"sm"} color={"gray.500"}>
              {item.artists[0].name}
            </CardHeading>
          )}
        </Box>
      </HStack>
      <Text as={"span"} fontWeight={"bold"}>
        {durationFormater(item.duration_ms)}
      </Text>
    </HStack>
  );
};
export default TrackCardBody;
