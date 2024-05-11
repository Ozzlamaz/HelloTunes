import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ReactSlick = ({ children }: Props) => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
  };
  return <Slider {...settings}>{children}</Slider>;
};
export default ReactSlick;
