import { SimpleGrid } from "@chakra-ui/react";
import SkeletonCardBody from "./SkeletonCardBody";

interface Props {
  size: number;
  tracks?: boolean;
}

const SkeletonGrid = ({ size, tracks }: Props) => {
  const skelArray = Array.from({ length: size }, (_, index) => index + 1);
  return (
    <SimpleGrid
      spacing={5}
      columns={tracks ? 1 : { sm: 1, md: 3, lg: 4, xl: 5 }}
    >
      {skelArray.map((instance) => (
        <SkeletonCardBody tracks={tracks && true} key={instance} />
      ))}
    </SimpleGrid>
  );
};
export default SkeletonGrid;
