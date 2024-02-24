import { Box, Heading, Image } from "@chakra-ui/react";
import { Album } from "../interfaces/Album";

interface Props {
  item: Album;
}

const ItemCarousel = ({ item }: Props) => {
  return (
    <Box marginX={"auto"} position={"relative"} maxWidth={"fit-content"}>
      <Image borderRadius={20} key={item.id} src={item.images[0].url} />
      {/*overlay*/}
      <Box
        borderRadius={20}
        position={"absolute"}
        transition={"all 0.25s ease-in-out"}
        padding={10}
        top={0}
        bottom={0}
        right={0}
        left={0}
        opacity={0}
        _hover={{ opacity: 100 }}
        background={"rgba(0,0,0,0.5)"}
        cursor={"pointer"}
      >
        <Heading as={"h2"}>{item.name}</Heading>
        <Heading as={"h2"}>
          {item.artists.map((artist) => artist.name).join(", ")}
        </Heading>
      </Box>
    </Box>
  );
};
export default ItemCarousel;
