import { Heading, SkeletonText } from "@chakra-ui/react";

interface Props {
  children?: string;
  isLoading: boolean;
}

const Heading2 = ({ children, isLoading }: Props) => {
  return (
    <Heading
      textAlign={{ base: "center", sm: "left" }}
      size={"lg"}
      marginBottom={5}
      as={"h2"}
    >
      {isLoading ? (
        <SkeletonText skeletonHeight={"2rem"} width={"12rem"} noOfLines={1} />
      ) : (
        children
          ?.split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      )}
    </Heading>
  );
};

export default Heading2;
