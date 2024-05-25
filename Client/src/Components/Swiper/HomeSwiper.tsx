import { Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { ReactNode } from "react";
import "swiper/css";
import "swiper/css/pagination";
import SkeletonCard from "../SkeletonCard";

interface Props {
  children: ReactNode;
  paginationContainer: string;
  isLoading: boolean;
}

const HomeSwiper = ({ children, paginationContainer, isLoading }: Props) => {
  const swiperconfig = {
    modules: [Pagination, Autoplay],
    pagination: {
      el: `.${paginationContainer}`,
      clickable: true,
    },
    autoplay: { delay: 3000, disableOnInteraction: true },
    slidesPerView: 1,
    spaceBetween: 20,
  };

  return (
    <>
      <Swiper {...swiperconfig}>
        {isLoading ? (
          <SwiperSlide>
            <SkeletonCard carousel />
          </SwiperSlide>
        ) : (
          children
        )}
      </Swiper>
      {/*Pagination Container*/}
      <Box
        marginY={5}
        maxWidth={"fit-content"}
        marginX={"auto"}
        className={paginationContainer}
      />
    </>
  );
};
export default HomeSwiper;
