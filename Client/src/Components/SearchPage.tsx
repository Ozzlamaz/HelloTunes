import { Grid, GridItem } from "@chakra-ui/react";
import useFilterQueryStore from "../filterquery/store";
import useItems from "../hooks/useItems";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ItemGrid from "./ItemGrid";
import CustomHeading from "./CustomHeading";
import ItemCard from "./ItemCard";
import ShowMore from "./ShowMore";

const SearchPage = () => {
  const setQuery = useFilterQueryStore((s) => s.setQuery);
  const filterQuery = useFilterQueryStore((s) => s.filterQuery);
  const { query } = useParams();
  const { data } = useItems(filterQuery);

  useEffect(() => {
    setQuery(query!);
  }, []);

  if (!data) return <div>Loading</div>;

  const { artists, albums, tracks } = data;

  return (
    <Grid gridGap={10} marginY={5} templateColumns={"repeat(2, 1fr)"}>
      <GridItem colSpan={{ base: 2, lg: 1 }}>
        <CustomHeading>Top Result</CustomHeading>
        <ItemCard topResult item={artists.items[0]} />
      </GridItem>
      <GridItem colSpan={{ base: 2, lg: 1 }}>
        <CustomHeading>{tracks.items[0].type}</CustomHeading>
        <ItemGrid tracks items={tracks.items} />
        <ShowMore type={tracks.items[0].type} query={query!} />
      </GridItem>
      <GridItem colSpan={2}>
        <CustomHeading>{albums.items[0].type}</CustomHeading>
        <ItemGrid items={albums.items} />
        <ShowMore type={albums.items[0].type} query={query!} />
      </GridItem>
      <GridItem colSpan={2}>
        <CustomHeading>{artists.items[0].type}</CustomHeading>
        <ItemGrid items={artists.items} />
        <ShowMore type={artists.items[0].type} query={query!} />
      </GridItem>
    </Grid>
  );
};
export default SearchPage;
