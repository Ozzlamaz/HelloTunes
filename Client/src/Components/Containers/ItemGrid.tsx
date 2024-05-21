import { Album } from "../../interfaces/Album";
import { Track } from "../../interfaces/Track";
import { Artist } from "../../interfaces/Artist";
import { SimpleGrid } from "@chakra-ui/react";
import { InfiniteResponseData } from "../../interfaces/InfiniteResponseData";
import { RelatedItemsRes } from "../../interfaces/RelatedItemsRes";
import ItemCard from "../Cards/ItemCard";
import SkeletonCard from "../SkeletonCard";

interface Props {
  items?: (Album | Artist | Track)[];
  pages?: InfiniteResponseData<Album | Artist | Track>[];
  relatedPages?: RelatedItemsRes<Album | Artist | Track>[];
  list?: boolean;
  details?: boolean;
  isLoading: boolean;
}

const ItemGrid = ({
  list,
  items,
  pages,
  relatedPages,
  details,
  isLoading,
}: Props) => {
  const skelArray = Array.from({ length: 20 }, (_, index) => index + 1);
  return (
    <SimpleGrid
      spacing={5}
      columns={list ? 1 : { base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
    >
      {!isLoading
        ? // prettier-ignore
          items?.map(item => 
          <ItemCard details={details} key={item.id} item={item}/>) 
          ||
        // prettier-ignore
        pages?.map(page => 
          Object.values(page)[0].items.map(item => 
          <ItemCard details={details} key={item.id} item={item}/>)) 
          ||
        // prettier-ignore
        relatedPages?.map(page => 
          page.items.map(item => 
          <ItemCard details={details} key={item.id} item={item}/>))
        : // prettier-ignore
          skelArray?.map(each =>
          <SkeletonCard key={each} list={list} />)}
    </SimpleGrid>
  );
};

export default ItemGrid;
