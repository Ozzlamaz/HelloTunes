import { Container, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Damn-Tunes-Logo.webp";
import SearchInput from "./SearchInput";
import { NavLink } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";
import BurgerMenu from "./BurgerMenu";

const Navbar = () => {
  return (
    <Container maxWidth={"8xl"}>
      <HStack paddingY={5} justifyContent={"space-between"}>
        <Image w={125} src={logo} />
        <BurgerMenu>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/author"}>Author</NavLink>
          <SearchInput />
          <ThemeSwitch />
        </BurgerMenu>
      </HStack>
    </Container>
  );
};

export default Navbar;
