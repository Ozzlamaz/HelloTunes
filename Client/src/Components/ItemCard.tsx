import { Card, CardBody } from "@chakra-ui/card";
import CardContainer from "./CardContainer";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ItemCard = ({ children }: Props) => {
  return (
    <CardContainer>
      <Card>
        <CardBody padding={5}>{children}</CardBody>
      </Card>
    </CardContainer>
  );
};
export default ItemCard;
