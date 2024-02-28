import { Heading } from "@chakra-ui/react";

interface Props {
  children: string;
}

const CustomHeading = ({ children }: Props) => {
  return (
    <Heading marginBottom={3} as={"h1"}>
      {children.charAt(0).toUpperCase() + children.slice(1)}
    </Heading>
  );
};

export default CustomHeading;
