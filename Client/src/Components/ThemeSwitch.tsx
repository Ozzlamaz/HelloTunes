import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { HStack, Switch, useColorMode } from "@chakra-ui/react";

const ThemeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <SunIcon color={colorMode === "dark" ? "grey" : undefined} />
      <Switch
        colorScheme="blue"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <MoonIcon color={colorMode === "light" ? "grey" : undefined} />
    </HStack>
  );
};
export default ThemeSwitch;
