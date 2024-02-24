import { Heading } from "@chakra-ui/react";
import ItemCard from "./ItemCard";
import ItemCardBody from "./ItemCardBody";
import { ResponseData } from "../interfaces/ResponseData";

interface Props {
  data?: ResponseData;
}

const TopResultCard = ({ data }: Props) => {
  return (
    <>
      <Heading marginBottom={3} as={"h1"}>
        Top Result
      </Heading>
      <ItemCard>
        <ItemCardBody topResult={true} item={data?.artists?.items[0]} />
      </ItemCard>
    </>
  );
};
export default TopResultCard;
