import { Box, Heading, Image, Tooltip, Text, HStack } from "@chakra-ui/react";
import { Track } from "../interfaces/Track";
import durationFormater from "../services/durationFormater";

interface Props {
  item: Track;
}

const TrackCardBody = ({ item }: Props) => {
  return (
    <HStack justifyContent={"space-between"}>
      <HStack>
        <Image
          borderRadius={10}
          height={"3em"}
          aspectRatio={1 / 1}
          objectFit={"cover"}
          src={item.album.images[2].url}
        />
        <Box>
          <Tooltip label={item.name}>
            <Heading size={"sm"} as={"h2"}>
              {item.name.length > 20
                ? item.name.substring(0, 20) + "..."
                : item.name}
            </Heading>
          </Tooltip>
          <Tooltip>
            <Heading as={"h3"} size={"sm"} color={"gray.500"}>
              {item.artists[0].name}
            </Heading>
          </Tooltip>
          <Tooltip>
            <Heading as={"h3"} size={"sm"} color={"gray.500"}>
              {item.album.name}
            </Heading>
          </Tooltip>
        </Box>
      </HStack>
      <Text fontWeight={"bold"}>{durationFormater(item.duration_ms)}</Text>
    </HStack>
  );
};
export default TrackCardBody;
