import { Box } from "@chakra-ui/react";
import AlbumsCarousel from "../Components/AlbumsCarousel";
import useFilterQueryStore from "../filterquery/store";
import useItems from "../hooks/useItems";
import { useEffect } from "react";
import ItemGrid from "../Components/ItemGrid";

const HomePage = () => {
  const filterQuery = useFilterQueryStore((s) => s.filterQuery);
  const setQuery = useFilterQueryStore((s) => s.setQuery);
  const { data } = useItems(filterQuery);

  useEffect(() => {
    setQuery("tag:new");
  }, []);

  return (
    <Box>
      <AlbumsCarousel data={data} />
      <ItemGrid items={data?.albums?.items} />
    </Box>
  );
};
export default HomePage;
