import ItemCarousel from "./ItemCarousel";
import { ResponseData } from "../../interfaces/ResponseData";
import Section from "../Containers/Section";
import Heading1 from "../Headings/Heading1";
import HomeSwiper from "../Swiper/HomeSwiper";
import { SwiperSlide } from "swiper/react";

interface Props {
  data?: ResponseData;
  isLoading: boolean;
}

const AlbumsCarousel = ({ data, isLoading }: Props) => {
  return (
    <Section>
      <Heading1 isLoading={isLoading}>New Albums</Heading1>
      <HomeSwiper scrollbarDiv="albums-pagination">
        {data?.albums?.items.map((item) => (
          <SwiperSlide key={item.id}>
            <ItemCarousel item={item} />
          </SwiperSlide>
        ))}
      </HomeSwiper>
    </Section>
  );
};
export default AlbumsCarousel;
