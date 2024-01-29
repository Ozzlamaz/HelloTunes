import { Col, Image, Row } from "react-bootstrap";
import useNewReleases from "../hooks/useNewReleases";
import getImages from "../services/getImages";

const AlbumGrid = () => {
  const { data } = useNewReleases();
  return (
    <Row>
      {data?.albums?.items.map((item) => (
        <Col
          className="d-flex justify-content-center col-vertical-margin"
          lg={4}
          xl={4}
          xxl={3}
          key={item.id}
        >
          <Image src={getImages(item.images)} />
        </Col>
      ))}
    </Row>
  );
};
export default AlbumGrid;
