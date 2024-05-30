import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo/logo.webp";
import SearchInput from "./SearchInput";
import { NavLink } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";
import BurgerMenu from "./BurgerMenu";

const Navbar = () => {
  return (
    <HStack marginY={5} justifyContent={"space-between"}>
      <NavLink to={"/"}>
        <Image w={125} src={logo} />
      </NavLink>
      <BurgerMenu>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/author"}>Author</NavLink>
        <SearchInput />
        <ThemeSwitch />
      </BurgerMenu>
    </HStack>
  );
};

export default Navbar;
