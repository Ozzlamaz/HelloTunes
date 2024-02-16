import { Heading } from "@chakra-ui/react";
import useFilterQueryStore from "../filterquery/store";
import useArtists from "../hooks/useArtists";
import ItemCard from "./ItemCard";
import ItemCardBody from "./ItemCardBody";

const TopResultCard = () => {
  const filterQuery = useFilterQueryStore((s) => s.filterQuery);
  const { data } = useArtists(filterQuery);
  return (
    <>
      <Heading marginBottom={3} as={"h1"}>
        Top Result
      </Heading>
      <ItemCard>
        {data && <ItemCardBody topResult={true} item={data.artists.items[0]} />}
      </ItemCard>
    </>
  );
};
export default TopResultCard;
