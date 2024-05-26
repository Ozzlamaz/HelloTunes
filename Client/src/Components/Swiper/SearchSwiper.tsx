import { Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { ReactNode } from "react";
import SkeletonCard from "../SkeletonCard";

interface Props {
  children: ReactNode;
  paginationDiv: string;
  isLoading: boolean;
}

const SearchSwiper = ({ children, paginationDiv, isLoading }: Props) => {
  const swiperconfig = {
    modules: [Pagination],
    pagination: { clickable: true, el: `.${paginationDiv}` },
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      480: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      990: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  };

  const skelArray = Array.from({ length: 20 }, (_, index) => index + 1);

  return (
    <>
      <Box marginY={5} className={paginationDiv} />
      <Swiper {...swiperconfig}>
        {isLoading
          ? skelArray.map((skel, index) => (
              <SwiperSlide key={skel + index}>
                <SkeletonCard swiperGrid />
              </SwiperSlide>
            ))
          : children}
      </Swiper>
    </>
  );
};
export default SearchSwiper;
