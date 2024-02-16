import { Heading, SimpleGrid } from "@chakra-ui/react";
import useArtists from "../hooks/useArtists";
import useFilterQueryStore from "../filterquery/store";
import React from "react";
import ItemCard from "./ItemCard";
import ItemCardBody from "./ItemCardBody";

const ArtistGrid = () => {
  const filterQuery = useFilterQueryStore((s) => s.filterQuery);
  const { data } = useArtists(filterQuery);
  return (
    <>
      <Heading marginBottom={3} as={"h1"}>
        Artist
      </Heading>
      <SimpleGrid spacing={5} columns={{ sm: 1, md: 3, lg: 4, xl: 5 }}>
        {data?.artists.items.map((item) => (
          <React.Fragment key={item.id}>
            <ItemCard>
              <ItemCardBody item={item} />
            </ItemCard>
          </React.Fragment>
        ))}
      </SimpleGrid>
    </>
  );
};
export default ArtistGrid;
