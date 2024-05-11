import { Outlet, useParams } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { Container } from "@chakra-ui/layout";
import TypeFilter from "../Components/TypeFilter/TypeFilter";
import ScrollToTop from "../helpers/ScrollToTop";

const MainLayout = () => {
  const { q } = useParams();
  return (
    <>
      <ScrollToTop />
      <Container maxW="8xl" marginY={10}>
        <Navbar />
        {q && <TypeFilter />}
        <Outlet />
      </Container>
    </>
  );
};
export default MainLayout;
