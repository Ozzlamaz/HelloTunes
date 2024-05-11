import { Grid, GridItem } from "@chakra-ui/react";
import useItems from "../hooks/useItems";
import { useParams } from "react-router-dom";
import ItemGrid from "../Components/ItemGrid";
import ShowMore from "../Components/ShowMore";
import TopResultCard from "../Components/Cards/TopResultCard";
import Section from "../Components/Section";
import Heading1 from "../Components/Heading1";
import SubSection from "../Components/SubSection";
import ItemCard from "../Components/Cards/ItemCard";

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
            <ItemGrid list>
              {data?.tracks.items.map((item) => (
                <ItemCard item={item} key={item.id} />
              ))}
            </ItemGrid>
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
            <ItemGrid>
              {data?.albums.items.map((item) => (
                <ItemCard item={item} key={item.id} />
              ))}
            </ItemGrid>
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
            <ItemGrid>
              {data?.artists.items.map((item) => (
                <ItemCard item={item} key={item.id} />
              ))}
            </ItemGrid>
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
