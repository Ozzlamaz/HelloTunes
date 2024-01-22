import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import apiClient from "../services/apiClient";

const AlbumGrid = () => {
  useEffect(() => {
    apiClient.get("authorize");
  }, []);
  return (
    <Container>
      <Row>
        <Col>AlbumGrid</Col>
      </Row>
    </Container>
  );
};
export default AlbumGrid;
