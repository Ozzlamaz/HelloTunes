import { Box, Heading, Image, Tooltip } from "@chakra-ui/react";
import { Artist } from "../interfaces/Artist";

interface Props {
  item: Artist;
  topResult?: true;
}

const ArtistCardBody = ({ item, topResult }: Props) => {
  return (
    <>
      <Image
        aspectRatio={1 / 1}
        marginX={"auto"}
        objectFit={"cover"}
        borderRadius={"10%"}
        src={topResult ? item.images[0]?.url : item.images[1]?.url}
      />
      <Box paddingY={3}>
        <Tooltip label={item.name}>
          <Heading fontSize={topResult ? 32 : 16} as={"h2"}>
            {item.name.length > 20
              ? item.name.substring(0, 20) + "..."
              : item.name}
          </Heading>
        </Tooltip>
      </Box>
    </>
  );
};
export default ArtistCardBody;
