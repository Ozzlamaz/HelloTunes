import { Album } from "../interfaces/Album";
import { Track } from "../interfaces/Track";
import { Artist } from "../interfaces/Artist";
import { SimpleGrid } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  items?: (Album | Artist | Track)[];
  list?: boolean;
  height?: string;
  overflowY?: any;
  paddingRight?: number;
}

const ItemGrid = ({
  children,
  list,
  height,
  paddingRight,
  overflowY = "visible",
}: Props) => {
  return (
    <SimpleGrid
      height={height}
      overflowY={overflowY}
      spacing={5}
      paddingRight={paddingRight}
      columns={list ? 1 : { base: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
    >
      {children}
    </SimpleGrid>
  );
};

export default ItemGrid;
