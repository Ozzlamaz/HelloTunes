import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SubSection = ({ children }: Props) => {
  return (
    <Box
      marginY="1.25rem"
      marginX="auto"
      padding="1.25rem"
      backgroundColor="blackAlpha.100"
      borderRadius={5}
      position="relative"
    >
      {children}
    </Box>
  );
};
export default SubSection;
