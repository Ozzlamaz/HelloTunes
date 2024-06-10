import { Box, Grid, GridItem } from "@chakra-ui/react";
import useItems from "../hooks/useItems";
import { useParams } from "react-router-dom";
import Section from "../Components/Containers/Section";
import Heading1 from "../Components/Headings/Heading1";
import ResponseErrorComp from "../Components/Error/ResponseErrorComp";
import TracksResults from "../Components/SearchPageComponents/TracksResults";
import AlbumsResults from "../Components/SearchPageComponents/AlbumsResults";
import ArtistResults from "../Components/SearchPageComponents/ArtistResults";
import ArtistDetailsCard from "../Components/Details/ArtistDetailsCard";

const SearchPage = () => {
  const params = useParams();
  const { data, isLoading, error } = useItems(params);

  if (error) return <ResponseErrorComp error={error} />;

  return (
    <Section>
      <Heading1
        isLoading={isLoading}
      >{`You searched for: ${params.q}`}</Heading1>
      <Box>
        <ArtistDetailsCard
          isLoading={isLoading}
          artist={data?.artists.items[0]}
        />
        <TracksResults tracks={data?.tracks.items} isLoading={isLoading} />
        <AlbumsResults albums={data?.albums.items} isLoading={isLoading} />
        <ArtistResults artists={data?.artists.items} isLoading={isLoading} />
      </Box>
    </Section>
  );
};
export default SearchPage;
