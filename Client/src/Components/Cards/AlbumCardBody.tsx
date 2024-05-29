import { Box, Image } from "@chakra-ui/react";
import { Album } from "../../interfaces/Album";
import CardHeading from "./CardHeading";
import PHAlbum from "../../assets/placeholders/PHAlbum.webp";

interface Props {
  album: Album;
}

const AlbumCardBody = ({ album }: Props) => {
  return (
    <>
      <Image
        aspectRatio={1 / 1}
        width={"100%"}
        marginX={"auto"}
        objectFit={"cover"}
        borderRadius={"50%"}
        src={album.images[1].url}
        background={`url(${PHAlbum})`}
        bgSize={"cover"}
        alt={album.name}
      />
      <Box paddingY={3}>
        <CardHeading textAlign={"center"} size="sm" as={"h2"}>
          {album.name}
        </CardHeading>
      </Box>
    </>
  );
};
export default AlbumCardBody;
