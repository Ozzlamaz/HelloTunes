import { Box } from "@chakra-ui/react";
import useItems from "../hooks/useItems";
import { useParams } from "react-router-dom";
import Section from "../Components/Containers/Section";
import Heading1 from "../Components/Headings/Heading1";
import ResponseErrorComp from "../Components/Error/ResponseErrorComp";
import TracksResults from "../Components/SearchPageComponents/TracksResults";
import AlbumsResults from "../Components/SearchPageComponents/AlbumsResults";
import ArtistResults from "../Components/SearchPageComponents/ArtistResults";
import SubSection from "../Components/Containers/SubSection";

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
        <SubSection>
          <ArtistResults artists={data?.artists.items} isLoading={isLoading} />
        </SubSection>
        <SubSection>
          <TracksResults tracks={data?.tracks.items} isLoading={isLoading} />
        </SubSection>
        <SubSection>
          <AlbumsResults albums={data?.albums.items} isLoading={isLoading} />
        </SubSection>
      </Box>
    </Section>
  );
};
export default SearchPage;
