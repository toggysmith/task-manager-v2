import {
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export default function TaskDetailsForm({ handleActualSubmit }) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    reset();
    handleActualSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
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
  );
}
