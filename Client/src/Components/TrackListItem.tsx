import { HStack, Image, Text, Heading, Box } from "@chakra-ui/react";
import { Track } from "../interfaces/Track";
import durationFormater from "../services/durationFormater";

interface Props {
  item: Track;
}

const TrackListItem = ({ item }: Props) => {
  const { name, album, duration_ms } = item;
  return (
    <HStack paddingY={3} justifyContent={"space-between"}>
      <HStack>
        <Image
          borderRadius={10}
          height={"3em"}
          aspectRatio={1 / 1}
          objectFit={"cover"}
          src={album.images[0].url}
        />
        <Box>
          <Heading as={"h2"} size={"md"}>
            {name}
          </Heading>
          <Heading as={"h3"} size={"sm"} color={"gray.500"}>
            {item.artists[0].name}
          </Heading>
          <Heading as={"h3"} size={"sm"} color={"gray.500"}>
            {item.album.name}
          </Heading>
        </Box>
      </HStack>
      <Text textAlign={"right"} fontWeight={"bold"}>
        {durationFormater(duration_ms)}
      </Text>
    </HStack>
  );
};
export default TrackListItem;
