import { SearchIcon } from "@chakra-ui/icons";
import {
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

const SearchInput = () => {
  return (
    <FormControl>
      <form>
        <InputGroup>
          <InputLeftElement children={<SearchIcon />} />
          <Input borderRadius={20} type="text" placeholder="Search Tracks..." />
        </InputGroup>
      </form>
    </FormControl>
  );
};
export default SearchInput;
