import { Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const DetailsHeading = ({ children }: Props) => {
  return (
    <Heading
      width={"fit-content"}
      borderRadius={5}
      padding={1}
      backgroundColor={"whiteAlpha.500"}
      marginY={3}
      as={"h2"}
      size={"md"}
    >
      {children}
    </Heading>
  );
};
export default DetailsHeading;
