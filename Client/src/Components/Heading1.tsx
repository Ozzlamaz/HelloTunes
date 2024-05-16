import { Heading } from "@chakra-ui/react";

interface Props {
  children: string;
}

const Heading1 = ({ children }: Props) => {
  return (
    <Heading marginBottom={5} as={"h1"}>
      {children
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")}
    </Heading>
  );
};

export default Heading1;
