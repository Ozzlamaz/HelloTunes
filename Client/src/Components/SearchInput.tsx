import { SearchIcon } from "@chakra-ui/icons";
import {
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const navigate = useNavigate();
  // const setQuery = useFilterQueryStore((s) => s.setQuery);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (!inputValue) return;
    const debounceTimer = setTimeout(() => {
      navigate(`search/${inputValue}`);
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [inputValue]);

  return (
    <FormControl>
      <InputGroup>
        <InputLeftElement children={<SearchIcon />} />
        <Input
          value={inputValue}
          borderRadius={20}
          type="text"
          placeholder="Seach anything..."
          onChange={(e) => setInputValue(e.target.value)}
        />
      </InputGroup>
    </FormControl>
  );
};
export default SearchInput;
