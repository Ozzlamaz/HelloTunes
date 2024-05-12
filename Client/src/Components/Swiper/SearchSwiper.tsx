import { Box } from "@chakra-ui/react";
import { Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  paginationDiv: string;
  direction?: string;
}

const SearchSwiper = ({
  children,
  paginationDiv,
  direction = "horizontal",
}: Props) => {
  const swiperconfig = {
    direction,
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

  return (
    <>
      <Box marginY={5} className={paginationDiv} />
      <Swiper {...swiperconfig}>{children}</Swiper>
    </>
  );
};
export default SearchSwiper;
