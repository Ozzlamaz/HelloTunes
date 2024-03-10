import { Grid, GridItem } from "@chakra-ui/react";
import useItems from "../hooks/useItems";
import { useParams } from "react-router-dom";
import ItemGrid from "../Components/ItemGrid";
import CustomHeading from "../Components/CustomHeading";
import ItemCard from "../Components/ItemCard";
import ShowMore from "../Components/ShowMore";

const SearchPage = () => {
  const { q, type } = useParams();
  const { data } = useItems({ q, type });

  if (!data) return <div>Loading</div>;

  const { artists, albums, tracks } = data;

  return (
    <Grid gridGap={5} marginY={5} templateColumns={"repeat(2, 1fr)"}>
      <GridItem colSpan={{ base: 2, lg: 1 }}>
        <CustomHeading>Top Result</CustomHeading>
        <ItemCard topResult item={artists.items[0]} />
      </GridItem>
      <GridItem colSpan={{ base: 2, lg: 1 }}>
        <CustomHeading>{tracks.items[0].type}</CustomHeading>
        <ItemGrid tracks={true} items={tracks.items} />
        <ShowMore type={tracks.items[0].type} query={q!} />
      </GridItem>
      <GridItem colSpan={2}>
        <CustomHeading>{albums.items[0].type}</CustomHeading>
        <ItemGrid items={albums.items} />
        <ShowMore type={albums.items[0].type} query={q!} />
      </GridItem>
      <GridItem colSpan={2}>
        <CustomHeading>{artists.items[0].type}</CustomHeading>
        <ItemGrid items={artists.items} />
        <ShowMore type={artists.items[0].type} query={q!} />
      </GridItem>
    </Grid>
  );
};
export default SearchPage;
