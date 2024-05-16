import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SubSection = ({ children }: Props) => {
  return (
    <Box
      marginY={5}
      marginX={"auto"}
      padding={5}
      backgroundColor={"blackAlpha.600"}
      borderRadius={5}
    >
      {children}
    </Box>
  );
};
export default SubSection;
