import { Box, Image } from "@chakra-ui/react";
import { Artist } from "../../interfaces/Artist";
import CardHeading from "./CardHeading";

interface Props {
  item: Artist;
  topResult?: true;
}

const ArtistCardBody = ({ item, topResult }: Props) => {
  return (
    <>
      <Image
        aspectRatio={1 / 1}
        width={topResult ? "25.8rem" : "100%"}
        marginX={"auto"}
        objectFit={"cover"}
        borderRadius={"10%"}
        src={topResult ? item.images[0]?.url : item.images[1]?.url}
      />
      <Box paddingY={3}>
        <CardHeading
          textAlign={"center"}
          size={topResult ? "lg" : "sm"}
          as={"h2"}
        >
          {item.name}
        </CardHeading>
      </Box>
    </>
  );
};
export default ArtistCardBody;
