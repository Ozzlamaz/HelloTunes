import { Heading } from "@chakra-ui/react";
import ItemCard from "./ItemCard";
import { Artist } from "../interfaces/Artist";

interface Props {
  item?: Artist;
}

const TopResultCard = ({ item }: Props) => {
  return (
    <>
      <Heading marginBottom={3} as={"h1"}>
        Top Result
      </Heading>
      <ItemCard topResult item={item} />
    </>
  );
};
export default TopResultCard;
