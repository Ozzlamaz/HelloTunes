import { Card, CardBody } from "@chakra-ui/card";
import { Album } from "../interfaces/Album";
import { Artist } from "../interfaces/Artist";
import { Track } from "../interfaces/Track";
import {
  Box,
  Image,
  VStack,
  Text,
  Slide,
  useDisclosure,
} from "@chakra-ui/react";
import getImages from "../services/getImages";
import CardContainer from "./CardContainer";

interface Props {
  item: Album | Artist | Track;
}

const ItemCard = ({ item }: Props) => {
  const { isOpen, onToggle } = useDisclosure();
  const { name, type, images } = item;

  return (
    <CardContainer>
      <Card>
        <CardBody>
          <VStack>
            <Image borderRadius={5} src={getImages(images)} />
          </VStack>
        </CardBody>
      </Card>
      <Box
        position="absolute"
        left={0}
        right={0}
        top={0}
        bottom={0}
        bgGradient={"linear(to bottom,rgba(0, 0, 0, 0.5), transparent )"}
        opacity={0}
        transition="opacity 0.3s ease-in-out"
        _hover={{ opacity: 1 }}
        onMouseEnter={onToggle}
        onMouseLeave={onToggle}
      >
        <Slide direction="top" in={isOpen} style={{ zIndex: 10 }}>
          <VStack padding={5}>
            <Text>{name}</Text>
            <Text>{type}</Text>
          </VStack>
        </Slide>
      </Box>
    </CardContainer>
  );
};
export default ItemCard;
