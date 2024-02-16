import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, HStack, IconButton } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { useEffect, useState } from "react";

interface Props {
  children?: ReactElement[];
}

function Carousel({ children = [] }: Props) {
  const [index, setIndex] = useState(0);

  let slideTimeout: number;

  useEffect(() => {
    slideTimeout = setTimeout(() => {
      nextSlide();
    }, 5000);
  }, [index]);

  const nextSlide = () => {
    clearTimeout(slideTimeout);
    if (index == children.length - 1) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
  };

  const prevSlide = () => {
    clearTimeout(slideTimeout);
    if (index == 0) {
      setIndex(children.length - 1);
      return;
    }
    setIndex(index - 1);
  };

  return (
    <HStack
      marginX={"auto"}
      gap={0}
      borderRadius={20}
      overflow={"hidden"}
      position={"relative"}
    >
      {React.Children.map(children, (child, childIndex) => {
        return (
          <Box
            transition={"all"}
            transitionDuration={"500ms"}
            opacity={childIndex === index ? 100 : 0}
            flex={"0 0 100%"}
            transform={`translateX(${-index * 100}%)`}
          >
            {React.cloneElement(child, {
              marginX: "auto",
            })}
          </Box>
        );
      })}
      <IconButton
        aria-label="slider-previous"
        position={"absolute"}
        onClick={prevSlide}
        top={"50%"}
        icon={<ChevronLeftIcon />}
      />
      <IconButton
        aria-label="slider-next"
        position={"absolute"}
        onClick={nextSlide}
        top={"50%"}
        right={"0"}
        icon={<ChevronRightIcon />}
      />
    </HStack>
  );
}

export default Carousel;
