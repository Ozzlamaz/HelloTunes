import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import useNewReleases from "../hooks/useNewReleases";
import getImages from "../services/getImages";

const ItemGrid = () => {
  const { data } = useNewReleases();
  return (
    <SimpleGrid columns={{ sm: 1, md: 3, lg: 4, xl: 5 }} textAlign={"center"}>
      {data?.albums?.items.map((item) => (
        <Box>
          <Image margin={"auto"} src={getImages(item.images)} />
        </Box>
      ))}
    </SimpleGrid>
  );
};
export default ItemGrid;
