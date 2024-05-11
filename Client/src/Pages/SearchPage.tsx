import { Grid, GridItem } from "@chakra-ui/react";
import useItems from "../hooks/useItems";
import { useParams } from "react-router-dom";
import ItemGrid from "../Components/ItemGrid";
import ShowMore from "../Components/ShowMore";
import TopResultCard from "../Components/Cards/TopResultCard";
import Section from "../Components/Section";
import CustomHeading from "../Components/Heading1";
import SubSection from "../Components/SubSection";

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
          <CustomHeading>Top Result</CustomHeading>
          <SubSection>
            <TopResultCard
              isLoading={isLoading}
              item={data?.artists.items[0]}
            />
          </SubSection>
        </GridItem>
        <GridItem colSpan={{ base: 2, lg: 1 }}>
          <CustomHeading>Tracks</CustomHeading>
          <SubSection>
            <ItemGrid
              isLoading={isLoading}
              skelCount={5}
              tracks
              items={data?.tracks.items}
            />
          </SubSection>
          <ShowMore
            disabled={isLoading}
            type={data?.tracks.items[0].type}
            query={params.q!}
          />
        </GridItem>
        <GridItem colSpan={2}>
          <CustomHeading>Albums</CustomHeading>
          <SubSection>
            <ItemGrid
              isLoading={isLoading}
              skelCount={5}
              items={data?.albums.items}
            />
          </SubSection>
          <ShowMore
            disabled={isLoading}
            type={data?.albums.items[0].type}
            query={params.q!}
          />
        </GridItem>
        <GridItem colSpan={2}>
          <CustomHeading>Artists</CustomHeading>
          <SubSection>
            <ItemGrid
              isLoading={isLoading}
              skelCount={5}
              items={data?.artists.items}
            />
          </SubSection>
          <ShowMore
            disabled={isLoading}
            type={data?.artists.items[0].type}
            query={params.q!}
          />
        </GridItem>
      </Grid>
    </Section>
  );
};
export default SearchPage;
