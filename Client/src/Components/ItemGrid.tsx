import ItemCard from "./ItemCard";
import { Album } from "../interfaces/Album";
import { Track } from "../interfaces/Track";
import { Artist } from "../interfaces/Artist";
import { SimpleGrid } from "@chakra-ui/react";

interface Props {
  items?: Album[] | Artist[] | Track[];
  tracks?: boolean;
}

const ItemGrid = ({ items, tracks }: Props) => {
  return (
    <SimpleGrid
      spacing={5}
      columns={tracks ? 1 : { sm: 1, md: 3, lg: 4, xl: 5 }}
    >
      {items?.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </SimpleGrid>
  );
};

export default ItemGrid;
