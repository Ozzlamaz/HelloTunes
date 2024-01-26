import { Outlet } from "react-router-dom";
import NavbarComponent from "../Components/NavbarComponent";
import { Col, Container, Row } from "react-bootstrap";
import Aside from "../Components/Aside";
import { useEffect } from "react";
import { apiClient } from "../services/apiClient";

const MainLayout = () => {
  useEffect(() => {
    apiClient
      .get("/albums/4aawyAB9vmqN3uQ7FjRGTy")
      .then((res) => console.log(res));
  }, []);
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
