import { Box, Image } from "@chakra-ui/react";
import { Artist } from "../../interfaces/Artist";
import CardHeading from "./CardHeading";
import PHArtist from "../../assets/placeholders/PHArtist.webp";

interface Props {
  artist: Artist;
  topResult?: true;
}

const ArtistCardBody = ({ artist, topResult }: Props) => {
  return (
    <>
      <Image
        aspectRatio={1 / 1}
        width={topResult ? "25.8rem" : "100%"}
        marginX={"auto"}
        objectFit={"cover"}
        borderRadius={"10%"}
        src={topResult ? artist.images[0]?.url : artist.images[1]?.url}
        background={`url(${PHArtist})`}
        bgSize={"cover"}
        alt={artist.name}
      />
      <Box paddingY={3}>
        <CardHeading
          textAlign={"center"}
          size={topResult ? "lg" : "sm"}
          as={"h2"}
        >
          {artist.name}
        </CardHeading>
      </Box>
    </>
  );
};
export default ArtistCardBody;
