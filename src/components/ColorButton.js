import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export default function ColorButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  const icon = useColorModeValue(<MoonIcon />, <SunIcon />);

  return (
    <IconButton
      aria-label="Toggle light/dark mode"
      icon={icon}
      onClick={toggleColorMode}
    >
      Toggle
    </IconButton>
  );
}
