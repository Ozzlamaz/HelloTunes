import { Box, Heading, Image } from "@chakra-ui/react";
import { Album } from "../../interfaces/Album";

interface Props {
  item: Album;
}

const ItemCarousel = ({ item }: Props) => {
  return (
    <Box
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: `url(${item.images[0].url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "blur(10px)",
        zIndex: -1,
      }}
      position={"relative"}
      borderRadius={20}
      overflow={"hidden"}
    >
      <Image
        marginX={"auto"}
        borderRadius={20}
        key={item.id}
        src={item.images[0].url}
      />
      {/*overlay*/}
      <Box
        borderRadius={20}
        position={"absolute"}
        transition={"all 0.25s ease-in-out"}
        top={0}
        bottom={0}
        right={0}
        left={0}
        opacity={0}
        _hover={{
          opacity: 100,
          "& > .itemPrimary": { top: 10 },
          "& > .itemSecondary": { bottom: 10 },
        }}
        background={"rgba(0,0,0,0.5)"}
        cursor={"pointer"}
      >
        <Heading
          className="itemPrimary"
          position={"absolute"}
          top={-100}
          left={5}
          right={5}
          transition={"all 500ms"}
          color={"whiteAlpha.900"}
          as={"h2"}
        >
          {item.name}
        </Heading>
        <Heading
          className="itemSecondary"
          position={"absolute"}
          bottom={-100}
          left={5}
          right={5}
          transition={"all 500ms"}
          color={"whiteAlpha.900"}
          as={"h2"}
        >
          {item.artists.map((artist) => artist.name).join(", ")}
        </Heading>
      </Box>
    </Box>
  );
};
export default ItemCarousel;
