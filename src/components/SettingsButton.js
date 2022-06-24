import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";

export default function SettingsButton() {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<SettingsIcon />}
        aria-label="Settings"
        variant="solid"
      />
      <MenuList>
        <MenuItem>Clear all...</MenuItem>
      </MenuList>
    </Menu>
  );
}
