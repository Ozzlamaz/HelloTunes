import { Grid, GridItem } from "@chakra-ui/react";
import AlbumsCarousel from "../Components/AlbumsCarousel";
import TrackList from "../Components/TrackList";

const HomePage = () => {
  return (
    <Grid
      marginX={"auto"}
      maxW={"6xl"}
      templateColumns={{ base: "auto", lg: "auto auto" }}
      gridGap={5}
    >
      <GridItem>
        <AlbumsCarousel />
      </GridItem>
      <GridItem>
        <TrackList />
      </GridItem>
    </Grid>
  );
};
export default HomePage;
