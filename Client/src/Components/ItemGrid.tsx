import { Grid, GridItem, Hide } from "@chakra-ui/react";
import ArtistGrid from "./ArtistGrid";
import AlbumGrid from "./AlbumGrid";
import TrackList from "./TrackList";
import TopResultCard from "./TopResultCard";
import useFilterQueryStore from "../filterquery/store";
import useItems from "../hooks/useItems";

const ItemGrid = () => {
  const filterQuery = useFilterQueryStore((s) => s.filterQuery);
  const { data } = useItems(filterQuery);
  return (
    <Grid gridGap={5} marginY={5} templateColumns={"repeat(2, 1fr)"}>
      <Hide below="lg">
        <GridItem>
          <TopResultCard data={data} />
        </GridItem>
      </Hide>
      <GridItem rowSpan={2} colSpan={{ base: 2, lg: 1 }}>
        <TrackList data={data} />
      </GridItem>
      <GridItem colSpan={2}>
        <AlbumGrid data={data} />
      </GridItem>
      <GridItem colSpan={2}>
        <ArtistGrid />
      </GridItem>
    </Grid>
  );
};
export default ItemGrid;
