import Slider from "react-slick";
import useAlbums from "../hooks/useAlbums";
import useFilterQueryStore from "../filterquery/store";
import { Box, Image } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeCarousel = () => {
  const filterQuery = useFilterQueryStore((s) => s.filterQuery);
  const { data } = useAlbums(filterQuery);
  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };
  return (
    <Slider {...settings}>
      {data?.albums.items.map((item) => (
        <Box position={"relative"} key={item.id}>
          <Image margin={"auto"} src={item.images[0].url} />
          <Box
            position={"absolute"}
            left={0}
            right={0}
            top={0}
            bottom={0}
            background={"rgba(0,0,0,0.1)"}
            display={"none"}
            _hover={{ display: "block" }}
          >
            blue
          </Box>
        </Box>
      ))}
    </Slider>
  );
};
export default HomeCarousel;
