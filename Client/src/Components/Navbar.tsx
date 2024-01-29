import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Damn-Tunes-Logo.webp";
import SearchInput from "./SearchInput";
import { NavLink } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = () => {
  return (
    <HStack spacing={20} paddingY={5}>
      <Image w={100} src={logo} />
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/author"}>Author</NavLink>
      <SearchInput />
      <ThemeSwitch />
    </HStack>
  );
};

export default Navbar;
