import { Outlet } from "react-router-dom";
import NavbarComponent from "../Components/NavbarComponent";
import { Container } from "react-bootstrap";

const MainLayout = () => {
  return (
    <>
      <NavbarComponent />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
export default MainLayout;
