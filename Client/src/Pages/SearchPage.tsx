import { Grid, GridItem } from "@chakra-ui/react";
import useItems from "../hooks/useItems";
import { useParams } from "react-router-dom";
import ItemGrid from "../Components/ItemGrid";
import CustomHeading from "../Components/CustomHeading";
import ItemCard from "../Components/ItemCard";
import ShowMore from "../Components/ShowMore";
import SkeletonGrid from "../Components/SkeletonGrid";
import SkeletonCardBody from "../Components/SkeletonCardBody";

const SearchPage = () => {
  const { q, type } = useParams();
  const { data, isLoading } = useItems({ q, type });

  return (
    <Grid gridGap={5} marginY={5} templateColumns={"repeat(2, 1fr)"}>
      <GridItem colSpan={{ base: 2, lg: 1 }}>
        <CustomHeading>Top Result</CustomHeading>
        {isLoading ? (
          <SkeletonCardBody topResult />
        ) : (
          <ItemCard topResult item={data?.artists.items[0]} />
        )}
      </GridItem>
      <GridItem colSpan={{ base: 2, lg: 1 }}>
        <CustomHeading>Tracks</CustomHeading>
        {isLoading ? (
          <SkeletonGrid size={5} tracks />
        ) : (
          <ItemGrid tracks={true} items={data?.tracks.items} />
        )}
        <ShowMore
          disabled={isLoading}
          type={data?.tracks.items[0].type}
          query={q!}
        />
      </GridItem>
      <GridItem colSpan={2}>
        <CustomHeading>Albums</CustomHeading>
        {isLoading ? (
          <SkeletonGrid size={5} />
        ) : (
          <ItemGrid items={data?.albums.items} />
        )}
        <ShowMore
          disabled={isLoading}
          type={data?.albums.items[0].type}
          query={q!}
        />
      </GridItem>
      <GridItem colSpan={2}>
        <CustomHeading>Artists</CustomHeading>
        {isLoading ? (
          <SkeletonGrid size={5} />
        ) : (
          <ItemGrid items={data?.artists.items} />
        )}
        <ShowMore
          disabled={isLoading}
          type={data?.artists.items[0].type}
          query={q!}
        />
      </GridItem>
    </Grid>
  );
};
export default SearchPage;
