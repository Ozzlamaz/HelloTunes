import { SimpleGrid } from "@chakra-ui/react";
import ItemCard from "./ItemCard";
import React from "react";
import { Artist } from "../interfaces/Artist";
import { Album } from "../interfaces/Album";
import { Track } from "../interfaces/Track";
import useSearchQuery from "../hooks/useSearchQuery";
import useFilterQueryStore from "../filterquery/store";

const ItemGrid = () => {
  const filterQuery = useFilterQueryStore((s) => s.filterQuery);
  const { data } = useSearchQuery(filterQuery);

  return (
    <SimpleGrid
      spacing={5}
      columns={{ sm: 1, md: 3, lg: 4, xl: 5 }}
      textAlign={"center"}
    >
      {data?.[Object.keys(data)[0]]?.items.map(
        (item: Album | Artist | Track) => (
          <React.Fragment key={item.id}>
            <ItemCard item={item} />
          </React.Fragment>
        )
      )}
    </SimpleGrid>
  );
};
export default ItemGrid;
