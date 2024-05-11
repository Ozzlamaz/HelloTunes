import { Box, Heading, Image, Tooltip } from "@chakra-ui/react";
import { Album } from "../../interfaces/Album";
import shortName from "../../services/shortName";

interface Props {
  item: Album;
  details?: true;
}

const AlbumCardBody = ({ item }: Props) => {
  return (
    <>
      <Image
        aspectRatio={1 / 1}
        width={"100%"}
        marginX={"auto"}
        objectFit={"cover"}
        borderRadius={"50%"}
        src={item.images[1].url}
      />
      <Box paddingY={3}>
        <Tooltip label={item?.name}>
          <Heading textAlign={"center"} fontSize={16} as={"h2"}>
            {shortName(item.name)}
          </Heading>
        </Tooltip>
      </Box>
    </>
  );
};
export default AlbumCardBody;
