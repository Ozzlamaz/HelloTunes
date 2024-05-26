import { Heading, SkeletonText } from "@chakra-ui/react";

interface Props {
  children?: string;
  isLoading: boolean;
  paddingX?: number;
}

const Heading1 = ({ children, isLoading, paddingX }: Props) => {
  return (
    <Heading
      textAlign={{ base: "center", sm: "left" }}
      marginBottom={5}
      paddingX={paddingX}
      as={"h1"}
      size={"xl"}
    >
      {isLoading ? (
        <SkeletonText skeletonHeight={"2.5rem"} width={"12rem"} noOfLines={1} />
      ) : (
        children
          ?.split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      )}
    </Heading>
  );
};

export default Heading1;
