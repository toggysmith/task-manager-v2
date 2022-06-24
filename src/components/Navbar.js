import {
  Flex,
  Spacer,
  Text,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import ColorButton from "./ColorButton";
import InfoButton from "./InfoButton";

export default function Navbar() {
  const bgColor = useColorModeValue("white", "gray.700");

  return (
    <Flex padding={4} background={bgColor} alignItems="center" shadow="md">
      <Text fontSize="2xl" fontWeight="bold">
        Task Manager
      </Text>
      <Spacer />
      <HStack spacing={2}>
        <ColorButton />
        <InfoButton />
      </HStack>
    </Flex>
  );
}
