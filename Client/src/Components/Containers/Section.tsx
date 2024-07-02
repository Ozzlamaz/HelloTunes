import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Section = ({ children }: Props) => {
  return (
    <Box marginY="2.5rem" marginX="auto">
      {children}
    </Box>
  );
};
export default Section;
