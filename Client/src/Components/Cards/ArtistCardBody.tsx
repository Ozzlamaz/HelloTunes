import { Box, Heading, Image, Tooltip } from "@chakra-ui/react";
import { Artist } from "../../interfaces/Artist";
import shortName from "../../services/shortName";

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
        <Tooltip label={item.name}>
          <Heading
            textAlign={"center"}
            fontSize={topResult ? 32 : 16}
            as={"h2"}
          >
            {shortName(item.name)}
          </Heading>
        </Tooltip>
      </Box>
    </>
  );
};
export default ArtistCardBody;
