import ItemCard from "./Cards/ItemCard";
import { Album } from "../interfaces/Album";
import { Track } from "../interfaces/Track";
import { Artist } from "../interfaces/Artist";
import { SimpleGrid } from "@chakra-ui/react";
import SkeletonCard from "./SkeletonCard";

interface Props {
  items?: (Album | Artist | Track)[];
  tracks?: boolean;
  details?: true;
  isLoading: boolean;
  skelCount: number;
  height?: string;
  overflowY?: any;
}

const ItemGrid = ({
  items,
  tracks,
  details,
  skelCount,
  height,
  overflowY = "visible",
  isLoading,
}: Props) => {
  const skelArray = Array.from({ length: skelCount }, (_, index) => index + 1);

  return (
    <SimpleGrid
      height={height}
      overflowY={overflowY}
      spacing={5}
      columns={tracks ? 1 : { sm: 1, md: 3, lg: 4, xl: 5 }}
    >
      {isLoading
        ? skelArray.map((instance) => (
            <SkeletonCard tracks={tracks} key={instance} />
          ))
        : items?.map((item) => (
            <ItemCard details={details} key={item.id} item={item} />
          ))}
    </SimpleGrid>
  );
};

export default ItemGrid;
