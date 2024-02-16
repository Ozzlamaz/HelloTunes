import { Heading, Image } from "@chakra-ui/react";
import Carousel from "./Carousel";
import useAlbums from "../hooks/useAlbums";
import useFilterQueryStore from "../filterquery/store";

const AlbumsCarousel = () => {
  const filterQuery = useFilterQueryStore((s) => s.filterQuery);
  const { data } = useAlbums(filterQuery);

  return (
    <>
      <Heading marginBottom={3} as={"h1"}>
        New Albums
      </Heading>
      <Carousel>
        {data?.albums.items.map((item) => (
          <Image borderRadius={20} key={item.id} src={item.images[0].url} />
        ))}
      </Carousel>
    </>
  );
};
export default AlbumsCarousel;
