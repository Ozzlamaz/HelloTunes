import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  id: string;
  maxHeight: string;
}

const ScrollContainer = ({ children, id, maxHeight }: Props) => {
  return (
    <Box paddingX={5} id={id} overflowY="auto" maxHeight={maxHeight}>
      {children}
    </Box>
  );
};
export default ScrollContainer;
