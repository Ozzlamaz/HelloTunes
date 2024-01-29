import { Outlet } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";

const MainLayout = () => {
  return (
    <Container maxWidth="8xl">
      <Navbar />
      <Outlet />
    </Container>
  );
};
export default MainLayout;
