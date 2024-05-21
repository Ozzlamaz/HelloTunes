import { Box, Heading, Image, Tooltip, Text, HStack } from "@chakra-ui/react";
import { Track } from "../../interfaces/Track";
import durationFormater from "../../services/durationFormater";
import shortName from "../../services/shortName";

interface Props {
  item: Track;
  details?: boolean;
}

const TrackCardBody = ({ item, details }: Props) => {
  return (
    <HStack height={"3em"} justifyContent={"space-between"}>
      <HStack>
        {!details && (
          <Image
            borderRadius={10}
            aspectRatio={1 / 1}
            objectFit={"cover"}
            height={"3em"}
            src={item.album.images[2].url}
          />
        )}
        <Box>
          <Tooltip label={item.name}>
            <Heading size={"sm"} as={"h2"}>
              {shortName(item.name)}
            </Heading>
          </Tooltip>
          {!details && (
            <Tooltip label={item.artists[0].name}>
              <Heading as={"h3"} size={"sm"} color={"gray.500"}>
                {item.artists[0].name}
              </Heading>
            </Tooltip>
          )}
        </Box>
      </HStack>
      <Text fontWeight={"bold"}>{durationFormater(item.duration_ms)}</Text>
    </HStack>
  );
};
export default TrackCardBody;
