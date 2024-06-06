import ItemCard from "../Cards/ItemCard";
import SkeletonCard from "../SkeletonCard";
import Heading2 from "../Headings/Heading2";
import SubSection from "../Containers/SubSection";
import { Artist } from "../../interfaces/Artist";

interface Props {
  item?: Artist;
  isLoading: boolean;
}

const TopResult = ({ item, isLoading }: Props) => {
  if (!item && !isLoading) return; // return nothing if there are no artist results
  return (
    <SubSection>
      <Heading2 isLoading={isLoading}>Top Result</Heading2>
      {isLoading ? (
        <SkeletonCard topResult />
      ) : (
        <ItemCard topResult item={item} />
      )}
    </SubSection>
  );
};
export default TopResult;
