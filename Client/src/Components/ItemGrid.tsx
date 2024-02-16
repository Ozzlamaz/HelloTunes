import { Grid, GridItem, Hide } from "@chakra-ui/react";
import ArtistGrid from "./ArtistGrid";
import AlbumGrid from "./AlbumGrid";
import TrackList from "./TrackList";
import TopResultCard from "./TopResultCard";

const ItemGrid = () => {
  return (
    <Grid gridGap={5} marginY={5} templateColumns={"repeat(2, 1fr)"}>
      <Hide below="lg">
        <GridItem>
          <TopResultCard />
        </GridItem>
      </Hide>
      <GridItem rowSpan={2} colSpan={{ base: 2, lg: 1 }}>
        <TrackList />
      </GridItem>
      <GridItem colSpan={2}>
        <AlbumGrid />
      </GridItem>
      <GridItem colSpan={2}>
        <ArtistGrid />
      </GridItem>
    </Grid>
  );
};
export default ItemGrid;
