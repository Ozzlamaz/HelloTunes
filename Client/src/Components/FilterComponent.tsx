import { HStack } from "@chakra-ui/react";
import TypeFilter from "./TypeFilter";

const FilterComponent = () => {
  return (
    <HStack justifyContent={"center"} paddingX={6} marginY={5}>
      <TypeFilter />
    </HStack>
  );
};
export default FilterComponent;
