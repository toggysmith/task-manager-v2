import {
  Modal,
  IconButton,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ButtonGroup,
  Button,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { FaTwitter, FaGithub } from "react-icons/fa";

export default function InfoButton() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton onClick={onOpen} icon={<InfoIcon />} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Information</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack align="left" spacing={4}>
              <Text>Created by Toggy Smith.</Text>
              <ButtonGroup size="xs">
                <Button
                  as="a"
                  href="https://github.com/toggysmith"
                  target="_blank"
                  leftIcon={<FaGithub />}
                >
                  GitHub
                </Button>
                <Button
                  as="a"
                  href="https://twitter.com/toggysmith"
                  target="_blank"
                  leftIcon={<FaTwitter />}
                >
                  Twitter
                </Button>
              </ButtonGroup>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
