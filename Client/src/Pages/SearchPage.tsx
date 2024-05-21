import { Grid, GridItem } from "@chakra-ui/react";
import useItems from "../hooks/useItems";
import { useParams } from "react-router-dom";
import ItemGrid from "../Components/Containers/ItemGrid";
import ShowMore from "../Components/ShowMore";
import TopResultCard from "../Components/Cards/TopResultCard";
import Section from "../Components/Containers/Section";
import Heading1 from "../Components/Heading1";
import SubSection from "../Components/Containers/SubSection";
import ItemCard from "../Components/Cards/ItemCard";
import { SwiperSlide } from "swiper/react";
import SearchSwiper from "../Components/Swiper/SearchSwiper";
import ScrollContainer from "../Components/Containers/ScrollContainer";

const SearchPage = () => {
  const params = useParams();
  const { data, isLoading } = useItems(params);

  return (
    <Section>
      <Grid
        gridGap={5}
        templateRows={"auto auto auto"}
        templateColumns={"repeat(2, 1fr)"}
      >
        <GridItem colSpan={{ base: 2, lg: 1 }}>
          <SubSection>
            <Heading1>Top Result</Heading1>
            <TopResultCard
              isLoading={isLoading}
              item={data?.artists.items[0]}
            />
          </SubSection>
        </GridItem>
        <GridItem colSpan={{ base: 2, lg: 1 }}>
          <SubSection>
            <Heading1>Tracks</Heading1>
            <ScrollContainer id="scroll-container" maxHeight="27.45rem">
              <ItemGrid items={data?.tracks.items} list />
            </ScrollContainer>
            <ShowMore
              disabled={isLoading}
              type={data?.tracks.items[0].type}
              query={params.q!}
            />
          </SubSection>
        </GridItem>
        <GridItem colSpan={2}>
          <SubSection>
            <Heading1>Albums</Heading1>
            <SearchSwiper paginationDiv="album-swiper">
              {data?.albums.items.map((item) => (
                <SwiperSlide key={item.id}>
                  <ItemCard item={item} />
                </SwiperSlide>
              ))}
            </SearchSwiper>
            <ShowMore
              disabled={isLoading}
              type={data?.albums.items[0].type}
              query={params.q!}
            />
          </SubSection>
        </GridItem>
        <GridItem colSpan={2}>
          <SubSection>
            <Heading1>Artists</Heading1>
            <SearchSwiper paginationDiv="artist-swiper">
              {data?.artists.items.map((item) => (
                <SwiperSlide key={item.id}>
                  <ItemCard item={item} />
                </SwiperSlide>
              ))}
            </SearchSwiper>
            <ShowMore
              disabled={isLoading}
              type={data?.artists.items[0].type}
              query={params.q!}
            />
          </SubSection>
        </GridItem>
      </Grid>
    </Section>
  );
};
export default SearchPage;
