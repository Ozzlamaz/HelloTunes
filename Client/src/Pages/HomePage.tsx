import { Box } from "@chakra-ui/react";
import AlbumsCarousel from "../Components/AlbumsCarousel";
import useItems from "../hooks/useItems";
import ItemGrid from "../Components/ItemGrid";

const HomePage = () => {
  const params = { q: "tag:new", type: "album" };
  const { data } = useItems(params);

  return (
    <Box>
      <AlbumsCarousel data={data} />
      <ItemGrid items={data?.albums?.items} />
    </Box>
  );
};
export default HomePage;
