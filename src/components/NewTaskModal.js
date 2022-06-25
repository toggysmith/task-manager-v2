import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import TaskDetailsForm from "./TaskDetailsForm";

export default function NewTaskModal({ addTask, isOpen, onOpen, onClose }) {
  const handleAddTask = (data) => {
    let { title, description, isImportant } = data;

    onClose();

    addTask(title, description, isImportant, Date.now());
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add a task...</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <TaskDetailsForm handleActualSubmit={handleAddTask} />
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </Modal>
  );
}
