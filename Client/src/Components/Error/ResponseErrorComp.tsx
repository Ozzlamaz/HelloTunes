import { WarningTwoIcon } from "@chakra-ui/icons";
import { Heading, VStack } from "@chakra-ui/react";
import { AxiosError } from "axios";

interface Props {
  error: AxiosError;
}

const RequestErrorComp = ({ error }: Props) => {
  return (
    <VStack>
      <Heading size="xl" as="h1">
        {error.code}
      </Heading>
      <Heading size="lg" as="h2">
        {error.message}
      </Heading>
      <WarningTwoIcon boxSize={40} />
    </VStack>
  );
};
export default RequestErrorComp;
