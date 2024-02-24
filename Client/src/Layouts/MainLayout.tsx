import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { Container } from "@chakra-ui/layout";

const MainLayout = () => {
  return (
    <Container maxW="8xl" marginY={5}>
      <Navbar />
      <Outlet />
    </Container>
  );
};
export default MainLayout;
