import { WarningTwoIcon } from "@chakra-ui/icons";
import { Heading, VStack } from "@chakra-ui/react";

interface Props {
  error: String;
  height?: string;
}

const CustomErrorComp = ({ error, height = "auto" }: Props) => {
  return (
    <VStack height={height}>
      <Heading size="xl" as="h1">
        {error}
      </Heading>
      <WarningTwoIcon boxSize={40} />
    </VStack>
  );
};
export default CustomErrorComp;
