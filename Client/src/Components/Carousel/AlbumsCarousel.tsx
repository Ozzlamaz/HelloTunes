import Carousel from "./Carousel";
import ItemCarousel from "./ItemCarousel";
import { ResponseData } from "../../interfaces/ResponseData";
import Section from "../Containers/Section";
import Heading1 from "../Headings/Heading1";

interface Props {
  data?: ResponseData;
}

const AlbumsCarousel = ({ data }: Props) => {
  return (
    <Section>
      <Heading1>New Albums</Heading1>
      <Carousel pauseOnHover>
        {data?.albums?.items.map((item) => (
          <ItemCarousel key={item.id} item={item} />
        ))}
      </Carousel>
    </Section>
  );
};
export default AlbumsCarousel;
