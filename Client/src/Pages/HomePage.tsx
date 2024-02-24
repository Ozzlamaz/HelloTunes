import { Box } from "@chakra-ui/react";
import AlbumsCarousel from "../Components/AlbumsCarousel";
import useFilterQueryStore from "../filterquery/store";
import useItems from "../hooks/useItems";
import AlbumGrid from "../Components/AlbumGrid";

const HomePage = () => {
  const filterQuery = useFilterQueryStore((s) => s.filterQuery);
  const { data } = useItems(filterQuery);
  return (
    <Box>
      <AlbumsCarousel data={data} />
      <AlbumGrid data={data} />
    </Box>
  );
};
export default HomePage;
