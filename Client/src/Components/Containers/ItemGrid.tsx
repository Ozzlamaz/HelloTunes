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
  relatableId?: string;
  details?: boolean;
  isLoading: boolean;
}

const ItemGrid = ({
  list,
  items,
  pages,
  relatedPages,
  relatableId,
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
          items
        ?.filter(item => item.id !== relatableId)
        .map(item => 
        <ItemCard details={details} key={item.id} item={item}/>) 
        ||
      // prettier-ignore
      pages?.map(page => 
        Object.values(page)[0].items // this case, page only has one property but we don't know if its albums, artists or tracks
        .filter(item => item.id !== relatableId)
        .map(item => 
        <ItemCard details={details} key={item.id} item={item}/>)) 
        ||
      // prettier-ignore
      relatedPages?.map(page => 
        page.items
        .filter(item => item.id !== relatableId)
        .map(item => 
        <ItemCard details={details} key={item.id} item={item}/>))
        : // prettier-ignore
          skelArray?.map(each =>
        <SkeletonCard key={each} list={list} />)}
    </SimpleGrid>
  );
};

export default ItemGrid;
