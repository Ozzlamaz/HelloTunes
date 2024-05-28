import { Box, Image } from "@chakra-ui/react";
import { Album } from "../../interfaces/Album";
import CardHeading from "./CardHeading";

interface Props {
  item: Album;
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
        <CardHeading textAlign={"center"} size="sm" as={"h2"}>
          {item.name}
        </CardHeading>
      </Box>
    </>
  );
};
export default AlbumCardBody;
