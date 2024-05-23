import { Card, useColorMode, useMediaQuery, useTheme } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  imageSrc?: string;
}

const DetailsCard = ({ children, imageSrc }: Props) => {
  const theme = useTheme();
  const { colorMode } = useColorMode();
  const [largerThan768] = useMediaQuery("(min-width: 768px)");

  const gradient = {
    color:
      colorMode === "light"
        ? `${theme.colors.whiteAlpha[900]}, ${theme.colors.whiteAlpha[500]}`
        : `${theme.colors.blackAlpha[900]}, ${theme.colors.blackAlpha[500]}`,
    direction: largerThan768 ? "to right" : "to top",
  };

  return (
    <Card
      boxShadow={"lg"}
      direction={{ base: "column", md: "row" }}
      // backgroundColor={"blackAlpha.50"}
      backgroundImage={`linear-gradient(${gradient.direction}, ${gradient.color}) , url(${imageSrc})`}
      bgSize="cover"
      bgRepeat={"no-repeat"}
      bgPosition="center"
    >
      {children}
    </Card>
  );
};
export default DetailsCard;
