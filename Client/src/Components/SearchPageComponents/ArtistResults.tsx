import { SwiperSlide } from "swiper/react";
import { Artist } from "../../interfaces/Artist";
import ItemCard from "../Cards/ItemCard";
import SubSection from "../Containers/SubSection";
import Heading2 from "../Headings/Heading2";
import ShowMore from "../ShowMore";
import SearchSwiper from "../Swiper/SearchSwiper";
import { useParams } from "react-router-dom";
import CustomErrorComp from "../Error/CustomErrorComp";

interface Props {
  artists?: Artist[];
  isLoading: boolean;
}

const ArtistResults = ({ artists, isLoading }: Props) => {
  const { q } = useParams();

  if (artists?.length === 0)
    // response has empty items array
    return (
      <SubSection>
        <Heading2 isLoading={isLoading}>Albums</Heading2>
        <CustomErrorComp error={"No Artists Found"} />
      </SubSection>
    );
  return (
    <SubSection>
      <Heading2 isLoading={isLoading}>Artists</Heading2>
      <SearchSwiper isLoading={isLoading} paginationDiv="artist-swiper">
        {artists?.map((item) => (
          <SwiperSlide key={item.id}>
            <ItemCard item={item} />
          </SwiperSlide>
        ))}
      </SearchSwiper>
      <ShowMore disabled={isLoading} type={"artist"} query={q!} />
    </SubSection>
  );
};
export default ArtistResults;
