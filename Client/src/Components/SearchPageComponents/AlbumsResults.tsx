import { SwiperSlide } from "swiper/react";
import { Album } from "../../interfaces/Album";
import Heading2 from "../Headings/Heading2";
import SearchSwiper from "../Swiper/SearchSwiper";
import ItemCard from "../Cards/ItemCard";
import ShowMore from "../ShowMore";
import { useParams } from "react-router-dom";
import CustomErrorComp from "../Error/CustomErrorComp";

interface Props {
  albums?: Album[];
  isLoading: boolean;
}

const AlbumsResults = ({ albums, isLoading }: Props) => {
  const { q } = useParams();

  //prettier-ignore
  if (albums?.length === 0) // response has empty items array
    return (
      <>
        <Heading2 isLoading={isLoading}>Albums</Heading2>
        <CustomErrorComp error={"No Albums Found"} />
      </>
    );
  return (
    <>
      <Heading2 isLoading={isLoading}>Albums</Heading2>
      <SearchSwiper isLoading={isLoading} paginationDiv="album-swiper">
        {albums?.map((item) => (
          <SwiperSlide key={item.id}>
            <ItemCard item={item} />
          </SwiperSlide>
        ))}
      </SearchSwiper>
      <ShowMore disabled={isLoading} type="album" query={q!} />
    </>
  );
};
export default AlbumsResults;
