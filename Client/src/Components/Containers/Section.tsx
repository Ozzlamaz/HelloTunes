import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  maxW?: string;
}

const Section = ({ children, maxW = "100%" }: Props) => {
  return (
    <Box maxW={maxW} marginY={10} marginX={"auto"}>
      {children}
    </Box>
  );
};
export default Section;
