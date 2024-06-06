import { CardBody, Image } from "@chakra-ui/react";
import { Album } from "../../interfaces/Album";
import dateFormater from "../../services/dateFormater";
import DetailsListing from "./DetailsListing";
import DetailsCard from "./DetailsCard";
import SkeletonCard from "../SkeletonCard";
import Heading1 from "../Headings/Heading1";
import Heading3 from "../Headings/Heading3";
import PHAlbum from "../../assets/placeholders/PHAlbum.webp";

interface Props {
  album?: Album;
  isLoading: boolean;
}

const AlbumDetailsCard = ({ album, isLoading }: Props) => {
  if (isLoading) return <SkeletonCard detailsCard />;
  if (album)
    return (
      <DetailsCard imageSrc={album.images[0]?.url || PHAlbum}>
        <Image
          aspectRatio={1 / 1}
          height={"20rem"}
          objectFit={"cover"}
          margin={"auto"}
          borderRadius={5}
          src={album.images[1]?.url || PHAlbum}
          alt={""}
        />
        <CardBody>
          <Heading3 isLoading={isLoading}>{album?.type}</Heading3>
          <Heading1 isLoading={isLoading}>{album?.name}</Heading1>
          <DetailsListing
            detailWithLinks={album.artists.map((artist) => ({
              name: artist.name,
              id: artist.id,
              type: artist.type,
            }))}
            heading="Artist/s"
          />
          <DetailsListing heading="Popularity" detail={album.popularity} />
          <DetailsListing heading="Tracks" detail={album.total_tracks} />
          <DetailsListing
            heading="Release Date"
            detail={dateFormater(album.release_date)}
          />
        </CardBody>
      </DetailsCard>
    );
};
export default AlbumDetailsCard;
