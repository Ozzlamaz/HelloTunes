import { Box } from "@chakra-ui/react";
import { Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { ReactNode } from "react";
import "swiper/css";
import "swiper/css/pagination";

interface Props {
  children: ReactNode;
  scrollbarDiv: string;
}

const HomeSwiper = ({ children, scrollbarDiv }: Props) => {
  const swiperconfig = {
    modules: [Pagination, Autoplay],
    pagination: {
      el: `.${scrollbarDiv}`,
      clickable: true,
    },
    autoplay: { delay: 5000, disableOnInteraction: true },
    slidesPerView: 1,
    spaceBetween: 20,
  };

  return (
    <>
      <Swiper {...swiperconfig}>{children}</Swiper>
      <Box
        marginY={5}
        maxWidth={"fit-content"}
        marginX={"auto"}
        className={scrollbarDiv}
      />
    </>
  );
};
export default HomeSwiper;
