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
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export default function AddTaskCard({ addTask }) {
  const bgColor = useColorModeValue("gray.300", "gray.600");

  const { register, handleSubmit } = useForm();

  const handleAddTask = (data) => {
    let { title, description, isImportant } = data;

    addTask(title, description, isImportant, Date.now());
  };

  return (
    <Box padding={4} borderRadius="md" background={bgColor}>
      <form onSubmit={handleSubmit((data) => handleAddTask(data))}>
        <FormControl isRequired>
          <FormLabel>Title</FormLabel>
          <Input {...register("title")} placeholder="Title" />
        </FormControl>
        <FormControl marginTop={6}>
          <FormLabel>Description</FormLabel>
          <Textarea
            {...register("description")}
            placeholder="Description"
            resize="none"
          />
        </FormControl>
        <FormControl marginTop={6}>
          <Checkbox {...register("isImportant")} defaultChecked>
            Mark as important
          </Checkbox>
        </FormControl>

        <Button width="full" type="submit" marginTop={6}>
          Add
        </Button>
      </form>
    </Box>
  );
}
