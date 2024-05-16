import ItemCard from "./ItemCard";
import { Artist } from "../../interfaces/Artist";
import SkeletonCard from "../SkeletonCard";
import { Box } from "@chakra-ui/react";

interface Props {
  item?: Artist;
  isLoading: boolean;
}

const TopResultCard = ({ item, isLoading }: Props) => {
  return (
    <Box>
      {isLoading ? (
        <SkeletonCard topResult />
      ) : (
        <ItemCard topResult item={item} />
      )}
    </Box>
  );
};
export default TopResultCard;
