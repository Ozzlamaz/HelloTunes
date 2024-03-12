import { Box } from "@chakra-ui/react";
import AlbumsCarousel from "../Components/AlbumsCarousel";
import useItems from "../hooks/useItems";

const HomePage = () => {
  const params = { q: "tag:new", type: "album" };
  const { data } = useItems(params);

  return (
    <Box marginY={5}>
      <AlbumsCarousel data={data} />
    </Box>
  );
};

export default HomePage;
