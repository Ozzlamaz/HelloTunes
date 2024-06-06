import { Grid, GridItem } from "@chakra-ui/react";
import useItems from "../hooks/useItems";
import { useParams } from "react-router-dom";
import TopResult from "../Components/SearchPageComponents/TopResult";
import Section from "../Components/Containers/Section";
import Heading1 from "../Components/Headings/Heading1";
import ResponseErrorComp from "../Components/Error/ResponseErrorComp";
import TracksResults from "../Components/SearchPageComponents/TracksResults";
import AlbumsResults from "../Components/SearchPageComponents/AlbumsResults";
import ArtistResults from "../Components/SearchPageComponents/ArtistResults";

const SearchPage = () => {
  const params = useParams();
  const { data, isLoading, error } = useItems(params);

  if (error) return <ResponseErrorComp error={error} />;

  return (
    <Section>
      <Heading1 isLoading={isLoading}>{params.q}</Heading1>
      <Grid gridGap={5} templateColumns={"1fr 1fr"}>
        <GridItem colSpan={{ base: 2, lg: 1 }}>
          <TopResult isLoading={isLoading} item={data?.artists.items[0]} />
        </GridItem>
        <GridItem
          colSpan={{ base: 2, lg: data?.artists.items.length === 0 ? 2 : 1 }}
        >
          <TracksResults tracks={data?.tracks.items} isLoading={isLoading} />
        </GridItem>
        <GridItem colSpan={2}>
          <AlbumsResults albums={data?.albums.items} isLoading={isLoading} />
        </GridItem>
        <GridItem colSpan={2}>
          <ArtistResults artists={data?.artists.items} isLoading={isLoading} />
        </GridItem>
      </Grid>
    </Section>
  );
};
export default SearchPage;
