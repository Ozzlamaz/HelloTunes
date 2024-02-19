import { Heading } from "@chakra-ui/react";
import Carousel from "./Carousel";
import useAlbums from "../hooks/useAlbums";
import useFilterQueryStore from "../filterquery/store";
import ItemCarousel from "./ItemCarousel";

const AlbumsCarousel = () => {
  const filterQuery = useFilterQueryStore((s) => s.filterQuery);
  const { data } = useAlbums(filterQuery);

  return (
    <>
      <Heading marginBottom={3} as={"h1"}>
        New Albums
      </Heading>
      <Carousel pauseOnHover>
        {data?.albums.items.map((item) => (
          <ItemCarousel item={item} />
        ))}
      </Carousel>
    </>
  );
};
export default AlbumsCarousel;
