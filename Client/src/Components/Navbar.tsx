import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Damn-Tunes-Logo.webp";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} paddingY={5}>
      <Image w={100} src={logo} />
      <HStack>
        <SearchInput />
      </HStack>
    </HStack>
  );
};

export default Navbar;
