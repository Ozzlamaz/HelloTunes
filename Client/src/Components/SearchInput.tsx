import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

const SearchInput = () => {
  return (
    <form>
      <InputGroup>
        <InputLeftElement children={<SearchIcon />} />
        <Input borderRadius={20} type="text" placeholder="Search Tracks..." />
      </InputGroup>
    </form>
  );
};
export default SearchInput;
