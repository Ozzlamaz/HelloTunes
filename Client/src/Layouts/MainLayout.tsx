import Navbar from "../Components/Navbar";
import { Container } from "@chakra-ui/react";
import ItemGrid from "../Components/ItemGrid";

const MainLayout = () => {
  return (
    <Container maxWidth="8xl">
      <Navbar />
      <ItemGrid />
    </Container>
  );
};
export default MainLayout;
