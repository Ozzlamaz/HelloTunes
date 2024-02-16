import { Box } from "@chakra-ui/layout";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const CardContainer = ({ children }: Props) => {
  return (
    <Box
      boxShadow={"xl"}
      overflow="hidden"
      position="relative"
      transition="transform 0.3s ease-in-out"
      _hover={{ transform: "scale(1.05)" }}
    >
      {children}
    </Box>
  );
};
export default CardContainer;
