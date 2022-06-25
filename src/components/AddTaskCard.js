import { useState } from "react";
import {
  Box,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

import NewTaskModal from "./NewTaskModal";

export default function AddTaskCard({ addTask }) {
  const bgColor = useColorModeValue("gray.300", "gray.600");

  const { register, handleSubmit, reset } = useForm();

  const handleAddTask = (data) => {
    let { title, description, isImportant } = data;

    addTask(title, description, isImportant, Date.now());
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Add</Button>

      <NewTaskModal
        addTask={addTask}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      />
    </>
  );
}
