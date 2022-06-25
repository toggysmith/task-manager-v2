import {
  Box,
  Heading,
  Text,
  HStack,
  Spacer,
  ButtonGroup,
  IconButton,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";

export default function TaskCard({
  title,
  description,
  isImportant,
  id,
  removeTask,
}) {
  const shadowWeight = useColorModeValue("sm", "lg");
  const bgColor = useColorModeValue("gray.300", "gray.600");

  return (
    <Box
      as={motion.div}
      background={bgColor}
      borderRadius="lg"
      padding={4}
      shadow={shadowWeight}
      whileHover={{ scale: 1.01 }}
    >
      <HStack align="top">
        <Box>
          {isImportant ? <Badge colorScheme="red">IMPORTANT</Badge> : null}
          <Heading size="lg">{title}</Heading>
          <Text whiteSpace="pre-wrap">{description}</Text>
        </Box>
        <Spacer />
        <IconButton icon={<FaTrash />} onClick={() => removeTask(id)} />
      </HStack>
    </Box>
  );
}
