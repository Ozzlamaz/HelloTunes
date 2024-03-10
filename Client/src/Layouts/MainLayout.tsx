import { Outlet, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { Container } from "@chakra-ui/layout";
import TypeFilter from "../Components/TypeFilter";

const MainLayout = () => {
  const { q } = useParams();
  return (
    <Container maxW="8xl" marginY={5}>
      <Navbar />
      {q && <TypeFilter />}
      <Outlet />
    </Container>
  );
};
export default MainLayout;
