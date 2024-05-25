import ItemCarousel from "./ItemCarousel";
import { ResponseData } from "../../interfaces/ResponseData";
import Heading1 from "../Headings/Heading1";
import HomeSwiper from "../Swiper/HomeSwiper";
import { SwiperSlide } from "swiper/react";

interface Props {
  data?: ResponseData;
  isLoading: boolean;
}

const NewAlbums = ({ data, isLoading }: Props) => {
  return (
    <>
      <Heading1 isLoading={isLoading}>New Albums</Heading1>
      <HomeSwiper isLoading={isLoading} paginationContainer="albums-pagination">
        {data?.albums?.items.map((item) => (
          <SwiperSlide key={item.id}>
            <ItemCarousel item={item} />
          </SwiperSlide>
        ))}
      </HomeSwiper>
    </>
  );
};
export default NewAlbums;
