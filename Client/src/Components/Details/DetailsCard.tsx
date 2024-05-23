import { Card } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const DetailsCard = ({ children }: Props) => {
  return (
    <Card
      boxShadow={"lg"}
      direction={{ base: "column", md: "row" }}
      backgroundColor={"blackAlpha.50"}
    >
      {children}
    </Card>
  );
};
export default DetailsCard;
