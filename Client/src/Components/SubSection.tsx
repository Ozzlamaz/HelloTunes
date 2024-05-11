import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  maxW?: string;
  height?: string;
  id?: string;
}

const SubSection = ({ children, maxW = "100%", height, id }: Props) => {
  return (
    <Box
      overflowY={"auto"}
      id={id}
      maxW={maxW}
      marginY={5}
      height={height}
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
