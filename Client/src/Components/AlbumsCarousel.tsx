import { Heading } from "@chakra-ui/react";
import Carousel from "./Carousel";
import ItemCarousel from "./ItemCarousel";
import { ResponseData } from "../interfaces/ResponseData";

interface Props {
  data?: ResponseData;
}

const AlbumsCarousel = ({ data }: Props) => {
  return (
    <>
      <Heading marginBottom={3} as={"h1"}>
        New Albums
      </Heading>
      <Carousel pauseOnHover>
        {data?.albums?.items.map((item) => (
          <ItemCarousel item={item} />
        ))}
      </Carousel>
    </>
  );
};
export default AlbumsCarousel;
