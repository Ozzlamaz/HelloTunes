import { Box, Heading } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Album } from "../interfaces/Album";
import { Artist } from "../interfaces/Artist";
import { Tooltip } from "@chakra-ui/react";

interface Props {
  item: Album | Artist;
  topResult?: boolean;
}

const ItemCardBody = ({ item, topResult }: Props) => {
  const { name, type, images } = item;

  return (
    <Box>
      <Image
        aspectRatio={1 / 1}
        marginX={"auto"}
        width={"100%"}
        objectFit={"cover"}
        borderRadius={type === "album" ? "50%" : "10%"}
        src={topResult ? images[0]?.url : images[1]?.url}
      />
      <Box paddingY={3}>
        <Tooltip label={name}>
          <Heading fontSize={topResult ? 32 : 16} as={"h2"}>
            {name.length > 20 ? name.substring(0, 20) + "..." : name}
          </Heading>
        </Tooltip>
        <Text></Text>
      </Box>
    </Box>
  );
};
export default ItemCardBody;
