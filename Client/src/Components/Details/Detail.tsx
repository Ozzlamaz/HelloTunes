import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Detail = ({ children }: Props) => {
  return (
    <Text
      textAlign={"center"}
      marginX={{ base: "auto", sm: "unset" }}
      as={"span"}
      borderRadius={5}
      backgroundColor={"whiteAlpha.500"}
      padding={1}
    >
      {children}
    </Text>
  );
};
export default Detail;
