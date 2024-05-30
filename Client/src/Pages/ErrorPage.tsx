import { VStack } from "@chakra-ui/react";
import Section from "../Components/Containers/Section";
import Heading1 from "../Components/Headings/Heading1";
import { WarningTwoIcon } from "@chakra-ui/icons";

interface Props {
  error?: string;
}

const ErrorPage = ({ error = "This Page Does Not Exist" }: Props) => {
  return (
    <Section>
      <VStack height={"70vh"} justifyContent={"center"}>
        <Heading1 isLoading={false}>{error}</Heading1>
        <WarningTwoIcon boxSize={40} />
      </VStack>
    </Section>
  );
};
export default ErrorPage;
