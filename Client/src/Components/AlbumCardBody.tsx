import { Box, Heading, Image, Tooltip } from "@chakra-ui/react";
import { Album } from "../interfaces/Album";

interface Props {
  item: Album;
}

const AlbumCardBody = ({ item }: Props) => {
  return (
    <>
      <Image
        aspectRatio={1 / 1}
        marginX={"auto"}
        width={"100%"}
        objectFit={"cover"}
        borderRadius={"50%"}
        src={item.images[1].url}
      />
      <Box paddingY={3}>
        <Tooltip label={item?.name}>
          <Heading fontSize={16} as={"h2"}>
            {item.name.length > 20
              ? item.name.substring(0, 20) + "..."
              : item.name}
          </Heading>
        </Tooltip>
      </Box>
    </>
  );
};
export default AlbumCardBody;
