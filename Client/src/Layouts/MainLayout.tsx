import { Outlet } from "react-router-dom";
import NavbarComponent from "../Components/NavbarComponent";
import { Col, Container, Row } from "react-bootstrap";
import Aside from "../Components/Aside";

const MainLayout = () => {
  return (
    <>
      <NavbarComponent />
      <Container>
        <Row>
          <Col sm="2">
            <Aside />
          </Col>
          <Col sm="10">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default MainLayout;
