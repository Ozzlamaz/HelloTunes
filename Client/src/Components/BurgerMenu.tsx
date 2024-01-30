import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  HStack,
  VStack,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { ReactNode, useRef } from "react";

interface Props {
  children: ReactNode;
}

const BurgerMenu = ({ children }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  return (
    <>
      <HStack
        display={["none", "none", "flex", "flex"]}
        spacing={{ md: 5, lg: 10, xl: 20 }}
        direction="row"
      >
        {children}
      </HStack>
      <IconButton
        display={["block", "block", "none", "none"]}
        ref={btnRef}
        onClick={onOpen}
        aria-label="Open Menu"
        icon={<HamburgerIcon />}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <VStack spacing={5}>{children}</VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
export default BurgerMenu;
